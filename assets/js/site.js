!function(o){"use strict";var t={upKeys:[33,38],downKeys:[32,34,40],easing:"linear",scrollTime:600,activeClass:"active",onPageChange:null,topOffset:0};o.scrollIt=function(e){var n=o.extend(t,e),a=0,l=o("[data-scroll-index]:last").attr("data-scroll-index"),s=function(t){if(!(0>t||t>l)){var e=o("[data-scroll-index="+t+"]").offset().top+n.topOffset+1;o("html,body").animate({scrollTop:e},n.scrollTime,n.easing)}},r=function(t){var e=o(t.target).closest("[data-scroll-nav]").attr("data-scroll-nav")||o(t.target).closest("[data-scroll-goto]").attr("data-scroll-goto");s(parseInt(e))},i=function(t,e){return o.inArray(t,e)>-1},c=function(t){var e=t.which;return o("html,body").is(":animated")&&(i(e,n.upKeys)||i(e,n.downKeys))?!1:i(e,n.upKeys)&&a>0?(s(parseInt(a)-1),!1):i(e,n.downKeys)&&l>a?(s(parseInt(a)+1),!1):!0},d=function(t){n.onPageChange&&t&&a!=t&&n.onPageChange(t),a=t,o("[data-scroll-nav]").removeClass(n.activeClass),o("[data-scroll-nav="+t+"]").addClass(n.activeClass)},p=function(){var t=o(window).scrollTop(),e=o("[data-scroll-index]").filter(function(e,a){return t>=o(a).offset().top+n.topOffset&&t<o(a).offset().top+n.topOffset+o(a).outerHeight()}),a=e.first().attr("data-scroll-index");d(a)};o(window).on("scroll",p).scroll(),o(window).on("keydown",c),o("body").on("click","[data-scroll-nav], [data-scroll-goto]",function(o){o.preventDefault(),r(o)})}}(jQuery),function(){$(function(){var o;$(".scrollto, .gototop").bind("click",function(o){var t;return t=$(this),$("html, body").stop().animate({scrollTop:$(t.attr("href")).offset().top},800,"easeInOutQuart"),o.preventDefault()}),new WOW({offset:100}).init(),setTimeout(function(){return $(".slab").slabText({viewportBreakpoint:380})},400),$("#explore").waypoint(function(o){return"down"===o&&$(".small-logo").addClass("show"),"up"===o?$(".small-logo").removeClass("show"):void 0},{offset:"50%"}),o=function(){var o,t,e,n,a,l,s,r;return $("#gmap").length?(l={lat:3.0924034,lng:101.543492,zoom:17,infoText:"<p>430, Level 4, Block 4								<br/>Laman Seri Business Park								<br/>40100 Shah Alam Selangor</p>",linkText:"View on Google Maps",mapAddress:"Laman Seri Business Park Shah Alam Selangor",icon:""+imgurl+"/pin-dark.png"},t=new google.maps.InfoWindow,r=new google.maps.LatLng(l.lat,l.lng),a={zoom:l.zoom,center:r,zoomControl:!0,panControl:!1,streetViewControl:!1,mapTypeControl:!1,overviewMapControl:!1,scrollwheel:!1,styles:mapstyles},e=new google.maps.Map($("#gmap")[0],a),s=new google.maps.Marker({position:r,map:e,title:l.linkText,icon:l.icon}),n="https://www.google.com/maps/preview?ll="+l.lat+","+l.lng+"&z=14&q="+l.mapAddress,o='<div class="infowin">'+l.infoText+'<a href="'+n+'" target="_blank">'+l.linkText+"</a></div>",google.maps.event.addListener(s,"mouseover",function(){return t.setContent(o),t.open(e,s)}),google.maps.event.addListener(s,"click",function(){return window.open(n,"_blank")}),$(window).bind("resize",function(){return e.setCenter(r)})):void 0},o(),"undefined"!=typeof Pace&&null!==Pace&&Pace.on("done",function(){return setTimeout(function(){return $("html").addClass("loaded")},300)})})}.call(this);