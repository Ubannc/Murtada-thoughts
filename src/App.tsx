import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import QuotePage from './pages/QuotePage';
import GalleryPage from './pages/GalleryPage';
import ArticlesPage from './pages/ArticlesPage';
import BackgroundEffects from './components/effects/BackgroundEffects';

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200">
      <BackgroundEffects />
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/quote/:id" element={<QuotePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;