<template>
        
<div class="contentstyle" > 
<b-container fluid >
  <b-row>
      <b-col cols="1"></b-col>
        <b-col cols="10"><topNavbar/></b-col>
        <b-col cols="1"></b-col>
  </b-row>
    <b-row v-for="(category, i) in categoriesToList" :key="'category_' + i">
        
      <b-col cols="1" ></b-col>
        <b-col cols="10" class="content">
            <div class="content-text">
            <h2>{{i}}-{{ category.name }}
                <span class="infocontent-rightside">
                    <h6><nuxt-link :to="'/genre/'+category.id">View All</nuxt-link></h6>
                </span>
            </h2>
        </div>
        <span v-if="allCategoryShow[i]">
         <render :cards="allCategoryShow[i]"/>
        </span>
        <span v-else>
            error
        </span>
        </b-col>
        <b-col cols="1"></b-col>
    
  </b-row> 
</b-container>
</div>
</template>

<script>
import topNavbar from '@/components/topNavbar'
import render from '@/components/render';
export default {
    name: "index",
    components: {
            topNavbar,
            render
    },
    data(){
        return{
            allCategoryShow: [],
            categoriesToList: {
                /*
                'mood': [],
                'toplists':[],
                'hiphop':[],
                'pop':[],
                'reggae':[],
            */
            }
        }
    },
    computed: {
        token() {
            return this.$store.getters['login/getToken']
        },
        user(){
            return this.$store.getters['user/getUser']
        }
    },
    watch: {
        async token(value) {
            if(value && value.length) {
               await this.fetchCategories()
            }
        }
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
async fetchCategories() {
    await this.$axios({
                    method:'get',
                    url:'https://api.spotify.com/v1/browse/categories?limit=40',
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': 'Bearer ' + this.token
                    }
                    })
                    .then(data=>{
                        this.categoriesToList = data.data.categories.items
                        data.data.categories.items.forEach(async el=>{
                            await this.$axios({
                    method:'get',
                    url:'https://api.spotify.com/v1/browse/categories/'+el.id+'/playlists?limit=6',
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': 'Bearer ' + this.token
                    }
                    })
                    .then(el=>{
                         this.allCategoryShow.push(el.data.playlists.items)
                    })
                    .catch(function(error){
                        console.log(error);
                    })
                        }) 
                    })
                    .catch(function(error){
                        console.log(error);
                    })
                    console.log("ok")

},
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
.infocontent-rightside{

    float:right 
}
</style>