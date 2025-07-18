import React from 'react'
import Hero from '../components/Hero'
import SearchBar from '../components/SearchBar'
import OffersList from '../components/OffersList'
import PopularDestinations from '../components/PopularDestinations'
import AgenciesList from '../components/AgenciesList'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import OfferUpdateStatus from '../components/OfferUpdateStatus'
import OffersByAgency from '../components/OffersByAgency'
import { getAllOffers } from '../services/offerService'

const HomePage = () => {
  const offers = getAllOffers();
  
  return (
    <div>
      <Hero />
      <SearchBar />
      <OffersList offers={offers} />
      <PopularDestinations />
      <OffersByAgency />
      <AgenciesList />
      <Testimonials />
      <Newsletter />
      {/* Cronometrul este ascuns în pagina principală */}
      <OfferUpdateStatus showTimer={false} />
    </div>
  )
}

export default HomePage
