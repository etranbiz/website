import React from 'react'
import SecondaryHeroSection from '@/app/components/global/SecondaryHeroSection'
import clientele_img from '@/app/assets/images/clientele_hero_image.webp'
import DirectCollaborations from '@/app/components/clientele/DirectCollaborations'

const page = () => {
  return (
    <div>
        <SecondaryHeroSection title='Our clientele' content='It is an honour for us to work with such a diverse group of wonderful clients from a variety of industries. Every project presents its own set of challenges and difficulties, which we rise to and overcome. We are always striving to create work that makes us proud. Thank you for Believing in Us!' image={clientele_img} />
        <DirectCollaborations />
    </div>
  )
}

export default page