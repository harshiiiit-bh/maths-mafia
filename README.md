# Maths Mafia

**A mathematics workspace for Class 10.**

Maths Mafia is a frontend-first learning product. The current phase builds the visual system, navigation, interaction patterns and tool interfaces before any educational content is added.

## Phase 1: design and functionality only
- Responsive product landing page and student workspace
- Empty chapter, practice, test, library, progress and leaderboard workspaces
- Interactive scientific calculator
- Interactive function plotter with a safe expression parser
- Focus timer with selectable session lengths
- Local-only scratchpad
- Practice and exam setup interfaces that remain empty until content is supplied
- Search, responsive navigation and light/dark theme

## No seeded content
There are no sample chapters, questions, answers, student names, scores, progress records, formulas, notes or leaderboard entries. The empty states are intentional. User-entered calculator expressions and scratchpad text stay in the current browser session and are not saved to a server.

Maths Mafia is independent and does not use VAANI branding, characters, logos or assets.

## Stack
Next.js App Router, React, TypeScript, Tailwind CSS, Lucide React.

## Local development
Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Quality checks
```bash
npm test
npm run typecheck
npm run build
```
