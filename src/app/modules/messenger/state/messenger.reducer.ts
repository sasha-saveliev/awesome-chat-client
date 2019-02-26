import { Room, User } from '../models';
import { MessengerActions, MessengerActionTypes } from './messenger.actions';

export interface State {
  messenger: MessengerState;
}

export interface MessengerState {
  currentUser: User;

  users: User[];
  rooms: Room[];
}

const initialState: MessengerState = {
  currentUser: null,

  users: [],
  rooms: []
};

export function messengerReducer(state = initialState, action: MessengerActions): MessengerState {
  switch (action.type) {
    case MessengerActionTypes.AddUsers: {
      return {
        ...state,
        users: action.payload
      };
    }

    case MessengerActionTypes.AddUser: {
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    }

    case MessengerActionTypes.SetCurrentUser: {
      return {
        ...state,
        currentUser: action.payload
      };
    }

    case MessengerActionTypes.AddRoom: {
      return {
        ...state,
        rooms: [...state.rooms, action.payload]
      };
    }

    case MessengerActionTypes.AddRooms: {
      return {
        ...state,
        rooms: action.payload
      };
    }

    default: {
      return state;
    }
  }
}
