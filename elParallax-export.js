/**
 * Created by misicdemone on 2017/1/14.
 */
let elParallax = (function () {
  let init = function (o) {
    let SCREEN_WIDTH = window.innerWidth;
    let SCREEN_HEIGHT = window.innerHeight;

    let opt = [];

    let isDOM = (typeof HTMLElement === 'object')
      ? function (obj) {
        return obj instanceof HTMLElement;
      }
      : function (obj) {
        return obj && typeof obj === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string';
      };

    (function defaltEl () {
      if (o instanceof Array) {
        o.map(function (item) {
          opt.push({
            el: item.element,
            gSensor: item.gSensor || true,
            multiple: item.multiple || 1,
            perspective: item.perspective !== false
          });
        });
      } else if (o.element) {
        opt[0] = {
          el: o.element,
          gSensor: o.gSensor || true,
          multiple: o.multiple || 1,
          perspective: o.perspective !== false
        };
      } else if (isDOM(o)) {
        opt[0] = {
          el: o,
          gSensor: true,
          multiple: 1,
          perspective: true
        };
      }
    })();

    document.addEventListener('mousemove',function (e) {

      let xpos = e.clientX;
      let ypos = e.clientY;

      let xMul = xpos / SCREEN_WIDTH * 2 - 1;
      let yMul = ypos / SCREEN_HEIGHT * 2 - 1;

      opt.map(function (item) {
        if (item.perspective) {
          item.el.style.transform = 'perspective(' + (3 - Math.abs(xMul + yMul)) + 'em) translate(' + xMul * 100 * item.multiple + '%,' + yMul * 100 * item.multiple + '%) rotate3d(' + (-yMul * 45 * item.multiple) + ',' + xMul * 45 * item.multiple + ',0,' + 5 * item.multiple + 'deg)';
        } else {
          item.el.style.transform = 'translate(' + xMul * 100 * item.multiple + '%,' + yMul * 100 * item.multiple + '%)';
        }
      });
    });
  };
  return init;
})();

export default elParallax;
