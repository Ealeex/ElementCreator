# @ealeex/element-creator

A TypeScript-driven static class for easy creation and management of DOM elements. This utility simplifies the process of generating HTML elements with custom options, making dynamic UI construction more efficient and type-safe.

## Features
- Create common HTML elements (div, button, input, textarea, select, image, video, audio, link, etc.) with a single function call
- Pass options for id, class, parent, and element-specific attributes
- TypeScript types for all options and elements
- Supports appending elements to parents automatically
- Lightweight and dependency-free

## Installation

```
npm install @ealeex/element-creator
```

## Usage

Import and use the static methods to create elements:

```typescript
import ElementCreator from '@ealeex/element-creator';

const container = ElementCreator.div({ id: 'main', class: 'container', parent: document.body });
const button = ElementCreator.button({ value: 'Click Me', onclick: () => alert('Clicked!'), parent: container });
const input = ElementCreator.textInput({ placeholder: 'Type here...', parent: container });
```

## API

All methods are static and return the created element. Most methods accept an `options` object for customization.

- `div(options)` - Create a `<div>`
- `button(options)` - Create a `<button>`
- `textInput(options)` - Create an `<input type="text">`
- `textArea(options)` - Create a `<textarea>`
- `dropdown(options)` - Create a `<select>` with options
- `image(options)` - Create an `<img>`
- `video(options)` - Create a `<video>`
- `audio(options)` - Create an `<audio>`
- `link(options)` - Create an `<a>`
- `form(options)` - Create a `<form>`
- `span(options)` - Create a `<span>`
- `ul(options)` - Create a `<ul>`
- `text(options)` - Create a text element (e.g., h1, p, etc.)

See the source for full option types and details.

## Build

To build the project:

```
npm run build
```

## License

MIT
