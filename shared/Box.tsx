import React from "react";

export type BoxProps = React.HTMLAttributes<HTMLDivElement>;

const Box = React.forwardRef<HTMLDivElement, BoxProps>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={
        className
      }
      {...props}
    />
  );
});
Box.displayName = "Box";

export { Box };
