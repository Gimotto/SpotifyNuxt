(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{210:function(t,e,r){var content=r(212);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("4830804e",content,!0,{sourceMap:!1})},211:function(t,e,r){"use strict";var n=r(210);r.n(n).a},212:function(t,e,r){(t.exports=r(40)(!1)).push([t.i,".container-card[data-v-2b0b84e5]{height:250px;width:200px;padding:0}.container-playlist[data-v-2b0b84e5]{max-height:100%;max-width:100%;cursor:pointer}.img-cover[data-v-2b0b84e5]{-webkit-user-drag:none;max-height:250px;max-width:94%;margin-left:3%}.title[data-v-2b0b84e5]{size:36px;max-width:80%;margin-left:10%}.img-cover[data-v-2b0b84e5]:hover{-webkit-user-drag:none;max-height:270px;max-width:98%;margin-left:1%}",""])},213:function(t,e,r){"use strict";var n={name:"render",props:{cards:{type:[Array,String],default:function(){return[]}},addto:{type:Boolean,default:function(){return!1}},renderCategory:{type:Boolean,default:function(){return!1}}},methods:{addToPlaylist:function(t){console.log(this.cards),this.$emit("selectedid",t),console.log(t)},isExist:function(){for(var i=0;i<this.cards.length;i++)if("images"==this.cards[i])return console.log("trovato"),!0;return console.log("false"),!1},goToPage:function(t,e){this.$router.push({path:"/playlist/"+t})},goToPageCategory:function(t){this.$router.push({path:"/genre/"+t})}}},o=(r(211),r(39)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{fluid:""}},[r("b-row",t._l(t.cards,(function(e){return r("b-col",{key:"item"+e.id,staticClass:"container-card",attrs:{xl:"2",lg:"2",md:"4",sm:"6"}},[r("div",{staticClass:"container-playlist"},[t.renderCategory?r("div",{on:{click:function(r){return t.goToPageCategory(e.id)}}},[r("img",{staticClass:"img-cover",attrs:{src:e.icons&&e.icons.length?e.icons[0].url:"https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"}}),t._v(" "),r("p",{staticClass:"title",staticStyle:{color:"white"}},[t._v(t._s(e.name))])]):r("div",[t.addto?r("div",{on:{click:function(r){return t.addToPlaylist(e.id)}}},[r("img",{staticClass:"img-cover",attrs:{src:e.images&&e.images.length?e.images[0].url:"https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"}}),t._v(" "),r("p",{staticClass:"title"},[t._v(t._s(e.name))])]):r("div",{on:{click:function(r){return t.goToPage(e.id,e.owner.id)}}},[r("img",{staticClass:"img-cover",attrs:{src:e.images&&e.images.length?e.images[0].url:"https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"}}),t._v(" "),r("p",{staticClass:"title",staticStyle:{color:"white"}},[t._v(t._s(e.name))])])])])])})),1)],1)}),[],!1,null,"2b0b84e5",null);e.a=component.exports},223:function(t,e,r){var content=r(243);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("d04b3a24",content,!0,{sourceMap:!1})},242:function(t,e,r){"use strict";var n=r(223);r.n(n).a},243:function(t,e,r){(t.exports=r(40)(!1)).push([t.i,".content[data-v-a8759df0]{padding-top:50px}.contentstyle[data-v-a8759df0]{min-height:100vh;width:100%;margin-left:15px;padding:15px;background-image:linear-gradient(#2c3e50,#264b52)}.content-text[data-v-a8759df0]{padding-bottom:25px;color:#fff}",""])},256:function(t,e,r){"use strict";r.r(e);r(20),r(45);var n,o,c,l=r(13),d=(r(2),r(1),r(4),{name:"playlist",components:{render:r(213).a},data:function(){return{MyPlaylistsArray:[]}},computed:{token:function(){return this.$store.getters["login/getToken"]},user:function(){return this.$store.getters["user/getUser"]},checkTokenUser:function(){if(Object.keys(this.user).length&&this.token)return!0}},watch:{checkTokenUser:(c=Object(l.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetchMyPlaylist();case 2:case"end":return t.stop()}}),t,this)}))),function(t){return c.apply(this,arguments)})},mounted:(o=Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.checkTokenUser){t.next=3;break}return t.next=3,this.fetchMyPlaylist();case 3:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)}),methods:{capitalize:function(t){var e="";t=t.split(" ");for(var r=0;r<t.length;r++)e+=t[r].substring(0,1).toUpperCase()+t[r].substring(1,t[r].length)+" ";return e},fetchMyPlaylist:(n=Object(l.a)(regeneratorRuntime.mark((function t(){var e,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios({method:"get",url:"https://api.spotify.com/v1/users/"+this.user.id+"/playlists",headers:{Accept:"application/json",Authorization:"Bearer "+this.token}}).catch((function(t){console.log(t)}));case 2:return e=t.sent,data=e.data,this.MyPlaylistsArray=data,t.abrupt("return",data);case 6:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})}}),h=(r(242),r(39)),component=Object(h.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contentstyle"},[e("b-container",{attrs:{fluid:""}},[e("b-row",[e("b-col",{attrs:{cols:"1"}}),this._v(" "),e("b-col",{staticClass:"content",attrs:{cols:"10"}},[e("h2",{staticStyle:{color:"white"}},[this._v("La Mia Libreria")]),e("br"),this._v(" "),e("render",{attrs:{cards:this.MyPlaylistsArray.items}})],1),this._v(" "),e("b-col",{attrs:{cols:"1"}})],1)],1)],1)}),[],!1,null,"a8759df0",null);e.default=component.exports}}]);