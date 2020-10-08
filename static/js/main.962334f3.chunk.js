(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{20:function(e,t,a){e.exports=a(65)},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),c=a.n(o),l=a(7),i=a(3),s=a(4),u=a(6),m=a(5),h=a(18),d=a.n(h),p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"17752655-7d1e30d3f189053aec3fab03b";return d.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat(a,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},g=(a(42),a(19)),f=a.n(g),b=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(f.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})}}]),a}(r.a.Component),v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:""},e.handleChange=function(t){e.setState({inputValue:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.inputValue),e.setState({inputValue:""})},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:"Searchbar"},r.a.createElement("form",{className:"SearchForm",onSubmit:this.handleSubmit},r.a.createElement("button",{type:"submit",className:"SearchForm-button"},r.a.createElement("span",{className:"SearchForm-button-label"},"Search")),r.a.createElement("input",{className:"SearchForm-input",type:"text",autocomplete:"off",autofocus:!0,placeholder:"Search images and photos",onChange:this.handleChange,value:this.state.inputValue})))}}]),a}(n.Component),y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handlerModal=function(t){t.target!==t.currentTarget&&e.props.onImageClick()},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("ul",{className:"ImageGallery",onClick:this.handlerModal},this.props.children)}}]),a}(n.Component),C=function(e){var t=e.message;return r.a.createElement("p",null,t)},E=function(e){var t=e.handleClick;return r.a.createElement("div",{className:"container"},r.a.createElement("button",{className:"Button",type:"button",onClick:t},"Load more"))},O=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleClose=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return r.a.createElement("div",{className:"Overlay",onClick:this.handleClose},r.a.createElement("div",{className:"Modal"},this.props.children))}}]),a}(n.Component),j=(a(64),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return this.props.images.map((function(t){var a=t.id,n=t.webformatURL,o=t.tags;return r.a.createElement("li",{className:"ImageGalleryItem",key:a},r.a.createElement("img",{onClick:function(){return e.props.onCardClick(a)},src:n,alt:o,className:"ImageGalleryItem-image"}))}))}}]),a}(n.Component)),S=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],loading:!1,error:null,searchQuery:"",page:1,showModal:!1,modalContent:""},e.fetchImages=function(){var t=e.state,a=t.searchQuery,n=t.page;e.setState({loading:!0}),p(a,n).then((function(t){return e.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(t)),page:e.page+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loading:!1})}))},e.handleSearchSubmit=function(t){e.setState({searchQuery:t,page:1,images:[]})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.handlerModalContent=function(t){var a=e.state.images.find((function(e){return t===e.id}));e.setState({modalContent:a.largeImageURL})},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=t.searchQuery,n=this.state.searchQuery,r=t.images,o=this.state.images;a!==n&&this.fetchImages(),r!==o&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.loading,n=e.images,o=e.showModal,c=e.modalContent;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{onSubmit:this.handleSearchSubmit}),t&&r.a.createElement(C,{message:"OOPS: ".concat(t.message)}),a&&r.a.createElement(b,null),n.length>0&&r.a.createElement(y,{onImageClick:this.toggleModal},r.a.createElement(j,{images:n,onCardClick:this.handlerModalContent})),o&&r.a.createElement(O,{onClose:this.toggleModal},r.a.createElement("img",{src:c,alt:"modal"})),n.length>0&&!a&&r.a.createElement(E,{handleClick:this.fetchImages}))}}]),a}(n.Component);c.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.962334f3.chunk.js.map