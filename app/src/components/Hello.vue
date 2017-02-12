<template>
  <div class="hello">

    <MyHeader></MyHeader>

    <section id="main">
      <div class="content">
        
        <transition name="slide" appear>

          <div class="grid-2">
            <div class="illustration txtcenter pal">P-A</div>
            <div class="text pal">
              <p>Bonjour, je m’appelle Pierre-Alain Leboucher.<br/>
    Je suis web-designer et intégrateur.
    Actuellement en Freelance, je suis ouvert à de nouvelles opportunités.<br/><br/>

    J'ai été webmaster & resp. graphisme chez Reporters sans frontières de 2011 à 2015. J'ai aussi travaillé précédemment pour des clients variés tels que la HATVP, ALGECO, l'OKFfr, Mission enfance…
              </p>
              <br>
              <ul>
                <li class="listProjet" v-for="(projet, index) in portfolio.projets">
                  <router-link :to="'/projet/'+index">
                    {{ projet.name }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>

        </transition>
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
  }
}
</script>

