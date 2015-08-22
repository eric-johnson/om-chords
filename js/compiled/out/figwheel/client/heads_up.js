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
var seq__21709_21717 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__21710_21718 = null;
var count__21711_21719 = (0);
var i__21712_21720 = (0);
while(true){
if((i__21712_21720 < count__21711_21719)){
var k_21721 = cljs.core._nth.call(null,chunk__21710_21718,i__21712_21720);
e.setAttribute(cljs.core.name.call(null,k_21721),cljs.core.get.call(null,attrs,k_21721));

var G__21722 = seq__21709_21717;
var G__21723 = chunk__21710_21718;
var G__21724 = count__21711_21719;
var G__21725 = (i__21712_21720 + (1));
seq__21709_21717 = G__21722;
chunk__21710_21718 = G__21723;
count__21711_21719 = G__21724;
i__21712_21720 = G__21725;
continue;
} else {
var temp__4425__auto___21726 = cljs.core.seq.call(null,seq__21709_21717);
if(temp__4425__auto___21726){
var seq__21709_21727__$1 = temp__4425__auto___21726;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21709_21727__$1)){
var c__16854__auto___21728 = cljs.core.chunk_first.call(null,seq__21709_21727__$1);
var G__21729 = cljs.core.chunk_rest.call(null,seq__21709_21727__$1);
var G__21730 = c__16854__auto___21728;
var G__21731 = cljs.core.count.call(null,c__16854__auto___21728);
var G__21732 = (0);
seq__21709_21717 = G__21729;
chunk__21710_21718 = G__21730;
count__21711_21719 = G__21731;
i__21712_21720 = G__21732;
continue;
} else {
var k_21733 = cljs.core.first.call(null,seq__21709_21727__$1);
e.setAttribute(cljs.core.name.call(null,k_21733),cljs.core.get.call(null,attrs,k_21733));

var G__21734 = cljs.core.next.call(null,seq__21709_21727__$1);
var G__21735 = null;
var G__21736 = (0);
var G__21737 = (0);
seq__21709_21717 = G__21734;
chunk__21710_21718 = G__21735;
count__21711_21719 = G__21736;
i__21712_21720 = G__21737;
continue;
}
} else {
}
}
break;
}

