var config = {
    /*在这里配置你的基本信息，所有数据以字符串形式给出*/
    name: "万志杰",
    sex: "男",
    age: "22",
    phone: "13126925699",
    email: "2996808587@qq.com",
    address: "现居北京市海淀区",
    qq: "2996808587",
    log: "Wan",
    github: "@19991010wan",
    twitter: "",
    blog: "wanBlog",
    music: "./media/篇章.mp3",


    /*在这里配置首页的座右铭集合*/
    motto: [
        "明天不一定会更好，但要坚信更好的明天一定会来。",
        "要做的事情总找得出时间和机会，不愿意做的事情也总能找得出借口。",
        "Gor For It!",
        "有智者立长志，无志者长立志。",
        "那些过去的眼泪终将风干在记忆里。",
        "真相，是为了剿灭幻想。",
        "我欲将心向明月，奈何明月照沟渠。",
        "春风得意马蹄疾，一日看尽长安花。",
        "天凉好个秋！",
        "老骥伏枥，志在千里。烈士暮年，壮心不已。",
        "老当益壮，宁移白首之心。穷且益坚，不坠青云之志。",
        "我们必须拿我们所有的， 去换我们所没有的",
        "蒹葭苍苍，白露为霜；所谓伊人，在水一方。",
        "数风流人物，还看今朝！"
    ],


    /*在这里配置首页的见面信息，你可以内嵌HTML标签以调整格式*/
    welcome: "擅长学习，喜欢简约，我一定会不断学习，提高编程水平的！<br>" +
        "很高兴见到你！<br>" +
        "想了解更多，往下滚动哦 ^_^",


    /*在这里配置关于我的信息，你可以内嵌HTML标签以调整格式*/
    about: "<p>万志杰，男，北京邮电大学硕士在读。</p>" +
        "<p>计算机基础知识掌握扎实，充满激情的工作态度，较强的团队协同作战能力，具备独立开发的能力，擅于发现并解决问题。执行力强、责任感高、集体荣誉感强、敢于担当。</p>" +
        "<p>目前正在积极筹备个人博客，尽情期待!</p>" +
        "<p>十分期待与您的联系!</p>",



    /**
     * 在这里配置你的技能点
     * ["技能点", 掌握程度, "技能条颜色"]
     */
    skills: [
        ["Java", 75, "red"],
        ["python", 60, "blue"],
        ["C", 75, "#1abc9c"],
        ["C++", 70, "rgba(0,0,0)"],
        ["SQL", 60, "yellow"],
        ["html", 70, "pink"]
    ],


    /*这里填写你的技能描述，你可以内嵌HTML标签以调整格式*/
    skills_description: "<ul>" +
        "     <li>操作系统、计算机网络、数据库和数据结构等基础知识良好。</li>" +
        "     <li>熟练掌握Java、python等语言基础。</li>" +
        "     <li>熟悉多线程、集合等基础框架。</li>" +
        "     <li>熟悉队列、栈、二叉树等数据结构算法。</li>" +
        "     <li>熟悉SQL语句编写。</li>" +
        "     <li>熟悉基本Linux命令操作。</li>" +
        "     <li>熟悉Spring、ibatis、struts等基本框架知识。</li>" +
        "     <li>熟悉缓存、消息等机制。</li>" +/*
        "     <li>了解分布式系统的设计与应用。</li>" +*/
        "     <li>熟悉HTML、CSS、JavaScript以及相应前端等基础知识。</li>" +
        "     <li>熟悉Git的使用及其原理。</li>" +
        "     <li>熟悉Markdown的编写。</li>" +
        " </ul>",


    /**
     * 这里填写你的个人作品展示
     * ["img"，"url", "ProjectName", "brief"]
     * img表示您的作品图片链接，url表示您的项目地址，ProjectName表示您的仓库或作品名称，brief是一句简短的介绍
     * 通过查看实际效果以调整字题长度
     */
    portfolio: [
        ["./images/pro-1.jpg", "https://github.com/19991010wan/Buu-Server", "校园论坛", "一个服务与学生的小程序平台<br>持续更新"],
        ["./images/pro-2.jpg", "https://github.com/19991010wan/TriangleinNetwork", "GitHub TriangleinNetwork", "构建github项目参与者网络图，找出三角形个数，讨论与项目质量的关系<br>持续更新"],
    ],


    /**
     * 这里填写您的工作经历
     * ["日期"， "工作"， "介绍"]
     * 你可以内嵌HTML标签以排版格式
     */
    work: [
        //如果您内有工作经历，您可以采取下列写法
        ["————————", "", "<p>暂无论文发表，后续持续更新。</p>"]

        // ["2020/7/1 — 2021/8/10", "<br>阎王殿实习生",
        //     "<p><strong>阎王殿研发部</strong></p>" +
        //     "<p>随着阴历7月15中元节的到来，阎王殿的任务愈发庞大，我以及我所在小组主要负责阎王谱后台部分，拟在解决千万访问并发问题，经过不械努力，使得产品稳定、高效的运行。</p>" +
        //     "<p>随着阴历7月15中元节的到来，阎王殿的任务愈发庞大，我以及我所在小组主要负责阎王谱后台部分，拟在解决千万访问并发问题，经过不械努力，使得产品稳定、高效的运行。</p>"
        // ],
        //
        // ["2020/7/1 — 2021/8/10", "<br>阎王殿实习生",
        //     "<p><strong>阎王殿研发部</strong></p>" +
        //     "<p>随着阴历7月15中元节的到来，阎王殿的任务愈发庞大，我以及我所在小组主要负责阎王谱后台部分，拟在解决千万访问并发问题，经过不械努力，使得产品稳定、高效的运行。</p>" +
        //     "<p>随着阴历7月15中元节的到来，阎王殿的任务愈发庞大，我以及我所在小组主要负责阎王谱后台部分，拟在解决千万访问并发问题，经过不械努力，使得产品稳定、高效的运行。</p>"
        // ]
    ],

    award: [
        //如果您内有获奖经历，您可以采取下列写法
        // ["————————", "", "<p>暂无论文发表，后续持续更新。</p>"]
        ["<strong>全国物理竞赛：</strong>2018年获得全国三等奖"],
        ["<strong>美国大学生数学建模竞赛：</strong>2019年获得美赛H奖，2020年获得美赛F奖"],
        ["<strong>全国大学生数学建模竞赛：</strong>2019年获得北京市二等奖"],
        ["<strong>全国大学生数学竞赛：</strong>2019年获得全国三等奖，2020年获得全国一等奖"],
        ["<strong>北京市优秀毕业生：</strong>2021年获得北京市优秀毕业生"],
        ["<strong>研究生数学建模竞赛：</strong>2021年获得全国三等奖"],
    ],


    /**
     * 这里填写你的其他经历
     * ["日期"， "经历"， "介绍"]
     * 建议填写您的校级及以上得奖经历或或其他证书
     */
    /*others: [
        ["2021-04-28", "第十二届蓝桥杯大学生A组省三等奖", "大一下学期，我参与第十二届蓝桥杯大学生A组，然比赛一改以往暴力题，半数以上DP，仅取得省级三等奖。"],
        ["2021-04-24", "第六届团队程序设计天梯赛个人国家三等奖", "大一下学期，我通过面向全年级的选拔，获得入队名额，在个人赛中获得全国三等奖。"],
        ["2021-04-24", "第六届团队程序设计天梯赛团体国家二等奖", "大一下学期，我通过面向全年级的选拔，获得入队名额，跟随团队取得团体国家二等奖的成绩。"],
        ["2020-11-14", "2020级南昌大学程序设计正式赛三等奖", "大一上学期，我参与校举办的面向全校程序设计大赛并获得三等奖，"],
    ],*/


    /**
     * 在这里填写您的社交网络平台
     * ["img", "url", "desc"]
     * img是社交平台的图标，在./svg目录下我们已经准备好了 微博、简书、掘金、小红书、知乎、csdn、facebook、github、力扣、CF和qq的图标
     * url是您链接
     * desc是一段描述，将鼠标移入将会显示该描述
     * 建议您放置数量 <= 5
     */
    icon: [
        ["./svg/LeetCode.svg", "https://leetcode.cn/u/wu-xie-ge-tai/", "我的力扣主页"],
        ["./svg/github.svg", "https://github.com/19991010Wan", "我的GitHub主页"],
        ["./svg/博客.svg", "", "我的个人博客"],
        ["./svg/掘金.svg", "https://juejin.cn/user/", "我的掘金主页"],
        ["./svg/知乎.svg", "https://www.zhihu.com/people/", "我的知乎主页"]
    ],


    //这是一些图片链接，建议您仅更改第二个头像图片
    url: [
        //背景图、头像、作品展示背景、其他经历背景
        "./images/home-bg.jpg",
        "./images/avatar.jpg",
    ]

}