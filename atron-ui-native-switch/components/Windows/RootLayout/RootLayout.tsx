import React from "react";
import { webFrame } from "../../../electron/WebFrame";
import { RootLayoutProps } from "../../Shared/RootLayout/RootLayoutProps";
import styles from "./RootLayout.module.scss";

export function RootLayout(props: RootLayoutProps) {
	webFrame.setZoomFactor(1);

	return (
		<div className={styles.root}>{props.children}</div>
	);
}