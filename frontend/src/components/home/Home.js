import React from 'react'

const Home = ({ navigate }) => {
  const signup = () => {
    navigate("/signup");
  };

  const login = () => {
    navigate("/login");
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h1>Welcome to Notes Filing</h1>
        </div>
        <div>
          <p>Click login to get filing, or sign up if you haven't already</p>
          <button onClick={login}>Login</button>
          <button onClick={signup}>Sign up</button>
        </div>
      </form>
    </div>
  );
};

export default Home;