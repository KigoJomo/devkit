import { Loader } from 'lucide-react';

export default function Loading() {
  return (
    <section className="h-screen flex flex-col items-center justify-center">
      <Loader size={96} className="animate-spin stroke-foreground-light/60 stroke-1" />
    </section>
  );
}
