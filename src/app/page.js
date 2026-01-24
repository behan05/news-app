import Home from "../components/Home";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <Suspense fallback={<div style={{ color: "white" }}>Loading news…</div>}>
      <Home />
    </Suspense>
  );
}
