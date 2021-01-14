<template>
	<div>
		<div class="timer">{{workMin}} : {{seconds}}</div>
		<TimerSetting @onStart="letStart" :workMin="workMin" :refreshMin="refreshMin" />
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
		seconds: "00",
		isWorking: false, //검은색
		timerStart: false, // true: red, false: green
		interval: null,
	}),
	watch: {
		workMin: function () {
			if (this.workMin == 0) {
				clearInterval(this.interval);
			}
		},
	},
	methods: {
		letStart({ setworkMin, setrefreshMin }) {
			this.workMin = setworkMin;
			this.refreshMin = setrefreshMin;
			this.countDown(this.workMin);
		},
		countDown(settedTime) {
			let time = parseInt(settedTime);
			this.interval = setInterval(() => {
				this.workMin = time--;
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