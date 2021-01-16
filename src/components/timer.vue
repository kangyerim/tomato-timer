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
			if (this.workMin < 0 && this.seconds < 0) {
				clearInterval(this.minsInterval);
				this.workMin = 0;
				this.seconds = 0;
				this.timerStart = false;
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
			this.countDown(setWorkMin);
			this.timerStart = true;
		},
		countDown(time) {
			this.minsInterval = setInterval(() => {
				let oneSecondLater = time--;
				this.workMin = Math.floor(oneSecondLater / 60);
				this.seconds = Math.floor(oneSecondLater % 60);
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