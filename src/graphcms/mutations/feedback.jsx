import { graphcmsClient } from "../graphcms";
import { gql } from "graphql-request";

export const CreateFeedbackMutation = async (visitorId, content) => {
  const mutation = gql`
    mutation CreateFeedbackMutation($visitorId: ID!, $content: String!) {
      createFeedback(
        data: { visitor: { connect: { id: $visitorId } }, content: $content }
      ) {
        id
      }
    }
  `;
  const {
    createFeedback: { id },
  } = await graphcmsClient.request(mutation, { visitorId, content });

  return id;
};
