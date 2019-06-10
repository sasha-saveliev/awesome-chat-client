import { Room, SidebarSection, TypingMessage, User } from '../models';
import { MessengerActions, MessengerActionTypes } from './messenger.actions';

export interface State {
  messenger: MessengerState;
}

export interface MessengerState {
  currentUser: User;
  activeRoom: Room;

  activeSidebarSection: SidebarSection;

  users: User[];
  usersOnline: number[];

  rooms: Room[];
  typingMessages: TypingMessage[];
}

const initialState: MessengerState = {
  currentUser: null,
  activeRoom: null,

  // TODO: Add value from constants
  activeSidebarSection: {
    name: 'rooms',
    icon: ''
  },

  users: [],
  usersOnline: [],

  rooms: [],
  typingMessages: []
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

    case MessengerActionTypes.AddOnlineUsers: {
      return {
        ...state,
        usersOnline: action.payload
      };
    }

    case MessengerActionTypes.AddOnlineUser: {
      const { payload: userId } = action;
      const { usersOnline } = state;

      if (usersOnline.includes(userId)) {
        return {
          ...state
        };
      }

      return {
        ...state,
        usersOnline: [...state.usersOnline, userId]
      };
    }

    case MessengerActionTypes.RemoveOnlineUser: {
      return {
        ...state,
        usersOnline: state.usersOnline.filter(userId => userId !== action.payload)
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

    case MessengerActionTypes.SetActiveRoom: {
      return {
        ...state,
        activeRoom: action.payload
      };
    }

    case MessengerActionTypes.AddRoomMessage: {
      const { payload } = action;
      const targetRoom = state.rooms.find(room => room.id === payload.room.id);

      targetRoom.messages.push(payload);

      return {
        ...state,
        rooms: [...state.rooms.map(room => ({ ...room }))]
      };
    }

    case MessengerActionTypes.AddTypingMessage: {
      const { payload } = action;
      const isAlreadyTyping = state.typingMessages
        .find(typingMessage => (typingMessage.userId === payload.userId) && (typingMessage.roomId === payload.roomId));

      if (isAlreadyTyping) {
        return state;
      }

      return {
        ...state,
        typingMessages: [...state.typingMessages, payload]
      };
    }

    case MessengerActionTypes.RemoveTypingMessage: {
      const { payload } = action;
      const typingMessages = state.typingMessages
        .filter(typingMessage => !((typingMessage.userId === payload.userId)
          && (typingMessage.roomId === payload.roomId)));

      return {
        ...state,
        typingMessages: [...typingMessages]
      };
    }

    case MessengerActionTypes.AddMessageView: {
      const { payload } = action;
      const room = state.rooms.find(({ id }) => id === payload.roomId);

      if (!room) {
        return {
          ...state
        };
      }
      console.log(room, 'room')
      const message = room.messages.find(({ id }) => id === payload.messageId);
      const isViewAlreadyExist = message.views.find(({ id }) => id === payload.id);

      if (!isViewAlreadyExist) {
        console.log(message, 'message')
        message.views.push(payload);
      }

      return {
        ...state
      };
    }

    case MessengerActionTypes.SetActiveSidebarSection: {
      return {
        ...state,
        activeSidebarSection: action.payload
      };
    }

    default: {
      return state;
    }
  }
}
