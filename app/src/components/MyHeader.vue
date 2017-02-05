<template>
  <header id="header">
    <div class="content">
      <h1><router-link to="/">{{ msg }}</router-link></h1>
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

