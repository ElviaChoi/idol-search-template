import { Header, Footer } from "@/components/layout";
import { IdolSearchPage } from "@/pages/idolSearch";
import { cn } from "@/utils";

export default function App() {
  return (
    <div className={cn('flex min-h-screen flex-col')}>
      <Header />
      <main className={cn('flex-grow')}>
        <IdolSearchPage />
      </main>
      <Footer />
    </div>
  );
}
