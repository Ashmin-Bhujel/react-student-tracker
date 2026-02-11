import Footer from "../ui/footer";
import Header from "../ui/header";
import { Outlet } from "react-router";

export default function DefaultLayout() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}
