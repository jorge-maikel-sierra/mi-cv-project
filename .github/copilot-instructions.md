# AI Coding Agent Instructions - mi-cv-project

## Project Overview

**mi-cv-project** is a React-based CV generator application built with Vite. It provides a minimal setup for creating a interactive curriculum vitae editor with multiple sections.

### Tech Stack

- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.3.1
- **Language**: JavaScript (JSX) - no TypeScript
- **Linting**: ESLint with React Hooks and Refresh plugins
- **Formatting**: Prettier with ESLint integration (format on save enabled)
- **CSS**: Plain CSS with component-specific stylesheets

## Architecture

### Component Structure

The app uses a **section-based component hierarchy**:

```
App
├── GeneralInfo (personal details)
├── Education (school/university info)
└── Experience (work history)
```

Each component follows an **edit/view toggle pattern**:

- **View Mode** (default): Displays saved information with an "Editar" button
- **Edit Mode**: Shows form with inputs for data entry and "Enviar" submit button

### Key Patterns

1. **Edit/View Toggle Pattern** (`src/components/*.jsx`)
   - All section components use `useState(isEditing)` with boolean toggling
   - Forms are conditionally rendered based on `isEditing` state
   - Each component manages its own local state independently
   - NO global state management or context API (keep it simple)

2. **Form State Management**
   - Use spread operator for state updates: `{...state, [name]: value}`
   - Input `name` attribute MUST match state property key exactly
   - Form submission prevents default and toggles `setIsEditing(false)`

3. **CSS Architecture**
   - Component-specific styles in `src/styles/ComponentName.css`
   - Shared styles imported via `../styles/App.css` in each component
   - Classes follow kebab-case: `form-group`, `edit-btn`, `data-row`, `label`

## Development Workflow

### Commands

```bash
npm run dev          # Start Vite dev server (HMR enabled)
npm run build        # Production build to /dist
npm run lint         # Run ESLint on all .js/.jsx files
npm run lint:fix     # Auto-fix ESLint errors
npm run format       # Format code with Prettier
npm run format:check # Check formatting without modifying files
npm run preview      # Preview production build locally
```

### Code Formatting & Linting

- **Prettier** runs automatically on save (configured in `.vscode/settings.json`)
- **ESLint** auto-fixes on save for fixable issues
- **Prettier Config**: Single quotes, semicolons, 100 char line width
- **Required VS Code Extensions**:
  - `esbenp.prettier-vscode` (Prettier formatter)
  - `dbaeumer.vscode-eslint` (ESLint)

### ESLint Configuration

- **Target**: ES2020 syntax with JSX support
- **Environment**: Browser globals only
- **Plugins**: React Hooks, React Refresh, Prettier
- **Custom Rules**:
  - Allow uppercase variable names (e.g., constants, components)
  - Prettier errors shown as ESLint errors
- **Ignored**: `/dist` directory

### Important Notes

- Fast Refresh is enabled via `@vitejs/plugin-react` (HMR support)
- React Compiler is NOT enabled (performance consideration in template)
- No TypeScript - maintain plain JS/JSX structure

## Common Modifications

### Adding a New Section Component

1. Create `src/components/SectionName.jsx` following the GeneralInfo pattern
2. Create corresponding `src/styles/SectionName.css`
3. Import and add to `App.jsx` render
4. Use the same edit/view toggle pattern with local `useState`

### Styling New Components

- Import `../styles/App.css` for shared styles
- Keep component-specific styles in dedicated CSS file
- Use consistent class naming: `form-group`, `edit-btn`, `data-row`, `label`

### Debugging

- Use React DevTools to inspect component state
- Check browser console for ESLint violations during dev
- Vite provides fast feedback - changes update instantly with HMR

## Known Issues & Conventions

1. **Typo in Education.jsx**: Input attribute `name='scholl'` should be `name='school'` (doesn't break functionality due to separate handling)
2. **No validation**: Forms accept any input - add if needed
3. **All in Spanish**: UI labels and placeholder text use Spanish
4. **No persistence**: Data resets on page refresh - consider localStorage if needed
