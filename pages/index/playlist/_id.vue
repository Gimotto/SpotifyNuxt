<template>    
<div class="contentstyle" > 
<modalPlaylist :id="idmodal" ref="modal" >
           <div slot="header">Scegli in quale playlist inserire la canzone</div>
           <div slot="body">
               <render :cards="userPlaylist" :addto="true" @selectedid="addToPlaylist">
               </render>
            </div>
       </modalPlaylist>
<b-container fluid >
  <b-row>
      <b-col cols="1">
      </b-col>
        <b-col class="content" cols="4">
            <div class="content-left"> 
                <img class="content-image" :src="coverImage">
                <div class="content-text-left">
                        
                    <h4 style="color: white;">
                        {{playlistDetails.name}}</h4>
                        <span v-if="playlistDetails.owner">
                            {{playlistDetails.owner.display_name}}<br>
                        </span>
                        <span v-if="playlistDetails.tracks">
                            {{playlistDetails.tracks.total}} 
                        </span> Brani<br>
                        <span v-if="playlistDetails.description == ''">
                        </span>
                        <span v-else>
                            {{playlistDetails.description}}<br>
                        </span>
                        
                        
                        <span v-if="playlistDetails.followers">
                            {{playlistDetails.followers.total}} Followers
                        </span>
                        <br>
                            <span v-if="finderPlaylist">
                                <img src="https://img.icons8.com/material-rounded/16/000000/filled-trash.png" @click="removePlaylist(playlistDetails.id)"> Delete From your library
                            </span>
                            <span v-else>
                            <img src="https://img.icons8.com/material-sharp/16/000000/add.png" @click="followPlaylist(playlistDetails.id)"> Add to your library
                            </span>
                   
                </div>
            </div>
        </b-col>
        <b-col class="sectionTrack" cols="6">
            <div class="content">
            <div class="content-text">
                <span v-if="playlistDetails.tracks">
                        <div v-if="!playlistDetails.tracks.total"> 
                            <h6>Playlist Vuota</h6>
                            Aggiungi un brano alla Playlist
                        </div>
                </span>
            <span  v-for="(track, i) in playlistTracks" :key="i">
                <div class="infocontent">
        <span v-if="playlistDetails.owner.id == user.id">
            <img src="https://img.icons8.com/material-rounded/16/000000/filled-trash.png" @click="removeTrack(playlistDetails.id,playlistTracks[i].uri,i)">
        </span>
        <img src="https://img.icons8.com/material-outlined/16/000000/add.png" @click="openModal(playlistTracks[i].uri)">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0 0 16 16">
<path d="M 11.734375 2 C 11.636719 2 11.539063 2.011719 11.441406 2.03125 L 6.1875 3.15625 C 5.496094 3.304688 5 3.921875 5 4.625 L 5 10.28125 C 4.703125 10.109375 4.367188 10 4 10 C 2.902344 10 2 10.902344 2 12 C 2 13.097656 2.902344 14 4 14 C 5.097656 14 6 13.097656 6 12 L 6 6.40625 L 12 5.117188 L 12 9.28125 C 11.703125 9.109375 11.367188 9 11 9 C 9.902344 9 9 9.902344 9 11 C 9 12.097656 9.902344 13 11 13 C 12.097656 13 13 12.097656 13 11 L 13 3.292969 C 13 2.890625 12.828125 2.511719 12.535156 2.273438 C 12.3125 2.097656 12.03125 2 11.734375 2 Z M 11.808594 3.007813 C 11.851563 3.015625 11.878906 3.03125 11.90625 3.054688 C 11.957031 3.09375 12 3.160156 12 3.292969 L 12 4.09375 L 6 5.382813 L 6 4.625 C 6 4.386719 6.160156 4.1875 6.394531 4.136719 L 11.652344 3.007813 C 11.714844 2.996094 11.765625 2.996094 11.808594 3.007813 Z M 11 10 C 11.558594 10 12 10.441406 12 11 C 12 11.558594 11.558594 12 11 12 C 10.441406 12 10 11.558594 10 11 C 10 10.441406 10.441406 10 11 10 Z M 4 11 C 4.558594 11 5 11.441406 5 12 C 5 12.558594 4.558594 13 4 13 C 3.441406 13 3 12.558594 3 12 C 3 11.441406 3.441406 11 4 11 Z"></path></svg>
                     {{track.name}} <span class="infocontent-rightside">{{(convertMilltominute(track.duration_ms))}}</span><br>
                   <p class="subinfocontent">
                   <span v-for="(artist, i) in track.artists" :key="i">
                       {{artist.name}}  
                   </span>
                    - {{track.album.name}}
                    </p>
                </div>
            </span>
            </div>
            </div>
        </b-col>
       
        <b-col  class="content" cols="1">
        </b-col>

  </b-row>

</b-container>
</div>
</template>

