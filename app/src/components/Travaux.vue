<template>
  
  <div class="travaux" >

    <MyHeader></MyHeader>
    
    <section id="main">
      <div class="content">
      
        <transition name="slide" appear>
          <div class="grid-2">
            <div class="illustration">
              
            </div>
            <div class="text">
              <p>Travaux</p>

              <ul>
                <li v-for="(projet, index) in portfolio.projets">
                  <router-link :to="'/projet/'+index">
                  {{ projet.name }}</router-link>

                  <a v-if="projet.url" :href="projet.url"> Visiter le site </a>
                </li>

                
                
              </ul>
            </div>
          </div>

        </transition>
      </div> <!-- END content -->
    </section>
    <MyFooter></MyFooter>
  </div>
  
</template>

<script>
import MyHeader from './MyHeader.vue'
import MyFooter from './MyFooter.vue'
import Portfolio from '../assets/portfolio.json'

export default {
  name: 'Travaux',
  components: {
    MyHeader,
    MyFooter
  },
  data () {
    return {
      portfolio: Portfolio
    }
  }
}
</script>

