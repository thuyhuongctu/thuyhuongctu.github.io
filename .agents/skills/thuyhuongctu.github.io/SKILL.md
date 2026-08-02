```markdown
# thuyhuongctu.github.io Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches you the core development patterns and conventions used in the `thuyhuongctu.github.io` TypeScript codebase. You'll learn how to structure files, write imports/exports, follow commit message standards, and write and run tests. This guide is ideal for contributors or anyone seeking to understand the project's workflow and coding style.

## Coding Conventions

### File Naming
- Use **kebab-case** for all file names.
  - Example:  
    ```
    user-profile.ts
    app-config.test.ts
    ```

### Import Style
- Use **relative imports** for all modules.
  - Example:
    ```typescript
    import { fetchData } from './api-utils';
    ```

### Export Style
- Use **named exports** instead of default exports.
  - Example:
    ```typescript
    // In user-profile.ts
    export function getUserProfile(id: string) { ... }
    ```

### Commit Messages
- Use **Conventional Commits** with the following prefixes:
  - `ci`: Continuous integration changes
  - `feat`: New features
  - `test`: Adding or updating tests
  - `docs`: Documentation updates
- Keep commit messages concise (average ~55 characters).
  - Example:
    ```
    feat: add user authentication to login page
    ```

## Workflows

### Commit Workflow
**Trigger:** When making any code, test, or documentation changes  
**Command:** `/commit`

1. Stage your changes:
    ```
    git add .
    ```
2. Write a conventional commit message using one of the allowed prefixes:
    ```
    git commit -m "feat: implement user logout functionality"
    ```
3. Push your changes:
    ```
    git push
    ```

### Testing Workflow
**Trigger:** When adding or updating code that requires verification  
**Command:** `/test`

1. Identify or create a test file matching the pattern `*.test.*` (e.g., `api-utils.test.ts`).
2. Write or update tests for your feature or fix.
3. Run the test suite using the project's test runner (framework unknown; typically one of `npm test`, `yarn test`, or a similar command).
4. Ensure all tests pass before committing.

## Testing Patterns

- Test files follow the `*.test.*` naming convention (e.g., `user-profile.test.ts`).
- The specific testing framework is not detected, but tests should be colocated with or near the code they verify.
- Example test file structure:
    ```typescript
    // user-profile.test.ts
    import { getUserProfile } from './user-profile';

    describe('getUserProfile', () => {
      it('returns user data for a valid ID', () => {
        // test implementation
      });
    });
    ```

## Commands
| Command     | Purpose                                    |
|-------------|--------------------------------------------|
| /commit     | Guide for making conventional commits       |
| /test       | Steps for writing and running tests         |
```
