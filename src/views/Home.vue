<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">Home</router-link><span id="title">HuMan United</span>
      <div class="dropdown">
        <img v-if="isLoggedIn === 1" v-bind:src="imgLink" id="userId" alt="User Image" />
        <div class="dropdown-content"></div>
      </div>
    </div>
    <div v-if="isLoggedIn === 0" id="loginItems">
      <img src="../assets/login.svg" id="loginSVG" />
      <h3>Signin with Google to get started:</h3>
      <div id="loginButton"></div>
    </div>
    <div v-if="isLoggedIn === 1" id="introText">
        <h1>Welcome back</h1>
        <h1 id='name'>{{ msg }}</h1>
    </div>
    <div v-if="isLoggedIn === 1" id='mainPage'>
      <Req/>
      <Cards/>
    </div>
  </div>
</template>

<script>
import Cards from '@/components/Cards.vue'
import Req from '@/components/Requests.vue'

export default {
  name: 'Home',
  mounted () {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id: '978451124995-j5vtfrn75upp3fi1gvgcjtpi78hcjdh0.apps.googleusercontent.com'
      }).then(() => {
        const authInstance = window.gapi.auth2.getAuthInstance()
        const isSigned = authInstance.isSignedIn.get()
        if(isSigned === true) {
          this.isLoggedIn = 1
          this.msg = authInstance.currentUser.get().rt.tV
          this.imgLink = authInstance.currentUser.get().rt.TJ
          this.emailId = authInstance.currentUser.get().rt.$t
          // console.log(authInstance.currentUser.get(), this.imgLink)
          const payload = {
            name: this.msg,
            email: this.emailId,
            imageurl: this.imgLink
          }
          console.log(payload)
          axios.post('https://8b5j1hstle.execute-api.ap-south-1.amazonaws.com/Prod/userlogin/', payload, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(res => {
            // {"UserID":"8959bdc2-af64-4fa5-b9ec-1815d71adb83","SamaritanPoints":10}
            console.log(res.UserId, res.SamaritanPoints)
          })
        }
        // console.log(isSigned)
        authInstance.isSignedIn.listen(isSignedIn => {
          this.isLoggedIn = 1
        })
      })
    })
    window.gapi.load('signin2', () => {
      const params = {
        width: 130,
        height: 40
      }
      window.gapi.signin2.render('loginButton', params)
    })
  },
  components: {
    Cards,
    Req
  },
  data: function () {
    return {
      isLoggedIn: 0,
      msg: 'N Chandra Kanth',
      imgLink: '',
      emailId: ''
    }
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

#loginItems {
  padding-top: 5;
  text-align: -webkit-center;
}

#userId {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
}

#mainPage {
  display: flex;
  flex-direction: row;
}

#loginSVG {
  width: 20rem;
  height: 20rem;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

#introText {
  display: flex;
  padding-bottom: 0.4rem;
}

#name {
  color: #42b983;
  margin-left: 1rem;
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

@media all and (min-width: 100px) and (max-width: 700px) {
    #mainPage {
      display: block;
    }

    #introText {
      display: block;
    }

    #name {
      margin: 0rem;
      padding-bottom: 1.7rem;
    }

    #loginSVG {
      width: 15rem;
      height: 15rem;
    }
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