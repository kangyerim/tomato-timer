<template>
	<div>
		<div class="timer" :style="textColor">{{workMin}} : {{10 > seconds ? "0"+seconds :seconds}}</div>
		<TimerSetting @onStart="letStart" />
	</div>
</template>

<script>
import TimerSetting from "@/components/timerSetting.vue";

export default {
	name: "timer",
	components: { TimerSetting },
	data: () => ({
		workMin: 0,
		refreshMin: 0,
		seconds: 0,
		isWorking: false, //검은색
		timerStart: false, // true: red, false: green
		minsInterval: null,
		secondsInterval: null,
	}),
	watch: {
		workMin: function () {
			if (this.workMin == 0) {
				clearInterval(this.minsInterval);
				this.timerStart = false;
			}
		},
		seconds: function () {
			if (this.workMin == 0) {
				clearInterval(this.secondsInterval);
			}
			if (this.seconds == 0) {
				this.countSeconds();
			}
		},
	},
	computed: {
		textColor() {
			return this.timerStart ? { color: "#6dd4b2" } : { color: "#e2928d" };
		},
	},
	methods: {
		letStart({ setWorkMin, setrefreshMin }) {
			this.workMin = setWorkMin;
			this.refreshMin = setrefreshMin;
			this.countMin(this.workMin);
			this.timerStart = true;
		},
		countMin(workMin) {
			const dateObj = new Date();
			dateObj.setMinutes(workMin);
			let time = dateObj.getMinutes(workMin);
			this.countSeconds();
			this.minsInterval = setInterval(() => {
				this.workMin = time--;
			}, 60000);
		},
		countSeconds() {
			const dateObj = new Date();
			dateObj.setSeconds(59);
			let time = dateObj.getSeconds(59);
			this.secondsInterval = setInterval(() => {
				this.seconds = time--;
			}, 1000);
		},
	},
};
</script>

<style>
.timer {
	padding: 100px;
	font-size: 180px;
}
</style>