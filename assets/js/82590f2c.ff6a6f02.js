"use strict";(self.webpackChunkf_3_d_app=self.webpackChunkf_3_d_app||[]).push([[936],{7777:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>d,toc:()=>x});var s=n(4848),l=n(8453);const r={sidebar_position:3},i="Options exhaustive list",d={id:"libf3d/OPTIONS",title:"Options exhaustive list",description:"An option is a string used as a key associated with a value, which are stored in an options instance.",source:"@site/docs/libf3d/OPTIONS.md",sourceDirName:"libf3d",slug:"/libf3d/OPTIONS",permalink:"/f3dDocs/docs/next/libf3d/OPTIONS",draft:!1,unlisted:!1,editUrl:"https://github.com/f3d-app/f3d/tree/main/www/docs/libf3d/OPTIONS.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"Classes Introduction",permalink:"/f3dDocs/docs/next/libf3d/CLASSES"},next:{title:"Bindings",permalink:"/f3dDocs/docs/next/libf3d/BINDINGS"}},c={},x=[{value:"Scene Options",id:"scene-options",level:2},{value:"Interactor Options",id:"interactor-options",level:2},{value:"Model Options",id:"model-options",level:2},{value:"Render Options",id:"render-options",level:2},{value:"UI Options",id:"ui-options",level:2}];function h(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"options-exhaustive-list",children:"Options exhaustive list"}),"\n",(0,s.jsxs)(t.p,{children:["An option is a string used as a key associated with a value, which are stored in an ",(0,s.jsx)(t.code,{children:"options"})," instance.\nThe possible option are listed below and are organized by categories and subcategories, here is a non-exhaustive explanation of the categories."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"scene"})," options are related to how the scene is being displayed"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"render"})," options are related to the way the render is done"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"render.effect"})," options are related to specific techniques used that modify the render"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"ui"})," options are related to the screenspace UI element displayed"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"model"})," options are related to modifications on the model, they are only meaningful when using the default scene"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"interactor"})," options requires an interactor to be present to have any effect."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Please note certain options are taken into account when rendering, others when loading a file.\nSee the exhaustive list below, but note that this may change in the future."}),"\n",(0,s.jsx)(t.h2,{id:"scene-options",children:"Scene Options"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Option"}),(0,s.jsxs)(t.th,{style:{textAlign:"center"},children:["Type",(0,s.jsx)("br",{}),"Default",(0,s.jsx)("br",{}),"Trigger"]}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"F3D option"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"scene.animation.autoplay"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["bool",(0,s.jsx)("br",{}),"false",(0,s.jsx)("br",{}),"load"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Automatically start animation."}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--animation-autoplay"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"scene.animation.index"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["int",(0,s.jsx)("br",{}),"0",(0,s.jsx)("br",{}),"load"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Select the animation to load.",(0,s.jsx)("br",{}),"Any negative value means all animations (glTF only).",(0,s.jsx)("br",{}),"The default scene always has at most one animation."]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--animation-index"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"scene.animation.speed-factor"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["double",(0,s.jsx)("br",{}),"1",(0,s.jsx)("br",{}),"render"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Set the animation speed factor to slow, speed up or even invert animation."}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--animation-speed-factor"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"scene.animation.frame-rate"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["double",(0,s.jsx)("br",{}),"60",(0,s.jsx)("br",{}),"render"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Set the animation frame rate used to play the animation interactively."}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--animation-frame-rate"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"scene.camera.index"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["int",(0,s.jsx)("br",{}),"-1",(0,s.jsx)("br",{}),"load"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Select the scene camera to use when available in the file.",(0,s.jsx)("br",{}),"Any negative value means automatic camera.",(0,s.jsx)("br",{}),"The default scene always uses automatic camera."]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--camera-index"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"scene.up-direction"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["string",(0,s.jsx)("br",{}),"+Y",(0,s.jsx)("br",{}),"load"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Define the Up direction"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--up"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"interactor-options",children:"Interactor Options"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Option"}),(0,s.jsxs)(t.th,{style:{textAlign:"center"},children:["Type",(0,s.jsx)("br",{}),"Default",(0,s.jsx)("br",{}),"Trigger"]}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"F3D option"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"interactor.axis"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["bool",(0,s.jsx)("br",{}),"false",(0,s.jsx)("br",{}),"render"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Show ",(0,s.jsx)(t.em,{children:"axes"})," as a trihedron in the scene."]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--axis"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"interactor.trackball"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["bool",(0,s.jsx)("br",{}),"false",(0,s.jsx)("br",{}),"render"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Enable trackball interaction."}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--trackball"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"model-options",children:"Model Options"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Option"}),(0,s.jsxs)(t.th,{style:{textAlign:"center"},children:["Type",(0,s.jsx)("br",{}),"Default",(0,s.jsx)("br",{}),"Trigger"]}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"F3D option"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"model.matcap.texture"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["string",(0,s.jsx)("br",{}),"-",(0,s.jsx)("br",{}),"render"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Path to a texture file containing a material capture. All other model options for surfaces are ignored if this is set."}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--texture-matcap"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"model.color.opacity"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["double",(0,s.jsx)("br",{}),"1.0",(0,s.jsx)("br",{}),"render"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Set ",(0,s.jsx)(t.em,{children:"opacity"})," on the geometry. Usually used with Depth Peeling option. Multiplied with the ",(0,s.jsx)(t.code,{children:"model.color.texture"})," when present."]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--opacity"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"model.color.rgb"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["vector<double>",(0,s.jsx)("br",{}),"1.0,1.0,1.0",(0,s.jsx)("br",{}),"render"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Set a ",(0,s.jsx)(t.em,{children:"color"})," on the geometry. Multiplied with the ",(0,s.jsx)(t.code,{children:"model.color.texture"})," when present."]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--color"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"model.color.texture"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["string",(0,s.jsx)("br",{}),"-",(0,s.jsx)("br",{}),"render"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Path to a texture file that sets the color of the object. Will be multiplied with rgb and opacity."}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--texture-base-color"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"model.emissive.factor"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["vector<double>",(0,s.jsx)("br",{}),"1.0,1.0,1.0",(0,s.jsx)("br",{}),"render"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Multiply the emissive color when an emissive texture is present."}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--emissive-factor"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"model.emissive.texture"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["string",(0,s.jsx)("br",{}),"-",(0,s.jsx)("br",{}),"render"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Path to a texture file that sets the emitted light of the object. Multiplied with the ",(0,s.jsx)(t.code,{children:"model.emissive.factor"}),"."]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--texture-emissive"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"model.material.metallic"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["double",(0,s.jsx)("br",{}),"0.0",(0,s.jsx)("br",{}),"render"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Set the ",(0,s.jsx)(t.em,{children:"metallic coefficient"})," on the geometry (0.0-1.0). Multiplied with the ",(0,s.jsx)(t.code,{children:"model.material.texture"})," when present."]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--metallic"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"model.material.roughness"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["double",(0,s.jsx)("br",{}),"0.3",(0,s.jsx)("br",{}),"render"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Set the ",(0,s.jsx)(t.em,{children:"roughness coefficient"})," on the geometry (0.0-1.0). Multiplied with the ",(0,s.jsx)(t.code,{children:"model.material.texture"})," when present."]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--roughness"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"model.material.texture"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["string",(0,s.jsx)("br",{}),"-",(0,s.jsx)("br",{}),"render"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Path to a texture file that sets the Occlusion, Roughness and Metallic values of the object. Multiplied with the ",(0,s.jsx)(t.code,{children:"model.material.roughness"})," and ",(0,s.jsx)(t.code,{children:"model.material.metallic"}),", set both of them to 1.0 to get a true result."]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--texture-material"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"model.normal.scale"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["double",(0,s.jsx)("br",{}),"1.0",(0,s.jsx)("br",{}),"render"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Normal scale affects the strength of the normal deviation from the normal texture."}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--normal-scale"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"model.normal.texture"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["string",(0,s.jsx)("br",{}),"-",(0,s.jsx)("br",{}),"render"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Path to a texture file that sets the normal map of the object."}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--texture-normal"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"model.scivis.cells"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["bool",(0,s.jsx)("br",{}),"false",(0,s.jsx)("br",{}),"render"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Color the data with value found ",(0,s.jsx)(t.em,{children:"on the cells"})," instead of points"]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--cells"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"model.scivis.colormap"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["vector<double>",(0,s.jsx)("br",{}),"<inferno>",(0,s.jsx)("br",{}),"render"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Set a ",(0,s.jsx)(t.em,{children:"custom colormap for the coloring"}),".",(0,s.jsx)("br",{}),"This is a list of colors in the format ",(0,s.jsx)(t.code,{children:"val1,red1,green1,blue1,...,valN,redN,greenN,blueN"}),(0,s.jsx)("br",{}),"where all values are in the range (0,1)."]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--colormap"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"model.scivis.component"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["int",(0,s.jsx)("br",{}),"-1",(0,s.jsx)("br",{}),"render"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Specify the component to color with. -1 means ",(0,s.jsx)(t.em,{children:"magnitude"}),". -2 means ",(0,s.jsx)(t.em,{children:"direct values"}),"."]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--comp"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"model.scivis.array-name"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["string",(0,s.jsx)("br",{}),"<reserved>",(0,s.jsx)("br",{}),"render"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.em,{children:"Color by a specific data array"})," present in on the data. Set to ",(0,s.jsx)("empty",{})," to let libf3d find the first available array."]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--scalars"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"model.scivis.range"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["vector<double>",(0,s.jsx)("br",{}),"-",(0,s.jsx)("br",{}),"render"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Set a ",(0,s.jsx)(t.em,{children:"custom range for the coloring"}),"."]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--range"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"model.point-sprites.enable"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["bool",(0,s.jsx)("br",{}),"false",(0,s.jsx)("br",{}),"render"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Show sphere ",(0,s.jsx)(t.em,{children:"points sprites"})," instead of the geometry."]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--point-sprites"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"model.volume.enable"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["bool",(0,s.jsx)("br",{}),"false",(0,s.jsx)("br",{}),"render"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Enable ",(0,s.jsx)(t.em,{children:"volume rendering"}),". It is only available for 3D image data (vti, dcm, nrrd, mhd files) and will display nothing with other default scene formats."]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--volume"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"model.volume.inverse"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["bool",(0,s.jsx)("br",{}),"false",(0,s.jsx)("br",{}),"render"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Inverse the linear opacity function."}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--inverse"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"render-options",children:"Render Options"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Option"}),(0,s.jsxs)(t.th,{style:{textAlign:"center"},children:["Type",(0,s.jsx)("br",{}),"Default",(0,s.jsx)("br",{}),"Trigger"]}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"F3D option"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"render.effect.translucency-support"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["bool",(0,s.jsx)("br",{}),"false",(0,s.jsx)("br",{}),"render"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Enable ",(0,s.jsx)(t.em,{children:"translucency support"}),". This is a technique used to correctly render translucent objects, implemented using depth peeling"]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--translucency-support"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"render.effect.anti-aliasing"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["bool",(0,s.jsx)("br",{}),"false",(0,s.jsx)("br",{}),"render"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Enable ",(0,s.jsx)(t.em,{children:"anti-aliasing"}),". This technique is used to reduce aliasing, implemented using FXAA."]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--anti-aliasing"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"render.effect.ambient-occlusion"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["bool",(0,s.jsx)("br",{}),"false",(0,s.jsx)("br",{}),"render"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Enable ",(0,s.jsx)(t.em,{children:"ambient occlusion"}),". This is a technique providing approximate shadows, used to improve the depth perception of the object. Implemented using SSAO"]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--ambient-occlusion"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"render.effect.tone-mapping"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["bool",(0,s.jsx)("br",{}),"false",(0,s.jsx)("br",{}),"render"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Enable generic filmic ",(0,s.jsx)(t.em,{children:"Tone Mapping Pass"}),". This technique is used to map colors properly to the monitor colors."]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--tone-mapping"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"render.line-width"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["double",(0,s.jsx)("br",{}),"1.0",(0,s.jsx)("br",{}),"render"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Set the ",(0,s.jsx)(t.em,{children:"width"})," of lines when showing edges."]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--line-width"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"render.show-edges"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["bool",(0,s.jsx)("br",{}),"false",(0,s.jsx)("br",{}),"render"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Show the ",(0,s.jsx)(t.em,{children:"cell edges"})]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--edges"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"render.point-size"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["double",(0,s.jsx)("br",{}),"10.0",(0,s.jsx)("br",{}),"render"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Set the ",(0,s.jsx)(t.em,{children:"size"})," of points when showing vertices and point sprites."]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--point-size"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"render.splat-type"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["string",(0,s.jsx)("br",{}),"sphere",(0,s.jsx)("br",{}),"render"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Set the splat type when showing point sprites (can be ",(0,s.jsx)(t.code,{children:"sphere"})," or ",(0,s.jsx)(t.code,{children:"gaussian"}),")."]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--point-type"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"render.grid.enable"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["bool",(0,s.jsx)("br",{}),"false",(0,s.jsx)("br",{}),"render"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Show ",(0,s.jsx)(t.em,{children:"a grid"})," aligned with the horizontal (orthogonal to the Up direction) plane."]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--grid"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"render.grid.absolute"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["bool",(0,s.jsx)("br",{}),"false",(0,s.jsx)("br",{}),"render"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Position the grid at the ",(0,s.jsx)(t.em,{children:"absolute origin"})," of the model's coordinate system instead of below the model."]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--grid"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"render.grid.unit"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["double",(0,s.jsx)("br",{}),"0",(0,s.jsx)("br",{}),"render"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Set the size of the ",(0,s.jsx)(t.em,{children:"unit square"})," for the grid. If set to non-positive (the default) a suitable value will be automatically computed."]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--grid-unit"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"render.grid.subdivisions"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["int",(0,s.jsx)("br",{}),"10",(0,s.jsx)("br",{}),"render"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Set the number of subdivisions for the grid."}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--grid-subdivisions"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"render.raytracing.enable"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["bool",(0,s.jsx)("br",{}),"false",(0,s.jsx)("br",{}),"render"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Enable ",(0,s.jsx)(t.em,{children:"raytracing"}),". Requires the raytracing module to be enabled."]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--raytracing"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"render.raytracing.samples"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["int",(0,s.jsx)("br",{}),"5",(0,s.jsx)("br",{}),"render"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["The number of ",(0,s.jsx)(t.em,{children:"samples per pixel"}),"."]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--samples"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"render.raytracing.denoise"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["bool",(0,s.jsx)("br",{}),"false",(0,s.jsx)("br",{}),"render"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.em,{children:"Denoise"})," the raytracing rendering."]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--denoise"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"render.hdri.file"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["string",(0,s.jsx)("br",{}),"-",(0,s.jsx)("br",{}),"render"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Set the ",(0,s.jsx)(t.em,{children:"HDRI"})," image that can be used for ambient lighting and skybox.",(0,s.jsx)("br",{}),"Valid file format are hdr, exr, png, jpg, pnm, tiff, bmp.",(0,s.jsx)("br",{}),"If not set, a default is provided."]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--hdri-file"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"render.hdri.ambient"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["bool",(0,s.jsx)("br",{}),"false",(0,s.jsx)("br",{}),"render"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Light the scene using the ",(0,s.jsx)(t.em,{children:"HDRI"})," image as ambient lighting",(0,s.jsx)("br",{}),"The environment act as a light source and is reflected on the material."]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--hdri-ambient"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"render.background.color"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["vector<double>",(0,s.jsx)("br",{}),"0.2,0.2,0.2",(0,s.jsx)("br",{}),"render"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Set the window ",(0,s.jsx)(t.em,{children:"background color"}),".",(0,s.jsx)("br",{}),"Ignored if a ",(0,s.jsx)(t.em,{children:"hdri"})," skybox is used."]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--bg-color"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"render.background.skybox"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["bool",(0,s.jsx)("br",{}),"false",(0,s.jsx)("br",{}),"render"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Show the ",(0,s.jsx)(t.em,{children:"HDRI"})," image as a skybox",(0,s.jsx)("br",{}),"Overrides the the background color if any"]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--hdri-skybox"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"render.background.blur"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["bool",(0,s.jsx)("br",{}),"false",(0,s.jsx)("br",{}),"render"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Blur background, useful with a skybox."}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--blur-background"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"render.background.blur.coc"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["double",(0,s.jsx)("br",{}),"20.0",(0,s.jsx)("br",{}),"render"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Blur background circle of confusion radius."}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--blur-background-coc"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"ui-options",children:"UI Options"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Option"}),(0,s.jsxs)(t.th,{style:{textAlign:"center"},children:["Type",(0,s.jsx)("br",{}),"Default",(0,s.jsx)("br",{}),"Trigger"]}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"F3D option"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"ui.bar"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["bool",(0,s.jsx)("br",{}),"false",(0,s.jsx)("br",{}),"render"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Show ",(0,s.jsx)(t.em,{children:"scalar bar"})," of the coloring by data array."]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--bar"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"ui.cheatsheet"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["bool",(0,s.jsx)("br",{}),"false",(0,s.jsx)("br",{}),"render"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Show a interactor cheatsheet"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"ui.filename"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["bool",(0,s.jsx)("br",{}),"false",(0,s.jsx)("br",{}),"render"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Display the ",(0,s.jsx)(t.em,{children:"filename info content"})," on top of the window."]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--filename"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"ui.filename-info"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["string",(0,s.jsx)("br",{}),"-",(0,s.jsx)("br",{}),"render"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Content of ",(0,s.jsx)(t.em,{children:"filename info"})," to display."]}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"ui.font-file"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["string",(0,s.jsx)("br",{}),"-",(0,s.jsx)("br",{}),"render"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Use the provided FreeType compatible font file to display text.",(0,s.jsx)("br",{}),"Can be useful to display non-ASCII filenames."]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--font-file"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"ui.fps"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["bool",(0,s.jsx)("br",{}),"false",(0,s.jsx)("br",{}),"render"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Display a ",(0,s.jsx)(t.em,{children:"frame per second counter"}),"."]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--fps"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"ui.loader-progress"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["bool",(0,s.jsx)("br",{}),"false",(0,s.jsx)("br",{}),"load"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Show a ",(0,s.jsx)(t.em,{children:"progress bar"})," when loading the file."]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--progress"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"ui.metadata"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["bool",(0,s.jsx)("br",{}),"false",(0,s.jsx)("br",{}),"render"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Display the ",(0,s.jsx)(t.em,{children:"metadata"}),"."]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"--metadata"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"ui.dropzone"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["bool",(0,s.jsx)("br",{}),"false",(0,s.jsx)("br",{}),"render"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Show a drop zone."}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"ui.dropzone-info"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["string",(0,s.jsx)("br",{}),"-",(0,s.jsx)("br",{}),"render"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Content of the drop zone text to display."}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var s=n(6540);const l={},r=s.createContext(l);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);