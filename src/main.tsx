import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App.tsx";
import { GlobalStyle } from "./globalStyle.tsx";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchIntervalInBackground: false,
      refetchInterval: false,
      refetchOnMount: true,
      staleTime: 3000,
      gcTime: 5000,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <GlobalStyle />
      <ReactQueryDevtools initialIsOpen={false} />

      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
