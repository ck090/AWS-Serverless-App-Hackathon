<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">Home</router-link><span id="title">HuMan United</span>
      <router-link to="/about">About</router-link>
    </div>
    <Cards msg="N Chandra Kanth"/>
  </div>
</template>

<script>
import Cards from '@/components/Cards.vue'

export default {
  name: 'Home',
  components: {
    Cards
  }
}
</script>

<style>
body {
  font-family: 'Alata';
  --bg-primary: #171725;
  --fg-primary: #5e7c9b;
  background: var(--bg-primary);
  color: var(--fg-primary);
  padding-right: 2rem;
  padding-left: 2rem;
  animation-delay: 2s;
}

.home {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

#title {
  font-size: 1.5rem;
  color: rgb(89, 199, 199);
}

#nav a {
  font-weight: bold;
  text-decoration: none;
  color: #2c3e50;
}

#nav a:hover {
  color: aliceblue;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>