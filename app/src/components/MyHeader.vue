<template>
  <header id="header">
    <div class="content">
      <h1>{{ msg }}</h1>
      <img src="../assets/logo.png" height="200" width="200" :alt="msg">
    </div>
  </header>
</template>

<script>
export default {
  name: 'MyHeader',
  data () {
    return {
      msg: 'Welcome to Pierre-Alain\'s Portfolio',
      logo: '../../assets/logo.png'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
