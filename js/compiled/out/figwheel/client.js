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
var G__24787__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24787 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24788__i = 0, G__24788__a = new Array(arguments.length -  0);
while (G__24788__i < G__24788__a.length) {G__24788__a[G__24788__i] = arguments[G__24788__i + 0]; ++G__24788__i;}
  args = new cljs.core.IndexedSeq(G__24788__a,0);
} 
return G__24787__delegate.call(this,args);};
G__24787.cljs$lang$maxFixedArity = 0;
G__24787.cljs$lang$applyTo = (function (arglist__24789){
var args = cljs.core.seq(arglist__24789);
return G__24787__delegate(args);
});
G__24787.cljs$core$IFn$_invoke$arity$variadic = G__24787__delegate;
return G__24787;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24790){
var map__24792 = p__24790;
var map__24792__$1 = ((cljs.core.seq_QMARK_.call(null,map__24792))?cljs.core.apply.call(null,cljs.core.hash_map,map__24792):map__24792);
var message = cljs.core.get.call(null,map__24792__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24792__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__20316__auto___24921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20316__auto___24921,ch){
return (function (){
var f__20317__auto__ = (function (){var switch__20254__auto__ = ((function (c__20316__auto___24921,ch){
return (function (state_24895){
var state_val_24896 = (state_24895[(1)]);
if((state_val_24896 === (7))){
var inst_24891 = (state_24895[(2)]);
var state_24895__$1 = state_24895;
var statearr_24897_24922 = state_24895__$1;
(statearr_24897_24922[(2)] = inst_24891);

(statearr_24897_24922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (1))){
var state_24895__$1 = state_24895;
var statearr_24898_24923 = state_24895__$1;
(statearr_24898_24923[(2)] = null);

(statearr_24898_24923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (4))){
var inst_24859 = (state_24895[(7)]);
var inst_24859__$1 = (state_24895[(2)]);
var state_24895__$1 = (function (){var statearr_24899 = state_24895;
(statearr_24899[(7)] = inst_24859__$1);

return statearr_24899;
})();
if(cljs.core.truth_(inst_24859__$1)){
var statearr_24900_24924 = state_24895__$1;
(statearr_24900_24924[(1)] = (5));

} else {
var statearr_24901_24925 = state_24895__$1;
(statearr_24901_24925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (13))){
var state_24895__$1 = state_24895;
var statearr_24902_24926 = state_24895__$1;
(statearr_24902_24926[(2)] = null);

(statearr_24902_24926[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (6))){
var state_24895__$1 = state_24895;
var statearr_24903_24927 = state_24895__$1;
(statearr_24903_24927[(2)] = null);

(statearr_24903_24927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (3))){
var inst_24893 = (state_24895[(2)]);
var state_24895__$1 = state_24895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24895__$1,inst_24893);
} else {
if((state_val_24896 === (12))){
var inst_24866 = (state_24895[(8)]);
var inst_24879 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24866);
var inst_24880 = cljs.core.first.call(null,inst_24879);
var inst_24881 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24880);
var inst_24882 = console.warn("Figwheel: Not loading code with warnings - ",inst_24881);
var state_24895__$1 = state_24895;
var statearr_24904_24928 = state_24895__$1;
(statearr_24904_24928[(2)] = inst_24882);

(statearr_24904_24928[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (2))){
var state_24895__$1 = state_24895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24895__$1,(4),ch);
} else {
if((state_val_24896 === (11))){
var inst_24875 = (state_24895[(2)]);
var state_24895__$1 = state_24895;
var statearr_24905_24929 = state_24895__$1;
(statearr_24905_24929[(2)] = inst_24875);

(statearr_24905_24929[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (9))){
var inst_24865 = (state_24895[(9)]);
var inst_24877 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24865,opts);
var state_24895__$1 = state_24895;
if(cljs.core.truth_(inst_24877)){
var statearr_24906_24930 = state_24895__$1;
(statearr_24906_24930[(1)] = (12));

} else {
var statearr_24907_24931 = state_24895__$1;
(statearr_24907_24931[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (5))){
var inst_24865 = (state_24895[(9)]);
var inst_24859 = (state_24895[(7)]);
var inst_24861 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24862 = (new cljs.core.PersistentArrayMap(null,2,inst_24861,null));
var inst_24863 = (new cljs.core.PersistentHashSet(null,inst_24862,null));
var inst_24864 = figwheel.client.focus_msgs.call(null,inst_24863,inst_24859);
var inst_24865__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24864);
var inst_24866 = cljs.core.first.call(null,inst_24864);
var inst_24867 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24865__$1,opts);
var state_24895__$1 = (function (){var statearr_24908 = state_24895;
(statearr_24908[(8)] = inst_24866);

(statearr_24908[(9)] = inst_24865__$1);

return statearr_24908;
})();
if(cljs.core.truth_(inst_24867)){
var statearr_24909_24932 = state_24895__$1;
(statearr_24909_24932[(1)] = (8));

} else {
var statearr_24910_24933 = state_24895__$1;
(statearr_24910_24933[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (14))){
var inst_24885 = (state_24895[(2)]);
var state_24895__$1 = state_24895;
var statearr_24911_24934 = state_24895__$1;
(statearr_24911_24934[(2)] = inst_24885);

(statearr_24911_24934[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (10))){
var inst_24887 = (state_24895[(2)]);
var state_24895__$1 = (function (){var statearr_24912 = state_24895;
(statearr_24912[(10)] = inst_24887);

return statearr_24912;
})();
var statearr_24913_24935 = state_24895__$1;
(statearr_24913_24935[(2)] = null);

(statearr_24913_24935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (8))){
var inst_24866 = (state_24895[(8)]);
var inst_24869 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24870 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24866);
var inst_24871 = cljs.core.async.timeout.call(null,(1000));
var inst_24872 = [inst_24870,inst_24871];
var inst_24873 = (new cljs.core.PersistentVector(null,2,(5),inst_24869,inst_24872,null));
var state_24895__$1 = state_24895;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24895__$1,(11),inst_24873);
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
});})(c__20316__auto___24921,ch))
;
return ((function (switch__20254__auto__,c__20316__auto___24921,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20255__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20255__auto____0 = (function (){
var statearr_24917 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24917[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20255__auto__);

(statearr_24917[(1)] = (1));

return statearr_24917;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20255__auto____1 = (function (state_24895){
while(true){
var ret_value__20256__auto__ = (function (){try{while(true){
var result__20257__auto__ = switch__20254__auto__.call(null,state_24895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20257__auto__;
}
break;
}
}catch (e24918){if((e24918 instanceof Object)){
var ex__20258__auto__ = e24918;
var statearr_24919_24936 = state_24895;
(statearr_24919_24936[(5)] = ex__20258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24937 = state_24895;
state_24895 = G__24937;
continue;
} else {
return ret_value__20256__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20255__auto__ = function(state_24895){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20255__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20255__auto____1.call(this,state_24895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20255__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20255__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20255__auto__;
})()
;})(switch__20254__auto__,c__20316__auto___24921,ch))
})();
var state__20318__auto__ = (function (){var statearr_24920 = f__20317__auto__.call(null);
(statearr_24920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20316__auto___24921);

return statearr_24920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20318__auto__);
});})(c__20316__auto___24921,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24938_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24938_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_24945 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24945){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_24943 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_24944 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_24943,_STAR_print_newline_STAR_24944,base_path_24945){
return (function() { 
var G__24946__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24946 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24947__i = 0, G__24947__a = new Array(arguments.length -  0);
while (G__24947__i < G__24947__a.length) {G__24947__a[G__24947__i] = arguments[G__24947__i + 0]; ++G__24947__i;}
  args = new cljs.core.IndexedSeq(G__24947__a,0);
} 
return G__24946__delegate.call(this,args);};
G__24946.cljs$lang$maxFixedArity = 0;
G__24946.cljs$lang$applyTo = (function (arglist__24948){
var args = cljs.core.seq(arglist__24948);
return G__24946__delegate(args);
});
G__24946.cljs$core$IFn$_invoke$arity$variadic = G__24946__delegate;
return G__24946;
})()
;})(_STAR_print_fn_STAR_24943,_STAR_print_newline_STAR_24944,base_path_24945))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24944;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24943;
}}catch (e24942){if((e24942 instanceof Error)){
var e = e24942;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24945], null));
} else {
var e = e24942;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_24945))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24949){
var map__24954 = p__24949;
var map__24954__$1 = ((cljs.core.seq_QMARK_.call(null,map__24954))?cljs.core.apply.call(null,cljs.core.hash_map,map__24954):map__24954);
var opts = map__24954__$1;
var build_id = cljs.core.get.call(null,map__24954__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24954,map__24954__$1,opts,build_id){
return (function (p__24955){
var vec__24956 = p__24955;
var map__24957 = cljs.core.nth.call(null,vec__24956,(0),null);
var map__24957__$1 = ((cljs.core.seq_QMARK_.call(null,map__24957))?cljs.core.apply.call(null,cljs.core.hash_map,map__24957):map__24957);
var msg = map__24957__$1;
var msg_name = cljs.core.get.call(null,map__24957__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24956,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__24956,map__24957,map__24957__$1,msg,msg_name,_,map__24954,map__24954__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24956,map__24957,map__24957__$1,msg,msg_name,_,map__24954,map__24954__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24954,map__24954__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24961){
var vec__24962 = p__24961;
var map__24963 = cljs.core.nth.call(null,vec__24962,(0),null);
var map__24963__$1 = ((cljs.core.seq_QMARK_.call(null,map__24963))?cljs.core.apply.call(null,cljs.core.hash_map,map__24963):map__24963);
var msg = map__24963__$1;
var msg_name = cljs.core.get.call(null,map__24963__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24962,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24964){
var map__24972 = p__24964;
var map__24972__$1 = ((cljs.core.seq_QMARK_.call(null,map__24972))?cljs.core.apply.call(null,cljs.core.hash_map,map__24972):map__24972);
var on_compile_warning = cljs.core.get.call(null,map__24972__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24972__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__24972,map__24972__$1,on_compile_warning,on_compile_fail){
return (function (p__24973){
var vec__24974 = p__24973;
var map__24975 = cljs.core.nth.call(null,vec__24974,(0),null);
var map__24975__$1 = ((cljs.core.seq_QMARK_.call(null,map__24975))?cljs.core.apply.call(null,cljs.core.hash_map,map__24975):map__24975);
var msg = map__24975__$1;
var msg_name = cljs.core.get.call(null,map__24975__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24974,(1));
var pred__24976 = cljs.core._EQ_;
var expr__24977 = msg_name;
if(cljs.core.truth_(pred__24976.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24977))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24976.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24977))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24972,map__24972__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20316__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20316__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20317__auto__ = (function (){var switch__20254__auto__ = ((function (c__20316__auto__,msg_hist,msg_names,msg){
return (function (state_25178){
var state_val_25179 = (state_25178[(1)]);
if((state_val_25179 === (7))){
var inst_25112 = (state_25178[(2)]);
var state_25178__$1 = state_25178;
var statearr_25180_25221 = state_25178__$1;
(statearr_25180_25221[(2)] = inst_25112);

(statearr_25180_25221[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25179 === (20))){
var inst_25140 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25178__$1 = state_25178;
if(cljs.core.truth_(inst_25140)){
var statearr_25181_25222 = state_25178__$1;
(statearr_25181_25222[(1)] = (22));

} else {
var statearr_25182_25223 = state_25178__$1;
(statearr_25182_25223[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25179 === (27))){
var inst_25152 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25153 = figwheel.client.heads_up.display_warning.call(null,inst_25152);
var state_25178__$1 = state_25178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25178__$1,(30),inst_25153);
} else {
if((state_val_25179 === (1))){
var inst_25100 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25178__$1 = state_25178;
if(cljs.core.truth_(inst_25100)){
var statearr_25183_25224 = state_25178__$1;
(statearr_25183_25224[(1)] = (2));

} else {
var statearr_25184_25225 = state_25178__$1;
(statearr_25184_25225[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25179 === (24))){
var inst_25168 = (state_25178[(2)]);
var state_25178__$1 = state_25178;
var statearr_25185_25226 = state_25178__$1;
(statearr_25185_25226[(2)] = inst_25168);

(statearr_25185_25226[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25179 === (4))){
var inst_25176 = (state_25178[(2)]);
var state_25178__$1 = state_25178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25178__$1,inst_25176);
} else {
if((state_val_25179 === (15))){
var inst_25128 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25129 = figwheel.client.format_messages.call(null,inst_25128);
var inst_25130 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25131 = figwheel.client.heads_up.display_error.call(null,inst_25129,inst_25130);
var state_25178__$1 = state_25178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25178__$1,(18),inst_25131);
} else {
if((state_val_25179 === (21))){
var inst_25170 = (state_25178[(2)]);
var state_25178__$1 = state_25178;
var statearr_25186_25227 = state_25178__$1;
(statearr_25186_25227[(2)] = inst_25170);

(statearr_25186_25227[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25179 === (31))){
var inst_25159 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25178__$1 = state_25178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25178__$1,(34),inst_25159);
} else {
if((state_val_25179 === (32))){
var state_25178__$1 = state_25178;
var statearr_25187_25228 = state_25178__$1;
(statearr_25187_25228[(2)] = null);

(statearr_25187_25228[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25179 === (33))){
var inst_25164 = (state_25178[(2)]);
var state_25178__$1 = state_25178;
var statearr_25188_25229 = state_25178__$1;
(statearr_25188_25229[(2)] = inst_25164);

(statearr_25188_25229[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25179 === (13))){
var inst_25118 = (state_25178[(2)]);
var inst_25119 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25120 = figwheel.client.format_messages.call(null,inst_25119);
var inst_25121 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25122 = figwheel.client.heads_up.display_error.call(null,inst_25120,inst_25121);
var state_25178__$1 = (function (){var statearr_25189 = state_25178;
(statearr_25189[(7)] = inst_25118);

return statearr_25189;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25178__$1,(14),inst_25122);
} else {
if((state_val_25179 === (22))){
var inst_25142 = figwheel.client.heads_up.clear.call(null);
var state_25178__$1 = state_25178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25178__$1,(25),inst_25142);
} else {
if((state_val_25179 === (29))){
var inst_25166 = (state_25178[(2)]);
var state_25178__$1 = state_25178;
var statearr_25190_25230 = state_25178__$1;
(statearr_25190_25230[(2)] = inst_25166);

(statearr_25190_25230[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25179 === (6))){
var inst_25108 = figwheel.client.heads_up.clear.call(null);
var state_25178__$1 = state_25178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25178__$1,(9),inst_25108);
} else {
if((state_val_25179 === (28))){
var inst_25157 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25178__$1 = state_25178;
if(cljs.core.truth_(inst_25157)){
var statearr_25191_25231 = state_25178__$1;
(statearr_25191_25231[(1)] = (31));

} else {
var statearr_25192_25232 = state_25178__$1;
(statearr_25192_25232[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25179 === (25))){
var inst_25144 = (state_25178[(2)]);
var inst_25145 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25146 = figwheel.client.heads_up.display_warning.call(null,inst_25145);
var state_25178__$1 = (function (){var statearr_25193 = state_25178;
(statearr_25193[(8)] = inst_25144);

return statearr_25193;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25178__$1,(26),inst_25146);
} else {
if((state_val_25179 === (34))){
var inst_25161 = (state_25178[(2)]);
var state_25178__$1 = state_25178;
var statearr_25194_25233 = state_25178__$1;
(statearr_25194_25233[(2)] = inst_25161);

(statearr_25194_25233[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25179 === (17))){
var inst_25172 = (state_25178[(2)]);
var state_25178__$1 = state_25178;
var statearr_25195_25234 = state_25178__$1;
(statearr_25195_25234[(2)] = inst_25172);

(statearr_25195_25234[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25179 === (3))){
var inst_25114 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25178__$1 = state_25178;
if(cljs.core.truth_(inst_25114)){
var statearr_25196_25235 = state_25178__$1;
(statearr_25196_25235[(1)] = (10));

} else {
var statearr_25197_25236 = state_25178__$1;
(statearr_25197_25236[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25179 === (12))){
var inst_25174 = (state_25178[(2)]);
var state_25178__$1 = state_25178;
var statearr_25198_25237 = state_25178__$1;
(statearr_25198_25237[(2)] = inst_25174);

(statearr_25198_25237[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25179 === (2))){
var inst_25102 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25178__$1 = state_25178;
if(cljs.core.truth_(inst_25102)){
var statearr_25199_25238 = state_25178__$1;
(statearr_25199_25238[(1)] = (5));

} else {
var statearr_25200_25239 = state_25178__$1;
(statearr_25200_25239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25179 === (23))){
var inst_25150 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25178__$1 = state_25178;
if(cljs.core.truth_(inst_25150)){
var statearr_25201_25240 = state_25178__$1;
(statearr_25201_25240[(1)] = (27));

} else {
var statearr_25202_25241 = state_25178__$1;
(statearr_25202_25241[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25179 === (19))){
var inst_25137 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25138 = figwheel.client.heads_up.append_message.call(null,inst_25137);
var state_25178__$1 = state_25178;
var statearr_25203_25242 = state_25178__$1;
(statearr_25203_25242[(2)] = inst_25138);

(statearr_25203_25242[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25179 === (11))){
var inst_25126 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25178__$1 = state_25178;
if(cljs.core.truth_(inst_25126)){
var statearr_25204_25243 = state_25178__$1;
(statearr_25204_25243[(1)] = (15));

} else {
var statearr_25205_25244 = state_25178__$1;
(statearr_25205_25244[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25179 === (9))){
var inst_25110 = (state_25178[(2)]);
var state_25178__$1 = state_25178;
var statearr_25206_25245 = state_25178__$1;
(statearr_25206_25245[(2)] = inst_25110);

(statearr_25206_25245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25179 === (5))){
var inst_25104 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25178__$1 = state_25178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25178__$1,(8),inst_25104);
} else {
if((state_val_25179 === (14))){
var inst_25124 = (state_25178[(2)]);
var state_25178__$1 = state_25178;
var statearr_25207_25246 = state_25178__$1;
(statearr_25207_25246[(2)] = inst_25124);

(statearr_25207_25246[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25179 === (26))){
var inst_25148 = (state_25178[(2)]);
var state_25178__$1 = state_25178;
var statearr_25208_25247 = state_25178__$1;
(statearr_25208_25247[(2)] = inst_25148);

(statearr_25208_25247[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25179 === (16))){
var inst_25135 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25178__$1 = state_25178;
if(cljs.core.truth_(inst_25135)){
var statearr_25209_25248 = state_25178__$1;
(statearr_25209_25248[(1)] = (19));

} else {
var statearr_25210_25249 = state_25178__$1;
(statearr_25210_25249[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25179 === (30))){
var inst_25155 = (state_25178[(2)]);
var state_25178__$1 = state_25178;
var statearr_25211_25250 = state_25178__$1;
(statearr_25211_25250[(2)] = inst_25155);

(statearr_25211_25250[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25179 === (10))){
var inst_25116 = figwheel.client.heads_up.clear.call(null);
var state_25178__$1 = state_25178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25178__$1,(13),inst_25116);
} else {
if((state_val_25179 === (18))){
var inst_25133 = (state_25178[(2)]);
var state_25178__$1 = state_25178;
var statearr_25212_25251 = state_25178__$1;
(statearr_25212_25251[(2)] = inst_25133);

(statearr_25212_25251[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25179 === (8))){
var inst_25106 = (state_25178[(2)]);
var state_25178__$1 = state_25178;
var statearr_25213_25252 = state_25178__$1;
(statearr_25213_25252[(2)] = inst_25106);

(statearr_25213_25252[(1)] = (7));


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
});})(c__20316__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20254__auto__,c__20316__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20255__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20255__auto____0 = (function (){
var statearr_25217 = [null,null,null,null,null,null,null,null,null];
(statearr_25217[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20255__auto__);

(statearr_25217[(1)] = (1));

return statearr_25217;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20255__auto____1 = (function (state_25178){
while(true){
var ret_value__20256__auto__ = (function (){try{while(true){
var result__20257__auto__ = switch__20254__auto__.call(null,state_25178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20257__auto__;
}
break;
}
}catch (e25218){if((e25218 instanceof Object)){
var ex__20258__auto__ = e25218;
var statearr_25219_25253 = state_25178;
(statearr_25219_25253[(5)] = ex__20258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25254 = state_25178;
state_25178 = G__25254;
continue;
} else {
return ret_value__20256__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20255__auto__ = function(state_25178){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20255__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20255__auto____1.call(this,state_25178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20255__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20255__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20255__auto__;
})()
;})(switch__20254__auto__,c__20316__auto__,msg_hist,msg_names,msg))
})();
var state__20318__auto__ = (function (){var statearr_25220 = f__20317__auto__.call(null);
(statearr_25220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20316__auto__);

return statearr_25220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20318__auto__);
});})(c__20316__auto__,msg_hist,msg_names,msg))
);

return c__20316__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20316__auto___25317 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20316__auto___25317,ch){
return (function (){
var f__20317__auto__ = (function (){var switch__20254__auto__ = ((function (c__20316__auto___25317,ch){
return (function (state_25300){
var state_val_25301 = (state_25300[(1)]);
if((state_val_25301 === (1))){
var state_25300__$1 = state_25300;
var statearr_25302_25318 = state_25300__$1;
(statearr_25302_25318[(2)] = null);

(statearr_25302_25318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25301 === (2))){
var state_25300__$1 = state_25300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25300__$1,(4),ch);
} else {
if((state_val_25301 === (3))){
var inst_25298 = (state_25300[(2)]);
var state_25300__$1 = state_25300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25300__$1,inst_25298);
} else {
if((state_val_25301 === (4))){
var inst_25288 = (state_25300[(7)]);
var inst_25288__$1 = (state_25300[(2)]);
var state_25300__$1 = (function (){var statearr_25303 = state_25300;
(statearr_25303[(7)] = inst_25288__$1);

return statearr_25303;
})();
if(cljs.core.truth_(inst_25288__$1)){
var statearr_25304_25319 = state_25300__$1;
(statearr_25304_25319[(1)] = (5));

} else {
var statearr_25305_25320 = state_25300__$1;
(statearr_25305_25320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25301 === (5))){
var inst_25288 = (state_25300[(7)]);
var inst_25290 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25288);
var state_25300__$1 = state_25300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25300__$1,(8),inst_25290);
} else {
if((state_val_25301 === (6))){
var state_25300__$1 = state_25300;
var statearr_25306_25321 = state_25300__$1;
(statearr_25306_25321[(2)] = null);

(statearr_25306_25321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25301 === (7))){
var inst_25296 = (state_25300[(2)]);
var state_25300__$1 = state_25300;
var statearr_25307_25322 = state_25300__$1;
(statearr_25307_25322[(2)] = inst_25296);

(statearr_25307_25322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25301 === (8))){
var inst_25292 = (state_25300[(2)]);
var state_25300__$1 = (function (){var statearr_25308 = state_25300;
(statearr_25308[(8)] = inst_25292);

return statearr_25308;
})();
var statearr_25309_25323 = state_25300__$1;
(statearr_25309_25323[(2)] = null);

(statearr_25309_25323[(1)] = (2));


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
});})(c__20316__auto___25317,ch))
;
return ((function (switch__20254__auto__,c__20316__auto___25317,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20255__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20255__auto____0 = (function (){
var statearr_25313 = [null,null,null,null,null,null,null,null,null];
(statearr_25313[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20255__auto__);

(statearr_25313[(1)] = (1));

return statearr_25313;
});
var figwheel$client$heads_up_plugin_$_state_machine__20255__auto____1 = (function (state_25300){
while(true){
var ret_value__20256__auto__ = (function (){try{while(true){
var result__20257__auto__ = switch__20254__auto__.call(null,state_25300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20257__auto__;
}
break;
}
}catch (e25314){if((e25314 instanceof Object)){
var ex__20258__auto__ = e25314;
var statearr_25315_25324 = state_25300;
(statearr_25315_25324[(5)] = ex__20258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25325 = state_25300;
state_25300 = G__25325;
continue;
} else {
return ret_value__20256__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20255__auto__ = function(state_25300){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20255__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20255__auto____1.call(this,state_25300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20255__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20255__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20255__auto__;
})()
;})(switch__20254__auto__,c__20316__auto___25317,ch))
})();
var state__20318__auto__ = (function (){var statearr_25316 = f__20317__auto__.call(null);
(statearr_25316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20316__auto___25317);

return statearr_25316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20318__auto__);
});})(c__20316__auto___25317,ch))
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
var c__20316__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20316__auto__){
return (function (){
var f__20317__auto__ = (function (){var switch__20254__auto__ = ((function (c__20316__auto__){
return (function (state_25346){
var state_val_25347 = (state_25346[(1)]);
if((state_val_25347 === (1))){
var inst_25341 = cljs.core.async.timeout.call(null,(3000));
var state_25346__$1 = state_25346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25346__$1,(2),inst_25341);
} else {
if((state_val_25347 === (2))){
var inst_25343 = (state_25346[(2)]);
var inst_25344 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25346__$1 = (function (){var statearr_25348 = state_25346;
(statearr_25348[(7)] = inst_25343);

return statearr_25348;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25346__$1,inst_25344);
} else {
return null;
}
}
});})(c__20316__auto__))
;
return ((function (switch__20254__auto__,c__20316__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20255__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20255__auto____0 = (function (){
var statearr_25352 = [null,null,null,null,null,null,null,null];
(statearr_25352[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20255__auto__);

(statearr_25352[(1)] = (1));

return statearr_25352;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20255__auto____1 = (function (state_25346){
while(true){
var ret_value__20256__auto__ = (function (){try{while(true){
var result__20257__auto__ = switch__20254__auto__.call(null,state_25346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20257__auto__;
}
break;
}
}catch (e25353){if((e25353 instanceof Object)){
var ex__20258__auto__ = e25353;
var statearr_25354_25356 = state_25346;
(statearr_25354_25356[(5)] = ex__20258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25357 = state_25346;
state_25346 = G__25357;
continue;
} else {
return ret_value__20256__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20255__auto__ = function(state_25346){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20255__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20255__auto____1.call(this,state_25346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20255__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20255__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20255__auto__;
})()
;})(switch__20254__auto__,c__20316__auto__))
})();
var state__20318__auto__ = (function (){var statearr_25355 = f__20317__auto__.call(null);
(statearr_25355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20316__auto__);

return statearr_25355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20318__auto__);
});})(c__20316__auto__))
);

return c__20316__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25358){
var map__25364 = p__25358;
var map__25364__$1 = ((cljs.core.seq_QMARK_.call(null,map__25364))?cljs.core.apply.call(null,cljs.core.hash_map,map__25364):map__25364);
var ed = map__25364__$1;
var formatted_exception = cljs.core.get.call(null,map__25364__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__25364__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__25364__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25365_25369 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25366_25370 = null;
var count__25367_25371 = (0);
var i__25368_25372 = (0);
while(true){
if((i__25368_25372 < count__25367_25371)){
var msg_25373 = cljs.core._nth.call(null,chunk__25366_25370,i__25368_25372);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25373);

var G__25374 = seq__25365_25369;
var G__25375 = chunk__25366_25370;
var G__25376 = count__25367_25371;
var G__25377 = (i__25368_25372 + (1));
seq__25365_25369 = G__25374;
chunk__25366_25370 = G__25375;
count__25367_25371 = G__25376;
i__25368_25372 = G__25377;
continue;
} else {
var temp__4425__auto___25378 = cljs.core.seq.call(null,seq__25365_25369);
if(temp__4425__auto___25378){
var seq__25365_25379__$1 = temp__4425__auto___25378;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25365_25379__$1)){
var c__16854__auto___25380 = cljs.core.chunk_first.call(null,seq__25365_25379__$1);
var G__25381 = cljs.core.chunk_rest.call(null,seq__25365_25379__$1);
var G__25382 = c__16854__auto___25380;
var G__25383 = cljs.core.count.call(null,c__16854__auto___25380);
var G__25384 = (0);
seq__25365_25369 = G__25381;
chunk__25366_25370 = G__25382;
count__25367_25371 = G__25383;
i__25368_25372 = G__25384;
continue;
} else {
var msg_25385 = cljs.core.first.call(null,seq__25365_25379__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25385);

var G__25386 = cljs.core.next.call(null,seq__25365_25379__$1);
var G__25387 = null;
var G__25388 = (0);
var G__25389 = (0);
seq__25365_25369 = G__25386;
chunk__25366_25370 = G__25387;
count__25367_25371 = G__25388;
i__25368_25372 = G__25389;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25390){
var map__25392 = p__25390;
var map__25392__$1 = ((cljs.core.seq_QMARK_.call(null,map__25392))?cljs.core.apply.call(null,cljs.core.hash_map,map__25392):map__25392);
var w = map__25392__$1;
var message = cljs.core.get.call(null,map__25392__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__25399 = cljs.core.seq.call(null,plugins);
var chunk__25400 = null;
var count__25401 = (0);
var i__25402 = (0);
while(true){
if((i__25402 < count__25401)){
var vec__25403 = cljs.core._nth.call(null,chunk__25400,i__25402);
var k = cljs.core.nth.call(null,vec__25403,(0),null);
var plugin = cljs.core.nth.call(null,vec__25403,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25405 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25399,chunk__25400,count__25401,i__25402,pl_25405,vec__25403,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25405.call(null,msg_hist);
});})(seq__25399,chunk__25400,count__25401,i__25402,pl_25405,vec__25403,k,plugin))
);
} else {
}

var G__25406 = seq__25399;
var G__25407 = chunk__25400;
var G__25408 = count__25401;
var G__25409 = (i__25402 + (1));
seq__25399 = G__25406;
chunk__25400 = G__25407;
count__25401 = G__25408;
i__25402 = G__25409;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25399);
if(temp__4425__auto__){
var seq__25399__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25399__$1)){
var c__16854__auto__ = cljs.core.chunk_first.call(null,seq__25399__$1);
var G__25410 = cljs.core.chunk_rest.call(null,seq__25399__$1);
var G__25411 = c__16854__auto__;
var G__25412 = cljs.core.count.call(null,c__16854__auto__);
var G__25413 = (0);
seq__25399 = G__25410;
chunk__25400 = G__25411;
count__25401 = G__25412;
i__25402 = G__25413;
continue;
} else {
var vec__25404 = cljs.core.first.call(null,seq__25399__$1);
var k = cljs.core.nth.call(null,vec__25404,(0),null);
var plugin = cljs.core.nth.call(null,vec__25404,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25414 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25399,chunk__25400,count__25401,i__25402,pl_25414,vec__25404,k,plugin,seq__25399__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25414.call(null,msg_hist);
});})(seq__25399,chunk__25400,count__25401,i__25402,pl_25414,vec__25404,k,plugin,seq__25399__$1,temp__4425__auto__))
);
} else {
}

var G__25415 = cljs.core.next.call(null,seq__25399__$1);
var G__25416 = null;
var G__25417 = (0);
var G__25418 = (0);
seq__25399 = G__25415;
chunk__25400 = G__25416;
count__25401 = G__25417;
i__25402 = G__25418;
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
var G__25420 = arguments.length;
switch (G__25420) {
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

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25423){
var map__25424 = p__25423;
var map__25424__$1 = ((cljs.core.seq_QMARK_.call(null,map__25424))?cljs.core.apply.call(null,cljs.core.hash_map,map__25424):map__25424);
var opts = map__25424__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25422){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25422));
});

//# sourceMappingURL=client.js.map?rel=1440278278653