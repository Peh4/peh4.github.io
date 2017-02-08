<template>
  <header id="header">
    <div class="content grid-2">
      <div class="title">
        <h1><router-link to="/">{{ msg }}</router-link></h1>
      </div>
      <nav><ul>
        <li><a href="">Profil</a></li>
        <li><a href="">Work</a></li>
        <li><a href="">Contact</a></li>
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

