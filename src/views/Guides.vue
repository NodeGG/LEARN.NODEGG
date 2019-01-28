<template>
  <div id='guides' class="mt-5 container-fluid">
    <div class="row">
      <Index @clicked='getFile'/>
      <hr/>
      <Content :file='filename'/>
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
  },
  data(){
    return {
      filename:''
    }
  },
  methods:{
    getFile(value){
      this.filename = value
    }
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
