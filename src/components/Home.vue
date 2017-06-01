<template>
    <div id="home">
        <div>
            <h1>{{title}}</h1>
        </div>
        <div style="margin-top:10vh;">
            <router-link :to="{name:'Posts'}" class="btn btn-5">
                posts
            </router-link>
        </div>
    
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "my simple blog"
        }
    },

}
</script>
<style lang="scss">
* {
    box-sizing: inherit;
    transition-property: all;
    transition-duration: .6s;
    transition-timing-function: ease;
}
$white:#c6c6c6;
h1 {
  color: $white;
  font-size: 1.25em;
  font-weight: 900;
  margin: 0 0 2em;

  @media (min-width: 450px) {
    font-size: 1.75em;
  }

  @media (min-width: 760px) {
    font-size: 3.25em;
  }

  @media (min-width: 900px) {
    font-size: 5.25em;
    margin: 0 0 1em;
  }
}
.btn {
  color: #fff;
  cursor: pointer;
  display: block;
  font-size: 16px;
  font-weight: 400;
  line-height: 45px;
  margin: 0 auto 2em;
  max-width: 160px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  vertical-align: middle;
  width: 100%;

  @media(min-width: 400px) {
    display: inline-block;
    margin-right: 2.5em;

    &:nth-of-type(even) {
      margin-right: 0;
    }
  }

  @media(min-width: 600px) {

    &:nth-of-type(even) {
      margin-right: 2.5em;
    }

    &:nth-of-type(5) {
      margin-right: 0;
    }
  }

  &:hover {
    text-decoration: none;
  }
}
.btn-5 {
  border: 0 solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: rgba(255, 255, 255, .5);
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
}

.btn-5:hover {
  border: 1px solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, .5), 0 0 20px rgba(255, 255, 255, .2);
  outline-color: rgba(255, 255, 255, 0);
  outline-offset: 15px;
  text-shadow: 1px 1px 2px #427388;
}
</style>

<style>
#home {
    text-align: center;
    /*display: flex;*/
    /*flex-direction: column;*/
    /*justify-content: center;*/
    overflow-y: hidden;
}
</style>
<style scoped>
p {
    font-size: 19px;
    margin: 10px;
}

.label {
    margin: 5px;
    color: #000000;
    padding: 5px;
    /*border: 1px solid white;*/
    border-radius: 5px;
    box-shadow: 0px 0px 1em #000;
}

.label:hover {
    transform: scale(1.1, 1.1);
    transition: 0.3s;
}
</style>

