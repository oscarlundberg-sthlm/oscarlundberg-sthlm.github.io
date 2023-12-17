(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(4787)}])},4787:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return Home}});var o,r,i=s(5893),n=s(1948),a=s.n(n),l=s(9522),c=s.n(l),d=s(4184),p=s.n(d),m=s(7294),components_Arrow=function(e){let{className:t}=e;return(0,i.jsx)("svg",{width:"47",height:"47",viewBox:"0 0 47 47",fill:"currentColor",className:"h-[1em] w-auto "+t,xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M23.5 0L46.4497 46.5H0.550327L23.5 0Z"})})};function Item(e){let{_key:t,text:s,setControlsUsed:o}=e,[r,n]=(0,m.useState)(!1),a=(0,m.useMemo)(()=>({forward:{keyCode:"ArrowUp",component:()=>(0,i.jsx)(components_Arrow,{})},right:{keyCode:"ArrowRight",component:()=>(0,i.jsx)(components_Arrow,{className:"rotate-90"})},back:{keyCode:"ArrowDown",component:()=>(0,i.jsx)(components_Arrow,{className:"rotate-180"})},left:{keyCode:"ArrowLeft",component:()=>(0,i.jsx)(components_Arrow,{className:"-rotate-90"})}}),[]);return((0,m.useEffect)(()=>{if(t)return window.addEventListener("keydown",keydownHandler),window.addEventListener("keyup",keyupHandler),()=>{window.removeEventListener("keydown",keydownHandler),window.removeEventListener("keyup",keyupHandler)};function keydownHandler(e){e.code===a[t].keyCode&&(n(!0),o(!0))}function keyupHandler(e){e.code===a[t].keyCode&&n(!1)}},[t,a,o,n]),t&&s)?(0,i.jsx)("div",{className:p()("flex items-center justify-center border px-1 pb-0.5 pt-1",{"text-primary-100":r}),children:(0,i.jsxs)("div",{className:"pointer-events-none",children:[(0,i.jsx)("div",{className:"text-[7px] flex justify-center pt-0.5",children:a[t].component()}),(0,i.jsx)("div",{className:"text-[9px] flex justify-center pt-px text-white",children:s})]})}):(0,i.jsx)(i.Fragment,{})}var components_ControlsInfo=function(){let[e,t]=(0,m.useState)(!1),[s,o]=(0,m.useState)(!0);return(0,m.useEffect)(()=>{e&&setTimeout(()=>{o(!1)},5e3)},[e,o]),(0,i.jsx)("div",{className:p()("flex text-primary transition-opacity duration-[2000ms]",{"opacity-0":!s}),children:(0,i.jsxs)("div",{className:"grid grid-cols-3 max-w-xs gap-1",children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{children:(0,i.jsx)(Item,{_key:"forward",text:"DRIVE",setControlsUsed:()=>t(!0)})}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{children:(0,i.jsx)(Item,{_key:"left",text:"LEFT",setControlsUsed:()=>t(!0)})}),(0,i.jsx)("div",{children:(0,i.jsx)(Item,{_key:"back",text:"REVERSE",setControlsUsed:()=>t(!0)})}),(0,i.jsx)("div",{children:(0,i.jsx)(Item,{_key:"right",text:"RIGHT",setControlsUsed:()=>t(!0)})})]})})},h=s(7005),components_Marquee=e=>{let{children:t,className:s}=e;return(0,i.jsx)("div",{className:s,children:(0,i.jsx)(h.Z,{autoFill:!0,loop:0,speed:20,children:t})})};function rotate(e){return e*Math.PI/180}var x=s(2324),u=s(9594),g=s(5029),f=s(1133),j=s(3840);function Lamppost(e){var t,s,o;let r=[null==e?void 0:null===(t=e.position)||void 0===t?void 0:t[0],(null==e?void 0:null===(s=e.position)||void 0===s?void 0:s[1])+3.375,null==e?void 0:null===(o=e.position)||void 0===o?void 0:o[2]],{nodes:n,materials:a}=(0,j.L)("/threeDModels/lamppost.glb"),[l]=(0,f.Yz)(()=>({args:[.6,.3,6.3],mass:1e3,...e,position:r}));return(0,i.jsx)("group",{ref:l,...e,dispose:null,children:(0,i.jsxs)("group",{position:[0,.2,0],children:[(0,i.jsx)("pointLight",{intensity:1e3,decay:1.8,position:[0,2.7,0],color:"#f8fff1"}),(0,i.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:n.Cylinder_1.geometry,material:a["Material.001"]}),(0,i.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:n.Cylinder_2.geometry,material:a["Material.002"]})]})})}j.L.preload("/threeDModels/lamppost.glb");var y=s(5769);function OscarStatuett(e){let{nodes:t,materials:s}=(0,j.L)("/threeDModels/oscar_statuett.glb"),[o]=(0,f.Yz)(()=>({args:[31.5,31.5,10,12],type:"Static",...e})),r=(0,y.m)("/images/sunny.jpg");return r.flipY=!1,(0,i.jsx)("group",{ref:o,...e,dispose:null,children:(0,i.jsxs)("group",{position:[0,-4.8,0],children:[(0,i.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.man.geometry,material:s.gold}),(0,i.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.Plane.geometry,material:s.photo,children:(0,i.jsx)("meshBasicMaterial",{map:r})}),(0,i.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.Cylinder.geometry,material:s.gold}),(0,i.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.Cylinder_1.geometry,material:s.black})]})})}function OscarText(e){let{nodes:t,materials:s}=(0,j.L)("/threeDModels/oscar_text.glb");return(0,i.jsx)("group",{...e,dispose:null,children:(0,i.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.OSCAR.geometry,material:s["Material.006"],position:[23.715,.005,.778],rotation:[Math.PI/2,0,-3.14],scale:1.759})})}j.L.preload("/threeDModels/oscar_statuett.glb"),j.L.preload("/threeDModels/oscar_text.glb");var w=s(9477),components_Plane=e=>{let[t]=(0,f.xK)(()=>({type:"Static",material:"ground",friction:.001,rotation:[-Math.PI/2,0,0],...e})),s=(0,y.m)("/maps/sketchpattern.png");return s.repeat=new w.Vector2(100,100),s.flipY=!1,s.wrapS=w.RepeatWrapping,s.wrapT=w.RepeatWrapping,(0,i.jsx)("group",{ref:t,children:(0,i.jsxs)("mesh",{receiveShadow:!0,...e,children:[(0,i.jsx)("planeGeometry",{args:[2e3,2e3]}),(0,i.jsx)("meshPhongMaterial",{map:s,shininess:1})]})})},v=s(2021),b=s(2658),k=s(9646);j.L.preload("threeDModels/pickup/carbody.glb");let S=(0,m.forwardRef)((e,t)=>{let{args:s=[1.7,.4,4],mass:o=500,setVisible:r,...n}=e,{nodes:a,materials:l}=(0,j.L)("threeDModels/pickup/carbody.glb"),[,c]=(0,f.EJ)(()=>({mass:o,args:s,allowSleep:!1,...n}),t),d=(0,m.useMemo)(()=>new w.SpotLight("#f8fff1"),[]),p=(0,m.useMemo)(()=>new w.SpotLight("#ff2025"),[]);return(0,i.jsx)("mesh",{ref:t,api:c,userData:{id:"truckbody"},...n,children:(0,i.jsxs)("mesh",{children:[(0,i.jsxs)("group",{children:[(0,i.jsx)("mesh",{position:[0,.1,2],children:(0,i.jsx)("primitive",{object:d,intensity:500,decay:1,penumbra:.2,position:[0,.022,.239]})}),(0,i.jsx)("primitive",{object:d.target,position:[0,0,10]})]}),(0,i.jsxs)("group",{children:[(0,i.jsx)("mesh",{position:[0,0,-1.6],children:(0,i.jsx)("primitive",{object:p,intensity:50,decay:1,penumbra:.2,position:[0,.026,.043],rotation:[-Math.PI/2,-Math.PI/2,0]})}),(0,i.jsx)("primitive",{object:p.target,position:[0,0,-10]})]}),(0,i.jsx)("pointLight",{color:"#ff2025",intensity:1,decay:2,position:[-1,-.65,-3]}),(0,i.jsx)("pointLight",{color:"#ff2025",intensity:1,decay:2,position:[1,-.65,-3]}),(0,i.jsx)("mesh",{children:(0,i.jsxs)("group",{dispose:null,children:[(0,i.jsx)("mesh",{rotation:[0,rotate(-180),0],children:(0,i.jsx)(k.c,{makeDefault:!0,near:.1,far:1e3,fov:80,position:[0,2,8],rotation:[rotate(5),0,0]})}),(0,i.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:a.Cylinder011.geometry,material:l["body color"]}),(0,i.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:a.Cylinder011_1.geometry,material:l.windows})]})})]})})});S.displayName="TruckBody",j.L.preload("threeDModels/pickup/carwheel.glb");let C=(0,m.forwardRef)((e,t)=>{let{radius:s=1,leftSide:o,...r}=e,{nodes:n,materials:a}=(0,j.L)("threeDModels/pickup/carwheel.glb");return(0,f.Yz)(()=>({mass:10,type:"Kinematic",material:"wheel",collisionFilterGroup:0,args:[s,s,.5,16],...r}),t),(0,i.jsx)("mesh",{ref:t,children:(0,i.jsx)("mesh",{rotation:[0,0,(o?1:-1)*Math.PI/2],children:(0,i.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:n.Torus006.geometry,material:a["Material.001"]})})})});function Vehicle(e){let{radius:t=.55,width:s=1.33,height:o=-.5,front:r=1.45,back:n=-1.35,steer:a=.6,force:l=1e3,maxBrake:c=40,position:d=[0,0,0],...p}=e,h=(0,m.useRef)(),x=(0,m.useRef)(),u=(0,m.useRef)(),g=(0,m.useRef)(),j=(0,m.useRef)(),[y,w]=(0,v.Z)(),k={radius:t,directionLocal:[0,-1,0],suspensionStiffness:30,suspensionRestLength:.3,maxSuspensionForce:1e4,maxSuspensionTravel:.3,dampingRelaxation:10,dampingCompression:4.4,axleLocal:[-1,0,0],chassisConnectionPointLocal:[1,0,1],useCustomSlidingRotationalSpeed:!0,customSlidingRotationalSpeed:-10,frictionSlip:2},L={...k,isFrontWheel:!0,chassisConnectionPointLocal:[-s/1.5,o,r]},_={...k,isFrontWheel:!0,chassisConnectionPointLocal:[s/1.5,o,r]},M={...k,isFrontWheel:!1,chassisConnectionPointLocal:[-s/1.5,o,n]},N={...k,isFrontWheel:!1,chassisConnectionPointLocal:[s/1.5,o,n]},[R,E]=(0,f.b6)(()=>({chassisBody:h,wheels:[x,u,g,j],wheelInfos:[L,_,M,N],indexForwardAxis:2,indexRightAxis:0,indexUpAxis:1})),A=(0,m.useRef)([0,0,0]);(0,m.useEffect)(()=>{var e;null==h||null===(e=h.current)||void 0===e||e.api.position.subscribe(e=>A.current=e)},[E]);let resetCar=()=>{(null==h?void 0:h.current)&&(h.current.api.position.set(0,2,-40),h.current.api.velocity.set(0,0,0),h.current.api.rotation.set(0,0,0))};return(0,b.C)(()=>{let{forward:e,back:t,left:s,right:o,brake:r,respawn:i}=w(),n=e&&!t?-1:1,d=s&&!o?1:-1;for(let e=0;e<2;e++)s||o?E.setSteeringValue(a*d,e):E.setSteeringValue(0,e);for(let s=2;s<4;s++){e||t?E.applyEngineForce(l*n,s):E.applyEngineForce(0,s);let o=r?c:0;E.setBrake(o,s)}if(i){resetCar();return}}),(0,i.jsxs)("group",{ref:R,position:[0,0,0],name:"vehicle",children:[(0,i.jsx)(S,{ref:h,position:d,angularVelocity:p.angularVelocity}),(0,i.jsx)(C,{ref:x,radius:t,leftSide:!0}),(0,i.jsx)(C,{ref:u,radius:t}),(0,i.jsx)(C,{ref:g,radius:t,leftSide:!0}),(0,i.jsx)(C,{ref:j,radius:t})]})}C.displayName="Wheel";var components_ThreeDEnvironment=()=>(0,i.jsxs)(g.Xz,{shadows:!0,camera:{fov:90,near:.1,far:5e4,position:[-15,10,15],rotation:[0,rotate(-50),0]},children:[(0,i.jsx)("ambientLight",{intensity:4}),(0,i.jsxs)(f.wI,{broadphase:"SAP",allowSleep:!0,children:[(0,i.jsx)(components_Plane,{position:[0,0,0]}),(0,i.jsx)(OscarText,{position:[0,15,30]}),(0,i.jsx)(OscarStatuett,{position:[0,5,160],rotation:[0,rotate(90),0]}),[void 0,void 0,void 0,void 0,void 0].map((e,t)=>{let s=-10+25*t;return(0,i.jsx)(Lamppost,{position:[55,0,s]},"lamppostsLeftLane_"+s)}),[void 0,void 0,void 0,void 0,void 0].map((e,t)=>{let s=-10+25*t;return(0,i.jsx)(Lamppost,{position:[-55,0,s]},"lamppostsRightLane_"+s)}),(0,i.jsx)(Vehicle,{position:[0,2,-40],wheelRadius:2})]}),(0,i.jsx)(x.j,{scale:20,blur:.4,opacity:.2,position:[-0,-1.5,0]}),(0,i.jsx)(u.qA,{preset:"night",background:!0,blur:.2})]});(o=r||(r={})).forward="forward",o.back="back",o.left="left",o.right="right",o.brake="brake",o.respawn="respawn";var L=s(8065);function Home(){let e=(0,m.useMemo)(()=>[{name:r.forward,keys:["ArrowUp","KeyW"]},{name:r.back,keys:["ArrowDown","KeyS"]},{name:r.left,keys:["ArrowLeft","KeyA"]},{name:r.right,keys:["ArrowRight","KeyD"]},{name:r.brake,keys:["Space"]},{name:r.respawn,keys:["KeyR"]}],[]);return(0,i.jsx)(v.c,{map:e,children:(0,i.jsxs)("main",{className:"h-screen relative ".concat(a().variable," ").concat(c().variable," font-sans"),children:[(0,i.jsx)(m.Suspense,{fallback:(0,i.jsx)(L.default,{}),children:(0,i.jsx)(components_ThreeDEnvironment,{})}),(0,i.jsx)(components_Marquee,{className:"absolute top-0 inset-x-0 bg-black",children:["React","Laravel","Alpine.js","Next.js","Design","Tailwind","Laravel Forge","Vercel","Livewire","Javascript","PHP","Typescript","Sanity CMS","Statamic CMS","Git","Integrations","Wordpress"].map((e,t,s)=>(0,i.jsxs)("div",{className:"flex items-center bg-black h-7 font-sans-tight",children:[(0,i.jsx)("span",{className:"text-primary font-light text-sm tracking-wider",children:e}),(0,i.jsx)("span",{className:"text-primary text-xs px-6 opacity-40",children:"•"})]},"skillsList"+e+t))}),(0,i.jsxs)("div",{className:"absolute mx-4 bottom-4 max-w-[510px] border border-primary p-4 bg-black",children:[(0,i.jsxs)("div",{className:"font-sans-tight font-bold text-2xl lg:text-4xl mb-6 leading-none lg:leading-none text-primary uppercase",children:["Hello, ",(0,i.jsx)("span",{children:"I'm Oscar"}),".",(0,i.jsx)("br",{}),"Frontend developer &",(0,i.jsx)("br",{}),"all around creative person"]}),(0,i.jsxs)("div",{className:"text-primary-100 leading-tight text-sm lg:text-base",children:["Reach me at ",(0,i.jsx)("a",{href:"mailto:oscarlundberg@hotmail.com",className:"transition-colors hover:text-primary py-3 -my-3",children:"oscarlundberg@hotmail.com"})]})]}),(0,i.jsx)("div",{className:"hidden lg:block absolute right-4 bottom-4",children:(0,i.jsx)(components_ControlsInfo,{})})]})})}},8065:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return loading}});var o=s(5893),components_LoadingSpinner=()=>(0,o.jsxs)("svg",{width:"36px",height:"36px",viewBox:"0 0 24 24",fill:"currentColor",className:"animate-spin",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)("path",{opacity:"0.2",fillRule:"evenodd",clipRule:"evenodd",d:"M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"}),(0,o.jsx)("path",{d:"M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"})]}),loading=()=>(0,o.jsx)("div",{className:"absolute inset-0 flex items-center justify-center bg-black",children:(0,o.jsx)("div",{className:"text-primary",children:(0,o.jsx)(components_LoadingSpinner,{})})})}},function(e){e.O(0,[737,623,187,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);