<template>
<div class="contentstyle" > 
<b-container fluid >
    <nuxt-child/>
  <b-row>
      <b-col cols="1"></b-col>
        <b-col cols="10"><topNavbar/></b-col>
        <b-col cols="1"></b-col>
  </b-row>
    
    <b-row>
      <b-col cols="1" ></b-col>
        <b-col cols="10" class="content">
            <render :cards="categoriesToList" :renderCategory="true" />
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
    name: "genre",
    components: {
            topNavbar,
            render
    },
    data(){
        return{
            categoriesToList: []
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
               this.categoriesToList = await this.fetchCategory()
            }
        }
    },
    async mounted(){
        if(this.token && this.token.length) {
               this.categoriesToList = await this.fetchCategory()
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
        async fetchCategory (type) {
            const {data} = await this.$axios({
                    method:'get',
                    url:'https://api.spotify.com/v1/browse/categories?limit=40',
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': 'Bearer ' + this.token
                    }
                    })
                    .catch(function(error){
                        console.log(error);
                    })
                    console.log("ok")
            console.log(data.categories.items)
            return data.categories.items
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