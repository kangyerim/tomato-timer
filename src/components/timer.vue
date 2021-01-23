<template>
	<div>
		<div class="timer" :style="textColor">{{minutes}} : {{10 > seconds ? "0"+seconds :seconds}}</div>
		<TimerSetting @onStart="letStart" />
	</div>
</template>

<script>
import { mapState } from "vuex";
import TimerSetting from "@/components/timerSetting.vue";

export default {
	name: "timer",
	components: { TimerSetting },
	data: () => ({
		minutes: 0,
		seconds: 0,
		timing: 0,
		workingMin: 0,
		refreshMin: 0,
		isWorking: false, //검은색
		timerStart: false, // true: red, false: green
		minsInterval: null,
		refreshInterval: null,
	}),
	watch: {
		workingMin: function () {
			if (this.minutes < 0 && this.seconds < 0) {
				clearInterval(this.minsInterval);
				this.init();
				this.workingMin = 0;
				this.tomatoList.push(true);
				this.countDownRefresh(this.refreshMin);
			}
		},
		refreshMin: function () {
			if (this.minutes < 0 && this.seconds < 0) {
				clearInterval(this.refreshInterval);
				this.refreshMin = 0;
				this.init();
			}
		},
	},
	computed: {
		...mapState(["tomatoList"]),
		textColor() {
			return this.timerStart ? { color: "#e2928d" } : { color: "#6dd4b2" };
		},
	},
	methods: {
		letStart({ setWorkMin, setrefreshMin }) {
			this.workingMin = setWorkMin;
			this.refreshMin = setrefreshMin;
			this.countDown(setWorkMin);
			this.timerStart = true;
		},
		countDown(time) {
			this.minsInterval = setInterval(() => {
				this.workingMin = time--;
				this.minutes = Math.floor(this.workingMin / 60);
				this.seconds = Math.floor(this.workingMin % 60);
			}, 1000);
		},
		countDownRefresh(time) {
			this.refreshInterval = setInterval(() => {
				this.refreshMin = time--;
				this.minutes = Math.floor(this.refreshMin / 60);
				this.seconds = Math.floor(this.refreshMin % 60);
			}, 1000);
		},
		init() {
			this.timerStart = false;
			this.minutes = 0;
			this.seconds = 0;
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