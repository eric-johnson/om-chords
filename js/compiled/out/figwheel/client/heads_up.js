// Compiled by ClojureScript 0.0-3297 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__17109__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17109__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__25551_25559 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__25552_25560 = null;
var count__25553_25561 = (0);
var i__25554_25562 = (0);
while(true){
if((i__25554_25562 < count__25553_25561)){
var k_25563 = cljs.core._nth.call(null,chunk__25552_25560,i__25554_25562);
e.setAttribute(cljs.core.name.call(null,k_25563),cljs.core.get.call(null,attrs,k_25563));

var G__25564 = seq__25551_25559;
var G__25565 = chunk__25552_25560;
var G__25566 = count__25553_25561;
var G__25567 = (i__25554_25562 + (1));
seq__25551_25559 = G__25564;
chunk__25552_25560 = G__25565;
count__25553_25561 = G__25566;
i__25554_25562 = G__25567;
continue;
} else {
var temp__4425__auto___25568 = cljs.core.seq.call(null,seq__25551_25559);
if(temp__4425__auto___25568){
var seq__25551_25569__$1 = temp__4425__auto___25568;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25551_25569__$1)){
var c__16854__auto___25570 = cljs.core.chunk_first.call(null,seq__25551_25569__$1);
var G__25571 = cljs.core.chunk_rest.call(null,seq__25551_25569__$1);
var G__25572 = c__16854__auto___25570;
var G__25573 = cljs.core.count.call(null,c__16854__auto___25570);
var G__25574 = (0);
seq__25551_25559 = G__25571;
chunk__25552_25560 = G__25572;
count__25553_25561 = G__25573;
i__25554_25562 = G__25574;
continue;
} else {
var k_25575 = cljs.core.first.call(null,seq__25551_25569__$1);
e.setAttribute(cljs.core.name.call(null,k_25575),cljs.core.get.call(null,attrs,k_25575));

var G__25576 = cljs.core.next.call(null,seq__25551_25569__$1);
var G__25577 = null;
var G__25578 = (0);
var G__25579 = (0);
seq__25551_25559 = G__25576;
chunk__25552_25560 = G__25577;
count__25553_25561 = G__25578;
i__25554_25562 = G__25579;
continue;
}
} else {
}
}
break;
}

