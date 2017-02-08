<template>
  <div class="travaux">
    <MyHeader></MyHeader>

    <transition name="fade">


    <div class="content main">

      <div class="grid-2">
        <div class="illustration">
          
        </div>
        <div class="text">
          <p>Travaux</p>
          <ul>
            <li>
              <router-link to="/projet/0">projet 1</router-link>
            </li>
            <li>
              <router-link to="/projet/1">projet 2</router-link>
            </li>
            <li>
              <router-link to="/projet/2">projet 3</router-link>
            </li>
          </ul>
        </div>
      </div>

    </div>

    </transition>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from './MyHeader.vue'
import MyFooter from './MyFooter.vue'

export default {
  name: 'Travaux',
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

