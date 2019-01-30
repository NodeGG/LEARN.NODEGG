<template>
<div id='index' class="w-100 my-2">
  <div v-for="(guide, key) in guides" :key='key' class="btn p-3 w-100 h-100 index-item border-bottom" v-on:click="onClickButton(guide)">
    <p class="p-0 m-0 index-header lead">{{guide.title}}</p>
  </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'guides',
  mounted() {
    axios
      .get('https://raw.githubusercontent.com/NodeGG/LEARN.NODEGG-DOCS/master/data/introlevel.json')
      .then(res => {
        const length = res.data.length
        for (let i = 0; i < length; i++) {
          this.guides.push(res.data[i])
        }
      })
  },
  data() {
    return {
      guides: []
    }
  },
  methods: {
    onClickButton(guide) {
      this.$emit('clicked', guide.filename)
    }
  }
}
</script>

<style>
.index-item:hover {
  background-color: #eee;
}
</style>
