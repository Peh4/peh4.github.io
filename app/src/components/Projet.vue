<template>
  
  <div class="projet" :class="'projet-'+$route.params.id">

    <MyHeader></MyHeader>
    
    <section id="main">

        
          <div class="content" :key="$route.params.id">
            <div class="grid">

              <h2>{{ portfolio.projets[$route.params.id].name }} </h2>

              <NavProjetArrow class=" one-sixth push txtright"></NavProjetArrow>
            </div>
            

            <div class="grid has-gutter">
              <transition name="slideTop" appear>
              <div id="metadata" class="one-quarter pbm">
                <ul>
                  <li v-if="portfolio.projets[$route.params.id].year">
                    <strong>{{ portfolio.projets[$route.params.id].year }}</strong>
                    <br/><br/>
                  </li>
                  <li v-for="tag in portfolio.projets[$route.params.id].tags">{{ tag }}</li>
                  
                  <li v-if="portfolio.projets[$route.params.id].client">
                    <br/>
                    Client : <i>{{ portfolio.projets[$route.params.id].client }}</i>
                  </li>
                  <li v-if="portfolio.projets[$route.params.id].url">
                  <br/>
                  <a target="_blank" :href="portfolio.projets[$route.params.id].url">Voir le site</a> </li>
                </ul>
              </div>
              </transition>
              <transition name="slide" appear>
              <div class="two-thirds text pbm">
                {{ portfolio.projets[$route.params.id].desc }}
              </div>
              </transition>
              
            </div> <!-- END grid -->
          </div> <!-- END content -->
        </transition>

      
      
    </section><!-- END main -->

    <transition name="slideTop" appear mode="out-in">
      <section id="images" :key="$route.params.id">
        <div class="content">
          <div class="grid-3 has-gutter">
            <div class="img" v-for="image in portfolio.projets[$route.params.id].images" :class="image.size">
              
              <img :src="image.path" :alt="image.alt">
              
            </div>
          </div>
        </div>
      </section>
    </transition>
    

    <NavProjet></NavProjet>
    
    
    <MyFooter></MyFooter>
  </div>
  
</template>

<script>
import MyHeader from './MyHeader.vue'
import MyFooter from './MyFooter.vue'
import NavProjet from './NavProjet.vue'
import NavProjetArrow from './NavProjetArrow.vue'
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
    MyFooter,
    NavProjet,
    NavProjetArrow
  },
  methods: {
    scroll: function (event) {
      window.scrollTo(0, 0)
    }
  }
}
</script>
