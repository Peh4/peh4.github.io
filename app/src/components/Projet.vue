<template>
  
  <div class="projet">
    
    <MyHeader></MyHeader>
    
    <div class="content main">

      <transition name="slide" appear>
        <div class="content" :key="$route.params.id">
          <h2>{{ portfolio.projets[$route.params.id].name }}</h2>
          <div class="grid has-gutter">
            <div id="metadata" class="one-quarter">
              <ul>
                <li v-if="portfolio.projets[$route.params.id].year">
                  {{ portfolio.projets[$route.params.id].year }}
                  <br/>
                  -
                </li>
                <li v-for="tag in portfolio.projets[$route.params.id].tags">{{ tag }}</li>
                
                <li v-if="portfolio.projets[$route.params.id].client">
                  -<br/>
                  Client : {{ portfolio.projets[$route.params.id].client }}
                </li>
                <li v-if="portfolio.projets[$route.params.id].url">
                -<br/>
                <a :href="portfolio.projets[$route.params.id].url">Voir le site</a> </li>
                <li></li>
              </ul>
            </div>
            <div class="two-thirds">
              {{ portfolio.projets[$route.params.id].desc }}
            </div>
          </div> <!-- END grid -->
        </div> <!-- END content -->
      </transition>
      
    </div><!-- END main -->
    <div id="images">
      <div class="content">
        <div class="grid-3 has-gutter">
          <div class="img" v-for="image in portfolio.projets[$route.params.id].images" :class="image.size">
            <img :src="image.path" :alt="image.alt">
          </div>
        </div>
      </div>
    </div>
    <div id="navProjets" class="line content">
      <div class="grid has-gutter">
        <router-link class="txtleft left"
          v-if="$route.params.id > 0" 
          :to="'/projet/'+($route.params.id-1)"> <i class="fa fa-chevron-left" aria-hidden="true"></i>

          {{ portfolio.projets[Number($route.params.id)-1].name }}
        </router-link>
        <div v-else></div>

        <div class="one-sixth txtcenter">
          <a v-on:click="scroll">
            <i class="fa fa-arrow-up" aria-hidden="true"></i>

          </a>
        </div>
        
        <router-link class="txtright right" 
          v-if="$route.params.id < portfolio.projets.length-1" 
          :to="'/projet/'+(Number($route.params.id)+1)">
          {{ portfolio.projets[Number($route.params.id)+1].name }}
          <i class="fa fa-chevron-right" aria-hidden="true"></i>

        </router-link>
        <div v-else></div>
      </div>
    </div>
    
    <MyFooter></MyFooter>
  </div>
  
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
  },
  methods: {
    scroll: function (event) {
      window.scrollTo(0, 0)
    }
  }
}
</script>
