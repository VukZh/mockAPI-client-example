import {Flex, TextInput} from "@mantine/core";

export default function SearchHeader() {
  return (
    <Flex justify='center' align='center' h={60}>
      <TextInput placeholder="Enter the search text" radius="md" size="md" w={400}/>
    </Flex>
  )
}