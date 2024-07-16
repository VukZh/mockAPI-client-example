import { Flex, Loader } from '@mantine/core';

import styles from './Users.module.css';
import { User } from '..';
import { useFilterStore, useUsersStore } from '../../store';
import { getFilteredUsers } from '../../utils';

export default function Users() {
  const users = useUsersStore((store) => store.users);
  const searchText = useUsersStore((store) => store.searchText);
  const isLoading = useUsersStore((store) => store.isLoading);

  const nameIsFiltered = useFilterStore((store) => store.nameIsFiltered);
  const emailIsFiltered = useFilterStore((store) => store.emailIsFiltered);
  const phoneIsFiltered = useFilterStore((store) => store.phoneIsFiltered);

  const filteredUsers = searchText
    ? getFilteredUsers(
        users,
        searchText,
        nameIsFiltered,
        emailIsFiltered,
        phoneIsFiltered,
      )
    : users;

  return (
    <>
      {' '}
      {isLoading ? (
        <Flex justify="center" align="center">
          <Loader color="green" size="xl" type="dots" />
        </Flex>
      ) : (
        <Flex
          columnGap="xl"
          rowGap="sm"
          justify="center"
          align="center"
          direction="row"
          wrap="wrap"
          className={styles.usersWrapper}>
          {filteredUsers.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </Flex>
      )}
    </>
  );
}
