import { useEffect, useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';
import createPersistedState from 'use-persisted-state';

const useColorSchemeState = createPersistedState('colorScheme');

export function useColorScheme(): {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
} {
  const systemPrefersDark = useMediaQuery(
    {
      query: '(prefers-color-scheme: dark)',
    },
    undefined,
  );

  const [isDark, setIsDark] = useColorSchemeState<boolean>();

  const value = useMemo(() => isDark === undefined ? !!systemPrefersDark : isDark,
    [isDark, systemPrefersDark])

  useEffect(() => {
    if (value) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
    }
  }, [value]);

  return {
    isDark: value,
    setIsDark,
  };
}