<template>
  
  <div class="travaux" >

    <MyHeader></MyHeader>
    
    <section id="main">
      <div class="content">
      
        <transition name="slide" appear>
          <div>
            <ul>
              <li v-for="(projet, index) in portfolio.projets">
                <router-link class="grid" :to="'/projet/'+index">
                <strong class="one-sixth">{{ projet.client }}</strong> <div class="one-half">{{ projet.name }}</div> <div><span v-for="tag in projet.tags">{{ tag }},</span></div></router-link>
              </li>
            </ul>
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

