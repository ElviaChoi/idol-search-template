import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import IdolSearchPage from "./pages/idolSearch/IdolSearchPage";

export default function App() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <main className='flex-grow'>
        <IdolSearchPage />
      </main>
      <Footer />
    </div>
  );
}
