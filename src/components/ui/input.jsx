import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "w-full py-2 pl-10 pr-3 leading-5 text-input placeholder-[#a0a0a9] bg-black/80 rounded-xl outline-none sm:text-sm transition-colors duration-200 ease-in-out",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
