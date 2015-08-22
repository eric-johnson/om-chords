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
var seq__21952_21964 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21953_21965 = null;
var count__21954_21966 = (0);
var i__21955_21967 = (0);
while(true){
if((i__21955_21967 < count__21954_21966)){
var f_21968 = cljs.core._nth.call(null,chunk__21953_21965,i__21955_21967);
cljs.core.println.call(null,"  ",f_21968);

var G__21969 = seq__21952_21964;
var G__21970 = chunk__21953_21965;
var G__21971 = count__21954_21966;
var G__21972 = (i__21955_21967 + (1));
seq__21952_21964 = G__21969;
chunk__21953_21965 = G__21970;
count__21954_21966 = G__21971;
i__21955_21967 = G__21972;
continue;
} else {
var temp__4425__auto___21973 = cljs.core.seq.call(null,seq__21952_21964);
if(temp__4425__auto___21973){
var seq__21952_21974__$1 = temp__4425__auto___21973;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21952_21974__$1)){
var c__16854__auto___21975 = cljs.core.chunk_first.call(null,seq__21952_21974__$1);
var G__21976 = cljs.core.chunk_rest.call(null,seq__21952_21974__$1);
var G__21977 = c__16854__auto___21975;
var G__21978 = cljs.core.count.call(null,c__16854__auto___21975);
var G__21979 = (0);
seq__21952_21964 = G__21976;
chunk__21953_21965 = G__21977;
count__21954_21966 = G__21978;
i__21955_21967 = G__21979;
continue;
} else {
var f_21980 = cljs.core.first.call(null,seq__21952_21974__$1);
cljs.core.println.call(null,"  ",f_21980);

var G__21981 = cljs.core.next.call(null,seq__21952_21974__$1);
var G__21982 = null;
var G__21983 = (0);
var G__21984 = (0);
seq__21952_21964 = G__21981;
chunk__21953_21965 = G__21982;
count__21954_21966 = G__21983;
i__21955_21967 = G__21984;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21985 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16069__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_21985);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_21985)))?cljs.core.second.call(null,arglists_21985):arglists_21985));
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
var seq__21956 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21957 = null;
var count__21958 = (0);
var i__21959 = (0);
while(true){
if((i__21959 < count__21958)){
var vec__21960 = cljs.core._nth.call(null,chunk__21957,i__21959);
var name = cljs.core.nth.call(null,vec__21960,(0),null);
var map__21961 = cljs.core.nth.call(null,vec__21960,(1),null);
var map__21961__$1 = ((cljs.core.seq_QMARK_.call(null,map__21961))?cljs.core.apply.call(null,cljs.core.hash_map,map__21961):map__21961);
var doc = cljs.core.get.call(null,map__21961__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__21961__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__21986 = seq__21956;
var G__21987 = chunk__21957;
var G__21988 = count__21958;
var G__21989 = (i__21959 + (1));
seq__21956 = G__21986;
chunk__21957 = G__21987;
count__21958 = G__21988;
i__21959 = G__21989;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__21956);
if(temp__4425__auto__){
var seq__21956__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21956__$1)){
var c__16854__auto__ = cljs.core.chunk_first.call(null,seq__21956__$1);
var G__21990 = cljs.core.chunk_rest.call(null,seq__21956__$1);
var G__21991 = c__16854__auto__;
var G__21992 = cljs.core.count.call(null,c__16854__auto__);
var G__21993 = (0);
seq__21956 = G__21990;
chunk__21957 = G__21991;
count__21958 = G__21992;
i__21959 = G__21993;
continue;
} else {
var vec__21962 = cljs.core.first.call(null,seq__21956__$1);
var name = cljs.core.nth.call(null,vec__21962,(0),null);
var map__21963 = cljs.core.nth.call(null,vec__21962,(1),null);
var map__21963__$1 = ((cljs.core.seq_QMARK_.call(null,map__21963))?cljs.core.apply.call(null,cljs.core.hash_map,map__21963):map__21963);
var doc = cljs.core.get.call(null,map__21963__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__21963__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__21994 = cljs.core.next.call(null,seq__21956__$1);
var G__21995 = null;
var G__21996 = (0);
var G__21997 = (0);
seq__21956 = G__21994;
chunk__21957 = G__21995;
count__21958 = G__21996;
i__21959 = G__21997;
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

//# sourceMappingURL=repl.js.map?rel=1440277345958