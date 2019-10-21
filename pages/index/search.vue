<template>
        <div align="center" class="contentstyle">     
            cerca
           </div>
</template>

<script>
export default {
    name: "search",
    components: {
    },
    computed:{
            user(){
                return this.$store.getters['user/getUser']
        }},
    methods: {
    }
}
</script>

<style scoped>
.contentstyle{
    min-height: 100vh;
    width:100%;
    margin-left:15px;
    padding:15px;
    background-image: linear-gradient(#2C3E50, #264b52);
}
.content{
    margin:20px;
}
.btn-info{
    background-image: linear-gradient(#2C3E50, #264b52);
    border-color: 2px solid white;
    width:25%;
}
</style>