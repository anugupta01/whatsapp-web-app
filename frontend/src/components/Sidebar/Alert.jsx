import React, { useMemo } from "react";
import Icon from "components/Icon";

const alerts = [
	<div key="info" className="sidebar__alert sidebar__alert--info">
		<div className="sidebar__alert-icon-wrapper">
			<Icon id="notification" className="sidebar__alert-icon" />
		</div>
		<div className="sidebar__alert-texts">
			<p className="sidebar__alert-text"> Get notified of new messages </p>
			<p className="sidebar__alert-text"> Turn on your notifications </p>
		</div>
	</div>,
	<div key="danger" className="sidebar__alert sidebar__alert--danger">
		<div className="sidebar__alert-icon-wrapper">
			<Icon id="notification" className="sidebar__alert-icon" />
		</div>
		<div className="sidebar__alert-texts">
			<p className="sidebar__alert-text"> Phone battery low </p>
			<p className="sidebar__alert-text">
				Charge your phone to keep using Whatsapp.
			</p>
		</div>
	</div>,
	<div key="warning" className="sidebar__alert sidebar__alert--warning">
		<div className="sidebar__alert-icon-wrapper">
			<Icon id="noWifi" className="sidebar__alert-icon" />
		</div>
		<div className="sidebar__alert-texts">
			<p className="sidebar__alert-text"> Phone Not Connected</p>
			<p className="sidebar__alert-text">
				Make sure your phone has an active internet connection.{" "}
				
					className="underline"
					href="https://faq.whatsapp.com/web/troubleshooting/cant-connect-to-whatsapp-web-or-desktop/"
					target="_blank"
					rel="noreferrer"
				<a>
					{" "}
					Learn more.{" "}
				</a>
			</p>
		</div>
	</div>,
];

const Alert = () => {
	const randomAlert = useMemo(
		() => alerts[Math.floor(Math.random() * alerts.length)],
		[]
	);
	return <>{randomAlert}</>;
};

export default Alert;