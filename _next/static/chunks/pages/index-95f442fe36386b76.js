(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(6048)}])},6048:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return pages}});var l=s(5893),a=s(5675),n=s.n(a),i=s(961),A={src:"https://hongxuan1994.github.io/standcon-web/_next/static/media/standcon_logo.1c5d3941.png",height:3e3,width:3e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA2klEQVR42mOQZbBnYkACVlx+TP78CSxe/FEscEEdDudYZoYYbxNFT3EGbMBZ0mtNpmnYf0eGoD8MDA4tDAyZYWwM8VEMjAwQ0301nefPCDf5vyLb9/+kULP/LV6e/7OsXf+rCZn6MkCAxbqC6Lz/xyfP/LmkoeJ3vr3R/0Z/k//uajatDDWxTawMDOoec9tLQjoS6763lNZWMzDoNjEwOO5S5rIxZLAW9xJIZkjWN5RavoxBP/c/j07dGQxHJjIkttordl0uj4n7H+te+o6BYbsQAwMDg61gEgsA5Tg/cya357cAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},r={src:"https://hongxuan1994.github.io/standcon-web/_next/static/media/background.cf0d22c5.jpg",height:223,width:626,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAABAX/2gAMAwEAAhADEAAAAIkXU//EABwQAAEEAwEAAAAAAAAAAAAAAAIBAwQRAAUSIv/aAAgBAQABPwCO+4OolgnNE6F+Uz//xAAZEQADAAMAAAAAAAAAAAAAAAABAhEAA1H/2gAIAQIBAT8AOxxI7Cjuf//EABkRAAIDAQAAAAAAAAAAAAAAAAECABEhQv/aAAgBAwEBPwByaTeZ/9k=",blurWidth:8,blurHeight:3},hero=()=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(i.Z,{className:"flex flex-wrap ",children:(0,l.jsxs)("div",{className:"flex relative justify-center items-center w-full",children:[(0,l.jsx)(n(),{src:r,width:0,height:0,className:"bg-cover absolute opacity-100 z-0 w-full h-full",alt:"Hero Illustration",loading:"eager",placeholder:"blur"}),(0,l.jsx)(n(),{src:A,width:500,height:500,className:"object-cover z-10",alt:"Hero Illustration",loading:"eager",placeholder:"blur"})]})})}),c=s(3247),o=s(5669),h=s(7294),timer=e=>{let[t,s]=(0,h.useState)({days:"00",hours:"00",minutes:"00",seconds:"00"}),getTimeDifference=e=>{let t=new Date().getTime(),l=e-t;l<0?(s({days:"00",hours:"00",minutes:"00",seconds:"00"}),clearInterval()):s({days:Math.floor(l/864e5)>=10?Math.floor(l/864e5):"0".concat(Math.floor(l/864e5)),hours:Math.floor(l%864e5/36e5)>=10?Math.floor(l%864e5/36e5):"0".concat(Math.floor(l%864e5/36e5)),minutes:Math.floor(l%36e5/6e4)>=10?Math.floor(l%36e5/6e4):"0".concat(Math.floor(l%36e5/6e4)),seconds:Math.floor(l%6e4/1e3)>=10?Math.floor(l%6e4/1e3):"0".concat(Math.floor(l%6e4/1e3))})},a=(0,h.useCallback)(()=>{let t=e.countdate,s=new Date(t);setInterval(()=>{getTimeDifference(s.getTime())},1e3)},[]);return(0,h.useEffect)(()=>{a()},[a]),(0,l.jsxs)("div",{className:"flex max-lg:hidden lg:col-span-2 justify-center",children:[(0,l.jsxs)("div",{className:"flex flex-col mr-20",children:[(0,l.jsx)("div",{className:"mb-5 flex justify-between items-center",children:(0,l.jsx)("span",{className:"text-7xl max-xl:text-5xl font-semibold text-gray-100",children:null==t?void 0:t.days})}),(0,l.jsx)("span",{className:"items-center text-xs sm:text-2xl text-center font-medium text-gray-100",children:(null==t?void 0:t.days)==1?"Day":"Days"})]}),(0,l.jsxs)("div",{className:"flex flex-col mr-20",children:[(0,l.jsx)("div",{className:"mb-5 flex justify-between items-center",children:(0,l.jsx)("span",{className:"text-7xl max-xl:text-5xl font-semibold text-gray-100",children:null==t?void 0:t.hours})}),(0,l.jsx)("span",{className:"items-center text-xs sm:text-2xl text-center font-medium text-gray-100",children:(null==t?void 0:t.hours)==1?"Hour":"Hours"})]}),(0,l.jsxs)("div",{className:"flex flex-col mr-20",children:[(0,l.jsx)("div",{className:"mb-5 flex justify-between items-center",children:(0,l.jsx)("span",{className:"text-7xl max-xl:text-5xl font-semibold text-gray-100",children:null==t?void 0:t.minutes})}),(0,l.jsx)("span",{className:"items-center text-xs sm:text-2xl text-center font-medium text-gray-100",children:(null==t?void 0:t.minutes)==1?"Minute":"Minutes"})]}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("div",{className:"mb-5 flex justify-between items-center",children:(0,l.jsx)("span",{className:"text-7xl max-xl:text-5xl font-semibold text-gray-100",children:null==t?void 0:t.seconds})}),(0,l.jsx)("span",{className:"items-center text-xs sm:text-2xl text-center font-medium text-gray-100",children:(null==t?void 0:t.seconds)==1?"Second":"Seconds"})]})]})},league=e=>{e.name;let t=e.date,s=e.date1;return e.format,e.prize1,e.prize2,e.prize3,(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(i.Z,{children:(0,l.jsxs)("div",{className:"pt-5 pb-5 lg:grid lg:grid-cols-3 items-center justify-center w-full h-full px-14 rounded-2xl bg-[#1D1546]",children:[(0,l.jsxs)("div",{className:"lg:col-span-1 justify-center",children:[(0,l.jsx)("div",{className:"lg:mb-5 content-center text-center",children:(0,l.jsx)("span",{className:"text-5xl max-lg:text-3xl font-semibold text-white",children:t})}),(0,l.jsx)("div",{className:"lg:mb-5 content-center text-center",children:(0,l.jsx)("span",{className:"text-s max-lg:text-m font-semibold text-white",children:"Venue: Suntec Singapore Convention & Exhibition Centre, Nicoll Room 1,2,3"})})]}),(0,l.jsx)(timer,{countdate:s})]})})})},mechanic=e=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(i.Z,{children:(0,l.jsxs)("ol",{className:"items-center lg:flex h-auto",children:[(0,l.jsxs)("li",{className:"w-full h-40 mb-6 sm:mb-0",children:[(0,l.jsxs)("div",{className:"flex items-center max-lg:justify-center",children:[(0,l.jsx)("div",{className:"z-10 flex items-center justify-center w-12 h-12 lg:w-6 lg:h-6 rounded-full ring-0 ring-[#1D1546] bg-[#1D1546] sm:ring-7 shrink-0",children:(0,l.jsx)("svg",{className:"lg:w-6 lg:h-6 w-12 h-12 text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",children:(0,l.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2",d:"M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})})}),(0,l.jsx)("div",{className:"hidden lg:flex w-full h-0.5 bg-gray-700"})]}),(0,l.jsxs)("div",{className:"mt-3 max-lg:text-center",children:[(0,l.jsx)("h3",{className:"text-xl mb-2 font-semibold text-white",children:"Conference"}),(0,l.jsx)("p",{className:"mr-5 text-base font-normal text-white",children:"Talks by renowned experts who are from various cybersecurity domains including Red Teaming, Blue Teaming and more."})]})]}),(0,l.jsxs)("li",{className:"w-full h-40 mb-6 sm:mb-0",children:[(0,l.jsxs)("div",{className:"flex items-center max-lg:justify-center",children:[(0,l.jsx)("div",{className:"z-10 flex items-center justify-center w-12 h-12 lg:w-6 lg:h-6 rounded-full ring-0 ring-[#1D1546] bg-[#1D1546] sm:ring-7 shrink-0",children:(0,l.jsx)("svg",{className:"w-12 h-12 lg:w-6 lg:h-6 text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z",clipRule:"evenodd"})})}),(0,l.jsx)("div",{className:"hidden lg:flex w-full h-0.5 bg-gray-700"})]}),(0,l.jsxs)("div",{className:"mt-3 max-lg:text-center",children:[(0,l.jsx)("h3",{className:"text-xl mb-2 font-semibold text-white",children:"Workshops"}),(0,l.jsx)("p",{className:"text-base font-normal text-white",children:"Short training courses where participants can gain new skills or knowledge to develop their expertise, career, or research."})]})]}),(0,l.jsxs)("li",{className:"w-full h-40 mb-6 sm:mb-0",children:[(0,l.jsxs)("div",{className:"flex sm:flex-row-reverse items-center max-lg:justify-center",children:[(0,l.jsx)("div",{className:"z-10 flex items-center justify-center w-12 h-12 lg:w-6 lg:h-6 rounded-full ring-0 ring-[#1D1546] bg-[#1D1546] sm:ring-7 shrink-0",children:(0,l.jsx)("svg",{className:"w-12 h-12 lg:w-6 lg:h-6 text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z",clipRule:"evenodd"})})}),(0,l.jsx)("div",{className:"hidden lg:flex w-full h-0.5 bg-gray-700"})]}),(0,l.jsxs)("div",{className:"text-right mt-3 max-lg:text-center",children:[(0,l.jsx)("h3",{className:"text-xl mb-2 font-semibold text-white",children:"Projects Corner"}),(0,l.jsx)("p",{className:"text-base font-normal text-white",children:"A dedicated project corner where participants can explore and learn about interesting projects created by students"})]})]}),(0,l.jsxs)("li",{className:"w-full h-40 mb-6 sm:mb-0",children:[(0,l.jsxs)("div",{className:"flex sm:flex-row-reverse items-center max-lg:justify-center",children:[(0,l.jsx)("div",{className:"z-10 flex items-center justify-center w-12 h-12 lg:w-6 lg:h-6 rounded-full ring-0 ring-[#1D1546] bg-[#1D1546] sm:ring-7 shrink-0",children:(0,l.jsx)("svg",{className:"w-12 h-12 lg:w-6 lg:h-6 text-gray-800 text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z",clipRule:"evenodd"})})}),(0,l.jsx)("div",{className:"hidden lg:flex w-full bg-gray-200 h-0.5 bg-gray-700"})]}),(0,l.jsxs)("div",{className:"text-right mt-3 max-lg:text-center",children:[(0,l.jsx)("h3",{className:"text-xl mb-2 font-semibold text-white",children:"Networking"}),(0,l.jsx)("p",{className:"ml-5 text-base font-normal text-white",children:"Network with our sponsors and participants to gain more insights about cybersecurity and make long lasting friendship!"})]})]})]})})});let d={"Elite Sponsors":{color:"text-[#EEBA2B]",logos:[{src:"https://hongxuan1994.github.io/standcon-web/_next/static/media/CSA.5140e9a9.png",height:500,width:900,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAe0lEQVR4nGN8KGZq+e/VaQnuvkm/RAtz5f//+/eVgZGRmYGBgR+INzM+9gxL+Lt9Fy/3tC4mkcxU7f///3MBJW4D8V0gfscIFOD/9fKlHIuQ0B8mVta/QD4TIyNI+D8LUMFvxj9fvrIzc3MJAjnMQEEuqCQTkP8HiO8BALgLNIEzdOrdAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4}]},"Diamond Sponsors":{color:"text-[#59CCEB]",logos:[{src:"https://hongxuan1994.github.io/standcon-web/_next/static/media/DSO.fdc78093.png",height:1458,width:2542,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAlklEQVR42mO4/fk/IwMQlC65kpE179KxDYfuO/3//1/t568/Cv/+/dNnAAPN9WJFi66Upcy9tPv9p+8JQAWJQMlQIC5nYKg8ZC1Zc8SEAQqAkvJArPv37z89EBukYBYDEMzd/8SxbdP98NylN8P6t90TZwCCe88/MzMwVx3uZqg7mus/89LqiDlX1sTOu1oeNPsqH8xEAA9FUNJronWfAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5},{src:"https://hongxuan1994.github.io/standcon-web/_next/static/media/offsec.225657f4.png",height:420,width:1647,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAARElEQVR4nGM06D4798KXv0++lBqc4OZmNf7//z8rAwPDByB+D8RPGL2Dzpffefrn9cndesf5edlEgAreASVEgBik8BMA/pIbcSUUfDwAAAAASUVORK5CYII=",blurWidth:8,blurHeight:2}]},"Gold Sponsors":{color:"text-[#FFA243]",logos:[{src:"https://hongxuan1994.github.io/standcon-web/_next/static/media/govtech.5f61074b.png",height:685,width:1181,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAQAAADSmGXeAAAAQUlEQVR42kXBMQ5AQBQA0SESlUJjGysqxZaECPe/1sRvZN/jZ+/q5ohNbMHJBBYqc5zx9HH39TDFDrOLxcvbAeADcR0d+4+3KTkAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},{src:"https://hongxuan1994.github.io/standcon-web/_next/static/media/dis.9b820b5a.png",height:565,width:1650,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAZUlEQVR42mN4X+El+6i7RPpBZ77w33RGz7/pDElAOgtI1wFxEcOr+mjFDwWWuo+bkqX/ZEl5AAUT/qQzFgIV1QNxJcOb5kQRhj//WW5Na+X7ksYg9yWT0/ptJrvap0xW1dfpbFwAm+kqy39btJQAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3}]},"Silver Sponsors":{color:"text-[#d051e9]",logos:[]},"Premier Sponsors":{color:"text-[#E93AAF]",logos:[{src:"https://hongxuan1994.github.io/standcon-web/_next/static/media/cyberark.7514543c.png",height:911,width:4066,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAQAAADPnVVmAAAAJ0lEQVR42mP4Z/xP/p/cP9N/Zv9s/iX+c2IACsgAhfT+aQOh2T8tAElJEu0BCOCIAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2}]},"Venue Sponsor":{color:"text-white",logos:[{src:"https://hongxuan1994.github.io/standcon-web/_next/static/media/suntec.29d27eff.png",height:1073,width:1950,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAhElEQVR4nGN89eCm6LOnb9MFhfl3yalr3f3z6+cPZlY2bgYGhp9A/I3x5vlzWQ/vPJoqLi2+Wc/SYuG/v38FGZmY/gElOYD4MOOnl4+EHj9+FSEgyHdISkn12////3gYGBh/ASVZgfgN4/////mADEYg5v3/7x8rUDcTkP0DKM4JpN8DAGTEM0tMmppzAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4}]},"Supported By":{color:"text-white",logos:[{src:"https://hongxuan1994.github.io/standcon-web/_next/static/media/div0.4fed7f63.png",height:540,width:540,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAqklEQVR42mMgCgQERzK+fPkq4smTpwpPnj6VevnyZTCKghcvX2YDcRRQQfar168rgQrSXr58lQBX8OrVq9jXr1+Hv3n7tvzp02eJr169Dnv56lUEXMGNm7f0gLq7Tp0+o3fv3n0NILvz5q1bCnAFd+/ey7577177latX82/dvlNy+87ddqDCdLiCW7duqwAFdM5fuCgGVCwLZGuCaLDk48dPGHH57tGjx4wACTxq/01BDakAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}]}};var components_sponsor=e=>(0,l.jsx)(i.Z,{children:Object.keys(d).map(e=>{var t;return(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"grid uppercase ".concat(d[e].color," justify-center align-center font-bold text-2xl m-5"),children:e}),(0,l.jsx)("div",{className:"grid ".concat(1==(t=d[e].logos.length)?"grid-cols-1":2==t?"grid-cols-2":t>2?"grid-cols-3":void 0," row-span-1"),children:d[e].logos.length>0?d[e].logos.map((t,s)=>(0,l.jsx)("div",{className:"".concat(d[e].logos.length<2?"col-span-3":"col-span-1"," content-center"),keys:s,children:(0,l.jsx)(n(),{src:t,width:200,height:200,className:"mx-auto"},s)})):(0,l.jsx)("div",{className:"grid col-span-5 text-white font-bold justify-center align-center",children:"Coming soon!"})})]},e)})}),x=s(4505),pages=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.Z,{}),(0,l.jsx)(o.Z,{pretitle:"DIV0-N0H4TS",title:"STANDCON 2025",children:"#STANDCON #STANDCON2025"}),(0,l.jsx)(hero,{}),(0,l.jsx)(league,{name:"Day 1",date:"6 March 2025",date1:"2025-03-06T09:00:00.000+08:00",format:"Conference"}),(0,l.jsx)(o.Z,{title:"STANDCON Programmes"}),(0,l.jsx)(mechanic,{}),(0,l.jsx)(o.Z,{title:"Our Sponsors"}),(0,l.jsx)(components_sponsor,{}),(0,l.jsx)(x.Z,{})]})}},function(e){e.O(0,[61,255,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);