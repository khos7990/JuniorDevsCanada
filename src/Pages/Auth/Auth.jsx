import { Component } from "react";
import Login from "../../Components/Login/LoginForm";
import SignUp from "../../Components/Signup/SignUpForm";
import "./Auth.css";

export default class Auth extends Component {
  state = {
    showLogin: true,
  };

  render() {
    return (
      <div className="Auth">
        <div className="authContainer">
          <h3
            className="authHeader"
            onClick={() => this.setState({ showLogin: !this.state.showLogin })}
          >
            {this.state.showLogin ? "Login" : "SignUp"}
          </h3>

          {this.state.showLogin ? (
            <Login setUserInState={this.props.setUserInState} />
          ) : (
            <SignUp setUserInState={this.props.setUserInState} />
          )}
        </div>
      </div>
    );
  }
}
