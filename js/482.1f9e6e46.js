"use strict";(self["webpackChunkquasar_rick_morty"]=self["webpackChunkquasar_rick_morty"]||[]).push([[482],{8482:(e,a,n)=>{n.r(a),n.d(a,{default:()=>P});var r=n(3673),t=n(2323);const s={class:"q-pa-md"},o={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},l=(0,r._)("br",null,null,-1);function c(e,a,n,c,i,d){const u=(0,r.up)("q-icon"),m=(0,r.up)("q-input"),p=(0,r.up)("q-img"),g=(0,r.up)("q-card-section"),w=(0,r.up)("q-separator"),f=(0,r.up)("q-card"),h=(0,r.up)("q-table");return(0,r.wg)(),(0,r.iD)("div",s,[e.data?((0,r.wg)(),(0,r.j4)(h,{key:0,grid:"","card-container-class":e.cardContainerClass,title:"",rows:e.data,columns:e.columns,"row-key":"name",filter:e.filter,"hide-header":"",pagination:e.pagination,"onUpdate:pagination":a[1]||(a[1]=a=>e.pagination=a),"rows-per-page-options":e.rowsPerPageOptions},{"top-right":(0,r.w5)((()=>[(0,r.Wm)(m,{borderless:"",dense:"",debounce:"300",modelValue:e.filter,"onUpdate:modelValue":a[0]||(a[0]=a=>e.filter=a),placeholder:"Pesquisar"},{append:(0,r.w5)((()=>[(0,r.Wm)(u,{name:"search"})])),_:1},8,["modelValue"])])),item:(0,r.w5)((a=>[(0,r._)("div",o,[(0,r.Wm)(f,{style:{cursor:"pointer"},clickable:"",onClick:n=>e.exibirCharacter(a.row.id)},{default:(0,r.w5)((()=>[(0,r.Wm)(g,{class:"text-center"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,{src:a.row.image},null,8,["src"]),l,(0,r._)("strong",null,(0,t.zw)(a.row.name),1)])),_:2},1024),(0,r.Wm)(w),(0,r.Wm)(g,{class:"flex flex-center"},{default:(0,r.w5)((()=>[(0,r._)("div",null,(0,t.zw)(a.row.gender),1)])),_:2},1024)])),_:2},1032,["onClick"])])])),_:1},8,["card-container-class","rows","columns","filter","pagination","rows-per-page-options"])):(0,r.kq)("",!0)])}var i=n(52),d=n.n(i),u=n(8825),m=n(1959);const p=(0,r.aZ)({name:"PageIndex",setup(){const e=(0,u.Z)();function a(){return e.screen.lt.sm?3:e.screen.lt.md?6:9}const n=(0,m.iH)(null);function t(){const e="https://rickandmortyapi.com/graphql",a={query:"query {\n      characters(\n    page: 0,\n    ){\n\n        results {\n          id, name, gender, type, image, location {\n    \t\t\t\tid, name, dimension\n    \t\t\t}\n        }\n      }\n\n    }"};d().post(e,a).then((e=>{n.value=e.data.data.characters.results,console.log(e.data.data.characters.results)}))}function s(e){this.$router.push({name:"exibirCharacter",params:{id:e}}),console.log(e)}const o=(0,m.iH)(""),l=(0,m.iH)({page:1,rowsPerPage:a()});return(0,r.YP)((()=>e.screen.name),(()=>{l.value.rowsPerPage=a()})),(0,r.bv)((async()=>{t()})),{exibirCharacter:s,data:n,filter:o,pagination:l,columns:[{name:"name",label:"Name",field:"name"},{name:"gender",label:"Gênero",field:"gender"}],cardContainerClass:(0,r.Fl)((()=>e.screen.gt.xs?"grid-masonry grid-masonry--"+(e.screen.gt.sm?"3":"2"):null)),rowsPerPageOptions:(0,r.Fl)((()=>e.screen.gt.xs?e.screen.gt.sm?[3,6,9]:[3,6]:[3]))}},methods:{},created(){}});var g=n(4260),w=n(9770),f=n(4842),h=n(4554),q=n(151),b=n(5589),k=n(4027),C=n(5869),_=n(7518),y=n.n(_);const x=(0,g.Z)(p,[["render",c]]),P=x;y()(p,"components",{QTable:w.Z,QInput:f.Z,QIcon:h.Z,QCard:q.Z,QCardSection:b.Z,QImg:k.Z,QSeparator:C.Z})}}]);