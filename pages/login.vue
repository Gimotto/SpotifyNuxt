<template>
  <div class="container">
      <div id="login">
        <h1>Login in with Spotify</h1>
        <a @click="gotoPage" class="btn btn-primary">Log in with Spotify</a>
      </div>  
  </div>
</template>

<script>
export default {
  components: {
  },
  mounted(){
},
methods:{
      gotoPage(){
        location.replace('https://accounts.spotify.com/authorize' +'?response_type='+this.response_type +
        '&client_id=' + this.client_id + (this.scope ? '&scope=' + encodeURIComponent(this.scope) : '') +
        '&redirect_uri=' + encodeURIComponent(this.redirect_uri)
        )}
},
  data() {
      return {
         client_id: 'b663c85881d645ef905412cbebc4cb59',
         client_secret: '2fd0602c8e114147926ce1086a531c4b',
         response_type: 'token',
         redirect_uri: 'http://localhost:3000/callback',
         scope: 'user-read-private user-follow-modify user-follow-read user-read-recently-played user-top-read user-library-read user-read-email playlist-read-collaborative playlist-modify-private playlist-modify-public playlist-read-private user-library-modify',
      }
  },
}
</script>

<style> 
#login, #loggedin {
     display: show;
      }
      .text-overflow {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 500px;
      }
</style>
