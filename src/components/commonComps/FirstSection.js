import React from 'react';

import CTA from '../tailwindComponents/CTA'
import './styles/FirstSection.css';

const Title = (props) => {
  const hasSkew = () => {
    switch(props.skew) {
      case 'left':
        return 'skewRight'
      case 'right':
        return 'skewLeft'
      case 'none':
        return 'none'
    }
  }
return (
    <section class="firstSection">
      <div class={`${props.skew === 'left' ? "skewRight" : "skewLeft"}`} style={{background: `${props.bg}`, borderTop: `${props.borderTop === 'none' ? 'none' : '3px solid gray'}`,paddingBottom: `${props.pad ? props.pad : 'auto'}`, zIndex: `${props.zTop}`, minHeight: `${props.skew === 'right' ? '65vh' : '67vh'}`, top: `${props.skew === 'right' ? '-5vh': '0vh'}`, transform: `${props.skew === 'right' ? 'skewY(-5deg)' : 'skewY(9deg)'}`}}>
        <div class={`${props.skew === 'right' ? "skewLeft" : "skewRight"}`} style={{background: `${props.bg}`, zIndex: `${props.zBottom}`, minHeight: `${props.skew === 'left' ? '55vh' : '67vh'}`, top: `${props.skew === 'left' ? '15vh' : '20vh'}`, transform: `${props.skew === 'left' ? 'skewY(-5deg)' : 'skewY(9deg)'}`}}></div>
        </div>

        <props.comp />

      </section>
)
}
export default Title;