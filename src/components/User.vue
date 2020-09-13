<template>
  <div class="us">
    <div id="userCard">
        <img v-bind:src="src" alt="User Image" id="userImage"/>
        <h1> UserName {{ userId }} </h1>
    </div>
    <h4> Samaritan Points {{ points }} ⭐️ </h4>
    <h4> Member since {{ dateJoined }} </h4>
  </div>
</template>

<script>
export default {
  name: 'UserPage',
  props: ['userId'],
  data () {
      return {
          src: 'https://lh3.googleusercontent.com/a-/AOh14GikJbNpXjZYZ87qqVvX5a1LlzGs8eftYeN0G_hO2g=s96-c'
      }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#userCard {
    text-align: -webkit-center;
}

#userImage {
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
}


@media all and (min-width: 100px) and (max-width: 700px) {

}

.us {
    position: fixed;
    top: 50%;
    left: 50%;
    /* bring your own prefixes */
    transform: translate(-50%, -50%);
    -webkit-animation: fadein 2s;
}

@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
</style>
