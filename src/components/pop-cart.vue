<template>
  <el-popover
    width="350"
    trigger="hover"
  >
    <el-table :data="cartProducts" size="mini">
      <el-table-column property="title" width="130" label="商品"></el-table-column>
      <el-table-column property="price" label="价格"></el-table-column>
      <el-table-column property="count" width="50" label="数量"></el-table-column>
      <el-table-column label="操作">
        <template v-slot="scope">
          <el-button size="mini" @click="deleteFromCart(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div>
      <!-- 总数和总量也改成插值表达式 -->
      <p>共 {{ totalCount }} 件商品 共计¥{{ totalPrice }}</p>
      <el-button size="mini" type="danger" @click="$router.push({ name: 'cart' })">去购物车</el-button>
    </div>
    <!-- 徽章这里，将value修改成totalCount -->
    <el-badge :value="totalCount" class="item" slot="reference">
      <el-button type="primary">我的购物车</el-button>
    </el-badge>
  </el-popover>
</template>

<script>
  // 把mapGetters导入
import { mapState, mapGetters ,mapMutations} from 'vuex'

export default {
  name: 'PopCart',
  computed:{
    ...mapState('cart',['cartProducts']),
    ...mapGetters('cart',['totalCount','totalPrice'])
  },
  methods: {
    ...mapMutations('cart',['deleteFromCart'])
  }
  // data () {
  //   return {
  //     cartProducts: [
  //       { id: 1, title: 'iPad Pro', price: 500.01, isChecked: false, count: 0 },
  //       { id: 2, title: 'H&M T-Shirt White', price: 10.99, isChecked: false, count: 0 },
  //       { id: 3, title: 'Charli XCX - Sucker CD', price: 19.99, isChecked: false, count: 0 }
  //     ]
  //   }
  // }
}
</script>

<style>

</style>
