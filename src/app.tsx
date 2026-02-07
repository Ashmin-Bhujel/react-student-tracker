import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <header className="container mx-auto flex flex-col gap-4 py-24">
        <h1 className="text-center text-4xl font-semibold">
          React Student Tracker
        </h1>

        <div className="text-center">
          <Button variant={"outline"}>Button</Button>
        </div>
      </header>
    </main>
  );
}
