(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(1891)}])},1891:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return Home}});var r,i,a=s(5893),o=s(1948),n=s.n(o),l=s(9522),c=s.n(l),p=s(7005),components_Marquee=e=>{let{children:t,className:s}=e;return(0,a.jsx)("div",{className:s,children:(0,a.jsx)(p.Z,{autoFill:!0,loop:0,speed:20,children:t})})};function rotate(e){return e*Math.PI/180}var d=s(2324),h=s(9594),m=s(5029),u=s(1133),x=s(3840);function Lamppost(e){let{nodes:t,materials:s}=(0,x.L)("/threeDModels/lamppost.glb");return(0,a.jsx)("group",{...e,dispose:null,children:(0,a.jsxs)("group",{position:[0,3.375,0],children:[(0,a.jsx)("pointLight",{intensity:1e3,decay:1.8,position:[0,2.7,0],color:"#f8fff1"}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.Cylinder_1.geometry,material:s["Material.001"]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.Cylinder_2.geometry,material:s["Material.002"]})]})})}x.L.preload("/threeDModels/lamppost.glb");var g=s(5769);function OscarStatuett(e){let{nodes:t,materials:s}=(0,x.L)("/threeDModels/oscar_statuett.glb"),r=(0,g.m)("/images/sunny.jpg");return r.flipY=!1,(0,a.jsxs)("group",{...e,dispose:null,children:[(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.man.geometry,material:s.gold}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.Plane.geometry,material:s.photo,children:(0,a.jsx)("meshBasicMaterial",{map:r})}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.Cylinder.geometry,material:s.gold}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.Cylinder_1.geometry,material:s.black})]})}function OscarText(e){let{nodes:t,materials:s}=(0,x.L)("/threeDModels/oscar_text.glb");return(0,a.jsx)("group",{...e,dispose:null,children:(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.OSCAR.geometry,material:s["Material.006"],position:[23.715,.005,.778],rotation:[Math.PI/2,0,-3.14],scale:1.759})})}x.L.preload("/threeDModels/oscar_statuett.glb"),x.L.preload("/threeDModels/oscar_text.glb");var f=s(9477),components_Plane=e=>{let[t]=(0,u.xK)(()=>({type:"Static",material:"ground",friction:.001,rotation:[-Math.PI/2,0,0],...e})),s=(0,g.m)("/maps/sketchpattern.png");return s.repeat=new f.Vector2(100,100),s.flipY=!1,s.wrapS=f.RepeatWrapping,s.wrapT=f.RepeatWrapping,(0,a.jsx)("group",{ref:t,children:(0,a.jsxs)("mesh",{receiveShadow:!0,...e,children:[(0,a.jsx)("planeGeometry",{args:[2e3,2e3]}),(0,a.jsx)("meshPhongMaterial",{map:s,shininess:1})]})})},j=s(2021),y=s(2658),w=s(7294),v=s(9646);x.L.preload("threeDModels/pickup/carbody.glb");let b=(0,w.forwardRef)((e,t)=>{let{args:s=[1.7,.4,4],mass:r=500,setVisible:i,...o}=e,{nodes:n,materials:l}=(0,x.L)("threeDModels/pickup/carbody.glb"),[,c]=(0,u.EJ)(()=>({mass:r,args:s,allowSleep:!1,...o}),t),p=(0,w.useMemo)(()=>new f.SpotLight("#f8fff1"),[]),d=(0,w.useMemo)(()=>new f.SpotLight("#ff2025"),[]);return(0,a.jsx)("mesh",{ref:t,api:c,userData:{id:"truckbody"},...o,children:(0,a.jsxs)("mesh",{children:[(0,a.jsxs)("group",{children:[(0,a.jsx)("mesh",{position:[0,.1,2],children:(0,a.jsx)("primitive",{object:p,intensity:500,decay:1,penumbra:.2,position:[0,.022,.239]})}),(0,a.jsx)("primitive",{object:p.target,position:[0,0,10]})]}),(0,a.jsxs)("group",{children:[(0,a.jsx)("mesh",{position:[0,0,-1.6],children:(0,a.jsx)("primitive",{object:d,intensity:50,decay:1,penumbra:.2,position:[0,.026,.043],rotation:[-Math.PI/2,-Math.PI/2,0]})}),(0,a.jsx)("primitive",{object:d.target,position:[0,0,-10]})]}),(0,a.jsx)("pointLight",{color:"#ff2025",intensity:1,decay:2,position:[-1,-.65,-3]}),(0,a.jsx)("pointLight",{color:"#ff2025",intensity:1,decay:2,position:[1,-.65,-3]}),(0,a.jsx)("mesh",{children:(0,a.jsxs)("group",{dispose:null,children:[(0,a.jsx)("mesh",{rotation:[0,rotate(-180),0],children:(0,a.jsx)(v.c,{makeDefault:!0,near:.1,far:1e3,fov:80,position:[0,2,8],rotation:[rotate(5),0,0]})}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:n.Cylinder011.geometry,material:l["body color"]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:n.Cylinder011_1.geometry,material:l.windows})]})})]})})});b.displayName="TruckBody",x.L.preload("threeDModels/pickup/carwheel.glb");let S=(0,w.forwardRef)((e,t)=>{let{radius:s=1,leftSide:r,...i}=e,{nodes:o,materials:n}=(0,x.L)("threeDModels/pickup/carwheel.glb");return(0,u.Yz)(()=>({mass:10,type:"Kinematic",material:"wheel",collisionFilterGroup:0,args:[s,s,.5,16],...i}),t),(0,a.jsx)("mesh",{ref:t,children:(0,a.jsx)("mesh",{rotation:[0,0,(r?1:-1)*Math.PI/2],children:(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Torus006.geometry,material:n["Material.001"]})})})});function Vehicle(e){let{radius:t=.55,width:s=1.33,height:r=-.5,front:i=1.45,back:o=-1.35,steer:n=.6,force:l=1e3,maxBrake:c=40,position:p=[0,0,0],...d}=e,h=(0,w.useRef)(),m=(0,w.useRef)(),x=(0,w.useRef)(),g=(0,w.useRef)(),f=(0,w.useRef)(),[v,L]=(0,j.Z)(),k={radius:t,directionLocal:[0,-1,0],suspensionStiffness:30,suspensionRestLength:.3,maxSuspensionForce:1e4,maxSuspensionTravel:.3,dampingRelaxation:10,dampingCompression:4.4,axleLocal:[-1,0,0],chassisConnectionPointLocal:[1,0,1],useCustomSlidingRotationalSpeed:!0,customSlidingRotationalSpeed:-10,frictionSlip:2},C={...k,isFrontWheel:!0,chassisConnectionPointLocal:[-s/1.5,r,i]},M={...k,isFrontWheel:!0,chassisConnectionPointLocal:[s/1.5,r,i]},_={...k,isFrontWheel:!1,chassisConnectionPointLocal:[-s/1.5,r,o]},R={...k,isFrontWheel:!1,chassisConnectionPointLocal:[s/1.5,r,o]},[N,P]=(0,u.b6)(()=>({chassisBody:h,wheels:[m,x,g,f],wheelInfos:[C,M,_,R],indexForwardAxis:2,indexRightAxis:0,indexUpAxis:1})),D=(0,w.useRef)([0,0,0]);(0,w.useEffect)(()=>{var e;null==h||null===(e=h.current)||void 0===e||e.api.position.subscribe(e=>D.current=e)},[P]);let resetCar=()=>{(null==h?void 0:h.current)&&(h.current.api.position.set(0,2,-40),h.current.api.velocity.set(0,0,0),h.current.api.rotation.set(0,0,0))};return(0,y.C)(()=>{let{forward:e,back:t,left:s,right:r,brake:i,respawn:a}=L(),o=e&&!t?-1:1,p=s&&!r?1:-1;for(let e=0;e<2;e++)s||r?P.setSteeringValue(n*p,e):P.setSteeringValue(0,e);for(let s=2;s<4;s++){e||t?P.applyEngineForce(l*o,s):P.applyEngineForce(0,s);let r=i?c:0;P.setBrake(r,s)}if(a){resetCar();return}}),(0,a.jsxs)("group",{ref:N,position:[0,0,0],name:"vehicle",children:[(0,a.jsx)(b,{ref:h,position:p,angularVelocity:d.angularVelocity}),(0,a.jsx)(S,{ref:m,radius:t,leftSide:!0}),(0,a.jsx)(S,{ref:x,radius:t}),(0,a.jsx)(S,{ref:g,radius:t,leftSide:!0}),(0,a.jsx)(S,{ref:f,radius:t})]})}S.displayName="Wheel";var components_ThreeDEnvironment=()=>(0,a.jsxs)(m.Xz,{shadows:!0,camera:{fov:90,near:.1,far:5e4,position:[-15,10,15],rotation:[0,rotate(-50),0]},children:[(0,a.jsx)("ambientLight",{intensity:4}),(0,a.jsxs)(u.wI,{broadphase:"SAP",allowSleep:!0,children:[(0,a.jsx)(components_Plane,{position:[0,0,0]}),(0,a.jsx)(OscarText,{position:[0,15,30]}),(0,a.jsx)(OscarStatuett,{position:[0,0,160],rotation:[0,rotate(90),0]}),[void 0,void 0,void 0,void 0,void 0].map((e,t)=>{let s=-10+25*t;return(0,a.jsx)(Lamppost,{position:[55,0,s]},"lamppostsLeftLane_"+s)}),[void 0,void 0,void 0,void 0,void 0].map((e,t)=>{let s=-10+25*t;return(0,a.jsx)(Lamppost,{position:[-55,0,s]},"lamppostsRightLane_"+s)}),(0,a.jsx)(Vehicle,{position:[0,2,-40],wheelRadius:2})]}),(0,a.jsx)(d.j,{scale:20,blur:.4,opacity:.2,position:[-0,-1.5,0]}),(0,a.jsx)(h.qA,{preset:"night",background:!0,blur:.2})]});(r=i||(i={})).forward="forward",r.back="back",r.left="left",r.right="right",r.brake="brake",r.respawn="respawn";var L=s(8065);function Home(){let e=(0,w.useMemo)(()=>[{name:i.forward,keys:["ArrowUp","KeyW"]},{name:i.back,keys:["ArrowDown","KeyS"]},{name:i.left,keys:["ArrowLeft","KeyA"]},{name:i.right,keys:["ArrowRight","KeyD"]},{name:i.brake,keys:["Space"]},{name:i.respawn,keys:["KeyR"]}],[]);return(0,a.jsx)(j.c,{map:e,children:(0,a.jsxs)("main",{className:"h-screen relative ".concat(n().variable," ").concat(c().variable," font-sans"),children:[(0,a.jsx)(w.Suspense,{fallback:(0,a.jsx)(L.default,{}),children:(0,a.jsx)(components_ThreeDEnvironment,{})}),(0,a.jsx)(components_Marquee,{className:"absolute top-0 inset-x-0 bg-black",children:["React","Laravel","Alpine.js","Next.js","Design","Tailwind","Laravel Forge","Vercel","Livewire","Javascript","PHP","Typescript","Sanity CMS","Statamic CMS","Git","Integrations","Wordpress"].map((e,t,s)=>(0,a.jsxs)("div",{className:"flex items-center bg-black h-7 font-sans-tight",children:[(0,a.jsx)("span",{className:"text-primary font-light text-sm tracking-wider",children:e}),(0,a.jsx)("span",{className:"text-primary text-xs px-6 opacity-40",children:"•"})]},"skillsList"+e+t))}),(0,a.jsxs)("div",{className:"absolute mx-4 bottom-4 max-w-[510px] border border-primary p-4 bg-black",children:[(0,a.jsxs)("div",{className:"font-sans-tight font-bold text-2xl sm:text-4xl mb-6 leading-none text-primary uppercase",children:["Hello, ",(0,a.jsx)("span",{children:"I'm Oscar"}),".",(0,a.jsx)("br",{}),"Frontend developer &",(0,a.jsx)("br",{}),"all around creative person"]}),(0,a.jsxs)("div",{className:"text-primary-100 leading-tight text-sm sm:text-base",children:["Reach me at ",(0,a.jsx)("a",{href:"mailto:oscarlundberg@hotmail.com",className:"transition-colors hover:text-primary py-3 -my-3",children:"oscarlundberg@hotmail.com"})]})]})]})})}},8065:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return loading}});var r=s(5893),components_LoadingSpinner=()=>(0,r.jsxs)("svg",{width:"36px",height:"36px",viewBox:"0 0 24 24",fill:"currentColor",className:"animate-spin",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{opacity:"0.2",fillRule:"evenodd",clipRule:"evenodd",d:"M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"}),(0,r.jsx)("path",{d:"M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"})]}),loading=()=>(0,r.jsx)("div",{className:"absolute inset-0 flex items-center justify-center bg-black",children:(0,r.jsx)("div",{className:"text-primary",children:(0,r.jsx)(components_LoadingSpinner,{})})})}},function(e){e.O(0,[737,623,128,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);