import React from "react";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../components/ui/dialog";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div>Create your own photo realistic AI avatars</div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="rounded-full bg-black">
            Create your own AI avatars now!
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Complete authentification</DialogTitle>
            <DialogDescription>
              Two authentification flows are here
            </DialogDescription>
            <div>here is the other content of the dialog</div>
            <DialogFooter>This is dialog footer</DialogFooter>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </main>
  );
}
