import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import DefaultLayout from "./components/layouts/default-layout";
import NotFound from "./components/pages/not-found";
import { Toaster } from "./components/shadcn/ui/sonner";
import ListStudents from "./components/pages/list-students";
import AddStudents from "./components/pages/add-students";
import StudentDetails from "./components/pages/student-details";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          {/* "/" */}
          <Route index element={<ListStudents />} />

          {/* "/students/*" */}
          <Route path="students">
            <Route path="add" element={<AddStudents />} />
            <Route path=":id" element={<StudentDetails />} />
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
