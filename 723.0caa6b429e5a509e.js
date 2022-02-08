"use strict";(self.webpackChunkrazvivator=self.webpackChunkrazvivator||[]).push([[723],{6330:(x,f,e)=>{e.d(f,{a:()=>v});var h=e(9771);const v=[{id:"themes",color:h.r.BLUE},{id:"memory",color:h.r.GREEN},{id:"attention",color:h.r.ORANGE},{id:"intellect",color:h.r.PINK}]},753:(x,f,e)=>{e.r(f),e.d(f,{FindDifferencesConfigModule:()=>k});var h=e(9808),v=e(7072),O=e(8035),E=e(5059),C=e(3162),t=e(395),u=e(4636),s=e(5562),a=e(655),T=e(6849),I=e(9417),M=e(2281),P=e(9771),D=e(2188),_=e(1834),o=e(5e3);let A=(()=>{class d{constructor(i,g){this._elRef=i,this._renderer=g}drawEllipse(i,g){const W=i.right-i.left,N=i.bottom-i.top,L=this._renderer.createElement("DIV");this._renderer.setStyle(L,D.L.POSITION,"absolute"),this._renderer.setStyle(L,D.L.WIDTH,`${100*W/g}${_.N.PERCENTAGE}`),this._renderer.setStyle(L,D.L.HEIGHT,`${100*N/g}${_.N.PERCENTAGE}`),this._renderer.setStyle(L,D.L.LEFT,`${100*i.left/g}${_.N.PERCENTAGE}`),this._renderer.setStyle(L,D.L.TOP,`${100*i.top/g}${_.N.PERCENTAGE}`),this._renderer.setStyle(L,D.L.BORDER,`3px solid ${P.r.PINK}`),this._renderer.setStyle(L,D.L.BORDER_RADIUS,`50${_.N.PERCENTAGE}`),this._renderer.appendChild(this._elRef.nativeElement,L)}}return d.\u0275fac=function(i){return new(i||d)(o.Y36(o.SBq),o.Y36(o.Qsj))},d.\u0275dir=o.lG2({type:d,selectors:[["","drawEllipse",""]]}),d})();var c=e(8929),l=e(567),r=e(5254),m=e(2868),p=e(1709),R=e(2198),U=e(4850),F=e(7545),$=e(5613),Q=e(1340),Y=e(1995),G=e(8397),H=e(520),z=e(9082);class S{constructor(n,i){this._http=n,this._addStepsService=i}getCoords(){const n=`${G.J.getCustomGameThemeFolder()}${G.J.getChosenSetSegment(this._addStepsService.chosenSetIndex)}/coords.${Y.D.JSON}`;return this._fetchCoords(n)}_fetchCoords(n){return this._http.get(n)}}S.\u0275fac=function(n){return new(n||S)(o.LFG(H.eN),o.LFG(z.S))},S.\u0275prov=o.Yz7({token:S,factory:S.\u0275fac}),(0,a.gn)([(0,Q.q)()],S.prototype,"_fetchCoords",null);var y,Z,K,j=e(4853);function X(d,n){if(1&d){const i=o.EpF();o.TgZ(0,"div",4),o.TgZ(1,"img",5),o.NdJ("click",function(W){return o.CHM(i),o.oxw().coords$.next(W)}),o.qZA(),o.qZA()}if(2&d){const i=n.$implicit,g=o.oxw();o.Udp("max-width",g.maxImgWidth+g.px),o.xp6(1),o.Q6J("src",i.img,o.LSH)}}class B{constructor(n,i){this._findDifferencesService=n,this._themeItemsService=i,this.px=_.N.PX,this.gameLoader=null,this.items=null,this.maxImgWidth=400,this.coords$=new c.xQ,y.set(this,[]),Z.set(this,0),K.set(this,null)}ngOnInit(){this._buildGame()}ngOnDestroy(){var n;null===(n=(0,a.Q_)(this,K,"f"))||void 0===n||n.unsubscribe()}_buildGame(){this.gameLoader=(0,l.D)({items:this._themeItemsService.getItems(),coords:this._findDifferencesService.getCoords()}).pipe((0,m.b)(n=>{this.items=n.items,(0,a.YH)(this,y,[...n.coords],"f")}),(0,m.b)(()=>this._setSubscriptions()),(0,p.zg)(()=>M.r.preloadThemeItemsImgs(this.items)))}_setSubscriptions(){(0,a.YH)(this,K,this.coords$.pipe((0,R.h)(()=>(0,a.Q_)(this,y,"f").length>0),(0,U.U)(n=>{const i=n.target.getBoundingClientRect();return{x:n.clientX-i.left,y:n.clientY-i.top,rect:i}}),(0,F.w)(n=>(0,r.D)((0,a.Q_)(this,y,"f")).pipe(function J(d,n){return i=>i.lift(new $.eo(d,i,!0,n))}(i=>n.x>=this._getXCoord(i.left,n.rect)&&n.x<=this._getXCoord(i.right,n.rect)&&n.y>=this._getYCoord(i.top,n.rect)&&n.y<=this._getYCoord(i.bottom,n.rect)),(0,F.w)(i=>(0,a.mG)(this,void 0,void 0,function*(){var g;i>-1?(this.drawEllipseD.forEach(W=>W.drawEllipse((0,a.Q_)(this,y,"f")[i],this.maxImgWidth)),(0,a.Q_)(this,y,"f").splice(i,1),yield I.d.playRightSound()):(0,a.YH)(this,Z,(g=(0,a.Q_)(this,Z,"f"),++g),"f")>2?T.A.gameFailed():yield I.d.playErrorSound()})),(0,R.h)(()=>0===(0,a.Q_)(this,y,"f").length),(0,m.b)(()=>T.A.gameCompleted())))).subscribe(),"f")}_getXCoord(n,i){return n*i.width/this.maxImgWidth}_getYCoord(n,i){return n*i.height/this.maxImgWidth}}y=new WeakMap,Z=new WeakMap,K=new WeakMap,B.\u0275fac=function(n){return new(n||B)(o.Y36(S),o.Y36(M.r))},B.\u0275cmp=o.Xpm({type:B,selectors:[["find-differences"]],viewQuery:function(n,i){if(1&n&&o.Gf(A,5),2&n){let g;o.iGM(g=o.CRH())&&(i.drawEllipseD=g)}},decls:4,vars:2,consts:[[3,"gameLoader"],[1,"container","h--100"],[1,"w--100","text--center"],["class","d--i-block w--100 p--relative cursor--pointer","drawEllipse","",3,"maxWidth",4,"ngFor","ngForOf"],["drawEllipse","",1,"d--i-block","w--100","p--relative","cursor--pointer"],[1,"w--100",3,"src","click"]],template:function(n,i){1&n&&(o.TgZ(0,"game-spinner-wrapper",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.YNc(3,X,2,3,"div",3),o.qZA(),o.qZA(),o.qZA()),2&n&&(o.Q6J("gameLoader",i.gameLoader),o.xp6(3),o.Q6J("ngForOf",i.items))},directives:[j.Z,h.sg,A],styles:[".container[_ngcontent-%COMP%]{display:grid;place-items:center}"],changeDetection:0});var V=e(933),w=e(2747);let b=(()=>{class d{}return d.\u0275fac=function(i){return new(i||d)},d.\u0275mod=o.oAB({type:d}),d.\u0275inj=o.cJS({providers:[S],imports:[[h.ez,V.q,w.U]]}),d})(),k=(()=>{class d{}return d.\u0275fac=function(i){return new(i||d)},d.\u0275mod=o.oAB({type:d}),d.\u0275inj=o.cJS({imports:[[h.ez,O.P.forChild(),t.GameStepsModule.forChild([u.Z,E.g,B]),s.P.forChild(),b,v.Bz.forChild(C.M)]]}),d})()},8035:(x,f,e)=>{e.d(f,{P:()=>A});var h=e(9808),v=e(2747),O=e(5562),E=e(655),C=e(1340),t=e(1995),u=e(8397);class s{constructor(l){this.icon="",this.icon=`${u.J.getCustomGameThemeFolder()}${l.id}/img/set_icon.${l.ext}`}}var a=e(9146),T=e(4850),I=e(864),M=e(9082),P=e(5e3),D=e(520);class _ extends M.S{constructor(l){super(),this._http=l}getAddItems(){const l=`${u.J.getCustomGameThemeFolder()}items_sets.${t.D.JSON}`;return this._fetchItemsSets(l).pipe((0,a.J)(),(0,T.U)(r=>new s(r)),(0,I.q)())}_fetchItemsSets(l){return this._http.get(l)}}_.\u0275fac=function(l){return new(l||_)(P.LFG(D.eN))},_.\u0275prov=P.Yz7({token:_,factory:_.\u0275fac}),(0,E.gn)([(0,C.q)()],_.prototype,"_fetchItemsSets",null);var o=e(1233);let A=(()=>{class c{static forChild(r){return{ngModule:c,providers:[{provide:M.S,useClass:(null==r?void 0:r.addStepService)||_}]}}}return c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=P.oAB({type:c}),c.\u0275inj=P.cJS({providers:[],imports:[[h.ez,v.U,o.D,O.P]]}),c})()},5059:(x,f,e)=>{e.d(f,{g:()=>A});var h=e(6849),v=e(9771),O=e(1709),E=e(4850),C=e(1086),t=e(5e3),u=e(9082),s=e(2273),a=e(9808),T=e(9513),I=e(829);function M(c,l){1&c&&t.GkF(0)}const P=function(c){return{$implicit:c}};function D(c,l){if(1&c){const r=t.EpF();t.TgZ(0,"span",5),t.NdJ("click",function(){const R=t.CHM(r).index,U=t.oxw().ngIf,F=t.oxw();return F.choosePicture(R,{title:U.stepInfoTitle,style:{color:F.colors.PINK}})}),t.YNc(1,M,1,0,"ng-container",6),t.qZA()}if(2&c){const r=l.$implicit;t.oxw();const m=t.MAs(8),p=t.oxw();t.xp6(1),t.Q6J("ngTemplateOutlet",p.customSetTmpl||m)("ngTemplateOutletContext",t.VKq(2,P,r))}}function _(c,l){1&c&&t._UZ(0,"img",7),2&c&&t.Q6J("preloadImg",l.$implicit.icon)}function o(c,l){if(1&c&&(t.ynx(0),t.TgZ(1,"header"),t.TgZ(2,"h1",1),t._uU(3),t.ALo(4,"capitalizeFirstLetter"),t.qZA(),t.qZA(),t.TgZ(5,"div",2),t.YNc(6,D,2,4,"span",3),t.qZA(),t.YNc(7,_,1,1,"ng-template",null,4,t.W1O),t.BQk()),2&c){const r=l.ngIf;t.xp6(3),t.hij("",t.lcZ(4,2,r.title),":"),t.xp6(3),t.Q6J("ngForOf",r.sets)}}let A=(()=>{class c{constructor(r,m){this._addStepService=r,this._translationsService=m,this.customSetTmpl=null,this.content$=null,this.colors=v.r,this.title=""}ngOnInit(){this.content$=this._addStepService.getAddItems().pipe((0,O.zg)(r=>1===r.length?(this.choosePicture(),(0,C.of)(null)):this._translationsService.loadTranslation("add_steps").pipe((0,E.U)(m=>({sets:r,title:m.choose_picture,stepInfoTitle:m.to_choose_picture})))))}choosePicture(r=0,m=null){this._addStepService.chosenSetIndex=r,h.A.updateStepInfo(m),h.A.goToNext()}}return c.\u0275fac=function(r){return new(r||c)(t.Y36(u.S),t.Y36(s.f))},c.\u0275cmp=t.Xpm({type:c,selectors:[["pictures-choice"]],inputs:{customSetTmpl:"customSetTmpl"},decls:2,vars:3,consts:[[4,"ngIf"],[1,"text--center"],[1,"pictures"],[3,"click",4,"ngFor","ngForOf"],["setTmpl",""],[3,"click"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"d--block","w--100","cursor--pointer",3,"preloadImg"]],template:function(r,m){1&r&&(t.YNc(0,o,9,4,"ng-container",0),t.ALo(1,"async")),2&r&&t.Q6J("ngIf",t.lcZ(1,1,m.content$))},directives:[a.O5,a.sg,a.tP,T.n],pipes:[a.Ov,I.G],styles:[".pictures[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));grid-gap:3rem}"],changeDetection:0}),c})()},9513:(x,f,e)=>{e.d(f,{n:()=>u});var t,h=e(655),v=e(8744),O=e(2986),E=e(2868),C=e(5e3);class u{constructor(a,T){this._elementRef=a,this._renderer=T,t.set(this,null)}ngOnInit(){if("IMG"!==this._elementRef.nativeElement.tagName)throw new Error("Element should be an image");(0,h.YH)(this,t,v.O.getImage(this.src).pipe((0,O.q)(1),(0,E.b)(a=>this._renderer.setAttribute(this._elementRef.nativeElement,"src",a.src))).subscribe(),"f")}ngOnDestroy(){var a;null===(a=(0,h.Q_)(this,t,"f"))||void 0===a||a.unsubscribe()}}t=new WeakMap,u.\u0275fac=function(a){return new(a||u)(C.Y36(C.SBq),C.Y36(C.Qsj))},u.\u0275dir=C.lG2({type:u,selectors:[["","preloadImg",""]],inputs:{src:["preloadImg","src"]}})},3162:(x,f,e)=>{e.d(f,{M:()=>h});const h=[{path:"",loadChildren:()=>Promise.resolve().then(e.bind(e,395)).then(v=>v.GameStepsModule)}]},9117:(x,f,e)=>{e.d(f,{W:()=>v});var h=e(2273);class v{constructor(E){this.id=null,this.title="",this.color="",this.route="",this.id=E.id,this.title=h.f.getTranslation(E.id),this.color=E.color,this.route=`${this.id}`}}},4636:(x,f,e)=>{e.d(f,{Z:()=>c});var h=e(9424),v=e(4375),O=e(9771),E=e(6849),C=e(8397),t=e(2868),u=e(2273),s=e(5e3),a=e(2205),T=e(5316),I=e(5610),M=e(965),P=e(9808),D=e(9513),_=e(8550),o=e(829);function A(l,r){if(1&l){const m=s.EpF();s.TgZ(0,"figure",5),s.NdJ("click",function(R){const F=s.CHM(m).$implicit;return s.oxw().selectIcon(R,F)}),s._UZ(1,"img",6),s.TgZ(2,"figcaption"),s.TgZ(3,"div",7),s._uU(4),s.ALo(5,"capitalizeFirstLetter"),s.qZA(),s.qZA(),s.qZA()}if(2&l){const m=r.$implicit;s.xp6(1),s.Q6J("preloadImg",m.icon),s.xp6(3),s.Oqu(s.lcZ(5,2,m.title))}}let c=(()=>{class l extends v.Q{constructor(m,p){super(p),this._themesService=m,this.cdRef=p,this.category=h.G.getCategoryById("themes"),this.title=u.f.getTranslation("choose_theme"),this.searchPlaceHolder=`${u.f.getTranslation("search_theme")}...`,this.list$=null}selectIcon(m,p){m.stopPropagation(),C.J.setChosenTheme(p),E.A.updateStepInfo({title:p.title,style:{color:O.r.BLUE}}),E.A.goToNext()}buildList(){this.list$=this._themesService.getThemes().pipe((0,t.b)(()=>this.showList()))}}return l.\u0275fac=function(m){return new(m||l)(s.Y36(a.O),s.Y36(s.sBO))},l.\u0275cmp=s.Xpm({type:l,selectors:[["theme-choice"]],features:[s.qOj],decls:7,vars:10,consts:[[3,"category","title"],[3,"placeHolder","searchStrInput"],[3,"loaded"],[1,"list"],["class","list-item",3,"click",4,"ngFor","ngForOf"],[1,"list-item",3,"click"],[1,"list-item__img",3,"preloadImg"],[1,"list-item__title"]],template:function(m,p){1&m&&(s._UZ(0,"category-title",0),s.TgZ(1,"search-input",1),s.NdJ("searchStrInput",function(U){return p.searchStr=U}),s.qZA(),s.TgZ(2,"spinner-wrapper",2),s.TgZ(3,"div",3),s.YNc(4,A,6,4,"figure",4),s.ALo(5,"filterIcons"),s.ALo(6,"async"),s.qZA(),s.qZA()),2&m&&(s.Q6J("category",p.category)("title",p.title),s.xp6(1),s.Q6J("placeHolder",p.searchPlaceHolder),s.xp6(1),s.Q6J("loaded",p.loaded),s.xp6(2),s.Q6J("ngForOf",s.xi3(5,5,s.lcZ(6,8,p.list$),p.searchStr)))},directives:[T.a,I.J,M.C,P.sg,D.n],pipes:[_.V,P.Ov,o.G],styles:[".list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));grid-gap:3rem}.list-item[_ngcontent-%COMP%]{padding:10px;border-radius:30px 0;box-shadow:0 0 10px 18px #ffffffbf;background-color:#ffffffbf;border:solid 2px rgba(158,158,158,.15);cursor:pointer}.list-item[_ngcontent-%COMP%]:hover{background-color:#ffffffe6;border-color:#9e9e9e4d}.list-item__img[_ngcontent-%COMP%]{display:block;margin:auto}.list-item__title[_ngcontent-%COMP%]{font-size:1.5rem;text-align:center}"],changeDetection:0}),l})()}}]);