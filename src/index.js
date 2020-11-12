import Vue from 'vue';
import Login from './components/Login.vue';
const Components = {
    Login
};
Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});
export default Components;
