"use client";
import { useRouter } from "next/navigation";
import { Error } from "../components/ui/Error";

// Error components must be Client components

export default function ErrorPage({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  return (
    <Error error="Quelque chose s'est mal passée !!" reset={reset}>
      <button onClick={() => router.back()}>Retour</button>
    </Error>
  );
}
