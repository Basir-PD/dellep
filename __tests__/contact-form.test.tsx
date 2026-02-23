import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactForm } from "@/components/contact-form";

// Mock the server action
const mockSubmitContact = vi.fn();
vi.mock("@/app/actions/submit-contact", () => ({
  submitContact: (...args: unknown[]) => mockSubmitContact(...args),
}));

// Mock child components that aren't relevant to form logic
vi.mock("@/components/container", () => ({
  Container: ({ children, ...props }: React.PropsWithChildren) => (
    <div {...props}>{children}</div>
  ),
}));
vi.mock("@/components/heading", () => ({
  Heading: ({ children }: React.PropsWithChildren) => <h2>{children}</h2>,
}));
vi.mock("@/components/subheading", () => ({
  Subheading: ({ children }: React.PropsWithChildren) => <p>{children}</p>,
}));
vi.mock("@/components/button", () => ({
  Button: ({
    children,
    ...props
  }: React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>) => (
    <button {...props}>{children}</button>
  ),
}));
vi.mock("@/components/features/grid", () => ({
  Grid: () => <div data-testid="grid" />,
}));
vi.mock("@/components/features/feature-icon-container", () => ({
  FeatureIconContainer: ({ children }: React.PropsWithChildren) => (
    <div>{children}</div>
  ),
}));

describe("ContactForm", () => {
  const user = userEvent.setup();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders all form fields", () => {
    render(<ContactForm />);

    expect(screen.getByLabelText("Full name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email Address")).toBeInTheDocument();
    expect(screen.getByLabelText("Practice Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Message")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
  });

  it("updates form fields on user input", async () => {
    render(<ContactForm />);

    await user.type(screen.getByLabelText("Full name"), "Dr. Jane Smith");
    await user.type(
      screen.getByLabelText("Email Address"),
      "jane@practice.com"
    );
    await user.type(screen.getByLabelText("Practice Name"), "Wellness Center");
    await user.type(screen.getByLabelText("Message"), "Hello there");

    expect(screen.getByLabelText("Full name")).toHaveValue("Dr. Jane Smith");
    expect(screen.getByLabelText("Email Address")).toHaveValue(
      "jane@practice.com"
    );
    expect(screen.getByLabelText("Practice Name")).toHaveValue(
      "Wellness Center"
    );
    expect(screen.getByLabelText("Message")).toHaveValue("Hello there");
  });

  it("submits the form with correct data", async () => {
    mockSubmitContact.mockResolvedValue({ success: true });
    render(<ContactForm />);

    await user.type(screen.getByLabelText("Full name"), "Dr. Jane Smith");
    await user.type(
      screen.getByLabelText("Email Address"),
      "jane@practice.com"
    );
    await user.type(screen.getByLabelText("Practice Name"), "Wellness Center");
    await user.type(screen.getByLabelText("Message"), "I need help");
    await user.click(screen.getByRole("button", { name: "Submit" }));

    await waitFor(() => {
      expect(mockSubmitContact).toHaveBeenCalledWith({
        full_name: "Dr. Jane Smith",
        email: "jane@practice.com",
        practice_name: "Wellness Center",
        message: "I need help",
      });
    });
  });

  it("shows success message after successful submission", async () => {
    mockSubmitContact.mockResolvedValue({ success: true });
    render(<ContactForm />);

    await user.type(screen.getByLabelText("Full name"), "Dr. Jane Smith");
    await user.type(
      screen.getByLabelText("Email Address"),
      "jane@practice.com"
    );
    await user.click(screen.getByRole("button", { name: "Submit" }));

    await waitFor(() => {
      expect(screen.getByText("Message sent!")).toBeInTheDocument();
    });
    expect(
      screen.getByText("We'll get back to you within 24 hours.")
    ).toBeInTheDocument();
  });

  it("shows 'Send another message' button after success and resets form", async () => {
    mockSubmitContact.mockResolvedValue({ success: true });
    render(<ContactForm />);

    await user.type(screen.getByLabelText("Full name"), "Dr. Jane Smith");
    await user.type(
      screen.getByLabelText("Email Address"),
      "jane@practice.com"
    );
    await user.click(screen.getByRole("button", { name: "Submit" }));

    await waitFor(() => {
      expect(screen.getByText("Send another message")).toBeInTheDocument();
    });

    await user.click(screen.getByText("Send another message"));

    expect(screen.getByLabelText("Full name")).toHaveValue("");
    expect(screen.getByLabelText("Email Address")).toHaveValue("");
  });

  it("does not submit when required fields are empty", async () => {
    render(<ContactForm />);

    await user.click(screen.getByRole("button", { name: "Submit" }));

    expect(mockSubmitContact).not.toHaveBeenCalled();
  });

  it("does not submit with only name filled (missing email)", async () => {
    render(<ContactForm />);

    await user.type(screen.getByLabelText("Full name"), "Dr. Jane Smith");
    await user.click(screen.getByRole("button", { name: "Submit" }));

    expect(mockSubmitContact).not.toHaveBeenCalled();
  });

  it("shows 'Sending...' while submitting", async () => {
    let resolveSubmit: (value: { success: boolean }) => void;
    mockSubmitContact.mockImplementation(
      () =>
        new Promise((resolve) => {
          resolveSubmit = resolve;
        })
    );
    render(<ContactForm />);

    await user.type(screen.getByLabelText("Full name"), "Dr. Jane Smith");
    await user.type(
      screen.getByLabelText("Email Address"),
      "jane@practice.com"
    );
    await user.click(screen.getByRole("button", { name: "Submit" }));

    expect(screen.getByRole("button", { name: "Sending..." })).toBeDisabled();

    resolveSubmit!({ success: true });

    await waitFor(() => {
      expect(screen.getByText("Message sent!")).toBeInTheDocument();
    });
  });

  it("does not show success message on failed submission", async () => {
    mockSubmitContact.mockResolvedValue({
      success: false,
      error: "DB error",
    });
    render(<ContactForm />);

    await user.type(screen.getByLabelText("Full name"), "Dr. Jane Smith");
    await user.type(
      screen.getByLabelText("Email Address"),
      "jane@practice.com"
    );
    await user.click(screen.getByRole("button", { name: "Submit" }));

    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: "Submit" })
      ).toBeInTheDocument();
    });
    expect(screen.queryByText("Message sent!")).not.toBeInTheDocument();
  });

  it("sends optional fields as undefined when empty", async () => {
    mockSubmitContact.mockResolvedValue({ success: true });
    render(<ContactForm />);

    await user.type(screen.getByLabelText("Full name"), "Dr. Jane Smith");
    await user.type(
      screen.getByLabelText("Email Address"),
      "jane@practice.com"
    );
    await user.click(screen.getByRole("button", { name: "Submit" }));

    await waitFor(() => {
      expect(mockSubmitContact).toHaveBeenCalledWith({
        full_name: "Dr. Jane Smith",
        email: "jane@practice.com",
        practice_name: undefined,
        message: undefined,
      });
    });
  });
});
