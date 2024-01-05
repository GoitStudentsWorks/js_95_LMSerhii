import{o as v,h as u,l as n,c,s as g,r as C,a as b,b as i}from"./assets/header-8c8bb8b5.js";import{v as _,i as f}from"./assets/vendor-f213eb09.js";const A="/js_95_LMSerhii/assets/yellow_shopping_basket-566aede4.png",r={cartList:document.querySelector(".cart-list"),deleteAll:document.querySelector(".cart-delete-all"),orderBox:document.querySelector(".order-box"),orderForm:document.querySelector(".order-form"),totalSum:document.querySelector(".order-box-total-price-var"),footerForm:document.querySelector(".subscribe-form"),headerCount:document.querySelector("#product-count-header"),cartWrapper:document.querySelector(".cart-wrapper")},h=t=>t.length?t.map(({_id:e,img:s,name:a,category:o,size:l,price:L})=>`<li class="cart-item js-card" data-id="${e}">

                  <button class="cart-product-delete js-product-cart-delete">
                      <svg class="cart-product-delete-icon" width="18" height="18">
                          <use href="${i}#close"></use>
                      </svg>
                    </button>
                    
                <div class="cart-product-container">
                    <div class="cart-product-img-box">
                        <img src="${s}" alt="${a}" class="cart-img" width="64" height="64" />
                      </div>             
                <div class="cart-content">
                    <p class="cart-content-title">${a}</p>                    

                    <ul class="cart-content-list">
                        <li class="cart-content-item">
                        Category:
                        <span class="cart-content-item-var">${o.replace("_"," ")}</span>
                        </li>
                        <li class="cart-content-item">Size:
                        <span class="cart-content-item-var">${l}</span>
                        </li>
                    </ul>                    
                    <div class="cart-content-bottom">   
                        <p class="cart-content-price">$${L}</p>
                        
                        

                      <div class="cart-content-bottom-addition">
                        <button class="cart-content-bottom" type="button" aria-label="subtraction">
                          <svg class="minus-icon" width="18" height="18" aria-label="minus">
                            <use class="cart-minus-svg" href="${i}#minus"></use>
                          </svg>
                        </button>

                        <span class="quantity">1</span>

                        <button class="cart-content-bottom" type="button" aria-label="addition">
                          <svg class="plus-icon" width="18" height="18" aria-label="plus">
                            <use class="cart-plus-svg" href="${i}#plus"></use>
                          </svg>
                        </button>
                      </div>       
                    </div>
                       
                </li>`).join(" "):`<div class="emty-cart">
                    <img src="${A}" alt="Emty Cart" class="emty-cart-img" width="132" height="114" />
                    <p class="emty-cart-title">
                        Your basket is <span class="accent">empty...</span>
                    </p>
                    <p class="emty-cart-text">
                        Go to the main page to select your favorite products and add them to the
                        cart.
                    </p>
            </div>`,E=()=>{const t=n(c.LOCAL_CART_KEY)??[];if(!t.length)return;const e=1;return t.reduce((s,a)=>s+a.price*e,0).toFixed(2)},p=()=>{const t=n(c.LOCAL_CART_KEY)??[];if(!t.length){r.deleteAll.style.display="none",r.orderBox.style.display="none";const a=h(t);r.cartWrapper.innerHTML=a;return}r.deleteAll.style.display="flex",r.orderBox.style.display="block";const e=h(t),s=E();r.cartList.innerHTML=e,r.totalSum.innerHTML=`$${s}`},m=()=>{const t=document.querySelector("#product-count-cart"),e=n(c.LOCAL_CART_KEY)??[];t.innerHTML=`(${e.length})`},S=()=>{g(c.LOCAL_CART_KEY,[]),u(),m(),p()},$=t=>{if(t.currentTarget!==t.target&&t.target.closest(".js-product-cart-delete")){const{id:e}=t.target.closest(".js-card").dataset,s=n(c.LOCAL_CART_KEY)??[],a=s.findIndex(({_id:o})=>o===e);s.splice(a,1),C(c.LOCAL_CART_KEY),g(c.LOCAL_CART_KEY,s),u(),console.log(r.headerCount),m(),p()}},T=t=>{t.preventDefault();const e=document.querySelector(".order-box-input").value;if(!_(e)){f.warning({title:"Caution",message:"Check your email address"});return}const s=n(c.LOCAL_CART_KEY)??[];let a=[];s.map(l=>{a.push({productId:l._id,amount:1})});const o=JSON.stringify({email:e,products:a});t.target.reset(),b(o)},y=document.getElementById("orderInput"),d=document.querySelector(".order-placeholder-var"),q=()=>{y.value.trim()!==""?d.style.display="none":d.style.display="inline"},x=()=>{d.style.display="none"};y.addEventListener("input",q);y.addEventListener("focus",x);r.orderForm.addEventListener("submit",T);r.cartList.addEventListener("click",$);r.deleteAll.addEventListener("click",S);r.footerForm.addEventListener("submit",v);u();m();p();
//# sourceMappingURL=commonHelpers.js.map
