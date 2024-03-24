import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";

const PS2P = Press_Start_2P({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "M3ter MQTT node",
  description: "Open source execution node for the m3tering protocol",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={PS2P.className}>{children}</body>
    </html>
  );
}
