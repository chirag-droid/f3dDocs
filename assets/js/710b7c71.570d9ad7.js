"use strict";(self.webpackChunkf_3_d_app=self.webpackChunkf_3_d_app||[]).push([[411],{6003:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=i(4848),a=i(8453);const o={},r="Plugin SDK",l={id:"libf3d/PLUGINS",title:"Plugin SDK",description:"When calling find_package(f3d) in CMake, a few macros are made available to you to generate a plugin which allow you to extend libf3d to support your own file format.",source:"@site/docs/libf3d/PLUGINS.md",sourceDirName:"libf3d",slug:"/libf3d/PLUGINS",permalink:"/f3dDocs/docs/libf3d/PLUGINS",draft:!1,unlisted:!1,editUrl:"https://github.com/f3d-app/f3d/tree/main/www/docs/libf3d/PLUGINS.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"libf3d - A library to render 3D meshes",permalink:"/f3dDocs/docs/libf3d/OVERVIEW"},next:{title:"libf3d Documentation",permalink:"/f3dDocs/docs/libf3d/README_LIBF3D"}},s={},d=[{value:"Creating a plugin",id:"creating-a-plugin",level:2},{value:"Loading your plugin",id:"loading-your-plugin",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"plugin-sdk",children:"Plugin SDK"}),"\n",(0,t.jsxs)(n.p,{children:["When calling ",(0,t.jsx)(n.code,{children:"find_package(f3d)"})," in CMake, a few macros are made available to you to generate a plugin which allow you to extend libf3d to support your own file format."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Please consider ",(0,t.jsx)(n.a,{href:"../../CONTRIBUTING.md",children:"contributing"})," your plugin in ",(0,t.jsx)(n.a,{href:"https://github.com/f3d-app/f3d/tree/master/plugins",children:"F3D directly"})," if you think it can be useful to the community.\nYou can also consider contributing directly ",(0,t.jsx)(n.a,{href:"https://gitlab.kitware.com/vtk/vtk/blob/master/Documentation/dev/git/develop.md",children:"in VTK"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"creating-a-plugin",children:"Creating a plugin"}),"\n",(0,t.jsxs)(n.p,{children:["You can take a look at the example in the ",(0,t.jsx)(n.a,{href:"https://github.com/f3d-app/f3d/tree/master/examples/plugins",children:"examples/plugin"})," directory or at the official ",(0,t.jsx)(n.a,{href:"https://github.com/f3d-app/f3d/tree/master/plugins",children:"plugins"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The first thing (and most difficult part) you have to do is creating a VTK reader (or a VTK importer if you want to support a full scene with materials, lights and cameras), and wrap it into a VTK module. You can create several readers in the same VTK module if you need to support several file formats in a single plugin."}),"\n",(0,t.jsx)(n.p,{children:"Then, declare the reader(s) and the plugin using the CMake macros:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cmake",children:'f3d_plugin_init()\n\nf3d_plugin_declare_reader(\n  NAME "ReaderName"\n  EXTENSIONS "myext"                # set the extensions the reader can support\n  MIMETYPES "application/vnd.myext" # set the mimetypes the reader can support\n  VTK_READER ${vtk_classname}       # set the name of the VTK class you have created\n  DESCRIPTION "Reader description"  # set the description of the reader\n  EXCLUDE_FROM_THUMBNAILER          # add this flag if you don\'t want thumbnail generation for this reader\n)\n\n# More f3d_plugin_declare_reader calls are possible\n\nf3d_plugin_build(\n  NAME "PluginName"\n  VERSION 1.0\n  DESCRIPTION "Plugin description"\n  VTK_MODULES CommonCore CommonExecutionModel # Add more VTK modules if necessary\n)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["If the build succeeds, a library called ",(0,t.jsx)(n.code,{children:"libf3d-plugin-<name>.so"})," will be created (",(0,t.jsx)(n.code,{children:"f3d-plugin-<name>.dll"})," on Windows)\nA JSON file of the following form will also be generated. It's used by F3D internally to get information about supported file formats."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "description" : "Plugin description",\n  "name" : "PluginName",\n  "readers" :\n  [\n    {\n      "description" : "Reader description",\n      "extensions" : [ "myext" ],\n      "mimetypes" : [ "application/vnd.myext" ],\n      "name" : "ReaderName"\n    }\n  ],\n  "type" : "MODULE",\n  "version" : "1.0"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The list of existing mimetypes can be find ",(0,t.jsx)(n.a,{href:"https://www.iana.org/assignments/media-types/media-types.xhtml",children:"here"}),". If your file format is not listed, the mimetype should be ",(0,t.jsx)(n.code,{children:"application/vnd.${extension}"})]}),"\n",(0,t.jsx)(n.h2,{id:"loading-your-plugin",children:"Loading your plugin"}),"\n",(0,t.jsxs)(n.p,{children:["The plugin can be loaded using ",(0,t.jsx)(n.code,{children:'f3d::engine::loadPlugin("path or name")'})," api if you are using libf3d, or ",(0,t.jsx)(n.code,{children:'--load-plugins="path or name"'})," option if you are using F3D application.\nThe option can also be set in a configuration file that you could distribute with your plugin."]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var t=i(6540);const a={},o=t.createContext(a);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);