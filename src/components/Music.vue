<template>
    <div id="app_bottom" class="fix_bottom">
        <audio ref="audio" autoplay controls :src="src" @ended="next">
        </audio>
    </div>
</template>

<script>
export default {
    name: 'music',
    data() {
        return {
            list: [],
            src: '',
            index: 0
        }
    },
    methods: {
        next: function () {
            this.src = this.list[this.index];
            this.index += 1;
            if (this.index >= this.list.length)
                this.index = 0;
        }
    },
    created() {
        let address = '/static/music/list.json'
        // console.log(address)
        this.$http.get(address).then(res => {
            this.list = res.body
            // console.log(this.list)
            // console.log(res.body)
            this.next()
        }, res => {
            // alert("network error");
            // console.log('error',res)
            console.log('get music list nerwork error')
        })
    },
    mounted() {
        const that = this
        that.$el.firstElementChild.volume = 0.5
        that.$el.style.position = 'fixed'
        document.body.style.marginBottom = that.$el.clientHeight + 'px';
    }
}
</script>

<style>
audio {
    width: 100%;
}

.fix_bottom {
    width: 100%;
    bottom: 0px;
    display: grid;
}
</style>
