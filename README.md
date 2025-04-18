## Vue core 13206 issue reproduction repo

This is the case when custom element created from Vue 3 component is used in Vue 2 app 
using Vue 2 wrapper around custom element https://github.com/vuejs/core/pull/13208#issuecomment-2812116064.

Vue core package is patched by using [this](https://github.com/vuejs/core/pull/13208/commits/1a5ea558a5b25ef0218c5e6b3ba352eb8bd12508) commit

### To reproduce the issue do the next steps:

### Installation

```bash
pnpm install
```

### Build
```bash 
pnpm build:vue3; pnpm build:ce
```

### Run Storybook for Vue 2(see the story)

```bash
pnpm storybook:vue2
```

### Run Storybook for Vue 3(see the story)

```bash
pnpm storybook:vue3
```

Components from Vue 3 and Vue 2 storybooks should behave the same way. 
