<template>
  
  <div class="projet">
    <MyHeader></MyHeader>
    
    <div class="content main">
    
      <div class="grid-2">
        <div class="illustration">
          
        </div>

        

          <div class="text">
            <transition name="slide" appear>
              <div :key="$route.params.id">
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
            </transition>
          </div>
            
        </div>
      </div>
    
    <MyFooter></MyFooter>
  </div>
  </transition>
  
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

</style>
