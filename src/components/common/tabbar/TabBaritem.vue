<template>
        <div class="tab-bar-item" @click="itemClick" :style="{color:changColor}">
           <slot name="icon"></slot>
           <slot name="txt"></slot>
        </div>
</template>

<script>
    export default {
        name: "TabBaritem",
        props:{
          path:String,
            col:{
              type:String,
                default:"red"
            }
        },
       computed:{
            isActive(){
                return this.$route.path.indexOf(this.path)!==-1
            },
           changColor(){
                return this.isActive?this.col:""
           }
       },
        methods:{
            itemClick(){
                this.$router.push(this.path)
            }
        }
    }
</script>

<style scoped>
    .tab-bar-item{
        margin-top: 5px;
        flex: 1;
    }
  .active{
      color: red;
  }
</style>