import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import DefaultLayout from "./components/layouts/default-layout";
import AddStudents from "./components/pages/add-students";
import EditStudent from "./components/pages/edit-student";
import ListStudents from "./components/pages/list-students";
import NotFound from "./components/pages/not-found";
import StudentDetails from "./components/pages/student-details";
import { Toaster } from "./components/shadcn/ui/sonner";
import StudentsContextProvider from "./contexts/students-context-provider";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Context provider */}
    <StudentsContextProvider>
      {/* Routes */}
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            {/* "/" */}
            <Route index element={<ListStudents />} />

            {/* "/students" and its sub routes */}
            <Route path="students">
              <Route path="add" element={<AddStudents />} />
              <Route path=":id" element={<StudentDetails />} />
              <Route path=":id/edit" element={<EditStudent />} />
            </Route>

            {/* Handle every other routes */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StudentsContextProvider>

    {/* Toaster */}
    <Toaster />
  </StrictMode>,
);
