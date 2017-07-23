# el-parallax
tool for making parallax of elements

## Installation

```
$ npm install el-parallax
```

## Usage
``` javascript
import elParallax from 'el-parallax'
const el = document.querySelector('#el');
elParallax(el);
```
or
``` javascript
elParallax({
    element: el,
    perspective: true,
    multiple: 0.01
})
```
or
``` javascript
const el1 = document.querySelector('#el1');
const el2 = document.querySelector('#el2');
elParallax([{
    element: el1,
    perspective: false,
    multiple: 0.01
}, {
    element: el2,
    perspective: false,
    multiple: 0.04
}])
```
