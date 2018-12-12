/**
 * Charming.js, Anime.js, Textfx.js
 */
!function(t){"undefined"==typeof module?this.charming=t:module.exports=t}(function(t,e){"use strict";var n=(e=e||{}).tagName||"span",r=null!=e.classPrefix?e.classPrefix:"char",a=1;return function t(e){for(var i=[].slice.call(e.childNodes),o=i.length,u=-1;++u<o;)t(i[u]);e.nodeType===Node.TEXT_NODE&&function(t){for(var e=t.parentNode,i=t.nodeValue,o=i.length,u=-1;++u<o;){var s=document.createElement(n);r&&(s.className=r+a,a++),s.appendChild(document.createTextNode(i[u])),e.insertBefore(s,t)}e.removeChild(t)}(e)}(t),t}),function(t,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof module&&module.exports?module.exports=e():t.anime=e()}(this,function(){var t,e,n,r,a,i={duration:1e3,delay:0,loop:!1,autoplay:!0,direction:"normal",easing:"easeOutElastic",elasticity:400,round:!1,begin:void 0,update:void 0,complete:void 0},o="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY".split(" "),u={arr:function(t){return Array.isArray(t)},obj:function(t){return-1<Object.prototype.toString.call(t).indexOf("Object")},svg:function(t){return t instanceof SVGElement},dom:function(t){return t.nodeType||u.svg(t)},num:function(t){return!isNaN(parseInt(t))},str:function(t){return"string"==typeof t},fnc:function(t){return"function"==typeof t},und:function(t){return void 0===t},nul:function(t){return"null"==typeof t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return u.hex(t)||u.rgb(t)||u.hsl(t)}},s=(r={},a={Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t,e){if(0===t||1===t)return t;var n=1-Math.min(e,998)/1e3,r=t/1-1;return-Math.pow(2,10*r)*Math.sin(2*(r-n/(2*Math.PI)*Math.asin(1))*Math.PI/n)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,n=4;t<((e=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*e-2)/22-t,2)}},["Quad","Cubic","Quart","Quint","Expo"].forEach(function(t,e){a[t]=function(t){return Math.pow(t,e+2)}}),Object.keys(a).forEach(function(t){var e=a[t];r["easeIn"+t]=e,r["easeOut"+t]=function(t,n){return 1-e(1-t,n)},r["easeInOut"+t]=function(t,n){return.5>t?e(2*t,n)/2:1-e(-2*t+2,n)/2},r["easeOutIn"+t]=function(t,n){return.5>t?(1-e(1-2*t,n))/2:(e(2*t-1,n)+1)/2}}),r.linear=function(t){return t},r),c=function(t){return u.str(t)?t:t+""},f=function(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()},l=function(t){if(u.col(t))return!1;try{return document.querySelectorAll(t)}catch(t){return!1}},d=function(t){return t.reduce(function(t,e){return t.concat(u.arr(e)?d(e):e)},[])},p=function(t){return u.arr(t)?t:(u.str(t)&&(t=l(t)||t),t instanceof NodeList||t instanceof HTMLCollection?[].slice.call(t):[t])},h=function(t,e){return t.some(function(t){return t===e})},m=function(t){return t.filter(function(t,e,n){return n.indexOf(t)===e})},y=function(t){var e,n={};for(e in t)n[e]=t[e];return n},g=function(t,e){for(var n in e)t[n]=u.und(t[n])?e[n]:t[n];return t},v=function(t){return/([\+\-]?[0-9|auto\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg)?/.exec(t)[2]},x=function(t,e,n){return v(e)?e:-1<t.indexOf("translate")?v(n)?e+v(n):e+"px":-1<t.indexOf("rotate")||-1<t.indexOf("skew")?e+"deg":e},b=function(t,e){if(e in t.style)return getComputedStyle(t).getPropertyValue(f(e))||"0"},O=function(t,e){return u.dom(t)&&h(o,e)?"transform":u.dom(t)&&(t.getAttribute(e)||u.svg(t)&&t[e])?"attribute":u.dom(t)&&"transform"!==e&&b(t,e)?"css":u.nul(t[e])||u.und(t[e])?void 0:"object"},E=function(t,e){switch(O(t,e)){case"transform":return function(t,e){var n=-1<e.indexOf("scale")?1:0,r=t.style.transform;if(!r)return n;for(var a=/(\w+)\((.+?)\)/g,i=[],o=[],u=[];i=a.exec(r);)o.push(i[1]),u.push(i[2]);return(r=u.filter(function(t,n){return o[n]===e})).length?r[0]:n}(t,e);case"css":return b(t,e);case"attribute":return t.getAttribute(e)}return t[e]||0},Y=function(t,e,n){return u.col(e)?e=u.rgb(e)?e:u.hex(e)?function(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,e,n,r){return e+e+n+n+r+r});var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return"rgb("+(t=parseInt(e[1],16))+","+parseInt(e[2],16)+","+(e=parseInt(e[3],16))+")"}(e):u.hsl(e)?function(t){t=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t);var e=parseInt(t[1])/360,n=parseInt(t[2])/100,r=parseInt(t[3])/100;if(t=function(t,e,n){return 0>n&&(n+=1),1<n&&--n,n<1/6?t+6*(e-t)*n:.5>n?e:n<2/3?t+(e-t)*(2/3-n)*6:t},0==n)n=r=e=r;else{var a=.5>r?r*(1+n):r+n-r*n,i=2*r-a;n=t(i,a,e+1/3),r=t(i,a,e),e=t(i,a,e-1/3)}return"rgb("+255*n+","+255*r+","+255*e+")"}(e):void 0:v(e)?e:(!(t=v(t.to)?v(t.to):v(t.from))&&n&&(t=v(n)),t?e+t:e)},C=function(t){var e=/-?\d*\.?\d+/g;return{original:t,numbers:c(t).match(e)?c(t).match(e).map(Number):[0],strings:c(t).split(e)}},w=function(t,e,n,r){return"transform"===n?(n=t+"("+x(t,e.from,e.to)+")",e=t+"("+x(t,e.to)+")"):(t="css"===n?b(r,t):void 0,n=Y(e,e.from,t),e=Y(e,e.to,t)),{from:C(n),to:C(e)}},M=function(t,e){var n,r,a,i,o,s,c=(r=e,a=[],(n=t).forEach(function(t,e){var i=t.target;return r.forEach(function(r){var o=O(i,r.name);if(o){var s;s=r.name;var c=r.value;s={from:1<(c=p(u.fnc(c)?c(i,e):c)).length?c[0]:E(i,s),to:1<c.length?c[1]:c[0]},(c=y(r)).animatables=t,c.type=o,c.from=w(r.name,s,c.type,i).from,c.to=w(r.name,s,c.type,i).to,c.round=u.col(s.from)||c.round?1:0,c.delay=(u.fnc(c.delay)?c.delay(i,e,n.length):c.delay)/Z.speed,c.duration=(u.fnc(c.duration)?c.duration(i,e,n.length):c.duration)/Z.speed,a.push(c)}})}),a);return(i=c,o=["name","from","to","delay","duration"],s={},i.forEach(function(t){var e=JSON.stringify(o.map(function(e){return t[e]}));s[e]=s[e]||[],s[e].push(t)}),Object.keys(s).map(function(t){return s[t]})).map(function(t){var e=y(t[0]);return e.animatables=t.map(function(t){return t.animatables}),e.totalDuration=e.delay+e.duration,e})},k=function(t,e){t.tweens.forEach(function(n){var r=n.from,a=t.duration-(n.delay+n.duration);n.from=n.to,n.to=r,e&&(n.delay=a)}),t.reversed=!t.reversed},I=function(t){var e=[],n=[];return t.tweens.forEach(function(t){"css"!==t.type&&"transform"!==t.type||(e.push("css"===t.type?f(t.name):"transform"),t.animatables.forEach(function(t){n.push(t.target)}))}),{properties:m(e).join(", "),elements:m(n)}},N=function(t,e){var n,r,a,i=Math.min(Math.max(e-t.delay,0),t.duration)/t.duration,o=t.to.numbers.map(function(e,n){var r=t.from.numbers[n],a=s[t.easing](i,t.elasticity);r=t.path?function(t,e){var n=t.path,r=t.value*e,a=(o=function(a){return a=a||0,n.getPointAtLength(1<e?t.value+a:r+a)})(),i=o(-1),o=o(1);switch(t.name){case"translateX":return a.x;case"translateY":return a.y;case"rotate":return 180*Math.atan2(o.y-i.y,o.x-i.x)/Math.PI}}(t,a):r+a*(e-r);return t.round?Math.round(r*t.round)/t.round:r});return n=o,r=t.to.strings,a=t.from.strings,r.reduce(function(t,e,r){return e=e||a[r-1],t+n[r-1]+e})},L=function(e,n){var r;e.currentTime=n,e.progress=n/e.duration*100;for(var a=0;a<e.tweens.length;a++){var i=e.tweens[a];i.currentValue=N(i,n);for(var o=i.currentValue,u=0;u<i.animatables.length;u++){var s=(c=i.animatables[u]).id,c=c.target,f=i.name;switch(i.type){case"css":c.style[f]=o;break;case"attribute":c.setAttribute(f,o);break;case"object":c[f]=o;break;case"transform":r||(r={}),r[s]||(r[s]=[]),r[s].push(o)}}}if(r)for(a in t||(t=(b(document.body,"transform")?"":"-webkit-")+"transform"),r)e.animatables[a].target.style[t]=r[a].join(" ");e.settings.update&&e.settings.update(e)},W=function(t){var e,n={};n.animatables=(e=(e=t.targets)?d(u.arr(e)?e.map(p):p(e)):[]).map(function(t,e){return{target:t,id:e}}),n.settings=g(t,i);var r,a=n.settings,o=[];for(r in t)if(!i.hasOwnProperty(r)&&"targets"!==r){var s=u.obj(t[r])?y(t[r]):{value:t[r]};s.name=r,o.push(g(s,a))}return n.properties=o,n.tweens=M(n.animatables,n.properties),n.duration=function(t){if(t.length)return Math.max.apply(Math,t.map(function(t){return t.totalDuration}))}(n.tweens)||t.duration,n.currentTime=0,n.progress=0,n.ended=!1,n},T=[],X=0,A=(e=function(){X=requestAnimationFrame(n)},n=function(t){if(T.length){for(var n=0;n<T.length;n++)T[n].tick(t);e()}else cancelAnimationFrame(X),X=0},e),Z=function(t){var e=W(t),n={};return e.tick=function(t){e.ended=!1,n.start||(n.start=t),n.current=Math.min(Math.max(n.last+t-n.start,0),e.duration),L(e,n.current);var r=e.settings;r.begin&&n.current>=r.delay&&(r.begin(e),r.begin=void 0),n.current>=e.duration&&(r.loop?(n.start=t,"alternate"===r.direction&&k(e,!0),u.num(r.loop)&&r.loop--):(e.ended=!0,e.pause(),r.complete&&r.complete(e)),n.last=0)},e.seek=function(t){L(e,t/100*e.duration)},e.pause=function(){I(e).elements.forEach(function(t){t.style.removeProperty("will-change")});var t=T.indexOf(e);-1<t&&T.splice(t,1)},e.play=function(t){var r;e.pause(),t&&(e=g(W(g(t,e.settings)),e)),n.start=0,n.last=e.ended?0:e.currentTime,"reverse"===(t=e.settings).direction&&k(e),"alternate"!==t.direction||t.loop||(t.loop=1),(r=I(e)).elements.forEach(function(t){t.style.willChange=r.properties}),T.push(e),X||A()},e.restart=function(){e.reversed&&k(e),e.pause(),e.seek(0),e.play()},e.settings.autoplay&&e.play(),e};return Z.version="1.1.1",Z.speed=1,Z.list=T,Z.remove=function(t){t=d(u.arr(t)?t.map(p):p(t));for(var e=T.length-1;0<=e;e--)for(var n=T[e],r=n.tweens,a=r.length-1;0<=a;a--)for(var i=r[a].animatables,o=i.length-1;0<=o;o--)h(t,i[o].target)&&(i.splice(o,1),i.length||r.splice(a,1),r.length||n.pause())},Z.easings=s,Z.getValue=E,Z.path=function(t){return{path:t=u.str(t)?l(t)[0]:t,value:t.getTotalLength()}},Z.random=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},Z}),function(t){"use strict";function e(t,e,n,r,a){var i=(t-e)/(n-r);return i*a+(e-i*r)}function n(t){this.el=t,this._init()}n.prototype.effects={fx1:{in:{duration:1e3,delay:function(t,e){return 75+40*e},easing:"easeOutElastic",elasticity:650,opacity:{value:1,easing:"easeOutExpo"},translateY:["50%","0%"]},out:{duration:400,delay:function(t,e){return 40*e},easing:"easeOutExpo",opacity:0,translateY:"-100%"}},fx2:{in:{duration:700,delay:function(t,e){return 50*e},easing:"easeOutCirc",opacity:1,translateX:function(t,e){return[50+10*e,0]}},out:{duration:0,opacity:0}},fx3:{in:{duration:800,delay:function(t,e){return 50*e},easing:"easeOutElastic",opacity:1,translateY:function(t,e){return e%2==0?["-80%","0%"]:["80%","0%"]}},out:{duration:800,delay:function(t,e){return 50*e},easing:"easeOutExpo",opacity:0,translateY:function(t,e){return e%2==0?"80%":"-80%"}}},fx4:{in:{duration:700,delay:function(t,e){return 80*(t.parentNode.children.length-e-1)},easing:"easeOutElastic",opacity:1,translateY:function(t,e){return e%2==0?["-80%","0%"]:["80%","0%"]},rotateZ:[90,0]},out:{duration:500,delay:function(t,e){return 80*(t.parentNode.children.length-e-1)},easing:"easeOutExpo",opacity:0,translateY:function(t,e){return e%2==0?"80%":"-80%"},rotateZ:function(t,e){return e%2==0?-25:25}}},fx5:{perspective:1e3,in:{duration:700,delay:function(t,e){return 550+50*e},easing:"easeOutQuint",opacity:{value:1,easing:"linear"},translateY:["-150%","0%"],rotateY:[180,0]},out:{duration:700,delay:function(t,e){return 60*e},easing:"easeInQuint",opacity:{value:0,easing:"linear"},translateY:"150%",rotateY:-180}},fx6:{in:{duration:600,easing:"easeOutQuart",opacity:1,translateY:function(t,e){return e%2==0?["-40%","0%"]:["40%","0%"]},rotateZ:[10,0]},out:{duration:0,opacity:0}},fx7:{in:{duration:250,delay:function(t,e){return 200+25*e},easing:"easeOutCubic",opacity:1,translateY:["-50%","0%"]},out:{duration:250,delay:function(t,e){return 25*e},easing:"easeOutCubic",opacity:0,translateY:"50%"}},fx8:{in:{duration:400,delay:function(t,e){return 150+20*(t.parentNode.children.length-e-1)},easing:"easeOutQuad",opacity:1,translateY:["100%","0%"]},out:{duration:400,delay:function(t,e){return 20*(t.parentNode.children.length-e-1)},easing:"easeInOutQuad",opacity:0,translateY:"-100%"}},fx9:{perspective:1e3,origin:"50% 100%",in:{duration:400,delay:function(t,e){return 50*e},easing:"easeOutSine",opacity:1,rotateY:[-90,0]},out:{duration:200,delay:function(t,e){return 50*e},easing:"easeOutSine",opacity:0,rotateY:45}},fx10:{in:{duration:1e3,delay:function(t,e){return 100+30*e},easing:"easeOutElastic",elasticity:anime.random(400,700),opacity:1,rotateZ:function(t,e){return[anime.random(20,40),0]}},out:{duration:0,opacity:0}},fx11:{perspective:1e3,origin:"50% 100%",in:{duration:400,delay:function(t,e){return 200+20*e},easing:"easeOutExpo",opacity:1,rotateY:[-90,0]},out:{duration:400,delay:function(t,e){return 20*e},easing:"easeOutExpo",opacity:0,rotateY:90}},fx12:{perspective:1e3,origin:"50% 100%",in:{duration:400,delay:function(t,e){return 200+30*e},easing:"easeOutExpo",opacity:1,rotateX:[90,0]},out:{duration:400,delay:function(t,e){return 30*e},easing:"easeOutExpo",opacity:0,rotateX:-90}},fx13:{in:{duration:800,easing:"easeOutExpo",opacity:1,translateY:function(t,n){var r=t.parentNode,a=r.lastElementChild.offsetWidth,i=r.firstElementChild.offsetLeft,o=e(0,200,i+(r.offsetWidth-a-i-(r.offsetWidth-a-r.lastElementChild.offsetLeft))/2,i,t.offsetLeft);return[Math.abs(o)+50+"%","0%"]},rotateZ:function(t,n){var r=t.parentNode,a=r.lastElementChild.offsetWidth,i=r.firstElementChild.offsetLeft;return[e(90,-90,i+(r.offsetWidth-a-r.firstElementChild.offsetLeft-(r.offsetWidth-a-r.lastElementChild.offsetLeft)),i,t.offsetLeft),0]}},out:{duration:500,easing:"easeOutExpo",opacity:0,translateY:"-150%"}},fx14:{in:{duration:500,easing:"easeOutExpo",delay:function(t,e){return 200+30*e},opacity:1,rotateZ:[20,0],translateY:function(t,n){var r=t.parentNode,a=r.lastElementChild.offsetWidth,i=r.firstElementChild.offsetLeft,o=e(-130,-60,i+(r.offsetWidth-a-i-(r.offsetWidth-a-r.lastElementChild.offsetLeft)),i,t.offsetLeft);return[Math.abs(o)+"%","0%"]}},out:{duration:400,easing:"easeOutExpo",delay:function(t,e){return 30*(t.parentNode.children.length-e-1)},opacity:0,rotateZ:20,translateY:function(t,n){var r=t.parentNode,a=r.lastElementChild.offsetWidth,i=r.firstElementChild.offsetLeft;return e(-60,-130,i+(r.offsetWidth-a-i-(r.offsetWidth-a-r.lastElementChild.offsetLeft)),i,t.offsetLeft)+"%"}}},fx15:{perspective:1e3,in:{duration:400,delay:function(t,e){return 100+50*e},easing:"easeOutExpo",opacity:1,rotateX:[110,0]},out:{duration:400,delay:function(t,e){return 50*e},easing:"easeOutExpo",opacity:0,rotateX:-110}},fx16:{in:{duration:function(t,e){return anime.random(800,1e3)},delay:function(t,e){return anime.random(0,75)},easing:"easeInOutExpo",opacity:1,translateY:["-300%","0%"],rotateZ:function(t,e){return[anime.random(-50,50),0]}},out:{duration:function(t,e){return anime.random(800,1e3)},delay:function(t,e){return anime.random(0,80)},easing:"easeInOutExpo",opacity:0,translateY:"300%",rotateZ:function(t,e){return anime.random(-50,50)}}},fx17:{in:{duration:650,easing:"easeOutQuint",delay:function(t,e){return 450+30*(t.parentNode.children.length-e-1)},opacity:1,translateX:function(t,e){return[-1*t.offsetLeft,0]}},out:{duration:1,delay:400,opacity:0}},fx18:{in:{duration:800,delay:function(t,e){return 600+150*e},easing:"easeInOutQuint",opacity:1,scaleY:[8,1],scaleX:[.5,1],translateY:["-100%","0%"]},out:{duration:800,delay:function(t,e){return 150*e},easing:"easeInQuint",opacity:0,scaleY:{value:8,delay:function(t,e){return 100+150*e}},scaleX:.5,translateY:"100%"}}},n.prototype._init=function(){charming(this.el,{classPrefix:"letter"}),this.letters=[].slice.call(this.el.querySelectorAll("span")),this.lettersTotal=this.letters.length},n.prototype.show=function(t,e){arguments.length?this._animate("in",t,e):this.letters.forEach(function(t){t.style.opacity=1})},n.prototype.hide=function(t,e){arguments.length?this._animate("out",t,e):(anime.remove(this.letters),this.letters.forEach(function(t){t.style.opacity=0}))},n.prototype._animate=function(t,e,n){var r="string"==typeof e?this.effects[e]:e;void 0!=r.perspective&&(this.el.style.WebkitPerspective=this.el.style.perspective=r.perspective+"px"),void 0!=r.origin&&this.letters.forEach(function(t){t.style.WebkitTransformOrigin=t.style.transformOrigin=r.origin});var a=this._checkCustomFx(t,e,n),i=r[t];i.targets=this.letters,a||(i.complete=n),anime(i)},n.prototype._checkCustomFx=function(t,e,n){var r="string"==typeof e&&"fx17"===e&&"out"===t;if(r){var a=document.createElement("div");a.style.width=a.style.height="100%",a.style.top=a.style.left=0,a.style.background="#e24b1e",a.style.position="absolute",a.style.WebkitTransform=a.style.transform="scale3d(0,1,1)",a.style.WebkitTransformOrigin=a.style.transformOrigin="0% 50%",this.el.appendChild(a);var i=this;anime({targets:a,duration:400,easing:"easeInOutCubic",scaleX:[0,1],complete:function(){a.style.WebkitTransformOrigin=a.style.transformOrigin="100% 50%",anime({targets:a,duration:400,easing:"easeInOutCubic",scaleX:[1,0],complete:function(){i.el.removeChild(a),"function"==typeof n&&n()}})}})}return r},t.TextFx=n}(window);

