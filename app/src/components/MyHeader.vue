<template>
  <header id="header">
    <div class="content">
      <div class="grid-3 has-gutter">
        <h1><router-link to="/">{{ msg }}</router-link></h1>
        <nav class="two-thirds">
          <ul>
            <li><router-link to="/">Accueil</router-link></li>
            <!-- <li><router-link to="/projet/0">Projets</router-link></li> -->
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MyHeader',
  data () {
    return {
      msg: 'P-A',
      logo: '../../assets/logo.png'
    }
  }
}
</script>

