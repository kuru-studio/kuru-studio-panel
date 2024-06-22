import Template from "@template";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Template.Authenticate>
      {children}
    </Template.Authenticate>
  )
}
