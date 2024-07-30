// components/Register.js
export default function RegisterPage(){

  return (
    <div className="login-container">
      <div className="login-box">
        <form className="login-form">
          <input type="text" className="input-field" placeholder="Email address or username" />
          <input type="password" className="input-field" placeholder="Password" />
          <input type="password" className="input-field" placeholder="Confirm Password" />
          <button type="submit" className="button">Register</button>
        </form>
        <div className="footer">
          <a href="/login">Already have an account? Log in</a>
        </div>
      </div>
    </div>
  );
}