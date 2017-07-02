<template>
    <div class="webchat-list">
        <div class="list-item">
            <div class="avatar">
                <img  class="chat-img" src="./images/chat.png" alt="">
            </div>
            <div class="chat-detail">
                <div class="chat-name">123</div>
                <div class="chat-content">[图片]</div>
            </div>
            <div class="chat-time">下午8：28</div>
        </div>
        <div class="list-item">
            <div class="avatar">
                <img  class="chat-img" src="./images/chat.png" alt="">
            </div>
            <div class="chat-detail">
                <div class="chat-name">123</div>
                <div class="chat-content">[图片]</div>
            </div>
            <div class="chat-time">下午8：28</div>
        </div>
        <div class="list-item">
            <div class="avatar">
                <img  class="chat-img" src="./images/chat.png" alt="">
            </div>
            <div class="chat-detail">
                <div class="chat-name">123</div>
                <div class="chat-content">[图片]</div>
            </div>
            <div class="chat-time">下午8：28</div>
        </div>
        <div class="list-item">
            <div class="avatar">
                <img  class="chat-img" src="./images/chat.png" alt="">
            </div>
            <div class="chat-detail">
                <div class="chat-name">123</div>
                <div class="chat-content">[图片]</div>
            </div>
            <div class="chat-time">下午8：28</div>
        </div>
        <div class="list-item">
            <div class="avatar">
                <img  class="chat-img" src="./images/chat.png" alt="">
            </div>
            <div class="chat-detail">
                <div class="chat-name">123</div>
                <div class="chat-content">[图片]</div>
            </div>
            <div class="chat-time">下午8：28</div>
        </div>
        <div class="list-item">
            <div class="avatar">
                <img  class="chat-img" src="./images/chat.png" alt="">
            </div>
            <div class="chat-detail">
                <div class="chat-name">123</div>
                <div class="chat-content">[图片]</div>
            </div>
            <div class="chat-time">下午8：28</div>
        </div>
        <div class="list-item">
            <div class="avatar">
                <img  class="chat-img" src="./images/chat.png" alt="">
            </div>
            <div class="chat-detail">
                <div class="chat-name">123</div>
                <div class="chat-content">[图片]</div>
            </div>
            <div class="chat-time">下午8：28</div>
        </div>
        <div class="list-item">
            <div class="avatar">
                <img  class="chat-img" src="./images/chat.png" alt="">
            </div>
            <div class="chat-detail">
                <div class="chat-name">123</div>
                <div class="chat-content">[图片]</div>
            </div>
            <div class="chat-time">下午8：28</div>
        </div>
        <div class="list-item">
            <div class="avatar">
                <img  class="chat-img" src="./images/chat.png" alt="">
            </div>
            <div class="chat-detail">
                <div class="chat-name">123</div>
                <div class="chat-content">[图片]</div>
            </div>
            <div class="chat-time">下午8：28</div>
        </div>
        <div class="list-item">
            <div class="avatar">
                <img  class="chat-img" src="./images/chat.png" alt="">
            </div>
            <div class="chat-detail">
                <div class="chat-name">123</div>
                <div class="chat-content">[图片]</div>
            </div>
            <div class="chat-time">下午8：28</div>
        </div>
        <div class="list-item">
            <div class="avatar">
                <img  class="chat-img" src="./images/chat.png" alt="">
            </div>
            <div class="chat-detail">
                <div class="chat-name">123</div>
                <div class="chat-content">[图片]</div>
            </div>
            <div class="chat-time">下午8：28</div>
        </div>
        <div class="list-item">
            <div class="avatar">
                <img  class="chat-img" src="./images/chat.png" alt="">
            </div>
            <div class="chat-detail">
                <div class="chat-name">123</div>
                <div class="chat-content">[图片]</div>
            </div>
            <div class="chat-time">下午8：28</div>
        </div>
    </div>
</template>

<script type="text/javascript">

    export default {
        name: 'webchat',
        props: {
            score: {
                default: '我的'
            }
        },
        created: function () {
        },
        methods: {
           
        }
    }
</script>

<style lang="scss">
    .webchat-list {
        height:100%;
        .list-item {
            height: 130px;
            display: -webkit-box;
            display: -webkit-flex;
            display: flex;
            padding: 10px;
            border-bottom: 1px solid #ccc;
            .avatar {
                position: relative;
                margin-left: 15px;
                width: 100px;
                height: 100px;
                img {
                    border-radius: 100%;
                    width: 100%;
                    height: 100%;
                }
            }
            .chat-detail {
                width: 1%;
                -webkit-box-flex: 1;
                -webkit-flex: 1;
                flex: 1;
                padding-left: 10px;
                text-align: left;
                .chat-content {
                    color:#a3a3a3;
                    font-weight:bold;
                }
            }
            .chat-time {
                font-size:36px;
                font-weight:bold;
                color:#a3a3a3;
            }
        }
    }
</style>
