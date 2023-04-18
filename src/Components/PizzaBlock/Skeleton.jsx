import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={600}
    viewBox="0 0 280 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="296" rx="10" ry="10" width="280" height="34" /> 
    <circle cx="134" cy="136" r="125" /> 
    <rect x="0" y="357" rx="12" ry="12" width="280" height="110" /> 
    <rect x="108" y="493" rx="0" ry="0" width="2" height="0" /> 
    <rect x="0" y="483" rx="9" ry="9" width="95" height="30" /> 
    <rect x="120" y="479" rx="16" ry="16" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton
