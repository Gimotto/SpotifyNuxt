(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{210:function(t,e,n){var content=n(212);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("4830804e",content,!0,{sourceMap:!1})},211:function(t,e,n){"use strict";var r=n(210);n.n(r).a},212:function(t,e,n){(t.exports=n(40)(!1)).push([t.i,".container-card[data-v-2b0b84e5]{height:250px;width:200px;padding:0}.container-playlist[data-v-2b0b84e5]{max-height:100%;max-width:100%;cursor:pointer}.img-cover[data-v-2b0b84e5]{-webkit-user-drag:none;max-height:250px;max-width:94%;margin-left:3%}.title[data-v-2b0b84e5]{size:36px;max-width:80%;margin-left:10%}.img-cover[data-v-2b0b84e5]:hover{-webkit-user-drag:none;max-height:270px;max-width:98%;margin-left:1%}",""])},213:function(t,e,n){"use strict";var r={name:"render",props:{cards:{type:[Array,String],default:function(){return[]}},addto:{type:Boolean,default:function(){return!1}},renderCategory:{type:Boolean,default:function(){return!1}}},methods:{addToPlaylist:function(t){console.log(this.cards),this.$emit("selectedid",t),console.log(t)},isExist:function(){for(var i=0;i<this.cards.length;i++)if("images"==this.cards[i])return console.log("trovato"),!0;return console.log("false"),!1},goToPage:function(t,e){this.$router.push({path:"/playlist/"+t})},goToPageCategory:function(t){this.$router.push({path:"/genre/"+t})}}},o=(n(211),n(39)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{attrs:{fluid:""}},[n("b-row",t._l(t.cards,(function(e){return n("b-col",{key:"item"+e.id,staticClass:"container-card",attrs:{xl:"2",lg:"2",md:"4",sm:"6"}},[n("div",{staticClass:"container-playlist"},[t.renderCategory?n("div",{on:{click:function(n){return t.goToPageCategory(e.id)}}},[n("img",{staticClass:"img-cover",attrs:{src:e.icons&&e.icons.length?e.icons[0].url:"https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"}}),t._v(" "),n("p",{staticClass:"title",staticStyle:{color:"white"}},[t._v(t._s(e.name))])]):n("div",[t.addto?n("div",{on:{click:function(n){return t.addToPlaylist(e.id)}}},[n("img",{staticClass:"img-cover",attrs:{src:e.images&&e.images.length?e.images[0].url:"https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"}}),t._v(" "),n("p",{staticClass:"title"},[t._v(t._s(e.name))])]):n("div",{on:{click:function(n){return t.goToPage(e.id,e.owner.id)}}},[n("img",{staticClass:"img-cover",attrs:{src:e.images&&e.images.length?e.images[0].url:"https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"}}),t._v(" "),n("p",{staticClass:"title",staticStyle:{color:"white"}},[t._v(t._s(e.name))])])])])])})),1)],1)}),[],!1,null,"2b0b84e5",null);e.a=component.exports},224:function(t,e,n){var content=n(245);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("1054a274",content,!0,{sourceMap:!1})},229:function(t,e,n){"use strict";var r={name:"modalPlaylist",props:{id:{required:!0,type:String},createnew:{type:Boolean,default:function(){return!1}}},data:function(){return{bodytext:"Hello World"}},methods:{openModal:function(){this.$bvModal.show(this.id)},closeModal:function(){this.$bvModal.hide(this.id)}}},o=n(39),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-modal",{attrs:{id:t.id,size:"xl","hide-footer":""},on:{hidden:t.closeModal},scopedSlots:t._u([{key:"modal-title",fn:function(){return[t._t("header")]},proxy:!0}],null,!0)},[t._v(" "),n("div",{staticClass:"d-block text-center"},[t._t("body")],2),t._v(" "),t.createnew?t._e():n("div",[n("b-button",{staticClass:"mt-3",attrs:{block:""},on:{click:function(e){return t.closeModal()}}},[t._v("Close Me")])],1)])],1)}),[],!1,null,null,null);e.a=component.exports},244:function(t,e,n){"use strict";var r=n(224);n.n(r).a},245:function(t,e,n){(t.exports=n(40)(!1)).push([t.i,".content[data-v-032c61a4]{padding-top:50px}.content-left[data-v-032c61a4]{position:fixed}.sectionTrack[data-v-032c61a4]{min-height:100vh}.contentstyle[data-v-032c61a4]{width:100%;margin-left:15px;padding:15px;background-image:linear-gradient(#2c3e50,#264b52)}.content-text-left[data-v-032c61a4]{padding-top:10px;padding-bottom:25px;color:#99a3ba}.content-image[data-v-032c61a4]{width:350px}.content-text[data-v-032c61a4]{padding-bottom:25px;color:#fff}.subinfocontent[data-v-032c61a4]{color:#99a3ba}.infocontent-rightside[data-v-032c61a4]{float:right}",""])},255:function(t,e,n){"use strict";n.r(e);n(45);var r,o,l,c,d,h,f,m,y,v,k=n(13),w=(n(74),n(2),n(1),n(4),n(229)),x=n(213),_={name:"playlist-id",components:{modalPlaylist:w.a,render:x.a},data:function(){return{userPlaylistArray:[],idmodal:"idmodalPlaylist",playlistDetails:{},trackselected:"",imagesCategory:"",isFetching:!0,statusContent:!1}},computed:{token:function(){return this.$store.getters["login/getToken"]},user:function(){return this.$store.getters["user/getUser"]},checkTokenUser:function(){if(Object.keys(this.user).length&&this.token)return!0},coverImage:function(){return this.playlistDetails.images&&this.playlistDetails.images.length?this.playlistDetails.images[0].url:"https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"},playlistTracks:function(){return this.playlistDetails.tracks?this.playlistDetails.tracks.items.map((function(t){return t.track})):[]},userPlaylist:function(){var t=this;return this.userPlaylistArray.length?this.userPlaylistArray.filter((function(e){return e.owner.id==t.user.id})):[]},finderPlaylist:function(){var t=this;if(this.userPlaylistArray.length)return this.userPlaylistArray.find((function(e){return e.id==t.playlistDetails.id}))}},watch:{checkTokenUser:(v=Object(k.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getDetails();case 2:return this.playlistDetails=t.sent,t.next=5,this.getUserPlaylist();case 5:this.userPlaylistArray=t.sent;case 6:case"end":return t.stop()}}),t,this)}))),function(t){return v.apply(this,arguments)}),playlistDetails:(y=Object(k.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("watch: ",e);case 1:case"end":return t.stop()}}),t)}))),function(t){return y.apply(this,arguments)}),"$route.params.id":(m=Object(k.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.checkTokenUser){t.next=6;break}return t.next=3,this.getDetails();case 3:t.t0=t.sent,t.next=7;break;case 6:t.t0={};case 7:if(this.playlistDetails=t.t0,!this.checkTokenUser){t.next=14;break}return t.next=11,this.getUserPlaylist();case 11:t.t1=t.sent,t.next=15;break;case 14:t.t1={};case 15:this.userPlaylistArray=t.t1;case 16:case"end":return t.stop()}}),t,this)}))),function(){return m.apply(this,arguments)})},mounted:(f=Object(k.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.checkTokenUser){t.next=6;break}return t.next=3,this.getDetails();case 3:t.t0=t.sent,t.next=7;break;case 6:t.t0={};case 7:if(this.playlistDetails=t.t0,!this.checkTokenUser){t.next=14;break}return t.next=11,this.getUserPlaylist();case 11:t.t1=t.sent,t.next=15;break;case 14:t.t1={};case 15:this.userPlaylistArray=t.t1;case 16:case"end":return t.stop()}}),t,this)}))),function(){return f.apply(this,arguments)}),methods:{followPlaylist:(h=Object(k.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.$axios({method:"PUT",url:"https://api.spotify.com/v1/playlists/"+e+"/followers",data:{public:!1},headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+this.token}}).catch((function(t){console.log(t)})),console.log("playlist followed"),t.next=4,this.getDetails();case 4:this.playlistDetails=t.sent,this.$router.push("/playlist");case 6:case"end":return t.stop()}}),t,this)}))),function(t){return h.apply(this,arguments)}),removePlaylist:(d=Object(k.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("myPlaylist: ",e),this.$axios({method:"DELETE",url:"https://api.spotify.com/v1/users/"+this.user.id+"/playlists/"+e+"/followers",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+this.token}}).catch((function(t){console.log(t)})),console.log("deleted"),t.next=5,this.getDetails();case 5:this.playlistDetails=t.sent,this.$router.push("/playlist");case 7:case"end":return t.stop()}}),t,this)}))),function(t){return d.apply(this,arguments)}),removeTrack:(c=Object(k.a)(regeneratorRuntime.mark((function t(e,n,r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("playlist",e),console.log("trackSelected: ",n),console.log("position: ",r),this.$axios({method:"DELETE",url:"https://api.spotify.com/v1/playlists/"+e+"/tracks",data:{tracks:[{uri:n,positions:[r]}]},headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+this.token}}).catch((function(t){console.log(t)})),console.log("Track deleted correctly"),this.closeModal(),t.next=8,this.getDetails();case 8:return this.playlistDetails=t.sent,t.t0=console,t.next=12,this.playlistDetails;case 12:t.t1=t.sent,t.t0.log.call(t.t0,t.t1);case 14:case"end":return t.stop()}}),t,this)}))),function(t,e,n){return c.apply(this,arguments)}),addToPlaylist:(l=Object(k.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("selectedPlaylist: ",e),console.log("trackSelected: ",this.trackselected),this.$axios({method:"POST",url:"https://api.spotify.com/v1/playlists/"+e+"/tracks?uris="+this.trackselected,headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+this.token}}).catch((function(t){console.log(t)})),console.log("Track added correctly"),this.closeModal(),t.next=7,this.getDetails();case 7:this.playlistDetails=t.sent,console.log(this.playlistDetails);case 9:case"end":return t.stop()}}),t,this)}))),function(t){return l.apply(this,arguments)}),closeModal:function(){this.trackselected="",this.$refs.modal.closeModal()},openModal:function(t){this.trackselected=t,this.$refs.modal.openModal()},convertMilltominute:function(t){var e=Math.floor(t/6e4),n=(t%6e4/1e3).toFixed(0);return e+":"+(n<10?"0":"")+n},getDetails:(o=Object(k.a)(regeneratorRuntime.mark((function t(){var e,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios({method:"get",url:"https://api.spotify.com/v1/playlists/"+this.$route.params.id+"?VS="+Math.random(),headers:{Accept:"application/json",Authorization:"Bearer "+this.token}}).catch((function(t){console.log(t)}));case 2:return e=t.sent,data=e.data,console.log("infunction",data),t.abrupt("return",data);case 6:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)}),getUserPlaylist:(r=Object(k.a)(regeneratorRuntime.mark((function t(){var e,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios({method:"get",url:"https://api.spotify.com/v1/users/"+this.user.id+"/playlists",headers:{Accept:"application/json",Authorization:"Bearer "+this.token}}).catch((function(t){console.log(t)}));case 2:return e=t.sent,data=e.data,t.abrupt("return",data.items);case 5:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})}},C=(n(244),n(39)),component=Object(C.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contentstyle"},[n("modalPlaylist",{ref:"modal",attrs:{id:t.idmodal}},[n("div",{attrs:{slot:"header"},slot:"header"},[t._v("Scegli in quale playlist inserire la canzone")]),t._v(" "),n("div",{attrs:{slot:"body"},slot:"body"},[n("render",{attrs:{cards:t.userPlaylist,addto:!0},on:{selectedid:t.addToPlaylist}})],1)]),t._v(" "),n("b-container",{attrs:{fluid:""}},[n("b-row",[n("b-col",{attrs:{cols:"1"}}),t._v(" "),n("b-col",{staticClass:"content",attrs:{cols:"4"}},[n("div",{staticClass:"content-left"},[n("img",{staticClass:"content-image",attrs:{src:t.coverImage}}),t._v(" "),n("div",{staticClass:"content-text-left"},[n("h4",{staticStyle:{color:"white"}},[t._v("\r\n                        "+t._s(t.playlistDetails.name))]),t._v(" "),t.playlistDetails.owner?n("span",[t._v("\r\n                            "+t._s(t.playlistDetails.owner.display_name)),n("br")]):t._e(),t._v(" "),t.playlistDetails.tracks?n("span",[t._v("\r\n                            "+t._s(t.playlistDetails.tracks.total)+" \r\n                        ")]):t._e(),t._v(" Brani"),n("br"),t._v(" "),""==t.playlistDetails.description?n("span"):n("span",[t._v("\r\n                            "+t._s(t.playlistDetails.description)),n("br")]),t._v(" "),t.playlistDetails.followers?n("span",[t._v("\r\n                            "+t._s(t.playlistDetails.followers.total)+" Followers\r\n                        ")]):t._e(),t._v(" "),n("br"),t._v(" "),t.finderPlaylist?n("span",[n("img",{attrs:{src:"https://img.icons8.com/material-rounded/16/000000/filled-trash.png"},on:{click:function(e){return t.removePlaylist(t.playlistDetails.id)}}}),t._v(" Delete From your library\r\n                            ")]):n("span",[n("img",{attrs:{src:"https://img.icons8.com/material-sharp/16/000000/add.png"},on:{click:function(e){return t.followPlaylist(t.playlistDetails.id)}}}),t._v(" Add to your library\r\n                            ")])])])]),t._v(" "),n("b-col",{staticClass:"sectionTrack",attrs:{cols:"6"}},[n("div",{staticClass:"content"},[n("div",{staticClass:"content-text"},[t.playlistDetails.tracks?n("span",[t.playlistDetails.tracks.total?t._e():n("div",[n("h6",[t._v("Playlist Vuota")]),t._v("\r\n                            Aggiungi un brano alla Playlist\r\n                        ")])]):t._e(),t._v(" "),t._l(t.playlistTracks,(function(track,i){return n("span",{key:i},[n("div",{staticClass:"infocontent"},[t.playlistDetails.owner.id==t.user.id?n("span",[n("img",{attrs:{src:"https://img.icons8.com/material-rounded/16/000000/filled-trash.png"},on:{click:function(e){return t.removeTrack(t.playlistDetails.id,t.playlistTracks[i].uri,i)}}})]):t._e(),t._v(" "),n("img",{attrs:{src:"https://img.icons8.com/material-outlined/16/000000/add.png"},on:{click:function(e){return t.openModal(t.playlistTracks[i].uri)}}}),t._v(" "),n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"16",height:"16",viewBox:"0 0 16 16"}},[n("path",{attrs:{d:"M 11.734375 2 C 11.636719 2 11.539063 2.011719 11.441406 2.03125 L 6.1875 3.15625 C 5.496094 3.304688 5 3.921875 5 4.625 L 5 10.28125 C 4.703125 10.109375 4.367188 10 4 10 C 2.902344 10 2 10.902344 2 12 C 2 13.097656 2.902344 14 4 14 C 5.097656 14 6 13.097656 6 12 L 6 6.40625 L 12 5.117188 L 12 9.28125 C 11.703125 9.109375 11.367188 9 11 9 C 9.902344 9 9 9.902344 9 11 C 9 12.097656 9.902344 13 11 13 C 12.097656 13 13 12.097656 13 11 L 13 3.292969 C 13 2.890625 12.828125 2.511719 12.535156 2.273438 C 12.3125 2.097656 12.03125 2 11.734375 2 Z M 11.808594 3.007813 C 11.851563 3.015625 11.878906 3.03125 11.90625 3.054688 C 11.957031 3.09375 12 3.160156 12 3.292969 L 12 4.09375 L 6 5.382813 L 6 4.625 C 6 4.386719 6.160156 4.1875 6.394531 4.136719 L 11.652344 3.007813 C 11.714844 2.996094 11.765625 2.996094 11.808594 3.007813 Z M 11 10 C 11.558594 10 12 10.441406 12 11 C 12 11.558594 11.558594 12 11 12 C 10.441406 12 10 11.558594 10 11 C 10 10.441406 10.441406 10 11 10 Z M 4 11 C 4.558594 11 5 11.441406 5 12 C 5 12.558594 4.558594 13 4 13 C 3.441406 13 3 12.558594 3 12 C 3 11.441406 3.441406 11 4 11 Z"}})]),t._v("\r\n                     "+t._s(track.name)+" "),n("span",{staticClass:"infocontent-rightside"},[t._v(t._s(t.convertMilltominute(track.duration_ms)))]),n("br"),t._v(" "),n("p",{staticClass:"subinfocontent"},[t._l(track.artists,(function(e,i){return n("span",{key:i},[t._v("\r\n                       "+t._s(e.name)+"  \r\n                   ")])})),t._v("\r\n                    - "+t._s(track.album.name)+"\r\n                    ")],2)])])}))],2)])]),t._v(" "),n("b-col",{staticClass:"content",attrs:{cols:"1"}})],1)],1)],1)}),[],!1,null,"032c61a4",null);e.default=component.exports}}]);