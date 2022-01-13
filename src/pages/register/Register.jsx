import Style from "./register.module.css";
import { Link } from "react-router-dom";
import { useRef, useContext } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Register() {
	const { user, isFetching, error, dispatch } = useContext(AuthContext);

	const username = useRef();
	const email = useRef();
	const password = useRef();
	const passwordAgain = useRef();

	const navigate = useNavigate();

	const HandleSubmit = async (e) => {
		e.preventDefault();

		if (passwordAgain.current.value !== password.current.value) {
			passwordAgain.current.setCustomValidity("Passwords don't match");
		} else {
			const user = {
				username: username.current.value,
				email: email.current.value,
				password: password.current.value,
			};
			try {
				await axios.post("/auth/register", user);

				loginCall(
					{ email: email.current.value, password: password.current.value },
					dispatch
				);
				navigate("/");
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<main className={Style.main}>
			<div className={Style.container}>
				<section className={Style.wrapper}>
					<div className={Style.heading}>
						<svg
							width="125"
							height="26"
							viewBox="0 0 125 26"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M4.688 25V17.728H12.608C17.972 17.728 21.644 14.632 21.644 9.304C21.644 3.94 17.972 0.879999 12.608 0.879999H0.8V25H4.688ZM12.248 4.372C15.884 4.372 17.756 5.74 17.756 9.304C17.756 12.868 15.884 14.236 12.248 14.236H4.688V4.372H12.248ZM27.856 25V16.324C27.856 12.544 29.368 10.24 33.616 10.24C37.324 10.24 38.944 11.68 38.944 15.28V25H42.796V14.344C42.796 9.988 40.384 6.748 35.452 6.748C30.88 6.748 28.684 9.556 28.072 12.58H27.856V0.879999H23.968V25H27.856ZM55.4362 25.36C61.4122 25.36 65.4082 21.58 65.4082 16.072C65.4082 10.492 61.4122 6.748 55.4362 6.748C49.4962 6.748 45.5002 10.492 45.5002 16.072C45.5002 21.58 49.4962 25.36 55.4362 25.36ZM55.4362 21.904C51.1162 21.904 49.3162 19.852 49.3162 16.072C49.3162 12.256 51.1162 10.168 55.4362 10.168C59.7922 10.168 61.5922 12.256 61.5922 16.072C61.5922 19.852 59.7922 21.904 55.4362 21.904ZM79.9657 25V21.508H76.7257C74.4937 21.508 73.4857 20.932 73.4857 18.736V10.348H79.9657V7.108H73.4857V3.184H69.6337V7.108H66.6097V10.348H69.6337V18.952C69.6337 23.308 72.0097 25 75.8617 25H79.9657ZM91.5417 25.36C97.5177 25.36 101.514 21.58 101.514 16.072C101.514 10.492 97.5177 6.748 91.5417 6.748C85.6017 6.748 81.6057 10.492 81.6057 16.072C81.6057 21.58 85.6017 25.36 91.5417 25.36ZM91.5417 21.904C87.2217 21.904 85.4217 19.852 85.4217 16.072C85.4217 12.256 87.2217 10.168 91.5417 10.168C95.8977 10.168 97.6977 12.256 97.6977 16.072C97.6977 19.852 95.8977 21.904 91.5417 21.904ZM107.287 25L113.155 18.16H113.407L119.347 25H124.063L116.359 16.072V15.856L124.063 7.108H119.383L113.515 13.876H113.299L107.359 7.108H102.643L110.347 15.928V16.144L102.643 25H107.287Z"
								fill="#DC143C"
							/>
						</svg>
					</div>
					<form name="login" className={Style.form} onSubmit={HandleSubmit}>
						<div className={Style.form__group}>
							<input
								type="email"
								id="email"
								className={Style.form__field}
								placeholder="Your Email"
								required
								ref={email}
							/>
							<label className={Style.form__label}>
								Your Email
							</label>
						</div>

						<div className={Style.form__group}>
							<input
								type="text"
								id="email"
								className={Style.form__field}
								placeholder="Your Username"
								required
								ref={username}
							/>
							<label className={Style.form__label}>
								Your Username
							</label>
						</div>

						<div className={Style.form__group}>
							<input
								type="password"
								id="email"
								className={Style.form__field}
								placeholder="Your Password"
								required
								minLength={6}
								ref={password}
							/>
							<label  className={Style.form__label}>
								Your Password
							</label>
						</div>
						<div className={Style.form__group}>
							<input
								type="password"
								id="email"
								className={Style.form__field}
								placeholder="Confirm Password"
								required
								minLength={6}
								ref={passwordAgain}
							/>
							<label className={Style.form__label}>
								Confirm Password
							</label>
						</div>
						<div className={Style.inputControl}></div>
						<button className={Style.loginBtn} type="submit">
							Sign Up
						</button>
					</form>
					<p>
						Already have an account?
						<span className={Style.register}>
							<Link to="/login">Login</Link>
						</span>
					</p>
				</section>
			</div>
		</main>
	);
}
