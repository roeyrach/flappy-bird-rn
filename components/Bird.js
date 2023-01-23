import React from "react"
import { View } from "react-native"

function Bird(props) {
	const birdWidth = 50
	const birdHeight = 50

	return (
		<View
			style={{
				position: "absolute",
				backgroundColor: "blue",
				width: 50,
				height: 60,
				left: props.birdLeft - birdWidth / 2,
				bottom: props.birdBottom - birdHeight / 2,
			}}
		></View>
	)
}

export default Bird
