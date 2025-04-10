# WithinLabs Frontend Assessment

This is the web app for the WithinLabs Frontend assessment. It is built with Typescript, Nextjs and Tailwind CSS.

## Getting Started

#### First, clone the repository:

```bash
git clone https://github.com/rid137/withinLabs-assess.git
```

### Package Manager

This project uses `npm` as the package manager. If you don't have Node.js (which includes `npm`) installed, download it from [Node.js official website](https://nodejs.org). Once installed, `npm` will be available on your system.

#### Install all dependencies

```bash
npm install
```

#### Run the development server:

```bash
npm run dev
```

- By default, this will run the project on [http://localhost:3000](http://localhost:3000)
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the web-app.

## Project Implementation

```typescriptreact project="nextjs-ssr-product-listing"
...
```

## Project Overview

This Next.js SSR Product Listing Application implements all the required features from the assessment.

### Core Features Implemented

#### 1. Product Listing Page (SSR)

- Server-side rendered product grid with pagination.
- Products display image, title, price, and "Add to Cart" button.
- Implemented server-side pagination.

#### 2. Product Detail Page (Dynamic Routing)

- Dynamic routes for individual products (`/products/[id]`).
- Server-side data fetching with proper metadata.
- Complete product information including image gallery, description, specifications, and reviews.

#### 3. Search and Filtering

- Client-side search functionality with debouncing.
- Server-side filters for category and price range using query parameters.
- Filter state preserved during navigation.

#### 4. Shopping Cart

- Client-side cart management using React context.
- Cart persistence between page reloads using `localStorage`.
- Cart counter in the header showing total items.

### Technical Implementation

#### 1. Next.js App Router

- Used server components for initial data fetching.
- Client components for interactive elements.
- Proper handling of loading states with `Suspense`.

#### 2. TypeScript

- Implemented interfaces for all data types.
- Type-safe components and API responses.

#### 3. SEO Optimization

- Dynamic metadata for all pages.
- Proper title and description tags.
- OpenGraph metadata for product pages.

#### 4. Responsive Design

- Mobile-first approach with Tailwind CSS.
- Responsive product grid and navigation.
- Mobile menu for smaller screens.

#### 5. State Management

- React Context for cart management.
- Client-side state for filters and search.
- Debounced search to prevent excessive re-renders.

#### 6. Error Handling

- Proper error boundaries.
- Not found pages for invalid products.
- Loading states for all async operations.

### Architecture Decisions

#### 1. Server vs. Client Components

- Used server components for data fetching and initial rendering.
- Client components for interactive elements like cart management and filters.

#### 2. Data Fetching

- Implemented mock API functions that simulate real API calls.
- Server-side data fetching for initial page loads.
- Client-side navigation for subsequent page visits.

#### 3. State Management

- Used React Context for global state (cart).
- Local state for component-specific interactions.
- URL parameters for shareable filter state.

#### 4. Performance Optimizations

- Image optimization with Next.js `Image` component.
- Debounced search and filter inputs.
- Pagination to limit data loading.

### Potential Improvements

#### 1. Authentication and User Accounts

- Add user authentication for personalized experiences.
- Save cart items to user accounts.

#### 2. Advanced Filtering

- Add more filter options like sorting and rating filters.
- Implement faceted search.

#### 3. Performance

- Implement server-side caching strategies.
- Add more sophisticated loading states.

#### 4. Testing

- Add unit and integration tests for critical components.
- Implement end-to-end testing.
