<template>
    <div class="lyt-header">
       <div class="header-text">{{title}}</div>
    </div>
</template>

<script type="text/javascript">

    export default {
        name: 'banner',
        props: {
            title: {
                default: ''
            }
        },
        created: function () {
        },
        methods: {
           
        }
    }
</script>

<style lang="scss">
   .lyt-header {
        background: #3a393f;
        color: #fff;
        font-weight: bold;
        height: 120px;
        line-height: 120px;
   }

</style>
