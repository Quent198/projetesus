import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LastNews from '../components/homepage/LastNews';


function NewsPage() {
  return (
    <div>
      <Header />
      <main>
        <section className="news-section">
          <LastNews />
        </section>  
      </main>
      <Footer />
    </div>
  );
};

export default NewsPage;

