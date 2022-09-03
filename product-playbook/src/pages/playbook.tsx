import type { NextPage } from 'next';
import Image from 'next/image';
import { trpc } from '../utils/trpc';
import Link from 'next/link';
import { getAllPlaysForHome } from '../lib/api';

export async function getStaticProps({ preview = false }) {
  const allPlays =
    (await getAllPlaysForHome(preview)) ?? [];

  const discoveryPlays = allPlays.filter(
    (filteredItem: any) =>
      filteredItem.processPhase.includes('Discovery')
  );
  const definitionPlays = allPlays.filter(
    (filteredItem: any) =>
      filteredItem.processPhase.includes('Definition')
  );
  const designPlays = allPlays.filter((filteredItem: any) =>
    filteredItem.processPhase.includes('Design')
  );
  const deliveryPlays = allPlays.filter(
    (filteredItem: any) =>
      filteredItem.processPhase.includes('Delivery')
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
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='text-center mb-20'>
            <h1 className='sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4'>
              This is the playbook
            </h1>
            <p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto'>
              In here you&apos;ll find our growing list of
              plays to help you understand the things we can
              do as part of the product management process
            </p>
          </div>
          <div className='flex flex-wrap -m-4'>
            <div className='p-4 lg:w-1/4 sm:w-1/2 w-full'>
              <h2 className='font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left'>
                Discovery
              </h2>
              <nav className='flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5'>
                {discoveryPlays &&
                  discoveryPlays.map(
                    (filteredItem: any) => (
                      <Link
                        href={{
                          pathname: 'plays/[slug]',
                          query: {
                            slug: filteredItem.slug,
                          },
                        }}
                        key={filteredItem.slug}
                      >
                        <a>
                          <span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center'>
                            <svg
                              fill='none'
                              stroke='currentColor'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='3'
                              className='w-3 h-3'
                              viewBox='0 0 24 24'
                            >
                              <path d='M20 6L9 17l-5-5'></path>
                            </svg>
                          </span>
                          {filteredItem.title}
                        </a>
                      </Link>
                    )
                  )}
              </nav>
            </div>
            <div className='p-4 lg:w-1/4 sm:w-1/2 w-full'>
              <h2 className='font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left'>
                Definition
              </h2>
              <nav className='flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5'>
                {definitionPlays &&
                  definitionPlays.map(
                    (filteredItem: any) => (
                      <Link
                        href={{
                          pathname: 'plays/[slug]',
                          query: {
                            slug: filteredItem.slug,
                          },
                        }}
                        key={filteredItem.slug}
                      >
                        <a>
                          <span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center'>
                            <svg
                              fill='none'
                              stroke='currentColor'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='3'
                              className='w-3 h-3'
                              viewBox='0 0 24 24'
                            >
                              <path d='M20 6L9 17l-5-5'></path>
                            </svg>
                          </span>
                          {filteredItem.title}
                        </a>
                      </Link>
                    )
                  )}
              </nav>
            </div>
            <div className='p-4 lg:w-1/4 sm:w-1/2 w-full'>
              <h2 className='font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left'>
                Design
              </h2>
              <nav className='flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5'>
                {designPlays &&
                  designPlays.map((filteredItem: any) => (
                    <Link
                      href={{
                        pathname: 'plays/[slug]',
                        query: {
                          slug: filteredItem.slug,
                        },
                      }}
                      key={filteredItem.slug}
                    >
                      <a>
                        <span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center'>
                          <svg
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='3'
                            className='w-3 h-3'
                            viewBox='0 0 24 24'
                          >
                            <path d='M20 6L9 17l-5-5'></path>
                          </svg>
                        </span>
                        {filteredItem.title}
                      </a>
                    </Link>
                  ))}
              </nav>
            </div>
            <div className='p-4 lg:w-1/4 sm:w-1/2 w-full'>
              <h2 className='font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left'>
                Delivery
              </h2>
              <nav className='flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5'>
                {deliveryPlays &&
                  deliveryPlays.map((filteredItem: any) => (
                    <Link
                      href={{
                        pathname: 'plays/[slug]',
                        query: {
                          slug: filteredItem.slug,
                        },
                      }}
                      key={filteredItem.slug}
                    >
                      <a>
                        <span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center'>
                          <svg
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='3'
                            className='w-3 h-3'
                            viewBox='0 0 24 24'
                          >
                            <path d='M20 6L9 17l-5-5'></path>
                          </svg>
                        </span>
                        {filteredItem.title}
                      </a>
                    </Link>
                  ))}
              </nav>
            </div>
          </div>
          <button className='flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
            Button
          </button>
        </div>
      </section>
    </>
  );
};

export default Playbook;
