<template>
<div id='guides' class="container-fluid pt-2 bg-white">
  <div class="row bg-white">
    <div class="col index-section px-0 mx-2 z-1">
      <p class="p-0 m-0 guide-header lead text-center">Guides: [SELECT]</p>
      <hr />
      <div class="">
        <Index @clicked='getFile' />
      </div>
    </div>
    <hr />
    <div class="guide-section col-md-8 z-0">
      <Content :file='filename' />
    </div>
  </div>
</div>
</template>
<script>
import Index from '@/components/Index';
import Content from '@/components/Content';
export default {
  name: 'guides',
  components: {
    Index,
    Content
  },
  data() {
    return {
      filename: ''
    }
  },
  methods: {
    getFile(value) {
      this.filename = value
    }
  }
}
</script>

<style>
.index-section {
  background-color: #fff;
  border: #000 solid 2px;
  position: fixed;
  min-height: 150px;
  width: 95vw
}
@media (min-width: 767.98px) {
  .index-section {
    width: 250px;
    top: 50;
    left: 0;
  }
}
@media (max-width: 767.98px) {
  .guide-section {
    margin-top:150px
  }
}
</style>
