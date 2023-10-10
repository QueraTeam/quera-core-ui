import{c as k}from"./index-fc8d46d4.js";import{m as T}from"./index-d844c8a1.js";import{a as j}from"./chunk-TKWR62NH-579b21da.js";import{f as H,o as w,a as q,c as _,d as x,b as P,e as g}from"./chunk-ZJJGQIVY-893c3ba0.js";import{r as d}from"./index-e03f90b5.js";import{j as C}from"./chunk-UQDW7KKV-fae5f941.js";var[A,M]=k({name:"FormControlStylesContext",errorMessage:`useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `}),[E,S]=k({strict:!1,name:"FormControlContext"});function L(i){const{id:r,isRequired:t,isInvalid:l,isDisabled:e,isReadOnly:s,...u}=i,m=d.useId(),a=r||`field-${m}`,v=`${a}-label`,f=`${a}-feedback`,b=`${a}-helptext`,[p,F]=d.useState(!1),[y,h]=d.useState(!1),[c,I]=d.useState(!1),O=d.useCallback((o={},n=null)=>({id:b,...o,ref:T(n,R=>{R&&h(!0)})}),[b]),D=d.useCallback((o={},n=null)=>({...o,ref:n,"data-focus":x(c),"data-disabled":x(e),"data-invalid":x(l),"data-readonly":x(s),id:o.id!==void 0?o.id:v,htmlFor:o.htmlFor!==void 0?o.htmlFor:a}),[a,e,c,l,s,v]),N=d.useCallback((o={},n=null)=>({id:f,...o,ref:T(n,R=>{R&&F(!0)}),"aria-live":"polite"}),[f]),B=d.useCallback((o={},n=null)=>({...o,...u,ref:n,role:"group"}),[u]),$=d.useCallback((o={},n=null)=>({...o,ref:n,role:"presentation","aria-hidden":!0,children:o.children||"*"}),[]);return{isRequired:!!t,isInvalid:!!l,isReadOnly:!!s,isDisabled:!!e,isFocused:!!c,onFocus:()=>I(!0),onBlur:()=>I(!1),hasFeedbackText:p,setHasFeedbackText:F,hasHelpText:y,setHasHelpText:h,id:a,labelId:v,feedbackId:f,helpTextId:b,htmlProps:u,getHelpTextProps:O,getErrorMessageProps:N,getRootProps:B,getLabelProps:D,getRequiredIndicatorProps:$}}var z=H(function(r,t){const l=j("Form",r),e=w(r),{getRootProps:s,htmlProps:u,...m}=L(e),a=q("chakra-form-control",r.className);return C(E,{value:m,children:C(A,{value:l,children:C(_.div,{...s({},t),className:a,__css:l.container})})})});z.displayName="FormControl";var G=H(function(r,t){const l=S(),e=M(),s=q("chakra-form__helper-text",r.className);return C(_.div,{...l==null?void 0:l.getHelpTextProps(r,t),__css:e.helperText,className:s})});G.displayName="FormHelperText";function Y(i){const{isDisabled:r,isInvalid:t,isReadOnly:l,isRequired:e,...s}=J(i);return{...s,disabled:r,readOnly:l,required:e,"aria-invalid":P(t),"aria-required":P(e),"aria-readonly":P(l)}}function J(i){var r,t,l;const e=S(),{id:s,disabled:u,readOnly:m,required:a,isRequired:v,isInvalid:f,isReadOnly:b,isDisabled:p,onFocus:F,onBlur:y,...h}=i,c=i["aria-describedby"]?[i["aria-describedby"]]:[];return e!=null&&e.hasFeedbackText&&(e!=null&&e.isInvalid)&&c.push(e.feedbackId),e!=null&&e.hasHelpText&&c.push(e.helpTextId),{...h,"aria-describedby":c.join(" ")||void 0,id:s??(e==null?void 0:e.id),isDisabled:(r=u??p)!=null?r:e==null?void 0:e.isDisabled,isReadOnly:(t=m??b)!=null?t:e==null?void 0:e.isReadOnly,isRequired:(l=a??v)!=null?l:e==null?void 0:e.isRequired,isInvalid:f??(e==null?void 0:e.isInvalid),onFocus:g(e==null?void 0:e.onFocus,F),onBlur:g(e==null?void 0:e.onBlur,y)}}export{z as F,S as a,M as b,J as c,G as d,Y as u};
//# sourceMappingURL=chunk-XRMX4GAI-92ddb344.js.map