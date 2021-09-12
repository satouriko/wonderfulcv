import { WonderfulCV } from '../wonderfulcv'

const enConfig: WonderfulCV = {
  lang: 'en',
  navigation: [
    { lang: 'zh', label: 'Chinese' },
    { lang: 'en', label: 'English' }
  ],
  arrangement: {
    basicInfoStyle: 'concise',
    basicInfoLayout: 'left',
    margin: 10,
    sectionTitleStyle: 'professional'
  },
  name: 'Abbey Chen (Chen,Yuanyuan)',
  title: "Abbey Chen's Resume",
  url: 'https://wonderfulcv.js.org/en/',
  photo: '/assets/logo.png',
  basicInfo: [[{
    tel: '+86-130-0122-7303',
    value: '+86-130-0122-7303'
  }, {
    email: 'abbey@jobmail.vip',
    value: 'abbey@jobmail.vip'
  }], [{
    value: '1 GUANGHUA ST, CHAOYANG DIST, BEIJING'
  }]],
  pages: [{
    sections: [{
      title: 'Education Background',
      contents: [{
        company: 'Columbia University',
        position: 'MSc in Financial Economics',
        date: '09/2017 - 05/2019',
        location: 'New York',
        description: 'GPA：3.65 (Top 10%)',
        descriptionFormat: 'li'
      }, {
        company: 'Tsinghua University',
        position: 'BA in Economics',
        date: '09/2013 - 06/2017',
        location: 'Beijing',
        description: 'GPA：3.6 | 2015~2016 Comprehensive Scholarship, ResumeHack Leadership Award',
        descriptionFormat: 'li'
      }]
    }, {
      title: 'Work & Internship',
      contents: [{
        company: ' PricewaterhouseCoopers',
        position: 'Project Assistant, Tax Department',
        date: '06/2018 - 09/2018',
        location: 'Beijing',
        description: [
          'Independently completed the comparability analysis and industry analysis of the transfer pricing reports of 8 companies (covering food, e-commerce, logistics, automotive and other industries)',
          'Updated the Excel comparable company screening template, recorded the database video tutorials for induction training, used by all 28 employees, and trained more than 20 employees',
          'Formulate tax sharing policies, review labor structure, make tax declarations, and formulate specific policy limits for frequent travelers to reduce related risks'
        ],
        descriptionFormat: 'li'
      }, {
        company: 'Netease',
        position: 'Campus Ambassador, School of Financial Management',
        date: '09/2016 - 06/2017',
        location: 'Beijing',
        description: [
          'Operate and promote, design posters for promotion, and assist in organizing the promotion of 2 student creativity contests, attracting more than 1,000 students to register for the competition',
          'Manage and operate 3 WeChat groups of 500 people on campus, and write 3 original public account articles per week (average reading 3000+)'
        ],
        descriptionFormat: 'li'
      }]
    }, {
      title: 'Student Association',
      contents: [{
        company: 'School of Business Student Committee',
        position: 'Vice President',
        date: '01/2013 - 06/2016',
        location: 'Beijing',
        description: [
          'Recruited 20+ key members, hosted 3 sessions of outreach training and exchange activities, accumulated 2000+ participants, and raised RMB 20,000 in sponsorship',
          'Co-organized corporate interviews with Cheung Kong Graduate School of Business and led hundreds of student to visit Lenovo, Baidu, UBS and other well-known companies'
        ],
        descriptionFormat: 'li'
      }]
    }, {
      title: 'Skills & Others',
      contents: [{
        description: [
          'Language: Chinese (native); English (fluent), IELTS 6.5; France (basic)',
          'Skills: Bloomberg, Excel (proficient), Powerpoint (proficient), HTML/CSS',
          'Hobbies: Violin (Level 10); Photography (RPS Certified); Running (Completed Marathon 3 times）'
        ],
        descriptionFormat: 'li',
        descriptionHighlightSeparator: ':'
      }]
    }],
    justifyContent: 'space-evenly'
  }],
  plugins: []
}

export default enConfig
