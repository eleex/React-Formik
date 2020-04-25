(this["webpackJsonptest-react"]=this["webpackJsonptest-react"]||[]).push([[0],{63:function(e,a,t){e.exports=t(88)},86:function(e,a,t){},87:function(e,a,t){},88:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(56),o=t.n(s),l=t(51),u=t.n(l),m=t(57),i=t(54),c=t(62),d=t(21),p=t(61),h=t.n(p),f=function(e){var a=e.touched,t=e.message;return a?t?r.a.createElement("div",{className:"form-message invalid"},t):r.a.createElement("div",{className:"form-message valid"},"all good"):r.a.createElement("div",{className:"form-message invalid"},"\xa0")},w=(t(86),d.a().shape({name:d.c().min(1,"Must have a character").max(50,"Must be shorter than 50 characters").required("Must enter a name"),email:d.c().email("Must be a valid email address").max(255,"Must be shorter than 255").required("Email is required"),password:d.c().min(8,"Password must be at least 8 characters").max(50,"Must be shorter than 50 characters").required("Password is required"),passwordConfirmation:d.c().oneOf([d.b("password"),null],"Passwords must match").required("Password confirm is required"),country:d.c().required("Must choose country")})),g=function(){var e=r.a.useState(""),a=Object(i.a)(e,2),t=a[0],n=a[1],s=r.a.useState([]),o=Object(i.a)(s,2),l=o[0],d=o[1];return r.a.createElement(c.a,{initialValues:{name:"",email:"",password:"",passwordConfirmation:"",country:""},validationSchema:w,onSubmit:function(e,a){var t=a.setSubmitting,n=a.resetForm;t(!0),setTimeout((function(){alert(JSON.stringify(e,null,2)),n(),t(!1)}),1e3)}},(function(e){var a=e.values,s=e.errors,o=e.touched,i=e.handleChange,c=e.handleBlur,p=e.handleSubmit,w=e.isSubmitting,g=e.setFieldValue;return r.a.createElement("form",{onSubmit:p},r.a.createElement("div",{className:"input-row"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",name:"name",id:"name",placeholder:"Enter your name",onChange:i,onBlur:c,value:a.name,className:o.name&&s.name?"has-error":null}),r.a.createElement(f,{touched:o.name,message:s.name})),r.a.createElement("div",{className:"input-row"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"Enter your email",onChange:i,onBlur:c,value:a.email,className:o.email&&s.email?"has-error":null}),r.a.createElement(f,{touched:o.email,message:s.email})),r.a.createElement("div",{className:"input-row"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",name:"password",id:"password",placeholder:"Enter your password",onChange:i,onBlur:c,value:a.password,className:o.password&&s.password?"has-error":null}),r.a.createElement(f,{touched:o.password,message:s.password})),r.a.createElement("div",{className:"input-row"},r.a.createElement("label",{htmlFor:"password-confirmation"},"Confirm your password"),r.a.createElement("input",{type:"password",name:"passwordConfirmation",id:"password-confirmation",placeholder:"Confirm your password",onChange:i,onBlur:c,value:a.passwordConfirmation,className:o.passwordConfirmation&&s.passwordConfirmation?"has-error":null}),r.a.createElement(f,{touched:o.passwordConfirmation,message:s.passwordConfirmation})),r.a.createElement("div",{className:"input-row"},r.a.createElement("label",{htmlFor:"country"},"Country"),r.a.createElement(h.a,{inputProps:{placeholder:"Type your country",autoComplete:"abcd",name:"country",id:"country",value:t,onChange:function(e,a){var t=a.newValue;n(t)},className:o.country&&s.country?"has-error":null},suggestions:l,onSuggestionsFetchRequested:function(){var e=Object(m.a)(u.a.mark((function e(a){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.value){e.next=4;break}return d([]),e.abrupt("return");case 4:return e.prev=4,e.next=7,fetch("https://restcountries.eu/rest/v2/name/".concat(t)).then((function(e){return e.json()}));case 7:n=e.sent,d(n.map((function(e){return{name:e.name,flag:e.flag}}))),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),d([]);case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(a){return e.apply(this,arguments)}}(),onSuggestionsClearRequested:function(){d([])},onSuggestionSelected:function(e,a){var t=a.suggestion;"enter"===a.method&&e.preventDefault(),n(t.name),g("country",t.name)},getSuggestionValue:function(e){return e.name},renderSuggestion:function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:e.flag,width:"20",alt:e.name}),e.name)}}),r.a.createElement(f,{touched:o.country,message:s.country})),r.a.createElement("div",{className:"input-row"},r.a.createElement("button",{type:"submit",disabled:w},"Submit")))}))},v=(t(87),function(){return r.a.createElement(g,null)});o.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.c181c4c0.chunk.js.map