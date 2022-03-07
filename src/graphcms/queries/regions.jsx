import { gql } from "graphql-request";
import { graphcmsClient } from "../graphcms";
import { useQuery } from "react-query";

export const useRegions = () => {
  return useQuery("regions", async () => {
    const { regions: national } = await graphcmsClient.request(
      gql`
        query {
          regions(where: { short_not: "National" }) {
            id
            short
            long
            photo {
              url
            }
          }
        }
      `
    );
    return national;
  });
};

export const useRegionEpisodes = (regionId) => {
  return useQuery(["region", regionId], async () => {
    const query = gql`
      query getEpisodes($id: ID!) {
        regions(where: { id: $id }) {
          short
          long
          contacts {
            name
            email
            number
          }
          episode {
            id
            title
            subTitle
            date
            referenceMaterial {
              fileUrl {
                id
              }
            }
          }
        }
      }
    `;

    const data = await graphcmsClient.request(query, { id: regionId });
    return data?.regions[0];
  });
};
