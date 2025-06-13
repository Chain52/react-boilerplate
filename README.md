# React Boilerplate: A Simplified, Modular React Starter

This is a personal React boilerplate, originally derived from the now-abandoned [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate). It has been heavily refactored to support a modular, microservice-oriented front-end architecture. Designed for small-scale projects, it includes streamlined state management, lazy-loaded routing, and an isolated page-level rendering strategy.

This project is now archived and will not be upgraded beyond React 16, as the cost of modernization outweighs its intended utility.

---

## Project Overview

```yaml
public/:             # Static assets and base HTML
src/:                # Application source code
  components/:       # Reusable presentational components styled with Styled Components
  containers/:       # Smart components connected to the Redux store
  pages/:            # Entry points for route rendering
  redux/:            # Redux setup including reducers, middleware, and saga handlers
.babelrc:            # Babel configuration
.eslintrc.js:        # ESLint configuration
.prettierrc:         # Prettier configuration
package.json:        # Project metadata and dependencies
README.md:           # Project documentation
```

### Techniques

- [Code Splitting with `react-loadable`](https://github.com/jamiebuilds/react-loadable): Enables component-level lazy loading to reduce initial bundle size.
- [Connected React Router](https://github.com/supasate/connected-react-router): Syncs navigation events with Redux store, allowing route changes to be handled as Redux actions.
- [Redux Saga](https://redux-saga.js.org/docs/introduction/GettingStarted): Side effect management is handled declaratively via sagas.
- [Styled Components](https://styled-components.com/docs): Enables scoped component-level styling using tagged template literals.

### Non-Obvious Technologies

- **Connected React Router**: Less common in newer React projects, but useful for legacy-friendly synchronization of Redux and navigation state.
- **Redux Logger**: Middleware for console-logging dispatched actions and state updates during development.

### Retrospective Notes

- `react-loadable` was used for code-splitting, despite the availability of `React.lazy` at the time. This was due to familiarity, not technical merit — in hindsight, adopting native APIs would have been cleaner and more future-proof.
- The `src/pages/` directory undermines the role of `src/containers/`, since each routed page could effectively act as its own container. This redundancy adds structure without benefit.
- Route definitions were centralized in a constant, which was a good direction — but the implementation was flawed. The constant was defined in the same file as the router and never reused elsewhere. A `src/constants/` directory should exist and export the routes definitions for navigation components and tests.
- Coupling Redux with routing via `connected-react-router` made sense in larger apps, but this boilerplate would have benefited from making that coupling optional for use in small applications. While it's unclear whether a clean decoupling would be trivial, exploring that on initial design would have been valuable.

---

## Installation

> ⚠️ This project is archived and not maintained. Use at your own discretion.

### Prerequisites

- [git](https://git-scm.com/)
- [Node.js (v12 or later)](https://nodejs.org/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)

### Setup

```bash
git clone https://github.com/Chain52/react-boilerplate.git
# npm
npm install

# yarn
yarn install
```

To start the development server:

```bash
# npm
npm run dev

# yarn
yarn run dev
```

---

## Get Started

Routes are defined `src/router.js` and rendered from the `src/pages/` directory. To add a new route:

1. Create a component in `src/pages/YourPage/index.js`
2. Add an entry to the route config:
   ```js
   const routes = [
    {
      path: '/[path_to_your_page]',
      component: loadable(() => import('./pages/YourPage')),
      exact: true,
    },
   ];
   ```
3. Run the dev server and navigate to the path defined in your route.

---

## Acknowledgements

This project is inspired from [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate) source by [Max Stoiber](https://twitter.com/mxstbr) and contributors.

⚠️ **Warning:** The original boilerplate and its official website are no longer maintained and may host malicious content. Use only local or reviewed copies if referencing the source.
