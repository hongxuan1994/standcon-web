(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61],{7498:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return i},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return a},ACTION_PREFETCH:function(){return u},ACTION_FAST_REFRESH:function(){return s},ACTION_SERVER_ACTION:function(){return f}});let o="refresh",i="navigate",l="restore",a="server-patch",u="prefetch",s="fast-refresh",f="server-action";(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30:function(e,t,r){"use strict";function getDomainLocale(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),r(2866),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3271:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return m}});let n=r(8754),o=r(1757),i=o._(r(7294)),l=n._(r(3935)),a=n._(r(9201)),u=r(3914),s=r(5494),f=r(869);r(1905);let c=r(1823),d=n._(r(4545)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/standcon-web/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function handleLoading(e,t,r,n,o,i){let l=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===l)return;e["data-loaded-src"]=l;let a="decode"in e?e.decode():Promise.resolve();a.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}})}function getDynamicProps(e){let[t,r]=i.version.split("."),n=parseInt(t,10),o=parseInt(r,10);return n>18||18===n&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let g=(0,i.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:o,height:l,width:a,decoding:u,className:s,style:f,fetchPriority:c,placeholder:d,loading:p,unoptimized:g,fill:m,onLoadRef:h,onLoadingCompleteRef:v,setBlurComplete:b,setShowAltText:y,onLoad:_,onError:P,...S}=e;return i.default.createElement("img",{...S,...getDynamicProps(c),loading:p,width:a,height:l,decoding:u,"data-nimg":m?"fill":"1",className:s,style:f,sizes:o,srcSet:n,src:r,ref:(0,i.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(P&&(e.src=e.src),e.complete&&handleLoading(e,d,h,v,b,g))},[r,d,h,v,b,P,g,t]),onLoad:e=>{let t=e.currentTarget;handleLoading(t,d,h,v,b,g)},onError:e=>{y(!0),"empty"!==d&&b(!0),P&&P(e)}})});function ImagePreload(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...getDynamicProps(r.fetchPriority)};return t&&l.default.preload?(l.default.preload(r.src,n),null):i.default.createElement(a.default,null,i.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...n}))}let m=(0,i.forwardRef)((e,t)=>{let r=(0,i.useContext)(c.RouterContext),n=(0,i.useContext)(f.ImageConfigContext),o=(0,i.useMemo)(()=>{let e=p||n||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:l,onLoadingComplete:a}=e,m=(0,i.useRef)(l);(0,i.useEffect)(()=>{m.current=l},[l]);let h=(0,i.useRef)(a);(0,i.useEffect)(()=>{h.current=a},[a]);let[v,b]=(0,i.useState)(!1),[y,_]=(0,i.useState)(!1),{props:P,meta:S}=(0,u.getImgProps)(e,{defaultLoader:d.default,imgConf:o,blurComplete:v,showAltText:y});return i.default.createElement(i.default.Fragment,null,i.default.createElement(g,{...P,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:b,setShowAltText:_,ref:t}),S.priority?i.default.createElement(ImagePreload,{isAppRouter:!r,imgAttributes:P}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5170:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let n=r(8754),o=n._(r(7294)),i=r(4450),l=r(2227),a=r(4364),u=r(109),s=r(3607),f=r(1823),c=r(9031),d=r(920),p=r(30),g=r(7192),m=r(7498),h=new Set;function prefetch(e,t,r,n,o,i){if(!i&&!(0,l.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,i=t+"%"+r+"%"+o;if(h.has(i))return;h.add(i)}let a=i?e.prefetch(t,o):e.prefetch(t,r,n);Promise.resolve(a).catch(e=>{})}function formatStringOrUrl(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let v=o.default.forwardRef(function(e,t){let r,n;let{href:a,as:h,children:v,prefetch:b=null,passHref:y,replace:_,shallow:P,scroll:S,locale:w,onClick:C,onMouseEnter:E,onTouchStart:O,legacyBehavior:I=!1,...j}=e;r=v,I&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let R=o.default.useContext(f.RouterContext),M=o.default.useContext(c.AppRouterContext),x=null!=R?R:M,k=!R,L=!1!==b,z=null===b?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,{href:A,as:T}=o.default.useMemo(()=>{if(!R){let e=formatStringOrUrl(a);return{href:e,as:h?formatStringOrUrl(h):e}}let[e,t]=(0,i.resolveHref)(R,a,!0);return{href:e,as:h?(0,i.resolveHref)(R,h):t||e}},[R,a,h]),N=o.default.useRef(A),D=o.default.useRef(T);I&&(n=o.default.Children.only(r));let U=I?n&&"object"==typeof n&&n.ref:t,[F,B,G]=(0,d.useIntersection)({rootMargin:"200px"}),H=o.default.useCallback(e=>{(D.current!==T||N.current!==A)&&(G(),D.current=T,N.current=A),F(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[T,U,A,G,F]);o.default.useEffect(()=>{x&&B&&L&&prefetch(x,A,T,{locale:w},{kind:z},k)},[T,A,B,w,L,null==R?void 0:R.locale,x,k,z]);let K={ref:H,onClick(e){I||"function"!=typeof C||C(e),I&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),x&&!e.defaultPrevented&&function(e,t,r,n,i,a,u,s,f,c){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!f&&!(0,l.isLocalURL)(r)))return;e.preventDefault();let navigate=()=>{let e=null==u||u;"beforePopState"in t?t[i?"replace":"push"](r,n,{shallow:a,locale:s,scroll:e}):t[i?"replace":"push"](n||r,{forceOptimisticNavigation:!c,scroll:e})};f?o.default.startTransition(navigate):navigate()}(e,x,A,T,_,P,S,w,k,L)},onMouseEnter(e){I||"function"!=typeof E||E(e),I&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),x&&(L||!k)&&prefetch(x,A,T,{locale:w,priority:!0,bypassPrefetchedCheck:!0},{kind:z},k)},onTouchStart(e){I||"function"!=typeof O||O(e),I&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),x&&(L||!k)&&prefetch(x,A,T,{locale:w,priority:!0,bypassPrefetchedCheck:!0},{kind:z},k)}};if((0,u.isAbsoluteUrl)(T))K.href=T;else if(!I||y||"a"===n.type&&!("href"in n.props)){let e=void 0!==w?w:null==R?void 0:R.locale,t=(null==R?void 0:R.isLocaleDomain)&&(0,p.getDomainLocale)(T,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);K.href=t||(0,g.addBasePath)((0,s.addLocale)(T,e,null==R?void 0:R.defaultLocale))}return I?o.default.cloneElement(n,K):o.default.createElement("a",{...j,...K},r)}),b=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},920:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let n=r(7294),o=r(3436),i="function"==typeof IntersectionObserver,l=new Map,a=[];function useIntersection(e){let{rootRef:t,rootMargin:r,disabled:u}=e,s=u||!i,[f,c]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(i){if(s||f)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let o=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:i,elements:o},a.push(r),l.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),l.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!f){let e=(0,o.requestIdleCallback)(()=>c(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,r,t,f,d.current]);let g=(0,n.useCallback)(()=>{c(!1)},[]);return[p,f,g]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3914:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return getImgProps}}),r(1905);let n=r(2393),o=r(5494);function isStaticRequire(e){return void 0!==e.default}function getInt(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function getImgProps(e,t){var r;let i,l,a,{src:u,sizes:s,unoptimized:f=!1,priority:c=!1,loading:d,className:p,quality:g,width:m,height:h,fill:v=!1,style:b,onLoad:y,onLoadingComplete:_,placeholder:P="empty",blurDataURL:S,fetchPriority:w,layout:C,objectFit:E,objectPosition:O,lazyBoundary:I,lazyRoot:j,...R}=e,{imgConf:M,showAltText:x,blurComplete:k,defaultLoader:L}=t,z=M||o.imageConfigDefault;if("allSizes"in z)i=z;else{let e=[...z.deviceSizes,...z.imageSizes].sort((e,t)=>e-t),t=z.deviceSizes.sort((e,t)=>e-t);i={...z,allSizes:e,deviceSizes:t}}let A=R.loader||L;delete R.loader,delete R.srcSet;let T="__next_img_default"in A;if(T){if("custom"===i.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=A;A=t=>{let{config:r,...n}=t;return e(n)}}if(C){"fill"===C&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(b={...b,...e});let t={responsive:"100vw",fill:"100vw"}[C];t&&!s&&(s=t)}let N="",D=getInt(m),U=getInt(h);if("object"==typeof(r=u)&&(isStaticRequire(r)||void 0!==r.src)){let e=isStaticRequire(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,a=e.blurHeight,S=S||e.blurDataURL,N=e.src,!v){if(D||U){if(D&&!U){let t=D/e.width;U=Math.round(e.height*t)}else if(!D&&U){let t=U/e.height;D=Math.round(e.width*t)}}else D=e.width,U=e.height}}let F=!c&&("lazy"===d||void 0===d);(!(u="string"==typeof u?u:N)||u.startsWith("data:")||u.startsWith("blob:"))&&(f=!0,F=!1),i.unoptimized&&(f=!0),T&&u.endsWith(".svg")&&!i.dangerouslyAllowSVG&&(f=!0),c&&(w="high");let B=getInt(g),G=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:O}:{},x?{}:{color:"transparent"},b),H=k||"empty"===P?null:"blur"===P?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:D,heightInt:U,blurWidth:l,blurHeight:a,blurDataURL:S||"",objectFit:G.objectFit})+'")':'url("'+P+'")',K=H?{backgroundSize:G.objectFit||"cover",backgroundPosition:G.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:H}:{},q=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:l,loader:a}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let i=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:i,kind:"x"}}(t,o,l),f=u.length-1;return{sizes:l||"w"!==s?l:"100vw",srcSet:u.map((e,n)=>a({config:t,src:r,quality:i,width:e})+" "+("w"===s?e:n+1)+s).join(", "),src:a({config:t,src:r,quality:i,width:u[f]})}}({config:i,src:u,unoptimized:f,width:D,quality:B,sizes:s,loader:A}),V={...R,loading:F?"lazy":d,fetchPriority:w,width:D,height:U,decoding:"async",className:p,style:{...G,...K},sizes:q.sizes,srcSet:q.srcSet,src:q.src},W={unoptimized:f,priority:c,placeholder:P,fill:v};return{props:V,meta:W}}},2393:function(e,t){"use strict";function getImageBlurSvg(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:l}=e,a=n?40*n:t,u=o?40*o:r,s=a&&u?"viewBox='0 0 "+a+" "+u+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return getImageBlurSvg}})},645:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{unstable_getImgProps:function(){return unstable_getImgProps},default:function(){return u}});let n=r(8754),o=r(3914),i=r(1905),l=r(3271),a=n._(r(4545)),unstable_getImgProps=e=>{(0,i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,o.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/standcon-web/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},u=l.Image},4545:function(e,t){"use strict";function defaultLoader(e){let{config:t,src:r,width:n,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),defaultLoader.__next_img_default=!0;let r=defaultLoader},5675:function(e,t,r){e.exports=r(645)},1664:function(e,t,r){e.exports=r(5170)}}]);