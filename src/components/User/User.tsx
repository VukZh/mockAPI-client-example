import {Card, Text} from '@mantine/core';
import {UserType} from "../../types/types.ts";

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

      <Text size="sm" c="dimmed">
        email: {user.email}
      </Text>

      <Text size="sm" c="dimmed">
        phone: {user.phone}
      </Text>

    </Card>
  )
}