"use strict";(self.webpackChunkf_3_d_app=self.webpackChunkf_3_d_app||[]).push([[376],{6655:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var i=o(4848),s=o(8453);const t={},l="Configuration File",r={id:"user/CONFIGURATION_FILE",title:"Configuration File",description:"Almost all the command-line options can be controlled using configuration files.",source:"@site/docs/user/CONFIGURATION_FILE.md",sourceDirName:"user",slug:"/user/CONFIGURATION_FILE",permalink:"/f3dDocs/docs/user/CONFIGURATION_FILE",draft:!1,unlisted:!1,editUrl:"https://github.com/f3d-app/f3d/tree/main/www/docs/user/CONFIGURATION_FILE.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"User Documentation",permalink:"/f3dDocs/docs/category/user-documentation"},next:{title:"Desktop Integration",permalink:"/f3dDocs/docs/user/DESKTOP_INTEGRATION"}},c={},d=[];function a(e){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"configuration-file",children:"Configuration File"}),"\n",(0,i.jsx)(n.p,{children:'Almost all the command-line options can be controlled using configuration files.\nConfiguration files uses the "long" version of the command-line options in a JSON\nformatted file to provide values for these options.'}),"\n",(0,i.jsx)(n.p,{children:"These options can be organized by block using a regular expression for each block\nin order to provide different default values for the different filetypes."}),"\n",(0,i.jsxs)(n.p,{children:["A special block, named ",(0,i.jsx)(n.code,{children:"global"}),", will apply to all files.\nUsing a command-line option will override the corresponding value in the config file."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"global"})," block and command-line options are only taken into account on the first load\nand not on subsequent loads, when switching between files.\nThe regular expression blocks are always taken into account, even when loading further files.\nPlease note the regular expressions are not case-sensitive."]}),"\n",(0,i.jsx)(n.p,{children:"A typical config file may look like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'{\n   "global": {\n       "bg-color": "0.7,0.7,0.7",\n       "color": "0.5,0.1,0.1",\n       "anti-aliasing": true,\n       "timer": true,\n       "progress": true,\n       "axis": true,\n       "bar": true,\n       "roughness": 0.2,\n       "grid": true,\n       "scalars": true\n   },\n   ".*vt.": {\n       "edges": true\n   },\n   ".*gl(tf|b)": {\n       "raytracing": true,\n       "denoise": true,\n       "samples": 3\n   },\n   ".*mhd": {\n       "volume": true\n   }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Here, the first block defines a basic global configuration with many desired options for all files.\nThe second block specifies that all files ending with vt., eg: vtk, vtp, vtu, ... will be shown with edges visibility turned on.\nThe third block specifies raytracing usage for .gltf and .glb files.\nThe last block specifies that volume rendering should be used with .mhd files."}),"\n",(0,i.jsx)(n.p,{children:"Single .json file for configuration is supported, as well a config directory containing multiple .json config files.\nIn the case of config directory, .json file are read in alphabetical order and an option in a block can be overridden\nby the same option being set in the same block in another .json file read after."}),"\n",(0,i.jsxs)(n.p,{children:["F3D provides a default config directory for generic usage (",(0,i.jsx)(n.code,{children:"config.d"}),") and a thumbnail specific config directory (",(0,i.jsx)(n.code,{children:"thumbnail.d"}),").\nYou can edit the file contained in these directory or copy then into specific locations (see below) in order to customize F3D behavior."]}),"\n",(0,i.jsxs)(n.p,{children:["The following command-line options ",(0,i.jsx)("b",{children:" cannot "})," be set via config file:\n",(0,i.jsx)(n.code,{children:"help"}),", ",(0,i.jsx)(n.code,{children:"version"}),", ",(0,i.jsx)(n.code,{children:"readers-list"}),", ",(0,i.jsx)(n.code,{children:"config"}),", ",(0,i.jsx)(n.code,{children:"dry-run"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The following command-line options ",(0,i.jsx)("b",{children:"can only"})," be set in the global block of the config file:\n",(0,i.jsx)(n.code,{children:"no-render"}),", ",(0,i.jsx)(n.code,{children:"inputs"}),", ",(0,i.jsx)(n.code,{children:"output"}),", ",(0,i.jsx)(n.code,{children:"verbose"}),", ",(0,i.jsx)(n.code,{children:"resolution"}),", ",(0,i.jsx)(n.code,{children:"position"})," and all testing options."]}),"\n",(0,i.jsxs)(n.p,{children:["Boolean options that have been turned on in the configuration file can be turned\noff on the command line if needed, eg: ",(0,i.jsx)(n.code,{children:"--point-sprites=false"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The configuration file or directory possible locations depends on your operating system.\nThey are considered in the below order and only the first found will be used."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Linux: ",(0,i.jsx)(n.code,{children:"${XDG_CONFIG_HOME}/.config/f3d/config(.json,.d)"}),", ",(0,i.jsx)(n.code,{children:"~/.config/f3d/config(.json,d)"}),", ",(0,i.jsx)(n.code,{children:"/etc/f3d/config(.json,.d)"}),", ",(0,i.jsx)(n.code,{children:"/usr/share/f3d/configs/config(.json,.d)"}),", ",(0,i.jsx)(n.code,{children:"[install_dir]/share/f3d/configs/config(.json,.d)"})]}),"\n",(0,i.jsxs)(n.li,{children:["Windows: ",(0,i.jsx)(n.code,{children:"%APPDATA%\\f3d\\(config.json,.d)"}),", ",(0,i.jsx)(n.code,{children:"[install_dir]\\share\\f3d\\configs\\(config.json,.d)"})]}),"\n",(0,i.jsxs)(n.li,{children:["macOS: ",(0,i.jsx)(n.code,{children:"${XDG_CONFIG_HOME}/.config/f3d/config(.json,.d)"}),", ",(0,i.jsx)(n.code,{children:"~/.config/f3d/config(.json,.d)"}),", ",(0,i.jsx)(n.code,{children:"/usr/local/etc/f3d/config(.json,.d)"}),", ",(0,i.jsx)(n.code,{children:"f3d.app/Contents/Resources/configs/config(.json,.d)"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The binary release will install the default config directory.\nOn Linux, they will be installed in ",(0,i.jsx)(n.code,{children:"[install_dir]/share/f3d/configs/"}),", on Windows, they will be installed in ",(0,i.jsx)(n.code,{children:"[install_dir]\\share\\f3d\\configs\\"}),", on macOS, it will be installed in the bundle."]}),"\n",(0,i.jsxs)(n.p,{children:["Please note there is a command line option to control the configuration file to read. Using it, one can specify an absolute/relative path for the configuration path, but also\nonly the filename or filestem (",(0,i.jsx)(n.code,{children:".json"})," and ",(0,i.jsx)(n.code,{children:".d"}),"  will be added) to look for in the locations listed above, , eg: ",(0,i.jsx)(n.code,{children:"f3d --config=custom_config"})," will look\nfor ",(0,i.jsx)(n.code,{children:"custom_config.json"})," and ",(0,i.jsx)(n.code,{children:"custom_config.d"})," in locations listed above."]}),"\n",(0,i.jsxs)(n.p,{children:["Please note ",(0,i.jsx)("b",{children:"only one"})," config file or directory will be found and parsed."]})]})}function f(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>r});var i=o(6540);const s={},t=i.createContext(s);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);