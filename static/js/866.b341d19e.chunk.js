"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[866],{866:function(n,e,r){r.r(e),r.d(e,{default:function(){return j}});var t,i,o,a=r(861),s=r(885),u=r(757),l=r.n(u),c=r(731),d=r(168),p=r(444),h=p.ZP.form(t||(t=(0,d.Z)(["\npadding:2px;\nmargin-top:5px;\ndisplay: flex;\nalign-items: center;\nmax-width: 320px;\nborder: 2px solid black;\nborder-radius: 3px;\n"]))),f=p.ZP.button(i||(i=(0,d.Z)(["\n  \ndisplay: inline-block;\nbackground-color: rosybrown;\n\n  width: 65px;\n  height: 25px;\n  border: 4px;\n  opacity: 1;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  border: 1px solid black;\n  border-radius: 3px;\n  :hover {\n    opacity: 0.5;\n  }\n"]))),x=p.ZP.input(o||(o=(0,d.Z)([" \n\ndisplay: inline-block;\n  margin-right: 5px;\n  width: 100%;\n  font: inherit;\n  font-size: 17px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\nborder: 1px solid rosybrown;\n  border-radius: 3px;\n"]))),b=r(562),g=r(184),m=function(n){var e=n.handleChange;return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(h,{onSubmit:function(n){var r=n.target[0].value;n.preventDefault(),e(r),r||b.Notify.info("Please enter the name of the movie"),n.target[0].value=""},children:[" ",(0,g.jsx)(x,{}),(0,g.jsx)(f,{type:"submit",children:"Search"})]})})},v=r(791),y=r(798),w=r(725),k=r(264),Z=r(742),j=function(){var n,e=(0,c.lr)(),r=(0,s.Z)(e,2),t=r[0],i=r[1],o=(0,v.useState)(null),u=(0,s.Z)(o,2),d=u[0],p=u[1],h=null!==(n=t.get("name"))&&void 0!==n?n:"";(0,v.useEffect)((function(){function n(){return(n=(0,a.Z)(l().mark((function n(){var e;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,h){n.next=4;break}return p(null),n.abrupt("return");case 4:return Z.Loading.arrows({svgColor:" rosybrown"}),n.next=7,(0,y.Ii)(h);case 7:0===(e=n.sent).length&&k.Notify.failure("We didn't find any movies"),p(e),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),console.error();case 15:return n.prev=15,Z.Loading.remove(),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[0,12,15,18]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[h]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("h2",{children:"Find movies"}),(0,g.jsx)(m,{handleChange:function(n){i(""!==n?{name:n}:{})}}),d&&(0,g.jsx)(w.s,{filmsNames:d})]})}}}]);
//# sourceMappingURL=866.b341d19e.chunk.js.map