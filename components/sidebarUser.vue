<template>
 <div class="siderbarUser">  
      <p style="color:white">Profilo</p>
        <nuxt-link :to="'/profile/'">Home</nuxt-link><br>
      </div>
</template>

<script>
export default {
    name: "sidebarUser",
    components: {
        
    }
}
</script>

<style>
.siderbarUser{
position: fixed;
    background-color: black;
    margin-left: -15px;
    padding: 15px;  
    width: 100%;
    height: 100%; 
}
.usercontent {
    width: 100%;
}

</style>
