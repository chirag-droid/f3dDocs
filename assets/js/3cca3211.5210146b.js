"use strict";(self.webpackChunkf_3_d_app=self.webpackChunkf_3_d_app||[]).push([[708],{3803:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var i=s(4848),t=s(8453);const l={},d="Classes Introduction",c={id:"libf3d/CLASSES",title:"Classes Introduction",description:"This is only an introduction to libf3d classes.",source:"@site/docs/libf3d/CLASSES.md",sourceDirName:"libf3d",slug:"/libf3d/CLASSES",permalink:"/f3dDocs/docs/libf3d/CLASSES",draft:!1,unlisted:!1,editUrl:"https://github.com/f3d-app/f3d/tree/main/www/docs/libf3d/CLASSES.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bindings",permalink:"/f3dDocs/docs/libf3d/BINDINGS"},next:{title:"Options exhaustive list",permalink:"/f3dDocs/docs/libf3d/OPTIONS"}},a={},o=[{value:"Engine class",id:"engine-class",level:2},{value:"Loader class",id:"loader-class",level:2},{value:"Window class",id:"window-class",level:2},{value:"Interactor class",id:"interactor-class",level:2},{value:"Camera class",id:"camera-class",level:2},{value:"Image class",id:"image-class",level:2},{value:"Log class",id:"log-class",level:2},{value:"Options class",id:"options-class",level:2},{value:"Reader class",id:"reader-class",level:2},{value:"Plugin class",id:"plugin-class",level:2}];function r(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"classes-introduction",children:"Classes Introduction"}),"\n",(0,i.jsxs)(n.p,{children:["This is only an introduction to libf3d classes.\nFor the complete documentation, please consult the ",(0,i.jsx)(n.a,{href:"https://f3d.app/doc/libf3d/doxygen/",children:"libf3d doxygen documentation."}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"engine-class",children:"Engine class"}),"\n",(0,i.jsxs)(n.p,{children:["The engine class is the main class that needs to be instantiated. All other classes instance are provided by the engine using getters, ",(0,i.jsx)(n.code,{children:"getLoader"}),", ",(0,i.jsx)(n.code,{children:"getWindow"}),", ",(0,i.jsx)(n.code,{children:"getInteractor"}),", ",(0,i.jsx)(n.code,{children:"getOptions"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The engine constructor lets you choose the type of window in its constructor, ",(0,i.jsx)(n.code,{children:"NONE"}),", ",(0,i.jsx)(n.code,{children:"NATIVE"}),", ",(0,i.jsx)(n.code,{children:"NATIVE_OFFSCREEN"}),", ",(0,i.jsx)(n.code,{children:"EXTERNAL"}),". Default is ",(0,i.jsx)(n.code,{children:"NATIVE"}),". See ",(0,i.jsx)(n.a,{href:"#window-class",children:"Window class"})," documentation for more info. Please note that the engine will not provide a interactor with ",(0,i.jsx)(n.code,{children:"NONE"})," and ",(0,i.jsx)(n.code,{children:"EXTERNAL"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["A static function ",(0,i.jsx)(n.code,{children:"loadPlugin"})," can also be called to load reader plugins. It must be called before loading any file. An internal plugin containing VTK native readers can be loaded by calling ",(0,i.jsx)(n.code,{children:'f3d::engine::loadPlugin("native");'}),". Other plugins maintained by F3D team are available if their build is enabled: ",(0,i.jsx)(n.code,{children:"alembic"}),", ",(0,i.jsx)(n.code,{children:"assimp"}),", ",(0,i.jsx)(n.code,{children:"draco"}),", ",(0,i.jsx)(n.code,{children:"exodus"}),", ",(0,i.jsx)(n.code,{children:"occt"})," and ",(0,i.jsx)(n.code,{children:"usd"}),".\nIf CMake option ",(0,i.jsx)(n.code,{children:"F3D_PLUGINS_STATIC_BUILD"})," is enabled, the plugins listed above are also static just like ",(0,i.jsx)(n.code,{children:"native"})," plugin.\nAll static plugins can be loaded using ",(0,i.jsx)(n.code,{children:"f3d::engine::autoloadPlugins()"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"loader-class",children:"Loader class"}),"\n",(0,i.jsx)(n.p,{children:"The loader class is responsible to read and load the file from the disk. It supports reading full scene files as well as multiple geometries into a default scene."}),"\n",(0,i.jsx)(n.h2,{id:"window-class",children:"Window class"}),"\n",(0,i.jsx)(n.p,{children:"The window class is responsible for rendering the meshes. It supports multiple modes."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"NONE"}),": A window that will not render anything, very practical when only trying to recover meta-information about the data."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"NATIVE"}),": Default mode where a window is shown onscreen using native graphical capabilities."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"NATIVE_OFFSCREEN"}),": Use native graphical capabilities for rendering, but unto an offscreen window, which will not appear on screen, practical when generating screenshots."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"EXTERNAL"}),": A window where the OpenGL context is not created but assumed to have been created externally. To be used with other frameworks like Qt or GLFW."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Window lets you ",(0,i.jsx)(n.code,{children:"render"}),", ",(0,i.jsx)(n.code,{children:"renderToImage"})," and control other parameters of the window, like icon or windowName."]}),"\n",(0,i.jsx)(n.h2,{id:"interactor-class",children:"Interactor class"}),"\n",(0,i.jsx)(n.p,{children:"When provided by the engine, the interactor class lets you choose how to interact with the data."}),"\n",(0,i.jsx)(n.p,{children:"It contains the animation API to start and stop animation."}),"\n",(0,i.jsx)(n.p,{children:"Interactor also lets you set your interaction callbacks in order to modify how the interaction with the data is done."}),"\n",(0,i.jsxs)(n.p,{children:["Of course, you can use ",(0,i.jsx)(n.code,{children:"start"})," and ",(0,i.jsx)(n.code,{children:"stop"})," to control the interactor behavior."]}),"\n",(0,i.jsx)(n.h2,{id:"camera-class",children:"Camera class"}),"\n",(0,i.jsx)(n.p,{children:"Provided by the window, this class lets you control the camera. You can either specify the camera position, target, and up direction directly, or specify movements relative to the current camera state."}),"\n",(0,i.jsx)(n.h2,{id:"image-class",children:"Image class"}),"\n",(0,i.jsx)(n.p,{children:"A generic image class that can either be created from a window, from an image filepath or even from a data buffer. It supports comparison making it very practical in testing context."}),"\n",(0,i.jsx)(n.h2,{id:"log-class",children:"Log class"}),"\n",(0,i.jsxs)(n.p,{children:["A class to control logging in the libf3d. Simple using the different dedicated methods (",(0,i.jsx)(n.code,{children:"print"}),", ",(0,i.jsx)(n.code,{children:"debug"}),", ",(0,i.jsx)(n.code,{children:"info"}),", ",(0,i.jsx)(n.code,{children:"warn"}),", ",(0,i.jsx)(n.code,{children:"error"}),") and ",(0,i.jsx)(n.code,{children:"setVerboseLevel"}),", you can easily control what to display. Please note that, on windows, a dedicated output window may be created."]}),"\n",(0,i.jsx)(n.h2,{id:"options-class",children:"Options class"}),"\n",(0,i.jsxs)(n.p,{children:["This class lets you control the behavior of the libf3d. An option is basically a string used as a key associated with a value, see the exhaustive ",(0,i.jsx)(n.a,{href:"/f3dDocs/docs/libf3d/OPTIONS",children:"list"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"reader-class",children:"Reader class"}),"\n",(0,i.jsxs)(n.p,{children:["This class is used internally by the ",(0,i.jsx)(n.a,{href:"/f3dDocs/docs/libf3d/PLUGINS",children:"plugin SDK"})," and is not intended to be used directly."]}),"\n",(0,i.jsx)(n.h2,{id:"plugin-class",children:"Plugin class"}),"\n",(0,i.jsxs)(n.p,{children:["This class is used internally by the ",(0,i.jsx)(n.a,{href:"/f3dDocs/docs/libf3d/PLUGINS",children:"plugin SDK"})," and is not intended to be used directly."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>c});var i=s(6540);const t={},l=i.createContext(t);function d(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);