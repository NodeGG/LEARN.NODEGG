<template>
<div id="card">
  <div class="card">
    <!-- <img class="card-img-top" src="" alt="Card image cap"> -->
    <div class="card-body d-flex flex-column justify-content-between">
      <p class="card-text">{{card_text}}</p>
        <router-link class="btn btn-outline-dark" :to='to'>{{button_text}}</router-link>
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
        to:String
    }
  }
</script>
<style>
  .card{
    min-height:150px;

  }

</style>
