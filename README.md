# CSU Strapi App

Strapi Service for CSU website

## Table of contents

- [Getting started](#getting-started)
- [Usage](#usage)
- [Development Guidelines](#development-guidelines)
- [Information](#information)
- [Support](#support)
- [Boilerplate](#boilerplate)

## Getting started

The following steps will get you everything you need to develop and make the project run on ALL Linux distributions and MacOS.

### 1. Run the following command and configure your local environemnt in the `.env` file:

```bash
cp .env.example .env
```

## Usage

### Configuration

If not else specified in the `.env` file, the _Strapi CMS_ service will start at http://localhost:1337/.

Configure `.env` for database connection and setting of additional credentials and secrets.

### Development Tools

Everything is already set up for you, by following the 3-step [Getting Started](#getting-started) section.

If you need to add other development tools, **DO NOT** install them on your local machine! Follow to the [Nix](https://nix.dev) syntax to add new tools, by inserting them in the `buildInputs` list.

### That's it!

Run your application with:

- `yarn start` to build and start the application as in production.
- `yarn dev` to start the application with hot reloading on file changes.

## Development Guidelines

Before getting started with the development, make sure to check out the guide on our [development workflow](https://github.com/codeworks-projects/guide-development).

## Information

### About the project's ecosystem

This is a [Strapi](https://strapi.io/) project to enable a flexible CMS for headless applications.

The ecosystem is based on [nix.dev](https://nix.dev) tutorials and the repository gets you started with [Nix](https://nixos.org/):

- [niv](https://github.com/nmattia/niv) for painless dependency management (aka pinning) with a weekly cronjob to bump dependencies
- [direnv](https://direnv.net/) for automatically loading your developer environment
- [gitignore.nix](https://github.com/hercules-ci/gitignore.nix) for respecting `.gitignore` when using your project as a source
- [pre-commit-hooks.nix](https://github.com/cachix/pre-commit-hooks.nix) for running linters (defaults to `shellcheck`, `nix-linter` and `nixpkgs-fmt`) when committing and on the CI
- [commitizen](https://github.com/commitizen/cz-cli) for writing commits in the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard. Having a convention on your commits makes it possible to parse them and use them for generating automatically the version or a [changelog](https://github.com/conventional-changelog/conventional-changelog)
- [standard-version](https://github.com/conventional-changelog/standard-version), utility for versioning using [Semantic Versioning](https://semver.org/) and CHANGELOG generation powered by Conventional Commits
- [GitHub Actions](https://github.com/features/actions) for CI with [dependabot](https://dependabot.com/) automatically bumping GitHub Actions versions

### Support

For support, please contact [info@flashbeing.com](mailto:info@flashbeing.com).

### Boilerplate

The project uses this boilerplate: https://github.com/codeworks-projects/template-strapi
