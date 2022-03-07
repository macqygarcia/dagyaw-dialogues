import { graphcmsClient } from "../graphcms";
import { gql } from "graphql-request";

export const CreateProposeTopicMutation = async (
  visitorId,
  topic,
  question
) => {
  const mutation = gql`
    mutation CreateFeedbackMutation(
      $visitorId: ID!
      $topic: String!
      $question: String!
    ) {
      createProposedTopic(
        data: {
          visitor: { connect: { id: $visitorId } }
          topic: $topic
          question: $question
        }
      ) {
        id
      }
    }
  `;
  const {
    createProposedTopic: { id },
  } = await graphcmsClient.request(mutation, {
    visitorId,

    topic,
    question,
  });

  return id;
};
