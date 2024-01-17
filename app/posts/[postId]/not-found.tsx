import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center">
      <p className="mt-10">Post doesn't exist.</p>
      <Link href="/">Back to home</Link>
    </div>
  );
}
