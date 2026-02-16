import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Features from '../components/Features';
import Aboutus from '../components/Aboutus';
import Services from '../components/Services';
import Categories from '../components/Categories';
import Faqs from '../components/Faqs';
import Contacts from '../components/Contacts';
import Catalogues from '../components/Catalogues';
import '../styles/hovers.css';

function HomePage() {
     return (
          <>
               {/* Navbar */}
               <Navbar />

               {/* Header */}
               <Header />

               {/* Features */}
               <Features />

               {/* Aboutus */}
               <Aboutus />

               {/* Catalogues */}
               <Catalogues />

               {/* Services */}
               <Services />

               {/* Categories */}
               <Categories />

               {/* Faqs */}
               <Faqs />

               {/* Contacts */}
               <Contacts />


               {/* Back to Top */}
               <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
          </>
     );
}

export default HomePage;