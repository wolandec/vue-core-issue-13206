import UIContainerCEWrapper from '../UIContainerCEWrapper.vue';
import { ref } from 'vue';

export default {
  title: 'Components/UIContainerCEWrapper',
  component: UIContainerCEWrapper,
  argTypes: {
    isShown: {
      control: 'boolean',
      description: 'Controls the visibility of the container',
    },
  },
};

// Template for all stories
export const Working = (args) => ({
  components: { UIContainerCEWrapper },
  setup() {
    const isShown = ref(false);
    const counter = ref(0);

    return { isShown, counter };
  },
  template: `
    <div style="display: flex; flex-direction: column">
      Vue 2 doesn't works: "v-if content" text doesn't appear.
    <button @click="isShown = !isShown; counter++">Toggle shown</button>
    <UIContainerCEWrapper :is-shown="isShown">
      Counter: {{counter}}
      <div v-if="counter > 1">
        v-if content
      </div>
      <div v-show="counter > 1">
        v-show content
      </div>
    </UIContainerCEWrapper>
    </div>
  `,
});
