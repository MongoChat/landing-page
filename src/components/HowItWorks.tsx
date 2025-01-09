import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";

export default function HowItWorks() {
  const data = [
    {
      title: "Step 1",
      content: (
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>
              <Avatar>
                <AvatarFallback className="bg-green-600 text-white">
                  1
                </AvatarFallback>
              </Avatar>
              <p className="py-5">Connect Your Database</p>
            </CardTitle>
            <CardDescription>
              Simply provide your MongoDB connection string, and we'll handle
              the rest. Your data remains secure and private.
            </CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      ),
    },
    {
      title: "Step 2",
      content: (
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>
              <Avatar>
                <AvatarFallback className="bg-green-600 text-white">
                  2
                </AvatarFallback>
              </Avatar>
              <p className="py-5">Ask Questions Naturally</p>
            </CardTitle>
            <CardDescription>
              Type your questions in plain English. Our AI understands context
              and converts them to precise database queries.
            </CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      ),
    },
    {
      title: "Step 3",
      content: (
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>
              <Avatar>
                <AvatarFallback className="bg-green-600 text-white">
                  3
                </AvatarFallback>
              </Avatar>
              <p className="py-5">Get Instant Insights</p>
            </CardTitle>
            <CardDescription>
              Receive immediate, accurate responses with visualizations and
              actionable insights from your data.
            </CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