/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2016, Codrops
 * http://www.codrops.com
 */
;(function(window) {

	'use strict';

	// Helper vars and functions.
	function extend( a, b ) {
		for( var key in b ) {
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}
	// From http://www.quirksmode.org/js/events_properties.html#position
	function getMousePos(e) {
		var posx = 0;
		var posy = 0;
		if (!e) var e = window.event;
		if (e.pageX || e.pageY) 	{
			posx = e.pageX;
			posy = e.pageY;
		}
		else if (e.clientX || e.clientY) 	{
			posx = e.clientX + document.body.scrollLeft
				+ document.documentElement.scrollLeft;
			posy = e.clientY + document.body.scrollTop
				+ document.documentElement.scrollTop;
		}
		return {
			x : posx,
			y : posy
		}
	}
	// Detect mobile. From: http://stackoverflow.com/a/11381730/989439
	function mobilecheck() {
		var check = false;
		(function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
		return check;
	}

	// The Day obj.
	function Day(options) {
		this.options = extend({}, this.options);
		extend(this.options, options);
		this.number = this.options.number;
		this.color = this.options.color;
		this.previewTitle = this.options.previewTitle;
		this.isActive = !this.options.inactive;
		this._layout();
	}

	Day.prototype.options = {
		number: 0,
		color: '#f1f1f1',
		previewTitle: '',
		inactive: false
	};

	// Build the 3D cube element.
	Day.prototype._layout = function() {
		/* The Cube structure:
		<div class="cube">
			<div class="cube__side cube__side--front"></div>
			<div class="cube__side cube__side--back"></div>
			<div class="cube__side cube__side--right"></div>
			<div class="cube__side cube__side--left"></div>
			<div class="cube__side cube__side--top"></div>
			<div class="cube__side cube__side--bottom"></div>
		</div>
		*/
		this.cube = document.createElement('div');
		this.cube.className = this.isActive ? 'cube' : 'cube cube--inactive';
		this.cube.innerHTML = '<div class="cube__side cube__side--back"></div><div class="cube__side cube__side--left"></div><div class="cube__side cube__side--right"></div><div class="cube__side cube__side--bottom"></div><div class="cube__side cube__side--top"></div><div class="cube__side cube__side--front"><div class="cube__number">' + (this.number+1) + '</div></div>';
		this.currentTransform = {translateZ: 0, rotateX: 0, rotateY: 0};
	};

	Day.prototype._rotate = function(ev) {
		anime.remove(this.cube);

		var dir = this._getDirection(ev),
			type = ev.type.toLowerCase() === 'mouseenter' ? 1 : -1,
			animationSettings = {
				targets: this.cube,
				duration: 500,
				easing: 'easeOutQuart',
				translateZ: type === 1 ? 100 : 0
			};

		switch(dir) {
			case 0 : // from/to top
				animationSettings.rotateX = type === 1 ? -180 : 0;
				animationSettings.rotateY = 0;
				break;
			case 1 : // from/to right
				animationSettings.rotateY = type === 1 ? -180 : 0;
				animationSettings.rotateX = 0;
				break;
			case 2 : // from/to bottom
				animationSettings.rotateX = type === 1 ? 180 : 0;
				animationSettings.rotateY = 0;
				break;
			case 3 : // from/to left
				animationSettings.rotateY = type === 1 ? 180 : 0;
				animationSettings.rotateX = 0;
				break;
		};

		this.currentTransform = {
			translateZ: animationSettings.translateZ,
			rotateX: animationSettings.rotateX,
			rotateY: animationSettings.rotateY
		};

		anime(animationSettings);
	};

	Day.prototype._setContentTitleFx = function(contentTitleEl) {
		this.titlefx = new TextFx(contentTitleEl);
		this.titlefxSettings = {
			in: {
				duration: 800,
				delay: function(el, index) { return 900 + index*20; },
				easing: 'easeOutExpo',
				opacity: {
					duration: 200,
					value: [0,1],
					easing:'linear'
				},
				rotateZ: function(el, index) { return [anime.random(-10,10), 0]; },
				translateY: function(el, index) {
					return [anime.random(-200,-100),0];
				}
			},
			out: {
				duration: 800,
				delay: 300,
				easing: 'easeInExpo',
				opacity: 0,
				translateY: -350
			}
		};
	};

	// From: https://codepen.io/noeldelgado/pen/pGwFx?editors=0110 by Noel Delgado (@noeldelgado).
	Day.prototype._getDirection = function(ev) {
		var obj = this.cube.querySelector('.cube__side--front'),
			w = obj.offsetWidth,
			h = obj.offsetHeight,
			bcr = obj.getBoundingClientRect(),
			x = (ev.pageX - (bcr.left + window.pageXOffset) - (w / 2) * (w > h ? (h / w) : 1)),
			y = (ev.pageY - (bcr.top + window.pageYOffset) - (h / 2) * (h > w ? (w / h) : 1)),
			d = Math.round( Math.atan2(y, x) / 1.57079633 + 5 ) % 4;

		return d;
	};

	// The Calendar obj.
	function Calendar(el) {
		this.el = el;
		this.calendarDays = [].slice.call(this.el.querySelectorAll('.cube'));

		// Let´s build the days/cubes structure.
		this.cubes = document.createElement('div');
		this.cubes.className = 'cubes';
		this.el.appendChild(this.cubes);

		// Array of days (each day is represented by a 3D Cube)
		this.days = [];
		var self = this;
		this.calendarDays.forEach(function(d, pos) {
			// Get the bg color defined in the data-bg-color of each division.
			var day = new Day({
					number: pos,
					color: d.getAttribute('data-bg-color') || '#f1f1f1',
					previewTitle: d.getAttribute('data-title') || '',
					inactive: d.hasAttribute('data-inactive')
				}),
				content = contents[pos];

			if( content !== undefined ) {
				var contentTitle = contents[pos].querySelector('.content__title');
				day._setContentTitleFx(contentTitle);
			}

			self.days.push(day);
			self.cubes.appendChild(day.cube);
			self.el.removeChild(d);
			self._initDayEvents(day);
		});

		// structure to show each day preview (day + title + subtitle etc, when the user hovers one day/cube).
		this.dayPreview = document.createElement('h2');
		this.dayPreview.className = 'title';
		this.el.appendChild(this.dayPreview);

		this._initEvents();
	}

	Calendar.prototype._initEvents = function() {
		var self = this;

		// Mousemove event / tilt functionality
		if( settings.tilt ) {
			this.mousemoveFn = function(ev) {
				if( self.isOpen ) {
					return false;
				};
				requestAnimationFrame(function() {
					// Mouse position relative to the document.
					var mousepos = getMousePos(ev);
					self._rotateCalendar(mousepos);
				});
			};

			this.handleOrientation = function() {
				if( self.isOpen ) {
					return false;
				};

				var y = event.gamma;
				// To make computation easier we shift the range of x and y to [0,180]
				y += 90;
				requestAnimationFrame(function() {
					// Transform values.
					var movement = {ry:40},
						rotY = 2*movement.ry / 180 * y - movement.ry;

					self.cubes.style.WebkitTransform = self.cubes.style.transform = 'rotate3d(0,-1,0,' + rotY + 'deg)';
				});
			};
			if( isMobile ) {
				window.addEventListener('deviceorientation', this.handleOrientation);
			}
			else {
				document.addEventListener('mousemove', this.mousemoveFn);
			}
		}

		this.backToCalendarFn = function(ev) {
			// If the calendar is currently animating then do nothing.
			if( !self.isOpen || self.isAnimating ) {
				return false;
			}
			self.isAnimating = true;
			self._hidePreviewTitle();
			self._hideContent();

			// Show the main container
			anime({
				targets: self.el,
				duration: 1400,
				easing: 'easeInOutExpo',
				opacity: 1
			});

			for(var i = 0, totalDays = self.days.length; i < totalDays; ++i) {
				var day = self.days[i], isCurrent = self.currentDayIdx === i;

				if( isCurrent ) {
					day.isRotated = false;
				}

				anime({
					targets: day.cube,
					duration: 500,
					delay: isCurrent ? 1000 : function(el, index) {
						return 1100 + anime.random(0,300);
					},
					easing: 'easeOutBack',
					scale: [0,1],
					translateZ: 0,
					rotateX: 0,
					rotateY: 0,
					complete: isCurrent ? function() {
						self.isOpen = false;
						self.isAnimating = false;
					} : null
				});
			}
		};
		backCtrl.addEventListener('click', this.backToCalendarFn);
	};

	Calendar.prototype._initDayEvents = function(day) {
		var self = this;

		// Day/Cube mouseenter/mouseleave event.
		var instance = day;
		if( !isMobile ) {
			instance.mouseenterFn = function(ev) {
				if( instance.isRotated || self.isOpen ) {
					return false;
				};
				clearTimeout(colortimeout);
				instance.rotatetimeout = setTimeout(function() {
					colortimeout = setTimeout(function() { self._changeBGColor(instance.color); }, 30);
					instance._rotate(ev);
					self._showPreviewTitle(instance.previewTitle, instance.number);
					instance.isRotated = true;
				}, 30);
			};
			instance.mouseleaveFn = function(ev) {
				if( self.isOpen ) {
					return false;
				};
				clearTimeout(instance.rotatetimeout);
				clearTimeout(colortimeout);
				if( instance.isRotated ) {
					colortimeout = setTimeout(function() { self._resetBGColor(); }, 35);
					instance._rotate(ev);
					self._hidePreviewTitle();
					instance.isRotated = false;
				}
			};
		}
		// Day/Cube click event.
		instance.clickFn = function(ev) {
			// If the day is inactive or if the calendar is currently animating then do nothing.
			if( !instance.isActive || self.isAnimating ) {
				return false;
			}
			self.isAnimating = true;
			self.isOpen = true;
			self.currentDayIdx = instance.number;

			// Hide the main container
			anime({
				targets: self.el,
				duration: 1400,
				easing: 'easeInOutExpo',
				opacity: 0,
				complete: function() {
					self.isAnimating = false;
				}
			});

			for(var i = 0, totalDays = self.days.length; i < totalDays; ++i) {
				var day = self.days[i],
					isCurrent = self.currentDayIdx === i

				if( isCurrent ) {
					self._showContent(instance);
				}

				anime({
					targets: day.cube,
					duration: 500,
					delay: isCurrent ? 600 : function() { return anime.random(0,300); },
					easing: isCurrent ? 'easeOutCubic' : 'easeInBack',
					scale: 0,
					translateZ: isCurrent ? -1000 : function() { return anime.random(-1000,-400); },
					rotateX: isCurrent ? -180 : function() { return anime.random(-180,180); },
					rotateY: isCurrent ? -180 : function() { return anime.random(-180,180); }
				});
			}
		};
		instance.cube.querySelector('.cube__side--front').addEventListener('mouseenter', instance.mouseenterFn);
		instance.cube.addEventListener('mouseleave', instance.mouseleaveFn);
		instance.cube.addEventListener('click', instance.clickFn);
		instance.cube.addEventListener('mousedown', function() {
			clearTimeout(instance.rotatetimeout );
		});
	};

	Calendar.prototype._rotateCalendar = function(mousepos) {
		// Transform values.
		var movement = {rx:3, ry:3},
			rotX = 2 * movement.rx / this.cubes.offsetHeight * mousepos.y - movement.rx,
			rotY = 2 * movement.ry / this.cubes.offsetWidth * mousepos.x - movement.ry;

		this.cubes.style.WebkitTransform = this.cubes.style.transform = 'rotate3d(-1,0,0,' + rotX + 'deg) rotate3d(0,1,0,' + rotY + 'deg)';
	};

	Calendar.prototype._showPreviewTitle = function(text, number) {
		this.dayPreview.innerHTML = text;
		this.dayPreview.setAttribute('data-number', parseInt(number+1) + ".");

		this.txtfx = new TextFx(this.dayPreview);
		this.txtfx.hide();
		this.dayPreview.style.opacity = 1;
		this.txtfx.show({
			in: {
				duration: 700,
				delay: function(el, index) { return index*20; },
				easing: 'easeOutCirc',
				opacity: 1,
				translateX: function(el, index) {
					return [(50+index*10),0]
				}
			}
		});
	};

	Calendar.prototype._hidePreviewTitle = function() {
		var self = this;
		if( this.txtfx ) {
			this.txtfx.hide();
		}
		this.dayPreview.style.opacity = 0;
	};

	Calendar.prototype._showContent = function(day) {
		// The content box for the clicked day.
		var content = contents[this.currentDayIdx],
			title = content.querySelector('.content__title'),
			description = content.querySelector('.content__description'),
			meta = content.querySelector('.content__meta');

		content.classList.add('content__block--current');

		day.titlefx.hide();
		day.titlefx.show(day.titlefxSettings);

		anime({
			targets: [description, meta],
			duration: 800,
			delay: function(el, index) { return index === 0 ? 1000 : 1100 },
			easing: 'easeOutExpo',
			opacity: [0,1],
			translateY: [100,0]
		});

		anime({
			targets: backCtrl,
			duration: 1100,
			delay: 800,
			easing: 'easeOutExpo',
			opacity: [0,1],
			translateY: [50,0]
		});

		contentNumber.innerHTML = this.currentDayIdx + 1;
		anime({
			targets: contentNumber,
			duration: 500,
			delay: 900,
			easing: 'easeOutExpo',
			opacity: [0,1],
			translateX: [-200,0]
		});
	};

	Calendar.prototype._hideContent = function() {
		var day = this.days[this.currentDayIdx],
			// The content box for the clicked day.
			content = contents[this.currentDayIdx],
			// The content title, description and meta for this day.
			title = content.querySelector('.content__title'),
			description = content.querySelector('.content__description'),
			meta = content.querySelector('.content__meta');

		// The content number placeholder animation.
		anime({
			targets: contentNumber,
			duration: 800,
			easing: 'easeInExpo',
			opacity: 0,
			translateX: -200
		});

		// The back button animation.
		anime({
			targets: backCtrl,
			duration: 1000,
			easing: 'easeInExpo',
			opacity: 0,
			translateY: 50
		});

		// The description and meta animation.
		anime({
			targets: [description, meta],
			duration: 800,
			delay: function(el, index) { return index === 0 ? 150 : 0 },
			easing: 'easeInExpo',
			opacity: [1,0],
			translateY: [0,200]
		});

		// The content title animation.
		var bcr = day.cube.getBoundingClientRect();
		day.titlefx.hide(day.titlefxSettings, function() {
			content.classList.remove('content__block--current');
		});
	};

	Calendar.prototype._changeBGColor = function(color) {
		bgEl.style.backgroundColor = color;
	};

	Calendar.prototype._resetBGColor = function() {
		bgEl.style.backgroundColor = defaultBgColor;
	};

	var calendarEl = document.querySelector('.calendar'),
		calendarDays = [].slice.call(calendarEl.children),
		settings = {
			tilt: false
		},
		bgEl = document.getElementById('advent-calendar'),
		defaultBgColor = bgEl.style.backgroundColor,
		colortimeout,
		contentEl = document.querySelector('.content'),
		contents = contentEl.querySelectorAll('.content__block'),
		backCtrl = contentEl.querySelector('.btn-back'),
		contentNumber = contentEl.querySelector('.content__number'),
		isMobile = mobilecheck();

	function init() {
		layout();
	}

	function layout() {
		new Calendar(calendarEl);
	}

	init();

})(window);