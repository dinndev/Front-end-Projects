(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],{22:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var l=a(1),c=a(0),r=a.n(c),s=a(35),n=a.n(s),i=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,76)).then((function(t){var a=t.getCLS,l=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),l(e),c(e),r(e),s(e)}))},o=(a(44),r.a.createContext());function x(e){var t=e.initialState,a=e.reducer,r=e.children;return Object(l.jsx)(o.Provider,{value:Object(c.useReducer)(a,t),children:r})}var d,u=function(){return Object(c.useContext)(o)},m=a(2),j=a(8),h=function(e){for(var t=[],a=new Map,l=0,c=Array.from(e);l<c.length;l++){var r=c[l];a.has(r.id)||(a.set(r.id,!0),t.push({id:r.id,image:r.cover_medium,title:r.title,trackLists:r.tracklist}))}return t},b=function(e){for(var t=Object(m.a)(new Set),a=new Map,l=0,c=Array.from(e);l<c.length;l++){var r=c[l];a.has(r.id)||(a.set(r.id,!0),t.push({id:r.id,image:r.album.cover_medium,title:r.title,duration:r.duration,artist:r.artist,preview:r.preview}))}return t},f={y:30,opacity:0},p={y:0,opacity:1},g={y:30,opacity:0},w=.6,v=.7,O=.7,y=["conan gray","ariana grande","justin bieber","rex orange county","alessia cara","jeremy sucker","troye sivan","lemon boy","lauv","lany","lorde","pentatonix","olivia rodrigo","joji","alec benjamin"],N={playLists:{},trackPlaying:{},playing:!1,imageUrl:"",trackLists:[],input:(d=y,y[Math.floor(Math.random()*d.length)]),likedTracks:[]},k=function(e,t){switch(t.type){case"SET_TOKEN":return Object(j.a)(Object(j.a)({},e),{},{token:t.token});case"SET_PLAYLIST":return Object(j.a)(Object(j.a)({},e),{},{playLists:t.playLists});case"SET_TRACKS":return Object(j.a)(Object(j.a)({},e),{},{trackLists:t.trackLists});case"SET_IMAGES":return Object(j.a)(Object(j.a)({},e),{},{imageUrl:t.imageUrl});case"SET_TRACK_PLAYING":return Object(j.a)(Object(j.a)({},e),{},{trackPlaying:t.trackPlaying});case"SET_PLAYING":return Object(j.a)(Object(j.a)({},e),{},{playing:t.playing});case"SET_INPUT":return Object(j.a)(Object(j.a)({},e),{},{input:t.input});case"SET_LIKED_TRACKS":return Object(j.a)(Object(j.a)({},e),{},{likedTracks:[].concat(Object(m.a)(e.likedTracks),[t.likedTracks])});default:return e}},T=(a(45),a(15)),A=[{title:"Home",url:"/",svg:Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",className:"w-4 h-4 fill-current",children:Object(l.jsx)("path",{d:"M23.951 4a1.5 1.5 0 00-.879.322L8.86 15.52A7.504 7.504 0 006 21.41V40.5C6 41.864 7.136 43 8.5 43h10c1.364 0 2.5-1.136 2.5-2.5v-10c0-.295.205-.5.5-.5h5c.295 0 .5.205.5.5v10c0 1.364 1.136 2.5 2.5 2.5h10c1.364 0 2.5-1.136 2.5-2.5V21.41a7.504 7.504 0 00-2.86-5.89L24.929 4.322A1.5 1.5 0 0023.95 4zM24 7.41l13.285 10.467A4.494 4.494 0 0139 21.41V40h-9v-9.5c0-1.915-1.585-3.5-3.5-3.5h-5c-1.915 0-3.5 1.585-3.5 3.5V40H9V21.41c0-1.38.63-2.679 1.715-3.533L24 7.41z"})})},{title:"Artists",url:"/liked",svg:Object(l.jsx)("svg",{className:"w-4 h-4 fill-current",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:Object(l.jsx)("path",{d:"M16 28.72a3 3 0 01-2.13-.88l-10.3-10.3a8.72 8.72 0 01-2.52-6.25 8.06 8.06 0 018.14-8A8.06 8.06 0 0115 5.68l1 1 .82-.82a8.39 8.39 0 0111-.89 8.25 8.25 0 01.81 12.36l-10.5 10.51a3 3 0 01-2.13.88zM9.15 5.28A6.12 6.12 0 004.89 7a6 6 0 00-1.84 4.33A6.72 6.72 0 005 16.13l10.3 10.3a1 1 0 001.42 0l10.51-10.52a6.25 6.25 0 001.77-4.8 6.18 6.18 0 00-2.43-4.55 6.37 6.37 0 00-8.37.71L16.71 8.8a1 1 0 01-1.42 0l-1.7-1.7a6.28 6.28 0 00-4.4-1.82z","data-name":"Layer 54"})})},{title:"Albums",url:"albums",svg:Object(l.jsxs)("svg",{className:"w-4 h-4 fill-current",viewBox:"0 0 92 92",xmlns:"http://www.w3.org/2000/svg",children:[Object(l.jsx)("path",{d:"M76.052 76.052h0A42.5 42.5 0 1188.5 46v0a42.362 42.362 0 01-12.448 30.052zM46 .5a45.5 45.5 0 100 91 45.5 45.5 0 000-91z",stroke:"#000"}),Object(l.jsx)("path",{d:"M56.254 56.252l-.001.001A14.5 14.5 0 1160.5 46v0a14.452 14.452 0 01-4.246 10.252zM46 28.5a17.5 17.5 0 100 34.999A17.5 17.5 0 0046 28.5z",stroke:"#000"})]})}];a(22);var S=function(){return Object(l.jsxs)("div",{className:"nav hidden lg:block w-1/4 lg:max-w-7xl bottom-0 text-sm bg-white",children:[Object(l.jsxs)("div",{className:" p-6 profile flex flex-col items-center",children:[Object(l.jsx)("img",{className:"rounded-full lg:w-14 lg:h-14 w-20 shadow-xl mb-2 h-20 object-cover",src:"https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",alt:"user"}),Object(l.jsx)("h2",{className:"profile-name font-bold text-md mt-2 font-lato leading-6",children:"Login"}),Object(l.jsx)("span",{className:"tracking-wide profile-email text-gray-400 text-xs"})]}),Object(l.jsx)("ul",{className:"flex flex-col items-center h-40 justify-around my-4 nav-list w-full ",children:A.map((function(e,t){return Object(l.jsxs)(T.c,{exact:!0,activeClassName:"nav-active",to:e.url,className:"flex w-3/5 font-lato font-bold text-secondary items-center hover:text-blue-600 text-sm ",children:[Object(l.jsx)("span",{className:"mr-4",children:e.svg}),Object(l.jsx)("h2",{children:e.title})]},t)}))})]})},L=a(4),z=a(3),C=a(38);var _=function(){var e=Object(C.a)(),t=e.register,a=e.handleSubmit,c=u(),r=Object(z.a)(c,2),s=(r[0].input,r[1]);return Object(l.jsx)("div",{className:" relative text-xs h-10 w-4/6 md:w-5/12 2xl:w-4/12 2xl:h-14 items-center 2xl:text-lg",children:Object(l.jsxs)("form",{onChange:a((function(e,t){s({type:"SET_INPUT",input:e.artist})})),onSubmit:a((function(e,t){s({type:"SET_INPUT",input:e.artist})})),className:"h-full w-full",children:[Object(l.jsx)("input",{name:"artist",className:"w-full border h-full text-xs lg:text-sm px-12 md:p-2 md:px-20 outline-none rounded-full",type:"text",ref:t({required:!0}),placeholder:"Search for songs, Artists etc.."}),Object(l.jsx)("button",{className:"ml-5 absolute left-1 top-0 mt-3 mr-4 2xl:mt-5 2xl:mr-6",children:Object(l.jsx)("svg",{className:"text-gray-400 h-4 w-4 fill-current outline-none",viewBox:"0 0 56.966 56.966",children:Object(l.jsx)("path",{d:"M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"})})})]})})};var E=function(){return Object(l.jsxs)("div",{className:"header w-full h-14 my-3 flex items-center justify-between",children:[Object(l.jsx)(_,{}),Object(l.jsxs)("div",{className:"nav-controls pl-4 md:pl-0 flex items-center w-2/6 sm:w-1/6 md:w-1/3 justify-between",children:[Object(l.jsxs)("svg",{className:"text-gray-400 fill-current w-4 h-4",viewBox:"0 0 512 512",children:[Object(l.jsx)("path",{d:"M256 0c-37.554 0-68.11 30.556-68.11 68.11v20.55h35.229V68.11c0-18.131 14.755-32.881 32.881-32.881 18.131 0 32.887 14.749 32.887 32.881v20.55h35.229V68.11C324.116 30.556 293.555 0 256 0zM304.147 429.205c0 26.228-21.337 47.565-47.56 47.565h-1.174c-26.222 0-47.56-21.337-47.56-47.565h-35.229c0 45.657 37.138 82.795 82.789 82.795h1.174c45.651 0 82.789-37.138 82.789-82.795h-35.229z"}),Object(l.jsx)("path",{d:"M483.952 422.623l-50.043-77.851v-99.928c0-99.071-79.812-179.67-177.908-179.67-98.102 0-177.908 80.599-177.908 179.67v99.928L28.05 422.617a17.616 17.616 0 0014.814 27.144h426.275a17.607 17.607 0 0015.454-9.171 17.596 17.596 0 00-.641-17.967zm-408.825-8.091l35.394-55.063a17.609 17.609 0 002.801-9.524V244.844c0-79.642 64.006-144.44 142.679-144.44 78.679 0 142.679 64.799 142.679 144.44v105.101c0 3.376.969 6.682 2.795 9.524l35.394 55.063H75.127z"})]}),Object(l.jsxs)("svg",{viewBox:"0 0 512 512",className:"text-gray-400 fill-current w-4 h-4",children:[Object(l.jsx)("path",{d:"M272.066 512h-32.133c-25.989 0-47.134-21.144-47.134-47.133v-10.871a206.698 206.698 0 01-32.097-13.323l-7.704 7.704c-18.659 18.682-48.548 18.134-66.665-.007l-22.711-22.71c-18.149-18.129-18.671-48.008.006-66.665l7.698-7.698A206.714 206.714 0 0158.003 319.2h-10.87C21.145 319.2 0 298.056 0 272.067v-32.134C0 213.944 21.145 192.8 47.134 192.8h10.87a206.755 206.755 0 0113.323-32.097L63.623 153c-18.666-18.646-18.151-48.528.006-66.665l22.713-22.712c18.159-18.184 48.041-18.638 66.664.006l7.697 7.697A206.893 206.893 0 01192.8 58.003v-10.87C192.8 21.144 213.944 0 239.934 0h32.133C298.056 0 319.2 21.144 319.2 47.133v10.871a206.698 206.698 0 0132.097 13.323l7.704-7.704c18.659-18.682 48.548-18.134 66.665.007l22.711 22.71c18.149 18.129 18.671 48.008-.006 66.665l-7.698 7.698a206.714 206.714 0 0113.323 32.097h10.87c25.989 0 47.134 21.144 47.134 47.133v32.134c0 25.989-21.145 47.133-47.134 47.133h-10.87a206.755 206.755 0 01-13.323 32.097l7.704 7.704c18.666 18.646 18.151 48.528-.006 66.665l-22.713 22.712c-18.159 18.184-48.041 18.638-66.664-.006l-7.697-7.697a206.893 206.893 0 01-32.097 13.323v10.871c0 25.987-21.144 47.131-47.134 47.131zM165.717 409.17a176.812 176.812 0 0045.831 19.025 14.999 14.999 0 0111.252 14.524v22.148c0 9.447 7.687 17.133 17.134 17.133h32.133c9.447 0 17.134-7.686 17.134-17.133v-22.148a14.999 14.999 0 0111.252-14.524 176.812 176.812 0 0045.831-19.025 15 15 0 0118.243 2.305l15.688 15.689c6.764 6.772 17.626 6.615 24.224.007l22.727-22.726c6.582-6.574 6.802-17.438.006-24.225l-15.695-15.695a15 15 0 01-2.305-18.242 176.78 176.78 0 0019.024-45.831 15 15 0 0114.524-11.251h22.147c9.447 0 17.134-7.686 17.134-17.133v-32.134c0-9.447-7.687-17.133-17.134-17.133H442.72a15 15 0 01-14.524-11.251 176.815 176.815 0 00-19.024-45.831 15 15 0 012.305-18.242l15.689-15.689c6.782-6.774 6.605-17.634.006-24.225l-22.725-22.725c-6.587-6.596-17.451-6.789-24.225-.006l-15.694 15.695a15 15 0 01-18.243 2.305 176.812 176.812 0 00-45.831-19.025 14.999 14.999 0 01-11.252-14.524v-22.15c0-9.447-7.687-17.133-17.134-17.133h-32.133c-9.447 0-17.134 7.686-17.134 17.133v22.148a14.999 14.999 0 01-11.252 14.524 176.812 176.812 0 00-45.831 19.025 15.002 15.002 0 01-18.243-2.305l-15.688-15.689c-6.764-6.772-17.627-6.615-24.224-.007l-22.727 22.726c-6.582 6.574-6.802 17.437-.006 24.225l15.695 15.695a15 15 0 012.305 18.242 176.78 176.78 0 00-19.024 45.831 15 15 0 01-14.524 11.251H47.134C37.687 222.8 30 230.486 30 239.933v32.134c0 9.447 7.687 17.133 17.134 17.133h22.147a15 15 0 0114.524 11.251 176.815 176.815 0 0019.024 45.831 15 15 0 01-2.305 18.242l-15.689 15.689c-6.782 6.774-6.605 17.634-.006 24.225l22.725 22.725c6.587 6.596 17.451 6.789 24.225.006l15.694-15.695c3.568-3.567 10.991-6.594 18.244-2.304z"}),Object(l.jsx)("path",{d:"M256 367.4c-61.427 0-111.4-49.974-111.4-111.4S194.573 144.6 256 144.6 367.4 194.574 367.4 256 317.427 367.4 256 367.4zm0-192.8c-44.885 0-81.4 36.516-81.4 81.4s36.516 81.4 81.4 81.4 81.4-36.516 81.4-81.4-36.515-81.4-81.4-81.4z"})]}),Object(l.jsx)("button",{className:"hidden md:block text-xs items-center h-10 bg-red-400 px-4 text-white rounded-full",children:"Upgrade Plan"})]})]})},M=a(5),I=a.n(M),P=a(14),V=a(7);var B=function(e){var t=e.image,a=e.title,c=(e.tracks,e.currentIndex,u()),r=Object(z.a)(c,2),s=r[0],n=(s.trackLists,s.playing,s.input,r[1]);return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("img",{onClick:function(){return n({type:"SET_INPUT",input:a})},className:"md:h-44 z-50 lg:w-40 xl:w-42 row xl:h-42 lg:h-40 md:w-44 2xl:w-64 2xl:h-64 2xl:mr-8 rounded-lg mr-5 row-start-1 w-48 h-48 cursor-pointer object-cover",src:t,alt:a})})},K=a(37),U=a.n(K);var R=function(e){var t=e.trackName,a=e.artist,r=e.duration,s=e.images,n=e.id,i=e.length,o=e.preview,x=(e.currentIndex,e.array,u()),d=Object(z.a)(x,2),m=d[0].likedTracks,j=d[1],h=Object(c.useRef)(1),b=function(){console.log(h.current),j({type:"SET_TRACK_PLAYING",trackPlaying:y}),j({type:"SET_PLAYING",playing:!0})},f=U()(r),p="".concat(f.minutes,":").concat(f.seconds),g=Object(c.useState)(!1),w=Object(z.a)(g,2),v=w[0],O=w[1],y=[{images:s,id:n,artist:a,trackName:t,duration:p,preview:o}];return Object(l.jsxs)("div",{ref:h,className:"track hover:bg-gray-200 transition-all text-xs sm:text-sm grid grid-cols-10 h-18 p-1 sm:h-16 justify-items-center items-center bg-white rounded-lg my-1 w-full",children:[Object(l.jsx)("span",{className:"font-bold text-xs text-secondary",children:i}),Object(l.jsx)("img",{className:"rounded-lg object-contain h-12 w-12",src:s,alt:a}),Object(l.jsx)("svg",{viewBox:"0 0 320.001 320.001",className:"z-10 h-3 w-3 fill-current cursor-pointer text-gray-300 col-span-1",onClick:b,children:Object(l.jsx)("path",{d:"M295.84 146.049l-256-144a16.026 16.026 0 00-15.904.128A15.986 15.986 0 0016 16.001v288a15.986 15.986 0 007.936 13.824A16.144 16.144 0 0032 320.001c2.688 0 5.408-.672 7.84-2.048l256-144c5.024-2.848 8.16-8.16 8.16-13.952s-3.136-11.104-8.16-13.952z"})}),Object(l.jsx)("p",{onClick:b,className:"z-0 cursor-pointer col-span-2 font-bold text-secondary",children:t}),Object(l.jsx)("p",{className:"col-span-2 text-gray-400 text-xs",children:a}),Object(l.jsx)("p",{className:"col-span-2 text-gray-400",children:p}),Object(l.jsx)("svg",{onClick:function(){O((function(e){return!e})),j(v?{type:"SET_LIKED_TRACKS",likedTracks:m.splice(m.indexOf(),1)}:{type:"SET_LIKED_TRACKS",likedTracks:y})},className:"transition-all ".concat(v?"text-red-500":"text-gray-300"," fill-current text-xs text-gray-300 h-5 w-5 cursor-pointer"),viewBox:"0 0 511.868 511.868",children:Object(l.jsx)("path",{d:"M470.45 69.262c-26.753-26.752-62.322-41.485-100.155-41.485-37.834 0-73.403 14.733-100.155 41.486l-14.205 14.205-14.205-14.205c-26.752-26.753-62.321-41.486-100.155-41.486-37.833 0-73.402 14.733-100.155 41.486-55.224 55.224-55.225 145.082-.002 200.308l214.525 214.521 214.51-214.521c55.221-55.227 55.22-145.085-.003-200.309z"})})]})};var G=function(e){var t=e.trackName,a=e.images,r=e.artist,s=e.preview,n=e.nextSong,i=e.prevSong,o=e.currentIndex,x=u(),d=Object(z.a)(x,2),m=d[0].playing,j=d[1],h=Object(c.useRef)();return Object(c.useEffect)((function(){m?h.current.play():h.current.pause()}),[m,s]),Object(l.jsxs)("div",{className:"transition player-board items-center w-full lg:h-full lg:justify-start xl:h-3/5 xl:justify-evenly xl:pt-2 xl:pb-10 lg:mt-0 mt-2 flex flex-col justify-center h-full",children:[Object(l.jsx)("audio",{loop:!0,src:s,ref:h}),Object(l.jsxs)("div",{className:" shadow-2xl transition mt-2 lg:mt-0 player items-center relative flex flex-col justify-evenly sm:w-2/5 w-9/12 md:w-3/5 xl:h-4/5 5 xl:w-3/4 lg:w-4/5 lg:h-2/4 p-2 h-4/5 rounded-xl",children:[Object(l.jsx)("img",{className:"track-album-art ".concat(m?"animate-music":"animate-none"," shadow-2xl object-fill md:w-32 md:h-32 2xl:w-56 2xl:h-56 lg:w-40 lg:h-40 my-2 rounded-full w-32 h-32 sm:w-36 sm:h-36 xl:w-44 xl:h-44"),src:a,alt:""}),Object(l.jsx)("div",{className:"bg-white lg:w-16 lg:h-16 2xl:w-20 2xl:h-20 circle xl:top-20 2xl:top-28 rounded-full w-12 h-12 md:top-14 lg:top-20 top-14 absolute"}),Object(l.jsx)("p",{className:"title text-xs sm:text-sm text-secondary font-bold",children:t}),Object(l.jsx)("p",{className:"album-name text-xs text-gray-400",children:r}),Object(l.jsx)("div",{className:"length flex justify-between px-4 text-gray-400 items-center h-10 text-xs w-full"})]}),Object(l.jsxs)("div",{className:" w-full controls flex lg:h-1/5 justify-center items-center",children:[Object(l.jsx)("svg",{onClick:i,className:"w-4 h-4 2xl:w-6 2xl:h-6 cursor-pointer fill-current  ".concat(0===o?"text-gray-300":"text-blue-600"),viewBox:"0 0 46 36",children:Object(l.jsx)("path",{d:"M41 .68L24.6 14V3.05a3 3 0 00-5-2.37l-18.51 15a3 3 0 000 4.74l18.51 15a3 3 0 005-2.37V22L41 35.32A3 3 0 0046 33V3.05a3 3 0 00-5-2.37z"})}),Object(l.jsx)("div",{className:"mx-6 wrapper 2xl:w-6 2xl:h-6 cursor-pointer flex items-center h-10 w-10 justify-center rounded-full bg-gray-100",children:Object(l.jsx)("div",{onClick:function(){j({type:"SET_PLAYING",playing:!m})},className:"circle-wrapper rounded-full bg-white w-7 h-7 items-center flex justify-center",children:m?Object(l.jsx)("svg",{className:"fill-current 2xl:w-6 2xl:h-6 text-blue-600 w-3 h-3",viewBox:"0 0 47.607 47.607",children:Object(l.jsx)("path",{d:"M17.991 40.976a6.631 6.631 0 01-13.262 0V6.631a6.631 6.631 0 0113.262 0v34.345zM42.877 40.976a6.631 6.631 0 01-13.262 0V6.631a6.631 6.631 0 0113.262 0v34.345z"})}):Object(l.jsx)("svg",{viewBox:"0 0 320.001 320.001",className:"h-3 w-3  2xl:w-6 2xl:h-6 fill-current cursor-pointer text-blue-600 col-span-1",children:Object(l.jsx)("path",{d:"M295.84 146.049l-256-144a16.026 16.026 0 00-15.904.128A15.986 15.986 0 0016 16.001v288a15.986 15.986 0 007.936 13.824A16.144 16.144 0 0032 320.001c2.688 0 5.408-.672 7.84-2.048l256-144c5.024-2.848 8.16-8.16 8.16-13.952s-3.136-11.104-8.16-13.952z"})})})}),Object(l.jsx)("svg",{onClick:n,className:"w-4 h-4 2xl:w-6 2xl:h-6 text-blue-600 cursor-pointer transform rotate-180 fill-current ",viewBox:"0 0 46 36",children:Object(l.jsx)("path",{d:"M41 .68L24.6 14V3.05a3 3 0 00-5-2.37l-18.51 15a3 3 0 000 4.74l18.51 15a3 3 0 005-2.37V22L41 35.32A3 3 0 0046 33V3.05a3 3 0 00-5-2.37z"})})]})]})},H=a(26),Y=a.n(H);a(71).config();var F=function(){var e=Object(c.useState)(!0),t=Object(z.a)(e,2),a=t[0],r=t[1],s=u(),n=Object(z.a)(s,2),i=n[0],o=i.playLists,x=(i.likedTracks,i.trackLists),d=i.trackPlaying,m=i.input,j=n[1],y=Object(c.useState)(0),N=Object(z.a)(y,2),k=N[0],T=N[1],A=function(){return T(k>=15?0:k+1)},S=function(){return 0===k?void 0:T(k-1)};return Object(c.useEffect)((function(){var e,t={method:"GET",url:"https://deezerdevs-deezer.p.rapidapi.com/search",params:{q:m,limit:20},headers:{"x-rapidapi-key":"9e6e4a5fbemsh25f0de29a34f716p1b8904jsn20779150cc15","x-rapidapi-host":"deezerdevs-deezer.p.rapidapi.com"}};return Y.a.request(t,{cancenToken:new Y.a.CancelToken((function(t){return e=t}))}).then(function(){var e=Object(P.a)(I.a.mark((function e(t){var a,l;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.data.data;case 2:a=e.sent,r(!1),l=[{images:a[k].album.cover_big,preview:a[k].preview,id:a[k].id,trackName:a[k].title,duration:a[k].duration,artist:a[k].artist.name}],j({type:"SET_PLAYLIST",playLists:a.map((function(e){return e.album}))}),j({type:"SET_TRACKS",trackLists:a}),j({type:"SET_PLAYING",playing:!1}),j({type:"SET_TRACK_PLAYING",trackPlaying:l});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.log(e)})),function(){return e()}}),[k,m]),Object(l.jsx)(V.a,{children:a?Object(l.jsx)("h2",{className:"font-bold h-10 text-md sm:text-lg text-left",children:"Loading..."}):Object(l.jsxs)("div",{className:"billboard-rows h-auto select-none w-full overflow-x-visible lg:overflow-hidden",children:[Object(l.jsx)(V.b.h2,{transition:{duration:w},initial:f,animate:p,exit:g,className:"font-bold h-10 text-md sm:text-lg text-left",children:"Albums"}),Object(l.jsx)(V.b.ul,{initial:f,transition:{duration:w},animate:p,exit:g,className:"items-center z-0 sm:h-1/3 md:h-1/4 lg:h-1/4 2xl:w-full xl:h-1/3 2xl: flex sm:justify-start overflow-y-hidden overflow-x-scroll w-full whitespace-nowrap h-2/6 rows",children:h(o).map((function(e){var t=e.image,a=e.title,c=e.trackLists,r=e.id;return Object(l.jsx)(B,{transition:{duration:v},image:t,tracks:c,title:a},r)}))}),Object(l.jsx)(V.b.p,{transition:{duration:O},initial:f,animate:p,exit:g,className:"font-bold h-7 lg:block hidden text-md sm:text-lg my-3 md:m-2 text-left",children:"Tracks"}),Object(l.jsxs)("div",{className:"flex-col lg:flex-row lg:h-full flex w-full h-1/2 md:h-3/4",children:[Object(l.jsx)(V.b.p,{transition:{duration:O},initial:f,animate:p,exit:g,className:"font-bold h-7 lg:hidden text-md sm:text-lg my-5 md:m-2 text-left",children:"Tracks"}),Object(l.jsx)(V.b.div,{transition:{duration:O},initial:f,animate:p,exit:g,className:"album-tracks mr-4 flex-col flex h-56 w-full lg:h-full sm:w-full lg:w-3/5 overflow-y-scroll",children:b(x).map((function(e,t,a){var c=e.id,r=e.duration,s=e.title,n=e.artist,i=e.image,o=e.preview;return Object(l.jsx)(R,{id:c,duration:r,trackName:s,artist:n.name,length:t+1,images:i,preview:o,array:a,currentIndex:k},c)}))}),Object(l.jsx)(V.b.div,{initial:f,animate:p,exit:g,transition:{duration:O},className:"player-board w-full lg:h-full sm:w-full lg:mt-0 md:mt-6 lg:w-2/5 flex flex-col bg-white rounded-b-xl md:rounded-xl md:h-1/2 h-full",children:Array.from(d).map((function(e,t){var a=e.artist,c=e.id,r=e.trackName,s=e.duration,n=e.images,i=e.preview,o=e.i;return Object(l.jsx)(G,{nextSong:A,prevSong:S,images:n,artist:a,id:c,trackName:r,duration:s,preview:i,i:o,firstI:t,currentIndex:k},"23423523")}))})]})]})})};var D=function(){var e=u(),t=Object(z.a)(e,2),a=t[0].trackLists,c=t[1],r=Object(m.a)(new Map(b(a).map((function(e){return[e.artist.name,e]}))).values());return Object(l.jsxs)(V.a,{children:[Object(l.jsx)(V.b.h1,{className:"font-lato my-8 text-secondary font-bold text-4xl",initial:f,transition:{duration:w},animate:p,exit:g,children:"Artists"},"AnimateH1"),0==r.length?Object(l.jsx)(V.b.h2,{initial:f,transition:{duration:v},animate:p,exit:g,className:"font-bold text-secondary h-10 text-md sm:text-lg text-left",children:"Search and discover artists."},"AnimteH2"):Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(V.b.ul,{initial:f,transition:{duration:v},animate:p,exit:g,className:"items-center sm:h-1/3 md:h-1/4 lg:h-1/4 2xl:w-full xl:h-1/3 2xl: flex flex-wrap justify-center lg:justify-start w-full h-2/6 rows",children:r.map((function(e){var t=e.artist,a=t.id,r=t.name,s=t.picture_medium;return Object(l.jsxs)(T.b,{className:"flex flex-col m-3 justify-center items-center",to:"/",children:[Object(l.jsx)("img",{onClick:function(){return c({type:"SET_INPUT",input:r})},className:"md:h-44 lg:w-40 xl:w-36 row xl:h-42 lg:h-36 md:w-44 2xl:w-64 2xl:h-64 rounded-full row-start-1 w-48 h-48 cursor-pointer object-cover",src:s,alt:r}),Object(l.jsx)("span",{className:"my-4 text-xs text-secondary  text-center font-lato font-medium",children:r})]},a)}))},"AnimteUl")})]})};var q=function(){var e=u(),t=Object(z.a)(e,2),a=t[0].playLists,c=t[1];return Object(l.jsxs)(V.a,{children:[Object(l.jsx)(V.b.h1,{className:"font-lato my-8 text-secondary font-bold text-4xl",initial:f,transition:{duration:w},animate:p,exit:g,children:"Albums"},"AnimateH1"),void 0===a.length?Object(l.jsx)(V.b.h2,{initial:f,transition:{duration:v},animate:p,exit:g,className:"font-bold text-secondary h-10 text-md sm:text-lg text-left",children:"Search and discover albums."},"AnimteH2"):Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(V.b.ul,{initial:f,transition:{duration:v},animate:p,exit:g,className:"items-center sm:h-1/3 md:h-1/4 lg:h-1/4 2xl:w-full xl:h-1/3 2xl: flex flex-wrap justify-center lg:justify-start w-full h-2/6 rows",children:h(a).map((function(e){var t=e.image,a=e.title,r=e.id;return Object(l.jsxs)(T.b,{className:"flex flex-col items-start",to:"/",children:[Object(l.jsx)("img",{onClick:function(){return c({type:"SET_INPUT",input:a})},className:"md:h-44 lg:w-40 xl:w-42 row xl:h-42 lg:h-40 md:w-44 2xl:w-64 2xl:h-64 2xl:mr-8 rounded-lg mr-5 row-start-1 w-48 h-48 cursor-pointer object-cover",src:t,alt:a}),Object(l.jsx)("span",{className:"my-4 text-xs text-secondary w-48 text-left font-lato font-medium",children:a})]},r)}))},"AnimteUl")})]})};var J=function(){return Object(l.jsx)("div",{className:"App flex h-full w-screen bg-gray-100",children:Object(l.jsxs)(T.a,{children:[Object(l.jsx)(S,{}),Object(l.jsx)("div",{className:"main-contents items-start w-full flex flex-col lg:h-screen h-full mx-6",children:Object(l.jsxs)(L.c,{children:[Object(l.jsxs)(L.a,{exact:!0,path:"/",children:[Object(l.jsx)(E,{}),Object(l.jsx)(F,{})]}),Object(l.jsx)(L.a,{exact:!0,path:"/liked",children:Object(l.jsx)(D,{})}),Object(l.jsx)(L.a,{exact:!0,path:"/albums",children:Object(l.jsx)(q,{})})]})})]})})};n.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(x,{reducer:k,initialState:N,children:Object(l.jsx)(J,{})})}),document.getElementById("root")),i()}},[[74,1,2]]]);
//# sourceMappingURL=main.23000f58.chunk.js.map