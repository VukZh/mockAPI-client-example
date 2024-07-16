import {UserType} from "../types/types.ts";

export default function getFilteredUsers(users: UserType[], searchText: string) {
  const preparedSearchText = searchText.trim().toLowerCase();
  return users.filter((user) => user.username.toLowerCase().includes(preparedSearchText) ||
    user.email.toLowerCase().includes(preparedSearchText) ||
    user.phone.toLowerCase().includes(preparedSearchText));
}