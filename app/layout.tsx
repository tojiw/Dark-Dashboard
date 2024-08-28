import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });
const dm_sans = DM_Sans({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Dashboard showing sales and orders data in admin view",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`{inter.className}{dm_sans.className} bg-background-dark text-white`}
      >
        {/* <div className="flex min-h-screen overflow-hidden "> */}
      {/* <Sidebar/> */}
      {/* <main className="flex-1 overflow-y-auto"> */}
        {children}

      {/* </main> */}
        {/* </div> */}
      </body>
    </html>
  );
}
