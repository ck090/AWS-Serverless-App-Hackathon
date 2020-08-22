<template>
  <div class="hello">
    <h1>Welcome back {{ msg }}</h1>
    <h2>Your Feed:</h2>
    <div id="cards">
        <div id="c1">
            <div id="content">
                <strong>Vincent Lombadri</strong>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
        </div>
        <div id="c1">
            <div id="content">
                <strong>Vincent Lombadri</strong>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
        </div>
        <div id="c1">
            <div id="content">
                <strong>Vincent Lombadri</strong>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
        </div>
        <div id="c1">
            <div id="content">
                <strong>Vincent Lombadri</strong>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
        </div>
        <div id="c1">
            <div id="content">
                <strong>Vincent Lombadri</strong>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
        </div>
        <div id="c1">
            <div id="content">
                <strong>Vincent Lombadri</strong>
            </div>
        </div>
        <div id="c1">
            <div id="content">
                <strong>Vincent Lombadri</strong>
            </div>
        </div>
        <div id="c1">
            <div id="content">
                <strong>Vincent Lombadri</strong>
                using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#cards {
    display: flexbox;
    flex-direction: row;
}

#c1 {
    background: rgb(29, 48, 73);
    color: white;
    border-radius: 1rem;
    margin: 1rem;
    margin-right: 5rem;
    margin-left: 5rem;
    box-shadow: 0px 0px 20px 0px rgb(0, 0, 0);
}

@media all and (min-width: 100px) and (max-width: 500px) {
    #c1 {
        background: rgb(29, 48, 73);
        color: white;
        border-radius: 1rem;
        margin: 0rem;
        margin-right: 0rem;
        margin-left: 0rem;
        box-shadow: 0px 0px 20px 0px rgb(0, 0, 0);
    }
}

#content {
    padding: 2rem;
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
