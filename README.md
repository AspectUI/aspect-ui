# Aspect UI

Aspect UI is an open-source React component library designed to help developers
build stunning user interfaces with ease. It provides a collection of reusable
components that are customizable and easy to integrate into any React
application.

<!-- ![Aspect UI](https://your-image-link-here.com) -->

## Table of Contents

- [Aspect UI](#aspect-ui)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
    - [Vite React Application](#vite-react-application)
    - [Next JS Application](#next-js-application)
  - [Usage](#usage)
  - [Components](#components)
  - [Contributing](#contributing)
  - [License](#license)

## Installation

### Vite React Application

Setting Up Aspect UI in a Vite React Application

`Step 1:` Create a Vite React Application\*\*

```bash
npm create vite@latest my-project -- --template react
cd my-project
```

`Step 2:` Install Tailwind CSS

```bash
npm i autoprefixer postcss tailwindcss
npx tailwindcss init -p
```

`Step 3:` Install Aspect UI

```bash
npm install aspect-ui
```

Or with Yarn

```bash
yarn add aspect-ui
```

`Step 4:` Configure Tailwind CSS

Edit your tailwind.config.js file:

<!-- import { aspectTheme } from 'aspect-ui/aspectTheme' -->

```js
import { AspectUITheme } from 'aspect-ui/AspectUITheme'

const config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {},
}

export default AspectUITheme(config)
```

`Step 5:` Add Tailwind CSS to your CSS file

```css
@import 'aspect-ui/css';
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Next JS Application

Integrating Aspect UI into a Next.js application.

`Step 1:` Create a Next.js Application

```bash
npx create-next-app@latest
```

Ensure that you select Tailwind CSS as a dependency during setup.

`Step 2:` Install Aspect UI

```bash
npm install aspect-ui
```

Or with Yarn

```bash
yarn add aspect-ui
```

`Step 3:` Configure Tailwind CSS

Edit your tailwind.config.js file:

```js
import { AspectUITheme } from 'aspect-ui/AspectUITheme'

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
}

export default AspectUITheme(config)
```

`Step 4:` Add Tailwind CSS to your CSS file

```css
@import 'aspect-ui/css';
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Usage

```js
import { Button } from 'aspect-ui'
const App = () => {
  return <Button>Button</Button>
}
export default App
```

## Components

Aspect UI offers a variety of components to help you build your application. For
detailed usage and examples of each component, refer to our
[component documentation](#vite-react-application).

## Contributing

If you want to contribute to Aspect UI, you can follow the contributing guide.

## License

Aspect UI is licensed under the MIT License. See the LICENSE file for more
information.
