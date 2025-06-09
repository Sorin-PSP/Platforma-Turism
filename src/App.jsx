import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import OfferDetailsPage from './pages/OfferDetailsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import LastMinutePage from './pages/LastMinutePage'
import PoliciesPage from './pages/PoliciesPage'
import AdminLoginPage from './pages/AdminLoginPage'
import AdminDashboardPage from './pages/AdminDashboardPage'
import AdminPartnersPage from './pages/AdminPartnersPage'
import AdminOffersPage from './pages/AdminOffersPage'
import ProtectedRoute from './components/ProtectedRoute'
import OfferUpdateStatus from './components/OfferUpdateStatus'
import CookieBanner from './components/CookieBanner'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Routes>
        {/* Public Routes */}
        <Route path="/*" element={
          <>
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/oferta/:id" element={<OfferDetailsPage />} />
                <Route path="/despre" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/last-minute" element={<LastMinutePage />} />
                <Route path="/politici" element={<PoliciesPage />} />
              </Routes>
            </main>
            <Footer />
            <OfferUpdateStatus isAdminPanel={false} />
            <CookieBanner />
          </>
        } />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/dashboard" element={
          <ProtectedRoute>
            <AdminDashboardPage />
          </ProtectedRoute>
        } />
        <Route path="/admin/partners" element={
          <ProtectedRoute>
            <AdminPartnersPage />
          </ProtectedRoute>
        } />
        <Route path="/admin/offers" element={
          <ProtectedRoute>
            <AdminOffersPage />
          </ProtectedRoute>
        } />
      </Routes>
    </div>
  )
}

export default App
