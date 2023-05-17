import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<div className={styles.logo}>
				<h1>Fake News Detection</h1>
			</div>
		</nav>
	);
};

export default Navbar;
