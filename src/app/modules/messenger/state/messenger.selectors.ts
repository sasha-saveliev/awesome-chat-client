import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MessengerState } from './messenger.reducer';

export const getMessengerFeatureStateSelector = createFeatureSelector<MessengerState>('messenger');

export const getUsersSelector = createSelector(
  getMessengerFeatureStateSelector,
  state => state.users
);

export const getRoomsSelector = createSelector(
  getMessengerFeatureStateSelector,
  state => state.rooms
);

export const getCurrentUserSelector = createSelector(
  getMessengerFeatureStateSelector,
  state => state.currentUser
);

export const getActiveRoomSelector = createSelector(
  getMessengerFeatureStateSelector,
  state => state.activeRoom
);

export const getActiveSidebarSectionSelector = createSelector(
  getMessengerFeatureStateSelector,
  state => state.activeSidebarSection
);

export const getOnlineUsersSelector = createSelector(
  getMessengerFeatureStateSelector,
  state => state.usersOnline
);
