<template>
   <transition name="fade">

  <div class="hello">

    <MyHeader></MyHeader>
    <div class="content main">
      <p>hello</p>
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

