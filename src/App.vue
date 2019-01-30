<template>
<div id="app" class="fnt-monospace">
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <router-link to='/' class="navbar-brand">LEARN.NODEGG</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/videos">Videos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/guides">Guides</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://github.com/NodeGG/nodecodes" target="_blank">Help Us!</a>
          </li>
        </ul>
      </div>
    </nav>

  </div>
  <router-view class="mt-5" />
</div>
</template>
<style>
#app {
  margin-top: 50px;
}
</style>
