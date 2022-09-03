import type { NextPage } from "next";
import Image from "next/image";
import { trpc } from "../utils/trpc";
import Link from "next/link";
import { getAllPlaysForHome } from "../lib/api";
import React, { Children } from "react";

export async function getStaticProps({ preview = false }) {
  const allPlays =
    (await getAllPlaysForHome(preview)) ?? [];

  const discoveryPlays = allPlays.filter(
    (filteredItem: any) =>
      filteredItem.processPhase.includes("Discovery")
  );
  const definitionPlays = allPlays.filter(
    (filteredItem: any) =>
      filteredItem.processPhase.includes("Definition")
  );
  const designPlays = allPlays.filter((filteredItem: any) =>
    filteredItem.processPhase.includes("Design")
  );
  const deliveryPlays = allPlays.filter(
    (filteredItem: any) =>
      filteredItem.processPhase.includes("Delivery")
  );
  return {
    props: {
      preview,
      allPlays,
      discoveryPlays,
      definitionPlays,
      designPlays,
      deliveryPlays,
    },
  };
}

const discoveryStrings = [
  "Understand your customer's needs",
  "Create a complete picture of your customer",
  "Collect customer feedback",
  "Listen, really listen",
  "Be Objective",
  "Understand the problems",
  "Test your assumptions",
];

const definitionStrings = [
  "Pick the problem you want to solve",
  "Decide on a scope",
  "Be explicit on what you won't do",
  "Create a roadmap",
  "Start crafting your user stories",
  "Define the MVP",
];

const designStrings = [
  "Brainstorm",
  "Show stuff to you customer",
  "Create mockups",
  "Rapid prototyping",
  "Use Fake features",
  "Get your Landing page right",
  "Validate your solution",
];

const deliveryStrings = [
  "Scope and estimate",
  "Refine your backlog & roadmap",
  "Build your product",
  "Iterate",
  "Run retros",
  "Run A/B tests",
  "Launch your GTM plan",
];

type ListItemProps = {
  icon: JSX.Element;
  children: React.ReactNode;
};

const ListItem: React.FC<ListItemProps> = ({
  icon,
  children,
}) => (
  <p className="flex items-center mb-2">
    <span className="p-0.5 w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
      {icon}
    </span>
    {children}
  </p>
);

const Beaker: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
    />
  </svg>
);

const Server: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
    />
  </svg>
);

const Search: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    />
  </svg>
);
const ChatBubble: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
    />
  </svg>
);

type PlaybookProps = {
  preview: boolean;
  allPlays: any[];
  discoveryPlays: any[];
  definitionPlays: any[];
  designPlays: any[];
  deliveryPlays: any[];
};

