import{j as n}from"./chunk-UQDW7KKV-fae5f941.js";import{n as a}from"./chunk-ZJJGQIVY-893c3ba0.js";import{r as s}from"./index-e03f90b5.js";const r=a.div`
  mask-image: linear-gradient(
    270deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) ${e=>e.percent||75}%,
    rgba(0, 0, 0, 0) 100%
  );
  -webkit-mask-image: linear-gradient(
    270deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) ${e=>e.percent||75}%,
    rgba(0, 0, 0, 0) 100%
  );
`,d=a(r)`
  overflow-x: hidden;
  white-space: nowrap;
`,t=a.div`
  mask-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) min(150px, ${e=>100-(e.percent||50)}%)
  );
  -webkit-mask-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) min(150px, ${e=>100-(e.percent||50)}%)
  );
`,c=a.div(e=>({overflowY:"hidden",maxHeight:e.fade?e.fadedMaxHeight:"auto"})),i=s.forwardRef(({fade:e,fadedMaxHeight:l,fadedPercent:o=30,children:p},m)=>n(t,{percent:e?o:100,children:n(c,{fadedMaxHeight:l,fade:e,ref:m,children:p})}));try{r.displayName="FadedHorizontal",r.__docgenInfo={description:"",displayName:"FadedHorizontal",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},percent:{defaultValue:null,description:"",name:"percent",required:!1,type:{name:"number"}}}}}catch{}try{d.displayName="FadedHorizontalOneLine",d.__docgenInfo={description:"",displayName:"FadedHorizontalOneLine",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},percent:{defaultValue:null,description:"",name:"percent",required:!1,type:{name:"number"}}}}}catch{}try{t.displayName="FadedVertical",t.__docgenInfo={description:"",displayName:"FadedVertical",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},percent:{defaultValue:null,description:"",name:"percent",required:!1,type:{name:"number"}}}}}catch{}try{i.displayName="FadedBox",i.__docgenInfo={description:"",displayName:"FadedBox",props:{fade:{defaultValue:null,description:"",name:"fade",required:!0,type:{name:"boolean"}},fadedMaxHeight:{defaultValue:null,description:"",name:"fadedMaxHeight",required:!0,type:{name:"string | number"}},fadedPercent:{defaultValue:{value:"30"},description:"",name:"fadedPercent",required:!1,type:{name:"number"}}}}}catch{}export{i as F,d as a};
//# sourceMappingURL=Faded-3cff6ac3.js.map
