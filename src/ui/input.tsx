import * as React from "react"

import { cn } from "@/src/lib/utils"

function Input({ className, type, label, ...props }: React.ComponentProps<"input"> & { label: string }) {
  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor={props.id} className="text-secondary">
        {label}
      </label>
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground bg-secondary-light border-secondary-light/50 h-9 w-full min-w-0 rounded-md border  px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        {...props}
      />
    </div>

  )
}

export { Input }
