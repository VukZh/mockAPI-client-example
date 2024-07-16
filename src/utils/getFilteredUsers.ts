import { UserType } from '../types/types.ts';

export default function getFilteredUsers(
  users: UserType[],
  searchText: string,
  nameIsFiltered: boolean,
  emailIsFiltered: boolean,
  phoneIsFiltered: boolean,
) {
  const preparedSearchText = searchText.trim().toLowerCase();
  return users.filter(
    (user) =>
      (nameIsFiltered &&
        user.username.toLowerCase().includes(preparedSearchText)) ||
      (emailIsFiltered &&
        user.email.toLowerCase().includes(preparedSearchText)) ||
      (phoneIsFiltered &&
        user.phone.toLowerCase().includes(preparedSearchText)),
  );
}
