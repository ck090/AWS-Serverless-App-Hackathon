<template>
  <div class="hello">
    <h2 id='feed'>Your Post 👇🏼</h2>
    <div id="cards">
        <div id="c1" v-for="(vals, index) in title" :key="vals">
            <div id="content">
                <h4> {{ title[index] }} </h4>
                <h6> {{ time[index] }} </h6>
                <h5> {{ description[index] }} </h5>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Posts',
  data () {
      return {
          description: [],
          title: [],
          time: []
      }
  },
  mounted () {
      axios.get('https://8b5j1hstle.execute-api.ap-south-1.amazonaws.com/Prod/posts/c460b015-9433-4e2b-b561-10a3709991d5')
      .then(res => {
          for(var i = 0; i < res.data.length; i++) {
                // console.log(res.data[i].body, this.body)
                this.description.push(res.data[i].description)
                this.title.push(res.data[i].title)
                const jDate = new Date(res.data[i].posttime)
                this.time.push(jDate)
            }
      })
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
    margin-right: 2rem;
    margin-bottom: 1.25rem;
}

#c1 {
    background: rgb(27 39 53);
    color: white;
    border-radius: 1rem;
    margin: 1rem;
    margin-left: 2rem;
    margin-right: 2rem;
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

#helperBtn {
    cursor: pointer;
}

#helperBtn:hover {
    color: blue;
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
