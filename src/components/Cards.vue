<template>
  <div class="hello">
    <h2 id='feed'>Your Feed 👇🏼</h2>
    <div id="cards">
        <div id="c1" v-for="(vals, index) in body" :key="vals">
            <div id="content">
                <div id="privacyInfo">
                    <strong v-if="privacy[index] == 1">Private</strong>
                </div>
                <div id="userInfo">
                    <span class="material-icons-outlined">person_outline</span>
                    {{ user[index] }}
                </div><br>
                <div id="locaInfo">
                    <span class="material-icons-outlined">near_me</span>
                    <a href="https://www.google.com/maps/place/">{{ location[index] }}</a>
                </div>
                <h3> {{ title[index] }} </h3>
                {{ vals }}
                <hr>
                <div id="responses">
                    <span class="material-icons-outlined">thumb_up</span>
                    <span class="material-icons-outlined">insert_comment</span>
                    <span class="material-icons-outlined" @click="addHelp(index)">share</span>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Cards',
  data () {
    return {
        body: [],
        title: [],
        location: [],
        name: 0,
        privacy: [],
        user: [],
        id: []
    }
  },
  mounted () {
    axios.get('https://8b5j1hstle.execute-api.ap-south-1.amazonaws.com/Prod/issues/')
    .then(res => {
        for(var i = 0; i < res.data.length; i++) {
            // console.log(res.data[i].body, this.body)
            this.body.push(res.data[i].body)
            this.title.push(res.data[i].title)
            this.location.push(res.data[i].location)
            this.privacy.push(res.data[i].private)
            this.user.push(res.data[i].user)
            this.id.push(res.data[i].id)
        }
    })
  },
  methods: {
      addHelp (index) {
          const userId = sessionStorage.getItem('userId')
          const userName = sessionStorage.getItem('userName')
          const url = 'https://8b5j1hstle.execute-api.ap-south-1.amazonaws.com/Prod/issues/' +  index + '/help/'
          const payload = {
              username: userName,
              userid: userId
          }
          axios.post(url, payload, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(res => {
              console.log('Posted')
          })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#cards {
    display: flow-root;
    flex-direction: row;
}

#feed {
    margin-left: 2rem;
    margin-bottom: 1.25rem;
}

#c1 {
    background: rgb(27 39 53);
    color: white;
    border-radius: 1rem;
    margin: 1rem;
    margin-left: 2rem;
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

.hello {
    -webkit-animation: fadein 2s;
}

@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
</style>
