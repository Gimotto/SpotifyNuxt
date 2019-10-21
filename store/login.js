export const state = () => ({
    token: '',
})
  export const getters = {
    getToken(state){
      return state.token
    }
  }
  export const mutations = {
    setState(state,string){
           state.token = string
           this.$cookies.set("auth_token", state.token); 
    }
  }
  export const action = {
      setState(e,string){
        e.commit('setState',string)
      }      
}