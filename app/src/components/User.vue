<template>

  <div class="user">
    <MyHeader></MyHeader>
    <transition name="slide" mode="out-in">
      <div class="content" :key="$route.params.id">
        <div>User {{ $route.params.id }}</div>
      </div>
    </transition>
    <!-- <MyFooter></MyFooter> -->
  </div>
  
</template>

<script>
import MyHeader from './MyHeader.vue'
import MyFooter from './MyFooter.vue'

export default {
  name: 'user',
  data () {
    return {
      msg: 'Welcome to Pierre-Alain\'s Protfolio'
    }
  },
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-active {
    opacity:0;
  }
  .slide-enter-active, .slide-leave-active {
    transition: transform .5s, opacity .5s;
  }
  .slide-enter {
    transform: translateX(-200px);
    opacity: 0;    
  }

  .slide-leave-active {
    transform: translateX(200px);
    opacity: 0;
  }

</style>
