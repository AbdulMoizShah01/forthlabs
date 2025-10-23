
import RoadmapSection from '@/ui/page-sections/FothFormulas'
import HeroSection from '@/ui/page-sections/HeroSection'
import ServicesSection from '@/ui/page-sections/ServicesSection'
import React from 'react'
import AboutSection from '@/ui/page-sections/AboutSection'
import MissionVisionSection from '@/ui/page-sections/MissionVisionSection'
import ToolStackSection from '@/ui/page-sections/ToolStackSection'
import PartnersSection from '@/ui/page-sections/ClientSection'
import ContactSection from '@/ui/page-sections/ContactSection'


const page = () => {
  return (
    <main>
   <HeroSection/>
      <ServicesSection/>
<RoadmapSection/>
<AboutSection/>
<MissionVisionSection/>
<ToolStackSection/>
<PartnersSection/>
<ContactSection/>
    </main>
  )
}

export default page