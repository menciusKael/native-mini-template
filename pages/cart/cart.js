Page({
  data: {
    option: [{
        name: '颜色分类',
        id: 1,
        optionChild: [{
            name: '粉色粉色粉色',
            id: 21
          },
          {
            name: '绿色',
            id: 22
          },
          {
            name: '白色',
            id: 23
          }
        ]
      },
      {
        name: '尺码选择',
        id: 2,
        optionChild: [{
            name: 'S',
            id: 31
          },
          {
            name: 'M',
            id: 32
          },
          {
            name: 'L',
            id: 33
          }
        ]
      }, {
        name: '风格',
        id: 3,
        optionChild: [{
          name: '流行',
          id: 41
        }, {
          name: '杀马特',
          id: 42
        }]
      }
    ],
    attrSelect : {}
  },
  onLoad() {
    let option = this.data.option;
    let attrSelect = this.data.attrSelect;
    // 初始默认选中
    option.forEach(item => {
      item.optionChild[0].checked = true;
      attrSelect[item.name] = item.optionChild[0].name;
    })
    this.setData({
      option
    })
  
  },
  onAttrChoose(e) {
    let option = this.data.option;
    let FuIndex = e.currentTarget.dataset.fuindex;
    let ZiIndex = e.currentTarget.dataset.ziindex;
    option.forEach((item, index) => {
      if (index == FuIndex) {
        item.optionChild.forEach(item => {
          item.checked = false;
        })
      }
    })
    option[FuIndex].optionChild[ZiIndex].checked = true;
    // 当前选中的属性
    let curChecked = option[FuIndex].optionChild[ZiIndex];
   
    // let selId = curChecked.id;
     
    let attrKey = option[FuIndex].name;
    let attrValue = curChecked.name;

    let attrSelect = this.data.attrSelect;
     
    attrSelect[attrKey] = attrValue;
    
    this.setData({
      option,
      attrSelect
    })

    console.log(attrSelect)
    
  },  
  onShow() {
    
  }
})