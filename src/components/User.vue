<template>
  <div class="us">
    <div id="userCard">
        <img v-bind:src="src" alt="User Image" id="userImage"/>
        <h1> {{ name }} </h1>
    </div>
    <h4> Samaritan Points ⭐️ {{ smPoints }} ⭐️ </h4>
    <h4> Member since 🏕 {{ daysSinceJoined }} day </h4>
    <div v-if="issues" class="userissues">
        <h3 id='feed'> Issues Created </h3>
        <div id="c1" v-for="(vals, index) in issues" :key="vals"> 
            <div id="content">
                Issue Status {{ issues[index].statusmsg }}
            </div>
            <span> {{ issues[index].title }} </span>
        </div>
    </div>
    <div v-if="helps" class="userhelps">
        <h3 id='feed'> Issues Helped </h3>
        <div id="c1" v-for="(vals, index) in helps" :key="vals">
             <div id="content">
                Issue Status {{ helps[index].statusmsg }}
            </div>
            <span> {{ helps[index].title }} </span>
            <hr>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserPage',
  props: ['userId'],
  data () {
      return {
          src: '',
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
          this.src = res.data.profileimageurl
          this.name = res.data.name
          this.smPoints = res.data.samaritanpoints
          this.issues = res.data.userissues
          this.helps = res.data.userhelps
          const jDate = new Date(res.data.joineddate)
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
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
}


#cards {
    display: flow-root;
    flex-direction: row;
}

#feed {
    margin-left: 2rem;
    margin-right: 1rem;
    margin-bottom: 1.25rem;
}

#c1 {
    background: rgb(27 39 53);
    color: white;
    border-radius: 1rem;
    margin: 1rem;
    margin-left: 2rem;
    margin-right: 1rem;
    box-shadow: 0px 0px 20px 10px rgb(0, 0, 0);
}

#privacyInfo {
    color: rgb(201, 57, 57);
}

#responses {
    display: flex;
    justify-content: space-around;
}

#userInfo {
    display: inline-flex;
    justify-content: center;
}

#locaInfo {
    display: inline-flex;
    justify-content: center;
    padding-bottom: .4rem;
}

@media all and (min-width: 100px) and (max-width: 700px) {
    #c1 {
        background: rgb(29, 48, 73);
        color: white;
        border-radius: 1rem;
        margin: 0rem;
        margin-left: 0rem;
        box-shadow: 0px 0px 20px 0px rgb(0, 0, 0);
    }

    #feed {
        margin: 0rem;
        padding-top: 1.7rem;
    }
}


#content {
    padding: 1rem;
    margin: 1rem;
}

span {
    padding: 1rem;
}


@media all and (min-width: 100px) and (max-width: 700px) {
    .us {
        position: absolute;
        top: 50%;
        padding-top: 3rem;
        left: 50%;
        transform: translate(-50%, -50%);
        -webkit-animation: fadein 2s;
    }

}

.us {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-animation: fadein 2s;
}

@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
</style>
