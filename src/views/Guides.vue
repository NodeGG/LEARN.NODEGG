<template>
  <div id='guides' class="mt-5 container-fluid">
    <div class="row">
      <Index/>
      <hr/>
      <Content/>
    </div>
  </div>
</template>
<script>
import Index from '@/components/Index';
import Content from '@/components/Content';
export default {
  name:'guides',
  components:{
    Index,
    Content
  }
}
</script>

<style>
.index-section{
  border: #000 solid 2px;
}
.guide-header{
  font-weight: bold;
}
</style>
