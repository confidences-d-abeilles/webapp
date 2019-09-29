import createAuth0Client from '@auth0/auth0-spa-js';
import React, {
  createContext, useContext, useEffect, useState,
} from 'react';

export const Auth0Context = createContext();
export const useAuth0 = () => useContext(Auth0Context);


export const Auth0Provider = ({ children }) => {
  const [auth0, setAuth0] = useState();

  useEffect(() => {
    const initAuth0 = async () => {
      const auth0Client = await createAuth0Client({
        domain: 'confidences.eu.auth0.com',
        client_id: 'FTynUDZ7MqSWzG7dZAV6gFzEiFAFkX8N',
      });
      setAuth0(auth0Client);
    };

    initAuth0();
  }, []);

  return (
    <Auth0Context.Provider value={auth0}>
      {children}
    </Auth0Context.Provider>
  );
};
