import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Reviews from '../components/homepage/Reviews';
function ReviewPage() {
  return (
    
        <div>
          <Header />
          <main>
            <section className="news-section">
              <Reviews />
            </section>  
          </main>
          <Footer />
        </div>
  )
}

export default ReviewPage
