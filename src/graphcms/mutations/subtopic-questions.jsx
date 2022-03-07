import { graphcmsClient } from "../graphcms";
import { gql } from "graphql-request";

export const SubTopicQuestionMutation = async (
  subTopicId,
  question
) => {
  const query = gql`
    mutation CreateSubTopicQuestion(
      $question: String!
      $subTopicId: ID!
    ) {
      createSubTopicQuestion(
        data: {
          question: $question,
          subTopic: {
            connect: { id: $subTopicId }
          }
        }
      ) {
        id
      }
    }
  `;

  const {
    createSubTopicQuestion: { id },
  } = await graphcmsClient.request(query, {
    subTopicId,
    question,
  });

  return id;
};
