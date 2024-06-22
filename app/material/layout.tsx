import Template from "@template";

export default function MaterialLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Template.Default>
      {children}
    </Template.Default>
  )
}