<script>
import modalPlaylist from '@/components/modalPlaylist'
import render from '@/components/render';
export default {
    name: "playlist-id",
    components: {
        modalPlaylist,
        render
    },
    data(){
        return{
            userPlaylistArray: [],
            idmodal: "idmodalPlaylist",
            playlistDetails: {},
            trackselected: '',
            imagesCategory: '',
            isFetching: true,
            statusContent: false,
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
        }},
        coverImage() {
            return (!!this.playlistDetails.images && this.playlistDetails.images.length) ? this.playlistDetails.images[0].url : 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg'
  
        },
        playlistTracks() {
            return this.playlistDetails.tracks ? this.playlistDetails.tracks.items.map(el => el.track) : []
        },
         userPlaylist(){
            if(this.userPlaylistArray.length) return this.userPlaylistArray.filter(el => el.owner.id == this.user.id)
            return []
        },
         finderPlaylist(){
             if(this.userPlaylistArray.length) return this.userPlaylistArray.find(el => el.id == this.playlistDetails.id) 
     }},
     watch: {
        async checkTokenUser(value){
                this.playlistDetails = await this.getDetails()
                this.userPlaylistArray = await this.getUserPlaylist()
        },
        async playlistDetails(value){
                console.log("watch: ",value)
        },
       '$route.params.id': async function(){
            this.playlistDetails = (this.checkTokenUser) ? await this.getDetails() : {}
            this.userPlaylistArray = (this.checkTokenUser) ? await this.getUserPlaylist() : {}
    }},
    async mounted() {
        this.playlistDetails = (this.checkTokenUser) ? await this.getDetails() : {}
        this.userPlaylistArray = (this.checkTokenUser) ? await this.getUserPlaylist() : {}
    },

    methods:{
         async followPlaylist(idplaylist){
             this.$axios({
                    method:'PUT',
                    url:'https://api.spotify.com/v1/playlists/'+idplaylist+'/followers',
                    data: {
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
            console.log("playlist followed")
            this.playlistDetails = await this.getDetails() 
            this.$router.push("/playlist")
            
         },
            async removePlaylist(idplaylist){
            console.log("myPlaylist: ", idplaylist) 
             this.$axios({
                    method:'DELETE',
                    url:'https://api.spotify.com/v1/users/'+this.user.id+'/playlists/'+idplaylist+'/followers',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + this.token
                    }
                    })
                    .catch(function(error){
                        console.log(error);
                    })  
            console.log("deleted")
            this.playlistDetails = await this.getDetails() 
            this.$router.push("/playlist")

            },
        async removeTrack(idplaylist, trackselected,position){
            console.log("playlist", idplaylist)
            console.log("trackSelected: ",trackselected)
            console.log("position: ", position)
            
             this.$axios({
                    method:'DELETE',
                    url:'https://api.spotify.com/v1/playlists/'+idplaylist+'/tracks',
                    data: {
                        "tracks": [
                                {
                                "uri": trackselected,
                                "positions": [position],
                                }]
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
            console.log("Track deleted correctly")  
            this.closeModal()
            this.playlistDetails = await this.getDetails() 
            console.log(await this.playlistDetails)
            
        },
        async addToPlaylist(playlist_id){

            console.log("selectedPlaylist: ", playlist_id)
            console.log("trackSelected: ",this.trackselected)
             this.$axios({
                    method:'POST',
                    url:'https://api.spotify.com/v1/playlists/'+playlist_id+'/tracks?uris='+this.trackselected,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + this.token
                    }
                    })
                    .catch(function(error){
                        console.log(error);
                    })  
            console.log("Track added correctly") 
            this.closeModal()
            this.playlistDetails =  await this.getDetails() 
            console.log(this.playlistDetails) 
            
            },
        closeModal(){   
            this.trackselected = ''
            this.$refs.modal.closeModal()
            },

        openModal(url){
            this.trackselected = url
            this.$refs.modal.openModal()
           },
        convertMilltominute(millis) {
            var minutes = Math.floor(millis / 60000);
            var seconds = ((millis % 60000) / 1000).toFixed(0);
            return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
},
        async getDetails () {
            const {data} = await this.$axios({
                    method:'get',
                    url:'https://api.spotify.com/v1/playlists/'+this.$route.params.id+'?VS='+Math.random(),
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': 'Bearer ' + this.token
                    }
                    })
                    .catch(function(error){
                        console.log(error);
                    })
     console.log("infunction", data)               
    return data
},
async getUserPlaylist () {
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
            return data.items
} 
    }, 
}
</script>

<style scoped>
.content{
    padding-top: 50px;
}
.content-left{
    position: fixed;
}
.sectionTrack{
    min-height: 100vh;
}
.contentstyle{
    width:100%;
    margin-left:15px;
    padding:15px;
    background-image: linear-gradient(#2C3E50, #264b52);
}
.content-text-left{
    padding-top:10px;
    padding-bottom: 25px;
    color:#99a3ba;
}
.content-image{
    width:350px;
}
.content-text{
    padding-bottom: 25px;
    color:white;
}
.subinfocontent{
    color:#99a3ba;
}
.infocontent-rightside{

    float:right 
}
</style>