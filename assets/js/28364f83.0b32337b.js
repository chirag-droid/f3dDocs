"use strict";(self.webpackChunkf_3_d_app=self.webpackChunkf_3_d_app||[]).push([[867],{9917:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=i(4848),s=i(8453);const r={},a="Desktop Integration",o={id:"user/DESKTOP_INTEGRATION",title:"Desktop Integration",description:"F3D can be integrated in the desktop experience.",source:"@site/docs/user/DESKTOP_INTEGRATION.md",sourceDirName:"user",slug:"/user/DESKTOP_INTEGRATION",permalink:"/f3dDocs/docs/user/DESKTOP_INTEGRATION",draft:!1,unlisted:!1,editUrl:"https://github.com/f3d-app/f3d/tree/main/www/docs/user/DESKTOP_INTEGRATION.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configuration File",permalink:"/f3dDocs/docs/user/CONFIGURATION_FILE"},next:{title:"Installation",permalink:"/f3dDocs/docs/user/INSTALLATION"}},l={},d=[{value:"Linux",id:"linux",level:2},{value:"Windows",id:"windows",level:2},{value:"MacOS",id:"macos",level:2},{value:"Limitations",id:"limitations",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"desktop-integration",children:"Desktop Integration"}),"\n",(0,t.jsx)(n.p,{children:"F3D can be integrated in the desktop experience."}),"\n",(0,t.jsx)(n.h2,{id:"linux",children:"Linux"}),"\n",(0,t.jsxs)(n.p,{children:["For Linux desktop integration, F3D rely on mime types files as defined by the ",(0,t.jsx)(n.a,{href:"https://specifications.freedesktop.org/mime-apps-spec/mime-apps-spec-latest.html",children:"XDG standard"}),", .thumbnailer file as specified ",(0,t.jsx)(n.a,{href:"https://wiki.archlinux.org/title/File_manager_functionality#Thumbnail_previews",children:"here"})," and .desktop file as specified ",(0,t.jsx)(n.a,{href:"https://wiki.archlinux.org/title/desktop_entries",children:"here"}),". Many file managers use this mechanism, including nautilus, thunar, pcmanfm and caja."]}),"\n",(0,t.jsx)(n.p,{children:"The simplest way to obtain desktop integration on linux is to use a package for your distribution, or the .deb binary release package we provide if compatible with your distribution.\nIn other cases, the binary release archive can be used like this:"}),"\n",(0,t.jsxs)(n.ol,{start:"0",children:["\n",(0,t.jsxs)(n.li,{children:["Make sure ",(0,t.jsx)(n.code,{children:"~/.local/bin"})," is part of your ",(0,t.jsx)(n.code,{children:"PATH"})]}),"\n",(0,t.jsxs)(n.li,{children:["Extract F3D binary release archive in ",(0,t.jsx)(n.code,{children:"~/.local/"})]}),"\n",(0,t.jsxs)(n.li,{children:["Update your ",(0,t.jsx)(n.a,{href:"https://linux.die.net/man/1/update-mime-database",children:"mime database"})," pointing to ",(0,t.jsx)(n.code,{children:"~/.local/share/mime"})]}),"\n",(0,t.jsxs)(n.li,{children:["Update your ",(0,t.jsx)(n.a,{href:"https://linuxcommandlibrary.com/man/update-desktop-database",children:"desktop database"})," pointing to ",(0,t.jsx)(n.code,{children:"~/.local/share/application"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export PATH=$PATH:~/.local/bin\ntar -xzvf f3d-1.3.0-Linux.tar.gz -C ~/.local/\nsudo update-mime-database ~/.local/share/mime/\nsudo update-desktop-database ~/.local/share/applications\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you have any issues, refer to the ",(0,t.jsx)(n.a,{href:"/f3dDocs/docs/user/LIMITATIONS_AND_TROUBLESHOOTING",children:"troubleshooting"})," part."]}),"\n",(0,t.jsx)(n.h2,{id:"windows",children:"Windows"}),"\n",(0,t.jsx)(n.p,{children:"For Windows desktop integration, F3D rely on a registered shell extension."}),"\n",(0,t.jsx)(n.p,{children:"Using the F3D NSIS installer (.exe) is the simplest way to enable thumbnails and integrate F3D on windows."}),"\n",(0,t.jsx)(n.p,{children:"It is also possible to do it manually when using the zipped binary release archive, on installation, just run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cd C:\\path\\to\\f3d\\bin\\\nregsvr32 F3DShellExtension.dll\n"})}),"\n",(0,t.jsx)(n.p,{children:"To remove the shell extension, run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cd C:\\path\\to\\f3d\\bin\\\nregsvr32 /u F3DShellExtension.dll\n"})}),"\n",(0,t.jsx)(n.h2,{id:"macos",children:"MacOS"}),"\n",(0,t.jsx)(n.p,{children:"There is no support for thumbnails on MacOS, the .dmg binary release provides automatic file openings."}),"\n",(0,t.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"TIFF files are excluded from the thumbnailer to avoid conflicts with other better 2D thumbnailers."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(6540);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);