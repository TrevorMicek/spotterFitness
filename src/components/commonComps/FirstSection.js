import React from 'react';

import CTA from '../tailwindComponents/CTA'
import './styles/FirstSection.css';

const Title = (props) => (
    <section class="firstSection">
      <div class={`${props.skew === 'right' ? "skewRight" : "skewLeft"}`} style={{background: `${props.bg}`, zIndex: `${props.zTop}`, minHeight: `${props.skew === 'right' ? '55vh' : '67vh'}`, top: `${props.skew === 'right' ? '0vh': '0vh'}`, transform: `${props.skew === 'right' ? 'skewY(-5deg)' : 'skewY(9deg)'}`}}>
        <div class={`${props.skew === 'right' ? "skewLeft" : "skewRight"}`} style={{background: `${props.bg}`, zIndex: `${props.zBottom}`, minHeight: `${props.skew === 'left' ? '55vh' : '67vh'}`, top: `${props.skew === 'left' ? '15vh' : '15vh'}`, transform: `${props.skew === 'left' ? 'skewY(-5deg)' : 'skewY(9deg)'}`}}></div>
        </div>

        <section class="firstSectionWrapper" style={{textAlign: `${props.align}`, alignItems: `${props.align === 'left' ? 'flex-start' : 'flex-end'}`}}>
          {
            props.comp ? <props.comp /> : <>
            {props.imgSrc === undefined ? null :
              <img src={props.imgSrc} alt="colorful desktop icon" class="firstSectionGraphic" width="100px" height="100px" />
              }
            <div class="firstSectionTitle">

              <h3>
                {props.title}
              </h3>

            </div>
            <div>
              <article class="firstSectionText">
                <p>
                  {props.text}

                </p>
              </article>
            </div>
            </>
          }

        </section>
      </section>
)
export default Title;