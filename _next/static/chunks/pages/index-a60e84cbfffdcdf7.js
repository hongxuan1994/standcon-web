(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(4340)}])},647:function(e,t){"use strict";t.Z={src:"https://hongxuan1994.github.io/standcon-web/_next/static/media/standcon_logo.1c5d3941.png",height:3e3,width:3e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA2klEQVR42mOQZbBnYkACVlx+TP78CSxe/FEscEEdDudYZoYYbxNFT3EGbMBZ0mtNpmnYf0eGoD8MDA4tDAyZYWwM8VEMjAwQ0301nefPCDf5vyLb9/+kULP/LV6e/7OsXf+rCZn6MkCAxbqC6Lz/xyfP/LmkoeJ3vr3R/0Z/k//uajatDDWxTawMDOoec9tLQjoS6763lNZWMzDoNjEwOO5S5rIxZLAW9xJIZkjWN5RavoxBP/c/j07dGQxHJjIkttordl0uj4n7H+te+o6BYbsQAwMDg61gEgsA5Tg/cya357cAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},4340:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return pages}});var i=s(5893),a=s(5675),l=s.n(a),n=s(961),A=s(647),r={src:"https://hongxuan1994.github.io/standcon-web/_next/static/media/bg.ba48d39f.jpg",height:1080,width:1080,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAABAX/2gAMAwEAAhADEAAAAIgfS//EAB8QAAECBgMAAAAAAAAAAAAAAAIDBAABERIVISIxUf/aAAgBAQABPwAca3biuoFyxD3MeHmqx//EABoRAQACAwEAAAAAAAAAAAAAAAECIQADIjH/2gAIAQIBAT8A1CwO5lpUk8rP/8QAHREAAQIHAAAAAAAAAAAAAAAAAQIRAAMSISJBQv/aAAgBAwEBPwCarNqU2CeRsPH/2Q==",blurWidth:8,blurHeight:8},hero=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(n.Z,{className:"flex flex-wrap ",children:(0,i.jsxs)("div",{className:"flex relative justify-center items-center w-full",children:[(0,i.jsx)(l(),{src:r,width:0,height:0,className:"bg-contain absolute opacity-100 z-0 max-sm:w-4/5 max-sm:h-4/5 md:w-full md:h-full",alt:"Hero Illustration",loading:"eager",placeholder:"blur"}),(0,i.jsx)(l(),{id:"heroSC",src:A.Z,width:500,height:500,className:"object-contain z-10 max-sm:w-4/6 max-sm:h-4/6",alt:"Hero Illustration",loading:"eager",placeholder:"blur"})]})})}),o=s(5669),c=s(7294),timer=e=>{let[t,s]=(0,c.useState)({days:"00",hours:"00",minutes:"00",seconds:"00"}),getTimeDifference=e=>{let t=new Date().getTime(),i=e-t;i<0?(s({days:"00",hours:"00",minutes:"00",seconds:"00"}),clearInterval()):s({days:Math.floor(i/864e5)>=10?Math.floor(i/864e5):"0".concat(Math.floor(i/864e5)),hours:Math.floor(i%864e5/36e5)>=10?Math.floor(i%864e5/36e5):"0".concat(Math.floor(i%864e5/36e5)),minutes:Math.floor(i%36e5/6e4)>=10?Math.floor(i%36e5/6e4):"0".concat(Math.floor(i%36e5/6e4)),seconds:Math.floor(i%6e4/1e3)>=10?Math.floor(i%6e4/1e3):"0".concat(Math.floor(i%6e4/1e3))})},a=(0,c.useCallback)(()=>{let t=e.countdate,s=new Date(t);setInterval(()=>{getTimeDifference(s.getTime())},1e3)},[]);return(0,c.useEffect)(()=>{a()},[a]),(0,i.jsxs)("div",{className:"flex max-lg:hidden lg:col-span-2 justify-center",children:[(0,i.jsxs)("div",{className:"flex flex-col mr-20",children:[(0,i.jsx)("div",{className:"mb-5 flex justify-between items-center",children:(0,i.jsx)("span",{className:"text-7xl max-xl:text-5xl font-semibold text-gray-100",children:null==t?void 0:t.days})}),(0,i.jsx)("span",{className:"items-center text-xs sm:text-2xl text-center font-medium text-gray-100",children:(null==t?void 0:t.days)==1?"Day":"Days"})]}),(0,i.jsxs)("div",{className:"flex flex-col mr-20",children:[(0,i.jsx)("div",{className:"mb-5 flex justify-between items-center",children:(0,i.jsx)("span",{className:"text-7xl max-xl:text-5xl font-semibold text-gray-100",children:null==t?void 0:t.hours})}),(0,i.jsx)("span",{className:"items-center text-xs sm:text-2xl text-center font-medium text-gray-100",children:(null==t?void 0:t.hours)==1?"Hour":"Hours"})]}),(0,i.jsxs)("div",{className:"flex flex-col mr-20",children:[(0,i.jsx)("div",{className:"mb-5 flex justify-between items-center",children:(0,i.jsx)("span",{className:"text-7xl max-xl:text-5xl font-semibold text-gray-100",children:null==t?void 0:t.minutes})}),(0,i.jsx)("span",{className:"items-center text-xs sm:text-2xl text-center font-medium text-gray-100",children:(null==t?void 0:t.minutes)==1?"Minute":"Minutes"})]}),(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsx)("div",{className:"mb-5 flex justify-between items-center",children:(0,i.jsx)("span",{className:"text-7xl max-xl:text-5xl font-semibold text-gray-100",children:null==t?void 0:t.seconds})}),(0,i.jsx)("span",{className:"items-center text-xs sm:text-2xl text-center font-medium text-gray-100",children:(null==t?void 0:t.seconds)==1?"Second":"Seconds"})]})]})},league=e=>{let t=e.date,s=e.date1;e.format;let[a,l]=(0,c.useState)(!1);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(n.Z,{children:(0,i.jsxs)("div",{className:"pt-5 pb-5 lg:grid lg:grid-cols-3 items-center justify-center w-full h-full px-14 rounded-2xl bg-[#1D1546]",children:[(0,i.jsxs)("div",{className:"lg:col-span-1 justify-center",children:[(0,i.jsx)("div",{className:"lg:mb-5 content-center text-center",children:(0,i.jsx)("span",{className:"text-5xl max-lg:text-3xl font-semibold text-white",children:t})}),(0,i.jsx)("div",{className:"lg:grid lg:col-span-1",children:(0,i.jsxs)("div",{className:"content-center text-center",children:[(0,i.jsx)("button",{type:"button",className:"h-10 px-4 font-medium text-sm rounded-md text-white bg-[#1F1DAC]",onClick:()=>{l(!0),document.body.classList.add("overflow-y-hidden")},children:"More Details"}),a&&(0,i.jsx)("div",{className:"fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-20",children:(0,i.jsx)("div",{className:"relative p-4 w-full max-w-2xl max-h-full",children:(0,i.jsxs)("div",{className:"relative rounded-lg shadow bg-[#1D1546]",children:[(0,i.jsx)("div",{className:"items-center justify-between rounded-t border-gray-600",children:(0,i.jsxs)("button",{type:"button",className:"absolute top-3 right-3 text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white",onClick:()=>{l(!a),document.body.classList.remove("overflow-y-hidden")},children:[(0,i.jsx)("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:(0,i.jsx)("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),(0,i.jsx)("span",{className:"sr-only",children:"Close modal"})]})}),(0,i.jsxs)("div",{className:"p-4 md:p-5 space-y-4",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{className:"text-xl font-semibold text-[#FFA243]",children:"Venue"}),(0,i.jsxs)("p",{className:"text-base text-white leading-relaxed",children:["Nicoll Rooms 1,2 and 3 @ ",(0,i.jsx)("a",{className:"underline text-blue-600 hover:text-blue-800 visited:text-purple-600",href:"https://www.google.com/maps/place/Suntec+Singapore+Convention+%26+Exhibition+Centre/@1.2950554,103.8553178,17z/data=!3m1!5s0x3fb59e9506c5b431:0x1e88ecbbf96d0a1e!4m6!3m5!1s0x31da19af38dd2bf3:0xd63e8cb2dacf54c7!8m2!3d1.2936739!4d103.8572447!16zL20vMDVqcHo1?entry=ttu&g_ep=EgoyMDI1MDEwNy4wIKXMDSoASAFQAw%3D%3D",children:"Suntec Singapore Convention & Exhibition Centre"})]})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{className:"text-xl font-semibold text-[#FFA243]",children:"Time"}),(0,i.jsx)("p",{className:"text-base text-white leading-relaxed",children:"9am - 6pm"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{className:"text-xl font-semibold text-[#FFA243]",children:"Super Early Bird Sales End Date"}),(0,i.jsx)("p",{className:"text-base text-white leading-relaxed",children:"31 January 2025"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{className:"text-xl font-semibold text-[#FFA243]",children:"Early Bird Sales End Date"}),(0,i.jsx)("p",{className:"text-base text-white leading-relaxed",children:"22 February 2025"})]})]})]})})})]})})]}),(0,i.jsx)(timer,{countdate:s})]})})})},mechanic=e=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(n.Z,{children:(0,i.jsxs)("ol",{className:"items-center lg:flex h-auto",children:[(0,i.jsxs)("li",{className:"w-full sm:h-64 sm:mx-25 lg:h-40 mb-6 sm:mb-0",children:[(0,i.jsxs)("div",{className:"flex items-center max-lg:justify-center",children:[(0,i.jsx)("div",{className:"z-10 flex items-center justify-center w-12 h-12 lg:w-6 lg:h-6 rounded-full ring-0 ring-[#1D1546] bg-[#1D1546] sm:ring-7 shrink-0",children:(0,i.jsx)("svg",{className:"lg:w-6 lg:h-6 w-12 h-12 text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",children:(0,i.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2",d:"M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})})}),(0,i.jsx)("div",{className:"hidden lg:flex w-full h-0.5 bg-gray-700"})]}),(0,i.jsxs)("div",{className:"mt-3 max-lg:text-center",children:[(0,i.jsx)("h3",{className:"text-xl mb-2 font-semibold text-white",children:"Conference"}),(0,i.jsx)("p",{className:"sm:mr-5 text-base font-normal text-white",children:"Talks by renowned experts who are from various cybersecurity domains including Red Teaming, Blue Teaming, and more."})]})]}),(0,i.jsxs)("li",{className:"w-full sm:h-64 lg:h-40 mb-6 sm:mb-0",children:[(0,i.jsxs)("div",{className:"flex items-center max-lg:justify-center",children:[(0,i.jsx)("div",{className:"z-10 flex items-center justify-center w-12 h-12 lg:w-6 lg:h-6 rounded-full ring-0 ring-[#1D1546] bg-[#1D1546] sm:ring-7 shrink-0",children:(0,i.jsx)("svg",{className:"w-12 h-12 lg:w-6 lg:h-6 text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24",children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z",clipRule:"evenodd"})})}),(0,i.jsx)("div",{className:"hidden lg:flex w-full h-0.5 bg-gray-700"})]}),(0,i.jsxs)("div",{className:"mt-3 max-lg:text-center",children:[(0,i.jsx)("h3",{className:"text-xl mb-2 font-semibold text-white",children:"Workshops"}),(0,i.jsx)("p",{className:"text-base font-normal text-white",children:"Dive into hands-on training sessions designed to boost your expertise, advance your career, and sharpen your research skills through interactive learning experiences."})]})]}),(0,i.jsxs)("li",{className:"w-full sm:h-64 lg:h-40 mb-6 sm:mb-0",children:[(0,i.jsxs)("div",{className:"flex sm:flex-row-reverse items-center max-lg:justify-center",children:[(0,i.jsx)("div",{className:"z-10 flex items-center justify-center w-12 h-12 lg:w-6 lg:h-6 rounded-full ring-0 ring-[#1D1546] bg-[#1D1546] sm:ring-7 shrink-0",children:(0,i.jsx)("svg",{className:"w-12 h-12 lg:w-6 lg:h-6 text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24",children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z",clipRule:"evenodd"})})}),(0,i.jsx)("div",{className:"hidden lg:flex w-full h-0.5 bg-gray-700"})]}),(0,i.jsxs)("div",{className:"text-right mt-3 max-lg:text-center",children:[(0,i.jsx)("h3",{className:"text-xl mb-2 font-semibold text-white",children:"Projects Corner"}),(0,i.jsx)("p",{className:"text-base font-normal text-white",children:"Discover innovative student-created projects in our showcase space. Get inspired and learn directly from fellow students who've turned their ideas into reality."})]})]}),(0,i.jsxs)("li",{className:"w-full sm:h-64 lg:h-40 mb-6 sm:mb-0",children:[(0,i.jsxs)("div",{className:"flex sm:flex-row-reverse items-center max-lg:justify-center",children:[(0,i.jsx)("div",{className:"z-10 flex items-center justify-center w-12 h-12 lg:w-6 lg:h-6 rounded-full ring-0 ring-[#1D1546] bg-[#1D1546] sm:ring-7 shrink-0",children:(0,i.jsx)("svg",{className:"w-12 h-12 lg:w-6 lg:h-6 text-gray-800 text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24",children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z",clipRule:"evenodd"})})}),(0,i.jsx)("div",{className:"hidden lg:flex w-full bg-gray-200 h-0.5 bg-gray-700"})]}),(0,i.jsxs)("div",{className:"text-right mt-3 max-lg:text-center",children:[(0,i.jsx)("h3",{className:"text-xl mb-2 font-semibold text-white",children:"Networking"}),(0,i.jsx)("p",{className:"sm:ml-5 text-base font-normal text-white",children:"Connect with our industry sponsors and fellow participants to expand your cybersecurity knowledge while building meaningful professional relationships that last."})]})]})]})})});let d={"Elite Sponsors":{color:"text-[#EEBA2B]",logos:[{src:"https://hongxuan1994.github.io/standcon-web/_next/static/media/CSA.8bacb320.png",height:375,width:880,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAYElEQVR4nGN8KGpa/ff16V+8M+bwiaQnW/7/9+8PAyPjJwYGhndAvJfx9bRZFn9fvhbhsDD9zu/hygVUwAVU8Awo+QKIpRn////PBWSIAzE7UJKVkYnpH5DNBRRnA9I3AQpEJZu+OFjyAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:3}],size:[270]},"Diamond Sponsors":{color:"text-[#59CCEB]",logos:[{src:"https://hongxuan1994.github.io/standcon-web/_next/static/media/DSO.fdc78093.png",height:1458,width:2542,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAlklEQVR42mO4/fk/IwMQlC65kpE179KxDYfuO/3//1/t568/Cv/+/dNnAAPN9WJFi66Upcy9tPv9p+8JQAWJQMlQIC5nYKg8ZC1Zc8SEAQqAkvJArPv37z89EBukYBYDEMzd/8SxbdP98NylN8P6t90TZwCCe88/MzMwVx3uZqg7mus/89LqiDlX1sTOu1oeNPsqH8xEAA9FUNJronWfAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5},{src:"https://hongxuan1994.github.io/standcon-web/_next/static/media/offsec.225657f4.png",height:420,width:1647,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAARElEQVR4nGM06D4798KXv0++lBqc4OZmNf7//z8rAwPDByB+D8RPGL2Dzpffefrn9cndesf5edlEgAreASVEgBik8BMA/pIbcSUUfDwAAAAASUVORK5CYII=",blurWidth:8,blurHeight:2},{src:"https://hongxuan1994.github.io/standcon-web/_next/static/media/crpo.0a10fa97.png",height:1100,width:1500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAsUlEQVR42mOAgZ8MDBxfLl1S+fzzp/L///+Z4BLfnj0Fc74+eqD3++ev0p+/fqc/f/XeDCT29v0nJoY729exgDif7+wT//HlvcP3H79c373/qAYSe/X6LSMDEmB9+PCh3d9/f6X//fnNBRe9MHdO1J2TJ+3uPX+ldO3mfYEH9+/xnjt3nuvOnTu89+7d42G4e+pI5d1rVyLv3n9gdf3yBa5bt27z3b17lx+ogO/evXs8AG+ZYFkmwxAfAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:6}],size:[200,200,300]},"Gold Sponsors":{color:"text-[#FFA243]",logos:[{src:"https://hongxuan1994.github.io/standcon-web/_next/static/media/govtech.466209a6.png",height:133,width:369,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAQAAAAEwYbDAAAAN0lEQVR42g3DuwmAMAAFwBf8lTZCRBSsbFxAS/ff6TAcF52x6dvDaYjd4/W5rTY1iWK2mFSX8gOMyRjZUKycWQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3},{src:"https://hongxuan1994.github.io/standcon-web/_next/static/media/dis.883dc77f.png",height:545,width:1590,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAaklEQVR4nGN8V+Wv9I1P/s/f/3+/yzyYbs3A8E+UgYGRn4HhPxAzcDK+rotSYft4m+OjqOFbqWeb9Rj/Ppf4D1TACJQEKuBnfNmeKSJeMe39vcn1PKKXm/gZWbhkfzL8fcPK8I/h1z+G5wBRSCVFGEJx0AAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3},{src:"https://hongxuan1994.github.io/standcon-web/_next/static/media/csit.7e0d31d0.png",height:1336,width:2567,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAfElEQVR4nB3GMQrCMBSA4f8lJYN10MHiILi4eYeOOol38VCCu3dxcBGdRKRLojWWl4YOH3yih12Bf1ZY9+HvHWLBFMKqWXAJd9E9NZ4lhoaSDUrILJEjb26i59MckTXf0BJbw2isTGeRevsAXqIplTlV1mW/zA2STojx2gMB2yrPSxMOSgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4}],size:[250,200,200]},"Silver Sponsors":{color:"text-[#d051e9]",logos:[{src:"https://hongxuan1994.github.io/standcon-web/_next/static/media/tig.af669a33.png",height:5906,width:4961,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAQAAACfDS2NAAAAbUlEQVR42j3BsQoBARgA4H+QWI2Sl0ApAysWgzKoy10ZDGYPIJsX8CYGD2DlEuU1bv7utvu+EDpmJqa6Igz9fD29vYxDJvfw8VdYhYOLk6PU3i6s5e5uzq42YamsL0JPYiuTSPVDQ8vA3EhbswJivVEos6IqagAAAABJRU5ErkJggg==",blurWidth:7,blurHeight:8},{src:"https://hongxuan1994.github.io/standcon-web/_next/static/media/kaspersky.18a7f814.png",height:477,width:2500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAANklEQVR42gXAsQ1AABAF0PflglJsaBNbWM8CKgqNnMSxb3gko/aJAaW7yFl4yYyFvrWLBJNYf8YGDGsyQiUOAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2}],size:[150,300]},"Premier Sponsors":{color:"text-[#E93AAF]",logos:[{src:"https://hongxuan1994.github.io/standcon-web/_next/static/media/cyberark.644afde1.png",height:1609,width:7267,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAQAAADPnVVmAAAAJElEQVR42mP45/1P45/SPzswDP9ny/DP65/aP5l/umBo+U8TAFBMEzk7gyvzAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2},{src:"https://hongxuan1994.github.io/standcon-web/_next/static/media/aisp.aa6011e8.png",height:157,width:457,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAX0lEQVR42hXJqw2DYBhA0V+yRk27R1NVRdJBSA0WSQJL8JiCYZB4MBj47iUcexLH8VI7hvHJuvahNRE1UAJVQv9CizZoEWcUwIj+gDwxz281Y9+/LEsed2zbx2l6qNkFhR9OXnl5w0UAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3}],size:[200,200]},"Venue Sponsor":{color:"text-white",logos:[{src:"https://hongxuan1994.github.io/standcon-web/_next/static/media/suntec.29d27eff.png",height:1073,width:1950,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAhElEQVR4nGN89eCm6LOnb9MFhfl3yalr3f3z6+cPZlY2bgYGhp9A/I3x5vlzWQ/vPJoqLi2+Wc/SYuG/v38FGZmY/gElOYD4MOOnl4+EHj9+FSEgyHdISkn12////3gYGBh/ASVZgfgN4/////mADEYg5v3/7x8rUDcTkP0DKM4JpN8DAGTEM0tMmppzAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4}],size:[200]},"Supported By":{color:"text-white",logos:[{src:"https://hongxuan1994.github.io/standcon-web/_next/static/media/div0.f134f2fe.png",height:2e3,width:4e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAQAAAAZxLZ7AAAAR0lEQVR42gXAsQpEABgA4H+66TZd3US8ibewmWxkl5TNLBlsirzll8LPodUolG5TGC0Gq8fmdIXabNXrJHZV+MhlUl9/iXgBDyMrQeVHn+wAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4},{src:"https://hongxuan1994.github.io/standcon-web/_next/static/media/hrs.70be6caf.png",height:1100,width:1400,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAx0lEQVR4nGNkkLSYpyXFl/jn798/ooK8zD9+/WZ4/f7rX2YmRpYnH37MZWRg4JhXXFqUyM7O/ldJUZb57dv3DP/+//97/cZd5kXzd4IUSMzJyY9NZmFh/iUnKwVW8P8/w9/3Hz6yTZ+yfjYjo5TF8v/f/0ToqgozKMmJMzAyMjK8fvOR4ej+mwyCSkLLGS3t/Qvef/rmzcvN8Y2Ph5P5y7cff3/8/P2fmZmJ59fvvxsZ////z8XAwMAExCDACsR/gRjEZwHiTwC95E+jW9GiFAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:6},{src:"https://hongxuan1994.github.io/standcon-web/_next/static/media/sherpa.36b7d16d.png",height:413,width:1827,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAARUlEQVR4nGNkOHWr1l+E68kGRenTv//9E2NhZGRiYGD4CsScQPyTkWHW4a4gWf4taz10H/3++4+fhYnxL1DiNxBzAfEfAPQcFV9T+ZdtAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2},{src:"https://hongxuan1994.github.io/standcon-web/_next/static/media/ddl.63d23050.png",height:200,width:1800,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAQAAABJCSfIAAAAGUlEQVR42mP8l8DAzvCd4T2DCAMTw0eGPwAtZgVQqf2DLAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:1},{src:"https://hongxuan1994.github.io/standcon-web/_next/static/media/whitehat.17626c44.png",height:450,width:1200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAQAAAAEwYbDAAAAPklEQVR42mP4xfPb7RfvX47fUr9Ff0v+FmX4FfX730/3P7p//H8H/3b+rcTwQ/mHxneuP9J/FP+o/5H4wwAA1xIb6sg05MAAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3},{src:"https://hongxuan1994.github.io/standcon-web/_next/static/media/cyberhats.e135a859.png",height:1136,width:1136,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA3klEQVR42mMAAX09fSYGKFizZo0YlAkRc3VxZQbRZWVljq4uLueDg4MfdnZ2WjBAACMDCFRX16iHh4X9j4mP/w/k/udiY/sfGBjYxQADDra2yR1dXf8f3Lz5a/vGjb8nTJz4v7W1dQUDElBqbGl5ffnUqY97tm37nZWXdwEuExcby7N58+a1S5cuebt85cp3S5Yu/bx69erXu3buXAWU5mWoqCjnW7p06R2gwP19e/ec2L1r55GNGzbc3rhxw72YmBg+hsamJpB3eICYdd2W7bwr1m3iBbFBYnPmzGUCAO7cXGac/g05AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},{src:"https://hongxuan1994.github.io/standcon-web/_next/static/media/malwarevillage.1ba57457.png",height:1230,width:1250,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAiUlEQVR42o2NMQrCQBBFZwMi7DhDLO0U9A6KhY2ddl7CxrvYeIwY3SBez+cupEiVB5+B9z+M/Ol0FmTAR7W4Vq0SeKntybpTW73VtgKJjsLzAHlCPMg9RTsKcCsKD/lNrKet+o1cv3E+QfVdJtWLQHlp1M8ypFHLSwYHshN4FldAhiJ9Q5a9G8MPPhgdIrAv+pQAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}],size:[200,200,350,200,200,200,200]},"Organised By":{color:"text-white",logos:[{src:"https://hongxuan1994.github.io/standcon-web/_next/static/media/n0h4ts.8a471f96.png",height:1100,width:1100,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA9ElEQVR42mNITExkZgCCyZMmq0dFRW1JTk6+snnzZjkGCGAEk729fUohwSGfjExM/wO5/+Xl5F5ERESkMsCAn69fU319/f9jR4587+vp+VVUVPw/Ly/v3exZs9lgaoLmLVz4/9W9e7+vnDnzf/LUqX/PnTljApaZMGGCCVB3WWFB4fepQInu7u7/aWlpj/v6+iKB7lFiWLVq1cz9+/f/37Bhw/85c+b8nzJlyv/Zs2f/X7du3f/29vZmhubm5uz58+dvWrZsWeXixYuT1q9fHwnUXQFUvHnatGmJDP///xcBYiMglgFiZSDWBGIVIDb5//+/IACzVIRonu5TGQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}],size:[200]}};var components_sponsor=e=>(0,i.jsx)(n.Z,{children:Object.keys(d).map(e=>{var t;return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"grid uppercase ".concat(d[e].color," justify-center align-center font-bold text-2xl m-5"),children:e}),(0,i.jsx)("div",{className:"grid sm:grid-cols-1 lg:".concat(1==(t=d[e].logos.length)?"grid-cols-1":2==t?"grid-cols-2":t>2?"grid-cols-3":void 0," gap-10 row-span-1"),children:d[e].logos.length>0?d[e].logos.map((t,s)=>(0,i.jsx)("div",{className:"grid ".concat(d[e].logos.length<2?"col-span-3":"col-span-1"," content-center m-5"),keys:s,children:(0,i.jsx)(l(),{src:t,width:d[e].size[s],height:d[e].size[s],className:"mx-auto"},s)})):(0,i.jsx)("p",{className:"text-xl text-white font-bold text-center italic",children:"Coming Soon"})})]},e)})}),h=s(4505);let g=[{title:"Activities Corner Update! 7 March",content:(0,i.jsxs)(i.Fragment,{children:["AI x Web3: RAG agent for smart contract vulnerability detection - 9:30am - 12:30pm",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"QIris: Quantum Rainbow Table - 2:30pm - 3:30pm",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Gen-AI Integrated Threat Intelligence Platform - 4:30pm - 5:30pm",(0,i.jsx)("br",{})]})},{title:"Activities Corner Update! 6 March",content:(0,i.jsxs)(i.Fragment,{children:["Deepfake Detection System - 10:30am - 11:30am",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"DeepVysion+ - 2:30pm - 3:30pm",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Kaspersky Interactive Protection Simulation (KIPS) - 3:30pm - 5:30pm",(0,i.jsx)("br",{})]})},{title:"AI x Web3: RAG agent for smart contract vulnerability detection",content:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("br",{}),"x3Sec x Sherpasec will be showcasing AI x Web3: RAG agent for smart contract vulnerability detection at our activities corner on 7 March, 9:30am to 12:30pm!"]})},{title:"Luck Draw Prizes (Bingo Card)",content:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("br",{}),"Each day, there will be a total of 3 prizes to be won:",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"1st Prize: 90 Days Offsec Courses + 1 Exam Attempt",(0,i.jsx)("br",{}),"2nd Prize: SGD$150 LandingPad Voucher",(0,i.jsx)("br",{}),"3rd Prize: 1 Month Hack The Box VIP Subscription",(0,i.jsx)("br",{})]})},{title:"Villages!",content:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("br",{}),"This year, STANDCON2025 has a total of 3 villages in the lineup!",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Malware Village by Lena Yu",(0,i.jsx)("br",{}),"Lock Picking Village by SMU WhiteHat Society",(0,i.jsx)("br",{}),"Flipper Zero Village by SiT-CYBERH4TS",(0,i.jsx)("br",{})]})}];var announcement=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(n.Z,{children:(0,i.jsxs)("div",{className:"grid grid-cols-1 gap-5 lg:grid-cols-3",children:[g.map(e=>(0,i.jsxs)("div",{className:"grid col-span-1 px-14 py-10 h-full w-full rounded-2xl bg-[#1D1546]",children:[(0,i.jsx)("p",{className:"text-2xl text-white max-lg:text-2xl font-semibold underline h-[80px] items-center flex",children:e.title}),(0,i.jsx)("p",{className:"text-m text-white align-top",children:e.content})]})),";"]})})}),x=s(689),m=s(7234);let u=[{question:"Where is STANDCON held?",answer:(0,i.jsx)(i.Fragment,{children:"It is held at Nicoll Rooms 1,2 and 3 @ Suntec Singapore Convention & Exhibition Centre"})},{question:"Can I attend STANDCON virtually?",answer:(0,i.jsx)(i.Fragment,{children:"No. STANDCON is a physical event"})},{question:"Are there lunch provided for the event?",answer:(0,i.jsx)(i.Fragment,{children:"Unfortunately as to keep our ticket price affordable, we are not able to provide lunch for STANDCON2025. We seek your kind understanding. But do support the restaurant around Suntec!"})},{question:"Do I need to be physically present for the lucky draw?",answer:(0,i.jsx)(i.Fragment,{children:"Yes, otherwise your prize will be forefeited and a redraw will happen"})}];var faq=()=>(0,i.jsx)(n.Z,{className:"!p-0",children:(0,i.jsx)("div",{className:"w-full max-w-2xl p-2 mx-auto rounded-2xl",children:u.map((e,t)=>(0,i.jsx)("div",{className:"mb-5",children:(0,i.jsx)(x.p,{children:t=>{let{open:s}=t;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(x.p.Button,{className:"flex items-center justify-between w-full px-4 py-4 text-lg text-left font-bold rounded-lg hover:bg-[#5E548E] focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 bg-[#1D1546] text-white",children:[(0,i.jsx)("span",{children:e.question}),(0,i.jsx)(m,{className:"".concat(s?"transform rotate-180":""," w-5 h-5 text-indigo-500")})]}),(0,i.jsx)(x.p.Panel,{className:"px-4 pt-4 pb-2 text-white",children:e.answer})]})}})},e.question))})}),pages=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{pretitle:"DIV0-N0H4TS",title:"STANDCON 2025",children:"#STANDCON #STANDCON2025"}),(0,i.jsx)(hero,{}),(0,i.jsx)(league,{name:"Day 1",date:"6 and 7 March 2025",date1:"2025-03-06T09:00:00.000+08:00",format:"Conference"}),(0,i.jsx)(o.Z,{title:"Announcement"}),(0,i.jsx)(announcement,{}),(0,i.jsx)(o.Z,{title:"STANDCON Programmes"}),(0,i.jsx)(mechanic,{}),(0,i.jsx)(o.Z,{pretitle:"FAQ",title:"Frequently Asked Questions"}),(0,i.jsx)(faq,{}),(0,i.jsx)(o.Z,{title:"Our Sponsors"}),(0,i.jsx)(components_sponsor,{}),(0,i.jsx)(h.Z,{})]})}},function(e){e.O(0,[61,841,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);