<template>
  <div id="header">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">{{main_text}}</h1>
        <p class="lead">{{sub_text}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:'Header',
    props:{
      main_text:String,
      sub_text:String
    }
  }
</script>
<style>

</style>
