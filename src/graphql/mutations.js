/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createChat = /* GraphQL */ `
  mutation CreateChat(
    $input: CreateChatInput!
    $condition: ModelChatConditionInput
  ) {
    createChat(input: $input, condition: $condition) {
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
export const updateChat = /* GraphQL */ `
  mutation UpdateChat(
    $input: UpdateChatInput!
    $condition: ModelChatConditionInput
  ) {
    updateChat(input: $input, condition: $condition) {
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
export const deleteChat = /* GraphQL */ `
  mutation DeleteChat(
    $input: DeleteChatInput!
    $condition: ModelChatConditionInput
  ) {
    deleteChat(input: $input, condition: $condition) {
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
export const createUserProfile = /* GraphQL */ `
  mutation CreateUserProfile(
    $input: CreateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    createUserProfile(input: $input, condition: $condition) {
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
export const updateUserProfile = /* GraphQL */ `
  mutation UpdateUserProfile(
    $input: UpdateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    updateUserProfile(input: $input, condition: $condition) {
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
export const deleteUserProfile = /* GraphQL */ `
  mutation DeleteUserProfile(
    $input: DeleteUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    deleteUserProfile(input: $input, condition: $condition) {
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
