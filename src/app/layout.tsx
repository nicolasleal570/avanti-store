import { Navbar } from "@/components/Navbar/Navbar.component";
import "./globals.css";
import { Inter } from "next/font/google";
import { getCollections } from "@/services/collections.service";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Avanti store",
  description: "Avanti store",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { collections } = await getCollections(10);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar collections={collections.edges.map(({ node }) => node)} />

        {children}
      </body>
    </html>
  );
}
