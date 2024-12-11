import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';  // Import GoogleOAuthProvider

// const clientId = import.meta.env.GOOGLE_CLIENT_ID; // Replace with your actual Google Client ID
const clientId = "768682582810-0cj57ttmiubm9fjnhqtnle277cc9best.apps.googleusercontent.com";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={clientId}>  {/* Wrap the app inside GoogleOAuthProvider */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GoogleOAuthProvider>
  </StrictMode>,
);
