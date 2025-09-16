import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import "./index.css";

const queryClient = new QueryClient();

// if (import.meta.env.DEV) {
const { worker } = await import("./mocks/browser");
await worker.start({
  serviceWorker: { url: "/mockServiceWorker.js" },
  onUnhandledRequest: "bypass",
});
// }

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
