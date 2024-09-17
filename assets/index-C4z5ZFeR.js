import{b as E,C as T,F as O,S as g,o as L,q as A,E as x,R as D,G as P,v as M,H as h,J as j,h as k,K as R,M as v,W as B}from"./PostView-Bj9Dur7i.js";class te{constructor(t,e,n,o){this.state=t,this.pos=e,this.explicit=n,this.view=o,this.abortListeners=[],this.abortOnDocChange=!1}tokenBefore(t){let e=E(this.state).resolveInner(this.pos,-1);for(;e&&t.indexOf(e.name)<0;)e=e.parent;return e?{from:e.from,to:this.pos,text:this.state.sliceDoc(e.from,this.pos),type:e.type}:null}matchBefore(t){let e=this.state.doc.lineAt(this.pos),n=Math.max(e.from,this.pos-250),o=e.text.slice(n-e.from,this.pos-e.from),l=o.search(q(t));return l<0?null:{from:n+l,to:this.pos,text:o.slice(l)}}get aborted(){return this.abortListeners==null}addEventListener(t,e,n){t=="abort"&&this.abortListeners&&(this.abortListeners.push(e),n&&n.onDocChange&&(this.abortOnDocChange=!0))}}function S(i){let t=Object.keys(i).join(""),e=/\w/.test(t);return e&&(t=t.replace(/\w/g,"")),`[${e?"\\w":""}${t.replace(/[^\w\s]/g,"\\$&")}]`}function W(i){let t=Object.create(null),e=Object.create(null);for(let{label:o}of i){t[o[0]]=!0;for(let l=1;l<o.length;l++)e[o[l]]=!0}let n=S(t)+S(e)+"*$";return[new RegExp("^"+n),new RegExp(n)]}function ne(i){let t=i.map(o=>typeof o=="string"?{label:o}:o),[e,n]=t.every(o=>/^\w+$/.test(o.label))?[/\w*$/,/\w+$/]:W(t);return o=>{let l=o.matchBefore(n);return l||o.explicit?{from:l?l.from:o.pos,options:t,validFor:e}:null}}function ie(i,t){return e=>{for(let n=E(e.state).resolveInner(e.pos,-1);n;n=n.parent){if(i.indexOf(n.name)>-1)return null;if(n.type.isTop)break}return t(e)}}function q(i,t){var e;let{source:n}=i,o=n[n.length-1]!="$";return o?new RegExp(`(?:${n})${o?"$":""}`,(e=i.flags)!==null&&e!==void 0?e:i.ignoreCase?"i":""):i}const H=P.define(),V=x.baseTheme({".cm-tooltip.cm-tooltip-autocomplete":{"& > ul":{fontFamily:"monospace",whiteSpace:"nowrap",overflow:"hidden auto",maxWidth_fallback:"700px",maxWidth:"min(700px, 95vw)",minWidth:"250px",maxHeight:"10em",height:"100%",listStyle:"none",margin:0,padding:0,"& > li, & > completion-section":{padding:"1px 3px",lineHeight:1.2},"& > li":{overflowX:"hidden",textOverflow:"ellipsis",cursor:"pointer"},"& > completion-section":{display:"list-item",borderBottom:"1px solid silver",paddingLeft:"0.5em",opacity:.7}}},"&light .cm-tooltip-autocomplete ul li[aria-selected]":{background:"#17c",color:"white"},"&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]":{background:"#777"},"&dark .cm-tooltip-autocomplete ul li[aria-selected]":{background:"#347",color:"white"},"&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]":{background:"#444"},".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after":{content:'"···"',opacity:.5,display:"block",textAlign:"center"},".cm-tooltip.cm-completionInfo":{position:"absolute",padding:"3px 9px",width:"max-content",maxWidth:"400px",boxSizing:"border-box",whiteSpace:"pre-line"},".cm-completionInfo.cm-completionInfo-left":{right:"100%"},".cm-completionInfo.cm-completionInfo-right":{left:"100%"},".cm-completionInfo.cm-completionInfo-left-narrow":{right:"30px"},".cm-completionInfo.cm-completionInfo-right-narrow":{left:"30px"},"&light .cm-snippetField":{backgroundColor:"#00000022"},"&dark .cm-snippetField":{backgroundColor:"#ffffff22"},".cm-snippetFieldPosition":{verticalAlign:"text-top",width:0,height:"1.15em",display:"inline-block",margin:"0 -0.7px -.7em",borderLeft:"1.4px dotted #888"},".cm-completionMatchedText":{textDecoration:"underline"},".cm-completionDetail":{marginLeft:"0.5em",fontStyle:"italic"},".cm-completionIcon":{fontSize:"90%",width:".8em",display:"inline-block",textAlign:"center",paddingRight:".6em",opacity:"0.6",boxSizing:"content-box"},".cm-completionIcon-function, .cm-completionIcon-method":{"&:after":{content:"'ƒ'"}},".cm-completionIcon-class":{"&:after":{content:"'○'"}},".cm-completionIcon-interface":{"&:after":{content:"'◌'"}},".cm-completionIcon-variable":{"&:after":{content:"'𝑥'"}},".cm-completionIcon-constant":{"&:after":{content:"'𝐶'"}},".cm-completionIcon-type":{"&:after":{content:"'𝑡'"}},".cm-completionIcon-enum":{"&:after":{content:"'∪'"}},".cm-completionIcon-property":{"&:after":{content:"'□'"}},".cm-completionIcon-keyword":{"&:after":{content:"'🔑︎'"}},".cm-completionIcon-namespace":{"&:after":{content:"'▢'"}},".cm-completionIcon-text":{"&:after":{content:"'abc'",fontSize:"50%",verticalAlign:"middle"}}});class z{constructor(t,e,n,o){this.field=t,this.line=e,this.from=n,this.to=o}}class b{constructor(t,e,n){this.field=t,this.from=e,this.to=n}map(t){let e=t.mapPos(this.from,-1,v.TrackDel),n=t.mapPos(this.to,1,v.TrackDel);return e==null||n==null?null:new b(this.field,e,n)}}class w{constructor(t,e){this.lines=t,this.fieldPositions=e}instantiate(t,e){let n=[],o=[e],l=t.doc.lineAt(e),f=/^\s*/.exec(l.text)[0];for(let s of this.lines){if(n.length){let c=f,a=/^\t*/.exec(s)[0].length;for(let r=0;r<a;r++)c+=t.facet(M);o.push(e+c.length-a),s=c+s.slice(a)}n.push(s),e+=s.length+1}let p=this.fieldPositions.map(s=>new b(s.field,o[s.line]+s.from,o[s.line]+s.to));return{text:n,ranges:p}}static parse(t){let e=[],n=[],o=[],l;for(let f of t.split(/\r\n?|\n/)){for(;l=/[#$]\{(?:(\d+)(?::([^}]*))?|((?:\\[{}]|[^}])*))\}/.exec(f);){let p=l[1]?+l[1]:null,s=l[2]||l[3]||"",c=-1,a=s.replace(/\\[{}]/g,r=>r[1]);for(let r=0;r<e.length;r++)(p!=null?e[r].seq==p:a&&e[r].name==a)&&(c=r);if(c<0){let r=0;for(;r<e.length&&(p==null||e[r].seq!=null&&e[r].seq<p);)r++;e.splice(r,0,{seq:p,name:a}),c=r;for(let y of o)y.field>=c&&y.field++}o.push(new z(c,n.length,l.index,l.index+a.length)),f=f.slice(0,l.index)+s+f.slice(l.index+l[0].length)}f=f.replace(/\\([{}])/g,(p,s,c)=>{for(let a of o)a.line==n.length&&a.from>c&&(a.from--,a.to--);return s}),n.push(f)}return new w(n,o)}}let K=h.widget({widget:new class extends B{toDOM(){let i=document.createElement("span");return i.className="cm-snippetFieldPosition",i}ignoreEvent(){return!1}}}),N=h.mark({class:"cm-snippetField"});class m{constructor(t,e){this.ranges=t,this.active=e,this.deco=h.set(t.map(n=>(n.from==n.to?K:N).range(n.from,n.to)))}map(t){let e=[];for(let n of this.ranges){let o=n.map(t);if(!o)return null;e.push(o)}return new m(e,this.active)}selectionInsideField(t){return t.ranges.every(e=>this.ranges.some(n=>n.field==this.active&&n.from<=e.from&&n.to>=e.to))}}const u=g.define({map(i,t){return i&&i.map(t)}}),X=g.define(),d=j.define({create(){return null},update(i,t){for(let e of t.effects){if(e.is(u))return e.value;if(e.is(X)&&i)return new m(i.ranges,e.value)}return i&&t.docChanged&&(i=i.map(t.changes)),i&&t.selection&&!i.selectionInsideField(t.selection)&&(i=null),i},provide:i=>x.decorations.from(i,t=>t?t.deco:h.none)});function I(i,t){return k.create(i.filter(e=>e.field==t).map(e=>k.range(e.from,e.to)))}function G(i){let t=w.parse(i);return(e,n,o,l)=>{let{text:f,ranges:p}=t.instantiate(e.state,o),s={changes:{from:o,to:l,insert:T.of(f)},scrollIntoView:!0,annotations:n?[H.of(n),O.userEvent.of("input.complete")]:void 0};if(p.length&&(s.selection=I(p,0)),p.some(c=>c.field>0)){let c=new m(p,0),a=s.effects=[u.of(c)];e.state.field(d,!1)===void 0&&a.push(g.appendConfig.of([d,Z,_,V]))}e.dispatch(e.state.update(s))}}function $(i){return({state:t,dispatch:e})=>{let n=t.field(d,!1);if(!n||i<0&&n.active==0)return!1;let o=n.active+i,l=i>0&&!n.ranges.some(f=>f.field==o+i);return e(t.update({selection:I(n.ranges,o),effects:u.of(l?null:new m(n.ranges,o)),scrollIntoView:!0})),!0}}const J=({state:i,dispatch:t})=>i.field(d,!1)?(t(i.update({effects:u.of(null)})),!0):!1,U=$(1),Y=$(-1),Q=[{key:"Tab",run:U,shift:Y},{key:"Escape",run:J}],F=R.define({combine(i){return i.length?i[0]:Q}}),Z=L.highest(A.compute([F],i=>i.facet(F)));function oe(i,t){return Object.assign(Object.assign({},t),{apply:G(i)})}const _=x.domEventHandlers({mousedown(i,t){let e=t.state.field(d,!1),n;if(!e||(n=t.posAtCoords({x:i.clientX,y:i.clientY}))==null)return!1;let o=e.ranges.find(l=>l.from<=n&&l.to>=n);return!o||o.field==e.active?!1:(t.dispatch({selection:I(e.ranges,o.field),effects:u.of(e.ranges.some(l=>l.field>o.field)?new m(e.ranges,o.field):null),scrollIntoView:!0}),!0)}}),C=new class extends D{};C.startSide=1;C.endSide=-1;export{te as C,ne as c,ie as i,oe as s};
