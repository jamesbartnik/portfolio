import { Suspense } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export function Root() {
  return (
    <div className="flex h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <ScrollRestoration />

        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
