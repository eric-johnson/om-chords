// Compiled by ClojureScript 0.0-3297 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__22000_SHARP_,p2__22001_SHARP_){
var and__16057__auto__ = p1__22000_SHARP_;
if(cljs.core.truth_(and__16057__auto__)){
return p2__22001_SHARP_;
} else {
return and__16057__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16069__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16069__auto__){
return or__16069__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__16069__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__16069__auto__){
return or__16069__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__16069__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__16964__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__16965__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__16966__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__16967__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__16968__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__16968__auto__,method_table__16964__auto__,prefer_table__16965__auto__,method_cache__16966__auto__,cached_hierarchy__16967__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__22002){
var map__22003 = p__22002;
var map__22003__$1 = ((cljs.core.seq_QMARK_.call(null,map__22003))?cljs.core.apply.call(null,cljs.core.hash_map,map__22003):map__22003);
var file = cljs.core.get.call(null,map__22003__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__22004){
var map__22005 = p__22004;
var map__22005__$1 = ((cljs.core.seq_QMARK_.call(null,map__22005))?cljs.core.apply.call(null,cljs.core.hash_map,map__22005):map__22005);
var namespace = cljs.core.get.call(null,map__22005__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__16964__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__16965__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__16966__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__16967__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__16968__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__16968__auto__,method_table__16964__auto__,prefer_table__16965__auto__,method_cache__16966__auto__,cached_hierarchy__16967__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e22006){if((e22006 instanceof Error)){
var e = e22006;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e22006;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__22008 = arguments.length;
switch (G__22008) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__22010,callback){
var map__22012 = p__22010;
var map__22012__$1 = ((cljs.core.seq_QMARK_.call(null,map__22012))?cljs.core.apply.call(null,cljs.core.hash_map,map__22012):map__22012);
var file_msg = map__22012__$1;
var request_url = cljs.core.get.call(null,map__22012__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__22012,map__22012__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__22012,map__22012__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__22013){
var map__22015 = p__22013;
var map__22015__$1 = ((cljs.core.seq_QMARK_.call(null,map__22015))?cljs.core.apply.call(null,cljs.core.hash_map,map__22015):map__22015);
var file_msg = map__22015__$1;
var namespace = cljs.core.get.call(null,map__22015__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__22015__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__16069__auto__ = meta_data;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__16057__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__16057__auto__){
var or__16069__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16069__auto____$1)){
return or__16069__auto____$1;
} else {
var and__16057__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__16057__auto____$1){
var or__16069__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__16069__auto____$2){
return or__16069__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__16057__auto____$1;
}
}
}
} else {
return and__16057__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__22016,callback){
var map__22018 = p__22016;
var map__22018__$1 = ((cljs.core.seq_QMARK_.call(null,map__22018))?cljs.core.apply.call(null,cljs.core.hash_map,map__22018):map__22018);
var file_msg = map__22018__$1;
var request_url = cljs.core.get.call(null,map__22018__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__22018__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19665__auto___22105 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19665__auto___22105,out){
return (function (){
var f__19666__auto__ = (function (){var switch__19644__auto__ = ((function (c__19665__auto___22105,out){
return (function (state_22087){
var state_val_22088 = (state_22087[(1)]);
if((state_val_22088 === (1))){
var inst_22065 = cljs.core.nth.call(null,files,(0),null);
var inst_22066 = cljs.core.nthnext.call(null,files,(1));
var inst_22067 = files;
var state_22087__$1 = (function (){var statearr_22089 = state_22087;
(statearr_22089[(7)] = inst_22066);

(statearr_22089[(8)] = inst_22065);

(statearr_22089[(9)] = inst_22067);

return statearr_22089;
})();
var statearr_22090_22106 = state_22087__$1;
(statearr_22090_22106[(2)] = null);

(statearr_22090_22106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (2))){
var inst_22067 = (state_22087[(9)]);
var inst_22070 = (state_22087[(10)]);
var inst_22070__$1 = cljs.core.nth.call(null,inst_22067,(0),null);
var inst_22071 = cljs.core.nthnext.call(null,inst_22067,(1));
var inst_22072 = (inst_22070__$1 == null);
var inst_22073 = cljs.core.not.call(null,inst_22072);
var state_22087__$1 = (function (){var statearr_22091 = state_22087;
(statearr_22091[(11)] = inst_22071);

(statearr_22091[(10)] = inst_22070__$1);

return statearr_22091;
})();
if(inst_22073){
var statearr_22092_22107 = state_22087__$1;
(statearr_22092_22107[(1)] = (4));

} else {
var statearr_22093_22108 = state_22087__$1;
(statearr_22093_22108[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (3))){
var inst_22085 = (state_22087[(2)]);
var state_22087__$1 = state_22087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22087__$1,inst_22085);
} else {
if((state_val_22088 === (4))){
var inst_22070 = (state_22087[(10)]);
var inst_22075 = figwheel.client.file_reloading.reload_js_file.call(null,inst_22070);
var state_22087__$1 = state_22087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22087__$1,(7),inst_22075);
} else {
if((state_val_22088 === (5))){
var inst_22081 = cljs.core.async.close_BANG_.call(null,out);
var state_22087__$1 = state_22087;
var statearr_22094_22109 = state_22087__$1;
(statearr_22094_22109[(2)] = inst_22081);

(statearr_22094_22109[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (6))){
var inst_22083 = (state_22087[(2)]);
var state_22087__$1 = state_22087;
var statearr_22095_22110 = state_22087__$1;
(statearr_22095_22110[(2)] = inst_22083);

(statearr_22095_22110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (7))){
var inst_22071 = (state_22087[(11)]);
var inst_22077 = (state_22087[(2)]);
var inst_22078 = cljs.core.async.put_BANG_.call(null,out,inst_22077);
var inst_22067 = inst_22071;
var state_22087__$1 = (function (){var statearr_22096 = state_22087;
(statearr_22096[(12)] = inst_22078);

(statearr_22096[(9)] = inst_22067);

return statearr_22096;
})();
var statearr_22097_22111 = state_22087__$1;
(statearr_22097_22111[(2)] = null);

(statearr_22097_22111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__19665__auto___22105,out))
;
return ((function (switch__19644__auto__,c__19665__auto___22105,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19645__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19645__auto____0 = (function (){
var statearr_22101 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22101[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19645__auto__);

(statearr_22101[(1)] = (1));

return statearr_22101;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19645__auto____1 = (function (state_22087){
while(true){
var ret_value__19646__auto__ = (function (){try{while(true){
var result__19647__auto__ = switch__19644__auto__.call(null,state_22087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19647__auto__;
}
break;
}
}catch (e22102){if((e22102 instanceof Object)){
var ex__19648__auto__ = e22102;
var statearr_22103_22112 = state_22087;
(statearr_22103_22112[(5)] = ex__19648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22113 = state_22087;
state_22087 = G__22113;
continue;
} else {
return ret_value__19646__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19645__auto__ = function(state_22087){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19645__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19645__auto____1.call(this,state_22087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19645__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19645__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19645__auto__;
})()
;})(switch__19644__auto__,c__19665__auto___22105,out))
})();
var state__19667__auto__ = (function (){var statearr_22104 = f__19666__auto__.call(null);
(statearr_22104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19665__auto___22105);

return statearr_22104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19667__auto__);
});})(c__19665__auto___22105,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__22114,p__22115){
var map__22118 = p__22114;
var map__22118__$1 = ((cljs.core.seq_QMARK_.call(null,map__22118))?cljs.core.apply.call(null,cljs.core.hash_map,map__22118):map__22118);
var opts = map__22118__$1;
var url_rewriter = cljs.core.get.call(null,map__22118__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__22119 = p__22115;
var map__22119__$1 = ((cljs.core.seq_QMARK_.call(null,map__22119))?cljs.core.apply.call(null,cljs.core.hash_map,map__22119):map__22119);
var file_msg = map__22119__$1;
var file = cljs.core.get.call(null,map__22119__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__22120,opts){
var map__22123 = p__22120;
var map__22123__$1 = ((cljs.core.seq_QMARK_.call(null,map__22123))?cljs.core.apply.call(null,cljs.core.hash_map,map__22123):map__22123);
var eval_body__$1 = cljs.core.get.call(null,map__22123__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__22123__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16057__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16057__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16057__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e22124){var e = e22124;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__22129,p__22130){
var map__22332 = p__22129;
var map__22332__$1 = ((cljs.core.seq_QMARK_.call(null,map__22332))?cljs.core.apply.call(null,cljs.core.hash_map,map__22332):map__22332);
var opts = map__22332__$1;
var before_jsload = cljs.core.get.call(null,map__22332__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__22332__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__22332__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__22333 = p__22130;
var map__22333__$1 = ((cljs.core.seq_QMARK_.call(null,map__22333))?cljs.core.apply.call(null,cljs.core.hash_map,map__22333):map__22333);
var msg = map__22333__$1;
var files = cljs.core.get.call(null,map__22333__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__19665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19665__auto__,map__22332,map__22332__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22333,map__22333__$1,msg,files){
return (function (){
var f__19666__auto__ = (function (){var switch__19644__auto__ = ((function (c__19665__auto__,map__22332,map__22332__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22333,map__22333__$1,msg,files){
return (function (state_22458){
var state_val_22459 = (state_22458[(1)]);
if((state_val_22459 === (7))){
var inst_22347 = (state_22458[(7)]);
var inst_22348 = (state_22458[(8)]);
var inst_22345 = (state_22458[(9)]);
var inst_22346 = (state_22458[(10)]);
var inst_22353 = cljs.core._nth.call(null,inst_22346,inst_22348);
var inst_22354 = figwheel.client.file_reloading.eval_body.call(null,inst_22353,opts);
var inst_22355 = (inst_22348 + (1));
var tmp22460 = inst_22347;
var tmp22461 = inst_22345;
var tmp22462 = inst_22346;
var inst_22345__$1 = tmp22461;
var inst_22346__$1 = tmp22462;
var inst_22347__$1 = tmp22460;
var inst_22348__$1 = inst_22355;
var state_22458__$1 = (function (){var statearr_22463 = state_22458;
(statearr_22463[(7)] = inst_22347__$1);

(statearr_22463[(8)] = inst_22348__$1);

(statearr_22463[(9)] = inst_22345__$1);

(statearr_22463[(11)] = inst_22354);

(statearr_22463[(10)] = inst_22346__$1);

return statearr_22463;
})();
var statearr_22464_22533 = state_22458__$1;
(statearr_22464_22533[(2)] = null);

(statearr_22464_22533[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (20))){
var inst_22394 = (state_22458[(12)]);
var inst_22391 = (state_22458[(13)]);
var inst_22397 = (state_22458[(14)]);
var inst_22395 = (state_22458[(15)]);
var inst_22390 = (state_22458[(16)]);
var inst_22400 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_22402 = (function (){var all_files = inst_22390;
var files_SINGLEQUOTE_ = inst_22391;
var res_SINGLEQUOTE_ = inst_22394;
var res = inst_22395;
var files_not_loaded = inst_22397;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_22394,inst_22391,inst_22397,inst_22395,inst_22390,inst_22400,state_val_22459,c__19665__auto__,map__22332,map__22332__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22333,map__22333__$1,msg,files){
return (function (p__22401){
var map__22465 = p__22401;
var map__22465__$1 = ((cljs.core.seq_QMARK_.call(null,map__22465))?cljs.core.apply.call(null,cljs.core.hash_map,map__22465):map__22465);
var namespace = cljs.core.get.call(null,map__22465__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__22465__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_22394,inst_22391,inst_22397,inst_22395,inst_22390,inst_22400,state_val_22459,c__19665__auto__,map__22332,map__22332__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22333,map__22333__$1,msg,files))
})();
var inst_22403 = cljs.core.map.call(null,inst_22402,inst_22395);
var inst_22404 = cljs.core.pr_str.call(null,inst_22403);
var inst_22405 = figwheel.client.utils.log.call(null,inst_22404);
var inst_22406 = (function (){var all_files = inst_22390;
var files_SINGLEQUOTE_ = inst_22391;
var res_SINGLEQUOTE_ = inst_22394;
var res = inst_22395;
var files_not_loaded = inst_22397;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_22394,inst_22391,inst_22397,inst_22395,inst_22390,inst_22400,inst_22402,inst_22403,inst_22404,inst_22405,state_val_22459,c__19665__auto__,map__22332,map__22332__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22333,map__22333__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_22394,inst_22391,inst_22397,inst_22395,inst_22390,inst_22400,inst_22402,inst_22403,inst_22404,inst_22405,state_val_22459,c__19665__auto__,map__22332,map__22332__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22333,map__22333__$1,msg,files))
})();
var inst_22407 = setTimeout(inst_22406,(10));
var state_22458__$1 = (function (){var statearr_22466 = state_22458;
(statearr_22466[(17)] = inst_22400);

(statearr_22466[(18)] = inst_22405);

return statearr_22466;
})();
var statearr_22467_22534 = state_22458__$1;
(statearr_22467_22534[(2)] = inst_22407);

(statearr_22467_22534[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (27))){
var inst_22417 = (state_22458[(19)]);
var state_22458__$1 = state_22458;
var statearr_22468_22535 = state_22458__$1;
(statearr_22468_22535[(2)] = inst_22417);

(statearr_22468_22535[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (1))){
var inst_22337 = (state_22458[(20)]);
var inst_22334 = before_jsload.call(null,files);
var inst_22335 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_22336 = (function (){return ((function (inst_22337,inst_22334,inst_22335,state_val_22459,c__19665__auto__,map__22332,map__22332__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22333,map__22333__$1,msg,files){
return (function (p1__22125_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22125_SHARP_);
});
;})(inst_22337,inst_22334,inst_22335,state_val_22459,c__19665__auto__,map__22332,map__22332__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22333,map__22333__$1,msg,files))
})();
var inst_22337__$1 = cljs.core.filter.call(null,inst_22336,files);
var inst_22338 = cljs.core.not_empty.call(null,inst_22337__$1);
var state_22458__$1 = (function (){var statearr_22469 = state_22458;
(statearr_22469[(21)] = inst_22335);

(statearr_22469[(22)] = inst_22334);

(statearr_22469[(20)] = inst_22337__$1);

return statearr_22469;
})();
if(cljs.core.truth_(inst_22338)){
var statearr_22470_22536 = state_22458__$1;
(statearr_22470_22536[(1)] = (2));

} else {
var statearr_22471_22537 = state_22458__$1;
(statearr_22471_22537[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (24))){
var state_22458__$1 = state_22458;
var statearr_22472_22538 = state_22458__$1;
(statearr_22472_22538[(2)] = null);

(statearr_22472_22538[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (4))){
var inst_22382 = (state_22458[(2)]);
var inst_22383 = (function (){return ((function (inst_22382,state_val_22459,c__19665__auto__,map__22332,map__22332__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22333,map__22333__$1,msg,files){
return (function (p1__22126_SHARP_){
var and__16057__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22126_SHARP_);
if(cljs.core.truth_(and__16057__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22126_SHARP_));
} else {
return and__16057__auto__;
}
});
;})(inst_22382,state_val_22459,c__19665__auto__,map__22332,map__22332__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22333,map__22333__$1,msg,files))
})();
var inst_22384 = cljs.core.filter.call(null,inst_22383,files);
var state_22458__$1 = (function (){var statearr_22473 = state_22458;
(statearr_22473[(23)] = inst_22382);

(statearr_22473[(24)] = inst_22384);

return statearr_22473;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_22474_22539 = state_22458__$1;
(statearr_22474_22539[(1)] = (16));

} else {
var statearr_22475_22540 = state_22458__$1;
(statearr_22475_22540[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (15))){
var inst_22372 = (state_22458[(2)]);
var state_22458__$1 = state_22458;
var statearr_22476_22541 = state_22458__$1;
(statearr_22476_22541[(2)] = inst_22372);

(statearr_22476_22541[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (21))){
var state_22458__$1 = state_22458;
var statearr_22477_22542 = state_22458__$1;
(statearr_22477_22542[(2)] = null);

(statearr_22477_22542[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (31))){
var inst_22425 = (state_22458[(25)]);
var inst_22435 = (state_22458[(2)]);
var inst_22436 = cljs.core.not_empty.call(null,inst_22425);
var state_22458__$1 = (function (){var statearr_22478 = state_22458;
(statearr_22478[(26)] = inst_22435);

return statearr_22478;
})();
if(cljs.core.truth_(inst_22436)){
var statearr_22479_22543 = state_22458__$1;
(statearr_22479_22543[(1)] = (32));

} else {
var statearr_22480_22544 = state_22458__$1;
(statearr_22480_22544[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (32))){
var inst_22425 = (state_22458[(25)]);
var inst_22438 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22425);
var inst_22439 = cljs.core.pr_str.call(null,inst_22438);
var inst_22440 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_22439)].join('');
var inst_22441 = figwheel.client.utils.log.call(null,inst_22440);
var state_22458__$1 = state_22458;
var statearr_22481_22545 = state_22458__$1;
(statearr_22481_22545[(2)] = inst_22441);

(statearr_22481_22545[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (33))){
var state_22458__$1 = state_22458;
var statearr_22482_22546 = state_22458__$1;
(statearr_22482_22546[(2)] = null);

(statearr_22482_22546[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (13))){
var inst_22358 = (state_22458[(27)]);
var inst_22362 = cljs.core.chunk_first.call(null,inst_22358);
var inst_22363 = cljs.core.chunk_rest.call(null,inst_22358);
var inst_22364 = cljs.core.count.call(null,inst_22362);
var inst_22345 = inst_22363;
var inst_22346 = inst_22362;
var inst_22347 = inst_22364;
var inst_22348 = (0);
var state_22458__$1 = (function (){var statearr_22483 = state_22458;
(statearr_22483[(7)] = inst_22347);

(statearr_22483[(8)] = inst_22348);

(statearr_22483[(9)] = inst_22345);

(statearr_22483[(10)] = inst_22346);

return statearr_22483;
})();
var statearr_22484_22547 = state_22458__$1;
(statearr_22484_22547[(2)] = null);

(statearr_22484_22547[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (22))){
var inst_22397 = (state_22458[(14)]);
var inst_22410 = (state_22458[(2)]);
var inst_22411 = cljs.core.not_empty.call(null,inst_22397);
var state_22458__$1 = (function (){var statearr_22485 = state_22458;
(statearr_22485[(28)] = inst_22410);

return statearr_22485;
})();
if(cljs.core.truth_(inst_22411)){
var statearr_22486_22548 = state_22458__$1;
(statearr_22486_22548[(1)] = (23));

} else {
var statearr_22487_22549 = state_22458__$1;
(statearr_22487_22549[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (36))){
var state_22458__$1 = state_22458;
var statearr_22488_22550 = state_22458__$1;
(statearr_22488_22550[(2)] = null);

(statearr_22488_22550[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (29))){
var inst_22424 = (state_22458[(29)]);
var inst_22429 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22424);
var inst_22430 = cljs.core.pr_str.call(null,inst_22429);
var inst_22431 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_22430)].join('');
var inst_22432 = figwheel.client.utils.log.call(null,inst_22431);
var state_22458__$1 = state_22458;
var statearr_22489_22551 = state_22458__$1;
(statearr_22489_22551[(2)] = inst_22432);

(statearr_22489_22551[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (6))){
var inst_22379 = (state_22458[(2)]);
var state_22458__$1 = state_22458;
var statearr_22490_22552 = state_22458__$1;
(statearr_22490_22552[(2)] = inst_22379);

(statearr_22490_22552[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (28))){
var inst_22424 = (state_22458[(29)]);
var inst_22423 = (state_22458[(2)]);
var inst_22424__$1 = cljs.core.get.call(null,inst_22423,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_22425 = cljs.core.get.call(null,inst_22423,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_22426 = cljs.core.get.call(null,inst_22423,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_22427 = cljs.core.not_empty.call(null,inst_22424__$1);
var state_22458__$1 = (function (){var statearr_22491 = state_22458;
(statearr_22491[(29)] = inst_22424__$1);

(statearr_22491[(25)] = inst_22425);

(statearr_22491[(30)] = inst_22426);

return statearr_22491;
})();
if(cljs.core.truth_(inst_22427)){
var statearr_22492_22553 = state_22458__$1;
(statearr_22492_22553[(1)] = (29));

} else {
var statearr_22493_22554 = state_22458__$1;
(statearr_22493_22554[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (25))){
var inst_22456 = (state_22458[(2)]);
var state_22458__$1 = state_22458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22458__$1,inst_22456);
} else {
if((state_val_22459 === (34))){
var inst_22426 = (state_22458[(30)]);
var inst_22444 = (state_22458[(2)]);
var inst_22445 = cljs.core.not_empty.call(null,inst_22426);
var state_22458__$1 = (function (){var statearr_22494 = state_22458;
(statearr_22494[(31)] = inst_22444);

return statearr_22494;
})();
if(cljs.core.truth_(inst_22445)){
var statearr_22495_22555 = state_22458__$1;
(statearr_22495_22555[(1)] = (35));

} else {
var statearr_22496_22556 = state_22458__$1;
(statearr_22496_22556[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (17))){
var inst_22384 = (state_22458[(24)]);
var state_22458__$1 = state_22458;
var statearr_22497_22557 = state_22458__$1;
(statearr_22497_22557[(2)] = inst_22384);

(statearr_22497_22557[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (3))){
var state_22458__$1 = state_22458;
var statearr_22498_22558 = state_22458__$1;
(statearr_22498_22558[(2)] = null);

(statearr_22498_22558[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (12))){
var inst_22375 = (state_22458[(2)]);
var state_22458__$1 = state_22458;
var statearr_22499_22559 = state_22458__$1;
(statearr_22499_22559[(2)] = inst_22375);

(statearr_22499_22559[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (2))){
var inst_22337 = (state_22458[(20)]);
var inst_22344 = cljs.core.seq.call(null,inst_22337);
var inst_22345 = inst_22344;
var inst_22346 = null;
var inst_22347 = (0);
var inst_22348 = (0);
var state_22458__$1 = (function (){var statearr_22500 = state_22458;
(statearr_22500[(7)] = inst_22347);

(statearr_22500[(8)] = inst_22348);

(statearr_22500[(9)] = inst_22345);

(statearr_22500[(10)] = inst_22346);

return statearr_22500;
})();
var statearr_22501_22560 = state_22458__$1;
(statearr_22501_22560[(2)] = null);

(statearr_22501_22560[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (23))){
var inst_22394 = (state_22458[(12)]);
var inst_22417 = (state_22458[(19)]);
var inst_22391 = (state_22458[(13)]);
var inst_22397 = (state_22458[(14)]);
var inst_22395 = (state_22458[(15)]);
var inst_22390 = (state_22458[(16)]);
var inst_22413 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_22416 = (function (){var all_files = inst_22390;
var files_SINGLEQUOTE_ = inst_22391;
var res_SINGLEQUOTE_ = inst_22394;
var res = inst_22395;
var files_not_loaded = inst_22397;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_22394,inst_22417,inst_22391,inst_22397,inst_22395,inst_22390,inst_22413,state_val_22459,c__19665__auto__,map__22332,map__22332__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22333,map__22333__$1,msg,files){
return (function (p__22415){
var map__22502 = p__22415;
var map__22502__$1 = ((cljs.core.seq_QMARK_.call(null,map__22502))?cljs.core.apply.call(null,cljs.core.hash_map,map__22502):map__22502);
var meta_data = cljs.core.get.call(null,map__22502__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_22394,inst_22417,inst_22391,inst_22397,inst_22395,inst_22390,inst_22413,state_val_22459,c__19665__auto__,map__22332,map__22332__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22333,map__22333__$1,msg,files))
})();
var inst_22417__$1 = cljs.core.group_by.call(null,inst_22416,inst_22397);
var inst_22418 = cljs.core.seq_QMARK_.call(null,inst_22417__$1);
var state_22458__$1 = (function (){var statearr_22503 = state_22458;
(statearr_22503[(19)] = inst_22417__$1);

(statearr_22503[(32)] = inst_22413);

return statearr_22503;
})();
if(inst_22418){
var statearr_22504_22561 = state_22458__$1;
(statearr_22504_22561[(1)] = (26));

} else {
var statearr_22505_22562 = state_22458__$1;
(statearr_22505_22562[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (35))){
var inst_22426 = (state_22458[(30)]);
var inst_22447 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22426);
var inst_22448 = cljs.core.pr_str.call(null,inst_22447);
var inst_22449 = [cljs.core.str("not required: "),cljs.core.str(inst_22448)].join('');
var inst_22450 = figwheel.client.utils.log.call(null,inst_22449);
var state_22458__$1 = state_22458;
var statearr_22506_22563 = state_22458__$1;
(statearr_22506_22563[(2)] = inst_22450);

(statearr_22506_22563[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (19))){
var inst_22394 = (state_22458[(12)]);
var inst_22391 = (state_22458[(13)]);
var inst_22395 = (state_22458[(15)]);
var inst_22390 = (state_22458[(16)]);
var inst_22394__$1 = (state_22458[(2)]);
var inst_22395__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22394__$1);
var inst_22396 = (function (){var all_files = inst_22390;
var files_SINGLEQUOTE_ = inst_22391;
var res_SINGLEQUOTE_ = inst_22394__$1;
var res = inst_22395__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_22394,inst_22391,inst_22395,inst_22390,inst_22394__$1,inst_22395__$1,state_val_22459,c__19665__auto__,map__22332,map__22332__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22333,map__22333__$1,msg,files){
return (function (p1__22128_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__22128_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_22394,inst_22391,inst_22395,inst_22390,inst_22394__$1,inst_22395__$1,state_val_22459,c__19665__auto__,map__22332,map__22332__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22333,map__22333__$1,msg,files))
})();
var inst_22397 = cljs.core.filter.call(null,inst_22396,inst_22394__$1);
var inst_22398 = cljs.core.not_empty.call(null,inst_22395__$1);
var state_22458__$1 = (function (){var statearr_22507 = state_22458;
(statearr_22507[(12)] = inst_22394__$1);

(statearr_22507[(14)] = inst_22397);

(statearr_22507[(15)] = inst_22395__$1);

return statearr_22507;
})();
if(cljs.core.truth_(inst_22398)){
var statearr_22508_22564 = state_22458__$1;
(statearr_22508_22564[(1)] = (20));

} else {
var statearr_22509_22565 = state_22458__$1;
(statearr_22509_22565[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (11))){
var state_22458__$1 = state_22458;
var statearr_22510_22566 = state_22458__$1;
(statearr_22510_22566[(2)] = null);

(statearr_22510_22566[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (9))){
var inst_22377 = (state_22458[(2)]);
var state_22458__$1 = state_22458;
var statearr_22511_22567 = state_22458__$1;
(statearr_22511_22567[(2)] = inst_22377);

(statearr_22511_22567[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (5))){
var inst_22347 = (state_22458[(7)]);
var inst_22348 = (state_22458[(8)]);
var inst_22350 = (inst_22348 < inst_22347);
var inst_22351 = inst_22350;
var state_22458__$1 = state_22458;
if(cljs.core.truth_(inst_22351)){
var statearr_22512_22568 = state_22458__$1;
(statearr_22512_22568[(1)] = (7));

} else {
var statearr_22513_22569 = state_22458__$1;
(statearr_22513_22569[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (14))){
var inst_22358 = (state_22458[(27)]);
var inst_22367 = cljs.core.first.call(null,inst_22358);
var inst_22368 = figwheel.client.file_reloading.eval_body.call(null,inst_22367,opts);
var inst_22369 = cljs.core.next.call(null,inst_22358);
var inst_22345 = inst_22369;
var inst_22346 = null;
var inst_22347 = (0);
var inst_22348 = (0);
var state_22458__$1 = (function (){var statearr_22514 = state_22458;
(statearr_22514[(7)] = inst_22347);

(statearr_22514[(33)] = inst_22368);

(statearr_22514[(8)] = inst_22348);

(statearr_22514[(9)] = inst_22345);

(statearr_22514[(10)] = inst_22346);

return statearr_22514;
})();
var statearr_22515_22570 = state_22458__$1;
(statearr_22515_22570[(2)] = null);

(statearr_22515_22570[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (26))){
var inst_22417 = (state_22458[(19)]);
var inst_22420 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22417);
var state_22458__$1 = state_22458;
var statearr_22516_22571 = state_22458__$1;
(statearr_22516_22571[(2)] = inst_22420);

(statearr_22516_22571[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (16))){
var inst_22384 = (state_22458[(24)]);
var inst_22386 = (function (){var all_files = inst_22384;
return ((function (all_files,inst_22384,state_val_22459,c__19665__auto__,map__22332,map__22332__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22333,map__22333__$1,msg,files){
return (function (p1__22127_SHARP_){
return cljs.core.update_in.call(null,p1__22127_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_22384,state_val_22459,c__19665__auto__,map__22332,map__22332__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22333,map__22333__$1,msg,files))
})();
var inst_22387 = cljs.core.map.call(null,inst_22386,inst_22384);
var state_22458__$1 = state_22458;
var statearr_22517_22572 = state_22458__$1;
(statearr_22517_22572[(2)] = inst_22387);

(statearr_22517_22572[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (30))){
var state_22458__$1 = state_22458;
var statearr_22518_22573 = state_22458__$1;
(statearr_22518_22573[(2)] = null);

(statearr_22518_22573[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (10))){
var inst_22358 = (state_22458[(27)]);
var inst_22360 = cljs.core.chunked_seq_QMARK_.call(null,inst_22358);
var state_22458__$1 = state_22458;
if(inst_22360){
var statearr_22519_22574 = state_22458__$1;
(statearr_22519_22574[(1)] = (13));

} else {
var statearr_22520_22575 = state_22458__$1;
(statearr_22520_22575[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (18))){
var inst_22391 = (state_22458[(13)]);
var inst_22390 = (state_22458[(16)]);
var inst_22390__$1 = (state_22458[(2)]);
var inst_22391__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_22390__$1);
var inst_22392 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_22391__$1);
var state_22458__$1 = (function (){var statearr_22521 = state_22458;
(statearr_22521[(13)] = inst_22391__$1);

(statearr_22521[(16)] = inst_22390__$1);

return statearr_22521;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22458__$1,(19),inst_22392);
} else {
if((state_val_22459 === (37))){
var inst_22453 = (state_22458[(2)]);
var state_22458__$1 = state_22458;
var statearr_22522_22576 = state_22458__$1;
(statearr_22522_22576[(2)] = inst_22453);

(statearr_22522_22576[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (8))){
var inst_22345 = (state_22458[(9)]);
var inst_22358 = (state_22458[(27)]);
var inst_22358__$1 = cljs.core.seq.call(null,inst_22345);
var state_22458__$1 = (function (){var statearr_22523 = state_22458;
(statearr_22523[(27)] = inst_22358__$1);

return statearr_22523;
})();
if(inst_22358__$1){
var statearr_22524_22577 = state_22458__$1;
(statearr_22524_22577[(1)] = (10));

} else {
var statearr_22525_22578 = state_22458__$1;
(statearr_22525_22578[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19665__auto__,map__22332,map__22332__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22333,map__22333__$1,msg,files))
;
return ((function (switch__19644__auto__,c__19665__auto__,map__22332,map__22332__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22333,map__22333__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19645__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19645__auto____0 = (function (){
var statearr_22529 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22529[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19645__auto__);

(statearr_22529[(1)] = (1));

return statearr_22529;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19645__auto____1 = (function (state_22458){
while(true){
var ret_value__19646__auto__ = (function (){try{while(true){
var result__19647__auto__ = switch__19644__auto__.call(null,state_22458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19647__auto__;
}
break;
}
}catch (e22530){if((e22530 instanceof Object)){
var ex__19648__auto__ = e22530;
var statearr_22531_22579 = state_22458;
(statearr_22531_22579[(5)] = ex__19648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22580 = state_22458;
state_22458 = G__22580;
continue;
} else {
return ret_value__19646__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19645__auto__ = function(state_22458){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19645__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19645__auto____1.call(this,state_22458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19645__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19645__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19645__auto__;
})()
;})(switch__19644__auto__,c__19665__auto__,map__22332,map__22332__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22333,map__22333__$1,msg,files))
})();
var state__19667__auto__ = (function (){var statearr_22532 = f__19666__auto__.call(null);
(statearr_22532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19665__auto__);

return statearr_22532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19667__auto__);
});})(c__19665__auto__,map__22332,map__22332__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22333,map__22333__$1,msg,files))
);

return c__19665__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__22583,link){
var map__22585 = p__22583;
var map__22585__$1 = ((cljs.core.seq_QMARK_.call(null,map__22585))?cljs.core.apply.call(null,cljs.core.hash_map,map__22585):map__22585);
var file = cljs.core.get.call(null,map__22585__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__22585,map__22585__$1,file){
return (function (p1__22581_SHARP_,p2__22582_SHARP_){
if(cljs.core._EQ_.call(null,p1__22581_SHARP_,p2__22582_SHARP_)){
return p1__22581_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__22585,map__22585__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__22589){
var map__22590 = p__22589;
var map__22590__$1 = ((cljs.core.seq_QMARK_.call(null,map__22590))?cljs.core.apply.call(null,cljs.core.hash_map,map__22590):map__22590);
var match_length = cljs.core.get.call(null,map__22590__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__22590__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__22586_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__22586_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__22592 = arguments.length;
switch (G__22592) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__22594){
var map__22596 = p__22594;
var map__22596__$1 = ((cljs.core.seq_QMARK_.call(null,map__22596))?cljs.core.apply.call(null,cljs.core.hash_map,map__22596):map__22596);
var f_data = map__22596__$1;
var file = cljs.core.get.call(null,map__22596__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__22596__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__16069__auto__ = request_url;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__22597,files_msg){
var map__22619 = p__22597;
var map__22619__$1 = ((cljs.core.seq_QMARK_.call(null,map__22619))?cljs.core.apply.call(null,cljs.core.hash_map,map__22619):map__22619);
var opts = map__22619__$1;
var on_cssload = cljs.core.get.call(null,map__22619__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__22620_22640 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__22621_22641 = null;
var count__22622_22642 = (0);
var i__22623_22643 = (0);
while(true){
if((i__22623_22643 < count__22622_22642)){
var f_22644 = cljs.core._nth.call(null,chunk__22621_22641,i__22623_22643);
figwheel.client.file_reloading.reload_css_file.call(null,f_22644);

var G__22645 = seq__22620_22640;
var G__22646 = chunk__22621_22641;
var G__22647 = count__22622_22642;
var G__22648 = (i__22623_22643 + (1));
seq__22620_22640 = G__22645;
chunk__22621_22641 = G__22646;
count__22622_22642 = G__22647;
i__22623_22643 = G__22648;
continue;
} else {
var temp__4425__auto___22649 = cljs.core.seq.call(null,seq__22620_22640);
if(temp__4425__auto___22649){
var seq__22620_22650__$1 = temp__4425__auto___22649;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22620_22650__$1)){
var c__16854__auto___22651 = cljs.core.chunk_first.call(null,seq__22620_22650__$1);
var G__22652 = cljs.core.chunk_rest.call(null,seq__22620_22650__$1);
var G__22653 = c__16854__auto___22651;
var G__22654 = cljs.core.count.call(null,c__16854__auto___22651);
var G__22655 = (0);
seq__22620_22640 = G__22652;
chunk__22621_22641 = G__22653;
count__22622_22642 = G__22654;
i__22623_22643 = G__22655;
continue;
} else {
var f_22656 = cljs.core.first.call(null,seq__22620_22650__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_22656);

var G__22657 = cljs.core.next.call(null,seq__22620_22650__$1);
var G__22658 = null;
var G__22659 = (0);
var G__22660 = (0);
seq__22620_22640 = G__22657;
chunk__22621_22641 = G__22658;
count__22622_22642 = G__22659;
i__22623_22643 = G__22660;
continue;
}
} else {
}
}
break;
}

var c__19665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19665__auto__,map__22619,map__22619__$1,opts,on_cssload){
return (function (){
var f__19666__auto__ = (function (){var switch__19644__auto__ = ((function (c__19665__auto__,map__22619,map__22619__$1,opts,on_cssload){
return (function (state_22630){
var state_val_22631 = (state_22630[(1)]);
if((state_val_22631 === (1))){
var inst_22624 = cljs.core.async.timeout.call(null,(100));
var state_22630__$1 = state_22630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22630__$1,(2),inst_22624);
} else {
if((state_val_22631 === (2))){
var inst_22626 = (state_22630[(2)]);
var inst_22627 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_22628 = on_cssload.call(null,inst_22627);
var state_22630__$1 = (function (){var statearr_22632 = state_22630;
(statearr_22632[(7)] = inst_22626);

return statearr_22632;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22630__$1,inst_22628);
} else {
return null;
}
}
});})(c__19665__auto__,map__22619,map__22619__$1,opts,on_cssload))
;
return ((function (switch__19644__auto__,c__19665__auto__,map__22619,map__22619__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19645__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19645__auto____0 = (function (){
var statearr_22636 = [null,null,null,null,null,null,null,null];
(statearr_22636[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__19645__auto__);

(statearr_22636[(1)] = (1));

return statearr_22636;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19645__auto____1 = (function (state_22630){
while(true){
var ret_value__19646__auto__ = (function (){try{while(true){
var result__19647__auto__ = switch__19644__auto__.call(null,state_22630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19647__auto__;
}
break;
}
}catch (e22637){if((e22637 instanceof Object)){
var ex__19648__auto__ = e22637;
var statearr_22638_22661 = state_22630;
(statearr_22638_22661[(5)] = ex__19648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22662 = state_22630;
state_22630 = G__22662;
continue;
} else {
return ret_value__19646__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__19645__auto__ = function(state_22630){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19645__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19645__auto____1.call(this,state_22630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19645__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19645__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19645__auto__;
})()
;})(switch__19644__auto__,c__19665__auto__,map__22619,map__22619__$1,opts,on_cssload))
})();
var state__19667__auto__ = (function (){var statearr_22639 = f__19666__auto__.call(null);
(statearr_22639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19665__auto__);

return statearr_22639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19667__auto__);
});})(c__19665__auto__,map__22619,map__22619__$1,opts,on_cssload))
);

return c__19665__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1440277346472