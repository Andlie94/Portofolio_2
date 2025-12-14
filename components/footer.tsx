export function Footer() {
  return (
    <footer className="w-full py-4 border-t mt-8 text-center text-sm text-[--foreground]">
      &copy; {new Date().getFullYear()} Andre Lier Strøm. All rights reserved.
    </footer>
  );
}