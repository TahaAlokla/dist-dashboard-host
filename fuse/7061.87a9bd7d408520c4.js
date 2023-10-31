"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[7061],{7061:(f,m,t)=>{t.r(m),t.d(m,{default:()=>i});var d=t(1531),n=t(2223);let r=(()=>{class u{}return u.\u0275fac=function(p){return new(p||u)},u.\u0275cmp=n.Xpm({type:u,selectors:[["app-product-list"]],standalone:!0,features:[n.jDz],decls:1,vars:0,template:function(p,g){1&p&&n._UZ(0,"router-outlet")},dependencies:[d.lC]}),u})();var l=t(4134);const i=[{path:"",component:r,resolve:{brands:()=>(0,n.f3M)(l.s).getBrands(),categories:()=>(0,n.f3M)(l.s).getCategories(),tags:()=>(0,n.f3M)(l.s).getTags(),attributes:()=>(0,n.f3M)(l.s).getAttributes(),colors:()=>(0,n.f3M)(l.s).getColors()},children:[{path:"",loadChildren:()=>Promise.all([t.e(9401),t.e(9609),t.e(787),t.e(5226),t.e(3627),t.e(5855),t.e(8531),t.e(9222),t.e(7489),t.e(6999),t.e(8592),t.e(7702)]).then(t.bind(t,7702))},{path:"add-product",loadChildren:()=>Promise.all([t.e(9401),t.e(9609),t.e(787),t.e(5226),t.e(3627),t.e(5855),t.e(6999),t.e(1292),t.e(8280),t.e(3617),t.e(3314),t.e(4867),t.e(7951),t.e(9650)]).then(t.bind(t,9650))}]}]},4134:(f,m,t)=>{t.d(m,{s:()=>p});var d=t(3144),n=t(5787),r=t(2340),l=t(1135),i=t(8505),u=t(4004),h=t(2223);let p=(()=>{class g{constructor(s){this._httpClient=s,this._brands=new l.X(null),this._categories=new l.X(null),this._product=new l.X(null),this._products=new l.X(null),this._tags=new l.X(null),this._colors=new l.X(null),this._attributes=new l.X(null)}get brands$(){return this._brands.asObservable()}get attributes$(){return this._attributes.asObservable()}get categories$(){return this._categories.asObservable()}get product$(){return this._product.asObservable()}get products$(){return this._products.asObservable()}get tags$(){return this._tags.asObservable()}get colors$(){return this._colors.asObservable()}getBrands(){let s=r.N.API_ENDPOINT+n.b.BRANDS.get_all_brands;const e=(new d.LE).set("page",-1);return this._httpClient.get(`${s}`,{params:e}).pipe((0,i.b)(a=>{a.success&&this._brands.next(a.data)}))}getCategories(){let s=r.N.API_ENDPOINT+n.b.CATEGORIES.get_all_category;const e=(new d.LE).set("page",-1);return this._httpClient.get(`${s}`,{params:e}).pipe((0,i.b)(a=>{a.success&&this._categories.next(a.data)}))}getTags(){let s=r.N.API_ENDPOINT+n.b.PRODUCTS.get_all_tags;const e=(new d.LE).set("page",-1);return this._httpClient.get(`${s}`,{params:e}).pipe((0,i.b)(a=>{a.success&&this._tags.next(a.data)}))}getAttributes(){let s=r.N.API_ENDPOINT+n.b.attributes.get_all_attributes;const e=(new d.LE).set("page",-1);return this._httpClient.get(`${s}`,{params:e}).pipe((0,i.b)(a=>{a.success&&this._attributes.next(a.data)}))}getColors(){let s=r.N.API_ENDPOINT+n.b.PRODUCTS.get_all_colors;const e=(new d.LE).set("page",-1);return this._httpClient.get(`${s}`,{params:e}).pipe((0,i.b)(a=>{a.success&&this._colors.next(a.data)}))}createProduct(s){return this._httpClient.post(`${r.N.API_ENDPOINT+n.b.product.create_product}`,{...s})}uploadImages(s){let e=new FormData;s.forEach(c=>{e.append("image",c)});let E=(new d.LE).set("folder","products_img");return this._httpClient.post(`${r.N.API_ENDPOINT+n.b.upload_file.upload_file}/`,e,{params:E}).pipe((0,u.U)(c=>{if(console.log("Uploading image response: ",c),c.success)return c.data}))}uploadProductImage(s){let e=new FormData;e.append("image",s);let o=(new d.LE).set("folder","main_product_img");return this._httpClient.post(`${r.N.API_ENDPOINT+n.b.upload_file.upload_file}/`,e,{params:o}).pipe((0,u.U)(P=>{if(console.log("Uploading image response: ",P),P.success)return P.data[0]}))}updateProuct(s,e){return this._httpClient.put(`${r.N.API_ENDPOINT+n.b.product.update_product}/${e}`,{...s})}deleteProuct(s){return this._httpClient.delete(`${r.N.API_ENDPOINT+n.b.product.delete_product}/${s}`)}}return g.\u0275fac=function(s){return new(s||g)(h.LFG(d.eN))},g.\u0275prov=h.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()}}]);