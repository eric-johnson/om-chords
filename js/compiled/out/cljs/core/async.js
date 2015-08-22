// Compiled by ClojureScript 0.0-3297 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t22713 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22713 = (function (fn_handler,f,meta22714){
this.fn_handler = fn_handler;
this.f = f;
this.meta22714 = meta22714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t22713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22715,meta22714__$1){
var self__ = this;
var _22715__$1 = this;
return (new cljs.core.async.t22713(self__.fn_handler,self__.f,meta22714__$1));
});

cljs.core.async.t22713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22715){
var self__ = this;
var _22715__$1 = this;
return self__.meta22714;
});

cljs.core.async.t22713.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22713.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t22713.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t22713.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta22714","meta22714",2039167750,null)], null);
});

cljs.core.async.t22713.cljs$lang$type = true;

cljs.core.async.t22713.cljs$lang$ctorStr = "cljs.core.async/t22713";

cljs.core.async.t22713.cljs$lang$ctorPrWriter = (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t22713");
});

cljs.core.async.__GT_t22713 = (function cljs$core$async$fn_handler_$___GT_t22713(fn_handler__$1,f__$1,meta22714){
return (new cljs.core.async.t22713(fn_handler__$1,f__$1,meta22714));
});

}

return (new cljs.core.async.t22713(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__22717 = buff;
if(G__22717){
var bit__16743__auto__ = null;
if(cljs.core.truth_((function (){var or__16069__auto__ = bit__16743__auto__;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return G__22717.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__22717.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__22717);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__22717);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__22719 = arguments.length;
switch (G__22719) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__22722 = arguments.length;
switch (G__22722) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22724 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22724);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22724,ret){
return (function (){
return fn1.call(null,val_22724);
});})(val_22724,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__22726 = arguments.length;
switch (G__22726) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__16954__auto___22728 = n;
var x_22729 = (0);
while(true){
if((x_22729 < n__16954__auto___22728)){
(a[x_22729] = (0));

var G__22730 = (x_22729 + (1));
x_22729 = G__22730;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__22731 = (i + (1));
i = G__22731;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t22735 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22735 = (function (alt_flag,flag,meta22736){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22736 = meta22736;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t22735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22737,meta22736__$1){
var self__ = this;
var _22737__$1 = this;
return (new cljs.core.async.t22735(self__.alt_flag,self__.flag,meta22736__$1));
});})(flag))
;

cljs.core.async.t22735.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22737){
var self__ = this;
var _22737__$1 = this;
return self__.meta22736;
});})(flag))
;

cljs.core.async.t22735.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22735.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t22735.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t22735.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22736","meta22736",-537557074,null)], null);
});})(flag))
;

cljs.core.async.t22735.cljs$lang$type = true;

cljs.core.async.t22735.cljs$lang$ctorStr = "cljs.core.async/t22735";

cljs.core.async.t22735.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t22735");
});})(flag))
;

cljs.core.async.__GT_t22735 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t22735(alt_flag__$1,flag__$1,meta22736){
return (new cljs.core.async.t22735(alt_flag__$1,flag__$1,meta22736));
});})(flag))
;

}

return (new cljs.core.async.t22735(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t22741 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22741 = (function (alt_handler,flag,cb,meta22742){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22742 = meta22742;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t22741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22743,meta22742__$1){
var self__ = this;
var _22743__$1 = this;
return (new cljs.core.async.t22741(self__.alt_handler,self__.flag,self__.cb,meta22742__$1));
});

cljs.core.async.t22741.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22743){
var self__ = this;
var _22743__$1 = this;
return self__.meta22742;
});

cljs.core.async.t22741.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22741.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t22741.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t22741.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22742","meta22742",1662902676,null)], null);
});

cljs.core.async.t22741.cljs$lang$type = true;

cljs.core.async.t22741.cljs$lang$ctorStr = "cljs.core.async/t22741";

cljs.core.async.t22741.cljs$lang$ctorPrWriter = (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t22741");
});

cljs.core.async.__GT_t22741 = (function cljs$core$async$alt_handler_$___GT_t22741(alt_handler__$1,flag__$1,cb__$1,meta22742){
return (new cljs.core.async.t22741(alt_handler__$1,flag__$1,cb__$1,meta22742));
});

}

