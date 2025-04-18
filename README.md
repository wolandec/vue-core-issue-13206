# Vue Monorepo

This is a pnpm-based monorepo containing UI component libraries for Vue 2 and Vue 3.

## Structure

- `packages/ui-vue3`: Vue 3 UI components with Storybook
- `packages/ui-vue2`: Vue 2 UI components with Storybook
- `packages/ui-ce`: Custom Elements based on Vue 3 UI components

## Getting Started

### Prerequisites

- Node.js (>=14.0.0)
- pnpm (>=7.0.0)

### Installation

```bash
pnpm install
```

## Development

### Running Vue 3 UI Components

```bash
pnpm dev:vue3
```

### Running Vue 2 UI Components

```bash
pnpm dev:vue2
```

### Running Custom Elements

```bash
pnpm dev:ce
```

### Running Storybook for Vue 3

```bash
pnpm storybook:vue3
```

This will start Storybook on port 6006.

### Running Storybook for Vue 2

```bash
pnpm storybook:vue2
```

This will start Storybook on port 6007.

## Building

### Building Vue 3 UI Components

```bash
pnpm build:vue3
```

### Building Vue 2 UI Components

```bash
pnpm build:vue2
```

### Building Custom Elements

```bash
pnpm build:ce
```

### Building All Packages

```bash
pnpm build
```

## Components

### Button

Both packages include a Button component with the following props:

- `variant`: 'primary' | 'secondary' | 'danger'
- `size`: 'small' | 'medium' | 'large'

And the following events:

- `click`: Emitted when the button is clicked

### UIContainer

The Vue 3 package includes a UIContainer component with the following props:

- `isShown`: Boolean that controls the visibility of the container (default: true)

The component provides a simple container with a default slot for content.

### Custom Elements (Web Components)

#### Container Custom Element

The Vue 3 UIContainer component is available as a custom element (Web Component) with `shadowRoot: false` through the ui-ce package.

```html
<!-- Include the script -->
<script type="module" src="path/to/ui-ce.es.js"></script>

<!-- Use the custom element -->
<ui-container-ce is-shown="true">
  <div>Container content goes here</div>
</ui-container-ce>
```

#### Container Custom Element Wrapper

The Vue 3 package also includes a wrapper component for the UIContainer custom element:

```javascript
import { UIContainerCEWrapper } from 'ui-vue3';

// In your Vue template
<UIContainerCEWrapper :is-shown="true">
  Container content
</UIContainerCEWrapper>
```

#### Usage in JavaScript

```javascript
// Import the custom elements
import { UIContainerElement } from 'ui-ce';

// The custom elements are automatically registered
// You can use them directly in your HTML

// Toggle container visibility
const container = document.querySelector('ui-container-ce');
container.setAttribute('is-shown', 'false'); // Hide the container
container.setAttribute('is-shown', 'true');  // Show the container
```

#### Notes

- The custom elements are created in the ui-ce package using Vue 3's `defineCustomElement` function
- They import the original Vue components from the ui-vue3 package
- They have `shadowRoot: false` to allow easier styling from the parent document
- All props and events from the original Vue components are available in the custom elements
- The ui-ce package contains no Vue files, only JavaScript files that import from ui-vue3
