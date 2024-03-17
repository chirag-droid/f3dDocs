"use strict";(self.webpackChunkf_3_d_app=self.webpackChunkf_3_d_app||[]).push([[975],{112:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var d=i(4848),l=i(8453);const s={},t="Getting started guide",c={id:"dev/GETTING_STARTED",title:"Getting started guide",description:"This is a getting started guide, aimed to people that are not used",source:"@site/docs/dev/GETTING_STARTED.md",sourceDirName:"dev",slug:"/dev/GETTING_STARTED",permalink:"/docs/dev/GETTING_STARTED",draft:!1,unlisted:!1,editUrl:"https://github.com/f3d-app/f3d/tree/main/www/docs/dev/GETTING_STARTED.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to generate the full coverage report",permalink:"/docs/dev/GENERATE"},next:{title:"Governance Policy",permalink:"/docs/dev/GOVERNANCE"}},r={},a=[{value:"Linux",id:"linux",level:2},{value:"Install dependencies",id:"install-dependencies",level:3},{value:"Debian/Ubuntu/Mint",id:"debianubuntumint",level:4},{value:"Fedora/Centos/RedHat",id:"fedoracentosredhat",level:4},{value:"Arch Linux",id:"arch-linux",level:4},{value:"Compile F3D",id:"compile-f3d",level:3},{value:"Windows",id:"windows",level:2},{value:"Install Dependencies",id:"install-dependencies-1",level:4},{value:"Recover F3D sources",id:"recover-f3d-sources",level:4},{value:"Install dependencies using vcpkg",id:"install-dependencies-using-vcpkg",level:4},{value:"Build F3D",id:"build-f3d",level:4},{value:"Run",id:"run",level:4},{value:"macOS",id:"macos",level:2},{value:"Install Xcode",id:"install-xcode",level:3},{value:"Install Homebrew",id:"install-homebrew",level:3},{value:"Install dependencies",id:"install-dependencies-2",level:3},{value:"Compile F3D",id:"compile-f3d-1",level:3}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"getting-started-guide",children:"Getting started guide"}),"\n",(0,d.jsxs)(n.p,{children:["This is a getting started guide, aimed to people that are not used\nto C++ programming, configuring and compiling. If you are already used\nto such processes, you may be looking for our ",(0,d.jsx)(n.a,{href:"/docs/dev/BUILD",children:"build guide"}),"."]}),"\n",(0,d.jsx)(n.p,{children:"This guide will help you to compile your own version of F3D with required dependencies.\nOptional dependencies or covered in the build guide."}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["If you are using ",(0,d.jsx)(n.a,{href:"#linux",children:"Linux"})]}),"\n",(0,d.jsxs)(n.li,{children:["If you are using ",(0,d.jsx)(n.a,{href:"#windows",children:"Windows"})]}),"\n",(0,d.jsxs)(n.li,{children:["If you are using ",(0,d.jsx)(n.a,{href:"#macos",children:"macOS"})]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"linux",children:"Linux"}),"\n",(0,d.jsx)(n.p,{children:"Note: The following steps were tested with Ubuntu 23 and ArchLinux but\nshould work for other OSes as stated, as long as listed packages are available."}),"\n",(0,d.jsx)(n.h3,{id:"install-dependencies",children:"Install dependencies"}),"\n",(0,d.jsx)(n.p,{children:"First make sure your system is up-to-date,\nthen install the required dependencies using the terminal."}),"\n",(0,d.jsx)(n.h4,{id:"debianubuntumint",children:"Debian/Ubuntu/Mint"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"sudo apt update\nsudo apt upgrade\nsudo apt install build-essential git git-lfs cmake libvtk9-dev\n"})}),"\n",(0,d.jsx)(n.h4,{id:"fedoracentosredhat",children:"Fedora/Centos/RedHat"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"sudo yum update\nsudo yum install make automake gcc gcc-c++ kernel-devel git git-lfs cmake vtk\n"})}),"\n",(0,d.jsx)(n.h4,{id:"arch-linux",children:"Arch Linux"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"sudo pacman -Syu\nsudo pacman -S base-devel git git-lfs cmake vtk nlohmann-json hdf5 netcdf fmt verdict openmpi glew ospray boost libxcursor\n"})}),"\n",(0,d.jsx)(n.h3,{id:"compile-f3d",children:"Compile F3D"}),"\n",(0,d.jsx)(n.p,{children:"Open a terminal."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"mkdir f3d\ncd f3d\ngit clone https://github.com/f3d-app/f3d src\nmkdir build\ncd build\ncmake ../src\nmake\n"})}),"\n",(0,d.jsx)(n.p,{children:"You can then simply run F3D from the command line:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"./bin/f3d\n"})}),"\n",(0,d.jsx)(n.h2,{id:"windows",children:"Windows"}),"\n",(0,d.jsx)(n.p,{children:"Note: The following steps were tested with Visual Studio Community 2022 using Windows 10, but should also work for other versions"}),"\n",(0,d.jsx)(n.h4,{id:"install-dependencies-1",children:"Install Dependencies"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Download and install ",(0,d.jsx)(n.a,{href:"https://gitforwindows.org/",children:"git bash for windows"})]}),"\n",(0,d.jsxs)(n.li,{children:["Download and install ",(0,d.jsx)(n.a,{href:"https://cmake.org/download",children:"cmake"})]}),"\n",(0,d.jsxs)(n.li,{children:["Download and install ",(0,d.jsx)(n.a,{href:"https://visualstudio.microsoft.com/vs/community/",children:"Visual Studio 2022 Community Edition"})]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"recover-f3d-sources",children:"Recover F3D sources"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Open git bash"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sh",children:"cd C:\nmkdir dev\ncd dev\nmkdir f3d\ncd f3d\ngit clone https://github.com/f3d-app/f3d.git src\nmkdir build\n"})}),"\n",(0,d.jsx)(n.h4,{id:"install-dependencies-using-vcpkg",children:"Install dependencies using vcpkg"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Open git bash"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sh",children:"cd C:/dev\ngit clone https://github.com/Microsoft/vcpkg.git\ncd vcpkg\ngit fetch origin c9140a3b500812ad3206317885860d9553b93f13\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Open cmd"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sh",children:"cd C:\\dev\n.\\vcpkg\\bootstrap-vcpkg.bat\ncmake -B .\\f3d\\build -S .\\f3d\\src -DCMAKE_TOOLCHAIN_FILE=C:\\dev\\vcpkg\\scripts\\buildsystems\\vcpkg.cmake\n"})}),"\n",(0,d.jsx)(n.p,{children:"Note: Last command will take a while. It download, compile and install all dependencies, including\nmany optional ones."}),"\n",(0,d.jsx)(n.h4,{id:"build-f3d",children:"Build F3D"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Open cmd"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sh",children:"cd C:\\dev\\f3d\\build\ncmake .\ncmake --build .\n"})}),"\n",(0,d.jsx)(n.h4,{id:"run",children:"Run"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Double click on the ",(0,d.jsx)(n.code,{children:"C:\\dev\\f3d\\build\\bin_Debug\\f3d.exe"})," executable"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"macos",children:"macOS"}),"\n",(0,d.jsx)(n.p,{children:"Note: The following steps were tested with macOS Catalina using Xcode 12.4, but should also work for other versions"}),"\n",(0,d.jsx)(n.h3,{id:"install-xcode",children:"Install Xcode"}),"\n",(0,d.jsx)(n.p,{children:"There are different ways to install Xcode, you can use the AppStore or download it\nfrom apple developer website and then extract and install it."}),"\n",(0,d.jsx)(n.h3,{id:"install-homebrew",children:"Install Homebrew"}),"\n",(0,d.jsx)(n.p,{children:"Open a terminal."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n(echo; echo \'eval "$(/opt/homebrew/bin/brew shellenv)"\') >> ~/.zprofile\neval "$(/opt/homebrew/bin/brew shellenv)"\n'})}),"\n",(0,d.jsx)(n.h3,{id:"install-dependencies-2",children:"Install dependencies"}),"\n",(0,d.jsx)(n.p,{children:"Open a terminal."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"brew install git git-lfs cmake curl vtk\ngit lfs install\n"})}),"\n",(0,d.jsx)(n.p,{children:"Note: Homebrew is downloading, compiling and installing all vtk dependencies.\nThis command may take a very long time."}),"\n",(0,d.jsx)(n.h3,{id:"compile-f3d-1",children:"Compile F3D"}),"\n",(0,d.jsx)(n.p,{children:"Open a terminal."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"mkdir f3d\ncd f3d\ngit clone https://github.com/f3d-app/f3d src\nmkdir build\ncd build\ncmake ../src\nmake\n"})}),"\n",(0,d.jsx)(n.p,{children:"You can then simply run F3D from the command line:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"./bin/f3d.app/Contents/MacOS/f3d\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>c});var d=i(6540);const l={},s=d.createContext(l);function t(e){const n=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),d.createElement(s.Provider,{value:n},e.children)}}}]);