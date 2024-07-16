import { SearchHeader, Users } from '../../components';
import { AppShell } from '@mantine/core';
import { useUsersStore } from '../../store';
import { useEffect } from 'react';

export default function Main() {
  const setUsers = useUsersStore((state) => state.setUsers);
  useEffect(() => {
    setUsers();
  }, []);
  return (
    <div>
      <AppShell>
        <AppShell.Header>
          <SearchHeader />
        </AppShell.Header>
      </AppShell>
      <Users />
    </div>
  );
}
