(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[1],{11:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(87),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"ec9092bf-d7c1-484e-b4e6-892ed49a92ea"}})},140:function(e,t,n){e.exports=n(229)},145:function(e,t,n){},146:function(e,t,n){},229:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(0),r=n.n(a),c=n(44),u=n.n(c),i=(n(145),n(32)),o=n(33),s=n(35),l=n(34),f=(n(146),n(6)),d=n.n(f),p=n(13),m=function(){return r.a.createElement("nav",{className:d.a.nav},r.a.createElement("div",{className:"".concat(d.a.item," ").concat(d.a.active)},r.a.createElement(p.b,{to:"/profile",activeClassName:d.a.activeLink},"Profile")),r.a.createElement("div",{className:d.a.item},r.a.createElement(p.b,{to:"/dialogs",activeClassName:d.a.activeLink},"Messages")),r.a.createElement("div",{className:d.a.item},r.a.createElement(p.b,{to:"/news",activeClassName:d.a.activeLink},"News")),r.a.createElement("div",{className:d.a.item},r.a.createElement(p.b,{to:"/music",activeClassName:d.a.activeLink},"Music")),r.a.createElement("div",{className:d.a.item},r.a.createElement(p.b,{to:"/settings",activeClassName:d.a.activeLink},"Settings")),r.a.createElement("div",{className:d.a.item},r.a.createElement(p.b,{to:"/users",activeClassName:d.a.activeLink},"Users")))},h=n(83),v=n.n(h),g=function(e){return r.a.createElement("div",{className:v.a.content},"This will be news")},E=n(84),b=n.n(E),O=function(e){return r.a.createElement("div",{className:b.a.content},"Music")},w=n(85),S=n.n(w),j=function(e){return r.a.createElement("div",{className:S.a.content},"Settings")},y=n(20),_=n(45),I=n.n(_),N=function(e){return r.a.createElement("header",{className:I.a.header},r.a.createElement("img",{alt:"header",src:"https://img.icons8.com/carbon-copy/100/000000/minecraft-logo.png"}),r.a.createElement("div",{className:I.a.logo_name},"Social netWork"),r.a.createElement("div",{className:I.a.login},e.isAuth?r.a.createElement("div",null," ",e.login," - ",r.a.createElement("button",{onClick:e.logout},"logout")):r.a.createElement(p.b,{to:"/login"},"Login")))},k=n(27),P=n(24),T=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(N,this.props)}}]),n}(r.a.Component),C=Object(k.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:P.d})(T),x=n(17),L=n(4),U={initialized:!1},R="APP/INITIALIZED-SUCCESS",A=n(37),F=n(63),z=n(74),D=n(80),H=n(90),M=n(81),G=Object(x.c)({profilePage:F.d,dialogsPage:z.a,usersPage:D.f,auth:P.a,form:M.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(L.a)({},e,{initialized:!0});default:return e}}}),W=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||x.d,B=Object(x.e)(G,W(Object(x.a)(H.a)));window._store_=B;var J=B,K=function(e){return function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(A.a,null)},r.a.createElement(e,t))}},V=r.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,303))})),X=r.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,304))})),q=r.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,305))})),Q=r.a.lazy((function(){return n.e(5).then(n.bind(null,306))})),Y=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"all_wrapper"},r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(C,null),r.a.createElement(m,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(y.b,{path:"/login",render:K(V)}),r.a.createElement(y.b,{path:"/profile/:userId?",render:K(X)}),r.a.createElement(y.b,{path:"/dialogs",render:K(q)}),r.a.createElement(y.b,{path:"/news",render:function(){return r.a.createElement(g,null)}}),r.a.createElement(y.b,{path:"/music",render:function(){return r.a.createElement(O,null)}}),r.a.createElement(y.b,{path:"/settings",render:function(){return r.a.createElement(j,null)}}),r.a.createElement(y.b,{path:"/users",render:K(Q)})))):r.a.createElement(A.a,null)}}]),n}(r.a.Component),Z=Object(x.d)(y.f,Object(k.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Object(P.b)());Promise.all([t]).then((function(){e({type:R})}))}}}))(Y),$=function(e){return r.a.createElement(p.a,null,r.a.createElement(k.a,{store:J},r.a.createElement(Z,null)))};u.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},24:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return E})),n.d(t,"d",(function(){return b}));var a=n(5),r=n.n(a),c=n(8),u=n(4),i=n(11),o=function(){return i.a.get("auth/me")},s=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return i.a.post("auth/login",{email:e,password:t,rememberMe:n})},l=function(){return i.a.delete("auth/login")},f=n(46),d={id:null,email:null,login:null,isFetching:!0,isAuth:!1},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(u.a)({},e,{},t.data);case m:return Object(u.a)({},e,{isFetching:t.isFetching});default:return e}},m="AUTH/IS_FETCHING",h="AUTH/SET_USER_DATA",v=function(e,t,n,a){return{type:h,data:{id:e,email:t,login:n,isAuth:a}}},g=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,c,u,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,c=a.id,u=a.login,i=a.email,t(v(c,u,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},E=function(e,t,n){return function(){var a=Object(c.a)(r.a.mark((function a(c){var u,i;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s(e,t,n);case 2:0===(u=a.sent).data.resultCode?c(g(e,t,n)):(i=u.data.messages.length>0?u.data.messages[0]:"some error",c(Object(f.a)("login",{_error:i})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},b=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l();case 2:0===e.sent.data.resultCode&&t(v(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},37:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0),r=n.n(a),c=n(88),u=n.n(c),i=n(89),o=n.n(i),s=function(){return r.a.createElement("div",null,r.a.createElement("img",{alt:"preloader",className:o.a.preloader,src:u.a}))}},45:function(e,t,n){e.exports={header:"Header_header__2REJl",logo_name:"Header_logo_name__dPzo0",login:"Header_login__1HukT"}},6:function(e,t,n){e.exports={nav:"Navbar_nav__2ChFn",item:"Navbar_item__39T1q",activeLink:"Navbar_activeLink__M0U0Q"}},63:function(e,t,n){"use strict";n.d(t,"d",(function(){return m})),n.d(t,"a",(function(){return w})),n.d(t,"c",(function(){return j})),n.d(t,"b",(function(){return y})),n.d(t,"f",(function(){return _})),n.d(t,"e",(function(){return I}));var a=n(5),r=n.n(a),c=n(8),u=n(25),i=n(4),o=n(11),s=function(e){return o.a.get("profile/".concat(e)).then((function(e){return e.data}))},l=function(e){return o.a.get("profile/status/".concat(e)).then((function(e){return e}))},f=function(e){return o.a.put("profile/status/",{status:e}).then((function(e){return e.data}))},d=function(e){var t=new FormData;return t.append("image",e),o.a.put("profile/photo/",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},p={posts:[{id:1,message:"Hi, how do you feel? I have not seen you since I was in Berlin!",likesCount:12},{id:2,message:"Wow! It is great! When are you going there?",likesCount:12}],profile:null,status:""},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(i.a)({},e,{posts:[{id:5,message:t.postMessageText,likesCount:0}].concat(Object(u.a)(e.posts))});case b:return Object(i.a)({},e,{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case v:return Object(i.a)({},e,{profile:t.profile});case g:return Object(i.a)({},e,{status:t.userStatus});case E:return Object(i.a)({},e,{status:t.status});case O:return Object(i.a)({},e,{profile:Object(i.a)({},e.profile,{photos:t.photos})});default:return e}},h="PROFILE/ADD-POST",v="PROFILE/SET-USER-PROFILE",g="PROFILE/SET-USER-PROFILE-STATUS",E="PROFILE/UPDATE-PROFILE-STATUS",b="PROFILE/DELETE-POST",O="SAVE-PHOTO-SUCCESS",w=function(e){return{type:h,postMessageText:e}},S=function(e){return{type:E,status:e}},j=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s(e);case 2:a=t.sent,n({type:v,profile:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(e);case 2:a=t.sent,n((r=a.data,{type:g,userStatus:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e);case 2:0===t.sent.resultCode&&n(S(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},I=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e);case 2:0===(a=t.sent).resultCode&&n((r=a.data.photos,{type:O,photos:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()}},74:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return o}));var a=n(25),r=n(4),c={dialogs:[{id:1,name:"Egor"},{id:2,name:"Andrew"},{id:3,name:"David"}],messages:[{id:1,message:"Hi"},{id:2,message:"How are you?"},{id:3,message:"I can met with you"}]},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:var n=t.messageText;return Object(r.a)({},e,{messages:[].concat(Object(a.a)(e.messages),[{id:6,message:n}])});default:return e}},i="DIALOGS/ADD-MESSAGE",o=function(e){return{type:i,messageText:e}}},80:function(e,t,n){"use strict";n.d(t,"f",(function(){return d})),n.d(t,"c",(function(){return S})),n.d(t,"d",(function(){return y})),n.d(t,"b",(function(){return _})),n.d(t,"a",(function(){return N})),n.d(t,"e",(function(){return k}));var a=n(5),r=n.n(a),c=n(8),u=n(25),i=n(4),o=n(11),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return o.a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return o.a.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return o.a.delete("follow/".concat(e)).then((function(e){return e.data}))}},l=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(i.a)({},e,{},a):e}))},f={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[1,2]},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(i.a)({},e,{users:l(e.users,t.userId,"id",{followed:!0})});case m:return Object(i.a)({},e,{users:l(e.users,t.userId,"id",{followed:!1})});case h:return Object(i.a)({},e,{users:t.users});case v:return Object(i.a)({},e,{currentPage:t.currentPage});case g:return Object(i.a)({},e,{totalUsersCount:t.count});case E:return Object(i.a)({},e,{isFetching:t.isFetching});case b:return Object(i.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(u.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},p="USERS/FOLLOW",m="USERS/UNFOLLOW",h="USERS/SET_USERS",v="USERS/SET_CURRENT_PAGE",g="USERS/SET_TOTAL_USERS_COUNT",E="USERS/IS_FETCHING",b="USERS/TOGGLE_IS_FOLLOWING_IN_PROGRESS",O=function(e){return{type:p,userId:e}},w=function(e){return{type:m,userId:e}},S=function(e){return{type:v,currentPage:e}},j=function(e){return{type:E,isFetching:e}},y=function(e,t){return{type:b,isFetching:e,userId:t}},_=function(e,t){return function(){var n=Object(c.a)(r.a.mark((function n(a){var c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(j(!0)),a(S(e)),n.next=4,s.getUsers(e,t);case 4:c=n.sent,a(j(!1)),a((u=c.items,{type:h,users:u})),a((r=c.totalCount,{type:g,count:r}));case 8:case"end":return n.stop()}var r,u}),n)})));return function(e){return n.apply(this,arguments)}}()},I=function(){var e=Object(c.a)(r.a.mark((function e(t,n,a,c){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(y(!0,n)),e.next=3,a(n);case 3:0===e.sent.resultCode&&t(c(n)),t(y(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),N=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:I(n,e,s.follow.bind(s),O);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:I(n,e,s.unfollow.bind(s),w);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},88:function(e,t,n){e.exports=n.p+"static/media/preloader.d5c02aa6.gif"},89:function(e,t,n){e.exports={preloader:"Preloader_preloader__2xK9x"}}},[[140,2,3]]]);
//# sourceMappingURL=main.8f3010ba.chunk.js.map