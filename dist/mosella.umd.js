!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(n.mosella={})}(this,function(n){var t=Symbol("stream"),r=Symbol("stop"),o=Symbol("reset"),e=function(n){var e=[],i=[];void 0!==n&&i.push(n);var u,f=n,c=function(n,t){var r;t=[].concat(t);var o=function(){u===r&&(u=void 0);var o=function(n,t){var r=function(){if(t.length>0){var o=t.shift()(n);return o instanceof Promise?o.then(function(){return r()}):r()}};return r()}(n,t);o instanceof Promise&&(u=o)};u?(r=u.then(o),u=r):o()},a=function(t){return n!==r&&void 0!==t&&(void 0!==t&&(n=t),t===o&&(n=f,i=[]),e.length>0?c(t,e):t!==o&&i.push(t),t===r&&(e.length=0,i.length=0)),n};return a.on=function(t){if(n!==r)return e.push(t),i.length>0&&(i=i.filter(function(n){return c(n,e),!1})),function(){e.splice(e.indexOf(t),1)}},a.stop=function(){a(r)},a.reset=function(){a(o)},a.hasListeners=function(){return e.length>0},a.is=t,a},i=function(n,t,i){var u,f=i||t.pop(),c=e();return f.on(function(n){n!==r&&n!==o?c(n):u(n)}),u=n.apply(n,t.concat([c]))},u=function(n){return function(){for(var r=[],o=arguments.length;o--;)r[o]=arguments[o];var e=r[r.length-1];return"function"==typeof e&&e.is===t?i(n,r):function(t){return i(n,r,t)}}},f=u(function(n,t){var r=e();return t.on(function(t){var o=n(t);return o instanceof Promise?o.then(function(n){o&&r(t)}):o&&r(t),o}),r}),c=u(function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];for(var r=n.pop(),o=0,e=n;o<e.length;o+=1)r=(0,e[o])(r);return r}),a=u(function(n,t){var r=e();return t.on(function(t){var o=n.apply(n,[t]);return o instanceof Promise?o.then(function(n){return r(n)}):r(o),o}),r}),s=a(function(n){return void 0===this.sum&&(this.sum=0),this.sum+=n});n.stream=e,n.filter=f,n.pipe=c,n.map=a,n.merge=function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];for(var r=e(),o=0,i=n;o<i.length;o+=1)i[o].on(function(n){return r(n)});return r},n.operator=u,n.sum=s,n.combine=function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];var i=Array(n.length).fill(void 0);n.forEach(function(n,t){i[t]=n()});var u=e(i);return n.forEach(function(n,t){n.on(function(n){n===o||n===r?u(n):(i[t]=n,u([].concat(i)))})}),u}});
//# sourceMappingURL=mosella.umd.js.map
