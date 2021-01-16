<template>
	<form @submit.prevent="onStart">
		<span>집중할</span>
		<select v-model="setWorkMin">
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
	data: () => ({
		setWorkMin: 0,
		setrefreshMin: 0,
		minutes: [
			{ time: "00", value: 0 },
			{ time: "05", value: 300 },
			{ time: "10", value: 600 },
			{ time: "15", value: 900 },
			{ time: "20", value: 1200 },
			{ time: "25", value: 1500 },
			{ time: "30", value: 1800 },
		],
	}),
	methods: {
		onStart() {
			const { setWorkMin, setrefreshMin } = this;
			this.$emit("onStart", { setWorkMin, setrefreshMin });
		},
	},
	created() {},
};
</script>

<style>
</style>