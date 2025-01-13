import { Highlight } from "@/components/ui/hero-highlight";
import coverImg from "../../public/cover.png";
import Image from "next/image";
import Waitlist from "./Waitlist";
import { Toaster } from "./ui/toaster";

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
          <Waitlist/>
          <Toaster/>
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
