const a=({label:l,icon:r,width:t=250,size:n,placeholder:o})=>"TODO";try{a.displayName="IconInput",a.__docgenInfo={description:"",displayName:"IconInput",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"enum",value:[{value:'"search"'},{value:'"at-sign"'}]}},width:{defaultValue:{value:"250"},description:"",name:"width",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}}}}}catch{}const c={title:"IconInput",component:a,argTypes:{placeholder:{control:{type:"text"}},icon:{control:{type:"select",options:["search","at-sign"]}},size:{control:{type:"select",options:["small","large"]}},label:{control:{type:"text"}},width:{control:{type:"number"}}}},e={args:{placeholder:"Search…",label:"Search",icon:"search",size:"small"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search…',
    label: 'Search',
    icon: 'search',
    size: 'small'
  }
}`,...e.parameters?.docs?.source}}};const s=["Default"];export{e as Default,s as __namedExportsOrder,c as default};