return (new cljs.core.async.t22741(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22744_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22744_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22745_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22745_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16069__auto__ = wport;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22746 = (i + (1));
i = G__22746;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16069__auto__ = ret;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16057__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16057__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16057__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__17109__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17109__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22749){
var map__22750 = p__22749;
var map__22750__$1 = ((cljs.core.seq_QMARK_.call(null,map__22750))?cljs.core.apply.call(null,cljs.core.hash_map,map__22750):map__22750);
var opts = map__22750__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22747){
var G__22748 = cljs.core.first.call(null,seq22747);
var seq22747__$1 = cljs.core.next.call(null,seq22747);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22748,seq22747__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__22752 = arguments.length;
switch (G__22752) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19665__auto___22801 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19665__auto___22801){
return (function (){
var f__19666__auto__ = (function (){var switch__19644__auto__ = ((function (c__19665__auto___22801){
return (function (state_22776){
var state_val_22777 = (state_22776[(1)]);
if((state_val_22777 === (7))){
var inst_22772 = (state_22776[(2)]);
var state_22776__$1 = state_22776;
var statearr_22778_22802 = state_22776__$1;
(statearr_22778_22802[(2)] = inst_22772);

(statearr_22778_22802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22777 === (1))){
var state_22776__$1 = state_22776;
var statearr_22779_22803 = state_22776__$1;
(statearr_22779_22803[(2)] = null);

(statearr_22779_22803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22777 === (4))){
var inst_22755 = (state_22776[(7)]);
var inst_22755__$1 = (state_22776[(2)]);
var inst_22756 = (inst_22755__$1 == null);
var state_22776__$1 = (function (){var statearr_22780 = state_22776;
(statearr_22780[(7)] = inst_22755__$1);

return statearr_22780;
})();
if(cljs.core.truth_(inst_22756)){
var statearr_22781_22804 = state_22776__$1;
(statearr_22781_22804[(1)] = (5));

} else {
var statearr_22782_22805 = state_22776__$1;
(statearr_22782_22805[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22777 === (13))){
var state_22776__$1 = state_22776;
var statearr_22783_22806 = state_22776__$1;
(statearr_22783_22806[(2)] = null);

(statearr_22783_22806[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22777 === (6))){
var inst_22755 = (state_22776[(7)]);
var state_22776__$1 = state_22776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22776__$1,(11),to,inst_22755);
} else {
if((state_val_22777 === (3))){
var inst_22774 = (state_22776[(2)]);
var state_22776__$1 = state_22776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22776__$1,inst_22774);
} else {
if((state_val_22777 === (12))){
var state_22776__$1 = state_22776;
var statearr_22784_22807 = state_22776__$1;
(statearr_22784_22807[(2)] = null);

(statearr_22784_22807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22777 === (2))){
var state_22776__$1 = state_22776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22776__$1,(4),from);
} else {
if((state_val_22777 === (11))){
var inst_22765 = (state_22776[(2)]);
var state_22776__$1 = state_22776;
if(cljs.core.truth_(inst_22765)){
var statearr_22785_22808 = state_22776__$1;
(statearr_22785_22808[(1)] = (12));

} else {
var statearr_22786_22809 = state_22776__$1;
(statearr_22786_22809[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22777 === (9))){
var state_22776__$1 = state_22776;
var statearr_22787_22810 = state_22776__$1;
(statearr_22787_22810[(2)] = null);

(statearr_22787_22810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22777 === (5))){
var state_22776__$1 = state_22776;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22788_22811 = state_22776__$1;
(statearr_22788_22811[(1)] = (8));

} else {
var statearr_22789_22812 = state_22776__$1;
(statearr_22789_22812[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22777 === (14))){
var inst_22770 = (state_22776[(2)]);
var state_22776__$1 = state_22776;
var statearr_22790_22813 = state_22776__$1;
(statearr_22790_22813[(2)] = inst_22770);

(statearr_22790_22813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22777 === (10))){
var inst_22762 = (state_22776[(2)]);
var state_22776__$1 = state_22776;
var statearr_22791_22814 = state_22776__$1;
(statearr_22791_22814[(2)] = inst_22762);

(statearr_22791_22814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22777 === (8))){
var inst_22759 = cljs.core.async.close_BANG_.call(null,to);
var state_22776__$1 = state_22776;
var statearr_22792_22815 = state_22776__$1;
(statearr_22792_22815[(2)] = inst_22759);

(statearr_22792_22815[(1)] = (10));


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
});})(c__19665__auto___22801))
;
return ((function (switch__19644__auto__,c__19665__auto___22801){
return (function() {
var cljs$core$async$state_machine__19645__auto__ = null;
var cljs$core$async$state_machine__19645__auto____0 = (function (){
var statearr_22796 = [null,null,null,null,null,null,null,null];
(statearr_22796[(0)] = cljs$core$async$state_machine__19645__auto__);

(statearr_22796[(1)] = (1));

return statearr_22796;
});
var cljs$core$async$state_machine__19645__auto____1 = (function (state_22776){
while(true){
var ret_value__19646__auto__ = (function (){try{while(true){
var result__19647__auto__ = switch__19644__auto__.call(null,state_22776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19647__auto__;
}
break;
}
}catch (e22797){if((e22797 instanceof Object)){
var ex__19648__auto__ = e22797;
var statearr_22798_22816 = state_22776;
(statearr_22798_22816[(5)] = ex__19648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22817 = state_22776;
state_22776 = G__22817;
continue;
} else {
return ret_value__19646__auto__;
}
break;
}
});
cljs$core$async$state_machine__19645__auto__ = function(state_22776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19645__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19645__auto____1.call(this,state_22776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19645__auto____0;
cljs$core$async$state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19645__auto____1;
return cljs$core$async$state_machine__19645__auto__;
})()
;})(switch__19644__auto__,c__19665__auto___22801))
})();
var state__19667__auto__ = (function (){var statearr_22799 = f__19666__auto__.call(null);
(statearr_22799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19665__auto___22801);

return statearr_22799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19667__auto__);
});})(c__19665__auto___22801))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__23001){
var vec__23002 = p__23001;
var v = cljs.core.nth.call(null,vec__23002,(0),null);
var p = cljs.core.nth.call(null,vec__23002,(1),null);
var job = vec__23002;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19665__auto___23184 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19665__auto___23184,res,vec__23002,v,p,job,jobs,results){
return (function (){
var f__19666__auto__ = (function (){var switch__19644__auto__ = ((function (c__19665__auto___23184,res,vec__23002,v,p,job,jobs,results){
return (function (state_23007){
var state_val_23008 = (state_23007[(1)]);
if((state_val_23008 === (1))){
var state_23007__$1 = state_23007;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23007__$1,(2),res,v);
} else {
if((state_val_23008 === (2))){
var inst_23004 = (state_23007[(2)]);
var inst_23005 = cljs.core.async.close_BANG_.call(null,res);
var state_23007__$1 = (function (){var statearr_23009 = state_23007;
(statearr_23009[(7)] = inst_23004);

return statearr_23009;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23007__$1,inst_23005);
} else {
return null;
}
}
});})(c__19665__auto___23184,res,vec__23002,v,p,job,jobs,results))
;
return ((function (switch__19644__auto__,c__19665__auto___23184,res,vec__23002,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19645__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19645__auto____0 = (function (){
var statearr_23013 = [null,null,null,null,null,null,null,null];
(statearr_23013[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19645__auto__);

(statearr_23013[(1)] = (1));

return statearr_23013;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19645__auto____1 = (function (state_23007){
while(true){
var ret_value__19646__auto__ = (function (){try{while(true){
var result__19647__auto__ = switch__19644__auto__.call(null,state_23007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19647__auto__;
}
break;
}
}catch (e23014){if((e23014 instanceof Object)){
var ex__19648__auto__ = e23014;
var statearr_23015_23185 = state_23007;
(statearr_23015_23185[(5)] = ex__19648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23186 = state_23007;
state_23007 = G__23186;
continue;
} else {
return ret_value__19646__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19645__auto__ = function(state_23007){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19645__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19645__auto____1.call(this,state_23007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19645__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19645__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19645__auto__;
})()
;})(switch__19644__auto__,c__19665__auto___23184,res,vec__23002,v,p,job,jobs,results))
})();
var state__19667__auto__ = (function (){var statearr_23016 = f__19666__auto__.call(null);
(statearr_23016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19665__auto___23184);

return statearr_23016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19667__auto__);
});})(c__19665__auto___23184,res,vec__23002,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23017){
var vec__23018 = p__23017;
var v = cljs.core.nth.call(null,vec__23018,(0),null);
var p = cljs.core.nth.call(null,vec__23018,(1),null);
var job = vec__23018;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__16954__auto___23187 = n;
var __23188 = (0);
while(true){
if((__23188 < n__16954__auto___23187)){
var G__23019_23189 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23019_23189) {
case "compute":
var c__19665__auto___23191 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23188,c__19665__auto___23191,G__23019_23189,n__16954__auto___23187,jobs,results,process,async){
return (function (){
var f__19666__auto__ = (function (){var switch__19644__auto__ = ((function (__23188,c__19665__auto___23191,G__23019_23189,n__16954__auto___23187,jobs,results,process,async){
return (function (state_23032){
var state_val_23033 = (state_23032[(1)]);
if((state_val_23033 === (1))){
var state_23032__$1 = state_23032;
var statearr_23034_23192 = state_23032__$1;
(statearr_23034_23192[(2)] = null);

(statearr_23034_23192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23033 === (2))){
var state_23032__$1 = state_23032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23032__$1,(4),jobs);
} else {
if((state_val_23033 === (3))){
var inst_23030 = (state_23032[(2)]);
var state_23032__$1 = state_23032;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23032__$1,inst_23030);
} else {
if((state_val_23033 === (4))){
var inst_23022 = (state_23032[(2)]);
var inst_23023 = process.call(null,inst_23022);
var state_23032__$1 = state_23032;
if(cljs.core.truth_(inst_23023)){
var statearr_23035_23193 = state_23032__$1;
(statearr_23035_23193[(1)] = (5));

} else {
var statearr_23036_23194 = state_23032__$1;
(statearr_23036_23194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23033 === (5))){
var state_23032__$1 = state_23032;
var statearr_23037_23195 = state_23032__$1;
(statearr_23037_23195[(2)] = null);

(statearr_23037_23195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23033 === (6))){
var state_23032__$1 = state_23032;
var statearr_23038_23196 = state_23032__$1;
(statearr_23038_23196[(2)] = null);

(statearr_23038_23196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23033 === (7))){
var inst_23028 = (state_23032[(2)]);
var state_23032__$1 = state_23032;
var statearr_23039_23197 = state_23032__$1;
(statearr_23039_23197[(2)] = inst_23028);

(statearr_23039_23197[(1)] = (3));


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
});})(__23188,c__19665__auto___23191,G__23019_23189,n__16954__auto___23187,jobs,results,process,async))
;
return ((function (__23188,switch__19644__auto__,c__19665__auto___23191,G__23019_23189,n__16954__auto___23187,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19645__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19645__auto____0 = (function (){
var statearr_23043 = [null,null,null,null,null,null,null];
(statearr_23043[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19645__auto__);

(statearr_23043[(1)] = (1));

return statearr_23043;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19645__auto____1 = (function (state_23032){
while(true){
var ret_value__19646__auto__ = (function (){try{while(true){
var result__19647__auto__ = switch__19644__auto__.call(null,state_23032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19647__auto__;
}
break;
}
}catch (e23044){if((e23044 instanceof Object)){
var ex__19648__auto__ = e23044;
var statearr_23045_23198 = state_23032;
(statearr_23045_23198[(5)] = ex__19648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23199 = state_23032;
state_23032 = G__23199;
continue;
} else {
return ret_value__19646__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19645__auto__ = function(state_23032){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19645__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19645__auto____1.call(this,state_23032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19645__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19645__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19645__auto__;
})()
;})(__23188,switch__19644__auto__,c__19665__auto___23191,G__23019_23189,n__16954__auto___23187,jobs,results,process,async))
})();
var state__19667__auto__ = (function (){var statearr_23046 = f__19666__auto__.call(null);
(statearr_23046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19665__auto___23191);

return statearr_23046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19667__auto__);
});})(__23188,c__19665__auto___23191,G__23019_23189,n__16954__auto___23187,jobs,results,process,async))
);


break;
case "async":
var c__19665__auto___23200 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23188,c__19665__auto___23200,G__23019_23189,n__16954__auto___23187,jobs,results,process,async){
return (function (){
var f__19666__auto__ = (function (){var switch__19644__auto__ = ((function (__23188,c__19665__auto___23200,G__23019_23189,n__16954__auto___23187,jobs,results,process,async){
return (function (state_23059){
var state_val_23060 = (state_23059[(1)]);
if((state_val_23060 === (1))){
var state_23059__$1 = state_23059;
var statearr_23061_23201 = state_23059__$1;
(statearr_23061_23201[(2)] = null);

(statearr_23061_23201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (2))){
var state_23059__$1 = state_23059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23059__$1,(4),jobs);
} else {
if((state_val_23060 === (3))){
var inst_23057 = (state_23059[(2)]);
var state_23059__$1 = state_23059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23059__$1,inst_23057);
} else {
if((state_val_23060 === (4))){
var inst_23049 = (state_23059[(2)]);
var inst_23050 = async.call(null,inst_23049);
var state_23059__$1 = state_23059;
if(cljs.core.truth_(inst_23050)){
var statearr_23062_23202 = state_23059__$1;
(statearr_23062_23202[(1)] = (5));

} else {
var statearr_23063_23203 = state_23059__$1;
(statearr_23063_23203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (5))){
var state_23059__$1 = state_23059;
var statearr_23064_23204 = state_23059__$1;
(statearr_23064_23204[(2)] = null);

(statearr_23064_23204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (6))){
var state_23059__$1 = state_23059;
var statearr_23065_23205 = state_23059__$1;
(statearr_23065_23205[(2)] = null);

(statearr_23065_23205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (7))){
var inst_23055 = (state_23059[(2)]);
var state_23059__$1 = state_23059;
var statearr_23066_23206 = state_23059__$1;
(statearr_23066_23206[(2)] = inst_23055);

(statearr_23066_23206[(1)] = (3));


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
});})(__23188,c__19665__auto___23200,G__23019_23189,n__16954__auto___23187,jobs,results,process,async))
;
return ((function (__23188,switch__19644__auto__,c__19665__auto___23200,G__23019_23189,n__16954__auto___23187,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19645__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19645__auto____0 = (function (){
var statearr_23070 = [null,null,null,null,null,null,null];
(statearr_23070[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19645__auto__);

(statearr_23070[(1)] = (1));

return statearr_23070;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19645__auto____1 = (function (state_23059){
while(true){
var ret_value__19646__auto__ = (function (){try{while(true){
var result__19647__auto__ = switch__19644__auto__.call(null,state_23059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19647__auto__;
}
break;
}
}catch (e23071){if((e23071 instanceof Object)){
var ex__19648__auto__ = e23071;
var statearr_23072_23207 = state_23059;
(statearr_23072_23207[(5)] = ex__19648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23208 = state_23059;
state_23059 = G__23208;
continue;
} else {
return ret_value__19646__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19645__auto__ = function(state_23059){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19645__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19645__auto____1.call(this,state_23059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19645__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19645__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19645__auto__;
})()
;})(__23188,switch__19644__auto__,c__19665__auto___23200,G__23019_23189,n__16954__auto___23187,jobs,results,process,async))
})();
var state__19667__auto__ = (function (){var statearr_23073 = f__19666__auto__.call(null);
(statearr_23073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19665__auto___23200);

return statearr_23073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19667__auto__);
});})(__23188,c__19665__auto___23200,G__23019_23189,n__16954__auto___23187,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23209 = (__23188 + (1));
__23188 = G__23209;
continue;
} else {
}
break;
}

var c__19665__auto___23210 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19665__auto___23210,jobs,results,process,async){
return (function (){
var f__19666__auto__ = (function (){var switch__19644__auto__ = ((function (c__19665__auto___23210,jobs,results,process,async){
return (function (state_23095){
var state_val_23096 = (state_23095[(1)]);
if((state_val_23096 === (1))){
var state_23095__$1 = state_23095;
var statearr_23097_23211 = state_23095__$1;
(statearr_23097_23211[(2)] = null);

(statearr_23097_23211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23096 === (2))){
var state_23095__$1 = state_23095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23095__$1,(4),from);
} else {
if((state_val_23096 === (3))){
var inst_23093 = (state_23095[(2)]);
var state_23095__$1 = state_23095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23095__$1,inst_23093);
} else {
if((state_val_23096 === (4))){
var inst_23076 = (state_23095[(7)]);
var inst_23076__$1 = (state_23095[(2)]);
var inst_23077 = (inst_23076__$1 == null);
var state_23095__$1 = (function (){var statearr_23098 = state_23095;
(statearr_23098[(7)] = inst_23076__$1);

return statearr_23098;
})();
if(cljs.core.truth_(inst_23077)){
var statearr_23099_23212 = state_23095__$1;
(statearr_23099_23212[(1)] = (5));

} else {
var statearr_23100_23213 = state_23095__$1;
(statearr_23100_23213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23096 === (5))){
var inst_23079 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23095__$1 = state_23095;
var statearr_23101_23214 = state_23095__$1;
(statearr_23101_23214[(2)] = inst_23079);

(statearr_23101_23214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23096 === (6))){
var inst_23081 = (state_23095[(8)]);
var inst_23076 = (state_23095[(7)]);
var inst_23081__$1 = cljs.core.async.chan.call(null,(1));
var inst_23082 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23083 = [inst_23076,inst_23081__$1];
var inst_23084 = (new cljs.core.PersistentVector(null,2,(5),inst_23082,inst_23083,null));
var state_23095__$1 = (function (){var statearr_23102 = state_23095;
(statearr_23102[(8)] = inst_23081__$1);

return statearr_23102;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23095__$1,(8),jobs,inst_23084);
} else {
if((state_val_23096 === (7))){
var inst_23091 = (state_23095[(2)]);
var state_23095__$1 = state_23095;
var statearr_23103_23215 = state_23095__$1;
(statearr_23103_23215[(2)] = inst_23091);

(statearr_23103_23215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23096 === (8))){
var inst_23081 = (state_23095[(8)]);
var inst_23086 = (state_23095[(2)]);
var state_23095__$1 = (function (){var statearr_23104 = state_23095;
(statearr_23104[(9)] = inst_23086);

return statearr_23104;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23095__$1,(9),results,inst_23081);
} else {
if((state_val_23096 === (9))){
var inst_23088 = (state_23095[(2)]);
var state_23095__$1 = (function (){var statearr_23105 = state_23095;
(statearr_23105[(10)] = inst_23088);

return statearr_23105;
})();
var statearr_23106_23216 = state_23095__$1;
(statearr_23106_23216[(2)] = null);

(statearr_23106_23216[(1)] = (2));


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
});})(c__19665__auto___23210,jobs,results,process,async))
;
return ((function (switch__19644__auto__,c__19665__auto___23210,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19645__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19645__auto____0 = (function (){
var statearr_23110 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23110[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19645__auto__);

(statearr_23110[(1)] = (1));

return statearr_23110;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19645__auto____1 = (function (state_23095){
while(true){
var ret_value__19646__auto__ = (function (){try{while(true){
var result__19647__auto__ = switch__19644__auto__.call(null,state_23095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19647__auto__;
}
break;
}
}catch (e23111){if((e23111 instanceof Object)){
var ex__19648__auto__ = e23111;
var statearr_23112_23217 = state_23095;
(statearr_23112_23217[(5)] = ex__19648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23218 = state_23095;
state_23095 = G__23218;
continue;
} else {
return ret_value__19646__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19645__auto__ = function(state_23095){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19645__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19645__auto____1.call(this,state_23095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19645__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19645__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19645__auto__;
})()
;})(switch__19644__auto__,c__19665__auto___23210,jobs,results,process,async))
})();
var state__19667__auto__ = (function (){var statearr_23113 = f__19666__auto__.call(null);
(statearr_23113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19665__auto___23210);

return statearr_23113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19667__auto__);
});})(c__19665__auto___23210,jobs,results,process,async))
);


var c__19665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19665__auto__,jobs,results,process,async){
return (function (){
var f__19666__auto__ = (function (){var switch__19644__auto__ = ((function (c__19665__auto__,jobs,results,process,async){
return (function (state_23151){
var state_val_23152 = (state_23151[(1)]);
if((state_val_23152 === (7))){
var inst_23147 = (state_23151[(2)]);
var state_23151__$1 = state_23151;
var statearr_23153_23219 = state_23151__$1;
(statearr_23153_23219[(2)] = inst_23147);

(statearr_23153_23219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (20))){
var state_23151__$1 = state_23151;
var statearr_23154_23220 = state_23151__$1;
(statearr_23154_23220[(2)] = null);

(statearr_23154_23220[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (1))){
var state_23151__$1 = state_23151;
var statearr_23155_23221 = state_23151__$1;
(statearr_23155_23221[(2)] = null);

(statearr_23155_23221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (4))){
var inst_23116 = (state_23151[(7)]);
var inst_23116__$1 = (state_23151[(2)]);
var inst_23117 = (inst_23116__$1 == null);
var state_23151__$1 = (function (){var statearr_23156 = state_23151;
(statearr_23156[(7)] = inst_23116__$1);

return statearr_23156;
})();
if(cljs.core.truth_(inst_23117)){
var statearr_23157_23222 = state_23151__$1;
(statearr_23157_23222[(1)] = (5));

} else {
var statearr_23158_23223 = state_23151__$1;
(statearr_23158_23223[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (15))){
var inst_23129 = (state_23151[(8)]);
var state_23151__$1 = state_23151;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23151__$1,(18),to,inst_23129);
} else {
if((state_val_23152 === (21))){
var inst_23142 = (state_23151[(2)]);
var state_23151__$1 = state_23151;
var statearr_23159_23224 = state_23151__$1;
(statearr_23159_23224[(2)] = inst_23142);

(statearr_23159_23224[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (13))){
var inst_23144 = (state_23151[(2)]);
var state_23151__$1 = (function (){var statearr_23160 = state_23151;
(statearr_23160[(9)] = inst_23144);

return statearr_23160;
})();
var statearr_23161_23225 = state_23151__$1;
(statearr_23161_23225[(2)] = null);

(statearr_23161_23225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (6))){
var inst_23116 = (state_23151[(7)]);
var state_23151__$1 = state_23151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23151__$1,(11),inst_23116);
} else {
if((state_val_23152 === (17))){
var inst_23137 = (state_23151[(2)]);
var state_23151__$1 = state_23151;
if(cljs.core.truth_(inst_23137)){
var statearr_23162_23226 = state_23151__$1;
(statearr_23162_23226[(1)] = (19));

} else {
var statearr_23163_23227 = state_23151__$1;
(statearr_23163_23227[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (3))){
var inst_23149 = (state_23151[(2)]);
var state_23151__$1 = state_23151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23151__$1,inst_23149);
} else {
if((state_val_23152 === (12))){
var inst_23126 = (state_23151[(10)]);
var state_23151__$1 = state_23151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23151__$1,(14),inst_23126);
} else {
if((state_val_23152 === (2))){
var state_23151__$1 = state_23151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23151__$1,(4),results);
} else {
if((state_val_23152 === (19))){
var state_23151__$1 = state_23151;
var statearr_23164_23228 = state_23151__$1;
(statearr_23164_23228[(2)] = null);

(statearr_23164_23228[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (11))){
var inst_23126 = (state_23151[(2)]);
var state_23151__$1 = (function (){var statearr_23165 = state_23151;
(statearr_23165[(10)] = inst_23126);

return statearr_23165;
})();
var statearr_23166_23229 = state_23151__$1;
(statearr_23166_23229[(2)] = null);

(statearr_23166_23229[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (9))){
var state_23151__$1 = state_23151;
var statearr_23167_23230 = state_23151__$1;
(statearr_23167_23230[(2)] = null);

(statearr_23167_23230[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (5))){
var state_23151__$1 = state_23151;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23168_23231 = state_23151__$1;
(statearr_23168_23231[(1)] = (8));

} else {
var statearr_23169_23232 = state_23151__$1;
(statearr_23169_23232[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (14))){
var inst_23131 = (state_23151[(11)]);
var inst_23129 = (state_23151[(8)]);
var inst_23129__$1 = (state_23151[(2)]);
var inst_23130 = (inst_23129__$1 == null);
var inst_23131__$1 = cljs.core.not.call(null,inst_23130);
var state_23151__$1 = (function (){var statearr_23170 = state_23151;
(statearr_23170[(11)] = inst_23131__$1);

(statearr_23170[(8)] = inst_23129__$1);

return statearr_23170;
})();
if(inst_23131__$1){
var statearr_23171_23233 = state_23151__$1;
(statearr_23171_23233[(1)] = (15));

} else {
var statearr_23172_23234 = state_23151__$1;
(statearr_23172_23234[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (16))){
var inst_23131 = (state_23151[(11)]);
var state_23151__$1 = state_23151;
var statearr_23173_23235 = state_23151__$1;
(statearr_23173_23235[(2)] = inst_23131);

(statearr_23173_23235[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (10))){
var inst_23123 = (state_23151[(2)]);
var state_23151__$1 = state_23151;
var statearr_23174_23236 = state_23151__$1;
(statearr_23174_23236[(2)] = inst_23123);

(statearr_23174_23236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (18))){
var inst_23134 = (state_23151[(2)]);
var state_23151__$1 = state_23151;
var statearr_23175_23237 = state_23151__$1;
(statearr_23175_23237[(2)] = inst_23134);

(statearr_23175_23237[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (8))){
var inst_23120 = cljs.core.async.close_BANG_.call(null,to);
var state_23151__$1 = state_23151;
var statearr_23176_23238 = state_23151__$1;
(statearr_23176_23238[(2)] = inst_23120);

(statearr_23176_23238[(1)] = (10));


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
});})(c__19665__auto__,jobs,results,process,async))
;
return ((function (switch__19644__auto__,c__19665__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19645__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19645__auto____0 = (function (){
var statearr_23180 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23180[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19645__auto__);

(statearr_23180[(1)] = (1));

return statearr_23180;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19645__auto____1 = (function (state_23151){
while(true){
var ret_value__19646__auto__ = (function (){try{while(true){
var result__19647__auto__ = switch__19644__auto__.call(null,state_23151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19647__auto__;
}
break;
}
}catch (e23181){if((e23181 instanceof Object)){
var ex__19648__auto__ = e23181;
var statearr_23182_23239 = state_23151;
(statearr_23182_23239[(5)] = ex__19648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23240 = state_23151;
state_23151 = G__23240;
continue;
} else {
return ret_value__19646__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19645__auto__ = function(state_23151){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19645__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19645__auto____1.call(this,state_23151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19645__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19645__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19645__auto__;
})()
;})(switch__19644__auto__,c__19665__auto__,jobs,results,process,async))
})();
var state__19667__auto__ = (function (){var statearr_23183 = f__19666__auto__.call(null);
(statearr_23183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19665__auto__);

return statearr_23183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19667__auto__);
});})(c__19665__auto__,jobs,results,process,async))
);

return c__19665__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__23242 = arguments.length;
switch (G__23242) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__23245 = arguments.length;
switch (G__23245) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__23248 = arguments.length;
switch (G__23248) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19665__auto___23300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19665__auto___23300,tc,fc){
return (function (){
var f__19666__auto__ = (function (){var switch__19644__auto__ = ((function (c__19665__auto___23300,tc,fc){
return (function (state_23274){
var state_val_23275 = (state_23274[(1)]);
if((state_val_23275 === (7))){
var inst_23270 = (state_23274[(2)]);
var state_23274__$1 = state_23274;
var statearr_23276_23301 = state_23274__$1;
(statearr_23276_23301[(2)] = inst_23270);

(statearr_23276_23301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (1))){
var state_23274__$1 = state_23274;
var statearr_23277_23302 = state_23274__$1;
(statearr_23277_23302[(2)] = null);

(statearr_23277_23302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (4))){
var inst_23251 = (state_23274[(7)]);
var inst_23251__$1 = (state_23274[(2)]);
var inst_23252 = (inst_23251__$1 == null);
var state_23274__$1 = (function (){var statearr_23278 = state_23274;
(statearr_23278[(7)] = inst_23251__$1);

return statearr_23278;
})();
if(cljs.core.truth_(inst_23252)){
var statearr_23279_23303 = state_23274__$1;
(statearr_23279_23303[(1)] = (5));

} else {
var statearr_23280_23304 = state_23274__$1;
(statearr_23280_23304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (13))){
var state_23274__$1 = state_23274;
var statearr_23281_23305 = state_23274__$1;
(statearr_23281_23305[(2)] = null);

(statearr_23281_23305[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (6))){
var inst_23251 = (state_23274[(7)]);
var inst_23257 = p.call(null,inst_23251);
var state_23274__$1 = state_23274;
if(cljs.core.truth_(inst_23257)){
var statearr_23282_23306 = state_23274__$1;
(statearr_23282_23306[(1)] = (9));

} else {
var statearr_23283_23307 = state_23274__$1;
(statearr_23283_23307[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (3))){
var inst_23272 = (state_23274[(2)]);
var state_23274__$1 = state_23274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23274__$1,inst_23272);
} else {
if((state_val_23275 === (12))){
var state_23274__$1 = state_23274;
var statearr_23284_23308 = state_23274__$1;
(statearr_23284_23308[(2)] = null);

(statearr_23284_23308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (2))){
var state_23274__$1 = state_23274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23274__$1,(4),ch);
} else {
if((state_val_23275 === (11))){
var inst_23251 = (state_23274[(7)]);
var inst_23261 = (state_23274[(2)]);
var state_23274__$1 = state_23274;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23274__$1,(8),inst_23261,inst_23251);
} else {
if((state_val_23275 === (9))){
var state_23274__$1 = state_23274;
var statearr_23285_23309 = state_23274__$1;
(statearr_23285_23309[(2)] = tc);

(statearr_23285_23309[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (5))){
var inst_23254 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23255 = cljs.core.async.close_BANG_.call(null,fc);
var state_23274__$1 = (function (){var statearr_23286 = state_23274;
(statearr_23286[(8)] = inst_23254);

return statearr_23286;
})();
var statearr_23287_23310 = state_23274__$1;
(statearr_23287_23310[(2)] = inst_23255);

(statearr_23287_23310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (14))){
var inst_23268 = (state_23274[(2)]);
var state_23274__$1 = state_23274;
var statearr_23288_23311 = state_23274__$1;
(statearr_23288_23311[(2)] = inst_23268);

(statearr_23288_23311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (10))){
var state_23274__$1 = state_23274;
var statearr_23289_23312 = state_23274__$1;
(statearr_23289_23312[(2)] = fc);

(statearr_23289_23312[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (8))){
var inst_23263 = (state_23274[(2)]);
var state_23274__$1 = state_23274;
if(cljs.core.truth_(inst_23263)){
var statearr_23290_23313 = state_23274__$1;
(statearr_23290_23313[(1)] = (12));

} else {
var statearr_23291_23314 = state_23274__$1;
(statearr_23291_23314[(1)] = (13));

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
});})(c__19665__auto___23300,tc,fc))
;
return ((function (switch__19644__auto__,c__19665__auto___23300,tc,fc){
return (function() {
var cljs$core$async$state_machine__19645__auto__ = null;
var cljs$core$async$state_machine__19645__auto____0 = (function (){
var statearr_23295 = [null,null,null,null,null,null,null,null,null];
(statearr_23295[(0)] = cljs$core$async$state_machine__19645__auto__);

(statearr_23295[(1)] = (1));

return statearr_23295;
});
var cljs$core$async$state_machine__19645__auto____1 = (function (state_23274){
while(true){
var ret_value__19646__auto__ = (function (){try{while(true){
var result__19647__auto__ = switch__19644__auto__.call(null,state_23274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19647__auto__;
}
break;
}
}catch (e23296){if((e23296 instanceof Object)){
var ex__19648__auto__ = e23296;
var statearr_23297_23315 = state_23274;
(statearr_23297_23315[(5)] = ex__19648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23316 = state_23274;
state_23274 = G__23316;
continue;
} else {
return ret_value__19646__auto__;
}
break;
}
});
cljs$core$async$state_machine__19645__auto__ = function(state_23274){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19645__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19645__auto____1.call(this,state_23274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19645__auto____0;
cljs$core$async$state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19645__auto____1;
return cljs$core$async$state_machine__19645__auto__;
})()
;})(switch__19644__auto__,c__19665__auto___23300,tc,fc))
})();
var state__19667__auto__ = (function (){var statearr_23298 = f__19666__auto__.call(null);
(statearr_23298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19665__auto___23300);

return statearr_23298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19667__auto__);
});})(c__19665__auto___23300,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19665__auto__){
return (function (){
var f__19666__auto__ = (function (){var switch__19644__auto__ = ((function (c__19665__auto__){
return (function (state_23363){
var state_val_23364 = (state_23363[(1)]);
if((state_val_23364 === (1))){
var inst_23349 = init;
var state_23363__$1 = (function (){var statearr_23365 = state_23363;
(statearr_23365[(7)] = inst_23349);

return statearr_23365;
})();
var statearr_23366_23381 = state_23363__$1;
(statearr_23366_23381[(2)] = null);

(statearr_23366_23381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23364 === (2))){
var state_23363__$1 = state_23363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23363__$1,(4),ch);
} else {
if((state_val_23364 === (3))){
var inst_23361 = (state_23363[(2)]);
var state_23363__$1 = state_23363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23363__$1,inst_23361);
} else {
if((state_val_23364 === (4))){
var inst_23352 = (state_23363[(8)]);
var inst_23352__$1 = (state_23363[(2)]);
var inst_23353 = (inst_23352__$1 == null);
var state_23363__$1 = (function (){var statearr_23367 = state_23363;
(statearr_23367[(8)] = inst_23352__$1);

return statearr_23367;
})();
if(cljs.core.truth_(inst_23353)){
var statearr_23368_23382 = state_23363__$1;
(statearr_23368_23382[(1)] = (5));

} else {
var statearr_23369_23383 = state_23363__$1;
(statearr_23369_23383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23364 === (5))){
var inst_23349 = (state_23363[(7)]);
var state_23363__$1 = state_23363;
var statearr_23370_23384 = state_23363__$1;
(statearr_23370_23384[(2)] = inst_23349);

(statearr_23370_23384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23364 === (6))){
var inst_23349 = (state_23363[(7)]);
var inst_23352 = (state_23363[(8)]);
var inst_23356 = f.call(null,inst_23349,inst_23352);
var inst_23349__$1 = inst_23356;
var state_23363__$1 = (function (){var statearr_23371 = state_23363;
(statearr_23371[(7)] = inst_23349__$1);

return statearr_23371;
})();
var statearr_23372_23385 = state_23363__$1;
(statearr_23372_23385[(2)] = null);

(statearr_23372_23385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23364 === (7))){
var inst_23359 = (state_23363[(2)]);
var state_23363__$1 = state_23363;
var statearr_23373_23386 = state_23363__$1;
(statearr_23373_23386[(2)] = inst_23359);

(statearr_23373_23386[(1)] = (3));


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
});})(c__19665__auto__))
;
return ((function (switch__19644__auto__,c__19665__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19645__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19645__auto____0 = (function (){
var statearr_23377 = [null,null,null,null,null,null,null,null,null];
(statearr_23377[(0)] = cljs$core$async$reduce_$_state_machine__19645__auto__);

(statearr_23377[(1)] = (1));

return statearr_23377;
});
var cljs$core$async$reduce_$_state_machine__19645__auto____1 = (function (state_23363){
while(true){
var ret_value__19646__auto__ = (function (){try{while(true){
var result__19647__auto__ = switch__19644__auto__.call(null,state_23363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19647__auto__;
}
break;
}
}catch (e23378){if((e23378 instanceof Object)){
var ex__19648__auto__ = e23378;
var statearr_23379_23387 = state_23363;
(statearr_23379_23387[(5)] = ex__19648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23388 = state_23363;
state_23363 = G__23388;
continue;
} else {
return ret_value__19646__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19645__auto__ = function(state_23363){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19645__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19645__auto____1.call(this,state_23363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19645__auto____0;
cljs$core$async$reduce_$_state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19645__auto____1;
return cljs$core$async$reduce_$_state_machine__19645__auto__;
})()
;})(switch__19644__auto__,c__19665__auto__))
})();
var state__19667__auto__ = (function (){var statearr_23380 = f__19666__auto__.call(null);
(statearr_23380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19665__auto__);

return statearr_23380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19667__auto__);
});})(c__19665__auto__))
);

return c__19665__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__23390 = arguments.length;
switch (G__23390) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19665__auto__){
return (function (){
var f__19666__auto__ = (function (){var switch__19644__auto__ = ((function (c__19665__auto__){
return (function (state_23415){
var state_val_23416 = (state_23415[(1)]);
if((state_val_23416 === (7))){
var inst_23397 = (state_23415[(2)]);
var state_23415__$1 = state_23415;
var statearr_23417_23441 = state_23415__$1;
(statearr_23417_23441[(2)] = inst_23397);

(statearr_23417_23441[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23416 === (1))){
var inst_23391 = cljs.core.seq.call(null,coll);
var inst_23392 = inst_23391;
var state_23415__$1 = (function (){var statearr_23418 = state_23415;
(statearr_23418[(7)] = inst_23392);

return statearr_23418;
})();
var statearr_23419_23442 = state_23415__$1;
(statearr_23419_23442[(2)] = null);

(statearr_23419_23442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23416 === (4))){
var inst_23392 = (state_23415[(7)]);
var inst_23395 = cljs.core.first.call(null,inst_23392);
var state_23415__$1 = state_23415;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23415__$1,(7),ch,inst_23395);
} else {
if((state_val_23416 === (13))){
var inst_23409 = (state_23415[(2)]);
var state_23415__$1 = state_23415;
var statearr_23420_23443 = state_23415__$1;
(statearr_23420_23443[(2)] = inst_23409);

(statearr_23420_23443[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23416 === (6))){
var inst_23400 = (state_23415[(2)]);
var state_23415__$1 = state_23415;
if(cljs.core.truth_(inst_23400)){
var statearr_23421_23444 = state_23415__$1;
(statearr_23421_23444[(1)] = (8));

} else {
var statearr_23422_23445 = state_23415__$1;
(statearr_23422_23445[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23416 === (3))){
var inst_23413 = (state_23415[(2)]);
var state_23415__$1 = state_23415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23415__$1,inst_23413);
} else {
if((state_val_23416 === (12))){
var state_23415__$1 = state_23415;
var statearr_23423_23446 = state_23415__$1;
(statearr_23423_23446[(2)] = null);

(statearr_23423_23446[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23416 === (2))){
var inst_23392 = (state_23415[(7)]);
var state_23415__$1 = state_23415;
if(cljs.core.truth_(inst_23392)){
var statearr_23424_23447 = state_23415__$1;
(statearr_23424_23447[(1)] = (4));

} else {
var statearr_23425_23448 = state_23415__$1;
(statearr_23425_23448[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23416 === (11))){
var inst_23406 = cljs.core.async.close_BANG_.call(null,ch);
var state_23415__$1 = state_23415;
var statearr_23426_23449 = state_23415__$1;
(statearr_23426_23449[(2)] = inst_23406);

(statearr_23426_23449[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23416 === (9))){
var state_23415__$1 = state_23415;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23427_23450 = state_23415__$1;
(statearr_23427_23450[(1)] = (11));

} else {
var statearr_23428_23451 = state_23415__$1;
(statearr_23428_23451[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23416 === (5))){
var inst_23392 = (state_23415[(7)]);
var state_23415__$1 = state_23415;
var statearr_23429_23452 = state_23415__$1;
(statearr_23429_23452[(2)] = inst_23392);

(statearr_23429_23452[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23416 === (10))){
var inst_23411 = (state_23415[(2)]);
var state_23415__$1 = state_23415;
var statearr_23430_23453 = state_23415__$1;
(statearr_23430_23453[(2)] = inst_23411);

(statearr_23430_23453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23416 === (8))){
var inst_23392 = (state_23415[(7)]);
var inst_23402 = cljs.core.next.call(null,inst_23392);
var inst_23392__$1 = inst_23402;
var state_23415__$1 = (function (){var statearr_23431 = state_23415;
(statearr_23431[(7)] = inst_23392__$1);

return statearr_23431;
})();
var statearr_23432_23454 = state_23415__$1;
(statearr_23432_23454[(2)] = null);

(statearr_23432_23454[(1)] = (2));


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
});})(c__19665__auto__))
;
return ((function (switch__19644__auto__,c__19665__auto__){
return (function() {
var cljs$core$async$state_machine__19645__auto__ = null;
var cljs$core$async$state_machine__19645__auto____0 = (function (){
var statearr_23436 = [null,null,null,null,null,null,null,null];
(statearr_23436[(0)] = cljs$core$async$state_machine__19645__auto__);

(statearr_23436[(1)] = (1));

return statearr_23436;
});
var cljs$core$async$state_machine__19645__auto____1 = (function (state_23415){
while(true){
var ret_value__19646__auto__ = (function (){try{while(true){
var result__19647__auto__ = switch__19644__auto__.call(null,state_23415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19647__auto__;
}
break;
}
}catch (e23437){if((e23437 instanceof Object)){
var ex__19648__auto__ = e23437;
var statearr_23438_23455 = state_23415;
(statearr_23438_23455[(5)] = ex__19648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23456 = state_23415;
state_23415 = G__23456;
continue;
} else {
return ret_value__19646__auto__;
}
break;
}
});
cljs$core$async$state_machine__19645__auto__ = function(state_23415){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19645__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19645__auto____1.call(this,state_23415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19645__auto____0;
cljs$core$async$state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19645__auto____1;
return cljs$core$async$state_machine__19645__auto__;
})()
;})(switch__19644__auto__,c__19665__auto__))
})();
var state__19667__auto__ = (function (){var statearr_23439 = f__19666__auto__.call(null);
(statearr_23439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19665__auto__);

return statearr_23439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19667__auto__);
});})(c__19665__auto__))
);

return c__19665__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj23458 = {};
return obj23458;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__16057__auto__ = _;
if(and__16057__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__16057__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__16705__auto__ = (((_ == null))?null:_);
return (function (){var or__16069__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj23460 = {};
return obj23460;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__16057__auto__ = m;
if(and__16057__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__16057__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__16705__auto__ = (((m == null))?null:m);
return (function (){var or__16069__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__16057__auto__ = m;
if(and__16057__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__16057__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__16705__auto__ = (((m == null))?null:m);
return (function (){var or__16069__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__16057__auto__ = m;
if(and__16057__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__16057__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__16705__auto__ = (((m == null))?null:m);
return (function (){var or__16069__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t23682 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23682 = (function (mult,ch,cs,meta23683){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23683 = meta23683;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t23682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23684,meta23683__$1){
var self__ = this;
var _23684__$1 = this;
return (new cljs.core.async.t23682(self__.mult,self__.ch,self__.cs,meta23683__$1));
});})(cs))
;

cljs.core.async.t23682.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23684){
var self__ = this;
var _23684__$1 = this;
return self__.meta23683;
});})(cs))
;

cljs.core.async.t23682.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t23682.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t23682.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t23682.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t23682.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t23682.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t23682.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23683","meta23683",1342019560,null)], null);
});})(cs))
;

cljs.core.async.t23682.cljs$lang$type = true;

cljs.core.async.t23682.cljs$lang$ctorStr = "cljs.core.async/t23682";

cljs.core.async.t23682.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t23682");
});})(cs))
;

cljs.core.async.__GT_t23682 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t23682(mult__$1,ch__$1,cs__$1,meta23683){
return (new cljs.core.async.t23682(mult__$1,ch__$1,cs__$1,meta23683));
});})(cs))
;

}

return (new cljs.core.async.t23682(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19665__auto___23903 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19665__auto___23903,cs,m,dchan,dctr,done){
return (function (){
var f__19666__auto__ = (function (){var switch__19644__auto__ = ((function (c__19665__auto___23903,cs,m,dchan,dctr,done){
return (function (state_23815){
var state_val_23816 = (state_23815[(1)]);
if((state_val_23816 === (7))){
var inst_23811 = (state_23815[(2)]);
var state_23815__$1 = state_23815;
var statearr_23817_23904 = state_23815__$1;
(statearr_23817_23904[(2)] = inst_23811);

(statearr_23817_23904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (20))){
var inst_23716 = (state_23815[(7)]);
var inst_23726 = cljs.core.first.call(null,inst_23716);
var inst_23727 = cljs.core.nth.call(null,inst_23726,(0),null);
var inst_23728 = cljs.core.nth.call(null,inst_23726,(1),null);
var state_23815__$1 = (function (){var statearr_23818 = state_23815;
(statearr_23818[(8)] = inst_23727);

return statearr_23818;
})();
if(cljs.core.truth_(inst_23728)){
var statearr_23819_23905 = state_23815__$1;
(statearr_23819_23905[(1)] = (22));

} else {
var statearr_23820_23906 = state_23815__$1;
(statearr_23820_23906[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (27))){
var inst_23756 = (state_23815[(9)]);
var inst_23758 = (state_23815[(10)]);
var inst_23687 = (state_23815[(11)]);
var inst_23763 = (state_23815[(12)]);
var inst_23763__$1 = cljs.core._nth.call(null,inst_23756,inst_23758);
var inst_23764 = cljs.core.async.put_BANG_.call(null,inst_23763__$1,inst_23687,done);
var state_23815__$1 = (function (){var statearr_23821 = state_23815;
(statearr_23821[(12)] = inst_23763__$1);

return statearr_23821;
})();
if(cljs.core.truth_(inst_23764)){
var statearr_23822_23907 = state_23815__$1;
(statearr_23822_23907[(1)] = (30));

} else {
var statearr_23823_23908 = state_23815__$1;
(statearr_23823_23908[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (1))){
var state_23815__$1 = state_23815;
var statearr_23824_23909 = state_23815__$1;
(statearr_23824_23909[(2)] = null);

(statearr_23824_23909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (24))){
var inst_23716 = (state_23815[(7)]);
var inst_23733 = (state_23815[(2)]);
var inst_23734 = cljs.core.next.call(null,inst_23716);
var inst_23696 = inst_23734;
var inst_23697 = null;
var inst_23698 = (0);
var inst_23699 = (0);
var state_23815__$1 = (function (){var statearr_23825 = state_23815;
(statearr_23825[(13)] = inst_23733);

(statearr_23825[(14)] = inst_23696);

(statearr_23825[(15)] = inst_23699);

(statearr_23825[(16)] = inst_23698);

(statearr_23825[(17)] = inst_23697);

return statearr_23825;
})();
var statearr_23826_23910 = state_23815__$1;
(statearr_23826_23910[(2)] = null);

(statearr_23826_23910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (39))){
var state_23815__$1 = state_23815;
var statearr_23830_23911 = state_23815__$1;
(statearr_23830_23911[(2)] = null);

(statearr_23830_23911[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (4))){
var inst_23687 = (state_23815[(11)]);
var inst_23687__$1 = (state_23815[(2)]);
var inst_23688 = (inst_23687__$1 == null);
var state_23815__$1 = (function (){var statearr_23831 = state_23815;
(statearr_23831[(11)] = inst_23687__$1);

return statearr_23831;
})();
if(cljs.core.truth_(inst_23688)){
var statearr_23832_23912 = state_23815__$1;
(statearr_23832_23912[(1)] = (5));

} else {
var statearr_23833_23913 = state_23815__$1;
(statearr_23833_23913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (15))){
var inst_23696 = (state_23815[(14)]);
var inst_23699 = (state_23815[(15)]);
var inst_23698 = (state_23815[(16)]);
var inst_23697 = (state_23815[(17)]);
var inst_23712 = (state_23815[(2)]);
var inst_23713 = (inst_23699 + (1));
var tmp23827 = inst_23696;
var tmp23828 = inst_23698;
var tmp23829 = inst_23697;
var inst_23696__$1 = tmp23827;
var inst_23697__$1 = tmp23829;
var inst_23698__$1 = tmp23828;
var inst_23699__$1 = inst_23713;
var state_23815__$1 = (function (){var statearr_23834 = state_23815;
(statearr_23834[(14)] = inst_23696__$1);

(statearr_23834[(18)] = inst_23712);

(statearr_23834[(15)] = inst_23699__$1);

(statearr_23834[(16)] = inst_23698__$1);

(statearr_23834[(17)] = inst_23697__$1);

return statearr_23834;
})();
var statearr_23835_23914 = state_23815__$1;
(statearr_23835_23914[(2)] = null);

(statearr_23835_23914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (21))){
var inst_23737 = (state_23815[(2)]);
var state_23815__$1 = state_23815;
var statearr_23839_23915 = state_23815__$1;
(statearr_23839_23915[(2)] = inst_23737);

(statearr_23839_23915[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (31))){
var inst_23763 = (state_23815[(12)]);
var inst_23767 = done.call(null,null);
var inst_23768 = cljs.core.async.untap_STAR_.call(null,m,inst_23763);
var state_23815__$1 = (function (){var statearr_23840 = state_23815;
(statearr_23840[(19)] = inst_23767);

return statearr_23840;
})();
var statearr_23841_23916 = state_23815__$1;
(statearr_23841_23916[(2)] = inst_23768);

(statearr_23841_23916[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (32))){
var inst_23756 = (state_23815[(9)]);
var inst_23755 = (state_23815[(20)]);
var inst_23758 = (state_23815[(10)]);
var inst_23757 = (state_23815[(21)]);
var inst_23770 = (state_23815[(2)]);
var inst_23771 = (inst_23758 + (1));
var tmp23836 = inst_23756;
var tmp23837 = inst_23755;
var tmp23838 = inst_23757;
var inst_23755__$1 = tmp23837;
var inst_23756__$1 = tmp23836;
var inst_23757__$1 = tmp23838;
var inst_23758__$1 = inst_23771;
var state_23815__$1 = (function (){var statearr_23842 = state_23815;
(statearr_23842[(9)] = inst_23756__$1);

(statearr_23842[(20)] = inst_23755__$1);

(statearr_23842[(10)] = inst_23758__$1);

(statearr_23842[(21)] = inst_23757__$1);

(statearr_23842[(22)] = inst_23770);

return statearr_23842;
})();
var statearr_23843_23917 = state_23815__$1;
(statearr_23843_23917[(2)] = null);

(statearr_23843_23917[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (40))){
var inst_23783 = (state_23815[(23)]);
var inst_23787 = done.call(null,null);
var inst_23788 = cljs.core.async.untap_STAR_.call(null,m,inst_23783);
var state_23815__$1 = (function (){var statearr_23844 = state_23815;
(statearr_23844[(24)] = inst_23787);

return statearr_23844;
})();
var statearr_23845_23918 = state_23815__$1;
(statearr_23845_23918[(2)] = inst_23788);

(statearr_23845_23918[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (33))){
var inst_23774 = (state_23815[(25)]);
var inst_23776 = cljs.core.chunked_seq_QMARK_.call(null,inst_23774);
var state_23815__$1 = state_23815;
if(inst_23776){
var statearr_23846_23919 = state_23815__$1;
(statearr_23846_23919[(1)] = (36));

} else {
var statearr_23847_23920 = state_23815__$1;
(statearr_23847_23920[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (13))){
var inst_23706 = (state_23815[(26)]);
var inst_23709 = cljs.core.async.close_BANG_.call(null,inst_23706);
var state_23815__$1 = state_23815;
var statearr_23848_23921 = state_23815__$1;
(statearr_23848_23921[(2)] = inst_23709);

(statearr_23848_23921[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (22))){
var inst_23727 = (state_23815[(8)]);
var inst_23730 = cljs.core.async.close_BANG_.call(null,inst_23727);
var state_23815__$1 = state_23815;
var statearr_23849_23922 = state_23815__$1;
(statearr_23849_23922[(2)] = inst_23730);

(statearr_23849_23922[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (36))){
var inst_23774 = (state_23815[(25)]);
var inst_23778 = cljs.core.chunk_first.call(null,inst_23774);
var inst_23779 = cljs.core.chunk_rest.call(null,inst_23774);
var inst_23780 = cljs.core.count.call(null,inst_23778);
var inst_23755 = inst_23779;
var inst_23756 = inst_23778;
var inst_23757 = inst_23780;
var inst_23758 = (0);
var state_23815__$1 = (function (){var statearr_23850 = state_23815;
(statearr_23850[(9)] = inst_23756);

(statearr_23850[(20)] = inst_23755);

(statearr_23850[(10)] = inst_23758);

(statearr_23850[(21)] = inst_23757);

return statearr_23850;
})();
var statearr_23851_23923 = state_23815__$1;
(statearr_23851_23923[(2)] = null);

(statearr_23851_23923[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (41))){
var inst_23774 = (state_23815[(25)]);
var inst_23790 = (state_23815[(2)]);
var inst_23791 = cljs.core.next.call(null,inst_23774);
var inst_23755 = inst_23791;
var inst_23756 = null;
var inst_23757 = (0);
var inst_23758 = (0);
var state_23815__$1 = (function (){var statearr_23852 = state_23815;
(statearr_23852[(9)] = inst_23756);

(statearr_23852[(20)] = inst_23755);

(statearr_23852[(10)] = inst_23758);

(statearr_23852[(21)] = inst_23757);

(statearr_23852[(27)] = inst_23790);

return statearr_23852;
})();
var statearr_23853_23924 = state_23815__$1;
(statearr_23853_23924[(2)] = null);

(statearr_23853_23924[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (43))){
var state_23815__$1 = state_23815;
var statearr_23854_23925 = state_23815__$1;
(statearr_23854_23925[(2)] = null);

(statearr_23854_23925[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (29))){
var inst_23799 = (state_23815[(2)]);
var state_23815__$1 = state_23815;
var statearr_23855_23926 = state_23815__$1;
(statearr_23855_23926[(2)] = inst_23799);

(statearr_23855_23926[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (44))){
var inst_23808 = (state_23815[(2)]);
var state_23815__$1 = (function (){var statearr_23856 = state_23815;
(statearr_23856[(28)] = inst_23808);

return statearr_23856;
})();
var statearr_23857_23927 = state_23815__$1;
(statearr_23857_23927[(2)] = null);

(statearr_23857_23927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (6))){
var inst_23747 = (state_23815[(29)]);
var inst_23746 = cljs.core.deref.call(null,cs);
var inst_23747__$1 = cljs.core.keys.call(null,inst_23746);
var inst_23748 = cljs.core.count.call(null,inst_23747__$1);
var inst_23749 = cljs.core.reset_BANG_.call(null,dctr,inst_23748);
var inst_23754 = cljs.core.seq.call(null,inst_23747__$1);
var inst_23755 = inst_23754;
var inst_23756 = null;
var inst_23757 = (0);
var inst_23758 = (0);
var state_23815__$1 = (function (){var statearr_23858 = state_23815;
(statearr_23858[(9)] = inst_23756);

(statearr_23858[(20)] = inst_23755);

(statearr_23858[(30)] = inst_23749);

(statearr_23858[(10)] = inst_23758);

(statearr_23858[(21)] = inst_23757);

(statearr_23858[(29)] = inst_23747__$1);

return statearr_23858;
})();
var statearr_23859_23928 = state_23815__$1;
(statearr_23859_23928[(2)] = null);

(statearr_23859_23928[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (28))){
var inst_23755 = (state_23815[(20)]);
var inst_23774 = (state_23815[(25)]);
var inst_23774__$1 = cljs.core.seq.call(null,inst_23755);
var state_23815__$1 = (function (){var statearr_23860 = state_23815;
(statearr_23860[(25)] = inst_23774__$1);

return statearr_23860;
})();
if(inst_23774__$1){
var statearr_23861_23929 = state_23815__$1;
(statearr_23861_23929[(1)] = (33));

} else {
var statearr_23862_23930 = state_23815__$1;
(statearr_23862_23930[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (25))){
var inst_23758 = (state_23815[(10)]);
var inst_23757 = (state_23815[(21)]);
var inst_23760 = (inst_23758 < inst_23757);
var inst_23761 = inst_23760;
var state_23815__$1 = state_23815;
if(cljs.core.truth_(inst_23761)){
var statearr_23863_23931 = state_23815__$1;
(statearr_23863_23931[(1)] = (27));

} else {
var statearr_23864_23932 = state_23815__$1;
(statearr_23864_23932[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (34))){
var state_23815__$1 = state_23815;
var statearr_23865_23933 = state_23815__$1;
(statearr_23865_23933[(2)] = null);

(statearr_23865_23933[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (17))){
var state_23815__$1 = state_23815;
var statearr_23866_23934 = state_23815__$1;
(statearr_23866_23934[(2)] = null);

(statearr_23866_23934[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (3))){
var inst_23813 = (state_23815[(2)]);
var state_23815__$1 = state_23815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23815__$1,inst_23813);
} else {
if((state_val_23816 === (12))){
var inst_23742 = (state_23815[(2)]);
var state_23815__$1 = state_23815;
var statearr_23867_23935 = state_23815__$1;
(statearr_23867_23935[(2)] = inst_23742);

(statearr_23867_23935[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (2))){
var state_23815__$1 = state_23815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23815__$1,(4),ch);
} else {
if((state_val_23816 === (23))){
var state_23815__$1 = state_23815;
var statearr_23868_23936 = state_23815__$1;
(statearr_23868_23936[(2)] = null);

(statearr_23868_23936[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (35))){
var inst_23797 = (state_23815[(2)]);
var state_23815__$1 = state_23815;
var statearr_23869_23937 = state_23815__$1;
(statearr_23869_23937[(2)] = inst_23797);

(statearr_23869_23937[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (19))){
var inst_23716 = (state_23815[(7)]);
var inst_23720 = cljs.core.chunk_first.call(null,inst_23716);
var inst_23721 = cljs.core.chunk_rest.call(null,inst_23716);
var inst_23722 = cljs.core.count.call(null,inst_23720);
var inst_23696 = inst_23721;
var inst_23697 = inst_23720;
var inst_23698 = inst_23722;
var inst_23699 = (0);
var state_23815__$1 = (function (){var statearr_23870 = state_23815;
(statearr_23870[(14)] = inst_23696);

(statearr_23870[(15)] = inst_23699);

(statearr_23870[(16)] = inst_23698);

(statearr_23870[(17)] = inst_23697);

return statearr_23870;
})();
var statearr_23871_23938 = state_23815__$1;
(statearr_23871_23938[(2)] = null);

(statearr_23871_23938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (11))){
var inst_23716 = (state_23815[(7)]);
var inst_23696 = (state_23815[(14)]);
var inst_23716__$1 = cljs.core.seq.call(null,inst_23696);
var state_23815__$1 = (function (){var statearr_23872 = state_23815;
(statearr_23872[(7)] = inst_23716__$1);

return statearr_23872;
})();
if(inst_23716__$1){
var statearr_23873_23939 = state_23815__$1;
(statearr_23873_23939[(1)] = (16));

} else {
var statearr_23874_23940 = state_23815__$1;
(statearr_23874_23940[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (9))){
var inst_23744 = (state_23815[(2)]);
var state_23815__$1 = state_23815;
var statearr_23875_23941 = state_23815__$1;
(statearr_23875_23941[(2)] = inst_23744);

(statearr_23875_23941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (5))){
var inst_23694 = cljs.core.deref.call(null,cs);
var inst_23695 = cljs.core.seq.call(null,inst_23694);
var inst_23696 = inst_23695;
var inst_23697 = null;
var inst_23698 = (0);
var inst_23699 = (0);
var state_23815__$1 = (function (){var statearr_23876 = state_23815;
(statearr_23876[(14)] = inst_23696);

(statearr_23876[(15)] = inst_23699);

(statearr_23876[(16)] = inst_23698);

(statearr_23876[(17)] = inst_23697);

return statearr_23876;
})();
var statearr_23877_23942 = state_23815__$1;
(statearr_23877_23942[(2)] = null);

(statearr_23877_23942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (14))){
var state_23815__$1 = state_23815;
var statearr_23878_23943 = state_23815__$1;
(statearr_23878_23943[(2)] = null);

(statearr_23878_23943[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (45))){
var inst_23805 = (state_23815[(2)]);
var state_23815__$1 = state_23815;
var statearr_23879_23944 = state_23815__$1;
(statearr_23879_23944[(2)] = inst_23805);

(statearr_23879_23944[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (26))){
var inst_23747 = (state_23815[(29)]);
var inst_23801 = (state_23815[(2)]);
var inst_23802 = cljs.core.seq.call(null,inst_23747);
var state_23815__$1 = (function (){var statearr_23880 = state_23815;
(statearr_23880[(31)] = inst_23801);

return statearr_23880;
})();
if(inst_23802){
var statearr_23881_23945 = state_23815__$1;
(statearr_23881_23945[(1)] = (42));

} else {
var statearr_23882_23946 = state_23815__$1;
(statearr_23882_23946[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (16))){
var inst_23716 = (state_23815[(7)]);
var inst_23718 = cljs.core.chunked_seq_QMARK_.call(null,inst_23716);
var state_23815__$1 = state_23815;
if(inst_23718){
var statearr_23883_23947 = state_23815__$1;
(statearr_23883_23947[(1)] = (19));

} else {
var statearr_23884_23948 = state_23815__$1;
(statearr_23884_23948[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (38))){
var inst_23794 = (state_23815[(2)]);
var state_23815__$1 = state_23815;
var statearr_23885_23949 = state_23815__$1;
(statearr_23885_23949[(2)] = inst_23794);

(statearr_23885_23949[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (30))){
var state_23815__$1 = state_23815;
var statearr_23886_23950 = state_23815__$1;
(statearr_23886_23950[(2)] = null);

(statearr_23886_23950[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (10))){
var inst_23699 = (state_23815[(15)]);
var inst_23697 = (state_23815[(17)]);
var inst_23705 = cljs.core._nth.call(null,inst_23697,inst_23699);
var inst_23706 = cljs.core.nth.call(null,inst_23705,(0),null);
var inst_23707 = cljs.core.nth.call(null,inst_23705,(1),null);
var state_23815__$1 = (function (){var statearr_23887 = state_23815;
(statearr_23887[(26)] = inst_23706);

return statearr_23887;
})();
if(cljs.core.truth_(inst_23707)){
var statearr_23888_23951 = state_23815__$1;
(statearr_23888_23951[(1)] = (13));

} else {
var statearr_23889_23952 = state_23815__$1;
(statearr_23889_23952[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (18))){
var inst_23740 = (state_23815[(2)]);
var state_23815__$1 = state_23815;
var statearr_23890_23953 = state_23815__$1;
(statearr_23890_23953[(2)] = inst_23740);

(statearr_23890_23953[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (42))){
var state_23815__$1 = state_23815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23815__$1,(45),dchan);
} else {
if((state_val_23816 === (37))){
var inst_23687 = (state_23815[(11)]);
var inst_23783 = (state_23815[(23)]);
var inst_23774 = (state_23815[(25)]);
var inst_23783__$1 = cljs.core.first.call(null,inst_23774);
var inst_23784 = cljs.core.async.put_BANG_.call(null,inst_23783__$1,inst_23687,done);
var state_23815__$1 = (function (){var statearr_23891 = state_23815;
(statearr_23891[(23)] = inst_23783__$1);

return statearr_23891;
})();
if(cljs.core.truth_(inst_23784)){
var statearr_23892_23954 = state_23815__$1;
(statearr_23892_23954[(1)] = (39));

} else {
var statearr_23893_23955 = state_23815__$1;
(statearr_23893_23955[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (8))){
var inst_23699 = (state_23815[(15)]);
var inst_23698 = (state_23815[(16)]);
var inst_23701 = (inst_23699 < inst_23698);
var inst_23702 = inst_23701;
var state_23815__$1 = state_23815;
if(cljs.core.truth_(inst_23702)){
var statearr_23894_23956 = state_23815__$1;
(statearr_23894_23956[(1)] = (10));

} else {
var statearr_23895_23957 = state_23815__$1;
(statearr_23895_23957[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__19665__auto___23903,cs,m,dchan,dctr,done))
;
return ((function (switch__19644__auto__,c__19665__auto___23903,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19645__auto__ = null;
var cljs$core$async$mult_$_state_machine__19645__auto____0 = (function (){
var statearr_23899 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23899[(0)] = cljs$core$async$mult_$_state_machine__19645__auto__);

(statearr_23899[(1)] = (1));

return statearr_23899;
});
var cljs$core$async$mult_$_state_machine__19645__auto____1 = (function (state_23815){
while(true){
var ret_value__19646__auto__ = (function (){try{while(true){
var result__19647__auto__ = switch__19644__auto__.call(null,state_23815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19647__auto__;
}
break;
}
}catch (e23900){if((e23900 instanceof Object)){
var ex__19648__auto__ = e23900;
var statearr_23901_23958 = state_23815;
(statearr_23901_23958[(5)] = ex__19648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23959 = state_23815;
state_23815 = G__23959;
continue;
} else {
return ret_value__19646__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19645__auto__ = function(state_23815){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19645__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19645__auto____1.call(this,state_23815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19645__auto____0;
cljs$core$async$mult_$_state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19645__auto____1;
return cljs$core$async$mult_$_state_machine__19645__auto__;
})()
;})(switch__19644__auto__,c__19665__auto___23903,cs,m,dchan,dctr,done))
})();
var state__19667__auto__ = (function (){var statearr_23902 = f__19666__auto__.call(null);
(statearr_23902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19665__auto___23903);

return statearr_23902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19667__auto__);
});})(c__19665__auto___23903,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__23961 = arguments.length;
switch (G__23961) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj23964 = {};
return obj23964;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__16057__auto__ = m;
if(and__16057__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__16057__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__16705__auto__ = (((m == null))?null:m);
return (function (){var or__16069__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__16057__auto__ = m;
if(and__16057__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__16057__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__16705__auto__ = (((m == null))?null:m);
return (function (){var or__16069__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__16057__auto__ = m;
if(and__16057__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__16057__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__16705__auto__ = (((m == null))?null:m);
return (function (){var or__16069__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__16057__auto__ = m;
if(and__16057__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__16057__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__16705__auto__ = (((m == null))?null:m);
return (function (){var or__16069__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__16057__auto__ = m;
if(and__16057__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__16057__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__16705__auto__ = (((m == null))?null:m);
return (function (){var or__16069__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__17109__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17109__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23969){
var map__23970 = p__23969;
var map__23970__$1 = ((cljs.core.seq_QMARK_.call(null,map__23970))?cljs.core.apply.call(null,cljs.core.hash_map,map__23970):map__23970);
var opts = map__23970__$1;
var statearr_23971_23974 = state;
(statearr_23971_23974[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__23970,map__23970__$1,opts){
return (function (val){
var statearr_23972_23975 = state;
(statearr_23972_23975[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23970,map__23970__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_23973_23976 = state;
(statearr_23973_23976[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23965){
var G__23966 = cljs.core.first.call(null,seq23965);
var seq23965__$1 = cljs.core.next.call(null,seq23965);
var G__23967 = cljs.core.first.call(null,seq23965__$1);
var seq23965__$2 = cljs.core.next.call(null,seq23965__$1);
var G__23968 = cljs.core.first.call(null,seq23965__$2);
var seq23965__$3 = cljs.core.next.call(null,seq23965__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23966,G__23967,G__23968,seq23965__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t24096 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24096 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24097){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24097 = meta24097;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t24096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24098,meta24097__$1){
var self__ = this;
var _24098__$1 = this;
return (new cljs.core.async.t24096(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24097__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24096.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24098){
var self__ = this;
var _24098__$1 = this;
return self__.meta24097;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24096.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24096.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24096.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t24096.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24096.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24096.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24096.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24096.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24096.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24097","meta24097",352671266,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24096.cljs$lang$type = true;

cljs.core.async.t24096.cljs$lang$ctorStr = "cljs.core.async/t24096";

cljs.core.async.t24096.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t24096");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t24096 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t24096(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24097){
return (new cljs.core.async.t24096(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24097));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t24096(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19665__auto___24215 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19665__auto___24215,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19666__auto__ = (function (){var switch__19644__auto__ = ((function (c__19665__auto___24215,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24168){
var state_val_24169 = (state_24168[(1)]);
if((state_val_24169 === (7))){
var inst_24112 = (state_24168[(7)]);
var inst_24117 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24112);
var state_24168__$1 = state_24168;
var statearr_24170_24216 = state_24168__$1;
(statearr_24170_24216[(2)] = inst_24117);

(statearr_24170_24216[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24169 === (20))){
var inst_24127 = (state_24168[(8)]);
var state_24168__$1 = state_24168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24168__$1,(23),out,inst_24127);
} else {
if((state_val_24169 === (1))){
var inst_24102 = (state_24168[(9)]);
var inst_24102__$1 = calc_state.call(null);
var inst_24103 = cljs.core.seq_QMARK_.call(null,inst_24102__$1);
var state_24168__$1 = (function (){var statearr_24171 = state_24168;
(statearr_24171[(9)] = inst_24102__$1);

return statearr_24171;
})();
if(inst_24103){
var statearr_24172_24217 = state_24168__$1;
(statearr_24172_24217[(1)] = (2));

} else {
var statearr_24173_24218 = state_24168__$1;
(statearr_24173_24218[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24169 === (24))){
var inst_24120 = (state_24168[(10)]);
var inst_24112 = inst_24120;
var state_24168__$1 = (function (){var statearr_24174 = state_24168;
(statearr_24174[(7)] = inst_24112);

return statearr_24174;
})();
var statearr_24175_24219 = state_24168__$1;
(statearr_24175_24219[(2)] = null);

(statearr_24175_24219[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24169 === (4))){
var inst_24102 = (state_24168[(9)]);
var inst_24108 = (state_24168[(2)]);
var inst_24109 = cljs.core.get.call(null,inst_24108,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24110 = cljs.core.get.call(null,inst_24108,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24111 = cljs.core.get.call(null,inst_24108,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24112 = inst_24102;
var state_24168__$1 = (function (){var statearr_24176 = state_24168;
(statearr_24176[(11)] = inst_24110);

(statearr_24176[(12)] = inst_24109);

(statearr_24176[(13)] = inst_24111);

(statearr_24176[(7)] = inst_24112);

return statearr_24176;
})();
var statearr_24177_24220 = state_24168__$1;
(statearr_24177_24220[(2)] = null);

(statearr_24177_24220[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24169 === (15))){
var state_24168__$1 = state_24168;
var statearr_24178_24221 = state_24168__$1;
(statearr_24178_24221[(2)] = null);

(statearr_24178_24221[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24169 === (21))){
var inst_24120 = (state_24168[(10)]);
var inst_24112 = inst_24120;
var state_24168__$1 = (function (){var statearr_24179 = state_24168;
(statearr_24179[(7)] = inst_24112);

return statearr_24179;
})();
var statearr_24180_24222 = state_24168__$1;
(statearr_24180_24222[(2)] = null);

(statearr_24180_24222[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24169 === (13))){
var inst_24164 = (state_24168[(2)]);
var state_24168__$1 = state_24168;
var statearr_24181_24223 = state_24168__$1;
(statearr_24181_24223[(2)] = inst_24164);

(statearr_24181_24223[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24169 === (22))){
var inst_24162 = (state_24168[(2)]);
var state_24168__$1 = state_24168;
var statearr_24182_24224 = state_24168__$1;
(statearr_24182_24224[(2)] = inst_24162);

(statearr_24182_24224[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24169 === (6))){
var inst_24166 = (state_24168[(2)]);
var state_24168__$1 = state_24168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24168__$1,inst_24166);
} else {
if((state_val_24169 === (25))){
var state_24168__$1 = state_24168;
var statearr_24183_24225 = state_24168__$1;
(statearr_24183_24225[(2)] = null);

(statearr_24183_24225[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24169 === (17))){
var inst_24142 = (state_24168[(14)]);
var state_24168__$1 = state_24168;
var statearr_24184_24226 = state_24168__$1;
(statearr_24184_24226[(2)] = inst_24142);

(statearr_24184_24226[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24169 === (3))){
var inst_24102 = (state_24168[(9)]);
var state_24168__$1 = state_24168;
var statearr_24185_24227 = state_24168__$1;
(statearr_24185_24227[(2)] = inst_24102);

(statearr_24185_24227[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24169 === (12))){
var inst_24142 = (state_24168[(14)]);
var inst_24121 = (state_24168[(15)]);
var inst_24128 = (state_24168[(16)]);
var inst_24142__$1 = inst_24121.call(null,inst_24128);
var state_24168__$1 = (function (){var statearr_24186 = state_24168;
(statearr_24186[(14)] = inst_24142__$1);

return statearr_24186;
})();
if(cljs.core.truth_(inst_24142__$1)){
var statearr_24187_24228 = state_24168__$1;
(statearr_24187_24228[(1)] = (17));

} else {
var statearr_24188_24229 = state_24168__$1;
(statearr_24188_24229[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24169 === (2))){
var inst_24102 = (state_24168[(9)]);
var inst_24105 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24102);
var state_24168__$1 = state_24168;
var statearr_24189_24230 = state_24168__$1;
(statearr_24189_24230[(2)] = inst_24105);

(statearr_24189_24230[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24169 === (23))){
var inst_24153 = (state_24168[(2)]);
var state_24168__$1 = state_24168;
if(cljs.core.truth_(inst_24153)){
var statearr_24190_24231 = state_24168__$1;
(statearr_24190_24231[(1)] = (24));

} else {
var statearr_24191_24232 = state_24168__$1;
(statearr_24191_24232[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24169 === (19))){
var inst_24150 = (state_24168[(2)]);
var state_24168__$1 = state_24168;
if(cljs.core.truth_(inst_24150)){
var statearr_24192_24233 = state_24168__$1;
(statearr_24192_24233[(1)] = (20));

} else {
var statearr_24193_24234 = state_24168__$1;
(statearr_24193_24234[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24169 === (11))){
var inst_24127 = (state_24168[(8)]);
var inst_24133 = (inst_24127 == null);
var state_24168__$1 = state_24168;
if(cljs.core.truth_(inst_24133)){
var statearr_24194_24235 = state_24168__$1;
(statearr_24194_24235[(1)] = (14));

} else {
var statearr_24195_24236 = state_24168__$1;
(statearr_24195_24236[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24169 === (9))){
var inst_24120 = (state_24168[(10)]);
var inst_24120__$1 = (state_24168[(2)]);
var inst_24121 = cljs.core.get.call(null,inst_24120__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24122 = cljs.core.get.call(null,inst_24120__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24123 = cljs.core.get.call(null,inst_24120__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24168__$1 = (function (){var statearr_24196 = state_24168;
(statearr_24196[(15)] = inst_24121);

(statearr_24196[(10)] = inst_24120__$1);

(statearr_24196[(17)] = inst_24122);

return statearr_24196;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24168__$1,(10),inst_24123);
} else {
if((state_val_24169 === (5))){
var inst_24112 = (state_24168[(7)]);
var inst_24115 = cljs.core.seq_QMARK_.call(null,inst_24112);
var state_24168__$1 = state_24168;
if(inst_24115){
var statearr_24197_24237 = state_24168__$1;
(statearr_24197_24237[(1)] = (7));

} else {
var statearr_24198_24238 = state_24168__$1;
(statearr_24198_24238[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24169 === (14))){
var inst_24128 = (state_24168[(16)]);
var inst_24135 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24128);
var state_24168__$1 = state_24168;
var statearr_24199_24239 = state_24168__$1;
(statearr_24199_24239[(2)] = inst_24135);

(statearr_24199_24239[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24169 === (26))){
var inst_24158 = (state_24168[(2)]);
var state_24168__$1 = state_24168;
var statearr_24200_24240 = state_24168__$1;
(statearr_24200_24240[(2)] = inst_24158);

(statearr_24200_24240[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24169 === (16))){
var inst_24138 = (state_24168[(2)]);
var inst_24139 = calc_state.call(null);
var inst_24112 = inst_24139;
var state_24168__$1 = (function (){var statearr_24201 = state_24168;
(statearr_24201[(18)] = inst_24138);

(statearr_24201[(7)] = inst_24112);

return statearr_24201;
})();
var statearr_24202_24241 = state_24168__$1;
(statearr_24202_24241[(2)] = null);

(statearr_24202_24241[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24169 === (10))){
var inst_24127 = (state_24168[(8)]);
var inst_24128 = (state_24168[(16)]);
var inst_24126 = (state_24168[(2)]);
var inst_24127__$1 = cljs.core.nth.call(null,inst_24126,(0),null);
var inst_24128__$1 = cljs.core.nth.call(null,inst_24126,(1),null);
var inst_24129 = (inst_24127__$1 == null);
var inst_24130 = cljs.core._EQ_.call(null,inst_24128__$1,change);
var inst_24131 = (inst_24129) || (inst_24130);
var state_24168__$1 = (function (){var statearr_24203 = state_24168;
(statearr_24203[(8)] = inst_24127__$1);

(statearr_24203[(16)] = inst_24128__$1);

return statearr_24203;
})();
if(cljs.core.truth_(inst_24131)){
var statearr_24204_24242 = state_24168__$1;
(statearr_24204_24242[(1)] = (11));

} else {
var statearr_24205_24243 = state_24168__$1;
(statearr_24205_24243[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24169 === (18))){
var inst_24121 = (state_24168[(15)]);
var inst_24128 = (state_24168[(16)]);
var inst_24122 = (state_24168[(17)]);
var inst_24145 = cljs.core.empty_QMARK_.call(null,inst_24121);
var inst_24146 = inst_24122.call(null,inst_24128);
var inst_24147 = cljs.core.not.call(null,inst_24146);
var inst_24148 = (inst_24145) && (inst_24147);
var state_24168__$1 = state_24168;
var statearr_24206_24244 = state_24168__$1;
(statearr_24206_24244[(2)] = inst_24148);

(statearr_24206_24244[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24169 === (8))){
var inst_24112 = (state_24168[(7)]);
var state_24168__$1 = state_24168;
var statearr_24207_24245 = state_24168__$1;
(statearr_24207_24245[(2)] = inst_24112);

(statearr_24207_24245[(1)] = (9));


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
});})(c__19665__auto___24215,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19644__auto__,c__19665__auto___24215,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19645__auto__ = null;
var cljs$core$async$mix_$_state_machine__19645__auto____0 = (function (){
var statearr_24211 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24211[(0)] = cljs$core$async$mix_$_state_machine__19645__auto__);

(statearr_24211[(1)] = (1));

return statearr_24211;
});
var cljs$core$async$mix_$_state_machine__19645__auto____1 = (function (state_24168){
while(true){
var ret_value__19646__auto__ = (function (){try{while(true){
var result__19647__auto__ = switch__19644__auto__.call(null,state_24168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19647__auto__;
}
break;
}
}catch (e24212){if((e24212 instanceof Object)){
var ex__19648__auto__ = e24212;
var statearr_24213_24246 = state_24168;
(statearr_24213_24246[(5)] = ex__19648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24247 = state_24168;
state_24168 = G__24247;
continue;
} else {
return ret_value__19646__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19645__auto__ = function(state_24168){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19645__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19645__auto____1.call(this,state_24168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19645__auto____0;
cljs$core$async$mix_$_state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19645__auto____1;
return cljs$core$async$mix_$_state_machine__19645__auto__;
})()
;})(switch__19644__auto__,c__19665__auto___24215,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19667__auto__ = (function (){var statearr_24214 = f__19666__auto__.call(null);
(statearr_24214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19665__auto___24215);

return statearr_24214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19667__auto__);
});})(c__19665__auto___24215,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj24249 = {};
return obj24249;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__16057__auto__ = p;
if(and__16057__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__16057__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__16705__auto__ = (((p == null))?null:p);
return (function (){var or__16069__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__16057__auto__ = p;
if(and__16057__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__16057__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__16705__auto__ = (((p == null))?null:p);
return (function (){var or__16069__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__24251 = arguments.length;
switch (G__24251) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__16057__auto__ = p;
if(and__16057__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__16057__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16705__auto__ = (((p == null))?null:p);
return (function (){var or__16069__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__16057__auto__ = p;
if(and__16057__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__16057__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__16705__auto__ = (((p == null))?null:p);
return (function (){var or__16069__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__24255 = arguments.length;
switch (G__24255) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16069__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16069__auto__,mults){
return (function (p1__24253_SHARP_){
if(cljs.core.truth_(p1__24253_SHARP_.call(null,topic))){
return p1__24253_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24253_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16069__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t24256 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24256 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24257){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24257 = meta24257;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t24256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24258,meta24257__$1){
var self__ = this;
var _24258__$1 = this;
return (new cljs.core.async.t24256(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24257__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t24256.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24258){
var self__ = this;
var _24258__$1 = this;
return self__.meta24257;
});})(mults,ensure_mult))
;

cljs.core.async.t24256.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24256.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t24256.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t24256.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t24256.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t24256.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t24256.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t24256.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24257","meta24257",-628055758,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t24256.cljs$lang$type = true;

cljs.core.async.t24256.cljs$lang$ctorStr = "cljs.core.async/t24256";

cljs.core.async.t24256.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t24256");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t24256 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t24256(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24257){
return (new cljs.core.async.t24256(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24257));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t24256(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19665__auto___24379 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19665__auto___24379,mults,ensure_mult,p){
return (function (){
var f__19666__auto__ = (function (){var switch__19644__auto__ = ((function (c__19665__auto___24379,mults,ensure_mult,p){
return (function (state_24330){
var state_val_24331 = (state_24330[(1)]);
if((state_val_24331 === (7))){
var inst_24326 = (state_24330[(2)]);
var state_24330__$1 = state_24330;
var statearr_24332_24380 = state_24330__$1;
(statearr_24332_24380[(2)] = inst_24326);

(statearr_24332_24380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (20))){
var state_24330__$1 = state_24330;
var statearr_24333_24381 = state_24330__$1;
(statearr_24333_24381[(2)] = null);

(statearr_24333_24381[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (1))){
var state_24330__$1 = state_24330;
var statearr_24334_24382 = state_24330__$1;
(statearr_24334_24382[(2)] = null);

(statearr_24334_24382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (24))){
var inst_24309 = (state_24330[(7)]);
var inst_24318 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24309);
var state_24330__$1 = state_24330;
var statearr_24335_24383 = state_24330__$1;
(statearr_24335_24383[(2)] = inst_24318);

(statearr_24335_24383[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (4))){
var inst_24261 = (state_24330[(8)]);
var inst_24261__$1 = (state_24330[(2)]);
var inst_24262 = (inst_24261__$1 == null);
var state_24330__$1 = (function (){var statearr_24336 = state_24330;
(statearr_24336[(8)] = inst_24261__$1);

return statearr_24336;
})();
if(cljs.core.truth_(inst_24262)){
var statearr_24337_24384 = state_24330__$1;
(statearr_24337_24384[(1)] = (5));

} else {
var statearr_24338_24385 = state_24330__$1;
(statearr_24338_24385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (15))){
var inst_24303 = (state_24330[(2)]);
var state_24330__$1 = state_24330;
var statearr_24339_24386 = state_24330__$1;
(statearr_24339_24386[(2)] = inst_24303);

(statearr_24339_24386[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (21))){
var inst_24323 = (state_24330[(2)]);
var state_24330__$1 = (function (){var statearr_24340 = state_24330;
(statearr_24340[(9)] = inst_24323);

return statearr_24340;
})();
var statearr_24341_24387 = state_24330__$1;
(statearr_24341_24387[(2)] = null);

(statearr_24341_24387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (13))){
var inst_24285 = (state_24330[(10)]);
var inst_24287 = cljs.core.chunked_seq_QMARK_.call(null,inst_24285);
var state_24330__$1 = state_24330;
if(inst_24287){
var statearr_24342_24388 = state_24330__$1;
(statearr_24342_24388[(1)] = (16));

} else {
var statearr_24343_24389 = state_24330__$1;
(statearr_24343_24389[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (22))){
var inst_24315 = (state_24330[(2)]);
var state_24330__$1 = state_24330;
if(cljs.core.truth_(inst_24315)){
var statearr_24344_24390 = state_24330__$1;
(statearr_24344_24390[(1)] = (23));

} else {
var statearr_24345_24391 = state_24330__$1;
(statearr_24345_24391[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (6))){
var inst_24311 = (state_24330[(11)]);
var inst_24261 = (state_24330[(8)]);
var inst_24309 = (state_24330[(7)]);
var inst_24309__$1 = topic_fn.call(null,inst_24261);
var inst_24310 = cljs.core.deref.call(null,mults);
var inst_24311__$1 = cljs.core.get.call(null,inst_24310,inst_24309__$1);
var state_24330__$1 = (function (){var statearr_24346 = state_24330;
(statearr_24346[(11)] = inst_24311__$1);

(statearr_24346[(7)] = inst_24309__$1);

return statearr_24346;
})();
if(cljs.core.truth_(inst_24311__$1)){
var statearr_24347_24392 = state_24330__$1;
(statearr_24347_24392[(1)] = (19));

} else {
var statearr_24348_24393 = state_24330__$1;
(statearr_24348_24393[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (25))){
var inst_24320 = (state_24330[(2)]);
var state_24330__$1 = state_24330;
var statearr_24349_24394 = state_24330__$1;
(statearr_24349_24394[(2)] = inst_24320);

(statearr_24349_24394[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (17))){
var inst_24285 = (state_24330[(10)]);
var inst_24294 = cljs.core.first.call(null,inst_24285);
var inst_24295 = cljs.core.async.muxch_STAR_.call(null,inst_24294);
var inst_24296 = cljs.core.async.close_BANG_.call(null,inst_24295);
var inst_24297 = cljs.core.next.call(null,inst_24285);
var inst_24271 = inst_24297;
var inst_24272 = null;
var inst_24273 = (0);
var inst_24274 = (0);
var state_24330__$1 = (function (){var statearr_24350 = state_24330;
(statearr_24350[(12)] = inst_24274);

(statearr_24350[(13)] = inst_24296);

(statearr_24350[(14)] = inst_24272);

(statearr_24350[(15)] = inst_24273);

(statearr_24350[(16)] = inst_24271);

return statearr_24350;
})();
var statearr_24351_24395 = state_24330__$1;
(statearr_24351_24395[(2)] = null);

(statearr_24351_24395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (3))){
var inst_24328 = (state_24330[(2)]);
var state_24330__$1 = state_24330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24330__$1,inst_24328);
} else {
if((state_val_24331 === (12))){
var inst_24305 = (state_24330[(2)]);
var state_24330__$1 = state_24330;
var statearr_24352_24396 = state_24330__$1;
(statearr_24352_24396[(2)] = inst_24305);

(statearr_24352_24396[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (2))){
var state_24330__$1 = state_24330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24330__$1,(4),ch);
} else {
if((state_val_24331 === (23))){
var state_24330__$1 = state_24330;
var statearr_24353_24397 = state_24330__$1;
(statearr_24353_24397[(2)] = null);

(statearr_24353_24397[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (19))){
var inst_24311 = (state_24330[(11)]);
var inst_24261 = (state_24330[(8)]);
var inst_24313 = cljs.core.async.muxch_STAR_.call(null,inst_24311);
var state_24330__$1 = state_24330;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24330__$1,(22),inst_24313,inst_24261);
} else {
if((state_val_24331 === (11))){
var inst_24285 = (state_24330[(10)]);
var inst_24271 = (state_24330[(16)]);
var inst_24285__$1 = cljs.core.seq.call(null,inst_24271);
var state_24330__$1 = (function (){var statearr_24354 = state_24330;
(statearr_24354[(10)] = inst_24285__$1);

return statearr_24354;
})();
if(inst_24285__$1){
var statearr_24355_24398 = state_24330__$1;
(statearr_24355_24398[(1)] = (13));

} else {
var statearr_24356_24399 = state_24330__$1;
(statearr_24356_24399[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (9))){
var inst_24307 = (state_24330[(2)]);
var state_24330__$1 = state_24330;
var statearr_24357_24400 = state_24330__$1;
(statearr_24357_24400[(2)] = inst_24307);

(statearr_24357_24400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (5))){
var inst_24268 = cljs.core.deref.call(null,mults);
var inst_24269 = cljs.core.vals.call(null,inst_24268);
var inst_24270 = cljs.core.seq.call(null,inst_24269);
var inst_24271 = inst_24270;
var inst_24272 = null;
var inst_24273 = (0);
var inst_24274 = (0);
var state_24330__$1 = (function (){var statearr_24358 = state_24330;
(statearr_24358[(12)] = inst_24274);

(statearr_24358[(14)] = inst_24272);

(statearr_24358[(15)] = inst_24273);

(statearr_24358[(16)] = inst_24271);

return statearr_24358;
})();
var statearr_24359_24401 = state_24330__$1;
(statearr_24359_24401[(2)] = null);

(statearr_24359_24401[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (14))){
var state_24330__$1 = state_24330;
var statearr_24363_24402 = state_24330__$1;
(statearr_24363_24402[(2)] = null);

(statearr_24363_24402[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (16))){
var inst_24285 = (state_24330[(10)]);
var inst_24289 = cljs.core.chunk_first.call(null,inst_24285);
var inst_24290 = cljs.core.chunk_rest.call(null,inst_24285);
var inst_24291 = cljs.core.count.call(null,inst_24289);
var inst_24271 = inst_24290;
var inst_24272 = inst_24289;
var inst_24273 = inst_24291;
var inst_24274 = (0);
var state_24330__$1 = (function (){var statearr_24364 = state_24330;
(statearr_24364[(12)] = inst_24274);

(statearr_24364[(14)] = inst_24272);

(statearr_24364[(15)] = inst_24273);

(statearr_24364[(16)] = inst_24271);

return statearr_24364;
})();
var statearr_24365_24403 = state_24330__$1;
(statearr_24365_24403[(2)] = null);

(statearr_24365_24403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (10))){
var inst_24274 = (state_24330[(12)]);
var inst_24272 = (state_24330[(14)]);
var inst_24273 = (state_24330[(15)]);
var inst_24271 = (state_24330[(16)]);
var inst_24279 = cljs.core._nth.call(null,inst_24272,inst_24274);
var inst_24280 = cljs.core.async.muxch_STAR_.call(null,inst_24279);
var inst_24281 = cljs.core.async.close_BANG_.call(null,inst_24280);
var inst_24282 = (inst_24274 + (1));
var tmp24360 = inst_24272;
var tmp24361 = inst_24273;
var tmp24362 = inst_24271;
var inst_24271__$1 = tmp24362;
var inst_24272__$1 = tmp24360;
var inst_24273__$1 = tmp24361;
var inst_24274__$1 = inst_24282;
var state_24330__$1 = (function (){var statearr_24366 = state_24330;
(statearr_24366[(12)] = inst_24274__$1);

(statearr_24366[(14)] = inst_24272__$1);

(statearr_24366[(15)] = inst_24273__$1);

(statearr_24366[(16)] = inst_24271__$1);

(statearr_24366[(17)] = inst_24281);

return statearr_24366;
})();
var statearr_24367_24404 = state_24330__$1;
(statearr_24367_24404[(2)] = null);

(statearr_24367_24404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (18))){
var inst_24300 = (state_24330[(2)]);
var state_24330__$1 = state_24330;
var statearr_24368_24405 = state_24330__$1;
(statearr_24368_24405[(2)] = inst_24300);

(statearr_24368_24405[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (8))){
var inst_24274 = (state_24330[(12)]);
var inst_24273 = (state_24330[(15)]);
var inst_24276 = (inst_24274 < inst_24273);
var inst_24277 = inst_24276;
var state_24330__$1 = state_24330;
if(cljs.core.truth_(inst_24277)){
var statearr_24369_24406 = state_24330__$1;
(statearr_24369_24406[(1)] = (10));

} else {
var statearr_24370_24407 = state_24330__$1;
(statearr_24370_24407[(1)] = (11));

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
});})(c__19665__auto___24379,mults,ensure_mult,p))
;
return ((function (switch__19644__auto__,c__19665__auto___24379,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19645__auto__ = null;
var cljs$core$async$state_machine__19645__auto____0 = (function (){
var statearr_24374 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24374[(0)] = cljs$core$async$state_machine__19645__auto__);

(statearr_24374[(1)] = (1));

return statearr_24374;
});
var cljs$core$async$state_machine__19645__auto____1 = (function (state_24330){
while(true){
var ret_value__19646__auto__ = (function (){try{while(true){
var result__19647__auto__ = switch__19644__auto__.call(null,state_24330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19647__auto__;
}
break;
}
}catch (e24375){if((e24375 instanceof Object)){
var ex__19648__auto__ = e24375;
var statearr_24376_24408 = state_24330;
(statearr_24376_24408[(5)] = ex__19648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24409 = state_24330;
state_24330 = G__24409;
continue;
} else {
return ret_value__19646__auto__;
}
break;
}
});
cljs$core$async$state_machine__19645__auto__ = function(state_24330){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19645__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19645__auto____1.call(this,state_24330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19645__auto____0;
cljs$core$async$state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19645__auto____1;
return cljs$core$async$state_machine__19645__auto__;
})()
;})(switch__19644__auto__,c__19665__auto___24379,mults,ensure_mult,p))
})();
var state__19667__auto__ = (function (){var statearr_24377 = f__19666__auto__.call(null);
(statearr_24377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19665__auto___24379);

return statearr_24377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19667__auto__);
});})(c__19665__auto___24379,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__24411 = arguments.length;
switch (G__24411) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__24414 = arguments.length;
switch (G__24414) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__24417 = arguments.length;
switch (G__24417) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19665__auto___24487 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19665__auto___24487,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19666__auto__ = (function (){var switch__19644__auto__ = ((function (c__19665__auto___24487,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24456){
var state_val_24457 = (state_24456[(1)]);
if((state_val_24457 === (7))){
var state_24456__$1 = state_24456;
var statearr_24458_24488 = state_24456__$1;
(statearr_24458_24488[(2)] = null);

(statearr_24458_24488[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24457 === (1))){
var state_24456__$1 = state_24456;
var statearr_24459_24489 = state_24456__$1;
(statearr_24459_24489[(2)] = null);

(statearr_24459_24489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24457 === (4))){
var inst_24420 = (state_24456[(7)]);
var inst_24422 = (inst_24420 < cnt);
var state_24456__$1 = state_24456;
if(cljs.core.truth_(inst_24422)){
var statearr_24460_24490 = state_24456__$1;
(statearr_24460_24490[(1)] = (6));

} else {
var statearr_24461_24491 = state_24456__$1;
(statearr_24461_24491[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24457 === (15))){
var inst_24452 = (state_24456[(2)]);
var state_24456__$1 = state_24456;
var statearr_24462_24492 = state_24456__$1;
(statearr_24462_24492[(2)] = inst_24452);

(statearr_24462_24492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24457 === (13))){
var inst_24445 = cljs.core.async.close_BANG_.call(null,out);
var state_24456__$1 = state_24456;
var statearr_24463_24493 = state_24456__$1;
(statearr_24463_24493[(2)] = inst_24445);

(statearr_24463_24493[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24457 === (6))){
var state_24456__$1 = state_24456;
var statearr_24464_24494 = state_24456__$1;
(statearr_24464_24494[(2)] = null);

(statearr_24464_24494[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24457 === (3))){
var inst_24454 = (state_24456[(2)]);
var state_24456__$1 = state_24456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24456__$1,inst_24454);
} else {
if((state_val_24457 === (12))){
var inst_24442 = (state_24456[(8)]);
var inst_24442__$1 = (state_24456[(2)]);
var inst_24443 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24442__$1);
var state_24456__$1 = (function (){var statearr_24465 = state_24456;
(statearr_24465[(8)] = inst_24442__$1);

return statearr_24465;
})();
if(cljs.core.truth_(inst_24443)){
var statearr_24466_24495 = state_24456__$1;
(statearr_24466_24495[(1)] = (13));

} else {
var statearr_24467_24496 = state_24456__$1;
(statearr_24467_24496[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24457 === (2))){
var inst_24419 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24420 = (0);
var state_24456__$1 = (function (){var statearr_24468 = state_24456;
(statearr_24468[(7)] = inst_24420);

(statearr_24468[(9)] = inst_24419);

return statearr_24468;
})();
var statearr_24469_24497 = state_24456__$1;
(statearr_24469_24497[(2)] = null);

(statearr_24469_24497[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24457 === (11))){
var inst_24420 = (state_24456[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24456,(10),Object,null,(9));
var inst_24429 = chs__$1.call(null,inst_24420);
var inst_24430 = done.call(null,inst_24420);
var inst_24431 = cljs.core.async.take_BANG_.call(null,inst_24429,inst_24430);
var state_24456__$1 = state_24456;
var statearr_24470_24498 = state_24456__$1;
(statearr_24470_24498[(2)] = inst_24431);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24456__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24457 === (9))){
var inst_24420 = (state_24456[(7)]);
var inst_24433 = (state_24456[(2)]);
var inst_24434 = (inst_24420 + (1));
var inst_24420__$1 = inst_24434;
var state_24456__$1 = (function (){var statearr_24471 = state_24456;
(statearr_24471[(7)] = inst_24420__$1);

(statearr_24471[(10)] = inst_24433);

return statearr_24471;
})();
var statearr_24472_24499 = state_24456__$1;
(statearr_24472_24499[(2)] = null);

(statearr_24472_24499[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24457 === (5))){
var inst_24440 = (state_24456[(2)]);
var state_24456__$1 = (function (){var statearr_24473 = state_24456;
(statearr_24473[(11)] = inst_24440);

return statearr_24473;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24456__$1,(12),dchan);
} else {
if((state_val_24457 === (14))){
var inst_24442 = (state_24456[(8)]);
var inst_24447 = cljs.core.apply.call(null,f,inst_24442);
var state_24456__$1 = state_24456;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24456__$1,(16),out,inst_24447);
} else {
if((state_val_24457 === (16))){
var inst_24449 = (state_24456[(2)]);
var state_24456__$1 = (function (){var statearr_24474 = state_24456;
(statearr_24474[(12)] = inst_24449);

return statearr_24474;
})();
var statearr_24475_24500 = state_24456__$1;
(statearr_24475_24500[(2)] = null);

(statearr_24475_24500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24457 === (10))){
var inst_24424 = (state_24456[(2)]);
var inst_24425 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24456__$1 = (function (){var statearr_24476 = state_24456;
(statearr_24476[(13)] = inst_24424);

return statearr_24476;
})();
var statearr_24477_24501 = state_24456__$1;
(statearr_24477_24501[(2)] = inst_24425);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24456__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24457 === (8))){
var inst_24438 = (state_24456[(2)]);
var state_24456__$1 = state_24456;
var statearr_24478_24502 = state_24456__$1;
(statearr_24478_24502[(2)] = inst_24438);

(statearr_24478_24502[(1)] = (5));


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
});})(c__19665__auto___24487,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19644__auto__,c__19665__auto___24487,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19645__auto__ = null;
var cljs$core$async$state_machine__19645__auto____0 = (function (){
var statearr_24482 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24482[(0)] = cljs$core$async$state_machine__19645__auto__);

(statearr_24482[(1)] = (1));

return statearr_24482;
});
var cljs$core$async$state_machine__19645__auto____1 = (function (state_24456){
while(true){
var ret_value__19646__auto__ = (function (){try{while(true){
var result__19647__auto__ = switch__19644__auto__.call(null,state_24456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19647__auto__;
}
break;
}
}catch (e24483){if((e24483 instanceof Object)){
var ex__19648__auto__ = e24483;
var statearr_24484_24503 = state_24456;
(statearr_24484_24503[(5)] = ex__19648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24504 = state_24456;
state_24456 = G__24504;
continue;
} else {
return ret_value__19646__auto__;
}
break;
}
});
cljs$core$async$state_machine__19645__auto__ = function(state_24456){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19645__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19645__auto____1.call(this,state_24456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19645__auto____0;
cljs$core$async$state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19645__auto____1;
return cljs$core$async$state_machine__19645__auto__;
})()
;})(switch__19644__auto__,c__19665__auto___24487,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19667__auto__ = (function (){var statearr_24485 = f__19666__auto__.call(null);
(statearr_24485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19665__auto___24487);

return statearr_24485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19667__auto__);
});})(c__19665__auto___24487,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__24507 = arguments.length;
switch (G__24507) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19665__auto___24562 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19665__auto___24562,out){
return (function (){
var f__19666__auto__ = (function (){var switch__19644__auto__ = ((function (c__19665__auto___24562,out){
return (function (state_24537){
var state_val_24538 = (state_24537[(1)]);
if((state_val_24538 === (7))){
var inst_24516 = (state_24537[(7)]);
var inst_24517 = (state_24537[(8)]);
var inst_24516__$1 = (state_24537[(2)]);
var inst_24517__$1 = cljs.core.nth.call(null,inst_24516__$1,(0),null);
var inst_24518 = cljs.core.nth.call(null,inst_24516__$1,(1),null);
var inst_24519 = (inst_24517__$1 == null);
var state_24537__$1 = (function (){var statearr_24539 = state_24537;
(statearr_24539[(7)] = inst_24516__$1);

(statearr_24539[(8)] = inst_24517__$1);

(statearr_24539[(9)] = inst_24518);

return statearr_24539;
})();
if(cljs.core.truth_(inst_24519)){
var statearr_24540_24563 = state_24537__$1;
(statearr_24540_24563[(1)] = (8));

} else {
var statearr_24541_24564 = state_24537__$1;
(statearr_24541_24564[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24538 === (1))){
var inst_24508 = cljs.core.vec.call(null,chs);
var inst_24509 = inst_24508;
var state_24537__$1 = (function (){var statearr_24542 = state_24537;
(statearr_24542[(10)] = inst_24509);

return statearr_24542;
})();
var statearr_24543_24565 = state_24537__$1;
(statearr_24543_24565[(2)] = null);

(statearr_24543_24565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24538 === (4))){
var inst_24509 = (state_24537[(10)]);
var state_24537__$1 = state_24537;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24537__$1,(7),inst_24509);
} else {
if((state_val_24538 === (6))){
var inst_24533 = (state_24537[(2)]);
var state_24537__$1 = state_24537;
var statearr_24544_24566 = state_24537__$1;
(statearr_24544_24566[(2)] = inst_24533);

(statearr_24544_24566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24538 === (3))){
var inst_24535 = (state_24537[(2)]);
var state_24537__$1 = state_24537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24537__$1,inst_24535);
} else {
if((state_val_24538 === (2))){
var inst_24509 = (state_24537[(10)]);
var inst_24511 = cljs.core.count.call(null,inst_24509);
var inst_24512 = (inst_24511 > (0));
var state_24537__$1 = state_24537;
if(cljs.core.truth_(inst_24512)){
var statearr_24546_24567 = state_24537__$1;
(statearr_24546_24567[(1)] = (4));

} else {
var statearr_24547_24568 = state_24537__$1;
(statearr_24547_24568[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24538 === (11))){
var inst_24509 = (state_24537[(10)]);
var inst_24526 = (state_24537[(2)]);
var tmp24545 = inst_24509;
var inst_24509__$1 = tmp24545;
var state_24537__$1 = (function (){var statearr_24548 = state_24537;
(statearr_24548[(10)] = inst_24509__$1);

(statearr_24548[(11)] = inst_24526);

return statearr_24548;
})();
var statearr_24549_24569 = state_24537__$1;
(statearr_24549_24569[(2)] = null);

(statearr_24549_24569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24538 === (9))){
var inst_24517 = (state_24537[(8)]);
var state_24537__$1 = state_24537;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24537__$1,(11),out,inst_24517);
} else {
if((state_val_24538 === (5))){
var inst_24531 = cljs.core.async.close_BANG_.call(null,out);
var state_24537__$1 = state_24537;
var statearr_24550_24570 = state_24537__$1;
(statearr_24550_24570[(2)] = inst_24531);

(statearr_24550_24570[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24538 === (10))){
var inst_24529 = (state_24537[(2)]);
var state_24537__$1 = state_24537;
var statearr_24551_24571 = state_24537__$1;
(statearr_24551_24571[(2)] = inst_24529);

(statearr_24551_24571[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24538 === (8))){
var inst_24516 = (state_24537[(7)]);
var inst_24509 = (state_24537[(10)]);
var inst_24517 = (state_24537[(8)]);
var inst_24518 = (state_24537[(9)]);
var inst_24521 = (function (){var cs = inst_24509;
var vec__24514 = inst_24516;
var v = inst_24517;
var c = inst_24518;
return ((function (cs,vec__24514,v,c,inst_24516,inst_24509,inst_24517,inst_24518,state_val_24538,c__19665__auto___24562,out){
return (function (p1__24505_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24505_SHARP_);
});
;})(cs,vec__24514,v,c,inst_24516,inst_24509,inst_24517,inst_24518,state_val_24538,c__19665__auto___24562,out))
})();
var inst_24522 = cljs.core.filterv.call(null,inst_24521,inst_24509);
var inst_24509__$1 = inst_24522;
var state_24537__$1 = (function (){var statearr_24552 = state_24537;
(statearr_24552[(10)] = inst_24509__$1);

return statearr_24552;
})();
var statearr_24553_24572 = state_24537__$1;
(statearr_24553_24572[(2)] = null);

(statearr_24553_24572[(1)] = (2));


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
});})(c__19665__auto___24562,out))
;
return ((function (switch__19644__auto__,c__19665__auto___24562,out){
return (function() {
var cljs$core$async$state_machine__19645__auto__ = null;
var cljs$core$async$state_machine__19645__auto____0 = (function (){
var statearr_24557 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24557[(0)] = cljs$core$async$state_machine__19645__auto__);

(statearr_24557[(1)] = (1));

return statearr_24557;
});
var cljs$core$async$state_machine__19645__auto____1 = (function (state_24537){
while(true){
var ret_value__19646__auto__ = (function (){try{while(true){
var result__19647__auto__ = switch__19644__auto__.call(null,state_24537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19647__auto__;
}
break;
}
}catch (e24558){if((e24558 instanceof Object)){
var ex__19648__auto__ = e24558;
var statearr_24559_24573 = state_24537;
(statearr_24559_24573[(5)] = ex__19648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24574 = state_24537;
state_24537 = G__24574;
continue;
} else {
return ret_value__19646__auto__;
}
break;
}
});
cljs$core$async$state_machine__19645__auto__ = function(state_24537){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19645__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19645__auto____1.call(this,state_24537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19645__auto____0;
cljs$core$async$state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19645__auto____1;
return cljs$core$async$state_machine__19645__auto__;
})()
;})(switch__19644__auto__,c__19665__auto___24562,out))
})();
var state__19667__auto__ = (function (){var statearr_24560 = f__19666__auto__.call(null);
(statearr_24560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19665__auto___24562);

return statearr_24560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19667__auto__);
});})(c__19665__auto___24562,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__24576 = arguments.length;
switch (G__24576) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19665__auto___24624 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19665__auto___24624,out){
return (function (){
var f__19666__auto__ = (function (){var switch__19644__auto__ = ((function (c__19665__auto___24624,out){
return (function (state_24600){
var state_val_24601 = (state_24600[(1)]);
if((state_val_24601 === (7))){
var inst_24582 = (state_24600[(7)]);
var inst_24582__$1 = (state_24600[(2)]);
var inst_24583 = (inst_24582__$1 == null);
var inst_24584 = cljs.core.not.call(null,inst_24583);
var state_24600__$1 = (function (){var statearr_24602 = state_24600;
(statearr_24602[(7)] = inst_24582__$1);

return statearr_24602;
})();
if(inst_24584){
var statearr_24603_24625 = state_24600__$1;
(statearr_24603_24625[(1)] = (8));

} else {
var statearr_24604_24626 = state_24600__$1;
(statearr_24604_24626[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24601 === (1))){
var inst_24577 = (0);
var state_24600__$1 = (function (){var statearr_24605 = state_24600;
(statearr_24605[(8)] = inst_24577);

return statearr_24605;
})();
var statearr_24606_24627 = state_24600__$1;
(statearr_24606_24627[(2)] = null);

(statearr_24606_24627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24601 === (4))){
var state_24600__$1 = state_24600;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24600__$1,(7),ch);
} else {
if((state_val_24601 === (6))){
var inst_24595 = (state_24600[(2)]);
var state_24600__$1 = state_24600;
var statearr_24607_24628 = state_24600__$1;
(statearr_24607_24628[(2)] = inst_24595);

(statearr_24607_24628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24601 === (3))){
var inst_24597 = (state_24600[(2)]);
var inst_24598 = cljs.core.async.close_BANG_.call(null,out);
var state_24600__$1 = (function (){var statearr_24608 = state_24600;
(statearr_24608[(9)] = inst_24597);

return statearr_24608;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24600__$1,inst_24598);
} else {
if((state_val_24601 === (2))){
var inst_24577 = (state_24600[(8)]);
var inst_24579 = (inst_24577 < n);
var state_24600__$1 = state_24600;
if(cljs.core.truth_(inst_24579)){
var statearr_24609_24629 = state_24600__$1;
(statearr_24609_24629[(1)] = (4));

} else {
var statearr_24610_24630 = state_24600__$1;
(statearr_24610_24630[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24601 === (11))){
var inst_24577 = (state_24600[(8)]);
var inst_24587 = (state_24600[(2)]);
var inst_24588 = (inst_24577 + (1));
var inst_24577__$1 = inst_24588;
var state_24600__$1 = (function (){var statearr_24611 = state_24600;
(statearr_24611[(8)] = inst_24577__$1);

(statearr_24611[(10)] = inst_24587);

return statearr_24611;
})();
var statearr_24612_24631 = state_24600__$1;
(statearr_24612_24631[(2)] = null);

(statearr_24612_24631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24601 === (9))){
var state_24600__$1 = state_24600;
var statearr_24613_24632 = state_24600__$1;
(statearr_24613_24632[(2)] = null);

(statearr_24613_24632[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24601 === (5))){
var state_24600__$1 = state_24600;
var statearr_24614_24633 = state_24600__$1;
(statearr_24614_24633[(2)] = null);

(statearr_24614_24633[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24601 === (10))){
var inst_24592 = (state_24600[(2)]);
var state_24600__$1 = state_24600;
var statearr_24615_24634 = state_24600__$1;
(statearr_24615_24634[(2)] = inst_24592);

(statearr_24615_24634[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24601 === (8))){
var inst_24582 = (state_24600[(7)]);
var state_24600__$1 = state_24600;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24600__$1,(11),out,inst_24582);
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
});})(c__19665__auto___24624,out))
;
return ((function (switch__19644__auto__,c__19665__auto___24624,out){
return (function() {
var cljs$core$async$state_machine__19645__auto__ = null;
var cljs$core$async$state_machine__19645__auto____0 = (function (){
var statearr_24619 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24619[(0)] = cljs$core$async$state_machine__19645__auto__);

(statearr_24619[(1)] = (1));

return statearr_24619;
});
var cljs$core$async$state_machine__19645__auto____1 = (function (state_24600){
while(true){
var ret_value__19646__auto__ = (function (){try{while(true){
var result__19647__auto__ = switch__19644__auto__.call(null,state_24600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19647__auto__;
}
break;
}
}catch (e24620){if((e24620 instanceof Object)){
var ex__19648__auto__ = e24620;
var statearr_24621_24635 = state_24600;
(statearr_24621_24635[(5)] = ex__19648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24636 = state_24600;
state_24600 = G__24636;
continue;
} else {
return ret_value__19646__auto__;
}
break;
}
});
cljs$core$async$state_machine__19645__auto__ = function(state_24600){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19645__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19645__auto____1.call(this,state_24600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19645__auto____0;
cljs$core$async$state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19645__auto____1;
return cljs$core$async$state_machine__19645__auto__;
})()
;})(switch__19644__auto__,c__19665__auto___24624,out))
})();
var state__19667__auto__ = (function (){var statearr_24622 = f__19666__auto__.call(null);
(statearr_24622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19665__auto___24624);

return statearr_24622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19667__auto__);
});})(c__19665__auto___24624,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t24644 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24644 = (function (map_LT_,f,ch,meta24645){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24645 = meta24645;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t24644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24646,meta24645__$1){
var self__ = this;
var _24646__$1 = this;
return (new cljs.core.async.t24644(self__.map_LT_,self__.f,self__.ch,meta24645__$1));
});

cljs.core.async.t24644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24646){
var self__ = this;
var _24646__$1 = this;
return self__.meta24645;
});

cljs.core.async.t24644.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t24644.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t24644.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t24644.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t24644.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t24647 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24647 = (function (map_LT_,f,ch,meta24645,_,fn1,meta24648){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24645 = meta24645;
this._ = _;
this.fn1 = fn1;
this.meta24648 = meta24648;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t24647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24649,meta24648__$1){
var self__ = this;
var _24649__$1 = this;
return (new cljs.core.async.t24647(self__.map_LT_,self__.f,self__.ch,self__.meta24645,self__._,self__.fn1,meta24648__$1));
});})(___$1))
;

cljs.core.async.t24647.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24649){
var self__ = this;
var _24649__$1 = this;
return self__.meta24648;
});})(___$1))
;

cljs.core.async.t24647.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24647.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t24647.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24637_SHARP_){
return f1.call(null,(((p1__24637_SHARP_ == null))?null:self__.f.call(null,p1__24637_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t24647.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24645","meta24645",491315684,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24648","meta24648",274516612,null)], null);
});})(___$1))
;

cljs.core.async.t24647.cljs$lang$type = true;

cljs.core.async.t24647.cljs$lang$ctorStr = "cljs.core.async/t24647";

cljs.core.async.t24647.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t24647");
});})(___$1))
;

cljs.core.async.__GT_t24647 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t24647(map_LT___$1,f__$1,ch__$1,meta24645__$1,___$2,fn1__$1,meta24648){
return (new cljs.core.async.t24647(map_LT___$1,f__$1,ch__$1,meta24645__$1,___$2,fn1__$1,meta24648));
});})(___$1))
;

}

return (new cljs.core.async.t24647(self__.map_LT_,self__.f,self__.ch,self__.meta24645,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16057__auto__ = ret;
if(cljs.core.truth_(and__16057__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16057__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t24644.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t24644.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t24644.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24645","meta24645",491315684,null)], null);
});

cljs.core.async.t24644.cljs$lang$type = true;

cljs.core.async.t24644.cljs$lang$ctorStr = "cljs.core.async/t24644";

cljs.core.async.t24644.cljs$lang$ctorPrWriter = (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t24644");
});

cljs.core.async.__GT_t24644 = (function cljs$core$async$map_LT__$___GT_t24644(map_LT___$1,f__$1,ch__$1,meta24645){
return (new cljs.core.async.t24644(map_LT___$1,f__$1,ch__$1,meta24645));
});

}

return (new cljs.core.async.t24644(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t24653 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24653 = (function (map_GT_,f,ch,meta24654){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24654 = meta24654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t24653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24655,meta24654__$1){
var self__ = this;
var _24655__$1 = this;
return (new cljs.core.async.t24653(self__.map_GT_,self__.f,self__.ch,meta24654__$1));
});

cljs.core.async.t24653.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24655){
var self__ = this;
var _24655__$1 = this;
return self__.meta24654;
});

cljs.core.async.t24653.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t24653.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t24653.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t24653.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t24653.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t24653.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t24653.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24654","meta24654",-1640547551,null)], null);
});

cljs.core.async.t24653.cljs$lang$type = true;

cljs.core.async.t24653.cljs$lang$ctorStr = "cljs.core.async/t24653";

cljs.core.async.t24653.cljs$lang$ctorPrWriter = (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t24653");
});

cljs.core.async.__GT_t24653 = (function cljs$core$async$map_GT__$___GT_t24653(map_GT___$1,f__$1,ch__$1,meta24654){
return (new cljs.core.async.t24653(map_GT___$1,f__$1,ch__$1,meta24654));
});

}

return (new cljs.core.async.t24653(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t24659 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24659 = (function (filter_GT_,p,ch,meta24660){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24660 = meta24660;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t24659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24661,meta24660__$1){
var self__ = this;
var _24661__$1 = this;
return (new cljs.core.async.t24659(self__.filter_GT_,self__.p,self__.ch,meta24660__$1));
});

cljs.core.async.t24659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24661){
var self__ = this;
var _24661__$1 = this;
return self__.meta24660;
});

cljs.core.async.t24659.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t24659.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t24659.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t24659.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t24659.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t24659.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t24659.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t24659.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24660","meta24660",902121880,null)], null);
});

cljs.core.async.t24659.cljs$lang$type = true;

cljs.core.async.t24659.cljs$lang$ctorStr = "cljs.core.async/t24659";

cljs.core.async.t24659.cljs$lang$ctorPrWriter = (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t24659");
});

cljs.core.async.__GT_t24659 = (function cljs$core$async$filter_GT__$___GT_t24659(filter_GT___$1,p__$1,ch__$1,meta24660){
return (new cljs.core.async.t24659(filter_GT___$1,p__$1,ch__$1,meta24660));
});

}

return (new cljs.core.async.t24659(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__24663 = arguments.length;
switch (G__24663) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19665__auto___24706 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19665__auto___24706,out){
return (function (){
var f__19666__auto__ = (function (){var switch__19644__auto__ = ((function (c__19665__auto___24706,out){
return (function (state_24684){
var state_val_24685 = (state_24684[(1)]);
if((state_val_24685 === (7))){
var inst_24680 = (state_24684[(2)]);
var state_24684__$1 = state_24684;
var statearr_24686_24707 = state_24684__$1;
(statearr_24686_24707[(2)] = inst_24680);

(statearr_24686_24707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24685 === (1))){
var state_24684__$1 = state_24684;
var statearr_24687_24708 = state_24684__$1;
(statearr_24687_24708[(2)] = null);

(statearr_24687_24708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24685 === (4))){
var inst_24666 = (state_24684[(7)]);
var inst_24666__$1 = (state_24684[(2)]);
var inst_24667 = (inst_24666__$1 == null);
var state_24684__$1 = (function (){var statearr_24688 = state_24684;
(statearr_24688[(7)] = inst_24666__$1);

return statearr_24688;
})();
if(cljs.core.truth_(inst_24667)){
var statearr_24689_24709 = state_24684__$1;
(statearr_24689_24709[(1)] = (5));

} else {
var statearr_24690_24710 = state_24684__$1;
(statearr_24690_24710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24685 === (6))){
var inst_24666 = (state_24684[(7)]);
var inst_24671 = p.call(null,inst_24666);
var state_24684__$1 = state_24684;
if(cljs.core.truth_(inst_24671)){
var statearr_24691_24711 = state_24684__$1;
(statearr_24691_24711[(1)] = (8));

} else {
var statearr_24692_24712 = state_24684__$1;
(statearr_24692_24712[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24685 === (3))){
var inst_24682 = (state_24684[(2)]);
var state_24684__$1 = state_24684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24684__$1,inst_24682);
} else {
if((state_val_24685 === (2))){
var state_24684__$1 = state_24684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24684__$1,(4),ch);
} else {
if((state_val_24685 === (11))){
var inst_24674 = (state_24684[(2)]);
var state_24684__$1 = state_24684;
var statearr_24693_24713 = state_24684__$1;
(statearr_24693_24713[(2)] = inst_24674);

(statearr_24693_24713[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24685 === (9))){
var state_24684__$1 = state_24684;
var statearr_24694_24714 = state_24684__$1;
(statearr_24694_24714[(2)] = null);

(statearr_24694_24714[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24685 === (5))){
var inst_24669 = cljs.core.async.close_BANG_.call(null,out);
var state_24684__$1 = state_24684;
var statearr_24695_24715 = state_24684__$1;
(statearr_24695_24715[(2)] = inst_24669);

(statearr_24695_24715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24685 === (10))){
var inst_24677 = (state_24684[(2)]);
var state_24684__$1 = (function (){var statearr_24696 = state_24684;
(statearr_24696[(8)] = inst_24677);

return statearr_24696;
})();
var statearr_24697_24716 = state_24684__$1;
(statearr_24697_24716[(2)] = null);

(statearr_24697_24716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24685 === (8))){
var inst_24666 = (state_24684[(7)]);
var state_24684__$1 = state_24684;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24684__$1,(11),out,inst_24666);
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
});})(c__19665__auto___24706,out))
;
return ((function (switch__19644__auto__,c__19665__auto___24706,out){
return (function() {
var cljs$core$async$state_machine__19645__auto__ = null;
var cljs$core$async$state_machine__19645__auto____0 = (function (){
var statearr_24701 = [null,null,null,null,null,null,null,null,null];
(statearr_24701[(0)] = cljs$core$async$state_machine__19645__auto__);

(statearr_24701[(1)] = (1));

return statearr_24701;
});
var cljs$core$async$state_machine__19645__auto____1 = (function (state_24684){
while(true){
var ret_value__19646__auto__ = (function (){try{while(true){
var result__19647__auto__ = switch__19644__auto__.call(null,state_24684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19647__auto__;
}
break;
}
}catch (e24702){if((e24702 instanceof Object)){
var ex__19648__auto__ = e24702;
var statearr_24703_24717 = state_24684;
(statearr_24703_24717[(5)] = ex__19648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24718 = state_24684;
state_24684 = G__24718;
continue;
} else {
return ret_value__19646__auto__;
}
break;
}
});
cljs$core$async$state_machine__19645__auto__ = function(state_24684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19645__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19645__auto____1.call(this,state_24684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19645__auto____0;
cljs$core$async$state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19645__auto____1;
return cljs$core$async$state_machine__19645__auto__;
})()
;})(switch__19644__auto__,c__19665__auto___24706,out))
})();
var state__19667__auto__ = (function (){var statearr_24704 = f__19666__auto__.call(null);
(statearr_24704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19665__auto___24706);

return statearr_24704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19667__auto__);
});})(c__19665__auto___24706,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__24720 = arguments.length;
switch (G__24720) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19665__auto__){
return (function (){
var f__19666__auto__ = (function (){var switch__19644__auto__ = ((function (c__19665__auto__){
return (function (state_24887){
var state_val_24888 = (state_24887[(1)]);
if((state_val_24888 === (7))){
var inst_24883 = (state_24887[(2)]);
var state_24887__$1 = state_24887;
var statearr_24889_24930 = state_24887__$1;
(statearr_24889_24930[(2)] = inst_24883);

(statearr_24889_24930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (20))){
var inst_24853 = (state_24887[(7)]);
var inst_24864 = (state_24887[(2)]);
var inst_24865 = cljs.core.next.call(null,inst_24853);
var inst_24839 = inst_24865;
var inst_24840 = null;
var inst_24841 = (0);
var inst_24842 = (0);
var state_24887__$1 = (function (){var statearr_24890 = state_24887;
(statearr_24890[(8)] = inst_24839);

(statearr_24890[(9)] = inst_24842);

(statearr_24890[(10)] = inst_24840);

(statearr_24890[(11)] = inst_24864);

(statearr_24890[(12)] = inst_24841);

return statearr_24890;
})();
var statearr_24891_24931 = state_24887__$1;
(statearr_24891_24931[(2)] = null);

(statearr_24891_24931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (1))){
var state_24887__$1 = state_24887;
var statearr_24892_24932 = state_24887__$1;
(statearr_24892_24932[(2)] = null);

(statearr_24892_24932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (4))){
var inst_24828 = (state_24887[(13)]);
var inst_24828__$1 = (state_24887[(2)]);
var inst_24829 = (inst_24828__$1 == null);
var state_24887__$1 = (function (){var statearr_24893 = state_24887;
(statearr_24893[(13)] = inst_24828__$1);

return statearr_24893;
})();
if(cljs.core.truth_(inst_24829)){
var statearr_24894_24933 = state_24887__$1;
(statearr_24894_24933[(1)] = (5));

} else {
var statearr_24895_24934 = state_24887__$1;
(statearr_24895_24934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (15))){
var state_24887__$1 = state_24887;
var statearr_24899_24935 = state_24887__$1;
(statearr_24899_24935[(2)] = null);

(statearr_24899_24935[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (21))){
var state_24887__$1 = state_24887;
var statearr_24900_24936 = state_24887__$1;
(statearr_24900_24936[(2)] = null);

(statearr_24900_24936[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (13))){
var inst_24839 = (state_24887[(8)]);
var inst_24842 = (state_24887[(9)]);
var inst_24840 = (state_24887[(10)]);
var inst_24841 = (state_24887[(12)]);
var inst_24849 = (state_24887[(2)]);
var inst_24850 = (inst_24842 + (1));
var tmp24896 = inst_24839;
var tmp24897 = inst_24840;
var tmp24898 = inst_24841;
var inst_24839__$1 = tmp24896;
var inst_24840__$1 = tmp24897;
var inst_24841__$1 = tmp24898;
var inst_24842__$1 = inst_24850;
var state_24887__$1 = (function (){var statearr_24901 = state_24887;
(statearr_24901[(8)] = inst_24839__$1);

(statearr_24901[(9)] = inst_24842__$1);

(statearr_24901[(10)] = inst_24840__$1);

(statearr_24901[(14)] = inst_24849);

(statearr_24901[(12)] = inst_24841__$1);

return statearr_24901;
})();
var statearr_24902_24937 = state_24887__$1;
(statearr_24902_24937[(2)] = null);

(statearr_24902_24937[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (22))){
var state_24887__$1 = state_24887;
var statearr_24903_24938 = state_24887__$1;
(statearr_24903_24938[(2)] = null);

(statearr_24903_24938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (6))){
var inst_24828 = (state_24887[(13)]);
var inst_24837 = f.call(null,inst_24828);
var inst_24838 = cljs.core.seq.call(null,inst_24837);
var inst_24839 = inst_24838;
var inst_24840 = null;
var inst_24841 = (0);
var inst_24842 = (0);
var state_24887__$1 = (function (){var statearr_24904 = state_24887;
(statearr_24904[(8)] = inst_24839);

(statearr_24904[(9)] = inst_24842);

(statearr_24904[(10)] = inst_24840);

(statearr_24904[(12)] = inst_24841);

return statearr_24904;
})();
var statearr_24905_24939 = state_24887__$1;
(statearr_24905_24939[(2)] = null);

(statearr_24905_24939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (17))){
var inst_24853 = (state_24887[(7)]);
var inst_24857 = cljs.core.chunk_first.call(null,inst_24853);
var inst_24858 = cljs.core.chunk_rest.call(null,inst_24853);
var inst_24859 = cljs.core.count.call(null,inst_24857);
var inst_24839 = inst_24858;
var inst_24840 = inst_24857;
var inst_24841 = inst_24859;
var inst_24842 = (0);
var state_24887__$1 = (function (){var statearr_24906 = state_24887;
(statearr_24906[(8)] = inst_24839);

(statearr_24906[(9)] = inst_24842);

(statearr_24906[(10)] = inst_24840);

(statearr_24906[(12)] = inst_24841);

return statearr_24906;
})();
var statearr_24907_24940 = state_24887__$1;
(statearr_24907_24940[(2)] = null);

(statearr_24907_24940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (3))){
var inst_24885 = (state_24887[(2)]);
var state_24887__$1 = state_24887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24887__$1,inst_24885);
} else {
if((state_val_24888 === (12))){
var inst_24873 = (state_24887[(2)]);
var state_24887__$1 = state_24887;
var statearr_24908_24941 = state_24887__$1;
(statearr_24908_24941[(2)] = inst_24873);

(statearr_24908_24941[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (2))){
var state_24887__$1 = state_24887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24887__$1,(4),in$);
} else {
if((state_val_24888 === (23))){
var inst_24881 = (state_24887[(2)]);
var state_24887__$1 = state_24887;
var statearr_24909_24942 = state_24887__$1;
(statearr_24909_24942[(2)] = inst_24881);

(statearr_24909_24942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (19))){
var inst_24868 = (state_24887[(2)]);
var state_24887__$1 = state_24887;
var statearr_24910_24943 = state_24887__$1;
(statearr_24910_24943[(2)] = inst_24868);

(statearr_24910_24943[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (11))){
var inst_24839 = (state_24887[(8)]);
var inst_24853 = (state_24887[(7)]);
var inst_24853__$1 = cljs.core.seq.call(null,inst_24839);
var state_24887__$1 = (function (){var statearr_24911 = state_24887;
(statearr_24911[(7)] = inst_24853__$1);

return statearr_24911;
})();
if(inst_24853__$1){
var statearr_24912_24944 = state_24887__$1;
(statearr_24912_24944[(1)] = (14));

} else {
var statearr_24913_24945 = state_24887__$1;
(statearr_24913_24945[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (9))){
var inst_24875 = (state_24887[(2)]);
var inst_24876 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24887__$1 = (function (){var statearr_24914 = state_24887;
(statearr_24914[(15)] = inst_24875);

return statearr_24914;
})();
if(cljs.core.truth_(inst_24876)){
var statearr_24915_24946 = state_24887__$1;
(statearr_24915_24946[(1)] = (21));

} else {
var statearr_24916_24947 = state_24887__$1;
(statearr_24916_24947[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (5))){
var inst_24831 = cljs.core.async.close_BANG_.call(null,out);
var state_24887__$1 = state_24887;
var statearr_24917_24948 = state_24887__$1;
(statearr_24917_24948[(2)] = inst_24831);

(statearr_24917_24948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (14))){
var inst_24853 = (state_24887[(7)]);
var inst_24855 = cljs.core.chunked_seq_QMARK_.call(null,inst_24853);
var state_24887__$1 = state_24887;
if(inst_24855){
var statearr_24918_24949 = state_24887__$1;
(statearr_24918_24949[(1)] = (17));

} else {
var statearr_24919_24950 = state_24887__$1;
(statearr_24919_24950[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (16))){
var inst_24871 = (state_24887[(2)]);
var state_24887__$1 = state_24887;
var statearr_24920_24951 = state_24887__$1;
(statearr_24920_24951[(2)] = inst_24871);

(statearr_24920_24951[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (10))){
var inst_24842 = (state_24887[(9)]);
var inst_24840 = (state_24887[(10)]);
var inst_24847 = cljs.core._nth.call(null,inst_24840,inst_24842);
var state_24887__$1 = state_24887;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24887__$1,(13),out,inst_24847);
} else {
if((state_val_24888 === (18))){
var inst_24853 = (state_24887[(7)]);
var inst_24862 = cljs.core.first.call(null,inst_24853);
var state_24887__$1 = state_24887;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24887__$1,(20),out,inst_24862);
} else {
if((state_val_24888 === (8))){
var inst_24842 = (state_24887[(9)]);
var inst_24841 = (state_24887[(12)]);
var inst_24844 = (inst_24842 < inst_24841);
var inst_24845 = inst_24844;
var state_24887__$1 = state_24887;
if(cljs.core.truth_(inst_24845)){
var statearr_24921_24952 = state_24887__$1;
(statearr_24921_24952[(1)] = (10));

} else {
var statearr_24922_24953 = state_24887__$1;
(statearr_24922_24953[(1)] = (11));

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
});})(c__19665__auto__))
;
return ((function (switch__19644__auto__,c__19665__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19645__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19645__auto____0 = (function (){
var statearr_24926 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24926[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19645__auto__);

(statearr_24926[(1)] = (1));

return statearr_24926;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19645__auto____1 = (function (state_24887){
while(true){
var ret_value__19646__auto__ = (function (){try{while(true){
var result__19647__auto__ = switch__19644__auto__.call(null,state_24887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19647__auto__;
}
break;
}
}catch (e24927){if((e24927 instanceof Object)){
var ex__19648__auto__ = e24927;
var statearr_24928_24954 = state_24887;
(statearr_24928_24954[(5)] = ex__19648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24955 = state_24887;
state_24887 = G__24955;
continue;
} else {
return ret_value__19646__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19645__auto__ = function(state_24887){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19645__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19645__auto____1.call(this,state_24887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19645__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19645__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19645__auto__;
})()
;})(switch__19644__auto__,c__19665__auto__))
})();
var state__19667__auto__ = (function (){var statearr_24929 = f__19666__auto__.call(null);
(statearr_24929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19665__auto__);

return statearr_24929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19667__auto__);
});})(c__19665__auto__))
);

return c__19665__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__24957 = arguments.length;
switch (G__24957) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__24960 = arguments.length;
switch (G__24960) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__24963 = arguments.length;
switch (G__24963) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19665__auto___25013 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19665__auto___25013,out){
return (function (){
var f__19666__auto__ = (function (){var switch__19644__auto__ = ((function (c__19665__auto___25013,out){
return (function (state_24987){
var state_val_24988 = (state_24987[(1)]);
if((state_val_24988 === (7))){
var inst_24982 = (state_24987[(2)]);
var state_24987__$1 = state_24987;
var statearr_24989_25014 = state_24987__$1;
(statearr_24989_25014[(2)] = inst_24982);

(statearr_24989_25014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24988 === (1))){
var inst_24964 = null;
var state_24987__$1 = (function (){var statearr_24990 = state_24987;
(statearr_24990[(7)] = inst_24964);

return statearr_24990;
})();
var statearr_24991_25015 = state_24987__$1;
(statearr_24991_25015[(2)] = null);

(statearr_24991_25015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24988 === (4))){
var inst_24967 = (state_24987[(8)]);
var inst_24967__$1 = (state_24987[(2)]);
var inst_24968 = (inst_24967__$1 == null);
var inst_24969 = cljs.core.not.call(null,inst_24968);
var state_24987__$1 = (function (){var statearr_24992 = state_24987;
(statearr_24992[(8)] = inst_24967__$1);

return statearr_24992;
})();
if(inst_24969){
var statearr_24993_25016 = state_24987__$1;
(statearr_24993_25016[(1)] = (5));

} else {
var statearr_24994_25017 = state_24987__$1;
(statearr_24994_25017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24988 === (6))){
var state_24987__$1 = state_24987;
var statearr_24995_25018 = state_24987__$1;
(statearr_24995_25018[(2)] = null);

(statearr_24995_25018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24988 === (3))){
var inst_24984 = (state_24987[(2)]);
var inst_24985 = cljs.core.async.close_BANG_.call(null,out);
var state_24987__$1 = (function (){var statearr_24996 = state_24987;
(statearr_24996[(9)] = inst_24984);

return statearr_24996;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24987__$1,inst_24985);
} else {
if((state_val_24988 === (2))){
var state_24987__$1 = state_24987;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24987__$1,(4),ch);
} else {
if((state_val_24988 === (11))){
var inst_24967 = (state_24987[(8)]);
var inst_24976 = (state_24987[(2)]);
var inst_24964 = inst_24967;
var state_24987__$1 = (function (){var statearr_24997 = state_24987;
(statearr_24997[(10)] = inst_24976);

(statearr_24997[(7)] = inst_24964);

return statearr_24997;
})();
var statearr_24998_25019 = state_24987__$1;
(statearr_24998_25019[(2)] = null);

(statearr_24998_25019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24988 === (9))){
var inst_24967 = (state_24987[(8)]);
var state_24987__$1 = state_24987;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24987__$1,(11),out,inst_24967);
} else {
if((state_val_24988 === (5))){
var inst_24967 = (state_24987[(8)]);
var inst_24964 = (state_24987[(7)]);
var inst_24971 = cljs.core._EQ_.call(null,inst_24967,inst_24964);
var state_24987__$1 = state_24987;
if(inst_24971){
var statearr_25000_25020 = state_24987__$1;
(statearr_25000_25020[(1)] = (8));

} else {
var statearr_25001_25021 = state_24987__$1;
(statearr_25001_25021[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24988 === (10))){
var inst_24979 = (state_24987[(2)]);
var state_24987__$1 = state_24987;
var statearr_25002_25022 = state_24987__$1;
(statearr_25002_25022[(2)] = inst_24979);

(statearr_25002_25022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24988 === (8))){
var inst_24964 = (state_24987[(7)]);
var tmp24999 = inst_24964;
var inst_24964__$1 = tmp24999;
var state_24987__$1 = (function (){var statearr_25003 = state_24987;
(statearr_25003[(7)] = inst_24964__$1);

return statearr_25003;
})();
var statearr_25004_25023 = state_24987__$1;
(statearr_25004_25023[(2)] = null);

(statearr_25004_25023[(1)] = (2));


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
});})(c__19665__auto___25013,out))
;
return ((function (switch__19644__auto__,c__19665__auto___25013,out){
return (function() {
var cljs$core$async$state_machine__19645__auto__ = null;
var cljs$core$async$state_machine__19645__auto____0 = (function (){
var statearr_25008 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25008[(0)] = cljs$core$async$state_machine__19645__auto__);

(statearr_25008[(1)] = (1));

return statearr_25008;
});
var cljs$core$async$state_machine__19645__auto____1 = (function (state_24987){
while(true){
var ret_value__19646__auto__ = (function (){try{while(true){
var result__19647__auto__ = switch__19644__auto__.call(null,state_24987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19647__auto__;
}
break;
}
}catch (e25009){if((e25009 instanceof Object)){
var ex__19648__auto__ = e25009;
var statearr_25010_25024 = state_24987;
(statearr_25010_25024[(5)] = ex__19648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25025 = state_24987;
state_24987 = G__25025;
continue;
} else {
return ret_value__19646__auto__;
}
break;
}
});
cljs$core$async$state_machine__19645__auto__ = function(state_24987){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19645__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19645__auto____1.call(this,state_24987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19645__auto____0;
cljs$core$async$state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19645__auto____1;
return cljs$core$async$state_machine__19645__auto__;
})()
;})(switch__19644__auto__,c__19665__auto___25013,out))
})();
var state__19667__auto__ = (function (){var statearr_25011 = f__19666__auto__.call(null);
(statearr_25011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19665__auto___25013);

return statearr_25011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19667__auto__);
});})(c__19665__auto___25013,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__25027 = arguments.length;
switch (G__25027) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19665__auto___25096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19665__auto___25096,out){
return (function (){
var f__19666__auto__ = (function (){var switch__19644__auto__ = ((function (c__19665__auto___25096,out){
return (function (state_25065){
var state_val_25066 = (state_25065[(1)]);
if((state_val_25066 === (7))){
var inst_25061 = (state_25065[(2)]);
var state_25065__$1 = state_25065;
var statearr_25067_25097 = state_25065__$1;
(statearr_25067_25097[(2)] = inst_25061);

(statearr_25067_25097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25066 === (1))){
var inst_25028 = (new Array(n));
var inst_25029 = inst_25028;
var inst_25030 = (0);
var state_25065__$1 = (function (){var statearr_25068 = state_25065;
(statearr_25068[(7)] = inst_25030);

(statearr_25068[(8)] = inst_25029);

return statearr_25068;
})();
var statearr_25069_25098 = state_25065__$1;
(statearr_25069_25098[(2)] = null);

(statearr_25069_25098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25066 === (4))){
var inst_25033 = (state_25065[(9)]);
var inst_25033__$1 = (state_25065[(2)]);
var inst_25034 = (inst_25033__$1 == null);
var inst_25035 = cljs.core.not.call(null,inst_25034);
var state_25065__$1 = (function (){var statearr_25070 = state_25065;
(statearr_25070[(9)] = inst_25033__$1);

return statearr_25070;
})();
if(inst_25035){
var statearr_25071_25099 = state_25065__$1;
(statearr_25071_25099[(1)] = (5));

} else {
var statearr_25072_25100 = state_25065__$1;
(statearr_25072_25100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25066 === (15))){
var inst_25055 = (state_25065[(2)]);
var state_25065__$1 = state_25065;
var statearr_25073_25101 = state_25065__$1;
(statearr_25073_25101[(2)] = inst_25055);

(statearr_25073_25101[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25066 === (13))){
var state_25065__$1 = state_25065;
var statearr_25074_25102 = state_25065__$1;
(statearr_25074_25102[(2)] = null);

(statearr_25074_25102[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25066 === (6))){
var inst_25030 = (state_25065[(7)]);
var inst_25051 = (inst_25030 > (0));
var state_25065__$1 = state_25065;
if(cljs.core.truth_(inst_25051)){
var statearr_25075_25103 = state_25065__$1;
(statearr_25075_25103[(1)] = (12));

} else {
var statearr_25076_25104 = state_25065__$1;
(statearr_25076_25104[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25066 === (3))){
var inst_25063 = (state_25065[(2)]);
var state_25065__$1 = state_25065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25065__$1,inst_25063);
} else {
if((state_val_25066 === (12))){
var inst_25029 = (state_25065[(8)]);
var inst_25053 = cljs.core.vec.call(null,inst_25029);
var state_25065__$1 = state_25065;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25065__$1,(15),out,inst_25053);
} else {
if((state_val_25066 === (2))){
var state_25065__$1 = state_25065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25065__$1,(4),ch);
} else {
if((state_val_25066 === (11))){
var inst_25045 = (state_25065[(2)]);
var inst_25046 = (new Array(n));
var inst_25029 = inst_25046;
var inst_25030 = (0);
var state_25065__$1 = (function (){var statearr_25077 = state_25065;
(statearr_25077[(7)] = inst_25030);

(statearr_25077[(8)] = inst_25029);

(statearr_25077[(10)] = inst_25045);

return statearr_25077;
})();
var statearr_25078_25105 = state_25065__$1;
(statearr_25078_25105[(2)] = null);

(statearr_25078_25105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25066 === (9))){
var inst_25029 = (state_25065[(8)]);
var inst_25043 = cljs.core.vec.call(null,inst_25029);
var state_25065__$1 = state_25065;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25065__$1,(11),out,inst_25043);
} else {
if((state_val_25066 === (5))){
var inst_25030 = (state_25065[(7)]);
var inst_25029 = (state_25065[(8)]);
var inst_25033 = (state_25065[(9)]);
var inst_25038 = (state_25065[(11)]);
var inst_25037 = (inst_25029[inst_25030] = inst_25033);
var inst_25038__$1 = (inst_25030 + (1));
var inst_25039 = (inst_25038__$1 < n);
var state_25065__$1 = (function (){var statearr_25079 = state_25065;
(statearr_25079[(12)] = inst_25037);

(statearr_25079[(11)] = inst_25038__$1);

return statearr_25079;
})();
if(cljs.core.truth_(inst_25039)){
var statearr_25080_25106 = state_25065__$1;
(statearr_25080_25106[(1)] = (8));

} else {
var statearr_25081_25107 = state_25065__$1;
(statearr_25081_25107[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25066 === (14))){
var inst_25058 = (state_25065[(2)]);
var inst_25059 = cljs.core.async.close_BANG_.call(null,out);
var state_25065__$1 = (function (){var statearr_25083 = state_25065;
(statearr_25083[(13)] = inst_25058);

return statearr_25083;
})();
var statearr_25084_25108 = state_25065__$1;
(statearr_25084_25108[(2)] = inst_25059);

(statearr_25084_25108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25066 === (10))){
var inst_25049 = (state_25065[(2)]);
var state_25065__$1 = state_25065;
var statearr_25085_25109 = state_25065__$1;
(statearr_25085_25109[(2)] = inst_25049);

(statearr_25085_25109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25066 === (8))){
var inst_25029 = (state_25065[(8)]);
var inst_25038 = (state_25065[(11)]);
var tmp25082 = inst_25029;
var inst_25029__$1 = tmp25082;
var inst_25030 = inst_25038;
var state_25065__$1 = (function (){var statearr_25086 = state_25065;
(statearr_25086[(7)] = inst_25030);

(statearr_25086[(8)] = inst_25029__$1);

return statearr_25086;
})();
var statearr_25087_25110 = state_25065__$1;
(statearr_25087_25110[(2)] = null);

(statearr_25087_25110[(1)] = (2));


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
});})(c__19665__auto___25096,out))
;
return ((function (switch__19644__auto__,c__19665__auto___25096,out){
return (function() {
var cljs$core$async$state_machine__19645__auto__ = null;
var cljs$core$async$state_machine__19645__auto____0 = (function (){
var statearr_25091 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25091[(0)] = cljs$core$async$state_machine__19645__auto__);

(statearr_25091[(1)] = (1));

return statearr_25091;
});
var cljs$core$async$state_machine__19645__auto____1 = (function (state_25065){
while(true){
var ret_value__19646__auto__ = (function (){try{while(true){
var result__19647__auto__ = switch__19644__auto__.call(null,state_25065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19647__auto__;
}
break;
}
}catch (e25092){if((e25092 instanceof Object)){
var ex__19648__auto__ = e25092;
var statearr_25093_25111 = state_25065;
(statearr_25093_25111[(5)] = ex__19648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25112 = state_25065;
state_25065 = G__25112;
continue;
} else {
return ret_value__19646__auto__;
}
break;
}
});
cljs$core$async$state_machine__19645__auto__ = function(state_25065){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19645__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19645__auto____1.call(this,state_25065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19645__auto____0;
cljs$core$async$state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19645__auto____1;
return cljs$core$async$state_machine__19645__auto__;
})()
;})(switch__19644__auto__,c__19665__auto___25096,out))
})();
var state__19667__auto__ = (function (){var statearr_25094 = f__19666__auto__.call(null);
(statearr_25094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19665__auto___25096);

return statearr_25094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19667__auto__);
});})(c__19665__auto___25096,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__25114 = arguments.length;
switch (G__25114) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19665__auto___25187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19665__auto___25187,out){
return (function (){
var f__19666__auto__ = (function (){var switch__19644__auto__ = ((function (c__19665__auto___25187,out){
return (function (state_25156){
var state_val_25157 = (state_25156[(1)]);
if((state_val_25157 === (7))){
var inst_25152 = (state_25156[(2)]);
var state_25156__$1 = state_25156;
var statearr_25158_25188 = state_25156__$1;
(statearr_25158_25188[(2)] = inst_25152);

(statearr_25158_25188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (1))){
var inst_25115 = [];
var inst_25116 = inst_25115;
var inst_25117 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25156__$1 = (function (){var statearr_25159 = state_25156;
(statearr_25159[(7)] = inst_25116);

(statearr_25159[(8)] = inst_25117);

return statearr_25159;
})();
var statearr_25160_25189 = state_25156__$1;
(statearr_25160_25189[(2)] = null);

(statearr_25160_25189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (4))){
var inst_25120 = (state_25156[(9)]);
var inst_25120__$1 = (state_25156[(2)]);
var inst_25121 = (inst_25120__$1 == null);
var inst_25122 = cljs.core.not.call(null,inst_25121);
var state_25156__$1 = (function (){var statearr_25161 = state_25156;
(statearr_25161[(9)] = inst_25120__$1);

return statearr_25161;
})();
if(inst_25122){
var statearr_25162_25190 = state_25156__$1;
(statearr_25162_25190[(1)] = (5));

} else {
var statearr_25163_25191 = state_25156__$1;
(statearr_25163_25191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (15))){
var inst_25146 = (state_25156[(2)]);
var state_25156__$1 = state_25156;
var statearr_25164_25192 = state_25156__$1;
(statearr_25164_25192[(2)] = inst_25146);

(statearr_25164_25192[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (13))){
var state_25156__$1 = state_25156;
var statearr_25165_25193 = state_25156__$1;
(statearr_25165_25193[(2)] = null);

(statearr_25165_25193[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (6))){
var inst_25116 = (state_25156[(7)]);
var inst_25141 = inst_25116.length;
var inst_25142 = (inst_25141 > (0));
var state_25156__$1 = state_25156;
if(cljs.core.truth_(inst_25142)){
var statearr_25166_25194 = state_25156__$1;
(statearr_25166_25194[(1)] = (12));

} else {
var statearr_25167_25195 = state_25156__$1;
(statearr_25167_25195[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (3))){
var inst_25154 = (state_25156[(2)]);
var state_25156__$1 = state_25156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25156__$1,inst_25154);
} else {
if((state_val_25157 === (12))){
var inst_25116 = (state_25156[(7)]);
var inst_25144 = cljs.core.vec.call(null,inst_25116);
var state_25156__$1 = state_25156;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25156__$1,(15),out,inst_25144);
} else {
if((state_val_25157 === (2))){
var state_25156__$1 = state_25156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25156__$1,(4),ch);
} else {
if((state_val_25157 === (11))){
var inst_25124 = (state_25156[(10)]);
var inst_25120 = (state_25156[(9)]);
var inst_25134 = (state_25156[(2)]);
var inst_25135 = [];
var inst_25136 = inst_25135.push(inst_25120);
var inst_25116 = inst_25135;
var inst_25117 = inst_25124;
var state_25156__$1 = (function (){var statearr_25168 = state_25156;
(statearr_25168[(7)] = inst_25116);

(statearr_25168[(8)] = inst_25117);

(statearr_25168[(11)] = inst_25134);

(statearr_25168[(12)] = inst_25136);

return statearr_25168;
})();
var statearr_25169_25196 = state_25156__$1;
(statearr_25169_25196[(2)] = null);

(statearr_25169_25196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (9))){
var inst_25116 = (state_25156[(7)]);
var inst_25132 = cljs.core.vec.call(null,inst_25116);
var state_25156__$1 = state_25156;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25156__$1,(11),out,inst_25132);
} else {
if((state_val_25157 === (5))){
var inst_25124 = (state_25156[(10)]);
var inst_25117 = (state_25156[(8)]);
var inst_25120 = (state_25156[(9)]);
var inst_25124__$1 = f.call(null,inst_25120);
var inst_25125 = cljs.core._EQ_.call(null,inst_25124__$1,inst_25117);
var inst_25126 = cljs.core.keyword_identical_QMARK_.call(null,inst_25117,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25127 = (inst_25125) || (inst_25126);
var state_25156__$1 = (function (){var statearr_25170 = state_25156;
(statearr_25170[(10)] = inst_25124__$1);

return statearr_25170;
})();
if(cljs.core.truth_(inst_25127)){
var statearr_25171_25197 = state_25156__$1;
(statearr_25171_25197[(1)] = (8));

} else {
var statearr_25172_25198 = state_25156__$1;
(statearr_25172_25198[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (14))){
var inst_25149 = (state_25156[(2)]);
var inst_25150 = cljs.core.async.close_BANG_.call(null,out);
var state_25156__$1 = (function (){var statearr_25174 = state_25156;
(statearr_25174[(13)] = inst_25149);

return statearr_25174;
})();
var statearr_25175_25199 = state_25156__$1;
(statearr_25175_25199[(2)] = inst_25150);

(statearr_25175_25199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (10))){
var inst_25139 = (state_25156[(2)]);
var state_25156__$1 = state_25156;
var statearr_25176_25200 = state_25156__$1;
(statearr_25176_25200[(2)] = inst_25139);

(statearr_25176_25200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (8))){
var inst_25124 = (state_25156[(10)]);
var inst_25116 = (state_25156[(7)]);
var inst_25120 = (state_25156[(9)]);
var inst_25129 = inst_25116.push(inst_25120);
var tmp25173 = inst_25116;
var inst_25116__$1 = tmp25173;
var inst_25117 = inst_25124;
var state_25156__$1 = (function (){var statearr_25177 = state_25156;
(statearr_25177[(7)] = inst_25116__$1);

(statearr_25177[(8)] = inst_25117);

(statearr_25177[(14)] = inst_25129);

return statearr_25177;
})();
var statearr_25178_25201 = state_25156__$1;
(statearr_25178_25201[(2)] = null);

(statearr_25178_25201[(1)] = (2));


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
});})(c__19665__auto___25187,out))
;
return ((function (switch__19644__auto__,c__19665__auto___25187,out){
return (function() {
var cljs$core$async$state_machine__19645__auto__ = null;
var cljs$core$async$state_machine__19645__auto____0 = (function (){
var statearr_25182 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25182[(0)] = cljs$core$async$state_machine__19645__auto__);

(statearr_25182[(1)] = (1));

return statearr_25182;
});
var cljs$core$async$state_machine__19645__auto____1 = (function (state_25156){
while(true){
var ret_value__19646__auto__ = (function (){try{while(true){
var result__19647__auto__ = switch__19644__auto__.call(null,state_25156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19647__auto__;
}
break;
}
}catch (e25183){if((e25183 instanceof Object)){
var ex__19648__auto__ = e25183;
var statearr_25184_25202 = state_25156;
(statearr_25184_25202[(5)] = ex__19648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25203 = state_25156;
state_25156 = G__25203;
continue;
} else {
return ret_value__19646__auto__;
}
break;
}
});
cljs$core$async$state_machine__19645__auto__ = function(state_25156){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19645__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19645__auto____1.call(this,state_25156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19645__auto____0;
cljs$core$async$state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19645__auto____1;
return cljs$core$async$state_machine__19645__auto__;
})()
;})(switch__19644__auto__,c__19665__auto___25187,out))
})();
var state__19667__auto__ = (function (){var statearr_25185 = f__19666__auto__.call(null);
(statearr_25185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19665__auto___25187);

return statearr_25185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19667__auto__);
});})(c__19665__auto___25187,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1440277348613