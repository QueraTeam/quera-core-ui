import{j as r,a as f}from"./chunk-UQDW7KKV-fae5f941.js";import{M as h,g as O,h as j}from"./MdIcon-6f8a77da.js";import{r as n}from"./index-e03f90b5.js";import{a as q}from"./Faded-3cff6ac3.js";import{B as C}from"./chunk-UVUR7MCU-81f32226.js";import{f as k}from"./chunk-ZJJGQIVY-893c3ba0.js";import{B as b}from"./chunk-PULVB27S-95142386.js";import{F as x}from"./chunk-KRPLQIP4-87875c98.js";import{H as M}from"./chunk-3ASUQ6PA-40f495ea.js";import{C as F}from"./chunk-YQO7BFFX-f5f4f3a8.js";import{C as A}from"./chunk-FHHZMTWR-eb23eb78.js";import{T as I}from"./chunk-2OOHT3W5-4179f394.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-be2201a4.js";import"./chunk-2GBDXOMA-b5a1e0ac.js";import"./chunk-TKWR62NH-579b21da.js";import"./_commonjsHelpers-725317a4.js";import"./index-fc8d46d4.js";import"./chunk-5PH6ULNP-4a67f1fe.js";import"./emotion-react.browser.esm-cc9fe6e8.js";import"./index-d844c8a1.js";import"./chunk-ZHMYA64R-d863deb5.js";import"./chunk-UBPTU7WB-1ebcafcb.js";var m=k((t,i)=>{const{icon:l,children:e,isRound:s,"aria-label":o,...u}=t,d=l||e,a=n.isValidElement(d)?n.cloneElement(d,{"aria-hidden":!0,focusable:!1}):null;return r(C,{padding:"0",borderRadius:s?"full":void 0,ref:i,"aria-label":o,...u,children:a})});m.displayName="IconButton";const H=t=>t.scrollWidth-t.clientWidth,L=t=>t.scrollHeight-t.clientHeight,T=(t=()=>{},i=()=>{})=>{const l=n.useRef(),e=n.useRef({lastMouseX:null,lastMouseY:null,isMouseDown:!1,isScrolling:!1}),s=n.useCallback(({dx:a,dy:S,behavior:y=void 0})=>{const w=Math.min(H(l.current),l.current.scrollLeft+a),V=Math.min(L(l.current),l.current.scrollTop+S);l.current.scroll({left:w,top:V,behavior:y})},[]),o=n.useCallback(a=>{e.current.isMouseDown=!0,e.current.lastMouseX=a.clientX,e.current.lastMouseY=a.clientY},[]),u=()=>{e.current.isMouseDown=!1,e.current.lastMouseX=null,e.current.lastMouseY=null,e.current.isScrolling&&(e.current.isScrolling=!1,l.current.style.cursor="grab",i())},d=a=>{if(!e.current.isMouseDown)return;e.current.isScrolling||(e.current.isScrolling=!0,l.current.style.cursor="grabbing",t());const S=-(a.clientX-e.current.lastMouseX),y=-(a.clientY-e.current.lastMouseY);e.current.lastMouseX=a.clientX,e.current.lastMouseY=a.clientY,s({dx:S,dy:y})};return n.useEffect(()=>(window.addEventListener("mouseup",u),window.addEventListener("mousemove",d),()=>{window.removeEventListener("mouseup",u),window.removeEventListener("mousemove",d)}),[]),{ref:l,onMouseDown:o,scroll:s}},p=({children:t,navigation:i,...l})=>{const{ref:e,onMouseDown:s,scroll:o}=T();return f(b,{...l,sx:{"> div::-webkit-scrollbar":{display:"none"},"> div":{scrollbarWidth:"none"}},children:[i&&f(b,{children:[r(m,{variant:"unstyled",colorScheme:"blackAlpha",color:"black","aria-label":"Navigate Next",icon:r(h,{icon:O,boxSize:6}),pos:"absolute",right:0,top:"50%",transform:"translateY(-50%)",zIndex:"docked",onClick:()=>o({dx:50,dy:0,behavior:"smooth"})}),r(m,{variant:"unstyled",colorScheme:"blackAlpha",color:"black","aria-label":"Navigate Perv",icon:r(h,{icon:j,boxSize:6}),pos:"absolute",left:0,top:"50%",transform:"translateY(-50%)",zIndex:"docked",onClick:()=>o({dx:-50,dy:0,behavior:"smooth"})})]}),r(x,{as:q,percent:90,overflowX:"scroll",userSelect:"none",cursor:"grab",ref:e,onMouseDown:s,children:t})]})};try{p.displayName="FadedHorizontalScrollable",p.__docgenInfo={description:"",displayName:"FadedHorizontalScrollable",props:{navigation:{defaultValue:null,description:"",name:"navigation",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"As"}},_hover:{defaultValue:null,description:"Styles for CSS selector `&:hover`",name:"_hover",required:!1,type:{name:"SystemStyleObject"}},_active:{defaultValue:null,description:"Styles for CSS Selector `&:active`",name:"_active",required:!1,type:{name:"SystemStyleObject"}},_focus:{defaultValue:null,description:"Styles for CSS selector `&:focus`",name:"_focus",required:!1,type:{name:"SystemStyleObject"}},_highlighted:{defaultValue:null,description:"Styles for the highlighted state.",name:"_highlighted",required:!1,type:{name:"SystemStyleObject"}},_focusWithin:{defaultValue:null,description:"Styles to apply when a child of this element has received focus\n- CSS Selector `&:focus-within`",name:"_focusWithin",required:!1,type:{name:"SystemStyleObject"}},_focusVisible:{defaultValue:null,description:"Styles to apply when this element has received focus via tabbing\n- CSS Selector `&:focus-visible`",name:"_focusVisible",required:!1,type:{name:"SystemStyleObject"}},_disabled:{defaultValue:null,description:"Styles to apply when this element is disabled. The passed styles are applied to these CSS selectors:\n- `&[aria-disabled=true]`\n- `&:disabled`\n- `&[data-disabled]`\n- `&[disabled]`",name:"_disabled",required:!1,type:{name:"SystemStyleObject"}},_readOnly:{defaultValue:null,description:"Styles for CSS Selector `&:readonly`",name:"_readOnly",required:!1,type:{name:"SystemStyleObject"}},_before:{defaultValue:null,description:'Styles for CSS selector `&::before`\n\nNOTE:When using this, ensure the `content` is wrapped in a backtick.\n@example ```jsx\n<Box _before={{content:`""` }}/>\n```',name:"_before",required:!1,type:{name:"SystemStyleObject"}},_after:{defaultValue:null,description:'Styles for CSS selector `&::after`\n\nNOTE:When using this, ensure the `content` is wrapped in a backtick.\n@example ```jsx\n<Box _after={{content:`""` }}/>\n```',name:"_after",required:!1,type:{name:"SystemStyleObject"}},_empty:{defaultValue:null,description:"Styles for CSS selector `&:empty`",name:"_empty",required:!1,type:{name:"SystemStyleObject"}},_expanded:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-expanded` is `true`\n- CSS selector `&[aria-expanded=true]`",name:"_expanded",required:!1,type:{name:"SystemStyleObject"}},_checked:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-checked` is `true`\n- CSS selector `&[aria-checked=true]`",name:"_checked",required:!1,type:{name:"SystemStyleObject"}},_grabbed:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-grabbed` is `true`\n- CSS selector `&[aria-grabbed=true]`",name:"_grabbed",required:!1,type:{name:"SystemStyleObject"}},_pressed:{defaultValue:null,description:'Styles for CSS Selector `&[aria-pressed=true]`\nTypically used to style the current "pressed" state of toggle buttons',name:"_pressed",required:!1,type:{name:"SystemStyleObject"}},_invalid:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-invalid` is `true`\n- CSS selector `&[aria-invalid=true]`",name:"_invalid",required:!1,type:{name:"SystemStyleObject"}},_valid:{defaultValue:null,description:"Styles for the valid state\n- CSS selector `&[data-valid], &[data-state=valid]`",name:"_valid",required:!1,type:{name:"SystemStyleObject"}},_loading:{defaultValue:null,description:"Styles for CSS Selector `&[aria-busy=true]` or `&[data-loading=true]`.\nUseful for styling loading states",name:"_loading",required:!1,type:{name:"SystemStyleObject"}},_selected:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-selected` is `true`\n\n- CSS selector `&[aria-selected=true]`",name:"_selected",required:!1,type:{name:"SystemStyleObject"}},_hidden:{defaultValue:null,description:"Styles for CSS Selector `[hidden=true]`",name:"_hidden",required:!1,type:{name:"SystemStyleObject"}},_autofill:{defaultValue:null,description:"Styles for CSS Selector `&:-webkit-autofill`",name:"_autofill",required:!1,type:{name:"SystemStyleObject"}},_even:{defaultValue:null,description:"Styles for CSS Selector `&:nth-child(even)`",name:"_even",required:!1,type:{name:"SystemStyleObject"}},_odd:{defaultValue:null,description:"Styles for CSS Selector `&:nth-child(odd)`",name:"_odd",required:!1,type:{name:"SystemStyleObject"}},_first:{defaultValue:null,description:"Styles for CSS Selector `&:first-of-type`",name:"_first",required:!1,type:{name:"SystemStyleObject"}},_firstLetter:{defaultValue:null,description:"Styles for CSS selector `&::first-letter`\n\nNOTE: This selector is only applied for block-level elements and not preceded by an image or table.\n@example ```jsx\n<Text _firstLetter={{ textDecoration: 'underline' }}>Once upon a time</Text>\n```",name:"_firstLetter",required:!1,type:{name:"SystemStyleObject"}},_last:{defaultValue:null,description:"Styles for CSS Selector `&:last-of-type`",name:"_last",required:!1,type:{name:"SystemStyleObject"}},_notFirst:{defaultValue:null,description:"Styles for CSS Selector `&:not(:first-of-type)`",name:"_notFirst",required:!1,type:{name:"SystemStyleObject"}},_notLast:{defaultValue:null,description:"Styles for CSS Selector `&:not(:last-of-type)`",name:"_notLast",required:!1,type:{name:"SystemStyleObject"}},_visited:{defaultValue:null,description:"Styles for CSS Selector `&:visited`",name:"_visited",required:!1,type:{name:"SystemStyleObject"}},_activeLink:{defaultValue:null,description:"Used to style the active link in a navigation\nStyles for CSS Selector `&[aria-current=page]`",name:"_activeLink",required:!1,type:{name:"SystemStyleObject"}},_activeStep:{defaultValue:null,description:"Used to style the current step within a process\nStyles for CSS Selector `&[aria-current=step]`",name:"_activeStep",required:!1,type:{name:"SystemStyleObject"}},_indeterminate:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-checked` is `mixed`\n- CSS selector `&[aria-checked=mixed]`",name:"_indeterminate",required:!1,type:{name:"SystemStyleObject"}},_groupHover:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is hovered",name:"_groupHover",required:!1,type:{name:"SystemStyleObject"}},_peerHover:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is hovered",name:"_peerHover",required:!1,type:{name:"SystemStyleObject"}},_groupFocus:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused",name:"_groupFocus",required:!1,type:{name:"SystemStyleObject"}},_peerFocus:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is focused",name:"_peerFocus",required:!1,type:{name:"SystemStyleObject"}},_groupFocusVisible:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus",name:"_groupFocusVisible",required:!1,type:{name:"SystemStyleObject"}},_peerFocusVisible:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus",name:"_peerFocusVisible",required:!1,type:{name:"SystemStyleObject"}},_groupActive:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active",name:"_groupActive",required:!1,type:{name:"SystemStyleObject"}},_peerActive:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is active",name:"_peerActive",required:!1,type:{name:"SystemStyleObject"}},_groupDisabled:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled",name:"_groupDisabled",required:!1,type:{name:"SystemStyleObject"}},_peerDisabled:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is disabled",name:"_peerDisabled",required:!1,type:{name:"SystemStyleObject"}},_groupInvalid:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid",name:"_groupInvalid",required:!1,type:{name:"SystemStyleObject"}},_peerInvalid:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is invalid",name:"_peerInvalid",required:!1,type:{name:"SystemStyleObject"}},_groupChecked:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked",name:"_groupChecked",required:!1,type:{name:"SystemStyleObject"}},_peerChecked:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is checked",name:"_peerChecked",required:!1,type:{name:"SystemStyleObject"}},_groupFocusWithin:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within",name:"_groupFocusWithin",required:!1,type:{name:"SystemStyleObject"}},_peerFocusWithin:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` has focus within",name:"_peerFocusWithin",required:!1,type:{name:"SystemStyleObject"}},_peerPlaceholderShown:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown",name:"_peerPlaceholderShown",required:!1,type:{name:"SystemStyleObject"}},_placeholder:{defaultValue:null,description:"Styles for CSS Selector `&::placeholder`.",name:"_placeholder",required:!1,type:{name:"SystemStyleObject"}},_placeholderShown:{defaultValue:null,description:"Styles for CSS Selector `&:placeholder-shown`.",name:"_placeholderShown",required:!1,type:{name:"SystemStyleObject"}},_fullScreen:{defaultValue:null,description:"Styles for CSS Selector `&:fullscreen`.",name:"_fullScreen",required:!1,type:{name:"SystemStyleObject"}},_selection:{defaultValue:null,description:"Styles for CSS Selector `&::selection`",name:"_selection",required:!1,type:{name:"SystemStyleObject"}},_rtl:{defaultValue:null,description:'Styles for CSS Selector `[dir=rtl] &`\nIt is applied when a parent element or this element has `dir="rtl"`',name:"_rtl",required:!1,type:{name:"SystemStyleObject"}},_ltr:{defaultValue:null,description:'Styles for CSS Selector `[dir=ltr] &`\nIt is applied when a parent element or this element has `dir="ltr"`',name:"_ltr",required:!1,type:{name:"SystemStyleObject"}},_mediaDark:{defaultValue:null,description:"Styles for CSS Selector `@media (prefers-color-scheme: dark)`\nIt is used when the user has requested the system use a light or dark color theme.",name:"_mediaDark",required:!1,type:{name:"SystemStyleObject"}},_mediaReduceMotion:{defaultValue:null,description:"Styles for CSS Selector `@media (prefers-reduced-motion: reduce)`\nIt is used when the user has requested the system to reduce the amount of animations.",name:"_mediaReduceMotion",required:!1,type:{name:"SystemStyleObject"}},_dark:{defaultValue:null,description:"Styles for when `data-theme` is applied to any parent of\nthis component or element.",name:"_dark",required:!1,type:{name:"SystemStyleObject"}},_light:{defaultValue:null,description:"Styles for when `data-theme` is applied to any parent of\nthis component or element.",name:"_light",required:!1,type:{name:"SystemStyleObject"}},_horizontal:{defaultValue:null,description:"Styles for the CSS Selector `&[data-orientation=horizontal]`",name:"_horizontal",required:!1,type:{name:"SystemStyleObject"}},_vertical:{defaultValue:null,description:"Styles for the CSS Selector `&[data-orientation=vertical]`",name:"_vertical",required:!1,type:{name:"SystemStyleObject"}}}}}catch{}const ne={component:p,parameters:{controls:{exclude:/^(?!.*\bnavigation\b).*/}}},c={argTypes:{navigation:{type:"boolean",description:"sets the arrows on the left or right side of the fade"}},render:({navigation:t})=>r(p,{navigation:t,children:r(M,{spacing:4,my:4,children:Array(10).fill(1).map((i,l)=>r(F,{width:200,children:r(A,{children:r(I,{whiteSpace:"normal",children:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."})})},l))})})};var _,g,v;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  argTypes: {
    navigation: {
      type: "boolean",
      description: "sets the arrows on the left or right side of the fade"
    }
  },
  render: ({
    navigation
  }) => <FadedHorizontalScrollable navigation={navigation}>
      <HStack spacing={4} my={4}>
        {Array(10).fill(1).map((item, index) => <Card key={index} width={200}>
              <CardBody>
                <Text whiteSpace="normal">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها
                  و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                </Text>
              </CardBody>
            </Card>)}
      </HStack>
    </FadedHorizontalScrollable>
}`,...(v=(g=c.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const ie=["Base"];export{c as Base,ie as __namedExportsOrder,ne as default};
//# sourceMappingURL=FadedHorizontalScrollable.stories-dc8c8541.js.map