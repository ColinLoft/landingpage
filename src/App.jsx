import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ScrollToTop from './components/ScrollToTop';
import SmoothScroll from './components/SmoothScroll';
import Home from './pages/Home';
import PageLayout from '@/components/PageLayout';
// Solutions
import Wildfire from '@/pages/solutions/Wildfire';
import WhoItsFor from '@/pages/solutions/WhoItsFor';
import ComingNext from '@/pages/solutions/ComingNext';
// Technology
import Sensors from '@/pages/technology/Sensors';
import Aircraft from '@/pages/technology/Aircraft';
import Imaging from '@/pages/technology/Imaging';
import Autonomy from '@/pages/technology/Autonomy';
import Software from '@/pages/technology/Software';
import Operation from '@/pages/technology/Operation';
import Safety from '@/pages/technology/Safety';
import HowItWorks from '@/pages/technology/HowItWorks';
// Company
import AboutUs from '@/pages/company/AboutUs';
import OurMission from '@/pages/company/OurMission';
import OurTeam from '@/pages/company/OurTeam';
import OurApproach from '@/pages/company/OurApproach';
import Careers from '@/pages/company/Careers';
import Partners from '@/pages/company/Partners';
import Contact from '@/pages/company/Contact';
// Other
import Impact from '@/pages/Impact';
import Privacy from '@/pages/legal/Privacy';
import Terms from '@/pages/legal/Terms';
import Cookies from '@/pages/legal/Cookies';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <Routes>
      {/* Add your page Route elements here */}
      <Route path="/" element={<Home />} />
      <Route element={<PageLayout />}>
        {/* Solutions */}
        <Route path="/solutions/wildfire" element={<Wildfire />} />
        <Route path="/solutions/who-its-for" element={<WhoItsFor />} />
        <Route path="/solutions/coming-next" element={<ComingNext />} />
        {/* Technology */}
        <Route path="/technology/sensors" element={<Sensors />} />
        <Route path="/technology/aircraft" element={<Aircraft />} />
        <Route path="/technology/imaging" element={<Imaging />} />
        <Route path="/technology/autonomy" element={<Autonomy />} />
        <Route path="/technology/software" element={<Software />} />
        <Route path="/technology/operation" element={<Operation />} />
        <Route path="/technology/safety" element={<Safety />} />
        <Route path="/technology/how-it-works" element={<HowItWorks />} />
        {/* Company */}
        <Route path="/company/about-us" element={<AboutUs />} />
        <Route path="/company/our-mission" element={<OurMission />} />
        <Route path="/company/our-team" element={<OurTeam />} />
        <Route path="/company/our-approach" element={<OurApproach />} />
        <Route path="/company/careers" element={<Careers />} />
        <Route path="/company/partners" element={<Partners />} />
        <Route path="/company/contact" element={<Contact />} />
        {/* Other */}
        <Route path="/impact" element={<Impact />} />
        <Route path="/legal/privacy" element={<Privacy />} />
        <Route path="/legal/terms" element={<Terms />} />
        <Route path="/legal/cookies" element={<Cookies />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};


function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          <SmoothScroll />
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App