var seq__25555_25580 = cljs.core.seq.call(null,children);
var chunk__25556_25581 = null;
var count__25557_25582 = (0);
var i__25558_25583 = (0);
while(true){
if((i__25558_25583 < count__25557_25582)){
var ch_25584 = cljs.core._nth.call(null,chunk__25556_25581,i__25558_25583);
e.appendChild(ch_25584);

var G__25585 = seq__25555_25580;
var G__25586 = chunk__25556_25581;
var G__25587 = count__25557_25582;
var G__25588 = (i__25558_25583 + (1));
seq__25555_25580 = G__25585;
chunk__25556_25581 = G__25586;
count__25557_25582 = G__25587;
i__25558_25583 = G__25588;
continue;
} else {
var temp__4425__auto___25589 = cljs.core.seq.call(null,seq__25555_25580);
if(temp__4425__auto___25589){
var seq__25555_25590__$1 = temp__4425__auto___25589;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25555_25590__$1)){
var c__16854__auto___25591 = cljs.core.chunk_first.call(null,seq__25555_25590__$1);
var G__25592 = cljs.core.chunk_rest.call(null,seq__25555_25590__$1);
var G__25593 = c__16854__auto___25591;
var G__25594 = cljs.core.count.call(null,c__16854__auto___25591);
var G__25595 = (0);
seq__25555_25580 = G__25592;
chunk__25556_25581 = G__25593;
count__25557_25582 = G__25594;
i__25558_25583 = G__25595;
continue;
} else {
var ch_25596 = cljs.core.first.call(null,seq__25555_25590__$1);
e.appendChild(ch_25596);

var G__25597 = cljs.core.next.call(null,seq__25555_25590__$1);
var G__25598 = null;
var G__25599 = (0);
var G__25600 = (0);
seq__25555_25580 = G__25597;
chunk__25556_25581 = G__25598;
count__25557_25582 = G__25599;
i__25558_25583 = G__25600;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq25548){
var G__25549 = cljs.core.first.call(null,seq25548);
var seq25548__$1 = cljs.core.next.call(null,seq25548);
var G__25550 = cljs.core.first.call(null,seq25548__$1);
var seq25548__$2 = cljs.core.next.call(null,seq25548__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__25549,G__25550,seq25548__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__16964__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__16965__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__16966__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__16967__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__16968__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__16964__auto__,prefer_table__16965__auto__,method_cache__16966__auto__,cached_hierarchy__16967__auto__,hierarchy__16968__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__16964__auto__,prefer_table__16965__auto__,method_cache__16966__auto__,cached_hierarchy__16967__auto__,hierarchy__16968__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__16968__auto__,method_table__16964__auto__,prefer_table__16965__auto__,method_cache__16966__auto__,cached_hierarchy__16967__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_25601 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_25601.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_25601.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_25601.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_25601);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__25602,st_map){
var map__25606 = p__25602;
var map__25606__$1 = ((cljs.core.seq_QMARK_.call(null,map__25606))?cljs.core.apply.call(null,cljs.core.hash_map,map__25606):map__25606);
var container_el = cljs.core.get.call(null,map__25606__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__25606,map__25606__$1,container_el){
return (function (p__25607){
var vec__25608 = p__25607;
var k = cljs.core.nth.call(null,vec__25608,(0),null);
var v = cljs.core.nth.call(null,vec__25608,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__25606,map__25606__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__25609,dom_str){
var map__25611 = p__25609;
var map__25611__$1 = ((cljs.core.seq_QMARK_.call(null,map__25611))?cljs.core.apply.call(null,cljs.core.hash_map,map__25611):map__25611);
var c = map__25611__$1;
var content_area_el = cljs.core.get.call(null,map__25611__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__25612){
var map__25614 = p__25612;
var map__25614__$1 = ((cljs.core.seq_QMARK_.call(null,map__25614))?cljs.core.apply.call(null,cljs.core.hash_map,map__25614):map__25614);
var content_area_el = cljs.core.get.call(null,map__25614__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__20316__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20316__auto__){
return (function (){
var f__20317__auto__ = (function (){var switch__20254__auto__ = ((function (c__20316__auto__){
return (function (state_25656){
var state_val_25657 = (state_25656[(1)]);
if((state_val_25657 === (1))){
var inst_25641 = (state_25656[(7)]);
var inst_25641__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_25642 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_25643 = ["10px","10px","100%","68px","1.0"];
var inst_25644 = cljs.core.PersistentHashMap.fromArrays(inst_25642,inst_25643);
var inst_25645 = cljs.core.merge.call(null,inst_25644,style);
var inst_25646 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25641__$1,inst_25645);
var inst_25647 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_25641__$1,msg);
var inst_25648 = cljs.core.async.timeout.call(null,(300));
var state_25656__$1 = (function (){var statearr_25658 = state_25656;
(statearr_25658[(8)] = inst_25647);

(statearr_25658[(9)] = inst_25646);

(statearr_25658[(7)] = inst_25641__$1);

return statearr_25658;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25656__$1,(2),inst_25648);
} else {
if((state_val_25657 === (2))){
var inst_25641 = (state_25656[(7)]);
var inst_25650 = (state_25656[(2)]);
var inst_25651 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_25652 = ["auto"];
var inst_25653 = cljs.core.PersistentHashMap.fromArrays(inst_25651,inst_25652);
var inst_25654 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25641,inst_25653);
var state_25656__$1 = (function (){var statearr_25659 = state_25656;
(statearr_25659[(10)] = inst_25650);

return statearr_25659;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25656__$1,inst_25654);
} else {
return null;
}
}
});})(c__20316__auto__))
;
return ((function (switch__20254__auto__,c__20316__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__20255__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__20255__auto____0 = (function (){
var statearr_25663 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25663[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__20255__auto__);

(statearr_25663[(1)] = (1));

return statearr_25663;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__20255__auto____1 = (function (state_25656){
while(true){
var ret_value__20256__auto__ = (function (){try{while(true){
var result__20257__auto__ = switch__20254__auto__.call(null,state_25656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20257__auto__;
}
break;
}
}catch (e25664){if((e25664 instanceof Object)){
var ex__20258__auto__ = e25664;
var statearr_25665_25667 = state_25656;
(statearr_25665_25667[(5)] = ex__20258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25668 = state_25656;
state_25656 = G__25668;
continue;
} else {
return ret_value__20256__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__20255__auto__ = function(state_25656){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20255__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20255__auto____1.call(this,state_25656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__20255__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__20255__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__20255__auto__;
})()
;})(switch__20254__auto__,c__20316__auto__))
})();
var state__20318__auto__ = (function (){var statearr_25666 = f__20317__auto__.call(null);
(statearr_25666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20316__auto__);

return statearr_25666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20318__auto__);
});})(c__20316__auto__))
);

return c__20316__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__25670 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__25670,(0),null);
var ln = cljs.core.nth.call(null,vec__25670,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__25673 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__25673,(0),null);
var file_line = cljs.core.nth.call(null,vec__25673,(1),null);
var file_column = cljs.core.nth.call(null,vec__25673,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__25673,file_name,file_line,file_column){
return (function (p1__25671_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__25671_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__25673,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16069__auto__ = file_line;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
var and__16057__auto__ = cause;
if(cljs.core.truth_(and__16057__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16057__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__25675 = figwheel.client.heads_up.ensure_container.call(null);
var map__25675__$1 = ((cljs.core.seq_QMARK_.call(null,map__25675))?cljs.core.apply.call(null,cljs.core.hash_map,map__25675):map__25675);
var content_area_el = cljs.core.get.call(null,map__25675__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__20316__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20316__auto__){
return (function (){
var f__20317__auto__ = (function (){var switch__20254__auto__ = ((function (c__20316__auto__){
return (function (state_25722){
var state_val_25723 = (state_25722[(1)]);
if((state_val_25723 === (1))){
var inst_25705 = (state_25722[(7)]);
var inst_25705__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_25706 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_25707 = ["0.0"];
var inst_25708 = cljs.core.PersistentHashMap.fromArrays(inst_25706,inst_25707);
var inst_25709 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25705__$1,inst_25708);
var inst_25710 = cljs.core.async.timeout.call(null,(300));
var state_25722__$1 = (function (){var statearr_25724 = state_25722;
(statearr_25724[(7)] = inst_25705__$1);

(statearr_25724[(8)] = inst_25709);

return statearr_25724;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25722__$1,(2),inst_25710);
} else {
if((state_val_25723 === (2))){
var inst_25705 = (state_25722[(7)]);
var inst_25712 = (state_25722[(2)]);
var inst_25713 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_25714 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_25715 = cljs.core.PersistentHashMap.fromArrays(inst_25713,inst_25714);
var inst_25716 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25705,inst_25715);
var inst_25717 = cljs.core.async.timeout.call(null,(200));
var state_25722__$1 = (function (){var statearr_25725 = state_25722;
(statearr_25725[(9)] = inst_25712);

(statearr_25725[(10)] = inst_25716);

return statearr_25725;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25722__$1,(3),inst_25717);
} else {
if((state_val_25723 === (3))){
var inst_25705 = (state_25722[(7)]);
var inst_25719 = (state_25722[(2)]);
var inst_25720 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_25705,"");
var state_25722__$1 = (function (){var statearr_25726 = state_25722;
(statearr_25726[(11)] = inst_25719);

return statearr_25726;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25722__$1,inst_25720);
} else {
return null;
}
}
}
});})(c__20316__auto__))
;
return ((function (switch__20254__auto__,c__20316__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__20255__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__20255__auto____0 = (function (){
var statearr_25730 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25730[(0)] = figwheel$client$heads_up$clear_$_state_machine__20255__auto__);

(statearr_25730[(1)] = (1));

return statearr_25730;
});
var figwheel$client$heads_up$clear_$_state_machine__20255__auto____1 = (function (state_25722){
while(true){
var ret_value__20256__auto__ = (function (){try{while(true){
var result__20257__auto__ = switch__20254__auto__.call(null,state_25722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20257__auto__;
}
break;
}
}catch (e25731){if((e25731 instanceof Object)){
var ex__20258__auto__ = e25731;
var statearr_25732_25734 = state_25722;
(statearr_25732_25734[(5)] = ex__20258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25735 = state_25722;
state_25722 = G__25735;
continue;
} else {
return ret_value__20256__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__20255__auto__ = function(state_25722){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__20255__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__20255__auto____1.call(this,state_25722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__20255__auto____0;
figwheel$client$heads_up$clear_$_state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__20255__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__20255__auto__;
})()
;})(switch__20254__auto__,c__20316__auto__))
})();
var state__20318__auto__ = (function (){var statearr_25733 = f__20317__auto__.call(null);
(statearr_25733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20316__auto__);

return statearr_25733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20318__auto__);
});})(c__20316__auto__))
);

return c__20316__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__20316__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20316__auto__){
return (function (){
var f__20317__auto__ = (function (){var switch__20254__auto__ = ((function (c__20316__auto__){
return (function (state_25767){
var state_val_25768 = (state_25767[(1)]);
if((state_val_25768 === (1))){
var inst_25757 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_25767__$1 = state_25767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25767__$1,(2),inst_25757);
} else {
if((state_val_25768 === (2))){
var inst_25759 = (state_25767[(2)]);
var inst_25760 = cljs.core.async.timeout.call(null,(400));
var state_25767__$1 = (function (){var statearr_25769 = state_25767;
(statearr_25769[(7)] = inst_25759);

return statearr_25769;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25767__$1,(3),inst_25760);
} else {
if((state_val_25768 === (3))){
var inst_25762 = (state_25767[(2)]);
var inst_25763 = figwheel.client.heads_up.clear.call(null);
var state_25767__$1 = (function (){var statearr_25770 = state_25767;
(statearr_25770[(8)] = inst_25762);

return statearr_25770;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25767__$1,(4),inst_25763);
} else {
if((state_val_25768 === (4))){
var inst_25765 = (state_25767[(2)]);
var state_25767__$1 = state_25767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25767__$1,inst_25765);
} else {
return null;
}
}
}
}
});})(c__20316__auto__))
;
return ((function (switch__20254__auto__,c__20316__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__20255__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__20255__auto____0 = (function (){
var statearr_25774 = [null,null,null,null,null,null,null,null,null];
(statearr_25774[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__20255__auto__);

(statearr_25774[(1)] = (1));

return statearr_25774;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__20255__auto____1 = (function (state_25767){
while(true){
var ret_value__20256__auto__ = (function (){try{while(true){
var result__20257__auto__ = switch__20254__auto__.call(null,state_25767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20257__auto__;
}
break;
}
}catch (e25775){if((e25775 instanceof Object)){
var ex__20258__auto__ = e25775;
var statearr_25776_25778 = state_25767;
(statearr_25776_25778[(5)] = ex__20258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25779 = state_25767;
state_25767 = G__25779;
continue;
} else {
return ret_value__20256__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__20255__auto__ = function(state_25767){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20255__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20255__auto____1.call(this,state_25767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__20255__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__20255__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__20255__auto__;
})()
;})(switch__20254__auto__,c__20316__auto__))
})();
var state__20318__auto__ = (function (){var statearr_25777 = f__20317__auto__.call(null);
(statearr_25777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20316__auto__);

return statearr_25777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20318__auto__);
});})(c__20316__auto__))
);

return c__20316__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1440278279449