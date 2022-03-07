import { graphcmsClient } from "../graphcms";
import { gql } from "graphql-request";

export const CreateSubTopicVoteMutation = async (subTopic) => {
  const mutation = gql`
    mutation CreateSubTopicVoteMutation($subTopic: ID!) {
      createSubTopicVote(data: { subTopic: { connect: { id: $subTopic } } }) {
        id
      }
    }
  `;

  const {
    createSubTopicVote: { id },
  } = await graphcmsClient.request(mutation, {
    subTopic,
  });

  return id;
};
