goog.provide('example.hello');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.fx.dom.FadeInAndShow');
goog.require('goog.net.Jsonp');
goog.require('goog.events.EventType');
goog.require('goog.events');
goog.require('goog.Timer');
goog.require('clojure.string');
/**
* Create a dom element from an html string.
*/
example.hello.html = (function html(s){
return goog.dom.htmlToDocumentFragment(s);
});
/**
* Return the element with the passed id.
*/
example.hello.get_element = (function get_element(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Append all children to parent.
* @param {...*} var_args
*/
example.hello.append = (function() { 
var append__delegate = function (parent,children){
var seq__80886_80890 = cljs.core.seq.call(null,children);
var chunk__80887_80891 = null;
var count__80888_80892 = 0;
var i__80889_80893 = 0;
while(true){
if((i__80889_80893 < count__80888_80892))
{var child_80894 = cljs.core._nth.call(null,chunk__80887_80891,i__80889_80893);
goog.dom.appendChild(parent,child_80894);
{
var G__80895 = seq__80886_80890;
var G__80896 = chunk__80887_80891;
var G__80897 = count__80888_80892;
var G__80898 = (i__80889_80893 + 1);
seq__80886_80890 = G__80895;
chunk__80887_80891 = G__80896;
count__80888_80892 = G__80897;
i__80889_80893 = G__80898;
continue;
}
} else
{var temp__4092__auto___80899 = cljs.core.seq.call(null,seq__80886_80890);
if(temp__4092__auto___80899)
{var seq__80886_80900__$1 = temp__4092__auto___80899;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__80886_80900__$1))
{var c__3073__auto___80901 = cljs.core.chunk_first.call(null,seq__80886_80900__$1);
{
var G__80902 = cljs.core.chunk_rest.call(null,seq__80886_80900__$1);
var G__80903 = c__3073__auto___80901;
var G__80904 = cljs.core.count.call(null,c__3073__auto___80901);
var G__80905 = 0;
seq__80886_80890 = G__80902;
chunk__80887_80891 = G__80903;
count__80888_80892 = G__80904;
i__80889_80893 = G__80905;
continue;
}
} else
{var child_80906 = cljs.core.first.call(null,seq__80886_80900__$1);
goog.dom.appendChild(parent,child_80906);
{
var G__80907 = cljs.core.next.call(null,seq__80886_80900__$1);
var G__80908 = null;
var G__80909 = 0;
var G__80910 = 0;
seq__80886_80890 = G__80907;
chunk__80887_80891 = G__80908;
count__80888_80892 = G__80909;
i__80889_80893 = G__80910;
continue;
}
}
} else
{}
}
break;
}
return parent;
};
var append = function (parent,var_args){
var children = null;
if (arguments.length > 1) {
  children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return append__delegate.call(this, parent, children);
};
append.cljs$lang$maxFixedArity = 1;
append.cljs$lang$applyTo = (function (arglist__80911){
var parent = cljs.core.first(arglist__80911);
var children = cljs.core.rest(arglist__80911);
return append__delegate(parent, children);
});
append.cljs$core$IFn$_invoke$arity$variadic = append__delegate;
return append;
})()
;
console.log(goog.dom.createDom("h1",{"style":"background-color:#EEE"},[cljs.core.str("dsa")].join('')));
example.hello.createOutput = (function createOutput(text){
return goog.dom.createDom("div",{"style":"background-color:#EEE"},[cljs.core.str(text)].join(''));
});
example.hello.createHeader = (function createHeader(text){
return goog.dom.createDom("h1",{"style":"background-color:#EEE"},[cljs.core.str(text)].join(''));
});
example.hello.createHeader2 = (function createHeader2(text){
return goog.dom.createDom("h2",{"style":"background-color:#EEE"},[cljs.core.str(text)].join(''));
});
example.hello.createAhref = (function createAhref(url,text){
return goog.dom.createDom("a",{"href":url},text);
});
goog.dom.appendChild(goog.dom.getElement("email"),example.hello.createHeader.call(null,"Johan"));
example.hello.renderItem = (function renderItem(text,link,imghtml){
goog.dom.appendChild(goog.dom.getElement("email"),example.hello.createHeader2.call(null,text));
goog.dom.appendChild(goog.dom.getElement("email"),example.hello.createAhref.call(null,link,"Link"));
return goog.dom.appendChild(goog.dom.getElement("email"),goog.dom.htmlToDocumentFragment(imghtml));
});
example.hello.dosomething = (function dosomething(){
return goog.dom.appendChild(goog.dom.getElement("email"),example.hello.createOutput.call(null,Date()));
});
example.hello.starttimer = (function starttimer(){
var timer = (new goog.Timer(5000));
timer.start();
return goog.events.listen(timer,goog.Timer.TICK,example.hello.dosomething);
});
/**
* Handle button click events
*/
example.hello.do_track_button_clicked = (function do_track_button_clicked(){
return console.log("Button clicked");
});
example.hello.init_event_handlers = (function init_event_handlers(){
return goog.events.listen(goog.dom.getElement("search-button"),"click",example.hello.do_track_button_clicked);
});
example.hello.init_event_handlers.call(null);
example.hello.tumblr_url = "http://pipes.yahoo.com/pipes/pipe.run?_id=NKGOK8p83BGEJGdHjknRlg&_render=json";
example.hello.retrieve_tumblr = (function retrieve_tumblr(callback,error_callback){
return (new goog.net.Jsonp(example.hello.tumblr_url,"_callback")).send("",callback,error_callback);
});
example.hello.display_count = (function display_count(json_obj){
var data = cljs.core.js__GT_clj.call(null,json_obj,"\uFDD0:keywordize-keys",true);
var post_count = (new cljs.core.Keyword("\uFDD0:count")).call(null,data);
return alert([cljs.core.str("Number of posts: "),cljs.core.str(post_count)].join(''));
});
example.hello.display_items = (function display_items(json_obj){
var data = cljs.core.js__GT_clj.call(null,json_obj,"\uFDD0:keywordize-keys",true);
var items = (new cljs.core.Keyword("\uFDD0:items")).call(null,(new cljs.core.Keyword("\uFDD0:value")).call(null,data));
var titles = cljs.core.map.call(null,"\uFDD0:title",items);
var seq__80916 = cljs.core.seq.call(null,cljs.core.take.call(null,5,items));
var chunk__80917 = null;
var count__80918 = 0;
var i__80919 = 0;
while(true){
if((i__80919 < count__80918))
{var a = cljs.core._nth.call(null,chunk__80917,i__80919);
example.hello.renderItem.call(null,(new cljs.core.Keyword("\uFDD0:title")).call(null,a),(new cljs.core.Keyword("\uFDD0:link")).call(null,a),(new cljs.core.Keyword("\uFDD0:description")).call(null,a));
{
var G__80920 = seq__80916;
var G__80921 = chunk__80917;
var G__80922 = count__80918;
var G__80923 = (i__80919 + 1);
seq__80916 = G__80920;
chunk__80917 = G__80921;
count__80918 = G__80922;
i__80919 = G__80923;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__80916);
if(temp__4092__auto__)
{var seq__80916__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__80916__$1))
{var c__3073__auto__ = cljs.core.chunk_first.call(null,seq__80916__$1);
{
var G__80924 = cljs.core.chunk_rest.call(null,seq__80916__$1);
var G__80925 = c__3073__auto__;
var G__80926 = cljs.core.count.call(null,c__3073__auto__);
var G__80927 = 0;
seq__80916 = G__80924;
chunk__80917 = G__80925;
count__80918 = G__80926;
i__80919 = G__80927;
continue;
}
} else
{var a = cljs.core.first.call(null,seq__80916__$1);
example.hello.renderItem.call(null,(new cljs.core.Keyword("\uFDD0:title")).call(null,a),(new cljs.core.Keyword("\uFDD0:link")).call(null,a),(new cljs.core.Keyword("\uFDD0:description")).call(null,a));
{
var G__80928 = cljs.core.next.call(null,seq__80916__$1);
var G__80929 = null;
var G__80930 = 0;
var G__80931 = 0;
seq__80916 = G__80928;
chunk__80917 = G__80929;
count__80918 = G__80930;
i__80919 = G__80931;
continue;
}
}
} else
{return null;
}
}
break;
}
});
example.hello.create_div_note = (function create_div_note(id,content){
return goog.dom.appendChild(goog.dom.getElement("email"),goog.dom.createDom("div",{"style":"background-color:#EEE","id":id},content));
});
example.hello.create_notification = (function create_notification(text){
var gen_id = goog.math.randomInt(10000);
example.hello.create_div_note.call(null,[cljs.core.str(gen_id)].join(''),[cljs.core.str(text)].join(''));
return (new goog.fx.dom.FadeInAndShow(goog.dom.getElement([cljs.core.str(gen_id)].join('')),1500)).play();
});
example.hello.dosomething = (function dosomething(){
return example.hello.create_notification.call(null,(new Date()));
});
example.hello.starttimer = (function starttimer(){
var timer = (new goog.Timer(5000));
timer.start();
return goog.events.listen(timer,goog.Timer.TICK,example.hello.dosomething);
});
example.hello.starttimer.call(null);
