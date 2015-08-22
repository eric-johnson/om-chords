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
return cljs.core.reduce.call(null,(function (p1__25842_SHARP_,p2__25843_SHARP_){
var and__16057__auto__ = p1__25842_SHARP_;
if(cljs.core.truth_(and__16057__auto__)){
return p2__25843_SHARP_;
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
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__25844){
var map__25845 = p__25844;
var map__25845__$1 = ((cljs.core.seq_QMARK_.call(null,map__25845))?cljs.core.apply.call(null,cljs.core.hash_map,map__25845):map__25845);
var file = cljs.core.get.call(null,map__25845__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__25846){
var map__25847 = p__25846;
var map__25847__$1 = ((cljs.core.seq_QMARK_.call(null,map__25847))?cljs.core.apply.call(null,cljs.core.hash_map,map__25847):map__25847);
var namespace = cljs.core.get.call(null,map__25847__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
}catch (e25848){if((e25848 instanceof Error)){
var e = e25848;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25848;

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
var G__25850 = arguments.length;
switch (G__25850) {
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
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25852,callback){
var map__25854 = p__25852;
var map__25854__$1 = ((cljs.core.seq_QMARK_.call(null,map__25854))?cljs.core.apply.call(null,cljs.core.hash_map,map__25854):map__25854);
var file_msg = map__25854__$1;
var request_url = cljs.core.get.call(null,map__25854__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25854,map__25854__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25854,map__25854__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25855){
var map__25857 = p__25855;
var map__25857__$1 = ((cljs.core.seq_QMARK_.call(null,map__25857))?cljs.core.apply.call(null,cljs.core.hash_map,map__25857):map__25857);
var file_msg = map__25857__$1;
var namespace = cljs.core.get.call(null,map__25857__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__25857__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25858,callback){
var map__25860 = p__25858;
var map__25860__$1 = ((cljs.core.seq_QMARK_.call(null,map__25860))?cljs.core.apply.call(null,cljs.core.hash_map,map__25860):map__25860);
var file_msg = map__25860__$1;
var request_url = cljs.core.get.call(null,map__25860__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25860__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__20316__auto___25947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20316__auto___25947,out){
return (function (){
var f__20317__auto__ = (function (){var switch__20254__auto__ = ((function (c__20316__auto___25947,out){
return (function (state_25929){
var state_val_25930 = (state_25929[(1)]);
if((state_val_25930 === (1))){
var inst_25907 = cljs.core.nth.call(null,files,(0),null);
var inst_25908 = cljs.core.nthnext.call(null,files,(1));
var inst_25909 = files;
var state_25929__$1 = (function (){var statearr_25931 = state_25929;
(statearr_25931[(7)] = inst_25908);

(statearr_25931[(8)] = inst_25909);

(statearr_25931[(9)] = inst_25907);

return statearr_25931;
})();
var statearr_25932_25948 = state_25929__$1;
(statearr_25932_25948[(2)] = null);

(statearr_25932_25948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25930 === (2))){
var inst_25909 = (state_25929[(8)]);
var inst_25912 = (state_25929[(10)]);
var inst_25912__$1 = cljs.core.nth.call(null,inst_25909,(0),null);
var inst_25913 = cljs.core.nthnext.call(null,inst_25909,(1));
var inst_25914 = (inst_25912__$1 == null);
var inst_25915 = cljs.core.not.call(null,inst_25914);
var state_25929__$1 = (function (){var statearr_25933 = state_25929;
(statearr_25933[(11)] = inst_25913);

(statearr_25933[(10)] = inst_25912__$1);

return statearr_25933;
})();
if(inst_25915){
var statearr_25934_25949 = state_25929__$1;
(statearr_25934_25949[(1)] = (4));

} else {
var statearr_25935_25950 = state_25929__$1;
(statearr_25935_25950[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25930 === (3))){
var inst_25927 = (state_25929[(2)]);
var state_25929__$1 = state_25929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25929__$1,inst_25927);
} else {
if((state_val_25930 === (4))){
var inst_25912 = (state_25929[(10)]);
var inst_25917 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25912);
var state_25929__$1 = state_25929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25929__$1,(7),inst_25917);
} else {
if((state_val_25930 === (5))){
var inst_25923 = cljs.core.async.close_BANG_.call(null,out);
var state_25929__$1 = state_25929;
var statearr_25936_25951 = state_25929__$1;
(statearr_25936_25951[(2)] = inst_25923);

(statearr_25936_25951[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25930 === (6))){
var inst_25925 = (state_25929[(2)]);
var state_25929__$1 = state_25929;
var statearr_25937_25952 = state_25929__$1;
(statearr_25937_25952[(2)] = inst_25925);

(statearr_25937_25952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25930 === (7))){
var inst_25913 = (state_25929[(11)]);
var inst_25919 = (state_25929[(2)]);
var inst_25920 = cljs.core.async.put_BANG_.call(null,out,inst_25919);
var inst_25909 = inst_25913;
var state_25929__$1 = (function (){var statearr_25938 = state_25929;
(statearr_25938[(12)] = inst_25920);

(statearr_25938[(8)] = inst_25909);

return statearr_25938;
})();
var statearr_25939_25953 = state_25929__$1;
(statearr_25939_25953[(2)] = null);

(statearr_25939_25953[(1)] = (2));


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
});})(c__20316__auto___25947,out))
;
return ((function (switch__20254__auto__,c__20316__auto___25947,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20255__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20255__auto____0 = (function (){
var statearr_25943 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25943[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20255__auto__);

(statearr_25943[(1)] = (1));

return statearr_25943;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20255__auto____1 = (function (state_25929){
while(true){
var ret_value__20256__auto__ = (function (){try{while(true){
var result__20257__auto__ = switch__20254__auto__.call(null,state_25929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20257__auto__;
}
break;
}
}catch (e25944){if((e25944 instanceof Object)){
var ex__20258__auto__ = e25944;
var statearr_25945_25954 = state_25929;
(statearr_25945_25954[(5)] = ex__20258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25955 = state_25929;
state_25929 = G__25955;
continue;
} else {
return ret_value__20256__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20255__auto__ = function(state_25929){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20255__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20255__auto____1.call(this,state_25929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20255__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20255__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20255__auto__;
})()
;})(switch__20254__auto__,c__20316__auto___25947,out))
})();
var state__20318__auto__ = (function (){var statearr_25946 = f__20317__auto__.call(null);
(statearr_25946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20316__auto___25947);

return statearr_25946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20318__auto__);
});})(c__20316__auto___25947,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__25956,p__25957){
var map__25960 = p__25956;
var map__25960__$1 = ((cljs.core.seq_QMARK_.call(null,map__25960))?cljs.core.apply.call(null,cljs.core.hash_map,map__25960):map__25960);
var opts = map__25960__$1;
var url_rewriter = cljs.core.get.call(null,map__25960__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__25961 = p__25957;
var map__25961__$1 = ((cljs.core.seq_QMARK_.call(null,map__25961))?cljs.core.apply.call(null,cljs.core.hash_map,map__25961):map__25961);
var file_msg = map__25961__$1;
var file = cljs.core.get.call(null,map__25961__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25962,opts){
var map__25965 = p__25962;
var map__25965__$1 = ((cljs.core.seq_QMARK_.call(null,map__25965))?cljs.core.apply.call(null,cljs.core.hash_map,map__25965):map__25965);
var eval_body__$1 = cljs.core.get.call(null,map__25965__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25965__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e25966){var e = e25966;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25971,p__25972){
var map__26175 = p__25971;
var map__26175__$1 = ((cljs.core.seq_QMARK_.call(null,map__26175))?cljs.core.apply.call(null,cljs.core.hash_map,map__26175):map__26175);
var opts = map__26175__$1;
var before_jsload = cljs.core.get.call(null,map__26175__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__26175__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__26175__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__26176 = p__25972;
var map__26176__$1 = ((cljs.core.seq_QMARK_.call(null,map__26176))?cljs.core.apply.call(null,cljs.core.hash_map,map__26176):map__26176);
var msg = map__26176__$1;
var files = cljs.core.get.call(null,map__26176__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__20316__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20316__auto__,map__26175,map__26175__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26176,map__26176__$1,msg,files){
return (function (){
var f__20317__auto__ = (function (){var switch__20254__auto__ = ((function (c__20316__auto__,map__26175,map__26175__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26176,map__26176__$1,msg,files){
return (function (state_26301){
var state_val_26302 = (state_26301[(1)]);
if((state_val_26302 === (7))){
var inst_26190 = (state_26301[(7)]);
var inst_26191 = (state_26301[(8)]);
var inst_26189 = (state_26301[(9)]);
var inst_26188 = (state_26301[(10)]);
var inst_26196 = cljs.core._nth.call(null,inst_26189,inst_26191);
var inst_26197 = figwheel.client.file_reloading.eval_body.call(null,inst_26196,opts);
var inst_26198 = (inst_26191 + (1));
var tmp26303 = inst_26190;
var tmp26304 = inst_26189;
var tmp26305 = inst_26188;
var inst_26188__$1 = tmp26305;
var inst_26189__$1 = tmp26304;
var inst_26190__$1 = tmp26303;
var inst_26191__$1 = inst_26198;
var state_26301__$1 = (function (){var statearr_26306 = state_26301;
(statearr_26306[(7)] = inst_26190__$1);

(statearr_26306[(8)] = inst_26191__$1);

(statearr_26306[(9)] = inst_26189__$1);

(statearr_26306[(11)] = inst_26197);

(statearr_26306[(10)] = inst_26188__$1);

return statearr_26306;
})();
var statearr_26307_26376 = state_26301__$1;
(statearr_26307_26376[(2)] = null);

(statearr_26307_26376[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26302 === (20))){
var inst_26238 = (state_26301[(12)]);
var inst_26240 = (state_26301[(13)]);
var inst_26234 = (state_26301[(14)]);
var inst_26237 = (state_26301[(15)]);
var inst_26233 = (state_26301[(16)]);
var inst_26243 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26245 = (function (){var all_files = inst_26233;
var files_SINGLEQUOTE_ = inst_26234;
var res_SINGLEQUOTE_ = inst_26237;
var res = inst_26238;
var files_not_loaded = inst_26240;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26238,inst_26240,inst_26234,inst_26237,inst_26233,inst_26243,state_val_26302,c__20316__auto__,map__26175,map__26175__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26176,map__26176__$1,msg,files){
return (function (p__26244){
var map__26308 = p__26244;
var map__26308__$1 = ((cljs.core.seq_QMARK_.call(null,map__26308))?cljs.core.apply.call(null,cljs.core.hash_map,map__26308):map__26308);
var namespace = cljs.core.get.call(null,map__26308__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26308__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26238,inst_26240,inst_26234,inst_26237,inst_26233,inst_26243,state_val_26302,c__20316__auto__,map__26175,map__26175__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26176,map__26176__$1,msg,files))
})();
var inst_26246 = cljs.core.map.call(null,inst_26245,inst_26238);
var inst_26247 = cljs.core.pr_str.call(null,inst_26246);
var inst_26248 = figwheel.client.utils.log.call(null,inst_26247);
var inst_26249 = (function (){var all_files = inst_26233;
var files_SINGLEQUOTE_ = inst_26234;
var res_SINGLEQUOTE_ = inst_26237;
var res = inst_26238;
var files_not_loaded = inst_26240;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26238,inst_26240,inst_26234,inst_26237,inst_26233,inst_26243,inst_26245,inst_26246,inst_26247,inst_26248,state_val_26302,c__20316__auto__,map__26175,map__26175__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26176,map__26176__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26238,inst_26240,inst_26234,inst_26237,inst_26233,inst_26243,inst_26245,inst_26246,inst_26247,inst_26248,state_val_26302,c__20316__auto__,map__26175,map__26175__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26176,map__26176__$1,msg,files))
})();
var inst_26250 = setTimeout(inst_26249,(10));
var state_26301__$1 = (function (){var statearr_26309 = state_26301;
(statearr_26309[(17)] = inst_26248);

(statearr_26309[(18)] = inst_26243);

return statearr_26309;
})();
var statearr_26310_26377 = state_26301__$1;
(statearr_26310_26377[(2)] = inst_26250);

(statearr_26310_26377[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26302 === (27))){
var inst_26260 = (state_26301[(19)]);
var state_26301__$1 = state_26301;
var statearr_26311_26378 = state_26301__$1;
(statearr_26311_26378[(2)] = inst_26260);

(statearr_26311_26378[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26302 === (1))){
var inst_26180 = (state_26301[(20)]);
var inst_26177 = before_jsload.call(null,files);
var inst_26178 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26179 = (function (){return ((function (inst_26180,inst_26177,inst_26178,state_val_26302,c__20316__auto__,map__26175,map__26175__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26176,map__26176__$1,msg,files){
return (function (p1__25967_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25967_SHARP_);
});
;})(inst_26180,inst_26177,inst_26178,state_val_26302,c__20316__auto__,map__26175,map__26175__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26176,map__26176__$1,msg,files))
})();
var inst_26180__$1 = cljs.core.filter.call(null,inst_26179,files);
var inst_26181 = cljs.core.not_empty.call(null,inst_26180__$1);
var state_26301__$1 = (function (){var statearr_26312 = state_26301;
(statearr_26312[(20)] = inst_26180__$1);

(statearr_26312[(21)] = inst_26177);

(statearr_26312[(22)] = inst_26178);

return statearr_26312;
})();
if(cljs.core.truth_(inst_26181)){
var statearr_26313_26379 = state_26301__$1;
(statearr_26313_26379[(1)] = (2));

} else {
var statearr_26314_26380 = state_26301__$1;
(statearr_26314_26380[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26302 === (24))){
var state_26301__$1 = state_26301;
var statearr_26315_26381 = state_26301__$1;
(statearr_26315_26381[(2)] = null);

(statearr_26315_26381[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26302 === (4))){
var inst_26225 = (state_26301[(2)]);
var inst_26226 = (function (){return ((function (inst_26225,state_val_26302,c__20316__auto__,map__26175,map__26175__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26176,map__26176__$1,msg,files){
return (function (p1__25968_SHARP_){
var and__16057__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25968_SHARP_);
if(cljs.core.truth_(and__16057__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25968_SHARP_));
} else {
return and__16057__auto__;
}
});
;})(inst_26225,state_val_26302,c__20316__auto__,map__26175,map__26175__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26176,map__26176__$1,msg,files))
})();
var inst_26227 = cljs.core.filter.call(null,inst_26226,files);
var state_26301__$1 = (function (){var statearr_26316 = state_26301;
(statearr_26316[(23)] = inst_26227);

(statearr_26316[(24)] = inst_26225);

return statearr_26316;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_26317_26382 = state_26301__$1;
(statearr_26317_26382[(1)] = (16));

} else {
var statearr_26318_26383 = state_26301__$1;
(statearr_26318_26383[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26302 === (15))){
var inst_26215 = (state_26301[(2)]);
var state_26301__$1 = state_26301;
var statearr_26319_26384 = state_26301__$1;
(statearr_26319_26384[(2)] = inst_26215);

(statearr_26319_26384[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26302 === (21))){
var state_26301__$1 = state_26301;
var statearr_26320_26385 = state_26301__$1;
(statearr_26320_26385[(2)] = null);

(statearr_26320_26385[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26302 === (31))){
var inst_26268 = (state_26301[(25)]);
var inst_26278 = (state_26301[(2)]);
var inst_26279 = cljs.core.not_empty.call(null,inst_26268);
var state_26301__$1 = (function (){var statearr_26321 = state_26301;
(statearr_26321[(26)] = inst_26278);

return statearr_26321;
})();
if(cljs.core.truth_(inst_26279)){
var statearr_26322_26386 = state_26301__$1;
(statearr_26322_26386[(1)] = (32));

} else {
var statearr_26323_26387 = state_26301__$1;
(statearr_26323_26387[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26302 === (32))){
var inst_26268 = (state_26301[(25)]);
var inst_26281 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26268);
var inst_26282 = cljs.core.pr_str.call(null,inst_26281);
var inst_26283 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_26282)].join('');
var inst_26284 = figwheel.client.utils.log.call(null,inst_26283);
var state_26301__$1 = state_26301;
var statearr_26324_26388 = state_26301__$1;
(statearr_26324_26388[(2)] = inst_26284);

(statearr_26324_26388[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26302 === (33))){
var state_26301__$1 = state_26301;
var statearr_26325_26389 = state_26301__$1;
(statearr_26325_26389[(2)] = null);

(statearr_26325_26389[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26302 === (13))){
var inst_26201 = (state_26301[(27)]);
var inst_26205 = cljs.core.chunk_first.call(null,inst_26201);
var inst_26206 = cljs.core.chunk_rest.call(null,inst_26201);
var inst_26207 = cljs.core.count.call(null,inst_26205);
var inst_26188 = inst_26206;
var inst_26189 = inst_26205;
var inst_26190 = inst_26207;
var inst_26191 = (0);
var state_26301__$1 = (function (){var statearr_26326 = state_26301;
(statearr_26326[(7)] = inst_26190);

(statearr_26326[(8)] = inst_26191);

(statearr_26326[(9)] = inst_26189);

(statearr_26326[(10)] = inst_26188);

return statearr_26326;
})();
var statearr_26327_26390 = state_26301__$1;
(statearr_26327_26390[(2)] = null);

(statearr_26327_26390[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26302 === (22))){
var inst_26240 = (state_26301[(13)]);
var inst_26253 = (state_26301[(2)]);
var inst_26254 = cljs.core.not_empty.call(null,inst_26240);
var state_26301__$1 = (function (){var statearr_26328 = state_26301;
(statearr_26328[(28)] = inst_26253);

return statearr_26328;
})();
if(cljs.core.truth_(inst_26254)){
var statearr_26329_26391 = state_26301__$1;
(statearr_26329_26391[(1)] = (23));

} else {
var statearr_26330_26392 = state_26301__$1;
(statearr_26330_26392[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26302 === (36))){
var state_26301__$1 = state_26301;
var statearr_26331_26393 = state_26301__$1;
(statearr_26331_26393[(2)] = null);

(statearr_26331_26393[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26302 === (29))){
var inst_26267 = (state_26301[(29)]);
var inst_26272 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26267);
var inst_26273 = cljs.core.pr_str.call(null,inst_26272);
var inst_26274 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26273)].join('');
var inst_26275 = figwheel.client.utils.log.call(null,inst_26274);
var state_26301__$1 = state_26301;
var statearr_26332_26394 = state_26301__$1;
(statearr_26332_26394[(2)] = inst_26275);

(statearr_26332_26394[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26302 === (6))){
var inst_26222 = (state_26301[(2)]);
var state_26301__$1 = state_26301;
var statearr_26333_26395 = state_26301__$1;
(statearr_26333_26395[(2)] = inst_26222);

(statearr_26333_26395[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26302 === (28))){
var inst_26267 = (state_26301[(29)]);
var inst_26266 = (state_26301[(2)]);
var inst_26267__$1 = cljs.core.get.call(null,inst_26266,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26268 = cljs.core.get.call(null,inst_26266,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_26269 = cljs.core.get.call(null,inst_26266,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26270 = cljs.core.not_empty.call(null,inst_26267__$1);
var state_26301__$1 = (function (){var statearr_26334 = state_26301;
(statearr_26334[(25)] = inst_26268);

(statearr_26334[(30)] = inst_26269);

(statearr_26334[(29)] = inst_26267__$1);

return statearr_26334;
})();
if(cljs.core.truth_(inst_26270)){
var statearr_26335_26396 = state_26301__$1;
(statearr_26335_26396[(1)] = (29));

} else {
var statearr_26336_26397 = state_26301__$1;
(statearr_26336_26397[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26302 === (25))){
var inst_26299 = (state_26301[(2)]);
var state_26301__$1 = state_26301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26301__$1,inst_26299);
} else {
if((state_val_26302 === (34))){
var inst_26269 = (state_26301[(30)]);
var inst_26287 = (state_26301[(2)]);
var inst_26288 = cljs.core.not_empty.call(null,inst_26269);
var state_26301__$1 = (function (){var statearr_26337 = state_26301;
(statearr_26337[(31)] = inst_26287);

return statearr_26337;
})();
if(cljs.core.truth_(inst_26288)){
var statearr_26338_26398 = state_26301__$1;
(statearr_26338_26398[(1)] = (35));

} else {
var statearr_26339_26399 = state_26301__$1;
(statearr_26339_26399[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26302 === (17))){
var inst_26227 = (state_26301[(23)]);
var state_26301__$1 = state_26301;
var statearr_26340_26400 = state_26301__$1;
(statearr_26340_26400[(2)] = inst_26227);

(statearr_26340_26400[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26302 === (3))){
var state_26301__$1 = state_26301;
var statearr_26341_26401 = state_26301__$1;
(statearr_26341_26401[(2)] = null);

(statearr_26341_26401[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26302 === (12))){
var inst_26218 = (state_26301[(2)]);
var state_26301__$1 = state_26301;
var statearr_26342_26402 = state_26301__$1;
(statearr_26342_26402[(2)] = inst_26218);

(statearr_26342_26402[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26302 === (2))){
var inst_26180 = (state_26301[(20)]);
var inst_26187 = cljs.core.seq.call(null,inst_26180);
var inst_26188 = inst_26187;
var inst_26189 = null;
var inst_26190 = (0);
var inst_26191 = (0);
var state_26301__$1 = (function (){var statearr_26343 = state_26301;
(statearr_26343[(7)] = inst_26190);

(statearr_26343[(8)] = inst_26191);

(statearr_26343[(9)] = inst_26189);

(statearr_26343[(10)] = inst_26188);

return statearr_26343;
})();
var statearr_26344_26403 = state_26301__$1;
(statearr_26344_26403[(2)] = null);

(statearr_26344_26403[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26302 === (23))){
var inst_26238 = (state_26301[(12)]);
var inst_26240 = (state_26301[(13)]);
var inst_26234 = (state_26301[(14)]);
var inst_26237 = (state_26301[(15)]);
var inst_26260 = (state_26301[(19)]);
var inst_26233 = (state_26301[(16)]);
var inst_26256 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26259 = (function (){var all_files = inst_26233;
var files_SINGLEQUOTE_ = inst_26234;
var res_SINGLEQUOTE_ = inst_26237;
var res = inst_26238;
var files_not_loaded = inst_26240;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26238,inst_26240,inst_26234,inst_26237,inst_26260,inst_26233,inst_26256,state_val_26302,c__20316__auto__,map__26175,map__26175__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26176,map__26176__$1,msg,files){
return (function (p__26258){
var map__26345 = p__26258;
var map__26345__$1 = ((cljs.core.seq_QMARK_.call(null,map__26345))?cljs.core.apply.call(null,cljs.core.hash_map,map__26345):map__26345);
var meta_data = cljs.core.get.call(null,map__26345__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26238,inst_26240,inst_26234,inst_26237,inst_26260,inst_26233,inst_26256,state_val_26302,c__20316__auto__,map__26175,map__26175__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26176,map__26176__$1,msg,files))
})();
var inst_26260__$1 = cljs.core.group_by.call(null,inst_26259,inst_26240);
var inst_26261 = cljs.core.seq_QMARK_.call(null,inst_26260__$1);
var state_26301__$1 = (function (){var statearr_26346 = state_26301;
(statearr_26346[(32)] = inst_26256);

(statearr_26346[(19)] = inst_26260__$1);

return statearr_26346;
})();
if(inst_26261){
var statearr_26347_26404 = state_26301__$1;
(statearr_26347_26404[(1)] = (26));

} else {
var statearr_26348_26405 = state_26301__$1;
(statearr_26348_26405[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26302 === (35))){
var inst_26269 = (state_26301[(30)]);
var inst_26290 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26269);
var inst_26291 = cljs.core.pr_str.call(null,inst_26290);
var inst_26292 = [cljs.core.str("not required: "),cljs.core.str(inst_26291)].join('');
var inst_26293 = figwheel.client.utils.log.call(null,inst_26292);
var state_26301__$1 = state_26301;
var statearr_26349_26406 = state_26301__$1;
(statearr_26349_26406[(2)] = inst_26293);

(statearr_26349_26406[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26302 === (19))){
var inst_26238 = (state_26301[(12)]);
var inst_26234 = (state_26301[(14)]);
var inst_26237 = (state_26301[(15)]);
var inst_26233 = (state_26301[(16)]);
var inst_26237__$1 = (state_26301[(2)]);
var inst_26238__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26237__$1);
var inst_26239 = (function (){var all_files = inst_26233;
var files_SINGLEQUOTE_ = inst_26234;
var res_SINGLEQUOTE_ = inst_26237__$1;
var res = inst_26238__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_26238,inst_26234,inst_26237,inst_26233,inst_26237__$1,inst_26238__$1,state_val_26302,c__20316__auto__,map__26175,map__26175__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26176,map__26176__$1,msg,files){
return (function (p1__25970_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25970_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_26238,inst_26234,inst_26237,inst_26233,inst_26237__$1,inst_26238__$1,state_val_26302,c__20316__auto__,map__26175,map__26175__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26176,map__26176__$1,msg,files))
})();
var inst_26240 = cljs.core.filter.call(null,inst_26239,inst_26237__$1);
var inst_26241 = cljs.core.not_empty.call(null,inst_26238__$1);
var state_26301__$1 = (function (){var statearr_26350 = state_26301;
(statearr_26350[(12)] = inst_26238__$1);

(statearr_26350[(13)] = inst_26240);

(statearr_26350[(15)] = inst_26237__$1);

return statearr_26350;
})();
if(cljs.core.truth_(inst_26241)){
var statearr_26351_26407 = state_26301__$1;
(statearr_26351_26407[(1)] = (20));

} else {
var statearr_26352_26408 = state_26301__$1;
(statearr_26352_26408[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26302 === (11))){
var state_26301__$1 = state_26301;
var statearr_26353_26409 = state_26301__$1;
(statearr_26353_26409[(2)] = null);

(statearr_26353_26409[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26302 === (9))){
var inst_26220 = (state_26301[(2)]);
var state_26301__$1 = state_26301;
var statearr_26354_26410 = state_26301__$1;
(statearr_26354_26410[(2)] = inst_26220);

(statearr_26354_26410[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26302 === (5))){
var inst_26190 = (state_26301[(7)]);
var inst_26191 = (state_26301[(8)]);
var inst_26193 = (inst_26191 < inst_26190);
var inst_26194 = inst_26193;
var state_26301__$1 = state_26301;
if(cljs.core.truth_(inst_26194)){
var statearr_26355_26411 = state_26301__$1;
(statearr_26355_26411[(1)] = (7));

} else {
var statearr_26356_26412 = state_26301__$1;
(statearr_26356_26412[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26302 === (14))){
var inst_26201 = (state_26301[(27)]);
var inst_26210 = cljs.core.first.call(null,inst_26201);
var inst_26211 = figwheel.client.file_reloading.eval_body.call(null,inst_26210,opts);
var inst_26212 = cljs.core.next.call(null,inst_26201);
var inst_26188 = inst_26212;
var inst_26189 = null;
var inst_26190 = (0);
var inst_26191 = (0);
var state_26301__$1 = (function (){var statearr_26357 = state_26301;
(statearr_26357[(7)] = inst_26190);

(statearr_26357[(33)] = inst_26211);

(statearr_26357[(8)] = inst_26191);

(statearr_26357[(9)] = inst_26189);

(statearr_26357[(10)] = inst_26188);

return statearr_26357;
})();
var statearr_26358_26413 = state_26301__$1;
(statearr_26358_26413[(2)] = null);

(statearr_26358_26413[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26302 === (26))){
var inst_26260 = (state_26301[(19)]);
var inst_26263 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26260);
var state_26301__$1 = state_26301;
var statearr_26359_26414 = state_26301__$1;
(statearr_26359_26414[(2)] = inst_26263);

(statearr_26359_26414[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26302 === (16))){
var inst_26227 = (state_26301[(23)]);
var inst_26229 = (function (){var all_files = inst_26227;
return ((function (all_files,inst_26227,state_val_26302,c__20316__auto__,map__26175,map__26175__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26176,map__26176__$1,msg,files){
return (function (p1__25969_SHARP_){
return cljs.core.update_in.call(null,p1__25969_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_26227,state_val_26302,c__20316__auto__,map__26175,map__26175__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26176,map__26176__$1,msg,files))
})();
var inst_26230 = cljs.core.map.call(null,inst_26229,inst_26227);
var state_26301__$1 = state_26301;
var statearr_26360_26415 = state_26301__$1;
(statearr_26360_26415[(2)] = inst_26230);

(statearr_26360_26415[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26302 === (30))){
var state_26301__$1 = state_26301;
var statearr_26361_26416 = state_26301__$1;
(statearr_26361_26416[(2)] = null);

(statearr_26361_26416[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26302 === (10))){
var inst_26201 = (state_26301[(27)]);
var inst_26203 = cljs.core.chunked_seq_QMARK_.call(null,inst_26201);
var state_26301__$1 = state_26301;
if(inst_26203){
var statearr_26362_26417 = state_26301__$1;
(statearr_26362_26417[(1)] = (13));

} else {
var statearr_26363_26418 = state_26301__$1;
(statearr_26363_26418[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26302 === (18))){
var inst_26234 = (state_26301[(14)]);
var inst_26233 = (state_26301[(16)]);
var inst_26233__$1 = (state_26301[(2)]);
var inst_26234__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_26233__$1);
var inst_26235 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26234__$1);
var state_26301__$1 = (function (){var statearr_26364 = state_26301;
(statearr_26364[(14)] = inst_26234__$1);

(statearr_26364[(16)] = inst_26233__$1);

return statearr_26364;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26301__$1,(19),inst_26235);
} else {
if((state_val_26302 === (37))){
var inst_26296 = (state_26301[(2)]);
var state_26301__$1 = state_26301;
var statearr_26365_26419 = state_26301__$1;
(statearr_26365_26419[(2)] = inst_26296);

(statearr_26365_26419[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26302 === (8))){
var inst_26188 = (state_26301[(10)]);
var inst_26201 = (state_26301[(27)]);
var inst_26201__$1 = cljs.core.seq.call(null,inst_26188);
var state_26301__$1 = (function (){var statearr_26366 = state_26301;
(statearr_26366[(27)] = inst_26201__$1);

return statearr_26366;
})();
if(inst_26201__$1){
var statearr_26367_26420 = state_26301__$1;
(statearr_26367_26420[(1)] = (10));

} else {
var statearr_26368_26421 = state_26301__$1;
(statearr_26368_26421[(1)] = (11));

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
});})(c__20316__auto__,map__26175,map__26175__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26176,map__26176__$1,msg,files))
;
return ((function (switch__20254__auto__,c__20316__auto__,map__26175,map__26175__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26176,map__26176__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20255__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20255__auto____0 = (function (){
var statearr_26372 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26372[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20255__auto__);

(statearr_26372[(1)] = (1));

return statearr_26372;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20255__auto____1 = (function (state_26301){
while(true){
var ret_value__20256__auto__ = (function (){try{while(true){
var result__20257__auto__ = switch__20254__auto__.call(null,state_26301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20257__auto__;
}
break;
}
}catch (e26373){if((e26373 instanceof Object)){
var ex__20258__auto__ = e26373;
var statearr_26374_26422 = state_26301;
(statearr_26374_26422[(5)] = ex__20258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26423 = state_26301;
state_26301 = G__26423;
continue;
} else {
return ret_value__20256__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20255__auto__ = function(state_26301){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20255__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20255__auto____1.call(this,state_26301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20255__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20255__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20255__auto__;
})()
;})(switch__20254__auto__,c__20316__auto__,map__26175,map__26175__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26176,map__26176__$1,msg,files))
})();
var state__20318__auto__ = (function (){var statearr_26375 = f__20317__auto__.call(null);
(statearr_26375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20316__auto__);

return statearr_26375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20318__auto__);
});})(c__20316__auto__,map__26175,map__26175__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26176,map__26176__$1,msg,files))
);

return c__20316__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26426,link){
var map__26428 = p__26426;
var map__26428__$1 = ((cljs.core.seq_QMARK_.call(null,map__26428))?cljs.core.apply.call(null,cljs.core.hash_map,map__26428):map__26428);
var file = cljs.core.get.call(null,map__26428__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__26428,map__26428__$1,file){
return (function (p1__26424_SHARP_,p2__26425_SHARP_){
if(cljs.core._EQ_.call(null,p1__26424_SHARP_,p2__26425_SHARP_)){
return p1__26424_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__26428,map__26428__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26432){
var map__26433 = p__26432;
var map__26433__$1 = ((cljs.core.seq_QMARK_.call(null,map__26433))?cljs.core.apply.call(null,cljs.core.hash_map,map__26433):map__26433);
var match_length = cljs.core.get.call(null,map__26433__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26433__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26429_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26429_SHARP_);
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
var G__26435 = arguments.length;
switch (G__26435) {
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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26437){
var map__26439 = p__26437;
var map__26439__$1 = ((cljs.core.seq_QMARK_.call(null,map__26439))?cljs.core.apply.call(null,cljs.core.hash_map,map__26439):map__26439);
var f_data = map__26439__$1;
var file = cljs.core.get.call(null,map__26439__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__26439__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
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
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26440,files_msg){
var map__26462 = p__26440;
var map__26462__$1 = ((cljs.core.seq_QMARK_.call(null,map__26462))?cljs.core.apply.call(null,cljs.core.hash_map,map__26462):map__26462);
var opts = map__26462__$1;
var on_cssload = cljs.core.get.call(null,map__26462__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26463_26483 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26464_26484 = null;
var count__26465_26485 = (0);
var i__26466_26486 = (0);
while(true){
if((i__26466_26486 < count__26465_26485)){
var f_26487 = cljs.core._nth.call(null,chunk__26464_26484,i__26466_26486);
figwheel.client.file_reloading.reload_css_file.call(null,f_26487);

var G__26488 = seq__26463_26483;
var G__26489 = chunk__26464_26484;
var G__26490 = count__26465_26485;
var G__26491 = (i__26466_26486 + (1));
seq__26463_26483 = G__26488;
chunk__26464_26484 = G__26489;
count__26465_26485 = G__26490;
i__26466_26486 = G__26491;
continue;
} else {
var temp__4425__auto___26492 = cljs.core.seq.call(null,seq__26463_26483);
if(temp__4425__auto___26492){
var seq__26463_26493__$1 = temp__4425__auto___26492;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26463_26493__$1)){
var c__16854__auto___26494 = cljs.core.chunk_first.call(null,seq__26463_26493__$1);
var G__26495 = cljs.core.chunk_rest.call(null,seq__26463_26493__$1);
var G__26496 = c__16854__auto___26494;
var G__26497 = cljs.core.count.call(null,c__16854__auto___26494);
var G__26498 = (0);
seq__26463_26483 = G__26495;
chunk__26464_26484 = G__26496;
count__26465_26485 = G__26497;
i__26466_26486 = G__26498;
continue;
} else {
var f_26499 = cljs.core.first.call(null,seq__26463_26493__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26499);

var G__26500 = cljs.core.next.call(null,seq__26463_26493__$1);
var G__26501 = null;
var G__26502 = (0);
var G__26503 = (0);
seq__26463_26483 = G__26500;
chunk__26464_26484 = G__26501;
count__26465_26485 = G__26502;
i__26466_26486 = G__26503;
continue;
}
} else {
}
}
break;
}

var c__20316__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20316__auto__,map__26462,map__26462__$1,opts,on_cssload){
return (function (){
var f__20317__auto__ = (function (){var switch__20254__auto__ = ((function (c__20316__auto__,map__26462,map__26462__$1,opts,on_cssload){
return (function (state_26473){
var state_val_26474 = (state_26473[(1)]);
if((state_val_26474 === (1))){
var inst_26467 = cljs.core.async.timeout.call(null,(100));
var state_26473__$1 = state_26473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26473__$1,(2),inst_26467);
} else {
if((state_val_26474 === (2))){
var inst_26469 = (state_26473[(2)]);
var inst_26470 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_26471 = on_cssload.call(null,inst_26470);
var state_26473__$1 = (function (){var statearr_26475 = state_26473;
(statearr_26475[(7)] = inst_26469);

return statearr_26475;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26473__$1,inst_26471);
} else {
return null;
}
}
});})(c__20316__auto__,map__26462,map__26462__$1,opts,on_cssload))
;
return ((function (switch__20254__auto__,c__20316__auto__,map__26462,map__26462__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__20255__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__20255__auto____0 = (function (){
var statearr_26479 = [null,null,null,null,null,null,null,null];
(statearr_26479[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__20255__auto__);

(statearr_26479[(1)] = (1));

return statearr_26479;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__20255__auto____1 = (function (state_26473){
while(true){
var ret_value__20256__auto__ = (function (){try{while(true){
var result__20257__auto__ = switch__20254__auto__.call(null,state_26473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20257__auto__;
}
break;
}
}catch (e26480){if((e26480 instanceof Object)){
var ex__20258__auto__ = e26480;
var statearr_26481_26504 = state_26473;
(statearr_26481_26504[(5)] = ex__20258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26505 = state_26473;
state_26473 = G__26505;
continue;
} else {
return ret_value__20256__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__20255__auto__ = function(state_26473){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__20255__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__20255__auto____1.call(this,state_26473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__20255__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__20255__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__20255__auto__;
})()
;})(switch__20254__auto__,c__20316__auto__,map__26462,map__26462__$1,opts,on_cssload))
})();
var state__20318__auto__ = (function (){var statearr_26482 = f__20317__auto__.call(null);
(statearr_26482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20316__auto__);

return statearr_26482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20318__auto__);
});})(c__20316__auto__,map__26462,map__26462__$1,opts,on_cssload))
);

return c__20316__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1440278280294