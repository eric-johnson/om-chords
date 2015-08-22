// Compiled by ClojureScript 0.0-3297 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('chords.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__29185__delegate = function (x){
if(cljs.core.truth_(chords.core.on_js_reload)){
return cljs.core.apply.call(null,chords.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'chords.core/on-js-reload' is missing");
}
};
var G__29185 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__29186__i = 0, G__29186__a = new Array(arguments.length -  0);
while (G__29186__i < G__29186__a.length) {G__29186__a[G__29186__i] = arguments[G__29186__i + 0]; ++G__29186__i;}
  x = new cljs.core.IndexedSeq(G__29186__a,0);
} 
return G__29185__delegate.call(this,x);};
G__29185.cljs$lang$maxFixedArity = 0;
G__29185.cljs$lang$applyTo = (function (arglist__29187){
var x = cljs.core.seq(arglist__29187);
return G__29185__delegate(x);
});
G__29185.cljs$core$IFn$_invoke$arity$variadic = G__29185__delegate;
return G__29185;
})()
,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1440278284226