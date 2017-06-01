<template>
    <div id="posts">
        <div class="post" v-for="item in this.list">
            <router-link :to="{name:'Post',params:{id:item.basename}}">
                <h3>{{item.title}}</h3>
                <h5>{{item.author}}</h5>
                <h5>{{item.date}}</h5>
                <div class="content" v-text="item.content"></div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    "title": "载入失败",
                    "author": "skadi",
                    "date": "2017-01-01 00:00",
                    "tags": ["日常", "无聊"],
                    "content": "如果你看到这个了,表明载入失败了",
                    "iso8601Date": "2017-01-01T00:00:00+08:00",
                    "basename": "0"
                }
            ]
        }
    },
    methods: {
        fetchData(para) {
            let address = para + '/list.json'
            this.$http.get(address).then(res => {
                this.list = res.body
                // console.log(this.list)
                // console.log(res.body)
            }, res => {
                // alert("network error");
                // console.log('error',res)
                console.log('get posts list nerwork error')
            })
        }
    },
    created() {
        // console.log(this.$route)
        this.fetchData(this.$route.path)
    }
}
</script>

<style scoped>
#posts {
    text-align: center;
    display: flex;
    /*justify-content: center;*/
    flex-direction: column;
    box-sizing: border-box;
}

.post {
    min-width: 300px;
    max-width: 60vw;
    /*div 居中*/
    margin: 4vh auto;
    border: 2px solid #6c6c6c;
}

.content {
    /*min-width: 300px;
    max-width: 60vw;*/
    margin: 0 auto;
    height: 15vh;
    overflow: hidden;
    word-break: break-word;
    text-overflow: ellipsis;
}

a {
    color: #cccccc;
}

h5,
h3 {
    margin-top: 0;
    margin-bottom: 0;
}

h3 {
    color: goldenrod;
    text-shadow: 0px 0px 1em #000;
}
</style>
<style>

</style>
