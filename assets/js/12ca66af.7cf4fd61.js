"use strict";(self.webpackChunkf_3_d_app=self.webpackChunkf_3_d_app||[]).push([[543],{1426:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var i=t(4848),s=t(8453);const r={sidebar_position:3},d="Testing",l={id:"dev/TESTING",title:"Testing",description:"F3D has an expansive suite of tests, you may want to run them locally,",source:"@site/docs/dev/TESTING.md",sourceDirName:"dev",slug:"/dev/TESTING",permalink:"/f3dDocs/docs/dev/TESTING",draft:!1,unlisted:!1,editUrl:"https://github.com/f3d-app/f3d/tree/main/www/docs/dev/TESTING.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"Build guide",permalink:"/f3dDocs/docs/dev/BUILD"},next:{title:"How to generate the full coverage report",permalink:"/f3dDocs/docs/dev/GENERATE"}},o={},a=[{value:"CMake Options",id:"cmake-options",level:2},{value:"Running the tests",id:"running-the-tests",level:2},{value:"Testing architecture",id:"testing-architecture",level:2},{value:"Application layer",id:"application-layer",level:3},{value:"Library layer",id:"library-layer",level:3},{value:"Bindings layer",id:"bindings-layer",level:3},{value:"VTKExtensions layer",id:"vtkextensions-layer",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"testing",children:"Testing"}),"\n",(0,i.jsx)(n.p,{children:"F3D has an expansive suite of tests, you may want to run them locally,\neither to validate your build or because you are contributing to F3D and want to add/modify a test."}),"\n",(0,i.jsx)(n.h2,{id:"cmake-options",children:"CMake Options"}),"\n",(0,i.jsx)(n.p,{children:"There is a few CMake options to F3D testing configuration:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"BUILD_TESTING"}),": Enable the tests, off by default."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"F3D_TESTING_ENABLE_RENDERING_TESTS"}),": An option to enable/disable test that require rendering capabilities, on by default."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"F3D_TESTING_ENABLE_LONG_TIMEOUT_TESTS"}),": Certain tests can take some time to run, off by default, requires rendering tests."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"F3D_TESTING_DISABLE_DEFAULT_LIGHTS_TESTS_COMPARISON"}),": With VTK < 9.0.0, rendering can be very different, although not incorrect, so this option is provided, off by default."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"running-the-tests",children:"Running the tests"}),"\n",(0,i.jsx)(n.p,{children:"To run the tests, just use ctest from the build directory:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"ctest\n"})}),"\n",(0,i.jsx)(n.p,{children:"To run a specific test, use the -R ctest option:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"ctest -R PLY\n"})}),"\n",(0,i.jsx)(n.h2,{id:"testing-architecture",children:"Testing architecture"}),"\n",(0,i.jsx)(n.p,{children:"There is multiple layers of tests to ensure F3D test coverage is as high as possible"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Application layer"}),"\n",(0,i.jsx)(n.li,{children:"Library layer"}),"\n",(0,i.jsx)(n.li,{children:"Bindings layer"}),"\n",(0,i.jsx)(n.li,{children:"VTK Extension layer"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"When contributing to F3D, it is necessary that any new code is covered by at least one layer\nof test, but it could make sense to cover it with more if necessary."}),"\n",(0,i.jsx)(n.h3,{id:"application-layer",children:"Application layer"}),"\n",(0,i.jsxs)(n.p,{children:["All application test are just a command line run by ctest using the ",(0,i.jsx)(n.code,{children:"f3d"})," executable.\nctest then check the output for any failure. Most of these tests are just using the ",(0,i.jsx)(n.code,{children:"--output"}),"\nand ",(0,i.jsx)(n.code,{children:"--ref"})," F3D option in order to check if a rendering behave correctly with specific options."]}),"\n",(0,i.jsxs)(n.p,{children:["Everything is handled in ",(0,i.jsx)(n.code,{children:"application/testing/CMakeLists.txt"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Usually, adding a test is a simple as adding a line like this one:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"f3d_test(NAME TestName DATA datafile.ext ARGS --args-to-test DEFAULT_LIGHTS)\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"NAME"})," should be the name of the test, which must be unique"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"DATA"})," should be a file in ",(0,i.jsx)(n.code,{children:"testing/data"})," directory, though adding new file is possible"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ARGS"})," should be the F3D options to pass to the f3d executable, if any"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"DEFAULT_LIGHTS"})," is expected when performing baselines comparison"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Once the new test has been added, configure and build F3D, then run the test once:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"ctest -R TestName\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The test will fail but an image output will be generated in you build in ",(0,i.jsx)(n.code,{children:"Testing/Temporary/TestName.png"}),".\nVisually check that the generated file looks as expected, then add it to the F3D sources in ",(0,i.jsx)(n.code,{children:"testing/baselines"}),".\nRerun the test, it should now pass."]}),"\n",(0,i.jsx)(n.h3,{id:"library-layer",children:"Library layer"}),"\n",(0,i.jsxs)(n.p,{children:["When for some reason adding a test in the application layer is not possible, it is possible\nto add a C++ test in the library layer. These tests are simple C++ methods that should return\n",(0,i.jsx)(n.code,{children:"EXIT_SUCCESS"})," or ",(0,i.jsx)(n.code,{children:"EXIT_FAILURE"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Everything is handled in ",(0,i.jsx)(n.code,{children:"library/testing"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["To add a test, create a new ",(0,i.jsx)(n.code,{children:"TestSDKName.cxx"})," file containing a ",(0,i.jsx)(n.code,{children:"int TestSDKName(int argc, char* argv[])"})," method,\nthen implement your test in C++ using the ",(0,i.jsx)(n.a,{href:"../libf3d/README.md",children:"libf3d"})," API.\nThen add you new file to ",(0,i.jsx)(n.code,{children:"src/library/testing/CMakeLists.txt"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"It is supported to read file as input and perform image comparison against baselines as an output, see other tests as examples."}),"\n",(0,i.jsx)(n.h3,{id:"bindings-layer",children:"Bindings layer"}),"\n",(0,i.jsx)(n.p,{children:"The libf3d supports multiple bindings, including Python, Java and Javascript."}),"\n",(0,i.jsxs)(n.p,{children:["When improving/modifying these bindings, it is necessary to also improve/modify the bindings tests accordingly.\nPlease take a look into ",(0,i.jsx)(n.code,{children:"<bindings>/testing"})," for examples to follow."]}),"\n",(0,i.jsx)(n.h3,{id:"vtkextensions-layer",children:"VTKExtensions layer"}),"\n",(0,i.jsxs)(n.p,{children:["When for some reason adding a test in the application or library layer is not possible, it is possible\nto add a C++ test in the VTKExtensions layer. These tests are simple C++ methods that should return\n",(0,i.jsx)(n.code,{children:"EXIT_SUCESS"})," or ",(0,i.jsx)(n.code,{children:"EXIT_FAILURE"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Everything is handled in ",(0,i.jsx)(n.code,{children:"library/VTKExtensions/ModuleName/Testing"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["To add a test, first identify which VTKExtensions module you need to add a test into,\nthen create a new ",(0,i.jsx)(n.code,{children:"TestName.cxx"})," file containing a ",(0,i.jsx)(n.code,{children:"int TestName(int argc, char* argv[])"})," method,\nthen implement your test in C++ using VTK and F3D VTKExtensions modules.\nThen add you new file to ",(0,i.jsx)(n.code,{children:"library/VTKExtensions/ModuleName/Testing/CMakeLists.txt"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"It is supported to read file as input if needed, see other tests as examples."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>l});var i=t(6540);const s={},r=i.createContext(s);function d(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);