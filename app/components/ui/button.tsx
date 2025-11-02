import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "~/lib/utils"
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  TooltipArrow,
} from "~/components/ui/tooltip"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type ButtonBaseProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

// 🔧 Tooltip prop’larını tek bir yerde tanımlayalım (union string’ler)
type TooltipExtras = {
  tooltip?: React.ReactNode
  disableTooltip?: boolean
  tooltipSide?: "top" | "right" | "bottom" | "left"
  tooltipAlign?: "start" | "center" | "end"
  tooltipDelay?: number
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  tooltip,
  disableTooltip,
  tooltipSide = "top",
  tooltipAlign = "center",
  tooltipDelay = 150,
  ...props
}: ButtonBaseProps & TooltipExtras) {
  const Comp = asChild ? Slot : "button"

  const buttonEl = (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )

  if (!tooltip || disableTooltip) {
    return buttonEl
  }

  return (
    <TooltipProvider delayDuration={tooltipDelay}>
      <Tooltip>
        <TooltipTrigger asChild>{buttonEl}</TooltipTrigger>
        <TooltipContent
          side={tooltipSide}
          align={tooltipAlign}
          className="z-50 rounded-md border bg-popover px-2 py-1.5 text-xs text-popover-foreground shadow-md"
        >
          {tooltip}
          <TooltipArrow className="fill-popover" />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export { Button, buttonVariants }
