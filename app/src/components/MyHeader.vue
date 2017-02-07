<template>
  <header id="header">
    <div class="content">
      <div class="title">
        <h1><router-link to="/">{{ msg }}</router-link></h1>
        <p>{{ sub }}</p>
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
      sub: 'web-designer',
      logo: '../../assets/logo.png'
    }
  }
}
</script>

