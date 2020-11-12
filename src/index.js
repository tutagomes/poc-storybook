import Vue from 'vue';
import Login from './components/Login.vue';
import Header from './stories/Header.vue';

const Components = {
    Login,
    Header
};
Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});
export default Components;
