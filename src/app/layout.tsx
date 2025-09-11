import { Rampart_One } from "next/font/google";

import "./globals.css";

const rampart_One = Rampart_One({
  weight: "400",
  subsets: ["latin"],
})

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={rampart_One.className}>
      <body>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <main>{children}</main>
      </body>
    </html>
  )
}