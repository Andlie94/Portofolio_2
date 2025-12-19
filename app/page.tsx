import HomeView from "@/components/page/Ladning/homeView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Andre Lier Strøm - Portfolio Website 2025",
  description: "Welcome to my Portfolio website build with next 16. and tailwind. this is a protofolio for portofolio 2 at Noroff Fagskole Oslo. Here you will find 3 of my projects for mye second year at Noroff.",
  authors: [{ name: "Andre Lier Strøm" }],
  keywords: ["Next.js", "React", "Portfolio", "Noroff"],
};
export default function Home() {
  return (
    <div>
      <HomeView />
    </div>
  );
}