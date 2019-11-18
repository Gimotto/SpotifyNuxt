<template>
  <div>
    <!--b-modal ref="loginModal" id="loginModal" :visible="!this.tokenValid" @hidden="toggleModal()" ok-only no-close-on-backdrop no-close-on-esc hide-header >Token scaduto, clicca ok per creare un altro token e continuare su EvaMusic</b-modal>
    
    
    <div v-if="!this.closeLoading" class="box">
      <div class="fulfilling-bouncing-circle-spinner">
        <div class="circle"></div>
        <div class="orbit"></div>
      </div>
    </div-->
    
    <nuxt />

  </div>
</template>

<script>
export default {
  computed: {
    token() {
      return this.$store.getters['login/getToken']
    },
    user(){
      return this.$store.getters['user/getUser']
    },
    myplaylist(){
      return this.$store.getters['playlist/getMyPlaylists']
    }
  },
  
 async mounted(){
        let cookieToken = this.$cookies.get('auth_token') 
        let cookieUser = this.$cookies.get('user') 
        if(cookieUser == undefined || cookieUser == {}){
              this.$cookies.set('user', this.user)
           }    
        if(cookieToken  == undefined || cookieToken == ''){
              this.$cookies.set('auth_token', this.token)
              this.$router.push('/login')
             return
          }
        this.$store.commit('login/setState', cookieToken);
        this.$cookies.set('auth_token', cookieToken)
        this.$store.commit('user/setUser', await this.fetchUser());
        this.$cookies.set('user', this.user)


        //DA FARE LUNEDI
        //this.$store.commit('playlist/setMyPlaylists', {userid: this.user.id, token: this.token});
        //provare con dispatch
        //this.$store.commit('playlist/setMyPlaylists', {userid: this.user.id, token: this.token});
        //console.log("myplaylist: ", this.myplaylist)

        
        console.log("user: ", cookieUser),
        console.log("auth_token: ", cookieToken)
     
  },
  methods: {
async fetchUser () {
            const {data} = await this.$axios({
                    method:'get',
                    url:'https://api.spotify.com/v1/me',
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': 'Bearer ' + this.token
                    }
                    })
                    .catch(function(error){
                        console.log(error);
                    })
            return data
        }
  }
}
</script>

<style>

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}
.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}


</style>
