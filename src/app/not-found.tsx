import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 text-center">
      <p className="font-playfair text-8xl font-bold text-rose-gold/20 mb-4">404</p>
      <h1 className="font-playfair text-3xl text-dark-text mb-3">Page Not Found</h1>
      <p className="text-sm text-dark-text/60 mb-8 max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className="btn-primary">
        Back to Home
      </Link>
    </div>
  );
}
