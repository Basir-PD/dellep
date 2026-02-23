"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const SkeletonFive = () => {
  return (
    <div className="p-8 overflow-hidden h-full relative flex items-start justify-center">
      <div className="flex absolute inset-0 flex-col group-hover:-translate-y-80 transition duration-200 items-center justify-center">
        <MetricIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </MetricIcon>
        <p className="mt-4 text-sm text-neutral-400 font-bold">
          Cost Per Patient
        </p>
        <div className="flex items-center gap-2 text-xs mt-4">
          <p>Avg. acquisition cost</p>
          <div className="h-1 w-1 rounded-full bg-neutral-400" />
          <p className="text-emerald-400">$47</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="336"
          height="126"
          viewBox="0 0 336 126"
          fill="none"
        >
          <path
            d="M0 1C9.88235 1 9.88235 64.1698 19.7647 64.1698C29.6471 64.1698 29.6471 108.623 39.5294 108.623C49.4118 108.623 49.4118 125 59.2941 125C69.1765 125 69.1765 50.1321 79.0588 50.1321C88.9412 50.1321 88.9412 94.5849 98.8235 94.5849C108.706 94.5849 108.706 73.5283 118.588 73.5283C128.471 73.5283 128.471 85.2264 138.353 85.2264C148.235 85.2264 148.235 61.8302 158.118 61.8302C168 61.8302 168 57.1509 177.882 57.1509C187.765 57.1509 187.765 52.4717 197.647 52.4717C207.529 52.4717 207.529 92.2453 217.412 92.2453C227.294 92.2453 227.294 96.9245 237.176 96.9245C247.059 96.9245 247.059 113.302 256.941 113.302C266.824 113.302 266.824 101.604 276.706 101.604C286.588 101.604 286.588 38.434 296.471 38.434C306.353 38.434 306.353 103.943 316.235 103.943C326.118 103.943 326.118 103.943 336 103.943"
            stroke="#F8F8F8"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <div className="flex absolute inset-0 flex-col translate-y-80 group-hover:translate-y-0 transition duration-200 items-center justify-center">
        <MetricIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
            />
          </svg>
        </MetricIcon>
        <p className="mt-4 text-sm text-neutral-400 font-bold">
          New Patients
        </p>
        <div className="flex items-center gap-2 text-xs mt-4">
          <p>This month</p>
          <div className="h-1 w-1 rounded-full bg-neutral-400" />
          <p className="text-emerald-400">+17</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="336"
          height="126"
          viewBox="0 0 336 126"
          fill="none"
        >
          <path
            d="M0 1C9.88235 1 9.88235 64.1698 19.7647 64.1698C29.6471 64.1698 29.6471 108.623 39.5294 108.623C49.4118 108.623 49.4118 125 59.2941 125C69.1765 125 69.1765 50.1321 79.0588 50.1321C88.9412 50.1321 88.9412 94.5849 98.8235 94.5849C108.706 94.5849 108.706 73.5283 118.588 73.5283C128.471 73.5283 128.471 85.2264 138.353 85.2264C148.235 85.2264 148.235 61.8302 158.118 61.8302C168 61.8302 168 57.1509 177.882 57.1509C187.765 57.1509 187.765 52.4717 197.647 52.4717C207.529 52.4717 207.529 92.2453 217.412 92.2453C227.294 92.2453 227.294 96.9245 237.176 96.9245C247.059 96.9245 247.059 113.302 256.941 113.302C266.824 113.302 266.824 101.604 276.706 101.604C286.588 101.604 286.588 38.434 296.471 38.434C306.353 38.434 306.353 103.943 316.235 103.943C326.118 103.943 326.118 103.943 336 103.943"
            stroke="#F8F8F8"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </div>
  );
};

const MetricIcon = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `h-20 w-20 rounded-lg flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};
