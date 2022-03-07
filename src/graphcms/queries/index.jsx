import { gql } from "graphql-request";
import { graphcmsClient } from "../graphcms";
import { useQuery } from "react-query";

export const useRegions = () => {
  return useQuery("regions", async () => {
    const { regions } = await graphcmsClient.request(
      gql`
        query {
          regions(where: { short_not: "National" }) {
            id
            short
          }
        }
      `
    );
    return regions;
  });
};

export const useSectors = () => {
  return useQuery("sectors", async () => {
    const { sectors } = await graphcmsClient.request(
      gql`
        query {
          sectors {
            id
            name
          }
        }
      `
    );
    return sectors;
  });
};

export const useGenders = () => {
  return useQuery("genders", async () => {
    const { __type: genders } = await graphcmsClient.request(
      gql`
        query {
          __type(name: "Gender") {
            enumValues {
              name
            }
          }
        }
      `
    );
    return genders;
  });
};
