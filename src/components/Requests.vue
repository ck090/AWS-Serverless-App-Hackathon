<template>
  <div class="hello">
    <h2>Raise a new request:</h2>
    <div id="raise">
        <button type="button" class="my-2 btn btn-primary">Help one another 🤗</button>
        <button type="button" class="my-2 btn btn-primary">Help community 🏙</button>
        <button type="button" class="my-2 btn btn-primary">Help for common problem 🧜🏻‍♂️</button>
    </div>
    <h2>Your Samaritan points</h2>
    <div id="points">
        <h1>⭐️ 5</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
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
