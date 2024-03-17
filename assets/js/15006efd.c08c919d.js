"use strict";(self.webpackChunkf_3_d_app=self.webpackChunkf_3_d_app||[]).push([[84],{9784:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var i=s(4848),l=s(8453);const r={},t="Coding Style",c={id:"dev/CODING_STYLE",title:"Coding Style",description:"F3D use different coding styles in each component, however there are some common rules",source:"@site/docs/dev/CODING_STYLE.md",sourceDirName:"dev",slug:"/dev/CODING_STYLE",permalink:"/docs/dev/CODING_STYLE",draft:!1,unlisted:!1,editUrl:"https://github.com/f3d-app/f3d/tree/main/www/docs/dev/CODING_STYLE.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Build guide",permalink:"/docs/dev/BUILD"},next:{title:"How to generate the full coverage report",permalink:"/docs/dev/GENERATE"}},d={},o=[{value:"Common rules",id:"common-rules",level:2},{value:"F3D Application rules",id:"f3d-application-rules",level:2},{value:"libf3d rules",id:"libf3d-rules",level:2},{value:"VTKExtensions rules",id:"vtkextensions-rules",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"coding-style",children:"Coding Style"}),"\n",(0,i.jsx)(n.p,{children:"F3D use different coding styles in each component, however there are some common rules"}),"\n",(0,i.jsx)(n.h2,{id:"common-rules",children:"Common rules"}),"\n",(0,i.jsx)(n.p,{children:"Overall syntax:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"CamelCase."}),"\n",(0,i.jsxs)(n.li,{children:["Avoid using ",(0,i.jsx)(n.code,{children:"using"})," for namespaces."]}),"\n",(0,i.jsx)(n.li,{children:"Initialize variables in header when possible."}),"\n",(0,i.jsx)(n.li,{children:"Local variables starts with a lower case char."}),"\n",(0,i.jsx)(n.li,{children:"Class members starts with a upper case char."}),"\n",(0,i.jsx)(n.li,{children:"Indents are two spaces."}),"\n",(0,i.jsx)(n.li,{children:"One space between instruction and parenthesis."}),"\n",(0,i.jsx)(n.li,{children:"Always add curly brace after instruction."}),"\n",(0,i.jsx)(n.li,{children:"Curly brace one a new line, aligned with instruction."}),"\n",(0,i.jsxs)(n.li,{children:["Add ",(0,i.jsx)(n.code,{children:"//----------------------------------------------------------------------------"})," before any method in implementation."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"//----------------------------------------------------------------------------\nvoid class::method()\n{\n  if (condition)\n  {\n    std::vector<int> myIntVector = { 13 };\n  }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Includes:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Organized by category: ",(0,i.jsx)(n.code,{children:"F3DApplication"}),", ",(0,i.jsx)(n.code,{children:"libf3d"}),", ",(0,i.jsx)(n.code,{children:"VTKExtensions"}),", ",(0,i.jsx)(n.code,{children:"other deps"}),", ",(0,i.jsx)(n.code,{children:"std"}),", ",(0,i.jsx)(n.code,{children:"system"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Sorted inside category."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"f3d-application-rules",children:"F3D Application rules"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Class starts with ",(0,i.jsx)(n.code,{children:"F3D"})]}),"\n",(0,i.jsx)(n.li,{children:"Method starts with an uppercase char."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"libf3d-rules",children:"libf3d rules"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Class starts with a lower case char."}),"\n",(0,i.jsx)(n.li,{children:"Method starts with an lower case char."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"vtkextensions-rules",children:"VTKExtensions rules"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Follow VTK rules"}),"\n",(0,i.jsx)(n.li,{children:"Method starts with an uppercase char."}),"\n",(0,i.jsxs)(n.li,{children:["Class starts with ",(0,i.jsx)(n.code,{children:"vtkF3D"})," if inheriting from vtkObject."]}),"\n",(0,i.jsxs)(n.li,{children:["Class starts with ",(0,i.jsx)(n.code,{children:"F3D"})," if not inheriting from vtkObject."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var i=s(6540);const l={},r=i.createContext(l);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);