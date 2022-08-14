import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { trpc } from "../utils/trpc";
import play from "../../public/play-example.jpg";
import topHero from "../../public/sports_small.jpg";
import Link from "next/link";

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Head>
        <title>The Product Playbook</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href={"/"}>
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">The Product PlayBook</span>
            </a>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/preview"}>
              <a className="mr-5 hover:text-indigo-500">The Plays</a>
            </Link>
            <Link href={"/preview"}>
              <a className="mr-5 hover:text-indigo-500">Mindsets</a>
            </Link>
            <Link href={"/preview"}>
              <a className="mr-5 hover:text-indigo-500">Case Studies</a>
            </Link>
            <Link href={"/preview"}>
              <a className="mr-5 hover:text-indigo-500">The Playbook</a>
            </Link>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Dark mode coming soon
          </button>
        </div>
      </header>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl font-medium text-gray-900">
              This is the home of the product Playbook
            </h1>
            <h3 className="mb-4">By Wiskow Tech</h3>
            <p className="mb-8 leading-relaxed">
              This site exists to help demistify the product management process.
              There's a bunch of helpful resources contained in this site as
              well as an explanation of the product management process and some
              suggested steps to help you get going.
            </p>
            <p className="mb-8 leading-relaxed">
              This is a passion project from an engineer who really believes in
              building the right things, the right way. Any feedback on this
              site is greatly appreciated and contribuutions are welcome. It's
              early days more features and more content to come.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Contribute
              </button>
              <a
                href={"https://www.buymeacoffee.com/samwiskow"}
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
              src={topHero}
              className="object-cover object-center rounded"
            />
          </div>
        </div>
      </section>

      <section className="body-font bg-indigo-500 text-slate-100">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 md:w-2/5">
            So what's a playbook?
          </h2>
          <div className="md:w-3/5 md:pl-6">
            <p className="leading-relaxed text-base">
              If you’ve ever watched a football game you will see coaches
              holding laminated cards. These cards are a subset of plays from
              the coach’s play book they think may work for the game they are
              playing. This lets them make decisions in the moment. A coach may
              have 1000 plays in the play book but will only use a fraction in a
              game situation.
              <br />
              <br />
              You can think of these this playbook as the same thing; a guide of
              activities you can runu through when you need an idea of what to
              do next.
            </p>
            <div className="flex md:mt-4 mt-6">
              {/* <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">
                Go to the playbook
              </button> */}
              <button className="inline-flex bg-slate-100 text-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-slate-200 rounded">
                Go to the playbook
              </button>
              <a className="text-indigo-500 inline-flex items-center ml-4">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 md:w-2/5">
            Why is that important?
          </h2>
          <div className="md:w-3/5 md:pl-6">
            <p className="leading-relaxed text-base">
              Playbooks allow us to ..
            </p>
            <ul className="list-disc">
              <li>
                Document and teach <strong>how</strong> you build products
              </li>
              <li>Provide shared languauge and understanding</li>
              <li>
                Understand the situations that teams typically face when
                building products, so that we can provide tools and methods that
                have worked well or we believe will woork well based on past
                experiences
              </li>
            </ul>
          </div>
        </div>
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 md:w-2/5">
            And what's a play again?
          </h2>
          <div className="md:w-3/5 md:pl-6">
            <ul className="list-disc">
              <li>
                A discreet set of actions teams can take in particular
                situations that help them gain proogress
              </li>
              <li>
                Plays have repeatable steps that teams can execute against vs.
                general adivce
              </li>
              <li>
                They are not the ONLY way to do something, but they{" "}
                <strong>should be a stong opinion</strong> on how YOU typically
                do something
              </li>
            </ul>
            <div className="flex md:mt-4 mt-6">
              <button className="inline-flex bg-slate-100 text-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-slate-200 rounded">
                Go to the plays
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <Image
            alt="hero"
            src={play}
            className="object-cover object-center rounded"
          />
          <div className="mt-6 text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              The Play Template
            </h1>
            <p className="mb-8 leading-relaxed">
              Having a consistent format to document plays is important for a
              working play book. Plays are similar to recipes where they have a
              standard format (ingredients, procedures, tools) that make it easy
              to read a set of recipes and understand them. Your play book
              should also have a consistent format. While you can create
              whatever template you want, here are some things that you can
              learn from football plays.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Go to the plays
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Go to the playboook
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-indigo-500 text-slate-100 body-font">
        <h1 className="title-font sm:text-6xl text-3xl pt-24 font-medium text-center">
          The Core Steps
        </h1>
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-8 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-2 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-8 h-8 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-700 text-white relative z-10 title-font font-medium text-sm">
              1
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font mb-1 text-xl">
                  Discovery
                </h2>
                <p className="leading-relaxed">
                  What are your <strong>customer's needs</strong>?
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-8 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-2 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-8 h-8 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-700 text-white relative z-10 title-font font-medium text-sm">
              2
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font mb-1 text-xl">
                  Definition
                </h2>
                <p className="leading-relaxed">
                  What <strong>customer need</strong> are we solving for?
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-8 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-2 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-8 h-8 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-700 text-white relative z-10 title-font font-medium text-sm">
              3
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font mb-1 text-xl">Design</h2>
                <p className="leading-relaxed">
                  Which of all the possible solutions is the right solution for
                  our <strong>customers</strong>?
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-8 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-2 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-8 h-8 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-700 text-white relative z-10 title-font font-medium text-sm">
              4
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font  mb-1 text-xl">
                  Delivery
                </h2>
                <p className="leading-relaxed">
                  How do we beset build and launch the chosen solution and
                  measure its impact on <strong>customer experience</strong>?
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-8 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-2 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-8 h-8 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-700 text-white relative z-10 title-font font-medium text-sm">
              5
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font mb-1 text-xl">
                  Review, Repeat
                </h2>
                <p className="leading-relaxed">
                  Did our solution solve the problem? What's the next{" "}
                  <strong>evolution</strong> of the solution?
                </p>
                <p className="leading-relaxed">Sunset / Pivot / Continue</p>
                <p className="leading-relaxed">Look for the next problem</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 
      <div className="pt-6 text-2xl text-blue-500 flex justify-center items-center w-full">
        {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
      </div> */}

      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">The Product Playbook</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">
              Brought to you by Wiskow Tech
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    First Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2022 Sam Wiskow —
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                @samwiskow
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
      <script
        data-name="BMC-Widget"
        data-cfasync="false"
        src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
        data-id="samwiskow"
        data-description="Support me on Buy me a coffee!"
        data-message=""
        data-color="#5F7FFF"
        data-position="Right"
        data-x_margin="18"
        data-y_margin="18"
      ></script>
    </>
  );
};

export default Home;
