<template>
	<div>
		<div class="dialog-overlay show">
			<div class="dialog">
				<div class="dialog-tit">{{ title }}</div>
				<div class="dialog-text">{{ msg }}</div>
				<div class="dialog-foot">
					<div class="dialog-btn-cont">
						<button v-if="buttons[0]" type="button" class="dialog-btn cancel" @click="onCancel">취소</button>
						<button v-if="buttons[1]" type="button" class="dialog-btn confirm" @click="onYes">확인</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "alert",
	props: {
		title: String,
		msg: String,
		buttons: { default: () => [true, true], type: Array },
	},
	data: () => ({}),
	methods: {
		onCancel() {
			this.$emit("cancel");
		},
		onYes() {
			this.$emit("yes");
		},
	},
};
</script>

<style scoped>
.dialog-overlay {
	z-index: 1000;
	display: none;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	text-align: center;
	font-size: 0;
	overflow-y: auto;
	background-color: rgba(0, 0, 0, 0.3);
	opacity: 0;
	transition: opacity 0.3s;
	pointer-events: none;
}
.dialog-overlay.show {
	display: block;
	opacity: 1;
	pointer-events: auto;
}
.dialog-overlay:before {
	content: "";
	display: inline-block;
	height: 100%;
	vertical-align: middle;
}
.dialog-overlay .dialog {
	z-index: 1001;
	position: static;
	display: inline-block;
	width: 282px;
	margin: 10px 0;
	padding: 25px 0 0 0;
	opacity: 0;
	pointer-events: none;
	background: #fff;
	border-radius: 5px;
	vertical-align: middle;
	box-sizing: border-box;
	text-align: left;
}
.dialog-overlay.show .dialog {
	opacity: 1;
	pointer-events: auto;
}
.dialog-overlay .dialog-tit {
	display: block;
	padding: 0 25px 5px;
	font-size: 14px;
	line-height: 20px;
	color: #252525;
	font-weight: 700;
}
.dialog-overlay .dialog-text {
	padding: 0 25px;
	font-size: 14px;
	line-height: 20px;
	color: #4f4f4f;
}
.dialog-overlay .dialog-foot {
	margin: 12px 0 17px;
}
.dialog-overlay .dialog-foot .dialog-btn-cont {
	padding: 0 14px;
	text-align: right;
}
.dialog-overlay .dialog-foot .dialog-btn-cont .dialog-btn {
	min-width: 57px;
	height: 36px;
	font-size: 14px;
	color: #4f4f4f;
	text-align: center;
}
.dialog-overlay .dialog-foot .dialog-btn-cont .confirm {
	color: #e2928d;
}
.dialog-overlay .dialog-foot .dialog-btn-cont .cancel {
	color: #4f4f4f;
}
</style>