var seq__21713_21738 = cljs.core.seq.call(null,children);
var chunk__21714_21739 = null;
var count__21715_21740 = (0);
var i__21716_21741 = (0);
while(true){
if((i__21716_21741 < count__21715_21740)){
var ch_21742 = cljs.core._nth.call(null,chunk__21714_21739,i__21716_21741);
e.appendChild(ch_21742);

var G__21743 = seq__21713_21738;
var G__21744 = chunk__21714_21739;
var G__21745 = count__21715_21740;
var G__21746 = (i__21716_21741 + (1));
seq__21713_21738 = G__21743;
chunk__21714_21739 = G__21744;
count__21715_21740 = G__21745;
i__21716_21741 = G__21746;
continue;
} else {
var temp__4425__auto___21747 = cljs.core.seq.call(null,seq__21713_21738);
if(temp__4425__auto___21747){
var seq__21713_21748__$1 = temp__4425__auto___21747;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21713_21748__$1)){
var c__16854__auto___21749 = cljs.core.chunk_first.call(null,seq__21713_21748__$1);
var G__21750 = cljs.core.chunk_rest.call(null,seq__21713_21748__$1);
var G__21751 = c__16854__auto___21749;
var G__21752 = cljs.core.count.call(null,c__16854__auto___21749);
var G__21753 = (0);
seq__21713_21738 = G__21750;
chunk__21714_21739 = G__21751;
count__21715_21740 = G__21752;
i__21716_21741 = G__21753;
continue;
} else {
var ch_21754 = cljs.core.first.call(null,seq__21713_21748__$1);
e.appendChild(ch_21754);

var G__21755 = cljs.core.next.call(null,seq__21713_21748__$1);
var G__21756 = null;
var G__21757 = (0);
var G__21758 = (0);
seq__21713_21738 = G__21755;
chunk__21714_21739 = G__21756;
count__21715_21740 = G__21757;
i__21716_21741 = G__21758;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq21706){
var G__21707 = cljs.core.first.call(null,seq21706);
var seq21706__$1 = cljs.core.next.call(null,seq21706);
var G__21708 = cljs.core.first.call(null,seq21706__$1);
var seq21706__$2 = cljs.core.next.call(null,seq21706__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__21707,G__21708,seq21706__$2);
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
var el_21759 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_21759.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_21759.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_21759.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_21759);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__21760,st_map){
var map__21764 = p__21760;
var map__21764__$1 = ((cljs.core.seq_QMARK_.call(null,map__21764))?cljs.core.apply.call(null,cljs.core.hash_map,map__21764):map__21764);
var container_el = cljs.core.get.call(null,map__21764__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__21764,map__21764__$1,container_el){
return (function (p__21765){
var vec__21766 = p__21765;
var k = cljs.core.nth.call(null,vec__21766,(0),null);
var v = cljs.core.nth.call(null,vec__21766,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__21764,map__21764__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__21767,dom_str){
var map__21769 = p__21767;
var map__21769__$1 = ((cljs.core.seq_QMARK_.call(null,map__21769))?cljs.core.apply.call(null,cljs.core.hash_map,map__21769):map__21769);
var c = map__21769__$1;
var content_area_el = cljs.core.get.call(null,map__21769__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__21770){
var map__21772 = p__21770;
var map__21772__$1 = ((cljs.core.seq_QMARK_.call(null,map__21772))?cljs.core.apply.call(null,cljs.core.hash_map,map__21772):map__21772);
var content_area_el = cljs.core.get.call(null,map__21772__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19665__auto__){
return (function (){
var f__19666__auto__ = (function (){var switch__19644__auto__ = ((function (c__19665__auto__){
return (function (state_21814){
var state_val_21815 = (state_21814[(1)]);
if((state_val_21815 === (1))){
var inst_21799 = (state_21814[(7)]);
var inst_21799__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_21800 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_21801 = ["10px","10px","100%","68px","1.0"];
var inst_21802 = cljs.core.PersistentHashMap.fromArrays(inst_21800,inst_21801);
var inst_21803 = cljs.core.merge.call(null,inst_21802,style);
var inst_21804 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_21799__$1,inst_21803);
var inst_21805 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_21799__$1,msg);
var inst_21806 = cljs.core.async.timeout.call(null,(300));
var state_21814__$1 = (function (){var statearr_21816 = state_21814;
(statearr_21816[(7)] = inst_21799__$1);

(statearr_21816[(8)] = inst_21805);

(statearr_21816[(9)] = inst_21804);

return statearr_21816;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21814__$1,(2),inst_21806);
} else {
if((state_val_21815 === (2))){
var inst_21799 = (state_21814[(7)]);
var inst_21808 = (state_21814[(2)]);
var inst_21809 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_21810 = ["auto"];
var inst_21811 = cljs.core.PersistentHashMap.fromArrays(inst_21809,inst_21810);
var inst_21812 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_21799,inst_21811);
var state_21814__$1 = (function (){var statearr_21817 = state_21814;
(statearr_21817[(10)] = inst_21808);

return statearr_21817;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21814__$1,inst_21812);
} else {
return null;
}
}
});})(c__19665__auto__))
;
return ((function (switch__19644__auto__,c__19665__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19645__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19645__auto____0 = (function (){
var statearr_21821 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21821[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19645__auto__);

(statearr_21821[(1)] = (1));

return statearr_21821;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19645__auto____1 = (function (state_21814){
while(true){
var ret_value__19646__auto__ = (function (){try{while(true){
var result__19647__auto__ = switch__19644__auto__.call(null,state_21814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19647__auto__;
}
break;
}
}catch (e21822){if((e21822 instanceof Object)){
var ex__19648__auto__ = e21822;
var statearr_21823_21825 = state_21814;
(statearr_21823_21825[(5)] = ex__19648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21826 = state_21814;
state_21814 = G__21826;
continue;
} else {
return ret_value__19646__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19645__auto__ = function(state_21814){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19645__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19645__auto____1.call(this,state_21814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19645__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19645__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19645__auto__;
})()
;})(switch__19644__auto__,c__19665__auto__))
})();
var state__19667__auto__ = (function (){var statearr_21824 = f__19666__auto__.call(null);
(statearr_21824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19665__auto__);

return statearr_21824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19667__auto__);
});})(c__19665__auto__))
);

return c__19665__auto__;
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
var vec__21828 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__21828,(0),null);
var ln = cljs.core.nth.call(null,vec__21828,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__21831 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__21831,(0),null);
var file_line = cljs.core.nth.call(null,vec__21831,(1),null);
var file_column = cljs.core.nth.call(null,vec__21831,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__21831,file_name,file_line,file_column){
return (function (p1__21829_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__21829_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__21831,file_name,file_line,file_column))
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
var map__21833 = figwheel.client.heads_up.ensure_container.call(null);
var map__21833__$1 = ((cljs.core.seq_QMARK_.call(null,map__21833))?cljs.core.apply.call(null,cljs.core.hash_map,map__21833):map__21833);
var content_area_el = cljs.core.get.call(null,map__21833__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19665__auto__){
return (function (){
var f__19666__auto__ = (function (){var switch__19644__auto__ = ((function (c__19665__auto__){
return (function (state_21880){
var state_val_21881 = (state_21880[(1)]);
if((state_val_21881 === (1))){
var inst_21863 = (state_21880[(7)]);
var inst_21863__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_21864 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_21865 = ["0.0"];
var inst_21866 = cljs.core.PersistentHashMap.fromArrays(inst_21864,inst_21865);
var inst_21867 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_21863__$1,inst_21866);
var inst_21868 = cljs.core.async.timeout.call(null,(300));
var state_21880__$1 = (function (){var statearr_21882 = state_21880;
(statearr_21882[(7)] = inst_21863__$1);

(statearr_21882[(8)] = inst_21867);

return statearr_21882;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21880__$1,(2),inst_21868);
} else {
if((state_val_21881 === (2))){
var inst_21863 = (state_21880[(7)]);
var inst_21870 = (state_21880[(2)]);
var inst_21871 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_21872 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_21873 = cljs.core.PersistentHashMap.fromArrays(inst_21871,inst_21872);
var inst_21874 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_21863,inst_21873);
var inst_21875 = cljs.core.async.timeout.call(null,(200));
var state_21880__$1 = (function (){var statearr_21883 = state_21880;
(statearr_21883[(9)] = inst_21870);

(statearr_21883[(10)] = inst_21874);

return statearr_21883;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21880__$1,(3),inst_21875);
} else {
if((state_val_21881 === (3))){
var inst_21863 = (state_21880[(7)]);
var inst_21877 = (state_21880[(2)]);
var inst_21878 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_21863,"");
var state_21880__$1 = (function (){var statearr_21884 = state_21880;
(statearr_21884[(11)] = inst_21877);

return statearr_21884;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21880__$1,inst_21878);
} else {
return null;
}
}
}
});})(c__19665__auto__))
;
return ((function (switch__19644__auto__,c__19665__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19645__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19645__auto____0 = (function (){
var statearr_21888 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21888[(0)] = figwheel$client$heads_up$clear_$_state_machine__19645__auto__);

(statearr_21888[(1)] = (1));

return statearr_21888;
});
var figwheel$client$heads_up$clear_$_state_machine__19645__auto____1 = (function (state_21880){
while(true){
var ret_value__19646__auto__ = (function (){try{while(true){
var result__19647__auto__ = switch__19644__auto__.call(null,state_21880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19647__auto__;
}
break;
}
}catch (e21889){if((e21889 instanceof Object)){
var ex__19648__auto__ = e21889;
var statearr_21890_21892 = state_21880;
(statearr_21890_21892[(5)] = ex__19648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21893 = state_21880;
state_21880 = G__21893;
continue;
} else {
return ret_value__19646__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19645__auto__ = function(state_21880){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19645__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19645__auto____1.call(this,state_21880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19645__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19645__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19645__auto__;
})()
;})(switch__19644__auto__,c__19665__auto__))
})();
var state__19667__auto__ = (function (){var statearr_21891 = f__19666__auto__.call(null);
(statearr_21891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19665__auto__);

return statearr_21891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19667__auto__);
});})(c__19665__auto__))
);

return c__19665__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19665__auto__){
return (function (){
var f__19666__auto__ = (function (){var switch__19644__auto__ = ((function (c__19665__auto__){
return (function (state_21925){
var state_val_21926 = (state_21925[(1)]);
if((state_val_21926 === (1))){
var inst_21915 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_21925__$1 = state_21925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21925__$1,(2),inst_21915);
} else {
if((state_val_21926 === (2))){
var inst_21917 = (state_21925[(2)]);
var inst_21918 = cljs.core.async.timeout.call(null,(400));
var state_21925__$1 = (function (){var statearr_21927 = state_21925;
(statearr_21927[(7)] = inst_21917);

return statearr_21927;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21925__$1,(3),inst_21918);
} else {
if((state_val_21926 === (3))){
var inst_21920 = (state_21925[(2)]);
var inst_21921 = figwheel.client.heads_up.clear.call(null);
var state_21925__$1 = (function (){var statearr_21928 = state_21925;
(statearr_21928[(8)] = inst_21920);

return statearr_21928;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21925__$1,(4),inst_21921);
} else {
if((state_val_21926 === (4))){
var inst_21923 = (state_21925[(2)]);
var state_21925__$1 = state_21925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21925__$1,inst_21923);
} else {
return null;
}
}
}
}
});})(c__19665__auto__))
;
return ((function (switch__19644__auto__,c__19665__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19645__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19645__auto____0 = (function (){
var statearr_21932 = [null,null,null,null,null,null,null,null,null];
(statearr_21932[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19645__auto__);

(statearr_21932[(1)] = (1));

return statearr_21932;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19645__auto____1 = (function (state_21925){
while(true){
var ret_value__19646__auto__ = (function (){try{while(true){
var result__19647__auto__ = switch__19644__auto__.call(null,state_21925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19647__auto__;
}
break;
}
}catch (e21933){if((e21933 instanceof Object)){
var ex__19648__auto__ = e21933;
var statearr_21934_21936 = state_21925;
(statearr_21934_21936[(5)] = ex__19648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21937 = state_21925;
state_21925 = G__21937;
continue;
} else {
return ret_value__19646__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19645__auto__ = function(state_21925){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19645__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19645__auto____1.call(this,state_21925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19645__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19645__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19645__auto__;
})()
;})(switch__19644__auto__,c__19665__auto__))
})();
var state__19667__auto__ = (function (){var statearr_21935 = f__19666__auto__.call(null);
(statearr_21935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19665__auto__);

return statearr_21935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19667__auto__);
});})(c__19665__auto__))
);

return c__19665__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1440277345878