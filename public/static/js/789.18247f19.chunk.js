(self.webpackChunknear_raffle=self.webpackChunknear_raffle||[]).push([[789],{1805:function(r,e,t){"use strict";t.d(e,{Cx:function(){return a},DN:function(){return o},LB:function(){return n},yK:function(){return c}});var n="https://rafflik.aphub.xyz/api",c="https://rafflik.aphub.xyz/",a="1036990971130421248",o="_hR5cOwmvYNwLVLjsnwcMeT5c9WBwu2q"},796:function(r,e,t){"use strict";t.r(e),t.d(e,{default:function(){return v}});var n=t(4165),c=t(5861),a=t(885),o=t(1881),u=t.n(o),s=t(7313),i=t(2135),f=t(1805),p=t(8467),d=t(8425),l=t(6417),h=["identify"].join(" ");function v(){var r=(0,p.s0)(),e=(0,i.lr)(),t=(0,a.Z)(e,1)[0],o=(0,s.useRef)(!0),v=t.get("code"),g=function(){var e=(0,c.Z)((0,n.Z)().mark((function e(){var t,c,a,o,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!v){e.next=16;break}return t=new URLSearchParams({client_id:f.Cx,client_secret:f.DN,grant_type:"authorization_code",code:v,redirect_uri:"".concat(f.yK,"auth/callback")}),e.next=4,u().post("https://discordapp.com/api/v9/oauth2/token",t,{headers:{"Content-Type":"application/x-www-form-urlencoded"}});case 4:return c=e.sent,(a=c.data).scope!==h&&(0,d.ac)("error",'Expected scope "'.concat(h,'" but received scope "').concat(a.scope,'"')),e.next=9,u().get("https://discordapp.com/api/v9/users/@me",{headers:{Authorization:"Bearer ".concat(a.access_token)}});case 9:return o=e.sent,null===(s=o.data).email&&(0,d.ac)("error","Please verify your Discord's account E-mail before logging in."),e.next=14,(0,d.r4)(s);case 14:!0===e.sent.data.status?(localStorage.setItem("discordUser",JSON.stringify(s)),r("/raffles")):r("/login");case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,s.useEffect)((function(){return o.current&&(0,c.Z)((0,n.Z)().mark((function r(){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:JSON.parse(localStorage.getItem("discordUser"))||g();case 1:case"end":return r.stop()}}),r)})))(),function(){return o.current=!1}}),[]),(0,l.jsx)("div",{})}},8425:function(r,e,t){"use strict";t.d(e,{$G:function(){return l},ac:function(){return d},r4:function(){return p}});var n=t(885),c=t(4165),a=t(5861),o=t(1881),u=t.n(o),s=(t(7964),t(5390),t(5928)),i=t(1805),f=t(1387),p=(JSON.parse(localStorage.getItem("discordUser")),new s.providers.JsonRpcProvider("https://archival-rpc.mainnet.near.org"),function(){var r=(0,a.Z)((0,c.Z)().mark((function r(e){return(0,c.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u().post("".concat(i.LB,"/create-user"),e);case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()),d=function(){var r=(0,a.Z)((0,c.Z)().mark((function r(e,t){var n;return(0,c.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n={position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"},r.t0=e,r.next="info"===r.t0?4:"success"===r.t0?6:"warning"===r.t0?8:"error"===r.t0?10:12;break;case 4:return f.Am.info(t,n),r.abrupt("break",14);case 6:return f.Am.success(t,n),r.abrupt("break",14);case 8:return f.Am.warn(t,n),r.abrupt("break",14);case 10:return f.Am.error(t,n),r.abrupt("break",14);case 12:return(0,f.Am)(t,n),r.abrupt("break",14);case 14:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}();function l(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[6,6],t=(0,n.Z)(e,2),c=t[0],a=t[1],o=r.slice(0,c),u=r.slice(-1*a,r.length);return r.length>c+a?[o,u].join("..."):r}},950:function(){},6601:function(){},9214:function(){},8623:function(){},7748:function(){},5568:function(){},6619:function(){},3105:function(){},7108:function(){},2361:function(){},4616:function(){},5024:function(){}}]);