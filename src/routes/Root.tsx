import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ScrollManager } from "../components/ScrollManager";

export function Root() {
  return (
    <div className="flex h-screen flex-col">
      <ScrollManager /> {/* Handles scroll restoration and hash navigation */}
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
