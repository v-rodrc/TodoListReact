(this["webpackJsonpsimple-todo-app"]=this["webpackJsonpsimple-todo-app"]||[]).push([[0],{19:function(e,t,n){e.exports=n(42)},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(17),c=n.n(r),i=n(7),l=n(2),s=n(3),d=n(5),p=n(4),u=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentWillUnmount",value:function(){alert("Item about to be deleted!")}},{key:"render",value:function(){var e=this,t=this.props.todo,n=t.completed,o=t.id,r=t.title;return a.a.createElement("li",{className:"todo-item"},a.a.createElement("input",{type:"checkbox",checked:n,onChange:function(){return e.props.handleChangeProps(o)}}),a.a.createElement("button",{onClick:function(){return e.props.deleteTodoProps(o)}},"Delete"),a.a.createElement("span",{style:n?{fontStyle:"italic",color:"#d35e0f",opacity:.4,textDecoration:"line-through"}:null},r))}}]),n}(o.Component),h=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement("div",null,this.props.todos.map((function(t){return a.a.createElement(u,{key:t.id,todo:t,handleChangeProps:e.props.handleChangeProps,deleteTodoProps:e.props.deleteTodoProps})})))}}]),n}(o.Component),m=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e,t){if(e.headerSpan!==this.props.headerSpan){var n="rgb("+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+")";e.headerSpan!==this.props.headerSpan&&(document.getElementById("inH1").innerHTML="clicked",document.getElementById("inH1").style.backgroundColor=n)}}},{key:"render",value:function(){return a.a.createElement("header",{style:{padding:"20px 0",lineHeight:"2em"}},a.a.createElement("h1",{style:{fontSize:"25px",marginBottom:"15px"}},"Simple Todo App ",a.a.createElement("span",{id:"inH1"})),a.a.createElement("p",{style:{fontSize:"19px"}},"Please add to-dos item(s) through the input field"))}}]),n}(o.Component),f=n(18),b=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={title:""},e.onChange=function(t){e.setState(Object(f.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.addTodoProps(e.state.title),e.setState({title:""})},e}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.handleSubmit,className:"form-container"},a.a.createElement("input",{type:"text",placeholder:"Add todo...",value:this.state.title,name:"title",onChange:this.onChange}),a.a.createElement("input",{type:"submit",className:"input-submit",value:"Submit"}))}}]),n}(o.Component),y=n(6),v=n.n(y),j=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={todos:[],show:!1},e.handleChange=function(t){e.setState({todos:e.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e})),show:!e.state.show})},e.delTodo=function(t){v.a.delete("https://jsonplaceholder.typicode.com/todos/${id}").then((function(n){return e.setState({todos:Object(i.a)(e.state.todos.filter((function(e){return e.id!==t})))})}))},e.addTotoItem=function(t){v.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,completed:!1}).then((function(t){return e.setState({todos:[].concat(Object(i.a)(e.state.todos),[t.data])})}))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://jsonplaceholder.typicode.com/todos",{params:{_limit:10}}).then((function(t){return e.setState({todos:t.data})}))}},{key:"render",value:function(){return a.a.createElement("div",{className:"container"},a.a.createElement(m,{headerSpan:this.state.show}),a.a.createElement(b,{addTodoProps:this.addTotoItem}),a.a.createElement(h,{todos:this.state.todos,handleChangeProps:this.handleChange,deleteTodoProps:this.delTodo}))}}]),n}(a.a.Component);n(41);c.a.render(a.a.createElement(j,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.8e28f12e.chunk.js.map