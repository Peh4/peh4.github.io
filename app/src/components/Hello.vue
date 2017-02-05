<template>
   <transition name="fade">

  <div class="hello">

    <MyHeader></MyHeader>
    <div class="content">
      <div class="grid-3 has-gutter">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
        <div>13</div>
        <div>14</div>
        <div>15</div>
      </div>
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

