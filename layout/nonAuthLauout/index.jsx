import Header from '../../components/header';
import Footer from '../../components/footer';

export default function NonAuthLayout({ children }) {
  return (
    <div className="global__content">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
