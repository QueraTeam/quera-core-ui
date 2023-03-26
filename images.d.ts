// https://stackoverflow.com/a/45887328/1744633
// https://stackoverflow.com/a/54122106/1744633
declare module "*.svg" {
  import React = require("react");

  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
declare module "*.png" {
  const content: any;
  export default content;
}
