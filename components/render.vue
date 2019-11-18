<template>
    <b-container fluid>
        <b-row>
            
            <b-col class="container-card" xl="2" lg="2" md="4" sm="6" v-for="index in cards" :key="'item'+index.id">
                
                <div class="container-playlist">
                    <div v-if="renderCategory" @click="goToPageCategory(index.id)">
                        <img class="img-cover" :src="((!!index.icons && index.icons.length) ? index.icons[0].url : 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg')">
                            <p class="title" style="color:white">{{ index.name }}</p>
                    
                    </div>
                    <div v-else>
                    <div v-if="addto" @click="addToPlaylist(index.id)">
                            <img class="img-cover" :src="((!!index.images && index.images.length) ? index.images[0].url : 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg')">
                            <p class="title"  >{{ index.name }}</p>
                    </div>
                    <div v-else  @click="goToPage(index.id, index.owner.id)">
                        <img class="img-cover" :src="((!!index.images && index.images.length) ? index.images[0].url : 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg')">
                        <p class="title" style="color:white">{{ index.name }}</p>
                    </div>                 
                    </div>
                </div>
            </b-col>
        </b-row>    
    </b-container>
</template>
<script>

export default {
    name:'render',
    props:{
        'cards': {
            type: [Array,String],
            default: () => []
        },
        'addto': {
            type: Boolean,
            default: () => false
        },
        'renderCategory': {
            type: Boolean,
            default: () => false
        }
    },
    methods:{
        addToPlaylist(id){
            console.log(this.cards)
            this.$emit('selectedid',id)
            console.log(id)
        },
            isExist(){
                for(var i=0; i < this.cards.length; i++){
                        if( this.cards[i] == 'images'){
                            console.log("trovato")
                            return true
                    }
      }
      console.log("false")
      return false
    },
            goToPage(playlist_id,owner_id){
                this.$router.push({
                    path: '/playlist/'+playlist_id, 
                    });
            },
            goToPageCategory(playlist_id){
                 this.$router.push({
                    path: '/genre/'+playlist_id, 
                    });
            }
    },
}
</script>
<style scoped>
    .container-card{
        height: 250px;
        width: 200px;
        padding: 0px;
    }
    .container-playlist{
        max-height: 100%;
        max-width: 100%;
        cursor: pointer;
    }
    .img-cover{
        -webkit-user-drag: none;
        max-height: 250px;
        max-width: 94%;
        margin-left: 3%;
    }
    .title{
        size:36px;
        max-width: 80%;
        margin-left: 10%;
    }
    .img-cover:hover{
        -webkit-user-drag: none;
        max-height: 270px;
        max-width: 98%;
        margin-left: 1%;
    }
</style>