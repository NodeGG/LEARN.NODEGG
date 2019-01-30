<template>
<div id='content' class="content-section mx-3 px-0">
  <div class="py-3">
    <div>
      <vue-simple-markdown :source="text"></vue-simple-markdown>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'guide',
  props: {
    file: String
  },
  data() {
    return {
      guide: '',
      text: ''
    }
  },
  watch: {
    file(val) {

      fetch('https://raw.githubusercontent.com/NodeGG/LEARN.NODEGG-DOCS/master/docs/' + val)
        .then(r => r.text())
        .then(t => this.text = t)
    }
  }
}
</script>

<style>
.guide-header {
  font-weight: bold;
}
</style>
