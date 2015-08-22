// Compiled by ClojureScript 0.0-3297 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25794_25806 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25795_25807 = null;
var count__25796_25808 = (0);
var i__25797_25809 = (0);
while(true){
if((i__25797_25809 < count__25796_25808)){
var f_25810 = cljs.core._nth.call(null,chunk__25795_25807,i__25797_25809);
cljs.core.println.call(null,"  ",f_25810);

var G__25811 = seq__25794_25806;
var G__25812 = chunk__25795_25807;
var G__25813 = count__25796_25808;
var G__25814 = (i__25797_25809 + (1));
seq__25794_25806 = G__25811;
chunk__25795_25807 = G__25812;
count__25796_25808 = G__25813;
i__25797_25809 = G__25814;
continue;
} else {
var temp__4425__auto___25815 = cljs.core.seq.call(null,seq__25794_25806);
if(temp__4425__auto___25815){
var seq__25794_25816__$1 = temp__4425__auto___25815;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25794_25816__$1)){
var c__16854__auto___25817 = cljs.core.chunk_first.call(null,seq__25794_25816__$1);
var G__25818 = cljs.core.chunk_rest.call(null,seq__25794_25816__$1);
var G__25819 = c__16854__auto___25817;
var G__25820 = cljs.core.count.call(null,c__16854__auto___25817);
var G__25821 = (0);
seq__25794_25806 = G__25818;
chunk__25795_25807 = G__25819;
count__25796_25808 = G__25820;
i__25797_25809 = G__25821;
continue;
} else {
var f_25822 = cljs.core.first.call(null,seq__25794_25816__$1);
cljs.core.println.call(null,"  ",f_25822);

var G__25823 = cljs.core.next.call(null,seq__25794_25816__$1);
var G__25824 = null;
var G__25825 = (0);
var G__25826 = (0);
seq__25794_25806 = G__25823;
chunk__25795_25807 = G__25824;
count__25796_25808 = G__25825;
i__25797_25809 = G__25826;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25827 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16069__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25827);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25827)))?cljs.core.second.call(null,arglists_25827):arglists_25827));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25798 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25799 = null;
var count__25800 = (0);
var i__25801 = (0);
while(true){
if((i__25801 < count__25800)){
var vec__25802 = cljs.core._nth.call(null,chunk__25799,i__25801);
var name = cljs.core.nth.call(null,vec__25802,(0),null);
var map__25803 = cljs.core.nth.call(null,vec__25802,(1),null);
var map__25803__$1 = ((cljs.core.seq_QMARK_.call(null,map__25803))?cljs.core.apply.call(null,cljs.core.hash_map,map__25803):map__25803);
var doc = cljs.core.get.call(null,map__25803__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25803__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25828 = seq__25798;
var G__25829 = chunk__25799;
var G__25830 = count__25800;
var G__25831 = (i__25801 + (1));
seq__25798 = G__25828;
chunk__25799 = G__25829;
count__25800 = G__25830;
i__25801 = G__25831;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25798);
if(temp__4425__auto__){
var seq__25798__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25798__$1)){
var c__16854__auto__ = cljs.core.chunk_first.call(null,seq__25798__$1);
var G__25832 = cljs.core.chunk_rest.call(null,seq__25798__$1);
var G__25833 = c__16854__auto__;
var G__25834 = cljs.core.count.call(null,c__16854__auto__);
var G__25835 = (0);
seq__25798 = G__25832;
chunk__25799 = G__25833;
count__25800 = G__25834;
i__25801 = G__25835;
continue;
} else {
var vec__25804 = cljs.core.first.call(null,seq__25798__$1);
var name = cljs.core.nth.call(null,vec__25804,(0),null);
var map__25805 = cljs.core.nth.call(null,vec__25804,(1),null);
var map__25805__$1 = ((cljs.core.seq_QMARK_.call(null,map__25805))?cljs.core.apply.call(null,cljs.core.hash_map,map__25805):map__25805);
var doc = cljs.core.get.call(null,map__25805__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25805__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25836 = cljs.core.next.call(null,seq__25798__$1);
var G__25837 = null;
var G__25838 = (0);
var G__25839 = (0);
seq__25798 = G__25836;
chunk__25799 = G__25837;
count__25800 = G__25838;
i__25801 = G__25839;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1440278279528