import React from 'react'
import FeatureBox from './FeatureBox'
import featureimage from '../images/feature_1.png';
import featureimage1 from '../images/feature_2.png';
import featureimage2 from '../images/feature_3.png';
function Features() {
  return (
    <div id='features'>
        <div className='a-container'>
            <FeatureBox image={featureimage}   title="Decentralized"/>
            <FeatureBox image={featureimage1} title="Secure"/>8
            <FeatureBox image={featureimage2} title="Encrypted"/>
        </div>
    </div>
  )
}

export default Features