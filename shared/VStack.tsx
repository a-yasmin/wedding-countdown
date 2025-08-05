import React from "react";
import { Box, BoxProps } from "./Box";
import { cn } from "@/lib/utils";

export interface VStackProps
	extends React.HTMLAttributes<HTMLDivElement>,
		BoxProps {}

const VStack = React.forwardRef<HTMLDivElement, VStackProps>(({ className, ...props }) => {
  return (
    <Box
      className={cn('flex flex-col gap-4', className)
      }
      {...props}
    />
  );
});
VStack.displayName = "VStack";

export { VStack };
