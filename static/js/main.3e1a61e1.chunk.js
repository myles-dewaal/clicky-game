(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),c=t(2),s=t.n(c),r=(t(14),function(){return n.a.createElement("div",{className:"jumbotron jumbotron-fluid"},n.a.createElement("div",{className:"container text-center"},n.a.createElement("h1",{className:"display-4"},"Memory Game"),n.a.createElement("p",{className:"lead"},"Click on any image to score a point. But if you click on an image twice, you loose! Good luck!")))}),l=t(3),m=t(4),o=t(7),g=t(5),d=t(8),u=function(e){return n.a.createElement("div",{className:"allCards col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3",key:e.id,onClick:function(){return e.handleClick(e.id,e.clicked)}},n.a.createElement("img",{id:e.name,src:e.image,alt:e.name,style:e.size}))},p=t(6),f=function(e){function a(){var e,t;Object(l.a)(this,a);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(n)))).state={images:p,message:"Click an image to begin!",score:0,topScore:0},t.handleClick=function(e,a){var i=t.state.images;if(a)return i.forEach((function(e,a){i[a].clicked=!1})),t.setState({image:i.sort((function(){return Math.random()-.5})),message:"You guessed WRONG! -- Click an image to try again.",score:0});i.forEach((function(a,t){e===a.id&&(i[t].clicked=!0)}));var n=t.state,c=n.topScore,s=n.score+1,r=s>c?s:c;return t.setState({image:i.sort((function(){return Math.random()-.5})),message:"You guessed correctly!",score:s,topScore:r})},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container-fluid mainCardContainer"},n.a.createElement("div",{className:"gameMessage text-center"},n.a.createElement("p",null,this.state.message)),n.a.createElement("div",{className:"gameScores text-center"},n.a.createElement("p",null,"Score: ",this.state.score," | Top Score: ",this.state.topScore),n.a.createElement("bR",null)),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},this.state.images.map((function(a){return n.a.createElement(u,{key:a.id,id:a.id,name:a.name,clicked:a.clicked,image:a.imageUrl,handleClick:e.handleClick})})))))}}]),a}(i.Component);var k=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(r,null),n.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e){e.exports=JSON.parse('[{"id":1,"imageUrl":"/assets/images/catdog.jpg","clicked":false,"name":"image1"},{"id":2,"imageUrl":"/assets/images/jerry.png","clicked":false,"name":"image2"},{"id":3,"imageUrl":"/assets/images/patrick.jpg","clicked":false,"name":"image3"},{"id":4,"imageUrl":"/assets/images/popeye.jpg","clicked":false,"name":"image4"},{"id":5,"imageUrl":"/assets/images/sandy.jpg","clicked":false,"name":"image5"},{"id":6,"imageUrl":"/assets/images/scooby.png","clicked":false,"name":"image6"},{"id":7,"imageUrl":"/assets/images/shaggy.jpg","clicked":false,"name":"image7"},{"id":8,"imageUrl":"/assets/images/sheen.jpg","clicked":false,"name":"image8"},{"id":9,"imageUrl":"/assets/images/tom.jpg","clicked":false,"name":"image9"},{"id":10,"imageUrl":"/assets/images/tommy.jpg","clicked":false,"name":"image10"}]')},9:function(e,a,t){e.exports=t(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.3e1a61e1.chunk.js.map