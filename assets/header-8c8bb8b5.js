import{b as g,a as i,v as y,i as v}from"./vendor-f213eb09.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const C=(t,e)=>{try{const s=JSON.stringify(e);localStorage.setItem(t,s)}catch(s){console.error("Set state error: ",s.message)}},m=t=>{try{const e=localStorage.getItem(t);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}},x=t=>{try{localStorage.removeItem(t)}catch(e){console.error("Get state error: ",e.message)}},c={BASE_URL:"https://food-boutique.b.goit.study/api",LOCAL_CART_KEY:"cart",LOCAL_QUERY_KEY:"query",LOCAL_SORT:"sort",INIT_QUERY:{keyword:null,category:null,page:1,limit:6},PAGES:"pages",ORDER:"order",NUMBER_OF_DISCOUNT:2},l={productList:document.querySelector(".product-list"),searchField:document.querySelector(".js-input"),categoryField:document.querySelector("#categoryField"),abcField:document.querySelector("#abcField"),form:document.querySelector(".form"),productList:document.querySelector(".product-list"),emailForm:document.querySelector(".subscribe-form"),emailInput:document.querySelector(".subscribe-input"),sendBtn:document.querySelector(".send-btn"),popularProductList:document.querySelector(".popular-products"),totalAmountDisplay:document.querySelector(".total-amount"),cartList:document.querySelector(".cart-product-list"),deleteAllButton:document.getElementById("deleteAllButton"),productsCount:document.getElementById("product-count"),dicsProd:document.querySelector(".discount-product-list"),discProdList:document.querySelector(".discount-product-list"),paginationContainer:document.getElementById("pagination-container"),popularProductList:document.querySelector(".popular_products_list"),productsCountHeader:document.querySelector("#product-count-header"),divHome:document.querySelector(".home-sections")},u=(t,e)=>{const s=o=>{o.code==="Escape"&&a.close()},a=g.create(e,{onShow:o=>{t.addEventListener("keydown",s),o.element().querySelector(".js-modal-close").onclick=()=>o.close()},onClose:o=>{t.removeEventListener("keydown",s)}});a.show()},n="/js_95_LMSerhii/assets/sprite-10b57387.svg",b="/js_95_LMSerhii/assets/subscribing@1x-6a8ff382.png",p="/js_95_LMSerhii/assets/subscribing@2x-9debc6b5.png",f=`
                  <div class="modal">

                    <div class="container">

                      <div class="modal-box-success">

                        <button class="modal-close js-modal-close" type="button" >
                          <svg class="modal-icon" width="22" height="22">
                            <use href="${n}#close"></use>
                          </svg>
                        </button>

                        <div class="modal-text-box">

                          <p class="subscription-thanks">
                            Thanks for subscribing for
                            <span class="subscription-accent">new</span> products
                          </p>

                          <p class="subscription-promise">
                            We promise you organic and high-quality products that will meet your
                            expectations. Please stay with us and we promise you many pleasant
                            surprises.
                          </p>

                        </div>
                        <img
                        class="modal-image"
                        srcset="${b} 1x, ${p} 2x"
                        src="${p}"
                        alt="basket of fresh vegetables"
                        width="490"
                        />
   
                      </div>
                     

                    </div>

                  </div>
