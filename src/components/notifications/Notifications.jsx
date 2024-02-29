import PropTypes from "prop-types";
import classes from "./Notifications.module.css";
import face2 from "/face2.jpg";
import face3 from "/face3.jpg";
import face5 from "/face5.jpg";

const NotificationItem = ({
	name,
	action,
	image,
	reaction,
	timestamp,
	extraInfo,
	showColor,
}) => (
	<div className={`${classes.box} ${!showColor ? classes.boxWithColor : ""}`}>
		<div className={classes.avatar}>
			<img className={classes.profile} src={image} alt="face" />
		</div>
		<div className={classes.information}>
			<div className={classes.wrapper}>
				<p className={classes.name}>{name}</p>
				<p className={classes.react}>{reaction}</p>
				{action && <p className={classes.action}>{action}</p>}
				{extraInfo && <p className={classes.chess}>{extraInfo}</p>}
			</div>
			<div className={classes.active}>
				<p className={classes.minuteAgo}>{timestamp}</p>
			</div>
		</div>
	</div>
);

NotificationItem.propTypes = {
	name: PropTypes.string.isRequired,
	action: PropTypes.string,
	image: PropTypes.string.isRequired,
	reaction: PropTypes.string.isRequired,
	timestamp: PropTypes.string.isRequired,
	extraInfo: PropTypes.string,
	showColor: PropTypes.bool.isRequired,
};

const Notifications = ({ showColor }) => (
	<div className={classes.container}>
		<NotificationItem
			name="Ava Smith"
			action="My first tournament today!"
			image={face2}
			reaction="reacted to your recent post"
			timestamp="1m ago"
			showColor={showColor}
		/>

		<NotificationItem
			name="Angela Gray"
			image={face3}
			reaction="followed you"
			timestamp="5m ago"
      showColor={showColor}
		/>

		<NotificationItem
			name="Jacob Thompson"
			image={face5}
			reaction="has joined your group"
			timestamp="1 day ago"
			extraInfo="Chess Club"
      showColor={showColor}
		/>
	</div>
);

Notifications.propTypes = {
  showColor: PropTypes.bool.isRequired,
};

export default Notifications;
