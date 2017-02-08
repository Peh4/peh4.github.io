<template>
  
  <div class="contact">
   
    <MyHeader></MyHeader>
    
      <div class="content main">
        <transition name="slide" appear>
        <div class="grid-2">
          <div class="illustration">
            
          </div>
          <div class="text">
          <p>Pierre-Alain Leboucher<br>
          pierrealainleboucher@gmail.com<br>
          06 86 68 43 46</p>
          </div>
        </div>
        </transition>

      </div>
    
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

