import {Flex, Loader} from '@mantine/core';

import styles from "./Users.module.css";
import {User} from "..";
import {useUsersStore} from "../../store";

export default function Users() {
  const users = useUsersStore((state) => state.users);
  const isLoading = useUsersStore((state) => state.isLoading);

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
          {users.map((user) => (
            <User key={user.id} user={user}/>
          ))}
        </Flex>
    }
    </>
  )
}