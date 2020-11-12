<template>
  <div>
    <div class="nes-container with-title is-centered">
        <p class="title">Entrar</p>
        <div class="nes-field">
            <label for="name_field">Email</label>
            <input type="text" v-model='value.email' :class="error ? 'nes-input is-error' : 'nes-input'" @input="$emit('input', value)">
        </div>
        <br>
        <div class="nes-field">
            <label for="name_field">Senha</label>
            <input type="password" v-model='value.password' :class="error ? 'nes-input is-error' : 'nes-input'" @input="$emit('input', value)">
        </div>
        <br>
        <span class="nes-text is-error" style='margin-top: 10px; margin-bottom: 20px'>{{error}}</span>
        <br v-if='error'>
          <div style='width: 100%; text-align: right'>
            <label>
              <input type="checkbox" class="nes-checkbox" checked v-model='remember' @click="onRemember()"/>
            <span>Lembrar minhas credenciais</span>
          </label>
          </div>
        <br><br>
        <button type="button" class="nes-btn is-success" @click="onLogin()" style='width: 200px'>Login</button>
    </div>
  </div>
</template>

<script>
import "nes.css/css/nes.min.css"

export default {
  name: 'Login',
  props: {
    value: {
        type: Object,
        required: true
    },
    error: {
        type: String,
        default: ''
    }
  },
  methods: {
      onLogin () {
        this.$emit('onLogin')
      },
      onRemember () {
        this.$emit('onRemember', this.remember)
      }
  },
  data() {
    return {
      remember: false
    }
  }
}
</script>

