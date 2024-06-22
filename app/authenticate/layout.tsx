import Template from "@template";

export default function AuthenticateLayout({
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
