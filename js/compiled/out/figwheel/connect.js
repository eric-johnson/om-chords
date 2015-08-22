// Compiled by ClojureScript 0.0-3297 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('chords.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__20076__delegate = function (x){
if(cljs.core.truth_(chords.core.on_js_reload)){
return cljs.core.apply.call(null,chords.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'chords.core/on-js-reload' is missing");
}
};
var G__20076 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__20077__i = 0, G__20077__a = new Array(arguments.length -  0);
while (G__20077__i < G__20077__a.length) {G__20077__a[G__20077__i] = arguments[G__20077__i + 0]; ++G__20077__i;}
  x = new cljs.core.IndexedSeq(G__20077__a,0);
} 
return G__20076__delegate.call(this,x);};
G__20076.cljs$lang$maxFixedArity = 0;
G__20076.cljs$lang$applyTo = (function (arglist__20078){
var x = cljs.core.seq(arglist__20078);
return G__20076__delegate(x);
});
G__20076.cljs$core$IFn$_invoke$arity$variadic = G__20076__delegate;
return G__20076;
})()
,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1440277341931