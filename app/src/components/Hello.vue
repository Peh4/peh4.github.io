<template>
   <transition name="fade">

  <div class="hello">

    <MyHeader></MyHeader>

    <div class="content main">

      <div class="grid-2">
        <div class="illustration">
          
        </div>
        <div class="text">
          <p>Bonjour, je m’appelle Pierre-Alain.<br/>
Je suis web-designer et intégrateur.
Actuellement en Freelance, je suis à l'écoute de nouvelles opportunités.<br/><br/>

J'ai été webmaster & resp. graphisme chez Reporters sans frontières. J'ai aussi travaillé précédemment pour des clients variés tels que la HATVP, ALGECO, l'OKFfr, Mission enfance…</p>
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
  name: 'hello',
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

