/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
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
export const onCreateChat = /* GraphQL */ `
  subscription OnCreateChat($filter: ModelSubscriptionChatFilterInput) {
    onCreateChat(filter: $filter) {
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
export const onUpdateChat = /* GraphQL */ `
  subscription OnUpdateChat($filter: ModelSubscriptionChatFilterInput) {
    onUpdateChat(filter: $filter) {
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
export const onDeleteChat = /* GraphQL */ `
  subscription OnDeleteChat($filter: ModelSubscriptionChatFilterInput) {
    onDeleteChat(filter: $filter) {
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
export const onCreateUserProfile = /* GraphQL */ `
  subscription OnCreateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
  ) {
    onCreateUserProfile(filter: $filter) {
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
export const onUpdateUserProfile = /* GraphQL */ `
  subscription OnUpdateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
  ) {
    onUpdateUserProfile(filter: $filter) {
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
export const onDeleteUserProfile = /* GraphQL */ `
  subscription OnDeleteUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
  ) {
    onDeleteUserProfile(filter: $filter) {
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
