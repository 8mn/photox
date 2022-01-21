import { useContext, useRef, useState, useEffect } from "react";
import Style from "./CreatePost.module.css";

import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

import storage from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { async } from "@firebase/util";

function CreatePost() {
	const { user } = useContext(AuthContext);
	const [image, setImage] = useState(null);

	// const [uploaded, setUploaded] = useState(0);

	// const [newPost, setNewPost] = useState(null)
	const [progress, setProgress] = useState(0);
	const [preview, setPreview] = useState();

	const desc = useRef();

	const handleFile = (e) => {
		const targetImage = e.target.files[0];
		setImage(targetImage);
	};

	const uploadImageToFirebase = (file) => {
		//
		if (!file) return;
		const sotrageRef = ref(storage, `files/${file.name}`);
		const uploadTask = uploadBytesResumable(sotrageRef, file);

		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const prog = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);
				setProgress(prog);
			},
			(error) => console.log(error),
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					// console.log("File available at", downloadURL);
					// setImageAsUrl(downloadURL)
					UploadFilesToServer(downloadURL);
				});
			}
		);
	};

	//upload newPost to api with image as URl
	const handleSubmit = async (e) => {
		e.preventDefault();
		uploadImageToFirebase(image);
	};

	const UploadFilesToServer = async (downloadURL) => {
		const newPostUpload = {
			userId: user._id,
			desc: desc.current.value,
			img: downloadURL,
		};
		// setNewPost(newPostUpload);

		console.log(newPostUpload);
		try {
			await axios.post("/posts", newPostUpload)
			.then(setPreview(undefined))
		} catch (error) {
			console.log(error);
		}
		setPreview(undefined);
	};

	useEffect(() => {
		if (!image) {
			setPreview(undefined);
			return;
		}

		const objectUrl = URL.createObjectURL(image);
		setPreview(objectUrl);

		// free memory when ever this component is unmounted
		return () => URL.revokeObjectURL(objectUrl);
	}, [image]);

	return (
		<div className={Style.share}>
			<div className={Style.Wrapper}>
				<div className={Style.Top}>
					<img
						className={Style.ProfileImg}
						src={
							user.profilePicture ||
							"https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
						}
						alt=""
					/>
					<input
						placeholder={`What's on your mind ${user.username}?`}
						className={Style.Input}
						ref={desc}
						required
					/>
				</div>
				{/* <hr className={Style.shareHr} /> */}
				<form className={Style.Bottom} onSubmit={handleSubmit}>
					<div className={Style.Options}>
						<label className={Style.Option}>
							<div className={Style.iconContainer}>
								<svg
									className={Style.shareIcon}
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="#dc143c"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path d="M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6z" />
									<circle cx="8.5" cy="8.5" r="2.5" />
									<path d="M14.526 12.621L6 22h12.133A3.867 3.867 0 0 0 22 18.133V18c0-.466-.175-.645-.49-.99l-4.03-4.395a2 2 0 0 0-2.954.006z" />
								</svg>
							</div>
							<span className={Style.OptionText}>Photo/Video</span>
							<input
								type="file"
								name=""
								id="file"
								accept=".png,.jpg,.jpeg"
								onChange={handleFile}
								// style={{ display: "none" }}
							/>
						</label>
						{/* <div className={Style.Option}>
							<div className={Style.iconContainer}>
								<svg
									className={Style.shareIcon}
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="#dc143c"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									className={`${Style.ai} ${Style["ai-Location"]}`}
								>
									<circle cx="12" cy="10" r="3" />
									<path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8z" />
								</svg>
							</div>
							<span className={Style.OptionText}>Location</span>
						</div> */}
						{/* <div className={Style.Option}>
							<div className={Style.iconContainer}>
								<svg
									className={Style.shareIcon}
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="#dc143c"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<circle cx="12" cy="12" r="10" />
									<path d="M7 9h2" />
									<path d="M16 9.05v-.1" />
									<path d="M16 15c-.5 1-1.79 2-4 2s-3.5-1-4-2" />
								</svg>
							</div>
							<span className={Style.OptionText}>Feeling</span>
						</div> */}
					</div>
					<button
						className={Style.Button}
						type="submit"
						disabled={!image ? true : ""}
					>
						Share
					</button>
				</form>
				{image && (
					<div className={Style.imageUpload}>
						<span>{progress === 100 ? "Image Posted successfully" : ""}</span>

						<div
							className={preview? Style.CrossContainer: Style.hide}
							onClick={() => setImage(undefined)}
							// style={{ display: !image? "none" :""  }}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="ai ai-Cross"
							>
								<path d="M20 20L4 4m16 0L4 20" />
							</svg>
						</div>
						{preview && <img src={preview} />}
					</div>
				)}
			</div>
		</div>
	);
}

export default CreatePost;
