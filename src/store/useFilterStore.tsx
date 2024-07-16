import { create } from 'zustand';

type FilterStoreType = {
  searchText: string;
  setSearchText: (text: string) => void;
  nameIsFiltered: boolean;
  emailIsFiltered: boolean;
  phoneIsFiltered: boolean;
  setNameIsFiltered: (isFiltered: boolean) => void;
  setEmailIsFiltered: (isFiltered: boolean) => void;
  setPhoneIsFiltered: (isFiltered: boolean) => void;
};

const useFilterStore = create<FilterStoreType>((set) => ({
  searchText: '',
  setSearchText: (text: string) => {
    set({ searchText: text });
  },
  nameIsFiltered: true,
  emailIsFiltered: true,
  phoneIsFiltered: true,
  setNameIsFiltered: (isFiltered: boolean) => {
    set({ nameIsFiltered: isFiltered });
  },
  setEmailIsFiltered: (isFiltered: boolean) => {
    set({ emailIsFiltered: isFiltered });
  },
  setPhoneIsFiltered: (isFiltered: boolean) => {
    set({ phoneIsFiltered: isFiltered });
  },
}));

export default useFilterStore;
