import { Link } from "react-router";
import { Button } from "../shadcn/ui/button";

export default function NotFound() {
  return (
    <section className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-24">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-center text-2xl font-semibold">
          Error 404 - Page not Found
        </h1>

        <Link to={"/"}>
          <Button variant={"outline"}>Go to Home</Button>
        </Link>
      </div>
    </section>
  );
}
