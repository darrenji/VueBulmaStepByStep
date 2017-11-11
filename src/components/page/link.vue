<template>
    <div>link</div>
</template>


export default {
    props: {
        classname: {
            type: String,
            default:''
        },
        callback: {
            type: Function,
            require: false
        }
    },
    methods: {
        run() {
            this.callback && this.callback()
        }
    }
}