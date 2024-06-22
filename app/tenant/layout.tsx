import Template from "@template";

export default function TenantLayout({
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
