import Template from "@template";

export default function ModulesLayout({
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
