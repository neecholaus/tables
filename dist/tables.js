class Table{constructor(t,i){this.container=t,this.data=i,this.type=i.type?i.type:"vertical_bar",this.runBuildFunction()}runBuildFunction(){this.init(),this.doInjection(),this.styleIt()}init(){switch(this.type){case"vertical_bar":this.buildItems=this.build(),this.doInjection=this.inject(),this.styleIt=this.style()}}build(){var t=[];for(var i in this.data.items){var e=this.data.items[i].height;let a="</div>",s='<div class="vertical_bar_con">'+`<div class="vertical_bar ${this.data.items[i].classes?this.data.items[i].classes.join(" "):""}" data-height="${e}">`+`<div class="vertical_bar_title" data-height="${e}">`+`${this.data.items[i].name}`+a+a+a;t.push(s)}return t}inject(){return function(){let t=document.getElementById(this.container),i='<div id="vertical_max_width_con">';for(let t in this.buildItems)i+=this.buildItems[t];i+="</div>",t.innerHTML=i,t.id=`${this.type}_table_con`}}style(){return function(){var t=document.getElementById("vertical_bar_table_con");this.data.height&&(t.style.height=this.data.height);let i,e=document.querySelectorAll(".vertical_bar_con"),a=100/e.length;this.data.max_width&&(i=this.data.max_width),e.forEach(function(t){let e=t,s=e.getElementsByClassName("vertical_bar")[0];e.style.width=`${a}%`,e.style.maxWidth=`${i}px`;let l=s.getAttribute("data-height");s.style.textAlign="center",s.style.height=`${l}px`}),document.querySelectorAll(".vertical_bar_title").forEach(function(t){let i=t.getAttribute("data-height");t.style.lineHeight=`${i}px`})}}}