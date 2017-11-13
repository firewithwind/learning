<template>
    <div class="mytemplate">
       <h1>this is a title</h1>
        <div class="test-transition">
            <transition name="fade">
                <span class="test1" v-if="test1">show or hide</span>
            </transition>
            <div>
                <button @click="test1=true">show</button>
                <button @click="test1=false">hide</button>
            </div>
            <div class="test2">
                <div>
                    <button v-on:click="add">Add</button>
                    <button v-on:click="remove">Remove</button>
                </div>
                <transition-group name="list" tag="p">
                    <span v-for="item in items" v-bind:key="item" class="list-item">
                      {{ item }}
                    </span>
              </transition-group>
            </div>
            <div class="test3">
                <button @click="showProps">show props</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        autoattr: {
            type: Number,
            default: 1
        },
        myref: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            attr: '',
            test1: true,
            items: [1, 2, 3, 4, 5, 6],
            nextNum: 10
       }
    },
    created() {
    },
    methods: {
        showProps: function() {
            console.log(this.autoattr)
        },
        randomIndex: function () {
          return Math.floor(Math.random() * this.items.length)
        },
        add: function () {
          this.items.splice(this.randomIndex(), 0, this.nextNum++)
        },
        remove: function () {
          this.items.splice(this.randomIndex(), 1)
        },
    }
}
</script>
<style scoped rel="stylesheet/scss" lang="scss">
.fade-enter-active, .fade-leave-active {
    transition: all .5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
