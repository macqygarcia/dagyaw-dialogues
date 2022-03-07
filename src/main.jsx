import React from "react";
import ReactDOM from "react-dom";
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

import "./index.css";
import Layout from "./pages/Layout";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Layout />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
