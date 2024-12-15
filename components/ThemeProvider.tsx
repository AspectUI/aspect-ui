'use client'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes'

export function AspectThemeProvider({ children, ...rest }: Readonly<ThemeProviderProps>) {
  return <NextThemesProvider {...rest}>{children}</NextThemesProvider>
}
