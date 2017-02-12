<template>
  <nav id="navProjet">
    <div class="content">
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
  </nav>
</template>

<script>

import Portfolio from '../assets/portfolio.json'

export default {
  name: 'NavProjet',
  data () {
    return {
      portfolio: Portfolio
    }
  },
  methods: {
    scroll: function (event) {
      window.scrollTo(0, 0)
    }
  }
}
</script>
