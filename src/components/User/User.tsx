import {Card, Popover, Text} from '@mantine/core';
import {UserType} from "../../types/types.ts";

import styles from "./User.module.css"

type UserPropsType = {
  user: UserType
}

export default function User(props: UserPropsType) {
  const {address, email, username, name, phone} = props.user;
  return (
    <Card
      shadow="md"
      p="md"
      radius="md"
      mt="md"
      w="240px"
    >

      <Text fw={500}>{username}</Text>

      <Text size="sm" c="gray">
        email: {email}
      </Text>

      <Text size="sm" c="gray">
        phone: {phone}
      </Text>


      <Popover position="bottom" withArrow shadow="xl">
        <Popover.Target>
          <Text size="xs" c="dimmed" mt={10} className={styles.detailsTarget}>
            more details
          </Text>
        </Popover.Target>
        <Popover.Dropdown w={300}>
          <div>
            <Text size="xs">{`Name: ${username} (${name.firstname}/${name.lastname})`}</Text>
            <Text size="xs">{`Phone: ${phone}`}</Text>
            <Text size="xs">{`Email: ${email}`}</Text>
            <Text
              size="xs">{`Address: ${address.zipcode}, ${address.city} ${address.street}, ${address.number}`}</Text>
          </div>

        </Popover.Dropdown>
      </Popover>

    </Card>
  )
}