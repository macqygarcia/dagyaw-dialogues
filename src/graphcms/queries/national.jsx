import { gql } from "graphql-request";
import { graphcmsClient } from "../graphcms";
import { useQuery } from "react-query";

export const useEpisodes = () => {
  return useQuery("episodes", async () => {
    const { regions } = await graphcmsClient.request(
      gql`
        query {
          regions(where: { short: "National" }) {
            episode {
              id
              title
              subTitle
              date
              referenceMaterial {
                name
                fileUrl {
                  url
                }
              }
              pin {
                imageUrl {
                  url
                }
              }
            }
          }
        }
      `
    );
    return regions;
  });
};
