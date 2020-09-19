<template>
  <div class="hello">
    <h2>Raise a new request:</h2>
    <div id="raise">
        <button type="button" class="my-2 mr-2 btn btn-primary" @click="postIssue">Help one another 🤗</button>
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
    <div v-if="issueStart == 1" id="centered">
        <span id="title">Post your Issue 😇</span><span id="clearIt" class="material-icons-outlined" @click="close">clear</span><br>
        <span id="Infoname">Username:</span><input type="text" v-model="issueUserName"/><br>
        <span id="Infoname">Title:</span><input type="text" v-model="issueTitle"/><br>
        <span id="Infoname">Content:</span><input type="text" v-model="issueBody"/><br>
        <span id="Infoname">Do you want to make this issue private:</span><br>
        <div><input id="one" value="1" v-model="issuePrivate" type="checkbox"><span id="Infoname2">Yes</span></div><br>
        <span id="Infoname">Location:</span><input type="text" v-model="issueLocation"/><br>
        <button type="button" class="my-2 mr-2 btn btn-primary" @click='postIt'>Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Requests',
  data () {
      return {
          smPoint: 0,
          issueStart: 0,
          issueTitle: '',
          issueUserName: '',
          issueBody: '',
          issuePrivate: 0,
          issueLocation: ''
      }
  },
  mounted () {
      this.smPoint = sessionStorage.getItem('smpoint')
  },
  methods: {
      postIssue () {
          console.log('post issue clicked')
          this.issueStart = 1
      },
      close () {
          this.issueStart = 0
      },
      postIt () {
          if(this.issuePrivate === true) {
              this.issuePrivate = 1
          }
          const payload = {
              title: this.issueTitle,
              body: this.issueBody,
              private: this.issuePrivate,
              user_name: this.issueUserName,
              location: this.issueLocation,
              personal: 1,
              user_id: sessionStorage.getItem("userID")
          }
          console.log(payload)
          axios.post('https://8b5j1hstle.execute-api.ap-south-1.amazonaws.com/Prod/issues', payload, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(res => {
              console.log('Posted')
          })
          this.issueStart = 0
          this.issueTitle = ''
          this.issueBody = ''
          this.issuePrivate = 0
          this.issueLocation = ''
      }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#cards {
    display: flexbox;
    flex-direction: row;
}

#Infoname {
    color: rgb(0, 88, 252);
    padding-right: 1rem;
    font-size: 0.8rem;
}

#clearIt {
    cursor: pointer;
}

#Infoname2 {
    color: rgb(0, 88, 252);
    padding-left: 0.5rem;
    font-size: 0.8rem;
}

#centered {
    background:aliceblue;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    width: 30rem;
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 999;
    transform: translate(-50%, -50%);
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

</style>
