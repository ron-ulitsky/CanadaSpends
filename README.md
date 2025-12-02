# Canada Spends helps Canadians understand how their government spends their money

## Ambition

Canada Spends aims to be the easiest way for Canadians to understand how their government spends their money.
A government cannot be held accountable if people don't understand what the government is doing. We aim to
bring transparency to every level of government in Canada: federal, provincial, municipal and school boards.

We bring this transparency in two ways:

1. We parse, aggregate and visualize audited financial statements that governments publish so that everyone can
   understand how their government spends their money and how it changes over time.
2. We aggregate and normalize government spending databases to make the data fast to search and accessible.

### Roadmap

By the end of 2025, we aim to have automated data ingestion pipelines for every province and territory and the largest 20 municipalities in Canada. See [Issues](https://github.com/BuildCanada/CanadaSpends/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22Public%20Accounts%22) for target provinces and cities.

## Getting Started

Canada Spends is a NextJS app. You can run it either with Docker (recommended) or directly with pnpm.

### Option 1: Docker (Recommended)

Docker provides a consistent development environment across all team members.

**Prerequisites:**
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running

**Setup:**

1. Clone the repository:
   ```bash
   git clone https://github.com/BuildCanada/CanadaSpends.git
   cd CanadaSpends
   ```

2. Copy the environment template (optional - only needed for analytics/newsletter features):
   ```bash
   cp .env.example .env.local
   ```

3. Start the development server:
   ```bash
   docker compose up
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

**Useful Docker Commands:**
```bash
# Start the development server
docker compose up

# Start in detached mode (runs in background)
docker compose up -d

# Rebuild and start (after Dockerfile changes)
docker compose up --build

# Stop the containers
docker compose down

# View logs
docker compose logs -f app

# Execute commands inside the container
docker compose exec app pnpm lint
docker compose exec app pnpm format
```

### Option 2: Local pnpm Installation

If you prefer not to use Docker, you can run the app directly:

**Prerequisites:**
- Node.js 20+ installed
- pnpm 9.5.0+ installed (`corepack enable && corepack prepare pnpm@9.5.0 --activate`)

**Setup:**
```bash
pnpm install
pnpm run dev
```

## Linting

This project uses ESLint with Next.js configuration. Run linting with:

```bash
pnpm lint          # Check for linting issues
pnpm lint:fix      # Auto-fix auto-fixable issues
```

The linting configuration enforces TypeScript best practices, React rules, and Next.js optimizations while keeping most issues as warnings (temporarily) to avoid blocking development.

## Prettier

This project uses [Prettier](https://prettier.io/) for code formatting. To format your code manually, run:

```bash
pnpm format
```

## Git Hooks

This project automatically runs linting checks and formatting before each commit using `simple-git-hooks`. This is enabled automatically when you run `pnpm install`. If you need to enable it manually:

```bash
npx simple-git-hooks
```

If linting fails, the commit will be blocked until issues are resolved.
