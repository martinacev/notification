import PropTypes from "prop-types";
import classes from "./Notifications.module.css";
import face2 from "/face2.jpg";
import face3 from "/face3.jpg";
import face5 from "/face5.jpg";
import face6 from "/face6.jpg";
import face4 from "/face4.jpg";
import face7 from "/face7.jpg";
import face8 from "/face8.jpg";

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

const Notifications = ({ showColor }) => {
	const notificationData = [
		{
			name: "Ava Smith",
			action: "My first tournament today!",
			image: face2,
			reaction: "reacted to your recent post",
			timestamp: "1m ago",
		},
		{
			name: "Angela Gray",
			image: face3,
			reaction: "followed you",
			timestamp: "5m ago",
		},
		{
			name: "Jacob Thompson",
			image: face5,
			reaction: "has joined your group",
			timestamp: "1 day ago",
			extraInfo: "Chess Club",
		},
	];

	return (
		<div className={classes.container}>
			{notificationData.map((notification, index) => (
				<NotificationItem
					key={index}
					{...notification}
					showColor={showColor}
				/>
			))}
			<ViewedItems
				name="Rizky Smith "
				image={face4}
				reaction="sent you a private message"
				timestamp="5 days ago"
				message="Hello, thanks for setting up the Chess Club. I've been a member for a 
                few weeks now and I'm already having lots of fun and improving my
                game."
				showComment={true}
        withBorder={true}
			/>

			<ViewedItems
				name="Maja Anderson"
				image={face6}
				reaction="commented on your picture"
				timestamp="1 week ago"
				showComment={false}
			/>

			<ViewedItems
				name="Nathan Peterson"
				image={face7}
				reaction="reacted to your recent post"
				action="strategies to increase your win rate"
				timestamp="2 week ago"
				showComment={false}
			/>

			<ViewedItems
				name="Anna Belt"
				image={face8}
				reaction="left the group"
				extraInfo="Chess Group"
				timestamp="5 week ago"
				showComment={false}
			/>
		</div>
	);
};

Notifications.propTypes = {
	showColor: PropTypes.bool.isRequired,
};

const ViewedItems = ({
	name,
	action,
	image,
	reaction,
	timestamp,
	extraInfo,
	message,
	showComment,
	withBorder,
  messageColor,
}) => (
  <div className={`${classes.wrap} ${classes.viewedBox} ${showComment ? classes.withComment : ""}`}>
  <div className={classes.avatar}>
    <img className={classes.profile} src={image} alt="face" />
  </div>
  <div className={classes.informations}>
    <div className={classes.wrapper}>
      <p className={classes.name}>{name}</p>
      <p className={classes.react}>{reaction}</p>
      {action && <p className={classes.action}>{action}</p>}
      {extraInfo && <p className={classes.chess}>{extraInfo}</p>}
    </div>
    <div className={classes.active}>
      <p className={classes.minuteAgo}>{timestamp}</p>
    </div>
    {showComment && (
      <div className={classes.comment}>
        <div className={`${withBorder ? classes.withBorder : ""}`}>
          <p className={classes.message} style={{color: messageColor}}>{message}</p>
        </div>
      </div>
    )}
  </div>
</div>
);

ViewedItems.propTypes = {
	name: PropTypes.string.isRequired,
	action: PropTypes.string,
	image: PropTypes.string.isRequired,
	reaction: PropTypes.string.isRequired,
	timestamp: PropTypes.string.isRequired,
	extraInfo: PropTypes.string,
	message: PropTypes.string,
	showComment: PropTypes.bool.isRequired,
  withBorder: PropTypes.bool,
  messageColor: PropTypes.string,
};


export default Notifications;
