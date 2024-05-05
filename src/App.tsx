import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import NotFound from './pages/404';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Repositories from './pages/Repositories';
import WhatIUse from './pages/WhatIUse';

import { ContentWrapper } from './components/common/ContentWrapper';
import { Nav } from './components/common/Nav';
import { Wrapper } from './components/common/Wrapper';

import { GlobalStyles } from './styles/global';
import { dark } from './styles/themes/dark';

function App() {
  return (
    <BrowserRouter>
      <Helmet defaultTitle="Bernardo" titleTemplate="%s — Bernardo" />
      <ThemeProvider theme={dark}>
        <GlobalStyles />
        <Wrapper>
          <Nav />
          <ContentWrapper>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/what" element={<WhatIUse />} />
              <Route path="/repos" element={<Repositories />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ContentWrapper>
        </Wrapper>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
