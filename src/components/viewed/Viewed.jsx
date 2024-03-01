import classes from "./Viewed.module.css";
import face4 from "/face4.jpg";
import face6 from "/face6.jpg";
import face7 from "/face7.jpg";
import face8 from '/face8.jpg';
import PropTypes from "prop-types";

const ViewedItems = ({
	name,
	action,
	image,
	reaction,
	timestamp,
	extraInfo,
	message,
	showComment,
}) => (
	<div className={classes.box}>
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
			{showComment && (
				<div className={classes.comment}>
					<p className={classes.message}>{message}</p>
				</div>
			)}
		</div>
	</div>
);

const Viewed = () => (
	<div className={classes.container}>
		<ViewedItems
			name="Rizky Smith "
			image={face4}
			reaction="sent you a private message"
			timestamp="5 days ago"
			message="Hello, thanks for setting up the Chess Club. I've been a member for a 
                few weeks now and I'm already having lots of fun and improving my
                game."
			showComment={true}
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
			name="Martina Acevska"
			image={face8}
			reaction="left the group"
			extraInfo="Chess Group"
			timestamp="5 week ago"
			showComment={false}
		/>
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
};

export default Viewed;
