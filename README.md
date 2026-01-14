# Favourite Books Journal

Simple SPA favourite books keeper. Allows for books listing, filtering by name
and adding new books to the list.

## Steps to run Locally

### Pre-requisities

- Node v22.0.0 or better

### Getting Started

```sh
  # 1
  npm run install
  # 2
  npm run dev
```

## Features

- Supports a wide variety of screen sizes
- List all your favourite books
- Filter them by name
- Add new books

## Tech stack

- Vite
- React
- Typescript
- Redux
- Sass
- ~~Material UI~~

## Some of the decisions

- **Drop the Material UI.** It does not offer elements good enough to accomodate
  both desktop and mobile view of unlimited number of books.
- **The List of books needs to handle unlimited number of books.** Solution:
  - `react-window` for rendering only the elements in the viewport
  - scroll to top button on the mobile devices to reach the filter comfortably
    from any point of scroll
  - `useTransition()` hook on the filter to prevent lagging during the setting
    of the filter
  - fine-tuned book card appearance on the mobile to show a greater number of
    books per viewport
