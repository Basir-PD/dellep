export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID ;

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

export const pageview = () => {
  window.fbq("track", "PageView");
};

export const event = (name: string, options: Record<string, unknown> = {}) => {
  window.fbq("track", name, options);
};
