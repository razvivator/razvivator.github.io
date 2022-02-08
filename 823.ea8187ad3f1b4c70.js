"use strict";(self.webpackChunkrazvivator=self.webpackChunkrazvivator||[]).push([[823],{6330:(A,p,e)=>{e.d(p,{a:()=>u});var l=e(9771);const u=[{id:"themes",color:l.r.BLUE},{id:"memory",color:l.r.GREEN},{id:"attention",color:l.r.ORANGE},{id:"intellect",color:l.r.PINK}]},4106:(A,p,e)=>{e.d(p,{f:()=>a});var l=e(9808),u=e(933),r=e(6007),c=e(1233),_=e(5e3);let a=(()=>{class h{static forChild(s){return{ngModule:h,providers:[{provide:r.n,useValue:s.agesConfig},{provide:r.O,useValue:s.stepsToReset}]}}}return h.\u0275fac=function(s){return new(s||h)},h.\u0275mod=_.oAB({type:h}),h.\u0275inj=_.cJS({imports:[[l.ez,c.D,u.q]]}),h})()},8450:(A,p,e)=>{e.d(p,{N:()=>P});var l=e(6849),u=e(9771);const r={0:u.r.PINK,1:u.r.ORANGE,2:u.r.GREEN},c={0:"3 - 4",1:"4 - 5",2:"5 - 6"};class _{constructor(v,n){this.id=v;const E=c[this.id];this.title=`${E} ${n[E]}`,this.color=r[this.id]}}var a=e(5713),h=e(6007),t=e(4850),s=e(5e3),C=e(2273),M=e(9808);let o=(()=>{class m{static _getStyleProp(n){return`style.${n}`}ngOnInit(){this._setDefaultColors()}onMouseEnter(){this.color=this.borderColor=u.r.WHITE,this.bgColor=this.age.color,this.boxShadow=`0 0 16px 3px ${u.r.LIGHT_GREY}`}onMouseLeave(){this._setDefaultColors()}_setDefaultColors(){this.color=this.borderColor=this.age.color,this.bgColor=u.r.WHITE,this.boxShadow="none"}}return m.\u0275fac=function(n){return new(n||m)},m.\u0275dir=s.lG2({type:m,selectors:[["","ageItemColorize",""]],hostVars:8,hostBindings:function(n,E){1&n&&s.NdJ("mouseenter",function(){return E.onMouseEnter()})("mouseleave",function(){return E.onMouseLeave()}),2&n&&s.Udp("color",E.color)("border-color",E.borderColor)("background-color",E.bgColor)("box-shadow",E.boxShadow)},inputs:{age:["ageItemColorize","age"]}}),m})();var i=e(829);function d(m,v){if(1&m){const n=s.EpF();s.TgZ(0,"div",4),s.NdJ("click",function(){const f=s.CHM(n).$implicit;return s.oxw(2).chooseAge(f)}),s._uU(1),s.qZA()}if(2&m){const n=v.$implicit;s.Q6J("ageItemColorize",n),s.xp6(1),s.hij(" ",n.title," ")}}function g(m,v){if(1&m&&(s.TgZ(0,"div",1),s.TgZ(1,"div",2),s._uU(2),s.ALo(3,"capitalizeFirstLetter"),s.qZA(),s.YNc(4,d,2,2,"div",3),s.qZA()),2&m){const n=v.ngIf;s.xp6(2),s.hij("",s.lcZ(3,2,n.title),"?"),s.xp6(2),s.Q6J("ngForOf",n.ages)}}let P=(()=>{class m{constructor(n,E,O){this._agesConfig=n,this._stepsToReset=E,this._translationsService=O,this.content$=this._translationsService.loadTranslation("ages").pipe((0,t.U)(f=>({title:f.title,ages:Array.from(this._agesConfig.keys()).map(D=>new _(D,f))})))}ngOnInit(){a.k.setAgesConfig(this._agesConfig),this._stepsToReset&&l.A.resetSteps(this._stepsToReset)}chooseAge(n){a.k.setAgeId(n.id),l.A.updateStepInfo({title:n.title,style:{color:n.color}}),l.A.goToNext()}}return m.\u0275fac=function(n){return new(n||m)(s.Y36(h.n),s.Y36(h.O),s.Y36(C.f))},m.\u0275cmp=s.Xpm({type:m,selectors:[["age-choice"]],decls:2,vars:3,consts:[["class","ages-choice",4,"ngIf"],[1,"ages-choice"],[1,"ages-choice__title"],["class","ages-choice__age",3,"ageItemColorize","click",4,"ngFor","ngForOf"],[1,"ages-choice__age",3,"ageItemColorize","click"]],template:function(n,E){1&n&&(s.YNc(0,g,5,4,"div",0),s.ALo(1,"async")),2&n&&s.Q6J("ngIf",s.lcZ(1,1,E.content$))},directives:[M.O5,M.sg,o],pipes:[M.Ov,i.G],styles:[".ages-choice__title[_ngcontent-%COMP%]{margin-bottom:2rem;text-align:center;font-size:3rem;color:#70b}.ages-choice__age[_ngcontent-%COMP%]{width:100%;max-width:500px;margin:2rem auto;padding:.5rem;text-align:center;font-size:2rem;font-weight:bolder;border:2px solid;border-radius:50%;cursor:pointer}"],changeDetection:0}),m})()},6007:(A,p,e)=>{e.d(p,{n:()=>u,O:()=>r});var l=e(5e3);const u=new l.OlP("AGES_CONFIG_TOKEN"),r=new l.OlP("STEPS_TO_RESET_TOKEN")},9254:(A,p,e)=>{e.d(p,{d:()=>h});var l=e(9808),u=e(2188),r=e(4729),c=e(8889),_=e(1834),a=e(5e3);let h=(()=>{class t extends c.l{constructor(C,M,o,i){super(o,i),this._elementRef=C,this._renderer=M,this.rowsAmount=1,this.columnsAmount=1,this.itemSize=300,this.coeff=1}ngOnInit(){super.ngOnInit(),this._renderer.setStyle(this._elementRef.nativeElement,u.L.DISPLAY,"grid"),this._renderer.setStyle(this._elementRef.nativeElement,u.L.GRID_GAP,`0.5${_.N.REM}`),this._renderer.setStyle(this._elementRef.nativeElement,u.L.JUSTIFY_CONTENT,"center")}setGameSizes(){const C=Math.min(this.itemSize,r.B.getGridContainerMinDimension()/Math.max(this.rowsAmount,this.columnsAmount)-12);this._renderer.setStyle(this._elementRef.nativeElement,u.L.GRID_TEMPLATE_COLUMNS,`repeat(${this.columnsAmount}, ${C}${_.N.PX})`),this._renderer.setStyle(this._elementRef.nativeElement,u.L.GRID_TEMPLATE_ROWS,`repeat(${this.rowsAmount}, ${C*this.coeff}${_.N.PX})`)}}return t.\u0275fac=function(C){return new(C||t)(a.Y36(a.SBq),a.Y36(a.Qsj),a.Y36(a.R0b),a.Y36(l.K0))},t.\u0275dir=a.lG2({type:t,selectors:[["","gridSizer",""]],inputs:{rowsAmount:"rowsAmount",columnsAmount:"columnsAmount",itemSize:"itemSize",coeff:"coeff"},features:[a.qOj]}),t})()},9513:(A,p,e)=>{e.d(p,{n:()=>h});var a,l=e(655),u=e(8744),r=e(2986),c=e(2868),_=e(5e3);class h{constructor(s,C){this._elementRef=s,this._renderer=C,a.set(this,null)}ngOnInit(){if("IMG"!==this._elementRef.nativeElement.tagName)throw new Error("Element should be an image");(0,l.YH)(this,a,u.O.getImage(this.src).pipe((0,r.q)(1),(0,c.b)(s=>this._renderer.setAttribute(this._elementRef.nativeElement,"src",s.src))).subscribe(),"f")}ngOnDestroy(){var s;null===(s=(0,l.Q_)(this,a,"f"))||void 0===s||s.unsubscribe()}}a=new WeakMap,h.\u0275fac=function(s){return new(s||h)(_.Y36(_.SBq),_.Y36(_.Qsj))},h.\u0275dir=_.lG2({type:h,selectors:[["","preloadImg",""]],inputs:{src:["preloadImg","src"]}})},9117:(A,p,e)=>{e.d(p,{W:()=>u});var l=e(2273);class u{constructor(c){this.id=null,this.title="",this.color="",this.route="",this.id=c.id,this.title=l.f.getTranslation(c.id),this.color=c.color,this.route=`${this.id}`}}},5605:(A,p,e)=>{e.d(p,{$:()=>l});class l{static shuffle(r){if(r.length<1)return console.warn("Empty array!"),r;const c=[...r];for(;!l._isArrShuffled(r,c);)c.sort(()=>Math.random()-.5);return c}static _isArrShuffled(r,c){let _=!1;for(const[a,h]of r.entries())if(h!==c[a]){_=!0;break}return _}static getRandItems(r,c=r.length){if(c>r.length)throw new Error(`maxArrLength ${c} should be equal or less than items length ${r.length}`);const _=l.shuffle(r);return _.length=c,_}static getDoubledRandItems(r,c=r.length){const _=l.getRandItems(r,c);return l.shuffle([..._,..._])}static uniq(r){return Array.from(new Set(r))}static getSequence(r,c=0){const _=[];for(let a=c;a<r;a++)_.push(a);return _}static groupArrByLength(r,c){const _=new Map;let a=0,h=0,t=0;for(;t<r.length;)h=a*c,t=h+c,_.set(a,r.slice(h,t)),a++;return _}static getRndInteger(r,c){return Math.floor(Math.random()*(c-r))+r}static getRndArrElem(r){return r[l.getRndInteger(0,r.length)]}}},4636:(A,p,e)=>{e.d(p,{Z:()=>v});var l=e(9424),u=e(4375),r=e(9771),c=e(6849),_=e(8397),a=e(2868),h=e(2273),t=e(5e3),s=e(2205),C=e(5316),M=e(5610),o=e(965),i=e(9808),d=e(9513),g=e(8550),P=e(829);function m(n,E){if(1&n){const O=t.EpF();t.TgZ(0,"figure",5),t.NdJ("click",function(D){const I=t.CHM(O).$implicit;return t.oxw().selectIcon(D,I)}),t._UZ(1,"img",6),t.TgZ(2,"figcaption"),t.TgZ(3,"div",7),t._uU(4),t.ALo(5,"capitalizeFirstLetter"),t.qZA(),t.qZA(),t.qZA()}if(2&n){const O=E.$implicit;t.xp6(1),t.Q6J("preloadImg",O.icon),t.xp6(3),t.Oqu(t.lcZ(5,2,O.title))}}let v=(()=>{class n extends u.Q{constructor(O,f){super(f),this._themesService=O,this.cdRef=f,this.category=l.G.getCategoryById("themes"),this.title=h.f.getTranslation("choose_theme"),this.searchPlaceHolder=`${h.f.getTranslation("search_theme")}...`,this.list$=null}selectIcon(O,f){O.stopPropagation(),_.J.setChosenTheme(f),c.A.updateStepInfo({title:f.title,style:{color:r.r.BLUE}}),c.A.goToNext()}buildList(){this.list$=this._themesService.getThemes().pipe((0,a.b)(()=>this.showList()))}}return n.\u0275fac=function(O){return new(O||n)(t.Y36(s.O),t.Y36(t.sBO))},n.\u0275cmp=t.Xpm({type:n,selectors:[["theme-choice"]],features:[t.qOj],decls:7,vars:10,consts:[[3,"category","title"],[3,"placeHolder","searchStrInput"],[3,"loaded"],[1,"list"],["class","list-item",3,"click",4,"ngFor","ngForOf"],[1,"list-item",3,"click"],[1,"list-item__img",3,"preloadImg"],[1,"list-item__title"]],template:function(O,f){1&O&&(t._UZ(0,"category-title",0),t.TgZ(1,"search-input",1),t.NdJ("searchStrInput",function(T){return f.searchStr=T}),t.qZA(),t.TgZ(2,"spinner-wrapper",2),t.TgZ(3,"div",3),t.YNc(4,m,6,4,"figure",4),t.ALo(5,"filterIcons"),t.ALo(6,"async"),t.qZA(),t.qZA()),2&O&&(t.Q6J("category",f.category)("title",f.title),t.xp6(1),t.Q6J("placeHolder",f.searchPlaceHolder),t.xp6(1),t.Q6J("loaded",f.loaded),t.xp6(2),t.Q6J("ngForOf",t.xi3(5,5,t.lcZ(6,8,f.list$),f.searchStr)))},directives:[C.a,M.J,o.C,i.sg,d.n],pipes:[g.V,i.Ov,P.G],styles:[".list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));grid-gap:3rem}.list-item[_ngcontent-%COMP%]{padding:10px;border-radius:30px 0;box-shadow:0 0 10px 18px #ffffffbf;background-color:#ffffffbf;border:solid 2px rgba(158,158,158,.15);cursor:pointer}.list-item[_ngcontent-%COMP%]:hover{background-color:#ffffffe6;border-color:#9e9e9e4d}.list-item__img[_ngcontent-%COMP%]{display:block;margin:auto}.list-item__title[_ngcontent-%COMP%]{font-size:1.5rem;text-align:center}"],changeDetection:0}),n})()},4002:(A,p,e)=>{e.d(p,{v:()=>_});var l=e(3489),u=e(2654),r=e(6498),c=e(8929);function _(M,o,i,d){return g=>g.lift(new a(M,o,i,d))}class a{constructor(o,i,d,g){this.keySelector=o,this.elementSelector=i,this.durationSelector=d,this.subjectSelector=g}call(o,i){return i.subscribe(new h(o,this.keySelector,this.elementSelector,this.durationSelector,this.subjectSelector))}}class h extends l.L{constructor(o,i,d,g,P){super(o),this.keySelector=i,this.elementSelector=d,this.durationSelector=g,this.subjectSelector=P,this.groups=null,this.attemptedToUnsubscribe=!1,this.count=0}_next(o){let i;try{i=this.keySelector(o)}catch(d){return void this.error(d)}this._group(o,i)}_group(o,i){let d=this.groups;d||(d=this.groups=new Map);let P,g=d.get(i);if(this.elementSelector)try{P=this.elementSelector(o)}catch(m){this.error(m)}else P=o;if(!g){g=this.subjectSelector?this.subjectSelector():new c.xQ,d.set(i,g);const m=new s(i,g,this);if(this.destination.next(m),this.durationSelector){let v;try{v=this.durationSelector(new s(i,g))}catch(n){return void this.error(n)}this.add(v.subscribe(new t(i,g,this)))}}g.closed||g.next(P)}_error(o){const i=this.groups;i&&(i.forEach((d,g)=>{d.error(o)}),i.clear()),this.destination.error(o)}_complete(){const o=this.groups;o&&(o.forEach((i,d)=>{i.complete()}),o.clear()),this.destination.complete()}removeGroup(o){this.groups.delete(o)}unsubscribe(){this.closed||(this.attemptedToUnsubscribe=!0,0===this.count&&super.unsubscribe())}}class t extends l.L{constructor(o,i,d){super(i),this.key=o,this.group=i,this.parent=d}_next(o){this.complete()}_unsubscribe(){const{parent:o,key:i}=this;this.key=this.parent=null,o&&o.removeGroup(i)}}class s extends r.y{constructor(o,i,d){super(),this.key=o,this.groupSubject=i,this.refCountSubscription=d}_subscribe(o){const i=new u.w,{refCountSubscription:d,groupSubject:g}=this;return d&&!d.closed&&i.add(new C(d)),i.add(g.subscribe(o)),i}}class C extends u.w{constructor(o){super(),this.parent=o,o.count++}unsubscribe(){const o=this.parent;!o.closed&&!this.closed&&(super.unsubscribe(),o.count-=1,0===o.count&&o.attemptedToUnsubscribe&&o.unsubscribe())}}}}]);