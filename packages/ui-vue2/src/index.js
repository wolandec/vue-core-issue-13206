import Button from './components/Button.vue';
import UIContainerCEWrapper from './components/UIContainerCEWrapper.vue';

export { Button, UIContainerCEWrapper };

export default {
  install(Vue) {
    Vue.component('UiButton', Button);
    Vue.component('UiContainerCEWrapper', UIContainerCEWrapper);
  }
};
