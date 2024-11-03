import { ReactNode } from "react"

export default function Layout(props: { children: ReactNode }) {
  return <div className="px-2">{props.children}</div>
}
