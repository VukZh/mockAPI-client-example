import { Flex } from '@mantine/core';

import styles from "./Users.module.css";
import {User} from "../index.ts";

export default function Users() {
  return (
    <Flex
      columnGap="xl"
      rowGap="sm"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
      className={styles.usersWrapper}
    >
      <User/>
      <User/>
      <User/>
      <User/>
      <User/>
      <User/>
      <User/>
      <User/>
      <User/>
    </Flex>

  )
}