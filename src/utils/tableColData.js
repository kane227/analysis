const acceptanceCol = [
    {
        type: "selection",
        width: 40,
    },
    {
        type: "index",
        width: 50,
        label: '序号'
    },
    {
        prop: 'objcode',
        label: '业扩受理编号'
    },
    {
        prop: 'objname',
        label: '业务负责人'
    },
    {
        prop: 'jingbr',
        label: '经办人'
    },
    {
        prop: 'phone',
        label: '联系方式'
    },
    {
        prop: 'leix',
        label: '业务类型'
    },
    {
        prop: 'period',
        label: '所处阶段',
        template: '点击查看'
    },
    {
        prop: 'mingx',
        label: '业务受理明细',
        template: '点击查看'
    },
    {
        prop: 'file',
        label: '客户受理资料',
        template: '点击查看/上传'
    },
]

export default { acceptanceCol };