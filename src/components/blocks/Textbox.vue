<template>
    <div class="b-form">
        <label for="sample1" class="b-form_label">Text<span class="b-form_required">必須</span></label>
        <input type="text" class="b-form_input" name="sample1" autocomplete="off" placeholder="Sample text">
    </div>

    <div class="b-form">
        <label for="samplelist" class="b-form_label">Select</label>
        <div class="b-form_selectwrap">
            <select name="samplelist" class="b-form_select">
                <option value="" selected disabled>数字を選択してください</option>
                <option value="1">sample1</option>
                <option value="2">sample2</option>
                <option value="3">samle3</option>
            </select>
        </div>
    </div>

    <div class="b-form">
        <label for="samplelist" class="b-form_label">CheckBox</label>
        <input type="checkbox" name="samplecheck1" class="b-form_check" id="samplecheck1">
        <label for="samplecheck1" class="b-form_checklabel">Sample check1</label>

        <input type="checkbox" name="samplecheck1" class="b-form_check" id="samplecheck2">
        <label for="samplecheck2" class="b-form_checklabel">Sample check2</label>
    </div>

    <!-- Text copy component -->
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	setup() {
	},
})
</script>

<style lang="scss" scoped>
$gray: #9e9e9e;
$dark: #323233;
$blue: #0095f6;

.b-form {
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
        border: 2px $gray solid;
        border-radius: 5px;
        transition: all 0.2s ease-out;
        &:focus {
            outline: none;
            border: 2px $dark solid;
        }
    }

    // select box
    &_selectwrap {
        position: relative;
        display: flex;
        width: 100%;
        border-radius: 5px;
        overflow: hidden;
        &::after {
            content: "\25BC";
            position: absolute;
            top: 50%;
            right: 10px;
            margin-top: -10px;
            transition: 0.25s color ease;
            pointer-events: none;
        }
        &:hover::after {
            color: $gray;
        }
    }
    &_select {
        flex: 1;
        padding: 0.5rem 0.8rem;
        appearance: none;
        cursor: pointer;
        color: #000;
        border: 2px $gray solid;
        border-radius: 5px;
        letter-spacing: 1.8px;
        &:focus {
            outline: none;
            border: 2px $dark solid;
        }
        &::-ms-expand {
            display: none;
        }
        option {
            width: 100%;
            color: inherit;
            background: white;
        }
    }

    // checkbox
    &_check {
        display: none;
        &:checked + .b-form_checklabel::after {
            opacity: 1;
        }
        &:checked + .b-form_checklabel::before {
            background: $blue;
        }
    }

    &_checklabel {
        display: inline-block;
        width: 100%;
        padding-left: 30px;
        box-sizing: border-box;
        font-size: 0.8rem;
        cursor: pointer;
        position: relative;
        margin-bottom: 0;

        &::before {
            content: "";
            display: block;
            height: 16px;
            width: 16px;
            position: absolute;
            top: 50%;
            left: 5px;
            margin-top: -8px;
            border-radius: 3px;
            background: #fff;
            border: 1px solid $gray;
        }

        &::after {
            opacity: 0;
            content: "";
            display: block;
            width: 5px;
            height: 9px;
            position: absolute;
            top: 12px;
            left: 11px;
            margin-top: -7px;
            transform: rotate(45deg);
            border-right: 3px solid white;
            border-bottom: 3px solid white;
        }
    }
}
</style>