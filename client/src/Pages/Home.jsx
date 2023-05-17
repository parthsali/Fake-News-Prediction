import React, {useState} from "react";
import styles from "./Home.module.css";
import Result from "../Components/Result";
import Loading from "../Components/Loading";
import Navbar from "../Components/Navbar";

const FakeNews = () => {
	const [news, setNews] = useState(null);
	const [result, setResult] = useState("");
	const [showResult, setShowResult] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleOnClick = async () => {
		setLoading(true);
		console.log(news);
		const res = await fetch("http://127.0.0.1:5000/predict", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(news),
		});
		const data = await res.json();

		if (data) {
			console.log(data.prediction);
			setResult(data.prediction);
			setLoading(false);
			setShowResult(true);
			setNews("");
		}
	};

	return (
		<>
			<Navbar />
			{loading && <Loading />}
			<div className={styles.mainWrapper}>
				<div className={styles.predictionWrapper}>
					<div className={styles.predict}>
						<textarea
							className={
								styles.textArea
							}
							name='news'
							placeholder='Enter News Here...'
							onChange={(e) =>
								setNews(
									e.target
										.value,
								)
							}
						/>
						<button
							className={
								styles.button
							}
							onClick={handleOnClick}>
							Submit
						</button>
					</div>
				</div>
				{showResult && (
					<div className={styles.resultWrapper}>
						<div className={styles.result}>
							<h1
								className={
									styles.heading
								}>
								Result
							</h1>

							<p
								className={
									styles.desc
								}>
								The Given News
								is {result}
							</p>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default FakeNews;
