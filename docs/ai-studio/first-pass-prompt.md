# Google AI Studio — Maths Mafia first-pass prompt

You are improving the existing Maths Mafia product, not starting a new project.

Read AGENTS.md and docs/architecture/phase-1-frontend.md before changing anything.

## Goal
Upgrade the product's UI/UX and frontend interactions while preserving the independent Maths Mafia identity.

## Absolute content rule
This phase contains NO educational or user data. Do not create sample chapters, lesson titles, formulas, solved examples, questions, answer options, question papers, notes, fictional students, scores, streaks, XP, rankings, progress values, or sample profile records. Do not invent content to fill whitespace. Empty states and neutral skeletons are intentional.

## Keep working features
- Responsive navigation and page search.
- Light/dark theme.
- Scientific calculator and safe expression parser.
- Function plotter.
- Focus timer.
- Temporary local scratchpad.
- Practice setup interface and blank question canvas.
- Exam setup interface and blank exam canvas.
- Empty learning, library, progress and leaderboard workspaces.

## Upgrade tasks
1. Review every route at desktop and mobile widths. Improve spacing, hierarchy, contrast, typography, visual balance and consistency.
2. Make interactions feel polished: keyboard focus, hover/pressed/loading/disabled states, confirmation and empty states.
3. Improve Math Lab: calculator keyboard support, clear validation, responsive graph canvas, timer controls and scratchpad usability.
4. Improve navigation and search, including keyboard shortcut Ctrl/Cmd+K and a clear close path.
5. Ensure every visible control has a real action. Remove or label anything inert.
6. Add accessible labels, semantic landmarks, reduced-motion handling and responsive layouts.
7. Run tests, typecheck and production build. Fix all errors.

## Restrictions
- Do not add backend, database, auth, payments, APIs, external AI calls or persistence.
- Keep all user-entered calculator and scratchpad data local and ephemeral.
- Do not add external images or unrelated mascots.
- Never introduce VAANI branding, Officer Vaanii, or assets from any other project.
- Do not create or connect a new GitHub repository.
- Do not push, commit, merge, deploy, or publish without explicit approval.
- Do not create pull requests.

First inspect and report a concise improvement plan. Then implement directly in the existing project, preserving the current architecture and routes. Do not replace the whole app with a generic starter template.
