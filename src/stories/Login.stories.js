import Login from '../components/Login.vue';

export default {
  title: 'Example/Login',
  component: Login,
};

const Template = (credentials, error) => ({
  props: { credentials, error },
  components: { Login },
  template:
    '<login v-model="credentials" :error="error" @onLogin="onLogin"/>',
});

export const Normal = Template.bind({});
Normal.args = {
  credentials: {
    email: 'teste@teste.com',
    password: 'ahsadioufhasd'
  }
};

export const Error = Template.bind({});
Error.args = {
  credentials: {
    email: 'teste-teste.com',
    password: 'ahsadioufhasd'
  },
  error: 'Email inválido'
};
