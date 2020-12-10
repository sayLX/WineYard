<template>
    <div>
        <a-button type="primary" @click="showModal">
           绑定
        </a-button>
        <a-modal
                title="辩护代理人（张三）"
                :visible="visible"
                :confirm-loading="confirmLoading"
                @ok="handleOk"
                @cancel="handleCancel"
        >
            <a-form :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
              <a-form-item label="律师库">
                <a-select v-model="form.region" placeholder="请输入">
                  <a-select-option value="shanghai">
                    Zone one
                  </a-select-option>
                  <a-select-option value="beijing">
                    Zone two
                  </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item label="人员姓名">
                <a-input placeholder="请输入" v-model="form.name" />
              </a-form-item>
              <a-form-item label="人员类型">
                <a-select v-model="form.region" placeholder="请输入">
                  <a-select-option value="shanghai">
                    Zone one
                  </a-select-option>
                  <a-select-option value="beijing">
                    Zone two
                  </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item label="人员类型">
                <a-select v-model="form.region" placeholder="请输入">
                  <a-select-option value="shanghai">
                    Zone one
                  </a-select-option>
                  <a-select-option value="beijing">
                    Zone two
                  </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item label="身份类型">
                <a-select v-model="form.region" placeholder="请输入">
                  <a-select-option value="shanghai">
                    Zone one
                  </a-select-option>
                  <a-select-option value="beijing">
                    Zone two
                  </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item label="证件类型">
                <a-select v-model="form.region" placeholder="请输入">
                  <a-select-option value="shanghai">
                    Zone one
                  </a-select-option>
                  <a-select-option value="beijing">
                    Zone two
                  </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item label="人员类型">
                <a-select v-model="form.region" placeholder="请输入">
                  <a-select-option value="shanghai">
                    Zone one
                  </a-select-option>
                  <a-select-option value="beijing">
                    Zone two
                  </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item label="证件号码">
                <a-input placeholder="请输入" v-model="form.name" />
              </a-form-item>
              <a-form-item label="联系电话">
                <a-input placeholder="请输入" v-model="form.name" />
              </a-form-item>
              <a-form-item label="备用电话">
                <a-input placeholder="请输入" v-model="form.name" />
              </a-form-item>
              <a-form-item label="电子邮箱">
                <a-input placeholder="请输入" v-model="form.name" />
              </a-form-item>
              <a-form-item label="备注信息" name="desc">
                <a-textarea  placeholder="请输入" v-model="form.desc" />
              </a-form-item>
            </a-form>
        </a-modal>
    </div>
</template>
<script>
    export default {
        name:'bindBox',
        data() {
            return {
                visible: false,
                confirmLoading: false,
                labelCol: { span: 4 },
                wrapperCol: { span: 14 },
                form: {
                  name: '',
                  region: undefined,
                  date1: undefined,
                  delivery: false,
                  type: [],
                  resource: '',
                  desc: '',
                },
            };
        },
        methods: {
            //显示模态框
            showModal() {
                this.visible = true;
            },
            //点击ok
            handleOk() {
                this.ModalText = 'The modal will be closed after two seconds';
                this.confirmLoading = true;
                setTimeout(() => {
                    this.visible = false;
                    this.confirmLoading = false;
                }, 10);
            },
            //点击cancel
            handleCancel() {
                console.log('Clicked cancel button');
                this.visible = false;
            },
            onSubmit() {
               console.log('submit!', this.form);
    },
        },
    };
</script>
<style lang="scss" scoped>
/deep/ .ant-modal-content{
  width: 705px;
	height: 512px;
	background-color: #ffffff;
	border-radius: 5px;
	border: solid 1px #a9c4df;

}
</style>
