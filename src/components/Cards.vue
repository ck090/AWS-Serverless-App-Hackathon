<template>
  <div class="hello">
    <h2 id='feed'>Your Feed 👇🏼</h2>
    <div id="cards">
        <div id="c1" v-for="(vals, index) in issues.body" :key="vals">
            <div id="content">
                <div id="privacyInfo">
                    <strong v-if="issues.privacy[index] == 1">Private</strong>
                </div>
                <div id="userInfo">
                    <span class="material-icons-outlined">person_outline</span>
                    {{ issues.user[index] }}
                </div><br>
                <div id="locaInfo">
                    <span class="material-icons-outlined">near_me</span>
                    <a href="https://www.google.com/maps/place/">{{ issues.location[index] }}</a>
                </div>
                <h3> {{ issues.title[index] }} </h3>
                {{ vals }}
                <hr>
                <div v-if="issues.helpers[index]"> 
                    <ul>  
                        Helpers 
                        <li v-for="helper in issues.helpers[index]" :key="helper">{{ helper }}
                        </li>
                    </ul>
                </div>
                <div id="responses">
                    <span class="material-icons-outlined">thumb_up</span>
                    <span class="material-icons-outlined" id="commentsBtn" @click="showComments()" >insert_comment</span>
                    <md-button class="md-raised md-accent" @click="addHelp(index)" id="helperBtn">HELP</md-button>
                </div>
                <div v-if="issues.commentsShow == 1">
                    <div id="addCommentTag">
                        <span>Add a new comment: </span>
                        <input v-model="commentNew" type="text" />
                        <md-button class="md-raised md-accent" @click="addComment(index)" id="helperBtn">SUBMIT</md-button>
                    </div>
                    <hr>
                    <div v-for="comment in issues.comments[index]" :key="comment">
                        <div id="commentsDiv">
                            <span>L</span>
                            <span id="arrowTag">></span>
                            <span id="uNameIssue">{{ comment.username }}</span><br>
                        </div>
                        <div id="commentsDiv2">
                            <span id="uNameIssue2">{{ comment.comment }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="hello">
    <div id="cards">
        <h2 id='feed2'>All Posts 👇🏼</h2>
        <div id="c1" v-for="(vals, index) in posts.title" :key="vals">
            <div id="content">
                <h4> {{ posts.title[index] }} </h4>
                <h6 id="time"> {{ posts.time[index] }} </h6>
                <h5> {{ posts.description[index] }} </h5>
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
        issues:{
            body: [],
            title: [],
            location: [],
            name: 0,
            privacy: [],
            user: [],
            userid: [],
            id: [],
            helpers: [],
            comments: [],
            commentsShow: 0,
            commentNew: ''
        },
        posts:{
            description: [],
            title: [],
            time: []
        }}
  },
  mounted () {
    axios.get('https://8b5j1hstle.execute-api.ap-south-1.amazonaws.com/Prod/issues/')
    .then(res => {
        for(var i = 0; i < res.data.length; i++) {
            // console.log(res.data[i].body, this.body)
            this.issues.body.push(res.data[i].body)
            this.issues.title.push(res.data[i].title)
            this.issues.location.push(res.data[i].location)
            this.issues.privacy.push(res.data[i].private)
            this.issues.user.push(res.data[i].username)
            this.issues.userid.push(res.data[i].userid)
            this.issues.id.push(res.data[i].id)
            this.issues.helpers.push(res.data[i].helpers)
            if (res.data[i].Comments != null){
                this.issues.comments.push(res.data[i].Comments)
                console.log(res.data[i].Comments)
            } else {
                this.issues.comments.push([])
            }
        }
    })
    axios.get('https://8b5j1hstle.execute-api.ap-south-1.amazonaws.com/Prod/posts/c460b015-9433-4e2b-b561-10a3709991d5')
      .then(res => {
          for(var i = 0; i < res.data.length; i++) {
                // console.log(res.data[i].body, this.body)
                this.posts.description.push(res.data[i].description)
                this.posts.title.push(res.data[i].title)
                const jDate = new Date(res.data[i].posttime)
                this.posts.time.push(jDate)
            }
      })
  },
  methods: {
      addComment (index) {
          const userId = sessionStorage.getItem('userID')
          const userName = sessionStorage.getItem('userName')
          const url = 'https://8b5j1hstle.execute-api.ap-south-1.amazonaws.com/Prod/issues/' +  this.issues.id[index] + '/comment/'
          const payload = {
              username: userName,
              userid: userId,
              comment: this.issues.commentNew
          }
          axios.put(url, payload, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(res => {
                alert('Helper comment added for issue');
          })
      },

      addHelp (index) {
          const userId = sessionStorage.getItem('userID')
          const userName = sessionStorage.getItem('userName')
          const url = 'https://8b5j1hstle.execute-api.ap-south-1.amazonaws.com/Prod/issues/' +  this.issues.id[index] + '/help/'
          const payload = {
              username: userName,
              userid: userId
          }
          axios.put(url, payload, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(res => {
                alert('Helper added for issue');
          })
      },

      showComments () {
          console.log('show')
          this.issues.commentsShow = 1
      }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
    border: none;
    border-bottom: 0.1rem solid rgb(55, 240, 55);
    background: rgb(27 39 53);
    outline: none;
    width: 40rem;
    color:  rgb(163, 163, 163);
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

#feed2 {
    margin-left: 2rem;
    margin-top: 3rem;
    margin-right: 1rem;
    margin-bottom: 1.5rem;
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

#commentsBtn {
   cursor: pointer;
}

#commentsDiv {
    display: flex;
    flex-direction: row;
    justify-items: center;
    font-size: 1rem;
}

#commentsDiv2 {
    font-size: 1rem;
}

#helperBtn {
    cursor: pointer;
}

#helperBtn:hover {
    color: rgb(0, 255, 21);
    cursor: pointer;
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

li {
    display: inline;
}

#uNameIssue {
    color: rgb(77, 230, 110);
    padding-top: 0.3rem;
    padding-left: 1rem;
}

#arrowTag {
    padding-top: 0.2rem;
}

#uNameIssue2 {
    color: rgb(163, 163, 163);
    padding-top: 0.2rem;
    padding-left: 2rem;
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
