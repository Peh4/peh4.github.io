<template>

  <div class="projet">
    <MyHeader></MyHeader>
    <transition name="slide" mode="out-in">
      <div class="content main" :key="$route.params.id">
      
        <div class="grid-2">
        <div class="illustration">
          
        </div>
        <div class="text">
            <p>Projet {{ $route.params.id }}</p>
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
  name: 'projet',
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
