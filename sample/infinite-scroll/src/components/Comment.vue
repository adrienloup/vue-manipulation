<template>
  <div class="comment">
    <div>
      <h1>{{ id }} {{ name }}</h1>
      <p>{{ body }}</p>
    </div>
    <img v-bind:src="'http://picsum.photos/id/'+(id+30)+'/467/267'" alt="">
  </div>
</template>

<script>
export default {
  name: 'comment',
  props: {
    postId: Number,
    id: Number,
    name: String,
    email: String,
    body: String
  }
}
</script>

<style scoped>
.comment {
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 990px;
  width: calc(100% - 40px);
  margin: 40px auto;
  background: #fff;
  font-size: 0;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
  overflow: hidden;
}
.comment div {
  padding: 40px;
}
.comment h1 {
  font-size: 22px;
}
.comment P {
  font-size: 18px;
}
.comment img {
  width: auto;
  height: 100%;
  order: -1;
}
@media screen and (max-width: 1280px) {
  .comment {
    flex-direction: column;
    max-width: 490px;
  }
  .comment img {
    width: 100%;
    height: auto;
  }
}
</style>
