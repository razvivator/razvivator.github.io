"use strict";(self.webpackChunkrazvivator=self.webpackChunkrazvivator||[]).push([[907],{7316:(E,p,e)=>{e.d(p,{b:()=>a});var n=e(9808),t=e(5e3);let a=(()=>{class c{}return c.\u0275fac=function(u){return new(u||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[[n.ez]]}),c})()},1643:(E,p,e)=>{e.d(p,{F:()=>w});var f,g,D,n=e(655),t=e(5e3),a=e(8929),c=e(2868),d=e(7625),u=e(9771),i=e(294),l=e(1009),r=e(1834),_=e(9808),C=e(645);const b=["slidesContainer"],x=["carouselSlides"];function M(m,o){if(1&m){const s=t.EpF();t.TgZ(0,"div",8),t.NdJ("click",function(){return t.CHM(s),t.oxw().slideToLeft()}),t._uU(1," \u25b7 "),t.qZA()}if(2&m){const s=t.oxw();t.Udp("color",s.controlColor)}}function O(m,o){if(1&m){const s=t.EpF();t.TgZ(0,"slide-item-resolver",11),t.NdJ("loadedData",function(){return t.CHM(s),t.oxw(2).onLoadData()})("emittedData",function(v){return t.CHM(s),t.oxw(2).onEmitDataFromItem(v)}),t.qZA()}if(2&m){const s=t.oxw().$implicit,h=t.oxw();t.Q6J("component",h.itemComponent)("data",s)}}function I(m,o){if(1&m){const s=t.EpF();t.TgZ(0,"div",9),t.NdJ("click",function(v){const R=t.CHM(s).index;return t.oxw().onSlideClick(v,R)})("swipeleft",function(){return t.CHM(s),t.oxw().swipeToRight()})("swiperight",function(){return t.CHM(s),t.oxw().swipeToLeft()}),t.YNc(1,O,1,2,"slide-item-resolver",10),t.qZA()}if(2&m){const s=o.index,h=t.oxw();t.Udp("width",h.slideWidth),t.xp6(1),t.Q6J("ngIf",h.shouldSlideBeenShown(s))}}function T(m,o){if(1&m){const s=t.EpF();t.TgZ(0,"div",12),t.NdJ("click",function(){return t.CHM(s),t.oxw().slideToRight()}),t._uU(1," \u25b7 "),t.qZA()}if(2&m){const s=t.oxw();t.Udp("color",s.controlColor)}}const P=function(m,o,s){return{width:m,transform:o,transition:s}};class w{constructor(o,s){this.cdRef=o,this.ngZone=s,this.slides=[],this.slidesCount=1,this.height="400px",this.activeSlideIndex=0,this.showControls=!1,this.controlColor=u.r.GREEN,this.blockManualSwiping=!1,this.slideClick=new t.vpe,this.transitionEnd=new t.vpe,this.emitDataFromItem=new t.vpe,this.items=[],this.sliderContainerWidth=0,this.transition="none",this.isMobile=!1,this.canShift=!0,f.set(this,void 0),g.set(this,void 0),D.set(this,new a.xQ)}ngOnInit(){this.activeSlideIndex+=this.slidesCount,this._buildItems(),this._setSliderContainerWidth(),this.loadData(),this._observeWindowResize(),i.u.resize$.pipe((0,c.b)(()=>this._setSliderContainerWidth()),(0,d.R)((0,n.Q_)(this,D,"f"))).subscribe(),i.u.isMobile$.pipe((0,c.b)(o=>{this.isMobile=o,this.cdRef.markForCheck()}),(0,d.R)((0,n.Q_)(this,D,"f"))).subscribe()}ngOnDestroy(){(0,n.Q_)(this,D,"f").next(),(0,n.Q_)(this,D,"f").unsubscribe()}onLoadData(){this.canShift=!0}loadData(o=this.getDefaultIndex()){(0,n.YH)(this,g,this.activeSlideIndex,"f"),this.cdRef.detectChanges()}getDefaultIndex(){return 0===(0,n.Q_)(this,f,"f")?this.activeSlideIndex+this.slidesCount-1:this.activeSlideIndex}doSlide(){this.canShift=!1,this.transition="0.4s ease-in-out"}get slidesWidth(){return`${this.sliderContainerWidth*this.items.length}${r.N.PX}`}get slideWidth(){return`${this.sliderContainerWidth/this.slidesCount}${r.N.PX}`}get shift(){return`translate3d(-${this.activeSlideIndex*this.sliderContainerWidth/this.slidesCount}${r.N.PX}, 0${r.N.PX}, 0${r.N.PX})`}shouldSlideBeenShown(o){return(0,n.Q_)(this,g,"f")===o}swipeToRight(){this.blockManualSwiping||this.slideToRight()}swipeToLeft(){this.blockManualSwiping||this.slideToLeft()}slideToRight(){this.canShift&&((0,n.YH)(this,f,0,"f"),this.doSlide(),this.activeSlideIndex++,this.cdRef.detectChanges())}get currentItem(){return this.items[this.activeSlideIndex]}slideToLeft(){this.canShift&&((0,n.YH)(this,f,1,"f"),this.doSlide(),this.activeSlideIndex--,this.cdRef.detectChanges())}onTransitionEnd(){this.transition="none",setTimeout(()=>{if(this.activeSlideIndex===this.slidesCount-1){this.activeSlideIndex=this.items.length-(this.slidesCount+1);for(let o=this.activeSlideIndex+this.slidesCount;o>=this.activeSlideIndex;o--)this.loadData(o)}else this.activeSlideIndex===this.items.length-this.slidesCount?(this.activeSlideIndex=this.slidesCount,this.loadData()):this.loadData();this.cdRef.detectChanges(),this.transitionEnd.emit()},0)}onSlideClick(o,s){o.stopPropagation(),this.slideClick.emit(s-this.slidesCount)}_buildItems(){for(let o=this.slidesCount;o>0;o--)this.items.push(this.slides[this.slides.length-o]);Array.prototype.push.apply(this.items,this.slides);for(let o=0;o<this.slidesCount;o++)this.items.push(this.slides[o])}onEmitDataFromItem(o){this.emitDataFromItem.emit(o)}_setSliderContainerWidth(){this.sliderContainerWidth=this.slidesContainerEl.nativeElement.offsetWidth,this.cdRef.markForCheck()}_observeWindowResize(){i.u.observeWindowResize().pipe((0,d.R)((0,n.Q_)(this,D,"f"))).subscribe()}}f=new WeakMap,g=new WeakMap,D=new WeakMap,w.\u0275fac=function(o){return new(o||w)(t.Y36(t.sBO),t.Y36(t.R0b))},w.\u0275cmp=t.Xpm({type:w,selectors:[["carousel"]],viewQuery:function(o,s){if(1&o&&(t.Gf(b,7),t.Gf(x,7)),2&o){let h;t.iGM(h=t.CRH())&&(s.slidesContainerEl=h.first),t.iGM(h=t.CRH())&&(s.carouselSlidesEl=h.first)}},inputs:{slides:"slides",itemComponent:"itemComponent",slidesCount:"slidesCount",height:"height",activeSlideIndex:"activeSlideIndex",showControls:"showControls",controlColor:"controlColor",blockManualSwiping:"blockManualSwiping"},outputs:{slideClick:"slideClick",transitionEnd:"transitionEnd",emitDataFromItem:"emitDataFromItem"},decls:8,vars:10,consts:[[1,"carousel"],["class","carousel__control carousel__control--left",3,"color","click",4,"ngIf"],[1,"carousel__slides-container"],["slidesContainer",""],[1,"carousel__slides",3,"ngStyle","transitionend"],["carouselSlides",""],["class","carousel__slide",3,"width","click","swipeleft","swiperight",4,"ngFor","ngForOf"],["class","carousel__control carousel__control--right",3,"color","click",4,"ngIf"],[1,"carousel__control","carousel__control--left",3,"click"],[1,"carousel__slide",3,"click","swipeleft","swiperight"],[3,"component","data","loadedData","emittedData",4,"ngIf"],[3,"component","data","loadedData","emittedData"],[1,"carousel__control","carousel__control--right",3,"click"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0),t.YNc(1,M,2,2,"div",1),t.TgZ(2,"div",2,3),t.TgZ(4,"div",4,5),t.NdJ("transitionend",function(){return s.onTransitionEnd()}),t.YNc(6,I,2,3,"div",6),t.qZA(),t.qZA(),t.YNc(7,T,2,2,"div",7),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngIf",s.showControls&&!s.isMobile),t.xp6(1),t.Udp("height",s.height),t.xp6(2),t.Q6J("ngStyle",t.kEZ(6,P,s.slidesWidth,s.shift,s.transition)),t.xp6(2),t.Q6J("ngForOf",s.items),t.xp6(1),t.Q6J("ngIf",s.showControls&&!s.isMobile))},directives:[_.O5,_.PC,_.sg,C.l],styles:[".carousel[_ngcontent-%COMP%]{display:flex;width:100%;align-items:center;justify-content:space-between;position:relative}.carousel__control[_ngcontent-%COMP%]{display:grid;place-items:center;justify-content:center;width:4rem;height:100%;position:absolute;top:0;font-size:4rem;font-weight:700;cursor:pointer;z-index:1}.carousel__control--right[_ngcontent-%COMP%]{right:0}.carousel__control--left[_ngcontent-%COMP%]{left:0;transform:rotateY(180deg)}.carousel__slides[_ngcontent-%COMP%]{display:flex;height:100%;align-items:center}.carousel__slides-container[_ngcontent-%COMP%]{width:100%;overflow:hidden}.carousel__slide[_ngcontent-%COMP%]{height:100%;float:left}"],changeDetection:0}),(0,n.gn)([l.A],w.prototype,"_observeWindowResize",null)},645:(E,p,e)=>{e.d(p,{l:()=>r});var u,i,n=e(655),t=e(5e3),a=e(8929),c=e(2868),d=e(7625);const l=["content"];class r{constructor(C){this._resolver=C,this.loadedData=new t.vpe,this.emittedData=new t.vpe,u.set(this,void 0),i.set(this,new a.xQ)}ngOnInit(){const C=this._resolver.resolveComponentFactory(this.component);(0,n.YH)(this,u,this.content.createComponent(C),"f"),(0,n.Q_)(this,u,"f").instance.data=this.data,(0,n.Q_)(this,u,"f").instance.loadedData.pipe((0,c.b)(f=>this.loadedData.emit(f)),(0,d.R)((0,n.Q_)(this,i,"f"))).subscribe(),(0,n.Q_)(this,u,"f").instance.emittedData.pipe((0,c.b)(f=>this.emittedData.emit(f)),(0,d.R)((0,n.Q_)(this,i,"f"))).subscribe()}ngOnDestroy(){(0,n.Q_)(this,i,"f").next(),(0,n.Q_)(this,i,"f").unsubscribe(),(0,n.Q_)(this,u,"f").destroy()}}u=new WeakMap,i=new WeakMap,r.\u0275fac=function(C){return new(C||r)(t.Y36(t._Vd))},r.\u0275cmp=t.Xpm({type:r,selectors:[["slide-item-resolver"]],viewQuery:function(C,f){if(1&C&&t.Gf(l,7,t.s_b),2&C){let g;t.iGM(g=t.CRH())&&(f.content=g.first)}},inputs:{component:"component",data:"data"},outputs:{loadedData:"loadedData",emittedData:"emittedData"},decls:2,vars:0,consts:[["content",""]],template:function(C,f){1&C&&t._UZ(0,"template",null,0)},styles:["[_nghost-%COMP%]{height:100%}"]})},8004:(E,p,e)=>{e.d(p,{U:()=>t});var n=e(5e3);let t=(()=>{class a{constructor(){this.loadedData=new n.vpe,this.emittedData=new n.vpe}onDataLoad(d){this.loadedData.emit(d)}emitData(d){this.emittedData.emit(d)}}return a.\u0275fac=function(d){return new(d||a)},a.\u0275dir=n.lG2({type:a,inputs:{data:"data"},outputs:{loadedData:"loadedData",emittedData:"emittedData"}}),a})()},550:(E,p,e)=>{e.d(p,{r:()=>u});var n=e(7112),t=e(9771),a=e(5e3),c=e(9808);function d(i,l){if(1&i&&(a.O4$(),a.TgZ(0,"svg",2),a._UZ(1,"path",3),a.qZA()),2&i){const r=l.$implicit,_=a.oxw();a.Udp("transform",r?"":"rotate(180deg)"),a.Q6J("ngClass",!0===r?_.animations.BOUNCE_IN_FWD:_.animations.SHAKE_HORIZONTAL),a.uIk("viewBox","0 0 100 100"),a.xp6(1),a.uIk("fill",!0===r?_.colors.GREEN:_.colors.PINK)}}let u=(()=>{class i{constructor(){this.answers=[],this.colors=t.r,this.animations=n.C}}return i.\u0275fac=function(r){return new(r||i)},i.\u0275cmp=a.Xpm({type:i,selectors:[["answers-bar"]],inputs:{answers:"answers"},decls:2,vars:1,consts:[[1,"container"],["class","thumb",3,"ngClass","transform",4,"ngFor","ngForOf"],[1,"thumb",3,"ngClass"],["d","M57.9,1.8c0.7,0,1.4,0,2.1,0c0.1,0.1,0.3,0.1,0.4,0.2c4,0.9,6.8,3.2,8.1,7.1c1.7,5,1.3,10-0.8,14.8  c-1.4,3.3-3.1,6.6-4.6,9.9c-0.7,1.6-1.1,3.3-0.9,5.1c0.2,1.1,0.2,1.1,1.3,1.1c6.8-0.2,13.5-0.3,20.3,0.2c1.7,0.1,3.4,0.1,4.9,1  c2.7,1.7,4.4,4.3,5.6,7.3c0.6,1.5,0.4,2.7-0.6,3.9c-0.5,0.6-0.9,1.2-1.3,1.8c-1,1.2-1.1,2.4-0.3,3.8c0.7,1.1,1.3,2.2,1.9,3.3  c0.9,1.6,0.9,2.4-0.3,3.9c-0.7,0.9-1.5,1.8-2.3,2.8c-0.8,0.9-1,1.9-0.6,3.1c0.5,1.4,1,2.7,1.5,4c0.6,1.5,0.4,2.8-0.6,4  c-1.1,1.3-2.3,2.4-3.5,3.7c-0.7,0.8-1.1,1.7-1.1,2.7c0,1,0.1,2,0,3c0,0.6-0.2,1.2-0.5,1.7c-1,1.8-2.4,3.1-4,4.3  c-1.5,1.2-3.1,2.2-5.1,2.4c-2.4,0.3-4.8,0.6-7.2,0.6c-5.8,0-11.6-0.3-17.4-0.5c-2.2-0.1-4.5-0.2-6.7-0.6c-6.4-1.1-12.8-2.4-19.2-3.5  c-0.7-0.1-0.8-0.4-0.8-1c0-12.5,0-25,0-37.5c0-0.3,0-0.6,0-0.9c0.4,0,0.7,0,1.1,0c1.7,0.2,3.2-0.5,4.3-1.6c1.3-1.3,2.5-2.7,3.5-4.1  c2.9-4.2,5.1-8.9,6.9-13.7c1.2-3.1,3.1-5.5,5.7-7.5c1.4-1.1,2.7-2.3,3.8-3.7c2.2-2.9,3.1-6.4,3.7-9.9c0.5-2.9,0.8-5.9,1-8.9  C56.5,2.8,56.9,2.1,57.9,1.8z M3.5,92.4c0.8,2.3,2.4,3.1,4.8,3.1c3.4-0.1,6.7,0,10.1,0c0.4,0,0.9,0,1.3-0.1c1.9-0.5,3-2,3-4.2  c0-6,0-12,0-18c0-5.8,0-11.5,0-17.3c0-2.8-1.6-4.4-4.4-4.4c-3.5,0-7,0-10.5,0c-1.4,0-2.7,0.4-3.6,1.6c-0.3,0.4-0.5,0.9-0.7,1.4  C3.5,67.1,3.5,79.7,3.5,92.4z"]],template:function(r,_){1&r&&(a.TgZ(0,"div",0),a.YNc(1,d,2,5,"svg",1),a.qZA()),2&r&&(a.xp6(1),a.Q6J("ngForOf",_.answers))},directives:[c.sg,c.mk],styles:[".bounce-in-fwd[_ngcontent-%COMP%]{-webkit-animation:bounce-in-fwd 1.1s both;animation:bounce-in-fwd 1.1s both}@-webkit-keyframes bounce-in-fwd{0%{transform:scale(0);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}38%{transform:scale(1);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1}55%{transform:scale(.7);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}72%{transform:scale(1);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}81%{transform:scale(.84);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}89%{transform:scale(1);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}95%{transform:scale(.95);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}to{transform:scale(1);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}}@keyframes bounce-in-fwd{0%{transform:scale(0);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}38%{transform:scale(1);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1}55%{transform:scale(.7);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}72%{transform:scale(1);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}81%{transform:scale(.84);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}89%{transform:scale(1);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}95%{transform:scale(.95);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}to{transform:scale(1);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}}.shake-horizontal[_ngcontent-%COMP%]{-webkit-animation:shake-horizontal .8s cubic-bezier(.455,.03,.515,.955) both;animation:shake-horizontal .8s cubic-bezier(.455,.03,.515,.955) both}@-webkit-keyframes shake-horizontal{0%,to{transform:translate(0)}10%,30%,50%,70%{transform:translate(-10px)}20%,40%,60%{transform:translate(10px)}80%{transform:translate(8px)}90%{transform:translate(-8px)}}@keyframes shake-horizontal{0%,to{transform:translate(0)}10%,30%,50%,70%{transform:translate(-10px)}20%,40%,60%{transform:translate(10px)}80%{transform:translate(8px)}90%{transform:translate(-8px)}}.container[_ngcontent-%COMP%]{display:flex;height:100px;align-items:center;justify-content:center}.thumb[_ngcontent-%COMP%]{width:100%;max-width:100px;margin:0 1rem}"]}),i})()},7112:(E,p,e)=>{e.d(p,{C:()=>n});var n=(()=>{return(t=n||(n={})).SHAKE_HORIZONTAL="shake-horizontal",t.SLIDE_IN_FWD_CENTER="slide-in-fwd-center",t.PULSATE_FWD="pulsate-fwd",t.ROTATE_IN_CENTER="rotate-in-center",t.ROTATE_OUT_CENTER="rotate-out-center",t.BOUNCE_IN_FWD="bounce-in-fwd",n;var t})()},3162:(E,p,e)=>{e.d(p,{M:()=>n});const n=[{path:"",loadChildren:()=>Promise.resolve().then(e.bind(e,395)).then(t=>t.GameStepsModule)}]},1692:(E,p,e)=>{e.d(p,{j:()=>t});var n=e(3489);function t(u,i=null){return function(r){return r.lift(new a(u,i))}}class a{constructor(i,l){this.bufferSize=i,this.startBufferEvery=l,this.subscriberClass=l&&i!==l?d:c}call(i,l){return l.subscribe(new this.subscriberClass(i,this.bufferSize,this.startBufferEvery))}}class c extends n.L{constructor(i,l){super(i),this.bufferSize=l,this.buffer=[]}_next(i){const l=this.buffer;l.push(i),l.length==this.bufferSize&&(this.destination.next(l),this.buffer=[])}_complete(){const i=this.buffer;i.length>0&&this.destination.next(i),super._complete()}}class d extends n.L{constructor(i,l,r){super(i),this.bufferSize=l,this.startBufferEvery=r,this.buffers=[],this.count=0}_next(i){const{bufferSize:l,startBufferEvery:r,buffers:_,count:C}=this;this.count++,C%r==0&&_.push([]);for(let f=_.length;f--;){const g=_[f];g.push(i),g.length===l&&(_.splice(f,1),this.destination.next(g))}}_complete(){const{buffers:i,destination:l}=this;for(;i.length>0;){let r=i.shift();r.length>0&&l.next(r)}super._complete()}}}}]);