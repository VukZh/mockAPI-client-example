import {Card, Popover, Text} from '@mantine/core';
import {UserType} from "../../types/types.ts";

import styles from "./User.module.css"

const user: UserType = {
  address: {
    geolocation: {
      lat: "12.2345",
      long: "12.2345"
    },
    city: "City",
    street: "Street 1",
    number: 789,
    zipcode: "001001"
  },
  id: 123,
  email: "email@email.com",
  username: "Username",
  password: "password",
  name: {
    firstname: "Firstname",
    lastname: "Lastname"
  },
  phone: "+(123)456-7890",
  __v: 0
}

export default function User() {
  return (
    <Card
      shadow="md"
      p="md"
      radius="md"
      mt="md"
      w="240px"
    >

      <Text fw={500}>{user.username}</Text>

      <Text size="sm" c="gray">
        email: {user.email}
      </Text>

      <Text size="sm" c="gray">
        phone: {user.phone}
      </Text>


      <Popover position="bottom" withArrow shadow="xl">
        <Popover.Target>
          <Text size="xs" c="dimmed" mt={10} className={styles.detailsTarget}>
            more details
          </Text>
        </Popover.Target>
        <Popover.Dropdown w={300}>
          <div>
            <Text size="xs">{`Name: ${user.username} (${user.name.firstname}/${user.name.lastname})`}</Text>
            <Text size="xs">{`Phone: ${user.phone}`}</Text>
            <Text size="xs">{`Email: ${user.email}`}</Text>
            <Text
              size="xs">{`Address: ${user.address.zipcode}, ${user.address.city} ${user.address.street}, ${user.address.number}`}</Text>
          </div>

        </Popover.Dropdown>
      </Popover>

    </Card>
  )
}