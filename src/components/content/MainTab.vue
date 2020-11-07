<template>
    <div>
        <TabBar>
            <TabBaritem path="/home" col="green">
                <div slot="icon" class="fa fa-home item-icon" ></div>
                <div slot="txt">首页</div>
            </TabBaritem>
            <TabBaritem path="/category" col="green">
                <div slot="icon" class="fa fa-th-large item-icon" ></div>
                <div slot="txt" >分类</div>
            </TabBaritem>
            <TabBaritem path="cart" col="green">
                <div slot="icon" class="fa fa-shopping-cart item-icon" ></div>
                <div slot="txt" >购物车</div>
            </TabBaritem>
            <TabBaritem path="pro" col="green">
                <div slot="icon" class="fa fa-user item-icon" ></div>
                <div slot="txt" >我的</div>
            </TabBaritem>
        </TabBar>
    </div>
</template>

<script>
    import TabBar from "../common/tabbar/TabBar"
    import TabBaritem from "../common/tabbar/TabBaritem"
    export default {
        name: "MainTab",
        components:{
            TabBar,
            TabBaritem
        }
    }
</script>

<style scoped>

</style>