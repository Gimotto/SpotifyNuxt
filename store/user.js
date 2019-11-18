
export const state = () => ({
    user: {},
})
  export const getters = {
    getUser(state){
      return state.user
    }
  }
  export const mutations = {
    setUser(state,string){
           state.user = string
    }
  }
  export const action = {
      setUser(e,string){
        e.commit('setUser',string)
      }      
}