(self.webpackChunknear_raffle=self.webpackChunknear_raffle||[]).push([[789],{1805:function(e,r,t){"use strict";t.d(r,{Cx:function(){return a},DN:function(){return o},LB:function(){return n},yK:function(){return c}});var n="https://coinflip-aptos.vercel.com/api",c="https://coinflip-aptos.vercel.com/",a="1036990971130421248",o="_hR5cOwmvYNwLVLjsnwcMeT5c9WBwu2q"},796:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return v}});var n=t(4165),c=t(5861),a=t(885),o=t(1881),u=t.n(o),s=t(7313),i=t(2135),f=t(1805),p=t(8467),l=t(8425),d=t(6417),h=["identify"].join(" ");function v(){var e=(0,p.s0)(),r=(0,i.lr)(),t=(0,a.Z)(r,1)[0],o=(0,s.useRef)(!0),v=t.get("code"),g=function(){var r=(0,c.Z)((0,n.Z)().mark((function r(){var t,c,a,o,s;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!v){r.next=16;break}return t=new URLSearchParams({client_id:f.Cx,client_secret:f.DN,grant_type:"authorization_code",code:v,redirect_uri:"".concat(f.yK,"auth/callback")}),r.next=4,u().post("https://discordapp.com/api/v9/oauth2/token",t,{headers:{"Content-Type":"application/x-www-form-urlencoded"}});case 4:return c=r.sent,(a=c.data).scope!==h&&(0,l.ac)('Expected scope "'.concat(h,'" but received scope "').concat(a.scope,'"')),r.next=9,u().get("https://discordapp.com/api/v9/users/@me",{headers:{Authorization:"Bearer ".concat(a.access_token)}});case 9:return o=r.sent,null===(s=o.data).email&&(0,l.ac)("Please verify your Discord's account E-mail before logging in."),r.next=14,(0,l.r4)(s);case 14:!0===r.sent.data.status?(localStorage.setItem("discordUser",JSON.stringify(s)),e("/raffles")):e("/login");case 16:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return(0,s.useEffect)((function(){return o.current&&(0,c.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:JSON.parse(localStorage.getItem("discordUser"))||g();case 1:case"end":return e.stop()}}),e)})))(),function(){return o.current=!1}}),[]),(0,d.jsx)("div",{})}},8425:function(e,r,t){"use strict";t.d(r,{$G:function(){return d},ac:function(){return l},r4:function(){return p}});var n=t(885),c=t(4165),a=t(5861),o=t(1881),u=t.n(o),s=(t(7964),t(5390),t(5928)),i=t(1805),f=t(1387),p=(JSON.parse(localStorage.getItem("discordUser")),new s.providers.JsonRpcProvider("https://archival-rpc.mainnet.near.org"),function(){var e=(0,a.Z)((0,c.Z)().mark((function e(r){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().post("".concat(i.LB,"/create-user"),r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()),l=function(){var e=(0,a.Z)((0,c.Z)().mark((function e(r,t){var n;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"},e.t0=r,e.next="info"===e.t0?4:"success"===e.t0?6:"warning"===e.t0?8:"error"===e.t0?10:12;break;case 4:return f.Am.info(t,n),e.abrupt("break",14);case 6:return f.Am.success(t,n),e.abrupt("break",14);case 8:return f.Am.warn(t,n),e.abrupt("break",14);case 10:return f.Am.error(t,n),e.abrupt("break",14);case 12:return(0,f.Am)(t,n),e.abrupt("break",14);case 14:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}();function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[6,6],t=(0,n.Z)(r,2),c=t[0],a=t[1],o=e.slice(0,c),u=e.slice(-1*a,e.length);return e.length>c+a?[o,u].join("..."):e}},950:function(){},6601:function(){},9214:function(){},8623:function(){},7748:function(){},5568:function(){},6619:function(){},3105:function(){},7108:function(){},2361:function(){},4616:function(){},5024:function(){}}]);