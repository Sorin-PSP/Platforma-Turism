import React, { useState, useEffect } from 'react'
import { getAllOffers } from '../services/offerService'
import OfferCard from '../components/OfferCard'
import { FaFilter, FaSortAmountDown } from 'react-icons/fa'

const LastMinutePage = () => {
  const [offers, setOffers] = useState([])
  const [sortBy, setSortBy] = useState('priceAsc')
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    priceRange: [0, 5000],
    duration: [],
    meals: [],
    transport: [],
    stars: []
  })

  useEffect(() => {
    // Get all offers and filter for last minute ones
    const allOffers = getAllOffers()
    
    // For this example, we'll consider "last minute" offers as:
    // 1. Those with a discount (oldPrice > price)
    // 2. With upcoming available dates
    const lastMinuteOffers = allOffers.filter(offer => {
      // Check if offer has a discount
      const hasDiscount = offer.oldPrice && offer.oldPrice > offer.price
      
      // Check if offer has upcoming dates
      const hasUpcomingDates = offer.availableDates && offer.availableDates.length > 0
      
      return hasDiscount && hasUpcomingDates
    })
    
    setOffers(lastMinuteOffers)
  }, [])

  const handleFilterChange = (category, value) => {
    setFilters(prev => {
      const newFilters = { ...prev }
      
      if (category === 'priceRange') {
        newFilters.priceRange = value
      } else {
        if (newFilters[category].includes(value)) {
          newFilters[category] = newFilters[category].filter(item => item !== value)
        } else {
          newFilters[category] = [...newFilters[category], value]
        }
      }
      
      return newFilters
    })
  }

  const sortedOffers = [...offers].sort((a, b) => {
    switch (sortBy) {
      case 'priceAsc':
        return a.price - b.price
      case 'priceDesc':
        return b.price - a.price
      case 'discount':
        const discountA = a.oldPrice ? ((a.oldPrice - a.price) / a.oldPrice) * 100 : 0
        const discountB = b.oldPrice ? ((b.oldPrice - b.price) / b.oldPrice) * 100 : 0
        return discountB - discountA
      default:
        return 0
    }
  })

  const filteredOffers = sortedOffers.filter(offer => {
    // Price range filter
    if (offer.price < filters.priceRange[0] || offer.price > filters.priceRange[1]) {
      return false
    }
    
    // Duration filter
    if (filters.duration.length > 0 && !filters.duration.includes(offer.duration)) {
      return false
    }
    
    // Meals filter
    if (filters.meals.length > 0 && !filters.meals.includes(offer.meals)) {
      return false
    }
    
    // Transport filter
    if (filters.transport.length > 0 && !filters.transport.includes(offer.transport)) {
      return false
    }
    
    // Stars filter
    if (filters.stars.length > 0 && !filters.stars.includes(offer.stars)) {
      return false
    }
    
    return true
  })

  return (
    <div className="container-custom py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Oferte Last Minute</h1>
        <p className="text-gray-600">
          Descoperă cele mai bune oferte last minute de la agențiile noastre partenere. 
          Rezervă acum și beneficiază de prețuri speciale pentru vacanța ta!
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start mb-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Oferte disponibile</h2>
          <p className="text-gray-600">{filteredOffers.length} oferte găsite</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="btn btn-outline flex items-center"
          >
            <FaFilter className="mr-2" />
            Filtrează
          </button>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="btn btn-outline"
          >
            <option value="priceAsc">Preț (crescător)</option>
            <option value="priceDesc">Preț (descrescător)</option>
            <option value="discount">Discount</option>
          </select>
        </div>
      </div>

      {showFilters && (
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <h3 className="font-semibold mb-3">Filtre</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Price Range */}
            <div>
              <h4 className="font-medium mb-2">Preț (€)</h4>
              <div className="flex items-center space-x-2">
                <input 
                  type="number" 
                  min="0" 
                  max={filters.priceRange[1]}
                  value={filters.priceRange[0]}
                  onChange={(e) => handleFilterChange('priceRange', [parseInt(e.target.value), filters.priceRange[1]])}
                  className="w-full border rounded px-2 py-1"
                />
                <span>-</span>
                <input 
                  type="number" 
                  min={filters.priceRange[0]} 
                  max="5000"
                  value={filters.priceRange[1]}
                  onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
                  className="w-full border rounded px-2 py-1"
                />
              </div>
            </div>
            
            {/* Duration */}
            <div>
              <h4 className="font-medium mb-2">Durată</h4>
              <div className="space-y-1">
                {[3, 5, 7, 10, 14].map(days => (
                  <label key={days} className="flex items-center">
                    <input 
                      type="checkbox"
                      checked={filters.duration.includes(days)}
                      onChange={() => handleFilterChange('duration', days)}
                      className="mr-2"
                    />
                    {days} zile
                  </label>
                ))}
              </div>
            </div>
            
            {/* Meals */}
            <div>
              <h4 className="font-medium mb-2">Masă</h4>
              <div className="space-y-1">
                {['All Inclusive', 'Demipensiune', 'Mic dejun', 'Fără masă'].map(meal => (
                  <label key={meal} className="flex items-center">
                    <input 
                      type="checkbox"
                      checked={filters.meals.includes(meal)}
                      onChange={() => handleFilterChange('meals', meal)}
                      className="mr-2"
                    />
                    {meal}
                  </label>
                ))}
              </div>
            </div>
            
            {/* Transport */}
            <div>
              <h4 className="font-medium mb-2">Transport</h4>
              <div className="space-y-1">
                {['Avion', 'Autocar', 'Individual'].map(transport => (
                  <label key={transport} className="flex items-center">
                    <input 
                      type="checkbox"
                      checked={filters.transport.includes(transport)}
                      onChange={() => handleFilterChange('transport', transport)}
                      className="mr-2"
                    />
                    {transport}
                  </label>
                ))}
              </div>
            </div>
            
            {/* Stars */}
            <div>
              <h4 className="font-medium mb-2">Stele hotel</h4>
              <div className="space-y-1">
                {[3, 4, 5].map(stars => (
                  <label key={stars} className="flex items-center">
                    <input 
                      type="checkbox"
                      checked={filters.stars.includes(stars)}
                      onChange={() => handleFilterChange('stars', stars)}
                      className="mr-2"
                    />
                    {stars} stele
                  </label>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex justify-end">
            <button 
              onClick={() => setFilters({
                priceRange: [0, 5000],
                duration: [],
                meals: [],
                transport: [],
                stars: []
              })}
              className="btn btn-outline mr-2"
            >
              Resetează
            </button>
            <button 
              onClick={() => setShowFilters(false)}
              className="btn btn-primary"
            >
              Aplică filtre
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredOffers.map(offer => (
          <OfferCard 
            key={offer.id} 
            offer={offer} 
            showDiscount={true} 
          />
        ))}
      </div>

      {filteredOffers.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold mb-2">Nicio ofertă last minute găsită</h3>
          <p className="text-gray-600">Momentan nu există oferte last minute disponibile. Vă rugăm să reveniți mai târziu sau să încercați să modificați filtrele.</p>
        </div>
      )}
    </div>
  )
}

export default LastMinutePage
