(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var i=n(9),a=n.n(i),s=n(2),c=n(8),r=n(3),o=n(4),l=n(6),m=n(5),p=n(1),u=n.n(p),h=(n(14),n(15),n(0)),f=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(r.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={offset:0},e.handlePrevClick=function(){var t=e.props,n=t.images,i=t.step,a=t.frameSize,s=t.itemWidth,c=t.infinite,r=(n.length-a)*s;e.setState((function(e){return{offset:Math.min(e.offset+s*i,0)}})),0===e.state.offset&&c&&e.setState({offset:-r})},e.handleNextClick=function(){var t=e.props,n=t.images,i=t.step,a=t.frameSize,s=t.itemWidth,c=t.infinite,r=(n.length-a)*s;e.setState((function(e){return{offset:Math.max(e.offset-s*i,-r)}})),e.state.offset===-r&&c&&e.setState({offset:0})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.images,n=e.frameSize,i=e.itemWidth,a=e.animationDuration,s=e.infinite,c=this.state.offset;return Object(h.jsxs)("div",{className:"Carousel",children:[Object(h.jsx)("ul",{className:"Carousel__list",style:{width:"".concat(n*i,"px")},children:t.map((function(e,t){return Object(h.jsx)("li",{className:"Carousel__item",style:{transform:"translateX(".concat(c,"px)"),transition:"".concat(a,"ms")},children:Object(h.jsx)("img",{src:e,alt:"".concat(t+1),style:{width:"".concat(i,"px")}})})}))}),Object(h.jsxs)("div",{className:"Carousel__buttons",children:[Object(h.jsx)("button",{type:"button",onClick:this.handlePrevClick,disabled:0===c&&!s,children:"Prev"}),Object(h.jsx)("button",{"data-cy":"next",type:"button",onClick:this.handleNextClick,disabled:c===-(t.length-n)*i&&!s,children:"Next"})]})]})}}]),n}(p.Component),j=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(r.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1},e.changeProp=function(t){e.setState((function(e){return Object(c.a)(Object(c.a)({},e),{},Object(s.a)({},t.target.name,Number(t.target.value)))}))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.images,i=t.step,a=t.frameSize,s=t.itemWidth,c=t.animationDuration,r=t.infinite;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("h1",{"data-cy":"title",children:["Carousel with ",n.length," images"]}),Object(h.jsx)(f,{images:n,step:i,frameSize:a,itemWidth:s,animationDuration:c,infinite:r}),Object(h.jsxs)("form",{className:"App__form",children:[Object(h.jsxs)("label",{children:["Item width:",Object(h.jsx)("input",{className:"App__input",type:"number",name:"itemWidth",value:s,min:"50",max:"400",onChange:this.changeProp})]}),Object(h.jsxs)("label",{children:["Frame Size:",Object(h.jsx)("input",{className:"App__input",type:"number",name:"frameSize",value:a,min:"1",max:n.length-1,onChange:this.changeProp})]}),Object(h.jsxs)("label",{children:["Step:",Object(h.jsx)("input",{className:"App__input",type:"number",name:"step",value:i,min:"1",max:a,onChange:this.changeProp})]}),Object(h.jsxs)("label",{children:["Animation duration:",Object(h.jsx)("input",{className:"App__input",type:"number",name:"animationDuration",value:c,min:"100",max:"5000",step:"100",onChange:this.changeProp})]}),Object(h.jsxs)("label",{children:["Infinite:",Object(h.jsx)("input",{className:"App__input",type:"checkbox",checked:r,onChange:function(){return e.setState((function(e){return{infinite:!e.infinite}}))}})]})]})]})}}]),n}(u.a.Component);a.a.render(Object(h.jsx)(j,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.d1aab391.chunk.js.map