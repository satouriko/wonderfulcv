import { CopyWritingCorrectService } from 'copywriting-correct'
import { WonderfulCV } from './wonderfulcv'

const wonderfulCV: WonderfulCV = {
  arrangement: {
    basicInfoStyle: 'concise',
    basicInfoLayout: 'center',
    margin: 10,
    sectionTitleStyle: 'professional'
  },
  name: '陈媛媛（Abbey）',
  title: '陈媛媛的简历',
  url: 'https://wonderfulcv.js.org',
  photo: '/assets/logo.png',
  basicInfo: [[{
    tel: '130-0122-7303',
    value: '130-0122-7303'
  }, {
    email: 'abbey@jobmail.vip',
    value: 'abbey@jobmail.vip'
  }], [{
    value: '北京市朝阳区光华路1号'
  }]],
  pages: [{
    sections: [{
      title: '教育经历',
      contents: [{
        company: '哥伦比亚大学',
        position: '金融经济学 硕士',
        date: '2017年9月 - 2019年5月',
        location: '纽约',
        description: 'GPA：3.65（专业前 10%）',
        descriptionFormat: 'li'
      }, {
        company: '清华大学',
        position: '经济学 本科 经济管理学院',
        date: '2013年9月 - 2017年6月',
        location: '北京',
        description: 'GPA：3.6 | 荣誉奖项：2015~2016 综合奖学金（专业前 15%）、ResumeHack 领导力奖',
        descriptionFormat: 'li'
      }]
    }, {
      title: '工作与实习经历',
      contents: [{
        company: '普华永道',
        position: '项目助理，税务部门',
        date: '2018年6月 - 2018年9月',
        location: '北京',
        description: [
          '运用EMIS、公司年报、报告产业信息网等渠道查找所需数据及资料，独立完成 8 家公司转让定价报告的可比性分析与行业分析（覆盖食品、电子商务、物流、汽车等行业）',
          '运用VBA为部门更新了Excel可比公司筛选模板，为部门入职培训录制数据库使用视频教程，该模板后为全部门28人运用，所录制教程培训了20多名员工，受到了部门主管的高度评价',
          '协助2个跨国集团客户管理全球业务所产生的税务和社会保障责任，制订分税政策、审阅劳务结构、进行税务申报，对频繁差旅员工制定特定的政策限度，以减低有关风险'
        ],
        descriptionFormat: 'li'
      }, {
        company: '网易',
        position: '校园大使，金融管理学院',
        date: '2016年9月 - 2017年6月',
        location: '北京',
        description: [
          '统筹校内的运营推广，自主设计宣传海报进行校内线下推广，协助组织2次学生创意大赛的推广和执行，吸引超过1000名学生报名参赛',
          '管理运营3个500人校内微信群，每周撰写3篇原创公众号文章（平均阅读量3000+）'
        ],
        descriptionFormat: 'li'
      }]
    }, {
      title: '社团组织经历',
      contents: [{
        company: '商学院学生委员会',
        position: '副主席',
        date: '2013年1月 - 2016年6月',
        location: '北京',
        description: [
          '一年内成功招收20+名骨干成员，主持举办了3届商学院学生拓展训练和交流活动，累计参与人数2000+，筹得20,000元人民币资金赞助',
          '与长江商学院联合组织企业访谈，带领数百名外学生领袖参观了联想、百度、瑞银等多家知名企业'
        ],
        descriptionFormat: 'li'
      }]
    }, {
      title: '技能及其他',
      contents: [{
        description: [
          '语言：普通话（母语）、英语（流利）、IELTS（6.5）、法语（基础）',
          '技能：Bloomberg、Excel（熟练）、PPT（熟练，可设计模板）、HTML/CSS（可制作简单网站）',
          '兴趣爱好：小提琴（音乐学院10级）、摄影（RPS摄影协会认证）、跑步（北马完成3次）'
        ],
        descriptionFormat: 'li',
        descriptionHighlightSeparator: '：'
      }]
    }],
    justifyContent: 'space-evenly'
  }],
  plugins: [
    new CopyWritingCorrectService()
  ]
}

export default wonderfulCV
