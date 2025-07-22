import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as s}from"./index-D4lIrffr.js";function u(t,a){const r=s.Children.toArray(a);for(const l of r)if(s.isValidElement(l)&&l.props.value===t)return l.props.children||"";return""}const o=({id:t,label:a,value:r,onChange:l,children:i})=>(u(r,i),e.jsx("select",{id:t,value:r,onChange:l,children:i}));try{o.displayName="Select",o.__docgenInfo={description:"",displayName:"Select",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<HTMLSelectElement>) => void"}}}}}catch{}const p={title:"Select",component:o},n={render:()=>{const[t,a]=s.useState("newest");return e.jsxs(e.Fragment,{children:[e.jsx("label",{htmlFor:"filter-by",style:{display:"block",marginBottom:"0.5em"},children:"Filter by:"}),e.jsxs(o,{id:"filter-by",label:"Sort",value:t,onChange:r=>a(r.target.value),children:[e.jsx("option",{value:"newest",children:"Newest Releases"}),e.jsx("option",{value:"price",children:"Price"}),e.jsx("option",{value:"curated",children:"Curated"})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState('newest');
    return <>
        <label htmlFor="filter-by" style={{
        display: 'block',
        marginBottom: '0.5em'
      }}>
          Filter by:
        </label>
        <Select id="filter-by" label="Sort" value={value} onChange={ev => setValue(ev.target.value)}>
          <option value="newest">Newest Releases</option>
          <option value="price">Price</option>
          <option value="curated">Curated</option>
        </Select>
      </>;
  }
}`,...n.parameters?.docs?.source}}};const m=["Default"];export{n as Default,m as __namedExportsOrder,p as default};
