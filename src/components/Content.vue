<template>
      <div id='content' class="content-section col-md-8 mx-3">
        <div class="py-3">
          <p class="p-0 m-0 guide-header lead">Content Section</p>
          <hr/>
          <div>
            <vue-simple-markdown :source="guide"></vue-simple-markdown>
          </div>
        </div>
      </div>
</template>
<script>
import marked from "marked";
export default {
  name:'guide',
  props:{
    file: String
  },
  data(){
    return{
      guide: '',
      text:''
    }
  },
  watch:{
    file(val){
      console.log(val)
      let string = '../docs/'+val
      this.guide = string.toString()
      console.log(this.guide)
      fetch('https://raw.githubusercontent.com/NodeGG/nodecodes/master/'+this.guide)
         .then( r => r.text() )
         .then( t => {
           console.log(t)
           this.text=t
           console.log(this.text)
         })
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
