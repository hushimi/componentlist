<template>
    <footer class="footer1">
        <div class="footer1_mainwrap">
            <!-- サイトロゴ -->
            <div class="footer1_logo">
                <a href="#!"><img src="@/assets/img/logo.png"></a>
            </div>

            <!-- 検索バー -->
            <div class="footer1_search-box">
                <input type="text" class="footer1_search-input" placeholder="Search..">

                <button class="footer1_search-btn">
                    <fa icon="search" class="fa-icon mx-auto" />
                </button>
            </div>

            <!-- link -->
            <div class="footer1_links">
                <ul>
                    <li><a href="#">Link1</a></li>
                    <li><a href="#">Link2</a></li>
                    <li><a href="#">プライバシーポリシー</a></li>
                </ul>
            </div>
        </div>

        <!-- copyright and sns link -->
        <div class="footer1_sns-link">
            <p><small>SNS links</small></p>
        </div>
        <div class="footer1_copyright">
            <p><small>Copyright</small></p>
        </div>
    </footer>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	setup() {
	},
})
</script>

<style lang="scss" scoped>
.footer1 {
    width: 100%;
    height: auto;
    margin-top: auto;
    background-color: #4b4d4b;
    color: white;
    font-size: 0.8rem;
    &_mainwrap {
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        padding-top: 1.5rem;
    }

    &_logo {
        padding: 12px;
        width: 33%;
        text-align: center;
        a, a:visited {
            color: #ffffff;
            text-decoration: none;
            text-align: center;
        }
        img {
            height: 30px;
            width: 30px;
            margin: 0 auto;
        }
    }

    &_search-box {
        width: 33%;
        position: relative;
        display: flex;
    }
    &_search-input {
        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: calc(100% - 40px);
        height: 30px;
        padding: 0 0.8rem;
        letter-spacing: 1.8px;
        border-radius:10px 0 0 10px ;
        color: #545455;
        &:focus {
            outline: none;
        }
    }
    &_search-btn {
        text-align: center;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
        height: 30px;
        width: 40px;
        outline: none;
        cursor: pointer;
        border-radius: 0 10px 10px 0 ;
        border-left: none;
        background: #2cc1a5;
        color: white;
    }

    &_links {
        width: 33%;
        text-align: left;
        padding-left: 2rem;
        a, a:visited {
            display: block;
            font-weight: bold;
            padding: 0 20px;
            color: white;
            text-decoration: none;
            transition: color 300ms ease;
        }
        a:hover, a:visited:hover {
            color: #2cc1a5;
        }
    }
}

@media only screen and (max-width: 800px) {
    .footer1 {
        &_mainwrap {
            display: block;
        }
        &_logo {
            width: 100%;
            margin-bottom: 20px;
        }
        &_search-box {
            width: 80%;
            height: 30px;
            margin: 0 auto 20px auto;
        }
        &_links {
            width: 100%;
            text-align: center;
            padding: 0;
            margin-bottom: 20px;
        }
    }
}
</style>