import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

import Layout from '../../components/layout';
import {
  getPreviewPlayBySlug,
  getAllPlaysWithSlug,
  getAllPlaysForHome,
} from '../../lib/api';
import Head from 'next/head';
import { CMS_NAME } from '../../lib/constants';
import { StringDecoder } from 'string_decoder';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { ReactNode } from 'react';
import { NextPage } from 'next';

type Play = {
  slug: string;
  title: string;
  excerpt: string;
  coverImage?: any;
  dateCreated?: Date;
  author?: string;
  suggestedTime: string;
  difficulty: string;
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
  [MARKS.BOLD]: (text: ReactNode) => (
    <strong>{text}</strong>
  ),
  [MARKS.ITALIC]: (text: ReactNode) => <em>{text}</em>,
};

const options = {
  renderMark: nestedMarks,
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
      <p className={'md:px-6 p-2'}>{children}</p>
    ),
    [BLOCKS.OL_LIST]: (node: any, children: any) => (
      <ol
        className={
          'list-decimal list-outside md:ml-2 md:px-10 p-4'
        }
      >
        {children}
      </ol>
    ),
    [BLOCKS.UL_LIST]: (node: any, children: any) => (
      <ul
        className={
          'list-disc list-outside md:ml-2 md:px-10 p-4'
        }
      >
        {children}
      </ul>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: any) => (
      <h2 className='md:text-4xl font-semibold'>
        {children}
      </h2>
    ),

    [BLOCKS.LIST_ITEM]: (node: any) => {
      const transformedChildren = documentToReactComponents(
        node,
        {
          // renderMark: options.renderMark,
          renderNode: {
            [BLOCKS.PARAGRAPH]: (_node, children) =>
              children,
            [BLOCKS.LIST_ITEM]: (_node, children) =>
              children,
          },
        }
      );
      return <li>{transformedChildren}</li>;
    },
  },
};

enum processPhaseColours {
  Discovery = 'bg-emerald-700',
  Definition = 'bg-amber-700',
  Design = 'bg-rose-700',
  Delivery = 'bg-sky-700',
}

const getcolour = (processPhase: string) => {
  switch (processPhase) {
    case 'Discovery':
      return processPhaseColours.Discovery;
      break;
    case 'Definition':
      return processPhaseColours.Definition;

      break;
    case 'Design':
      return processPhaseColours.Design;
      break;
    case 'Delivery':
      return processPhaseColours.Delivery;
      break;

    default:
      return processPhaseColours.Discovery;
      break;
  }
};

function DetailItem({ item, content }: any) {
  return (
    <>
      <div className='flex flex-wrap flex-row items-center px-2 overflow-auto'>
        <p className='p-2 font-semibold'>{item} :</p>
        <p className='p-2 '>{content}</p>
      </div>
    </>
  );
}

const Play: NextPage<Props> = ({
  play,
  preview,
}: Props) => {
  const router = useRouter();

  // Display loading until `getStaticProps()` finishes running, and populates the props.
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!router.isFallback && !play) {
    return <ErrorPage statusCode={404} />;
  }
  // console.log("play content: ");
  // console.log(play.content);
  // console.log(play);
  // console.log(JSON.stringify(play.content));

  const colour = getcolour(play.processPhase);
  const particpants = play.participants?.join(', ');

  // map((item, i) => {
  //   if (i === 0) {
  //     return item;
  //   }
  //   return ', ' + item;
  // });

  // console.log(particpants);

  return (
    <>
      <section className='text-gray-600 body-font bg-'>
        <div className='container px-5 py-24 mx-auto'>
          <div
            className={`flex flex-wrap w-full mb-20 underline-offset-2 border-b-4 pb-5 border-indigo-700`}
          >
            <div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
              <h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'>
                {play?.title}
              </h1>
              <div className='h-1 w-20 bg-indigo-500 rounded'></div>
            </div>
            <p className='lg:w-1/2 w-full leading-relaxed text-gray-500'>
              {play?.excerpt}
            </p>
          </div>
          <div className='flex flex-wrap w-full mb-20 lg:flex-row flex-col'>
            <div
              className={`lg:w-1/4 w-auto ${colour} text-white`}
            >
              <div className='text-center my-4 p-2'>
                <h2 className='mb-10 md:text-3xl text-2xl underline underline-offset-8'>
                  Key Info
                </h2>
                <DetailItem
                  item='Process Phase'
                  content={play?.processPhase}
                />
                {play?.subPhase && (
                  <DetailItem
                    item='Sub Phase'
                    content={play?.subPhase}
                  />
                )}
                <DetailItem
                  item='Diffculty'
                  content={play?.difficulty}
                />
                <DetailItem
                  item='Participants'
                  content={particpants}
                />
                <DetailItem
                  item='Suggested Time'
                  content={play?.suggestedTime}
                />
              </div>
            </div>
            <div className='lg:w-3/4 w-auto p-6'>
              {router.isFallback ? (
                <h1>Loading…</h1>
              ) : (
                <>
                  <article className='mb-32'>
                    {play &&
                      documentToReactComponents(
                        play?.content?.json,
                        options
                      )}
                  </article>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

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
    },
  };
}

export async function getStaticPaths() {
  const allPlays = await getAllPlaysWithSlug();
  // console.log("allPlays from static paths");
  // console.log(allPlays);
  // const playsPaths = allPlays?.map(
  //   ({ slug }: any) => `/plays/${slug}`
  // );

  // console.log(playsPaths);

  // Get the paths we want to pre-render based on posts
  const paths = allPlays.map(({ slug }: any) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };

  // return {
  //   paths:
  //     allPlays?.map(({ slug }: any) => `/plays/${slug}`) ??
  //     [],
  //   fallback: true,
  // };
}

export default Play;
