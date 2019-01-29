<template>
  <div id='index' class="index-item h-100 col-md-2 mx-3 my-2 px-0">
        <div v-for="(guide, key) in guides" :key='key' class="btn py-3 w-100" v-on:click="onClickButton(guide)">
          <p class="p-0 m-0 index-header lead">{{guide.title}}</p>
          <hr/>
          <div>
            <p>LEVEL: {{guide.level}}</p>
          </div>
        </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name:'guides',
  mounted (){
    axios
      .get('https://raw.githubusercontent.com/NodeGG/nodecodes/master/src/data/introlevel.json')
      .then(res=>{
        const length = res.data.length
        for(let i = 0; i < length; i++){
          this.guides.push(res.data[i])
        }
      })
  },
  data(){
    return{
      guides:[]
    }
  },
  methods:{
    onClickButton(guide){
      this.$emit('clicked', guide.filename)
    }
  }
}
</script>

<style>
.index-item{
  border: #000 solid 2px;
}
.guide-header{
  font-weight: bold;
}
</style>
