import React from "react";
import { Box, BoxProps } from "./Box";
import { cn } from "@/lib/utils";

export interface HStackProps
	extends React.HTMLAttributes<HTMLDivElement>,
		BoxProps {}

const HStack = React.forwardRef<HTMLDivElement, HStackProps>(({ className, ...props }) => {
  return (
    <Box
      className={cn('flex flex-row gap-4', className)
      }
      {...props}
    />
  );
});
HStack.displayName = "HStack";

export { HStack };
