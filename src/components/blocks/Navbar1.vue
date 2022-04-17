<template>
    <section class="nav1">
        <div class="nav1_container">
            <!-- Logo -->
            <div class="nav1_logo">
                <a href="#!"><img src="@/assets/img/logo.png"></a>
            </div>

            <nav class="nav1_navigation">
                <!-- humburger menu -->
                <div class="nav1_mobilemenu">
                    <a id="navbar-toggle" class="nav1_toggle" href="#!" @click="menuToggle()">
                        <span></span>
                    </a>
                </div>

                <!-- Menu -->
                <ul class="nav1_listwrap" id="listwrap" v-click-outside>
                    <li><a href="#!">Home</a></li>
                    <li><a href="#!">About</a></li>
                    <li @click="toggleDropDown($event)">
                        <a href="#!">Services</a>
                        <ul class="nav1_dropdown">
                            <li><a href="#!">Sass</a></li>
                            <li><a href="#!">Less</a></li>
                            <li><a href="#!">Stylus</a></li>
                        </ul>
                    </li>
                    <li><a href="#!">Portfolio</a></li>
                    <li @click="toggleDropDown($event)">
                        <a href="#!">Category</a>
                        <ul class="nav1_dropdown">
                            <li><a href="#!">Sass</a></li>
                            <li><a href="#!">Less</a></li>
                            <li><a href="#!">Stylus</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	setup() {
		/**
        * -----------------------------
        * vue directiveイベント
        * ul 以外をクリックでdrop down 非表示
        * -----------------------------
        */
		const clickOutside = () => {
			const dropDowns = document.getElementsByClassName('nav1_dropdown')
			for (const dropdown of dropDowns) {
				dropdown.classList.remove('active')
			}
		}

		/**
        * -----------------------------
        * mobile menu表示切り替え
        * -----------------------------
        */
		const menuToggle = () => {
			const toggle = document.getElementById('navbar-toggle')
			const list = document.getElementById('listwrap')
			toggle.classList.toggle('active')
			list.classList.toggle('active')
		}

		/**
        * -----------------------------
        * drop down menu表示切り替え
        * -----------------------------
        */
		const toggleDropDown = (event) => {
			const dropDown = event.currentTarget.lastChild
			dropDown.classList.toggle('active')
		}

		return {
			menuToggle, toggleDropDown, clickOutside
		}
	},
})
</script>

<style lang="scss" scoped>
.nav1 {
    height: 55px;
    background: #fefeff;
    box-shadow: 0 5px 35px 0 rgba(0,0,0,0.25);

    &_container {
        max-width: 1000px;
        position: relative;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &_logo {
        padding: 12px;
        line-height: 55px;
        text-align: center;
        a, a:visited {
            color: #ffffff;
            text-decoration: none;
        }
        img {
            height: 30px;
            width: 30px;
        }
    }
    &_listwrap {
        list-style: none;
        margin: 0;
        padding: 0;
        z-index: 999;
        li {
            float: left;
            position: relative;
            a, a:visited {
                display: block;
                font-weight: bold;
                padding: 0 20px;
                line-height: 55px;
                color: #545455;
                text-decoration: none;
                transition: color 300ms ease;
            }
            a:hover, a:visited:hover {
                color: #81ae92;
            }
            // Drop down icon
            a:not(:only-child):after, a:visited:not(:only-child):after {
                padding-left: 4px;
                content: ' \025BE';
            }
        }
    }

    &_dropdown {
        position: absolute;
        right: 0;
        max-height: 0;
        overflow: hidden;
        transition: max-height 1s ease-in-out;
        z-index: 999;
        background: #fff;
        box-shadow: 0 0 35px 0 rgba(0,0,0,0.25);
        &.active {
            max-height: 1000px;
        }
        li a {
            background: #edf1f1;
            padding: 15px;
            line-height: 20px;
        }
        li {
            min-width: 120px;
        }
    }

    /* Mobile navigation */
    &_mobilemenu {
        display: none;
        position: absolute;
        top: 0;
        right: 0;
        background: transparent;
        height: 55px;
        width: 70px;
    }

    &_toggle {
        position: absolute;
        left: 18px;
        top: 15px;
        cursor: pointer;
        padding: 10px 35px 16px 0px;
        span, span:before, span:after {
            position: absolute;
            display: block;
            content: '';
            width: 30px;
            height: 3px;
            cursor: pointer;
            border-radius: 1px;
            background: #545455;
            transition: all 300ms ease-in-out;
        }
        span:before {
            top: -10px;
        }
        span:after {
            bottom: -10px;
        }
        &.active span {
            background-color: transparent;
        }
        &.active span:before,
        &.active span:after {
            top: 0;
        }
        &.active span:before {
            transform: rotate(45deg);
        }
        &.active span:after {
            transform: rotate(-45deg);
        }
    }
}

@media only screen and (max-width: 800px) {
    .nav1 {
        &_mobilemenu {
            display: block;
        }
        &_navigation {
            width: 100%;
        }
        &_listwrap {
            max-height: 0;
            overflow: hidden;
            transition: max-height 1s ease-in-out;
            width: 100%;
            position: absolute;
            // nav height = 55px
            top: 55px;
            left: 0;
            text-align: left;
            li {
                float: none;
                a {
                    padding: 15px;
                    line-height: 20px;
                    background: #fefffe;
                }
            }
            &.active {
                max-height: 1000px;
            }
        }
        &_dropdown {
            position: static;
            li a {
                padding-left: 30px;
            }
        }
    }
}

</style>