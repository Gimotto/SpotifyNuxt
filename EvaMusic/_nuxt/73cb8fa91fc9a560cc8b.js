(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{210:function(t,e,n){var content=n(212);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("4830804e",content,!0,{sourceMap:!1})},211:function(t,e,n){"use strict";var r=n(210);n.n(r).a},212:function(t,e,n){(t.exports=n(40)(!1)).push([t.i,".container-card[data-v-2b0b84e5]{height:250px;width:200px;padding:0}.container-playlist[data-v-2b0b84e5]{max-height:100%;max-width:100%;cursor:pointer}.img-cover[data-v-2b0b84e5]{-webkit-user-drag:none;max-height:250px;max-width:94%;margin-left:3%}.title[data-v-2b0b84e5]{size:36px;max-width:80%;margin-left:10%}.img-cover[data-v-2b0b84e5]:hover{-webkit-user-drag:none;max-height:270px;max-width:98%;margin-left:1%}",""])},213:function(t,e,n){"use strict";var r={name:"render",props:{cards:{type:[Array,String],default:function(){return[]}},addto:{type:Boolean,default:function(){return!1}},renderCategory:{type:Boolean,default:function(){return!1}}},methods:{addToPlaylist:function(t){console.log(this.cards),this.$emit("selectedid",t),console.log(t)},isExist:function(){for(var i=0;i<this.cards.length;i++)if("images"==this.cards[i])return console.log("trovato"),!0;return console.log("false"),!1},goToPage:function(t,e){this.$router.push({path:"/playlist/"+t})},goToPageCategory:function(t){this.$router.push({path:"/genre/"+t})}}},o=(n(211),n(39)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{attrs:{fluid:""}},[n("b-row",t._l(t.cards,(function(e){return n("b-col",{key:"item"+e.id,staticClass:"container-card",attrs:{xl:"2",lg:"2",md:"4",sm:"6"}},[n("div",{staticClass:"container-playlist"},[t.renderCategory?n("div",{on:{click:function(n){return t.goToPageCategory(e.id)}}},[n("img",{staticClass:"img-cover",attrs:{src:e.icons&&e.icons.length?e.icons[0].url:"https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"}}),t._v(" "),n("p",{staticClass:"title",staticStyle:{color:"white"}},[t._v(t._s(e.name))])]):n("div",[t.addto?n("div",{on:{click:function(n){return t.addToPlaylist(e.id)}}},[n("img",{staticClass:"img-cover",attrs:{src:e.images&&e.images.length?e.images[0].url:"https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"}}),t._v(" "),n("p",{staticClass:"title"},[t._v(t._s(e.name))])]):n("div",{on:{click:function(n){return t.goToPage(e.id,e.owner.id)}}},[n("img",{staticClass:"img-cover",attrs:{src:e.images&&e.images.length?e.images[0].url:"https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"}}),t._v(" "),n("p",{staticClass:"title",staticStyle:{color:"white"}},[t._v(t._s(e.name))])])])])])})),1)],1)}),[],!1,null,"2b0b84e5",null);e.a=component.exports},214:function(t,e,n){var content=n(219);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("7ee9fbcb",content,!0,{sourceMap:!1})},218:function(t,e,n){"use strict";var r=n(214);n.n(r).a},219:function(t,e,n){(t.exports=n(40)(!1)).push([t.i,".navbar .navbar-collapse{text-align:center}a{color:#fff}",""])},220:function(t,e,n){var content=n(237);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("52a8537b",content,!0,{sourceMap:!1})},228:function(t,e,n){"use strict";var r={name:"topNavbar"},o=(n(218),n(39)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{attrs:{toggleable:"sm",type:"trasparent",variant:"trasparent"}},[n("b-navbar-toggle",{attrs:{target:"nav-text-collapse"}}),t._v(" "),n("b-collapse",{attrs:{id:"nav-text-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),n("b-nav-item",{attrs:{href:"#"}},[t._v("Podcast")]),t._v(" "),n("b-nav-item",{attrs:{href:"#"}},[t._v("Classifiche")]),t._v(" "),n("b-nav-item",{attrs:{to:"/genre"}},[t._v("Generi e Mood")]),t._v(" "),n("b-nav-item",{attrs:{href:"#"}},[t._v("Nuove Uscite")])],1)],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports},236:function(t,e,n){"use strict";var r=n(220);n.n(r).a},237:function(t,e,n){(t.exports=n(40)(!1)).push([t.i,".content[data-v-0b54538a]{padding-top:50px}.contentstyle[data-v-0b54538a]{min-height:100vh;width:100%;margin-left:15px;padding:15px;background-image:linear-gradient(#2c3e50,#264b52)}.content-text[data-v-0b54538a]{padding-bottom:25px;color:#fff}.infocontent-rightside[data-v-0b54538a]{float:right}",""])},260:function(t,e,n){"use strict";n.r(e);n(20),n(45);var r,o,c=n(13),l=n(228),d=n(213),h={name:"index",components:{topNavbar:l.a,render:d.a},data:function(){return{allCategoryShow:[],categoriesToList:{}}},computed:{token:function(){return this.$store.getters["login/getToken"]},user:function(){return this.$store.getters["user/getUser"]}},watch:{token:(o=Object(c.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e||!e.length){t.next=3;break}return t.next=3,this.fetchCategories();case 3:case"end":return t.stop()}}),t,this)}))),function(t){return o.apply(this,arguments)})},mounted:(r=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.token||!this.token.length){t.next=3;break}return t.next=3,this.fetchCategories();case 3:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)}),methods:{capitalize:function(t){var e="";t=t.split(" ");for(var n=0;n<t.length;n++)e+=t[n].substring(0,1).toUpperCase()+t[n].substring(1,t[n].length)+" ";return e},fetchCategories:function(){var t=this;this.$axios({method:"get",url:"https://api.spotify.com/v1/browse/categories?limit=30",headers:{Accept:"application/json",Authorization:"Bearer "+this.token}}).then((function(data){t.categoriesToList=data.data.categories.items,data.data.categories.items.forEach((function(e){t.$axios({method:"get",url:"https://api.spotify.com/v1/browse/categories/"+e.id+"/playlists?limit=6",headers:{Accept:"application/json",Authorization:"Bearer "+t.token}}).then((function(e){t.allCategoryShow.push(e.data.playlists.items)})).catch((function(t){console.log(t)}))}))})).catch((function(t){console.log(t)})),console.log("ok")}}},f=(n(236),n(39)),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contentstyle"},[n("b-container",{attrs:{fluid:""}},[n("b-row",[n("b-col",{attrs:{cols:"1"}}),t._v(" "),n("b-col",{attrs:{cols:"10"}},[n("topNavbar")],1),t._v(" "),n("b-col",{attrs:{cols:"1"}})],1),t._v(" "),t._l(t.categoriesToList,(function(e,i){return n("b-row",{key:"category_"+i},[n("b-col",{attrs:{cols:"1"}}),t._v(" "),n("b-col",{staticClass:"content",attrs:{cols:"10"}},[n("div",{staticClass:"content-text"},[n("h2",[t._v(t._s(e.name)+"\r\n                "),n("span",{staticClass:"infocontent-rightside"},[n("h6",[n("nuxt-link",{attrs:{to:"/genre/"+e.id}},[t._v("View All")])],1)])])]),t._v(" "),t.allCategoryShow?n("span",[n("render",{attrs:{cards:t.allCategoryShow[i]}})],1):t._e()]),t._v(" "),n("b-col",{attrs:{cols:"1"}})],1)}))],2)],1)}),[],!1,null,"0b54538a",null);e.default=component.exports}}]);