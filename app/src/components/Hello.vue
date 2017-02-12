<template>
  <div class="hello">

    <MyHeader></MyHeader>

    <section id="main">
      <div class="content">
        
        <transition name="slide" appear>

          <div class="grid-2">
            <div class="illustration">
              
            </div>
            <div class="text">
              <p>Bonjour, je m’appelle Pierre-Alain.<br/>
    Je suis web-designer et intégrateur.
    Actuellement en Freelance, je suis ouvert à de nouvelles opportunités.<br/><br/>

    J'ai été webmaster & resp. graphisme chez Reporters sans frontières. J'ai aussi travaillé précédemment pour des clients variés tels que la HATVP, ALGECO, l'OKFfr, Mission enfance…</p>
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

export default {
  name: 'hello',
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

