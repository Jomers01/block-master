(this.webpackJsonpblock_master=this.webpackJsonpblock_master||[]).push([[0],{79:function(e,t,n){"use strict";n.r(t);var a,r,o,i,c,s,l,p,b,j,h,d,u,x,m,O,f,g,v,y,w,k,C,S,E,I=n(0),M=n.n(I),q=n(37),D=n.n(q),F=n(5),B=n(6),N=n(8),J=n(7),L=n(13),V=n(4),Y=n(12),R=n.n(Y),T=n(14),U=n(15),z=n(16),A=n(2),K=n(3),_=K.a.div(a||(a=Object(A.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    margin-top: 50px;\n    color: white;\n"]))),G=K.a.div(r||(r=Object(A.a)(["\n    margin-top: 20px;\n    font-family: 'Inter';\n"]))),H=(K.a.button(o||(o=Object(A.a)(["\n    background-color: #EF4565;\n    border: none;\n    height: 40px;\n    width: 220px;\n    font-size: 15px;\n    font-family: 'Montserrat';\n    cursor: pointer;\n"]))),K.a.div(i||(i=Object(A.a)(["\n    margin-top: 40px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"])))),P=K.a.input(c||(c=Object(A.a)(["\n    height: 20px;\n    width: 220px;\n    padding: 10px 10px;\n    margin-bottom: 12px;\n    font-family: 'Inter';\n"]))),W=K.a.button(s||(s=Object(A.a)(["\n    background-color: #EF4565;\n    border: none;\n    width: 100px;\n    border-radius: 5px 5px;\n    padding: 5px 0px;\n    cursor: pointer;\n    margin-bottom: 20px;\n"]))),Z=K.a.p(l||(l=Object(A.a)(["\n    font-family: 'Montserrat';\n"]))),Q=K.a.span(p||(p=Object(A.a)(["\n    color: white;\n    font-family: 'Montserrat';\n"]))),X=K.a.div(b||(b=Object(A.a)(["\n    position: absolute;\n    margin-bottom: 10px;\n    bottom: 0;\n"]))),$=n(19),ee=n.n($),te=n(1),ne=function(e){Object(N.a)(n,e);var t=Object(J.a)(n);function n(){var e;return Object(F.a)(this,n),(e=t.call(this)).handleChange=function(){var t=Object(z.a)(R.a.mark((function t(n){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({form:Object(U.a)(Object(U.a)({},e.state.form),{},Object(T.a)({},n.target.name,n.target.value))});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.iniciarSesion=Object(z.a)(R.a.mark((function t(){var n,a,r;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://block-master-jomers.herokuapp.com/usuarios");case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,e.state.form.email,""!==e.state.form.clave?void 0!==(r=a.find((function(t){return t.email.toLowerCase()===e.state.form.email.toLowerCase()&&t.clave===ee()(e.state.form.clave)})))?(alert("Bienvenido ".concat(r.nombre," ").concat(r.apellido)),e.state.login.push(r),localStorage.setItem("login",JSON.stringify(e.state.login)),e.props.history.push("/peliculas")):alert("Usuario o contrase\xf1a invalida"):alert("Debe llenar todos los campos");case 7:case"end":return t.stop()}}),t)}))),e.state={form:{email:"",clave:""},login:[]},e}return Object(B.a)(n,[{key:"componentDidMount",value:function(){JSON.parse(localStorage.getItem("login")).length&&this.props.history.push("/peliculas")}},{key:"render",value:function(){return Object(te.jsxs)(_,{children:[Object(te.jsx)("img",{src:"https://i.ibb.co/h7VwcYf/logo-block-Buster.png",alt:""}),Object(te.jsx)(G,{children:Object(te.jsx)("h1",{children:"Iniciar Sesion"})}),Object(te.jsxs)(H,{children:[Object(te.jsx)(P,{type:"text",placeholder:"Correo Electronico",name:"email",onChange:this.handleChange}),Object(te.jsx)(P,{type:"password",placeholder:"Contrase\xf1a",name:"clave",onChange:this.handleChange}),Object(te.jsx)(W,{onClick:this.iniciarSesion,children:Object(te.jsx)("img",{src:"https://i.ibb.co/ygrkxxW/flecha-correcta.png",alt:""})}),Object(te.jsx)(Z,{children:Object(te.jsx)(L.b,{to:"/",children:Object(te.jsx)(Q,{children:"\xbfHas olvidado tu contrase\xf1a?"})})})]}),Object(te.jsx)(X,{children:Object(te.jsxs)(Z,{children:["Aun no estas registrado. ",Object(te.jsx)(L.b,{to:"/registro",children:Object(te.jsx)(Q,{children:"Click aqui!"})})]})})]})}}]),n}(I.Component),ae=K.a.div(j||(j=Object(A.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 30px;\n    text-align: center;\n    color: white;\n    font-family: 'Inter';\n"]))),re=K.a.input(h||(h=Object(A.a)(["\n    display: block;\n    margin-bottom: 25px;\n    width: 200px;\n    height: 20px;\n    padding: 10px;\n    font-family: 'Montserrat';\n"]))),oe=K.a.div(d||(d=Object(A.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: absolute;\n    bottom: 0;\n    margin-bottom: 10px;\n"]))),ie=K.a.button(u||(u=Object(A.a)(["\n    background-color: #EF4565;\n    border: none;\n    padding: 14px 25px;\n    border-radius: 7px;\n    margin-bottom: 30px;\n    cursor: pointer;\n"]))),ce=K.a.span(x||(x=Object(A.a)(["\n    color: white;\n"]))),se=n(42),le=n.n(se),pe=n(43),be=n.n(pe),je="https://block-master-jomers.herokuapp.com/usuarios",he=function(e){Object(N.a)(n,e);var t=Object(J.a)(n);function n(){var e;return Object(F.a)(this,n),(e=t.call(this)).handleChange=function(){var t=Object(z.a)(R.a.mark((function t(n){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({form:Object(U.a)(Object(U.a)({},e.state.form),{},Object(T.a)({},n.target.name,n.target.value))});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleSubmit=function(e){e.preventDefault()},e.registroUsuario=Object(z.a)(R.a.mark((function t(){var n,a,r,o,i;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(je);case 2:return n=t.sent,t.next=5,n.json();case 5:if(a=t.sent,e.state.form.nombre,e.state.form.apellido,e.state.form.email,e.state.form.phone,""===e.state.form.clave){t.next=26;break}if(void 0===a.find((function(t){return t.email.toLowerCase()===e.state.form.email.toLowerCase()}))){t.next=12;break}alert("Correo ya regitrado"),t.next=24;break;case 12:return t.next=14,le.a.post(je,{id:be.a,nombre:e.state.form.nombre,apellido:e.state.form.apellido,email:e.state.form.email,phone:e.state.form.phone,clave:ee()(e.state.form.clave)}).then((function(e){alert("usuario registrado")})).catch((function(e){console.log(e.message)}));case 14:return t.next=16,fetch(je);case 16:return r=t.sent,t.next=19,r.json();case 19:o=t.sent,i=o.find((function(t){return t.email.toLowerCase()===e.state.form.email.toLowerCase()})),e.state.login.push(i),localStorage.setItem("login",JSON.stringify(e.state.login)),e.props.history.push("/");case 24:t.next=27;break;case 26:alert("Debe llenar todos los campos");case 27:case"end":return t.stop()}}),t)}))),e.state={data:[],form:{id:"",nombre:"",apellido:"",email:"",phone:"",clave:""},login:[]},e}return Object(B.a)(n,[{key:"componentDidMount",value:function(){!1===JSON.parse(localStorage.getItem("login")).length&&this.props.history.push("/")}},{key:"render",value:function(){return Object(te.jsxs)(ae,{children:[Object(te.jsxs)("div",{children:[Object(te.jsx)("img",{src:"https://i.ibb.co/h7VwcYf/logo-block-Buster.png",alt:""}),Object(te.jsx)("h1",{children:"Registro"})]}),Object(te.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(te.jsx)(re,{type:"text",placeholder:"Nombres",name:"nombre",onChange:this.handleChange,required:!0}),Object(te.jsx)(re,{type:"text",placeholder:"Apellidos",name:"apellido",onChange:this.handleChange,required:!0}),Object(te.jsx)(re,{type:"email",placeholder:"Correo Electronico",name:"email",onChange:this.handleChange,required:!0}),Object(te.jsx)(re,{type:"phone",placeholder:"Tel\xe9fono",name:"phone",onChange:this.handleChange,required:!0}),Object(te.jsx)(re,{type:"password",placeholder:"Contrase\xf1a",name:"clave",onChange:this.handleChange,required:!0}),Object(te.jsx)(ie,{type:"submit",onClick:this.registroUsuario,children:"Registrarse"})]}),Object(te.jsx)(oe,{children:Object(te.jsx)(L.b,{to:"/",children:Object(te.jsx)(ce,{children:"\xbfYa tienes cuenta?"})})})]})}}]),n}(I.Component),de=K.a.div(m||(m=Object(A.a)(["\n    background-color: #0F0E17;\n    height: 90px;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    font-family: 'Inter';\n    font-size: 16px;\n"]))),ue=K.a.li(O||(O=Object(A.a)(["\n    display: inline;\n    margin-right: 30px;\n"]))),xe=K.a.a(f||(f=Object(A.a)(["\n    text-decoration: none;\n    color: white;\n    &:hover{\n        color: #FED941;\n        text-decoration: #FED941;\n    }\n"]))),me=K.a.input(g||(g=Object(A.a)(["\n    width: 250px;\n    height: 10px;\n    padding: 11px 12px;\n    border-radius: 4px 0px 0px 4px;\n    border: 1px solid #FED941;\n"]))),Oe=K.a.button(v||(v=Object(A.a)(["\n    height: 34px;\n    border: none;\n    background: #FED941;\n    border-radius: 0px 4px 4px 0px;\n    cursor: pointer;\n    font-family: 'Montserrat';\n"]))),fe=K.a.img(y||(y=Object(A.a)(["\n    margin: 0px 10px;\n"]))),ge=function(e){Object(N.a)(n,e);var t=Object(J.a)(n);function n(){return Object(F.a)(this,n),t.apply(this,arguments)}return Object(B.a)(n,[{key:"render",value:function(){return Object(te.jsxs)(de,{children:[Object(te.jsx)("img",{src:"https://i.ibb.co/h7VwcYf/logo-block-Buster.png",alt:""}),Object(te.jsxs)("ul",{children:[Object(te.jsx)(ue,{children:Object(te.jsx)(xe,{href:"/",children:"Todas"})}),Object(te.jsx)(ue,{children:Object(te.jsx)(xe,{href:"/",children:"M\xe1s valoradas"})}),Object(te.jsx)(ue,{children:Object(te.jsx)(xe,{href:"/",children:"Menos valoradas"})})]}),Object(te.jsxs)("div",{children:[Object(te.jsx)(me,{type:"text",placeholder:"Buscar tu pelicula favorita"}),Object(te.jsx)(Oe,{children:Object(te.jsx)(fe,{src:"https://i.ibb.co/GPqKqBp/Vector.png",alt:"",width:"12px"})})]})]})}}]),n}(I.Component),ve=function(e){Object(N.a)(n,e);var t=Object(J.a)(n);function n(){return Object(F.a)(this,n),t.apply(this,arguments)}return Object(B.a)(n,[{key:"render",value:function(){return Object(te.jsx)("div",{children:Object(te.jsx)("h1",{children:"Todas las peliculas"})})}}]),n}(I.Component),ye=K.a.div(w||(w=Object(A.a)(["\n    margin-top: 35px;\n    width: 100vw;\n"]))),we=K.a.div(k||(k=Object(A.a)(["\n    margin-left: 40px;\n    display: flex;\n    margin-right: 20px;\n    overflow: hidden;\n"]))),ke=K.a.img(C||(C=Object(A.a)(["\n    height: auto;\n    margin-right: 50px;\n"]))),Ce=K.a.div(S||(S=Object(A.a)(["\n    text-align: center;\n    margin-top: 20px;\n"]))),Se=K.a.a(E||(E=Object(A.a)(["\n    display: inline-block;\n    color: white;\n    text-decoration: none;\n    margin-right: 30px;\n    background-color: white;\n    width: 15px;\n    height: 15px;\n    border-radius: 50%;\n"]))),Ee=function(e){Object(N.a)(n,e);var t=Object(J.a)(n);function n(){return Object(F.a)(this,n),t.apply(this,arguments)}return Object(B.a)(n,[{key:"render",value:function(){return Object(te.jsxs)(ye,{children:[Object(te.jsxs)(we,{children:[Object(te.jsx)(ke,{id:"item1",src:"https://i.ibb.co/6ZK2S4b/mulan.png",alt:"",width:"80%"}),Object(te.jsx)(ke,{id:"item2",src:"https://i.ibb.co/vxq1V1N/raya-1.png",alt:"",width:"80%"}),Object(te.jsx)(ke,{id:"item3",src:"https://i.ibb.co/2sR95Ns/unidos-1.png",alt:"",width:"80%"}),Object(te.jsx)("div",{})]}),Object(te.jsxs)(Ce,{children:[Object(te.jsx)(Se,{href:"#item1"}),Object(te.jsx)(Se,{href:"#item2"}),Object(te.jsx)(Se,{href:"#item3"})]})]})}}]),n}(I.Component),Ie=function(e){Object(N.a)(n,e);var t=Object(J.a)(n);function n(){return Object(F.a)(this,n),t.apply(this,arguments)}return Object(B.a)(n,[{key:"render",value:function(){return Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(ge,{}),Object(te.jsx)(Ee,{}),Object(te.jsx)(ve,{})]})}}]),n}(I.Component),Me=function(e){Object(N.a)(n,e);var t=Object(J.a)(n);function n(){return Object(F.a)(this,n),t.apply(this,arguments)}return Object(B.a)(n,[{key:"render",value:function(){return Object(te.jsx)(L.a,{children:Object(te.jsxs)(V.c,{children:[Object(te.jsx)(V.a,{exact:!0,path:"/",component:ne}),Object(te.jsx)(V.a,{exact:!0,path:"/registro",component:he}),Object(te.jsx)(V.a,{exact:!0,path:"/peliculas",component:Ie})]})})}}]),n}(I.Component);D.a.render(Object(te.jsx)(M.a.StrictMode,{children:Object(te.jsx)(Me,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.a5c784b4.chunk.js.map