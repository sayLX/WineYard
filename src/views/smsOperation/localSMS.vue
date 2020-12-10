<template>
    <div class="ctx">
        <div class="body">
            <Title title="本院通知"></Title>
            <div class="form">
                <a-form
                    layout="inline"
                >
                  <a-form-item label="部门" name="region">
                      <a-select placeholder="请选择">
                          <a-select-option value="shanghai">
                          Zone one
                          </a-select-option>
                          <a-select-option value="beijing">
                          Zone two
                          </a-select-option>
                      </a-select>
                  </a-form-item>
                  <a-form-item label="工号" name="region">
                      <div  class="input">
                        <a-input placeholder="请输入">
                                </a-input>
                      </div>
                  </a-form-item>
                  <a-form-item label="姓名" name="name">
                      <div class="input">
                        <a-input placeholder="请输入">
                                </a-input>
                      </div>
                  </a-form-item>
                  <a-form-item>
                      <a-button type="primary">
                        <template #icon><SearchOutlined /></template>查询
                      </a-button>
                  </a-form-item>
                </a-form>
                <button id="send">群发</button>
            </div>
            <div class="pagination">
              <a-pagination
              show-quick-jumper
              v-model:current="current1"
              :total="500"
              :show-total="total => `共 ${total} 条`"
              @change="onChange" />
            </div>
            <staffList></staffList>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import Title from './components/Title.vue'
import staffList from './components/staffList.vue'
import { SearchOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  name: 'customSMS',
  components: {
    Title,
    SearchOutlined,
    staffList
  },
  data() {
    return {
      // total:60,
      current1: 1,
      current2: 2,
    };
  },
  methods: {
    onChange(pageNumber) {
      console.log('Page: ', pageNumber);
    },
  },
})
</script>

<style lang="scss" scoped>
/deep/ .body{
  width: calc(100% - 24px);
  height:calc(100% - 24px);
  position: relative;
  .ant-select-selector{
    width: 157px;
  }
    #send{
      // display: block;
      width: 76px;
      height: 28px;
      border:1px solid #d8d7d7;
      text-indent: 20px;
      line-height: 28px;
      background: url('~@/assets/img/群发.png') no-repeat;
      background-size: 16px 16px;
      font-size: 12px;
      background-position: 10px center;
      background-color: rgb(235,244,254);
      &:focus{
        outline:1px solid #7c7272;
      }
    }
  .pagination{
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
}
</style>
