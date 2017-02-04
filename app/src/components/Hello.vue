<template>
  <div class="hello">
    <MyHeader></MyHeader>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from './MyHeader.vue'
import MyFooter from './MyFooter.vue'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Pierre-Alain\'s Protfolio'
    }
  },
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

