import{r as m,j as r,c as a}from"./index-3babd007.js";const l=({style:t,src:e,alt:i})=>{const[o,s]=m.useState(!1);return o?r.jsxs("picture",{children:[r.jsx("source",{srcSet:`${e.slice(0,-3)}webp`,type:"image/webp"}),r.jsx("source",{srcSet:e,type:"image/jpeg"}),r.jsx("img",{className:t,src:e,alt:i||"image of a store product",loading:"lazy"})]}):r.jsx("img",{onError:()=>s(!0),className:t,src:`https://ik.imagekit.io/6lmck6z8g/tr:w-800/cool-store/${e}`,alt:i||"image of a store product",loading:"lazy",srcSet:`https://ik.imagekit.io/6lmck6z8g/tr:w-400/cool-store/${e} 400w, https://ik.imagekit.io/6lmck6z8g/tr:w-600/cool-store/${e} 600w, https://ik.imagekit.io/6lmck6z8g/tr:w-1000/cool-store/${e} 1000w, https://ik.imagekit.io/6lmck6z8g/tr:w-1200/cool-store/${e} 1200w`})},n=new Intl.NumberFormat(void 0,{currency:"USD",style:"currency"});function u(t){return n.format(t)}const g=[{id:0,name:"Books",price:99.99,imgUrl:"imgs/books.png"},{id:1,name:"Banana",price:1.99,imgUrl:"imgs/bananas.png"},{id:2,name:"Cactus",price:2.49,imgUrl:"imgs/cactus.png"},{id:3,name:"Tea",price:7.49,imgUrl:"imgs/tea.png"},{id:4,name:"Phone",price:6.66,imgUrl:"imgs/phones.png"},{id:5,name:"Fanta",price:1.5,imgUrl:"imgs/fanta.png"},{id:6,name:"Dinosaurs",price:.99,imgUrl:"imgs/dinos.png"},{id:7,name:"Wooden Figure",price:3.99,imgUrl:"imgs/figure.png"},{id:8,name:"Water Melon",price:5.99,imgUrl:"imgs/melon.png"}],c=()=>g,d=a()((t,e)=>({ShopItems:c(),getShopItem:i=>e().ShopItems.find(o=>o.id===i)||null}));export{l as I,u as f,d as u};