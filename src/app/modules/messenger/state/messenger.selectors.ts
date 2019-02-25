import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MessengerState } from './messenger.reducer';

export const getMessengerFeatureStateSelector = createFeatureSelector<MessengerState>('messenger');

export const getUsersSelector = createSelector(
  getMessengerFeatureStateSelector,
  state => state.users
);
