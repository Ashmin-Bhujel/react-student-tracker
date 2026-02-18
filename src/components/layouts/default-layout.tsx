import { Outlet } from "react-router";

import Footer from "../ui/footer";
import Header from "../ui/header";

// Default layout to be used by all routes
export default function DefaultLayout() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}
