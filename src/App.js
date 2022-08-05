import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  return (
    <BrowserRouter>
      <FeedbackProvider>
        <div className="bg-sky-800 pb-5 min-h-screen text-white relative">
          <Header text="Feedback UI" />
          <div className="w-4/5 mx-auto">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList />
                  </>
                }
              />
              <Route path="about" element={<AboutPage />} />
            </Routes>
            <AboutIconLink />
          </div>
        </div>
      </FeedbackProvider>
    </BrowserRouter>
  );
}

export default App;
