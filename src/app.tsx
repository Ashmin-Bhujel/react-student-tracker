import { UserCircle } from "lucide-react";
import { Toaster } from "./components/ui/sonner";
import StudentTracker from "./components/student-tracker";

export default function App() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      {/* Header */}
      <header className="container mx-auto px-4 pt-24">
        <div className="flex items-center gap-4">
          <div>
            <UserCircle className="size-14" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">React Student Tracker</h1>
            <p className="text-muted-foreground">
              A simple student tracker app made using TypeScript, React,
              Tailwind CSS and shadcn/ui.
            </p>
          </div>
        </div>
      </header>

      {/* Student tracker */}
      <StudentTracker />

      {/* Toaster */}
      <Toaster richColors closeButton />
    </main>
  );
}
