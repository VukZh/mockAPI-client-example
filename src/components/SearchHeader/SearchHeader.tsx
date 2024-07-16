import { Checkbox, Flex, Popover, Text, TextInput } from '@mantine/core';
import { useFilterStore, useUsersStore } from '../../store';
import { useDebouncedState } from '@mantine/hooks';
import { useEffect } from 'react';

import styles from './SearchHeader.module.css';

export default function SearchHeader() {
  const setSearchText = useUsersStore((state) => state.setSearchText);

  const nameIsFiltered = useFilterStore((store) => store.nameIsFiltered);
  const emailIsFiltered = useFilterStore((store) => store.emailIsFiltered);
  const phoneIsFiltered = useFilterStore((store) => store.phoneIsFiltered);
  const setNameIsFiltered = useFilterStore((store) => store.setNameIsFiltered);
  const setPhoneIsFiltered = useFilterStore(
    (store) => store.setPhoneIsFiltered,
  );
  const setEmailIsFiltered = useFilterStore(
    (store) => store.setEmailIsFiltered,
  );

  const [currentSearchText, setCurrentSearchText] = useDebouncedState<string>(
    '',
    600,
  );

  useEffect(() => {
    setSearchText(currentSearchText);
  }, [currentSearchText]);

  return (
    <Flex justify="center" align="center" h={60}>
      <TextInput
        placeholder="Search..."
        radius="md"
        size="md"
        w={400}
        onChange={(e) => setCurrentSearchText(e.target.value)}
      />

      <Popover position="bottom" withArrow shadow="xl">
        <Popover.Target>
          <div className={styles.options}>...</div>
        </Popover.Target>
        <Popover.Dropdown w={100}>
          <Flex direction="column" gap="xs" className={styles.optionsPopover}>
            <Text size="xs">Filter by:</Text>
            <Checkbox
              label="name"
              radius="xs"
              size="xs"
              checked={nameIsFiltered}
              onChange={(e) => setNameIsFiltered(e.currentTarget.checked)}
            />
            <Checkbox
              label="email"
              radius="xs"
              size="xs"
              checked={emailIsFiltered}
              onChange={(e) => setEmailIsFiltered(e.currentTarget.checked)}
            />
            <Checkbox
              label="phone"
              radius="xs"
              size="xs"
              checked={phoneIsFiltered}
              onChange={(e) => setPhoneIsFiltered(e.currentTarget.checked)}
            />
          </Flex>
        </Popover.Dropdown>
      </Popover>
    </Flex>
  );
}
