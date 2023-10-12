import React, { useState, useEffect } from "react";
import axios from "axios";
import { ParafinElements } from "@parafin/react-parafin-elements";

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {      
      // Replace with your own Person ID
      try{
      const personId = 'person_f27ccf05-aada-4348-bbcb-11ca672a8b59';
      // const url = 'https://api.parafin.com/auth/redeem_token';
      const clientId = 'e739d6c5-70ed-4ffd-9117-1ec7ad5f29f2';
      const clientSecret = 'sandbox_WMheEpcCf6bfFkUXNBf8526SasjeHYEoYnKp62Y9I9L4Cb7Q3t2p5c87jyc2UxRO';

      const request_body = {
        person_id: personId
      };

      const config = {
        auth: {
          username: clientId,
          password: clientSecret,
        }
      };

      // Fetch Parafin bearer token from server
      const response = await axios.post('/v1/auth/redeem_token', request_body, config, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // const data = await response.json();

      setToken(response.data.bearer_token);
    } catch (error) {
      console.error('Error:', error)
    } };

    if (!token) {
      fetchToken();
    }    
  }); // Add token as a dependency to avoid infinite loop

  console.log('Token:', token) ; 

  return (
    token && 
    ( // Use parentheses instead of curly braces
      <ParafinElements
        product="capital"
        environment="production"
        token={token} 
      />
    )
  );
};

export default App;