<template>
  <div class="hello">
    <h2>Raise a new request:</h2>
    <div id="raise">
        <button type="button" class="my-2 mr-2 btn btn-primary">Help one another 🤗</button>
        <button type="button" class="my-2 mr-2 btn btn-primary">Help community 🏙</button>
        <button type="button" class="my-2 mr-2 btn btn-primary">Help for common problem 🧜🏻‍♂️</button>
    </div>
    <h2>Your Samaritan points</h2>
    <div id="points">
        <h1>⭐️ {{ smPoint }}</h1>
    </div><br>
    <h2>Your SOS Call</h2>
    <div id="points">
        <h5>Click on this button to activate:</h5><h1>🆘</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Requests',
  data () {
      return {
          smPoint: 0
      }
  },
  mounted () {
      this.smPoint = sessionStorage.getItem('smpoint')
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#cards {
    display: flexbox;
    flex-direction: row;
}

#raise {
    color: white;
    margin-top: 1.7rem;
    margin-bottom: 1.7rem;
}

@media all and (min-width: 100px) and (max-width: 700px) {
    #cards {
        display: flexbox;
        flex-direction: column;
    }
}

.hello {
    -webkit-animation: fadein 2s;
}

@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
</style>
