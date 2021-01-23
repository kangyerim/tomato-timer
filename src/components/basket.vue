<!-- 완료한 tomato 4개씩 -->
<template>
	<span class="one-basket">
		<img
			v-for="(tomato,i) in tomatoList"
			:key="i"
			class="one-tomato"
			src="@/assets/tomato.png"
			alt="one_tomato"
		/>
	</span>
</template>

<script>
import { mapState } from "vuex";
import tomato from "@/assets/tomato.png";

export default {
	name: "basket",
	computed: {
		...mapState(["tomatoList"]),
	},
};
</script>

<style>
.one-basket {
	padding: 10px;
}
.one-tomato {
	width: 30px;
	height: 30px;
	padding: 8px;
}
</style>