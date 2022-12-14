import type { NextPage } from "next";
import Image from "next/image";
import { trpc } from "../utils/trpc";
import Link from "next/link";
import { getAllPlaysForHome } from "../lib/api";

export async function getStaticProps({ preview = false }) {
  const allPlays =
    (await getAllPlaysForHome(preview)) ?? [];
  return {
    props: { preview, allPlays },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 60, // In seconds
  };
}

type PlayProps = {
  preview: boolean;
  allPlays: any[];
  documentation?: string;
};

const Plays: NextPage<PlayProps> = ({
  preview,
  allPlays,
}) => {
  const hello = trpc.useQuery([
    "example.hello",
    { text: "from tRPC" },
  ]);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Here are the plays
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              In here you&apos;ll find our growing list of
              plays to help you understand the things we can
              do as part of the product management process
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-1"> */}
            <>
              {allPlays.map((play) => {
                const getColor = (processPhase: string) => {
                  switch (processPhase) {
                    case "Discovery":
                      return { background: "#10B981" };
                    case "Definition":
                      return { background: "#F59E0B" };

                    case "Design":
                      return { background: "#F43F5E" };

                    case "Delivery":
                      return { background: "#0EA5E9" };

                    default:
                      return {};
                  }
                };
                const colour = getColor(play.processPhase);

                return (
                  <Link
                    href={{
                      pathname: "plays/[slug]",
                      query: {
                        slug: play.slug,
                      },
                    }}
                    key={play.slug}
                  >
                    <div
                      // Flex
                      className="xl:w-1/4 md:w-1/2 p-2 cursor-pointer"
                      // Grid
                      // className="p-2 cursor-pointer"
                      key={play.slug}
                    >
                      <div
                        className="bg-gray-100 p-6 rounded-lg text-white"
                        style={colour}
                      >
                        <a>
                          {/* <Image
                          className="h-40 rounded w-full object-cover object-center mb-6"
                          src="https://dummyimage.com/720x400"
                          alt="content"
                          width={720}
                          height={400}
                        /> */}
                          <h3 className="tracking-widest text-indigo-800 text-s font-medium title-font">
                            {play.processPhase}
                          </h3>
                          <h2 className="text-lg text-white font-medium title-font mb-4">
                            {play.title}
                          </h2>
                          <p className="leading-relaxed text-base">
                            {play.excerpt}
                          </p>
                        </a>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </>
          </div>
        </div>
      </section>
    </>
  );
};

export default Plays;
