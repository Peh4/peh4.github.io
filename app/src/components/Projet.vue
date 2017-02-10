<template>
  
  <div class="projet">
    <MyHeader></MyHeader>
    
    <div class="content main">

    <transition name="projet" appear mode="out-in">
      <div class="grid-2" :key="$route.params.id" >
        <div class="illustration">
          
        </div>

        

          <div class="text">
            
              <div>
                <p>Projet {{ $route.params.id }}</p>
                
                {{ portfolio.projets[$route.params.id].name }}

                <br/>
                  <router-link 
                    v-if="$route.params.id > 0" 
                    :to="'/projet/'+($route.params.id-1)">
                    {{ portfolio.projets[Number($route.params.id)-1].name }}
                </router-link>
                <br>
                <router-link 
                    v-if="$route.params.id < portfolio.projets.length-1" 
                    :to="'/projet/'+(Number($route.params.id)+1)">
                    {{ portfolio.projets[Number($route.params.id)+1].name }}
                </router-link>


              </div>
            
          </div>
            
        </div>
        </transition>
      </div>
    
    <MyFooter></MyFooter>
  </div>
  </transition>
  
</template>

<script>
import MyHeader from './MyHeader.vue'
import MyFooter from './MyFooter.vue'
import Portfolio from '../assets/portfolio.json'

export default {
  name: 'projet',
  data () {
    return {
      msg: 'Welcome to Pierre-Alain\'s Protfolio',
      portfolio: Portfolio
    }
  },
  components: {
    MyHeader,
    MyFooter
  }
}
</script>
