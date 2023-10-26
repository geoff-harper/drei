"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@babel/runtime/helpers/extends"),t=require("react"),r=require("@react-three/fiber"),n=require("three-stdlib"),u=require("./useFont.cjs.js");function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function c(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}require("suspend-react");var i=s(e),l=c(t);const o=["string","number"],a=l.forwardRef((({font:e,letterSpacing:s=0,lineHeight:c=1,size:a=1,height:f=.2,bevelThickness:m=.1,bevelSize:b=.01,bevelEnabled:d=!1,bevelOffset:g=0,bevelSegments:h=4,curveSegments:v=8,smooth:p,children:y,...j},x)=>{l.useMemo((()=>r.extend({RenamedTextGeometry:n.TextGeometry})),[]);const O=l.useRef(null),S=u.useFont(e),E=t.useMemo((()=>({font:S,size:a,height:f,bevelThickness:m,bevelSize:b,bevelEnabled:d,bevelSegments:h,bevelOffset:g,curveSegments:v,letterSpacing:s,lineHeight:c})),[S,a,f,m,b,d,h,g,v,s,c]),[q,...M]=t.useMemo((()=>(e=>{let t="";const r=[];return l.Children.forEach(e,(e=>{o.includes(typeof e)?t+=e+"":r.push(e)})),[t,...r]})(y)),[y]),T=l.useMemo((()=>[q,E]),[q,E]);return l.useLayoutEffect((()=>{p&&(O.current.geometry=n.mergeVertices(O.current.geometry,p),O.current.geometry.computeVertexNormals())}),[T,p]),l.useImperativeHandle(x,(()=>O.current),[]),l.createElement("mesh",i.default({},j,{ref:O}),l.createElement("renamedTextGeometry",{args:T}),M)}));exports.Text3D=a;
