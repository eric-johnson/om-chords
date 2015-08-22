// Compiled by ClojureScript 0.0-3297 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20945__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__20945 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20946__i = 0, G__20946__a = new Array(arguments.length -  0);
while (G__20946__i < G__20946__a.length) {G__20946__a[G__20946__i] = arguments[G__20946__i + 0]; ++G__20946__i;}
  args = new cljs.core.IndexedSeq(G__20946__a,0);
} 
return G__20945__delegate.call(this,args);};
G__20945.cljs$lang$maxFixedArity = 0;
G__20945.cljs$lang$applyTo = (function (arglist__20947){
var args = cljs.core.seq(arglist__20947);
return G__20945__delegate(args);
});
G__20945.cljs$core$IFn$_invoke$arity$variadic = G__20945__delegate;
return G__20945;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__20948){
var map__20950 = p__20948;
var map__20950__$1 = ((cljs.core.seq_QMARK_.call(null,map__20950))?cljs.core.apply.call(null,cljs.core.hash_map,map__20950):map__20950);
var message = cljs.core.get.call(null,map__20950__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__20950__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16069__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16057__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16057__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16057__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19665__auto___21079 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19665__auto___21079,ch){
return (function (){
var f__19666__auto__ = (function (){var switch__19644__auto__ = ((function (c__19665__auto___21079,ch){
return (function (state_21053){
var state_val_21054 = (state_21053[(1)]);
if((state_val_21054 === (7))){
var inst_21049 = (state_21053[(2)]);
var state_21053__$1 = state_21053;
var statearr_21055_21080 = state_21053__$1;
(statearr_21055_21080[(2)] = inst_21049);

(statearr_21055_21080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21054 === (1))){
var state_21053__$1 = state_21053;
var statearr_21056_21081 = state_21053__$1;
(statearr_21056_21081[(2)] = null);

(statearr_21056_21081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21054 === (4))){
var inst_21017 = (state_21053[(7)]);
var inst_21017__$1 = (state_21053[(2)]);
var state_21053__$1 = (function (){var statearr_21057 = state_21053;
(statearr_21057[(7)] = inst_21017__$1);

return statearr_21057;
})();
if(cljs.core.truth_(inst_21017__$1)){
var statearr_21058_21082 = state_21053__$1;
(statearr_21058_21082[(1)] = (5));

} else {
var statearr_21059_21083 = state_21053__$1;
(statearr_21059_21083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21054 === (13))){
var state_21053__$1 = state_21053;
var statearr_21060_21084 = state_21053__$1;
(statearr_21060_21084[(2)] = null);

(statearr_21060_21084[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21054 === (6))){
var state_21053__$1 = state_21053;
var statearr_21061_21085 = state_21053__$1;
(statearr_21061_21085[(2)] = null);

(statearr_21061_21085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21054 === (3))){
var inst_21051 = (state_21053[(2)]);
var state_21053__$1 = state_21053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21053__$1,inst_21051);
} else {
if((state_val_21054 === (12))){
var inst_21024 = (state_21053[(8)]);
var inst_21037 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_21024);
var inst_21038 = cljs.core.first.call(null,inst_21037);
var inst_21039 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_21038);
var inst_21040 = console.warn("Figwheel: Not loading code with warnings - ",inst_21039);
var state_21053__$1 = state_21053;
var statearr_21062_21086 = state_21053__$1;
(statearr_21062_21086[(2)] = inst_21040);

(statearr_21062_21086[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21054 === (2))){
var state_21053__$1 = state_21053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21053__$1,(4),ch);
} else {
if((state_val_21054 === (11))){
var inst_21033 = (state_21053[(2)]);
var state_21053__$1 = state_21053;
var statearr_21063_21087 = state_21053__$1;
(statearr_21063_21087[(2)] = inst_21033);

(statearr_21063_21087[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21054 === (9))){
var inst_21023 = (state_21053[(9)]);
var inst_21035 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_21023,opts);
var state_21053__$1 = state_21053;
if(cljs.core.truth_(inst_21035)){
var statearr_21064_21088 = state_21053__$1;
(statearr_21064_21088[(1)] = (12));

} else {
var statearr_21065_21089 = state_21053__$1;
(statearr_21065_21089[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21054 === (5))){
var inst_21023 = (state_21053[(9)]);
var inst_21017 = (state_21053[(7)]);
var inst_21019 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_21020 = (new cljs.core.PersistentArrayMap(null,2,inst_21019,null));
var inst_21021 = (new cljs.core.PersistentHashSet(null,inst_21020,null));
var inst_21022 = figwheel.client.focus_msgs.call(null,inst_21021,inst_21017);
var inst_21023__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_21022);
var inst_21024 = cljs.core.first.call(null,inst_21022);
var inst_21025 = figwheel.client.reload_file_state_QMARK_.call(null,inst_21023__$1,opts);
var state_21053__$1 = (function (){var statearr_21066 = state_21053;
(statearr_21066[(8)] = inst_21024);

(statearr_21066[(9)] = inst_21023__$1);

return statearr_21066;
})();
if(cljs.core.truth_(inst_21025)){
var statearr_21067_21090 = state_21053__$1;
(statearr_21067_21090[(1)] = (8));

} else {
var statearr_21068_21091 = state_21053__$1;
(statearr_21068_21091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21054 === (14))){
var inst_21043 = (state_21053[(2)]);
var state_21053__$1 = state_21053;
var statearr_21069_21092 = state_21053__$1;
(statearr_21069_21092[(2)] = inst_21043);

(statearr_21069_21092[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21054 === (10))){
var inst_21045 = (state_21053[(2)]);
var state_21053__$1 = (function (){var statearr_21070 = state_21053;
(statearr_21070[(10)] = inst_21045);

return statearr_21070;
})();
var statearr_21071_21093 = state_21053__$1;
(statearr_21071_21093[(2)] = null);

(statearr_21071_21093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21054 === (8))){
var inst_21024 = (state_21053[(8)]);
var inst_21027 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21028 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_21024);
var inst_21029 = cljs.core.async.timeout.call(null,(1000));
var inst_21030 = [inst_21028,inst_21029];
var inst_21031 = (new cljs.core.PersistentVector(null,2,(5),inst_21027,inst_21030,null));
var state_21053__$1 = state_21053;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21053__$1,(11),inst_21031);
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
});})(c__19665__auto___21079,ch))
;
return ((function (switch__19644__auto__,c__19665__auto___21079,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19645__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19645__auto____0 = (function (){
var statearr_21075 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21075[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19645__auto__);

(statearr_21075[(1)] = (1));

return statearr_21075;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19645__auto____1 = (function (state_21053){
while(true){
var ret_value__19646__auto__ = (function (){try{while(true){
var result__19647__auto__ = switch__19644__auto__.call(null,state_21053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19647__auto__;
}
break;
}
}catch (e21076){if((e21076 instanceof Object)){
var ex__19648__auto__ = e21076;
var statearr_21077_21094 = state_21053;
(statearr_21077_21094[(5)] = ex__19648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21095 = state_21053;
state_21053 = G__21095;
continue;
} else {
return ret_value__19646__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19645__auto__ = function(state_21053){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19645__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19645__auto____1.call(this,state_21053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19645__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19645__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19645__auto__;
})()
;})(switch__19644__auto__,c__19665__auto___21079,ch))
})();
var state__19667__auto__ = (function (){var statearr_21078 = f__19666__auto__.call(null);
(statearr_21078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19665__auto___21079);

return statearr_21078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19667__auto__);
});})(c__19665__auto___21079,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__21096_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__21096_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_21103 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_21103){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_21101 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_21102 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_21101,_STAR_print_newline_STAR_21102,base_path_21103){
return (function() { 
var G__21104__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__21104 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21105__i = 0, G__21105__a = new Array(arguments.length -  0);
while (G__21105__i < G__21105__a.length) {G__21105__a[G__21105__i] = arguments[G__21105__i + 0]; ++G__21105__i;}
  args = new cljs.core.IndexedSeq(G__21105__a,0);
} 
return G__21104__delegate.call(this,args);};
G__21104.cljs$lang$maxFixedArity = 0;
G__21104.cljs$lang$applyTo = (function (arglist__21106){
var args = cljs.core.seq(arglist__21106);
return G__21104__delegate(args);
});
G__21104.cljs$core$IFn$_invoke$arity$variadic = G__21104__delegate;
return G__21104;
})()
;})(_STAR_print_fn_STAR_21101,_STAR_print_newline_STAR_21102,base_path_21103))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_21102;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_21101;
}}catch (e21100){if((e21100 instanceof Error)){
var e = e21100;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_21103], null));
} else {
var e = e21100;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_21103))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__21107){
var map__21112 = p__21107;
var map__21112__$1 = ((cljs.core.seq_QMARK_.call(null,map__21112))?cljs.core.apply.call(null,cljs.core.hash_map,map__21112):map__21112);
var opts = map__21112__$1;
var build_id = cljs.core.get.call(null,map__21112__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__21112,map__21112__$1,opts,build_id){
return (function (p__21113){
var vec__21114 = p__21113;
var map__21115 = cljs.core.nth.call(null,vec__21114,(0),null);
var map__21115__$1 = ((cljs.core.seq_QMARK_.call(null,map__21115))?cljs.core.apply.call(null,cljs.core.hash_map,map__21115):map__21115);
var msg = map__21115__$1;
var msg_name = cljs.core.get.call(null,map__21115__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__21114,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__21114,map__21115,map__21115__$1,msg,msg_name,_,map__21112,map__21112__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__21114,map__21115,map__21115__$1,msg,msg_name,_,map__21112,map__21112__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__21112,map__21112__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__21119){
var vec__21120 = p__21119;
var map__21121 = cljs.core.nth.call(null,vec__21120,(0),null);
var map__21121__$1 = ((cljs.core.seq_QMARK_.call(null,map__21121))?cljs.core.apply.call(null,cljs.core.hash_map,map__21121):map__21121);
var msg = map__21121__$1;
var msg_name = cljs.core.get.call(null,map__21121__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__21120,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__21122){
var map__21130 = p__21122;
var map__21130__$1 = ((cljs.core.seq_QMARK_.call(null,map__21130))?cljs.core.apply.call(null,cljs.core.hash_map,map__21130):map__21130);
var on_compile_warning = cljs.core.get.call(null,map__21130__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__21130__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__21130,map__21130__$1,on_compile_warning,on_compile_fail){
return (function (p__21131){
var vec__21132 = p__21131;
var map__21133 = cljs.core.nth.call(null,vec__21132,(0),null);
var map__21133__$1 = ((cljs.core.seq_QMARK_.call(null,map__21133))?cljs.core.apply.call(null,cljs.core.hash_map,map__21133):map__21133);
var msg = map__21133__$1;
var msg_name = cljs.core.get.call(null,map__21133__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__21132,(1));
var pred__21134 = cljs.core._EQ_;
var expr__21135 = msg_name;
if(cljs.core.truth_(pred__21134.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__21135))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__21134.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__21135))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__21130,map__21130__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19665__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19666__auto__ = (function (){var switch__19644__auto__ = ((function (c__19665__auto__,msg_hist,msg_names,msg){
return (function (state_21336){
var state_val_21337 = (state_21336[(1)]);
if((state_val_21337 === (7))){
var inst_21270 = (state_21336[(2)]);
var state_21336__$1 = state_21336;
var statearr_21338_21379 = state_21336__$1;
(statearr_21338_21379[(2)] = inst_21270);

(statearr_21338_21379[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (20))){
var inst_21298 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_21336__$1 = state_21336;
if(cljs.core.truth_(inst_21298)){
var statearr_21339_21380 = state_21336__$1;
(statearr_21339_21380[(1)] = (22));

} else {
var statearr_21340_21381 = state_21336__$1;
(statearr_21340_21381[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (27))){
var inst_21310 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_21311 = figwheel.client.heads_up.display_warning.call(null,inst_21310);
var state_21336__$1 = state_21336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21336__$1,(30),inst_21311);
} else {
if((state_val_21337 === (1))){
var inst_21258 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_21336__$1 = state_21336;
if(cljs.core.truth_(inst_21258)){
var statearr_21341_21382 = state_21336__$1;
(statearr_21341_21382[(1)] = (2));

} else {
var statearr_21342_21383 = state_21336__$1;
(statearr_21342_21383[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (24))){
var inst_21326 = (state_21336[(2)]);
var state_21336__$1 = state_21336;
var statearr_21343_21384 = state_21336__$1;
(statearr_21343_21384[(2)] = inst_21326);

(statearr_21343_21384[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (4))){
var inst_21334 = (state_21336[(2)]);
var state_21336__$1 = state_21336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21336__$1,inst_21334);
} else {
if((state_val_21337 === (15))){
var inst_21286 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_21287 = figwheel.client.format_messages.call(null,inst_21286);
var inst_21288 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_21289 = figwheel.client.heads_up.display_error.call(null,inst_21287,inst_21288);
var state_21336__$1 = state_21336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21336__$1,(18),inst_21289);
} else {
if((state_val_21337 === (21))){
var inst_21328 = (state_21336[(2)]);
var state_21336__$1 = state_21336;
var statearr_21344_21385 = state_21336__$1;
(statearr_21344_21385[(2)] = inst_21328);

(statearr_21344_21385[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (31))){
var inst_21317 = figwheel.client.heads_up.flash_loaded.call(null);
var state_21336__$1 = state_21336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21336__$1,(34),inst_21317);
} else {
if((state_val_21337 === (32))){
var state_21336__$1 = state_21336;
var statearr_21345_21386 = state_21336__$1;
(statearr_21345_21386[(2)] = null);

(statearr_21345_21386[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (33))){
var inst_21322 = (state_21336[(2)]);
var state_21336__$1 = state_21336;
var statearr_21346_21387 = state_21336__$1;
(statearr_21346_21387[(2)] = inst_21322);

(statearr_21346_21387[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (13))){
var inst_21276 = (state_21336[(2)]);
var inst_21277 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_21278 = figwheel.client.format_messages.call(null,inst_21277);
var inst_21279 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_21280 = figwheel.client.heads_up.display_error.call(null,inst_21278,inst_21279);
var state_21336__$1 = (function (){var statearr_21347 = state_21336;
(statearr_21347[(7)] = inst_21276);

return statearr_21347;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21336__$1,(14),inst_21280);
} else {
if((state_val_21337 === (22))){
var inst_21300 = figwheel.client.heads_up.clear.call(null);
var state_21336__$1 = state_21336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21336__$1,(25),inst_21300);
} else {
if((state_val_21337 === (29))){
var inst_21324 = (state_21336[(2)]);
var state_21336__$1 = state_21336;
var statearr_21348_21388 = state_21336__$1;
(statearr_21348_21388[(2)] = inst_21324);

(statearr_21348_21388[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (6))){
var inst_21266 = figwheel.client.heads_up.clear.call(null);
var state_21336__$1 = state_21336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21336__$1,(9),inst_21266);
} else {
if((state_val_21337 === (28))){
var inst_21315 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_21336__$1 = state_21336;
if(cljs.core.truth_(inst_21315)){
var statearr_21349_21389 = state_21336__$1;
(statearr_21349_21389[(1)] = (31));

} else {
var statearr_21350_21390 = state_21336__$1;
(statearr_21350_21390[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (25))){
var inst_21302 = (state_21336[(2)]);
var inst_21303 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_21304 = figwheel.client.heads_up.display_warning.call(null,inst_21303);
var state_21336__$1 = (function (){var statearr_21351 = state_21336;
(statearr_21351[(8)] = inst_21302);

return statearr_21351;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21336__$1,(26),inst_21304);
} else {
if((state_val_21337 === (34))){
var inst_21319 = (state_21336[(2)]);
var state_21336__$1 = state_21336;
var statearr_21352_21391 = state_21336__$1;
(statearr_21352_21391[(2)] = inst_21319);

(statearr_21352_21391[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (17))){
var inst_21330 = (state_21336[(2)]);
var state_21336__$1 = state_21336;
var statearr_21353_21392 = state_21336__$1;
(statearr_21353_21392[(2)] = inst_21330);

(statearr_21353_21392[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (3))){
var inst_21272 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_21336__$1 = state_21336;
if(cljs.core.truth_(inst_21272)){
var statearr_21354_21393 = state_21336__$1;
(statearr_21354_21393[(1)] = (10));

} else {
var statearr_21355_21394 = state_21336__$1;
(statearr_21355_21394[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (12))){
var inst_21332 = (state_21336[(2)]);
var state_21336__$1 = state_21336;
var statearr_21356_21395 = state_21336__$1;
(statearr_21356_21395[(2)] = inst_21332);

(statearr_21356_21395[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (2))){
var inst_21260 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_21336__$1 = state_21336;
if(cljs.core.truth_(inst_21260)){
var statearr_21357_21396 = state_21336__$1;
(statearr_21357_21396[(1)] = (5));

} else {
var statearr_21358_21397 = state_21336__$1;
(statearr_21358_21397[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (23))){
var inst_21308 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_21336__$1 = state_21336;
if(cljs.core.truth_(inst_21308)){
var statearr_21359_21398 = state_21336__$1;
(statearr_21359_21398[(1)] = (27));

} else {
var statearr_21360_21399 = state_21336__$1;
(statearr_21360_21399[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (19))){
var inst_21295 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_21296 = figwheel.client.heads_up.append_message.call(null,inst_21295);
var state_21336__$1 = state_21336;
var statearr_21361_21400 = state_21336__$1;
(statearr_21361_21400[(2)] = inst_21296);

(statearr_21361_21400[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (11))){
var inst_21284 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_21336__$1 = state_21336;
if(cljs.core.truth_(inst_21284)){
var statearr_21362_21401 = state_21336__$1;
(statearr_21362_21401[(1)] = (15));

} else {
var statearr_21363_21402 = state_21336__$1;
(statearr_21363_21402[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (9))){
var inst_21268 = (state_21336[(2)]);
var state_21336__$1 = state_21336;
var statearr_21364_21403 = state_21336__$1;
(statearr_21364_21403[(2)] = inst_21268);

(statearr_21364_21403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (5))){
var inst_21262 = figwheel.client.heads_up.flash_loaded.call(null);
var state_21336__$1 = state_21336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21336__$1,(8),inst_21262);
} else {
if((state_val_21337 === (14))){
var inst_21282 = (state_21336[(2)]);
var state_21336__$1 = state_21336;
var statearr_21365_21404 = state_21336__$1;
(statearr_21365_21404[(2)] = inst_21282);

(statearr_21365_21404[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (26))){
var inst_21306 = (state_21336[(2)]);
var state_21336__$1 = state_21336;
var statearr_21366_21405 = state_21336__$1;
(statearr_21366_21405[(2)] = inst_21306);

(statearr_21366_21405[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (16))){
var inst_21293 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_21336__$1 = state_21336;
if(cljs.core.truth_(inst_21293)){
var statearr_21367_21406 = state_21336__$1;
(statearr_21367_21406[(1)] = (19));

} else {
var statearr_21368_21407 = state_21336__$1;
(statearr_21368_21407[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (30))){
var inst_21313 = (state_21336[(2)]);
var state_21336__$1 = state_21336;
var statearr_21369_21408 = state_21336__$1;
(statearr_21369_21408[(2)] = inst_21313);

(statearr_21369_21408[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (10))){
var inst_21274 = figwheel.client.heads_up.clear.call(null);
var state_21336__$1 = state_21336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21336__$1,(13),inst_21274);
} else {
if((state_val_21337 === (18))){
var inst_21291 = (state_21336[(2)]);
var state_21336__$1 = state_21336;
var statearr_21370_21409 = state_21336__$1;
(statearr_21370_21409[(2)] = inst_21291);

(statearr_21370_21409[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (8))){
var inst_21264 = (state_21336[(2)]);
var state_21336__$1 = state_21336;
var statearr_21371_21410 = state_21336__$1;
(statearr_21371_21410[(2)] = inst_21264);

(statearr_21371_21410[(1)] = (7));


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
});})(c__19665__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19644__auto__,c__19665__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19645__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19645__auto____0 = (function (){
var statearr_21375 = [null,null,null,null,null,null,null,null,null];
(statearr_21375[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19645__auto__);

(statearr_21375[(1)] = (1));

return statearr_21375;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19645__auto____1 = (function (state_21336){
while(true){
var ret_value__19646__auto__ = (function (){try{while(true){
var result__19647__auto__ = switch__19644__auto__.call(null,state_21336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19647__auto__;
}
break;
}
}catch (e21376){if((e21376 instanceof Object)){
var ex__19648__auto__ = e21376;
var statearr_21377_21411 = state_21336;
(statearr_21377_21411[(5)] = ex__19648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21412 = state_21336;
state_21336 = G__21412;
continue;
} else {
return ret_value__19646__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19645__auto__ = function(state_21336){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19645__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19645__auto____1.call(this,state_21336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19645__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19645__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19645__auto__;
})()
;})(switch__19644__auto__,c__19665__auto__,msg_hist,msg_names,msg))
})();
var state__19667__auto__ = (function (){var statearr_21378 = f__19666__auto__.call(null);
(statearr_21378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19665__auto__);

return statearr_21378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19667__auto__);
});})(c__19665__auto__,msg_hist,msg_names,msg))
);

return c__19665__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19665__auto___21475 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19665__auto___21475,ch){
return (function (){
var f__19666__auto__ = (function (){var switch__19644__auto__ = ((function (c__19665__auto___21475,ch){
return (function (state_21458){
var state_val_21459 = (state_21458[(1)]);
if((state_val_21459 === (1))){
var state_21458__$1 = state_21458;
var statearr_21460_21476 = state_21458__$1;
(statearr_21460_21476[(2)] = null);

(statearr_21460_21476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21459 === (2))){
var state_21458__$1 = state_21458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21458__$1,(4),ch);
} else {
if((state_val_21459 === (3))){
var inst_21456 = (state_21458[(2)]);
var state_21458__$1 = state_21458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21458__$1,inst_21456);
} else {
if((state_val_21459 === (4))){
var inst_21446 = (state_21458[(7)]);
var inst_21446__$1 = (state_21458[(2)]);
var state_21458__$1 = (function (){var statearr_21461 = state_21458;
(statearr_21461[(7)] = inst_21446__$1);

return statearr_21461;
})();
if(cljs.core.truth_(inst_21446__$1)){
var statearr_21462_21477 = state_21458__$1;
(statearr_21462_21477[(1)] = (5));

} else {
var statearr_21463_21478 = state_21458__$1;
(statearr_21463_21478[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21459 === (5))){
var inst_21446 = (state_21458[(7)]);
var inst_21448 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_21446);
var state_21458__$1 = state_21458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21458__$1,(8),inst_21448);
} else {
if((state_val_21459 === (6))){
var state_21458__$1 = state_21458;
var statearr_21464_21479 = state_21458__$1;
(statearr_21464_21479[(2)] = null);

(statearr_21464_21479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21459 === (7))){
var inst_21454 = (state_21458[(2)]);
var state_21458__$1 = state_21458;
var statearr_21465_21480 = state_21458__$1;
(statearr_21465_21480[(2)] = inst_21454);

(statearr_21465_21480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21459 === (8))){
var inst_21450 = (state_21458[(2)]);
var state_21458__$1 = (function (){var statearr_21466 = state_21458;
(statearr_21466[(8)] = inst_21450);

return statearr_21466;
})();
var statearr_21467_21481 = state_21458__$1;
(statearr_21467_21481[(2)] = null);

(statearr_21467_21481[(1)] = (2));


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
});})(c__19665__auto___21475,ch))
;
return ((function (switch__19644__auto__,c__19665__auto___21475,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19645__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19645__auto____0 = (function (){
var statearr_21471 = [null,null,null,null,null,null,null,null,null];
(statearr_21471[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19645__auto__);

(statearr_21471[(1)] = (1));

return statearr_21471;
});
var figwheel$client$heads_up_plugin_$_state_machine__19645__auto____1 = (function (state_21458){
while(true){
var ret_value__19646__auto__ = (function (){try{while(true){
var result__19647__auto__ = switch__19644__auto__.call(null,state_21458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19647__auto__;
}
break;
}
}catch (e21472){if((e21472 instanceof Object)){
var ex__19648__auto__ = e21472;
var statearr_21473_21482 = state_21458;
(statearr_21473_21482[(5)] = ex__19648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21483 = state_21458;
state_21458 = G__21483;
continue;
} else {
return ret_value__19646__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19645__auto__ = function(state_21458){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19645__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19645__auto____1.call(this,state_21458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19645__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19645__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19645__auto__;
})()
;})(switch__19644__auto__,c__19665__auto___21475,ch))
})();
var state__19667__auto__ = (function (){var statearr_21474 = f__19666__auto__.call(null);
(statearr_21474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19665__auto___21475);

return statearr_21474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19667__auto__);
});})(c__19665__auto___21475,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19665__auto__){
return (function (){
var f__19666__auto__ = (function (){var switch__19644__auto__ = ((function (c__19665__auto__){
return (function (state_21504){
var state_val_21505 = (state_21504[(1)]);
if((state_val_21505 === (1))){
var inst_21499 = cljs.core.async.timeout.call(null,(3000));
var state_21504__$1 = state_21504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21504__$1,(2),inst_21499);
} else {
if((state_val_21505 === (2))){
var inst_21501 = (state_21504[(2)]);
var inst_21502 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_21504__$1 = (function (){var statearr_21506 = state_21504;
(statearr_21506[(7)] = inst_21501);

return statearr_21506;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21504__$1,inst_21502);
} else {
return null;
}
}
});})(c__19665__auto__))
;
return ((function (switch__19644__auto__,c__19665__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19645__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19645__auto____0 = (function (){
var statearr_21510 = [null,null,null,null,null,null,null,null];
(statearr_21510[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19645__auto__);

(statearr_21510[(1)] = (1));

return statearr_21510;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19645__auto____1 = (function (state_21504){
while(true){
var ret_value__19646__auto__ = (function (){try{while(true){
var result__19647__auto__ = switch__19644__auto__.call(null,state_21504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19647__auto__;
}
break;
}
}catch (e21511){if((e21511 instanceof Object)){
var ex__19648__auto__ = e21511;
var statearr_21512_21514 = state_21504;
(statearr_21512_21514[(5)] = ex__19648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21515 = state_21504;
state_21504 = G__21515;
continue;
} else {
return ret_value__19646__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19645__auto__ = function(state_21504){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19645__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19645__auto____1.call(this,state_21504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19645__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19645__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19645__auto__;
})()
;})(switch__19644__auto__,c__19665__auto__))
})();
var state__19667__auto__ = (function (){var statearr_21513 = f__19666__auto__.call(null);
(statearr_21513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19665__auto__);

return statearr_21513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19667__auto__);
});})(c__19665__auto__))
);

return c__19665__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__21516){
var map__21522 = p__21516;
var map__21522__$1 = ((cljs.core.seq_QMARK_.call(null,map__21522))?cljs.core.apply.call(null,cljs.core.hash_map,map__21522):map__21522);
var ed = map__21522__$1;
var formatted_exception = cljs.core.get.call(null,map__21522__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__21522__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__21522__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__21523_21527 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__21524_21528 = null;
var count__21525_21529 = (0);
var i__21526_21530 = (0);
while(true){
if((i__21526_21530 < count__21525_21529)){
var msg_21531 = cljs.core._nth.call(null,chunk__21524_21528,i__21526_21530);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_21531);

var G__21532 = seq__21523_21527;
var G__21533 = chunk__21524_21528;
var G__21534 = count__21525_21529;
var G__21535 = (i__21526_21530 + (1));
seq__21523_21527 = G__21532;
chunk__21524_21528 = G__21533;
count__21525_21529 = G__21534;
i__21526_21530 = G__21535;
continue;
} else {
var temp__4425__auto___21536 = cljs.core.seq.call(null,seq__21523_21527);
if(temp__4425__auto___21536){
var seq__21523_21537__$1 = temp__4425__auto___21536;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21523_21537__$1)){
var c__16854__auto___21538 = cljs.core.chunk_first.call(null,seq__21523_21537__$1);
var G__21539 = cljs.core.chunk_rest.call(null,seq__21523_21537__$1);
var G__21540 = c__16854__auto___21538;
var G__21541 = cljs.core.count.call(null,c__16854__auto___21538);
var G__21542 = (0);
seq__21523_21527 = G__21539;
chunk__21524_21528 = G__21540;
count__21525_21529 = G__21541;
i__21526_21530 = G__21542;
continue;
} else {
var msg_21543 = cljs.core.first.call(null,seq__21523_21537__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_21543);

var G__21544 = cljs.core.next.call(null,seq__21523_21537__$1);
var G__21545 = null;
var G__21546 = (0);
var G__21547 = (0);
seq__21523_21527 = G__21544;
chunk__21524_21528 = G__21545;
count__21525_21529 = G__21546;
i__21526_21530 = G__21547;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__21548){
var map__21550 = p__21548;
var map__21550__$1 = ((cljs.core.seq_QMARK_.call(null,map__21550))?cljs.core.apply.call(null,cljs.core.hash_map,map__21550):map__21550);
var w = map__21550__$1;
var message = cljs.core.get.call(null,map__21550__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16057__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16057__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16057__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__21557 = cljs.core.seq.call(null,plugins);
var chunk__21558 = null;
var count__21559 = (0);
var i__21560 = (0);
while(true){
if((i__21560 < count__21559)){
var vec__21561 = cljs.core._nth.call(null,chunk__21558,i__21560);
var k = cljs.core.nth.call(null,vec__21561,(0),null);
var plugin = cljs.core.nth.call(null,vec__21561,(1),null);
if(cljs.core.truth_(plugin)){
var pl_21563 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__21557,chunk__21558,count__21559,i__21560,pl_21563,vec__21561,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_21563.call(null,msg_hist);
});})(seq__21557,chunk__21558,count__21559,i__21560,pl_21563,vec__21561,k,plugin))
);
} else {
}

var G__21564 = seq__21557;
var G__21565 = chunk__21558;
var G__21566 = count__21559;
var G__21567 = (i__21560 + (1));
seq__21557 = G__21564;
chunk__21558 = G__21565;
count__21559 = G__21566;
i__21560 = G__21567;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__21557);
if(temp__4425__auto__){
var seq__21557__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21557__$1)){
var c__16854__auto__ = cljs.core.chunk_first.call(null,seq__21557__$1);
var G__21568 = cljs.core.chunk_rest.call(null,seq__21557__$1);
var G__21569 = c__16854__auto__;
var G__21570 = cljs.core.count.call(null,c__16854__auto__);
var G__21571 = (0);
seq__21557 = G__21568;
chunk__21558 = G__21569;
count__21559 = G__21570;
i__21560 = G__21571;
continue;
} else {
var vec__21562 = cljs.core.first.call(null,seq__21557__$1);
var k = cljs.core.nth.call(null,vec__21562,(0),null);
var plugin = cljs.core.nth.call(null,vec__21562,(1),null);
if(cljs.core.truth_(plugin)){
var pl_21572 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__21557,chunk__21558,count__21559,i__21560,pl_21572,vec__21562,k,plugin,seq__21557__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_21572.call(null,msg_hist);
});})(seq__21557,chunk__21558,count__21559,i__21560,pl_21572,vec__21562,k,plugin,seq__21557__$1,temp__4425__auto__))
);
} else {
}

var G__21573 = cljs.core.next.call(null,seq__21557__$1);
var G__21574 = null;
var G__21575 = (0);
var G__21576 = (0);
seq__21557 = G__21573;
chunk__21558 = G__21574;
count__21559 = G__21575;
i__21560 = G__21576;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__21578 = arguments.length;
switch (G__21578) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__17109__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17109__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__21581){
var map__21582 = p__21581;
var map__21582__$1 = ((cljs.core.seq_QMARK_.call(null,map__21582))?cljs.core.apply.call(null,cljs.core.hash_map,map__21582):map__21582);
var opts = map__21582__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq21580){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21580));
});

//# sourceMappingURL=client.js.map?rel=1440277345160