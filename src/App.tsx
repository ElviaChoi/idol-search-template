import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import IdolSearchPage from "./pages/idolSearch/IdolSearchPage";
import { cn } from "./utils/cn";

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
