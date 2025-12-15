# Outsera Movies

A Next.js application for exploring movie award data, including winners by year, studios with win counts, years with multiple winners, and producer intervals.

## Features

- **Dashboard**: View tables for movie winners by year, studios with win counts, years with multiple winners, and producer intervals.
- **Movie List**: Browse and search through movies.
- **API Endpoints**: RESTful APIs for fetching award data.

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Tables**: TanStack React Table
- **Testing**: Jest
- **Icons**: Lucide React

## Getting Started

1. Setup .env based on .env.example

```bash
cp .env.example .env
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the application for production
- `npm run start`: Start the production server
- `npm run lint`: Run ESLint
- `npm test`: Run tests
- `npm run test:watch`: Run tests in watch mode

## API Endpoints

- `GET /api/get-winners-by-year`: Get movie winners by year
- `GET /api/get-studios-with-win-count`: Get studios with win counts
- `GET /api/get-years-with-multiple-winners`: Get years with multiple winners
- `GET /api/get-intervals`: Get producer intervals
- `GET /api/get-movies`: Get movies list

## Testing

Run tests with:

```bash
npm test
```