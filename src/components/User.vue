<template>
  <div class="us">
    <div id="userCard">
        <img v-bind:src="src" alt="User Image" id="userImage"/>
        <h1> UserName {{ name }} </h1>
    </div>
    <h4> Samaritan Points {{ smPoints }} ⭐️ </h4>
    <h4> Member since {{ daysSinceJoined }} </h4>
  </div>
</template>

<script>
export default {
  name: 'UserPage',
  props: ['userId'],
  data () {
      return {
          src: 'https://lh3.googleusercontent.com/a-/AOh14GikJbNpXjZYZ87qqVvX5a1LlzGs8eftYeN0G_hO2g=s96-c',
          name: '',
          smPoints: 0,
          daysSinceJoined: 0,
          issues: [],
          helps: []
      }
  },
  created () {
      const url = 'https://8b5j1hstle.execute-api.ap-south-1.amazonaws.com/Prod/users/' + sessionStorage.getItem('userID') + '/'
      console.log(url)
      axios.get(url).then(res => {
          this.src = res.data.url
          this.name = res.data.name
          this.smPoints = res.data.samaritanpoints
          this.issues = res.data.userissues
          this.helps = res.data.userhelps
          const jDate = res.data.joineddate
          const currDate = new Date()
          const diffinms = Math.abs(currDate - jDate)
          this.daysSinceJoined = Math.ceil(diffinms / (1000 * 60 * 60 * 24)); 
      })
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
