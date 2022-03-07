import { gql } from "graphql-request";
import { graphcmsClient } from "../graphcms";
import { useQuery } from "react-query";

export const useTopics = () => {
  return useQuery("topics", async () => {
    const { topics } = await graphcmsClient.request(
      gql`
        query {
          topics {
            id
            name
            photo {
              url
            }
            subTopics {
              id
              name
            }
          }
        }
      `
    );
    return topics;
  });
};
