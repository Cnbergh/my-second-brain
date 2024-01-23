'use client';
import { ThemeProvider } from '../Context/theme-provider';
interface Props {
  children: React.ReactNode;
}

function ContextProvider({ children }: Props) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}

export default ContextProvider;
