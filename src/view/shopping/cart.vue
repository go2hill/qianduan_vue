<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>购物车</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table
      :data="cartProducts"
      style="width: 100%"
    >
      <el-table-column
        width="55">
        <template v-slot:header>
          <!-- 2. 这里绑定一个v-model，计算属性 -->
          <el-checkbox size="mini" v-model="checkedAll">
          </el-checkbox>
        </template>
        <!--
          @change="updateProductChecked"  默认参数：更新后的值
          @change="updateProductChecked(productId, $event)"  123, 原来那个默认参数
            当你传递了自定义参数的时候，还想得到原来那个默认参数，就手动传递一个 $event
         -->
        <!-- 4. 这里不能直接绑定v-model，因为我们绑定的是vuex的状态，不能直接更改状态
          4.1 先绑定其isChecked属性
          4.2 注册改变事件change，当checkbox改变的时候调用change，接收两个参数，id就通过scope.row获取，checked状态就通过$event获取 -->
        <template v-slot="scope">
          <el-checkbox
            size="mini"
            :value="scope.row.isChecked"
            @change="updateProductChecked({
            checked: $event,
            prodId: scope.row.id})"
          >
          </el-checkbox>
        </template>
      </el-table-column>
      <el-table-column
        prop="title"
        label="商品">
      </el-table-column>
      <el-table-column
        prop="price"
        label="单价">
      </el-table-column>
      <el-table-column
        prop="count"
        label="数量">
        <!-- 这里先定义一个插槽，绑定value是count，定义一个改变的change方法，将updateProduct传入两个参数，一个是id，一个是当前input的值$event -->
        <template v-slot="scope">
          <el-input-number :value="scope.row.count" @change="updateProduct({
          prodId: scope.row.id,
          count: $event
          })" size="mini"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column
        prop="totalPrice"
        label="小计">
      </el-table-column>
      <el-table-column
        label="操作">
        <template v-slot="scope">
          <el-button size="mini" @click="deleteFromCart(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div>
      <p>已选 <span>{{checkedCount}}</span> 件商品，总价：<span>{{ checkedPrice }}</span></p>
      <el-button type="danger">结算</el-button>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapGetters} from 'vuex'

  export default {
  name: 'Cart',
    computed:{
    ...mapState('cart',['cartProducts']),
      ...mapGetters('cart',['checkedCount','checkedPrice']),
      checkedAll:{
      get(){
        return this.cartProducts.every(prod => prod.isChecked)
      },
        set(value){
        this.updateAllProductCheched(value)
        }
      }
    },
    methods:{
    ...mapMutations('cart',['updateAllProductCheched',
      'updateProductChecked',
      'updateProduct',
      'deleteFromCart' ])
    }
  // data () {
  //   return {
  //     cartProducts: [
  //       { id: 1, title: 'iPad Pro', price: 500.01 },
  //       { id: 2, title: 'H&M T-Shirt White', price: 10.99 },
  //       { id: 3, title: 'Charli XCX - Sucker CD', price: 19.99 }
  //     ]
  //   }
  // }
}
</script>

<style></style>
