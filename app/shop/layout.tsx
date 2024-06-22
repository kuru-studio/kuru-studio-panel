import Template from "@template";

export default function ShopLayout({
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
