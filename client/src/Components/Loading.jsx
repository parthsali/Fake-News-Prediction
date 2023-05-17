import React from "react";
import styles from "./Loading.module.css";

const Loading = () => {
	return (
		<div className={styles.loading}>
			<img
				className={styles.img}
				src='/Rolling-1s-200px.gif'
				alt='Loading'
			/>
			<h1 className={styles.heading}>Predicting..</h1>
		</div>
	);
};

export default Loading;
