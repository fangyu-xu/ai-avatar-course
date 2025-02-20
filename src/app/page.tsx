import React from "react";
import { Button } from "../components/ui/button";
import { Dialog } from "../components/ui/dialog";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div>Create your own photo realistic AI avatars</div>
      <Button className="rounded-full bg-black">
        Create your own AI avatars now!
      </Button>
    </main>
  );
}
