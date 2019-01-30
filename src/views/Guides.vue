<template>
  <div id='guides' class="container-fluid pt-4">
    <div class="row">
      <div class="col index-section pt-3 px-0 mx-3">
        <p class="p-0 m-0 guide-header lead text-center">Guides: [SELECT]</p>
        <hr/>
        <div class="">
          <Index @clicked='getFile'/>
        </div>
      </div>
      <hr/>
      <div class="guide-section col-md-8">
        <Content :file='filename'/>
      </div>
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
  width:250px;
  min-height: 150px;
}

@media (min-width: 765.98px) {
  .index-section{
    position: fixed;
    top:50;
    left:0;
  }
}


</style>
