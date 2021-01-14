<template>
	<form @submit.prevent="onStart">
		<span>집중할</span>
		<select v-model="setworkMin">
			<option v-for="(item, i) in minutes" :key="i" :value="item.value">{{item.time}}</option>
		</select>
		<span>분</span>

		<span>쉴</span>
		<select v-model="setrefreshMin">
			<option v-for="(item, i) in minutes" :key="i" :value="item.value">{{item.time}}</option>
		</select>
		<span>분</span>

		<button type="submit">시작하기</button>
	</form>
</template>

<script>
export default {
	name: "timer-setting",
	props: {
		workMin: {
			type: Number,
			required: true,
		},
		refreshMin: {
			type: Number,
			required: true,
		},
	},
	data: () => ({
		setworkMin: 0,
		setrefreshMin: 0,
		minutes: [
			{ time: "00", value: 0 },
			{ time: "05", value: 5 },
			{ time: "10", value: 10 },
			{ time: "15", value: 15 },
			{ time: "20", value: 20 },
			{ time: "25", value: 25 },
			{ time: "30", value: 30 },
		],
	}),
	methods: {
		onStart() {
			const { setworkMin, setrefreshMin } = this;
			this.$emit("onStart", { setworkMin, setrefreshMin });
		},
	},
	created() {
		/* props 재할당 */
		this.setworkMin = this.workMin;
		this.setrefreshMin = this.refreshMin;
	},
};
</script>

<style>
</style>