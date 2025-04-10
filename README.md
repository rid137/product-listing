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

This Next.js SSR Product Listing Application implements all the required features from the assessment:

### Core Features Implemented

1. **Product Listing Page (SSR)**

1. Server-side rendered product grid with pagination
1. Products display image, title, price, and "Add to Cart" button
1. Implemented server-side pagination

1. **Product Detail Page (Dynamic Routing)**

1. Dynamic routes for individual products (`/products/[id]`)
1. Server-side data fetching with proper metadata
1. Complete product information including image gallery, description, specifications, and reviews

1. **Search and Filtering**

1. Client-side search functionality with debouncing
1. Server-side filters for category and price range using query parameters
1. Filter state preserved during navigation

1. **Shopping Cart**

1. Client-side cart management using React context
1. Cart persistence between page reloads using localStorage
1. Cart counter in header showing total items

### Technical Implementation

1. **Next.js App Router**

1. Used server components for initial data fetching
1. Client components for interactive elements
1. Proper handling of loading states with Suspense

1. **TypeScript**

1. Implemented interfaces for all data types
1. Type-safe components and API responses

1. **SEO Optimization**

1. Dynamic metadata for all pages
1. Proper title and description tags
1. OpenGraph metadata for product pages

1. **Responsive Design**

1. Mobile-first approach with Tailwind CSS
1. Responsive product grid and navigation
1. Mobile menu for smaller screens

1. **State Management**

1. React Context for cart management
1. Client-side state for filters and search
1. Debounced search to prevent excessive re-renders

1. **Error Handling**

1. Proper error boundaries
1. Not found pages for invalid products
1. Loading states for all async operations

## Architecture Decisions

1. **Server vs. Client Components**

1. Used server components for data fetching and initial rendering
1. Client components for interactive elements like cart management and filters

1. **Data Fetching**

1. Implemented mock API functions that simulate real API calls
1. Server-side data fetching for initial page loads
1. Client-side navigation for subsequent page visits

1. **State Management**

1. Used React Context for global state (cart)
1. Local state for component-specific interactions
1. URL parameters for shareable filter state

1. **Performance Optimizations**

1. Image optimization with Next.js Image component
1. Debounced search and filter inputs
1. Pagination to limit data loading

## Potential Improvements

1. **Authentication and User Accounts**

1. Add user authentication for personalized experiences
1. Save cart items to user accounts

1. **Advanced Filtering**

1. Add more filter options like sorting and rating filters
1. Implement faceted search

1. **Performance**

1. Implement server-side caching strategies
1. Add more sophisticated loading states

1. **Testing**

1. Add unit and integration tests for critical components
1. Implement end-to-end testing
