"use strict";(self.webpackChunkf_3_d_app=self.webpackChunkf_3_d_app||[]).push([[505],{7748:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var i=n(4848),t=n(8453);const r={sidebar_position:2},c="Gallery",d={id:"GALLERY",title:"Gallery",description:"Examples renderings with their associated command lines.",source:"@site/docs/GALLERY.md",sourceDirName:".",slug:"/GALLERY",permalink:"/docs/GALLERY",draft:!1,unlisted:!1,editUrl:"https://github.com/f3d-app/f3d/tree/main/www/docs/GALLERY.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Home",permalink:"/docs/HOME"},next:{title:"User Documentation",permalink:"/docs/category/user-documentation"}},a={},o=[{value:"Acknowledgments",id:"acknowledgments",level:2}];function l(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"gallery",children:"Gallery"}),"\n",(0,i.jsxs)(s.p,{children:["Examples renderings with their associated command lines.\nImages and videos displayed below use public datasets, you can download them ",(0,i.jsx)(s.a,{href:"https://drive.google.com/file/d/1iRh0OeJjMjjaBDLG6b_iJSkC_Jt_YQuo/view?usp=sharing",children:"here"}),"."]}),"\n",(0,i.jsx)("video",{src:"https://user-images.githubusercontent.com/3129530/194735274-395839e9-e2cb-4a47-83b9-5c6987640032.webm",autoplay:"autoplay",loop:"loop",width:"700"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"Animated realistic rendering"}),": ",(0,i.jsx)(s.code,{children:"f3d gearbox/scene.gltf --hdri-file=future_parking_2k.hdr --hdri-skybox --hdri-ambient -uqxtgas"})]}),"\n",(0,i.jsx)("video",{src:"https://user-images.githubusercontent.com/3129530/194734947-f34bc377-8ee4-472a-b130-30ce9e86facf.webm",autoplay:"autoplay",loop:"loop",width:"700"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"Animated, skinned and morphed rendering"}),": ",(0,i.jsx)(s.code,{children:"f3d dota/scene.gltf --hdri-skybox --hdri-ambient --hdri-file=future_parking_2k.hdr -uqxtgas"})]}),"\n",(0,i.jsx)("video",{src:"https://user-images.githubusercontent.com/3129530/194735269-b62216e6-33da-484c-9f0d-39befc8253bf.webm",autoplay:"autoplay",loop:"loop",width:"700"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"Animated scientific visualization rendering"}),": ",(0,i.jsx)(s.code,{children:"f3d can.ex2 -xtgans --up=+Z --scalars=VEL"})]}),"\n",(0,i.jsx)("video",{src:"https://media.githubusercontent.com/media/f3d-app/f3d-media/main/media/counter.webm",autoplay:"autoplay",loop:"loop",width:"700"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"3D Gaussians Splatting"}),": ",(0,i.jsx)(s.code,{children:"f3d counter.splat --point-size=1 --point-type=gaussian -soynxz --up=-Y --camera-position=0,1,-5.2 --camera-focal-point=0,1,0"})]}),"\n",(0,i.jsx)("img",{src:"https://user-images.githubusercontent.com/3129530/194735272-5bcd3e7c-a333-41f5-8066-9b0bec9885e8.png",width:"700"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"Direct scalars rendering of a point cloud"}),": ",(0,i.jsx)(s.code,{children:"f3d Carola_PointCloud.ply --point-size=0 --comp=-2 -so --up=+Z --hdri-skybox --hdri-ambient --hdri-file=venice_sunset_8k.hdr"})]}),"\n",(0,i.jsx)("img",{src:"https://user-images.githubusercontent.com/3129530/194735378-b8be4df2-e030-4d13-b12f-24806cbb385b.png",width:"700"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"Raytraced CAD assembly"}),": ",(0,i.jsx)(s.code,{children:"f3d 202.vtp -xtgans -rd --samples=10 --range=-2,9"})]}),"\n",(0,i.jsx)("img",{src:"https://user-images.githubusercontent.com/3129530/194735377-127fa5d8-ece5-40c7-8176-672279ebdacc.png",width:"700"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"Volume rendering of a security bag scan"}),": ",(0,i.jsx)(s.code,{children:"f3d backpack.vti -vmn --range=300,1000 --colormap=0,0,0,0,1,1,1,1"})]}),"\n",(0,i.jsx)("img",{src:"https://user-images.githubusercontent.com/3129530/194735376-3a476643-00d6-4cfc-9a88-e0dd33658564.png",width:"700"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"Realistic rendering #1"}),": ",(0,i.jsx)(s.code,{children:"f3d DamagedHelmet.glb --hdri-skybox --hdri-ambient --hdri-file=lebombo_4k.hdr -tuqap"})]}),"\n",(0,i.jsx)("img",{src:"https://user-images.githubusercontent.com/3129530/194735416-3f386437-456c-4145-9b5e-6bb6451d7e9a.png",width:"700"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"Showcase of interactive widgets"}),": ",(0,i.jsx)(s.code,{children:"f3d dragon.vtu -xtganse --comp=0"})]}),"\n",(0,i.jsx)("img",{src:"https://user-images.githubusercontent.com/3129530/194735370-4d1f067c-704c-4118-9d94-c1adf4039c39.png",width:"700"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"Metallic Rendering of a STEP file"}),": ",(0,i.jsx)(s.code,{children:"f3d eta_asm.stp \u2013hdri=future_parking_2k.hdr -uqxtga \u2013up=+Z \u2013metallic=1 \u2013roughness=0.6 \u2013color=0.98,0.90,0.59"})]}),"\n",(0,i.jsx)("img",{src:"https://user-images.githubusercontent.com/3129530/194735366-e79a8d45-8b76-4a65-9445-4a0ca1b63876.png",width:"700"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"Rendering of a FBX file"}),": ",(0,i.jsx)(s.code,{children:"f3d zeldaPosed001.fbx \u2013hdri=hikers_cave_2k.hdr -uqxtga"})]}),"\n",(0,i.jsx)("img",{src:"https://user-images.githubusercontent.com/3129530/194735363-d2be23bb-90b6-4e90-941d-14b6dc24b476.png",width:"700"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"Realistic rendering #2"}),": ",(0,i.jsx)(s.code,{children:"f3d FlightHelmet.glb --hdri-skybox --hdri-ambient --hdri-file=lebombo_4k.hdr -tuqap"})]}),"\n",(0,i.jsx)("img",{src:"https://user-images.githubusercontent.com/3129530/194735361-7e827d8e-531a-4938-b608-18825a9574f8.png",width:"700"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"Visualization of a CFD velocity field"}),": ",(0,i.jsx)(s.code,{children:"f3d single-pin.vtp -xtbgans --range=-2,8 --colormap=0,0.3,0.7,0,0.7,0,0.1,1,1,0.8,0.8,0"})]}),"\n",(0,i.jsx)("img",{src:"https://user-images.githubusercontent.com/3129530/194735354-486999dd-3c57-4ab1-a9ad-b8e97bac0da0.png",width:"700"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"Volume rendering of a medical skull scan"}),": ",(0,i.jsx)(s.code,{children:"f3d skull.vti -vxbt --range=40,200"})]}),"\n",(0,i.jsx)("img",{src:"https://user-images.githubusercontent.com/3129530/194735348-7dd14922-f546-4f54-8bc2-b6602617c4cc.png",width:"700"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"Point cloud rendering using sprites"}),": ",(0,i.jsx)(s.code,{children:"f3d pointCloud.vtp -o --point-size=0.2 --colormap=0,0,0.8,0,0.4,0.9,0,0,0.8,0.9,0.9,0,1,0.5,0.5,1"})]}),"\n",(0,i.jsx)(s.h2,{id:"acknowledgments",children:"Acknowledgments"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Bristleback DOTA Fan-Art by ",(0,i.jsx)(s.a,{href:"https://sketchfab.com/Tolst",children:"Nikolay_Tsys"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["SY Carola (point cloud) by ",(0,i.jsx)(s.a,{href:"https://sketchfab.com/ScottishMaritimeMuseum",children:"Scottish Maritime Museum"})]}),"\n",(0,i.jsxs)(s.li,{children:["Gearbox Animation by ",(0,i.jsx)(s.a,{href:"https://sketchfab.com/dzhusione",children:"DZHUSI \xd8NE"})]}),"\n",(0,i.jsxs)(s.li,{children:["Watch movement by ",(0,i.jsx)(s.a,{href:"https://grabcad.com/greg.brown",children:"Greg Brown"})]}),"\n",(0,i.jsxs)(s.li,{children:["Zelda - Breath Of The Wild by ",(0,i.jsx)(s.a,{href:"https://sketchfab.com/theStoff",children:"theStoff"})]}),"\n",(0,i.jsxs)(s.li,{children:["Venice Sunset HDRI and Hiker\u2019s Cave HDRI by ",(0,i.jsx)(s.a,{href:"https://polyhaven.com/hdris?a=Greg%20Zaal",children:"Greg Zaal"})]}),"\n",(0,i.jsxs)(s.li,{children:["Future Parking HDRI by ",(0,i.jsx)(s.a,{href:"https://polyhaven.com/hdris?a=Sergej%20Majboroda",children:"Sergej Majboroda"})]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>d});var i=n(6540);const t={},r=i.createContext(t);function c(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);