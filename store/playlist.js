export const state = () => ({
    myPlaylist: '',
})
  export const getters = {
   getMyPlaylists(state){
      return state.myPlaylist
    }
  }
  export const mutations = {
    setMyPlaylists (state , obj) {
      console.log("sono entrato")
      console.log(state)
      console.log(obj.userid)
      console.log("token: ", obj.token)
       const {data} = this.$axios({
               method:'get',
               url:'https://api.spotify.com/v1/users/'+obj.userid+'/playlists',
               headers: {
                   'Accept': 'application/json',
                   'Authorization': 'Bearer ' + obj.token
               }
               })
               .then(el=>{
                console.log('myPlaylist: ', el.data.items)
                state.myPlaylist = el.data.items
               })
            .catch(function(error){
                console.log(error);
            })

   },
  }
  export const action = {
    setMyPlaylists(e,obj){
        e.commit('setMyPlaylists',obj)
      }      
}