# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A single-page personal portfolio site built with Create React App (react-scripts 5). Deployed to GitHub Pages at the `homepage` URL in `package.json` by the GitHub Actions workflow in `.github/workflows/deploy.yml` on every push to `main`.

## Commands

- `npm start` — run the dev server (http://localhost:3000/my-portfolio-website)
- `npm run build` — production build (CRA)
- `npm test` — run tests via `react-scripts test` (Jest + React Testing Library, watch mode)
  - Run a single test file: `npm test -- src/App.test.js`
  - Run tests matching a name: `npm test -- -t "test name"`
- `npm run lint` — ESLint over `src/` with CRA's `eslintConfig` (`react-app`, `react-app/jest`); fails on any warning
- `npm run format` — format the repo with Prettier (writes files)
- `npm run format:check` — verify formatting without writing

## Style and format checks

CI (`deploy.yml`) runs `format:check`, then `lint`, then `build`, and a failure in any of them blocks the deploy. The CI build also treats ESLint warnings as errors, so an unused import or variable fails the deploy.

After editing code, run `npx prettier --write <changed files>` and then `npm run lint`, and fix anything they report before calling the change done. Don't hand-format to a different style.

- Prettier config is `.prettierrc.json`: 2-space indent, double quotes, semicolons, trailing commas, 80-column width. `.prettierignore` excludes `build/` and `package-lock.json`.
- `endOfLine` is `auto` because Git converts to CRLF on this Windows checkout while the repo stores LF. Don't change it to `lf`, or every file will fail the check locally.
- Prettier also formats CSS, JSON and Markdown (including this file), not just JS.

## Architecture

**Single-page layout, not routed.** `App.js` renders all sections in a fixed vertical stack (`Header`, `Home`, `Work`, `Education`, `Skills`, `Projects`, `Contact`, `Footer`). Navigation is scroll-based via anchor links (`#home`, `#projects`, etc.), not React Router.

**Two React Contexts drive cross-cutting concerns, both provided in `App.js`:**

- `ThemeContext` (`src/context/ThemeContext.js`) — holds `{ theme, toggleTheme }`. `App.js` owns the `theme` state and syncs it to `document.documentElement`'s `data-theme` attribute; all theming is done in CSS via `[data-theme="light"]` / default (dark) custom properties defined in `index.css`. Components read `theme.theme` to conditionally render (e.g., logo variant, sun/moon icon, starfield in `Home.js`).
- `SectionRefsContext` (`src/context/SectionRefsContext.js`) — a shared `ref` array (`useRef([])` from `App.js`). Every section component pushes its own DOM node into this array (`ref={el => sectionRefs.current.push(el)}`). `Navbar.js` then attaches an `IntersectionObserver` to each pushed section to highlight the active nav link on scroll. **Note:** because sections push into the array on every render without deduping, order/consumers must tolerate potential duplicate entries — check `Navbar.js`'s observer setup before changing how/when sections mount.

**Section components** live in `src/sections/` (`Home`, `Work`, `Education`, `Skills`, `Projects`/`Project`, `Contact`, `Footer`), each pairing a `.js` with a co-located `.css` file. Reusable/presentational pieces live in `src/components/` (`Logo`, `MyModal`, `SectionHeading`, `Skillcard`, `SideDrawer`, `BackDrop`, `formElements/Input`) and `src/components/navigation/` (`Header`, `Navbar`).

**Home section (`src/sections/Home.js`)** embeds a 3D scene via `@react-three/fiber`/`@react-three/drei`: `src/models/Robot.jsx` loads `src/assets/models/robot_playground.glb` with `useGLTF`, plays its first animation clip, and rescales/repositions itself based on `window.innerWidth` breakpoints. The typed-text effect uses `typed.js` directly against a ref (not a React wrapper).

**Projects data** is a hardcoded array at the top of `src/sections/Projects.js` (title, description, tech list, screenshot import, optional GitHub link). Each renders as a `Project` card that opens `MyModal` with full details on click. To add a project, add an entry to that array and its screenshot to `src/assets/imgs/screenshots/`.

**Contact form** (`src/sections/Contact.js`) uses Formik + Yup for validation and sends mail directly from the client via `@emailjs/browser` (service/template/public key are hardcoded constants in the file). Submission feedback uses `react-toastify`'s `toast.promise`.

**Mobile navigation**: `Header.js` toggles a `SideDrawer` + `BackDrop` overlay containing a second `NavBar` instance for small viewports; the same `NavBar` component is used in both desktop and drawer nav.
