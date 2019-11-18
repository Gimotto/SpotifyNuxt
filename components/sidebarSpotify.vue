<template>
<div>
        <modalPlaylist :id="idmodal" :createnew="true" ref="modalnew" >
           <div slot="header">Crea una nuova playlist</div>
           <div slot="body">
               <b-form  @submit.prevent="checkFormNewPlaylist">
                    <label>Nome:</label>
                    <b-form-input type="text" placeholder="New Playlist" v-model="formNewPlaylist.name" />
                    <label>Descrizione:</label>
                    <b-form-input type="text" placeholder="" v-model="formNewPlaylist.description" />
               <b-button class="mt-3" type="submit">Create New Playlist</b-button>
            </b-form>
            </div>
    </modalPlaylist>
<div class="siderbarSpotify">  
    <div class="content-text">     
      <h4>EvaMusic</h4>
        <div class="menu-content">
         <nuxt-link to="/">
         <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M 256.274 60.84 L 84.324 166.237 L 84.324 443.063 L 193.27 443.063 L 193.27 293.73 L 320.228 293.73 L 320.228 443.063 L 428.222 443.063 L 428.222 165.476 L 256.274 60.84 Z M 256.274 35.95 L 448.452 149.145 L 448.452 464.395 L 300 464.395 L 300 315.062 L 213.499 315.062 L 213.499 464.395 L 64.095 464.395 L 64.095 150.161 L 256.274 35.95 Z" fill="currentColor"></path></svg>
            Home</nuxt-link>
        </div>
        <div class="menu-content">
        <nuxt-link to="/genre">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 16 16"><path d="M 11.734375 2 C 11.636719 2 11.539063 2.011719 11.441406 2.03125 L 6.1875 3.15625 C 5.496094 3.304688 5 3.921875 5 4.625 L 5 10.28125 C 4.703125 10.109375 4.367188 10 4 10 C 2.902344 10 2 10.902344 2 12 C 2 13.097656 2.902344 14 4 14 C 5.097656 14 6 13.097656 6 12 L 6 6.40625 L 12 5.117188 L 12 9.28125 C 11.703125 9.109375 11.367188 9 11 9 C 9.902344 9 9 9.902344 9 11 C 9 12.097656 9.902344 13 11 13 C 12.097656 13 13 12.097656 13 11 L 13 3.292969 C 13 2.890625 12.828125 2.511719 12.535156 2.273438 C 12.3125 2.097656 12.03125 2 11.734375 2 Z M 11.808594 3.007813 C 11.851563 3.015625 11.878906 3.03125 11.90625 3.054688 C 11.957031 3.09375 12 3.160156 12 3.292969 L 12 4.09375 L 6 5.382813 L 6 4.625 C 6 4.386719 6.160156 4.1875 6.394531 4.136719 L 11.652344 3.007813 C 11.714844 2.996094 11.765625 2.996094 11.808594 3.007813 Z M 11 10 C 11.558594 10 12 10.441406 12 11 C 12 11.558594 11.558594 12 11 12 C 10.441406 12 10 11.558594 10 11 C 10 10.441406 10.441406 10 11 10 Z M 4 11 C 4.558594 11 5 11.441406 5 12 C 5 12.558594 4.558594 13 4 13 C 3.441406 13 3 12.558594 3 12 C 3 11.441406 3.441406 11 4 11 Z" fill="white"></path></svg>
            Generi e Mood</nuxt-link>
        </div>
        <div class="menu-content">
        <nuxt-link to="/playlist">
            <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z" fill="currentColor"></path></svg>
            La Tua libreria</nuxt-link>
        </div>
        <div class="playlists-content">
        <p>Playlist</p>
        <div class="add-playlists-content">
        <button @click="openModal()">+</button>   Crea Playlist
        </div>
        <div class="listaplaylist">
        <playlistSidebar :list="MyPlaylistsArray" />
        </div>
        </div>
        <div class="usercontent"> 
        <p><nuxt-link to="/profile">
        <svg width="24" height="24" viewBox="0 0 80 90" xmlns="http://www.w3.org/2000/svg"><title>User Icon</title><path d="M67.74 61.78l-14.5-8.334c-.735-.422-1.24-1.145-1.385-1.98-.145-.835.088-1.685.638-2.33l5.912-6.93c3.747-4.378 5.81-9.967 5.81-15.737v-2.256c0-6.668-2.792-13.108-7.658-17.67C51.622 1.92 45.17-.386 38.392.054c-12.677.82-22.607 11.772-22.607 24.934v1.483c0 5.77 2.063 11.36 5.81 15.736l5.912 6.933c.55.644.783 1.493.638 2.33-.143.834-.648 1.556-1.383 1.98l-14.494 8.33C4.7 66.077 0 74.15 0 82.844v6.76h3.333v-6.76c0-7.5 4.055-14.46 10.59-18.174l14.5-8.334c1.597-.918 2.692-2.487 3.007-4.302.315-1.815-.19-3.66-1.387-5.06l-5.913-6.936c-3.23-3.775-5.01-8.594-5.01-13.57v-1.484c0-11.41 8.562-20.9 19.488-21.608 5.85-.377 11.415 1.61 15.67 5.598 4.26 3.992 6.605 9.404 6.605 15.24v2.254c0 4.976-1.778 9.796-5.01 13.57l-5.915 6.935c-1.195 1.4-1.7 3.246-1.386 5.06.313 1.816 1.41 3.385 3.008 4.303l14.507 8.338c6.525 3.71 10.58 10.67 10.58 18.17v6.76H80v-6.76c0-8.695-4.7-16.768-12.26-21.063z" fill="currentColor" fill-rule="evenodd"></path></svg>
        {{user.display_name}}</nuxt-link></p>
        </div>
    </div>
