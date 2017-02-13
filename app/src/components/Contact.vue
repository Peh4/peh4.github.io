<template>
  
  <div class="contact">
   
    <MyHeader></MyHeader>
    
    <section id="main">
      <div class="content">
        
        

          <div class="grid-2">
            <transition name="slideFromLeft" appear>
              <div id="illustration" class="txtcenter">
              </div>
            </transition>
            <transition name="slideTop" appear>
              <div class="text pal">
                <p>Pierre-Alain Leboucher<br>
          pierrealainleboucher@gmail.com<br>
          06 86 68 43 46
                </p>
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

export default {
  name: 'Contact',
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

