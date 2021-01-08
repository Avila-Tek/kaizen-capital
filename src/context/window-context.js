import React, { createContext } from 'react';
import useScrolled from 'hooks/useScrolled';
import useScreenSize from 'hooks/useScreenSize';

export const WindowContext = createContext();
const { Provider } = WindowContext;

export default function WindowProvider({ children }) {
  const scrolled = useScrolled();
  const displaySize = useScreenSize();
  return <Provider value={{ scrolled, displaySize }}>{children}</Provider>;
}
