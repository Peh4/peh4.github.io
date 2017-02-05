<template>
  <header id="header">
    <div class="content">
      <div class="grid-4-small-2 has-gutter">
        <router-link class="center" to="/">{{ msg }}</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MyHeader',
  data () {
    return {
      msg: 'Pierre-Alain Leboucher',
      logo: '../../assets/logo.png'
    }
  }
}
</script>

