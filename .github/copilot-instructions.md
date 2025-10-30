<!-- .github/copilot-instructions.md - Guidance for AI coding agents -->
# Copilot instructions — HTML-CSS-Journey

This repository is a very small learning workspace for HTML/CSS/JS experiments. There is currently no build system, package manifest, or CI configuration. Follow the notes below when making changes or suggesting code.

What you need to know right away
- The repo root currently contains a single file: `1st project.js` (it is empty at the time of writing). If you need more context, ask the repo owner before making assumptions.
- No `package.json`, no `index.html`, no tests, and no obvious runtime constraints. Treat changes as lightweight learning examples unless the user instructs otherwise.

Big-picture architecture (discoverable from files)
- This is intended as a static learning project: small, self-contained JS/CSS/HTML experiments rather than a multi-service app. Expect one-off files and ad-hoc naming (for example, `1st project.js` includes a space).

Developer workflows (explicit, minimal)
- There are no build or test commands to run. For quick validation of JS, run locally with node:

```bash
node "1st project.js"
```

- To preview HTML/CSS, create an `index.html` (or open the file you add) and open it in a browser. Keep changes small and easy to preview.

Project-specific conventions and patterns
- Files may use ad-hoc names and capitalization (keep original names when editing unless the user asks for normalization).
- Prefer adding a new folder per small project (e.g., `projects/project-1/`) if you create multiple examples. Do not reorganize existing files without confirmation.

Integration points and dependencies
- No external dependencies are detectable from the repository contents. If you add a dependency, update the repo owner and include a short reason in the PR description.

Examples the agent can use
- Reference the exact path when editing or creating files: `1st project.js` (root).
- If you add runnable examples, include a one-line README inside the folder explaining how to run or preview them.

Pull request and editing guidance
- Keep PRs tiny and focused. Use descriptive titles like `feat: add basic index.html preview for project 1`.
- If you need to introduce tooling (npm, bundler, linter), ask the owner first and include a migration plan in your PR description.

When in doubt
- Ask the user for missing files, the intended target browser or Node version, and whether they want files renamed or reorganized.

If you see this file and the repo grows, update this guidance to reflect any new build system, package manager, or test harness that appears.

— End of instructions —
