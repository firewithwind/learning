<template>
    <div>
        <div class="navbar">
            <a href="#">{{title}}</a>
            <a href="#">{{write}}</a>
        </div>
        <mytemplate :autoattr="1" myref="tit"></mytemplate>
        <input type="text" v-focus>
    </div>
</template>
<script>
import mytemplate from './mytemplate'
export default {
    components: {
        mytemplate
    },
    data() {
        return {
            msg: 'world',
            title: '简书',
            write: '写文章'
        }
    },
    directives: {
        focus: function(el, binding, vnode) {
            console.log(el);
            console.log(binding);
            console.log(vnode);
        }
    }
}
</script>
<style rel="stylesheet/scss" scoped>
h1 {
    font-size: 20px;
}

a {
    text-decoration: none;
    color: #666666;
}

.navbar {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #111111;
    line-height: 50px;
}
</style>
