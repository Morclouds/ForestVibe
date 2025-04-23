import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import IntroPage from './pages/IntroPage';
import ScreamPage from './pages/ScreamPage';
import { CursorProvider } from './context/CursorContext';

function App() {
  return (
    <CursorProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/scream" element={<ScreamPage />} />
          <Route path="*" element={<IntroPage />} /> {/* ✅ fallback for unmatched routes */}
        </Routes>
      </Layout>
    </CursorProvider>
  );
}

export default App;
