!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,b=Math.min,p=function(){return s.Date.now()};function g(e,t,n){var r,i,a,u,f,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function g(t){var n=r,o=i;return r=i=void 0,l=t,u=e.apply(o,n)}function T(e){return l=e,f=setTimeout(O,t),d?g(e):u}function w(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=a}function O(){var e=p();if(w(e))return j(e);f=setTimeout(O,function(e){var n=t-(e-c);return s?b(n,a-(e-l)):n}(e))}function j(e){return f=void 0,v&&r?g(e):(r=i=void 0,u)}function k(){var e=p(),n=w(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return T(c);if(s)return f=setTimeout(O,t),g(c)}return void 0===f&&(f=setTimeout(O,t)),u}return t=S(t)||0,y(n)&&(d=!!n.leading,a=(s="maxWait"in n)?m(S(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),k.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},k.flush=function(){return void 0===f?u:j(p())},k}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?c(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};var T={feedbackForm:document.querySelector(".feedback-form"),feedbackInput:document.querySelector("input"),feedbackTextarea:document.querySelector("textarea")},w="feedback-form-state";T.feedbackForm.addEventListener("input",e(t)((function(e){var t=e.target.value,n=e.target.name;O[n]=t,localStorage.setItem(w,JSON.stringify(O))}),500)),T.feedbackForm.addEventListener("submit",(function(e){T.feedbackInput.value.trim()&&T.feedbackTextarea.value.trim()?(e.preventDefault(),console.log("Provided data:",O),e.target.reset(),localStorage.removeItem(w),window.setTimeout((function(){location.reload()}),1e4)):alert("Please provide information into all available fields")}));var O=JSON.parse(localStorage.getItem(w))||{};!function(){var e=JSON.parse(localStorage.getItem(w));if(e)for(var t in e)e.hasOwnProperty(t)&&(T.feedbackInput.value=e.email||"",T.feedbackTextarea.value=e.message||"")}()}();
//# sourceMappingURL=03-feedback.5836c125.js.map