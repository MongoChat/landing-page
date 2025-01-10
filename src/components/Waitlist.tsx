"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { db } from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

interface User {
  name: string;
  email: string;
}

export default function Waitlist() {
  const [userData, setUserData] = useState<User>({ name: "", email: "" });
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false); // State to control the dialog
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    if (userData.name === "" || userData.email === "") {
      setError("Fill all the inputs");
      return;
    }
    if (!validateEmail(userData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      await addDoc(collection(db, "waitlist"), userData);
      toast({
        title: "Awesome! You're on the waitlist 🎉",
        description:
          "You will be the first one to use the product when we launch",
      });

      setIsOpen(false);
    } catch (err) {
      console.error("Error adding to waitlist:", err);
      setError("Failed to add to the waitlist. Try again later.");
    }
  };

  useEffect(() => {
    if (error !== "") {
      const timer = setTimeout(() => {
        setError("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setIsOpen(true)}>Join Waitlist</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-thin">Join our waitlist now</DialogTitle>
        </DialogHeader>
        <DialogDescription></DialogDescription>
        {error && (
          <Alert variant="destructive">
            <AlertTitle>{error}</AlertTitle>
          </Alert>
        )}

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              type="text"
              value={userData.name}
              onChange={handleChange}
              className="col-span-3"
              placeholder="Enter your name"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={userData.email}
              onChange={handleChange}
              className="col-span-3"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleSubmit}>
            Join now
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
