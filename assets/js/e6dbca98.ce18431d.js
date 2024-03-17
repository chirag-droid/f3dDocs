"use strict";(self.webpackChunkf_3_d_app=self.webpackChunkf_3_d_app||[]).push([[611],{2881:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=t(4848),a=t(8453);const r={},d="Bindings",s={id:"libf3d/BINDINGS",title:"Bindings",description:"Python",source:"@site/docs/libf3d/BINDINGS.md",sourceDirName:"libf3d",slug:"/libf3d/BINDINGS",permalink:"/docs/libf3d/BINDINGS",draft:!1,unlisted:!1,editUrl:"https://github.com/f3d-app/f3d/tree/main/www/docs/libf3d/BINDINGS.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"libf3d Documentation",permalink:"/docs/category/libf3d-documentation"},next:{title:"Classes Introduction",permalink:"/docs/libf3d/CLASSES"}},o={},l=[{value:"Python",id:"python",level:2},{value:"Java (experimental)",id:"java-experimental",level:2},{value:"Javascript (experimental)",id:"javascript-experimental",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"bindings",children:"Bindings"}),"\n",(0,i.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,i.jsxs)(n.p,{children:["If the python bindings have been generated using the ",(0,i.jsx)(n.code,{children:"F3D_BINDINGS_PYTHON"})," CMake option, the libf3d can be used directly from python.\nMake sure to set ",(0,i.jsx)(n.code,{children:"PYTHONPATH"})," to path where the python module is built.\nHere is an example showing how to use libf3d python bindings:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import f3d\n\neng = f3d.Engine(f3d.Window.NATIVE)\neng.options.update({\n  "model.scivis.array-name": "Normals",\n  "model.scivis.component": 0,\n  "ui.bar": True,\n  "render.grid.enable": True,\n  })\n\neng.loader.load_geometry("f3d/testing/data/dragon.vtu")\neng.interactor.start()\n'})}),"\n",(0,i.jsxs)(n.p,{children:["You can see more examples using python bindings in the dedicated example folder ",(0,i.jsx)(n.a,{href:"https://github.com/f3d-app/f3d/tree/master/examples/libf3d/python",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"java-experimental",children:"Java (experimental)"}),"\n",(0,i.jsxs)(n.p,{children:["If the Java bindings have been generated using the ",(0,i.jsx)(n.code,{children:"F3D_BINDINGS_JAVA"})," CMake option, the libf3d can be used directly from Java.\nYou can import the ",(0,i.jsx)(n.code,{children:"f3d.jar"})," package and use the provided Java classes directly.\nMake sure to set ",(0,i.jsx)(n.code,{children:"java.library.path"})," to the path where the JNI library is built.\nHere is an example showing how to use libf3d Java bindings:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'import app.f3d.F3D.*;\n\npublic class F3DExample {\n  public static void main(String[] args) {\n\n    Engine.autoloadPlugins();\n\n    // Always use try-with-resources idiom to ensure the native engine is released\n    try (Engine engine = new Engine(Window.Type.NATIVE)) {\n      Loader loader = engine.getLoader();\n      loader.loadGeometry("f3d/testing/data/dragon.vtu");\n\n      engine.getWindow().render();\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"javascript-experimental",children:"Javascript (experimental)"}),"\n",(0,i.jsx)(n.p,{children:"If the Javascript bindings have been generated by building F3D with webassembly and emscriptem, the libf3d can be used directly from a browser."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>s});var i=t(6540);const a={},r=i.createContext(a);function d(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);