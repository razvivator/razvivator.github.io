"use strict";(self.webpackChunkrazvivator=self.webpackChunkrazvivator||[]).push([[804],{6330:(T,h,e)=>{e.d(h,{a:()=>o});var s=e(9771);const o=[{id:"themes",color:s.r.BLUE},{id:"memory",color:s.r.GREEN},{id:"attention",color:s.r.ORANGE},{id:"intellect",color:s.r.PINK}]},4039:(T,h,e)=>{e.d(h,{s:()=>S});var x,W,s=e(655),o=e(8929),a=e(567),m=e(2868),c=e(1709),r=e(2986),n=e(1692),t=e(6792),i=e(7625),l=e(5713),g=e(9513),d=e(2281),p=e(7112),R=e(2188),U=e(5605),L=e(9417),C=e(9578),D=e(4729),E=e(8397),v=e(8744),P=e(9254),M=e(1834),B=e(850),_=e(5e3),y=e(2273),b=e(4853),K=e(9808),N=e(3832),z=e(1219),G=e(8632);const Z=["imgs"];function F(A,u){if(1&A){const f=_.EpF();_.TgZ(0,"progress-bar",8),_.NdJ("timeIsOver",function(){return _.CHM(f),_.oxw().hideItems()}),_.qZA()}if(2&A){const f=_.oxw();_.Q6J("time",f.time)}}const $=function(A,u,f){return{top:A,left:u,maxHeight:f}};function Q(A,u){if(1&A){const f=_.EpF();_.TgZ(0,"img",9,10),_.NdJ("animationend",function(){return _.CHM(f),_.oxw().animationEnd$.next()}),_.qZA()}if(2&A){const f=u.$implicit,O=u.index,I=_.oxw();_.Q6J("src",f.img,_.LSH)("ngStyle",_.kEZ(2,$,I.coords[O].top+"%",I.coords[O].left+"%","23%"))}}class S{constructor(u,f,O,I){this._commonService=u,this._themeItemsService=f,this._translationsService=O,this._renderer=I,this.bgUrl=C.v.bgUrl,this.percentage=M.N.PERCENTAGE,this.gameLoader=null,this.gameLoaded=!1,this.coords=null,this.items=null,this.itemsToChoose=null,this.time=0,this.showItemsBar=!1,this.question="",this.animationEnd$=new o.xQ,this.variant$=new o.xQ,x.set(this,""),W.set(this,new o.xQ)}ngOnInit(){D.B.chosenGameId="who_disappeared",this._buildGame()}ngOnDestroy(){(0,s.Q_)(this,W,"f").next(),(0,s.Q_)(this,W,"f").unsubscribe()}onLoadGame(){this.gameLoaded=!0,requestAnimationFrame(()=>this.imgWrapperVCh.setGameSizes())}hideItems(){this._toggleItems(p.C.ROTATE_OUT_CENTER)}_buildGame(){this.gameLoader=(0,a.D)({coords:this._commonService.getCoords(),items:this._themeItemsService.getItems(),bg:v.O.getImage(this.bgUrl),question:this._translationsService.loadTranslation(`games/${this._commonService.gameIdForTranslation}`)}).pipe((0,m.b)(u=>{this.itemsToChoose=C.v.getItemsToChoose(u.items),this.items=this._commonService.getRandItems(),this.coords=U.$.shuffle(u.coords),this.time=l.k.getAgesConfig().time,this.question=u.question[E.J.getChosenTheme().id]}),(0,c.zg)(()=>d.r.preloadThemeItemsImgs(this.itemsToChoose))),this.animationEnd$.pipe((0,r.q)(l.k.getAgesConfig().amount),(0,n.j)(l.k.getAgesConfig().amount),(0,m.b)(()=>this._defineItemToFind()),(0,t.g)(400),(0,m.b)(()=>{this._showItems(),this._showItemsBar()}),(0,i.R)((0,s.Q_)(this,W,"f"))).subscribe()}_defineItemToFind(){(0,s.YH)(this,x,this._commonService.getIdToFind(),"f"),this.imgsVCh.changes.pipe((0,r.q)(1),(0,m.b)(()=>{this.imgsVCh.forEach(u=>{this._renderer.setStyle(u.nativeElement,R.L.OPACITY,0),this._renderer.removeClass(u.nativeElement,p.C.ROTATE_OUT_CENTER)})}),(0,i.R)((0,s.Q_)(this,W,"f"))).subscribe(),this.items=this._commonService.buildItemsAfterHiding(),this.coords=U.$.shuffle(this.coords)}_showItems(){this._toggleItems(p.C.ROTATE_IN_CENTER)}_toggleItems(u){this.imgsVCh.forEach(f=>this._renderer.addClass(f.nativeElement,u))}_showItemsBar(){this.showItemsBar=!0,this.variant$.pipe((0,m.b)(u=>this._onVariantClick(u)),(0,i.R)((0,s.Q_)(this,W,"f"))).subscribe()}_onVariantClick(u){var f;return(0,s.mG)(this,void 0,void 0,function*(){if(u.id===(0,s.Q_)(this,x,"f")){this.variant$.complete();const O=this.items.findIndex(I=>I.id===u.id);if(O>-1){const I=null===(f=this.imgsVCh.find((Y,J)=>J===O))||void 0===f?void 0:f.nativeElement;this._animateCorrectImg(I)}else this.imgsVCh.changes.pipe((0,r.q)(1),(0,m.b)(()=>this._animateCorrectImg(this.imgsVCh.last.nativeElement)),(0,i.R)((0,s.Q_)(this,W,"f"))).subscribe(),this.items.push(u);yield L.d.playWinSound()}else yield L.d.playErrorSound()})}_animateCorrectImg(u){this._renderer.setStyle(u,R.L.OPACITY,1),this._renderer.removeClass(u,p.C.ROTATE_IN_CENTER),this._renderer.addClass(u,p.C.PULSATE_FWD)}}x=new WeakMap,W=new WeakMap,S.\u0275fac=function(u){return new(u||S)(_.Y36(C.v),_.Y36(d.r),_.Y36(y.f),_.Y36(_.Qsj))},S.\u0275cmp=_.Xpm({type:S,selectors:[["who-disappeared"]],viewQuery:function(u,f){if(1&u&&(_.Gf(g.n,5),_.Gf(P.d,5),_.Gf(B.z,5),_.Gf(Z,5)),2&u){let O;_.iGM(O=_.CRH())&&(f.preloadImgVCh=O.first),_.iGM(O=_.CRH())&&(f.gridSizerVCh=O.first),_.iGM(O=_.CRH())&&(f.imgWrapperVCh=O.first),_.iGM(O=_.CRH())&&(f.imgsVCh=O)}},decls:8,vars:8,consts:[[3,"gameLoader","loadGame"],[1,"container","h-max--100"],[3,"time","timeIsOver",4,"ngIf"],["imgWrapper","",1,"items","h--100","p--relative","overflow--hidden",3,"img"],[1,"d--block","w-max--100","h-max--100",3,"src"],["bg",""],["class","p--absolute",3,"src","ngStyle","animationend",4,"ngFor","ngForOf"],[3,"isVisible","items","header","itemClick"],[3,"time","timeIsOver"],[1,"p--absolute",3,"src","ngStyle","animationend"],["imgs",""]],template:function(u,f){if(1&u&&(_.TgZ(0,"game-spinner-wrapper",0),_.NdJ("loadGame",function(){return f.onLoadGame()}),_.TgZ(1,"div",1),_.YNc(2,F,1,1,"progress-bar",2),_.TgZ(3,"figure",3),_._UZ(4,"img",4,5),_.YNc(6,Q,2,6,"img",6),_.qZA(),_.TgZ(7,"theme-items-bar",7),_.NdJ("itemClick",function(I){return f.variant$.next(I)}),_.qZA(),_.qZA(),_.qZA()),2&u){const O=_.MAs(5);_.Q6J("gameLoader",f.gameLoader),_.xp6(2),_.Q6J("ngIf",f.gameLoaded),_.xp6(1),_.Q6J("img",O),_.xp6(1),_.Q6J("src",f.bgUrl,_.LSH),_.xp6(2),_.Q6J("ngForOf",f.items),_.xp6(1),_.Q6J("isVisible",f.showItemsBar)("items",f.itemsToChoose)("header",f.question+"?")}},directives:[b.Z,K.O5,B.z,K.sg,N.M,z.B,G.R,K.PC],styles:[".rotate-in-center[_ngcontent-%COMP%]{-webkit-animation:rotate-in-center .6s cubic-bezier(.25,.46,.45,.94) both;animation:rotate-in-center .6s cubic-bezier(.25,.46,.45,.94) both}@-webkit-keyframes rotate-in-center{0%{transform:rotate(-360deg);opacity:0}to{transform:rotate(0);opacity:1}}@keyframes rotate-in-center{0%{transform:rotate(-360deg);opacity:0}to{transform:rotate(0);opacity:1}}.rotate-out-center[_ngcontent-%COMP%]{-webkit-animation:rotate-out-center .6s cubic-bezier(.55,.085,.68,.53) both;animation:rotate-out-center .6s cubic-bezier(.55,.085,.68,.53) both}@-webkit-keyframes rotate-out-center{0%{transform:rotate(0);opacity:1}to{transform:rotate(-360deg);opacity:0}}@keyframes rotate-out-center{0%{transform:rotate(0);opacity:1}to{transform:rotate(-360deg);opacity:0}}.pulsate-fwd[_ngcontent-%COMP%]{-webkit-animation:pulsate-fwd .5s ease-in-out infinite both;animation:pulsate-fwd .5s ease-in-out infinite both}@-webkit-keyframes pulsate-fwd{0%{transform:scale(1)}50%{transform:scale(1.1)}to{transform:scale(1)}}@keyframes pulsate-fwd{0%{transform:scale(1)}50%{transform:scale(1.1)}to{transform:scale(1)}}.container[_ngcontent-%COMP%]{display:grid;grid-template-rows:-webkit-min-content 1fr -webkit-min-content;grid-template-rows:min-content 1fr min-content}.items[_ngcontent-%COMP%]{margin:0 auto}"],changeDetection:0})},9578:(T,h,e)=>{e.d(h,{v:()=>r});var s=e(655),o=e(1340),a=e(8397),m=e(1995),c=e(5605);class r{constructor(t){this._http=t}static getItemsToChoose(t){return r.itemsToChoose=c.$.getRandItems(t,8),r.itemsToChoose}static get bgUrl(){return`${a.J.getGameThemeFolderById("who_disappeared")}bg.${m.D.PNG}`}getCoords(){const t=`${a.J.getGameThemeFolderById("who_disappeared")}coords.${m.D.JSON}`;return this._fetchCoords(t)}_fetchCoords(t){return this._http.get(t)}}r.itemsToChoose=null,r.items=null,(0,s.gn)([(0,o.q)()],r.prototype,"_fetchCoords",null)},2761:(T,h,e)=>{e.d(h,{i:()=>n});var s=e(9808),o=e(5562),a=e(933),m=e(2747),c=e(9578),r=e(5e3);let n=(()=>{class t{static forChild(l){return{ngModule:t,providers:[{provide:c.v,useClass:l}]}}}return t.\u0275fac=function(l){return new(l||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[s.ez,a.q,m.U,o.P.forChild()]]}),t})()},4106:(T,h,e)=>{e.d(h,{f:()=>r});var s=e(9808),o=e(933),a=e(6007),m=e(1233),c=e(5e3);let r=(()=>{class n{static forChild(i){return{ngModule:n,providers:[{provide:a.n,useValue:i.agesConfig},{provide:a.O,useValue:i.stepsToReset}]}}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[[s.ez,m.D,o.q]]}),n})()},8450:(T,h,e)=>{e.d(h,{N:()=>L});var s=e(6849),o=e(9771);const a={0:o.r.PINK,1:o.r.ORANGE,2:o.r.GREEN},m={0:"3 - 4",1:"4 - 5",2:"5 - 6"};class c{constructor(D,E){this.id=D;const v=m[this.id];this.title=`${v} ${E[v]}`,this.color=a[this.id]}}var r=e(5713),n=e(6007),t=e(4850),i=e(5e3),l=e(2273),g=e(9808);let d=(()=>{class C{static _getStyleProp(E){return`style.${E}`}ngOnInit(){this._setDefaultColors()}onMouseEnter(){this.color=this.borderColor=o.r.WHITE,this.bgColor=this.age.color,this.boxShadow=`0 0 16px 3px ${o.r.LIGHT_GREY}`}onMouseLeave(){this._setDefaultColors()}_setDefaultColors(){this.color=this.borderColor=this.age.color,this.bgColor=o.r.WHITE,this.boxShadow="none"}}return C.\u0275fac=function(E){return new(E||C)},C.\u0275dir=i.lG2({type:C,selectors:[["","ageItemColorize",""]],hostVars:8,hostBindings:function(E,v){1&E&&i.NdJ("mouseenter",function(){return v.onMouseEnter()})("mouseleave",function(){return v.onMouseLeave()}),2&E&&i.Udp("color",v.color)("border-color",v.borderColor)("background-color",v.bgColor)("box-shadow",v.boxShadow)},inputs:{age:["ageItemColorize","age"]}}),C})();var p=e(829);function R(C,D){if(1&C){const E=i.EpF();i.TgZ(0,"div",4),i.NdJ("click",function(){const M=i.CHM(E).$implicit;return i.oxw(2).chooseAge(M)}),i._uU(1),i.qZA()}if(2&C){const E=D.$implicit;i.Q6J("ageItemColorize",E),i.xp6(1),i.hij(" ",E.title," ")}}function U(C,D){if(1&C&&(i.TgZ(0,"div",1),i.TgZ(1,"div",2),i._uU(2),i.ALo(3,"capitalizeFirstLetter"),i.qZA(),i.YNc(4,R,2,2,"div",3),i.qZA()),2&C){const E=D.ngIf;i.xp6(2),i.hij("",i.lcZ(3,2,E.title),"?"),i.xp6(2),i.Q6J("ngForOf",E.ages)}}let L=(()=>{class C{constructor(E,v,P){this._agesConfig=E,this._stepsToReset=v,this._translationsService=P,this.content$=this._translationsService.loadTranslation("ages").pipe((0,t.U)(M=>({title:M.title,ages:Array.from(this._agesConfig.keys()).map(B=>new c(B,M))})))}ngOnInit(){r.k.setAgesConfig(this._agesConfig),this._stepsToReset&&s.A.resetSteps(this._stepsToReset)}chooseAge(E){r.k.setAgeId(E.id),s.A.updateStepInfo({title:E.title,style:{color:E.color}}),s.A.goToNext()}}return C.\u0275fac=function(E){return new(E||C)(i.Y36(n.n),i.Y36(n.O),i.Y36(l.f))},C.\u0275cmp=i.Xpm({type:C,selectors:[["age-choice"]],decls:2,vars:3,consts:[["class","ages-choice",4,"ngIf"],[1,"ages-choice"],[1,"ages-choice__title"],["class","ages-choice__age",3,"ageItemColorize","click",4,"ngFor","ngForOf"],[1,"ages-choice__age",3,"ageItemColorize","click"]],template:function(E,v){1&E&&(i.YNc(0,U,5,4,"div",0),i.ALo(1,"async")),2&E&&i.Q6J("ngIf",i.lcZ(1,1,v.content$))},directives:[g.O5,g.sg,d],pipes:[g.Ov,p.G],styles:[".ages-choice__title[_ngcontent-%COMP%]{margin-bottom:2rem;text-align:center;font-size:3rem;color:#70b}.ages-choice__age[_ngcontent-%COMP%]{width:100%;max-width:500px;margin:2rem auto;padding:.5rem;text-align:center;font-size:2rem;font-weight:bolder;border:2px solid;border-radius:50%;cursor:pointer}"],changeDetection:0}),C})()},6007:(T,h,e)=>{e.d(h,{n:()=>o,O:()=>a});var s=e(5e3);const o=new s.OlP("AGES_CONFIG_TOKEN"),a=new s.OlP("STEPS_TO_RESET_TOKEN")},8632:(T,h,e)=>{e.d(h,{R:()=>i});var t,s=e(655),o=e(5e3),a=e(1715),m=e(2986),c=e(2868),r=e(2198),n=e(1219);class i{constructor(g){this._cdRef=g,this.time=0,this.timeIsOver=new o.vpe,this.width=100,t.set(this,null)}ngOnChanges(g){g.time.currentValue!==g.time.previousValue&&this.countdown()}countdown(){const d=1e3*this.time/20;(0,s.YH)(this,t,(0,a.F)(20).pipe((0,m.q)(d),(0,c.b)(p=>{this.width=100-100*(p+1)/d,this._cdRef.detectChanges()}),(0,r.h)(p=>p===d-1),(0,c.b)(()=>this.timeIsOver.emit(!0))).subscribe(),"f")}ngOnDestroy(){var g;null===(g=(0,s.Q_)(this,t,"f"))||void 0===g||g.unsubscribe()}}t=new WeakMap,i.\u0275fac=function(g){return new(g||i)(o.Y36(o.sBO))},i.\u0275cmp=o.Xpm({type:i,selectors:[["progress-bar"]],inputs:{time:"time"},outputs:{timeIsOver:"timeIsOver"},features:[o.TTD],decls:2,vars:3,consts:[[1,"container",3,"isVisible"],[1,"container__inner"]],template:function(g,d){1&g&&(o.TgZ(0,"div",0),o._UZ(1,"div",1),o.qZA()),2&g&&(o.Q6J("isVisible",d.width>0),o.xp6(1),o.Udp("width",d.width+"%"))},directives:[n.B],styles:[".container[_ngcontent-%COMP%]{height:1rem;margin-top:.5rem;margin-bottom:.5rem;padding:.1rem;border-radius:.5rem;border:1px solid #cccccc}.container__inner[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:inherit;background-color:#00d36f}"],changeDetection:0})},9254:(T,h,e)=>{e.d(h,{d:()=>n});var s=e(9808),o=e(2188),a=e(4729),m=e(8889),c=e(1834),r=e(5e3);let n=(()=>{class t extends m.l{constructor(l,g,d,p){super(d,p),this._elementRef=l,this._renderer=g,this.rowsAmount=1,this.columnsAmount=1,this.itemSize=300,this.coeff=1}ngOnInit(){super.ngOnInit(),this._renderer.setStyle(this._elementRef.nativeElement,o.L.DISPLAY,"grid"),this._renderer.setStyle(this._elementRef.nativeElement,o.L.GRID_GAP,`0.5${c.N.REM}`),this._renderer.setStyle(this._elementRef.nativeElement,o.L.JUSTIFY_CONTENT,"center")}setGameSizes(){const l=Math.min(this.itemSize,a.B.getGridContainerMinDimension()/Math.max(this.rowsAmount,this.columnsAmount)-12);this._renderer.setStyle(this._elementRef.nativeElement,o.L.GRID_TEMPLATE_COLUMNS,`repeat(${this.columnsAmount}, ${l}${c.N.PX})`),this._renderer.setStyle(this._elementRef.nativeElement,o.L.GRID_TEMPLATE_ROWS,`repeat(${this.rowsAmount}, ${l*this.coeff}${c.N.PX})`)}}return t.\u0275fac=function(l){return new(l||t)(r.Y36(r.SBq),r.Y36(r.Qsj),r.Y36(r.R0b),r.Y36(s.K0))},t.\u0275dir=r.lG2({type:t,selectors:[["","gridSizer",""]],inputs:{rowsAmount:"rowsAmount",columnsAmount:"columnsAmount",itemSize:"itemSize",coeff:"coeff"},features:[r.qOj]}),t})()},850:(T,h,e)=>{e.d(h,{z:()=>r});var s=e(9808),o=e(8889),a=e(2188),m=e(1834),c=e(5e3);let r=(()=>{class n extends o.l{constructor(i,l,g,d){super(g,d),this._elementRef=i,this._renderer=l,this.img=null}setGameSizes(){var i;this._renderer.removeStyle(this._elementRef.nativeElement,a.L.MAX_WIDTH);const l=null===(i=this.img)||void 0===i?void 0:i.getBoundingClientRect().width;l&&this._renderer.setStyle(this._elementRef.nativeElement,a.L.MAX_WIDTH,`${l}${m.N.PX}`)}}return n.\u0275fac=function(i){return new(i||n)(c.Y36(c.SBq),c.Y36(c.Qsj),c.Y36(c.R0b),c.Y36(s.K0))},n.\u0275dir=c.lG2({type:n,selectors:[["","imgWrapper",""]],inputs:{img:"img"},features:[c.qOj]}),n})()},9513:(T,h,e)=>{e.d(h,{n:()=>n});var r,s=e(655),o=e(8744),a=e(2986),m=e(2868),c=e(5e3);class n{constructor(i,l){this._elementRef=i,this._renderer=l,r.set(this,null)}ngOnInit(){if("IMG"!==this._elementRef.nativeElement.tagName)throw new Error("Element should be an image");(0,s.YH)(this,r,o.O.getImage(this.src).pipe((0,a.q)(1),(0,m.b)(i=>this._renderer.setAttribute(this._elementRef.nativeElement,"src",i.src))).subscribe(),"f")}ngOnDestroy(){var i;null===(i=(0,s.Q_)(this,r,"f"))||void 0===i||i.unsubscribe()}}r=new WeakMap,n.\u0275fac=function(i){return new(i||n)(c.Y36(c.SBq),c.Y36(c.Qsj))},n.\u0275dir=c.lG2({type:n,selectors:[["","preloadImg",""]],inputs:{src:["preloadImg","src"]}})},7112:(T,h,e)=>{e.d(h,{C:()=>s});var s=(()=>{return(o=s||(s={})).SHAKE_HORIZONTAL="shake-horizontal",o.SLIDE_IN_FWD_CENTER="slide-in-fwd-center",o.PULSATE_FWD="pulsate-fwd",o.ROTATE_IN_CENTER="rotate-in-center",o.ROTATE_OUT_CENTER="rotate-out-center",o.BOUNCE_IN_FWD="bounce-in-fwd",s;var o})()},3162:(T,h,e)=>{e.d(h,{M:()=>s});const s=[{path:"",loadChildren:()=>Promise.resolve().then(e.bind(e,395)).then(o=>o.GameStepsModule)}]},9117:(T,h,e)=>{e.d(h,{W:()=>o});var s=e(2273);class o{constructor(m){this.id=null,this.title="",this.color="",this.route="",this.id=m.id,this.title=s.f.getTranslation(m.id),this.color=m.color,this.route=`${this.id}`}}},5605:(T,h,e)=>{e.d(h,{$:()=>s});class s{static shuffle(a){if(a.length<1)return console.warn("Empty array!"),a;const m=[...a];for(;!s._isArrShuffled(a,m);)m.sort(()=>Math.random()-.5);return m}static _isArrShuffled(a,m){let c=!1;for(const[r,n]of a.entries())if(n!==m[r]){c=!0;break}return c}static getRandItems(a,m=a.length){if(m>a.length)throw new Error(`maxArrLength ${m} should be equal or less than items length ${a.length}`);const c=s.shuffle(a);return c.length=m,c}static getDoubledRandItems(a,m=a.length){const c=s.getRandItems(a,m);return s.shuffle([...c,...c])}static uniq(a){return Array.from(new Set(a))}static getSequence(a,m=0){const c=[];for(let r=m;r<a;r++)c.push(r);return c}static groupArrByLength(a,m){const c=new Map;let r=0,n=0,t=0;for(;t<a.length;)n=r*m,t=n+m,c.set(r,a.slice(n,t)),r++;return c}static getRndInteger(a,m){return Math.floor(Math.random()*(m-a))+a}static getRndArrElem(a){return a[s.getRndInteger(0,a.length)]}}},4636:(T,h,e)=>{e.d(h,{Z:()=>D});var s=e(9424),o=e(4375),a=e(9771),m=e(6849),c=e(8397),r=e(2868),n=e(2273),t=e(5e3),i=e(2205),l=e(5316),g=e(5610),d=e(965),p=e(9808),R=e(9513),U=e(8550),L=e(829);function C(E,v){if(1&E){const P=t.EpF();t.TgZ(0,"figure",5),t.NdJ("click",function(B){const y=t.CHM(P).$implicit;return t.oxw().selectIcon(B,y)}),t._UZ(1,"img",6),t.TgZ(2,"figcaption"),t.TgZ(3,"div",7),t._uU(4),t.ALo(5,"capitalizeFirstLetter"),t.qZA(),t.qZA(),t.qZA()}if(2&E){const P=v.$implicit;t.xp6(1),t.Q6J("preloadImg",P.icon),t.xp6(3),t.Oqu(t.lcZ(5,2,P.title))}}let D=(()=>{class E extends o.Q{constructor(P,M){super(M),this._themesService=P,this.cdRef=M,this.category=s.G.getCategoryById("themes"),this.title=n.f.getTranslation("choose_theme"),this.searchPlaceHolder=`${n.f.getTranslation("search_theme")}...`,this.list$=null}selectIcon(P,M){P.stopPropagation(),c.J.setChosenTheme(M),m.A.updateStepInfo({title:M.title,style:{color:a.r.BLUE}}),m.A.goToNext()}buildList(){this.list$=this._themesService.getThemes().pipe((0,r.b)(()=>this.showList()))}}return E.\u0275fac=function(P){return new(P||E)(t.Y36(i.O),t.Y36(t.sBO))},E.\u0275cmp=t.Xpm({type:E,selectors:[["theme-choice"]],features:[t.qOj],decls:7,vars:10,consts:[[3,"category","title"],[3,"placeHolder","searchStrInput"],[3,"loaded"],[1,"list"],["class","list-item",3,"click",4,"ngFor","ngForOf"],[1,"list-item",3,"click"],[1,"list-item__img",3,"preloadImg"],[1,"list-item__title"]],template:function(P,M){1&P&&(t._UZ(0,"category-title",0),t.TgZ(1,"search-input",1),t.NdJ("searchStrInput",function(_){return M.searchStr=_}),t.qZA(),t.TgZ(2,"spinner-wrapper",2),t.TgZ(3,"div",3),t.YNc(4,C,6,4,"figure",4),t.ALo(5,"filterIcons"),t.ALo(6,"async"),t.qZA(),t.qZA()),2&P&&(t.Q6J("category",M.category)("title",M.title),t.xp6(1),t.Q6J("placeHolder",M.searchPlaceHolder),t.xp6(1),t.Q6J("loaded",M.loaded),t.xp6(2),t.Q6J("ngForOf",t.xi3(5,5,t.lcZ(6,8,M.list$),M.searchStr)))},directives:[l.a,g.J,d.C,p.sg,R.n],pipes:[U.V,p.Ov,L.G],styles:[".list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));grid-gap:3rem}.list-item[_ngcontent-%COMP%]{padding:10px;border-radius:30px 0;box-shadow:0 0 10px 18px #ffffffbf;background-color:#ffffffbf;border:solid 2px rgba(158,158,158,.15);cursor:pointer}.list-item[_ngcontent-%COMP%]:hover{background-color:#ffffffe6;border-color:#9e9e9e4d}.list-item__img[_ngcontent-%COMP%]{display:block;margin:auto}.list-item__title[_ngcontent-%COMP%]{font-size:1.5rem;text-align:center}"],changeDetection:0}),E})()},3832:(T,h,e)=>{e.d(h,{M:()=>i});var s=e(5e3),o=e(9808),a=e(9254),m=e(829);function c(l,g){if(1&l&&(s.TgZ(0,"header",2),s._uU(1),s.ALo(2,"capitalizeFirstLetter"),s.qZA()),2&l){const d=s.oxw();s.xp6(1),s.Oqu(s.lcZ(2,1,d.header))}}function r(l,g){if(1&l&&(s.TgZ(0,"figcaption",8),s._uU(1),s.qZA()),2&l){const d=s.oxw().$implicit;s.Q6J("ngStyle",d.titleStyle),s.xp6(1),s.hij(" ",d.title," ")}}function n(l,g){if(1&l){const d=s.EpF();s.TgZ(0,"figure",5),s.TgZ(1,"img",6),s.NdJ("click",function(R){const L=s.CHM(d).$implicit;return s.oxw(2).onItemClick(R,L)}),s.qZA(),s.YNc(2,r,2,2,"figcaption",7),s.qZA()}if(2&l){const d=g.$implicit,p=s.oxw(2);s.xp6(1),s.Q6J("src",d.img,s.LSH)("ngStyle",d.imgStyle),s.xp6(1),s.Q6J("ngIf",p.showTitle)}}function t(l,g){if(1&l&&(s.TgZ(0,"div",3),s.YNc(1,n,3,3,"figure",4),s.qZA()),2&l){const d=s.oxw();s.s9C("columnsAmount",d.items.length),s.xp6(1),s.Q6J("ngForOf",d.items)}}let i=(()=>{class l{constructor(){this.items=[],this.header="",this.showTitle=!1,this.itemClick=new s.vpe}onItemClick(d,p){d.stopPropagation(),this.itemClick.emit(p)}}return l.\u0275fac=function(d){return new(d||l)},l.\u0275cmp=s.Xpm({type:l,selectors:[["theme-items-bar"]],inputs:{items:"items",header:"header",showTitle:"showTitle"},outputs:{itemClick:"itemClick"},decls:2,vars:2,consts:[["class","header text--center",4,"ngIf"],["gridSizer","","itemSize","100",3,"columnsAmount",4,"ngIf"],[1,"header","text--center"],["gridSizer","","itemSize","100",3,"columnsAmount"],["class","figure d--flex m--auto h--100",4,"ngFor","ngForOf"],[1,"figure","d--flex","m--auto","h--100"],[1,"figure__img","d--block","m--auto","cursor--pointer",3,"src","ngStyle","click"],["class","figure__title text--center",3,"ngStyle",4,"ngIf"],[1,"figure__title","text--center",3,"ngStyle"]],template:function(d,p){1&d&&(s.YNc(0,c,3,3,"header",0),s.YNc(1,t,2,2,"div",1)),2&d&&(s.Q6J("ngIf",p.header),s.xp6(1),s.Q6J("ngIf",null==p.items?null:p.items.length))},directives:[o.O5,a.d,o.sg,o.PC],pipes:[m.G],styles:[".radial-gradient--soft-grey[_ngcontent-%COMP%]{background:radial-gradient(white,#f0f0f0)}.radial-gradient--medium-grey[_ngcontent-%COMP%]{background:radial-gradient(white,#dbdbdb)}.header[_ngcontent-%COMP%]{font-size:2rem;font-style:italic}@media screen and (max-width: 567px){.header[_ngcontent-%COMP%]{font-size:1rem}}.figure[_ngcontent-%COMP%]{flex-direction:column}.figure__img[_ngcontent-%COMP%]{max-width:80%;max-height:80%}.figure__title[_ngcontent-%COMP%]{font-size:1.25rem}@media screen and (max-width: 567px){.figure__title[_ngcontent-%COMP%]{font-size:1rem}}@media screen and (max-width: 480px){.figure__title[_ngcontent-%COMP%]{display:none}}"]}),l})()},1715:(T,h,e)=>{e.d(h,{F:()=>m});var s=e(6498),o=e(353),a=e(4241);function m(r=0,n=o.P){return(!(0,a.k)(r)||r<0)&&(r=0),(!n||"function"!=typeof n.schedule)&&(n=o.P),new s.y(t=>(t.add(n.schedule(c,r,{subscriber:t,counter:0,period:r})),t))}function c(r){const{subscriber:n,counter:t,period:i}=r;n.next(t),this.schedule({subscriber:n,counter:t+1,period:i},i)}},1692:(T,h,e)=>{e.d(h,{j:()=>o});var s=e(3489);function o(r,n=null){return function(i){return i.lift(new a(r,n))}}class a{constructor(n,t){this.bufferSize=n,this.startBufferEvery=t,this.subscriberClass=t&&n!==t?c:m}call(n,t){return t.subscribe(new this.subscriberClass(n,this.bufferSize,this.startBufferEvery))}}class m extends s.L{constructor(n,t){super(n),this.bufferSize=t,this.buffer=[]}_next(n){const t=this.buffer;t.push(n),t.length==this.bufferSize&&(this.destination.next(t),this.buffer=[])}_complete(){const n=this.buffer;n.length>0&&this.destination.next(n),super._complete()}}class c extends s.L{constructor(n,t,i){super(n),this.bufferSize=t,this.startBufferEvery=i,this.buffers=[],this.count=0}_next(n){const{bufferSize:t,startBufferEvery:i,buffers:l,count:g}=this;this.count++,g%i==0&&l.push([]);for(let d=l.length;d--;){const p=l[d];p.push(n),p.length===t&&(l.splice(d,1),this.destination.next(p))}}_complete(){const{buffers:n,destination:t}=this;for(;n.length>0;){let i=n.shift();i.length>0&&t.next(i)}super._complete()}}},4241:(T,h,e)=>{e.d(h,{k:()=>o});var s=e(6688);function o(a){return!(0,s.k)(a)&&a-parseFloat(a)+1>=0}}}]);