import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="p-5 flex justify-center items-center min-h-screen flex-col gap-4">
      <h1 className="text-5xl max-w-md text-center">Hey welcome to Alpha!</h1>
      <p className="text-xl tracking-tighter">Click down to see magic...</p>
      <button className="bg-green-500 p-2 rounded-xl w-1/2">Click me</button>
    </div>
  );
};

export default page;
