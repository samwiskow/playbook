import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { trpc } from "../utils/trpc";
import comingSoon from "../../public/coming_soon.jpg";
import Link from "next/link";

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const Preview: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl font-medium text-gray-900">
              We're working on it ...
            </h1>
            <h3 className="mb-4">By Wiskow Tech</h3>
            <p className="mb-8 leading-relaxed">
              This page is coming soon, we're working hard on bringing it to
              you, check back soon!
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Contribute
              </button>
              <a
                href={"https://www.buymeacoffee.com/samwiskow"}
                rel="noreferrer"
                target="_blank"
              >
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Buy me a coffee
                </button>
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              alt="hero"
              src={comingSoon}
              className="object-cover object-center rounded"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Preview;
