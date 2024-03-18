"use strict";(self.webpackChunkf_3_d_app=self.webpackChunkf_3_d_app||[]).push([[7762],{7318:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var l=t(4848),o=t(8453);const s={sidebar_position:5},i="How to generate the full coverage report",r={id:"dev/GENERATE",title:"How to generate the full coverage report",description:"Requires gcovr program and gcc toolchain.",source:"@site/versioned_docs/version-2.3.0/dev/GENERATE.md",sourceDirName:"dev",slug:"/dev/GENERATE",permalink:"/f3dDocs/docs/dev/GENERATE",draft:!1,unlisted:!1,editUrl:"https://github.com/f3d-app/f3d/tree/main/www/versioned_docs/version-2.3.0/dev/GENERATE.md",tags:[],version:"2.3.0",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docs",previous:{title:"Testing",permalink:"/f3dDocs/docs/dev/TESTING"},next:{title:"Coding Style",permalink:"/f3dDocs/docs/dev/CODING_STYLE"}},d={},c=[];function a(e){const n={a:"a",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",...(0,o.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"how-to-generate-the-full-coverage-report",children:"How to generate the full coverage report"}),"\n",(0,l.jsxs)(n.p,{children:["Requires ",(0,l.jsx)(n.code,{children:"gcovr"})," program and ",(0,l.jsx)(n.code,{children:"gcc"})," toolchain."]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Build with ",(0,l.jsx)(n.code,{children:"F3D_COVERAGE"})," option enabled."]}),"\n",(0,l.jsx)(n.li,{children:"Run all tests."}),"\n",(0,l.jsxs)(n.li,{children:["Generate the report with: ",(0,l.jsx)(n.code,{children:"gcovr -r /path/to/sources --html --html-details -o coverage.html"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"how-to-build-and-test-with-sanitizer",children:"How to build and test with sanitizer"}),"\n",(0,l.jsxs)(n.p,{children:["Requires ",(0,l.jsx)(n.code,{children:"clang"})," toolchain."]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Build with ",(0,l.jsx)(n.code,{children:"F3D_SANITIZER"})," option to any of the possible values."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"export LSAN_OPTIONS=suppressions=/path/to/f3d/.lsan.supp:use_tls=0"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"export TSAN_OPTIONS=suppressions=/path/to/f3d/.tsan.supp"}),"."]}),"\n",(0,l.jsx)(n.li,{children:"Run all tests."}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"how-to-locally-generate-the-jekyll-based-website",children:"How to locally generate the jekyll based website"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Install ",(0,l.jsx)(n.code,{children:"ruby"})," and make sure ruby binaries directory is added to your ",(0,l.jsx)(n.code,{children:"PATH"})]}),"\n",(0,l.jsxs)(n.li,{children:["Install jekyll and all dependencies: ",(0,l.jsx)(n.code,{children:"gem install jekyll jekyll-remote-theme jekyll-relative-links jekyll-seo-tag jekyll-optional-front-matter jekyll-titles-from-headings"})]}),"\n",(0,l.jsxs)(n.li,{children:["Run jekyll locally: ",(0,l.jsx)(n.code,{children:"jekyll server"})]}),"\n",(0,l.jsxs)(n.li,{children:["Open ",(0,l.jsx)(n.a,{href:"http://127.0.0.1:4000/",children:"http://127.0.0.1:4000/"})," in a browser"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Please note the favicon and search bar are not working locally, this is expected."}),"\n",(0,l.jsx)(n.h1,{id:"how-to-locally-generate-the-doxygen-documentation",children:"How to locally generate the doxygen documentation"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Install Python, pip and doxygen"}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"pip install sphinx sphinx-book-theme exhale"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"sphinx-build -M html ./library/doxygen /path/to/build"})}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"/path/to/build"})," directory now contains a html website"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var l=t(6540);const o={},s=l.createContext(o);function i(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);