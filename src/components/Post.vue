<template>
  <div id="post">
    <h1>{{post.title}}</h1>
    <h3>{{post.author}}</h3>
    <h3>{{post.date}}</h3>
    <ul>
      <li v-for="tag in post.tags">
        {{tag}}
      </li>
    </ul>
    <div class="content" v-html="post.content">
    </div>
    <div class="quicklink">
      <!--<router-link :to="{name:'Post',params:{id:post.prev}}">
          <p style="color:black;">上一篇</p>
        </router-link>
        <router-link :to="{name:'Post',params:{id:post.next}}">
          <p style="color:black;">下一篇</p>
        </router-link>-->
      <a href="javascript:void(0);" style="color:#c6c6c6;" @click="linkto(post.prev)">上一篇</a>
      <a href="javascript:void(0);" style="color:#c6c6c6;" @click="linkto(post.next)">下一篇</a>
    </div>
  </div>
</template>
<style>
.quicklink {
  display: flex;
  justify-content: space-between;
  margin: 1vh 5vw;
}
</style>

<script>
export default {
  data() {
    return {
      post: {
        "title": "载入失败",
        "author": "skadi",
        "date": "2017-01-01 00:00",
        "tags": ["c", "cpp", "javascript", "python", "csharp"],
        "content": "<p>如果你看到了这个页面,表示载入页面失败了.</p>",
        "iso8601Date": "2017-01-01T00:00:00+08:00",
        "basename": "0"
      }
    }
  },
  methods: {
    fetchData(para) {
      let address = para + '.json'
      this.$http.get(address).then(res => {
        this.post = res.body
        // console.log(res.body)
        // console.log(this.post)
      }, res => {
        // alert("network error");
        // console.log('error',res)
        console.log('get post nerwork error')
      })
    },
    linkto(basename) {
      // console.log('click',basename)
      this.$router.push(
        {
          name: 'Post',
          params: {
            id: basename
          }
        }
      )
    }
  },
  created() {
    this.fetchData(this.$route.path)
  },
  computed: {
    router() {
      return this.$route;
    }
  },
  watch: {
    router() {
      this.fetchData(this.$route.path)
    }
  }
}
</script>

<style scoped>
#post {
  text-align: center;
  margin: 10vh auto;
  min-width: 300px;
  max-width: 60vw;
  /*max-height: 50vh;*/
}


.content {
  text-align: left;
  margin: 0 auto;
}

ul {
  display: flex;
  justify-content: center;
  list-style: none;
}

li {
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 5px;
  padding: 1px 5px;
  box-shadow: 0px 0px 1em #000;
}

h1 {
  max-width: 80vw;
  margin: 0 auto;
}

h3 {
  margin: 0px;
}
</style>
<style>
blockquote {
  background-color: rgba(100, 100, 100, 0.5);
  display: block;
  border-left: 6px solid #b4b4b4;
  padding-left: 10px;
  margin: 5px 0px 5px 20px;
}

pre {
  display: block;
  background-color: rgba(50, 50, 50, 0.4);
  /*移动端适配 代码块自动换行*/
  white-space: pre-wrap;
  word-wrap: break-word;
}

pre>code {
  color: yellow !important;
}

.content a {
  color: yellow;
}

.content code {
  color: orangered;
}

.content>h1 {
  border-radius: 5px;
  box-shadow: 0px 0px 1em #000;
}
</style>

