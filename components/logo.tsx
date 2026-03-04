import { Link } from "next-view-transitions";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4 px-2 py-1 relative z-20"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt="Dellep"
        className="h-8 md:h-12 w-auto"
      />
    </Link>
  );
};