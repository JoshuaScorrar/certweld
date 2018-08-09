webpackJsonp([5],Array(26).concat([function(t,e,r){"use strict";e.a={name:"alpha-card-feature",props:{cardHeight:{type:String,default:"200px"},features:{type:Array,default:function(){return[]}}}}},function(t,e,r){"use strict";e.a={name:"alpha-footer",props:{categories:{type:Array,default:function(){return[]}},company:String,facebook:String,github:String,social:{type:Array,default:function(){return[]}},twitter:String},computed:{computedSocial:function(){if(this.social.length)return this.social;var t=[];return this.github&&t.push({text:this.$t("Layout.Footer.github"),icon:"mdi-github-circle",href:this.github}),this.twitter&&t.push({text:this.$t("Layout.Footer.twitter"),icon:"mdi-twitter-circle",href:this.twitter}),this.facebook&&t.push({text:this.$t("Layout.Footer.facebook"),icon:"mdi-facebook-box",href:this.facebook}),t}}}},function(t,e,r){"use strict";e.a={name:"alpha-gallery",data:function(){return{category:null}},props:{categories:{type:Array,default:function(){return[]}},projects:{type:Array,default:function(){return[]}}},computed:{computedProjects:function(){var t=this;return this.category?this.projects.filter(function(e){return e.categories.includes(t.category)}):this.projects}},methods:{genAction:function(t){return t||null},select:function(t){this.category=t.filter}}}},function(t,e,r){"use strict";e.a={name:"alpha-hero",props:{src:String,dark:Boolean,height:{type:[Number,String],default:"100vh"},light:Boolean},computed:{classes:function(){return{"v-parallax--dark":this.dark,"v-parallax--light":this.light}}}}},function(t,e,r){"use strict";e.a={name:"alpha-list-feature",props:{features:{type:Array,default:function(){return[]}}}}},function(t,e,r){"use strict";e.a={props:{author:String,dark:Boolean,quote:String,title:String}}},function(t,e,r){"use strict";e.a={data:function(){return{isBooted:!1}},computed:{isHome:function(){return"/"===this.$route.path},namespace:function(){return this.$route.name},title:function(){return this.$t("Views."+this.namespace+".jumbotronTitle")},images:function(){return this.$t("Views."+this.namespace+".jumbotronImages")},subTitle:function(){return this.$t("Views."+this.namespace+".jumbotronSubTitle")},heroImage:function(){return"/static/img/"+this.namespace.toLowerCase()+"-hero.png"}},mounted:function(){var t=this;setTimeout(function(){t.isBooted=!0},200)}}},function(t,e,r){"use strict";var i=r(34),n=r.n(i),a=r(21);e.a={computed:{inputValue:{get:function(){return this.$store.state.app.drawer},set:function(t){this.setDrawer(t)}},items:function(){return this.$t("Layout.View.items")}},methods:n()({},Object(a.b)("app",["setDrawer","toggleDrawer"]))}},,,,,,,,,,,,,function(t,e,r){"use strict";e.a={computed:{social:function(){return this.$t("Layout.Footer.social")},categories:function(){return this.$t("Layout.Footer.categories")}}}},function(t,e,r){"use strict";e.a={data:function(){return{isBooted:!1}},computed:{isHome:function(){return"/"===this.$route.path},namespace:function(){return this.$route.name},title:function(){return this.$t("Views."+this.namespace+".jumbotronTitle")},subTitle:function(){return this.$t("Views."+this.namespace+".jumbotronSubTitle")},heroImage:function(){return"/static/img/welding/"+this.namespace.toLowerCase()+"-bw.jpg"}},mounted:function(){var t=this;setTimeout(function(){t.isBooted=!0},200)}}},function(t,e,r){"use strict";var i=r(34),n=r.n(i),a=r(21);e.a={data:function(){return{isScrolling:!1}},computed:{items:function(){return this.$t("Layout.View.items")}},methods:n()({},Object(a.b)("app",["toggleDrawer"]),{onScroll:function(){this.isScrolling=(window.pageYOffset||document.documentElement.scrollTop||0)>(this.$el.nextElementSibling.nextElementSibling.clientHeight||100)}})}},function(t,e,r){"use strict";e.a={metaInfo:function(){return{titleTemplate:"%s — Alpha Theme"}}}},,,,,,,,,,,,function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(206),n=r.n(i),a=r(210),o={};a.keys().forEach(function(t){if("./index.js"!==t){var e=t.replace(/(\.\/|\.js)/g,""),r=e.split("/"),i=n()(r,2),s=i[0],u=i[1];o[s]||(o[s]={namespaced:!0}),o[s][u]=a(t).default}}),e.default=o},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(2),n=(r(65),r(140),r(168)),a=(r.n(n),r(169)),o=r(171),s=r(197),u=r(203);Object(n.sync)(u.a,s.a),i.default.config.productionTip=!1,new i.default({i18n:o.a,router:s.a,store:u.a,render:function(t){return t(a.a)}}).$mount("#app")},,,function(t,e,r){"use strict";var i=r(2),n=r(24),a=r.n(n),o=r(82),s=r.n(o),u=r(93);u.keys().forEach(function(t){var e=u(t),r=a()(s()(t.replace(/^\.\//,"").replace(/\.\w+$/,"")));i.default.component(r,e.default||e)})},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,r){function i(t){return r(n(t))}function n(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var a={"./alpha/CardFeature.vue":94,"./alpha/Footer.vue":96,"./alpha/Gallery.vue":100,"./alpha/Hero.vue":103,"./alpha/ListFeature.vue":106,"./alpha/Testimonial.vue":108,"./core/Carousel.vue":111,"./core/Drawer.vue":114,"./core/Footer.vue":130,"./core/Jumbotron.vue":132,"./core/Toolbar.vue":135,"./core/View.vue":138};i.keys=function(){return Object.keys(a)},i.resolve=n,t.exports=i,i.id=93},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(26),n=r(95),a=r(0),o=a(i.a,n.a,!1,null,null,null);e.default=o.exports},function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"grid-list-xl":"","pa-0":""}},[r("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},t._l(t.features,function(e,i){return r("v-flex",{key:i,attrs:{xs12:"",sm6:"",md4:"","d-flex":""}},[r("v-card",{attrs:{flat:"",tile:""}},[r("v-card-media",{attrs:{src:"/static/img/"+e.img+".png",height:t.cardHeight}}),t._v(" "),r("v-card-title",{staticClass:"title",domProps:{textContent:t._s(e.title)}}),t._v(" "),r("v-card-text",{domProps:{textContent:t._s(e.text)}})],1)],1)}))],1)},n=[],a={render:i,staticRenderFns:n};e.a=a},function(t,e,r){"use strict";function i(t){r(97)}Object.defineProperty(e,"__esModule",{value:!0});var n=r(27),a=r(99),o=r(0),s=i,u=o(n.a,a.a,!1,s,null,null);e.default=u.exports},function(t,e){},,function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-footer",[r("v-container",{staticClass:"alpha-footer",attrs:{fluid:""}},[r("v-layout",{staticClass:"blue-grey darken-2 fill-height",attrs:{row:"",wrap:""}},[r("v-flex",{staticClass:"pa-5 blue-grey darken-3",attrs:{xs12:"",sm3:""}},[r("h5",{staticClass:"title pb-3",domProps:{textContent:t._s(t.company)}}),t._v(" "),r("ul",t._l(t.computedSocial,function(e,i){return r("li",{key:i},[r("a",{staticClass:"layout align-center",attrs:{href:e.href}},[r("v-icon",{staticClass:"mr-3",attrs:{dark:""},domProps:{textContent:t._s(e.icon)}}),t._v(" "),r("span",{staticClass:"subheading",domProps:{textContent:t._s(e.text)}})],1)])}))]),t._v(" "),t._l(t.categories,function(e,i){return r("v-flex",{key:i,staticClass:"pa-5",attrs:{xs12:"",sm3:""}},[r("h5",{staticClass:"title pb-3",domProps:{textContent:t._s(e.text)}}),t._v(" "),r("ul",t._l(e.items,function(e,i){return r("li",{key:i},[r("a",{attrs:{href:e.href},domProps:{textContent:t._s(e.text)}})])}))])}),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-card",{staticClass:"blue-grey darken-4 text-xs-center",attrs:{tile:"",flat:"",dark:""}},[r("v-card-text",[t._t("default")],2)],1)],1)],2)],1)],1)},n=[],a={render:i,staticRenderFns:n};e.a=a},function(t,e,r){"use strict";function i(t){r(101)}Object.defineProperty(e,"__esModule",{value:!0});var n=r(28),a=r(102),o=r(0),s=i,u=o(n.a,a.a,!1,s,"data-v-1b63f6d5",null);e.default=u.exports},function(t,e){},function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"alpha-gallery"},[r("v-tabs",{staticClass:"mb-5"},t._l(t.categories,function(e,i){return r("v-tab",{key:i,on:{click:function(r){t.select(e)}}},[r("span",{domProps:{textContent:t._s(e.text)}})])})),t._v(" "),r("v-container",{attrs:{"grid-list-xl":"","pa-0":""}},[r("transition-group",{staticClass:"wrap child-flex",staticStyle:{"min-height":"450px"},attrs:{tag:"v-layout",name:"fade-transition"}},t._l(t.computedProjects,function(e){return r("v-flex",{key:e.img,attrs:{xs4:"","gallery-card":""}},[t.$scopedSlots.default?t._t("default",null,{project:e}):r("v-card",{staticClass:"white--text",attrs:{height:"200px",hover:"",img:"/static/img/"+e.img},on:{click:function(r){t.genAction(e.action)}}})],2)}))],1)],1)},n=[],a={render:i,staticRenderFns:n};e.a=a},function(t,e,r){"use strict";function i(t){r(104)}Object.defineProperty(e,"__esModule",{value:!0});var n=r(29),a=r(105),o=r(0),s=i,u=o(n.a,a.a,!1,s,null,null);e.default=u.exports},function(t,e){},function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-parallax",{class:t.classes,attrs:{height:t.height,src:t.src}},[t._t("default")],2)},n=[],a={render:i,staticRenderFns:n};e.a=a},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(30),n=r(107),a=r(0),o=a(i.a,n.a,!1,null,null,null);e.default=o.exports},function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"grid-list-xl":""}},[r("v-layout",{attrs:{wrap:""}},t._l(t.features,function(e,i){return r("v-flex",{key:i,attrs:{xs12:"",sm6:"",md4:""}},[r("v-card",{staticClass:"transparent",attrs:{flat:""}},[r("v-layout",[r("v-flex",{attrs:{xs2:""}},[r("v-icon",{staticClass:"primary--text"},[t._v("\n              "+t._s(e.icon)+"\n            ")])],1),t._v(" "),r("v-flex",[r("div",{staticClass:"subheading mb-3"},[r("strong",{domProps:{textContent:t._s(e.title)}})]),t._v(" "),r("p",{domProps:{innerHTML:t._s(e.text)}})])],1)],1)],1)}))],1)},n=[],a={render:i,staticRenderFns:n};e.a=a},function(t,e,r){"use strict";function i(t){r(109)}Object.defineProperty(e,"__esModule",{value:!0});var n=r(31),a=r(110),o=r(0),s=i,u=o(n.a,a.a,!1,s,null,null);e.default=u.exports},function(t,e){},function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"alpha-testimonial",class:[t.dark?"alpha-testimonial--dark":""]},[r("div",{staticClass:"alpha-testimonial__content"},[r("v-icon",{staticClass:"primary--text",attrs:{"x-large":"",dark:t.dark}},[t._v("format_quote")]),t._v(" "),r("p",{domProps:{textContent:t._s(t.quote)}})],1),t._v(" "),r("footer",[r("div",{staticClass:"alpha-testimonial__footer-bar",class:[t.dark?"white":"primary"]}),t._v(" "),r("div",{staticClass:"headline",domProps:{textContent:t._s(t.author)}}),t._v(" "),r("div",{staticClass:"title",domProps:{textContent:t._s(t.title)}})])])},n=[],a={render:i,staticRenderFns:n};e.a=a},function(t,e,r){"use strict";function i(t){r(112)}Object.defineProperty(e,"__esModule",{value:!0});var n=r(32),a=r(113),o=r(0),s=i,u=o(n.a,a.a,!1,s,"data-v-1700e4fb",null);e.default=u.exports},function(t,e){},function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-carousel",t._l(t.images,function(t,e){return r("v-carousel-item",{key:e,attrs:{src:t,gradient:"to bottom, rgba(70, 90, 160, .85), rgba(30, 40, 30, .85)"}})}))},n=[],a={render:i,staticRenderFns:n};e.a=a},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(33),n=r(129),a=r(0),o=a(i.a,n.a,!1,null,null,null);e.default=o.exports},,,,,,,,,,,,,,,function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-navigation-drawer",{attrs:{fixed:"",temporary:"",right:""},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}},[r("v-list",[r("v-list-tile",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:t.toggleDrawer}},[r("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),t._l(t.items,function(e,i){return r("v-list-tile",{key:i,attrs:{to:e.to}},[r("v-list-tile-title",{domProps:{textContent:t._s(e.text)}})],1)})],2)],1)},n=[],a={render:i,staticRenderFns:n};e.a=a},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(46),n=r(131),a=r(0),o=a(i.a,n.a,!1,null,null,null);e.default=o.exports},function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("alpha-footer",{attrs:{company:t.$t("Layout.Footer.company"),social:t.social,categories:t.categories}},[r("span",[t._v("\n    © 2017\n    "+t._s(t.$t("Layout.Footer.company"))+"\n    —\n    "+t._s(t.$t("Layout.Footer.rights"))+"\n  ")])])},n=[],a={render:i,staticRenderFns:n};e.a=a},function(t,e,r){"use strict";function i(t){r(133)}Object.defineProperty(e,"__esModule",{value:!0});var n=r(47),a=r(134),o=r(0),s=i,u=o(n.a,a.a,!1,s,null,null);e.default=u.exports},function(t,e){},function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-fade-transition",{attrs:{origin:"top center 0.1",mode:"out-in",height:"70vh"}},[t.namespace?r("v-parallax",{key:t.$route.path,staticClass:"fill-width",attrs:{src:t.heroImage}},[r("v-layout",{staticClass:"bg-gradient z-",attrs:{"fill-height":""}}),t._v(" "),t.isBooted?r("v-container",{key:t.$route.path,staticClass:"z+",attrs:{"fill-height":"","fill-width":""}},[r("v-layout",{attrs:{"align-center":""}},[r("v-flex",{key:t.$route.path,attrs:{"text-xs-center":""}},[r("h1",{staticClass:"display-2 white--text",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),t.subTitle?r("div",{staticClass:"subheading white--text",domProps:{innerHTML:t._s(t.subTitle)}}):t._e()])],1)],1):t._e()],1):t._e()],1)},n=[],a={render:i,staticRenderFns:n};e.a=a},function(t,e,r){"use strict";function i(t){r(136)}Object.defineProperty(e,"__esModule",{value:!0});var n=r(48),a=r(137),o=r(0),s=i,u=o(n.a,a.a,!1,s,null,null);e.default=u.exports},function(t,e){},function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-toolbar",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],attrs:{app:"",dark:"",flat:!t.isScrolling,color:t.isScrolling?"secondary":"transparent"}},[r("img",{staticClass:"toolbar-logo",attrs:{src:"/static/img/cert-weld-logo-white-stroke-600x193.png"}}),t._v(" "),r("v-spacer"),t._v(" "),t.$vuetify.breakpoint.mdAndUp?r("v-toolbar-items",t._l(t.items,function(e,i){return r("v-btn",{key:i,attrs:{color:t.isScrolling?"black--text":"white--text","active-class":t.isScrolling?void 0:"primary--text",to:e.to,flat:""}},[r("span",{domProps:{textContent:t._s(e.text)}})])})):r("v-btn",{attrs:{icon:""},on:{click:t.toggleDrawer}},[r("v-icon",[t._v("mdi-menu")])],1)],1)},n=[],a={render:i,staticRenderFns:n};e.a=a},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(49),n=r(139),a=r(0),o=a(i.a,n.a,!1,null,null,null);e.default=o.exports},function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-content",[r("v-fade-transition",{attrs:{mode:"out-in"}},[r("router-view")],1)],1)},n=[],a={render:i,staticRenderFns:n};e.a=a},function(t,e,r){"use strict";r(141),r(161),r(166)},function(t,e,r){"use strict";var i=r(2),n=r(142),a=r.n(n);i.default.prototype.$http=a.a},,,,,,,,,,,,,,,,,,,,function(t,e,r){"use strict";var i=r(2),n=r(162),a=r.n(n),o=r(163),s=r(164),u=(r.n(s),r(165));r.n(u);i.default.use(a.a,{theme:o.a})},,function(t,e,r){"use strict";e.a={primary:"#ff8040",secondary:"#f0f0f0",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}},function(t,e){},function(t,e){},function(t,e,r){"use strict";var i=r(167);r.n(i)},function(t,e){},,function(t,e,r){"use strict";var i=r(170),n=r(0),a=n(null,i.a,!1,null,null,null);e.a=a.exports},function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("core-toolbar"),t._v(" "),r("core-drawer"),t._v(" "),r("core-jumbotron"),t._v(" "),r("core-view"),t._v(" "),r("core-footer")],1)},n=[],a={render:i,staticRenderFns:n};e.a=a},function(t,e,r){"use strict";var i=r(2),n=r(172),a=r(173);i.default.use(n.a);var o=new n.a({locale:"en",fallbackLocale:"en",messages:a.a});e.a=o},,function(t,e,r){"use strict";var i=r(55),n=r.n(i),a=r(187),o={},s=!0,u=!1,c=void 0;try{for(var l,f=n()(a.keys());!(s=(l=f.next()).done);s=!0){var d=l.value;(function(t){if("./index.js"===t)return"continue";var e=t.replace(/(\.\/|\.json$)/g,"").split("/");e.reduce(function(r,i,n){return r[i]?r[i]:(r[i]=n+1===e.length?a(t):{},r[i])},o)})(d)}}catch(t){u=!0,c=t}finally{try{!s&&f.return&&f.return()}finally{if(u)throw c}}e.a=o},,,,,,,,,,,,,,function(t,e,r){function i(t){return r(n(t))}function n(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var a={"./en/Common.json":188,"./en/Home.json":189,"./en/Layout/Footer.json":190,"./en/Layout/Toolbar.json":191,"./en/Layout/View.json":192,"./en/Views/Contact.json":193,"./en/Views/Home.json":194,"./en/Views/Projects.json":195,"./en/Views/Services.json":196};i.keys=function(){return Object.keys(a)},i.resolve=n,t.exports=i,i.id=187},function(t,e){t.exports={needHelp:"Need Help?"}},function(t,e){t.exports={title:"Certified Welding",footer:"2018 Certified Welding LLC",drawerItems:["Inspire"],needHelp:"Need help?"}},function(t,e){t.exports={company:"Certified Welding",services:"Services",projects:"Projects",ourTeam:"Our Team",communityCommitment:"Commitment to the Community",rights:"All Rights reserved.",social:[{text:"Services",href:"/services"},{text:"Projects",href:"/projects"},{text:"Our Team",href:"/team"},{text:"Commitment to the Community",href:"/community"}],categories:[{items:[{text:"Success Stories",href:"javascript:;"},{text:"Case Studies",href:"javascript:;"},{text:"Testimonials",href:"javascript:;"},{text:"Press Room",href:"javascript:;"}]},{items:[{text:"Partners",href:"javascript:;"},{text:"JBM Construction",href:"javascript:;"},{text:"Macarthy Equipment",href:"javascript:;"},{text:"Elite Construction Management",href:"javascript:;"}]}]}},function(t,e){t.exports={title:"Title"}},function(t,e){t.exports={items:[{to:"/",text:"Home"},{to:"/services",text:"Services"},{to:"/projects",text:"Projects"},{to:"/contact",text:"Contact"}]}},function(t,e){t.exports={jumbotronTitle:"Contact Alpha Construction",jumbotronSubTitle:"Get in touch with our Support Staff",carouselImages:["static/img/welding/1.jpg","static/img/welding/2.jpg","static/img/welding/3.jpg","static/img/welding/4.jpg"],heading1:'We"d Love to Hear From You!',headingText1:"To request more informaiton, please fill out and submit the form below",phone:"(561) 284 - 5555",address:"555 Main Street",cityState:"Boca Raton, FL",zip:"33555",submit:"Submit"}},function(t,e){t.exports={jumbotronTitle:"Building a Culture of Excellence",jumbotronSubTitle:'Relentlessly advancing our clients" visions, beyond their expectations',carouselImages:["static/img/welding/1.jpg","static/img/welding/2.jpg","static/img/welding/3.jpg","static/img/welding/4.jpg"],cardFeatures:[{title:"Award-winning architecture",text:"Every achievement begins with a vision. It is built on a foundation of creative concepts and dreams to become something bigger and better. At AlphaConstruction we build with those who follow a vision, not a path.",img:"feature1"},{title:"Relentless pursuit of your vision",text:"Our commitment to excellence and continous improvement, to building lasting relationships with our clients, and to the team members who create your vision, are the guiding principles that assure successful outcomes on every project we build.",img:"feature2"},{title:"Your vision - Our mission",text:"To build an everlasting environment of trust with our clients and team members that will foster customer loyalty by delivering superior service and quality projects.",img:"feature3"}],testimonialsTitle:"Testimonials",testimonials:[{author:"Nancy Swanson",title:"President, Springfield Country Club",quote:"Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."},{author:"Jason Schraiber",title:"Mayor, Boca Raton",quote:"Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."},{author:"Joe Malonagi",title:"General Manager, Springfield Tower",quote:"The complexities and challenges AlphaConstruction successfully overcame on our behalf includes substantial permit obstacles, coordination and selection support of all design and finish materials, and the diffculty of integrating existing and new structures."}]}},function(t,e){t.exports={jumbotronTitle:"Building a Culture of Excellence",jumbotronSubTitle:'Relentlessly advancing our clients" visions, beyond their expectations',carouselImages:["static/img/welding/1.jpg","static/img/welding/2.jpg","static/img/welding/3.jpg","static/img/welding/4.jpg"],categories:[{text:"All",filter:null},{text:"Skyscrapers",filter:1},{text:"Government",filter:2},{text:"Customized",filter:3}],projects:[{name:"Lorem Ipsum",img:"project1.jpg",categories:[1,3]},{name:"Lorem Ipsum",img:"project2.jpg",categories:[2,3]},{name:"Lorem Ipsum",img:"project3.jpg",categories:[4,3]},{name:"Lorem Ipsum",img:"project4.jpg",categories:[1,2]},{name:"Lorem Ipsum",img:"project5.jpg",categories:[2,4]},{name:"Lorem Ipsum",img:"project6.jpg",categories:[1,4]}]}},function(t,e){t.exports={jumbotronTitle:"ASCC - Alpha Software Compute Cloud",jumbotronSubTitle:"Launch applications when needed without upfront commitments.",carouselImages:["static/img/welding/1.jpg","static/img/welding/2.jpg","static/img/welding/3.jpg","static/img/welding/4.jpg"],heading1:"Realtime Global Deployments",headingText1:"Te dolor consul mei, etiam molestie indoctum usu ad, qui inermis eleifend an. Pro iriure alienum incorrupte ex, cu diceret moderatius mei. Te corrumpit posidonium sit, in cum nonumy utamur. Usu impedit patrioque vituperatoribus ei, cu voluptua nominati philosophia mel. Sea at legendos percipitur, nulla dicant convenire ne duo. Veniam epicuri vis cu, ea pri alii ceteros fierent.",heading2:"Focus On What Drives Your Business",headingText2a:"Lorem ipsum dolor sit amet, ea mutat tation constituam per, mei error ocurreret definiebas ne. Te harum constituto inciderint his. Vis no delenit mediocritatem. His et debet possim perpetua, assum argumentum ne quo, constituto eloquentiam sea ne. Ne has ludus graecis fabellas.",headingText2b:"Ei est iriure partiendo, ius falli tritani accumsan ad, mea altera eripuit fierent ut. Te quem legere fastidii ius. Ei vis quod qualisque, ignota nemore cotidieque mea eu. Scripta labitur ei vel, mei case quidam corpora no, est dico sale utroque ne. Eu erroribus delicatissimi eum, ut quem veri tincidunt vim.",headingText2c:"Velit eruditi an est, cu eius graeci sed. Vel ei dolorem sapientem temporibus. No his omnes meliore maiestatis, mei iisque molestiae gubergren ex. Usu placerat liberavisse et, eam dicta blandit evertitur an. Ea vim fabellas indoctum maiestatis.",testimonial:{author:"Jay Oakerson",title:"CEO Abocado",quote:"With Alpha Software powering all of our customer-facing services and ASCC, helping us monitor and understand application performance, Abocado is in great shape to create and release new products."}}},function(t,e,r){"use strict";function i(t,e){return{name:e,path:t,component:function(t){return r(202)("./"+e+".vue").then(t)}}}var n=r(2),a=r(198),o=r.n(a),s=r(199),u=r(200),c=r.n(u),l=r(201);n.default.use(s.a);var f=new s.a({mode:"history",routes:l.a.map(function(t){return i(t.path,t.view)}).concat([{path:"*",redirect:"/"}]),scrollBehavior:function(t,e,r){return r||(t.hash?{selector:t.hash}:{x:0,y:0})}});n.default.use(c.a),Object({NODE_ENV:"production"}).GOOGLE_ANALYTICS&&n.default.use(o.a,{id:Object({NODE_ENV:"production"}).GOOGLE_ANALYTICS,router:f,autoTracking:{page:!0}}),e.a=f},,,,function(t,e,r){"use strict";e.a=[{path:"",view:"Home"},{path:"/contact",view:"Contact"},{path:"/projects",view:"Projects"},{path:"/services",view:"Services"}]},function(t,e,r){function i(t){var e=n[t];return e?r.e(e[1]).then(function(){return r(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var n={"./Contact.vue":[216,3],"./Home.vue":[217,2],"./Projects.vue":[218,1],"./Services.vue":[219,0]};i.keys=function(){return Object.keys(n)},i.id=202,t.exports=i},function(t,e,r){"use strict";var i=r(2),n=r(21),a=r(204),o=r(205),s=r(61),u=r(214),c=r(215);i.default.use(n.a);var l=new n.a.Store({actions:a.a,getters:o.a,modules:s.default,mutations:u.a,state:c.a});e.a=l},function(t,e,r){"use strict";e.a={}},function(t,e,r){"use strict";e.a={}},,,,,function(t,e,r){function i(t){return r(n(t))}function n(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var a={"./app/mutations.js":211,"./app/state.js":213,"./index.js":61};i.keys=function(){return Object.keys(a)},i.resolve=n,t.exports=i,i.id=210},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(212);e.default={setDrawer:Object(i.a)("drawer"),toggleDrawer:Object(i.b)("drawer")}},function(t,e,r){"use strict";r.d(e,"a",function(){return i}),r.d(e,"b",function(){return n});var i=function(t){return function(e,r){return e[t]=r}},n=function(t){return function(e){return e[t]=!e[t]}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={drawer:null}},function(t,e,r){"use strict";e.a={}},function(t,e,r){"use strict";e.a={}}]),[62]);
//# sourceMappingURL=app.e0679f078e9c86390910.js.map