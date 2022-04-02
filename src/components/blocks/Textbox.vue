<template>
    <div class="b-text">
        <label for="sample1" class="b-text_label">
            必須入力項目<span class="b-text_required">必須</span>
        </label>
        <input type="text" class="b-text_input" name="sample1" autocomplete="off" placeholder="Sample text">
    </div>
    <div class="b-text">
        <label for="sample2" class="b-text_label">通常入力</label>
        <input type="text" class="b-text_input" name="sample2" autocomplete="off" placeholder="Sample text">
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	setup() {
	},
})
</script>

<style lang="scss" scoped>
.b-text {
    text-align: left;
    margin-bottom: 10px;
    &_label {
        font-weight: bold;
        display: block;
        margin-bottom: 5px;
    }
    &_required {
        display: inline-block;
        margin-left: 1rem;
        text-align: center;
        padding: 3px 9px;
        background: red;
        color: white;
        border-radius: 5px;
        font-weight: bold;
    }
    &_input {
        display: block;
        width: 100%;
        padding: 0.5rem 0.8rem;
        letter-spacing: 1.8px;
        border: 2px #9e9e9e solid;
        border-radius: 5px;
        transition: all 0.2s ease-out;
        &:focus {
            outline: none;
            border: 2px #323233 solid;
        }
    }
}
</style>