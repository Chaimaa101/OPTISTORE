// resources/js/Layouts/AppLayout.jsx
import Nav from './common/Nav';
import Footer from './common/Footer';
import ToastNotification from '@/pages/ToastNotification'

export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <ToastNotification/>
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}