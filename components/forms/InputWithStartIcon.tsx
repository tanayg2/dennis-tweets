"use client"
import { Input } from "@/components/ui/input"
import { LucideProps } from "lucide-react"
import { createElement, ForwardRefExoticComponent, RefAttributes } from "react"

type InputWithStartIconProps = {
  id: string
  inputProps?: React.ComponentProps<typeof Input>
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >
}

export default function InputWithStartIcon(props: InputWithStartIconProps) {
  return (
    <div className="relative">
      <Input id={props.id} className="peer ps-9" {...props.inputProps} />
      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
        {createElement(props.icon, {
          size: 16,
          strokeWidth: 2,
          "aria-hidden": true,
        })}
      </div>
    </div>
  )
}
