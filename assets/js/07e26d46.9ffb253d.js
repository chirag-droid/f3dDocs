"use strict";(self.webpackChunkf_3_d_app=self.webpackChunkf_3_d_app||[]).push([[109],{6576:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>o});var t=i(4848),d=i(8453);const a={},r="libf3d - A library to render 3D meshes",s={id:"libf3d/OVERVIEW",title:"libf3d - A library to render 3D meshes",description:"By Michael Migliore and Mathieu Westphal.",source:"@site/docs/libf3d/OVERVIEW.md",sourceDirName:"libf3d",slug:"/libf3d/OVERVIEW",permalink:"/f3dDocs/docs/libf3d/OVERVIEW",draft:!1,unlisted:!1,editUrl:"https://github.com/f3d-app/f3d/tree/main/www/docs/libf3d/OVERVIEW.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Options exhaustive list",permalink:"/f3dDocs/docs/libf3d/OPTIONS"},next:{title:"Plugin SDK",permalink:"/f3dDocs/docs/libf3d/PLUGINS"}},l={},o=[{value:"Getting Started",id:"getting-started",level:2},{value:"Building against the libf3d",id:"building-against-the-libf3d",level:2},{value:"Extending libf3d with plugins",id:"extending-libf3d-with-plugins",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"libf3d---a-library-to-render-3d-meshes",children:"libf3d - A library to render 3D meshes"}),"\n",(0,t.jsx)(n.p,{children:"By Michael Migliore and Mathieu Westphal."}),"\n",(0,t.jsx)(n.p,{children:"libf3d is a BSD-licensed C++ library to open and render 3D meshes. It is of course used by F3D.\nlibf3d API is simple and easy to learn. Python bindings are provided through pybind11. Java bindings are also available.\nlibf3d API is still in alpha version and may change drastically in the future."}),"\n",(0,t.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,t.jsx)(n.p,{children:"Rendering a full scene file and starting the interaction is very easy:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:'#include <f3d/engine.h>\n#include <f3d/interactor.h>\n#include <f3d/loader.h>\n\n// Load VTK native readers\nf3d::engine::autoloadPlugins();\n\n// Create a f3d::engine\nf3d::engine eng();\n\n// Load a scene\neng.getLoader().loadScene("path/to/file.ext");\n\n// Start rendering and interacting\neng.getInteractor().start();\n'})}),"\n",(0,t.jsx)(n.p,{children:"As well as loading multiple geometries into a default scene:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:'#include <f3d/engine.h>\n#include <f3d/interactor.h>\n#include <f3d/loader.h>\n\n// Load VTK native readers\nf3d::engine::autoloadPlugins();\n\n// Create a f3d::engine\nf3d::engine eng();\n\n// Load multiples geometries\neng.getLoader().loadGeometry("path/to/file.ext").loadGeometry("path/to/file2.ext");\n\n// Start rendering and interacting\neng.getInteractor().start();\n'})}),"\n",(0,t.jsx)(n.p,{children:"It's also possible to load a geometry from memory buffers:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"#include <f3d/engine.h>\n#include <f3d/interactor.h>\n#include <f3d/loader.h>\n\n// Create a f3d::engine\nf3d::engine eng();\n\n// Create a single triangle\nf3d::mesh_t mesh = {};\nmesh.points = { 0.f, 0.f, 0.f, 0.f, 1.f, 0.f, 1.f, 0.f, 0.f };\nmesh.face_sides = { 3 };\nmesh.face_indices = { 0, 1, 2 };\neng.getLoader().loadGeometry(mesh);\n\n// Start rendering and interacting\neng.getInteractor().start();\n"})}),"\n",(0,t.jsx)(n.p,{children:"Manipulating the window directly can be done this way:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:'#include <f3d/engine.h>\n#include <f3d/image.h>\n#include <f3d/loader.h>\n#include <f3d/window.h>\n\n// Load VTK native readers\nf3d::engine::autoloadPlugins();\n\n// Create a f3d::engine\nf3d::engine eng(f3d::window::Type::NATIVE_OFFSCREEN);\n\n// Load a geometry\neng.getLoader().loadGeometry("path/to/file.ext");\n\n// Set the window size and render to an image\nf3d::image img = eng.getWindow().setSize(300, 300).renderToImage();\n\n// Save the image to a file\nimg.save("/path/to/img.png");\n'})}),"\n",(0,t.jsx)(n.p,{children:"Changing some options can be done this way:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:'#include <f3d/engine.h>\n#include <f3d/interactor.h>\n#include <f3d/options.h>\n#include <f3d/loader.h>\n\n// Load VTK native readers\nf3d::engine::autoloadPlugins();\n\n// Create a f3d::engine\nf3d::engine eng();\n\n// Recover the options and set the wanted value\neng.getOptions()\n  .set("render.effect.ambient-occlusion", true)\n  .set("render.effect.anti-aliasing", true);\n\n// Standard libf3d usage\neng.getLoader().loadGeometry("path/to/file.ext");\neng.getInteractor().start();\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Most options are dynamic, some are only taken into account when loading a file. See the ",(0,t.jsx)(n.a,{href:"/f3dDocs/docs/libf3d/OPTIONS",children:"options"})," documentation."]}),"\n",(0,t.jsxs)(n.p,{children:["Find more examples in the ",(0,t.jsx)(n.a,{href:"https://github.com/f3d-app/f3d/tree/master/examples",children:"examples directory"}),",\nyou can also find other usages in the ",(0,t.jsx)(n.a,{href:"https://github.com/f3d-app/f3d/tree/master/library/testing",children:"testing directory"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["For the complete documentation, please consult the ",(0,t.jsx)(n.a,{href:"https://f3d.app/doc/libf3d/doxygen/",children:"libf3d doxygen documentation."}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"building-against-the-libf3d",children:"Building against the libf3d"}),"\n",(0,t.jsxs)(n.p,{children:["Please follow instructions in the ",(0,t.jsx)(n.a,{href:"/f3dDocs/docs/dev/BUILD",children:"F3D build guide"}),", then use CMake to find the libf3d\nand link against it like this in your CMakeLists.txt:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cmake",children:"find_package(f3d REQUIRED)\n[...]\ntarget_link_libraries(target f3d::libf3d)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"extending-libf3d-with-plugins",children:"Extending libf3d with plugins"}),"\n",(0,t.jsxs)(n.p,{children:["In order to add new supported file format to libf3d, you can create a plugin using CMake macros. Please follow instructions in the ",(0,t.jsx)(n.a,{href:"/f3dDocs/docs/libf3d/PLUGINS",children:"F3D plugin SDK guide"}),"."]})]})}function g(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>s});var t=i(6540);const d={},a=t.createContext(d);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);