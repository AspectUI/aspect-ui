import type { Config } from 'tailwindcss'
import { AspectUITheme } from './app/src/theme/AspectUITheme' 

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
}
export default AspectUITheme(config)
