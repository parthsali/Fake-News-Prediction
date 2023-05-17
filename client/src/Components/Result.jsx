import React from "react";
import styles from "./Result.module.css";

const Result = ({result}) => {
	return (
		<div className={styles.resultWrapper}>
			<h2>{result}</h2>
		</div>
	);
};

export default Result;