`,S=`
              <div class="modal">

                <div class="container">
                  <div class="modal-box">
                    <button class="modal-close js-modal-close" type="button" data-modal-close>
                      <svg class="modal-icon" width="22" height="22">
                        <use href="${n}#close"></use>
                      </svg>
                    </button>
                    <div class="modal-text-box">
                      <p class="subscription-thanks">
                        This <span class="subscription-accent">email address</span> has already been entered
                      </p>
                      <p class="subscription-promise">
                        You have already subscribed to our new products. Watch for offers at the mailing address.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
              `,L=t=>{if(!t.length)return"EMPTY";const{img:e,name:s}=t[0];return`<div class="modal">
            <div class="container">
              <div class="order-modal-box">
                <button class="modal-close js-modal-close" type="button">
                  <svg class="modal-icon" width="22" height="22">
                    <use href="${n}#close"></use>
                  </svg>
                </button>
            
                <img class="order-image js-img-order" src="${e}" alt="${s}" width="140" height="140" />
                <p class="order-title">Order success</p>
                <p class="order-text">
                  Thank you for shopping at Food Boutique. Your order has been received and
                  is now being freshly prepared just for you! Get ready to indulge in
                  nourishing goodness, delivered right to your doorstep. We're thrilled to
                  be part of your journey to better health and happiness.
                </p>
              </div>
            </div>
          </div>`},E=()=>`<div class="modal">
            <div class="container">
              <div class="order-modal-box">
                <button class="modal-close js-modal-close" type="button">
                  <svg class="modal-icon" width="22" height="22">
                    <use href="${n}#close"></use>
                  </svg>
                </button>
                <div class="error_box">
                <p class="error_title">
                    Error<span>${status}</span>
                </p>
                <p class="error_text">
                  🤦‍♂️ Something has gone wrong ....
                </p>
              </div>
                
              </div>
            </div>
          </div>`,T=({name:t,desc:e,img:s,category:a,price:o,size:r,is10PercentOff:d,popularity:h})=>`
            <div class="modal">
            <div class="container">
              <div class="modal-box-product">
                <button class="modal-product-close js-modal-close" type="button">
                  <svg class="modal-icon" width="22" height="22">
                    <use href="${n}#close"></use>
                  </svg>
                </button>

                <div class="modal-product-top">
                  <div class="modal-product-img-box">
                    <img
                      class="modal-product-image"
                      src="${s}"
                      alt="${t}"
                      width="160"
                      height="160"
                      loading="lazy"
                    />
                  </div>
                  <div class="modal-product-text-box">
                    <p class="modal-product-name">${t}</p>
                    <ul class="modal-product-list">
                      <li class="modal-produt-item">Category:
                        <span class="list-variables">${a}</span>
                      </li>
                      <li class="modal-produt-item">Size:
                        <span class="list-variables">${r}</span>
                      </li>
                      <li class="modal-produt-item">Popularity:
                        <span class="list-variables">${h}</span>
                      </li>
                    </ul>
                    <div class="scroll">
                    <p class="modal-product-desc">
                      ${e}
                    </p>
                    </div>
                  </div>
                </div>

                <div class="modal-product-bottom">
                  <p class="modal-product-price">$${o}</p>

                  <button class="modal-product-addBtn js-to-cart">
                    Add to
                    <svg class="modal-product-icon" width="18" height="18">
                      <use href="${n}#cart"></use>
                    </svg>
                  </button>

                  <button class="modal-product-removeBtn js-from-cart">
                    Remove from
                    <svg class="modal-product-icon" width="18" height="18">
                      <use href="${n}#cart"></use>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

`;async function j(t){try{return(await i({url:`${c.BASE_URL}/products`,method:"GET",header:{"Content-Type":"aplication/json"},params:t})).data}catch(e){return e}}async function O(t){try{return(await i({url:`${c.BASE_URL}/products/${t}`,method:"GET",header:{"Content-Type":"aplication/json"}})).data}catch(e){return e}}async function A(t){try{let e=null;return t&&(e={limit:t}),(await i({url:`${c.BASE_URL}/products/popular`,method:"GET",header:{"Content-Type":"aplication/json"},params:e})).data}catch(e){return e}}async function B(){try{return(await i({url:`${c.BASE_URL}/products/discount`,method:"GET",header:{"Content-Type":"aplication/json"}})).data}catch(t){return t}}async function R(){try{return(await i({url:`${c.BASE_URL}/products/categories`,method:"GET",header:{"Content-Type":"aplication/json"}})).data}catch(t){return t}}async function k(t){try{const e=await i({url:"https://food-boutique.b.goit.study/api/orders",method:"POST",headers:{"Content-Type":"application/json"},data:t}),s=document.querySelector(".order-form"),a=m(c.LOCAL_CART_KEY)??[],o=L(a);u(s,o)}catch{const s=document.querySelector(".order-form"),a=E();u(s,a)}}async function w(t){try{return(await i({url:`${c.BASE_URL}/subscription`,method:"POST",headers:{"Content-Type":"application/json"},data:{email:t}})).status}catch(e){return e.response.status}}const F=()=>{l.emailForm.addEventListener("submit",_)},_=t=>{t.preventDefault();const e=l.emailInput.value.trim();if(!y(e)){v.warning({title:"Caution",message:"Check your email address"});return}$(e),l.emailForm.reset()};async function $(t){const e=await w(t);switch(e){case 201:u(l.emailForm,f);break;case 409:u(l.emailForm,S);break}return e}const P=()=>{const t=document.querySelector("#product-count-header"),e=m(c.LOCAL_CART_KEY)??[];t.innerHTML=`(${e.length})`};export{k as a,n as b,c,l as d,j as e,R as f,O as g,P as h,A as i,B as j,F as k,m as l,T as m,_ as o,x as r,C as s};
//# sourceMappingURL=header-8c8bb8b5.js.map
