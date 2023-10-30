/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      chat
      sender
      text
      timestamp
      relatedChat {
        id
        lastMessageTimestamp
        user1
        user2
        createdAt
        updatedAt
        chatUser1ProfileId
        chatUser2ProfileId
        __typename
      }
      senderProfile {
        id
        email
        gender
        age
        experience
        workoutDays
        profilePicure
        WorkoutType
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      messageRelatedChatId
      messageSenderProfileId
      __typename
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        chat
        sender
        text
        timestamp
        createdAt
        updatedAt
        messageRelatedChatId
        messageSenderProfileId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getChat = /* GraphQL */ `
  query GetChat($id: ID!) {
    getChat(id: $id) {
      id
      lastMessageTimestamp
      user1
      user1Profile {
        id
        email
        gender
        age
        experience
        workoutDays
        profilePicure
        WorkoutType
        createdAt
        updatedAt
        __typename
      }
      user2
      user2Profile {
        id
        email
        gender
        age
        experience
        workoutDays
        profilePicure
        WorkoutType
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      chatUser1ProfileId
      chatUser2ProfileId
      __typename
    }
  }
`;
export const listChats = /* GraphQL */ `
  query ListChats(
    $filter: ModelChatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        lastMessageTimestamp
        user1
        user2
        createdAt
        updatedAt
        chatUser1ProfileId
        chatUser2ProfileId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserProfile = /* GraphQL */ `
  query GetUserProfile($id: ID!) {
    getUserProfile(id: $id) {
      id
      email
      gender
      age
      experience
      workoutDays
      profilePicure
      WorkoutType
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUserProfiles = /* GraphQL */ `
  query ListUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        gender
        age
        experience
        workoutDays
        profilePicure
        WorkoutType
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
