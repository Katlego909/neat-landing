# Project Overview

This is a Next.js web application named "neat" that appears to be a marketplace for home services. It connects customers with service providers for tasks like cleaning, repairs, gardening, and more.

## Key Technologies

*   **Framework**: [Next.js](https://nextjs.org/) (using the App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **UI Library**: [React](https://reactjs.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components**: [Headless UI](https://headlessui.com/) and [Heroicons](https://heroicons.com/)
*   **Linting**: [ESLint](https://eslint.org/) with Next.js specific configurations.

## Project Structure

*   The main application logic is within the `app/` directory, following the Next.js App Router convention.
*   Reusable UI components are located in the `components/` directory.
*   Public assets like images and SVGs are in the `public/` directory.
*   The project includes pages for a blog, help center, pricing, privacy policy, terms and conditions, and a multi-step service provider signup flow.

# Building and Running

You can use the following npm scripts to work with the project:

*   **Run development server**: `npm run dev`
*   **Create a production build**: `npm run build`
*   **Start the production server**: `npm run start`
*   **Lint the code**: `npm run lint`

# Development Conventions

*   The project follows standard Next.js and React development patterns.
*   Code is written in TypeScript (`.tsx` files).
*   Styling is done using Tailwind CSS utility classes.
*   Code quality is enforced using ESLint.
*   There is currently no testing framework (like Jest or Cypress) configured, as indicated by the `package.json` and the empty `test/` directory.