const Playbook: NextPage<PlaybookProps> = ({
  preview,
  allPlays,
  discoveryPlays,
  definitionPlays,
  designPlays,
  deliveryPlays,
}) => {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              The Stages
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
              These are the 4 stages that we go through as
              part of the product development lifecycle.
              These stages can be concurrent and different
              parts of a team can be working on different
              stages at the same time.
            </p>
            <p className="lg:w-4/5 mx-auto leading-relaxed text-base text-gray-500 lg:mt-6 mt-2">
              However, at the inception of a product
              it&apos;s probably best to think about these
              stages as more of a linear guide to follow as
              you get closer to launching your product. You
              can work through these stages using the
              &apos;just enough&apos; mentality, which is
              covered well in one of my favourite books -
              <a
                href="https://amzn.to/3BdW0F8"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-700"
              >
                Just Enough Research{" "}
              </a>
              by Erika Hall.
            </p>
            {/* <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
              <button className="py-1 px-4 bg-indigo-500 text-white focus:outline-none">
                Monthly
              </button>
              <button className="py-1 px-4 focus:outline-none">
                Annually
              </button>
            </div> */}
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-emerald-500 bg-emerald-500 text-white flex flex-col relative overflow-hidden">
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                  STEP 1
                </h2>
                <h1 className="text-5xl pb-4 mb-4 border-b border-gray-200 leading-none">
                  Discovery
                </h1>
                {discoveryStrings.map((item, index) => (
                  <ListItem key={index} icon={<Search />}>
                    {item}
                  </ListItem>
                ))}

                <p className="text-xs mt-auto border-t-4 border-slate-100 pt-4">
                  Start by figuring out what the right set
                  of problems to solve are.
                </p>
              </div>
            </div>
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full ">
              <div className="h-full p-6 rounded-lg border-2 border-amber-500 bg-amber-500 text-white flex flex-col relative overflow-hidden">
                {/* <span className="bg-emerald-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                  POPULAR
                </span> */}
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                  STEP 2
                </h2>
                <h1 className="text-5xl leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  Definition
                </h1>

                {definitionStrings.map((item, index) => (
                  <ListItem
                    key={index}
                    icon={<ChatBubble />}
                  >
                    {item}
                  </ListItem>
                ))}

                <p className="text-xs mt-auto border-t-4 border-slate-100 pt-4">
                  Then pick one of those problems to focus
                  on
                </p>
              </div>
            </div>
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-rose-500 bg-rose-500 text-white flex flex-col relative overflow-hidden">
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                  STEP 3
                </h2>
                <h1 className="text-5xl leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  Design
                </h1>
                {designStrings.map((item, index) => (
                  <ListItem key={index} icon={<Beaker />}>
                    {item}
                  </ListItem>
                ))}

                <p className="text-xs mt-auto border-t-4 border-slate-100 pt-4">
                  Show your users what the solutions to the
                  problem should look and feel like
                </p>
              </div>
            </div>
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-sky-500 bg-sky-500 text-white flex flex-col relative overflow-hidden">
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                  STEP 4
                </h2>
                <h1 className="text-5xl leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  Delivery
                </h1>
                {deliveryStrings.map((item, index) => (
                  <ListItem key={index} icon={<Server />}>
                    {item}
                  </ListItem>
                ))}

                <p className="text-xs mt-auto border-t-4 border-slate-100 pt-4">
                  Build it, Launch it, Run it, Measure it!
                  Discover the next problem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-12">
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <span className="inline-block py-1 px-2 rounded bg-emerald-50 text-emerald-500 text-xs font-medium tracking-widest">
                Do This
              </span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                Good Patterns
              </h2>
              <p className="leading-relaxed mb-8">
                These things should help you to get on the
                right track
              </p>
              <ul className="list-disc ml-4 mb-6">
                <li>
                  Fewer meetings, fewer abstractions and
                  fewer promises
                </li>
                <li>
                  To launch on time and on budget,
                  don&apos;t throw more time or money at a
                  problem, adjust the scope
                </li>
                <li>
                  Half a released product is better than a
                  perfect idea
                </li>
                <li>“Just-in-time” thinking</li>
                <li>Multi-tasking team members </li>
                <li>
                  Open and blameless culture that makes it
                  easy to highlight issues
                </li>
                <li>
                  <strong>Just enough</strong> documentation
                  which makes clear what we do and includes
                  the people and how we work together
                </li>
                <li>
                  <strong>Just enough</strong> prototyping
                </li>
              </ul>
            </div>
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <span className="inline-block py-1 px-2 rounded bg-red-50 text-red-500 text-xs font-medium tracking-widest">
                Don&apos;t do that!
              </span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                Anti-Patterns
              </h2>
              <p className="leading-relaxed mb-8">
                Watch out for these behaviours that might
                indicate you aren&apos;t getting some of
                this right
              </p>
              <ul className="list-disc ml-4 mb-6">
                <li>
                  Timelines that take months with multiple
                  version numbers
                </li>
                <li>
                  Roadmaps that predict the perfect future
                </li>
                <li>
                  Functional specs and scalability debates
                  over user centred features
                </li>
                <li>Endless options</li>
                <li>Proprietary data formats</li>
                <li>
                  Hiring dozens of employees before
                  you&apos;ve launched
                </li>
                <li>
                  Lots of hypotheticals, instead of
                  definitive questions and answers
                </li>
                <li>
                  Team members doing multilpe conflicting
                  roles
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Playbook;
