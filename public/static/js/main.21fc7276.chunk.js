(this.webpackJsonpformapp1=this.webpackJsonpformapp1||[]).push([[0],{140:function(e,a,t){e.exports=t(275)},145:function(e,a,t){},146:function(e,a,t){},270:function(e,a,t){},275:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(27),l=t.n(s),c=(t(145),t(57)),o=t(74),u=t(85),i=t(82),m=(t(146),t(13)),p=t(122),h=t(278),g=t(279),d=t(277),v=t(96),E=t(123),b=t.n(E),f=function e(){var a=this;Object(c.a)(this,e),this.submit=function(e,t,n,r,s,l,c,o){return console.log(e,t,n,r,s,l,c,o),a.service.post("/submit",{studentname:e,parentname:t,pregunta1:n,pregunta2:r,pregunta3:s,pregunta4:l,comentario1:c,comentario2:o}).then((function(e){return e.data}))};var t=b.a.create({baseURL:"https://formulario90.herokuapp.com/api",withCredentials:!1});this.service=t},S=h.a.Option,C=g.a.TextArea,w=function(e){Object(u.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(c.a)(this,t),(r=a.call(this,e)).formRef=Object(n.createRef)(),r.handleSubmit=function(){var e=r.state.studentname,a=r.state.parentname,t=r.state.pregunta1,n=r.state.pregunta2,s=r.state.pregunta3,l=r.state.pregunta4,c=r.state.comentario1,o=r.state.comentario2;console.log("Ya se sometio"),r.service.submit(e,a,t,n,s,l,c,o).then((function(e){r.setState({studentname:"aaa",parentname:"",pregunta1:"",pregunta2:"",pregunta3:"",pregunta4:"",comentario1:"",comentario2:""}),console.log(e),r.formRef.current.resetFields()})).catch((function(e){return console.log(e)}))},r.handleChange=function(e){var a=e.target,t=a.name,n=a.value;r.setState(Object(p.a)({},t,n))},r.handleChangeSelect=function(e){console.log("Holarespeta1"),r.setState({pregunta1:e})},r.handleChangeSelect2=function(e){r.setState({pregunta2:e})},r.handleChangeSelect3=function(e){r.setState({pregunta3:e})},r.handleChangeSelect4=function(e){r.setState({pregunta4:e})},r.state={studentname:"",parentname:"",pregunta1:"",pregunta2:"",pregunta3:"",pregunta4:"",comentario1:"",comentario2:""},r.service=new f,r}return Object(o.a)(t,[{key:"render",value:function(){var e=this,a={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},t={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}};return r.a.createElement("div",{id:"Formulario"},r.a.createElement(d.a,Object.assign({},a,{ref:this.formRef,onFinish:this.handleSubmit,id:"formulario"}),r.a.createElement(d.a.Item,Object.assign({},a,{label:r.a.createElement("span",null,"Nombre del alumno\xa0"),name:"studentname",rules:[{required:!0,message:"Proporciona el nombre del alumno",whitespace:!0}]}),r.a.createElement(g.a,{name:"studentname",value:this.state.studentname,onChange:function(a){return e.handleChange(a)}})),r.a.createElement(d.a.Item,Object.assign({},a,{label:r.a.createElement("span",null,"Nombre del padre o tutor\xa0"),name:"parentname",rules:[{required:!0,message:"Proporciona el nombre del padre o tutor",whitespace:!0}]}),r.a.createElement(g.a,{name:"parentname",value:this.state.parentname,onChange:function(a){return e.handleChange(a)}})),r.a.createElement(d.a.Item,{label:"Atiende Indicaciones",name:"pregunta1",rules:[{required:!0,message:"Selecciona una respuesta",whitespace:!0}]},r.a.createElement(h.a,{name:"pregunta1",value:this.state.pregunta1,onChange:this.handleChangeSelect},r.a.createElement(S,{value:"si"},"Si"),r.a.createElement(S,{value:"no"},"No"),r.a.createElement(S,{value:"ayuda"},"Necesita ayuda"))),r.a.createElement(d.a.Item,Object.assign({},a,{label:"Se muestra motivado (a) al realizar la actividad",name:"pregunta2",rules:[{required:!0,message:"Selecciona una respuesta",whitespace:!0}]}),r.a.createElement(h.a,{id:"pregunta2",name:"pregunta2",value:this.state.pregunta2,onChange:this.handleChangeSelect2},r.a.createElement(S,{value:""},"Selecciona una respuesta"),r.a.createElement(S,{value:"si"},"Si"),r.a.createElement(S,{value:"no"},"No"),r.a.createElement(S,{value:"ayuda"},"Necesita ayuda"))),r.a.createElement(d.a.Item,Object.assign({},a,{label:"Identifica los numeros que observa",name:"pregunta3",rules:[{required:!0,message:"Selecciona una respuesta",whitespace:!0}]}),r.a.createElement(h.a,{id:"pregunta3",name:"pregunta3",value:this.state.pregunta3,onChange:this.handleChangeSelect3},r.a.createElement(S,{value:""},"Selecciona una respuesta"),r.a.createElement(S,{value:"si"},"Si"),r.a.createElement(S,{value:"no"},"No"),r.a.createElement(S,{value:"ayuda"},"Necesita ayuda"))),r.a.createElement(d.a.Item,Object.assign({},a,{label:"Realiza conteo en orden estable",name:"Pregunta4",rules:[{required:!0,message:"Selecciona una respuesta",whitespace:!0}]}),r.a.createElement(h.a,{id:"pregunta4",name:"pregunta4",value:this.state.pregunta4,onChange:this.handleChangeSelect4},r.a.createElement(S,{value:""},"Selecciona una respuesta"),r.a.createElement(S,{value:"si"},"Si"),r.a.createElement(S,{value:"no"},"No"),r.a.createElement(S,{value:"ayuda"},"Necesita ayuda"))),r.a.createElement(d.a.Item,Object.assign({},a,{label:"Anote los numeros que menciona ",name:"comentario1",rules:[{required:!0,message:"Escribe una respuesta",whitespace:!0}]}),r.a.createElement(C,{name:"comentario1",value:this.state.comentario1,onChange:function(a){return e.handleChange(a)},rows:4})),r.a.createElement(d.a.Item,Object.assign({},a,{label:"Que observas cuando tu hijo realiza la actividad ",name:"comentario2",rules:[{required:!0,message:"Escribe una respuesta",whitespace:!0}]}),r.a.createElement(C,{name:"comentario2",value:this.state.comentario2,onChange:function(a){return e.handleChange(a)},rows:4})),r.a.createElement(d.a.Item,t,r.a.createElement(v.a,{className:"login-form-button",type:"primary",htmlType:"submit"},"Enviar"))))}}]),t}(n.Component);t(270);var j=function(){return r.a.createElement("div",{className:"title"},r.a.createElement("header",null,r.a.createElement("div",{className:"overlay"},r.a.createElement("h1",{className:"blanco"},"Maestra Itzel"))))},O=function(e){Object(u.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null),r.a.createElement(m.a,{exact:!0,path:"/",render:function(){return r.a.createElement(w,null)}}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=t(92);t(274);l.a.render(r.a.createElement(y.a,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[140,1,2]]]);
//# sourceMappingURL=main.21fc7276.chunk.js.map