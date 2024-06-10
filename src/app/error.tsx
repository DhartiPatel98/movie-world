"use client";

import { useEffect } from "react";

export default function Error({
  err,
  reset,
}: {
  err: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.log(err);
  }, [err]);

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl">
        Something went wrong. Please try again later.
      </h1>
      <button
        className="text-lg font-bold bg-amber-500 mt-4 py-2 px-3 rounded-lg"
        onClick={reset}
      >
        Try Again
      </button>
    </div>
  );
}
