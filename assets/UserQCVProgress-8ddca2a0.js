import{j as e,a as n}from"./chunk-UQDW7KKV-fae5f941.js";import{p as q}from"./string-e261e839.js";import{H as h}from"./chunk-3ASUQ6PA-40f495ea.js";import{L as y}from"./chunk-K7XRJ7NL-48b3fbc0.js";import{c as g,f as S,o as L}from"./chunk-ZJJGQIVY-893c3ba0.js";import{V as M}from"./chunk-NTCQBYKE-16631f91.js";import{g as N,p as T,s as U}from"./chunk-TXZFUZNG-c6b463a0.js";import{a as I}from"./chunk-TKWR62NH-579b21da.js";import{c as Q}from"./index-fc8d46d4.js";var v=g("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});v.displayName="Spacer";var[$,B]=Q({name:"ProgressStylesContext",errorMessage:`useProgressStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Progress />" `}),H=S((r,a)=>{const{min:s,max:t,value:d,isIndeterminate:c,role:m,...o}=r,l=N({value:d,min:s,max:t,isIndeterminate:c,role:m}),i={height:"100%",...B().filledTrack};return e(g.div,{ref:a,style:{width:`${l.percent}%`,...o.style},...l.bind,...o,__css:i})}),x=S((r,a)=>{var s;const{value:t,min:d=0,max:c=100,hasStripe:m,isAnimated:o,children:l,borderRadius:p,isIndeterminate:i,"aria-label":P,"aria-labelledby":_,"aria-valuetext":k,title:V,role:w,...C}=L(r),u=I("Progress",r),f=p??((s=u.track)==null?void 0:s.borderRadius),A={animation:`${U} 1s linear infinite`},R={...!i&&m&&o&&A,...i&&{position:"absolute",willChange:"left",minWidth:"50%",animation:`${T} 1s ease infinite normal none running`}},j={overflow:"hidden",position:"relative",...u.track};return e(g.div,{ref:a,borderRadius:f,__css:j,...C,children:n($,{value:u,children:[e(H,{"aria-label":P,"aria-labelledby":_,"aria-valuetext":k,min:d,max:c,value:t,isIndeterminate:i,css:R,borderRadius:f,title:V,role:w}),l]})})});x.displayName="Progress";const b=({name:r,avatar:a,progress:s,isMobile:t})=>n(h,{spacing:4,width:"full",children:[e("img",{alt:r,src:a,width:"45px",height:"45px"}),n(M,{flex:1,align:"stretch",children:[n(h,{spacing:4,children:[!t&&e("span",{children:r}),n("span",{title:"درصد تکمیل",children:[q(s),"٪ پیشرفت"]}),e(v,{}),e(y,{color:"text.brand",href:"/",target:"_blank",rel:"noreferrer",children:"مشاهده"}),e(y,{color:"text.brand",href:"/",target:"_blank",rel:"noreferrer",children:"تکمیل"})]}),e(x,{colorScheme:"green",size:"sm",borderRadius:"md",value:s})]})]});try{b.displayName="UserQCVProgress",b.__docgenInfo={description:"",displayName:"UserQCVProgress",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},avatar:{defaultValue:null,description:"",name:"avatar",required:!0,type:{name:"string"}},progress:{defaultValue:null,description:"",name:"progress",required:!0,type:{name:"number"}},isMobile:{defaultValue:null,description:"",name:"isMobile",required:!0,type:{name:"boolean"}}}}}catch{}export{v as S,b as U};
//# sourceMappingURL=UserQCVProgress-8ddca2a0.js.map