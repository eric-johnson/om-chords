// Compiled by ClojureScript 0.0-3297 {}
goog.provide('chords.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof chords.core.app_state !== 'undefined'){
} else {
chords.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"radius","radius",-2073122258),(1),new cljs.core.Keyword(null,"chord-length","chord-length",1224300115),0.5,new cljs.core.Keyword(null,"offset","offset",296498311),(0)], null));
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
chords.core.handle_change = (function chords$core$handle_change(e,data,key){
var old = key.call(null,data);
var new$ = e.target.value;
if(cljs.core.truth_(chords.core.numeric_QMARK_.call(null,new$))){
return om.core.transact_BANG_.call(null,data,key,((function (old,new$){
return (function (){
return cljs.core.identity.call(null,new$);
});})(old,new$))
);
} else {
return null;
}
});
chords.core.input_view = (function chords$core$input_view(data,owner){
if(typeof chords.core.t20087 !== 'undefined'){
} else {

/**
* @constructor
*/
chords.core.t20087 = (function (input_view,data,owner,meta20088){
this.input_view = input_view;
this.data = data;
this.owner = owner;
this.meta20088 = meta20088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chords.core.t20087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20089,meta20088__$1){
var self__ = this;
var _20089__$1 = this;
return (new chords.core.t20087(self__.input_view,self__.data,self__.owner,meta20088__$1));
});

chords.core.t20087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20089){
var self__ = this;
var _20089__$1 = this;
return self__.meta20088;
});

chords.core.t20087.prototype.om$core$IRender$ = true;

chords.core.t20087.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,React.DOM.p(null,React.DOM.label({"htmlFor": "radius"},"Radius"),om.dom.input.call(null,{"type": "text", "ref": "radius", "id": "radius", "value": new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(self__.data), "onChange": ((function (___$1){
return (function (p1__20081_SHARP_){
return chords.core.handle_change.call(null,p1__20081_SHARP_,self__.data,new cljs.core.Keyword(null,"radius","radius",-2073122258));
});})(___$1))
})),React.DOM.p(null,React.DOM.label({"htmlFor": "chord-length"},"Chord Length"),om.dom.input.call(null,{"type": "text", "ref": "chord-length", "id": "chord-length", "value": new cljs.core.Keyword(null,"chord-length","chord-length",1224300115).cljs$core$IFn$_invoke$arity$1(self__.data), "onChange": ((function (___$1){
return (function (p1__20082_SHARP_){
return chords.core.handle_change.call(null,p1__20082_SHARP_,self__.data,new cljs.core.Keyword(null,"chord-length","chord-length",1224300115));
});})(___$1))
})),React.DOM.p(null,React.DOM.label({"htmlFor": "offset"},"Offset from Center"),om.dom.input.call(null,{"type": "text", "ref": "offset", "id": "offset", "value": new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(self__.data), "onChange": ((function (___$1){
return (function (p1__20083_SHARP_){
return chords.core.handle_change.call(null,p1__20083_SHARP_,self__.data,new cljs.core.Keyword(null,"offset","offset",296498311));
});})(___$1))
})),React.DOM.p(null,React.DOM.label({"htmlFor": "chord-to-perim"},"Chord to Perimeter at offset"),om.dom.input.call(null,{"type": "text", "ref": "chord-to-perim", "id": "chord-to-perim", "value": chords.core.chord_to_perim.call(null,self__.data), "disabled": true})));
});

chords.core.t20087.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-view","input-view",-674591541,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta20088","meta20088",497256665,null)], null);
});

chords.core.t20087.cljs$lang$type = true;

chords.core.t20087.cljs$lang$ctorStr = "chords.core/t20087";

chords.core.t20087.cljs$lang$ctorPrWriter = (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"chords.core/t20087");
});

chords.core.__GT_t20087 = (function chords$core$input_view_$___GT_t20087(input_view__$1,data__$1,owner__$1,meta20088){
return (new chords.core.t20087(input_view__$1,data__$1,owner__$1,meta20088));
});

}

return (new chords.core.t20087(chords$core$input_view,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,chords.core.input_view,chords.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
chords.core.on_js_reload = (function chords$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1440277341976