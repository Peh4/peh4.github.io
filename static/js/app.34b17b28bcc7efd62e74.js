webpackJsonp([0,2],[,,function(e,t,n){var r=n(0)(n(8),n(17),null,null);e.exports=r.exports},function(e,t,n){var r=n(0)(n(9),n(19),null,null);e.exports=r.exports},function(e,t,n){"use strict";var r=n(1),o=n.n(r),s=n(20),a=n.n(s),i=n(13),u=n.n(i),l=n(14),c=n.n(l);o.a.use(a.a),t.a=new a.a({routes:[{path:"/",name:"Hello",component:u.a},{path:"/user/:id",name:"User",component:c.a}]})},function(e,t,n){var r=n(0)(n(6),n(18),null,null);e.exports=r.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"},n(11)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=n.n(r),s=n(2),a=n.n(s);t.default={name:"hello",components:{MyHeader:o.a,MyFooter:a.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"MyFooter",data:function(){return{msg:"Welcome to Pierre-Alain's Protfolio",logo:"../../assets/logo.png"}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"MyHeader",data:function(){return{msg:"Pierre-Alain Leboucher",sub:"web-designer",logo:"../../assets/logo.png"}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=n.n(r),s=n(2),a=n.n(s);t.default={name:"user",data:function(){return{msg:"Welcome to Pierre-Alain's Protfolio"}},components:{MyHeader:o.a,MyFooter:a.a}}},function(e,t){},function(e,t){},function(e,t,n){var r=n(0)(n(7),n(16),null,null);e.exports=r.exports},function(e,t,n){n(12);var r=n(0)(n(10),n(15),null,null);e.exports=r.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"user"},[n("MyHeader"),e._v(" "),n("transition",{attrs:{name:"slide",mode:"out-in"}},[n("div",{key:e.$route.params.id,staticClass:"content main"},[n("div",[e._v("User "+e._s(e.$route.params.id))])])]),e._v(" "),n("MyFooter")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade"}},[n("div",{staticClass:"hello"},[n("MyHeader"),e._v(" "),n("div",{staticClass:"content main"},[n("p",[e._v("hello")])]),e._v(" "),n("MyFooter")],1)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c||t;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{attrs:{id:"footer"}},[n("div",{staticClass:"content"},[n("p",[e._v("© 2017 Pierre-Alain Leboucher")])])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{attrs:{id:"header"}},[n("div",{staticClass:"content"},[n("div",{staticClass:"title"},[n("h1",[n("router-link",{attrs:{to:"/"}},[e._v(e._s(e.msg))])],1),e._v(" "),n("p",[e._v(e._s(e.sub))])])])])},staticRenderFns:[]}},,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n.n(r),s=n(5),a=n.n(s),i=n(4);new o.a({el:"#app",router:i.a,template:"<App/>",components:{App:a.a}})}],[23]);