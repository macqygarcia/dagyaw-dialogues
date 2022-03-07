import { GraphQLClient } from "graphql-request";

export const graphcmsClient = new GraphQLClient(
  import.meta.env.VITE_GRAPHCMS_ENVIRONMENT_ENDPOINT,
  {
    headers: {
      authorization: `Bearer ${import.meta.env.VITE_GRAPHCMS_TOKEN}`,
    },
  }
);

// export const graphcmsClient = new GraphQLClient(
//   (graphqlAPI),
//   {
//     headers: {
//       authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
//     },
//   }
// )
