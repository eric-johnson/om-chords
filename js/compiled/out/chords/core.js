// Compiled by ClojureScript 0.0-3297 {}
goog.provide('chords.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof chords.core.app_state !== 'undefined'){
} else {
chords.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
chords.core.diam_to_perim = (function chords$core$diam_to_perim(radius,offset){
return Math.sqrt((Math.pow(radius,(2)) - Math.pow(offset,(2))));
});
chords.core.diam_to_chord = (function chords$core$diam_to_chord(radius,chord_length){
var half_chord = (chord_length / (2));
return Math.sqrt((Math.pow(radius,(2)) - Math.pow(half_chord,(2))));
});
chords.core.chord_to_perim = (function chords$core$chord_to_perim(data){
var radius = parseFloat(new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(data));
var chord_length = parseFloat(new cljs.core.Keyword(null,"chord-length","chord-length",1224300115).cljs$core$IFn$_invoke$arity$1(data));
var offset = parseFloat(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(data));
return (chords.core.diam_to_perim.call(null,radius,offset) - chords.core.diam_to_chord.call(null,radius,chord_length));
});
chords.core.numeric_QMARK_ = (function chords$core$numeric_QMARK_(text){
return (((text - parseFloat(text)) + (1)) >= (0));
});
chords.core.handle_change = (function chords$core$handle_change(e,state,owner,key){
var old = key.call(null,state);
var new$ = e.target.value;
if(cljs.core.truth_(chords.core.numeric_QMARK_.call(null,new$))){
return om.core.set_state_BANG_.call(null,owner,key,new$);
} else {
return om.core.set_state_BANG_.call(null,owner,key,old);
}
});
chords.core.input = (function chords$core$input(){
var G__31234 = arguments.length;
switch (G__31234) {
case 4:
return chords.core.input.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return chords.core.input.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

chords.core.input.cljs$core$IFn$_invoke$arity$4 = (function (state,owner,key,label){
return chords.core.input.call(null,state,owner,key,label,cljs.core.PersistentArrayMap.EMPTY);
});

chords.core.input.cljs$core$IFn$_invoke$arity$5 = (function (state,owner,key,label,params){
return React.DOM.p(null,React.DOM.label({"htmlFor": key},label),om.dom.input.call(null,cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"ref","ref",1289896967),key,new cljs.core.Keyword(null,"id","id",-1388402092),key,new cljs.core.Keyword(null,"value","value",305978217),key.call(null,state),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__31232_SHARP_){
return chords.core.handle_change.call(null,p1__31232_SHARP_,state,owner,key);
})], null),params))));
});

chords.core.input.cljs$lang$maxFixedArity = 5;
chords.core.app_view = (function chords$core$app_view(data,owner){
if(typeof chords.core.t31239 !== 'undefined'){
} else {

/**
* @constructor
*/
chords.core.t31239 = (function (app_view,data,owner,meta31240){
this.app_view = app_view;
this.data = data;
this.owner = owner;
this.meta31240 = meta31240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chords.core.t31239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31241,meta31240__$1){
var self__ = this;
var _31241__$1 = this;
return (new chords.core.t31239(self__.app_view,self__.data,self__.owner,meta31240__$1));
});

chords.core.t31239.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31241){
var self__ = this;
var _31241__$1 = this;
return self__.meta31240;
});

chords.core.t31239.prototype.om$core$IInitState$ = true;

chords.core.t31239.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"radius","radius",-2073122258),(1),new cljs.core.Keyword(null,"chord-length","chord-length",1224300115),0.5,new cljs.core.Keyword(null,"offset","offset",296498311),(0)], null);
});

chords.core.t31239.prototype.om$core$IRenderState$ = true;

chords.core.t31239.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,chords.core.input.call(null,state,self__.owner,new cljs.core.Keyword(null,"radius","radius",-2073122258),"Radius"),chords.core.input.call(null,state,self__.owner,new cljs.core.Keyword(null,"chord-length","chord-length",1224300115),"Chord Length"),chords.core.input.call(null,state,self__.owner,new cljs.core.Keyword(null,"offset","offset",296498311),"Offset from Center"),chords.core.input.call(null,state,self__.owner,new cljs.core.Keyword(null,"chord-to-perim","chord-to-perim",1875806958),"Chord to Perimeter at Offset",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true,new cljs.core.Keyword(null,"value","value",305978217),chords.core.chord_to_perim.call(null,state)], null)));
});

chords.core.t31239.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-view","app-view",-1295186174,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta31240","meta31240",263624221,null)], null);
});

chords.core.t31239.cljs$lang$type = true;

chords.core.t31239.cljs$lang$ctorStr = "chords.core/t31239";

chords.core.t31239.cljs$lang$ctorPrWriter = (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"chords.core/t31239");
});

chords.core.__GT_t31239 = (function chords$core$app_view_$___GT_t31239(app_view__$1,data__$1,owner__$1,meta31240){
return (new chords.core.t31239(app_view__$1,data__$1,owner__$1,meta31240));
});

}

return (new chords.core.t31239(chords$core$app_view,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,chords.core.app_view,chords.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
chords.core.on_js_reload = (function chords$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1440284482264