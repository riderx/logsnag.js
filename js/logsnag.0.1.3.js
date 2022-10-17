(function(t){typeof define=="function"&&define.amd?define(t):t()})(function(){"use strict";var p=Object.defineProperty;var d=(t,e,o)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var a=(t,e,o)=>(d(t,typeof e!="symbol"?e+"":e,o),o);const t="https://api.logsnag.com",e={LOG:t+"/v1/log",INSIGHT:t+"/v1/insight"};class o extends Error{constructor(n){super(`HTTP Error Response: ${n.status} ${n.statusText}`)}}class h{constructor({token:n,project:r}){a(this,"token");a(this,"project");this.token=n,this.project=r}getProject(){return this.project}createAuthorizationHeader(){return`Bearer ${this.token}`}async publish(n){const r={"Content-Type":"application/json",Authorization:this.createAuthorizationHeader()},i="POST",c=JSON.stringify({...n,project:this.getProject()}),s=await fetch(e.LOG,{method:i,body:c,headers:r});if(!s.ok)throw new o(s);return!0}async insight(n){const r={"Content-Type":"application/json",Authorization:this.createAuthorizationHeader()},i="POST",c=JSON.stringify({...n,project:this.getProject()}),s=await fetch(e.INSIGHT,{method:i,body:c,headers:r});if(!s.ok)throw new o(s);return!0}}window.LogSnag=h});
