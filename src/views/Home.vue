<template>
<div class="home text-center">
  <div class="container-fluid px-0">
    <Header :main_text='main_text' :sub_text='sub_text' />
  </div>
  <hr class="mx-5" />
  <br>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4 my-3">
        <Card to='/videos' :card_text='video_text' :button_text='button_text' />
      </div>
      <div class="col-md-4 my-3">
        <Card to='/' :card_text='quiz_text' button_text='Coming Soon!' />
      </div>
      <div class="col-md-4 my-3">
        <Card to='/guides' :card_text='reference_text' :button_text='button_text' />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Header from '@/components/Header'
import Card from '@/components/Card'
// @ is an alias to /src
export default {
  name: 'home',
  components: {
    Header,
    Card
  },
  data() {
    return {
      main_text: 'LEARN.NODEGG',
      sub_text: 'Welcome to the Codiverse',
      quiz_text: 'Whats your Programming Language?',
      video_text: 'Check Out Our Videos!',
      reference_text: 'Check Out Our Guides!',
      button_text: 'Click Here'
    }
  }
}
</script>
