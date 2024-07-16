import { create } from 'zustand';
import { UserType } from '../types/types.ts';
import getUsers from '../services/api/usersApi.ts';

type UsersStoreType = {
  isLoading: boolean;
  users: UserType[];
  setUsers: () => void;
};

const useUsersStore = create<UsersStoreType>((set) => ({
  isLoading: false,
  users: [],
  setUsers: async () => {
    set({ isLoading: true });
    const response = await getUsers();
    set({ users: response, isLoading: false });
  },
}));

export default useUsersStore;
