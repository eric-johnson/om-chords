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
if(typeof cljs.core.async.t26556 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26556 = (function (fn_handler,f,meta26557){
this.fn_handler = fn_handler;
this.f = f;
this.meta26557 = meta26557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26558,meta26557__$1){
var self__ = this;
var _26558__$1 = this;
return (new cljs.core.async.t26556(self__.fn_handler,self__.f,meta26557__$1));
});

cljs.core.async.t26556.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26558){
var self__ = this;
var _26558__$1 = this;
return self__.meta26557;
});

cljs.core.async.t26556.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26556.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t26556.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t26556.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta26557","meta26557",-1829254819,null)], null);
});

cljs.core.async.t26556.cljs$lang$type = true;

cljs.core.async.t26556.cljs$lang$ctorStr = "cljs.core.async/t26556";

cljs.core.async.t26556.cljs$lang$ctorPrWriter = (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t26556");
});

cljs.core.async.__GT_t26556 = (function cljs$core$async$fn_handler_$___GT_t26556(fn_handler__$1,f__$1,meta26557){
return (new cljs.core.async.t26556(fn_handler__$1,f__$1,meta26557));
});

}

return (new cljs.core.async.t26556(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var G__26560 = buff;
if(G__26560){
var bit__16743__auto__ = null;
if(cljs.core.truth_((function (){var or__16069__auto__ = bit__16743__auto__;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return G__26560.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__26560.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26560);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26560);
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
var G__26562 = arguments.length;
switch (G__26562) {
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
var G__26565 = arguments.length;
switch (G__26565) {
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
var val_26567 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26567);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26567,ret){
return (function (){
return fn1.call(null,val_26567);
});})(val_26567,ret))
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
var G__26569 = arguments.length;
switch (G__26569) {
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
var n__16954__auto___26571 = n;
var x_26572 = (0);
while(true){
if((x_26572 < n__16954__auto___26571)){
(a[x_26572] = (0));

var G__26573 = (x_26572 + (1));
x_26572 = G__26573;
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

var G__26574 = (i + (1));
i = G__26574;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t26578 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26578 = (function (alt_flag,flag,meta26579){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta26579 = meta26579;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26580,meta26579__$1){
var self__ = this;
var _26580__$1 = this;
return (new cljs.core.async.t26578(self__.alt_flag,self__.flag,meta26579__$1));
});})(flag))
;

cljs.core.async.t26578.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26580){
var self__ = this;
var _26580__$1 = this;
return self__.meta26579;
});})(flag))
;

cljs.core.async.t26578.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26578.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t26578.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t26578.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26579","meta26579",-929217992,null)], null);
});})(flag))
;

cljs.core.async.t26578.cljs$lang$type = true;

cljs.core.async.t26578.cljs$lang$ctorStr = "cljs.core.async/t26578";

cljs.core.async.t26578.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t26578");
});})(flag))
;

cljs.core.async.__GT_t26578 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t26578(alt_flag__$1,flag__$1,meta26579){
return (new cljs.core.async.t26578(alt_flag__$1,flag__$1,meta26579));
});})(flag))
;

}

return (new cljs.core.async.t26578(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t26584 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26584 = (function (alt_handler,flag,cb,meta26585){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta26585 = meta26585;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26586,meta26585__$1){
var self__ = this;
var _26586__$1 = this;
return (new cljs.core.async.t26584(self__.alt_handler,self__.flag,self__.cb,meta26585__$1));
});

cljs.core.async.t26584.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26586){
var self__ = this;
var _26586__$1 = this;
return self__.meta26585;
});

cljs.core.async.t26584.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26584.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t26584.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t26584.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26585","meta26585",1972144503,null)], null);
});

cljs.core.async.t26584.cljs$lang$type = true;

cljs.core.async.t26584.cljs$lang$ctorStr = "cljs.core.async/t26584";

cljs.core.async.t26584.cljs$lang$ctorPrWriter = (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t26584");
});

cljs.core.async.__GT_t26584 = (function cljs$core$async$alt_handler_$___GT_t26584(alt_handler__$1,flag__$1,cb__$1,meta26585){
return (new cljs.core.async.t26584(alt_handler__$1,flag__$1,cb__$1,meta26585));
});

}

