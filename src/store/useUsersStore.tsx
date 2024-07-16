import { create } from 'zustand';
import { UserType } from '../types/types.ts';
import getUsers from '../services/api/usersApi.ts';

type UsersStoreType = {
  searchText: string;
  setSearchText: (text: string) => void;
  isLoading: boolean;
  users: UserType[];
  setUsers: () => void;
};

const useUsersStore = create<UsersStoreType>((set) => ({
  searchText: '',
  setSearchText: (text: string) => {
    set({ searchText: text });
  },
  isLoading: false,
  users: [],
  setUsers: async () => {
    set({ isLoading: true });
    const response = await getUsers();
    set({ users: response, isLoading: false });
  },
}));

export default useUsersStore;
