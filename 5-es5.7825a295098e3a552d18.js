function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],i=!0,a=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(c){a=!0,r=c}finally{try{i||null==s.return||s.return()}finally{if(a)throw r}}return n}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function _createSuper(e){return function(){var t,n=_getPrototypeOf(e);if(_isNativeReflectConstruct()){var i=_getPrototypeOf(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Vwae:function(e,t,n){"use strict";n.r(t),n.d(t,"TreinoModule",(function(){return we}));var i,a,r=n("ofXK"),o=n("tyNb"),s=n("IzEk"),c=n("fXoL"),u=n("AytR"),l=n("tk/3"),d=((i=function(){function e(t){_classCallCheck(this,e),this.http=t,this.apiURL=u.a.api+"/api/macrociclos/"}return _createClass(e,[{key:"getList",value:function(){return this.http.get(this.apiURL)}}]),e}()).\u0275fac=function(e){return new(e||i)(c.Yb(l.b))},i.\u0275prov=c.Kb({token:i,factory:i.\u0275fac,providedIn:"root"}),i),h=n("f0Cb"),p=n("bTqV"),f=function(e){return{"sessao-finalizado":e}},y=((a=function(){function e(t){_classCallCheck(this,e),this.router=t}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"navigate",value:function(e){this.router.navigate(["treino","detalhe",e.id])}}]),e}()).\u0275fac=function(e){return new(e||a)(c.Ob(o.b))},a.\u0275cmp=c.Ib({type:a,selectors:[["app-sessao-item"]],inputs:{sessao:"sessao"},decls:3,vars:4,consts:[["mat-raised-button","","color","accent",1,"card-sessao","mt-4","p-4",3,"ngClass","click"],[1,"m-0"]],template:function(e,t){1&e&&(c.Ub(0,"button",0),c.cc("click",(function(){return t.navigate(t.sessao)})),c.Ub(1,"h3",1),c.Bc(2),c.Tb(),c.Tb()),2&e&&(c.lc("ngClass",c.nc(2,f,t.sessao.visualizada)),c.Cb(2),c.Cc(t.sessao.titulo))},directives:[p.a,r.i],styles:[".card-sessao[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n\n    .sessao-finalizado[_ngcontent-%COMP%] {\n      background-color: #ff57226b;\n    }"]}),a);function b(e,t){if(1&e&&(c.Ub(0,"div",4),c.Pb(1,"app-sessao-item",5),c.Tb()),2&e){var n=t.$implicit;c.Cb(1),c.lc("sessao",n)}}var v,g=((v=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||v)},v.\u0275cmp=c.Ib({type:v,selectors:[["app-microciclo-item"]],inputs:{microciclo:"microciclo"},decls:6,vars:2,consts:[[1,"mb-4","mt-2"],[1,"text-blue","text-700","mb-1"],[1,"row"],["class","col-12",4,"ngFor","ngForOf"],[1,"col-12"],[3,"sessao"]],template:function(e,t){1&e&&(c.Ub(0,"div",0),c.Ub(1,"h1",1),c.Bc(2),c.Tb(),c.Pb(3,"mat-divider"),c.Ub(4,"div",2),c.zc(5,b,2,1,"div",3),c.Tb(),c.Tb()),2&e&&(c.Cb(2),c.Dc(" ",t.microciclo.titulo," "),c.Cb(3),c.lc("ngForOf",t.microciclo.sessoes))},directives:[h.a,r.j,y],styles:[""]}),v);function _(e,t){if(1&e&&c.Pb(0,"app-microciclo-item",3),2&e){var n=c.gc().$implicit;c.lc("microciclo",n)}}function m(e,t){if(1&e&&(c.Ub(0,"div",1),c.zc(1,_,1,1,"app-microciclo-item",2),c.Tb()),2&e){var n=t.$implicit;c.Cb(1),c.lc("ngIf",(null==n.sessoes?null:n.sessoes.length)>0)}}var k,C,w,S=((w=function(){function e(t){_classCallCheck(this,e),this.treinoService=t}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.treinoService.getList().pipe(Object(s.a)(1)).subscribe((function(t){e.microciclos=t[0].mesociclos[0].microciclos}))}}]),e}()).\u0275fac=function(e){return new(e||w)(c.Ob(d))},w.\u0275cmp=c.Ib({type:w,selectors:[["app-treino-page"]],decls:1,vars:1,consts:[["class","row",4,"ngFor","ngForOf"],[1,"row"],["class","col-12",3,"microciclo",4,"ngIf"],[1,"col-12",3,"microciclo"]],template:function(e,t){1&e&&c.zc(0,m,2,1,"div",0),2&e&&c.lc("ngForOf",t.microciclos)},directives:[r.j,r.k,g],styles:[""]}),w),x=((C=function(){function e(t){_classCallCheck(this,e),this.http=t,this.apiURL=u.a.api+"/api/sessoes/"}return _createClass(e,[{key:"getById",value:function(e){return this.http.get(this.apiURL+"".concat(e,"/"))}}]),e}()).\u0275fac=function(e){return new(e||C)(c.Yb(l.b))},C.\u0275prov=c.Kb({token:C,factory:C.\u0275fac,providedIn:"root"}),C),O=((k=function(){function e(t){_classCallCheck(this,e),this.http=t,this.apiURL=u.a.api+"/api/exercicios/"}return _createClass(e,[{key:"setVisualizado",value:function(e){return this.http.patch(this.apiURL+"".concat(e,"/visualizar"),{})}}]),e}()).\u0275fac=function(e){return new(e||k)(c.Yb(l.b))},k.\u0275prov=c.Kb({token:k,factory:k.\u0275fac,providedIn:"root"}),k),P=n("dNgK"),I=n("7EHt"),T=n("2Vo4"),j=n("XNiG"),A=n("LRne"),R=n("itXk"),z=n("HDdC"),V=n("mCNh"),L=n("VRyK"),U=n("JX91"),B=n("1G5W"),Q=n("oB13"),E=n("5+tZ"),M=n("l7GE"),F=n("ZUHj");function W(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){var n;return"function"==typeof t[t.length-1]&&(n=t.pop()),e.lift(new Y(t,n))}}var N,Y=function(){function e(t,n){_classCallCheck(this,e),this.observables=t,this.project=n}return _createClass(e,[{key:"call",value:function(e,t){return t.subscribe(new Z(e,this.observables,this.project))}}]),e}(),Z=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,i,a){var r;_classCallCheck(this,n),(r=t.call(this,e)).observables=i,r.project=a,r.toRespond=[];var o=i.length;r.values=new Array(o);for(var s=0;s<o;s++)r.toRespond.push(s);for(var c=0;c<o;c++){var u=i[c];r.add(Object(F.a)(_assertThisInitialized(r),u,u,c))}return r}return _createClass(n,[{key:"notifyNext",value:function(e,t,n,i,a){this.values[n]=t;var r=this.toRespond;if(r.length>0){var o=r.indexOf(n);-1!==o&&r.splice(o,1)}}},{key:"notifyComplete",value:function(){}},{key:"_next",value:function(e){if(0===this.toRespond.length){var t=[e].concat(_toConsumableArray(this.values));this.project?this._tryProject(t):this.destination.next(t)}}},{key:"_tryProject",value:function(e){var t;try{t=this.project.apply(this,e)}catch(n){return void this.destination.error(n)}this.destination.next(t)}}]),n}(M.a),D=n("lJxs"),H=n("Kqap"),$=n("/uUt"),K=n("DH7j"),X=n("Cfvw"),G=n("7o/Q"),J=function(){function e(t){_classCallCheck(this,e),this.predicate=t}return _createClass(e,[{key:"call",value:function(e,t){return t.subscribe(new q(e,this.predicate))}}]),e}(),q=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,i){var a;return _classCallCheck(this,n),(a=t.call(this,e)).predicate=i,a.skipping=!0,a.index=0,a}return _createClass(n,[{key:"_next",value:function(e){var t=this.destination;this.skipping&&this.tryCallPredicate(e),this.skipping||t.next(e)}},{key:"tryCallPredicate",value:function(e){try{var t=this.predicate(e,this.index++);this.skipping=Boolean(t)}catch(n){this.destination.error(n)}}}]),n}(G.a),ee=n("pLZG"),te=["youtubeContainer"],ne=((N=function(){function e(t,n){_classCallCheck(this,e),this._ngZone=t,this._videoId=new T.a(void 0),this._height=new T.a(390),this._width=new T.a(640),this._startSeconds=new T.a(void 0),this._endSeconds=new T.a(void 0),this._suggestedQuality=new T.a(void 0),this.ready=new c.o,this.stateChange=new c.o,this.error=new c.o,this.apiChange=new c.o,this.playbackQualityChange=new c.o,this.playbackRateChange=new c.o,this._youtubeContainer=new j.a,this._destroyed=new j.a,this._isBrowser=n?Object(r.t)(n):"object"==typeof window&&!!window}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;if(this._isBrowser){var t=Object(A.a)(!0);if(!window.YT){if(this.showBeforeIframeApiLoads)throw new Error("Namespace YT not found, cannot construct embedded youtube player. Please install the YouTube Player API Reference for iframe Embeds: https://developers.google.com/youtube/iframe_api_reference");var n=new j.a;this._existingApiReadyCallback=window.onYouTubeIframeAPIReady,window.onYouTubeIframeAPIReady=function(){e._existingApiReadyCallback&&e._existingApiReadyCallback(),e._ngZone.run((function(){return n.next(!0)}))},t=n.pipe(Object(s.a)(1),Object(U.a)(!1))}var i,a=function(e,t,n,i,a,r,o){var s,c,u=t.pipe(W(Object(R.b)([i,a])),Object(D.a)((function(e){var t=_slicedToArray(e,2),n=t[0],i=_slicedToArray(t[1],2),a=i[0],o=i[1];return n?{videoId:n,width:a,height:o,events:r}:void 0})));return Object(R.b)([e,u,Object(A.a)(o)]).pipe((s=n,Object(V.a)(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var i=null;return"function"==typeof t[t.length-1]&&(i=t.pop()),1===t.length&&Object(K.a)(t[0])&&(t=t[0].slice()),function(e){return e.lift.call(Object(X.a)([e].concat(_toConsumableArray(t))),new R.a(i))}}(s),(c=function(e){var t=_slicedToArray(e,2);return t[0],!t[1]},function(e){return e.lift(new J(c))}),Object(D.a)((function(e){return _slicedToArray(e,1)[0]})))),Object(H.a)(ie,void 0),Object($.a)())}(this._youtubeContainer,this._videoId,t,this._width,this._height,this.createEventsBoundInZone(),this._ngZone).pipe((i=function(e){ae(e)||e.destroy()},Object(E.a)((function(e){return e?ae(e)?Object(A.a)(e):new z.a((function(t){var n=!1,a=!1;return e.addEventListener("onReady",(function e(i){a=!0,n||(i.target.removeEventListener("onReady",e),t.next(i.target))})),function(){n=!0,a||i(e)}})).pipe(Object(s.a)(1),Object(U.a)(void 0)):Object(A.a)(void 0)}))),Object(B.a)(this._destroyed),Object(Q.a)(new j.a));a.subscribe((function(t){e._player=t,t&&e._pendingPlayerState&&e._initializePlayer(t,e._pendingPlayerState),e._pendingPlayerState=void 0})),function(e,t,n){Object(R.b)([e,t,n]).subscribe((function(e){var t=_slicedToArray(e,3),n=t[0],i=t[1],a=t[2];return n&&n.setSize(i,a)}))}(a,this._width,this._height),function(e,t){Object(R.b)([e,t]).subscribe((function(e){var t=_slicedToArray(e,2),n=t[0],i=t[1];return n&&i&&n.setPlaybackQuality(i)}))}(a,this._suggestedQuality),function(e,t,n,i,a,r){var o=Object(R.b)([n,i]).pipe(Object(D.a)((function(e){var t=_slicedToArray(e,2);return{startSeconds:t[0],endSeconds:t[1]}}))),s=o.pipe(re(e,(function(e){return!!e&&!function(e){var t=e.getPlayerState();return-1!==t&&5!==t}(e)}))),c=t.pipe(re(e,(function(e,t){return!!e&&e.videoId!==t}))),u=e.pipe(re(Object(R.b)([t,o]),(function(e,t){var n=_slicedToArray(e,2),i=n[0],a=n[1];return!(!t||i==t.videoId&&!a.startSeconds&&!a.endSeconds)})));Object(L.a)(u,c,s).pipe(W(Object(R.b)([e,t,o,a])),Object(D.a)((function(e){var t=_slicedToArray(e,2);return t[0],t[1]})),Object(B.a)(r)).subscribe((function(e){var t=_slicedToArray(e,4),n=t[0],i=t[1],a=t[2],r=t[3];i&&n&&(n.videoId=i,n.cueVideoById(Object.assign({videoId:i,suggestedQuality:r},a)))}))}(a,this._videoId,this._startSeconds,this._endSeconds,this._suggestedQuality,this._destroyed),a.connect()}}},{key:"createEventsBoundInZone",value:function(){var e=this,t={};return new Map([["onReady",this.ready],["onStateChange",this.stateChange],["onPlaybackQualityChange",this.playbackQualityChange],["onPlaybackRateChange",this.playbackRateChange],["onError",this.error],["onApiChange",this.apiChange]]).forEach((function(n,i){n.observers.length&&(t[i]=e._runInZone((function(e){return n.emit(e)})))})),t}},{key:"ngAfterViewInit",value:function(){this._youtubeContainer.next(this.youtubeContainer.nativeElement)}},{key:"ngOnDestroy",value:function(){this._player&&(this._player.destroy(),window.onYouTubeIframeAPIReady=this._existingApiReadyCallback),this._videoId.complete(),this._height.complete(),this._width.complete(),this._startSeconds.complete(),this._endSeconds.complete(),this._suggestedQuality.complete(),this._youtubeContainer.complete(),this._destroyed.next(),this._destroyed.complete()}},{key:"_runInZone",value:function(e){var t=this;return function(){for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return t._ngZone.run((function(){return e.apply(void 0,i)}))}}},{key:"playVideo",value:function(){this._player?this._player.playVideo():this._getPendingState().playbackState=1}},{key:"pauseVideo",value:function(){this._player?this._player.pauseVideo():this._getPendingState().playbackState=2}},{key:"stopVideo",value:function(){this._player?this._player.stopVideo():this._getPendingState().playbackState=5}},{key:"seekTo",value:function(e,t){this._player?this._player.seekTo(e,t):this._getPendingState().seek={seconds:e,allowSeekAhead:t}}},{key:"mute",value:function(){this._player?this._player.mute():this._getPendingState().muted=!0}},{key:"unMute",value:function(){this._player?this._player.unMute():this._getPendingState().muted=!1}},{key:"isMuted",value:function(){return this._player?this._player.isMuted():!!this._pendingPlayerState&&!!this._pendingPlayerState.muted}},{key:"setVolume",value:function(e){this._player?this._player.setVolume(e):this._getPendingState().volume=e}},{key:"getVolume",value:function(){return this._player?this._player.getVolume():this._pendingPlayerState&&null!=this._pendingPlayerState.volume?this._pendingPlayerState.volume:0}},{key:"setPlaybackRate",value:function(e){if(this._player)return this._player.setPlaybackRate(e);this._getPendingState().playbackRate=e}},{key:"getPlaybackRate",value:function(){return this._player?this._player.getPlaybackRate():this._pendingPlayerState&&null!=this._pendingPlayerState.playbackRate?this._pendingPlayerState.playbackRate:0}},{key:"getAvailablePlaybackRates",value:function(){return this._player?this._player.getAvailablePlaybackRates():[]}},{key:"getVideoLoadedFraction",value:function(){return this._player?this._player.getVideoLoadedFraction():0}},{key:"getPlayerState",value:function(){if(this._isBrowser&&window.YT)return this._player?this._player.getPlayerState():this._pendingPlayerState&&null!=this._pendingPlayerState.playbackState?this._pendingPlayerState.playbackState:-1}},{key:"getCurrentTime",value:function(){return this._player?this._player.getCurrentTime():this._pendingPlayerState&&this._pendingPlayerState.seek?this._pendingPlayerState.seek.seconds:0}},{key:"getPlaybackQuality",value:function(){return this._player?this._player.getPlaybackQuality():"default"}},{key:"getAvailableQualityLevels",value:function(){return this._player?this._player.getAvailableQualityLevels():[]}},{key:"getDuration",value:function(){return this._player?this._player.getDuration():0}},{key:"getVideoUrl",value:function(){return this._player?this._player.getVideoUrl():""}},{key:"getVideoEmbedCode",value:function(){return this._player?this._player.getVideoEmbedCode():""}},{key:"_getPendingState",value:function(){return this._pendingPlayerState||(this._pendingPlayerState={}),this._pendingPlayerState}},{key:"_initializePlayer",value:function(e,t){var n=t.playbackState,i=t.playbackRate,a=t.volume,r=t.muted,o=t.seek;switch(n){case 1:e.playVideo();break;case 2:e.pauseVideo();break;case 5:e.stopVideo()}null!=i&&e.setPlaybackRate(i),null!=a&&e.setVolume(a),null!=r&&(r?e.mute():e.unMute()),null!=o&&e.seekTo(o.seconds,o.allowSeekAhead)}},{key:"videoId",get:function(){return this._videoId.value},set:function(e){this._videoId.next(e)}},{key:"height",get:function(){return this._height.value},set:function(e){this._height.next(e||390)}},{key:"width",get:function(){return this._width.value},set:function(e){this._width.next(e||640)}},{key:"startSeconds",set:function(e){this._startSeconds.next(e)}},{key:"endSeconds",set:function(e){this._endSeconds.next(e)}},{key:"suggestedQuality",set:function(e){this._suggestedQuality.next(e)}}]),e}()).\u0275fac=function(e){return new(e||N)(c.Ob(c.A),c.Ob(c.C,8))},N.\u0275cmp=c.Ib({type:N,selectors:[["youtube-player"]],viewQuery:function(e,t){var n;1&e&&c.Fc(te,!0),2&e&&c.pc(n=c.dc())&&(t.youtubeContainer=n.first)},inputs:{videoId:"videoId",height:"height",width:"width",startSeconds:"startSeconds",endSeconds:"endSeconds",suggestedQuality:"suggestedQuality",showBeforeIframeApiLoads:"showBeforeIframeApiLoads"},outputs:{ready:"ready",stateChange:"stateChange",error:"error",apiChange:"apiChange",playbackQualityChange:"playbackQualityChange",playbackRateChange:"playbackRateChange"},decls:2,vars:0,consts:[["youtubeContainer",""]],template:function(e,t){1&e&&c.Pb(0,"div",null,0)},encapsulation:2,changeDetection:0}),N);function ie(e,t){var n=_slicedToArray(t,3),i=n[0],a=n[1],r=n[2];if(a){if(e)return e;var o=r.runOutsideAngular((function(){return new YT.Player(i,a)}));return o.videoId=a.videoId,o}e&&e.destroy()}function ae(e){return"getPlayerStatus"in e}function re(e,t){return Object(V.a)(W(e),Object(ee.a)((function(e){var n=_slicedToArray(e,2),i=n[0],a=n[1];return t(a,i)})),Object(D.a)((function(e){return _slicedToArray(e,1)[0]})))}var oe,se,ce=((se=function e(){_classCallCheck(this,e)}).\u0275mod=c.Mb({type:se}),se.\u0275inj=c.Lb({factory:function(e){return new(e||se)}}),se),ue=((oe=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){var e=document.createElement("script");e.src="https://www.youtube.com/iframe_api",document.body.appendChild(e),this.setInnerWidth(window.innerWidth)}},{key:"onResize",value:function(e){this.setInnerWidth(window.innerWidth)}},{key:"ngOnChanges",value:function(e){e.exercicio&&this.setVideoId()}},{key:"setVideoId",value:function(){var e=this.exercicio.url.indexOf("=")+1;this.videoId=this.exercicio.url.substring(e)}},{key:"setInnerWidth",value:function(e){this.innerWidth=.93*e}}]),e}()).\u0275fac=function(e){return new(e||oe)},oe.\u0275cmp=c.Ib({type:oe,selectors:[["app-exercicio-video"]],hostBindings:function(e,t){1&e&&c.cc("resize",(function(e){return t.onResize(e)}),!1,c.sc)},inputs:{exercicio:"exercicio"},features:[c.Ab],decls:1,vars:2,consts:[[3,"videoId","width"]],template:function(e,t){1&e&&c.Pb(0,"youtube-player",0),2&e&&c.lc("videoId",t.videoId)("width",t.innerWidth)},directives:[ne],styles:[""]}),oe),le=n("NFeN");function de(e,t){1&e&&(c.Ub(0,"mat-icon",13),c.Bc(1," checked "),c.Tb())}function he(e,t){if(1&e){var n=c.Vb();c.Ub(0,"button",14),c.cc("click",(function(){return c.tc(n),c.gc(2).prevStep()})),c.Bc(1," Anterior "),c.Tb()}}function pe(e,t){if(1&e){var n=c.Vb();c.Ub(0,"button",15),c.cc("click",(function(){c.tc(n);var e=c.gc().$implicit;return c.gc().nextStep(e)})),c.Bc(1," Pr\xf3ximo "),c.Tb()}}function fe(e,t){if(1&e){var n=c.Vb();c.Ub(0,"button",16),c.cc("click",(function(){c.tc(n);var e=c.gc().$implicit;return c.gc().finishStep(e)})),c.Bc(1," Finalizar "),c.Tb()}}var ye=function(e){return{"bg-visualizado":e}};function be(e,t){if(1&e){var n=c.Vb();c.Ub(0,"mat-expansion-panel",3),c.cc("opened",(function(){c.tc(n);var e=t.$implicit;return c.gc().setStep(e.ordem)})),c.Ub(1,"mat-expansion-panel-header",4),c.Ub(2,"mat-panel-title",5),c.zc(3,de,2,0,"mat-icon",6),c.Ub(4,"span",7),c.Bc(5),c.Tb(),c.Tb(),c.Tb(),c.Pb(6,"app-exercicio-video",8),c.Ub(7,"mat-action-row",9),c.zc(8,he,2,0,"button",10),c.zc(9,pe,2,0,"button",11),c.zc(10,fe,2,0,"button",12),c.Tb(),c.Tb()}if(2&e){var i=t.$implicit,a=c.gc();c.lc("expanded",a.step===i.ordem)("ngClass",c.nc(9,ye,i.visualizado)),c.Cb(1),c.lc("ngClass",c.nc(11,ye,i.visualizado)),c.Cb(2),c.lc("ngIf",i.visualizado),c.Cb(2),c.Cc(i.titulo),c.Cb(1),c.lc("exercicio",i),c.Cb(2),c.lc("ngIf",!a.isFirstStep()),c.Cb(1),c.lc("ngIf",!a.isLastStep()),c.Cb(1),c.lc("ngIf",a.isLastStep())}}var ve,ge,_e,me=[{path:"",component:S},{path:"detalhe/:id",component:(ve=function(){function e(t,n,i,a,r){_classCallCheck(this,e),this.sessaoService=t,this.exercicioService=n,this.activatedRoute=i,this.router=a,this._snackBar=r,this.step=0,this.index=0}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.activatedRoute.params.subscribe((function(t){t.id&&e.sessaoService.getById(t.id).subscribe((function(t){t&&(e.sessao=t,e.indexes=e.sessao.exercicios.map((function(e){return e.ordem})),e.step=e.indexes[e.index])}))}))}},{key:"setStep",value:function(e){this.step=e}},{key:"nextStep",value:function(e){var t=this;e.visualizado||(e.visualizado=!0,this.exercicioService.setVisualizado(e.id).subscribe((function(e){}),(function(n){e.visualizado=!1,console.log(n),t.openSnackBar("N\xe3o foi poss\xedvel atualizar o exerc\xedcio","Ok")}))),this.index++,this.step=this.indexes[this.index]}},{key:"prevStep",value:function(){this.index--,this.step=this.indexes[this.index]}},{key:"finishStep",value:function(e){e.visualizado||this.exercicioService.setVisualizado(e.id).subscribe((function(e){})),this.router.navigate([""]),this.index++}},{key:"isLastStep",value:function(){return this.step===this.indexes[this.indexes.length-1]}},{key:"isFirstStep",value:function(){return this.step===this.indexes[0]}},{key:"openSnackBar",value:function(e,t){this._snackBar.open(e,t,{duration:2e3})}}]),e}(),ve.\u0275fac=function(e){return new(e||ve)(c.Ob(x),c.Ob(O),c.Ob(o.a),c.Ob(o.b),c.Ob(P.a))},ve.\u0275cmp=c.Ib({type:ve,selectors:[["app-treino-detail-page"]],decls:6,vars:2,consts:[[1,"text-blue","text-700","mb-1"],[1,"mt-4"],["hideToggle","",3,"expanded","ngClass","opened",4,"ngFor","ngForOf"],["hideToggle","",3,"expanded","ngClass","opened"],[3,"ngClass"],[1,"align-items-center"],["class","icone-check text-success",4,"ngIf"],[1,"titulo-exercicio","px-3"],[3,"exercicio"],[1,"px-2"],["mat-raised-button","","class","btn btn-warning btn-block m-0 mx-1 btn-exercicio",3,"click",4,"ngIf"],["mat-raised-button","","color","primary","class","btn btn-block m-0 mx-1 btn-exercicio",3,"click",4,"ngIf"],["mat-raised-button","","class","btn btn-block m-0 mx-1 btn-exercicio","color","accent",3,"click",4,"ngIf"],[1,"icone-check","text-success"],["mat-raised-button","",1,"btn","btn-warning","btn-block","m-0","mx-1","btn-exercicio",3,"click"],["mat-raised-button","","color","primary",1,"btn","btn-block","m-0","mx-1","btn-exercicio",3,"click"],["mat-raised-button","","color","accent",1,"btn","btn-block","m-0","mx-1","btn-exercicio",3,"click"]],template:function(e,t){1&e&&(c.Ub(0,"h2",0),c.Bc(1),c.Tb(),c.Pb(2,"mat-divider"),c.Ub(3,"div",1),c.Ub(4,"mat-accordion"),c.zc(5,be,11,13,"mat-expansion-panel",2),c.Tb(),c.Tb()),2&e&&(c.Cb(1),c.Cc(null==t.sessao?null:t.sessao.titulo),c.Cb(4),c.lc("ngForOf",null==t.sessao?null:t.sessao.exercicios))},directives:[h.a,I.a,r.j,I.c,r.i,I.e,I.f,r.k,ue,I.d,le.a,p.a],styles:["mat-expansion-panel-header[_ngcontent-%COMP%]{height:64px!important}mat-expansion-panel[_ngcontent-%COMP%]{margin-bottom:12px!important}mat-action-row[_ngcontent-%COMP%]{border-top-style:unset!important}.icone-check[_ngcontent-%COMP%]{font-size:26px;font-weight:900}.titulo-exercicio[_ngcontent-%COMP%]{font-size:18px;font-weight:900}.bg-visualizado[_ngcontent-%COMP%]{background:#f7c4a2!important}.btn-exercicio[_ngcontent-%COMP%]{height:48px!important}"]}),ve)}],ke=((ge=function e(){_classCallCheck(this,e)}).\u0275mod=c.Mb({type:ge}),ge.\u0275inj=c.Lb({factory:function(e){return new(e||ge)},imports:[[o.d.forChild(me)],o.d]}),ge),Ce=n("hctd"),we=((_e=function e(){_classCallCheck(this,e)}).\u0275mod=c.Mb({type:_e}),_e.\u0275inj=c.Lb({factory:function(e){return new(e||_e)},imports:[[r.c,ke,ce,Ce.a]]}),_e)}}]);