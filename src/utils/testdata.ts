export default {
    userOrg: {
        columns: [
            {
              title: '工号',
              dataIndex: 'infoName',
              key: 'infoName'
            },
            {
              title: '姓名',
              dataIndex: 'name',
              key: 'name'
            },
            {
              title: '性别',
              dataIndex: 'xb',
              key: 'xb'
            },
            {
              title: '登陆别名',
              dataIndex: 'dlbm',
              key: 'dlbm'
            },
            {
              title: '工作证号',
              dataIndex: 'gzzh',
              key: 'gzzh'
            },
            {
              title: '联系电话',
              dataIndex: 'lxdh',
              key: 'lxdh'
            },
            {
              title: '电子邮件',
              dataIndex: 'dzyj',
              key: 'dzyj'
            },
            {
              title: '操作',
              dataIndex: 'cz',
              key: 'cz',
              slots: { customRender: 'cz' }
            }
        ],
        dataCol: (() => {
            const arr = []
            for (let i = 0; i < 500; i++) {
              arr.push({
                key: '1',
                infoName: '自定义模板',
                name: '张三',
                xb: '男',
                dlbm: '管理员',
                gzzh: '0001',
                lxdh: '110',
                dzyj: '123',
                cz: '详情',
              })
            }
            return arr
        })()
    },
    OrgOrg: {
      dataCol: (() => {
        const arr = []
        for (let i = 0; i < 500; i++) {
          arr.push({
            key: '1',
            infoName: '5623262622622615166',
            name: '张三',
            sfz: '561616162613135496612',
            lxdh: '110',
            bylxdh: '120',
            lxdz: 'cs',
            cz: '详情',
          })
        }
        return arr
      })(),
    columns: [
        {
          title: '工号',
          dataIndex: 'infoName',
          key: 'infoName'
        },
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: '登陆别名',
          dataIndex: 'sfz',
          key: 'sfz'
        },
        {
          title: '工作证号',
          dataIndex: 'lxdh',
          key: 'lxdh'
        },
        {
          title: '部门名称',
          dataIndex: 'bylxdh',
          key: 'bylxdh'
        },
        {
          title: '角色名称',
          dataIndex: 'lxdz',
          key: 'lxdz'
        },
        {
          title: '',
          dataIndex: 'cz',
          key: 'cz',
          width: '20%',
          align: 'center'
        }
      ]
    },
    FunOrg: {
      columns: [
        {
          title: '功能序号',
          dataIndex: 'col1',
          key: 'col1',
          width: '17%'
        },
        {
          title: '功能名称',
          dataIndex: 'col2',
          key: 'col2'
        },
        {
          title: '功能显示名称',
          dataIndex: 'col3',
          key: 'col3'
        },
        {
          title: '功能窗体',
          dataIndex: 'col4',
          key: 'col4'
        },
        {
          title: '功能参数',
          dataIndex: 'col5',
          key: 'col5'
        },
        {
          title: '功能图标',
          dataIndex: 'col6',
          key: 'col6'
        },
        {
          title: '功能说明',
          dataIndex: 'col7',
          key: 'col7'
        },
        {
          title: '',
          dataIndex: 'col8',
          key: 'col8',
          slots: { customRender: 'col8' },
          align: 'right'
        }
      ]
    },
    DicOrg: {
      columns: [
        {
          title: '代码',
          dataIndex: 'col1',
          key: 'col1'
        },
        {
          title: '名称',
          dataIndex: 'col2',
          key: 'col2'
        },
        {
          title: '说明',
          dataIndex: 'col3',
          key: 'col3',
          width: '50%',
          align: 'center'
        }
      ],
      dataCol: (() => {
        const arr = []
        for (let i = 0; i < 500; i++) {
          arr.push({
            key: i,
            col1: '926313132323232',
            col2: '反贪污贿赂部门',
            col3: ''
          })
        }
        return arr
      })()
    },
    LawyerInfo: {
      columns: [
        {
          title: '律师证件号码',
          dataIndex: 'infoName',
          key: 'infoName'
        },
        {
          title: '律师姓名',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: '身份证号码',
          dataIndex: 'sfz',
          key: 'sfz'
        },
        {
          title: '联系电话',
          dataIndex: 'lxdh',
          key: 'lxdh'
        },
        {
          title: '备用联系电话',
          dataIndex: 'bylxdh',
          key: 'bylxdh'
        },
        {
          title: '联系地址',
          dataIndex: 'lxdz',
          key: 'lxdz'
        },
        {
          title: '操作',
          dataIndex: 'cz',
          key: 'cz',
          width: '20%',
          align: 'center'
        }
      ],
      dataCol: (() => {
        const arr = []
        for (let i = 0; i < 500; i++) {
          arr.push({
            key: '1',
            infoName: '5623262622622615166',
            name: '张三',
            sfz: '561616162613135496612',
            lxdh: '110',
            bylxdh: '120',
            lxdz: 'cs',
            cz: '详情'
          })
        }
        return arr
      })()
    },
    PersonInfo: {
      columns: [
        {
          title: '部门编码',
          dataIndex: 'col1',
          key: 'col1'
        },
        {
          title: '部门名称',
          dataIndex: 'col2',
          key: 'col2'
        },
        {
          title: '角色名称',
          dataIndex: 'col3',
          key: 'col3'
        },
        {
          title: '名称',
          dataIndex: 'col4',
          key: 'col4'
        },
        {
          title: '性别',
          dataIndex: 'col5',
          key: 'col5'
        },
        {
          title: '工号',
          dataIndex: 'col6',
          key: 'col6'
        },
        {
          title: '移动电话号码',
          dataIndex: 'col7',
          key: 'col7'
        },
        {
          title: '工作证号',
          dataIndex: 'col8',
          key: 'col8'
        },
        {
          title: '是否临时人员',
          dataIndex: 'col9',
          key: 'col9'
        },
        {
          title: '是否停职',
          dataIndex: 'col10',
          key: 'col10'
        }
      ],
      dataCol: (() => {
        const arr = []
        for (let i = 0; i < 500; i++) {
          arr.push({
            key: i,
            col1: '',
            col2: '',
            col3: '',
            col4: '',
            col5: '',
            col6: '',
            col7: '',
            col8: '',
            col9: '',
            col10: ''
          })
        }
        return arr
      })()
    },
    SendQuery: {
      columns: [
        {
          title: '短信模板名称',
          dataIndex: 'infoName',
          key: 'infoName'
        },
        {
          title: '接收人姓名',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: '接收人电话号码',
          dataIndex: 'phone',
          key: 'phone'
        },
        {
          title: '发送时间',
          dataIndex: 'time',
          key: 'time'
        },
        {
          title: '发送结果',
          dataIndex: 'result',
          key: 'result'
        },
        {
          title: '短信内容',
          dataIndex: 'ctx',
          key: 'ctx'
        },
        {
          title: '操作',
          dataIndex: 'options',
          width: '20%',
          key: 'options',
          align: 'center'
        }
      ],
      data: [
        {
          key: '1',
          infoName: '自定义模板',
          name: '张三',
          phone: 110,
          time: '2020-11-27',
          result: '成功',
          ctx: '你好',
          options: '详情'
        },
        {
          key: '1',
          infoName: '自定义模板',
          name: '张三',
          phone: 110,
          time: '2020-11-27',
          result: '成功',
          ctx: '你好',
          options: '详情'
        },
        {
          key: '1',
          infoName: '自定义模板',
          name: '张三',
          phone: 110,
          time: '2020-11-27',
          result: '成功',
          ctx: '你好',
          options: '详情'
        },
        {
          key: '1',
          infoName: '自定义模板',
          name: '张三',
          phone: 110,
          time: '2020-11-27',
          result: '成功',
          ctx: '你好',
          options: '详情'
        },
        {
          key: '1',
          infoName: '自定义模板',
          name: '张三',
          phone: 110,
          time: '2020-11-27',
          result: '成功',
          ctx: '你好',
          options: '详情'
        },
        {
          key: '1',
          infoName: '自定义模板',
          name: '张三',
          phone: 110,
          time: '2020-11-27',
          result: '成功',
          ctx: '你好',
          options: '详情'
        },
        {
          key: '1',
          infoName: '自定义模板',
          name: '张三',
          phone: 110,
          time: '2020-11-27',
          result: '成功',
          ctx: '你好',
          options: '详情'
        },
        {
          key: '1',
          infoName: '自定义模板',
          name: '张三',
          phone: 110,
          time: '2020-11-27',
          result: '成功',
          ctx: '你好',
          options: '详情'
        },
        {
          key: '1',
          infoName: '自定义模板',
          name: '张三',
          phone: 110,
          time: '2020-11-27',
          result: '成功',
          ctx: '你好',
          options: '详情'
        },
        {
          key: '1',
          infoName: '自定义模板',
          name: '张三',
          phone: 110,
          time: '2020-11-27',
          result: '成功',
          ctx: '你好',
          options: '详情'
        },
        {
          key: '1',
          infoName: '自定义模板',
          name: '张三',
          phone: 110,
          time: '2020-11-27',
          result: '成功',
          ctx: '你好',
          options: '详情'
        },
        {
          key: '1',
          infoName: '自定义模板',
          name: '张三',
          phone: 110,
          time: '2020-11-27',
          result: '成功',
          ctx: '你好',
          options: '详情'
        }
      ]
    },
    StatisticsQuery: {
      columns: [
        {
          title: '短信模板名称',
          dataIndex: 'infoName',
          key: 'infoName'
        },
        {
          title: '接收人姓名',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: '接收人电话号码',
          dataIndex: 'phone',
          key: 'phone'
        },
        {
          title: '发送时间',
          dataIndex: 'time',
          key: 'time'
        },
        {
          title: '发送结果',
          dataIndex: 'result',
          key: 'result'
        },
        {
          title: '短信内容',
          dataIndex: 'ctx',
          key: 'ctx'
        },
        {
          title: '操作',
          dataIndex: 'options',
          width: '20%',
          key: 'options',
          align: 'center'
        }
      ],
      data: [
        {
          key: '1',
          infoName: '自定义模板',
          name: '张三',
          phone: 110,
          time: '2020-11-27',
          result: '成功',
          ctx: '你好',
          options: '详情'
        },
        {
          key: '1',
          infoName: '自定义模板',
          name: '张三',
          phone: 110,
          time: '2020-11-27',
          result: '成功',
          ctx: '你好',
          options: '详情'
        },
        {
          key: '1',
          infoName: '自定义模板',
          name: '张三',
          phone: 110,
          time: '2020-11-27',
          result: '成功',
          ctx: '你好',
          options: '详情'
        },
        {
          key: '1',
          infoName: '自定义模板',
          name: '张三',
          phone: 110,
          time: '2020-11-27',
          result: '成功',
          ctx: '你好',
          options: '详情'
        },
        {
          key: '1',
          infoName: '自定义模板',
          name: '张三',
          phone: 110,
          time: '2020-11-27',
          result: '成功',
          ctx: '你好',
          options: '详情'
        },
        {
          key: '1',
          infoName: '自定义模板',
          name: '张三',
          phone: 110,
          time: '2020-11-27',
          result: '成功',
          ctx: '你好',
          options: '详情'
        }
      ]
    },
    LeadingLQuery: {
      columns: [
        {
          title: '短信模板名称',
          dataIndex: 'infoName',
          key: 'infoName'
        },
        {
          title: '接收人姓名',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: '接收人电话号码',
          dataIndex: 'phone',
          key: 'phone'
        }
      ],
      dataCol: (() => {
        const arr = []
        for (let i = 0; i < 500; i++) {
          arr.push({
            key: '1',
            infoName: '自定义模板',
            name: '张三',
            phone: 110
          })
        }
        return arr
      })()
    },
    LeadingRQuery: {
      columns: [
        {
          title: '形式案件短信模板',
          dataIndex: 'infoName',
          key: 'infoName'
        },
        {
          title: '接收人姓名',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: '发送时间',
          dataIndex: 'time',
          key: 'time'
        },
        {
          title: '操作',
          dataIndex: 'options',
          key: 'options'
        }
      ],
      dataCol: (() => {
        const arr = []
        for (let i = 0; i < 500; i++) {
          arr.push({
            key: '1',
            infoName: '自定义模板',
            name: '张三',
            time: '2020-12-01',
            options: '详情'
          })
        }
        return arr
      })()
    }
}
