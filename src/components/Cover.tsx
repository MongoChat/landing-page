"use client";
import { Highlight } from "@/components/ui/hero-highlight";
import coverImg from "../../public/cover.png";
import Image from "next/image";
import { RocketIcon } from "lucide-react";

export default function Cover() {
  return (
    <div className="flex flex-col justify-center items-center p-4" id="home">
      {/* Content Section */}
      <div className="w-full md:w-8/12 dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex flex-col items-center justify-center p-6 rounded-lg  space-y-6 text-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="dark:text-white text-neutral-600 text-4xl font-bold">
          Chat with your MongoDB in <br />
          <Highlight className="text-black dark:text-white">
            Natural Language
          </Highlight>
        </p>
        <p className="text-neutral-600 dark:text-neutral-300">
          Query your MongoDB database using simple conversations. <br />
          No complex queries, just chat naturally and get the data you need.
        </p>
        <div className="flex space-y-4 md:space-y-0 flex-col items-center">
          <button
            onClick={() =>
              window.open("https://mongochatapp.subhamsingh.tech", "_blank")
            }
            className="w-full md:w-60 px-4 py-3 text-green-600 font-semibold backdrop-blur-sm border border-black rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-md transition duration-200 flex flex-row justify-center items-center"
          >
            Try now <RocketIcon className="ml-2" />
          </button>
        </div>
      </div>
      {/* Image Section */}
      <div className="w-full md:w-8/12 mt-8 flex justify-center">
        <Image
          src={coverImg}
          alt="Hero Image"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
