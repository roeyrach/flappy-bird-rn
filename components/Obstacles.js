import React from "react"
import { View } from "react-native"

function Obstacles(props) {
	return (
		<>
			<View
				style={{
					position: "absolute",
					backgroundColor: "green",
					width: props.obstacleWidth,
					height: props.obstacleHeight,
					left: props.obstacleLeft,
					bottom: 0 + props.obstacleHeight + props.gap,
				}}
			></View>
			<View
				style={{
					position: "absolute",
					backgroundColor: "green",
					width: props.obstacleWidth,
					height: props.obstacleHeight,
					left: props.obstacleLeft,
					bottom: 0,
				}}
			></View>
		</>
	)
}

export default Obstacles
