"use client";
import React from "react";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";

export default function Home() {
  const [email, setEmail] = React.useState("");

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
          </DialogHeader>
          <form
            onSubmit={(e) => {
              console.log(e);
            }}
            className="flex flex-col space-y-4"
          >
            <Input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Button type="submit" onClick={() => console.log(email)}>
              Verify your email
            </Button>
            Or
            <Button>Sign in with Google</Button>
          </form>
        </DialogContent>
      </Dialog>
    </main>
  );
}
