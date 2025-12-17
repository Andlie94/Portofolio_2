import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <div className="max-w-md text-xl mb-6 space-y-4">
      <p >Oops! The page you are looking for does not exist.</p>
      <p> Maybe it will be found soon.</p>
      <Link
        href="/"
        className="px-6 py-2 bg-[#ffe564] text-[#8627b5] rounded-lg hover:bg-yellow-200 transition font-semibold"
      >
        Go back home
      </Link>
      </div>
    </div>
  );
}
