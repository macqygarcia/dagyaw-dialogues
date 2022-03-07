import { graphcmsClient } from "../graphcms";
import { gql } from "graphql-request";

export const CreateVisitorMutation = async (data) => {
  const mutation = gql`
    mutation CreateVisitorMutation(
      $age: Int
      $email: String
      $firstName: String
      $gender: Gender
      $lastName: String
      $region: ID
      $sector: ID
      $organization: String
    ) {
      createVisitor(
        data: {
          age: $age
          email: $email
          firstName: $firstName
          gender: $gender
          lastName: $lastName
          region: { connect: { id: $region } }
          sector: { connect: { id: $sector } }
          organization: $organization
        }
      ) {
        id
      }
    }
  `;

  const {
    createVisitor: { id },
  } = await graphcmsClient.request(mutation, data);

  return id;
};

export const UpdateVisitorVotesMutation = async (visitorId, voteId) => {
  const mutation = gql`
    mutation UpdateVisitorVotes($visitorId: ID!, $voteId: ID!) {
      updateSubTopicVote(
        where: { id: $voteId }
        data: { visitor: { connect: { id: $visitorId } } }
      ) {
        id
      }
    }
  `;

  const {
    updateSubTopicVote: { id },
  } = await graphcmsClient.request(mutation, {
    visitorId,
    voteId,
  });

  return id;
};

export const UpdateVisitorSubTopicQuestionsMutation = async (
  visitorId,
  voteId
) => {
  const mutation = gql`
    mutation UpdateVisitorSubTopicQuestions($visitorId: ID!, $voteId: ID!) {
      updateSubTopicQuestion(
        where: { id: $voteId }
        data: { visitor: { connect: { id: $visitorId } } }
      ) {
        id
      }
    }
  `;

  const {
    updateSubTopicQuestion: { id },
  } = await graphcmsClient.request(mutation, {
    visitorId,
    voteId,
  });

  return id;
};

export const UpdateSubTopicQuestionsMutation = async (visitorId, voteId) => {
  const mutation = gql`
    mutation UpdateVisitorSubTopicQuestions($visitorId: ID!, $voteId: ID!) {
      updateSubTopicQuestion(
        where: { id: $voteId }
        data: { visitor: { connect: { id: $visitorId } } }
      ) {
        id
      }
    }
  `;

  const {
    updateSubTopicQuestion: { id },
  } = await graphcmsClient.request(mutation, {
    visitorId,
    voteId,
  });

  return id;
};

export const CreateVisitMutation = async (page) => {
  const mutation = gql`
    mutation CreateVisitMutation($page: String!) {
      createVisit(data: { page: $page }) {
        page
        createdAt
      }
    }
  `;

  const data = await graphcmsClient.request(mutation, {
    page,
  });

  return data;
};
