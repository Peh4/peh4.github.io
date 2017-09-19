<template>
  <div class="hello">

    <MyHeader></MyHeader>

    <section id="main">
      <div class="content">
        
        

          <div class="grid-2">
            <transition name="slideFromLeft" appear>
              <div id="illustration" class="txtcenter">
                <div>P-A</div>
              </div>
            </transition>
            <transition name="slideTop" appear>
              <div class="text pal">
                <p>Bonjour, je m’appelle Pierre-Alain Leboucher.<br/>
      Je suis web-designer et intégrateur.
      Actuellement en Freelance. Je suis disponible pour de nouvelles opportunités en novembre.<br/><br/>

      J'ai été webmaster & resp. graphisme chez Reporters sans frontières de 2011 à 2015. J'ai aussi travaillé précédemment pour des clients variés tels que la HATVP, ALGECO, l'OKFfr, Mission enfance…
                </p>
                <br>
                <ul v-on:mouseover="mouseOverPA" v-on:mouseout="mouseOverPA">
                  <li v-on:mouseover="mouseOver(index)" v-on:mouseout="mouseOver(index)" v-for="(projet, index) in portfolio.projets" :class="'projet-'+index">
                    <router-link :to="'/projet/'+index">
                      {{ projet.name }}
                    </router-link>
                  </li>
                </ul>
              </div>
            </transition>
          </div>
      </div>

    </section>
    <MyFooter></MyFooter>
    
  </div>
  
</template>

<script>
import MyHeader from './MyHeader.vue'
import MyFooter from './MyFooter.vue'
import Portfolio from '../assets/portfolio.json'

export default {
  name: 'hello',
  components: {
    MyHeader,
    MyFooter
  },
  data () {
    return {
      portfolio: Portfolio
    }
  },
  methods: {
    mouseOver: function (e) {
      document.getElementById('illustration').classList.toggle('projet-' + e)
    },
    mouseOverPA: function () {
      document.getElementById('illustration').classList.toggle('projets')
    }
  }
}
</script>

