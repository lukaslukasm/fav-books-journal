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
- Radix
- ~~Material UI~~

## Pinned Decisions

- **Material UI does not meet the needs.** It does not offer elements good
  enough to accomodate both desktop and mobile view of unlimited number of
  books.
- **The List of books needs to handle unlimited number of books.** Solution:
  - virtualizing the list of books
  - scroll to top button on mobile devices to reach the filter comfortably
    from any point of scroll
  - double buffering + `useTransition()` to make the filter feel snapy and filtering performant
  - fine-tuned book card appearance on the mobile to show a greater number of
    books per viewport
- **Decouple, but sensibly.** The `BookCard` component consists of 3 components:
  - `BookCard`
  - `BookCardFace`
  - `BookCardExpanded`

    Underlying Radix Dialog leans towards tight coupling due to it's need of using
    library-specific parts to build the content of the overlay window. In order to
    avoid unnecessary complexity, the `BookCardExpanded` accepts `TitleComponent`
    and `DescriptionComponent` props of `React.ElementType` type, which allow for
    passing in the Radix's specific elements into the component. Furthermore,
    aforementioned props have sensible defaults, what makes the complex API
    completely optional. Lastly, the close modal button is designed to be passed
    in as a whole and is also optional, which makes the component completely usage
    agnostic.

- **Fully coupled Filter by Title**. The inputs by themselves are hard to abstract with preserving a11y, + considering how small and simple this filter is, there is not much value to be abstracted out. If we wanted to add a filter by author name, I think it would be easier to just copy the filter and adjust all the specifics.
