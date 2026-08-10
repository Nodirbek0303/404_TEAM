import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {MotionConfig} from 'motion/react';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*
      reducedMotion="user" — foydalanuvchi tizimda harakatni kamaytirishni
      yoqsa, Framer Motion animatsiyalari avtomatik o'chadi.
      CSS tomonidagi @media qoidasi bilan birga to'liq qamrov beradi.
    */}
    <MotionConfig reducedMotion="user">
      <App />
    </MotionConfig>
  </StrictMode>,
);
