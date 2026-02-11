import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import DefaultLayout from "./components/layouts/default-layout";
import App from "./app";
import NotFound from "./components/pages/not-found";
import "./index.css";
import { Toaster } from "./components/shadcn/ui/sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          {/* "/" */}
          <Route index element={<App />} />

          {/* "/students" */}
          <Route path="students">
            <Route index element={<App />} />
            <Route path="list" element={<App />} />
          </Route>

          {/* "/*" */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>

    {/* Toaster */}
    <Toaster />
  </StrictMode>,
);
