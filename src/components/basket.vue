<!-- 완료한 tomato 4개씩 -->
<template>
	<div>
		<span class="one-basket">
			<img class="one-tomato" src="@/assets/tomato.png" alt="one_tomato" />
			<img class="one-tomato" src="@/assets/tomato.png" alt="one_tomato" />
			<img class="one-tomato" src="@/assets/tomato.png" alt="one_tomato" />
			<img class="one-tomato" src="@/assets/tomato.png" alt="one_tomato" />
		</span>
		<span class="one-basket">
			<img class="one-tomato" src="@/assets/tomato.png" alt="one_tomato" />
			<img class="one-tomato" src="@/assets/tomato.png" alt="one_tomato" />
			<img class="one-tomato" src="@/assets/tomato.png" alt="one_tomato" />
			<img class="one-tomato" src="@/assets/tomato.png" alt="one_tomato" />
		</span>
		<span class="one-basket">
			<img class="one-tomato" src="@/assets/tomato.png" alt="one_tomato" />
			<img class="one-tomato" src="@/assets/tomato.png" alt="one_tomato" />
			<img class="one-tomato" src="@/assets/tomato.png" alt="one_tomato" />
			<img class="one-tomato" src="@/assets/tomato.png" alt="one_tomato" />
		</span>
	</div>
</template>

<script>
import tomato from "@/assets/tomato.png";

export default {
	name: "basket",
};
</script>

<style>
.one-basket {
	padding: 10px;
}
.one-tomato {
	width: 20px;
	height: 20px;
}
</style>