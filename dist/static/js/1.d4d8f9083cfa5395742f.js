webpackJsonp([1],{339:function(t,e,n){"use strict";function i(t){n(355)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(344),o=n(357),r=n(0),s=i,d=r(a.a,o.a,!1,s,"data-v-42c32fd4",null);e.default=d.exports},344:function(t,e,n){"use strict";e.a={metaInfo:{title:"Certified Welding",meta:[{name:"description",content:"Serious Welding for serious projects, from structural steel to concrete moulds, Certified Welding does it all."}]},data:function(){return{botImgShown:!1,showBotImg:!1}},mounted:function(){var t=this;setTimeout(function(){t.botImgShown=!0,t.showBotImg=!0},3e3)},methods:{lazyLoad:function(){return this.botImgShown?"/static/img/cert-weld/narek/c"+(this.webp?".webp":".jpg"):""},onScrollBotImg:function(){this.showBotImg&&!this.botImgShown&&(this.botImgShown=!0),this.showBotImg=(window.pageYOffset||document.documentElement.scrollTop||0)>(this.$el.getBoundingClientRect().top-window.innerHeight||100)}},computed:{cardFeatures:function(){return this.$t("Views.Home.cardFeatures")},testimonials:function(){return this.$t("Views.Home.testimonials")}}}},355:function(t,e,n){var i=n(356);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(336)("79d660a8",i,!0,{})},356:function(t,e,n){e=t.exports=n(335)(!0),e.push([t.i,".mi--0[data-v-42c32fd4]{position:relative;margin-top:2em}.mi--1[data-v-42c32fd4]{position:relative;margin-top:9em}.mi--2[data-v-42c32fd4]{position:relative;margin-top:6em}.mi--d[data-v-42c32fd4],.mi--u[data-v-42c32fd4]{position:relative;padding:0!important}.mi--u[data-v-42c32fd4]{top:-1em}.mi--d[data-v-42c32fd4]{top:1em;z-index:1}.bg-gradient[data-v-42c32fd4]{background:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.85)),to(hsla(0,0%,100%,.5)));background:linear-gradient(180deg,rgba(0,0,0,.85),hsla(0,0%,100%,.5))}","",{version:3,sources:["C:/Users/Ron/WebstormProjects/CertifiedWelding/src/views/Home.vue"],names:[],mappings:"AACA,wBACE,kBAAmB,AACnB,cAAgB,CACjB,AACD,wBACE,kBAAmB,AACnB,cAAgB,CACjB,AACD,wBACE,kBAAmB,AACnB,cAAgB,CACjB,AACD,gDAEE,kBAAmB,AACnB,mBAAsB,CACvB,AACD,wBACE,QAAU,CACX,AACD,wBACE,QAAS,AACT,SAAW,CACZ,AACD,8BACE,sGAA+G,AAC/G,qEAAgF,CACjF",file:"Home.vue",sourcesContent:["\n.mi--0[data-v-42c32fd4] {\n  position: relative;\n  margin-top: 2em;\n}\n.mi--1[data-v-42c32fd4] {\n  position: relative;\n  margin-top: 9em;\n}\n.mi--2[data-v-42c32fd4] {\n  position: relative;\n  margin-top: 6em;\n}\n.mi--u[data-v-42c32fd4],\n.mi--d[data-v-42c32fd4] {\n  position: relative;\n  padding: 0 !important;\n}\n.mi--u[data-v-42c32fd4] {\n  top: -1em;\n}\n.mi--d[data-v-42c32fd4] {\n  top: 1em;\n  z-index: 1;\n}\n.bg-gradient[data-v-42c32fd4] {\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0.85)), to(rgba(255,255,255,0.5)));\n  background: linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(255,255,255,0.5));\n}"],sourceRoot:""}])},357:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",{staticClass:"max-view-width",attrs:{"fill-height":""}},[n("v-layout",{attrs:{"justify-center":"","align-center":"",wrap:""}},[n("v-flex",{attrs:{dark:"",xs12:"","mb-5":""}},[n("alpha-card-feature",{attrs:{features:t.cardFeatures}})],1)],1)],1),t._v(" "),n("alpha-hero",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScrollBotImg,expression:"onScrollBotImg"}],staticClass:"mt-5 bg-gradient elevation-6",attrs:{src:t.lazyLoad(),height:t.$vuetify.breakpoint.mdAndUp?500:"auto",jumbotron:!1,dark:""}},[n("v-container",{attrs:{"fill-height":"","grid-list-xl":""}},[n("v-layout",{attrs:{"align-center":"","justify-space-around":"",wrap:""}},[n("v-flex",{attrs:{xs10:"",md6:""}},[n("alpha-testimonial",{attrs:{author:t.testimonials[0].author,title:t.testimonials[0].title,quote:t.testimonials[0].quote}})],1)],1)],1)],1)],1)},a=[],o={render:i,staticRenderFns:a};e.a=o}});
//# sourceMappingURL=1.d4d8f9083cfa5395742f.js.map