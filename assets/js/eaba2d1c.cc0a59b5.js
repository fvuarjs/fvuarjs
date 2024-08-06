"use strict";(self.webpackChunkfvuarjs=self.webpackChunkfvuarjs||[]).push([[120],{6822:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=t(4848),s=t(8453);const a={sidebar_position:1},i="Simple React Usage",o={id:"basic-usage/simple-react-usage",title:"Simple React Usage",description:"This documentation is currently in early access, information and features may change.",source:"@site/docs/basic-usage/simple-react-usage.mdx",sourceDirName:"basic-usage",slug:"/basic-usage/simple-react-usage",permalink:"/docs/basic-usage/simple-react-usage",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Basic Usage",permalink:"/docs/category/basic-usage"},next:{title:"Simple Static HTML Usage",permalink:"/docs/basic-usage/simple-static-html-usage"}},c={},l=[];function u(e){const n={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"simple-react-usage",children:"Simple React Usage"}),"\n",(0,r.jsx)(n.admonition,{title:"Early Access",type:"danger",children:(0,r.jsx)(n.p,{children:"This documentation is currently in early access, information and features may change."})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.p,{children:"When our button is clicked, the onClick event will trigger the showAlert function and we will have our wonderful alert. Here is a very simple usage example."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:'title="usage.jsx"',children:"import Fvuar from 'fvuarjs';\r\n\r\nconst App = () => {\r\n    Fvuar.configure({\r\n        MAXTIME: 10 // Change the maximum time alerts can stay on screen.\r\n    })\r\n\r\n    const showAlert = () => {\r\n        // highlight-start\r\n        Fvuar.new({\r\n            theme: \"success\",\r\n            position: \"top-right\",\r\n            text: \"This is a message of success!\",\r\n            displayTime: 10, // We told him to disappear after 10 seconds. But if we set it to 11, it will give an error because it will exceed MAXTIME.\r\n            css: { backgroundColor: 'lightgreen', color: 'darkgreen' }, // If you don't like our theme, you can add your own css rules, most css rules are available.\r\n            clickToClose: true\r\n        });\r\n        // highlight-end\r\n    };\r\n\r\n    return (\r\n        <div>\r\n            <button onClick={showAlert}>Show Alert</button>\r\n        </div>\r\n    );\r\n};\r\n\r\nexport default App;\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(6540);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);