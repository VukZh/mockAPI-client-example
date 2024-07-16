import {Flex, TextInput} from "@mantine/core";
import {useUsersStore} from "../../store";
import {useDebouncedState} from "@mantine/hooks";
import {useEffect} from "react";


export default function SearchHeader() {
  const setSearchText = useUsersStore((state) => state.setSearchText);
  const [currentSearchText, setCurrentSearchText] = useDebouncedState<string>("", 600);

  useEffect(() => {
    setSearchText(currentSearchText);
  }, [currentSearchText]);


  return (
    <Flex justify='center' align='center' h={60}>
      <TextInput placeholder="Enter the search text" radius="md" size="md" w={400}
                 onChange={(e) => setCurrentSearchText(e.target.value)}/>
    </Flex>
  )
}