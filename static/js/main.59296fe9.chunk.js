(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],{22:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var l=c(1),a=c(0),s=c.n(a),r=c(35),i=c.n(r),n=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,76)).then((function(t){var c=t.getCLS,l=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),l(e),a(e),s(e),r(e)}))},o=(c(44),s.a.createContext());function x(e){var t=e.initialState,c=e.reducer,s=e.children;return Object(l.jsx)(o.Provider,{value:Object(a.useReducer)(c,t),children:s})}var h=function(){return Object(a.useContext)(o)},u=c(7),m=function(e,t){switch(t.type){case"SET_USER":return Object(u.a)(Object(u.a)({},e),{},{user:t.user});case"SET_TOKEN":return Object(u.a)(Object(u.a)({},e),{},{token:t.token});case"SET_PLAYLIST":return Object(u.a)(Object(u.a)({},e),{},{playLists:t.playLists});case"SET_TRACKS":return Object(u.a)(Object(u.a)({},e),{},{trackLists:t.trackLists});case"SET_IMAGES":return Object(u.a)(Object(u.a)({},e),{},{imageUrl:t.imageUrl});case"SET_TRACK_PLAYING":return Object(u.a)(Object(u.a)({},e),{},{trackPlaying:t.trackPlaying});case"SET_PLAYING":return Object(u.a)(Object(u.a)({},e),{},{playing:t.playing});case"SET_INPUT":return Object(u.a)(Object(u.a)({},e),{},{input:t.input});default:return e}},d=(c(45),c(18)),j=[{title:"Home",url:"home",svg:Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",className:"w-4 h-4 fill-current",children:Object(l.jsx)("path",{d:"M23.951 4a1.5 1.5 0 00-.879.322L8.86 15.52A7.504 7.504 0 006 21.41V40.5C6 41.864 7.136 43 8.5 43h10c1.364 0 2.5-1.136 2.5-2.5v-10c0-.295.205-.5.5-.5h5c.295 0 .5.205.5.5v10c0 1.364 1.136 2.5 2.5 2.5h10c1.364 0 2.5-1.136 2.5-2.5V21.41a7.504 7.504 0 00-2.86-5.89L24.929 4.322A1.5 1.5 0 0023.95 4zM24 7.41l13.285 10.467A4.494 4.494 0 0139 21.41V40h-9v-9.5c0-1.915-1.585-3.5-3.5-3.5h-5c-1.915 0-3.5 1.585-3.5 3.5V40H9V21.41c0-1.38.63-2.679 1.715-3.533L24 7.41z"})})},{title:"Browse",url:"browse",svg:Object(l.jsx)("svg",{className:"w-4 h-4 fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 259.555 259.555",children:Object(l.jsx)("g",{children:Object(l.jsx)("path",{d:"M107.93 1.336H7.5a7.499 7.499 0 00-7.5 7.5v100.43c0 4.143 3.357 7.5 7.5 7.5h100.43c4.143 0 7.5-3.357 7.5-7.5V8.836a7.5 7.5 0 00-7.5-7.5zm-7.5 100.43H15v-85.43h85.43v85.43zM252.055 1.336h-100.43a7.499 7.499 0 00-7.5 7.5v100.43c0 4.143 3.357 7.5 7.5 7.5h100.43c4.143 0 7.5-3.357 7.5-7.5V8.836a7.5 7.5 0 00-7.5-7.5zm-7.5 100.43h-85.43v-85.43h85.43v85.43zM107.93 142.789H7.5a7.499 7.499 0 00-7.5 7.5v100.43c0 4.143 3.357 7.5 7.5 7.5h100.43c4.143 0 7.5-3.357 7.5-7.5v-100.43a7.5 7.5 0 00-7.5-7.5zm-7.5 100.43H15v-85.43h85.43v85.43zM252.055 142.789h-100.43a7.499 7.499 0 00-7.5 7.5v100.43c0 4.143 3.357 7.5 7.5 7.5h100.43c4.143 0 7.5-3.357 7.5-7.5v-100.43a7.5 7.5 0 00-7.5-7.5zm-7.5 100.43h-85.43v-85.43h85.43v85.43z"})})})},{title:"Album",url:"album",svg:Object(l.jsxs)("svg",{viewBox:"-50 0 512 512",className:"w-4 h-4 fill-current",children:[Object(l.jsx)("path",{d:"M86.129 497H15V15h275.297v99.79c0 4.144 3.355 7.5 7.5 7.5h107.305a7.499 7.499 0 006.925-4.63 7.492 7.492 0 00-1.625-8.176L303.102 2.2a7.252 7.252 0 00-.766-.66c-.059-.043-.113-.086-.176-.129a7.355 7.355 0 00-.836-.527.394.394 0 00-.058-.028 7.65 7.65 0 00-.86-.378c-.058-.024-.117-.043-.176-.067a7.993 7.993 0 00-.964-.265c-.012 0-.028-.004-.043-.004a6.98 6.98 0 00-.91-.114c-.09-.007-.18-.011-.27-.015-.086 0-.164-.012-.246-.012H7.5A7.5 7.5 0 000 7.5v497a7.5 7.5 0 007.5 7.5h78.629c4.14 0 7.5-3.36 7.5-7.5s-3.36-7.5-7.5-7.5zm219.168-389.71V25.604l81.695 81.684zm0 0M405.102 137.188a7.5 7.5 0 00-7.5 7.5V497H116.656c-4.14 0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5h288.446c4.14 0 7.5-3.36 7.5-7.5V144.687c0-4.14-3.36-7.5-7.5-7.5zm0 0"}),Object(l.jsx)("path",{d:"M68.285 163.516c-4.14 0-7.5 3.359-7.5 7.5v268.359a7.5 7.5 0 007.5 7.5h276.028a7.5 7.5 0 007.5-7.5v-268.36c0-4.14-3.36-7.5-7.5-7.5zm268.528 15v156.988l-49.083-54.496a7.502 7.502 0 00-10.214-.871L192.96 346.71l-45.07-69.86a7.502 7.502 0 00-5.88-3.421 7.482 7.482 0 00-6.226 2.734l-60 73.219V178.516zM75.784 373.05l65.078-79.418 89.192 138.246H75.785zm172.121 58.824l-46.777-72.504 80.152-63.105 55.531 61.648v73.965h-88.906zm0 0"}),Object(l.jsx)("path",{d:"M225.93 273.082c21.047 0 38.168-17.121 38.168-38.168s-17.121-38.172-38.168-38.172-38.172 17.125-38.172 38.172c0 21.047 17.125 38.168 38.172 38.168zm0-61.34c12.773 0 23.168 10.395 23.168 23.168 0 12.777-10.395 23.172-23.168 23.172-12.778 0-23.172-10.395-23.172-23.172 0-12.773 10.394-23.168 23.172-23.168zm0 0"})]})},{title:"Artists",url:"artist",svg:Object(l.jsx)("svg",{className:"w-4 h-4 fill-current",viewBox:"0 0 512 512",children:Object(l.jsx)("path",{d:"M256 242.4c-63.8 0-115.7-51.9-115.7-115.7C140.3 62.9 192.2 11 256 11c63.8 0 115.7 51.9 115.7 115.7 0 63.8-51.9 115.7-115.7 115.7zm0-190.6c-41.3 0-74.9 33.6-74.9 74.9 0 41.3 33.6 74.9 74.9 74.9 41.3 0 74.9-33.6 74.9-74.9 0-41.3-33.6-74.9-74.9-74.9zM480.6 501H31.4c-11.3 0-20.4-9.1-20.4-20.4 0-66.7 26-129.2 73.1-176 30.4-30.2 73.3-47.5 117.6-47.5h108.6c44.4 0 87.2 17.3 117.6 47.5 47.1 46.8 73.1 109.3 73.1 176 0 11.3-9.1 20.4-20.4 20.4zM52.8 460.2h406.4c-4.6-48-25.6-92.4-60.1-126.6-22.8-22.6-55.2-35.6-88.8-35.6H201.7c-33.7 0-66 13-88.8 35.6-34.5 34.2-55.5 78.6-60.1 126.6z"})})},{title:"Videos",url:"videos",svg:Object(l.jsx)("svg",{className:"w-5 h-5 fill-current ",viewBox:"0 -87 472 472",xmlns:"http://www.w3.org/2000/svg",children:Object(l.jsx)("path",{d:"M467.102 26.527a10.009 10.009 0 00-9.899-.18L348.906 85.48V50c-.031-27.602-22.398-49.969-50-50H50C22.398.031.031 22.398 0 50v197.422c.031 27.601 22.398 49.969 50 50h248.906c27.602-.031 49.969-22.399 50-50v-34.836l108.301 59.133A10.001 10.001 0 00472 262.94V35.125a9.997 9.997 0 00-4.898-8.598zM328.898 247.426c-.015 16.562-13.437 29.98-30 30H50c-16.563-.02-29.98-13.438-30-30V50c.02-16.559 13.438-29.98 30-30h248.906c16.559.02 29.98 13.441 30 30zM452 246.09L348.906 189.8v-81.534L452 51.98zm0 0"})})}],b=[{title:"Recently Played",url:"Recently-played ",svg:Object(l.jsxs)("svg",{className:"w-4 h-4 fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 429.653 429.653",children:[Object(l.jsx)("path",{d:"M126.933 32.64L99.52 0 1.493 82.24l27.414 32.64zM428.16 82.347L330.133.107l-27.413 32.64 98.027 82.24zM214.72 45.653c-106.133 0-191.893 85.973-191.893 192s85.76 192 191.893 192 192.107-85.973 192.107-192-85.974-192-192.107-192zm.107 341.334c-82.453 0-149.333-66.88-149.333-149.333S132.373 88.32 214.827 88.32 364.16 155.2 364.16 237.653s-66.773 149.334-149.333 149.334z"}),Object(l.jsx)("path",{d:"M225.493 130.987h-32v128l101.227 60.906 16.107-26.346-85.334-50.56z"})]})},{title:"Local files",url:"local-files",svg:Object(l.jsxs)("svg",{className:"w-4 h-4 fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:[Object(l.jsx)("path",{d:"M437.333 128H330.667c-5.888 0-10.667-4.8-10.667-10.667V10.667C320 4.779 315.221 0 309.333 0H96C78.357 0 64 14.357 64 32v448c0 17.643 14.357 32 32 32h320c17.643 0 32-14.357 32-32V138.667c0-5.888-4.779-10.667-10.667-10.667zm-10.666 352c0 5.867-4.779 10.667-10.667 10.667H96c-5.888 0-10.667-4.8-10.667-10.667V32c0-5.867 4.779-10.667 10.667-10.667h202.667v96c0 17.643 14.357 32 32 32h96V480z"}),Object(l.jsx)("path",{d:"M444.864 131.136l-128-128c-4.16-4.16-10.923-4.16-15.083 0s-4.16 10.923 0 15.083l128 128a10.716 10.716 0 007.552 3.115c2.731 0 5.461-1.045 7.531-3.115 4.16-4.16 4.16-10.923 0-15.083z"})]})}];c(22);var f=function(){return Object(l.jsxs)("div",{className:"nav hidden lg:block w-1/4 lg:max-w-7xl bottom-0 text-sm bg-white",children:[Object(l.jsxs)("div",{className:" p-6 profile flex flex-col items-center",children:[Object(l.jsx)("img",{className:"rounded-full lg:w-14 lg:h-14 w-20 shadow-xl mb-2 h-20 object-cover",src:"https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",alt:"user"}),Object(l.jsx)("h2",{className:"profile-name text-md mt-2 leading-6",children:"User"}),Object(l.jsx)("span",{className:"tracking-wide profile-email text-gray-400 text-xs"})]}),Object(l.jsx)("ul",{className:"flex flex-col items-center h-48 justify-around my-4 nav-list w-full ",children:j.map((function(e,t){return Object(l.jsxs)(d.b,{to:e.url,className:"flex w-3/5 items-center hover:text-blue-600 font-semibold text-sm ",children:[Object(l.jsx)("span",{className:"mr-4",children:e.svg}),Object(l.jsx)("h2",{children:e.title})]},t)}))}),Object(l.jsx)("div",{className:"user-songs ",children:Object(l.jsxs)("ul",{className:"user-play-lists h-32 justify-around flex flex-col w-full items-center",children:[Object(l.jsx)("h2",{className:"text-sm text-gray-400 w-full mb-6 pr-12",children:"My music"}),b.map((function(e,t){return Object(l.jsxs)(d.b,{to:e.url,className:"flex w-full 2xl:w-3/4 xl:pr-2 2xl:pr-18 md:text-xs text-left xl:ml-8 2xl:ml-0 lg:text-sm items-center fill-current hover:text-blue-600 font-semibold text-sm",children:[Object(l.jsx)("i",{className:"mr-4 2xl:ml-8 ml-10 ",children:e.svg}),Object(l.jsx)("h2",{className:e.title,children:e.title})]},t)}))]})})]})},p=c(2),v=c(5),g=c(38);var w=function(){var e=Object(g.a)(),t=e.register,c=e.handleSubmit,a=h(),s=Object(v.a)(a,2),r=(s[0].input,s[1]);return Object(l.jsx)("div",{className:" relative text-xs h-10 w-4/6 md:w-5/12 2xl:w-4/12 2xl:h-14 items-center 2xl:text-lg",children:Object(l.jsxs)("form",{onChange:c((function(e,t){r({type:"SET_INPUT",input:e.artist})})),onSubmit:c((function(e,t){r({type:"SET_INPUT",input:e.artist})})),className:"h-full w-full",children:[Object(l.jsx)("input",{name:"artist",className:"w-full border h-full text-xs lg:text-sm px-12 md:p-2 md:px-20 outline-none rounded-full",type:"text",ref:t({required:!0}),placeholder:"Search for songs, Artists etc.."}),Object(l.jsx)("button",{className:"ml-5 absolute left-1 top-0 mt-3 mr-4 2xl:mt-5 2xl:mr-6",children:Object(l.jsx)("svg",{className:"text-gray-400 h-4 w-4 fill-current outline-none",viewBox:"0 0 56.966 56.966",children:Object(l.jsx)("path",{d:"M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"})})})]})})};var O=function(){return Object(l.jsxs)("div",{className:"header w-full h-14 my-3 flex items-center justify-between",children:[Object(l.jsx)(w,{}),Object(l.jsxs)("div",{className:"nav-controls pl-4 md:pl-0 flex items-center w-2/6 sm:w-1/6 md:w-1/3 justify-between",children:[Object(l.jsxs)("svg",{className:"text-gray-400 fill-current w-4 h-4",viewBox:"0 0 512 512",children:[Object(l.jsx)("path",{d:"M256 0c-37.554 0-68.11 30.556-68.11 68.11v20.55h35.229V68.11c0-18.131 14.755-32.881 32.881-32.881 18.131 0 32.887 14.749 32.887 32.881v20.55h35.229V68.11C324.116 30.556 293.555 0 256 0zM304.147 429.205c0 26.228-21.337 47.565-47.56 47.565h-1.174c-26.222 0-47.56-21.337-47.56-47.565h-35.229c0 45.657 37.138 82.795 82.789 82.795h1.174c45.651 0 82.789-37.138 82.789-82.795h-35.229z"}),Object(l.jsx)("path",{d:"M483.952 422.623l-50.043-77.851v-99.928c0-99.071-79.812-179.67-177.908-179.67-98.102 0-177.908 80.599-177.908 179.67v99.928L28.05 422.617a17.616 17.616 0 0014.814 27.144h426.275a17.607 17.607 0 0015.454-9.171 17.596 17.596 0 00-.641-17.967zm-408.825-8.091l35.394-55.063a17.609 17.609 0 002.801-9.524V244.844c0-79.642 64.006-144.44 142.679-144.44 78.679 0 142.679 64.799 142.679 144.44v105.101c0 3.376.969 6.682 2.795 9.524l35.394 55.063H75.127z"})]}),Object(l.jsxs)("svg",{viewBox:"0 0 512 512",className:"text-gray-400 fill-current w-4 h-4",children:[Object(l.jsx)("path",{d:"M272.066 512h-32.133c-25.989 0-47.134-21.144-47.134-47.133v-10.871a206.698 206.698 0 01-32.097-13.323l-7.704 7.704c-18.659 18.682-48.548 18.134-66.665-.007l-22.711-22.71c-18.149-18.129-18.671-48.008.006-66.665l7.698-7.698A206.714 206.714 0 0158.003 319.2h-10.87C21.145 319.2 0 298.056 0 272.067v-32.134C0 213.944 21.145 192.8 47.134 192.8h10.87a206.755 206.755 0 0113.323-32.097L63.623 153c-18.666-18.646-18.151-48.528.006-66.665l22.713-22.712c18.159-18.184 48.041-18.638 66.664.006l7.697 7.697A206.893 206.893 0 01192.8 58.003v-10.87C192.8 21.144 213.944 0 239.934 0h32.133C298.056 0 319.2 21.144 319.2 47.133v10.871a206.698 206.698 0 0132.097 13.323l7.704-7.704c18.659-18.682 48.548-18.134 66.665.007l22.711 22.71c18.149 18.129 18.671 48.008-.006 66.665l-7.698 7.698a206.714 206.714 0 0113.323 32.097h10.87c25.989 0 47.134 21.144 47.134 47.133v32.134c0 25.989-21.145 47.133-47.134 47.133h-10.87a206.755 206.755 0 01-13.323 32.097l7.704 7.704c18.666 18.646 18.151 48.528-.006 66.665l-22.713 22.712c-18.159 18.184-48.041 18.638-66.664-.006l-7.697-7.697a206.893 206.893 0 01-32.097 13.323v10.871c0 25.987-21.144 47.131-47.134 47.131zM165.717 409.17a176.812 176.812 0 0045.831 19.025 14.999 14.999 0 0111.252 14.524v22.148c0 9.447 7.687 17.133 17.134 17.133h32.133c9.447 0 17.134-7.686 17.134-17.133v-22.148a14.999 14.999 0 0111.252-14.524 176.812 176.812 0 0045.831-19.025 15 15 0 0118.243 2.305l15.688 15.689c6.764 6.772 17.626 6.615 24.224.007l22.727-22.726c6.582-6.574 6.802-17.438.006-24.225l-15.695-15.695a15 15 0 01-2.305-18.242 176.78 176.78 0 0019.024-45.831 15 15 0 0114.524-11.251h22.147c9.447 0 17.134-7.686 17.134-17.133v-32.134c0-9.447-7.687-17.133-17.134-17.133H442.72a15 15 0 01-14.524-11.251 176.815 176.815 0 00-19.024-45.831 15 15 0 012.305-18.242l15.689-15.689c6.782-6.774 6.605-17.634.006-24.225l-22.725-22.725c-6.587-6.596-17.451-6.789-24.225-.006l-15.694 15.695a15 15 0 01-18.243 2.305 176.812 176.812 0 00-45.831-19.025 14.999 14.999 0 01-11.252-14.524v-22.15c0-9.447-7.687-17.133-17.134-17.133h-32.133c-9.447 0-17.134 7.686-17.134 17.133v22.148a14.999 14.999 0 01-11.252 14.524 176.812 176.812 0 00-45.831 19.025 15.002 15.002 0 01-18.243-2.305l-15.688-15.689c-6.764-6.772-17.627-6.615-24.224-.007l-22.727 22.726c-6.582 6.574-6.802 17.437-.006 24.225l15.695 15.695a15 15 0 012.305 18.242 176.78 176.78 0 00-19.024 45.831 15 15 0 01-14.524 11.251H47.134C37.687 222.8 30 230.486 30 239.933v32.134c0 9.447 7.687 17.133 17.134 17.133h22.147a15 15 0 0114.524 11.251 176.815 176.815 0 0019.024 45.831 15 15 0 01-2.305 18.242l-15.689 15.689c-6.782 6.774-6.605 17.634-.006 24.225l22.725 22.725c6.587 6.596 17.451 6.789 24.225.006l15.694-15.695c3.568-3.567 10.991-6.594 18.244-2.304z"}),Object(l.jsx)("path",{d:"M256 367.4c-61.427 0-111.4-49.974-111.4-111.4S194.573 144.6 256 144.6 367.4 194.574 367.4 256 317.427 367.4 256 367.4zm0-192.8c-44.885 0-81.4 36.516-81.4 81.4s36.516 81.4 81.4 81.4 81.4-36.516 81.4-81.4-36.515-81.4-81.4-81.4z"})]}),Object(l.jsx)("button",{className:"hidden md:block text-xs items-center h-10 bg-red-400 px-4 text-white rounded-full",children:"Upgrade Plan"})]})]})},y=c(3),N=c.n(y),z=c(13),k=c(14);var L=function(e){var t=e.image,c=e.title,a=(e.tracks,h()),s=Object(v.a)(a,2),r=s[0],i=(r.trackLists,r.playing,r.input,s[1]);return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("img",{onClick:function(){return i({type:"SET_INPUT",input:c})},className:"md:h-44 hover:bg-red-400 lg:w-40 xl:w-42 xl:h-42 lg:h-40 md:w-44 2xl:w-64 2xl:h-64 2xl:mr-8 rounded-lg mr-5 row-start-1 w-48 h-48 shadow-xl cursor-pointer object-cover",src:t,alt:c})})},M=c(37),S=c.n(M);var T=function(e){var t=e.trackName,c=e.artist,s=e.duration,r=e.images,i=e.id,n=e.length,o=e.preview,x=e.i,u=h(),m=Object(v.a)(u,2),d=(m[0].trackPlaying,m[1]),j=S()(s),b="".concat(j.minutes,":").concat(j.seconds),f=Object(a.useState)(!1),p=Object(v.a)(f,2),g=p[0],w=p[1],O=[{images:r,id:i,artist:c,trackName:t,duration:b,preview:o,i:x}];return Object(l.jsxs)("div",{className:"track text-xs sm:text-sm grid grid-cols-10 h-18 p-1 sm:h-16 justify-items-center items-center bg-white rounded-lg my-1 w-full",children:[Object(l.jsx)("span",{className:"font-bold text-xs text-secondary",children:n}),Object(l.jsx)("img",{className:"rounded-lg object-contain h-12 w-12",src:r,alt:c}),Object(l.jsx)("svg",{viewBox:"0 0 320.001 320.001",className:"z-10 h-3 w-3 fill-current cursor-pointer text-gray-300 col-span-1",onClick:function(){d({type:"SET_TRACK_PLAYING",trackPlaying:O}),d({type:"SET_PLAYING",playing:!0})},children:Object(l.jsx)("path",{d:"M295.84 146.049l-256-144a16.026 16.026 0 00-15.904.128A15.986 15.986 0 0016 16.001v288a15.986 15.986 0 007.936 13.824A16.144 16.144 0 0032 320.001c2.688 0 5.408-.672 7.84-2.048l256-144c5.024-2.848 8.16-8.16 8.16-13.952s-3.136-11.104-8.16-13.952z"})}),Object(l.jsx)("p",{className:"z-0 col-span-2 font-bold text-secondary",children:t}),Object(l.jsx)("p",{className:"col-span-2 text-gray-400 text-xs",children:c}),Object(l.jsx)("p",{className:"col-span-2 text-gray-400",children:b}),Object(l.jsx)("svg",{onClick:function(){return w((function(e){return!e}))},className:"transition-all ".concat(g?"text-red-500":"text-gray-300"," fill-current text-xs text-gray-300 h-5 w-5 cursor-pointer"),viewBox:"0 0 511.868 511.868",children:Object(l.jsx)("path",{d:"M470.45 69.262c-26.753-26.752-62.322-41.485-100.155-41.485-37.834 0-73.403 14.733-100.155 41.486l-14.205 14.205-14.205-14.205c-26.752-26.753-62.321-41.486-100.155-41.486-37.833 0-73.402 14.733-100.155 41.486-55.224 55.224-55.225 145.082-.002 200.308l214.525 214.521 214.51-214.521c55.221-55.227 55.22-145.085-.003-200.309z"})})]})};var A=function(e){var t=e.trackName,c=e.images,s=e.artist,r=e.preview,i=e.nextSong,n=e.prevSong,o=e.currentIndex,x=h(),u=Object(v.a)(x,2),m=u[0].playing,d=u[1],j=Object(a.useRef)();return Object(a.useEffect)((function(){m?j.current.play():j.current.pause()}),[m,r]),Object(l.jsxs)("div",{className:"transition player-board items-center w-full lg:h-full lg:justify-start xl:h-3/5 xl:justify-evenly xl:pt-2 xl:pb-10 lg:mt-0 mt-2 flex flex-col justify-center h-full",children:[Object(l.jsx)("audio",{loop:!0,src:r,ref:j}),Object(l.jsxs)("div",{className:" shadow-2xl transition mt-2 lg:mt-0 player items-center relative flex flex-col justify-evenly sm:w-2/5 w-9/12 md:w-3/5 xl:h-4/5 5 xl:w-3/4 lg:w-4/5 lg:h-2/4 p-2 h-4/5 rounded-xl",children:[Object(l.jsx)("img",{className:"track-album-art ".concat(m?"animate-music":"animate-none"," shadow-2xl object-fill md:w-32 md:h-32 2xl:w-56 2xl:h-56 lg:w-40 lg:h-40 my-2 rounded-full w-32 h-32 sm:w-36 sm:h-36 xl:w-44 xl:h-44"),src:c,alt:""}),Object(l.jsx)("div",{className:"bg-white lg:w-16 lg:h-16 2xl:w-20 2xl:h-20 circle xl:top-20 2xl:top-28 rounded-full w-12 h-12 md:top-14 lg:top-20 top-14 absolute"}),Object(l.jsx)("p",{className:"title text-xs sm:text-sm text-secondary font-bold",children:t}),Object(l.jsx)("p",{className:"album-name text-xs text-gray-400",children:s}),Object(l.jsx)("div",{className:"length flex justify-between px-4 text-gray-400 items-center h-10 text-xs w-full"})]}),Object(l.jsxs)("div",{className:" w-full controls flex lg:h-1/5 justify-center items-center",children:[Object(l.jsx)("svg",{onClick:n,className:"w-4 h-4 2xl:w-6 2xl:h-6 cursor-pointer fill-current  ".concat(0===o?"text-gray-300":"text-blue-600"),viewBox:"0 0 46 36",children:Object(l.jsx)("path",{d:"M41 .68L24.6 14V3.05a3 3 0 00-5-2.37l-18.51 15a3 3 0 000 4.74l18.51 15a3 3 0 005-2.37V22L41 35.32A3 3 0 0046 33V3.05a3 3 0 00-5-2.37z"})}),Object(l.jsx)("div",{className:"mx-6 wrapper 2xl:w-6 2xl:h-6 cursor-pointer flex items-center h-10 w-10 justify-center rounded-full bg-gray-100",children:Object(l.jsx)("div",{onClick:function(){d({type:"SET_PLAYING",playing:!m})},className:"circle-wrapper rounded-full bg-white w-7 h-7 items-center flex justify-center",children:m?Object(l.jsx)("svg",{className:"fill-current 2xl:w-6 2xl:h-6 text-blue-600 w-3 h-3",viewBox:"0 0 47.607 47.607",children:Object(l.jsx)("path",{d:"M17.991 40.976a6.631 6.631 0 01-13.262 0V6.631a6.631 6.631 0 0113.262 0v34.345zM42.877 40.976a6.631 6.631 0 01-13.262 0V6.631a6.631 6.631 0 0113.262 0v34.345z"})}):Object(l.jsx)("svg",{viewBox:"0 0 320.001 320.001",className:"h-3 w-3  2xl:w-6 2xl:h-6 fill-current cursor-pointer text-blue-600 col-span-1",children:Object(l.jsx)("path",{d:"M295.84 146.049l-256-144a16.026 16.026 0 00-15.904.128A15.986 15.986 0 0016 16.001v288a15.986 15.986 0 007.936 13.824A16.144 16.144 0 0032 320.001c2.688 0 5.408-.672 7.84-2.048l256-144c5.024-2.848 8.16-8.16 8.16-13.952s-3.136-11.104-8.16-13.952z"})})})}),Object(l.jsx)("svg",{onClick:i,className:"w-4 h-4 2xl:w-6 2xl:h-6 text-blue-600 cursor-pointer transform rotate-180 fill-current ",viewBox:"0 0 46 36",children:Object(l.jsx)("path",{d:"M41 .68L24.6 14V3.05a3 3 0 00-5-2.37l-18.51 15a3 3 0 000 4.74l18.51 15a3 3 0 005-2.37V22L41 35.32A3 3 0 0046 33V3.05a3 3 0 00-5-2.37z"})})]})]})},V=c(26),C=c.n(V),E=c(4),P=function(e){for(var t=[],c=new Map,l=0,a=Array.from(e);l<a.length;l++){var s=a[l];c.has(s.id)||(c.set(s.id,!0),t.push({id:s.id,image:s.cover_medium,title:s.title,trackLists:s.tracklist}))}return t},_=function(e){for(var t=Object(E.a)(new Set),c=new Map,l=0,a=Array.from(e);l<a.length;l++){var s=a[l];c.has(s.id)||(c.set(s.id,!0),t.push({id:s.id,image:s.artist.picture,title:s.title,duration:s.duration,artist:s.artist,preview:s.preview}))}return t},H={y:30,opacity:0},B={y:0,opacity:1},I={y:30,opacity:0},R=.6,U=.7,G=.7;c(71).config();var Y=function(){var e=Object(a.useState)(!0),t=Object(v.a)(e,2),c=t[0],s=t[1],r=h(),i=Object(v.a)(r,2),n=i[0],o=n.playLists,x=n.trackLists,u=n.trackPlaying,m=n.input,d=i[1],j=Object(a.useState)(0),b=Object(v.a)(j,2),f=b[0],p=b[1],g=function(){return p(f>=15?0:f+1)},w=function(){return 0===f?void 0:p(f-1)};return Object(a.useEffect)((function(){var e,t={method:"GET",url:"https://deezerdevs-deezer.p.rapidapi.com/search",params:{q:m,limit:20},headers:{"x-rapidapi-key":"9e6e4a5fbemsh25f0de29a34f716p1b8904jsn20779150cc15","x-rapidapi-host":"deezerdevs-deezer.p.rapidapi.com"}};return C.a.request(t,{cancenToken:new C.a.CancelToken((function(t){return e=t}))}).then(function(){var e=Object(z.a)(N.a.mark((function e(t){var c,l;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.data.data;case 2:c=e.sent,s(!1),l=[{images:c[f].album.cover_medium,preview:c[f].preview,id:c[f].id,trackName:c[f].title,duration:c[f].duration,artist:c[f].artist.name}],console.log(c),d({type:"SET_PLAYLIST",playLists:c.map((function(e){return e.album}))}),d({type:"SET_TRACKS",trackLists:c}),d({type:"SET_TRACK_PLAYING",trackPlaying:l}),d({type:"SET_PLAYING",playing:!1});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.log(e)})),function(t){return e()}}),[f,m]),Object(l.jsx)(k.a,{children:c?Object(l.jsx)("h2",{className:"font-bold h-10 text-md sm:text-lg text-left",children:"Loading..."}):Object(l.jsxs)("div",{className:"billboard-rows h-auto select-none w-full overflow-x-visible lg:overflow-hidden",children:[Object(l.jsx)(k.b.h2,{transition:{duration:R},initial:H,animate:B,exit:I,className:"font-bold h-10 text-md sm:text-lg text-left",children:"Albums"}),Object(l.jsx)(k.b.ul,{initial:H,transition:{duration:R},animate:B,exit:I,className:"items-center sm:h-1/3 md:h-1/4 lg:h-1/4 2xl:w-full xl:h-1/3 2xl: flex sm:justify-start overflow-y-hidden overflow-x-scroll w-full whitespace-nowrap h-2/6 rows",children:P(o).map((function(e){var t=e.image,c=e.title,a=e.trackLists,s=e.id;return Object(l.jsx)(L,{transition:{duration:U},image:t,tracks:a,title:c},s)}))}),Object(l.jsx)(k.b.p,{transition:{duration:G},initial:H,animate:B,exit:I,className:"font-bold h-7 lg:block hidden text-md sm:text-lg my-3 md:m-2 text-left",children:"Tracks"}),Object(l.jsxs)("div",{className:"flex-col lg:flex-row lg:h-full flex w-full h-1/2 md:h-3/4",children:[Object(l.jsx)(k.b.p,{transition:{duration:G},initial:H,animate:B,exit:I,className:"font-bold h-7 lg:hidden text-md sm:text-lg my-5 md:m-2 text-left",children:"Tracks"}),Object(l.jsx)(k.b.div,{transition:{duration:G},initial:H,animate:B,exit:I,className:"album-tracks mr-4 flex-col flex h-56 w-full lg:h-full sm:w-full lg:w-3/5 overflow-y-scroll",children:_(x).map((function(e,t){var c=e.id,a=e.duration,s=e.title,r=e.artist,i=e.image,n=e.preview;return Object(l.jsx)(T,{duration:a,trackName:s,artist:r.name,length:t+1,images:i,preview:n,i:t},c)}))}),Object(l.jsx)(k.b.div,{initial:H,animate:B,exit:I,transition:{duration:G},className:"player-board w-full lg:h-full sm:w-full lg:mt-0 md:mt-6 lg:w-2/5 flex flex-col bg-white rounded-b-xl md:rounded-xl md:h-1/2 h-full",children:Array.from(u).map((function(e,t){var c=e.artist,a=e.id,s=e.trackName,r=e.duration,i=e.images,n=e.preview,o=e.i;return Object(l.jsx)(A,{nextSong:g,prevSong:w,images:i,artist:c,id:a,trackName:s,duration:r,preview:n,i:o,firstI:t,currentIndex:f},"23423523")}))})]})]})})};var K=function(){return Object(l.jsx)("div",{className:"App flex h-full w-screen bg-gray-100",children:Object(l.jsxs)(d.a,{children:[Object(l.jsx)(p.b,{children:Object(l.jsx)(f,{})}),Object(l.jsxs)("div",{className:"main-contents items-start w-full flex flex-col lg:h-screen h-full mx-6",children:[Object(l.jsx)(O,{}),Object(l.jsx)(Y,{})]})]})})};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(x,{reducer:m,initialState:{user:null,playLists:{},trackPlaying:{},playing:!1,token:"",imageUrl:"",trackLists:[],input:"bazzi"},children:Object(l.jsx)(K,{})})}),document.getElementById("root")),n()}},[[74,1,2]]]);
//# sourceMappingURL=main.59296fe9.chunk.js.map