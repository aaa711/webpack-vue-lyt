<template>
    <div class="lyt-tabs">
        <router-link class="cell" to="/lyt/webchat">
            <div class="img ico-1"></div>
            <div class="banner-span">微信</div>
        </router-link>
        <router-link class="cell" to="/lyt/friends">
            <div class="img ico-2"></div>
            <div class="banner-span">通讯录</div>
        </router-link>
        <router-link class="cell" to="/lyt/finds">
            <div class="img ico-3"></div>
            <div class="banner-span">发现</div>
        </router-link>
        <router-link class="cell" to="/lyt/profile">
            <div class="img ico-3"></div>
            <div class="banner-span">我</div>
        </router-link>
    </div>
</template>

<script type="text/javascript">

    export default {
        name: 'banner',
        props: {
            name: {
                default: '微信'
            }
        },
        created: function () {
        },
        methods: {
           
        }
    }
</script>

<style lang="scss">
    .lyt-tabs {
        text-align: center;
        position: fixed;
        bottom: 0;
        left: 0;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        height: 150px;
        line-height: 150px;
        background: #fff;
        box-shadow: 0 0 3px rgba(0,0,0,.2);
        &:after{
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            border-top: 1px solid rgba(7, 17, 27, 0.1);
            content: '';
        }
        .cell {
            width: 1%;
            -webkit-box-flex: 1;
            -webkit-flex: 1;
            flex: 1;
            -webkit-box-orient: vertical;
            box-orient: vertical;
            -webkit-box-pack: center;
            box-pack: center;
            -webkit-flex-direction: column;
            flex-direction: column;
            -webkit-justify-content: center;
            justify-content: center;
            height: 100px;
        }
    }

</style>
