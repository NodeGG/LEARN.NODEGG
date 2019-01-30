<template>
<div class="videos mt-5 text-center">
  <div class="video-section-one mt-5 mx-2">
    <div class="title-section">
      <h4 class="mt-5 mb-2 pt-3">Getting Started</h4>
      <hr class="w-75"/>
    </div>
    <div class="video-section py-5 mx-auto px-2">
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/videoseries?list=PLWRXkzqC3r2-OLixVYMKx64D9KJI9PkBX" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <hr class="w-75" />
  </div>
</div>
</template>
<script>
export default {
  name: 'videos'
}
</script>
<style>
  .video-section {
    max-width: 800px;
    min-width: 300px;
    height: 35vw;
    min-height: 500px
  }
</style>
