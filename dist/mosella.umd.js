!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(n.mosella={})}(this,function(n){var t=Symbol("stream"),r=Symbol("stop"),e=function(n){var e=[],o=[];void 0!==n&&o.push(n);var u=Promise.resolve(),i=function(n,t){t=[].concat(t);var r=function(){if(t.length>0){var e=t.shift()(n);return e instanceof Promise?e.then(function(){return r()}):r()}};return r()},f=function(t){return n!==r&&(void 0!==t&&(n=t),e.length>0?u=u.then(function(){return i(t,e)}):o.push(t),t===r&&(e.length=0,o.length=0)),n};return f.on=function(t){if(n!==r)return e.push(t),o.length>0&&(o=o.filter(function(n){return u=u.then(function(){return i(n,e)}),!1})),function(){e.splice(e.indexOf(t),1)}},f.stop=function(){f(r)},f.hasListeners=function(){return e.length>0},f.is=t,f},o=function(n,t,o){var u,i=o||t.pop(),f=e();return i.on(function(n){n!==r?f(n):u(n)}),u=n.apply(n,t.concat([f]))},u=function(n){return function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var u=r[r.length-1];return"function"==typeof u&&u.is===t?o(n,r):function(t){return o(n,r,t)}}},i=u(function(n,t){var r=e();return t.on(function(t){var e=n(t);return e instanceof Promise?e.then(function(n){e&&r(t)}):e&&r(t),e}),r}),f=u(function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];for(var r=n.pop(),e=0,o=n;e<o.length;e+=1)r=(0,o[e])(r);return r}),c=u(function(n,t){var r=e();return t.on(function(t){var e=n.apply(n,[t]);return e instanceof Promise?e.then(function(n){return r(n)}):r(e),e}),r}),a=c(function(n){return void 0===this.sum&&(this.sum=0),this.sum+=n});n.stream=e,n.filter=i,n.pipe=f,n.map=c,n.merge=function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];for(var r=e(),o=0,u=n;o<u.length;o+=1)u[o].on(function(n){return r(n)});return r},n.operator=u,n.sum=a,n.combine=function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];var r=Array(n.length).fill(void 0),o=e();return n.forEach(function(n,t){r[t]=n(),n.on(function(n){r[t]=n,o(r)})}),o}});
//# sourceMappingURL=mosella.umd.js.map
