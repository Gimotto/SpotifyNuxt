<template>
 <div class="contentstyle" >
<b-container fluid >
    <b-row>
        <b-col cols="1" ></b-col>
        <b-col cols="10" class="content">
            <h2 style="color:white">{{capitalize(this.$route.params.id)}}</h2><br>
            <render :cards="MyPlaylistsArray"/>
        </b-col>
        <b-col cols="1"></b-col>
  </b-row> 
</b-container>
</div>       
</template>

<script>
import render from '@/components/render';
export default {
    name: "playlist",
    components: {
        render
    },
    data(){
        return{
            MyPlaylistsArray: []
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
               await this.showCategory()
        },
      },
    
    async mounted(){
        if(this.checkTokenUser) await this.showCategory()
    },
    methods:{
    capitalize(str) {
            var strVal = '';
            str = str.split(' ');
            for (var chr = 0; chr < str.length; chr++) {
            strVal += str[chr].substring(0, 1).toUpperCase() + str[chr].substring(1, str[chr].length) + ' '
        }
    return strVal
},     
        async showCategory () {
            const {data} = await this.$axios({
                    method:'get',
                    url:'https://api.spotify.com/v1/browse/categories/'+this.$route.params.id+'/playlists',
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': 'Bearer ' + this.token
                    }
                    })
                    .catch(function(error){
                        console.log(error);
                    })
                    console.log("ok")
                    console.log("sono in genre")
                    console.log(data.playlists.items)
        this.MyPlaylistsArray = data.playlists.items
            return data.playlists.items
        }
    }
}

</script>

<style scoped>
.content{
    
    padding-top: 50px;
}
.contentstyle{
    min-height: 100vh;
    width:100%;
    margin-left:15px;
    padding:15px;
    background-image: linear-gradient(#2C3E50, #264b52);
}
.content-text{
    padding-bottom: 25px;
    color:white;
}
</style>