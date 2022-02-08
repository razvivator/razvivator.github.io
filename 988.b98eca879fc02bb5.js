"use strict";(self.webpackChunkrazvivator=self.webpackChunkrazvivator||[]).push([[988],{6330:(I,u,e)=>{e.d(u,{a:()=>d});var t=e(9771);const d=[{id:"themes",color:t.r.BLUE},{id:"memory",color:t.r.GREEN},{id:"attention",color:t.r.ORANGE},{id:"intellect",color:t.r.PINK}]},4642:(I,u,e)=>{e.r(u),e.d(u,{NoisedPicturesConfigModule:()=>Q});var t=e(9808),d=e(7072),o=e(4106),r=e(8450),a=e(395),l=e(4636),c=e(5562),s=e(3162),i=e(655),m=e(2281),T=e(9417),_=e(5605),M=e(5713),D=e(8397);class S{constructor(p,h=!1){this.id=p,this.found=h,this.img=D.J.getItemCustomImg(p)}}var x,B,A=e(6849),f=e(2188),P=e(8929),n=e(5254),v=e(2868),E=e(7545),C=e(2986),R=e(4850),y=e(864),N=e(5613),g=e(5e3),W=e(4853),z=e(3832);function G(O,p){if(1&O&&g._UZ(0,"img",6),2&O){const h=p.$implicit;g.ekj("semi-transparent",h.found),g.Q6J("src",h.img,g.LSH)}}class L{constructor(p){this._themeItemsService=p,this.gameLoader=null,this.items=null,this.contourItems=null,this.item$=new P.xQ,x.set(this,0),B.set(this,null)}ngOnInit(){this._buildGame()}ngOnDestroy(){var p;null===(p=(0,i.Q_)(this,B,"f"))||void 0===p||p.unsubscribe()}_buildGame(){const p=M.k.getAgesConfig();this.gameLoader=this._themeItemsService.getItems().pipe((0,v.b)(h=>this.items=_.$.getRandItems(h,2*p)),(0,E.w)(()=>(0,n.D)(this.items).pipe((0,C.q)(p),(0,R.U)(h=>new S(h.id)),(0,y.q)())),(0,v.b)(h=>{this.contourItems=h,this.items=_.$.shuffle(this.items),this._setSubscriptions()}),(0,E.w)(()=>m.r.preloadThemeItemsImgs([].concat(this.items,this.contourItems))))}_setSubscriptions(){(0,i.YH)(this,B,this.item$.pipe((0,E.w)(p=>(0,n.D)(this.contourItems).pipe((0,N.sE)(h=>h.id===p.id),(0,v.b)(h=>(0,i.mG)(this,void 0,void 0,function*(){var Z;if(h&&!h.found){h.found=!0;const U=this.items.find(K=>K.id===h.id);U.titleStyle={[f.L.OPACITY]:.5,[f.L.TEXT_DECORATION]:"line-through"},yield U.playTitle(),this.contourItems.every(K=>K.found)&&A.A.gameCompleted()}else(0,i.YH)(this,x,(Z=(0,i.Q_)(this,x,"f"),++Z),"f")<3?yield T.d.playErrorSound():A.A.gameFailed()}))))).subscribe(),"f")}}x=new WeakMap,B=new WeakMap,L.\u0275fac=function(p){return new(p||L)(g.Y36(m.r))},L.\u0275cmp=g.Xpm({type:L,selectors:[["noised-pictures"]],decls:6,vars:3,consts:[[3,"gameLoader"],[1,"container","h--100"],[1,"h--100"],[1,"p--relative","h--100"],["class","p--absolute w--100 h--100",3,"src","semi-transparent",4,"ngFor","ngForOf"],[3,"items","itemClick"],[1,"p--absolute","w--100","h--100",3,"src"]],template:function(p,h){1&p&&(g.TgZ(0,"game-spinner-wrapper",0),g.TgZ(1,"div",1),g.TgZ(2,"div",2),g.TgZ(3,"div",3),g.YNc(4,G,1,3,"img",4),g.qZA(),g.qZA(),g.TgZ(5,"theme-items-bar",5),g.NdJ("itemClick",function(U){return h.item$.next(U)}),g.qZA(),g.qZA(),g.qZA()),2&p&&(g.Q6J("gameLoader",h.gameLoader),g.xp6(4),g.Q6J("ngForOf",h.contourItems),g.xp6(1),g.Q6J("items",h.items))},directives:[W.Z,t.sg,z.M],styles:[".container[_ngcontent-%COMP%]{display:grid;grid-template-rows:1fr -webkit-min-content;grid-template-rows:1fr min-content}.semi-transparent[_ngcontent-%COMP%]{opacity:.15}"],changeDetection:0});var $=e(2747),F=e(933),J=e(1233);let Y=(()=>{class O{}return O.\u0275fac=function(h){return new(h||O)},O.\u0275mod=g.oAB({type:O}),O.\u0275inj=g.cJS({imports:[[t.ez,c.P.forChild(),F.q,$.U,J.D]]}),O})(),Q=(()=>{class O{}return O.\u0275fac=function(h){return new(h||O)},O.\u0275mod=g.oAB({type:O}),O.\u0275inj=g.cJS({imports:[[t.ez,a.GameStepsModule.forChild([r.N,l.Z,L]),o.f.forChild({agesConfig:new Map([[0,2],[1,3],[2,4]])}),c.P.forChild(),Y,d.Bz.forChild(s.M)]]}),O})()},4106:(I,u,e)=>{e.d(u,{f:()=>l});var t=e(9808),d=e(933),o=e(6007),r=e(1233),a=e(5e3);let l=(()=>{class c{static forChild(i){return{ngModule:c,providers:[{provide:o.n,useValue:i.agesConfig},{provide:o.O,useValue:i.stepsToReset}]}}}return c.\u0275fac=function(i){return new(i||c)},c.\u0275mod=a.oAB({type:c}),c.\u0275inj=a.cJS({imports:[[t.ez,r.D,d.q]]}),c})()},8450:(I,u,e)=>{e.d(u,{N:()=>A});var t=e(6849),d=e(9771);const o={0:d.r.PINK,1:d.r.ORANGE,2:d.r.GREEN},r={0:"3 - 4",1:"4 - 5",2:"5 - 6"};class a{constructor(P,n){this.id=P;const v=r[this.id];this.title=`${v} ${n[v]}`,this.color=o[this.id]}}var l=e(5713),c=e(6007),s=e(4850),i=e(5e3),m=e(2273),T=e(9808);let _=(()=>{class f{static _getStyleProp(n){return`style.${n}`}ngOnInit(){this._setDefaultColors()}onMouseEnter(){this.color=this.borderColor=d.r.WHITE,this.bgColor=this.age.color,this.boxShadow=`0 0 16px 3px ${d.r.LIGHT_GREY}`}onMouseLeave(){this._setDefaultColors()}_setDefaultColors(){this.color=this.borderColor=this.age.color,this.bgColor=d.r.WHITE,this.boxShadow="none"}}return f.\u0275fac=function(n){return new(n||f)},f.\u0275dir=i.lG2({type:f,selectors:[["","ageItemColorize",""]],hostVars:8,hostBindings:function(n,v){1&n&&i.NdJ("mouseenter",function(){return v.onMouseEnter()})("mouseleave",function(){return v.onMouseLeave()}),2&n&&i.Udp("color",v.color)("border-color",v.borderColor)("background-color",v.bgColor)("box-shadow",v.boxShadow)},inputs:{age:["ageItemColorize","age"]}}),f})();var M=e(829);function D(f,P){if(1&f){const n=i.EpF();i.TgZ(0,"div",4),i.NdJ("click",function(){const C=i.CHM(n).$implicit;return i.oxw(2).chooseAge(C)}),i._uU(1),i.qZA()}if(2&f){const n=P.$implicit;i.Q6J("ageItemColorize",n),i.xp6(1),i.hij(" ",n.title," ")}}function S(f,P){if(1&f&&(i.TgZ(0,"div",1),i.TgZ(1,"div",2),i._uU(2),i.ALo(3,"capitalizeFirstLetter"),i.qZA(),i.YNc(4,D,2,2,"div",3),i.qZA()),2&f){const n=P.ngIf;i.xp6(2),i.hij("",i.lcZ(3,2,n.title),"?"),i.xp6(2),i.Q6J("ngForOf",n.ages)}}let A=(()=>{class f{constructor(n,v,E){this._agesConfig=n,this._stepsToReset=v,this._translationsService=E,this.content$=this._translationsService.loadTranslation("ages").pipe((0,s.U)(C=>({title:C.title,ages:Array.from(this._agesConfig.keys()).map(R=>new a(R,C))})))}ngOnInit(){l.k.setAgesConfig(this._agesConfig),this._stepsToReset&&t.A.resetSteps(this._stepsToReset)}chooseAge(n){l.k.setAgeId(n.id),t.A.updateStepInfo({title:n.title,style:{color:n.color}}),t.A.goToNext()}}return f.\u0275fac=function(n){return new(n||f)(i.Y36(c.n),i.Y36(c.O),i.Y36(m.f))},f.\u0275cmp=i.Xpm({type:f,selectors:[["age-choice"]],decls:2,vars:3,consts:[["class","ages-choice",4,"ngIf"],[1,"ages-choice"],[1,"ages-choice__title"],["class","ages-choice__age",3,"ageItemColorize","click",4,"ngFor","ngForOf"],[1,"ages-choice__age",3,"ageItemColorize","click"]],template:function(n,v){1&n&&(i.YNc(0,S,5,4,"div",0),i.ALo(1,"async")),2&n&&i.Q6J("ngIf",i.lcZ(1,1,v.content$))},directives:[T.O5,T.sg,_],pipes:[T.Ov,M.G],styles:[".ages-choice__title[_ngcontent-%COMP%]{margin-bottom:2rem;text-align:center;font-size:3rem;color:#70b}.ages-choice__age[_ngcontent-%COMP%]{width:100%;max-width:500px;margin:2rem auto;padding:.5rem;text-align:center;font-size:2rem;font-weight:bolder;border:2px solid;border-radius:50%;cursor:pointer}"],changeDetection:0}),f})()},6007:(I,u,e)=>{e.d(u,{n:()=>d,O:()=>o});var t=e(5e3);const d=new t.OlP("AGES_CONFIG_TOKEN"),o=new t.OlP("STEPS_TO_RESET_TOKEN")},9254:(I,u,e)=>{e.d(u,{d:()=>c});var t=e(9808),d=e(2188),o=e(4729),r=e(8889),a=e(1834),l=e(5e3);let c=(()=>{class s extends r.l{constructor(m,T,_,M){super(_,M),this._elementRef=m,this._renderer=T,this.rowsAmount=1,this.columnsAmount=1,this.itemSize=300,this.coeff=1}ngOnInit(){super.ngOnInit(),this._renderer.setStyle(this._elementRef.nativeElement,d.L.DISPLAY,"grid"),this._renderer.setStyle(this._elementRef.nativeElement,d.L.GRID_GAP,`0.5${a.N.REM}`),this._renderer.setStyle(this._elementRef.nativeElement,d.L.JUSTIFY_CONTENT,"center")}setGameSizes(){const m=Math.min(this.itemSize,o.B.getGridContainerMinDimension()/Math.max(this.rowsAmount,this.columnsAmount)-12);this._renderer.setStyle(this._elementRef.nativeElement,d.L.GRID_TEMPLATE_COLUMNS,`repeat(${this.columnsAmount}, ${m}${a.N.PX})`),this._renderer.setStyle(this._elementRef.nativeElement,d.L.GRID_TEMPLATE_ROWS,`repeat(${this.rowsAmount}, ${m*this.coeff}${a.N.PX})`)}}return s.\u0275fac=function(m){return new(m||s)(l.Y36(l.SBq),l.Y36(l.Qsj),l.Y36(l.R0b),l.Y36(t.K0))},s.\u0275dir=l.lG2({type:s,selectors:[["","gridSizer",""]],inputs:{rowsAmount:"rowsAmount",columnsAmount:"columnsAmount",itemSize:"itemSize",coeff:"coeff"},features:[l.qOj]}),s})()},9513:(I,u,e)=>{e.d(u,{n:()=>c});var l,t=e(655),d=e(8744),o=e(2986),r=e(2868),a=e(5e3);class c{constructor(i,m){this._elementRef=i,this._renderer=m,l.set(this,null)}ngOnInit(){if("IMG"!==this._elementRef.nativeElement.tagName)throw new Error("Element should be an image");(0,t.YH)(this,l,d.O.getImage(this.src).pipe((0,o.q)(1),(0,r.b)(i=>this._renderer.setAttribute(this._elementRef.nativeElement,"src",i.src))).subscribe(),"f")}ngOnDestroy(){var i;null===(i=(0,t.Q_)(this,l,"f"))||void 0===i||i.unsubscribe()}}l=new WeakMap,c.\u0275fac=function(i){return new(i||c)(a.Y36(a.SBq),a.Y36(a.Qsj))},c.\u0275dir=a.lG2({type:c,selectors:[["","preloadImg",""]],inputs:{src:["preloadImg","src"]}})},3162:(I,u,e)=>{e.d(u,{M:()=>t});const t=[{path:"",loadChildren:()=>Promise.resolve().then(e.bind(e,395)).then(d=>d.GameStepsModule)}]},9117:(I,u,e)=>{e.d(u,{W:()=>d});var t=e(2273);class d{constructor(r){this.id=null,this.title="",this.color="",this.route="",this.id=r.id,this.title=t.f.getTranslation(r.id),this.color=r.color,this.route=`${this.id}`}}},5605:(I,u,e)=>{e.d(u,{$:()=>t});class t{static shuffle(o){if(o.length<1)return console.warn("Empty array!"),o;const r=[...o];for(;!t._isArrShuffled(o,r);)r.sort(()=>Math.random()-.5);return r}static _isArrShuffled(o,r){let a=!1;for(const[l,c]of o.entries())if(c!==r[l]){a=!0;break}return a}static getRandItems(o,r=o.length){if(r>o.length)throw new Error(`maxArrLength ${r} should be equal or less than items length ${o.length}`);const a=t.shuffle(o);return a.length=r,a}static getDoubledRandItems(o,r=o.length){const a=t.getRandItems(o,r);return t.shuffle([...a,...a])}static uniq(o){return Array.from(new Set(o))}static getSequence(o,r=0){const a=[];for(let l=r;l<o;l++)a.push(l);return a}static groupArrByLength(o,r){const a=new Map;let l=0,c=0,s=0;for(;s<o.length;)c=l*r,s=c+r,a.set(l,o.slice(c,s)),l++;return a}static getRndInteger(o,r){return Math.floor(Math.random()*(r-o))+o}static getRndArrElem(o){return o[t.getRndInteger(0,o.length)]}}},4636:(I,u,e)=>{e.d(u,{Z:()=>P});var t=e(9424),d=e(4375),o=e(9771),r=e(6849),a=e(8397),l=e(2868),c=e(2273),s=e(5e3),i=e(2205),m=e(5316),T=e(5610),_=e(965),M=e(9808),D=e(9513),S=e(8550),A=e(829);function f(n,v){if(1&n){const E=s.EpF();s.TgZ(0,"figure",5),s.NdJ("click",function(R){const N=s.CHM(E).$implicit;return s.oxw().selectIcon(R,N)}),s._UZ(1,"img",6),s.TgZ(2,"figcaption"),s.TgZ(3,"div",7),s._uU(4),s.ALo(5,"capitalizeFirstLetter"),s.qZA(),s.qZA(),s.qZA()}if(2&n){const E=v.$implicit;s.xp6(1),s.Q6J("preloadImg",E.icon),s.xp6(3),s.Oqu(s.lcZ(5,2,E.title))}}let P=(()=>{class n extends d.Q{constructor(E,C){super(C),this._themesService=E,this.cdRef=C,this.category=t.G.getCategoryById("themes"),this.title=c.f.getTranslation("choose_theme"),this.searchPlaceHolder=`${c.f.getTranslation("search_theme")}...`,this.list$=null}selectIcon(E,C){E.stopPropagation(),a.J.setChosenTheme(C),r.A.updateStepInfo({title:C.title,style:{color:o.r.BLUE}}),r.A.goToNext()}buildList(){this.list$=this._themesService.getThemes().pipe((0,l.b)(()=>this.showList()))}}return n.\u0275fac=function(E){return new(E||n)(s.Y36(i.O),s.Y36(s.sBO))},n.\u0275cmp=s.Xpm({type:n,selectors:[["theme-choice"]],features:[s.qOj],decls:7,vars:10,consts:[[3,"category","title"],[3,"placeHolder","searchStrInput"],[3,"loaded"],[1,"list"],["class","list-item",3,"click",4,"ngFor","ngForOf"],[1,"list-item",3,"click"],[1,"list-item__img",3,"preloadImg"],[1,"list-item__title"]],template:function(E,C){1&E&&(s._UZ(0,"category-title",0),s.TgZ(1,"search-input",1),s.NdJ("searchStrInput",function(y){return C.searchStr=y}),s.qZA(),s.TgZ(2,"spinner-wrapper",2),s.TgZ(3,"div",3),s.YNc(4,f,6,4,"figure",4),s.ALo(5,"filterIcons"),s.ALo(6,"async"),s.qZA(),s.qZA()),2&E&&(s.Q6J("category",C.category)("title",C.title),s.xp6(1),s.Q6J("placeHolder",C.searchPlaceHolder),s.xp6(1),s.Q6J("loaded",C.loaded),s.xp6(2),s.Q6J("ngForOf",s.xi3(5,5,s.lcZ(6,8,C.list$),C.searchStr)))},directives:[m.a,T.J,_.C,M.sg,D.n],pipes:[S.V,M.Ov,A.G],styles:[".list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));grid-gap:3rem}.list-item[_ngcontent-%COMP%]{padding:10px;border-radius:30px 0;box-shadow:0 0 10px 18px #ffffffbf;background-color:#ffffffbf;border:solid 2px rgba(158,158,158,.15);cursor:pointer}.list-item[_ngcontent-%COMP%]:hover{background-color:#ffffffe6;border-color:#9e9e9e4d}.list-item__img[_ngcontent-%COMP%]{display:block;margin:auto}.list-item__title[_ngcontent-%COMP%]{font-size:1.5rem;text-align:center}"],changeDetection:0}),n})()},3832:(I,u,e)=>{e.d(u,{M:()=>i});var t=e(5e3),d=e(9808),o=e(9254),r=e(829);function a(m,T){if(1&m&&(t.TgZ(0,"header",2),t._uU(1),t.ALo(2,"capitalizeFirstLetter"),t.qZA()),2&m){const _=t.oxw();t.xp6(1),t.Oqu(t.lcZ(2,1,_.header))}}function l(m,T){if(1&m&&(t.TgZ(0,"figcaption",8),t._uU(1),t.qZA()),2&m){const _=t.oxw().$implicit;t.Q6J("ngStyle",_.titleStyle),t.xp6(1),t.hij(" ",_.title," ")}}function c(m,T){if(1&m){const _=t.EpF();t.TgZ(0,"figure",5),t.TgZ(1,"img",6),t.NdJ("click",function(D){const A=t.CHM(_).$implicit;return t.oxw(2).onItemClick(D,A)}),t.qZA(),t.YNc(2,l,2,2,"figcaption",7),t.qZA()}if(2&m){const _=T.$implicit,M=t.oxw(2);t.xp6(1),t.Q6J("src",_.img,t.LSH)("ngStyle",_.imgStyle),t.xp6(1),t.Q6J("ngIf",M.showTitle)}}function s(m,T){if(1&m&&(t.TgZ(0,"div",3),t.YNc(1,c,3,3,"figure",4),t.qZA()),2&m){const _=t.oxw();t.s9C("columnsAmount",_.items.length),t.xp6(1),t.Q6J("ngForOf",_.items)}}let i=(()=>{class m{constructor(){this.items=[],this.header="",this.showTitle=!1,this.itemClick=new t.vpe}onItemClick(_,M){_.stopPropagation(),this.itemClick.emit(M)}}return m.\u0275fac=function(_){return new(_||m)},m.\u0275cmp=t.Xpm({type:m,selectors:[["theme-items-bar"]],inputs:{items:"items",header:"header",showTitle:"showTitle"},outputs:{itemClick:"itemClick"},decls:2,vars:2,consts:[["class","header text--center",4,"ngIf"],["gridSizer","","itemSize","100",3,"columnsAmount",4,"ngIf"],[1,"header","text--center"],["gridSizer","","itemSize","100",3,"columnsAmount"],["class","figure d--flex m--auto h--100",4,"ngFor","ngForOf"],[1,"figure","d--flex","m--auto","h--100"],[1,"figure__img","d--block","m--auto","cursor--pointer",3,"src","ngStyle","click"],["class","figure__title text--center",3,"ngStyle",4,"ngIf"],[1,"figure__title","text--center",3,"ngStyle"]],template:function(_,M){1&_&&(t.YNc(0,a,3,3,"header",0),t.YNc(1,s,2,2,"div",1)),2&_&&(t.Q6J("ngIf",M.header),t.xp6(1),t.Q6J("ngIf",null==M.items?null:M.items.length))},directives:[d.O5,o.d,d.sg,d.PC],pipes:[r.G],styles:[".radial-gradient--soft-grey[_ngcontent-%COMP%]{background:radial-gradient(white,#f0f0f0)}.radial-gradient--medium-grey[_ngcontent-%COMP%]{background:radial-gradient(white,#dbdbdb)}.header[_ngcontent-%COMP%]{font-size:2rem;font-style:italic}@media screen and (max-width: 567px){.header[_ngcontent-%COMP%]{font-size:1rem}}.figure[_ngcontent-%COMP%]{flex-direction:column}.figure__img[_ngcontent-%COMP%]{max-width:80%;max-height:80%}.figure__title[_ngcontent-%COMP%]{font-size:1.25rem}@media screen and (max-width: 567px){.figure__title[_ngcontent-%COMP%]{font-size:1rem}}@media screen and (max-width: 480px){.figure__title[_ngcontent-%COMP%]{display:none}}"]}),m})()}}]);