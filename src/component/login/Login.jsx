import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import './login.css'

function Login({closeLogin}) {
    return (
        <div className="login-wrapper">
            <div className="login-background">
                <div className="login-modal">
                    <div className="modal-top">
                        <div className="modal-top-left">
                            <img src="data:image/png;base64,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"
                                alt="Logo"
                                className="modal-logo" />
                            <span className="modal-title modal-login">Login</span>
                            <span className="modal-title">Sign Up</span>
                        </div>
                        <span onClick = {() => closeLogin(false)} className="modal-close">x</span>
                    </div>
                    <div className="modal-bottom">
                        <div className="modal-bottom-left">
                            <div className="modal-form">
                                <label htmlFor="phoneNumber" className="modal-label">Login via mobie</label>
                                <div className="phone-wrapper">
                                    <span className="phone-country">+84 ▼</span>
                                    <span className="input-separate"></span>
                                    <input type="tel" id="phoneNumber"
                                        placeholder='Enter Mobie Number'
                                        className="phone-input modal-input"
                                    />
                                </div>
                                <div className="password">
                                    <input type="password"
                                        placeholder='Enter Password'
                                        className="password-input modal-input"
                                    />
                                    <FontAwesomeIcon className="password-icon" icon={faEye} />
                                </div>
                                <span className="forgot-password">forgot password?</span>
                                <button className="login-button">Login</button>
                            </div>
                        </div>
                        <div className="modal-bottom-right">
                            <span className="modal-label">Log in via third-party apps</span>
                            <div className="social-link-wrapper">
                                <div className="social-icon facebook-link"></div>
                                Facebook
                            </div>
                            <div className="social-link-wrapper">
                                <div className="social-icon google-link"></div>
                                Google
                            </div>
                            <div className="social-link-wrapper">
                                <div className="social-icon twitter-link"></div>
                                Twitter
                            </div>
                            <div className="social-more">More </div>
                            <p className="terms-policy">Login means you agree the
                                <span className="hightlight-text"> Terms</span> and
                                <span className="hightlight-text"> Privacy Policy</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login