return (new cljs.core.async.t26584(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__26587_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26587_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26588_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26588_SHARP_,port], null));
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
var G__26589 = (i + (1));
i = G__26589;
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

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26592){
var map__26593 = p__26592;
var map__26593__$1 = ((cljs.core.seq_QMARK_.call(null,map__26593))?cljs.core.apply.call(null,cljs.core.hash_map,map__26593):map__26593);
var opts = map__26593__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26590){
var G__26591 = cljs.core.first.call(null,seq26590);
var seq26590__$1 = cljs.core.next.call(null,seq26590);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26591,seq26590__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__26595 = arguments.length;
switch (G__26595) {
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
var c__20316__auto___26644 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20316__auto___26644){
return (function (){
var f__20317__auto__ = (function (){var switch__20254__auto__ = ((function (c__20316__auto___26644){
return (function (state_26619){
var state_val_26620 = (state_26619[(1)]);
if((state_val_26620 === (7))){
var inst_26615 = (state_26619[(2)]);
var state_26619__$1 = state_26619;
var statearr_26621_26645 = state_26619__$1;
(statearr_26621_26645[(2)] = inst_26615);

(statearr_26621_26645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26620 === (1))){
var state_26619__$1 = state_26619;
var statearr_26622_26646 = state_26619__$1;
(statearr_26622_26646[(2)] = null);

(statearr_26622_26646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26620 === (4))){
var inst_26598 = (state_26619[(7)]);
var inst_26598__$1 = (state_26619[(2)]);
var inst_26599 = (inst_26598__$1 == null);
var state_26619__$1 = (function (){var statearr_26623 = state_26619;
(statearr_26623[(7)] = inst_26598__$1);

return statearr_26623;
})();
if(cljs.core.truth_(inst_26599)){
var statearr_26624_26647 = state_26619__$1;
(statearr_26624_26647[(1)] = (5));

} else {
var statearr_26625_26648 = state_26619__$1;
(statearr_26625_26648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26620 === (13))){
var state_26619__$1 = state_26619;
var statearr_26626_26649 = state_26619__$1;
(statearr_26626_26649[(2)] = null);

(statearr_26626_26649[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26620 === (6))){
var inst_26598 = (state_26619[(7)]);
var state_26619__$1 = state_26619;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26619__$1,(11),to,inst_26598);
} else {
if((state_val_26620 === (3))){
var inst_26617 = (state_26619[(2)]);
var state_26619__$1 = state_26619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26619__$1,inst_26617);
} else {
if((state_val_26620 === (12))){
var state_26619__$1 = state_26619;
var statearr_26627_26650 = state_26619__$1;
(statearr_26627_26650[(2)] = null);

(statearr_26627_26650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26620 === (2))){
var state_26619__$1 = state_26619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26619__$1,(4),from);
} else {
if((state_val_26620 === (11))){
var inst_26608 = (state_26619[(2)]);
var state_26619__$1 = state_26619;
if(cljs.core.truth_(inst_26608)){
var statearr_26628_26651 = state_26619__$1;
(statearr_26628_26651[(1)] = (12));

} else {
var statearr_26629_26652 = state_26619__$1;
(statearr_26629_26652[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26620 === (9))){
var state_26619__$1 = state_26619;
var statearr_26630_26653 = state_26619__$1;
(statearr_26630_26653[(2)] = null);

(statearr_26630_26653[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26620 === (5))){
var state_26619__$1 = state_26619;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26631_26654 = state_26619__$1;
(statearr_26631_26654[(1)] = (8));

} else {
var statearr_26632_26655 = state_26619__$1;
(statearr_26632_26655[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26620 === (14))){
var inst_26613 = (state_26619[(2)]);
var state_26619__$1 = state_26619;
var statearr_26633_26656 = state_26619__$1;
(statearr_26633_26656[(2)] = inst_26613);

(statearr_26633_26656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26620 === (10))){
var inst_26605 = (state_26619[(2)]);
var state_26619__$1 = state_26619;
var statearr_26634_26657 = state_26619__$1;
(statearr_26634_26657[(2)] = inst_26605);

(statearr_26634_26657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26620 === (8))){
var inst_26602 = cljs.core.async.close_BANG_.call(null,to);
var state_26619__$1 = state_26619;
var statearr_26635_26658 = state_26619__$1;
(statearr_26635_26658[(2)] = inst_26602);

(statearr_26635_26658[(1)] = (10));


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
});})(c__20316__auto___26644))
;
return ((function (switch__20254__auto__,c__20316__auto___26644){
return (function() {
var cljs$core$async$state_machine__20255__auto__ = null;
var cljs$core$async$state_machine__20255__auto____0 = (function (){
var statearr_26639 = [null,null,null,null,null,null,null,null];
(statearr_26639[(0)] = cljs$core$async$state_machine__20255__auto__);

(statearr_26639[(1)] = (1));

return statearr_26639;
});
var cljs$core$async$state_machine__20255__auto____1 = (function (state_26619){
while(true){
var ret_value__20256__auto__ = (function (){try{while(true){
var result__20257__auto__ = switch__20254__auto__.call(null,state_26619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20257__auto__;
}
break;
}
}catch (e26640){if((e26640 instanceof Object)){
var ex__20258__auto__ = e26640;
var statearr_26641_26659 = state_26619;
(statearr_26641_26659[(5)] = ex__20258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26660 = state_26619;
state_26619 = G__26660;
continue;
} else {
return ret_value__20256__auto__;
}
break;
}
});
cljs$core$async$state_machine__20255__auto__ = function(state_26619){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20255__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20255__auto____1.call(this,state_26619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20255__auto____0;
cljs$core$async$state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20255__auto____1;
return cljs$core$async$state_machine__20255__auto__;
})()
;})(switch__20254__auto__,c__20316__auto___26644))
})();
var state__20318__auto__ = (function (){var statearr_26642 = f__20317__auto__.call(null);
(statearr_26642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20316__auto___26644);

return statearr_26642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20318__auto__);
});})(c__20316__auto___26644))
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
return (function (p__26844){
var vec__26845 = p__26844;
var v = cljs.core.nth.call(null,vec__26845,(0),null);
var p = cljs.core.nth.call(null,vec__26845,(1),null);
var job = vec__26845;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20316__auto___27027 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20316__auto___27027,res,vec__26845,v,p,job,jobs,results){
return (function (){
var f__20317__auto__ = (function (){var switch__20254__auto__ = ((function (c__20316__auto___27027,res,vec__26845,v,p,job,jobs,results){
return (function (state_26850){
var state_val_26851 = (state_26850[(1)]);
if((state_val_26851 === (1))){
var state_26850__$1 = state_26850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26850__$1,(2),res,v);
} else {
if((state_val_26851 === (2))){
var inst_26847 = (state_26850[(2)]);
var inst_26848 = cljs.core.async.close_BANG_.call(null,res);
var state_26850__$1 = (function (){var statearr_26852 = state_26850;
(statearr_26852[(7)] = inst_26847);

return statearr_26852;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26850__$1,inst_26848);
} else {
return null;
}
}
});})(c__20316__auto___27027,res,vec__26845,v,p,job,jobs,results))
;
return ((function (switch__20254__auto__,c__20316__auto___27027,res,vec__26845,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20255__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20255__auto____0 = (function (){
var statearr_26856 = [null,null,null,null,null,null,null,null];
(statearr_26856[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20255__auto__);

(statearr_26856[(1)] = (1));

return statearr_26856;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20255__auto____1 = (function (state_26850){
while(true){
var ret_value__20256__auto__ = (function (){try{while(true){
var result__20257__auto__ = switch__20254__auto__.call(null,state_26850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20257__auto__;
}
break;
}
}catch (e26857){if((e26857 instanceof Object)){
var ex__20258__auto__ = e26857;
var statearr_26858_27028 = state_26850;
(statearr_26858_27028[(5)] = ex__20258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27029 = state_26850;
state_26850 = G__27029;
continue;
} else {
return ret_value__20256__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20255__auto__ = function(state_26850){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20255__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20255__auto____1.call(this,state_26850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20255__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20255__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20255__auto__;
})()
;})(switch__20254__auto__,c__20316__auto___27027,res,vec__26845,v,p,job,jobs,results))
})();
var state__20318__auto__ = (function (){var statearr_26859 = f__20317__auto__.call(null);
(statearr_26859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20316__auto___27027);

return statearr_26859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20318__auto__);
});})(c__20316__auto___27027,res,vec__26845,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26860){
var vec__26861 = p__26860;
var v = cljs.core.nth.call(null,vec__26861,(0),null);
var p = cljs.core.nth.call(null,vec__26861,(1),null);
var job = vec__26861;
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
var n__16954__auto___27030 = n;
var __27031 = (0);
while(true){
if((__27031 < n__16954__auto___27030)){
var G__26862_27032 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26862_27032) {
case "compute":
var c__20316__auto___27034 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27031,c__20316__auto___27034,G__26862_27032,n__16954__auto___27030,jobs,results,process,async){
return (function (){
var f__20317__auto__ = (function (){var switch__20254__auto__ = ((function (__27031,c__20316__auto___27034,G__26862_27032,n__16954__auto___27030,jobs,results,process,async){
return (function (state_26875){
var state_val_26876 = (state_26875[(1)]);
if((state_val_26876 === (1))){
var state_26875__$1 = state_26875;
var statearr_26877_27035 = state_26875__$1;
(statearr_26877_27035[(2)] = null);

(statearr_26877_27035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26876 === (2))){
var state_26875__$1 = state_26875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26875__$1,(4),jobs);
} else {
if((state_val_26876 === (3))){
var inst_26873 = (state_26875[(2)]);
var state_26875__$1 = state_26875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26875__$1,inst_26873);
} else {
if((state_val_26876 === (4))){
var inst_26865 = (state_26875[(2)]);
var inst_26866 = process.call(null,inst_26865);
var state_26875__$1 = state_26875;
if(cljs.core.truth_(inst_26866)){
var statearr_26878_27036 = state_26875__$1;
(statearr_26878_27036[(1)] = (5));

} else {
var statearr_26879_27037 = state_26875__$1;
(statearr_26879_27037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26876 === (5))){
var state_26875__$1 = state_26875;
var statearr_26880_27038 = state_26875__$1;
(statearr_26880_27038[(2)] = null);

(statearr_26880_27038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26876 === (6))){
var state_26875__$1 = state_26875;
var statearr_26881_27039 = state_26875__$1;
(statearr_26881_27039[(2)] = null);

(statearr_26881_27039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26876 === (7))){
var inst_26871 = (state_26875[(2)]);
var state_26875__$1 = state_26875;
var statearr_26882_27040 = state_26875__$1;
(statearr_26882_27040[(2)] = inst_26871);

(statearr_26882_27040[(1)] = (3));


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
});})(__27031,c__20316__auto___27034,G__26862_27032,n__16954__auto___27030,jobs,results,process,async))
;
return ((function (__27031,switch__20254__auto__,c__20316__auto___27034,G__26862_27032,n__16954__auto___27030,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20255__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20255__auto____0 = (function (){
var statearr_26886 = [null,null,null,null,null,null,null];
(statearr_26886[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20255__auto__);

(statearr_26886[(1)] = (1));

return statearr_26886;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20255__auto____1 = (function (state_26875){
while(true){
var ret_value__20256__auto__ = (function (){try{while(true){
var result__20257__auto__ = switch__20254__auto__.call(null,state_26875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20257__auto__;
}
break;
}
}catch (e26887){if((e26887 instanceof Object)){
var ex__20258__auto__ = e26887;
var statearr_26888_27041 = state_26875;
(statearr_26888_27041[(5)] = ex__20258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27042 = state_26875;
state_26875 = G__27042;
continue;
} else {
return ret_value__20256__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20255__auto__ = function(state_26875){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20255__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20255__auto____1.call(this,state_26875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20255__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20255__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20255__auto__;
})()
;})(__27031,switch__20254__auto__,c__20316__auto___27034,G__26862_27032,n__16954__auto___27030,jobs,results,process,async))
})();
var state__20318__auto__ = (function (){var statearr_26889 = f__20317__auto__.call(null);
(statearr_26889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20316__auto___27034);

return statearr_26889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20318__auto__);
});})(__27031,c__20316__auto___27034,G__26862_27032,n__16954__auto___27030,jobs,results,process,async))
);


break;
case "async":
var c__20316__auto___27043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27031,c__20316__auto___27043,G__26862_27032,n__16954__auto___27030,jobs,results,process,async){
return (function (){
var f__20317__auto__ = (function (){var switch__20254__auto__ = ((function (__27031,c__20316__auto___27043,G__26862_27032,n__16954__auto___27030,jobs,results,process,async){
return (function (state_26902){
var state_val_26903 = (state_26902[(1)]);
if((state_val_26903 === (1))){
var state_26902__$1 = state_26902;
var statearr_26904_27044 = state_26902__$1;
(statearr_26904_27044[(2)] = null);

(statearr_26904_27044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (2))){
var state_26902__$1 = state_26902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26902__$1,(4),jobs);
} else {
if((state_val_26903 === (3))){
var inst_26900 = (state_26902[(2)]);
var state_26902__$1 = state_26902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26902__$1,inst_26900);
} else {
if((state_val_26903 === (4))){
var inst_26892 = (state_26902[(2)]);
var inst_26893 = async.call(null,inst_26892);
var state_26902__$1 = state_26902;
if(cljs.core.truth_(inst_26893)){
var statearr_26905_27045 = state_26902__$1;
(statearr_26905_27045[(1)] = (5));

} else {
var statearr_26906_27046 = state_26902__$1;
(statearr_26906_27046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (5))){
var state_26902__$1 = state_26902;
var statearr_26907_27047 = state_26902__$1;
(statearr_26907_27047[(2)] = null);

(statearr_26907_27047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (6))){
var state_26902__$1 = state_26902;
var statearr_26908_27048 = state_26902__$1;
(statearr_26908_27048[(2)] = null);

(statearr_26908_27048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (7))){
var inst_26898 = (state_26902[(2)]);
var state_26902__$1 = state_26902;
var statearr_26909_27049 = state_26902__$1;
(statearr_26909_27049[(2)] = inst_26898);

(statearr_26909_27049[(1)] = (3));


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
});})(__27031,c__20316__auto___27043,G__26862_27032,n__16954__auto___27030,jobs,results,process,async))
;
return ((function (__27031,switch__20254__auto__,c__20316__auto___27043,G__26862_27032,n__16954__auto___27030,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20255__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20255__auto____0 = (function (){
var statearr_26913 = [null,null,null,null,null,null,null];
(statearr_26913[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20255__auto__);

(statearr_26913[(1)] = (1));

return statearr_26913;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20255__auto____1 = (function (state_26902){
while(true){
var ret_value__20256__auto__ = (function (){try{while(true){
var result__20257__auto__ = switch__20254__auto__.call(null,state_26902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20257__auto__;
}
break;
}
}catch (e26914){if((e26914 instanceof Object)){
var ex__20258__auto__ = e26914;
var statearr_26915_27050 = state_26902;
(statearr_26915_27050[(5)] = ex__20258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27051 = state_26902;
state_26902 = G__27051;
continue;
} else {
return ret_value__20256__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20255__auto__ = function(state_26902){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20255__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20255__auto____1.call(this,state_26902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20255__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20255__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20255__auto__;
})()
;})(__27031,switch__20254__auto__,c__20316__auto___27043,G__26862_27032,n__16954__auto___27030,jobs,results,process,async))
})();
var state__20318__auto__ = (function (){var statearr_26916 = f__20317__auto__.call(null);
(statearr_26916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20316__auto___27043);

return statearr_26916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20318__auto__);
});})(__27031,c__20316__auto___27043,G__26862_27032,n__16954__auto___27030,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27052 = (__27031 + (1));
__27031 = G__27052;
continue;
} else {
}
break;
}

var c__20316__auto___27053 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20316__auto___27053,jobs,results,process,async){
return (function (){
var f__20317__auto__ = (function (){var switch__20254__auto__ = ((function (c__20316__auto___27053,jobs,results,process,async){
return (function (state_26938){
var state_val_26939 = (state_26938[(1)]);
if((state_val_26939 === (1))){
var state_26938__$1 = state_26938;
var statearr_26940_27054 = state_26938__$1;
(statearr_26940_27054[(2)] = null);

(statearr_26940_27054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26939 === (2))){
var state_26938__$1 = state_26938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26938__$1,(4),from);
} else {
if((state_val_26939 === (3))){
var inst_26936 = (state_26938[(2)]);
var state_26938__$1 = state_26938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26938__$1,inst_26936);
} else {
if((state_val_26939 === (4))){
var inst_26919 = (state_26938[(7)]);
var inst_26919__$1 = (state_26938[(2)]);
var inst_26920 = (inst_26919__$1 == null);
var state_26938__$1 = (function (){var statearr_26941 = state_26938;
(statearr_26941[(7)] = inst_26919__$1);

return statearr_26941;
})();
if(cljs.core.truth_(inst_26920)){
var statearr_26942_27055 = state_26938__$1;
(statearr_26942_27055[(1)] = (5));

} else {
var statearr_26943_27056 = state_26938__$1;
(statearr_26943_27056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26939 === (5))){
var inst_26922 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26938__$1 = state_26938;
var statearr_26944_27057 = state_26938__$1;
(statearr_26944_27057[(2)] = inst_26922);

(statearr_26944_27057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26939 === (6))){
var inst_26919 = (state_26938[(7)]);
var inst_26924 = (state_26938[(8)]);
var inst_26924__$1 = cljs.core.async.chan.call(null,(1));
var inst_26925 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26926 = [inst_26919,inst_26924__$1];
var inst_26927 = (new cljs.core.PersistentVector(null,2,(5),inst_26925,inst_26926,null));
var state_26938__$1 = (function (){var statearr_26945 = state_26938;
(statearr_26945[(8)] = inst_26924__$1);

return statearr_26945;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26938__$1,(8),jobs,inst_26927);
} else {
if((state_val_26939 === (7))){
var inst_26934 = (state_26938[(2)]);
var state_26938__$1 = state_26938;
var statearr_26946_27058 = state_26938__$1;
(statearr_26946_27058[(2)] = inst_26934);

(statearr_26946_27058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26939 === (8))){
var inst_26924 = (state_26938[(8)]);
var inst_26929 = (state_26938[(2)]);
var state_26938__$1 = (function (){var statearr_26947 = state_26938;
(statearr_26947[(9)] = inst_26929);

return statearr_26947;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26938__$1,(9),results,inst_26924);
} else {
if((state_val_26939 === (9))){
var inst_26931 = (state_26938[(2)]);
var state_26938__$1 = (function (){var statearr_26948 = state_26938;
(statearr_26948[(10)] = inst_26931);

return statearr_26948;
})();
var statearr_26949_27059 = state_26938__$1;
(statearr_26949_27059[(2)] = null);

(statearr_26949_27059[(1)] = (2));


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
});})(c__20316__auto___27053,jobs,results,process,async))
;
return ((function (switch__20254__auto__,c__20316__auto___27053,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20255__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20255__auto____0 = (function (){
var statearr_26953 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26953[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20255__auto__);

(statearr_26953[(1)] = (1));

return statearr_26953;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20255__auto____1 = (function (state_26938){
while(true){
var ret_value__20256__auto__ = (function (){try{while(true){
var result__20257__auto__ = switch__20254__auto__.call(null,state_26938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20257__auto__;
}
break;
}
}catch (e26954){if((e26954 instanceof Object)){
var ex__20258__auto__ = e26954;
var statearr_26955_27060 = state_26938;
(statearr_26955_27060[(5)] = ex__20258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27061 = state_26938;
state_26938 = G__27061;
continue;
} else {
return ret_value__20256__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20255__auto__ = function(state_26938){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20255__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20255__auto____1.call(this,state_26938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20255__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20255__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20255__auto__;
})()
;})(switch__20254__auto__,c__20316__auto___27053,jobs,results,process,async))
})();
var state__20318__auto__ = (function (){var statearr_26956 = f__20317__auto__.call(null);
(statearr_26956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20316__auto___27053);

return statearr_26956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20318__auto__);
});})(c__20316__auto___27053,jobs,results,process,async))
);


var c__20316__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20316__auto__,jobs,results,process,async){
return (function (){
var f__20317__auto__ = (function (){var switch__20254__auto__ = ((function (c__20316__auto__,jobs,results,process,async){
return (function (state_26994){
var state_val_26995 = (state_26994[(1)]);
if((state_val_26995 === (7))){
var inst_26990 = (state_26994[(2)]);
var state_26994__$1 = state_26994;
var statearr_26996_27062 = state_26994__$1;
(statearr_26996_27062[(2)] = inst_26990);

(statearr_26996_27062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26995 === (20))){
var state_26994__$1 = state_26994;
var statearr_26997_27063 = state_26994__$1;
(statearr_26997_27063[(2)] = null);

(statearr_26997_27063[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26995 === (1))){
var state_26994__$1 = state_26994;
var statearr_26998_27064 = state_26994__$1;
(statearr_26998_27064[(2)] = null);

(statearr_26998_27064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26995 === (4))){
var inst_26959 = (state_26994[(7)]);
var inst_26959__$1 = (state_26994[(2)]);
var inst_26960 = (inst_26959__$1 == null);
var state_26994__$1 = (function (){var statearr_26999 = state_26994;
(statearr_26999[(7)] = inst_26959__$1);

return statearr_26999;
})();
if(cljs.core.truth_(inst_26960)){
var statearr_27000_27065 = state_26994__$1;
(statearr_27000_27065[(1)] = (5));

} else {
var statearr_27001_27066 = state_26994__$1;
(statearr_27001_27066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26995 === (15))){
var inst_26972 = (state_26994[(8)]);
var state_26994__$1 = state_26994;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26994__$1,(18),to,inst_26972);
} else {
if((state_val_26995 === (21))){
var inst_26985 = (state_26994[(2)]);
var state_26994__$1 = state_26994;
var statearr_27002_27067 = state_26994__$1;
(statearr_27002_27067[(2)] = inst_26985);

(statearr_27002_27067[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26995 === (13))){
var inst_26987 = (state_26994[(2)]);
var state_26994__$1 = (function (){var statearr_27003 = state_26994;
(statearr_27003[(9)] = inst_26987);

return statearr_27003;
})();
var statearr_27004_27068 = state_26994__$1;
(statearr_27004_27068[(2)] = null);

(statearr_27004_27068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26995 === (6))){
var inst_26959 = (state_26994[(7)]);
var state_26994__$1 = state_26994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26994__$1,(11),inst_26959);
} else {
if((state_val_26995 === (17))){
var inst_26980 = (state_26994[(2)]);
var state_26994__$1 = state_26994;
if(cljs.core.truth_(inst_26980)){
var statearr_27005_27069 = state_26994__$1;
(statearr_27005_27069[(1)] = (19));

} else {
var statearr_27006_27070 = state_26994__$1;
(statearr_27006_27070[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26995 === (3))){
var inst_26992 = (state_26994[(2)]);
var state_26994__$1 = state_26994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26994__$1,inst_26992);
} else {
if((state_val_26995 === (12))){
var inst_26969 = (state_26994[(10)]);
var state_26994__$1 = state_26994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26994__$1,(14),inst_26969);
} else {
if((state_val_26995 === (2))){
var state_26994__$1 = state_26994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26994__$1,(4),results);
} else {
if((state_val_26995 === (19))){
var state_26994__$1 = state_26994;
var statearr_27007_27071 = state_26994__$1;
(statearr_27007_27071[(2)] = null);

(statearr_27007_27071[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26995 === (11))){
var inst_26969 = (state_26994[(2)]);
var state_26994__$1 = (function (){var statearr_27008 = state_26994;
(statearr_27008[(10)] = inst_26969);

return statearr_27008;
})();
var statearr_27009_27072 = state_26994__$1;
(statearr_27009_27072[(2)] = null);

(statearr_27009_27072[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26995 === (9))){
var state_26994__$1 = state_26994;
var statearr_27010_27073 = state_26994__$1;
(statearr_27010_27073[(2)] = null);

(statearr_27010_27073[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26995 === (5))){
var state_26994__$1 = state_26994;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27011_27074 = state_26994__$1;
(statearr_27011_27074[(1)] = (8));

} else {
var statearr_27012_27075 = state_26994__$1;
(statearr_27012_27075[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26995 === (14))){
var inst_26974 = (state_26994[(11)]);
var inst_26972 = (state_26994[(8)]);
var inst_26972__$1 = (state_26994[(2)]);
var inst_26973 = (inst_26972__$1 == null);
var inst_26974__$1 = cljs.core.not.call(null,inst_26973);
var state_26994__$1 = (function (){var statearr_27013 = state_26994;
(statearr_27013[(11)] = inst_26974__$1);

(statearr_27013[(8)] = inst_26972__$1);

return statearr_27013;
})();
if(inst_26974__$1){
var statearr_27014_27076 = state_26994__$1;
(statearr_27014_27076[(1)] = (15));

} else {
var statearr_27015_27077 = state_26994__$1;
(statearr_27015_27077[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26995 === (16))){
var inst_26974 = (state_26994[(11)]);
var state_26994__$1 = state_26994;
var statearr_27016_27078 = state_26994__$1;
(statearr_27016_27078[(2)] = inst_26974);

(statearr_27016_27078[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26995 === (10))){
var inst_26966 = (state_26994[(2)]);
var state_26994__$1 = state_26994;
var statearr_27017_27079 = state_26994__$1;
(statearr_27017_27079[(2)] = inst_26966);

(statearr_27017_27079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26995 === (18))){
var inst_26977 = (state_26994[(2)]);
var state_26994__$1 = state_26994;
var statearr_27018_27080 = state_26994__$1;
(statearr_27018_27080[(2)] = inst_26977);

(statearr_27018_27080[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26995 === (8))){
var inst_26963 = cljs.core.async.close_BANG_.call(null,to);
var state_26994__$1 = state_26994;
var statearr_27019_27081 = state_26994__$1;
(statearr_27019_27081[(2)] = inst_26963);

(statearr_27019_27081[(1)] = (10));


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
});})(c__20316__auto__,jobs,results,process,async))
;
return ((function (switch__20254__auto__,c__20316__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20255__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20255__auto____0 = (function (){
var statearr_27023 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27023[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20255__auto__);

(statearr_27023[(1)] = (1));

return statearr_27023;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20255__auto____1 = (function (state_26994){
while(true){
var ret_value__20256__auto__ = (function (){try{while(true){
var result__20257__auto__ = switch__20254__auto__.call(null,state_26994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20257__auto__;
}
break;
}
}catch (e27024){if((e27024 instanceof Object)){
var ex__20258__auto__ = e27024;
var statearr_27025_27082 = state_26994;
(statearr_27025_27082[(5)] = ex__20258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27083 = state_26994;
state_26994 = G__27083;
continue;
} else {
return ret_value__20256__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20255__auto__ = function(state_26994){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20255__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20255__auto____1.call(this,state_26994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20255__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20255__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20255__auto__;
})()
;})(switch__20254__auto__,c__20316__auto__,jobs,results,process,async))
})();
var state__20318__auto__ = (function (){var statearr_27026 = f__20317__auto__.call(null);
(statearr_27026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20316__auto__);

return statearr_27026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20318__auto__);
});})(c__20316__auto__,jobs,results,process,async))
);

return c__20316__auto__;
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
var G__27085 = arguments.length;
switch (G__27085) {
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
var G__27088 = arguments.length;
switch (G__27088) {
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
var G__27091 = arguments.length;
switch (G__27091) {
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
var c__20316__auto___27143 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20316__auto___27143,tc,fc){
return (function (){
var f__20317__auto__ = (function (){var switch__20254__auto__ = ((function (c__20316__auto___27143,tc,fc){
return (function (state_27117){
var state_val_27118 = (state_27117[(1)]);
if((state_val_27118 === (7))){
var inst_27113 = (state_27117[(2)]);
var state_27117__$1 = state_27117;
var statearr_27119_27144 = state_27117__$1;
(statearr_27119_27144[(2)] = inst_27113);

(statearr_27119_27144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27118 === (1))){
var state_27117__$1 = state_27117;
var statearr_27120_27145 = state_27117__$1;
(statearr_27120_27145[(2)] = null);

(statearr_27120_27145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27118 === (4))){
var inst_27094 = (state_27117[(7)]);
var inst_27094__$1 = (state_27117[(2)]);
var inst_27095 = (inst_27094__$1 == null);
var state_27117__$1 = (function (){var statearr_27121 = state_27117;
(statearr_27121[(7)] = inst_27094__$1);

return statearr_27121;
})();
if(cljs.core.truth_(inst_27095)){
var statearr_27122_27146 = state_27117__$1;
(statearr_27122_27146[(1)] = (5));

} else {
var statearr_27123_27147 = state_27117__$1;
(statearr_27123_27147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27118 === (13))){
var state_27117__$1 = state_27117;
var statearr_27124_27148 = state_27117__$1;
(statearr_27124_27148[(2)] = null);

(statearr_27124_27148[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27118 === (6))){
var inst_27094 = (state_27117[(7)]);
var inst_27100 = p.call(null,inst_27094);
var state_27117__$1 = state_27117;
if(cljs.core.truth_(inst_27100)){
var statearr_27125_27149 = state_27117__$1;
(statearr_27125_27149[(1)] = (9));

} else {
var statearr_27126_27150 = state_27117__$1;
(statearr_27126_27150[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27118 === (3))){
var inst_27115 = (state_27117[(2)]);
var state_27117__$1 = state_27117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27117__$1,inst_27115);
} else {
if((state_val_27118 === (12))){
var state_27117__$1 = state_27117;
var statearr_27127_27151 = state_27117__$1;
(statearr_27127_27151[(2)] = null);

(statearr_27127_27151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27118 === (2))){
var state_27117__$1 = state_27117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27117__$1,(4),ch);
} else {
if((state_val_27118 === (11))){
var inst_27094 = (state_27117[(7)]);
var inst_27104 = (state_27117[(2)]);
var state_27117__$1 = state_27117;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27117__$1,(8),inst_27104,inst_27094);
} else {
if((state_val_27118 === (9))){
var state_27117__$1 = state_27117;
var statearr_27128_27152 = state_27117__$1;
(statearr_27128_27152[(2)] = tc);

(statearr_27128_27152[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27118 === (5))){
var inst_27097 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27098 = cljs.core.async.close_BANG_.call(null,fc);
var state_27117__$1 = (function (){var statearr_27129 = state_27117;
(statearr_27129[(8)] = inst_27097);

return statearr_27129;
})();
var statearr_27130_27153 = state_27117__$1;
(statearr_27130_27153[(2)] = inst_27098);

(statearr_27130_27153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27118 === (14))){
var inst_27111 = (state_27117[(2)]);
var state_27117__$1 = state_27117;
var statearr_27131_27154 = state_27117__$1;
(statearr_27131_27154[(2)] = inst_27111);

(statearr_27131_27154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27118 === (10))){
var state_27117__$1 = state_27117;
var statearr_27132_27155 = state_27117__$1;
(statearr_27132_27155[(2)] = fc);

(statearr_27132_27155[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27118 === (8))){
var inst_27106 = (state_27117[(2)]);
var state_27117__$1 = state_27117;
if(cljs.core.truth_(inst_27106)){
var statearr_27133_27156 = state_27117__$1;
(statearr_27133_27156[(1)] = (12));

} else {
var statearr_27134_27157 = state_27117__$1;
(statearr_27134_27157[(1)] = (13));

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
});})(c__20316__auto___27143,tc,fc))
;
return ((function (switch__20254__auto__,c__20316__auto___27143,tc,fc){
return (function() {
var cljs$core$async$state_machine__20255__auto__ = null;
var cljs$core$async$state_machine__20255__auto____0 = (function (){
var statearr_27138 = [null,null,null,null,null,null,null,null,null];
(statearr_27138[(0)] = cljs$core$async$state_machine__20255__auto__);

(statearr_27138[(1)] = (1));

return statearr_27138;
});
var cljs$core$async$state_machine__20255__auto____1 = (function (state_27117){
while(true){
var ret_value__20256__auto__ = (function (){try{while(true){
var result__20257__auto__ = switch__20254__auto__.call(null,state_27117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20257__auto__;
}
break;
}
}catch (e27139){if((e27139 instanceof Object)){
var ex__20258__auto__ = e27139;
var statearr_27140_27158 = state_27117;
(statearr_27140_27158[(5)] = ex__20258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27159 = state_27117;
state_27117 = G__27159;
continue;
} else {
return ret_value__20256__auto__;
}
break;
}
});
cljs$core$async$state_machine__20255__auto__ = function(state_27117){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20255__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20255__auto____1.call(this,state_27117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20255__auto____0;
cljs$core$async$state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20255__auto____1;
return cljs$core$async$state_machine__20255__auto__;
})()
;})(switch__20254__auto__,c__20316__auto___27143,tc,fc))
})();
var state__20318__auto__ = (function (){var statearr_27141 = f__20317__auto__.call(null);
(statearr_27141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20316__auto___27143);

return statearr_27141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20318__auto__);
});})(c__20316__auto___27143,tc,fc))
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
var c__20316__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20316__auto__){
return (function (){
var f__20317__auto__ = (function (){var switch__20254__auto__ = ((function (c__20316__auto__){
return (function (state_27206){
var state_val_27207 = (state_27206[(1)]);
if((state_val_27207 === (1))){
var inst_27192 = init;
var state_27206__$1 = (function (){var statearr_27208 = state_27206;
(statearr_27208[(7)] = inst_27192);

return statearr_27208;
})();
var statearr_27209_27224 = state_27206__$1;
(statearr_27209_27224[(2)] = null);

(statearr_27209_27224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27207 === (2))){
var state_27206__$1 = state_27206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27206__$1,(4),ch);
} else {
if((state_val_27207 === (3))){
var inst_27204 = (state_27206[(2)]);
var state_27206__$1 = state_27206;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27206__$1,inst_27204);
} else {
if((state_val_27207 === (4))){
var inst_27195 = (state_27206[(8)]);
var inst_27195__$1 = (state_27206[(2)]);
var inst_27196 = (inst_27195__$1 == null);
var state_27206__$1 = (function (){var statearr_27210 = state_27206;
(statearr_27210[(8)] = inst_27195__$1);

return statearr_27210;
})();
if(cljs.core.truth_(inst_27196)){
var statearr_27211_27225 = state_27206__$1;
(statearr_27211_27225[(1)] = (5));

} else {
var statearr_27212_27226 = state_27206__$1;
(statearr_27212_27226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27207 === (5))){
var inst_27192 = (state_27206[(7)]);
var state_27206__$1 = state_27206;
var statearr_27213_27227 = state_27206__$1;
(statearr_27213_27227[(2)] = inst_27192);

(statearr_27213_27227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27207 === (6))){
var inst_27192 = (state_27206[(7)]);
var inst_27195 = (state_27206[(8)]);
var inst_27199 = f.call(null,inst_27192,inst_27195);
var inst_27192__$1 = inst_27199;
var state_27206__$1 = (function (){var statearr_27214 = state_27206;
(statearr_27214[(7)] = inst_27192__$1);

return statearr_27214;
})();
var statearr_27215_27228 = state_27206__$1;
(statearr_27215_27228[(2)] = null);

(statearr_27215_27228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27207 === (7))){
var inst_27202 = (state_27206[(2)]);
var state_27206__$1 = state_27206;
var statearr_27216_27229 = state_27206__$1;
(statearr_27216_27229[(2)] = inst_27202);

(statearr_27216_27229[(1)] = (3));


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
});})(c__20316__auto__))
;
return ((function (switch__20254__auto__,c__20316__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20255__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20255__auto____0 = (function (){
var statearr_27220 = [null,null,null,null,null,null,null,null,null];
(statearr_27220[(0)] = cljs$core$async$reduce_$_state_machine__20255__auto__);

(statearr_27220[(1)] = (1));

return statearr_27220;
});
var cljs$core$async$reduce_$_state_machine__20255__auto____1 = (function (state_27206){
while(true){
var ret_value__20256__auto__ = (function (){try{while(true){
var result__20257__auto__ = switch__20254__auto__.call(null,state_27206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20257__auto__;
}
break;
}
}catch (e27221){if((e27221 instanceof Object)){
var ex__20258__auto__ = e27221;
var statearr_27222_27230 = state_27206;
(statearr_27222_27230[(5)] = ex__20258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27231 = state_27206;
state_27206 = G__27231;
continue;
} else {
return ret_value__20256__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20255__auto__ = function(state_27206){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20255__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20255__auto____1.call(this,state_27206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20255__auto____0;
cljs$core$async$reduce_$_state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20255__auto____1;
return cljs$core$async$reduce_$_state_machine__20255__auto__;
})()
;})(switch__20254__auto__,c__20316__auto__))
})();
var state__20318__auto__ = (function (){var statearr_27223 = f__20317__auto__.call(null);
(statearr_27223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20316__auto__);

return statearr_27223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20318__auto__);
});})(c__20316__auto__))
);

return c__20316__auto__;
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
var G__27233 = arguments.length;
switch (G__27233) {
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
var c__20316__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20316__auto__){
return (function (){
var f__20317__auto__ = (function (){var switch__20254__auto__ = ((function (c__20316__auto__){
return (function (state_27258){
var state_val_27259 = (state_27258[(1)]);
if((state_val_27259 === (7))){
var inst_27240 = (state_27258[(2)]);
var state_27258__$1 = state_27258;
var statearr_27260_27284 = state_27258__$1;
(statearr_27260_27284[(2)] = inst_27240);

(statearr_27260_27284[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27259 === (1))){
var inst_27234 = cljs.core.seq.call(null,coll);
var inst_27235 = inst_27234;
var state_27258__$1 = (function (){var statearr_27261 = state_27258;
(statearr_27261[(7)] = inst_27235);

return statearr_27261;
})();
var statearr_27262_27285 = state_27258__$1;
(statearr_27262_27285[(2)] = null);

(statearr_27262_27285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27259 === (4))){
var inst_27235 = (state_27258[(7)]);
var inst_27238 = cljs.core.first.call(null,inst_27235);
var state_27258__$1 = state_27258;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27258__$1,(7),ch,inst_27238);
} else {
if((state_val_27259 === (13))){
var inst_27252 = (state_27258[(2)]);
var state_27258__$1 = state_27258;
var statearr_27263_27286 = state_27258__$1;
(statearr_27263_27286[(2)] = inst_27252);

(statearr_27263_27286[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27259 === (6))){
var inst_27243 = (state_27258[(2)]);
var state_27258__$1 = state_27258;
if(cljs.core.truth_(inst_27243)){
var statearr_27264_27287 = state_27258__$1;
(statearr_27264_27287[(1)] = (8));

} else {
var statearr_27265_27288 = state_27258__$1;
(statearr_27265_27288[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27259 === (3))){
var inst_27256 = (state_27258[(2)]);
var state_27258__$1 = state_27258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27258__$1,inst_27256);
} else {
if((state_val_27259 === (12))){
var state_27258__$1 = state_27258;
var statearr_27266_27289 = state_27258__$1;
(statearr_27266_27289[(2)] = null);

(statearr_27266_27289[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27259 === (2))){
var inst_27235 = (state_27258[(7)]);
var state_27258__$1 = state_27258;
if(cljs.core.truth_(inst_27235)){
var statearr_27267_27290 = state_27258__$1;
(statearr_27267_27290[(1)] = (4));

} else {
var statearr_27268_27291 = state_27258__$1;
(statearr_27268_27291[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27259 === (11))){
var inst_27249 = cljs.core.async.close_BANG_.call(null,ch);
var state_27258__$1 = state_27258;
var statearr_27269_27292 = state_27258__$1;
(statearr_27269_27292[(2)] = inst_27249);

(statearr_27269_27292[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27259 === (9))){
var state_27258__$1 = state_27258;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27270_27293 = state_27258__$1;
(statearr_27270_27293[(1)] = (11));

} else {
var statearr_27271_27294 = state_27258__$1;
(statearr_27271_27294[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27259 === (5))){
var inst_27235 = (state_27258[(7)]);
var state_27258__$1 = state_27258;
var statearr_27272_27295 = state_27258__$1;
(statearr_27272_27295[(2)] = inst_27235);

(statearr_27272_27295[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27259 === (10))){
var inst_27254 = (state_27258[(2)]);
var state_27258__$1 = state_27258;
var statearr_27273_27296 = state_27258__$1;
(statearr_27273_27296[(2)] = inst_27254);

(statearr_27273_27296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27259 === (8))){
var inst_27235 = (state_27258[(7)]);
var inst_27245 = cljs.core.next.call(null,inst_27235);
var inst_27235__$1 = inst_27245;
var state_27258__$1 = (function (){var statearr_27274 = state_27258;
(statearr_27274[(7)] = inst_27235__$1);

return statearr_27274;
})();
var statearr_27275_27297 = state_27258__$1;
(statearr_27275_27297[(2)] = null);

(statearr_27275_27297[(1)] = (2));


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
});})(c__20316__auto__))
;
return ((function (switch__20254__auto__,c__20316__auto__){
return (function() {
var cljs$core$async$state_machine__20255__auto__ = null;
var cljs$core$async$state_machine__20255__auto____0 = (function (){
var statearr_27279 = [null,null,null,null,null,null,null,null];
(statearr_27279[(0)] = cljs$core$async$state_machine__20255__auto__);

(statearr_27279[(1)] = (1));

return statearr_27279;
});
var cljs$core$async$state_machine__20255__auto____1 = (function (state_27258){
while(true){
var ret_value__20256__auto__ = (function (){try{while(true){
var result__20257__auto__ = switch__20254__auto__.call(null,state_27258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20257__auto__;
}
break;
}
}catch (e27280){if((e27280 instanceof Object)){
var ex__20258__auto__ = e27280;
var statearr_27281_27298 = state_27258;
(statearr_27281_27298[(5)] = ex__20258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27299 = state_27258;
state_27258 = G__27299;
continue;
} else {
return ret_value__20256__auto__;
}
break;
}
});
cljs$core$async$state_machine__20255__auto__ = function(state_27258){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20255__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20255__auto____1.call(this,state_27258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20255__auto____0;
cljs$core$async$state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20255__auto____1;
return cljs$core$async$state_machine__20255__auto__;
})()
;})(switch__20254__auto__,c__20316__auto__))
})();
var state__20318__auto__ = (function (){var statearr_27282 = f__20317__auto__.call(null);
(statearr_27282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20316__auto__);

return statearr_27282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20318__auto__);
});})(c__20316__auto__))
);

return c__20316__auto__;
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

cljs.core.async.Mux = (function (){var obj27301 = {};
return obj27301;
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


cljs.core.async.Mult = (function (){var obj27303 = {};
return obj27303;
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
if(typeof cljs.core.async.t27525 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27525 = (function (mult,ch,cs,meta27526){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta27526 = meta27526;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27527,meta27526__$1){
var self__ = this;
var _27527__$1 = this;
return (new cljs.core.async.t27525(self__.mult,self__.ch,self__.cs,meta27526__$1));
});})(cs))
;

cljs.core.async.t27525.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27527){
var self__ = this;
var _27527__$1 = this;
return self__.meta27526;
});})(cs))
;

cljs.core.async.t27525.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27525.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t27525.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t27525.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t27525.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t27525.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t27525.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27526","meta27526",1890518016,null)], null);
});})(cs))
;

cljs.core.async.t27525.cljs$lang$type = true;

cljs.core.async.t27525.cljs$lang$ctorStr = "cljs.core.async/t27525";

cljs.core.async.t27525.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t27525");
});})(cs))
;

cljs.core.async.__GT_t27525 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t27525(mult__$1,ch__$1,cs__$1,meta27526){
return (new cljs.core.async.t27525(mult__$1,ch__$1,cs__$1,meta27526));
});})(cs))
;

}

return (new cljs.core.async.t27525(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__20316__auto___27746 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20316__auto___27746,cs,m,dchan,dctr,done){
return (function (){
var f__20317__auto__ = (function (){var switch__20254__auto__ = ((function (c__20316__auto___27746,cs,m,dchan,dctr,done){
return (function (state_27658){
var state_val_27659 = (state_27658[(1)]);
if((state_val_27659 === (7))){
var inst_27654 = (state_27658[(2)]);
var state_27658__$1 = state_27658;
var statearr_27660_27747 = state_27658__$1;
(statearr_27660_27747[(2)] = inst_27654);

(statearr_27660_27747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (20))){
var inst_27559 = (state_27658[(7)]);
var inst_27569 = cljs.core.first.call(null,inst_27559);
var inst_27570 = cljs.core.nth.call(null,inst_27569,(0),null);
var inst_27571 = cljs.core.nth.call(null,inst_27569,(1),null);
var state_27658__$1 = (function (){var statearr_27661 = state_27658;
(statearr_27661[(8)] = inst_27570);

return statearr_27661;
})();
if(cljs.core.truth_(inst_27571)){
var statearr_27662_27748 = state_27658__$1;
(statearr_27662_27748[(1)] = (22));

} else {
var statearr_27663_27749 = state_27658__$1;
(statearr_27663_27749[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (27))){
var inst_27601 = (state_27658[(9)]);
var inst_27599 = (state_27658[(10)]);
var inst_27606 = (state_27658[(11)]);
var inst_27530 = (state_27658[(12)]);
var inst_27606__$1 = cljs.core._nth.call(null,inst_27599,inst_27601);
var inst_27607 = cljs.core.async.put_BANG_.call(null,inst_27606__$1,inst_27530,done);
var state_27658__$1 = (function (){var statearr_27664 = state_27658;
(statearr_27664[(11)] = inst_27606__$1);

return statearr_27664;
})();
if(cljs.core.truth_(inst_27607)){
var statearr_27665_27750 = state_27658__$1;
(statearr_27665_27750[(1)] = (30));

} else {
var statearr_27666_27751 = state_27658__$1;
(statearr_27666_27751[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (1))){
var state_27658__$1 = state_27658;
var statearr_27667_27752 = state_27658__$1;
(statearr_27667_27752[(2)] = null);

(statearr_27667_27752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (24))){
var inst_27559 = (state_27658[(7)]);
var inst_27576 = (state_27658[(2)]);
var inst_27577 = cljs.core.next.call(null,inst_27559);
var inst_27539 = inst_27577;
var inst_27540 = null;
var inst_27541 = (0);
var inst_27542 = (0);
var state_27658__$1 = (function (){var statearr_27668 = state_27658;
(statearr_27668[(13)] = inst_27542);

(statearr_27668[(14)] = inst_27540);

(statearr_27668[(15)] = inst_27576);

(statearr_27668[(16)] = inst_27541);

(statearr_27668[(17)] = inst_27539);

return statearr_27668;
})();
var statearr_27669_27753 = state_27658__$1;
(statearr_27669_27753[(2)] = null);

(statearr_27669_27753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (39))){
var state_27658__$1 = state_27658;
var statearr_27673_27754 = state_27658__$1;
(statearr_27673_27754[(2)] = null);

(statearr_27673_27754[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (4))){
var inst_27530 = (state_27658[(12)]);
var inst_27530__$1 = (state_27658[(2)]);
var inst_27531 = (inst_27530__$1 == null);
var state_27658__$1 = (function (){var statearr_27674 = state_27658;
(statearr_27674[(12)] = inst_27530__$1);

return statearr_27674;
})();
if(cljs.core.truth_(inst_27531)){
var statearr_27675_27755 = state_27658__$1;
(statearr_27675_27755[(1)] = (5));

} else {
var statearr_27676_27756 = state_27658__$1;
(statearr_27676_27756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (15))){
var inst_27542 = (state_27658[(13)]);
var inst_27540 = (state_27658[(14)]);
var inst_27541 = (state_27658[(16)]);
var inst_27539 = (state_27658[(17)]);
var inst_27555 = (state_27658[(2)]);
var inst_27556 = (inst_27542 + (1));
var tmp27670 = inst_27540;
var tmp27671 = inst_27541;
var tmp27672 = inst_27539;
var inst_27539__$1 = tmp27672;
var inst_27540__$1 = tmp27670;
var inst_27541__$1 = tmp27671;
var inst_27542__$1 = inst_27556;
var state_27658__$1 = (function (){var statearr_27677 = state_27658;
(statearr_27677[(13)] = inst_27542__$1);

(statearr_27677[(14)] = inst_27540__$1);

(statearr_27677[(18)] = inst_27555);

(statearr_27677[(16)] = inst_27541__$1);

(statearr_27677[(17)] = inst_27539__$1);

return statearr_27677;
})();
var statearr_27678_27757 = state_27658__$1;
(statearr_27678_27757[(2)] = null);

(statearr_27678_27757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (21))){
var inst_27580 = (state_27658[(2)]);
var state_27658__$1 = state_27658;
var statearr_27682_27758 = state_27658__$1;
(statearr_27682_27758[(2)] = inst_27580);

(statearr_27682_27758[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (31))){
var inst_27606 = (state_27658[(11)]);
var inst_27610 = done.call(null,null);
var inst_27611 = cljs.core.async.untap_STAR_.call(null,m,inst_27606);
var state_27658__$1 = (function (){var statearr_27683 = state_27658;
(statearr_27683[(19)] = inst_27610);

return statearr_27683;
})();
var statearr_27684_27759 = state_27658__$1;
(statearr_27684_27759[(2)] = inst_27611);

(statearr_27684_27759[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (32))){
var inst_27601 = (state_27658[(9)]);
var inst_27599 = (state_27658[(10)]);
var inst_27598 = (state_27658[(20)]);
var inst_27600 = (state_27658[(21)]);
var inst_27613 = (state_27658[(2)]);
var inst_27614 = (inst_27601 + (1));
var tmp27679 = inst_27599;
var tmp27680 = inst_27598;
var tmp27681 = inst_27600;
var inst_27598__$1 = tmp27680;
var inst_27599__$1 = tmp27679;
var inst_27600__$1 = tmp27681;
var inst_27601__$1 = inst_27614;
var state_27658__$1 = (function (){var statearr_27685 = state_27658;
(statearr_27685[(9)] = inst_27601__$1);

(statearr_27685[(10)] = inst_27599__$1);

(statearr_27685[(22)] = inst_27613);

(statearr_27685[(20)] = inst_27598__$1);

(statearr_27685[(21)] = inst_27600__$1);

return statearr_27685;
})();
var statearr_27686_27760 = state_27658__$1;
(statearr_27686_27760[(2)] = null);

(statearr_27686_27760[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (40))){
var inst_27626 = (state_27658[(23)]);
var inst_27630 = done.call(null,null);
var inst_27631 = cljs.core.async.untap_STAR_.call(null,m,inst_27626);
var state_27658__$1 = (function (){var statearr_27687 = state_27658;
(statearr_27687[(24)] = inst_27630);

return statearr_27687;
})();
var statearr_27688_27761 = state_27658__$1;
(statearr_27688_27761[(2)] = inst_27631);

(statearr_27688_27761[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (33))){
var inst_27617 = (state_27658[(25)]);
var inst_27619 = cljs.core.chunked_seq_QMARK_.call(null,inst_27617);
var state_27658__$1 = state_27658;
if(inst_27619){
var statearr_27689_27762 = state_27658__$1;
(statearr_27689_27762[(1)] = (36));

} else {
var statearr_27690_27763 = state_27658__$1;
(statearr_27690_27763[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (13))){
var inst_27549 = (state_27658[(26)]);
var inst_27552 = cljs.core.async.close_BANG_.call(null,inst_27549);
var state_27658__$1 = state_27658;
var statearr_27691_27764 = state_27658__$1;
(statearr_27691_27764[(2)] = inst_27552);

(statearr_27691_27764[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (22))){
var inst_27570 = (state_27658[(8)]);
var inst_27573 = cljs.core.async.close_BANG_.call(null,inst_27570);
var state_27658__$1 = state_27658;
var statearr_27692_27765 = state_27658__$1;
(statearr_27692_27765[(2)] = inst_27573);

(statearr_27692_27765[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (36))){
var inst_27617 = (state_27658[(25)]);
var inst_27621 = cljs.core.chunk_first.call(null,inst_27617);
var inst_27622 = cljs.core.chunk_rest.call(null,inst_27617);
var inst_27623 = cljs.core.count.call(null,inst_27621);
var inst_27598 = inst_27622;
var inst_27599 = inst_27621;
var inst_27600 = inst_27623;
var inst_27601 = (0);
var state_27658__$1 = (function (){var statearr_27693 = state_27658;
(statearr_27693[(9)] = inst_27601);

(statearr_27693[(10)] = inst_27599);

(statearr_27693[(20)] = inst_27598);

(statearr_27693[(21)] = inst_27600);

return statearr_27693;
})();
var statearr_27694_27766 = state_27658__$1;
(statearr_27694_27766[(2)] = null);

(statearr_27694_27766[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (41))){
var inst_27617 = (state_27658[(25)]);
var inst_27633 = (state_27658[(2)]);
var inst_27634 = cljs.core.next.call(null,inst_27617);
var inst_27598 = inst_27634;
var inst_27599 = null;
var inst_27600 = (0);
var inst_27601 = (0);
var state_27658__$1 = (function (){var statearr_27695 = state_27658;
(statearr_27695[(27)] = inst_27633);

(statearr_27695[(9)] = inst_27601);

(statearr_27695[(10)] = inst_27599);

(statearr_27695[(20)] = inst_27598);

(statearr_27695[(21)] = inst_27600);

return statearr_27695;
})();
var statearr_27696_27767 = state_27658__$1;
(statearr_27696_27767[(2)] = null);

(statearr_27696_27767[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (43))){
var state_27658__$1 = state_27658;
var statearr_27697_27768 = state_27658__$1;
(statearr_27697_27768[(2)] = null);

(statearr_27697_27768[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (29))){
var inst_27642 = (state_27658[(2)]);
var state_27658__$1 = state_27658;
var statearr_27698_27769 = state_27658__$1;
(statearr_27698_27769[(2)] = inst_27642);

(statearr_27698_27769[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (44))){
var inst_27651 = (state_27658[(2)]);
var state_27658__$1 = (function (){var statearr_27699 = state_27658;
(statearr_27699[(28)] = inst_27651);

return statearr_27699;
})();
var statearr_27700_27770 = state_27658__$1;
(statearr_27700_27770[(2)] = null);

(statearr_27700_27770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (6))){
var inst_27590 = (state_27658[(29)]);
var inst_27589 = cljs.core.deref.call(null,cs);
var inst_27590__$1 = cljs.core.keys.call(null,inst_27589);
var inst_27591 = cljs.core.count.call(null,inst_27590__$1);
var inst_27592 = cljs.core.reset_BANG_.call(null,dctr,inst_27591);
var inst_27597 = cljs.core.seq.call(null,inst_27590__$1);
var inst_27598 = inst_27597;
var inst_27599 = null;
var inst_27600 = (0);
var inst_27601 = (0);
var state_27658__$1 = (function (){var statearr_27701 = state_27658;
(statearr_27701[(29)] = inst_27590__$1);

(statearr_27701[(9)] = inst_27601);

(statearr_27701[(10)] = inst_27599);

(statearr_27701[(20)] = inst_27598);

(statearr_27701[(21)] = inst_27600);

(statearr_27701[(30)] = inst_27592);

return statearr_27701;
})();
var statearr_27702_27771 = state_27658__$1;
(statearr_27702_27771[(2)] = null);

(statearr_27702_27771[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (28))){
var inst_27617 = (state_27658[(25)]);
var inst_27598 = (state_27658[(20)]);
var inst_27617__$1 = cljs.core.seq.call(null,inst_27598);
var state_27658__$1 = (function (){var statearr_27703 = state_27658;
(statearr_27703[(25)] = inst_27617__$1);

return statearr_27703;
})();
if(inst_27617__$1){
var statearr_27704_27772 = state_27658__$1;
(statearr_27704_27772[(1)] = (33));

} else {
var statearr_27705_27773 = state_27658__$1;
(statearr_27705_27773[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (25))){
var inst_27601 = (state_27658[(9)]);
var inst_27600 = (state_27658[(21)]);
var inst_27603 = (inst_27601 < inst_27600);
var inst_27604 = inst_27603;
var state_27658__$1 = state_27658;
if(cljs.core.truth_(inst_27604)){
var statearr_27706_27774 = state_27658__$1;
(statearr_27706_27774[(1)] = (27));

} else {
var statearr_27707_27775 = state_27658__$1;
(statearr_27707_27775[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (34))){
var state_27658__$1 = state_27658;
var statearr_27708_27776 = state_27658__$1;
(statearr_27708_27776[(2)] = null);

(statearr_27708_27776[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (17))){
var state_27658__$1 = state_27658;
var statearr_27709_27777 = state_27658__$1;
(statearr_27709_27777[(2)] = null);

(statearr_27709_27777[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (3))){
var inst_27656 = (state_27658[(2)]);
var state_27658__$1 = state_27658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27658__$1,inst_27656);
} else {
if((state_val_27659 === (12))){
var inst_27585 = (state_27658[(2)]);
var state_27658__$1 = state_27658;
var statearr_27710_27778 = state_27658__$1;
(statearr_27710_27778[(2)] = inst_27585);

(statearr_27710_27778[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (2))){
var state_27658__$1 = state_27658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27658__$1,(4),ch);
} else {
if((state_val_27659 === (23))){
var state_27658__$1 = state_27658;
var statearr_27711_27779 = state_27658__$1;
(statearr_27711_27779[(2)] = null);

(statearr_27711_27779[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (35))){
var inst_27640 = (state_27658[(2)]);
var state_27658__$1 = state_27658;
var statearr_27712_27780 = state_27658__$1;
(statearr_27712_27780[(2)] = inst_27640);

(statearr_27712_27780[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (19))){
var inst_27559 = (state_27658[(7)]);
var inst_27563 = cljs.core.chunk_first.call(null,inst_27559);
var inst_27564 = cljs.core.chunk_rest.call(null,inst_27559);
var inst_27565 = cljs.core.count.call(null,inst_27563);
var inst_27539 = inst_27564;
var inst_27540 = inst_27563;
var inst_27541 = inst_27565;
var inst_27542 = (0);
var state_27658__$1 = (function (){var statearr_27713 = state_27658;
(statearr_27713[(13)] = inst_27542);

(statearr_27713[(14)] = inst_27540);

(statearr_27713[(16)] = inst_27541);

(statearr_27713[(17)] = inst_27539);

return statearr_27713;
})();
var statearr_27714_27781 = state_27658__$1;
(statearr_27714_27781[(2)] = null);

(statearr_27714_27781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (11))){
var inst_27559 = (state_27658[(7)]);
var inst_27539 = (state_27658[(17)]);
var inst_27559__$1 = cljs.core.seq.call(null,inst_27539);
var state_27658__$1 = (function (){var statearr_27715 = state_27658;
(statearr_27715[(7)] = inst_27559__$1);

return statearr_27715;
})();
if(inst_27559__$1){
var statearr_27716_27782 = state_27658__$1;
(statearr_27716_27782[(1)] = (16));

} else {
var statearr_27717_27783 = state_27658__$1;
(statearr_27717_27783[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (9))){
var inst_27587 = (state_27658[(2)]);
var state_27658__$1 = state_27658;
var statearr_27718_27784 = state_27658__$1;
(statearr_27718_27784[(2)] = inst_27587);

(statearr_27718_27784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (5))){
var inst_27537 = cljs.core.deref.call(null,cs);
var inst_27538 = cljs.core.seq.call(null,inst_27537);
var inst_27539 = inst_27538;
var inst_27540 = null;
var inst_27541 = (0);
var inst_27542 = (0);
var state_27658__$1 = (function (){var statearr_27719 = state_27658;
(statearr_27719[(13)] = inst_27542);

(statearr_27719[(14)] = inst_27540);

(statearr_27719[(16)] = inst_27541);

(statearr_27719[(17)] = inst_27539);

return statearr_27719;
})();
var statearr_27720_27785 = state_27658__$1;
(statearr_27720_27785[(2)] = null);

(statearr_27720_27785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (14))){
var state_27658__$1 = state_27658;
var statearr_27721_27786 = state_27658__$1;
(statearr_27721_27786[(2)] = null);

(statearr_27721_27786[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (45))){
var inst_27648 = (state_27658[(2)]);
var state_27658__$1 = state_27658;
var statearr_27722_27787 = state_27658__$1;
(statearr_27722_27787[(2)] = inst_27648);

(statearr_27722_27787[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (26))){
var inst_27590 = (state_27658[(29)]);
var inst_27644 = (state_27658[(2)]);
var inst_27645 = cljs.core.seq.call(null,inst_27590);
var state_27658__$1 = (function (){var statearr_27723 = state_27658;
(statearr_27723[(31)] = inst_27644);

return statearr_27723;
})();
if(inst_27645){
var statearr_27724_27788 = state_27658__$1;
(statearr_27724_27788[(1)] = (42));

} else {
var statearr_27725_27789 = state_27658__$1;
(statearr_27725_27789[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (16))){
var inst_27559 = (state_27658[(7)]);
var inst_27561 = cljs.core.chunked_seq_QMARK_.call(null,inst_27559);
var state_27658__$1 = state_27658;
if(inst_27561){
var statearr_27726_27790 = state_27658__$1;
(statearr_27726_27790[(1)] = (19));

} else {
var statearr_27727_27791 = state_27658__$1;
(statearr_27727_27791[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (38))){
var inst_27637 = (state_27658[(2)]);
var state_27658__$1 = state_27658;
var statearr_27728_27792 = state_27658__$1;
(statearr_27728_27792[(2)] = inst_27637);

(statearr_27728_27792[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (30))){
var state_27658__$1 = state_27658;
var statearr_27729_27793 = state_27658__$1;
(statearr_27729_27793[(2)] = null);

(statearr_27729_27793[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (10))){
var inst_27542 = (state_27658[(13)]);
var inst_27540 = (state_27658[(14)]);
var inst_27548 = cljs.core._nth.call(null,inst_27540,inst_27542);
var inst_27549 = cljs.core.nth.call(null,inst_27548,(0),null);
var inst_27550 = cljs.core.nth.call(null,inst_27548,(1),null);
var state_27658__$1 = (function (){var statearr_27730 = state_27658;
(statearr_27730[(26)] = inst_27549);

return statearr_27730;
})();
if(cljs.core.truth_(inst_27550)){
var statearr_27731_27794 = state_27658__$1;
(statearr_27731_27794[(1)] = (13));

} else {
var statearr_27732_27795 = state_27658__$1;
(statearr_27732_27795[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (18))){
var inst_27583 = (state_27658[(2)]);
var state_27658__$1 = state_27658;
var statearr_27733_27796 = state_27658__$1;
(statearr_27733_27796[(2)] = inst_27583);

(statearr_27733_27796[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (42))){
var state_27658__$1 = state_27658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27658__$1,(45),dchan);
} else {
if((state_val_27659 === (37))){
var inst_27617 = (state_27658[(25)]);
var inst_27530 = (state_27658[(12)]);
var inst_27626 = (state_27658[(23)]);
var inst_27626__$1 = cljs.core.first.call(null,inst_27617);
var inst_27627 = cljs.core.async.put_BANG_.call(null,inst_27626__$1,inst_27530,done);
var state_27658__$1 = (function (){var statearr_27734 = state_27658;
(statearr_27734[(23)] = inst_27626__$1);

return statearr_27734;
})();
if(cljs.core.truth_(inst_27627)){
var statearr_27735_27797 = state_27658__$1;
(statearr_27735_27797[(1)] = (39));

} else {
var statearr_27736_27798 = state_27658__$1;
(statearr_27736_27798[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (8))){
var inst_27542 = (state_27658[(13)]);
var inst_27541 = (state_27658[(16)]);
var inst_27544 = (inst_27542 < inst_27541);
var inst_27545 = inst_27544;
var state_27658__$1 = state_27658;
if(cljs.core.truth_(inst_27545)){
var statearr_27737_27799 = state_27658__$1;
(statearr_27737_27799[(1)] = (10));

} else {
var statearr_27738_27800 = state_27658__$1;
(statearr_27738_27800[(1)] = (11));

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
});})(c__20316__auto___27746,cs,m,dchan,dctr,done))
;
return ((function (switch__20254__auto__,c__20316__auto___27746,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20255__auto__ = null;
var cljs$core$async$mult_$_state_machine__20255__auto____0 = (function (){
var statearr_27742 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27742[(0)] = cljs$core$async$mult_$_state_machine__20255__auto__);

(statearr_27742[(1)] = (1));

return statearr_27742;
});
var cljs$core$async$mult_$_state_machine__20255__auto____1 = (function (state_27658){
while(true){
var ret_value__20256__auto__ = (function (){try{while(true){
var result__20257__auto__ = switch__20254__auto__.call(null,state_27658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20257__auto__;
}
break;
}
}catch (e27743){if((e27743 instanceof Object)){
var ex__20258__auto__ = e27743;
var statearr_27744_27801 = state_27658;
(statearr_27744_27801[(5)] = ex__20258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27802 = state_27658;
state_27658 = G__27802;
continue;
} else {
return ret_value__20256__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20255__auto__ = function(state_27658){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20255__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20255__auto____1.call(this,state_27658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20255__auto____0;
cljs$core$async$mult_$_state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20255__auto____1;
return cljs$core$async$mult_$_state_machine__20255__auto__;
})()
;})(switch__20254__auto__,c__20316__auto___27746,cs,m,dchan,dctr,done))
})();
var state__20318__auto__ = (function (){var statearr_27745 = f__20317__auto__.call(null);
(statearr_27745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20316__auto___27746);

return statearr_27745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20318__auto__);
});})(c__20316__auto___27746,cs,m,dchan,dctr,done))
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
var G__27804 = arguments.length;
switch (G__27804) {
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

cljs.core.async.Mix = (function (){var obj27807 = {};
return obj27807;
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

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27812){
var map__27813 = p__27812;
var map__27813__$1 = ((cljs.core.seq_QMARK_.call(null,map__27813))?cljs.core.apply.call(null,cljs.core.hash_map,map__27813):map__27813);
var opts = map__27813__$1;
var statearr_27814_27817 = state;
(statearr_27814_27817[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__27813,map__27813__$1,opts){
return (function (val){
var statearr_27815_27818 = state;
(statearr_27815_27818[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27813,map__27813__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_27816_27819 = state;
(statearr_27816_27819[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27808){
var G__27809 = cljs.core.first.call(null,seq27808);
var seq27808__$1 = cljs.core.next.call(null,seq27808);
var G__27810 = cljs.core.first.call(null,seq27808__$1);
var seq27808__$2 = cljs.core.next.call(null,seq27808__$1);
var G__27811 = cljs.core.first.call(null,seq27808__$2);
var seq27808__$3 = cljs.core.next.call(null,seq27808__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27809,G__27810,G__27811,seq27808__$3);
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
if(typeof cljs.core.async.t27939 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27939 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27940){
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
this.meta27940 = meta27940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27941,meta27940__$1){
var self__ = this;
var _27941__$1 = this;
return (new cljs.core.async.t27939(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27940__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27939.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27941){
var self__ = this;
var _27941__$1 = this;
return self__.meta27940;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27939.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27939.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27939.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t27939.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27939.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27939.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27939.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27939.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t27939.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27940","meta27940",294795052,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27939.cljs$lang$type = true;

cljs.core.async.t27939.cljs$lang$ctorStr = "cljs.core.async/t27939";

cljs.core.async.t27939.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t27939");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t27939 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t27939(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27940){
return (new cljs.core.async.t27939(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27940));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t27939(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20316__auto___28058 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20316__auto___28058,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20317__auto__ = (function (){var switch__20254__auto__ = ((function (c__20316__auto___28058,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28011){
var state_val_28012 = (state_28011[(1)]);
if((state_val_28012 === (7))){
var inst_27955 = (state_28011[(7)]);
var inst_27960 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27955);
var state_28011__$1 = state_28011;
var statearr_28013_28059 = state_28011__$1;
(statearr_28013_28059[(2)] = inst_27960);

(statearr_28013_28059[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28012 === (20))){
var inst_27970 = (state_28011[(8)]);
var state_28011__$1 = state_28011;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28011__$1,(23),out,inst_27970);
} else {
if((state_val_28012 === (1))){
var inst_27945 = (state_28011[(9)]);
var inst_27945__$1 = calc_state.call(null);
var inst_27946 = cljs.core.seq_QMARK_.call(null,inst_27945__$1);
var state_28011__$1 = (function (){var statearr_28014 = state_28011;
(statearr_28014[(9)] = inst_27945__$1);

return statearr_28014;
})();
if(inst_27946){
var statearr_28015_28060 = state_28011__$1;
(statearr_28015_28060[(1)] = (2));

} else {
var statearr_28016_28061 = state_28011__$1;
(statearr_28016_28061[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28012 === (24))){
var inst_27963 = (state_28011[(10)]);
var inst_27955 = inst_27963;
var state_28011__$1 = (function (){var statearr_28017 = state_28011;
(statearr_28017[(7)] = inst_27955);

return statearr_28017;
})();
var statearr_28018_28062 = state_28011__$1;
(statearr_28018_28062[(2)] = null);

(statearr_28018_28062[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28012 === (4))){
var inst_27945 = (state_28011[(9)]);
var inst_27951 = (state_28011[(2)]);
var inst_27952 = cljs.core.get.call(null,inst_27951,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27953 = cljs.core.get.call(null,inst_27951,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27954 = cljs.core.get.call(null,inst_27951,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27955 = inst_27945;
var state_28011__$1 = (function (){var statearr_28019 = state_28011;
(statearr_28019[(7)] = inst_27955);

(statearr_28019[(11)] = inst_27952);

(statearr_28019[(12)] = inst_27954);

(statearr_28019[(13)] = inst_27953);

return statearr_28019;
})();
var statearr_28020_28063 = state_28011__$1;
(statearr_28020_28063[(2)] = null);

(statearr_28020_28063[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28012 === (15))){
var state_28011__$1 = state_28011;
var statearr_28021_28064 = state_28011__$1;
(statearr_28021_28064[(2)] = null);

(statearr_28021_28064[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28012 === (21))){
var inst_27963 = (state_28011[(10)]);
var inst_27955 = inst_27963;
var state_28011__$1 = (function (){var statearr_28022 = state_28011;
(statearr_28022[(7)] = inst_27955);

return statearr_28022;
})();
var statearr_28023_28065 = state_28011__$1;
(statearr_28023_28065[(2)] = null);

(statearr_28023_28065[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28012 === (13))){
var inst_28007 = (state_28011[(2)]);
var state_28011__$1 = state_28011;
var statearr_28024_28066 = state_28011__$1;
(statearr_28024_28066[(2)] = inst_28007);

(statearr_28024_28066[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28012 === (22))){
var inst_28005 = (state_28011[(2)]);
var state_28011__$1 = state_28011;
var statearr_28025_28067 = state_28011__$1;
(statearr_28025_28067[(2)] = inst_28005);

(statearr_28025_28067[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28012 === (6))){
var inst_28009 = (state_28011[(2)]);
var state_28011__$1 = state_28011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28011__$1,inst_28009);
} else {
if((state_val_28012 === (25))){
var state_28011__$1 = state_28011;
var statearr_28026_28068 = state_28011__$1;
(statearr_28026_28068[(2)] = null);

(statearr_28026_28068[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28012 === (17))){
var inst_27985 = (state_28011[(14)]);
var state_28011__$1 = state_28011;
var statearr_28027_28069 = state_28011__$1;
(statearr_28027_28069[(2)] = inst_27985);

(statearr_28027_28069[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28012 === (3))){
var inst_27945 = (state_28011[(9)]);
var state_28011__$1 = state_28011;
var statearr_28028_28070 = state_28011__$1;
(statearr_28028_28070[(2)] = inst_27945);

(statearr_28028_28070[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28012 === (12))){
var inst_27971 = (state_28011[(15)]);
var inst_27985 = (state_28011[(14)]);
var inst_27964 = (state_28011[(16)]);
var inst_27985__$1 = inst_27964.call(null,inst_27971);
var state_28011__$1 = (function (){var statearr_28029 = state_28011;
(statearr_28029[(14)] = inst_27985__$1);

return statearr_28029;
})();
if(cljs.core.truth_(inst_27985__$1)){
var statearr_28030_28071 = state_28011__$1;
(statearr_28030_28071[(1)] = (17));

} else {
var statearr_28031_28072 = state_28011__$1;
(statearr_28031_28072[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28012 === (2))){
var inst_27945 = (state_28011[(9)]);
var inst_27948 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27945);
var state_28011__$1 = state_28011;
var statearr_28032_28073 = state_28011__$1;
(statearr_28032_28073[(2)] = inst_27948);

(statearr_28032_28073[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28012 === (23))){
var inst_27996 = (state_28011[(2)]);
var state_28011__$1 = state_28011;
if(cljs.core.truth_(inst_27996)){
var statearr_28033_28074 = state_28011__$1;
(statearr_28033_28074[(1)] = (24));

} else {
var statearr_28034_28075 = state_28011__$1;
(statearr_28034_28075[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28012 === (19))){
var inst_27993 = (state_28011[(2)]);
var state_28011__$1 = state_28011;
if(cljs.core.truth_(inst_27993)){
var statearr_28035_28076 = state_28011__$1;
(statearr_28035_28076[(1)] = (20));

} else {
var statearr_28036_28077 = state_28011__$1;
(statearr_28036_28077[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28012 === (11))){
var inst_27970 = (state_28011[(8)]);
var inst_27976 = (inst_27970 == null);
var state_28011__$1 = state_28011;
if(cljs.core.truth_(inst_27976)){
var statearr_28037_28078 = state_28011__$1;
(statearr_28037_28078[(1)] = (14));

} else {
var statearr_28038_28079 = state_28011__$1;
(statearr_28038_28079[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28012 === (9))){
var inst_27963 = (state_28011[(10)]);
var inst_27963__$1 = (state_28011[(2)]);
var inst_27964 = cljs.core.get.call(null,inst_27963__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27965 = cljs.core.get.call(null,inst_27963__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27966 = cljs.core.get.call(null,inst_27963__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28011__$1 = (function (){var statearr_28039 = state_28011;
(statearr_28039[(17)] = inst_27965);

(statearr_28039[(16)] = inst_27964);

(statearr_28039[(10)] = inst_27963__$1);

return statearr_28039;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28011__$1,(10),inst_27966);
} else {
if((state_val_28012 === (5))){
var inst_27955 = (state_28011[(7)]);
var inst_27958 = cljs.core.seq_QMARK_.call(null,inst_27955);
var state_28011__$1 = state_28011;
if(inst_27958){
var statearr_28040_28080 = state_28011__$1;
(statearr_28040_28080[(1)] = (7));

} else {
var statearr_28041_28081 = state_28011__$1;
(statearr_28041_28081[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28012 === (14))){
var inst_27971 = (state_28011[(15)]);
var inst_27978 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27971);
var state_28011__$1 = state_28011;
var statearr_28042_28082 = state_28011__$1;
(statearr_28042_28082[(2)] = inst_27978);

(statearr_28042_28082[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28012 === (26))){
var inst_28001 = (state_28011[(2)]);
var state_28011__$1 = state_28011;
var statearr_28043_28083 = state_28011__$1;
(statearr_28043_28083[(2)] = inst_28001);

(statearr_28043_28083[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28012 === (16))){
var inst_27981 = (state_28011[(2)]);
var inst_27982 = calc_state.call(null);
var inst_27955 = inst_27982;
var state_28011__$1 = (function (){var statearr_28044 = state_28011;
(statearr_28044[(7)] = inst_27955);

(statearr_28044[(18)] = inst_27981);

return statearr_28044;
})();
var statearr_28045_28084 = state_28011__$1;
(statearr_28045_28084[(2)] = null);

(statearr_28045_28084[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28012 === (10))){
var inst_27970 = (state_28011[(8)]);
var inst_27971 = (state_28011[(15)]);
var inst_27969 = (state_28011[(2)]);
var inst_27970__$1 = cljs.core.nth.call(null,inst_27969,(0),null);
var inst_27971__$1 = cljs.core.nth.call(null,inst_27969,(1),null);
var inst_27972 = (inst_27970__$1 == null);
var inst_27973 = cljs.core._EQ_.call(null,inst_27971__$1,change);
var inst_27974 = (inst_27972) || (inst_27973);
var state_28011__$1 = (function (){var statearr_28046 = state_28011;
(statearr_28046[(8)] = inst_27970__$1);

(statearr_28046[(15)] = inst_27971__$1);

return statearr_28046;
})();
if(cljs.core.truth_(inst_27974)){
var statearr_28047_28085 = state_28011__$1;
(statearr_28047_28085[(1)] = (11));

} else {
var statearr_28048_28086 = state_28011__$1;
(statearr_28048_28086[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28012 === (18))){
var inst_27965 = (state_28011[(17)]);
var inst_27971 = (state_28011[(15)]);
var inst_27964 = (state_28011[(16)]);
var inst_27988 = cljs.core.empty_QMARK_.call(null,inst_27964);
var inst_27989 = inst_27965.call(null,inst_27971);
var inst_27990 = cljs.core.not.call(null,inst_27989);
var inst_27991 = (inst_27988) && (inst_27990);
var state_28011__$1 = state_28011;
var statearr_28049_28087 = state_28011__$1;
(statearr_28049_28087[(2)] = inst_27991);

(statearr_28049_28087[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28012 === (8))){
var inst_27955 = (state_28011[(7)]);
var state_28011__$1 = state_28011;
var statearr_28050_28088 = state_28011__$1;
(statearr_28050_28088[(2)] = inst_27955);

(statearr_28050_28088[(1)] = (9));


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
});})(c__20316__auto___28058,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20254__auto__,c__20316__auto___28058,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20255__auto__ = null;
var cljs$core$async$mix_$_state_machine__20255__auto____0 = (function (){
var statearr_28054 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28054[(0)] = cljs$core$async$mix_$_state_machine__20255__auto__);

(statearr_28054[(1)] = (1));

return statearr_28054;
});
var cljs$core$async$mix_$_state_machine__20255__auto____1 = (function (state_28011){
while(true){
var ret_value__20256__auto__ = (function (){try{while(true){
var result__20257__auto__ = switch__20254__auto__.call(null,state_28011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20257__auto__;
}
break;
}
}catch (e28055){if((e28055 instanceof Object)){
var ex__20258__auto__ = e28055;
var statearr_28056_28089 = state_28011;
(statearr_28056_28089[(5)] = ex__20258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28090 = state_28011;
state_28011 = G__28090;
continue;
} else {
return ret_value__20256__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20255__auto__ = function(state_28011){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20255__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20255__auto____1.call(this,state_28011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20255__auto____0;
cljs$core$async$mix_$_state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20255__auto____1;
return cljs$core$async$mix_$_state_machine__20255__auto__;
})()
;})(switch__20254__auto__,c__20316__auto___28058,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20318__auto__ = (function (){var statearr_28057 = f__20317__auto__.call(null);
(statearr_28057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20316__auto___28058);

return statearr_28057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20318__auto__);
});})(c__20316__auto___28058,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj28092 = {};
return obj28092;
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
var G__28094 = arguments.length;
switch (G__28094) {
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
var G__28098 = arguments.length;
switch (G__28098) {
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
return (function (p1__28096_SHARP_){
if(cljs.core.truth_(p1__28096_SHARP_.call(null,topic))){
return p1__28096_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28096_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16069__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t28099 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28099 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28100){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28100 = meta28100;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28101,meta28100__$1){
var self__ = this;
var _28101__$1 = this;
return (new cljs.core.async.t28099(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28100__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t28099.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28101){
var self__ = this;
var _28101__$1 = this;
return self__.meta28100;
});})(mults,ensure_mult))
;

cljs.core.async.t28099.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28099.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t28099.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t28099.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t28099.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t28099.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t28099.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t28099.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28100","meta28100",-943511356,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t28099.cljs$lang$type = true;

cljs.core.async.t28099.cljs$lang$ctorStr = "cljs.core.async/t28099";

cljs.core.async.t28099.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t28099");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t28099 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t28099(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28100){
return (new cljs.core.async.t28099(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28100));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t28099(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20316__auto___28222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20316__auto___28222,mults,ensure_mult,p){
return (function (){
var f__20317__auto__ = (function (){var switch__20254__auto__ = ((function (c__20316__auto___28222,mults,ensure_mult,p){
return (function (state_28173){
var state_val_28174 = (state_28173[(1)]);
if((state_val_28174 === (7))){
var inst_28169 = (state_28173[(2)]);
var state_28173__$1 = state_28173;
var statearr_28175_28223 = state_28173__$1;
(statearr_28175_28223[(2)] = inst_28169);

(statearr_28175_28223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (20))){
var state_28173__$1 = state_28173;
var statearr_28176_28224 = state_28173__$1;
(statearr_28176_28224[(2)] = null);

(statearr_28176_28224[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (1))){
var state_28173__$1 = state_28173;
var statearr_28177_28225 = state_28173__$1;
(statearr_28177_28225[(2)] = null);

(statearr_28177_28225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (24))){
var inst_28152 = (state_28173[(7)]);
var inst_28161 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28152);
var state_28173__$1 = state_28173;
var statearr_28178_28226 = state_28173__$1;
(statearr_28178_28226[(2)] = inst_28161);

(statearr_28178_28226[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (4))){
var inst_28104 = (state_28173[(8)]);
var inst_28104__$1 = (state_28173[(2)]);
var inst_28105 = (inst_28104__$1 == null);
var state_28173__$1 = (function (){var statearr_28179 = state_28173;
(statearr_28179[(8)] = inst_28104__$1);

return statearr_28179;
})();
if(cljs.core.truth_(inst_28105)){
var statearr_28180_28227 = state_28173__$1;
(statearr_28180_28227[(1)] = (5));

} else {
var statearr_28181_28228 = state_28173__$1;
(statearr_28181_28228[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (15))){
var inst_28146 = (state_28173[(2)]);
var state_28173__$1 = state_28173;
var statearr_28182_28229 = state_28173__$1;
(statearr_28182_28229[(2)] = inst_28146);

(statearr_28182_28229[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (21))){
var inst_28166 = (state_28173[(2)]);
var state_28173__$1 = (function (){var statearr_28183 = state_28173;
(statearr_28183[(9)] = inst_28166);

return statearr_28183;
})();
var statearr_28184_28230 = state_28173__$1;
(statearr_28184_28230[(2)] = null);

(statearr_28184_28230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (13))){
var inst_28128 = (state_28173[(10)]);
var inst_28130 = cljs.core.chunked_seq_QMARK_.call(null,inst_28128);
var state_28173__$1 = state_28173;
if(inst_28130){
var statearr_28185_28231 = state_28173__$1;
(statearr_28185_28231[(1)] = (16));

} else {
var statearr_28186_28232 = state_28173__$1;
(statearr_28186_28232[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (22))){
var inst_28158 = (state_28173[(2)]);
var state_28173__$1 = state_28173;
if(cljs.core.truth_(inst_28158)){
var statearr_28187_28233 = state_28173__$1;
(statearr_28187_28233[(1)] = (23));

} else {
var statearr_28188_28234 = state_28173__$1;
(statearr_28188_28234[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (6))){
var inst_28154 = (state_28173[(11)]);
var inst_28104 = (state_28173[(8)]);
var inst_28152 = (state_28173[(7)]);
var inst_28152__$1 = topic_fn.call(null,inst_28104);
var inst_28153 = cljs.core.deref.call(null,mults);
var inst_28154__$1 = cljs.core.get.call(null,inst_28153,inst_28152__$1);
var state_28173__$1 = (function (){var statearr_28189 = state_28173;
(statearr_28189[(11)] = inst_28154__$1);

(statearr_28189[(7)] = inst_28152__$1);

return statearr_28189;
})();
if(cljs.core.truth_(inst_28154__$1)){
var statearr_28190_28235 = state_28173__$1;
(statearr_28190_28235[(1)] = (19));

} else {
var statearr_28191_28236 = state_28173__$1;
(statearr_28191_28236[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (25))){
var inst_28163 = (state_28173[(2)]);
var state_28173__$1 = state_28173;
var statearr_28192_28237 = state_28173__$1;
(statearr_28192_28237[(2)] = inst_28163);

(statearr_28192_28237[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (17))){
var inst_28128 = (state_28173[(10)]);
var inst_28137 = cljs.core.first.call(null,inst_28128);
var inst_28138 = cljs.core.async.muxch_STAR_.call(null,inst_28137);
var inst_28139 = cljs.core.async.close_BANG_.call(null,inst_28138);
var inst_28140 = cljs.core.next.call(null,inst_28128);
var inst_28114 = inst_28140;
var inst_28115 = null;
var inst_28116 = (0);
var inst_28117 = (0);
var state_28173__$1 = (function (){var statearr_28193 = state_28173;
(statearr_28193[(12)] = inst_28139);

(statearr_28193[(13)] = inst_28115);

(statearr_28193[(14)] = inst_28117);

(statearr_28193[(15)] = inst_28114);

(statearr_28193[(16)] = inst_28116);

return statearr_28193;
})();
var statearr_28194_28238 = state_28173__$1;
(statearr_28194_28238[(2)] = null);

(statearr_28194_28238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (3))){
var inst_28171 = (state_28173[(2)]);
var state_28173__$1 = state_28173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28173__$1,inst_28171);
} else {
if((state_val_28174 === (12))){
var inst_28148 = (state_28173[(2)]);
var state_28173__$1 = state_28173;
var statearr_28195_28239 = state_28173__$1;
(statearr_28195_28239[(2)] = inst_28148);

(statearr_28195_28239[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (2))){
var state_28173__$1 = state_28173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28173__$1,(4),ch);
} else {
if((state_val_28174 === (23))){
var state_28173__$1 = state_28173;
var statearr_28196_28240 = state_28173__$1;
(statearr_28196_28240[(2)] = null);

(statearr_28196_28240[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (19))){
var inst_28154 = (state_28173[(11)]);
var inst_28104 = (state_28173[(8)]);
var inst_28156 = cljs.core.async.muxch_STAR_.call(null,inst_28154);
var state_28173__$1 = state_28173;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28173__$1,(22),inst_28156,inst_28104);
} else {
if((state_val_28174 === (11))){
var inst_28128 = (state_28173[(10)]);
var inst_28114 = (state_28173[(15)]);
var inst_28128__$1 = cljs.core.seq.call(null,inst_28114);
var state_28173__$1 = (function (){var statearr_28197 = state_28173;
(statearr_28197[(10)] = inst_28128__$1);

return statearr_28197;
})();
if(inst_28128__$1){
var statearr_28198_28241 = state_28173__$1;
(statearr_28198_28241[(1)] = (13));

} else {
var statearr_28199_28242 = state_28173__$1;
(statearr_28199_28242[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (9))){
var inst_28150 = (state_28173[(2)]);
var state_28173__$1 = state_28173;
var statearr_28200_28243 = state_28173__$1;
(statearr_28200_28243[(2)] = inst_28150);

(statearr_28200_28243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (5))){
var inst_28111 = cljs.core.deref.call(null,mults);
var inst_28112 = cljs.core.vals.call(null,inst_28111);
var inst_28113 = cljs.core.seq.call(null,inst_28112);
var inst_28114 = inst_28113;
var inst_28115 = null;
var inst_28116 = (0);
var inst_28117 = (0);
var state_28173__$1 = (function (){var statearr_28201 = state_28173;
(statearr_28201[(13)] = inst_28115);

(statearr_28201[(14)] = inst_28117);

(statearr_28201[(15)] = inst_28114);

(statearr_28201[(16)] = inst_28116);

return statearr_28201;
})();
var statearr_28202_28244 = state_28173__$1;
(statearr_28202_28244[(2)] = null);

(statearr_28202_28244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (14))){
var state_28173__$1 = state_28173;
var statearr_28206_28245 = state_28173__$1;
(statearr_28206_28245[(2)] = null);

(statearr_28206_28245[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (16))){
var inst_28128 = (state_28173[(10)]);
var inst_28132 = cljs.core.chunk_first.call(null,inst_28128);
var inst_28133 = cljs.core.chunk_rest.call(null,inst_28128);
var inst_28134 = cljs.core.count.call(null,inst_28132);
var inst_28114 = inst_28133;
var inst_28115 = inst_28132;
var inst_28116 = inst_28134;
var inst_28117 = (0);
var state_28173__$1 = (function (){var statearr_28207 = state_28173;
(statearr_28207[(13)] = inst_28115);

(statearr_28207[(14)] = inst_28117);

(statearr_28207[(15)] = inst_28114);

(statearr_28207[(16)] = inst_28116);

return statearr_28207;
})();
var statearr_28208_28246 = state_28173__$1;
(statearr_28208_28246[(2)] = null);

(statearr_28208_28246[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (10))){
var inst_28115 = (state_28173[(13)]);
var inst_28117 = (state_28173[(14)]);
var inst_28114 = (state_28173[(15)]);
var inst_28116 = (state_28173[(16)]);
var inst_28122 = cljs.core._nth.call(null,inst_28115,inst_28117);
var inst_28123 = cljs.core.async.muxch_STAR_.call(null,inst_28122);
var inst_28124 = cljs.core.async.close_BANG_.call(null,inst_28123);
var inst_28125 = (inst_28117 + (1));
var tmp28203 = inst_28115;
var tmp28204 = inst_28114;
var tmp28205 = inst_28116;
var inst_28114__$1 = tmp28204;
var inst_28115__$1 = tmp28203;
var inst_28116__$1 = tmp28205;
var inst_28117__$1 = inst_28125;
var state_28173__$1 = (function (){var statearr_28209 = state_28173;
(statearr_28209[(17)] = inst_28124);

(statearr_28209[(13)] = inst_28115__$1);

(statearr_28209[(14)] = inst_28117__$1);

(statearr_28209[(15)] = inst_28114__$1);

(statearr_28209[(16)] = inst_28116__$1);

return statearr_28209;
})();
var statearr_28210_28247 = state_28173__$1;
(statearr_28210_28247[(2)] = null);

(statearr_28210_28247[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (18))){
var inst_28143 = (state_28173[(2)]);
var state_28173__$1 = state_28173;
var statearr_28211_28248 = state_28173__$1;
(statearr_28211_28248[(2)] = inst_28143);

(statearr_28211_28248[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (8))){
var inst_28117 = (state_28173[(14)]);
var inst_28116 = (state_28173[(16)]);
var inst_28119 = (inst_28117 < inst_28116);
var inst_28120 = inst_28119;
var state_28173__$1 = state_28173;
if(cljs.core.truth_(inst_28120)){
var statearr_28212_28249 = state_28173__$1;
(statearr_28212_28249[(1)] = (10));

} else {
var statearr_28213_28250 = state_28173__$1;
(statearr_28213_28250[(1)] = (11));

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
});})(c__20316__auto___28222,mults,ensure_mult,p))
;
return ((function (switch__20254__auto__,c__20316__auto___28222,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20255__auto__ = null;
var cljs$core$async$state_machine__20255__auto____0 = (function (){
var statearr_28217 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28217[(0)] = cljs$core$async$state_machine__20255__auto__);

(statearr_28217[(1)] = (1));

return statearr_28217;
});
var cljs$core$async$state_machine__20255__auto____1 = (function (state_28173){
while(true){
var ret_value__20256__auto__ = (function (){try{while(true){
var result__20257__auto__ = switch__20254__auto__.call(null,state_28173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20257__auto__;
}
break;
}
}catch (e28218){if((e28218 instanceof Object)){
var ex__20258__auto__ = e28218;
var statearr_28219_28251 = state_28173;
(statearr_28219_28251[(5)] = ex__20258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28252 = state_28173;
state_28173 = G__28252;
continue;
} else {
return ret_value__20256__auto__;
}
break;
}
});
cljs$core$async$state_machine__20255__auto__ = function(state_28173){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20255__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20255__auto____1.call(this,state_28173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20255__auto____0;
cljs$core$async$state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20255__auto____1;
return cljs$core$async$state_machine__20255__auto__;
})()
;})(switch__20254__auto__,c__20316__auto___28222,mults,ensure_mult,p))
})();
var state__20318__auto__ = (function (){var statearr_28220 = f__20317__auto__.call(null);
(statearr_28220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20316__auto___28222);

return statearr_28220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20318__auto__);
});})(c__20316__auto___28222,mults,ensure_mult,p))
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
var G__28254 = arguments.length;
switch (G__28254) {
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
var G__28257 = arguments.length;
switch (G__28257) {
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
var G__28260 = arguments.length;
switch (G__28260) {
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
var c__20316__auto___28330 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20316__auto___28330,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20317__auto__ = (function (){var switch__20254__auto__ = ((function (c__20316__auto___28330,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28299){
var state_val_28300 = (state_28299[(1)]);
if((state_val_28300 === (7))){
var state_28299__$1 = state_28299;
var statearr_28301_28331 = state_28299__$1;
(statearr_28301_28331[(2)] = null);

(statearr_28301_28331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (1))){
var state_28299__$1 = state_28299;
var statearr_28302_28332 = state_28299__$1;
(statearr_28302_28332[(2)] = null);

(statearr_28302_28332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (4))){
var inst_28263 = (state_28299[(7)]);
var inst_28265 = (inst_28263 < cnt);
var state_28299__$1 = state_28299;
if(cljs.core.truth_(inst_28265)){
var statearr_28303_28333 = state_28299__$1;
(statearr_28303_28333[(1)] = (6));

} else {
var statearr_28304_28334 = state_28299__$1;
(statearr_28304_28334[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (15))){
var inst_28295 = (state_28299[(2)]);
var state_28299__$1 = state_28299;
var statearr_28305_28335 = state_28299__$1;
(statearr_28305_28335[(2)] = inst_28295);

(statearr_28305_28335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (13))){
var inst_28288 = cljs.core.async.close_BANG_.call(null,out);
var state_28299__$1 = state_28299;
var statearr_28306_28336 = state_28299__$1;
(statearr_28306_28336[(2)] = inst_28288);

(statearr_28306_28336[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (6))){
var state_28299__$1 = state_28299;
var statearr_28307_28337 = state_28299__$1;
(statearr_28307_28337[(2)] = null);

(statearr_28307_28337[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (3))){
var inst_28297 = (state_28299[(2)]);
var state_28299__$1 = state_28299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28299__$1,inst_28297);
} else {
if((state_val_28300 === (12))){
var inst_28285 = (state_28299[(8)]);
var inst_28285__$1 = (state_28299[(2)]);
var inst_28286 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28285__$1);
var state_28299__$1 = (function (){var statearr_28308 = state_28299;
(statearr_28308[(8)] = inst_28285__$1);

return statearr_28308;
})();
if(cljs.core.truth_(inst_28286)){
var statearr_28309_28338 = state_28299__$1;
(statearr_28309_28338[(1)] = (13));

} else {
var statearr_28310_28339 = state_28299__$1;
(statearr_28310_28339[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (2))){
var inst_28262 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28263 = (0);
var state_28299__$1 = (function (){var statearr_28311 = state_28299;
(statearr_28311[(9)] = inst_28262);

(statearr_28311[(7)] = inst_28263);

return statearr_28311;
})();
var statearr_28312_28340 = state_28299__$1;
(statearr_28312_28340[(2)] = null);

(statearr_28312_28340[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (11))){
var inst_28263 = (state_28299[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28299,(10),Object,null,(9));
var inst_28272 = chs__$1.call(null,inst_28263);
var inst_28273 = done.call(null,inst_28263);
var inst_28274 = cljs.core.async.take_BANG_.call(null,inst_28272,inst_28273);
var state_28299__$1 = state_28299;
var statearr_28313_28341 = state_28299__$1;
(statearr_28313_28341[(2)] = inst_28274);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28299__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (9))){
var inst_28263 = (state_28299[(7)]);
var inst_28276 = (state_28299[(2)]);
var inst_28277 = (inst_28263 + (1));
var inst_28263__$1 = inst_28277;
var state_28299__$1 = (function (){var statearr_28314 = state_28299;
(statearr_28314[(10)] = inst_28276);

(statearr_28314[(7)] = inst_28263__$1);

return statearr_28314;
})();
var statearr_28315_28342 = state_28299__$1;
(statearr_28315_28342[(2)] = null);

(statearr_28315_28342[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (5))){
var inst_28283 = (state_28299[(2)]);
var state_28299__$1 = (function (){var statearr_28316 = state_28299;
(statearr_28316[(11)] = inst_28283);

return statearr_28316;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28299__$1,(12),dchan);
} else {
if((state_val_28300 === (14))){
var inst_28285 = (state_28299[(8)]);
var inst_28290 = cljs.core.apply.call(null,f,inst_28285);
var state_28299__$1 = state_28299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28299__$1,(16),out,inst_28290);
} else {
if((state_val_28300 === (16))){
var inst_28292 = (state_28299[(2)]);
var state_28299__$1 = (function (){var statearr_28317 = state_28299;
(statearr_28317[(12)] = inst_28292);

return statearr_28317;
})();
var statearr_28318_28343 = state_28299__$1;
(statearr_28318_28343[(2)] = null);

(statearr_28318_28343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (10))){
var inst_28267 = (state_28299[(2)]);
var inst_28268 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28299__$1 = (function (){var statearr_28319 = state_28299;
(statearr_28319[(13)] = inst_28267);

return statearr_28319;
})();
var statearr_28320_28344 = state_28299__$1;
(statearr_28320_28344[(2)] = inst_28268);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28299__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (8))){
var inst_28281 = (state_28299[(2)]);
var state_28299__$1 = state_28299;
var statearr_28321_28345 = state_28299__$1;
(statearr_28321_28345[(2)] = inst_28281);

(statearr_28321_28345[(1)] = (5));


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
});})(c__20316__auto___28330,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20254__auto__,c__20316__auto___28330,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20255__auto__ = null;
var cljs$core$async$state_machine__20255__auto____0 = (function (){
var statearr_28325 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28325[(0)] = cljs$core$async$state_machine__20255__auto__);

(statearr_28325[(1)] = (1));

return statearr_28325;
});
var cljs$core$async$state_machine__20255__auto____1 = (function (state_28299){
while(true){
var ret_value__20256__auto__ = (function (){try{while(true){
var result__20257__auto__ = switch__20254__auto__.call(null,state_28299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20257__auto__;
}
break;
}
}catch (e28326){if((e28326 instanceof Object)){
var ex__20258__auto__ = e28326;
var statearr_28327_28346 = state_28299;
(statearr_28327_28346[(5)] = ex__20258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28347 = state_28299;
state_28299 = G__28347;
continue;
} else {
return ret_value__20256__auto__;
}
break;
}
});
cljs$core$async$state_machine__20255__auto__ = function(state_28299){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20255__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20255__auto____1.call(this,state_28299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20255__auto____0;
cljs$core$async$state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20255__auto____1;
return cljs$core$async$state_machine__20255__auto__;
})()
;})(switch__20254__auto__,c__20316__auto___28330,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20318__auto__ = (function (){var statearr_28328 = f__20317__auto__.call(null);
(statearr_28328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20316__auto___28330);

return statearr_28328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20318__auto__);
});})(c__20316__auto___28330,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__28350 = arguments.length;
switch (G__28350) {
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
var c__20316__auto___28405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20316__auto___28405,out){
return (function (){
var f__20317__auto__ = (function (){var switch__20254__auto__ = ((function (c__20316__auto___28405,out){
return (function (state_28380){
var state_val_28381 = (state_28380[(1)]);
if((state_val_28381 === (7))){
var inst_28360 = (state_28380[(7)]);
var inst_28359 = (state_28380[(8)]);
var inst_28359__$1 = (state_28380[(2)]);
var inst_28360__$1 = cljs.core.nth.call(null,inst_28359__$1,(0),null);
var inst_28361 = cljs.core.nth.call(null,inst_28359__$1,(1),null);
var inst_28362 = (inst_28360__$1 == null);
var state_28380__$1 = (function (){var statearr_28382 = state_28380;
(statearr_28382[(9)] = inst_28361);

(statearr_28382[(7)] = inst_28360__$1);

(statearr_28382[(8)] = inst_28359__$1);

return statearr_28382;
})();
if(cljs.core.truth_(inst_28362)){
var statearr_28383_28406 = state_28380__$1;
(statearr_28383_28406[(1)] = (8));

} else {
var statearr_28384_28407 = state_28380__$1;
(statearr_28384_28407[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28381 === (1))){
var inst_28351 = cljs.core.vec.call(null,chs);
var inst_28352 = inst_28351;
var state_28380__$1 = (function (){var statearr_28385 = state_28380;
(statearr_28385[(10)] = inst_28352);

return statearr_28385;
})();
var statearr_28386_28408 = state_28380__$1;
(statearr_28386_28408[(2)] = null);

(statearr_28386_28408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28381 === (4))){
var inst_28352 = (state_28380[(10)]);
var state_28380__$1 = state_28380;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28380__$1,(7),inst_28352);
} else {
if((state_val_28381 === (6))){
var inst_28376 = (state_28380[(2)]);
var state_28380__$1 = state_28380;
var statearr_28387_28409 = state_28380__$1;
(statearr_28387_28409[(2)] = inst_28376);

(statearr_28387_28409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28381 === (3))){
var inst_28378 = (state_28380[(2)]);
var state_28380__$1 = state_28380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28380__$1,inst_28378);
} else {
if((state_val_28381 === (2))){
var inst_28352 = (state_28380[(10)]);
var inst_28354 = cljs.core.count.call(null,inst_28352);
var inst_28355 = (inst_28354 > (0));
var state_28380__$1 = state_28380;
if(cljs.core.truth_(inst_28355)){
var statearr_28389_28410 = state_28380__$1;
(statearr_28389_28410[(1)] = (4));

} else {
var statearr_28390_28411 = state_28380__$1;
(statearr_28390_28411[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28381 === (11))){
var inst_28352 = (state_28380[(10)]);
var inst_28369 = (state_28380[(2)]);
var tmp28388 = inst_28352;
var inst_28352__$1 = tmp28388;
var state_28380__$1 = (function (){var statearr_28391 = state_28380;
(statearr_28391[(10)] = inst_28352__$1);

(statearr_28391[(11)] = inst_28369);

return statearr_28391;
})();
var statearr_28392_28412 = state_28380__$1;
(statearr_28392_28412[(2)] = null);

(statearr_28392_28412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28381 === (9))){
var inst_28360 = (state_28380[(7)]);
var state_28380__$1 = state_28380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28380__$1,(11),out,inst_28360);
} else {
if((state_val_28381 === (5))){
var inst_28374 = cljs.core.async.close_BANG_.call(null,out);
var state_28380__$1 = state_28380;
var statearr_28393_28413 = state_28380__$1;
(statearr_28393_28413[(2)] = inst_28374);

(statearr_28393_28413[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28381 === (10))){
var inst_28372 = (state_28380[(2)]);
var state_28380__$1 = state_28380;
var statearr_28394_28414 = state_28380__$1;
(statearr_28394_28414[(2)] = inst_28372);

(statearr_28394_28414[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28381 === (8))){
var inst_28361 = (state_28380[(9)]);
var inst_28360 = (state_28380[(7)]);
var inst_28352 = (state_28380[(10)]);
var inst_28359 = (state_28380[(8)]);
var inst_28364 = (function (){var cs = inst_28352;
var vec__28357 = inst_28359;
var v = inst_28360;
var c = inst_28361;
return ((function (cs,vec__28357,v,c,inst_28361,inst_28360,inst_28352,inst_28359,state_val_28381,c__20316__auto___28405,out){
return (function (p1__28348_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28348_SHARP_);
});
;})(cs,vec__28357,v,c,inst_28361,inst_28360,inst_28352,inst_28359,state_val_28381,c__20316__auto___28405,out))
})();
var inst_28365 = cljs.core.filterv.call(null,inst_28364,inst_28352);
var inst_28352__$1 = inst_28365;
var state_28380__$1 = (function (){var statearr_28395 = state_28380;
(statearr_28395[(10)] = inst_28352__$1);

return statearr_28395;
})();
var statearr_28396_28415 = state_28380__$1;
(statearr_28396_28415[(2)] = null);

(statearr_28396_28415[(1)] = (2));


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
});})(c__20316__auto___28405,out))
;
return ((function (switch__20254__auto__,c__20316__auto___28405,out){
return (function() {
var cljs$core$async$state_machine__20255__auto__ = null;
var cljs$core$async$state_machine__20255__auto____0 = (function (){
var statearr_28400 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28400[(0)] = cljs$core$async$state_machine__20255__auto__);

(statearr_28400[(1)] = (1));

return statearr_28400;
});
var cljs$core$async$state_machine__20255__auto____1 = (function (state_28380){
while(true){
var ret_value__20256__auto__ = (function (){try{while(true){
var result__20257__auto__ = switch__20254__auto__.call(null,state_28380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20257__auto__;
}
break;
}
}catch (e28401){if((e28401 instanceof Object)){
var ex__20258__auto__ = e28401;
var statearr_28402_28416 = state_28380;
(statearr_28402_28416[(5)] = ex__20258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28417 = state_28380;
state_28380 = G__28417;
continue;
} else {
return ret_value__20256__auto__;
}
break;
}
});
cljs$core$async$state_machine__20255__auto__ = function(state_28380){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20255__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20255__auto____1.call(this,state_28380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20255__auto____0;
cljs$core$async$state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20255__auto____1;
return cljs$core$async$state_machine__20255__auto__;
})()
;})(switch__20254__auto__,c__20316__auto___28405,out))
})();
var state__20318__auto__ = (function (){var statearr_28403 = f__20317__auto__.call(null);
(statearr_28403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20316__auto___28405);

return statearr_28403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20318__auto__);
});})(c__20316__auto___28405,out))
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
var G__28419 = arguments.length;
switch (G__28419) {
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
var c__20316__auto___28467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20316__auto___28467,out){
return (function (){
var f__20317__auto__ = (function (){var switch__20254__auto__ = ((function (c__20316__auto___28467,out){
return (function (state_28443){
var state_val_28444 = (state_28443[(1)]);
if((state_val_28444 === (7))){
var inst_28425 = (state_28443[(7)]);
var inst_28425__$1 = (state_28443[(2)]);
var inst_28426 = (inst_28425__$1 == null);
var inst_28427 = cljs.core.not.call(null,inst_28426);
var state_28443__$1 = (function (){var statearr_28445 = state_28443;
(statearr_28445[(7)] = inst_28425__$1);

return statearr_28445;
})();
if(inst_28427){
var statearr_28446_28468 = state_28443__$1;
(statearr_28446_28468[(1)] = (8));

} else {
var statearr_28447_28469 = state_28443__$1;
(statearr_28447_28469[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (1))){
var inst_28420 = (0);
var state_28443__$1 = (function (){var statearr_28448 = state_28443;
(statearr_28448[(8)] = inst_28420);

return statearr_28448;
})();
var statearr_28449_28470 = state_28443__$1;
(statearr_28449_28470[(2)] = null);

(statearr_28449_28470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (4))){
var state_28443__$1 = state_28443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28443__$1,(7),ch);
} else {
if((state_val_28444 === (6))){
var inst_28438 = (state_28443[(2)]);
var state_28443__$1 = state_28443;
var statearr_28450_28471 = state_28443__$1;
(statearr_28450_28471[(2)] = inst_28438);

(statearr_28450_28471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (3))){
var inst_28440 = (state_28443[(2)]);
var inst_28441 = cljs.core.async.close_BANG_.call(null,out);
var state_28443__$1 = (function (){var statearr_28451 = state_28443;
(statearr_28451[(9)] = inst_28440);

return statearr_28451;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28443__$1,inst_28441);
} else {
if((state_val_28444 === (2))){
var inst_28420 = (state_28443[(8)]);
var inst_28422 = (inst_28420 < n);
var state_28443__$1 = state_28443;
if(cljs.core.truth_(inst_28422)){
var statearr_28452_28472 = state_28443__$1;
(statearr_28452_28472[(1)] = (4));

} else {
var statearr_28453_28473 = state_28443__$1;
(statearr_28453_28473[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (11))){
var inst_28420 = (state_28443[(8)]);
var inst_28430 = (state_28443[(2)]);
var inst_28431 = (inst_28420 + (1));
var inst_28420__$1 = inst_28431;
var state_28443__$1 = (function (){var statearr_28454 = state_28443;
(statearr_28454[(8)] = inst_28420__$1);

(statearr_28454[(10)] = inst_28430);

return statearr_28454;
})();
var statearr_28455_28474 = state_28443__$1;
(statearr_28455_28474[(2)] = null);

(statearr_28455_28474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (9))){
var state_28443__$1 = state_28443;
var statearr_28456_28475 = state_28443__$1;
(statearr_28456_28475[(2)] = null);

(statearr_28456_28475[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (5))){
var state_28443__$1 = state_28443;
var statearr_28457_28476 = state_28443__$1;
(statearr_28457_28476[(2)] = null);

(statearr_28457_28476[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (10))){
var inst_28435 = (state_28443[(2)]);
var state_28443__$1 = state_28443;
var statearr_28458_28477 = state_28443__$1;
(statearr_28458_28477[(2)] = inst_28435);

(statearr_28458_28477[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (8))){
var inst_28425 = (state_28443[(7)]);
var state_28443__$1 = state_28443;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28443__$1,(11),out,inst_28425);
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
});})(c__20316__auto___28467,out))
;
return ((function (switch__20254__auto__,c__20316__auto___28467,out){
return (function() {
var cljs$core$async$state_machine__20255__auto__ = null;
var cljs$core$async$state_machine__20255__auto____0 = (function (){
var statearr_28462 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28462[(0)] = cljs$core$async$state_machine__20255__auto__);

(statearr_28462[(1)] = (1));

return statearr_28462;
});
var cljs$core$async$state_machine__20255__auto____1 = (function (state_28443){
while(true){
var ret_value__20256__auto__ = (function (){try{while(true){
var result__20257__auto__ = switch__20254__auto__.call(null,state_28443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20257__auto__;
}
break;
}
}catch (e28463){if((e28463 instanceof Object)){
var ex__20258__auto__ = e28463;
var statearr_28464_28478 = state_28443;
(statearr_28464_28478[(5)] = ex__20258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28479 = state_28443;
state_28443 = G__28479;
continue;
} else {
return ret_value__20256__auto__;
}
break;
}
});
cljs$core$async$state_machine__20255__auto__ = function(state_28443){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20255__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20255__auto____1.call(this,state_28443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20255__auto____0;
cljs$core$async$state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20255__auto____1;
return cljs$core$async$state_machine__20255__auto__;
})()
;})(switch__20254__auto__,c__20316__auto___28467,out))
})();
var state__20318__auto__ = (function (){var statearr_28465 = f__20317__auto__.call(null);
(statearr_28465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20316__auto___28467);

return statearr_28465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20318__auto__);
});})(c__20316__auto___28467,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t28487 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28487 = (function (map_LT_,f,ch,meta28488){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28488 = meta28488;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28489,meta28488__$1){
var self__ = this;
var _28489__$1 = this;
return (new cljs.core.async.t28487(self__.map_LT_,self__.f,self__.ch,meta28488__$1));
});

cljs.core.async.t28487.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28489){
var self__ = this;
var _28489__$1 = this;
return self__.meta28488;
});

cljs.core.async.t28487.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28487.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28487.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28487.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28487.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t28490 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28490 = (function (map_LT_,f,ch,meta28488,_,fn1,meta28491){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28488 = meta28488;
this._ = _;
this.fn1 = fn1;
this.meta28491 = meta28491;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28492,meta28491__$1){
var self__ = this;
var _28492__$1 = this;
return (new cljs.core.async.t28490(self__.map_LT_,self__.f,self__.ch,self__.meta28488,self__._,self__.fn1,meta28491__$1));
});})(___$1))
;

cljs.core.async.t28490.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28492){
var self__ = this;
var _28492__$1 = this;
return self__.meta28491;
});})(___$1))
;

cljs.core.async.t28490.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28490.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t28490.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28480_SHARP_){
return f1.call(null,(((p1__28480_SHARP_ == null))?null:self__.f.call(null,p1__28480_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t28490.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28488","meta28488",1543589251,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28491","meta28491",1699691855,null)], null);
});})(___$1))
;

cljs.core.async.t28490.cljs$lang$type = true;

cljs.core.async.t28490.cljs$lang$ctorStr = "cljs.core.async/t28490";

cljs.core.async.t28490.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t28490");
});})(___$1))
;

cljs.core.async.__GT_t28490 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t28490(map_LT___$1,f__$1,ch__$1,meta28488__$1,___$2,fn1__$1,meta28491){
return (new cljs.core.async.t28490(map_LT___$1,f__$1,ch__$1,meta28488__$1,___$2,fn1__$1,meta28491));
});})(___$1))
;

}

return (new cljs.core.async.t28490(self__.map_LT_,self__.f,self__.ch,self__.meta28488,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t28487.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28487.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t28487.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28488","meta28488",1543589251,null)], null);
});

cljs.core.async.t28487.cljs$lang$type = true;

cljs.core.async.t28487.cljs$lang$ctorStr = "cljs.core.async/t28487";

cljs.core.async.t28487.cljs$lang$ctorPrWriter = (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t28487");
});

cljs.core.async.__GT_t28487 = (function cljs$core$async$map_LT__$___GT_t28487(map_LT___$1,f__$1,ch__$1,meta28488){
return (new cljs.core.async.t28487(map_LT___$1,f__$1,ch__$1,meta28488));
});

}

return (new cljs.core.async.t28487(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t28496 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28496 = (function (map_GT_,f,ch,meta28497){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta28497 = meta28497;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28498,meta28497__$1){
var self__ = this;
var _28498__$1 = this;
return (new cljs.core.async.t28496(self__.map_GT_,self__.f,self__.ch,meta28497__$1));
});

cljs.core.async.t28496.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28498){
var self__ = this;
var _28498__$1 = this;
return self__.meta28497;
});

cljs.core.async.t28496.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28496.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28496.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28496.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28496.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28496.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t28496.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28497","meta28497",1806249472,null)], null);
});

cljs.core.async.t28496.cljs$lang$type = true;

cljs.core.async.t28496.cljs$lang$ctorStr = "cljs.core.async/t28496";

cljs.core.async.t28496.cljs$lang$ctorPrWriter = (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t28496");
});

cljs.core.async.__GT_t28496 = (function cljs$core$async$map_GT__$___GT_t28496(map_GT___$1,f__$1,ch__$1,meta28497){
return (new cljs.core.async.t28496(map_GT___$1,f__$1,ch__$1,meta28497));
});

}

return (new cljs.core.async.t28496(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t28502 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28502 = (function (filter_GT_,p,ch,meta28503){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta28503 = meta28503;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28504,meta28503__$1){
var self__ = this;
var _28504__$1 = this;
return (new cljs.core.async.t28502(self__.filter_GT_,self__.p,self__.ch,meta28503__$1));
});

cljs.core.async.t28502.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28504){
var self__ = this;
var _28504__$1 = this;
return self__.meta28503;
});

cljs.core.async.t28502.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28502.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28502.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28502.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28502.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28502.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28502.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t28502.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28503","meta28503",2050016565,null)], null);
});

cljs.core.async.t28502.cljs$lang$type = true;

cljs.core.async.t28502.cljs$lang$ctorStr = "cljs.core.async/t28502";

cljs.core.async.t28502.cljs$lang$ctorPrWriter = (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t28502");
});

cljs.core.async.__GT_t28502 = (function cljs$core$async$filter_GT__$___GT_t28502(filter_GT___$1,p__$1,ch__$1,meta28503){
return (new cljs.core.async.t28502(filter_GT___$1,p__$1,ch__$1,meta28503));
});

}

return (new cljs.core.async.t28502(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28506 = arguments.length;
switch (G__28506) {
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
var c__20316__auto___28549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20316__auto___28549,out){
return (function (){
var f__20317__auto__ = (function (){var switch__20254__auto__ = ((function (c__20316__auto___28549,out){
return (function (state_28527){
var state_val_28528 = (state_28527[(1)]);
if((state_val_28528 === (7))){
var inst_28523 = (state_28527[(2)]);
var state_28527__$1 = state_28527;
var statearr_28529_28550 = state_28527__$1;
(statearr_28529_28550[(2)] = inst_28523);

(statearr_28529_28550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (1))){
var state_28527__$1 = state_28527;
var statearr_28530_28551 = state_28527__$1;
(statearr_28530_28551[(2)] = null);

(statearr_28530_28551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (4))){
var inst_28509 = (state_28527[(7)]);
var inst_28509__$1 = (state_28527[(2)]);
var inst_28510 = (inst_28509__$1 == null);
var state_28527__$1 = (function (){var statearr_28531 = state_28527;
(statearr_28531[(7)] = inst_28509__$1);

return statearr_28531;
})();
if(cljs.core.truth_(inst_28510)){
var statearr_28532_28552 = state_28527__$1;
(statearr_28532_28552[(1)] = (5));

} else {
var statearr_28533_28553 = state_28527__$1;
(statearr_28533_28553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (6))){
var inst_28509 = (state_28527[(7)]);
var inst_28514 = p.call(null,inst_28509);
var state_28527__$1 = state_28527;
if(cljs.core.truth_(inst_28514)){
var statearr_28534_28554 = state_28527__$1;
(statearr_28534_28554[(1)] = (8));

} else {
var statearr_28535_28555 = state_28527__$1;
(statearr_28535_28555[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (3))){
var inst_28525 = (state_28527[(2)]);
var state_28527__$1 = state_28527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28527__$1,inst_28525);
} else {
if((state_val_28528 === (2))){
var state_28527__$1 = state_28527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28527__$1,(4),ch);
} else {
if((state_val_28528 === (11))){
var inst_28517 = (state_28527[(2)]);
var state_28527__$1 = state_28527;
var statearr_28536_28556 = state_28527__$1;
(statearr_28536_28556[(2)] = inst_28517);

(statearr_28536_28556[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (9))){
var state_28527__$1 = state_28527;
var statearr_28537_28557 = state_28527__$1;
(statearr_28537_28557[(2)] = null);

(statearr_28537_28557[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (5))){
var inst_28512 = cljs.core.async.close_BANG_.call(null,out);
var state_28527__$1 = state_28527;
var statearr_28538_28558 = state_28527__$1;
(statearr_28538_28558[(2)] = inst_28512);

(statearr_28538_28558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (10))){
var inst_28520 = (state_28527[(2)]);
var state_28527__$1 = (function (){var statearr_28539 = state_28527;
(statearr_28539[(8)] = inst_28520);

return statearr_28539;
})();
var statearr_28540_28559 = state_28527__$1;
(statearr_28540_28559[(2)] = null);

(statearr_28540_28559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (8))){
var inst_28509 = (state_28527[(7)]);
var state_28527__$1 = state_28527;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28527__$1,(11),out,inst_28509);
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
});})(c__20316__auto___28549,out))
;
return ((function (switch__20254__auto__,c__20316__auto___28549,out){
return (function() {
var cljs$core$async$state_machine__20255__auto__ = null;
var cljs$core$async$state_machine__20255__auto____0 = (function (){
var statearr_28544 = [null,null,null,null,null,null,null,null,null];
(statearr_28544[(0)] = cljs$core$async$state_machine__20255__auto__);

(statearr_28544[(1)] = (1));

return statearr_28544;
});
var cljs$core$async$state_machine__20255__auto____1 = (function (state_28527){
while(true){
var ret_value__20256__auto__ = (function (){try{while(true){
var result__20257__auto__ = switch__20254__auto__.call(null,state_28527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20257__auto__;
}
break;
}
}catch (e28545){if((e28545 instanceof Object)){
var ex__20258__auto__ = e28545;
var statearr_28546_28560 = state_28527;
(statearr_28546_28560[(5)] = ex__20258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28561 = state_28527;
state_28527 = G__28561;
continue;
} else {
return ret_value__20256__auto__;
}
break;
}
});
cljs$core$async$state_machine__20255__auto__ = function(state_28527){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20255__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20255__auto____1.call(this,state_28527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20255__auto____0;
cljs$core$async$state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20255__auto____1;
return cljs$core$async$state_machine__20255__auto__;
})()
;})(switch__20254__auto__,c__20316__auto___28549,out))
})();
var state__20318__auto__ = (function (){var statearr_28547 = f__20317__auto__.call(null);
(statearr_28547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20316__auto___28549);

return statearr_28547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20318__auto__);
});})(c__20316__auto___28549,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__28563 = arguments.length;
switch (G__28563) {
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
var c__20316__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20316__auto__){
return (function (){
var f__20317__auto__ = (function (){var switch__20254__auto__ = ((function (c__20316__auto__){
return (function (state_28730){
var state_val_28731 = (state_28730[(1)]);
if((state_val_28731 === (7))){
var inst_28726 = (state_28730[(2)]);
var state_28730__$1 = state_28730;
var statearr_28732_28773 = state_28730__$1;
(statearr_28732_28773[(2)] = inst_28726);

(statearr_28732_28773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28731 === (20))){
var inst_28696 = (state_28730[(7)]);
var inst_28707 = (state_28730[(2)]);
var inst_28708 = cljs.core.next.call(null,inst_28696);
var inst_28682 = inst_28708;
var inst_28683 = null;
var inst_28684 = (0);
var inst_28685 = (0);
var state_28730__$1 = (function (){var statearr_28733 = state_28730;
(statearr_28733[(8)] = inst_28707);

(statearr_28733[(9)] = inst_28685);

(statearr_28733[(10)] = inst_28684);

(statearr_28733[(11)] = inst_28682);

(statearr_28733[(12)] = inst_28683);

return statearr_28733;
})();
var statearr_28734_28774 = state_28730__$1;
(statearr_28734_28774[(2)] = null);

(statearr_28734_28774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28731 === (1))){
var state_28730__$1 = state_28730;
var statearr_28735_28775 = state_28730__$1;
(statearr_28735_28775[(2)] = null);

(statearr_28735_28775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28731 === (4))){
var inst_28671 = (state_28730[(13)]);
var inst_28671__$1 = (state_28730[(2)]);
var inst_28672 = (inst_28671__$1 == null);
var state_28730__$1 = (function (){var statearr_28736 = state_28730;
(statearr_28736[(13)] = inst_28671__$1);

return statearr_28736;
})();
if(cljs.core.truth_(inst_28672)){
var statearr_28737_28776 = state_28730__$1;
(statearr_28737_28776[(1)] = (5));

} else {
var statearr_28738_28777 = state_28730__$1;
(statearr_28738_28777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28731 === (15))){
var state_28730__$1 = state_28730;
var statearr_28742_28778 = state_28730__$1;
(statearr_28742_28778[(2)] = null);

(statearr_28742_28778[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28731 === (21))){
var state_28730__$1 = state_28730;
var statearr_28743_28779 = state_28730__$1;
(statearr_28743_28779[(2)] = null);

(statearr_28743_28779[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28731 === (13))){
var inst_28685 = (state_28730[(9)]);
var inst_28684 = (state_28730[(10)]);
var inst_28682 = (state_28730[(11)]);
var inst_28683 = (state_28730[(12)]);
var inst_28692 = (state_28730[(2)]);
var inst_28693 = (inst_28685 + (1));
var tmp28739 = inst_28684;
var tmp28740 = inst_28682;
var tmp28741 = inst_28683;
var inst_28682__$1 = tmp28740;
var inst_28683__$1 = tmp28741;
var inst_28684__$1 = tmp28739;
var inst_28685__$1 = inst_28693;
var state_28730__$1 = (function (){var statearr_28744 = state_28730;
(statearr_28744[(14)] = inst_28692);

(statearr_28744[(9)] = inst_28685__$1);

(statearr_28744[(10)] = inst_28684__$1);

(statearr_28744[(11)] = inst_28682__$1);

(statearr_28744[(12)] = inst_28683__$1);

return statearr_28744;
})();
var statearr_28745_28780 = state_28730__$1;
(statearr_28745_28780[(2)] = null);

(statearr_28745_28780[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28731 === (22))){
var state_28730__$1 = state_28730;
var statearr_28746_28781 = state_28730__$1;
(statearr_28746_28781[(2)] = null);

(statearr_28746_28781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28731 === (6))){
var inst_28671 = (state_28730[(13)]);
var inst_28680 = f.call(null,inst_28671);
var inst_28681 = cljs.core.seq.call(null,inst_28680);
var inst_28682 = inst_28681;
var inst_28683 = null;
var inst_28684 = (0);
var inst_28685 = (0);
var state_28730__$1 = (function (){var statearr_28747 = state_28730;
(statearr_28747[(9)] = inst_28685);

(statearr_28747[(10)] = inst_28684);

(statearr_28747[(11)] = inst_28682);

(statearr_28747[(12)] = inst_28683);

return statearr_28747;
})();
var statearr_28748_28782 = state_28730__$1;
(statearr_28748_28782[(2)] = null);

(statearr_28748_28782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28731 === (17))){
var inst_28696 = (state_28730[(7)]);
var inst_28700 = cljs.core.chunk_first.call(null,inst_28696);
var inst_28701 = cljs.core.chunk_rest.call(null,inst_28696);
var inst_28702 = cljs.core.count.call(null,inst_28700);
var inst_28682 = inst_28701;
var inst_28683 = inst_28700;
var inst_28684 = inst_28702;
var inst_28685 = (0);
var state_28730__$1 = (function (){var statearr_28749 = state_28730;
(statearr_28749[(9)] = inst_28685);

(statearr_28749[(10)] = inst_28684);

(statearr_28749[(11)] = inst_28682);

(statearr_28749[(12)] = inst_28683);

return statearr_28749;
})();
var statearr_28750_28783 = state_28730__$1;
(statearr_28750_28783[(2)] = null);

(statearr_28750_28783[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28731 === (3))){
var inst_28728 = (state_28730[(2)]);
var state_28730__$1 = state_28730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28730__$1,inst_28728);
} else {
if((state_val_28731 === (12))){
var inst_28716 = (state_28730[(2)]);
var state_28730__$1 = state_28730;
var statearr_28751_28784 = state_28730__$1;
(statearr_28751_28784[(2)] = inst_28716);

(statearr_28751_28784[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28731 === (2))){
var state_28730__$1 = state_28730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28730__$1,(4),in$);
} else {
if((state_val_28731 === (23))){
var inst_28724 = (state_28730[(2)]);
var state_28730__$1 = state_28730;
var statearr_28752_28785 = state_28730__$1;
(statearr_28752_28785[(2)] = inst_28724);

(statearr_28752_28785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28731 === (19))){
var inst_28711 = (state_28730[(2)]);
var state_28730__$1 = state_28730;
var statearr_28753_28786 = state_28730__$1;
(statearr_28753_28786[(2)] = inst_28711);

(statearr_28753_28786[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28731 === (11))){
var inst_28696 = (state_28730[(7)]);
var inst_28682 = (state_28730[(11)]);
var inst_28696__$1 = cljs.core.seq.call(null,inst_28682);
var state_28730__$1 = (function (){var statearr_28754 = state_28730;
(statearr_28754[(7)] = inst_28696__$1);

return statearr_28754;
})();
if(inst_28696__$1){
var statearr_28755_28787 = state_28730__$1;
(statearr_28755_28787[(1)] = (14));

} else {
var statearr_28756_28788 = state_28730__$1;
(statearr_28756_28788[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28731 === (9))){
var inst_28718 = (state_28730[(2)]);
var inst_28719 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28730__$1 = (function (){var statearr_28757 = state_28730;
(statearr_28757[(15)] = inst_28718);

return statearr_28757;
})();
if(cljs.core.truth_(inst_28719)){
var statearr_28758_28789 = state_28730__$1;
(statearr_28758_28789[(1)] = (21));

} else {
var statearr_28759_28790 = state_28730__$1;
(statearr_28759_28790[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28731 === (5))){
var inst_28674 = cljs.core.async.close_BANG_.call(null,out);
var state_28730__$1 = state_28730;
var statearr_28760_28791 = state_28730__$1;
(statearr_28760_28791[(2)] = inst_28674);

(statearr_28760_28791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28731 === (14))){
var inst_28696 = (state_28730[(7)]);
var inst_28698 = cljs.core.chunked_seq_QMARK_.call(null,inst_28696);
var state_28730__$1 = state_28730;
if(inst_28698){
var statearr_28761_28792 = state_28730__$1;
(statearr_28761_28792[(1)] = (17));

} else {
var statearr_28762_28793 = state_28730__$1;
(statearr_28762_28793[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28731 === (16))){
var inst_28714 = (state_28730[(2)]);
var state_28730__$1 = state_28730;
var statearr_28763_28794 = state_28730__$1;
(statearr_28763_28794[(2)] = inst_28714);

(statearr_28763_28794[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28731 === (10))){
var inst_28685 = (state_28730[(9)]);
var inst_28683 = (state_28730[(12)]);
var inst_28690 = cljs.core._nth.call(null,inst_28683,inst_28685);
var state_28730__$1 = state_28730;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28730__$1,(13),out,inst_28690);
} else {
if((state_val_28731 === (18))){
var inst_28696 = (state_28730[(7)]);
var inst_28705 = cljs.core.first.call(null,inst_28696);
var state_28730__$1 = state_28730;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28730__$1,(20),out,inst_28705);
} else {
if((state_val_28731 === (8))){
var inst_28685 = (state_28730[(9)]);
var inst_28684 = (state_28730[(10)]);
var inst_28687 = (inst_28685 < inst_28684);
var inst_28688 = inst_28687;
var state_28730__$1 = state_28730;
if(cljs.core.truth_(inst_28688)){
var statearr_28764_28795 = state_28730__$1;
(statearr_28764_28795[(1)] = (10));

} else {
var statearr_28765_28796 = state_28730__$1;
(statearr_28765_28796[(1)] = (11));

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
});})(c__20316__auto__))
;
return ((function (switch__20254__auto__,c__20316__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20255__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20255__auto____0 = (function (){
var statearr_28769 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28769[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20255__auto__);

(statearr_28769[(1)] = (1));

return statearr_28769;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20255__auto____1 = (function (state_28730){
while(true){
var ret_value__20256__auto__ = (function (){try{while(true){
var result__20257__auto__ = switch__20254__auto__.call(null,state_28730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20257__auto__;
}
break;
}
}catch (e28770){if((e28770 instanceof Object)){
var ex__20258__auto__ = e28770;
var statearr_28771_28797 = state_28730;
(statearr_28771_28797[(5)] = ex__20258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28798 = state_28730;
state_28730 = G__28798;
continue;
} else {
return ret_value__20256__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20255__auto__ = function(state_28730){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20255__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20255__auto____1.call(this,state_28730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20255__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20255__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20255__auto__;
})()
;})(switch__20254__auto__,c__20316__auto__))
})();
var state__20318__auto__ = (function (){var statearr_28772 = f__20317__auto__.call(null);
(statearr_28772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20316__auto__);

return statearr_28772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20318__auto__);
});})(c__20316__auto__))
);

return c__20316__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__28800 = arguments.length;
switch (G__28800) {
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
var G__28803 = arguments.length;
switch (G__28803) {
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
var G__28806 = arguments.length;
switch (G__28806) {
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
var c__20316__auto___28856 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20316__auto___28856,out){
return (function (){
var f__20317__auto__ = (function (){var switch__20254__auto__ = ((function (c__20316__auto___28856,out){
return (function (state_28830){
var state_val_28831 = (state_28830[(1)]);
if((state_val_28831 === (7))){
var inst_28825 = (state_28830[(2)]);
var state_28830__$1 = state_28830;
var statearr_28832_28857 = state_28830__$1;
(statearr_28832_28857[(2)] = inst_28825);

(statearr_28832_28857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (1))){
var inst_28807 = null;
var state_28830__$1 = (function (){var statearr_28833 = state_28830;
(statearr_28833[(7)] = inst_28807);

return statearr_28833;
})();
var statearr_28834_28858 = state_28830__$1;
(statearr_28834_28858[(2)] = null);

(statearr_28834_28858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (4))){
var inst_28810 = (state_28830[(8)]);
var inst_28810__$1 = (state_28830[(2)]);
var inst_28811 = (inst_28810__$1 == null);
var inst_28812 = cljs.core.not.call(null,inst_28811);
var state_28830__$1 = (function (){var statearr_28835 = state_28830;
(statearr_28835[(8)] = inst_28810__$1);

return statearr_28835;
})();
if(inst_28812){
var statearr_28836_28859 = state_28830__$1;
(statearr_28836_28859[(1)] = (5));

} else {
var statearr_28837_28860 = state_28830__$1;
(statearr_28837_28860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (6))){
var state_28830__$1 = state_28830;
var statearr_28838_28861 = state_28830__$1;
(statearr_28838_28861[(2)] = null);

(statearr_28838_28861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (3))){
var inst_28827 = (state_28830[(2)]);
var inst_28828 = cljs.core.async.close_BANG_.call(null,out);
var state_28830__$1 = (function (){var statearr_28839 = state_28830;
(statearr_28839[(9)] = inst_28827);

return statearr_28839;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28830__$1,inst_28828);
} else {
if((state_val_28831 === (2))){
var state_28830__$1 = state_28830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28830__$1,(4),ch);
} else {
if((state_val_28831 === (11))){
var inst_28810 = (state_28830[(8)]);
var inst_28819 = (state_28830[(2)]);
var inst_28807 = inst_28810;
var state_28830__$1 = (function (){var statearr_28840 = state_28830;
(statearr_28840[(7)] = inst_28807);

(statearr_28840[(10)] = inst_28819);

return statearr_28840;
})();
var statearr_28841_28862 = state_28830__$1;
(statearr_28841_28862[(2)] = null);

(statearr_28841_28862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (9))){
var inst_28810 = (state_28830[(8)]);
var state_28830__$1 = state_28830;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28830__$1,(11),out,inst_28810);
} else {
if((state_val_28831 === (5))){
var inst_28810 = (state_28830[(8)]);
var inst_28807 = (state_28830[(7)]);
var inst_28814 = cljs.core._EQ_.call(null,inst_28810,inst_28807);
var state_28830__$1 = state_28830;
if(inst_28814){
var statearr_28843_28863 = state_28830__$1;
(statearr_28843_28863[(1)] = (8));

} else {
var statearr_28844_28864 = state_28830__$1;
(statearr_28844_28864[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (10))){
var inst_28822 = (state_28830[(2)]);
var state_28830__$1 = state_28830;
var statearr_28845_28865 = state_28830__$1;
(statearr_28845_28865[(2)] = inst_28822);

(statearr_28845_28865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (8))){
var inst_28807 = (state_28830[(7)]);
var tmp28842 = inst_28807;
var inst_28807__$1 = tmp28842;
var state_28830__$1 = (function (){var statearr_28846 = state_28830;
(statearr_28846[(7)] = inst_28807__$1);

return statearr_28846;
})();
var statearr_28847_28866 = state_28830__$1;
(statearr_28847_28866[(2)] = null);

(statearr_28847_28866[(1)] = (2));


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
});})(c__20316__auto___28856,out))
;
return ((function (switch__20254__auto__,c__20316__auto___28856,out){
return (function() {
var cljs$core$async$state_machine__20255__auto__ = null;
var cljs$core$async$state_machine__20255__auto____0 = (function (){
var statearr_28851 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28851[(0)] = cljs$core$async$state_machine__20255__auto__);

(statearr_28851[(1)] = (1));

return statearr_28851;
});
var cljs$core$async$state_machine__20255__auto____1 = (function (state_28830){
while(true){
var ret_value__20256__auto__ = (function (){try{while(true){
var result__20257__auto__ = switch__20254__auto__.call(null,state_28830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20257__auto__;
}
break;
}
}catch (e28852){if((e28852 instanceof Object)){
var ex__20258__auto__ = e28852;
var statearr_28853_28867 = state_28830;
(statearr_28853_28867[(5)] = ex__20258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28868 = state_28830;
state_28830 = G__28868;
continue;
} else {
return ret_value__20256__auto__;
}
break;
}
});
cljs$core$async$state_machine__20255__auto__ = function(state_28830){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20255__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20255__auto____1.call(this,state_28830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20255__auto____0;
cljs$core$async$state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20255__auto____1;
return cljs$core$async$state_machine__20255__auto__;
})()
;})(switch__20254__auto__,c__20316__auto___28856,out))
})();
var state__20318__auto__ = (function (){var statearr_28854 = f__20317__auto__.call(null);
(statearr_28854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20316__auto___28856);

return statearr_28854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20318__auto__);
});})(c__20316__auto___28856,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__28870 = arguments.length;
switch (G__28870) {
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
var c__20316__auto___28939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20316__auto___28939,out){
return (function (){
var f__20317__auto__ = (function (){var switch__20254__auto__ = ((function (c__20316__auto___28939,out){
return (function (state_28908){
var state_val_28909 = (state_28908[(1)]);
if((state_val_28909 === (7))){
var inst_28904 = (state_28908[(2)]);
var state_28908__$1 = state_28908;
var statearr_28910_28940 = state_28908__$1;
(statearr_28910_28940[(2)] = inst_28904);

(statearr_28910_28940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (1))){
var inst_28871 = (new Array(n));
var inst_28872 = inst_28871;
var inst_28873 = (0);
var state_28908__$1 = (function (){var statearr_28911 = state_28908;
(statearr_28911[(7)] = inst_28872);

(statearr_28911[(8)] = inst_28873);

return statearr_28911;
})();
var statearr_28912_28941 = state_28908__$1;
(statearr_28912_28941[(2)] = null);

(statearr_28912_28941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (4))){
var inst_28876 = (state_28908[(9)]);
var inst_28876__$1 = (state_28908[(2)]);
var inst_28877 = (inst_28876__$1 == null);
var inst_28878 = cljs.core.not.call(null,inst_28877);
var state_28908__$1 = (function (){var statearr_28913 = state_28908;
(statearr_28913[(9)] = inst_28876__$1);

return statearr_28913;
})();
if(inst_28878){
var statearr_28914_28942 = state_28908__$1;
(statearr_28914_28942[(1)] = (5));

} else {
var statearr_28915_28943 = state_28908__$1;
(statearr_28915_28943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (15))){
var inst_28898 = (state_28908[(2)]);
var state_28908__$1 = state_28908;
var statearr_28916_28944 = state_28908__$1;
(statearr_28916_28944[(2)] = inst_28898);

(statearr_28916_28944[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (13))){
var state_28908__$1 = state_28908;
var statearr_28917_28945 = state_28908__$1;
(statearr_28917_28945[(2)] = null);

(statearr_28917_28945[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (6))){
var inst_28873 = (state_28908[(8)]);
var inst_28894 = (inst_28873 > (0));
var state_28908__$1 = state_28908;
if(cljs.core.truth_(inst_28894)){
var statearr_28918_28946 = state_28908__$1;
(statearr_28918_28946[(1)] = (12));

} else {
var statearr_28919_28947 = state_28908__$1;
(statearr_28919_28947[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (3))){
var inst_28906 = (state_28908[(2)]);
var state_28908__$1 = state_28908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28908__$1,inst_28906);
} else {
if((state_val_28909 === (12))){
var inst_28872 = (state_28908[(7)]);
var inst_28896 = cljs.core.vec.call(null,inst_28872);
var state_28908__$1 = state_28908;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28908__$1,(15),out,inst_28896);
} else {
if((state_val_28909 === (2))){
var state_28908__$1 = state_28908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28908__$1,(4),ch);
} else {
if((state_val_28909 === (11))){
var inst_28888 = (state_28908[(2)]);
var inst_28889 = (new Array(n));
var inst_28872 = inst_28889;
var inst_28873 = (0);
var state_28908__$1 = (function (){var statearr_28920 = state_28908;
(statearr_28920[(10)] = inst_28888);

(statearr_28920[(7)] = inst_28872);

(statearr_28920[(8)] = inst_28873);

return statearr_28920;
})();
var statearr_28921_28948 = state_28908__$1;
(statearr_28921_28948[(2)] = null);

(statearr_28921_28948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (9))){
var inst_28872 = (state_28908[(7)]);
var inst_28886 = cljs.core.vec.call(null,inst_28872);
var state_28908__$1 = state_28908;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28908__$1,(11),out,inst_28886);
} else {
if((state_val_28909 === (5))){
var inst_28872 = (state_28908[(7)]);
var inst_28881 = (state_28908[(11)]);
var inst_28873 = (state_28908[(8)]);
var inst_28876 = (state_28908[(9)]);
var inst_28880 = (inst_28872[inst_28873] = inst_28876);
var inst_28881__$1 = (inst_28873 + (1));
var inst_28882 = (inst_28881__$1 < n);
var state_28908__$1 = (function (){var statearr_28922 = state_28908;
(statearr_28922[(11)] = inst_28881__$1);

(statearr_28922[(12)] = inst_28880);

return statearr_28922;
})();
if(cljs.core.truth_(inst_28882)){
var statearr_28923_28949 = state_28908__$1;
(statearr_28923_28949[(1)] = (8));

} else {
var statearr_28924_28950 = state_28908__$1;
(statearr_28924_28950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (14))){
var inst_28901 = (state_28908[(2)]);
var inst_28902 = cljs.core.async.close_BANG_.call(null,out);
var state_28908__$1 = (function (){var statearr_28926 = state_28908;
(statearr_28926[(13)] = inst_28901);

return statearr_28926;
})();
var statearr_28927_28951 = state_28908__$1;
(statearr_28927_28951[(2)] = inst_28902);

(statearr_28927_28951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (10))){
var inst_28892 = (state_28908[(2)]);
var state_28908__$1 = state_28908;
var statearr_28928_28952 = state_28908__$1;
(statearr_28928_28952[(2)] = inst_28892);

(statearr_28928_28952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (8))){
var inst_28872 = (state_28908[(7)]);
var inst_28881 = (state_28908[(11)]);
var tmp28925 = inst_28872;
var inst_28872__$1 = tmp28925;
var inst_28873 = inst_28881;
var state_28908__$1 = (function (){var statearr_28929 = state_28908;
(statearr_28929[(7)] = inst_28872__$1);

(statearr_28929[(8)] = inst_28873);

return statearr_28929;
})();
var statearr_28930_28953 = state_28908__$1;
(statearr_28930_28953[(2)] = null);

(statearr_28930_28953[(1)] = (2));


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
});})(c__20316__auto___28939,out))
;
return ((function (switch__20254__auto__,c__20316__auto___28939,out){
return (function() {
var cljs$core$async$state_machine__20255__auto__ = null;
var cljs$core$async$state_machine__20255__auto____0 = (function (){
var statearr_28934 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28934[(0)] = cljs$core$async$state_machine__20255__auto__);

(statearr_28934[(1)] = (1));

return statearr_28934;
});
var cljs$core$async$state_machine__20255__auto____1 = (function (state_28908){
while(true){
var ret_value__20256__auto__ = (function (){try{while(true){
var result__20257__auto__ = switch__20254__auto__.call(null,state_28908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20257__auto__;
}
break;
}
}catch (e28935){if((e28935 instanceof Object)){
var ex__20258__auto__ = e28935;
var statearr_28936_28954 = state_28908;
(statearr_28936_28954[(5)] = ex__20258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28955 = state_28908;
state_28908 = G__28955;
continue;
} else {
return ret_value__20256__auto__;
}
break;
}
});
cljs$core$async$state_machine__20255__auto__ = function(state_28908){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20255__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20255__auto____1.call(this,state_28908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20255__auto____0;
cljs$core$async$state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20255__auto____1;
return cljs$core$async$state_machine__20255__auto__;
})()
;})(switch__20254__auto__,c__20316__auto___28939,out))
})();
var state__20318__auto__ = (function (){var statearr_28937 = f__20317__auto__.call(null);
(statearr_28937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20316__auto___28939);

return statearr_28937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20318__auto__);
});})(c__20316__auto___28939,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__28957 = arguments.length;
switch (G__28957) {
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
var c__20316__auto___29030 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20316__auto___29030,out){
return (function (){
var f__20317__auto__ = (function (){var switch__20254__auto__ = ((function (c__20316__auto___29030,out){
return (function (state_28999){
var state_val_29000 = (state_28999[(1)]);
if((state_val_29000 === (7))){
var inst_28995 = (state_28999[(2)]);
var state_28999__$1 = state_28999;
var statearr_29001_29031 = state_28999__$1;
(statearr_29001_29031[(2)] = inst_28995);

(statearr_29001_29031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29000 === (1))){
var inst_28958 = [];
var inst_28959 = inst_28958;
var inst_28960 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28999__$1 = (function (){var statearr_29002 = state_28999;
(statearr_29002[(7)] = inst_28960);

(statearr_29002[(8)] = inst_28959);

return statearr_29002;
})();
var statearr_29003_29032 = state_28999__$1;
(statearr_29003_29032[(2)] = null);

(statearr_29003_29032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29000 === (4))){
var inst_28963 = (state_28999[(9)]);
var inst_28963__$1 = (state_28999[(2)]);
var inst_28964 = (inst_28963__$1 == null);
var inst_28965 = cljs.core.not.call(null,inst_28964);
var state_28999__$1 = (function (){var statearr_29004 = state_28999;
(statearr_29004[(9)] = inst_28963__$1);

return statearr_29004;
})();
if(inst_28965){
var statearr_29005_29033 = state_28999__$1;
(statearr_29005_29033[(1)] = (5));

} else {
var statearr_29006_29034 = state_28999__$1;
(statearr_29006_29034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29000 === (15))){
var inst_28989 = (state_28999[(2)]);
var state_28999__$1 = state_28999;
var statearr_29007_29035 = state_28999__$1;
(statearr_29007_29035[(2)] = inst_28989);

(statearr_29007_29035[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29000 === (13))){
var state_28999__$1 = state_28999;
var statearr_29008_29036 = state_28999__$1;
(statearr_29008_29036[(2)] = null);

(statearr_29008_29036[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29000 === (6))){
var inst_28959 = (state_28999[(8)]);
var inst_28984 = inst_28959.length;
var inst_28985 = (inst_28984 > (0));
var state_28999__$1 = state_28999;
if(cljs.core.truth_(inst_28985)){
var statearr_29009_29037 = state_28999__$1;
(statearr_29009_29037[(1)] = (12));

} else {
var statearr_29010_29038 = state_28999__$1;
(statearr_29010_29038[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29000 === (3))){
var inst_28997 = (state_28999[(2)]);
var state_28999__$1 = state_28999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28999__$1,inst_28997);
} else {
if((state_val_29000 === (12))){
var inst_28959 = (state_28999[(8)]);
var inst_28987 = cljs.core.vec.call(null,inst_28959);
var state_28999__$1 = state_28999;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28999__$1,(15),out,inst_28987);
} else {
if((state_val_29000 === (2))){
var state_28999__$1 = state_28999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28999__$1,(4),ch);
} else {
if((state_val_29000 === (11))){
var inst_28963 = (state_28999[(9)]);
var inst_28967 = (state_28999[(10)]);
var inst_28977 = (state_28999[(2)]);
var inst_28978 = [];
var inst_28979 = inst_28978.push(inst_28963);
var inst_28959 = inst_28978;
var inst_28960 = inst_28967;
var state_28999__$1 = (function (){var statearr_29011 = state_28999;
(statearr_29011[(11)] = inst_28977);

(statearr_29011[(7)] = inst_28960);

(statearr_29011[(8)] = inst_28959);

(statearr_29011[(12)] = inst_28979);

return statearr_29011;
})();
var statearr_29012_29039 = state_28999__$1;
(statearr_29012_29039[(2)] = null);

(statearr_29012_29039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29000 === (9))){
var inst_28959 = (state_28999[(8)]);
var inst_28975 = cljs.core.vec.call(null,inst_28959);
var state_28999__$1 = state_28999;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28999__$1,(11),out,inst_28975);
} else {
if((state_val_29000 === (5))){
var inst_28963 = (state_28999[(9)]);
var inst_28960 = (state_28999[(7)]);
var inst_28967 = (state_28999[(10)]);
var inst_28967__$1 = f.call(null,inst_28963);
var inst_28968 = cljs.core._EQ_.call(null,inst_28967__$1,inst_28960);
var inst_28969 = cljs.core.keyword_identical_QMARK_.call(null,inst_28960,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28970 = (inst_28968) || (inst_28969);
var state_28999__$1 = (function (){var statearr_29013 = state_28999;
(statearr_29013[(10)] = inst_28967__$1);

return statearr_29013;
})();
if(cljs.core.truth_(inst_28970)){
var statearr_29014_29040 = state_28999__$1;
(statearr_29014_29040[(1)] = (8));

} else {
var statearr_29015_29041 = state_28999__$1;
(statearr_29015_29041[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29000 === (14))){
var inst_28992 = (state_28999[(2)]);
var inst_28993 = cljs.core.async.close_BANG_.call(null,out);
var state_28999__$1 = (function (){var statearr_29017 = state_28999;
(statearr_29017[(13)] = inst_28992);

return statearr_29017;
})();
var statearr_29018_29042 = state_28999__$1;
(statearr_29018_29042[(2)] = inst_28993);

(statearr_29018_29042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29000 === (10))){
var inst_28982 = (state_28999[(2)]);
var state_28999__$1 = state_28999;
var statearr_29019_29043 = state_28999__$1;
(statearr_29019_29043[(2)] = inst_28982);

(statearr_29019_29043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29000 === (8))){
var inst_28963 = (state_28999[(9)]);
var inst_28967 = (state_28999[(10)]);
var inst_28959 = (state_28999[(8)]);
var inst_28972 = inst_28959.push(inst_28963);
var tmp29016 = inst_28959;
var inst_28959__$1 = tmp29016;
var inst_28960 = inst_28967;
var state_28999__$1 = (function (){var statearr_29020 = state_28999;
(statearr_29020[(7)] = inst_28960);

(statearr_29020[(8)] = inst_28959__$1);

(statearr_29020[(14)] = inst_28972);

return statearr_29020;
})();
var statearr_29021_29044 = state_28999__$1;
(statearr_29021_29044[(2)] = null);

(statearr_29021_29044[(1)] = (2));


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
});})(c__20316__auto___29030,out))
;
return ((function (switch__20254__auto__,c__20316__auto___29030,out){
return (function() {
var cljs$core$async$state_machine__20255__auto__ = null;
var cljs$core$async$state_machine__20255__auto____0 = (function (){
var statearr_29025 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29025[(0)] = cljs$core$async$state_machine__20255__auto__);

(statearr_29025[(1)] = (1));

return statearr_29025;
});
var cljs$core$async$state_machine__20255__auto____1 = (function (state_28999){
while(true){
var ret_value__20256__auto__ = (function (){try{while(true){
var result__20257__auto__ = switch__20254__auto__.call(null,state_28999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20257__auto__;
}
break;
}
}catch (e29026){if((e29026 instanceof Object)){
var ex__20258__auto__ = e29026;
var statearr_29027_29045 = state_28999;
(statearr_29027_29045[(5)] = ex__20258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29046 = state_28999;
state_28999 = G__29046;
continue;
} else {
return ret_value__20256__auto__;
}
break;
}
});
cljs$core$async$state_machine__20255__auto__ = function(state_28999){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20255__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20255__auto____1.call(this,state_28999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20255__auto____0;
cljs$core$async$state_machine__20255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20255__auto____1;
return cljs$core$async$state_machine__20255__auto__;
})()
;})(switch__20254__auto__,c__20316__auto___29030,out))
})();
var state__20318__auto__ = (function (){var statearr_29028 = f__20317__auto__.call(null);
(statearr_29028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20316__auto___29030);

return statearr_29028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20318__auto__);
});})(c__20316__auto___29030,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1440278282858