</div>
</div>

</template>

<script>
import modalPlaylist from '@/components/modalPlaylist'
import playlistSidebar from '@/components/playlistSidebar'
export default {
    name: "sidebarSpotify",
    components: {
        playlistSidebar,
        modalPlaylist
    },  
    data(){
        return{
            formNewPlaylist: {
                name: "",
                description: "",
            },
            idmodal: 'modalnewPlaylist',
            MyPlaylistsArray: {}
        }
    },
    methods:{

        closeModal(){   
            this.$refs.modalnew.closeModal()
            this.formNewPlaylist = {
                name: "",
                description: "",
            }
            },

        openModal(){
            this.$refs.modalnew.openModal()
           },

           async createNewPlaylist(){
             this.$axios({
                    method:'POST',
                    url:'https://api.spotify.com/v1/users/'+this.user.id+'/playlists',
                    data: {
                            "name": this.formNewPlaylist.name,
                            "description": this.formNewPlaylist.description,
                            "public": false
},
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + this.token
                    }
                    })
                    .catch(function(error){
                        console.log(error);
                    })  
            console.log("create new playlist") 
            this.closeModal()
            await this.fetchMyPlaylist()
            
           },
        checkFormNewPlaylist(){
                    if(this.formNewPlaylist.name ==''){
                        this.formNewPlaylist.name = 'New Playlist';
                    }
                    console.log(this.formNewPlaylist)
                    this.createNewPlaylist()
        },
        async fetchMyPlaylist () {
           if (this.user.id == undefined) return
            const {data} = await this.$axios({
                    method:'get',
                    url:'https://api.spotify.com/v1/users/'+this.user.id+'/playlists',
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': 'Bearer ' + this.token
                    }
                    })
                    .catch(function(error){
                        console.log(error);
                    })
            this.MyPlaylistsArray = data
            return data
        }
    },



    computed: {
        token() {
            return this.$store.getters['login/getToken']
        },
        user(){
            return this.$store.getters['user/getUser']
        },
        checkTokenUser(){
            if(Object.keys(this.user).length && this.token){
            return true
        }}
        },

    watch: {
        async checkTokenUser(value){ 
               await this.fetchMyPlaylist()
        },
      },
    async mounted(){
        if(this.checkTokenUser) await this.fetchMyPlaylist()
    },
}
</script>

<style scoped>
.content-text{
    padding-bottom: 25px;
    color:white;
}
.menu-content{ 
    padding-top: 10px;
    padding-bottom: 10px;
    color:white;
}
.playlists-content{
    padding-top: 50px;
    padding-bottom: 10px;
    color:white;
}
.add-playlists-content{
     padding-bottom: 30px;
    color:white;
}
.siderbarSpotify{
    position: fixed;
    background-image: linear-gradient(to bottom right, #232526, #414345);
    background-repeat: no-repeat;
    background-attachment: fixed;
    margin-left: -15px;
    padding: 35px;  
    width: 100%;
    height: 100%; 
}
.usercontent{
    padding-left: 35px; 
position:absolute;                  /* added */
   bottom:0;                           /* added */
   left:0;  
}
a {
    text-decoration: none;
}
</style>
