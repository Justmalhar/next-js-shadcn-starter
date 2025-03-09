import * as React from "react"

import { cn } from "@/lib/utils"

export interface CodeProps extends React.HTMLAttributes<HTMLPreElement> {}

const Code = React.forwardRef<HTMLPreElement, CodeProps>(
  ({ className, ...props }, ref) => {
    return (
      <pre
        ref={ref}
        className={cn(
          "font-mono text-sm overflow-auto p-4 rounded-md",
          className
        )}
        {...props}
      />
    )
  }
)
Code.displayName = "Code"

export { Code } 