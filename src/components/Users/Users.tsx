import {Flex, Loader} from '@mantine/core';

import styles from "./Users.module.css";
import {User} from "..";
import {useUsersStore} from "../../store";
import {getFilteredUsers} from "../../utils";

export default function Users() {
  const users = useUsersStore((state) => state.users);
  const searchText = useUsersStore((state) => state.searchText);
  const isLoading = useUsersStore((state) => state.isLoading);

  const filteredUsers = searchText ? getFilteredUsers(users, searchText) : users;

  return (
    <> {
      isLoading ? (
          <Flex
            justify="center"
            align="center">
            <Loader color="green" size="xl" type="dots"/>
          </Flex>
        )
        :
        <Flex
          columnGap="xl"
          rowGap="sm"
          justify="center"
          align="center"
          direction="row"
          wrap="wrap"
          className={styles.usersWrapper}
        >
          {filteredUsers.map((user) => (
            <User key={user.id} user={user}/>
          ))}
        </Flex>
    }
    </>
  )
}