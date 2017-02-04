<template>
  <footer id="footer">
    <div class="content">
      CCBY Pierre-Alain Leboucher
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MyFooter',
  data () {
    return {
      msg: 'Welcome to Pierre-Alain\'s Protfolio',
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
