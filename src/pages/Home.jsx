import React from 'react'
import HeroSection from '../components/HeroSection'
import PhotoGallery from '../components/PhotoGallery'
import MouseFollow from '../components/MouseFollow'
import ScrollToTop from '../components/ScrollToTop'


const Home = () => {
	return (
		<>
	 <div className="relative  overflow-hidden m-0 ">
      <MouseFollow />
			<ScrollToTop/>
      <HeroSection />
      <PhotoGallery />
    </div>
		
		</>
	)
}

export default Home