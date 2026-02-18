import { Link } from "react-router";

import { Button } from "../shadcn/ui/button";

export default function NotFound() {
  return (
    <section className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-24">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-center text-2xl font-semibold">
          Error 404 - Page not Found
        </h2>

        <Button variant={"outline"} asChild>
          <Link to={"/"}>Go to Home</Link>
        </Button>
      </div>
    </section>
  );
}
