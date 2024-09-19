# Deliveroo Clone with `REACT NATIVE!` (Navigation, Redux, Tailwind CSS & Sanity.io) :motor_scooter:

### Technologies

- `React-Native`
- `Expo`
- `Tailwind CSS` with `NativeWind`
- `React Navigation`
- `Redux`
- `react-native-maps` with Google Map API
- `Sanity.io`

### Screenshots & video 🌃

<div style="display: flex; flex-wrap: wrap">
<img width="49%" src="./assets/screenshots/1.png"/>
<img width="49%" src="./assets/screenshots/2.png"/>
<img width="49%" src="./assets/screenshots/3.png"/>
<img width="49%" src="./assets/screenshots/4.png"/>
<img width="49%" src="./assets/screenshots/5.png"/>
<img width="49%" src="./assets/screenshots/6.png"/>
</div>


## :toolbox: Getting Started

### :bangbang: Prerequisites

- Sign up for a Sanity account <a href='https://www.sanity.io'>HERE</a>
- Install Node JS in your computer <a href='https://nodejs.org/en/'>HERE</a>

### :gear: Installation

![](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

Install my-project with expo

![](https://img.shields.io/badge/Expo-02569B?style=for-the-badge&logo=Expo&logoColor=white)

Installing Expo CLI

```
npm install --global expo-cli
```

Initializing the project

```
npx create-expo-app deliveroo-clone
```

```
cd deliveroo-clone
```

Install dependencies

### Setup Tailwind CSS

![](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

```
npm install tailwindcss-react-native
npm install --save-dev tailwindcss
```

Tailwindcss requires a `tailwind.config.js` file with the content section configured to include the paths to all of your components and any other source files that contain Tailwind class names.

```
// tailwind.config.js
module.exports = {
  content: [
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // ...
};
```

Add `TailwindProvider` at the top level of your application. The `TailwindProvider` creates the context for reactive styles and the atomic style objects.

```
import { TailwindProvider } from "tailwindcss-react-native";

function MyAppsProviders({ children }) {
  return <TailwindProvider>{children}</TailwindProvider>;
}
```

##### Configure your babel.config.js

```
// babel.config.js
module.exports = {
  plugins: ["tailwindcss-react-native/babel"],
};
```

Install dependencies

<a href="https://github.com/MontherTuwati/Deliveroo-Clone/blob/main/package.json" target="_blank">🔶 Dependency Info</a>

<!-- Run Locally -->

### :running: Run Locally

![](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)

Clone the project

```bash
  git clone https://github.com/MontherTuwati/deliveroo-clone.git
```

change directory

```bash
  cd Deliveroo-Clone
```

Install dependencies

```bash
  npx expo install
```

Start the server

```bash
  npx expo start
```

<hr />

### Creating a Build

- Optimize the assets for speed - `npx expo-optimize` (formerly expo optimize)
- Bundle the project for production - `npx expo export:web` (`expo build:web` in the legacy Expo CLI).
- Creates a production ready static bundle in the `web-build/` directory. Don't edit this folder directly.
- If you make any changes to your project, you'll need to re-build for production.
- For more help use `npx expo export:web --help`
- <a href="https://docs.expo.dev/eas" target="_blank">More Info</a>

<!-- Deployment -->

### :triangular_flag_on_post: Deployment

To deploy this project run

#### Expo Publish

![](https://img.shields.io/badge/Expo-02569B?style=for-the-badge&logo=Expo&logoColor=white)

publish your project

```
expo publish
```

### License

[MIT](https://choosealicense.com/licenses/mit/)
