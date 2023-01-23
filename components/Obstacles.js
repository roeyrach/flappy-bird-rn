import React from "react"
import { View } from "react-native"

function Obstacles(props) {
	return (
		<>
			<View
				style={{
					position: "absolute",
					backgroundColor: props.color,
					width: props.obstacleWidth,
					height: props.obstacleHeight + 100,
					left: props.obstaclesLeft,
					bottom: props.randomBottom + props.obstacleHeight + props.gap,
				}}
			></View>
			<View
				style={{
					position: "absolute",
					backgroundColor: props.color,
					width: props.obstacleWidth,
					height: props.obstacleHeight,
					left: props.obstaclesLeft,
					bottom: props.randomBottom,
				}}
			></View>
		</>
	)
}

export default Obstacles
