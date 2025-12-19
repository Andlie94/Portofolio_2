import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
export function Footer() {
  return (
    <footer className="w-full py-4 border-t mt-8 text-center text-sm text-[#349667] bg-transparent">
      <div className="container mx-auto px-4 flex flex-row justify-between items-center">
        <div className="flex-1"></div>
        <div className="flex-1">
          &copy; {new Date().getFullYear()} Andre Lier Strøm. All rights
          reserved.
        </div>
        <div className="flex flex-row gap-4 flex-1 justify-end">
          <a
            href="https://www.facebook.com/profile.php?id=600892412"
            target="black"
            className="cursor-pointer"
          >
            <FaFacebookF className="w-4 h-4 hover:text-[#349667]" />
          </a>
          <a
            href="https://www.linkedin.com/in/andr%C3%A9-str%C3%B8m-55b425134/"
            target="black"
            className="cursor-pointer"
          >
            <FaLinkedinIn className="w-4 h-4 hover:text-[#349667]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
