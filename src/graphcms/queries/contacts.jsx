import { gql } from "graphql-request";
import { graphcmsClient } from "../graphcms";
import { useQuery } from "react-query";

export const useContacts = () => {
  return useQuery("contacts", async () => {
    const { regions } = await graphcmsClient.request(
      gql`
        query {
          regions(orderBy: createdAt_DESC) {
            id
            short
            long
            contacts {
              id
              name
              email
              number
            }
          }
        }
      `
    );
    return regions;
  });
};
