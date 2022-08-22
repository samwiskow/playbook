const PLAY_GRAPHQL_FIELDS = `
    slug
    title
    excerpt
    coverImage {
      url
      contentType
    }
    dateCreated
    author
    suggestedTime
    difficulty
    materialsNeeded
    participants
    processPhase
    subPhase
    content{
      json
    }
`;

const ALL_PLAYS_GRAPHQL_FIELDS = `
    slug
    title
    excerpt
    dateCreated
    difficulty
    processPhase
    subPhase
`;

async function fetchGraphQL(query: string, preview = false) {
  return fetch(
    // `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    `https://graphql.contentful.com/content/v1/spaces/uzgtd6k3nbk7`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : "vwjomBZceZQ8TWdCWvefTI-5MDvq1awP8bCYtwAv8k8"
          // : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  )
    .then((response) => response.json())
    .catch((e) => console.log(e));
}

function extractPlay(fetchResponse: any) {
  return fetchResponse?.data?.playCollection?.items?.[0];
}

function extractPlayEntries(fetchResponse: any) {
  return fetchResponse?.data?.playCollection?.items;
}

export async function getPreviewPlayBySlug(slug: string) {
  const entry = await fetchGraphQL(
    `query {
        playCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${PLAY_GRAPHQL_FIELDS}
        }
      }
    }`,
    true
  );
  return extractPlay(entry);
}

export async function getAllPlaysWithSlug() {
  const entries = await fetchGraphQL(
    `query {
        playCollection(where: { slug_exists: true }, order: dateCreated_DESC) {
        items {
          ${ALL_PLAYS_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return extractPlayEntries(entries);
}

export async function getAllPlaysForHome(preview: boolean) {
  const entries = await fetchGraphQL(
    `query {
        playCollection(order: dateCreated_DESC, preview: ${
          preview ? "true" : "false"
        }) {
        items {
          ${ALL_PLAYS_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  return extractPlayEntries(entries);
}

// export async function getPostAndMorePosts(slug: string, preview: boolean) {
//   const entry = await fetchGraphQL(
//     `query {
//         playCollection(where: { slug: "${slug}" }, preview: ${
//       preview ? "true" : "false"
//     }, limit: 1) {
//         items {
//           ${ALL_PLAYS_GRAPHQL_FIELDS}
//         }
//       }
//     }`,
//     preview
//   );
//   const entries = await fetchGraphQL(
//     `query {
//         playCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
//       preview ? "true" : "false"
//     }, limit: 2) {
//         items {
//           ${POST_GRAPHQL_FIELDS}
//         }
//       }
//     }`,
//     preview
//   );
//   return {
//     post: extractPost(entry),
//     morePosts: extractPostEntries(entries),
//   };
// }
