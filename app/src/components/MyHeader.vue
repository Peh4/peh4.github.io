<template>
  <header id="header">
    <div class="content grid-2">
      <div class="title">
        <h1><router-link to="/">{{ msg }}</router-link></h1>
      </div>
      <nav><ul>
        <li><router-link to="/">Profil</router-link></li>
        <li><router-link to="/travaux">Travaux</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul></nav>
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

