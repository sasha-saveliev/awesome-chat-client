import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MessengerState } from './messenger.reducer';

export const getMessengerFeatureStateSelector = createFeatureSelector<MessengerState>('messenger');

export const getCurrentUserSelector = createSelector(
  getMessengerFeatureStateSelector,
  state => state.currentUser
);

export const getUserByIdSelector = id => createSelector(
  getMessengerFeatureStateSelector,
  state => state.users.find(user => user.id === id)
);

export const getUsersSelector = createSelector(
  getMessengerFeatureStateSelector,
  state => state.users
);

export const getOnlineUsersSelector = createSelector(
  getMessengerFeatureStateSelector,
  state => state.usersOnline
);

export const getRoomsSelector = createSelector(
  getMessengerFeatureStateSelector,
  state => state.rooms
);

export const getActiveRoomSelector = createSelector(
  getMessengerFeatureStateSelector,
  state => state.activeRoom
);

export const getRoomByIdSelector = id => createSelector(
  getMessengerFeatureStateSelector,
  state => state.rooms.find(room => room.id === id)
);

export const getActiveSidebarSectionSelector = createSelector(
  getMessengerFeatureStateSelector,
  state => state.activeSidebarSection
);

export const getTypingMessagesSelector = createSelector(
  getMessengerFeatureStateSelector,
  state => state.typingMessages
);
