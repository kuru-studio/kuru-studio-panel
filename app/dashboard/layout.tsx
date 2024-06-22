import Template from "@template";

export default function DashboardLayout({
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
