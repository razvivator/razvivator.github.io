"use strict";(self.webpackChunkrazvivator=self.webpackChunkrazvivator||[]).push([[572],{8889:(O,h,n)=>{n.d(h,{l:()=>d});var i,t=n(655),r=n(8929),m=n(2868),u=n(7625),s=n(294),e=n(1009),l=n(9808),g=n(4729),a=n(5e3);class d{constructor(_,C){this.ngZone=_,this.document=C,i.set(this,new r.xQ)}ngOnInit(){this._observeWindowResize(),s.u.resize$.pipe((0,m.b)(()=>this.setGameSizes()),(0,u.R)((0,t.Q_)(this,i,"f"))).subscribe(),s.u.isMobile$.pipe((0,m.b)(()=>g.B.setBodyPadding(this.document.body)),(0,u.R)((0,t.Q_)(this,i,"f"))).subscribe()}ngAfterViewInit(){this.setGameSizes()}ngOnDestroy(){(0,t.Q_)(this,i,"f").next(null),(0,t.Q_)(this,i,"f").unsubscribe()}_observeWindowResize(){s.u.observeWindowResize().pipe((0,u.R)((0,t.Q_)(this,i,"f"))).subscribe()}}i=new WeakMap,d.\u0275fac=function(_){return new(_||d)(a.Y36(a.R0b),a.Y36(l.K0))},d.\u0275dir=a.lG2({type:d}),(0,t.gn)([e.A],d.prototype,"_observeWindowResize",null)},4853:(O,h,n)=>{n.d(h,{Z:()=>B});var t=n(5e3),r=n(567),m=n(1709),u=n(6792),s=n(4850),e=n(2474),l=n(6849),g=n(9771),a=n(9417),i=n(2273),d=n(9808),f=n(8889),_=n(2188),C=n(4729),M=n(1834);let D=(()=>{class E extends f.l{constructor(y,R,Q,U){super(Q,U),this._elementRef=y,this._renderer=R}setGameSizes(){this._renderer.setStyle(this._elementRef.nativeElement,_.L.HEIGHT,`${C.B.getViewPortHeight()}${M.N.PX}`)}}return E.\u0275fac=function(y){return new(y||E)(t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(t.R0b),t.Y36(d.K0))},E.\u0275dir=t.lG2({type:E,selectors:[["","gameViewportSizer",""]],features:[t.qOj]}),E})();var I=n(1219),T=n(2925);function S(E,b){1&E&&t._UZ(0,"spinner")}const A=["*"];let B=(()=>{class E{constructor(y){this._translationsService=y,this.gameLoader=null,this.loadGame=new t.vpe,this.gameLoaded$=null}ngOnInit(){this.gameLoaded$=this.gameLoader.pipe((0,m.zg)(()=>(0,r.D)({sounds:a.d.getAllBaseSounds(),translations:this._translationsService.loadTranslation("game_started")}).pipe((0,u.g)(300),(0,s.U)(y=>(l.A.updateStepInfo({title:y.translations.start_game,style:{color:g.r.PURPLE}}),this.loadGame.emit(),!0)))),(0,e.B)())}}return E.\u0275fac=function(y){return new(y||E)(t.Y36(i.f))},E.\u0275cmp=t.Xpm({type:E,selectors:[["game-spinner-wrapper"]],inputs:{gameLoader:"gameLoader"},outputs:{loadGame:"loadGame"},ngContentSelectors:A,decls:5,vars:6,consts:[[4,"ngIf"],["gameViewportSizer","",1,"h--100",3,"isVisible"]],template:function(y,R){1&y&&(t.F$t(),t.YNc(0,S,1,0,"spinner",0),t.ALo(1,"async"),t.TgZ(2,"div",1),t.ALo(3,"async"),t.Hsn(4),t.qZA()),2&y&&(t.Q6J("ngIf",!t.lcZ(1,2,R.gameLoaded$)),t.xp6(2),t.Q6J("isVisible",t.lcZ(3,4,R.gameLoaded$)))},directives:[d.O5,D,I.B,T.O],pipes:[d.Ov],encapsulation:2,changeDetection:0}),E})()},1739:(O,h,n)=>{n.d(h,{d:()=>u});var t=n(5e3),r=n(9808);const m=["*"];let u=(()=>{class s{constructor(l){this._cdRef=l,this.appearanceFrom="right",this.isActive=!1}toggleMenu(){this.isActive=!this.isActive}closeMenu(){this.isActive=!1,this._cdRef.markForCheck()}}return s.\u0275fac=function(l){return new(l||s)(t.Y36(t.sBO))},s.\u0275cmp=t.Xpm({type:s,selectors:[["menu-toggle"]],inputs:{appearanceFrom:"appearanceFrom"},ngContentSelectors:m,decls:4,vars:2,consts:[[1,"toggle","smooth-bg",3,"click"],[1,"toggle__line",3,"ngClass"],[1,"nav-container",3,"ngClass"]],template:function(l,g){1&l&&(t.F$t(),t.TgZ(0,"div",0),t.NdJ("click",function(){return g.toggleMenu()}),t._UZ(1,"div",1),t.qZA(),t.TgZ(2,"nav",2),t.Hsn(3),t.qZA()),2&l&&(t.xp6(1),t.Q6J("ngClass",g.isActive?"toggle__line--crossed":""),t.xp6(1),t.Q6J("ngClass",g.isActive?"nav-container--"+g.appearanceFrom+"-active":"nav-container--"+g.appearanceFrom))},directives:[r.mk],styles:['.toggle[_ngcontent-%COMP%]{display:grid;height:40px;place-items:center;position:relative;cursor:pointer;z-index:10}.toggle__line[_ngcontent-%COMP%]{width:60px;height:10px;border-radius:5px;background-color:#00d36f;position:relative}.toggle__line[_ngcontent-%COMP%]:before, .toggle__line[_ngcontent-%COMP%]:after{content:"";width:60px;height:10px;border-radius:5px;background-color:#00d36f;position:absolute;left:0;transition:transform .25s,top .25s,bottom .25s;transition-timing-function:ease-in-out}.toggle__line[_ngcontent-%COMP%]:before{top:15px}.toggle__line[_ngcontent-%COMP%]:after{top:-15px}.toggle__line--crossed[_ngcontent-%COMP%]{background-color:transparent}.toggle__line--crossed[_ngcontent-%COMP%]:before, .toggle__line--crossed[_ngcontent-%COMP%]:after{background-color:#ff2480;top:0}.toggle__line--crossed[_ngcontent-%COMP%]:before{transform:rotate(45deg)}.toggle__line--crossed[_ngcontent-%COMP%]:after{transform:rotate(-45deg)}.nav-container[_ngcontent-%COMP%]{width:100%;max-width:480px;height:100vh;padding:4rem 1rem;position:fixed;top:0;background-color:#f3f3f3;z-index:1;overflow-y:auto;transform:translateZ(0);transition:.2s;transition-timing-function:ease-in-out}.nav-container--left[_ngcontent-%COMP%]{left:-480px}.nav-container--left-active[_ngcontent-%COMP%]{border-right:1px solid rgba(158,158,158,.25);left:0}.nav-container--right[_ngcontent-%COMP%]{right:-480px}.nav-container--right-active[_ngcontent-%COMP%]{border-left:1px solid rgba(158,158,158,.25);right:0}'],changeDetection:0}),s})()},2925:(O,h,n)=>{n.d(h,{O:()=>r});var t=n(5e3);let r=(()=>{class m{}return m.\u0275fac=function(s){return new(s||m)},m.\u0275cmp=t.Xpm({type:m,selectors:[["spinner"]],decls:4,vars:0,consts:[[1,"spinner"],[1,"spinner__item","spinner__item--first"],[1,"spinner__item","spinner__item--second"],[1,"spinner__item","spinner__item--third"]],template:function(s,e){1&s&&(t.TgZ(0,"div",0),t._UZ(1,"div",1),t._UZ(2,"div",2),t._UZ(3,"div",3),t.qZA())},styles:[".spinner[_ngcontent-%COMP%]{width:100px;margin:auto;text-align:center}.spinner__item[_ngcontent-%COMP%]{display:inline-block;width:25px;height:25px;background-color:#5c74d7;border-radius:100%;-webkit-animation:spinner 1.4s ease-in-out 0s infinite both;animation:spinner 1.4s ease-in-out 0s infinite both}.spinner__item--first[_ngcontent-%COMP%]{-webkit-animation-delay:-.32s;animation-delay:-.32s}.spinner__item--second[_ngcontent-%COMP%]{-webkit-animation-delay:-.16s;animation-delay:-.16s}@-webkit-keyframes spinner{0%,80%,to{transform:scale(0)}40%{transform:scale(1)}}@keyframes spinner{0%,80%,to{transform:scale(0)}40%{transform:scale(1)}}"],changeDetection:0}),m})()},500:(O,h,n)=>{n.d(h,{u:()=>g});var l,t=n(655),r=n(8929),m=n(2868),u=n(7625),s=n(294),e=n(5e3);class g{constructor(i,d,f){this._vcRef=i,this._tRef=d,this._cdRef=f,l.set(this,new r.xQ)}ngOnInit(){this._observeWindowToMobileResize(),s.u.isMobile$.pipe((0,m.b)(i=>{this.showIfMobile&&i||!this.showIfMobile&&!i?this._vcRef.createEmbeddedView(this._tRef):this._vcRef.clear(),this._cdRef.detectChanges()}),(0,u.R)((0,t.Q_)(this,l,"f"))).subscribe()}ngOnDestroy(){(0,t.Q_)(this,l,"f").next(),(0,t.Q_)(this,l,"f").unsubscribe()}_observeWindowToMobileResize(){s.u.observeWindowToMobileResize().subscribe()}}l=new WeakMap,g.\u0275fac=function(i){return new(i||g)(e.Y36(e.s_b),e.Y36(e.Rgc),e.Y36(e.sBO))},g.\u0275dir=e.lG2({type:g,selectors:[["","ifMobile",""]],inputs:{showIfMobile:["ifMobile","showIfMobile"]}})},1219:(O,h,n)=>{n.d(h,{B:()=>m});var t=n(2188),r=n(5e3);let m=(()=>{class u{constructor(e,l){this._elementRef=e,this._renderer=l}ngOnChanges(){this._renderer.setStyle(this._elementRef.nativeElement,t.L.VISIBILITY,this.isVisible?"visible":"hidden")}}return u.\u0275fac=function(e){return new(e||u)(r.Y36(r.SBq),r.Y36(r.Qsj))},u.\u0275dir=r.lG2({type:u,selectors:[["","isVisible",""]],inputs:{isVisible:"isVisible"},features:[r.TTD]}),u})()},9771:(O,h,n)=>{n.d(h,{r:()=>t});var t=(()=>{return(r=t||(t={})).BLACK="#000000",r.BLUE="#5C74D7",r.PURPLE="#7700BB",r.GREEN="#00D36F",r.ORANGE="#FF9D2A",r.PINK="#FF2480",r.WHITE="#FFFFFF",r.LIGHT_GREY="#CCCCCC",r.MEDIUM_GREY="#9E9E9E",r.DARK_GREY="#333333",t;var r})()},1834:(O,h,n)=>{n.d(h,{N:()=>t});var t=(()=>{return(r=t||(t={})).PX="px",r.DEG="deg",r.REM="rem",r.PERCENTAGE="%",t;var r})()},395:(O,h,n)=>{n.r(h),n.d(h,{GameStepsModule:()=>oe});var t=n(9808),r=n(7072),m=n(933),u=n(2747),s=n(655),e=n(5e3),l=n(8929),g=n(2868),a=n(7625),i=n(9771),d=n(4729);const f=new e.OlP("GAME_STEPS_TOKEN");var _=n(6849),C=n(9417),M=n(567),D=n(8744),I=n(4850),T=n(2273);let S=(()=>{class o{constructor(c){this._translationsService=c,this.message$=null,this.colors=i.r}ngOnInit(){this.message$=(0,M.D)({img:D.O.getImage(this.imgSrc),translation:this._translationsService.loadTranslation("game_finished")}).pipe((0,I.U)(c=>(this.playSound(),c.translation[this.translationProp])))}}return o.\u0275fac=function(c){return new(c||o)(e.Y36(T.f))},o.\u0275dir=e.lG2({type:o}),o})();var A=n(1995),B=n(829);function E(o,p){if(1&o&&(e.TgZ(0,"div",1),e._UZ(1,"img",2),e.TgZ(2,"div",3),e._uU(3),e.ALo(4,"capitalizeFirstLetter"),e.qZA(),e.qZA()),2&o){const c=p.ngIf,v=e.oxw();e.xp6(1),e.Q6J("src",v.imgSrc,e.LSH),e.xp6(1),e.Udp("color",v.colors.ORANGE),e.xp6(1),e.hij(" ",e.lcZ(4,4,c)," ")}}let b=(()=>{class o extends S{constructor(){super(...arguments),this.imgSrc=`../../../../../assets/img/game-completed.${A.D.SVG}`,this.translationProp="win"}playSound(){return(0,s.mG)(this,void 0,void 0,function*(){yield C.d.playWinSound()})}}return o.\u0275fac=function(){let p;return function(v){return(p||(p=e.n5z(o)))(v||o)}}(),o.\u0275cmp=e.Xpm({type:o,selectors:[["game-completed"]],features:[e.qOj],decls:2,vars:3,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"w--100",3,"src"],[1,"container__text"]],template:function(c,v){1&c&&(e.YNc(0,E,5,6,"div",0),e.ALo(1,"async")),2&c&&e.Q6J("ngIf",e.lcZ(1,1,v.message$))},directives:[t.O5],pipes:[t.Ov,B.G],styles:[".container[_ngcontent-%COMP%]{display:grid;max-width:400px;width:100%;height:100%;margin:auto;place-items:center}.container__text[_ngcontent-%COMP%]{margin-top:1rem;font-size:3rem;text-align:center}"],changeDetection:0}),o})();function y(o,p){if(1&o&&(e.TgZ(0,"div",1),e._UZ(1,"img",2),e.TgZ(2,"div",3),e._uU(3),e.ALo(4,"capitalizeFirstLetter"),e.qZA(),e.qZA()),2&o){const c=p.ngIf,v=e.oxw();e.xp6(1),e.Q6J("src",v.imgSrc,e.LSH),e.xp6(1),e.Udp("color",v.colors.ORANGE),e.xp6(1),e.hij(" ",e.lcZ(4,4,c)," ")}}let R=(()=>{class o extends S{constructor(){super(...arguments),this.imgSrc=`../../../../../assets/img/game-failed.${A.D.PNG}`,this.translationProp="fail"}playSound(){return(0,s.mG)(this,void 0,void 0,function*(){yield C.d.playGameFailedSound()})}}return o.\u0275fac=function(){let p;return function(v){return(p||(p=e.n5z(o)))(v||o)}}(),o.\u0275cmp=e.Xpm({type:o,selectors:[["game-failed"]],features:[e.qOj],decls:2,vars:3,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"w--100",3,"src"],[1,"container__text"]],template:function(c,v){1&c&&(e.YNc(0,y,5,6,"div",0),e.ALo(1,"async")),2&c&&e.Q6J("ngIf",e.lcZ(1,1,v.message$))},directives:[t.O5],pipes:[t.Ov,B.G],styles:[".container[_ngcontent-%COMP%]{display:grid;max-width:400px;width:100%;height:100%;margin:auto;place-items:center}.container__text[_ngcontent-%COMP%]{margin-top:1rem;font-size:3rem;text-align:center}"],changeDetection:0}),o})();var Q=n(500),U=n(8397);let $=(()=>{class o{constructor(c){this._location=c}closeGame(){this._location.back(),U.J.unsetTheme()}}return o.\u0275fac=function(c){return new(c||o)(e.Y36(t.Ye))},o.\u0275cmp=e.Xpm({type:o,selectors:[["close-game"]],features:[e._Bn([t.Ye,{provide:t.S$,useClass:t.b0}])],decls:1,vars:0,consts:[[1,"cross","smooth-bg",3,"click"]],template:function(c,v){1&c&&(e.TgZ(0,"div",0),e.NdJ("click",function(){return v.closeGame()}),e.qZA())},styles:['.cross[_ngcontent-%COMP%]{width:50px;height:50px;position:relative;cursor:pointer}.cross[_ngcontent-%COMP%]:before{content:"";width:100%;height:20%;background-color:#ff2480;position:absolute;top:20px;transform:rotate(45deg)}.cross[_ngcontent-%COMP%]:after{content:"";width:100%;height:20%;background-color:#ff2480;position:absolute;top:20px;transform:rotate(-45deg)}'],changeDetection:0}),o})(),Z=(()=>{class o{constructor(){this.stepBack=new e.vpe}onStepBackClick(){this.stepBack.emit()}}return o.\u0275fac=function(c){return new(c||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["step-back"]],outputs:{stepBack:"stepBack"},decls:3,vars:0,consts:[[1,"step-back","smooth-bg",3,"click"],[1,"step-back__triangle"],[1,"step-back__stick"]],template:function(c,v){1&c&&(e.TgZ(0,"div",0),e.NdJ("click",function(){return v.onStepBackClick()}),e._UZ(1,"div",1),e._UZ(2,"div",2),e.qZA())},styles:[".step-back[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;cursor:pointer}.step-back__stick[_ngcontent-%COMP%]{width:50px;height:12px;position:relative;background-color:#00d36f}.step-back__triangle[_ngcontent-%COMP%]{width:0;height:0;border-style:solid;border-width:20px 25px 20px 0;border-color:transparent #00d36f transparent transparent}"],changeDetection:0}),o})();var L,P,x,w=n(1739);const K=["contentContainer"],z=["content"],N=["header"],Y=["closeGame"],k=["menuToggle"];function J(o,p){if(1&o){const c=e.EpF();e.TgZ(0,"step-back",11),e.NdJ("stepBack",function(){return e.CHM(c),e.oxw().stepBack()}),e.qZA()}}function j(o,p){1&o&&e.GkF(0)}const W=function(o){return{$implicit:o}};function V(o,p){if(1&o&&(e.TgZ(0,"div",12),e.YNc(1,j,1,0,"ng-container",13),e.qZA()),2&o){const c=e.oxw(),v=e.MAs(9);e.xp6(1),e.Q6J("ngTemplateOutlet",v)("ngTemplateOutletContext",e.VKq(2,W,c.gameStepsInfo))}}function H(o,p){1&o&&e.GkF(0)}function X(o,p){if(1&o){const c=e.EpF();e.TgZ(0,"menu-toggle",14,15),e.YNc(2,H,1,0,"ng-container",13),e.TgZ(3,"step-back",11),e.NdJ("stepBack",function(){return e.CHM(c),e.oxw().stepBack()}),e.qZA(),e.qZA()}if(2&o){const c=e.oxw(),v=e.MAs(9);e.Q6J("appearanceFrom",c.menuAppearanceFrom),e.xp6(2),e.Q6J("ngTemplateOutlet",v)("ngTemplateOutletContext",e.VKq(3,W,c.gameStepsInfo))}}function q(o,p){if(1&o){const c=e.EpF();e.TgZ(0,"div",18),e.NdJ("click",function(){e.CHM(c);const G=e.oxw().index;return e.oxw(2).goToStep(G)}),e._uU(1),e.ALo(2,"capitalizeFirstLetter"),e.qZA()}if(2&o){const c=e.oxw().$implicit;e.Q6J("ngStyle",c.style),e.xp6(1),e.hij(" ",e.lcZ(2,2,c.title)," ")}}function ee(o,p){if(1&o&&(e.ynx(0),e.YNc(1,q,3,4,"div",17),e.BQk()),2&o){const c=p.$implicit;e.xp6(1),e.Q6J("ngIf",c)}}function te(o,p){1&o&&e.YNc(0,ee,2,1,"ng-container",16),2&o&&e.Q6J("ngForOf",p.$implicit)}class F{constructor(p,c,v,G){this._resolver=p,this._router=c,this._cdRef=v,this._stepsConfig=G,this.gameStepsInfo=[],this.colors=i.r,this.menuAppearanceFrom="left",L.set(this,void 0),P.set(this,0),x.set(this,new l.xQ)}ngOnInit(){if(!this._stepsConfig||!this._stepsConfig.length)throw new Error("No steps!!!");d.B.chosenGameId||(d.B.chosenGameId=this._router.routerState.snapshot.url.split("/").pop()),_.A.goToNext$.pipe((0,g.b)(()=>{var p;return this.goToStep((0,s.YH)(this,P,(p=(0,s.Q_)(this,P,"f"),++p),"f"))}),(0,a.R)((0,s.Q_)(this,x,"f"))).subscribe(),_.A.updateStepInfo$.pipe((0,g.b)(p=>{this.gameStepsInfo[(0,s.Q_)(this,P,"f")]=p,this._cdRef.detectChanges()}),(0,a.R)((0,s.Q_)(this,x,"f"))).subscribe(),_.A.gameCompleted$.pipe((0,g.b)(()=>this._createComponent(b)),(0,a.R)((0,s.Q_)(this,x,"f"))).subscribe(),_.A.gameFailed$.pipe((0,g.b)(()=>this._createComponent(R)),(0,a.R)((0,s.Q_)(this,x,"f"))).subscribe(),_.A.stepsToReset$.pipe((0,g.b)(p=>this._resetSteps(p)),(0,a.R)((0,s.Q_)(this,x,"f"))).subscribe(),this.goToStep((0,s.Q_)(this,P,"f"))}ngAfterViewInit(){d.B.gameOffsetTop=this.contentContainer.nativeElement.getBoundingClientRect().top}ngOnDestroy(){C.d.stopSound(),(0,s.Q_)(this,x,"f").next(),(0,s.Q_)(this,x,"f").unsubscribe(),(0,s.Q_)(this,L,"f").destroy()}stepBack(){var p;(0,s.Q_)(this,P,"f")>0?(this.gameStepsInfo[(0,s.YH)(this,P,(p=(0,s.Q_)(this,P,"f"),--p),"f")]||this.stepBack(),this.goToStep((0,s.Q_)(this,P,"f"))):this.closeGameComponent.closeGame()}goToStep(p){var c;(0,s.YH)(this,P,p,"f"),this._createComponent(this._stepsConfig[(0,s.Q_)(this,P,"f")]),null===(c=this.menuToggle)||void 0===c||c.closeMenu()}_resetSteps(p){p.forEach(c=>{null!==this.gameStepsInfo[c]&&(this.gameStepsInfo[c]=null)}),this._cdRef.detectChanges()}_createComponent(p){C.d.stopSound(),this.content.clear();const c=this._resolver.resolveComponentFactory(p);(0,s.YH)(this,L,this.content.createComponent(c),"f"),this._cdRef.detectChanges()}}L=new WeakMap,P=new WeakMap,x=new WeakMap,F.\u0275fac=function(p){return new(p||F)(e.Y36(e._Vd),e.Y36(r.F0),e.Y36(e.sBO),e.Y36(f))},F.\u0275cmp=e.Xpm({type:F,selectors:[["game-steps"]],viewQuery:function(p,c){if(1&p&&(e.Gf(K,7),e.Gf(z,7,e.s_b),e.Gf(N,7),e.Gf(Y,7),e.Gf(k,5)),2&p){let v;e.iGM(v=e.CRH())&&(c.contentContainer=v.first),e.iGM(v=e.CRH())&&(c.content=v.first),e.iGM(v=e.CRH())&&(c.headerEl=v.first),e.iGM(v=e.CRH())&&(c.closeGameComponent=v.first),e.iGM(v=e.CRH())&&(c.menuToggle=v.first)}},decls:14,vars:3,consts:[[1,"steps"],[1,"header"],["header",""],[3,"stepBack",4,"ifMobile"],["class","game-info",4,"ifMobile"],[3,"appearanceFrom",4,"ifMobile"],[1,"close-game"],["closeGame",""],["gameStepsInfoTmpl",""],["contentContainer",""],["content",""],[3,"stepBack"],[1,"game-info"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"appearanceFrom"],["menuToggle",""],[4,"ngFor","ngForOf"],["class","game-info__step smooth-bg",3,"ngStyle","click",4,"ngIf"],[1,"game-info__step","smooth-bg",3,"ngStyle","click"]],template:function(p,c){1&p&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1,2),e.YNc(3,J,1,0,"step-back",3),e.YNc(4,V,2,4,"div",4),e.YNc(5,X,4,5,"menu-toggle",5),e._UZ(6,"close-game",6,7),e.qZA(),e.YNc(8,te,1,1,"ng-template",null,8,e.W1O),e.TgZ(10,"div",null,9),e._UZ(12,"template",null,10),e.qZA(),e.qZA()),2&p&&(e.xp6(3),e.Q6J("ifMobile",!1),e.xp6(1),e.Q6J("ifMobile",!1),e.xp6(1),e.Q6J("ifMobile",!0))},directives:[Q.u,$,Z,t.tP,w.d,t.sg,t.O5,t.PC],pipes:[B.G],styles:[".steps[_ngcontent-%COMP%]{display:grid;height:100%;grid-template-rows:-webkit-min-content 1fr;grid-template-rows:min-content 1fr}.header[_ngcontent-%COMP%]{display:grid;grid-template-columns:-webkit-min-content auto -webkit-min-content;grid-template-columns:min-content auto min-content;place-items:center;margin-bottom:1rem;position:-webkit-sticky;position:sticky;top:.5rem;z-index:1}.game-info[_ngcontent-%COMP%]{display:grid;place-items:center;grid-auto-flow:column;grid-gap:2rem}.game-info__step[_ngcontent-%COMP%]{font-size:2rem;cursor:pointer;text-align:center}.game-info__step[_ngcontent-%COMP%]:hover{text-decoration:underline}@media screen and (max-width: 1024px){.close-game[_ngcontent-%COMP%]{grid-column-start:3}}"],changeDetection:0});var ne=n(1233);const se=[{path:"",component:F}];let oe=(()=>{class o{static forChild(c){return{ngModule:o,providers:[{provide:f,useValue:c}]}}}return o.\u0275fac=function(c){return new(c||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[_.A],imports:[[t.ez,r.Bz.forChild(se),m.q,ne.D,u.U]]}),o})()},6849:(O,h,n)=>{n.d(h,{A:()=>a});var m,u,s,e,l,g,t=n(655),r=n(8929);class a{static get goToNext$(){return(0,t.Q_)(a,m,"f",u).asObservable()}static goToNext(){(0,t.Q_)(a,m,"f",u).next()}static get updateStepInfo$(){return(0,t.Q_)(a,m,"f",s).asObservable()}static updateStepInfo(d){return(0,t.Q_)(a,m,"f",s).next(d)}static get gameCompleted$(){return(0,t.Q_)(a,m,"f",e).asObservable()}static gameCompleted(){return(0,t.Q_)(a,m,"f",e).next()}static get gameFailed$(){return(0,t.Q_)(a,m,"f",l).asObservable()}static gameFailed(){(0,t.Q_)(a,m,"f",l).next()}static get stepsToReset$(){return(0,t.Q_)(a,m,"f",g).asObservable()}static resetSteps(d){(0,t.Q_)(a,m,"f",g).next(d)}}m=a,u={value:new r.xQ},s={value:new r.xQ},e={value:new r.xQ},l={value:new r.xQ},g={value:new r.xQ}},829:(O,h,n)=>{n.d(h,{G:()=>r});var t=n(5e3);let r=(()=>{class m{transform(s){return s&&`${s.charAt(0).toLocaleUpperCase()}${s.substring(1)}`}}return m.\u0275fac=function(s){return new(s||m)},m.\u0275pipe=t.Yjl({name:"capitalizeFirstLetter",type:m,pure:!0}),m})()},8744:(O,h,n)=>{n.d(h,{O:()=>d});var t=n(655),r=n(6498),m=n(5254),u=n(1340),s=n(1177);class l{constructor(_,C){this.keySelector=_,this.flushes=C}call(_,C){return C.subscribe(new g(_,this.keySelector,this.flushes))}}class g extends s.Ds{constructor(_,C,M){super(_),this.keySelector=C,this.values=new Set,M&&this.add((0,s.ft)(M,new s.IY(this)))}notifyNext(){this.values.clear()}notifyError(_){this._error(_)}_next(_){this.keySelector?this._useKeySelector(_):this._finalizeNext(_,_)}_useKeySelector(_){let C;const{destination:M}=this;try{C=this.keySelector(_)}catch(D){return void M.error(D)}this._finalizeNext(C,_)}_finalizeNext(_,C){const{values:M}=this;M.has(_)||(M.add(_),this.destination.next(C))}}var a=n(1709),i=n(864);class d{static getImage(_){return new r.y(C=>{const M=new Image;M.src=_,M.onload=()=>{C.next(M),C.complete()},M.onerror=()=>C.error(`image ${_} not found`)})}static getImages(_){return(0,m.D)(_).pipe(function e(f,_){return C=>C.lift(new l(f,_))}(),(0,a.zg)(C=>d.getImage(C)),(0,i.q)())}}(0,t.gn)([(0,u.q)()],d,"getImage",null)},9417:(O,h,n)=>{n.d(h,{d:()=>l});var u,s,e,t=n(655),r=n(1995),m=(()=>{return(g=m||(m={})).ERROR="error",g.GAME_FAILED="game-failed",g.RIGHT="right",g.WIN="win",m;var g})();class l{static getSound(a){return(0,t.mG)(this,void 0,void 0,function*(){return yield new Promise((i,d)=>{const f=new Audio;f.oncanplaythrough=()=>i(f),f.onerror=()=>d(`sound ${a} not found`),f.src=a})})}static getSounds(a){return Promise.all(a.map(i=>l.getSound(i)))}static preloadThemeItemsTitleSounds(a){return l.getSounds(a.map(i=>i.titleSoundUrl))}static preloadThemeItemsOwnSounds(a){return l.getSounds(a.map(i=>i.ownSoundUrl))}static getBaseSounds(a){return l.getSounds(a.map(i=>`${(0,t.Q_)(l,u,"f",s)}${i}.${r.D.MP3}`))}static getAllBaseSounds(){return(0,t.mG)(this,void 0,void 0,function*(){return yield l.getBaseSounds(Object.values(m))})}static playRightSound(){return(0,t.mG)(this,void 0,void 0,function*(){yield l.playSound(`${(0,t.Q_)(l,u,"f",s)}${m.RIGHT}.${r.D.MP3}`)})}static playErrorSound(){return(0,t.mG)(this,void 0,void 0,function*(){yield l.playSound(`${(0,t.Q_)(l,u,"f",s)}${m.ERROR}.${r.D.MP3}`)})}static playWinSound(){return(0,t.mG)(this,void 0,void 0,function*(){yield l.playSound(`${(0,t.Q_)(l,u,"f",s)}${m.WIN}.${r.D.MP3}`)})}static playGameFailedSound(){return(0,t.mG)(this,void 0,void 0,function*(){yield l.playSound(`${(0,t.Q_)(l,u,"f",s)}${m.GAME_FAILED}.${r.D.MP3}`)})}static playSound(a){return(0,t.mG)(this,void 0,void 0,function*(){return yield new Promise((i,d)=>(0,t.mG)(this,void 0,void 0,function*(){const f=yield l.getSound(a);f.currentTime=0,(0,t.Q_)(l,u,"f",e).pause(),(0,t.YH)(l,u,f,"f",e),yield f.play(),f.onended=()=>i(),f.onerror=_=>d(`Error has been occured on sound play ${_}`)}))})}static stopSound(){(0,t.Q_)(l,u,"f",e).pause()}}u=l,s={value:"../../../../../../assets/sounds/"},e={value:new Audio}},4475:(O,h,n)=>{n.d(h,{m:()=>r});var t=n(5851);class r extends t.b{}},5851:(O,h,n)=>{n.d(h,{b:()=>m});var t=n(8397),r=n(1995);class m{constructor(s,e){this.id=null,this.title="",this.icon="",this.bg="",this.isCustomItems=!1,this.customItemImgExt=null,this.themeItemsIds=null,this.id=s.id,this.title=e[s.id],this.isCustomItems=s.customItems,this.icon=t.J.getIcon(s.id,s.customIcon),this.bg=t.J.getBg(s.id,s.customBg),this.customItemImgExt=s.customItemImgExt||r.D.PNG,this.themeItemsIds=s.themeItemsIds}}},567:(O,h,n)=>{n.d(h,{D:()=>e});var t=n(6498),r=n(6688),m=n(4850),u=n(7830),s=n(5254);function e(...g){if(1===g.length){const a=g[0];if((0,r.k)(a))return l(a,null);if((0,u.K)(a)&&Object.getPrototypeOf(a)===Object.prototype){const i=Object.keys(a);return l(i.map(d=>a[d]),i)}}if("function"==typeof g[g.length-1]){const a=g.pop();return l(g=1===g.length&&(0,r.k)(g[0])?g[0]:g,null).pipe((0,m.U)(i=>a(...i)))}return l(g,null)}function l(g,a){return new t.y(i=>{const d=g.length;if(0===d)return void i.complete();const f=new Array(d);let _=0,C=0;for(let M=0;M<d;M++){const D=(0,s.D)(g[M]);let I=!1;i.add(D.subscribe({next:T=>{I||(I=!0,C++),f[M]=T},error:T=>i.error(T),complete:()=>{_++,(_===d||!I)&&(C===d&&i.next(a?a.reduce((T,S,A)=>(T[S]=f[A],T),{}):f),i.complete())}}))}})}},6792:(O,h,n)=>{n.d(h,{g:()=>s});var t=n(353),m=n(3489),u=n(9312);function s(a,i=t.P){const f=function r(a){return a instanceof Date&&!isNaN(+a)}(a)?+a-i.now():Math.abs(a);return _=>_.lift(new e(f,i))}class e{constructor(i,d){this.delay=i,this.scheduler=d}call(i,d){return d.subscribe(new l(i,this.delay,this.scheduler))}}class l extends m.L{constructor(i,d,f){super(i),this.delay=d,this.scheduler=f,this.queue=[],this.active=!1,this.errored=!1}static dispatch(i){const d=i.source,f=d.queue,_=i.scheduler,C=i.destination;for(;f.length>0&&f[0].time-_.now()<=0;)f.shift().notification.observe(C);if(f.length>0){const M=Math.max(0,f[0].time-_.now());this.schedule(i,M)}else this.unsubscribe(),d.active=!1}_schedule(i){this.active=!0,this.destination.add(i.schedule(l.dispatch,this.delay,{source:this,destination:this.destination,scheduler:i}))}scheduleNotification(i){if(!0===this.errored)return;const d=this.scheduler,f=new g(d.now()+this.delay,i);this.queue.push(f),!1===this.active&&this._schedule(d)}_next(i){this.scheduleNotification(u.P.createNext(i))}_error(i){this.errored=!0,this.queue=[],this.destination.error(i),this.unsubscribe()}_complete(){this.scheduleNotification(u.P.createComplete()),this.unsubscribe()}}class g{constructor(i,d){this.time=i,this.notification=d}}},8077:(O,h,n)=>{n.d(h,{u:()=>s});var t=n(2014),r=n(2821),m=n(7314),u=n(4843);function s(e,l){return arguments.length>=2?function(a){return(0,u.z)((0,t.R)(e,l),(0,r.h)(1),(0,m.d)(l))(a)}:function(a){return(0,u.z)((0,t.R)((i,d,f)=>e(i,d,f+1)),(0,r.h)(1))(a)}}},864:(O,h,n)=>{n.d(h,{q:()=>m});var t=n(8077);function r(u,s,e){return 0===e?[s]:(u.push(s),u)}function m(){return(0,t.u)(r,[])}},353:(O,h,n)=>{n.d(h,{P:()=>u});var t=n(6686);const u=new(n(2268).v)(t.o)}}]);