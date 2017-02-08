<template>
   <transition name="fade">

  <div>

    <MyHeader></MyHeader>

    <div class="content main">

      <div class="grid-2">
        <div class="illustration">
          
        </div>
        <div class="text">
        <p>Pierre-Alain Leboucher<br>
        pierrealainleboucher@gmail.com<br>
        06 86 68 43 46</p>
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
  name: 'Contact',
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

