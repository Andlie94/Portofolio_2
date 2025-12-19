import ProductPage from "@/components/page/detailpage/detail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Andre Lier Strøm - detail Page for each project",
  description: "Welcome to my Portfolio website build with next 16. and tailwind. at this page you will find each of my product based on there id. ",
  authors: [{ name: "Andre Lier Strøm" }],
  keywords: ["Next.js", "React", "Portfolio", "Noroff"],
};

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function Home({ params }: PageProps) {
  return (
    <div>
      <ProductPage params={params} />
    </div>
  );
}
