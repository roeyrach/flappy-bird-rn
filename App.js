import { useEffect, useState } from "react"
import { Dimensions, StyleSheet, Text, View } from "react-native"
import Bird from "./components/Bird"
import Obstacles from "./components/Obstacles"

export default function App() {
	const screenWidth = Dimensions.get("screen").width
	const screenHeight = Dimensions.get("screen").height
	const birdLeft = screenWidth / 2
	const [birdBottom, setBirdBottom] = useState(screenHeight / 2)
	const [obstacleLeft, setObstacleLeft] = useState(screenWidth)
	const obstacleWidth = 60
	const obstacleHeight = 300
	const gap = 50
	const gravity = 3
	let gameTimerId
	let obstaclesLeftTimerId

	//start bird falling
	useEffect(() => {
		if (birdBottom > 0) {
			gameTimerId = setInterval(() => {
				setBirdBottom((birdBottom) => birdBottom - gravity)
			}, 30)

			return () => {
				clearInterval(gameTimerId)
			}
		}
	}, [birdBottom])
	console.log(birdBottom)

	//start first obstacles
	useEffect(() => {
		if (obstacleLeft > 0) {
			obstaclesLeftTimerId = setInterval(() => {
				setObstacleLeft((obstacleft) => obstacleLeft - 5)
			}, 30)
		}

		return () => {
			clearInterval(obstaclesLeftTimerId)
		}
	}, [obstacleLeft])

	return (
		<View style={styles.container}>
			<Bird birdBottom={birdBottom} birdLeft={birdLeft} />
			<Obstacles
				obstacleWidth={obstacleWidth}
				obstacleHeight={obstacleHeight}
				gap={gap}
				obstacleLeft={obstacleLeft}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})
