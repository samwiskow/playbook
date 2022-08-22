import { useRouter } from "next/router";
import ErrorPage from "next/error";

import Layout from "../../components/layout";
import {
  getPreviewPlayBySlug,
  getAllPlaysWithSlug,
  getAllPlaysForHome,
} from "../../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import { StringDecoder } from "string_decoder";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { ReactNode } from "react";

type Play = {
  slug: string;
  title: string;
  excerpt: string;
  coverImage?: any;
  dateCreated?: Date;
  author?: string;
  suggestedTime: string;
  diffculty: string;
  materialsNeeded?: string;
  participants?: string[];
  processPhase: string;
  subPhase?: string;
  content: any;
};

type Props = {
  play: Play;
  morePosts: any[];
  preview?: boolean;
};
const nestedMarks = {
  [MARKS.BOLD]: (text: ReactNode) => <strong>{text}</strong>,
  [MARKS.ITALIC]: (text: ReactNode) => <em>{text}</em>,
};

const options = {
  renderMark: nestedMarks,
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
      <p className={"md:p-6 p-2"}>{children}</p>
    ),
    [BLOCKS.OL_LIST]: (node: any, children: any) => (
      <ol className={"list-decimal list-outside md:ml-2 md:p-10 p-4"}>
        {children}
      </ol>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: any) => (
      <h2 className="md:text-4xl font-semibold">{children}</h2>
    ),

    [BLOCKS.LIST_ITEM]: (node: any) => {
      const transformedChildren = documentToReactComponents(node, {
        // renderMark: options.renderMark,
        renderNode: {
          [BLOCKS.PARAGRAPH]: (_node, children) => children,
          [BLOCKS.LIST_ITEM]: (_node, children) => children,
        },
      });
      return <li>{transformedChildren}</li>;
    },
  },
};

enum processPhaseColours {
  Discovery = "bg-emerald-700",
  Definition = "bg-amber-700",
  Design = "bg-rose-700",
  Delivery = "bg-sky-700",
}

const getcolour = (processPhase: string) => {
  switch (processPhase) {
    case "Discovery":
      return processPhaseColours.Discovery;
      break;
    case "Definition":
      return processPhaseColours.Definition;

      break;
    case "Design":
      return processPhaseColours.Design;
      break;
    case "Delivery":
      return processPhaseColours.Delivery;
      break;

    default:
      return processPhaseColours.Discovery;
      break;
  }
};

export default function play({ play, morePosts, preview }: Props) {
  const router = useRouter();
  if (!router.isFallback && !play) {
    return <ErrorPage statusCode={404} />;
  }
  // console.log("play content: ");
  console.log(play.content);
  // console.log(JSON.stringify(play.content));

  const colour = getcolour(play.processPhase);

  return (
    <>
      <section className="text-gray-600 body-font bg-">
        <div className="container px-5 py-24 mx-auto">
          <div
            className={`flex flex-wrap w-full mb-20 underline-offset-2 border-b-4 pb-5 border-indigo-700`}
          >
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                {play?.title}
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              {play?.excerpt}
            </p>
          </div>
          <div className="flex flex-wrap w-full mb-20 md:flex-row flex-col">
            <div className={`md:w-1/4 w-auto ${colour}`}>
              Some other content
            </div>
            <div className="md:w-3/4 w-auto p-6">
              {router.isFallback ? (
                <h1>Loading…</h1>
              ) : (
                <>
                  <article className="mb-32">
                    {play &&
                      documentToReactComponents(play?.content?.json, options)}
                  </article>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const data = await getPreviewPlayBySlug(params.slug);
  // console.log("data from static props");
  // console.log(data);

  return {
    props: {
      play: data ?? null,
      morePosts: data?.morePosts ?? null,
    },
  };
}

export async function getStaticPaths() {
  const allPlays = await getAllPlaysWithSlug();
  // console.log("allPlays from static paths");
  // console.log(allPlays);

  return {
    paths: allPlays?.map(({ slug }: any) => `/plays/${slug}`) ?? [],
    fallback: true,
  };
}
