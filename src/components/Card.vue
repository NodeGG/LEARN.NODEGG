<template>
<div id="card">
  <div class="card">
    <img class="card-img-top" src="" alt="Card image cap">
    <div class="card-body">
      <p class="card-text">{{card_text}}</p>
      <router-link class="btn btn-outline-dark" to='/'>{{button_text}}</router-link>
    </div>
  </div>
</div>
</template>
<script>
  export default {
    name:'Card',
    props:{
        card_text:String,
        button_text:String,
    }
  }
</script>
<style>

</style>
