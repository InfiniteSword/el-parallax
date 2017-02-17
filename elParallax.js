/**
 * Created by misicdemone on 2017/1/14.
 */
(function (global, factory) {
    if (typeof define === 'function' && define.amd)
        define(function() { return factory(global) });
    else
        factory(global)
}(this, function (window) {
    var elParallax = (function () {
        var init = function (o) {

            var SCREEN_WIDTH = window.innerWidth;
            var SCREEN_HEIGHT = window.innerHeight;

            var opt = [];

            var isDOM = ( typeof HTMLElement === 'object' ) ?
                function(obj){
                    return obj instanceof HTMLElement;
                } :
                function(obj){
                    return obj && typeof obj === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string';
                };

            (function defaltEl() {
               if(o instanceof Array){
                   o.map(function (item) {
                       opt.push({
                           el: item.element,
                           gSensor: item.gSensor || true,
                           multiple: item.multiple || 1,
                           perspective: item.perspective!==false
                       });
                   })
               } else if(o.element) {
                   opt[0] = {
                       el: o.element,
                       gSensor: o.gSensor || true,
                       multiple: o.multiple || 1,
                       perspective: o.perspective!==false
                   }
               } else if(isDOM(o)){
                   opt[0] = {
                       el: o,
                       gSensor: true,
                       multiple: 1,
                       perspective: true
                   }
               }
            })();

            document.addEventListener('mousemove',function (e) {

                var xpos = e.clientX,
                    ypos = e.clientY;

                var x_mul = xpos / SCREEN_WIDTH * 2 - 1,
                    y_mul = ypos / SCREEN_HEIGHT * 2 - 1;

                opt.map(function (item) {
                    if (item.perspective){
                        item.el.style.transform = 'perspective('+(3-Math.abs(x_mul+y_mul))+'em) translate('+ x_mul*100*item.multiple + '%,' + y_mul*100*item.multiple +'%) rotate3d('+ (-y_mul*45*item.multiple) + ',' + x_mul*45*item.multiple +',0,'+5*item.multiple+'deg)'
                    } else {
                        item.el.style.transform = 'translate('+ x_mul*100*item.multiple + '%,' + y_mul*100*item.multiple +'%)'
                    }
                });

            })



        };

        return init
    })();
    window.elParallax = elParallax;
}));