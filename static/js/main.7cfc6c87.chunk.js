(this["webpackJsonpzerial-julieta"]=this["webpackJsonpzerial-julieta"]||[]).push([[0],{52:function(e,t,c){},54:function(e,t,c){},59:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var r=c(3),n=c.n(r),a=c(39),i=c.n(a),s=(c(52),c(11)),o=c(10),d=c(29),l=c(8),j=c(47),u=c(13),b=c(2),m=Object(r.createContext)(),O=function(){return Object(r.useContext)(m)},h=function(e){var t=e.children,c=Object(r.useState)([]),n=Object(u.a)(c,2),a=n[0],i=n[1],s=Object(r.useState)(0),o=Object(u.a)(s,2),O=o[0],h=o[1],p=Object(r.useState)(0),x=Object(u.a)(p,2),f=x[0],v=x[1],N=Object(r.useState)({name:"",phone:"",email:"",emailDos:""}),g=Object(u.a)(N,2),C=g[0],I=g[1];return Object(b.jsx)(m.Provider,{value:{cartList:a,addAlCarrito:function(e){h(O+e.cantidad),v(f+e.product.price*e.cantidad);var t=a.find((function(t){return t.product.id===e.product.id}));t?(t.cantidad=t.cantidad+e.cantidad,i(a)):i((function(t){return[].concat(Object(j.a)(t),[e])}))},removerItem:function(e){var t=a.find((function(t){return t.product.id===e}));i(a.filter((function(t){return t.product.id!==e}))),h(O-t.cantidad),v(f-t.product.price*t.cantidad)},removerCart:function(){h(0),v(0),i([])},itemCantidad:O,cartTotal:f,handleForm:function(e){I(Object(l.a)(Object(l.a)({},C),{},Object(d.a)({},e.target.name,e.target.value)))},userData:C},children:t})},p=c(46),x=(c(54),function(){var e=O().itemCantidad;return Object(b.jsx)(s.b,{to:"/cart",className:"contenedor-carrito",children:Object(b.jsxs)("button",{className:"boton-del-carrito",children:[Object(b.jsx)(p.a,{}),Object(b.jsx)("p",{className:"cantidad-carrrito",children:e})]})})}),f=(c(59),function(){return Object(b.jsxs)("nav",{className:"ContenedorLista",children:[Object(b.jsx)(s.b,{to:"/",children:Object(b.jsx)("img",{className:"navbar-logo",src:"../assets/logo1.png",alt:"Logo Idraet.Lidherma"})}),Object(b.jsxs)("ul",{className:"Lista",children:[Object(b.jsx)("li",{className:"Items",children:Object(b.jsx)(s.b,{to:"/",children:"Lidherma"})}),Object(b.jsx)("li",{className:"Items",children:Object(b.jsx)(s.b,{to:"/categoria/rostro",children:"Rostro"})}),Object(b.jsx)("li",{className:"Items",children:Object(b.jsx)(s.b,{to:"/categoria/corporal",children:"Corporal"})}),Object(b.jsx)("li",{className:"Items",children:Object(b.jsx)(s.b,{to:"/categoria/maquillaje",children:"Maquillaje"})})]}),Object(b.jsx)(x,{className:"cart-widget"})]})}),v=c(27),N=(c(38),v.a.initializeApp({apiKey:"AIzaSyCmMG4VRITfK0V2v7nJzS8zTsvvpuVMbMg",authDomain:"e-commerce-primero.firebaseapp.com",projectId:"e-commerce-primero",storageBucket:"e-commerce-primero.appspot.com",messagingSenderId:"532464529390",appId:"1:532464529390:web:496ea8335c09041161e8ff"}));function g(){return v.a.firestore(N)}var C=c(78),I=(c(65),function(e){var t=e.prod;return Object(b.jsx)("div",{className:"container1",children:Object(b.jsx)("section",{className:"container1",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)(C.a,{className:"card",children:[Object(b.jsx)(s.b,{to:"/productos/".concat(t.id),children:Object(b.jsx)("img",{className:"item-img",src:t.pictureUrl,alt:t.title})}),Object(b.jsxs)("h3",{children:[t.title," - ",t.categoria]}),Object(b.jsx)(s.b,{to:"/productos/".concat(t.id),className:"item-count",children:Object(b.jsx)("button",{children:"M\xe1s informaci\xf3n"})}),Object(b.jsxs)("p",{className:"card_text",children:["Tenemos ",t.stock," unidades disponibles"]})]})})})})}),S=(c(66),Object(r.memo)((function(e){var t=e.product;return Object(b.jsx)("div",{className:"contenedor-productos",children:t.map((function(e){return Object(b.jsx)(I,{prod:e},e.id)}))})}))),y=(c(67),c(42)),k=c.n(y),E=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(!0),i=Object(u.a)(a,2),s=i[0],d=i[1],j=Object(o.f)().id;return Object(r.useEffect)((function(){var e=g();j?e.collection("items").where("categoria","==",j).get().then((function(e){return n(e.docs.map((function(e){return Object(l.a)({id:e.id},e.data())})))})).catch((function(e){return alert("Error:",e)})).finally((function(){return d(!1)})):e.collection("items").orderBy("categoria").get().then((function(e){return n(e.docs.map((function(e){return Object(l.a)({id:e.id},e.data())})))})).catch((function(e){return alert("Error:",e)})).finally((function(){return d(!1)}))}),[j]),Object(b.jsx)("div",{className:"itemListContainer",children:s?Object(b.jsx)("h2",{className:"loading",children:"Los productos se est\xe1n cargando.."}):Object(b.jsx)(k.a,{children:Object(b.jsx)(S,{product:c})})})},D=(c(69),c(43)),L=c.n(D),T=function(e){var t=e.stock,c=e.initial,n=e.addCart,a=Object(r.useState)(c),i=Object(u.a)(a,2),o=i[0],d=i[1],l=Object(r.useState)(!1),j=Object(u.a)(l,2),m=j[0],O=j[1];return Object(b.jsxs)("div",{className:"item-count",children:[Object(b.jsxs)("div",{className:"botonesContador",children:[Object(b.jsx)("button",{className:"btn-contador",onClick:function(){d(o-1)},disabled:o<=c,children:"-"}),Object(b.jsx)("h3",{children:o}),Object(b.jsx)("button",{className:"btn-contador",onClick:function(){d(o+1)},disabled:o>=t,children:"+"})]}),Object(b.jsxs)("div",{className:"botones",children:[m?Object(b.jsx)(L.a,{children:Object(b.jsx)(s.b,{to:"/cart",children:Object(b.jsx)("button",{className:"btn-add-terminar",children:"Terminar compra"})})}):Object(b.jsx)("button",{className:"btn-add-contador",onClick:function(){n(o),d(c),O(!0)},children:"Agregar al carrito"}),Object(b.jsx)(s.b,{to:"/",children:Object(b.jsx)("button",{className:"btn-volver-contador",children:"Volver"})})]})]})},V=(c(70),c(24)),q=c.n(V),z=function(e){var t=e.product,c=Object(r.useState)(1),n=Object(u.a)(c,2),a=n[0],i=n[1],s=O().addAlCarrito;return Object(b.jsx)(q.a,{effect:"fadeInUp",children:Object(b.jsxs)("div",{className:"detalle_container",children:[Object(b.jsx)("div",{className:"seccionUno",children:Object(b.jsx)("img",{className:"detalle_imagen",src:t.pictureUrl,alt:t.title})}),Object(b.jsxs)("div",{className:"seccionDos",children:[Object(b.jsxs)("div",{className:"detalle_descripcion",children:[Object(b.jsx)("h2",{className:"item-detail-title",children:t.title}),Object(b.jsx)("p",{className:"item-detail-description",children:t.description})]}),Object(b.jsxs)("h3",{className:"detalle_precio",children:["$ ",t.price]})]}),Object(b.jsx)("div",{className:"item_count",children:Object(b.jsx)(T,{initial:a,stock:t.stock,addCart:function(e){i(e),s({product:t,cantidad:e})}})})]})})},A=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(!0),i=Object(u.a)(a,2),s=i[0],d=i[1],j=Object(o.f)().productId;return Object(r.useEffect)((function(){g().collection("items").doc(j).get().then((function(e){return n(Object(l.a)({id:e.id},e.data()))})).catch((function(e){return alert("Error:",e)})).finally((function(){return d(!1)}))}),[j]),Object(b.jsx)("div",{children:s?Object(b.jsx)("h2",{className:"loading",children:"El detalle del producto se est\xe1 cargando"}):Object(b.jsx)(q.a,{effect:"fadeInUp",children:Object(b.jsx)(z,{product:c})})})},U=(c(72),c(73),function(e){var t=e.generarOrden,c=O(),r=c.handleForm,n=c.userData;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("form",{onChange:r,onSubmit:function(e){e.preventDefault(),n.email===n.emailDos?t():alert("Por favor, los correos electr\xf3nicos deben coincidir.")},children:Object(b.jsxs)("div",{className:"contenedor-form",children:[Object(b.jsx)("h3",{children:"Ingres\xe1 tus datos para finalizar"}),Object(b.jsxs)("div",{className:"relleno-form",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:"Nombre y Apellido: "}),Object(b.jsx)("input",{type:"text",name:"name",placeholder:"Nombre completo",defaultValue:n.name,required:!0})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:"Tel\xe9fono: "}),Object(b.jsx)("input",{type:"tel",name:"phone",pattern:"[0-9]{10}",placeholder:"N\xfamero de tel\xe9fono",defaultValue:n.phone,required:!0}),Object(b.jsx)("p",{children:"Ingres\xe1 sin el 0 adelante, m\xe1ximo 10 digitos."})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:"Email: "}),Object(b.jsx)("input",{type:"email",name:"email",placeholder:"Correo electr\xf3nico",defaultValue:n.email,required:!0})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:"Confirmar email: "}),Object(b.jsx)("input",{type:"email",name:"email2",placeholder:"Comprobar correo electr\xf3nico",defaultValue:n.emailConfirmado,required:!0})]}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{className:"btn-comprar",type:"submit",children:"Comprar"})]})]})})})}),w=c(44),F=c.n(w),M=c(26),_=c.n(M),P=c(45),B=c.n(P),$=function(){var e=O(),t=e.cartList,c=e.removerItem,n=e.removerCart,a=e.cartTotal,i=e.userData,o=Object(r.useState)(""),d=Object(u.a)(o,2),l=d[0],j=d[1];return Object(b.jsxs)("div",{className:"contenedor-principal",children:[t.length?Object(b.jsx)("button",{className:"btn-vaciar-carrito",onClick:function(){return n()},children:"Vaciar carrito"}):""===l?Object(b.jsxs)("div",{className:"container-carrito-vacio",children:[Object(b.jsx)(B.a,{children:Object(b.jsx)("p",{children:"\xa1Ups...El carrito est\xe1 vac\xedo!"})}),Object(b.jsx)(s.b,{className:"link-iniciar-compra",to:"/",children:"Empezar a comprar"})]}):Object(b.jsxs)("div",{children:[Object(b.jsxs)("h3",{children:["\xa1Gracias por comprar! Pronto enviaremos su pedido.",Object(b.jsxs)("p",{children:["Su orden de compra es: ",l]})]}),Object(b.jsx)(_.a,{children:Object(b.jsx)("div",{className:"total-reserva",children:Object(b.jsxs)("p",{children:["El total de la compra es: $ ",a]})})}),Object(b.jsx)(s.b,{to:"/",children:"Cerrar y volver al inicio"})]}),t.map((function(e){return Object(b.jsx)(F.a,{left:!0,children:Object(b.jsxs)("div",{className:"contenedor-carrito-lleno",children:[Object(b.jsx)("img",{src:e.product.pictureUrl,alt:e.product.title}),Object(b.jsxs)("div",{className:"contenido-descriptivo",children:[Object(b.jsx)("h5",{children:e.product.title}),Object(b.jsxs)("p",{children:["$ ",e.product.price]}),Object(b.jsxs)("p",{children:["Cantidad: ",e.cantidad]}),Object(b.jsxs)("p",{children:["Subtotal $ ",e.product.price*e.cantidad]})]}),Object(b.jsx)("button",{className:"btn-remover",onClick:function(){return c(e.product.id)},children:"Eliminar"})]},e.product.id)})})),Object(b.jsx)(_.a,{children:Object(b.jsx)(U,{createOrder:function(){var e={};e.date=v.a.firestore.Timestamp.fromDate(new Date),e.buyer=i,e.total=a,e.items=t.map((function(e){return{id:e.product.id,title:e.product.title,quantity:e.product.cantidad,total:e.product.price*e.cantidad}})),g().collection("orders").add(e).then((function(e){return j(e.id)})).catch((function(e){return alert("Error:",e)})).finally((function(){return n()}))}})})]})},J=(c(74),c(75),function(){return Object(b.jsxs)("div",{className:"containerIdex",children:[Object(b.jsx)(_.a,{left:!0,cascade:!0,children:Object(b.jsx)("h1",{children:"LIDHERMA"})}),Object(b.jsx)(q.a,{effect:"fadeInUp",children:Object(b.jsx)("h2",{children:"Lidherma es una empresa argentina que desarrolla productos cosm\xe9ticos con respaldo cient\xedfico. Desde sus inicios, en 1989, se transform\xf3 en la mano derecha de los profesionales de la est\xe9tica \u2013dermat\xf3logos, cirujanos, esteticistas, kinesi\xf3logos, cosmiatras, cosmet\xf3logos, centros de est\xe9tica y spa\u2013, acompa\xf1\xe1ndolos en su crecimiento profesional."})}),Object(b.jsx)(E,{})]})});var R=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(h,{children:Object(b.jsxs)(s.a,{children:[Object(b.jsx)(f,{}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/",children:Object(b.jsx)(J,{})}),Object(b.jsx)(o.a,{exact:!0,path:"/categoria/:id",component:E}),Object(b.jsx)(o.a,{exact:!0,path:"/productos/:productId",component:A}),Object(b.jsx)(o.a,{exact:!0,path:"/cart",component:$})]})]})})})},G=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,79)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),r(e),n(e),a(e),i(e)}))};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(R,{})}),document.getElementById("root")),G()}},[[76,1,2]]]);
//# sourceMappingURL=main.7cfc6c87.chunk.js.map