const MOVIES = [
    {
        "title": "棠棣血",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "武侠/悬疑",
        "tags": [
            "权谋",
            "双男主",
            "江湖",
            "朝堂",
            "反转"
        ],
        "oneLine": "锦衣卫指挥使的养子与敌国间谍相爱,却在查案中发现养父才是叛国的真凶。",
        "url": "./movies/movie-1.html",
        "image": "./1.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "异教夜谈",
        "year": "2025",
        "region": "美国/英国",
        "type": "电影",
        "genre": "恐怖/惊悚",
        "tags": [
            "民俗恐怖",
            "邪教",
            "孤岛",
            "心理",
            "反转"
        ],
        "oneLine": "三位民俗学者受邀至孤岛“解密古老异教”,却发现自己是最后的祭品。",
        "url": "./movies/movie-2.html",
        "image": "./2.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "48 个圣诞愿望",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "奇幻/家庭",
        "tags": [
            "圣诞",
            "许愿",
            "闹剧",
            "温情"
        ],
        "oneLine": "小鬼当家版许愿池,两个熊孩子不小心把全小镇居民的48个圣诞愿望都混在了一起,引发连锁灾难。",
        "url": "./movies/movie-3.html",
        "image": "./3.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "魔夜情狂",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情/奇幻/情色",
        "tags": [
            "都市传说",
            "一夜情",
            "魔法诅咒"
        ],
        "oneLine": "每个满月之夜,他和不同的女人疯狂做爱,天亮后对方会完全忘记他,直到他遇到了一个同样无法被遗忘的女人。",
        "url": "./movies/movie-4.html",
        "image": "./4.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "克雷兄弟的秋天",
        "year": "2020",
        "region": "英国",
        "type": "电影",
        "genre": "剧情,传记,犯罪",
        "tags": [
            "黑帮",
            "伦敦",
            "兄弟情",
            "宿命"
        ],
        "oneLine": "1960年代伦敦最臭名昭彰的黑帮克雷兄弟,在最后一个“秋天”里,各自陷入了爱情与背叛的漩涡。",
        "url": "./movies/movie-5.html",
        "image": "./5.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "出殡也疯狂",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "黑色喜剧",
        "tags": [
            "丧葬",
            "家族",
            "荒诞",
            "闹剧"
        ],
        "oneLine": "一个不成器的儿子为争遗产,把父亲的葬礼搞成了一出荒腔走板的综艺秀。",
        "url": "./movies/movie-6.html",
        "image": "./6.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "小石头",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "留守儿童",
            "公路",
            "祖孙情",
            "治愈"
        ],
        "oneLine": "为了给去世的爷爷寻找一棵传说中的“许愿树”,五岁的留守男孩小石头独自踏上了千里的寻根之路。",
        "url": "./movies/movie-7.html",
        "image": "./7.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "神烦警探第一季",
        "year": "2013",
        "region": "美国",
        "type": "电视剧",
        "genre": "喜剧/犯罪",
        "tags": [
            "搞笑",
            "职场",
            "警探",
            "群像"
        ],
        "oneLine": "全警局最幼稚的探员和最严肃的新局长,被迫组成最搞笑的犯罪打击搭档。",
        "url": "./movies/movie-8.html",
        "image": "./8.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "身后灵",
        "year": "2024",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "灵异,治愈,悬疑",
        "tags": [
            "通灵女主",
            "单元剧",
            "未竟之愿"
        ],
        "oneLine": "一个能看见鬼魂的女孩开设“身后委托”事务所,替亡者完成生前来不及说出口的愿望。",
        "url": "./movies/movie-9.html",
        "image": "./9.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "虚拟实境死亡游戏",
        "year": "2024",
        "region": "日本/韩国",
        "type": "剧集",
        "genre": "科幻/惊悚",
        "tags": [
            "VR游戏",
            "真人死亡",
            "大逃杀",
            "黑客",
            "无限流"
        ],
        "oneLine": "一款VR游戏里死亡会导致现实脑死亡,十万玩家被困,只有一人知道这不是游戏故障。",
        "url": "./movies/movie-10.html",
        "image": "./10.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "心理追凶第四季",
        "year": "2024",
        "region": "英国",
        "type": "电视剧",
        "genre": "犯罪,悬疑,剧情",
        "tags": [
            "犯罪心理",
            "连环杀手",
            "侧写",
            "英式冷峻",
            "道德困境"
        ],
        "oneLine": "天才犯罪侧写师与女警探搭档,追捕一个模仿经典艺术作品的“美术馆杀手”。",
        "url": "./movies/movie-11.html",
        "image": "./11.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "金玉满堂国语",
        "year": "2024",
        "region": "中国香港",
        "type": "电视剧",
        "genre": "剧情/家庭/年代",
        "tags": [
            "豪门恩怨",
            "粤语配音",
            "珠宝设计",
            "商战"
        ],
        "oneLine": "九十年代香港珠宝大亨去世,留下一句遗言“真金不怕火炼”,三个子女必须通过一场没有本金的赌局来争夺家产。",
        "url": "./movies/movie-12.html",
        "image": "./12.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "异世浮生",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "科幻/悬疑",
        "tags": [
            "平行宇宙",
            "身份迷失",
            "高概念"
        ],
        "oneLine": "她每天醒来都是不同的自己——性别、身份、时代全变,只有手上的伤疤相同。",
        "url": "./movies/movie-13.html",
        "image": "./13.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "功夫热粤语",
        "year": "1986",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作,喜剧",
        "tags": [
            "功夫",
            "粤语",
            "市井",
            "搞笑"
        ],
        "oneLine": "茶餐厅伙计意外得到半本秘籍,练成了“热奶茶飞针”,却惹来了各路高手前来踢馆。",
        "url": "./movies/movie-14.html",
        "image": "./14.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "小海龟历险记2",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "动画/冒险",
        "tags": [
            "海洋环保",
            "迁徙之旅",
            "深海奇遇"
        ],
        "oneLine": "小海龟小绿在第二次迁徙中,遇到了一个自称能听懂所有海洋生物语言的人类女孩。",
        "url": "./movies/movie-15.html",
        "image": "./15.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "大学女生的性生活第二季",
        "year": "2023",
        "region": "美国",
        "type": "剧集",
        "genre": "喜剧/爱情/青春",
        "tags": [
            "女性友谊",
            "现代约会",
            "无厘头搞笑"
        ],
        "oneLine": "三个室友外加一个新来的交换生,在埃塞克斯学院继续她们鸡飞狗跳的恋爱与学业。",
        "url": "./movies/movie-16.html",
        "image": "./16.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "绝色双娇",
        "year": "2001",
        "region": "中国内地",
        "type": "电视剧",
        "genre": "古装/喜剧/爱情",
        "tags": [
            "轻喜剧",
            "宫廷",
            "姐妹互换",
            "欢喜冤家"
        ],
        "oneLine": "一个是乡野丫头,一个是宫中格格,两人长得一模一样,意外互换身份后笑料百出。",
        "url": "./movies/movie-17.html",
        "image": "./17.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "运动者联盟",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧/运动",
        "tags": [
            "热血",
            "逆袭",
            "搞笑",
            "团队"
        ],
        "oneLine": "五个被校队开除的“废柴”学生,为了一个荒唐的赌约,组成了史上最不靠谱的田径联盟。",
        "url": "./movies/movie-18.html",
        "image": "./18.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "阁楼上的玩具",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "奇幻/家庭/冒险",
        "tags": [
            "玩具复活",
            "童年回忆",
            "跨越时空"
        ],
        "oneLine": "女孩在祖母阁楼发现一个音乐盒,里面住着会说话的玩具军团。",
        "url": "./movies/movie-19.html",
        "image": "./19.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "评论",
        "year": "2023",
        "region": "韩国",
        "type": "电影",
        "genre": "悬疑/惊悚/社会",
        "tags": [
            "网络暴力",
            "水军",
            "键盘侠",
            "反噬",
            "密室"
        ],
        "oneLine": "一个职业“黑粉”头子,在接到一笔抹杀一名网红的大单后,发现自己正被自己的评论追杀。",
        "url": "./movies/movie-20.html",
        "image": "./20.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "二次旅程",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/奇幻/家庭",
        "tags": [
            "时间循环",
            "父子和解",
            "公路电影",
            "催泪"
        ],
        "oneLine": "一位暴躁的货车司机发现自己每天都会回到儿子出车祸的那天早晨,他必须用无限次循环来读懂儿子的遗言。",
        "url": "./movies/movie-21.html",
        "image": "./21.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "苏格兰女王:玛丽一世",
        "year": "2018",
        "region": "英国",
        "type": "电影",
        "genre": "剧情/历史",
        "tags": [
            "宫斗",
            "权谋",
            "女性史诗"
        ],
        "oneLine": "18岁守寡后回到故土,玛丽·斯图亚特试图夺回被表亲伊丽莎白攥在手中的苏格兰王位。",
        "url": "./movies/movie-22.html",
        "image": "./22.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "为了这片土地",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,乡村",
        "tags": [
            "扶贫",
            "支教",
            "三代人"
        ],
        "oneLine": "为了守住村里最后一亩稻田,八十岁的老农和回乡的孙女一起对抗开发商,却发现开发商是他失散五十年的儿子。",
        "url": "./movies/movie-23.html",
        "image": "./23.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "初恋时光机",
        "year": "2015",
        "region": "日本",
        "type": "电影",
        "genre": "爱情,科幻",
        "tags": [
            "穿越",
            "高中",
            "修正过去",
            "催泪"
        ],
        "oneLine": "30岁的社畜用废品造出时光机,想修正高中的告白失误,却发现初恋另有其人。",
        "url": "./movies/movie-24.html",
        "image": "./24.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "致命柔情",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "爱情、惊悚、悬疑",
        "tags": [
            "蛇蝎美人",
            "骗局",
            "反转",
            "心理战"
        ],
        "oneLine": "一名孤独的富豪爱上温柔女护工,却发现她的每一次“柔情”都是一次精心策划的慢性谋杀。",
        "url": "./movies/movie-25.html",
        "image": "./25.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "孤儿泪",
        "year": "1998",
        "region": "中国",
        "type": "电影",
        "genre": "剧情,家庭",
        "tags": [
            "现实主义",
            "弃婴",
            "收养",
            "农村",
            "苦难"
        ],
        "oneLine": "一个贫困山区的农妇收养了十几个被遗弃的病残孤儿,她用眼泪浇灌出了生命的奇迹。",
        "url": "./movies/movie-26.html",
        "image": "./26.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "恋恋山城",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情,剧情",
        "tags": [
            "山城",
            "书信",
            "错过",
            "重逢",
            "茶香"
        ],
        "oneLine": "一封迟到了五十年的情书,将两个早已白发苍苍的灵魂重新牵回云雾缭绕的山城。",
        "url": "./movies/movie-27.html",
        "image": "./27.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "小两口",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "都市/情感/生活",
        "tags": [
            "新婚",
            "婆媳",
            "经济压力",
            "成长"
        ],
        "oneLine": "一对95后裸婚夫妻,婚后第一年就遭遇了房贷、流产和双方父母搬来同住的“三重暴击”。",
        "url": "./movies/movie-28.html",
        "image": "./28.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "兴风作浪3",
        "year": "2021",
        "region": "中国大陆",
        "type": "网络电影",
        "genre": "喜剧/爱情",
        "tags": [
            "东北",
            "离婚",
            "夫妻",
            "搞笑",
            "再追爱"
        ],
        "oneLine": "一对已经离婚五年的欢喜冤家,为了争夺同一个相亲对象,被迫再次住到同一屋檐下。",
        "url": "./movies/movie-29.html",
        "image": "./29.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "婚前21天",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "爱情/喜剧/家庭",
        "tags": [
            "闪婚",
            "试婚",
            "代际冲突",
            "房产证",
            "前任"
        ],
        "oneLine": "婚礼前21天,准新娘发现未婚夫的白月光就住对门,而准新郎发现自己其实是赘婿剧本。",
        "url": "./movies/movie-30.html",
        "image": "./30.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "灭顶之灾 上",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "科幻,灾难,惊悚",
        "tags": [
            "末日",
            "神秘力量",
            "生存",
            "悬疑铺垫",
            "视觉奇观"
        ],
        "oneLine": "一种神秘力量开始让人类在极度恐慌中自毁,幸存者发现只要不“害怕”就能活命,但谁又能控制恐惧?",
        "url": "./movies/movie-31.html",
        "image": "./31.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "唤醒者",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑,科幻,惊悚",
        "tags": [
            "记忆植入",
            "阴谋",
            "觉醒"
        ],
        "oneLine": "一场车祸后,男主脑中不断闪现不属于自己的记忆碎片,他发现自己可能是某个邪恶计划的“苏醒体”。",
        "url": "./movies/movie-32.html",
        "image": "./32.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "威震群雄",
        "year": "1992",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作,武侠",
        "tags": [
            "江湖恩怨",
            "双雄对决",
            "港式武打",
            "兄弟情义",
            "悲情英雄"
        ],
        "oneLine": "两大绝世高手因误会血战十年,最终发现真正的仇人竟是彼此最信任的兄弟。",
        "url": "./movies/movie-33.html",
        "image": "./33.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "热恋彩虹岛",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情,同性,剧情",
        "tags": [
            "LGTBQ+",
            "旅行",
            "自我认同",
            "治愈"
        ],
        "oneLine": "一对分手多年的男同志恋人在澎湖湾重逢,为了等一场百年一遇的“彩虹海”,被迫相处七天。",
        "url": "./movies/movie-34.html",
        "image": "./34.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "海底小纵队 第八季",
        "year": "2024",
        "region": "英国/加拿大",
        "type": "动画",
        "genre": "儿童/冒险",
        "tags": [
            "海洋",
            "科普",
            "团队合作"
        ],
        "oneLine": "章鱼堡迎来新成员——一只会说话的深海巨型章鱼,但它只会说反话。",
        "url": "./movies/movie-35.html",
        "image": "./35.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "冒险三人组",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "冒险/家庭/喜剧",
        "tags": [
            "寻宝",
            "青少年",
            "搞笑",
            "成长"
        ],
        "oneLine": "三个被留在家里的“问题少年”,为了躲避父母的监控,意外在家门口的后山发现了一个真实的宝藏秘密。",
        "url": "./movies/movie-36.html",
        "image": "./36.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "荣耀乒乓",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "运动、剧情",
        "tags": [
            "热血",
            "国球",
            "师徒传承"
        ],
        "oneLine": "一个是被国家队开除的天才,一个是省队捡来的“球痴”,两人联手冲击大满贯。",
        "url": "./movies/movie-37.html",
        "image": "./37.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "消失的收藏家",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "悬疑,冒险",
        "tags": [
            "古董",
            "密室",
            "寻宝"
        ],
        "oneLine": "拍卖行实习生收到已故收藏家寄来的明信片,按照线索寻找她,却发现收藏家每周都“死”一次。",
        "url": "./movies/movie-38.html",
        "image": "./38.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "洗头",
        "year": "2019",
        "region": "中国大陆",
        "type": "短片",
        "genre": "剧情,家庭,女性",
        "tags": [
            "母女代沟",
            "日常对抗",
            "短片张力",
            "现实主义"
        ],
        "oneLine": "女儿执意要去大城市打拼,母亲却非要她洗完头再走,两人在出租屋的狭小浴室里爆发了持续三年的积怨。",
        "url": "./movies/movie-39.html",
        "image": "./39.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "猎捕者",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作,犯罪,悬疑",
        "tags": [
            "赏金猎人",
            "边境",
            "以暴制暴",
            "灰色地带"
        ],
        "oneLine": "中缅边境,一个专门替受害者家属“猎捕”逃脱凶手的赏金猎人,这次的目标是一个精通反侦察术的前法医。",
        "url": "./movies/movie-40.html",
        "image": "./40.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "隋唐英雄",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作/历史/战争",
        "tags": [
            "硬核冷兵器",
            "群像戏",
            "反英雄",
            "史诗场面",
            "实拍狂魔"
        ],
        "oneLine": "不美化英雄,不丑化反派,还原隋末唐初那场让世家门阀死伤百万的“意外”战争。",
        "url": "./movies/movie-41.html",
        "image": "./41.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "深渊2001",
        "year": "2000",
        "region": "美国",
        "type": "电影",
        "genre": "科幻,悬疑,灾难",
        "tags": [
            "深海",
            "克隆阴谋",
            "2000年恐慌",
            "心理惊悚"
        ],
        "oneLine": "马里亚纳海沟的科考站全员失联,救援队发现深渊里倒影的不是自己,而是2001年的脸。",
        "url": "./movies/movie-42.html",
        "image": "./42.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "狮子彻夜未眠",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "剧情,家庭,哲学",
        "tags": [
            "阿尔茨海默",
            "父女和解",
            "莎士比亚",
            "生命终点"
        ],
        "oneLine": "患有阿尔茨海默症的父亲将自己幻想成《李尔王》,女儿只好陪他演完最后一幕,直到真正的风暴来临。",
        "url": "./movies/movie-43.html",
        "image": "./43.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "罪孽的代价",
        "year": "2013",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "剧情,犯罪,悬疑",
        "tags": [
            "赎罪",
            "误杀",
            "西伯利亚",
            "道德困境"
        ],
        "oneLine": "一个年轻人在醉酒后误杀了人,逃到西伯利亚森林深处,用十二年的孤独偿还罪孽。",
        "url": "./movies/movie-44.html",
        "image": "./44.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "血性山谷",
        "year": "2004",
        "region": "中国大陆",
        "type": "电影",
        "genre": "战争/历史/剧情",
        "tags": [
            "抗日战争",
            "血色浪漫",
            "人性灰度",
            "山谷战"
        ],
        "oneLine": "一次失败的山谷伏击战,让一群溃败的士兵和一队逃难的百姓,在绝境中互相吞噬。",
        "url": "./movies/movie-45.html",
        "image": "./45.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "潘多拉:被操纵的乐园",
        "year": "2023",
        "region": "韩国",
        "type": "剧集",
        "genre": "悬疑/科幻/复仇",
        "tags": [
            "人造人",
            "记忆植入",
            "财阀斗争",
            "失忆"
        ],
        "oneLine": "失忆的财阀女主人拥有完美生活,直到她发现自己的记忆是假的,连身体都可能是“代餐”。",
        "url": "./movies/movie-46.html",
        "image": "./46.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "幻世",
        "year": "2027",
        "region": "中国大陆",
        "type": "电影",
        "genre": "科幻,悬疑,灾难",
        "tags": [
            "全息网游",
            "意识上传",
            "囚笼",
            "哲学"
        ],
        "oneLine": "全球首款全沉浸式网游《幻世》开服,三亿人同时上线,却发现再也无法登出。",
        "url": "./movies/movie-47.html",
        "image": "./47.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "灵界替身",
        "year": "2024",
        "region": "中国香港/台湾",
        "type": "电影",
        "genre": "恐怖/惊悚/奇幻",
        "tags": [
            "通灵",
            "替死鬼",
            "冥婚",
            "灵异直播",
            "双胞胎诡计"
        ],
        "oneLine": "落魄网红替人“通灵找替身”,直到他发现每一单“客户”的照片上,受害者的脸都变成了他自己。",
        "url": "./movies/movie-48.html",
        "image": "./48.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "恐怖异俗秀",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖,悬疑",
        "tags": [
            "畸形秀",
            "马戏团",
            "超自然",
            "复古恐怖"
        ],
        "oneLine": "1932年,一群记者探访一个废弃的畸形秀马戏团,却发现所有“怪物”的标本都在夜里活了过来。",
        "url": "./movies/movie-49.html",
        "image": "./49.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "侠盗兄弟",
        "year": "2025",
        "region": "中国香港",
        "type": "剧集",
        "genre": "动作/警匪",
        "tags": [
            "兄弟情",
            "双雄",
            "卧底",
            "背叛",
            "宿命"
        ],
        "oneLine": "失散二十年的亲兄弟重逢时,一个是叱咤风云的劫匪,一个却是誓要抓他归案的重案组警司,血脉与正义互相撕扯。",
        "url": "./movies/movie-50.html",
        "image": "./50.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "非法囚禁",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "犯罪,悬疑",
        "tags": [
            "密室",
            "心理战",
            "复仇"
        ],
        "oneLine": "为寻找失踪妹妹,他故意被囚禁,却发现笼外还有更大的笼子。",
        "url": "./movies/movie-51.html",
        "image": "./51.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "成瘾剂量",
        "year": "2023",
        "region": "美国",
        "type": "电视剧",
        "genre": "剧情,犯罪,医疗",
        "tags": [
            "阿片类药物",
            "制药公司",
            "诉讼",
            "真实事件改编"
        ],
        "oneLine": "揭露美国史上最大医药骗局:一家制药公司如何让一种止痛药毁掉一代人。",
        "url": "./movies/movie-52.html",
        "image": "./52.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "幸福生活万年长",
        "year": "2024",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "喜剧,家庭,乡村",
        "tags": [
            "乡村振兴",
            "养老",
            "轻喜剧",
            "群像"
        ],
        "oneLine": "一个废弃的乡镇敬老院,被一群“不省心”的老人和几个“不靠谱”的年轻人盘活了。",
        "url": "./movies/movie-53.html",
        "image": "./53.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "小小的愿望",
        "year": "2023",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情、家庭",
        "tags": [
            "临终",
            "亲情",
            "治愈",
            "和解",
            "自闭症"
        ],
        "oneLine": "患有绝症的单亲爸爸,为了帮自闭症儿子完成“交一个朋友”的心愿,开始伪造自己的社交账号。",
        "url": "./movies/movie-54.html",
        "image": "./54.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "生死对峙",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作,警匪,剧情",
        "tags": [
            "狙击手",
            "反恐",
            "楼宇对峙",
            "心理战",
            "限时营救"
        ],
        "oneLine": "一个因心理创伤退居二线的狙击手,在一栋摩天楼里与劫持了整层幼儿园的恐怖分子展开终极对决。",
        "url": "./movies/movie-55.html",
        "image": "./55.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "恐怖杀人王",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "犯罪/惊悚",
        "tags": [
            "真实事件改编",
            "连环杀手",
            "倒叙",
            "心理战"
        ],
        "oneLine": "七十年代,一个温和的家具商人白天卖床垫,晚上用他的车床制造“特殊棺材”。",
        "url": "./movies/movie-56.html",
        "image": "./56.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "谋杀地下老板",
        "year": "2023",
        "region": "韩国",
        "type": "电影",
        "genre": "犯罪,动作,黑色幽默",
        "tags": [
            "黑帮",
            "卧底",
            "乌龙事件",
            "小人物",
            "反转"
        ],
        "oneLine": "三个走投无路的小混混决定绑架黑帮老大,结果误杀了人,而死的其实是警察安插的卧底。",
        "url": "./movies/movie-57.html",
        "image": "./57.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "我的奋斗",
        "year": "2024",
        "region": "挪威",
        "type": "电影",
        "genre": "剧情,传记",
        "tags": [
            "同名小说改编",
            "中年写作",
            "家庭",
            "存在主义"
        ],
        "oneLine": "一个叫卡尔·奥韦的挪威男人决定写一本长达3000页的自传,只描述自己最琐碎、最羞耻的日常生活。",
        "url": "./movies/movie-58.html",
        "image": "./58.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "凡人英雄",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作/犯罪/剧情",
        "tags": [
            "外卖员",
            "扫黑除恶",
            "小人物",
            "写实"
        ],
        "oneLine": "外卖小哥无意间录下行贿视频,从被追杀到主动设局,用送餐地图协助警方端掉保护伞。",
        "url": "./movies/movie-59.html",
        "image": "./59.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "大毛狗",
        "year": "2015",
        "region": "法国/比利时",
        "type": "动画电影",
        "genre": "动画/家庭/治愈",
        "tags": [
            "毛绒玩具",
            "孩子",
            "城市",
            "友谊"
        ],
        "oneLine": "六岁男孩把外婆做的大毛绒狗弄丢了,这只巨大的笨狗在巴黎街头流浪了一夜,只为找回小主人。",
        "url": "./movies/movie-60.html",
        "image": "./60.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "剑府群龙",
        "year": "2027",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "武侠,古装",
        "tags": [
            "动作",
            "学院",
            "悬疑"
        ],
        "oneLine": "天下第一剑府接连发生弟子失踪案,新入学的菜鸟们发现,凶手的剑法竟然出自剑府自己的禁术阁。",
        "url": "./movies/movie-61.html",
        "image": "./61.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "大尉叛逃记",
        "year": "2024",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "剧情/惊悚/战争",
        "tags": [
            "俄乌冲突",
            "逃亡",
            "人性拷问",
            "冷战氛围"
        ],
        "oneLine": "一名俄军大尉在目睹战友屠杀平民后,带着机密文件和妻女向邻国叛逃,却遭遇三方追杀。",
        "url": "./movies/movie-62.html",
        "image": "./62.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "算是报恩了吧",
        "year": "2023",
        "region": "日本",
        "type": "电影",
        "genre": "剧情家庭",
        "tags": [
            "催泪",
            "反转",
            "底层生活",
            "温情"
        ],
        "oneLine": "被老人收养的孤儿长大后成了黑道分子,老人临终前却把全部积蓄留给了他。",
        "url": "./movies/movie-63.html",
        "image": "./63.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "少年的秘密日记",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "青春/悬疑",
        "tags": [
            "校园欺凌",
            "日记本",
            "时间胶囊"
        ],
        "oneLine": "转学生捡到一本二十年前的日记,里面的“明日预言”竟与现实分毫不差。",
        "url": "./movies/movie-64.html",
        "image": "./64.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "一代拳王",
        "year": "1977",
        "region": "美国",
        "type": "电影",
        "genre": "剧情,传记,运动",
        "tags": [
            "拳击",
            "黑人",
            "抗争",
            "传奇"
        ],
        "oneLine": "阿里大战弗雷泽前夕,一位老拳击记者挖出两人擂台下的政治暗战。",
        "url": "./movies/movie-65.html",
        "image": "./65.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "飞扬的青春2024",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "青春/校园/成长",
        "tags": [
            "高中",
            "高考",
            "友情",
            "梦想",
            "群像"
        ],
        "oneLine": "2024届高三七班的三十个学生,用一年时间向所有人证明:差班也有春天。",
        "url": "./movies/movie-66.html",
        "image": "./66.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "西线无战事1979",
        "year": "1979",
        "region": "西德",
        "type": "电视电影",
        "genre": "战争,剧情,历史",
        "tags": [
            "一战",
            "反战",
            "经典改编",
            "雷马克"
        ],
        "oneLine": "雷马克同名小说改编,1979年版电视电影:十九岁的保罗走上战场,以为自己保卫祖国,最后只想活着爬出战壕。",
        "url": "./movies/movie-67.html",
        "image": "./67.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "吹梦无踪",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "奇幻/爱情",
        "tags": [
            "梦境操控",
            "遗愿清单",
            "催泪"
        ],
        "oneLine": "一个能潜入别人梦境的女孩,为了完成已故男友的遗愿,在梦里替他向所有人告别。",
        "url": "./movies/movie-68.html",
        "image": "./68.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "舞伶艳史",
        "year": "1991",
        "region": "香港",
        "type": "电影",
        "genre": "剧情,情色,艺术",
        "tags": [
            "舞女",
            "风月场",
            "女性悲剧",
            "怀旧"
        ],
        "oneLine": "六十年代香港夜总会头牌舞女的浮沉半生,为爱痴狂,为钱所困,为尊严而死。",
        "url": "./movies/movie-69.html",
        "image": "./69.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "堕落2014",
        "year": "2014",
        "region": "英国/爱尔兰",
        "type": "剧集",
        "genre": "犯罪/惊悚",
        "tags": [
            "连环杀手",
            "女警探",
            "猫鼠游戏",
            "北爱尔兰"
        ],
        "oneLine": "一个冷静的女警探和一个优雅的连环杀手,在贝尔法斯特的雨夜中展开了一场持续五年的猫鼠游戏。",
        "url": "./movies/movie-70.html",
        "image": "./70.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "我的小公主",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "母女",
            "控制",
            "童星",
            "心理"
        ],
        "oneLine": "过气女星母亲为了重回聚光灯下,把年仅6岁的女儿打造成性感萝莉,一场畸形的母爱与控制开始了。",
        "url": "./movies/movie-71.html",
        "image": "./71.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "爱人2022",
        "year": "2022",
        "region": "韩国",
        "type": "电影",
        "genre": "爱情剧情",
        "tags": [
            "疫情爱情",
            "时空交错",
            "隔离日记",
            "文艺"
        ],
        "oneLine": "首尔封城期间,住同一栋楼但从未说过话的男女,通过错位的快递单开始了一场“非接触恋爱”。",
        "url": "./movies/movie-72.html",
        "image": "./72.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "太阳底下",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "剧情、家庭",
        "tags": [
            "家庭秘密",
            "度假",
            "夏日",
            "法语片",
            "情感细腻"
        ],
        "oneLine": "一个法国家庭在南法度假屋的明媚阳光下重聚,却因一本意外发现的日记,掀开了二十年前一桩命案的遮羞布。",
        "url": "./movies/movie-73.html",
        "image": "./73.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "谋杀快乐",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "悬疑/喜剧/犯罪",
        "tags": [
            "日本",
            "密室",
            "推理",
            "黑色幽默",
            "反套路"
        ],
        "oneLine": "一个沉迷推理小说的普通上班族,醒来发现自己在密室中,身边是七具尸体和一张纸条:“请享受谋杀”。",
        "url": "./movies/movie-74.html",
        "image": "./74.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "37次想你",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情/悬疑",
        "tags": [
            "记忆循环",
            "都市恋爱",
            "时间重置",
            "催泪向"
        ],
        "oneLine": "男主每天醒来都会忘记女友,女友想尽办法让他重新爱上自己,直到第37次那天她失踪了。",
        "url": "./movies/movie-75.html",
        "image": "./75.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "某人某地第一季",
        "year": "2022",
        "region": "美国",
        "type": "电视剧",
        "genre": "喜剧/剧情",
        "tags": [
            "小镇",
            "中年返乡",
            "治愈",
            "友谊",
            "歌唱"
        ],
        "oneLine": "一个失败的女歌手回到堪萨斯老家,却在教堂唱诗班和一群怪咖中间找到了“家”。",
        "url": "./movies/movie-76.html",
        "image": "./76.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "爱死你害死你",
        "year": "2004",
        "region": "香港",
        "type": "电影",
        "genre": "爱情,惊悚,悬疑",
        "tags": [
            "病娇",
            "黑色电影",
            "致命诱惑",
            "婚姻危机",
            "反转"
        ],
        "oneLine": "当新婚丈夫开始怀疑妻子给自己下慢性毒药时,却发现妻子的日记本里写满了如何让他“幸福到死”的诡异计划。",
        "url": "./movies/movie-77.html",
        "image": "./77.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "烧酒战争",
        "year": "2025",
        "region": "韩国",
        "type": "剧集",
        "genre": "剧情,动作,黑色喜剧",
        "tags": [
            "黑帮",
            "酿酒",
            "商业战",
            "底层逆袭",
            "方言"
        ],
        "oneLine": "为了对抗垄断市场的大财阀,一个落魄黑帮老大重拾祖传手艺,用一碗烧酒撬动整个地下世界。",
        "url": "./movies/movie-78.html",
        "image": "./78.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "贝肯熊2:金牌特工",
        "year": "2021",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动画/喜剧",
        "tags": [
            "特工",
            "笨拙",
            "友谊",
            "冒险"
        ],
        "oneLine": "贝肯熊被特工局开除后,竟靠一本盗版《间谍手册》破获了国际芯片走私案。",
        "url": "./movies/movie-79.html",
        "image": "./79.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "尸冥勿语",
        "year": "2025",
        "region": "泰国",
        "type": "电影",
        "genre": "恐怖/灵异",
        "tags": [
            "巫术",
            "古曼童",
            "报应",
            "东南亚",
            "民俗恐怖"
        ],
        "oneLine": "一个殡葬师意外发现,那些生前无人领丧的孤魂,会在头七那夜找上最后一个触碰过他们尸体的人。",
        "url": "./movies/movie-80.html",
        "image": "./80.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "战火蔓延,尔等为何",
        "year": "2014",
        "region": "日本",
        "type": "电影",
        "genre": "战争",
        "tags": [
            "反战思辨",
            "生死哲学",
            "战场人性",
            "黑白影像"
        ],
        "oneLine": "二战末期,三个日本逃兵躲进山洞,为“为何而战”争论了整整七天。",
        "url": "./movies/movie-81.html",
        "image": "./81.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "贝尔戈维亚丑闻",
        "year": "2021",
        "region": "英国",
        "type": "电视剧",
        "genre": "剧情/历史/爱情",
        "tags": [
            "贵族",
            "丑闻",
            "遗产",
            "维多利亚时代",
            "朱利安·费罗斯"
        ],
        "oneLine": "一个穷小子娶了贵族千金,却在婚礼当晚被发现真实身份是逃亡的杀人犯。",
        "url": "./movies/movie-82.html",
        "image": "./82.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "蜘蛛侠百战曱甴精",
        "year": "1993",
        "region": "香港",
        "type": "电影",
        "genre": "动作/奇幻/喜剧",
        "tags": [
            "港式恶搞",
            "蟑螂变异",
            "市井英雄"
        ],
        "oneLine": "茶餐厅伙计阿虫被辐射曱甴咬伤,获得蟑螂超能力,却发现自己要对抗的,是隔壁开灭虫公司的“蜘蛛侠”。",
        "url": "./movies/movie-83.html",
        "image": "./83.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "染色爱情",
        "year": "2014",
        "region": "韩国",
        "type": "电影",
        "genre": "爱情/同性/剧情",
        "tags": [
            "布料",
            "色彩心理学",
            "暗恋",
            "匠人精神"
        ],
        "oneLine": "一位精通色彩心理学的男设计师,用不同颜色的布料为顾客伪装恋情,却无法染色自己的真心。",
        "url": "./movies/movie-84.html",
        "image": "./84.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "女煞星续集",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作,犯罪,悬疑",
        "tags": [
            "女性杀手",
            "复仇",
            "枪战",
            "黑色电影",
            "江湖恩怨"
        ],
        "oneLine": "第一部中假死的女杀手重现江湖,这次她的目标不是仇人,而是自己过去的身份。",
        "url": "./movies/movie-85.html",
        "image": "./85.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "没有空气的时间",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "科幻/悬疑",
        "tags": [
            "太空灾难",
            "倒计时",
            "人工智能",
            "自我牺牲",
            "硬科幻"
        ],
        "oneLine": "太空舱氧气仅剩45分钟,唯一的宇航员却发现,杀掉其他三名沉睡的同伴,才能让剩余氧气撑到救援抵达。",
        "url": "./movies/movie-86.html",
        "image": "./86.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "九命奇冤梁天来",
        "year": "2014",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "古装/悬疑/犯罪",
        "tags": [
            "公案",
            "奇情",
            "反转",
            "复仇",
            "清代"
        ],
        "oneLine": "清朝一桩灭门惨案,受害者梁天来竟声称自己“死了八次”,还带着九条命来告状。",
        "url": "./movies/movie-87.html",
        "image": "./87.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "你好李焕英",
        "year": "2021",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧、剧情、奇幻",
        "tags": [
            "穿越",
            "母爱",
            "子欲养而亲不待",
            "催泪"
        ],
        "oneLine": "女儿穿越回母亲年轻的时代,拼命想改变母亲命运,却发现一切都是母亲为自己编织的梦。",
        "url": "./movies/movie-88.html",
        "image": "./88.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "毕业旅行",
        "year": "2020",
        "region": "台湾",
        "type": "电影",
        "genre": "悬疑/惊悚",
        "tags": [
            "校园",
            "密室",
            "复仇"
        ],
        "oneLine": "六名高中死党毕业旅行入住一栋豪华民宿,醒来后发现每个人的脖子上都多了一条倒计时刺青。",
        "url": "./movies/movie-89.html",
        "image": "./89.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "最灿烂的我们",
        "year": "2023",
        "region": "中国大陆",
        "type": "TV series",
        "genre": "都市/爱情/职场",
        "tags": [
            "破镜重圆",
            "时尚圈",
            "成长",
            "爽剧"
        ],
        "oneLine": "七年前被霸凌退圈的丑小鸭,以顶级设计师身份归来,手撕渣男前男友和他的白月光。",
        "url": "./movies/movie-90.html",
        "image": "./90.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "一个叫做地狱的小镇",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "悬疑科幻",
        "tags": [
            "无限循环",
            "小镇谜团",
            "时间错乱",
            "记忆碎片"
        ],
        "oneLine": "每个进入这个叫“地狱”的小镇的人,都会在第七天清晨失去一切记忆,从头开始。",
        "url": "./movies/movie-91.html",
        "image": "./91.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "摇滚吧!中二乐团",
        "year": "2024",
        "region": "日本",
        "type": "剧集",
        "genre": "喜剧,音乐,青春",
        "tags": [
            "摇滚",
            "中二病",
            "校园",
            "逆袭",
            "热血"
        ],
        "oneLine": "五个被赶出社团的中二病学生,为了在文化节复仇,组成了史上最尬摇滚乐队。",
        "url": "./movies/movie-92.html",
        "image": "./92.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "无人之子",
        "year": "2022",
        "region": "美国",
        "type": "电影",
        "genre": "科幻,惊悚",
        "tags": [
            "人工智能",
            "伦理",
            "悬疑"
        ],
        "oneLine": "一对无法生育的夫妇定制了AI儿童,却发现这个“孩子”正在悄悄操控整个社区。",
        "url": "./movies/movie-93.html",
        "image": "./93.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "欧洲特快车",
        "year": "2025",
        "region": "丹麦,德国",
        "type": "电影",
        "genre": "剧情,历史",
        "tags": [
            "铁路",
            "难民危机",
            "公路片变体",
            "欧洲现状"
        ],
        "oneLine": "一列从伊斯坦布尔开往巴黎的特快列车上,不同国籍、阶级和信仰的乘客被迫共同面对一场突发的政治暗杀。",
        "url": "./movies/movie-94.html",
        "image": "./94.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "怪物行走",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "奇幻/剧情/灾难",
        "tags": [
            "怪兽",
            "公路片",
            "治愈",
            "末日",
            "环保"
        ],
        "oneLine": "当如山峦般的巨兽踏上毁灭城市的旅途,一名绝望的上班族却发现,它的目的地竟是自己的童年故乡。",
        "url": "./movies/movie-95.html",
        "image": "./95.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "阳台",
        "year": "2021",
        "region": "意大利",
        "type": "电影",
        "genre": "剧情,家庭",
        "tags": [
            "封锁期间",
            "邻里关系",
            "阳台音乐会",
            "孤独"
        ],
        "oneLine": "意大利封城期间,一栋普通居民楼的阳台上,不同楼层的住户从互相嫌弃到用音乐重新连接彼此。",
        "url": "./movies/movie-96.html",
        "image": "./96.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "棋盘人生",
        "year": "2020",
        "region": "美国",
        "type": "电影",
        "genre": "剧情,传记",
        "tags": [
            "国际象棋",
            "天才",
            "精神疾病",
            "博弈",
            "救赎"
        ],
        "oneLine": "一个患有精神分裂症的棋王,每一步棋都在与脑中的对手对弈,而他不知道那个对手是否真实。",
        "url": "./movies/movie-97.html",
        "image": "./97.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "捣乱的鬼屋",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "恐怖/喜剧",
        "tags": [
            "驱魔",
            "搞笑",
            "反转",
            "合家欢"
        ],
        "oneLine": "一个三流驱魔师团队接了一单“凶宅”生意,进去才发现,鬼不是装的,但鬼胆子特别小。",
        "url": "./movies/movie-98.html",
        "image": "./98.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "黎明前与妳相遇",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "爱情/剧情/文艺",
        "tags": [
            "一夜情",
            "陌生人",
            "巴黎夜色",
            "命运交集"
        ],
        "oneLine": "两个陌生人在巴黎夜车相遇,约定只在日出前相爱,天亮后永不相见——但他们都作弊了。",
        "url": "./movies/movie-99.html",
        "image": "./99.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "末日孤舰第五季",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "动作,科幻,灾难",
        "tags": [
            "海战",
            "末日",
            "孤舰",
            "最终季"
        ],
        "oneLine": "病毒危机平息三年后,一艘来历不明的幽灵潜艇击沉重建中的海军舰队,内森·詹姆斯号再次成为人类最后的希望。",
        "url": "./movies/movie-100.html",
        "image": "./100.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "乱爱办公室",
        "year": "2023",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情/喜剧/剧情",
        "tags": [
            "办公室恋情",
            "多角关系",
            "黑色幽默",
            "反转",
            "修罗场"
        ],
        "oneLine": "一间深夜的办公室,五个各怀鬼胎的员工同时收到匿名威胁邮件,所有地下恋情即将在零点曝光。",
        "url": "./movies/movie-101.html",
        "image": "./101.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "精灵鼠小弟",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "动画,奇幻,冒险",
        "tags": [
            "老鼠",
            "冒险",
            "友谊",
            "重制",
            "家庭"
        ],
        "oneLine": "这一次,斯图亚特不再是小猫眼中的点心,他驾驶着微型飞机,踏上寻找失散家人的跨洋之旅。",
        "url": "./movies/movie-102.html",
        "image": "./102.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "狂澜春醒",
        "year": "2025",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "悬疑/年代",
        "tags": [
            "民国",
            "探案",
            "家族恩怨",
            "暴雨"
        ],
        "oneLine": "民国十八年,一场百年不遇的暴雨冲出了一具白骨,牵扯出江南纺织世家三代人的血腥发家史。",
        "url": "./movies/movie-103.html",
        "image": "./103.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "紫檀巷",
        "year": "2026",
        "region": "英国",
        "type": "剧集",
        "genre": "恐怖/悬疑/超自然",
        "tags": [
            "鬼宅",
            "诅咒",
            "家族史",
            "时间循环",
            "克苏鲁"
        ],
        "oneLine": "伊丽莎白搬进紫檀巷7号后,每晚都会在凌晨3:33醒来,看见墙上用血写着:“杀了她”。",
        "url": "./movies/movie-104.html",
        "image": "./104.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "汽车维修站",
        "year": "2025",
        "region": "韩国",
        "type": "剧集",
        "genre": "悬疑奇幻",
        "tags": [
            "修车厂",
            "记忆换件",
            "亡者遗物",
            "每周一案"
        ],
        "oneLine": "一家只在深夜开门的汽车维修站,站长能拆下事故车的零件,同时拆下车主那段痛苦的记忆。",
        "url": "./movies/movie-105.html",
        "image": "./105.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "茱丽叶国度",
        "year": "2024",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "爱情/奇幻",
        "tags": [
            "平行世界",
            "书信传情",
            "悲剧重演",
            "宿命"
        ],
        "oneLine": "在现代台北,一位失意编剧意外进入“茱丽叶国度”,每写一封信,就会改写出一个悲剧结局。",
        "url": "./movies/movie-106.html",
        "image": "./106.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "浮云世事",
        "year": "2024",
        "region": "芬兰",
        "type": "电影",
        "genre": "剧情/喜剧",
        "tags": [
            "北欧冷幽默",
            "失业风暴",
            "底层尊严"
        ],
        "oneLine": "经济危机下一对中年夫妇接连失业,为保住房子,他们轮流假装上班,却在公交车上发现了彼此的秘密。",
        "url": "./movies/movie-107.html",
        "image": "./107.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "玻璃圈风云",
        "year": "1992",
        "region": "美国",
        "type": "电影",
        "genre": "剧情,犯罪",
        "tags": [
            "华尔街",
            "内幕交易",
            "黑色电影",
            "骗局",
            "年代感"
        ],
        "oneLine": "90年代纽约,一个电话推销员靠一个空壳公司和一口漂亮话,撬动了整个华尔街的垃圾债券市场。",
        "url": "./movies/movie-108.html",
        "image": "./108.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "代号九耳犬",
        "year": "2023",
        "region": "中国",
        "type": "剧集",
        "genre": "谍战,悬疑",
        "tags": [
            "民国",
            "密码战",
            "双面间谍",
            "女性"
        ],
        "oneLine": "1941年,一名拥有超强听力的盲女被军统征召,去破译潜伏在租界的日本“九耳犬”间谍网。",
        "url": "./movies/movie-109.html",
        "image": "./109.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "烟草商",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/犯罪",
        "tags": [
            "黑色幽默",
            "小镇风云",
            "代际冲突",
            "烟草管制",
            "底层挣扎"
        ],
        "oneLine": "小镇唯一烟草店的老闆意外卷入走私案,为了生存不得不与黑白两道周旋。",
        "url": "./movies/movie-110.html",
        "image": "./110.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "神秘之法",
        "year": "2021",
        "region": "日本",
        "type": "电影",
        "genre": "剧情,奇幻,悬疑",
        "tags": [
            "宗教团体",
            "心理控制",
            "法庭戏",
            "超能力",
            "社会派"
        ],
        "oneLine": "一位专门帮人脱离邪教的律师,接下了一起离奇的案件:被告声称自己拥有“用语言改变现实”的能力。",
        "url": "./movies/movie-111.html",
        "image": "./111.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "金银滩",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "西部",
        "tags": [
            "犯罪",
            "寻宝",
            "荒漠",
            "人性"
        ],
        "oneLine": "青海金银滩草原发现金矿,全村一夜暴富,随之而来的,是没有法律约束的“淘金热”与毁灭。",
        "url": "./movies/movie-112.html",
        "image": "./112.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "脱口秀大会第五季",
        "year": "2024",
        "region": "中国大陆",
        "type": "综艺",
        "genre": "喜剧/脱口秀",
        "tags": [
            "竞演",
            "吐槽",
            "素人"
        ],
        "oneLine": "来自各行各业的50名脱口秀新人同台竞演,冠军将获得“年度嘴替”称号,但有人为了赢,开始“偷”别人的苦难经历讲成段子。",
        "url": "./movies/movie-113.html",
        "image": "./113.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "神圣的偶像",
        "year": "2024",
        "region": "韩国",
        "type": "电视剧",
        "genre": "奇幻/喜剧",
        "tags": [
            "穿越",
            "爱豆",
            "神父"
        ],
        "oneLine": "异世界大神官一夜之间穿越成韩国糊团偶像,他用驱魔技能打败了对家买的水军。",
        "url": "./movies/movie-114.html",
        "image": "./114.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "凶降喜讯",
        "year": "2017",
        "region": "日本",
        "type": "电影",
        "genre": "恐怖、家庭、喜剧",
        "tags": [
            "怀孕",
            "诅咒",
            "诡异胎儿",
            "黑色幽默"
        ],
        "oneLine": "一对渴望孩子的夫妇终于怀孕,但B超显示,肚子里怀的是一颗能预知死期的恶魔头颅。",
        "url": "./movies/movie-115.html",
        "image": "./115.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "你的来生",
        "year": "2025",
        "region": "韩国",
        "type": "电视剧",
        "genre": "科幻,爱情",
        "tags": [
            "转世",
            "数据上传",
            "记忆宫殿",
            "永生"
        ],
        "oneLine": "一位天才程序员将逝去女友的意识上传到云端,却发现每个“来生”副本都爱上了不同的人。",
        "url": "./movies/movie-116.html",
        "image": "./116.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "不装了,我比英雄还强",
        "year": "2024",
        "region": "中国大陆",
        "type": "网络剧",
        "genre": "喜剧/动作/奇幻",
        "tags": [
            "反超级英雄",
            "龙套逆袭",
            "爽文",
            "吐槽",
            "低成本高能"
        ],
        "oneLine": "一个超级英雄电影里的龙套路人,突然发现自己比所有英雄都强。",
        "url": "./movies/movie-117.html",
        "image": "./117.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "兵临城下2010",
        "year": "2010",
        "region": "中国大陆",
        "type": "电影",
        "genre": "战争,历史,动作",
        "tags": [
            "狙击战",
            "城市巷战",
            "兄弟情",
            "绝境求生"
        ],
        "oneLine": "2010年,一座孤城,我方狙击手与敌军顶尖射手在废墟中展开生死对峙。",
        "url": "./movies/movie-118.html",
        "image": "./118.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "祈祷恶魔回归地狱",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖/惊悚",
        "tags": [
            "驱魔",
            "反转",
            "宗教",
            "心理恐惧"
        ],
        "oneLine": "一场驱魔仪式失败后,神父发现自己赶走的并非恶魔,而是保护人类的善良天使。",
        "url": "./movies/movie-119.html",
        "image": "./119.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "宇宙圆盘大战争",
        "year": "1975",
        "region": "日本",
        "type": "电影",
        "genre": "科幻,动作",
        "tags": [
            "特摄",
            "圆盘",
            "外星入侵",
            "巨大战"
        ],
        "oneLine": "神秘圆盘舰队封锁地球上空,古老传说中封印的“圆盘兽”在现代东京觉醒。",
        "url": "./movies/movie-120.html",
        "image": "./120.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "鲜血淋漓第二季",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "悬疑/惊悚",
        "tags": [
            "血腥美学",
            "连环凶案",
            "双时间线",
            "法医",
            "高能反转"
        ],
        "oneLine": "法医在每具尸体的伤口中发现了相同的血字:“这不是谋杀,这是献祭。",
        "url": "./movies/movie-121.html",
        "image": "./121.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "玛丽玛丽我爱你",
        "year": "1996",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情,喜剧",
        "tags": [
            "错位爱情",
            "都市",
            "轻松",
            "误会",
            "表白"
        ],
        "oneLine": "为了帮好友追女神,害羞的男主冒充笔友写信,却在见面时发现女神竟是自己暗恋的邻居。",
        "url": "./movies/movie-122.html",
        "image": "./122.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "海军上将:德鲁伊特",
        "year": "2015",
        "region": "荷兰",
        "type": "电影",
        "genre": "剧情/传记/战争",
        "tags": [
            "海战",
            "历史人物",
            "荷兰黄金时代",
            "政治博弈"
        ],
        "oneLine": "十七世纪荷兰最伟大的海军上将,如何在权力倾轧和海上霸权间,守护一个渺小共和国的尊严。",
        "url": "./movies/movie-123.html",
        "image": "./123.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "坐标",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑,犯罪",
        "tags": [
            "网约车",
            "连环案",
            "空间",
            "心理"
        ],
        "oneLine": "一名网约车司机发现,自己每一次接单的终点,都精准指向连环命案的下一个坐标。",
        "url": "./movies/movie-124.html",
        "image": "./124.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "疯子",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖,惊悚",
        "tags": [
            "变态杀手",
            "第一人称视角",
            "血腥",
            "心理扭曲"
        ],
        "oneLine": "全程以杀人狂第一视角拍摄,让你亲身体验一个精神分裂者从幻想到行凶的全过程。",
        "url": "./movies/movie-125.html",
        "image": "./125.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "爱情之旅",
        "year": "2023",
        "region": "土耳其",
        "type": "电影",
        "genre": "爱情/冒险/喜剧",
        "tags": [
            "热气球",
            "公路片",
            "相亲"
        ],
        "oneLine": "被未婚夫抛弃的旅行社老板,不得不独自完成“情侣专属”的土耳其绿松石海岸邮轮之旅。",
        "url": "./movies/movie-126.html",
        "image": "./126.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "飞越苏联",
        "year": "1985",
        "region": "美国",
        "type": "电影",
        "genre": "剧情/惊悚",
        "tags": [
            "冷战背景",
            "叛逃",
            "舞蹈",
            "心理博弈"
        ],
        "oneLine": "苏联顶尖芭蕾舞者在纽约巡演时申请政治避难,KGB随即绑架他在莫斯科的妹妹作为人质。",
        "url": "./movies/movie-127.html",
        "image": "./127.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "魔物娘的医生",
        "year": "2020",
        "region": "日本",
        "type": "动画剧集",
        "genre": "奇幻/恋爱/喜剧",
        "tags": [
            "魔物娘",
            "医疗",
            "后宫",
            "异种族文化"
        ],
        "oneLine": "在人类与亚人种共存的都市里,一名专治魔物娘的人类医生,用医术而非武力赢得她们的信任。",
        "url": "./movies/movie-128.html",
        "image": "./128.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "阿莱塔街388号",
        "year": "2022",
        "region": "西班牙",
        "type": "电影",
        "genre": "恐怖,悬疑",
        "tags": [
            "凶宅",
            "邪教",
            "遗产",
            "录像带",
            "密室逃脱"
        ],
        "oneLine": "为继承豪宅,六个陌生人必须在闹鬼的388号别墅里存活一夜,而规则只有一条:别睡。",
        "url": "./movies/movie-129.html",
        "image": "./129.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "古惑仔激情篇之洪兴大飞哥",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作,犯罪,剧情",
        "tags": [
            "古惑仔",
            "前传",
            "怀旧",
            "兄弟情",
            "江湖道义"
        ],
        "oneLine": "他叫大飞,当年还不是“大飞哥”,只是一个在庙街卖鱼蛋的马仔,所有人都说他不配做洪兴的人,直到他用一条命换回了四个字。",
        "url": "./movies/movie-130.html",
        "image": "./130.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "乘风2025",
        "year": "2025",
        "region": "中国大陆",
        "type": "综艺/真人秀",
        "genre": "音乐/竞技/真人秀",
        "tags": [
            "姐姐",
            "舞台竞演",
            "女性成长",
            "全息舞台"
        ],
        "oneLine": "三十位来自不同领域的姐姐集结,但这一季的最大噱头是:每位姐姐都配有一位AI分身,两队在同一舞台对决,分不清真人还是代码。",
        "url": "./movies/movie-131.html",
        "image": "./131.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "美女来了",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "黑色喜剧",
        "tags": [
            "荒诞",
            "女性",
            "反转",
            "网红"
        ],
        "oneLine": "三名风格迥异的女主播被邀请到一座孤岛参加“最美乡村代言人”决赛,却发现这是一场直播死亡游戏。",
        "url": "./movies/movie-132.html",
        "image": "./132.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "他们是在玩火",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "剧情,情色,悬疑",
        "tags": [
            "禁忌之恋",
            "师生",
            "心理操控",
            "悲剧"
        ],
        "oneLine": "一位中年女教师与她的天才学生发生不伦之恋,却发现这场“爱情”从一开始就是精心策划的复仇。",
        "url": "./movies/movie-133.html",
        "image": "./133.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "汉城大劫案",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "犯罪,动作,悬疑",
        "tags": [
            "劫盗",
            "1990年代",
            "复古",
            "兄弟情",
            "反转"
        ],
        "oneLine": "1998年金融危机下,五个失业者策划抢劫汉城央行,却发现金库早已被掏空。",
        "url": "./movies/movie-134.html",
        "image": "./134.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "军犬麦克斯2:白宫英雄",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "动作/家庭",
        "tags": [
            "军犬",
            "白宫",
            "特工",
            "儿童",
            "反恐"
        ],
        "oneLine": "退役军犬麦克斯随新主人参观白宫,意外嗅出恐怖分子暗藏在国宴厅的炸弹,一场人犬联手反恐战打响。",
        "url": "./movies/movie-135.html",
        "image": "./135.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "南极洲140天",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "冒险,纪录",
        "tags": [
            "科考",
            "极地",
            "生存",
            "孤独"
        ],
        "oneLine": "年轻的女科学家远赴南极科考站,在140天的极夜中,她必须独自面对严寒、幽闭与神秘的雪盲症。",
        "url": "./movies/movie-136.html",
        "image": "./136.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "游戏变身",
        "year": "2025",
        "region": "日本",
        "type": "动画",
        "genre": "奇幻、动作",
        "tags": [
            "网游",
            "现实侵入",
            "BUG",
            "异能",
            "热血"
        ],
        "oneLine": "一款停服多年的古董网游突然重新上线,所有登录过该游戏的玩家,在现实中都获得了游戏角色的技能。",
        "url": "./movies/movie-137.html",
        "image": "./137.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "贤妻乐坊",
        "year": "2024",
        "region": "中国",
        "type": "网络剧",
        "genre": "古装/音乐/励志",
        "tags": [
            "女性群像",
            "唐代乐坊",
            "经商种田",
            "逆袭",
            "古典乐器"
        ],
        "oneLine": "被休弃的士族之妻带着一把断弦琵琶,在长安西市开了一家只招寡妇的乐坊,靠音乐复仇。",
        "url": "./movies/movie-138.html",
        "image": "./138.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "小田进城",
        "year": "2010",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情",
        "tags": [
            "农民工",
            "城市化",
            "留守儿童",
            "写实"
        ],
        "oneLine": "农村女孩小田第一次进北京找打工的父母,在北京西站被偷了所有钱和地址。",
        "url": "./movies/movie-139.html",
        "image": "./139.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "帮我看看",
        "year": "2024",
        "region": "中国",
        "type": "电影",
        "genre": "剧情/悬疑",
        "tags": [
            "心理",
            "都市",
            "亲情",
            "反转"
        ],
        "oneLine": "一个失明的修鞋匠通过手机“听”见邻居被杀,却没人相信一个瞎子的话。",
        "url": "./movies/movie-140.html",
        "image": "./140.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "假死寻凶",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "悬疑,惊悚",
        "tags": [
            "犯罪",
            "推理",
            "反转",
            "暗黑"
        ],
        "oneLine": "为了找出杀害自己的真凶,已死之人决定伪造一场复活。",
        "url": "./movies/movie-141.html",
        "image": "./141.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "我爱你,再见",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "爱情/剧情",
        "tags": [
            "纯爱",
            "绝症",
            "催泪",
            "书信",
            "唯美"
        ],
        "oneLine": "一对高中恋人因误解分手,十年后她收到他生前写好的一百封信,原来他一直在为她的未来准备礼物。",
        "url": "./movies/movie-142.html",
        "image": "./142.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "记忆大师",
        "year": "2017",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑/科幻/犯罪",
        "tags": [
            "记忆删除",
            "身份错位",
            "软科幻",
            "反转",
            "陈正道"
        ],
        "oneLine": "为了忘掉妻子,他去做了记忆删除手术,却意外植入了一个连环杀手的完整记忆。",
        "url": "./movies/movie-143.html",
        "image": "./143.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "黑暗世界2",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "科幻,动作",
        "tags": [
            "末世",
            "超级能力",
            "反英雄",
            "视觉系"
        ],
        "oneLine": "末世十年后,新一代异能者觉醒,却发现上一代英雄才是这个世界真正的独裁者。",
        "url": "./movies/movie-144.html",
        "image": "./144.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "举起手来!",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧,战争,动作",
        "tags": [
            "抗日神剧",
            "夸张",
            "爽片",
            "黑色幽默"
        ],
        "oneLine": "一张藏宝图流入日军手中,地下党、乡村泼妇、傻子厨师和一只通人性的驴,组成了史上最不靠谱的夺宝联盟。",
        "url": "./movies/movie-145.html",
        "image": "./145.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "女高怪谈6:母校",
        "year": "2026",
        "region": "韩国",
        "type": "电影",
        "genre": "恐怖,悬疑",
        "tags": [
            "女高",
            "校园",
            "鬼魂",
            "诅咒",
            "返校日"
        ],
        "oneLine": "毕业二十年后,曾经的校园广播站成员被召回母校,在废弃的广播室里,录音带开始自动播放她们当年的“杀人游戏”。",
        "url": "./movies/movie-146.html",
        "image": "./146.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "战地信差",
        "year": "2025",
        "region": "法国/比利时",
        "type": "电影",
        "genre": "战争/剧情",
        "tags": [
            "一战",
            "女性视角",
            "谍战",
            "悲怆美学"
        ],
        "oneLine": "一战期间,一名法语流利的英籍寡妇受雇担任信差,她不仅传递情报,也传递阵亡士兵最后的心声。",
        "url": "./movies/movie-147.html",
        "image": "./147.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "大内密探之姻缘劫",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧/古装",
        "tags": [
            "欢喜冤家",
            "宫廷密探",
            "另类办案"
        ],
        "oneLine": "大内低配密探零零发与冷面女将军被迫假成亲,卧底京城破获专门破坏天下姻缘的邪恶组织。",
        "url": "./movies/movie-148.html",
        "image": "./148.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "奇袭60阵地",
        "year": "2024",
        "region": "澳大利亚/英国",
        "type": "电影",
        "genre": "战争/历史/传记",
        "tags": [
            "一战",
            "地道战",
            "真实事件改编",
            "工兵"
        ],
        "oneLine": "一战的西线战场,一群澳大利亚矿工出身的士兵,要在敌人脚下挖出一条直通德军阵地的秘密隧道。",
        "url": "./movies/movie-149.html",
        "image": "./149.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "亲爱的司丞大人",
        "year": "2024",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "古装,悬疑,爱情",
        "tags": [
            "探案",
            "权谋",
            "欢喜冤家",
            "大女主",
            "轻喜"
        ],
        "oneLine": "大理寺最怕麻烦的司丞大人,被迫与一个能听懂死人遗言的民间验尸官合作,破解京城连环命案。",
        "url": "./movies/movie-150.html",
        "image": "./150.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "真爱绕圈圈",
        "year": "2026",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情/喜剧",
        "tags": [
            "环形时间",
            "婚礼闹剧",
            "错位情侣"
        ],
        "oneLine": "一场婚礼上,所有人都爱错了人,而时间只给了他们四小时绕回来。",
        "url": "./movies/movie-151.html",
        "image": "./1.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "去伪存真",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,悬疑",
        "tags": [
            "打假",
            "媒体",
            "真相",
            "网络暴力",
            "新闻伦理"
        ],
        "oneLine": "一个专门制作假新闻的团队,接到了一个客户委托:策划一场全网信以为真的“假打假”事件。",
        "url": "./movies/movie-152.html",
        "image": "./2.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "像恶魔的女人",
        "year": "2023",
        "region": "英国",
        "type": "剧集",
        "genre": "剧情,惊悚,心理",
        "tags": [
            "蛇蝎美人",
            "复仇局中局",
            "豪门恩怨",
            "全员恶人"
        ],
        "oneLine": "一个被丈夫背叛的女人伪装成富豪遗孀,潜入仇家内部进行最温柔的报复。",
        "url": "./movies/movie-153.html",
        "image": "./3.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "每一张脸都有一个名字",
        "year": "2025",
        "region": "德国/波兰",
        "type": "电影",
        "genre": "历史战争",
        "tags": [
            "奥斯维辛",
            "肖像画",
            "记忆",
            "女性"
        ],
        "oneLine": "奥斯维辛集中营里,一位犹太女画家冒险为狱友画像,只为让后世记住他们曾活过。",
        "url": "./movies/movie-154.html",
        "image": "./4.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "施公奇案2粤语",
        "year": "2010",
        "region": "中国香港",
        "type": "剧集",
        "genre": "古装,悬疑,喜剧",
        "tags": [
            "断案",
            "粤语",
            "神仙",
            "续集"
        ],
        "oneLine": "施世纶获仙人托梦赐予新神器“乾坤笔”,专破涉及皇室秘闻的诡异奇案。",
        "url": "./movies/movie-155.html",
        "image": "./5.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "中餐厅 第七季",
        "year": "2025",
        "region": "中国大陆",
        "type": "综艺",
        "genre": "真人秀,美食,经营",
        "tags": [
            "明星",
            "海外经营",
            "美食文化交流",
            "慢综艺"
        ],
        "oneLine": "明星合伙人首次走进北欧,在极昼下的挪威特罗姆瑟开一家“极光中餐厅”。",
        "url": "./movies/movie-156.html",
        "image": "./6.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "科学睡眠",
        "year": "2006",
        "region": "法国/墨西哥",
        "type": "电影",
        "genre": "奇幻/剧情/喜剧",
        "tags": [
            "梦境",
            "现实",
            "想象力",
            "孤独"
        ],
        "oneLine": "一个有“超现实造梦”能力的男孩,分不清梦境与现实的界限,并将他梦中的荒唐规则强加给了现实女友。",
        "url": "./movies/movie-157.html",
        "image": "./7.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "低一点的天空",
        "year": "2023",
        "region": "中国",
        "type": "电影",
        "genre": "剧情,青春",
        "tags": [
            "矮小症",
            "梦想",
            "友情",
            "励志"
        ],
        "oneLine": "身高只有一米二的男孩,想要触碰天空。",
        "url": "./movies/movie-158.html",
        "image": "./8.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "托马斯",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "剧情,悬疑",
        "tags": [
            "自闭症",
            "目击证人",
            "小镇疑云",
            "非正常叙事",
            "心理"
        ],
        "oneLine": "一位患有自闭症的少年托马斯,成为一起小镇谋杀案的唯一目击者,但他的证词没人能懂。",
        "url": "./movies/movie-159.html",
        "image": "./9.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "诚征老爸",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "喜剧/家庭/剧情",
        "tags": [
            "亲情",
            "搞笑",
            "临时家庭",
            "成长"
        ],
        "oneLine": "单亲妈妈在网上发帖“诚征老爸”,结果来应聘的四个“爸爸候选人”全是骗子。",
        "url": "./movies/movie-160.html",
        "image": "./10.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "广岛之恋",
        "year": "1959",
        "region": "法国/日本",
        "type": "电影",
        "genre": "爱情,剧情",
        "tags": [
            "新浪潮",
            "左岸派",
            "记忆与遗忘"
        ],
        "oneLine": "在核爆废墟上,一名法国女演员与一名日本建筑师纠缠了二十四小时的肉体与回忆。",
        "url": "./movies/movie-161.html",
        "image": "./11.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "离爱只有半米远",
        "year": "2021",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "爱情,都市,奇幻",
        "tags": [
            "距离",
            "社交恐惧",
            "轻喜",
            "测距"
        ],
        "oneLine": "社恐程序员的超能力是能看到人与人之间的“情感距离”,直到他遇到了一个距离显示为0.5米,却永远无法靠近的神秘女孩。",
        "url": "./movies/movie-162.html",
        "image": "./12.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "夫也不良",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "婚姻",
            "女性觉醒",
            "现实主义"
        ],
        "oneLine": "在外人眼中是模范丈夫的医生,私下里却对妻子进行长达三十年的精神控制,直到女儿的一篇作文揭开了真相。",
        "url": "./movies/movie-163.html",
        "image": "./13.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "露西亚之后",
        "year": "2019",
        "region": "墨西哥",
        "type": "电影",
        "genre": "剧情,惊悚",
        "tags": [
            "校园霸凌",
            "复仇",
            "压抑",
            "拉丁美洲",
            "社交媒体"
        ],
        "oneLine": "转学生露西亚因一段不雅视频成为全校霸凌对象,她的父亲决定用自己的方式“清除”所有参与者。",
        "url": "./movies/movie-164.html",
        "image": "./14.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "果树人生",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,家庭,乡土",
        "tags": [
            "三代传承",
            "城镇化",
            "根与土"
        ],
        "oneLine": "一棵百年果树,串联起祖孙三代人面对拆迁、背叛与回归的酸甜人生。",
        "url": "./movies/movie-165.html",
        "image": "./15.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "悄然之星",
        "year": "2023",
        "region": "日本",
        "type": "电影",
        "genre": "科幻,剧情",
        "tags": [
            "太空",
            "孤独",
            "文艺"
        ],
        "oneLine": "在宇宙深处清理太空垃圾的女宇航员,突然收到了来自地球、迟到了三十年的离婚协议书。",
        "url": "./movies/movie-166.html",
        "image": "./16.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "香蕉先生不睡觉",
        "year": "2023",
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "奇幻/喜剧/爱情",
        "tags": [
            "失眠",
            "偶像",
            "治愈系",
            "甜宠"
        ],
        "oneLine": "一个连续失眠五年的冷漠总裁,发现只有看着女主吃香蕉他才能睡着。",
        "url": "./movies/movie-167.html",
        "image": "./17.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "小世界",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动画,奇幻,冒险",
        "tags": [
            "微观世界",
            "冒险",
            "成长",
            "治愈"
        ],
        "oneLine": "被缩小到蚂蚁大小的男孩,必须在自家后院的“丛林”中,找到回家的路。",
        "url": "./movies/movie-168.html",
        "image": "./18.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "一条狗的使命2",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "家庭,剧情",
        "tags": [
            "宠物",
            "轮回",
            "治愈"
        ],
        "oneLine": "这一次,它没有回到主人身边,而是被主人遗弃在了暴风雪中。",
        "url": "./movies/movie-169.html",
        "image": "./19.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "末路狂澜",
        "year": "2025",
        "region": "法国/比利时",
        "type": "电影",
        "genre": "动作、惊悚、公路",
        "tags": [
            "飙车",
            "黑吃黑",
            "复仇"
        ],
        "oneLine": "一名被陷害的运钞车司机,必须驾驶一辆改装卡车穿过整个欧洲来证明自己的清白。",
        "url": "./movies/movie-170.html",
        "image": "./20.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "千里送鹤",
        "year": "2024",
        "region": "中国",
        "type": "电影",
        "genre": "剧情,家庭",
        "tags": [
            "留守儿童",
            "公路片",
            "动物保护",
            "亲情"
        ],
        "oneLine": "藏区留守儿童姐弟俩,为了将受伤的小黑颈鹤送回南方过冬,踏上了一段一千公里的偷跑之旅。",
        "url": "./movies/movie-171.html",
        "image": "./21.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "音乐永不停歇",
        "year": "2014",
        "region": "美国",
        "type": "电影",
        "genre": "剧情",
        "tags": [
            "音乐",
            "亲情",
            "失忆",
            "治愈",
            "怀旧"
        ],
        "oneLine": "一名失忆老人只活在过去音乐里,儿子用半个世纪的歌单试图唤回他的记忆。",
        "url": "./movies/movie-172.html",
        "image": "./22.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "浓情录音带",
        "year": "2022",
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情、奇幻、剧情",
        "tags": [
            "复古",
            "90年代",
            "磁带",
            "穿越时空",
            "遗憾美学"
        ],
        "oneLine": "男主在旧物市场买到的空白磁带,录下的情话会自动消失,却在二十年后寄到了初恋手中。",
        "url": "./movies/movie-173.html",
        "image": "./23.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "滴水之恩",
        "year": "2017",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,犯罪",
        "tags": [
            "报恩",
            "绑架",
            "人性实验",
            "道德困境",
            "农村"
        ],
        "oneLine": "一个亿万富翁落难时被老农救了一命,二十年后他找到恩人,发现恩人正举债为女儿治病,他决定报恩,方式却是绑架恩人的女儿。",
        "url": "./movies/movie-174.html",
        "image": "./24.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "尸营旅舍",
        "year": "2012",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖惊悚",
        "tags": [
            "丧尸",
            "夏令营",
            "血腥",
            "反转"
        ],
        "oneLine": "五个大学生到一个荒废的夏令营度假,却发现营地的每一具尸体都在复活,而他们的死亡顺序早已被写在30年前的信里。",
        "url": "./movies/movie-175.html",
        "image": "./25.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "动物之爱",
        "year": "2022",
        "region": "英国",
        "type": "电视剧",
        "genre": "纪录片",
        "tags": [
            "自然求偶",
            "动物行为",
            "BBC",
            "拟人化解说"
        ],
        "oneLine": "BBC顶尖摄影师团队耗时三年,捕捉了动物王国里那些比人类更浪漫、更诡异、更疯狂的求爱方式。",
        "url": "./movies/movie-176.html",
        "image": "./26.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "八仙传之吕仙惩贪记",
        "year": "2016",
        "region": "中国大陆",
        "type": "电影",
        "genre": "古装,奇幻",
        "tags": [
            "神话",
            "八仙",
            "反腐",
            "民间传说"
        ],
        "oneLine": "吕洞宾下凡游历,发现一个县令竟比妖怪还会搜刮民财,他决定以仙法行人间律法。",
        "url": "./movies/movie-177.html",
        "image": "./27.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "临时劫案",
        "year": "2024",
        "region": "香港",
        "type": "电影",
        "genre": "犯罪/喜剧",
        "tags": [
            "笨贼",
            "巧合",
            "多线叙事",
            "黑色幽默"
        ],
        "oneLine": "一个破产会计、一个失业保镖和一个来旅游的法国老奶奶,同时盯上了同一辆运钞车。",
        "url": "./movies/movie-178.html",
        "image": "./28.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "隧道",
        "year": "2024",
        "region": "德国",
        "type": "剧集",
        "genre": "惊悚/悬疑/政治",
        "tags": [
            "冷战",
            "柏林",
            "越狱",
            "人性"
        ],
        "oneLine": "1961年柏林墙竖起后,一群普通人试图从西柏林挖一条隧道通向东柏林,只为救出墙另一边的亲人。",
        "url": "./movies/movie-179.html",
        "image": "./29.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "碧比",
        "year": "2026",
        "region": "法国",
        "type": "电影",
        "genre": "剧情,女性",
        "tags": [
            "老年",
            "梦想",
            "女性力量",
            "温情"
        ],
        "oneLine": "83岁的碧比决定实现被搁置一生的芭蕾梦,她瞒着家人报名了巴黎歌剧院的群演选拔。",
        "url": "./movies/movie-180.html",
        "image": "./30.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "北部丛林",
        "year": "2019",
        "region": "巴西",
        "type": "电影",
        "genre": "冒险惊悚片",
        "tags": [
            "亚马逊",
            "求生",
            "神秘"
        ],
        "oneLine": "三名生物学家深入亚马逊雨林寻找新物种,却发现自己正在被某种智慧生物猎杀。",
        "url": "./movies/movie-181.html",
        "image": "./31.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "门当互怼爱上你",
        "year": "2024",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "爱情/喜剧",
        "tags": [
            "欢喜冤家",
            "职场爱情",
            "家族企业"
        ],
        "oneLine": "破产千金伪装成保洁员,进入死对头的家族企业“卧底”,却和他相爱了。",
        "url": "./movies/movie-182.html",
        "image": "./32.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "白痴杀手",
        "year": "2025",
        "region": "英国/德国",
        "type": "电影",
        "genre": "惊悚/黑色幽默",
        "tags": [
            "误打误撞",
            "低智商犯罪",
            "荒诞",
            "巧合"
        ],
        "oneLine": "一个只有80智商的清洁工,不小心杀了黑帮老大,结果全城都以为他是顶级杀手。",
        "url": "./movies/movie-183.html",
        "image": "./33.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "网中的太阳",
        "year": "2019",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,科幻",
        "tags": [
            "留守儿童",
            "互联网",
            "温情"
        ],
        "oneLine": "贵州深山里的留守儿童,通过一台破旧手机和直播软件,试图将患有自闭症的弟弟“推销”给城市妈妈。",
        "url": "./movies/movie-184.html",
        "image": "./34.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "危险性交易",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "悬疑/伦理",
        "tags": [
            "暗网",
            "复仇",
            "女性视角"
        ],
        "oneLine": "一名女记者伪装成买家潜入暗网,却发现自己要“买下”的人,竟是十年前失踪的亲妹妹。",
        "url": "./movies/movie-185.html",
        "image": "./35.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "芝加哥警署第十一季",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "剧情/犯罪/动作",
        "tags": [
            "警察",
            "卧底",
            "腐败",
            "兄弟情",
            "街头枪战"
        ],
        "oneLine": "第十一季中,情报组迎来铁腕新领导,却不知他正是渗透警署的内鬼。",
        "url": "./movies/movie-186.html",
        "image": "./36.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "法王艳史",
        "year": "2026",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装,宫廷,悬疑,爱情",
        "tags": [
            "僧王",
            "权力博弈",
            "禁忌之恋",
            "朝堂风云"
        ],
        "oneLine": "一代法王重返皇宫查案,却在旧爱与皇权之间陷入生死两难。",
        "url": "./movies/movie-187.html",
        "image": "./37.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "暗流2017英国版",
        "year": "2017",
        "region": "英国",
        "type": "电视剧",
        "genre": "犯罪、悬疑、剧情",
        "tags": [
            "英剧",
            "冷硬派",
            "警察程序",
            "小镇疑云",
            "社会派"
        ],
        "oneLine": "伦敦警察调任湖区,发现看似宁静的小镇深处涌动着一股百年前的暗流。",
        "url": "./movies/movie-188.html",
        "image": "./38.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "原始儿童炸弹",
        "year": "2023",
        "region": "日本",
        "type": "电影",
        "genre": "科幻/惊悚/伦理",
        "tags": [
            "克隆",
            "伦理困境",
            "童真",
            "反转",
            "细思极恐"
        ],
        "oneLine": "未来世界,一个男人领养了自称是“原始人类基因炸弹”的5岁女孩,却发现她真的能在情绪波动时毁灭一切。",
        "url": "./movies/movie-189.html",
        "image": "./39.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "心智相投",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "科幻惊悚",
        "tags": [
            "脑机接口",
            "共情犯罪",
            "心理操控"
        ],
        "oneLine": "一款能同步人类大脑的设备问世后,七名使用者接连失踪,而他们的记忆全部指向同一个“完美嫌疑人”。",
        "url": "./movies/movie-190.html",
        "image": "./40.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "奔跑吧,自行车",
        "year": "2023",
        "region": "日本",
        "type": "电影",
        "genre": "青春运动",
        "tags": [
            "自行车",
            "热血",
            "成长",
            "竞技",
            "友情"
        ],
        "oneLine": "废柴高中生为了女神加入自行车社团,却发现唯一的队友是个想夺走他性命的技术狂。",
        "url": "./movies/movie-191.html",
        "image": "./41.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "复活劫",
        "year": "2025",
        "region": "西班牙",
        "type": "电影",
        "genre": "科幻,惊悚,伦理",
        "tags": [
            "克隆",
            "伦理困境",
            "反转",
            "心理惊悚",
            "科技伦理"
        ],
        "oneLine": "顶尖神经学家将死去女儿的意识上传到机器人中,但复活后的“女儿”开始杀死家里的所有人。",
        "url": "./movies/movie-192.html",
        "image": "./42.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "爱情迷踪",
        "year": "2025",
        "region": "韩国",
        "type": "剧集",
        "genre": "奇幻",
        "tags": [
            "悬疑",
            "失忆",
            "都市",
            "时空"
        ],
        "oneLine": "醒来发现全世界都忘了你的爱人,只有你还记得那段刻骨铭心的恋情。",
        "url": "./movies/movie-193.html",
        "image": "./43.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "我的双面童年",
        "year": "2011",
        "region": "阿根廷",
        "type": "电影",
        "genre": "剧情/历史",
        "tags": [
            "童年视角",
            "阿根廷军政府",
            "政治隐喻",
            "成长",
            "压抑"
        ],
        "oneLine": "十岁男孩眼中的天堂,其实是父母用谎言为他编织的地狱。",
        "url": "./movies/movie-194.html",
        "image": "./44.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "死亡契约",
        "year": "2016",
        "region": "美国",
        "type": "电影",
        "genre": "动作/惊悚",
        "tags": [
            "杀手",
            "森林追逐",
            "黑色电影"
        ],
        "oneLine": "当护送证人的退休杀手撞上逃亡的模范家庭,谁签下了彼此的死亡契约?",
        "url": "./movies/movie-195.html",
        "image": "./45.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "十三号星期五",
        "year": "1980",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖,惊悚",
        "tags": [
            "砍杀",
            "水晶湖",
            "杰森"
        ],
        "oneLine": "一群年轻人来到关闭多年的水晶湖营地,却没想到,一个看不见脸的杀人魔正在等待着他们。",
        "url": "./movies/movie-196.html",
        "image": "./46.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "圆桌派第四季",
        "year": "2019",
        "region": "中国大陆",
        "type": "综艺/谈话",
        "genre": "脱口秀/文化",
        "tags": [
            "窦文涛",
            "圆桌",
            "文化对谈",
            "社会话题",
            "嘉宾阵容"
        ],
        "oneLine": "窦文涛与不同领域的嘉宾围坐一桌,聊透当代中国人的焦虑与趣味。",
        "url": "./movies/movie-197.html",
        "image": "./47.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "奇妙幽灵",
        "year": "2025",
        "region": "泰国",
        "type": "剧集",
        "genre": "喜剧、恐怖、家庭",
        "tags": [
            "泰剧",
            "鬼魂",
            "搞笑",
            "温情",
            "人鬼同居"
        ],
        "oneLine": "能看到鬼魂的毒舌男孩,被迫与三个废柴鬼魂同居,帮它们完成遗愿才能让它们升天。",
        "url": "./movies/movie-198.html",
        "image": "./48.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "低俗僵尸玩出征",
        "year": "2025",
        "region": "香港",
        "type": "电影",
        "genre": "喜剧,恐怖",
        "tags": [
            "僵尸",
            "黑色幽默",
            "警匪",
            "恶搞",
            "B级片"
        ],
        "oneLine": "古惑仔意外唤醒清朝僵尸军团,本想靠他们称霸铜锣湾,结果僵尸们只想考公务员。",
        "url": "./movies/movie-199.html",
        "image": "./49.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "阿根廷,1985",
        "year": "2022",
        "region": "阿根廷",
        "type": "电影",
        "genre": "剧情/历史/传记",
        "tags": [
            "真实事件改编",
            "法庭辩论",
            "正义",
            "独裁审判",
            "人性"
        ],
        "oneLine": "年轻检察官顶住军方压力,用一场世纪审判为三万失踪者讨回公道。",
        "url": "./movies/movie-200.html",
        "image": "./50.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "改编剧本",
        "year": "2002",
        "region": "美国",
        "type": "电影",
        "genre": "剧情/喜剧",
        "tags": [
            "元叙事",
            "编剧",
            "兰花",
            "孪生兄弟"
        ],
        "oneLine": "一个编剧想把一本关于兰花的书改编成电影,结果把自己写进了剧本里。",
        "url": "./movies/movie-201.html",
        "image": "./51.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "维也纳和鬼魂乐队",
        "year": "2024",
        "region": "法国/奥地利",
        "type": "电影",
        "genre": "音乐/奇幻/喜剧",
        "tags": [
            "乐队",
            "鬼魂",
            "古典乐",
            "跨时空合作"
        ],
        "oneLine": "落魄的音乐少女发现,自己租住的老公寓里住着贝多芬、莫扎特和舒伯特的鬼魂。",
        "url": "./movies/movie-202.html",
        "image": "./52.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "甜蜜的生活",
        "year": "1960",
        "region": "意大利",
        "type": "电影",
        "genre": "剧情/喜剧",
        "tags": [
            "费里尼",
            "经典",
            "罗马",
            "上流社会",
            "荒诞"
        ],
        "oneLine": "一周七夜,专栏记者马切洛穿梭在罗马的贵族派对和明星绯闻中,却发现自己正沉沦于一场精神上的“甜蜜死亡”。",
        "url": "./movies/movie-203.html",
        "image": "./53.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "信义",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "历史,动作",
        "tags": [
            "高丽",
            "武士",
            "契约"
        ],
        "oneLine": "高丽王朝末期,一队被朝廷抛弃的信使,在敌占区用生命守护着一封关乎国家存亡的秘密信函。",
        "url": "./movies/movie-204.html",
        "image": "./54.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "灵魂心声",
        "year": "2023",
        "region": "英国",
        "type": "电影",
        "genre": "剧情,科幻,惊悚",
        "tags": [
            "AI",
            "克隆意识",
            "伦理",
            "家庭"
        ],
        "oneLine": "失去女儿的母亲将女儿的意识上传AI,却在家中发现了一个“完美”的克隆体。",
        "url": "./movies/movie-205.html",
        "image": "./55.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "给桃子的信",
        "year": "2012",
        "region": "日本",
        "type": "动画电影",
        "genre": "奇幻/家庭",
        "tags": [
            "妖怪",
            "父女",
            "信",
            "夏日",
            "催泪"
        ],
        "oneLine": "少女桃子收到已故父亲留下的信,只有三个字“给桃子”,她带着妖怪们找回了勇气。",
        "url": "./movies/movie-206.html",
        "image": "./56.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "鬼眼开",
        "year": "2022",
        "region": "中国台湾",
        "type": "电影",
        "genre": "恐怖/惊悚",
        "tags": [
            "阴阳眼",
            "冤亲债主",
            "校园怪谈",
            "反转"
        ],
        "oneLine": "天生鬼眼的叛逆少女拒绝帮助亡灵,直到她发现纠缠自己的怨灵竟是一年前失踪的亲姐姐。",
        "url": "./movies/movie-207.html",
        "image": "./57.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "大菩萨岭 龙神之卷",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "时代剧/动作",
        "tags": [
            "武士",
            "剑戟片",
            "宿命",
            "龙神传说"
        ],
        "oneLine": "幕末的大菩萨岭,一名无名浪人背上纹着传说中的龙神,而他挥刀时,龙会睁开眼睛。",
        "url": "./movies/movie-208.html",
        "image": "./58.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "僵尸奇兵粤语",
        "year": "2023",
        "region": "中国香港",
        "type": "剧集",
        "genre": "奇幻/动作/喜剧",
        "tags": [
            "僵尸",
            "粤语原声",
            "茅山术",
            "港式幽默"
        ],
        "oneLine": "三个废柴道士意外组成“僵尸奇兵”,却发现现代都市的鬼怪都得打卡上班。",
        "url": "./movies/movie-209.html",
        "image": "./59.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "醉侠张三",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "武侠/喜剧",
        "tags": [
            "醉拳",
            "市井侠客",
            "酒馆",
            "身份错位"
        ],
        "oneLine": "沉迷酿酒的落魄武馆后人张三,用一门“醉酒鉴毒”的绝活,卷入京城投毒大案。",
        "url": "./movies/movie-210.html",
        "image": "./60.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "舐血夜魔",
        "year": "1992",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖,吸血鬼",
        "tags": [
            "吸血鬼",
            "小镇",
            "诅咒",
            "基督教意象",
            "B级片经典"
        ],
        "oneLine": "一位神父醒来后发现自己变成了吸血鬼,他必须在每个满月之夜“舔血”来延缓彻底魔化,而他的第一个猎物是亲儿子。",
        "url": "./movies/movie-211.html",
        "image": "./61.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "我的师兄惹不起",
        "year": "2023",
        "region": "中国大陆",
        "type": "网络剧",
        "genre": "喜剧,武侠",
        "tags": [
            "沙雕",
            "反套路",
            "修仙",
            "爆笑"
        ],
        "oneLine": "被逐出师门的废柴师兄靠坑蒙拐骗成了武林盟主,师弟奉师命来清理门户,却发现全武林都在保他。",
        "url": "./movies/movie-212.html",
        "image": "./62.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "处于精神崩溃边缘的侦探",
        "year": "2024",
        "region": "英国",
        "type": "电视剧",
        "genre": "悬疑/心理/犯罪",
        "tags": [
            "神探",
            "幻觉",
            "童年阴影",
            "单元剧"
        ],
        "oneLine": "天才侦探每次破案都会产生幻觉,他发现那些恐怖案件竟然都指向自己7岁时的那个秘密。",
        "url": "./movies/movie-213.html",
        "image": "./63.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "污物",
        "year": "2025",
        "region": "日本",
        "type": "动画电影",
        "genre": "科幻、惊悚、哲学",
        "tags": [
            "人体改造",
            "赛博朋克",
            "垃圾处理",
            "身份认同"
        ],
        "oneLine": "在未来城市,人类的所有“污物”——嫉妒、仇恨、悲伤会被抽取制成燃料,但抽取后的人会变成只会微笑的空壳。",
        "url": "./movies/movie-214.html",
        "image": "./64.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "格雷的五十道阴影",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "悬疑、剧情、心理惊悚",
        "tags": [
            "人格分裂",
            "律师",
            "凶杀案",
            "反转",
            "法庭戏"
        ],
        "oneLine": "一个因儿时创伤产生50个人格的清洁工,被控谋杀,王牌律师必须找到“真凶人格”。",
        "url": "./movies/movie-215.html",
        "image": "./65.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "我们家的微幸福生活",
        "year": "2014",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "家庭/剧情/生活",
        "tags": [
            "三代同堂",
            "邻里",
            "细碎日常",
            "温情"
        ],
        "oneLine": "北京胡同里一户普通人家,三代人为了房子、工作、相亲吵吵闹闹,却总在不经意间暖到心坎。",
        "url": "./movies/movie-216.html",
        "image": "./66.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "双枪侠",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "西部,动作,惊悚",
        "tags": [
            "双枪快射",
            "赏金猎人",
            "复仇追杀",
            "荒漠对决",
            "蒸汽火车"
        ],
        "oneLine": "南北战争退役的神枪手患上帕金森症,他用颤抖的双手绑住双枪,要在失去瞄准能力前完成最后一场复仇。",
        "url": "./movies/movie-217.html",
        "image": "./67.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "噩梦连场",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "恐怖,悬疑",
        "tags": [
            "共享梦境",
            "连环杀人",
            "意识入侵",
            "小镇",
            "克苏鲁"
        ],
        "oneLine": "小镇的居民开始做同一个噩梦,梦中被同一个黑影追杀,而第二天,在梦中死去的人会在现实中真实死亡。",
        "url": "./movies/movie-218.html",
        "image": "./68.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "赤西蛎太",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "古装,剧情,动作",
        "tags": [
            "武士",
            "盲剑客",
            "复仇",
            "阴谋",
            "人性"
        ],
        "oneLine": "一个失去视力与味觉的落魄武士,如何仅凭触觉和记忆,在黑暗的牢狱中手刃仇敌,重获“味道”。",
        "url": "./movies/movie-219.html",
        "image": "./69.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "火线消防员",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "灾难/职业",
        "tags": [
            "真实事件改编",
            "兄弟连心",
            "高燃救援"
        ],
        "oneLine": "一支消防中队在一年内遭遇三次特大火灾,有人开始怀疑火是“人为”的。",
        "url": "./movies/movie-220.html",
        "image": "./70.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "双生炽爱",
        "year": "2021",
        "region": "泰国",
        "type": "电视剧",
        "genre": "爱情,悬疑,同性",
        "tags": [
            "双胞胎",
            "替身",
            "虐恋"
        ],
        "oneLine": "为了调查孪生哥哥的死因,弟弟整容成哥哥的模样,却爱上了哥哥生前的男友——那个被视为最大嫌疑人的黑暗艺术家。",
        "url": "./movies/movie-221.html",
        "image": "./71.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "一劳永逸",
        "year": "2018",
        "region": "法国",
        "type": "电影",
        "genre": "喜剧/犯罪",
        "tags": [
            "笨贼团伙",
            "退休计划",
            "荒诞犯罪",
            "乌龙连连"
        ],
        "oneLine": "六个退休老人为了不拖累子女,策划了一场完美银行劫案,结果没有一步按照计划走。",
        "url": "./movies/movie-222.html",
        "image": "./72.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "橄榄球星之死",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "传记/剧情/运动",
        "tags": [
            "CTE",
            "体育黑幕",
            "抗争",
            "悲剧英雄"
        ],
        "oneLine": "天才四分卫在巅峰退役后精神失常,尸检报告揭露了一场联盟隐瞒二十年的阴谋。",
        "url": "./movies/movie-223.html",
        "image": "./73.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "黄英姑",
        "year": "1974",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/历史/战争",
        "tags": [
            "女性英雄",
            "抗战",
            "复仇",
            "乡土",
            "史诗"
        ],
        "oneLine": "为报灭门之仇,村姑黄英姑拿起枪,从被欺凌者成长为令日寇闻风丧胆的游击队长。",
        "url": "./movies/movie-224.html",
        "image": "./74.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "嗜血之爱",
        "year": "2025",
        "region": "西班牙/墨西哥",
        "type": "电视剧",
        "genre": "恐怖/爱情/惊悚",
        "tags": [
            "吸血鬼",
            "病娇",
            "家族恩怨",
            "血腥美学",
            "反转"
        ],
        "oneLine": "一个必须靠喝爱人血才能永生的吸血鬼,在杀了三百多个伴侣后,终于遇到了一个不管怎么杀都死不了的男人。",
        "url": "./movies/movie-225.html",
        "image": "./75.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "人生恰恰恰",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情/家庭",
        "tags": [
            "老年学舞",
            "退休生活",
            "群像"
        ],
        "oneLine": "五个退休老人组队学恰恰,却跳出了后半生的爱与尊严。",
        "url": "./movies/movie-226.html",
        "image": "./76.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "跑啊!一郎",
        "year": "2029",
        "region": "日本",
        "type": "电影",
        "genre": "喜剧,运动",
        "tags": [
            "马拉松",
            "废柴逆袭",
            "温情"
        ],
        "oneLine": "一个中年油腻、跑不过小学生的废柴父亲,为了在女儿婚礼上体面地出场,发誓要完成一次全程马拉松。",
        "url": "./movies/movie-227.html",
        "image": "./77.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "亚历山大和他最糟糕的旅程",
        "year": "2026",
        "region": "美国",
        "type": "动画电影",
        "genre": "喜剧/家庭/冒险",
        "tags": [
            "倒霉蛋",
            "公路旅行",
            "成长治愈",
            "动物伙伴"
        ],
        "oneLine": "十岁男孩亚历山大在夏令营返程途中,遭遇了从行李丢失到火山爆发的连环灾难。",
        "url": "./movies/movie-228.html",
        "image": "./78.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "绑架雅",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "悬疑,家庭",
        "tags": [
            "绑架",
            "家庭秘密",
            "反转",
            "社会派",
            "人性"
        ],
        "oneLine": "7岁女孩“雅”被绑架,绑匪索要的赎金却是一笔不存在的巨款,扯出了一个家庭隐藏数十年的黑暗。",
        "url": "./movies/movie-229.html",
        "image": "./79.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "刺头青",
        "year": "2016",
        "region": "美国",
        "type": "电影",
        "genre": "剧情",
        "tags": [
            "少年",
            "独立",
            "底层",
            "暴力",
            "成长"
        ],
        "oneLine": "13岁的问题少年与刚从监狱出来的哥哥,一起捣鼓一辆报废皮卡,试图逃离拖车公园。",
        "url": "./movies/movie-230.html",
        "image": "./80.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "熊之吻",
        "year": "2019",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "奇幻,剧情",
        "tags": [
            "神话",
            "森林",
            "禁忌之恋",
            "变形",
            "斯拉夫传说"
        ],
        "oneLine": "一个猎人在森林深处救了一头熊,熊却在他梦中化作女人,给了他一个致命的吻。",
        "url": "./movies/movie-231.html",
        "image": "./81.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "回魂女",
        "year": "2022",
        "region": "泰国",
        "type": "电影",
        "genre": "恐怖/惊悚/剧情",
        "tags": [
            "附身",
            "民间信仰",
            "母爱",
            "因果"
        ],
        "oneLine": "女儿溺水身亡三年后,母亲请来巫师“召魂”,回来的是一个声称“你才是害死我的人”的陌生恶灵。",
        "url": "./movies/movie-232.html",
        "image": "./82.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "情来自有方",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情,喜剧",
        "tags": [
            "相亲",
            "误会",
            "港式幽默"
        ],
        "oneLine": "一位情感专家自己屡次相亲失败,却阴差阳错帮所有相亲对象找到了真爱。",
        "url": "./movies/movie-233.html",
        "image": "./83.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "滑板女孩",
        "year": "2024",
        "region": "印度",
        "type": "电影",
        "genre": "体育,剧情",
        "tags": [
            "女性",
            "贫民窟",
            "梦想"
        ],
        "oneLine": "孟买贫民窟的拾荒少女捡到一块破滑板,从此她的人生轨迹如脱缰野马般冲向全世界。",
        "url": "./movies/movie-234.html",
        "image": "./84.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "性爱自修室第二季",
        "year": "2020",
        "region": "英国",
        "type": "剧集",
        "genre": "青春/喜剧/剧情",
        "tags": [
            "性教育",
            "校园",
            "自我认同",
            "友情",
            "青春期"
        ],
        "oneLine": "诊所重新开张,这次求助的不只是学生,还有一名怀疑自己是“无性恋”的老师。",
        "url": "./movies/movie-235.html",
        "image": "./85.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "跨国追逃",
        "year": "2003",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "刑侦,犯罪,悬疑",
        "tags": [
            "红通令",
            "海外猎狐",
            "经侦大案",
            "猫鼠游戏"
        ],
        "oneLine": "红色通缉令下,经侦警察在没有执法权的海外与狡猾“狐狸”展开致命周旋。",
        "url": "./movies/movie-236.html",
        "image": "./86.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "有朵云像你",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情,奇幻",
        "tags": [
            "催泪",
            "生死恋",
            "云朵",
            "遗憾美学"
        ],
        "oneLine": "天气预报说今天有雨,她却等来了一朵会说话的云,那云的声音像极了三年前车祸中死去的丈夫。",
        "url": "./movies/movie-237.html",
        "image": "./87.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "百变小姬子",
        "year": "2024",
        "region": "日本",
        "type": "动画",
        "genre": "动画/奇幻/儿童",
        "tags": [
            "魔法少女",
            "变身",
            "怀旧",
            "萌系"
        ],
        "oneLine": "11岁的普通女孩捡到魔法化妆盒,变身任何职业都能打遍天下无敌手。",
        "url": "./movies/movie-238.html",
        "image": "./88.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "骇人秘事波比特",
        "year": "2024",
        "region": "美国",
        "type": "电视剧",
        "genre": "悬疑/惊悚/犯罪",
        "tags": [
            "真实案件改编",
            "婚姻伦理",
            "身体恐怖",
            "心理惊悚",
            "庭审博弈"
        ],
        "oneLine": "一场血腥的深夜袭击扯出富豪夫妇的背叛、谎言与不可告人的金钱游戏。",
        "url": "./movies/movie-239.html",
        "image": "./89.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "禁宫魅影",
        "year": "1996",
        "region": "中国香港",
        "type": "电影",
        "genre": "恐怖,古装",
        "tags": [
            "故宫",
            "宫女",
            "鬼魂",
            "冤案",
            "中式恐怖"
        ],
        "oneLine": "故宫修缮队半夜总听到女人的哭声,监控拍到清朝宫女在紫禁城游荡,专家说是幻觉,直到哭声变成了所有人的名字。",
        "url": "./movies/movie-240.html",
        "image": "./90.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "萌探探探案",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集/综艺衍生",
        "genre": "悬疑/喜剧/推理",
        "tags": [
            "剧本杀",
            "元宇宙",
            "循环",
            "无限流"
        ],
        "oneLine": "一个剧本杀 APP 的 bug 把六个玩家困在了无限循环的民国凶宅里,每一次“结案”都会复活一名新的死者。",
        "url": "./movies/movie-241.html",
        "image": "./91.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "冰上情火",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情/运动",
        "tags": [
            "花样滑冰",
            "热血",
            "伤病",
            "双人滑",
            "青春"
        ],
        "oneLine": "因伤退役的花滑女单天才,搭档脾气火爆的冰舞坏小子,挑战一个不可能的双人滑动作。",
        "url": "./movies/movie-242.html",
        "image": "./92.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "行动倒数",
        "year": "2022",
        "region": "美国",
        "type": "剧集",
        "genre": "动作,犯罪",
        "tags": [
            "实时叙事",
            "拆弹",
            "卧底",
            "倒计时"
        ],
        "oneLine": "警局被黑客入侵,每一集都是一小时倒计时,拆错一根线就引爆人质。",
        "url": "./movies/movie-243.html",
        "image": "./93.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "雌雄金刚再显神威",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "动作,喜剧",
        "tags": [
            "搭档",
            "退休特工",
            "搞笑暴力",
            "情怀"
        ],
        "oneLine": "二十年前的金牌特工搭档,如今一个是带孙子的老头,一个是跳广场舞的大妈。",
        "url": "./movies/movie-244.html",
        "image": "./94.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "城市管制",
        "year": "2027",
        "region": "美国",
        "type": "电影",
        "genre": "科幻/悬疑/动作",
        "tags": [
            "反乌托邦",
            "AI统治",
            "思维监控",
            "高概念"
        ],
        "oneLine": "为了降低犯罪率,AI系统“母亲”将所有居民的“犯罪欲望值”显示在头顶,直到一个欲望值为零的人出现了——那是被杀的目标。",
        "url": "./movies/movie-245.html",
        "image": "./95.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "狼侠",
        "year": "2026",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "武侠,古装,悬疑",
        "tags": [
            "大侠",
            "替身",
            "身份错位",
            "江湖"
        ],
        "oneLine": "一个文弱书生被逼冒充已故的江湖第一侠客“狼侠”,却发现自己骨子里就是个狼人。",
        "url": "./movies/movie-246.html",
        "image": "./96.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "为朋友而拍的电影",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情",
        "tags": [
            "独立电影",
            "友情",
            "幕后",
            "追梦"
        ],
        "oneLine": "一个穷困导演为兑现对绝症好友的承诺,用一部手机和一群外行拍出了改变所有人的电影。",
        "url": "./movies/movie-247.html",
        "image": "./97.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "漂亮朋友",
        "year": "2019",
        "region": "法国",
        "type": "电影",
        "genre": "剧情/爱情",
        "tags": [
            "莫泊桑改编",
            "渣男",
            "上流社会",
            "名利场",
            "欲望"
        ],
        "oneLine": "一个退役下级军官凭借美貌和手腕,在巴黎上流社会踩着女人向上爬。",
        "url": "./movies/movie-248.html",
        "image": "./98.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "老友记第六季",
        "year": "1999",
        "region": "美国",
        "type": "剧集",
        "genre": "喜剧/爱情",
        "tags": [
            "情景喜剧",
            "友情",
            "纽约",
            "经典",
            "成长"
        ],
        "oneLine": "莫妮卡和钱德勒同居后打算秘密闪婚,而罗斯在大学的新工作面临“终身教职”和“终身孤独”的抉择。",
        "url": "./movies/movie-249.html",
        "image": "./99.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "少女终末旅行",
        "year": "2026",
        "region": "日本",
        "type": "动画剧集",
        "genre": "科幻,治愈",
        "tags": [
            "末日",
            "公路片",
            "百合",
            "哲学",
            "废土"
        ],
        "oneLine": "在人类灭亡后的废土世界,两个少女开着半履带车,寻找“最后的食物”和“活着的意义”。",
        "url": "./movies/movie-250.html",
        "image": "./100.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "边城浪子粤语",
        "year": "1991",
        "region": "中国香港",
        "type": "剧集",
        "genre": "剧情/武侠/古装",
        "tags": [
            "古龙",
            "复仇",
            "兄弟情",
            "配音版",
            "宿命"
        ],
        "oneLine": "粤语配音重塑古龙经典,两个身世迥异的浪子,在荒凉边城追寻同一桩灭门血案的真相。",
        "url": "./movies/movie-251.html",
        "image": "./101.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "印第安纳的蒙罗维亚",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "剧情/悬疑/西部",
        "tags": [
            "中西部的哥特",
            "小镇",
            "秘密",
            "返乡",
            "冷峻"
        ],
        "oneLine": "一座名叫蒙罗维亚的美国中西部小镇,表面宁静祥和,地底下却埋藏着数十年的血腥秘密。",
        "url": "./movies/movie-252.html",
        "image": "./102.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "邻居2020",
        "year": "2020",
        "region": "中国大陆",
        "type": "电影",
        "genre": "惊悚,悬疑",
        "tags": [
            "密闭空间",
            "窥视",
            "社区惊悚"
        ],
        "oneLine": "疫情隔离期间,独居女孩透过猫眼发现,对面邻居似乎正在家里复制她的整个生活。",
        "url": "./movies/movie-253.html",
        "image": "./103.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "十三邀第三季",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "纪录片/访谈",
        "tags": [
            "文化",
            "对话",
            "社会观察",
            "知识分子",
            "人生"
        ],
        "oneLine": "许知远带着偏见与好奇,走访十三位时代标志人物,在碰撞中寻找答案。",
        "url": "./movies/movie-254.html",
        "image": "./104.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "凯恩号哗变",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "剧情,战争,法庭",
        "tags": [
            "军事法庭",
            "心理博弈",
            "台风",
            "经典改编"
        ],
        "oneLine": "一场台风中,副舰长解除了神经质舰长的指挥权,军事法庭上的真相却不断反转。",
        "url": "./movies/movie-255.html",
        "image": "./105.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "沙之花也有春天",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情,家庭,农村",
        "tags": [
            "乡村振兴",
            "女性成长",
            "治沙",
            "亲情",
            "年代"
        ],
        "oneLine": "沙漠女儿返乡治沙,在漫天黄沙中栽下花苗,也种下与父亲迟来的春天。",
        "url": "./movies/movie-256.html",
        "image": "./106.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "年轻的媳妇",
        "year": "2025",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "家庭、剧情、伦理",
        "tags": [
            "婆媳",
            "代际冲突",
            "女性成长",
            "都市家庭"
        ],
        "oneLine": "当90后儿媳遇上50后婆婆,一场关于育儿、金钱与尊严的家庭风暴,在这个普通的三居室里悄然爆发。",
        "url": "./movies/movie-257.html",
        "image": "./107.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "长毛检察官",
        "year": "1994",
        "region": "香港",
        "type": "电影",
        "genre": "喜剧,动作",
        "tags": [
            "卧底",
            "发型",
            "无厘头",
            "律政"
        ],
        "oneLine": "一个留着怪异莫西干发型的新人检察官,为了抓毒枭,不得不伪装成嘻哈歌手混进夜店。",
        "url": "./movies/movie-258.html",
        "image": "./108.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "奋力求生",
        "year": "2019",
        "region": "美国",
        "type": "电影",
        "genre": "惊悚,生存,剧情",
        "tags": [
            "荒野求生",
            "复仇",
            "女性主角",
            "绝境反杀"
        ],
        "oneLine": "女摄影师被男友遗弃在无人荒漠,必须用仅剩的相机镜头和生存本能活着走出来。",
        "url": "./movies/movie-259.html",
        "image": "./109.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "末日机器",
        "year": "2026",
        "region": "德国",
        "type": "电影",
        "genre": "科幻惊悚",
        "tags": [
            "人工智能",
            "黑色幽默",
            "资源争夺"
        ],
        "oneLine": "一台宣布接管世界的超级AI,唯一的治理手段是每天随机销毁一个人类聚居区。",
        "url": "./movies/movie-260.html",
        "image": "./110.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "见爱不怪",
        "year": "2018",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧/爱情/青春",
        "tags": [
            "学霸伪装",
            "攻心计",
            "反转校草"
        ],
        "oneLine": "书呆子为了追到校花,假装爱上校草以打入社交圈,结果假戏真做。",
        "url": "./movies/movie-261.html",
        "image": "./111.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "谎知真爱",
        "year": "2024",
        "region": "泰国",
        "type": "剧集",
        "genre": "爱情/喜剧/悬疑",
        "tags": [
            "谎言游戏",
            "契约恋爱",
            "多重反转"
        ],
        "oneLine": "两个顶级骗子签订契约假装情侣,却发现自己正在陷入一个由对方亲手编织的巨大骗局。",
        "url": "./movies/movie-262.html",
        "image": "./112.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "塔克洛班的困境",
        "year": "2023",
        "region": "菲律宾",
        "type": "电影",
        "genre": "剧情/灾难",
        "tags": [
            "台风",
            "生存",
            "母子",
            "真实事件改编"
        ],
        "oneLine": "超级台风后,一个单亲妈妈必须带着年幼的孩子穿越满是劫匪和尸体的废墟城市。",
        "url": "./movies/movie-263.html",
        "image": "./113.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "不寻常",
        "year": "2023",
        "region": "英国",
        "type": "电影",
        "genre": "心理惊悚",
        "tags": [
            "人格分裂",
            "密室",
            "反转",
            "人性",
            "悬疑"
        ],
        "oneLine": "七个看似毫不相关的陌生人被困废弃医院,他们发现彼此竟是同一人格的碎片。",
        "url": "./movies/movie-264.html",
        "image": "./114.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "西游记续集",
        "year": "2000",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装神话",
        "tags": [
            "经典IP",
            "86版补拍",
            "师徒",
            "降妖除魔",
            "特效进步"
        ],
        "oneLine": "师徒四人取得真经后,发现佛经被泼天的妖气污染无法使用,不得不返回凡间,补打那些当年“打过招呼”却没彻底收服的妖怪。",
        "url": "./movies/movie-265.html",
        "image": "./115.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "银河护卫队2",
        "year": "2017",
        "region": "美国",
        "type": "电影",
        "genre": "动作/科幻/喜剧",
        "tags": [
            "漫威",
            "劲歌金曲",
            "星爵寻父",
            "勇度牺牲",
            "蓝色眼泪"
        ],
        "oneLine": "星爵终于找到了亲生父亲,却发现对方竟是一个妄图吞噬整个宇宙的活体星球。",
        "url": "./movies/movie-266.html",
        "image": "./116.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "枪神传奇",
        "year": "2012",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "剧情/战争",
        "tags": [
            "抗日",
            "狙击手",
            "兵工厂"
        ],
        "oneLine": "八路军兵工厂里一个不爱说话的哑巴维修工,竟能闭着眼睛修好任何枪,并射中一千米外的敌人。",
        "url": "./movies/movie-267.html",
        "image": "./117.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "表哥鲍比",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "剧情/犯罪",
        "tags": [
            "家族秘密",
            "黑帮",
            "亲情",
            "救赎"
        ],
        "oneLine": "老实巴交的会计师发现,自己那位总惹麻烦的表哥鲍比,竟是隐退江湖的传奇黑帮教父。",
        "url": "./movies/movie-268.html",
        "image": "./118.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "小脚板走天涯8",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "动画,冒险,家庭",
        "tags": [
            "恐龙",
            "续集",
            "成长",
            "友情",
            "寻家"
        ],
        "oneLine": "小恐龙小脚板发现一张古老树皮地图,上面标注着一个传说中从未被冰雪覆盖的“永恒之谷”。",
        "url": "./movies/movie-269.html",
        "image": "./119.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "风流情孽",
        "year": "1990",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情,伦理",
        "tags": [
            "豪门",
            "孽缘",
            "港风",
            "三角恋",
            "悲剧"
        ],
        "oneLine": "六十年代香港,富家千金爱上父亲的义子,而义子却与继母有着不可告人的过去。",
        "url": "./movies/movie-270.html",
        "image": "./120.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "夏日么么茶",
        "year": "2024",
        "region": "马来西亚/新加坡",
        "type": "电影",
        "genre": "爱情/喜剧",
        "tags": [
            "沙滩",
            "初恋",
            "夏天",
            "清新"
        ],
        "oneLine": "阳光、沙滩、一杯么么茶,以及那个曾让你在夏天心动的男孩,他还记得你吗?",
        "url": "./movies/movie-271.html",
        "image": "./121.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "今天不离去",
        "year": "2025",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "战争,剧情",
        "tags": [
            "二战",
            "牺牲",
            "催泪",
            "写实",
            "人性"
        ],
        "oneLine": "斯大林格勒战役中,六名苏军士兵接到死守一栋大楼的命令,但补给线已被彻底切断。",
        "url": "./movies/movie-272.html",
        "image": "./122.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "山海伏魔之追月",
        "year": "2026",
        "region": "中国",
        "type": "电影",
        "genre": "奇幻/动作",
        "tags": [
            "山海经",
            "神话",
            "特效",
            "东方魔幻"
        ],
        "oneLine": "后羿射日后仅剩一箭,他必须用这一箭射下失控奔月的嫦娥。",
        "url": "./movies/movie-273.html",
        "image": "./123.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "阿喜",
        "year": "1979",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情,家庭",
        "tags": [
            "智力障碍",
            "兄弟情",
            "社会写实"
        ],
        "oneLine": "一个智力停留在8岁的成年人阿喜,在哥哥入狱后独自面对残酷社会,用赤子之心感化了整条贫民窟。",
        "url": "./movies/movie-274.html",
        "image": "./124.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "冰上青春日记",
        "year": "2022",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情/运动",
        "tags": [
            "短道速滑",
            "东北",
            "成长",
            "友谊",
            "省队"
        ],
        "oneLine": "四个东北少年在省队集训的最后一个冬天,有人要进国家队,有人要回家继承澡堂。",
        "url": "./movies/movie-275.html",
        "image": "./125.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "蒙心匿爱",
        "year": "2023",
        "region": "泰国",
        "type": "剧集",
        "genre": "爱情/悬疑/剧情",
        "tags": [
            "失忆",
            "替身",
            "豪门",
            "复仇",
            "虐恋"
        ],
        "oneLine": "她在车祸中失忆,被当作豪门千金带回家,却发现自己“本尊”的尸体就埋在花园里。",
        "url": "./movies/movie-276.html",
        "image": "./126.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "消失的士兵",
        "year": "2025",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "战争/悬疑",
        "tags": [
            "一战东线",
            "时空错位",
            "森林幻觉",
            "精神崩溃",
            "反战"
        ],
        "oneLine": "1917年,一名俄国士兵在撤退时掉队,走进一片迷雾森林,出来时发现战争已经结束了一百年。",
        "url": "./movies/movie-277.html",
        "image": "./127.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "江湖英雄联盟之血瞳杀机",
        "year": "2024",
        "region": "中国大陆",
        "type": "网络电影",
        "genre": "动作,奇幻,武侠",
        "tags": [
            "暗黑武侠",
            "异能",
            "联盟",
            "特效爽片",
            "悬案"
        ],
        "oneLine": "明朝末年,锦衣卫成立“血滴子”特别行动组,成员全是身怀异能的江湖怪咖,追查一双能控制丧尸的魔眼。",
        "url": "./movies/movie-278.html",
        "image": "./128.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "慢慢说",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情/家庭/同性",
        "tags": [
            "听障家庭",
            "手语",
            "母子冲突",
            "听见爱情"
        ],
        "oneLine": "在一个三代都是听障人士的家庭里,唯一拥有正常听力的女儿却发誓这辈子都不开口说话。",
        "url": "./movies/movie-279.html",
        "image": "./129.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "公寓",
        "year": "2026",
        "region": "香港",
        "type": "电影",
        "genre": "恐怖,悬疑,心理",
        "tags": [
            "都市怪谈",
            "极简主义",
            "精神污染",
            "闭环"
        ],
        "oneLine": "一个失眠的保安发现,他看守的公寓每间房布局完全一样,但每扇门打开后,都住着不同时空的自己。",
        "url": "./movies/movie-280.html",
        "image": "./130.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "仔仔一堂",
        "year": "2023",
        "region": "中国香港",
        "type": "综艺/剧集",
        "genre": "真人秀,剧情,家庭",
        "tags": [
            "亲子关系",
            "代际冲突",
            "美食"
        ],
        "oneLine": "五位叛逆青年和他们的固执父亲,在一间濒临倒闭的餐厅里,通过美食重塑血缘。",
        "url": "./movies/movie-281.html",
        "image": "./131.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "怒火羔羊粤语",
        "year": "1995",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作,犯罪",
        "tags": [
            "卧底",
            "兄弟情",
            "暴力美学",
            "港片"
        ],
        "oneLine": "卧底警察被逼亲手杀死同袍,十年后出狱,却发现当年的“死者”已成黑帮老大。",
        "url": "./movies/movie-282.html",
        "image": "./132.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "泄密者死",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "惊悚/政治/谍战",
        "tags": [
            "青瓦台",
            "媒体黑幕",
            "匿名爆料",
            "追杀戏",
            "全员恶人"
        ],
        "oneLine": "一名国会议员在直播中念出绝密名单后当场被狙杀,所有看到直播的人开始接连“意外”死亡。",
        "url": "./movies/movie-283.html",
        "image": "./133.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "隆美尔宝藏",
        "year": "2024",
        "region": "德国",
        "type": "电影",
        "genre": "动作,历史",
        "tags": [
            "二战",
            "寻宝",
            "纳粹",
            "沙漠"
        ],
        "oneLine": "考古学家在撒哈拉发现了隆美尔的藏宝图,却发现宝藏是一枚足以改变二战结局的脏弹。",
        "url": "./movies/movie-284.html",
        "image": "./134.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "醉拳苏乞儿2003",
        "year": "2003",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作,喜剧,古装",
        "tags": [
            "醉拳",
            "乞丐",
            "复仇",
            "江湖"
        ],
        "oneLine": "苏乞儿在与宿敌决斗前夜喝得烂醉,醒来发现自己失忆了,而全江湖的人都想趁他病要他命。",
        "url": "./movies/movie-285.html",
        "image": "./135.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "惩恶扬善",
        "year": "2026",
        "region": "韩国",
        "type": "电影",
        "genre": "动作/犯罪",
        "tags": [
            "私刑复仇",
            "检察官腐败",
            "R级暴力"
        ],
        "oneLine": "被黑帮灭门的检察官辞职后成为“夜间审判者”,却发现下一个目标是自己曾经的恩师。",
        "url": "./movies/movie-286.html",
        "image": "./136.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "韩裔美人的日与夜",
        "year": "2023",
        "region": "美国",
        "type": "剧集",
        "genre": "剧情,悬疑",
        "tags": [
            "身份认同",
            "双重生活",
            "移民",
            "心理惊悚"
        ],
        "oneLine": "白天是模范律师,夜晚是地下调解人,她如何守住两个世界的秘密?",
        "url": "./movies/movie-287.html",
        "image": "./137.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "丑小鸭天鹅",
        "year": "2025",
        "region": "丹麦/瑞典",
        "type": "电影",
        "genre": "剧情、家庭",
        "tags": [
            "芭蕾",
            "代际创伤",
            "北欧冷调",
            "自我认同",
            "姐妹情"
        ],
        "oneLine": "被剧团淘汰的丑小鸭式女孩,回到天鹅饲养员母亲身边,用一场暴风雪夜救赎了彼此。",
        "url": "./movies/movie-288.html",
        "image": "./138.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "1941的圣诞",
        "year": "2015",
        "region": "中国香港/中国大陆",
        "type": "电影",
        "genre": "剧情/历史/战争",
        "tags": [
            "二战",
            "香港沦陷",
            "日军",
            "爱情与背叛"
        ],
        "oneLine": "1941年圣诞夜,香港沦陷。一位富家千金和一位日军翻译官在教堂里做出了改变一生的选择。",
        "url": "./movies/movie-289.html",
        "image": "./139.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "魔翼杀手4",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "奇幻/动作/恐怖",
        "tags": [
            "天使",
            "堕落",
            "末世",
            "神魔大战"
        ],
        "oneLine": "堕落天使再度降临人间,这次他不想杀人,只想找到上帝留下的最后一段录音。",
        "url": "./movies/movie-290.html",
        "image": "./140.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "最终联赛",
        "year": "2024",
        "region": "韩国",
        "type": "剧集",
        "genre": "动作,奇幻,运动",
        "tags": [
            "电竞",
            "超能力",
            "团队",
            "热血",
            "阴谋"
        ],
        "oneLine": "当全球最火的电竞游戏真的会吞噬选手灵魂,败者将被抹除存在。",
        "url": "./movies/movie-291.html",
        "image": "./141.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "失落的太平洋大陆",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "科幻,冒险",
        "tags": [
            "海底",
            "古文明",
            "灾难"
        ],
        "oneLine": "地质学家在马里亚纳海沟深处,发现了一个因磁场反转而依然存活的史前大陆,以及上面的掠食者。",
        "url": "./movies/movie-292.html",
        "image": "./142.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "辣手枭雄",
        "year": "1996",
        "region": "中国香港",
        "type": "电影",
        "genre": "犯罪/动作/黑帮",
        "tags": [
            "枭雄传记",
            "枪战",
            "兄弟情义",
            "九十年代"
        ],
        "oneLine": "一个街头混混如何在十年间成为掌控半个港岛毒品市场的“冰王”,又是如何在48小时内覆灭。",
        "url": "./movies/movie-293.html",
        "image": "./143.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "爱的誓言",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情,剧情",
        "tags": [
            "绝症",
            "承诺",
            "时空交错",
            "催泪"
        ],
        "oneLine": "一句临终前的谎言,让她在两个平行时空中寻找那个从未存在的爱人。",
        "url": "./movies/movie-294.html",
        "image": "./144.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "爱,来的刚好",
        "year": "2023",
        "region": "中国",
        "type": "电视剧",
        "genre": "爱情、都市、职场",
        "tags": [
            "错位",
            "巧合",
            "欢喜冤家",
            "命中注定"
        ],
        "oneLine": "效率至上的投行女高管,在相亲软件上匹配到了“完美男友”,见面才发现是三天前被她亲手裁掉的实习生。",
        "url": "./movies/movie-295.html",
        "image": "./145.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "生活真美好",
        "year": "2024",
        "region": "意大利",
        "type": "电影",
        "genre": "喜剧/剧情",
        "tags": [
            "存在主义",
            "日常治愈",
            "多线叙事",
            "黑色幽默"
        ],
        "oneLine": "五个生活在地中海小镇的失意者,在同一天各自经历“末日”,却发现平凡日子就是天堂。",
        "url": "./movies/movie-296.html",
        "image": "./146.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "光影流情",
        "year": "2023",
        "region": "中国香港",
        "type": "电视剧",
        "genre": "剧情/年代/家庭",
        "tags": [
            "电影圈",
            "家族兴衰",
            "怀旧",
            "兄弟情"
        ],
        "oneLine": "一对兄弟从胶片时代到流媒体时代,在九龙城寨里撑起一家传奇影院,也见证了香港电影的百年沉浮。",
        "url": "./movies/movie-297.html",
        "image": "./147.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "菲利普:无冕之王",
        "year": "2025",
        "region": "英国",
        "type": "剧集",
        "genre": "传记/剧情",
        "tags": [
            "菲利普亲王",
            "王室",
            "女王",
            "历史",
            "婚姻"
        ],
        "oneLine": "聚焦菲利普亲王的一生,从流亡王子到女王身后的男人,他的“王冠”叫做牺牲。",
        "url": "./movies/movie-298.html",
        "image": "./148.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "急诊先锋:纽约第一季",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "医疗/剧情",
        "tags": [
            "急诊",
            "纽约",
            "群像",
            "高压",
            "真实感"
        ],
        "oneLine": "纽约最忙的急诊室,一个夜班班次,十五个医护,四十七个病人,一个无法挽回的错误。",
        "url": "./movies/movie-299.html",
        "image": "./149.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "屌飞船奇遇记",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "科幻/喜剧",
        "tags": [
            "荒诞",
            "底层逆袭",
            "外星科技"
        ],
        "oneLine": "废品站小哥捡到外星马桶飞船,为归还高利贷不得不开启星际物流生意。",
        "url": "./movies/movie-300.html",
        "image": "./150.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "蛇女归来",
        "year": "2024",
        "region": "泰国",
        "type": "电视剧",
        "genre": "恐怖、爱情、复仇",
        "tags": [
            "蛇精",
            "前世",
            "诅咒",
            "乡村",
            "轮回"
        ],
        "oneLine": "一个现代女孩每晚梦见自己是条蛇,直到村里老人说:你上辈子是被烧死的蛇后。",
        "url": "./movies/movie-301.html",
        "image": "./1.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "向着星辰的长征",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "科幻/历史/剧情",
        "tags": [
            "航天",
            "硬科幻",
            "家国情怀"
        ],
        "oneLine": "1969年,一群中国科学家用算盘敲出了载人航天的绝密计划。",
        "url": "./movies/movie-302.html",
        "image": "./2.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "天生兔女郎",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "喜剧/奇幻",
        "tags": [
            "变身",
            "性别互换",
            "职场喜剧",
            "恋爱"
        ],
        "oneLine": "钢铁直男程序员意外变成兔女郎,只能在深夜女装直播,却发现同事是榜一大哥。",
        "url": "./movies/movie-303.html",
        "image": "./3.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "别叫我“赌神”粤语",
        "year": "2022",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情,家庭",
        "tags": [
            "戒赌",
            "父子情",
            "草根",
            "粤语原声",
            "救赎"
        ],
        "oneLine": "昔日澳门赌徒为赎回失散儿子的抚养权,必须戒掉赌瘾并完成一场不可能的马拉松。",
        "url": "./movies/movie-304.html",
        "image": "./4.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "单身男子",
        "year": "2009",
        "region": "美国/英国",
        "type": "电影",
        "genre": "剧情/爱情/同性",
        "tags": [
            "丧偶",
            "一日告别",
            "复古美学"
        ],
        "oneLine": "1962年,失去同性伴侣的中年教授决定自杀,但在最后一天里,他遇到了三个人,改变了计划。",
        "url": "./movies/movie-305.html",
        "image": "./5.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "天伦乐",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "代际冲突",
            "临终关怀",
            "美食治愈"
        ],
        "oneLine": "叛逆少女被迫回乡照顾刁钻古怪的厨神外公,却发现家族百年老店祖传菜谱上只有一个“盐”字。",
        "url": "./movies/movie-306.html",
        "image": "./6.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "扬尼斯:传奇之旅",
        "year": "2024",
        "region": "美国/希腊",
        "type": "电影",
        "genre": "纪录片/传记",
        "tags": [
            "篮球",
            "字母哥",
            "NBA",
            "励志",
            "移民"
        ],
        "oneLine": "从雅典街头的无证小贩,到NBA最有价值球员,扬尼斯·阿德托昆博亲述那段不可思议的逆袭人生。",
        "url": "./movies/movie-307.html",
        "image": "./7.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "226",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "历史悬疑",
        "tags": [
            "二二六兵变",
            "时间回溯",
            "青年军官",
            "抉择"
        ],
        "oneLine": "一个现代历史宅在参观二二六兵变纪念馆时,被拉回了1936年的雪夜,他必须在血腥的政变中活下来,并阻止一个疯狂的帝国。",
        "url": "./movies/movie-308.html",
        "image": "./8.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "走出大墙的人",
        "year": "1985",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情、纪实、励志",
        "tags": [
            "刑满释放",
            "改革开放",
            "尊严",
            "重生"
        ],
        "oneLine": "三个刑满释放人员回到社会,面对偏见与饥饿,他们决定用双手砸碎命运的围墙。",
        "url": "./movies/movie-309.html",
        "image": "./9.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "劈腿困境",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧,爱情,悬疑",
        "tags": [
            "出轨",
            "闺蜜",
            "双视角",
            "都市"
        ],
        "oneLine": "女主发现男友劈腿,女主闺蜜同时发现她男友劈腿,而两人交往的竟是同一对双胞胎兄妹。",
        "url": "./movies/movie-310.html",
        "image": "./10.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "拦截终结者",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "动作/科幻",
        "tags": [
            "时间旅行",
            "机械警察",
            "废土",
            "肉身搏斗"
        ],
        "oneLine": "2065年,人类派出最强战士回到过去终结AI的创造者,却意外创造了更可怕的敌人。",
        "url": "./movies/movie-311.html",
        "image": "./11.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "即刻逃亡第一季",
        "year": "2025",
        "region": "英国",
        "type": "剧集",
        "genre": "动作,犯罪,惊悚",
        "tags": [
            "高智商犯罪",
            "猫鼠游戏",
            "快节奏"
        ],
        "oneLine": "伦敦黑帮、腐败警察和国际杀手同时追杀一个人,而这个人是个只会点外卖的IT宅男。",
        "url": "./movies/movie-312.html",
        "image": "./12.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "小早川家之秋",
        "year": "2010",
        "region": "日本",
        "type": "电影",
        "genre": "剧情,家庭,文艺",
        "tags": [
            "家庭",
            "文艺",
            "秋季",
            "日本",
            "亲情",
            "日常"
        ],
        "oneLine": "小早川家的秋天,藏着母亲临终前最后一个无法开口的秘密。",
        "url": "./movies/movie-313.html",
        "image": "./13.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "密码46",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "科幻,惊悚",
        "tags": [
            "基因编辑",
            "反乌托邦",
            "数字伦理"
        ],
        "oneLine": "未来世界每个人的基因缺陷都是公开的犯罪代码,而代码“46”代表“有自由意志”。",
        "url": "./movies/movie-314.html",
        "image": "./14.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "佛光寺传奇",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "古装悬疑",
        "tags": [
            "唐代",
            "古建筑",
            "盗宝",
            "梁思成彩蛋"
        ],
        "oneLine": "1937年,梁思成发现佛光寺后,一尊“不存在的唐代木雕”在殿内离奇失踪,所有测绘者都说没见过它。",
        "url": "./movies/movie-315.html",
        "image": "./15.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "信长之枪",
        "year": "2014",
        "region": "日本",
        "type": "电视剧",
        "genre": "动作,历史",
        "tags": [
            "穿越",
            "战国",
            "现代兵器",
            "权谋"
        ],
        "oneLine": "一把失踪的日本国宝火绳枪,竟是织田信长从现代自卫队员手中交换而来。",
        "url": "./movies/movie-316.html",
        "image": "./16.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "劫数难逃粤语",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "犯罪/悬疑",
        "tags": [
            "宿命",
            "黑帮",
            "卧底",
            "救赎"
        ],
        "oneLine": "一名卧底警察在身份暴露前24小时,发现整个帮派都已知晓他的底细,一场猫鼠游戏就此反转。",
        "url": "./movies/movie-317.html",
        "image": "./17.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "污泥中的纯情",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "爱情,剧情,社会",
        "tags": [
            "阶级差异",
            "绝症",
            "虐恋",
            "底层",
            "救赎"
        ],
        "oneLine": "他是活在臭水沟里的放高利贷混混,她是患有白血病的富家千金,他们谈了一场注定会弄脏彼此的恋爱。",
        "url": "./movies/movie-318.html",
        "image": "./18.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "冰魔",
        "year": "2007",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖,科幻",
        "tags": [
            "怪物",
            "雪山",
            "生存"
        ],
        "oneLine": "北极科考队钻探冰芯时惊醒远古寄生生物,队员接连变异为嗜血冰魔。",
        "url": "./movies/movie-319.html",
        "image": "./19.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "苏格兰女王:玛丽一世",
        "year": "2026",
        "region": "英国",
        "type": "剧集",
        "genre": "历史/传记/战争",
        "tags": [
            "王权斗争",
            "伊丽莎白一世",
            "囚禁岁月",
            "女性政治"
        ],
        "oneLine": "不同于光鲜的历史剧,本剧聚焦玛丽一世被囚禁英格兰的最后十九年,权力、信仰与母性的终极拉扯。",
        "url": "./movies/movie-320.html",
        "image": "./20.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "铁马寻桥粤语",
        "year": "2010",
        "region": "香港",
        "type": "剧集",
        "genre": "剧情/家庭",
        "tags": [
            "粤语原声",
            "家族恩怨",
            "功夫",
            "市井"
        ],
        "oneLine": "深水埗一间跌打馆的父子三人,一边用铁打药酒治人筋骨,一边用拳头治自己的家族旧伤。",
        "url": "./movies/movie-321.html",
        "image": "./21.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "飞天小女警第一季",
        "year": "1998",
        "region": "美国",
        "type": "剧集",
        "genre": "动画/动作/喜剧",
        "tags": [
            "超级英雄",
            "童年经典",
            "美式卡通",
            "女性力量",
            "化学物X"
        ],
        "oneLine": "尤教授不小心在配方中加入“化学物X”后,三个还在上幼儿园的小女孩成为了守护 Townsville 的超级英雄。",
        "url": "./movies/movie-322.html",
        "image": "./22.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "白雪公主必须死",
        "year": "2022",
        "region": "韩国",
        "type": "电影",
        "genre": "惊悚,悬疑",
        "tags": [
            "反转童话",
            "心理战",
            "家族诅咒",
            "女性复仇"
        ],
        "oneLine": "一个现代小镇里,选美冠军接连失踪,而每个案发现场都留着一个咬过一口的红苹果。",
        "url": "./movies/movie-323.html",
        "image": "./23.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "花落水流红",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "文艺爱情",
        "tags": [
            "昆曲传承",
            "遗憾美学",
            "年代跨越"
        ],
        "oneLine": "一个昆曲名伶在文革中被毁嗓,五十年后她的孙女在抖音上唱红了同一支曲子。",
        "url": "./movies/movie-324.html",
        "image": "./24.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "第二次约会性指南",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "爱情,喜剧",
        "tags": [
            "约会",
            "指南",
            "尴尬"
        ],
        "oneLine": "一本自称“能让你搞定第二次约会”的神秘指南手册,让一对社恐男女的约会滑向了不可控的深渊。",
        "url": "./movies/movie-325.html",
        "image": "./25.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "宝贝守门员",
        "year": "2025",
        "region": "意大利",
        "type": "电影",
        "genre": "剧情,喜剧,运动",
        "tags": [
            "足球",
            "育儿",
            "中年危机",
            "父子",
            "逆袭"
        ],
        "oneLine": "前意甲守门员沦为女儿幼儿园足球队的教练,结果被一群五岁小孩教做人。",
        "url": "./movies/movie-326.html",
        "image": "./26.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "南瓜恶灵2:血翼",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖/奇幻",
        "tags": [
            "血腥",
            "怪物",
            "万圣节"
        ],
        "oneLine": "万圣节当晚,被封印的南瓜恶灵长出一对蝙蝠翅膀,开始在全城上空散播诅咒。",
        "url": "./movies/movie-327.html",
        "image": "./27.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "神龙星主",
        "year": "2026",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "玄幻/修仙/权谋",
        "tags": [
            "穿越",
            "废柴逆袭",
            "星宿修炼",
            "宗门大战",
            "龙族"
        ],
        "oneLine": "现代天文学家穿越成修仙世界被废的星主独子,他发现所谓星力修炼本质上是在观测暗物质,于是一边写论文一边屠龙。",
        "url": "./movies/movie-328.html",
        "image": "./28.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "我爱你! 真英",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "爱情/剧情/音乐",
        "tags": [
            "聋哑",
            "音乐",
            "初恋",
            "治愈"
        ],
        "oneLine": "失聪的街头画家真英,遇见了过气摇滚歌手民秀,他用画笔“看见”了声音,他教她“唱”出了爱。",
        "url": "./movies/movie-329.html",
        "image": "./29.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "庭院情缘",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "爱情,剧情",
        "tags": [
            "巴黎",
            "中产",
            "邻里",
            "暧昧"
        ],
        "oneLine": "巴黎一栋公寓楼的庭院里,一对互为邻居的单身男女隔墙同居了三年,却从未见过对方。",
        "url": "./movies/movie-330.html",
        "image": "./30.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "史陶芬堡–反希特勒的密谋",
        "year": "2026",
        "region": "德国",
        "type": "电影",
        "genre": "历史/传记/战争",
        "tags": [
            "二战",
            "刺杀希特勒",
            "英雄主义",
            "政治惊悚"
        ],
        "oneLine": "以史陶芬堡上校为首的军官团,在绝望中策划了“瓦尔基里”行动,试图用一颗炸弹终结纳粹帝国。",
        "url": "./movies/movie-331.html",
        "image": "./31.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "完美男人2015",
        "year": "2015",
        "region": "法国",
        "type": "电影",
        "genre": "惊悚,剧情",
        "tags": [
            "身份冒用",
            "作家",
            "谎言"
        ],
        "oneLine": "一个穷困潦倒的小提琴手捡到死者的日记出版后一夜成名,但日记的后续内容却开始预言他的死亡。",
        "url": "./movies/movie-332.html",
        "image": "./32.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "儿子老子",
        "year": "2025",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "剧情/家庭/伦理",
        "tags": [
            "代际冲突",
            "父子战争",
            "养老困境"
        ],
        "oneLine": "老父患阿尔茨海默症后变得像个孩子,中年儿子被迫成为“父亲”,身份彻底颠倒。",
        "url": "./movies/movie-333.html",
        "image": "./33.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "姐妹情深",
        "year": "2023",
        "region": "印度",
        "type": "电影",
        "genre": "剧情,喜剧,家庭",
        "tags": [
            "姐妹",
            "遗产",
            "竞争",
            "和解"
        ],
        "oneLine": "父亲遗嘱要求三姐妹在30天内花光10亿卢比才能继承遗产,但每花一笔都会让另一个人的梦想破灭。",
        "url": "./movies/movie-334.html",
        "image": "./34.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "春蚕",
        "year": "2024",
        "region": "中国",
        "type": "电影",
        "genre": "剧情",
        "tags": [
            "乡土",
            "女性",
            "时代变迁"
        ],
        "oneLine": "1990年代的江南蚕乡,一个目不识丁的老蚕农为了供孙女读书,决定自己学会认字和算账。",
        "url": "./movies/movie-335.html",
        "image": "./35.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "米小圈上学记 第三季",
        "year": "2024",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "儿童,喜剧",
        "tags": [
            "校园",
            "成长",
            "搞笑",
            "真人版"
        ],
        "oneLine": "米小圈升入三年级,遇到了史上最严厉的新班主任。",
        "url": "./movies/movie-336.html",
        "image": "./36.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "驴拳",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "犯罪,剧情,运动",
        "tags": [
            "地下拳场",
            "黑色幽默",
            "英伦底层",
            "救赎"
        ],
        "oneLine": "一个落魄的古典钢琴家为了还债,被迫去地下拳场打一种只能用后腿踢人的诡异比赛——“驴拳”。",
        "url": "./movies/movie-337.html",
        "image": "./37.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "她之觉醒第一季",
        "year": "2023",
        "region": "美国",
        "type": "剧集",
        "genre": "科幻,悬疑",
        "tags": [
            "女性力量",
            "觉醒",
            "悬疑",
            "群像剧"
        ],
        "oneLine": "一场不知名的“觉醒”让全球女性突然拥有了某种神秘电磁力,世界秩序开始崩塌。",
        "url": "./movies/movie-338.html",
        "image": "./38.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "黑势力/再见古惑仔",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作,犯罪",
        "tags": [
            "港产片",
            "黑帮",
            "江湖",
            "宿命"
        ],
        "oneLine": "隐退江湖的昔日大佬发现女儿被混混欺负,他试图用法律解决,却发现对方背后是整个旧日江湖。",
        "url": "./movies/movie-339.html",
        "image": "./39.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "那一个晚上",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "爱情,文艺",
        "tags": [
            "一夜情",
            "命运交错",
            "巴黎夜景"
        ],
        "oneLine": "两个陌生人在巴黎一夜情之后各自归位,三年后却在相亲桌上认出彼此。",
        "url": "./movies/movie-340.html",
        "image": "./40.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "屈伏塔与我",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "剧情/喜剧/家庭",
        "tags": [
            "粉丝",
            "追星",
            "中年危机",
            "温情",
            "公路片"
        ],
        "oneLine": "中年失业大叔决定开着破车横穿美国,只为让病重偶像约翰·屈伏塔见他最后一面。",
        "url": "./movies/movie-341.html",
        "image": "./41.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "鸟语人生",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "剧情,奇幻,传记",
        "tags": [
            "自闭症",
            "观鸟",
            "孤独",
            "天才"
        ],
        "oneLine": "一个只能通过鸟鸣理解世界的自闭症男孩,用一生绘制了英国最后一本手绘鸟类图鉴。",
        "url": "./movies/movie-342.html",
        "image": "./42.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "虎城煞星",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "西部/恐怖/悬疑",
        "tags": [
            "虎人",
            "小镇惊魂",
            "民俗恐怖",
            "身体变异"
        ],
        "oneLine": "西部小镇的警长在追捕土匪时被一只“会说话的虎”咬伤,此后他每个满月都会长出条纹。",
        "url": "./movies/movie-343.html",
        "image": "./43.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "以色列的故事",
        "year": "2021",
        "region": "以色列",
        "type": "电视剧",
        "genre": "历史/剧情",
        "tags": [
            "以色列",
            "建国",
            "家族史",
            "战争",
            "信仰"
        ],
        "oneLine": "一个犹太家族四代人的命运,串起以色列建国七十年的血与泪。",
        "url": "./movies/movie-344.html",
        "image": "./44.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "警察与外星人国语",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧/科幻",
        "tags": [
            "外星来客",
            "乌龙搭档",
            "基层警事"
        ],
        "oneLine": "小镇民警老马遇到一个会讲东北话的失忆外星人,两人组成奇葩搭档破获离奇案件。",
        "url": "./movies/movie-345.html",
        "image": "./45.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "走过路过莫错过",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧、爱情、奇幻",
        "tags": [
            "地摊文学",
            "缘分",
            "超能力"
        ],
        "oneLine": "一个专卖“二手回忆”的地摊摊主,发现自己卖给顾客的记忆,正在现实中批量删除对应的人物。",
        "url": "./movies/movie-346.html",
        "image": "./46.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "战斗!!伊库莎1",
        "year": "1985",
        "region": "日本",
        "type": "OVA",
        "genre": "科幻、机甲、动作、少女",
        "tags": [
            "80年代OVA",
            "肉体改造",
            "变身少女",
            "末世"
        ],
        "oneLine": "被外星人改造身体的少女必须与体内的机械融合才能战斗,但每变身一次,她的人类记忆就会消失一部分。",
        "url": "./movies/movie-347.html",
        "image": "./47.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "非常警事",
        "year": "2012",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "剧情/悬疑/刑侦",
        "tags": [
            "重案组",
            "单元剧",
            "心理侧写",
            "国产刑侦",
            "真实改编"
        ],
        "oneLine": "一支精英重案组,专破那些“不可能犯罪”,每个案件都改编自真实悬案。",
        "url": "./movies/movie-348.html",
        "image": "./48.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "遗传或者同志滚蛋",
        "year": "2029",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,家庭",
        "tags": [
            "同性",
            "家庭冲突",
            "代际",
            "农村",
            "催生"
        ],
        "oneLine": "父亲用“家产必须遗传下去”逼儿子结婚,儿子出柜后,父亲说:“那就让遗传滚蛋。",
        "url": "./movies/movie-349.html",
        "image": "./49.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "大时代2国语",
        "year": "2000",
        "region": "中国香港",
        "type": "剧集",
        "genre": "剧情,商战,家族",
        "tags": [
            "股市",
            "复仇",
            "豪门恩怨",
            "国语配音",
            "经典续作"
        ],
        "oneLine": "二十年后,旧仇人之子带着人工智能杀回股市,丁家遗孤誓要血洗华尔街。",
        "url": "./movies/movie-350.html",
        "image": "./50.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "布塔",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/家庭/西部",
        "tags": [
            "内蒙",
            "孤儿",
            "骆驼",
            "治愈",
            "长镜头"
        ],
        "oneLine": "一个自闭症男孩和一匹被遗弃的“布塔”(母骆驼),在戈壁滩上彼此救赎。",
        "url": "./movies/movie-351.html",
        "image": "./51.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "戈德堡一家第四季",
        "year": "2016",
        "region": "美国",
        "type": "电视剧",
        "genre": "喜剧,家庭",
        "tags": [
            "80年代",
            "怀旧",
            "美式家庭"
        ],
        "oneLine": "80年代的犹太家庭继续鸡飞狗跳,老妈贝弗莉的“窒息式母爱”在第四季再度升级。",
        "url": "./movies/movie-352.html",
        "image": "./52.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "另一半",
        "year": "2021",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情/剧情/奇幻",
        "tags": [
            "灵魂伴侣",
            "平行宇宙",
            "都市爱情",
            "治愈",
            "科幻爱情"
        ],
        "oneLine": "程序员开发出一款能匹配“灵魂另一半”的APP,当他找到完美匹配者时,却发现对方来自平行世界。",
        "url": "./movies/movie-353.html",
        "image": "./53.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "拉斯维加斯见",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "动作犯罪",
        "tags": [
            "赌城",
            "黑帮",
            "复仇",
            "飙车",
            "婚礼"
        ],
        "oneLine": "婚礼当天新娘被掳,前特工新郎必须在24小时内横穿赌城,完成三场以命相搏的赌局。",
        "url": "./movies/movie-354.html",
        "image": "./54.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "魔鬼同意令",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖/心理惊悚",
        "tags": [
            "法律",
            "诅咒",
            "交易"
        ],
        "oneLine": "一名律师帮客户打赢了官司,代价是客户把灵魂转让给了他。",
        "url": "./movies/movie-355.html",
        "image": "./55.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "毫不神圣",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "剧情/惊悚/犯罪",
        "tags": [
            "宗教",
            "悬疑",
            "双女主",
            "连环杀手",
            "反转"
        ],
        "oneLine": "虔诚的修女艾琳与无神论女警探米莉联手,追捕一个模仿《圣经》天启四骑士作案的连环杀手。",
        "url": "./movies/movie-356.html",
        "image": "./56.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "青春珊瑚岛",
        "year": "1980",
        "region": "美国",
        "type": "电影",
        "genre": "冒险/爱情/生存",
        "tags": [
            "荒岛",
            "少年少女",
            "生存",
            "纯真与欲望"
        ],
        "oneLine": "一对少年流落荒岛,从懵懂玩伴到相依为命,最终成为彼此唯一的依靠和爱人。",
        "url": "./movies/movie-357.html",
        "image": "./57.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "瑶池凤舞",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作/奇幻",
        "tags": [
            "女侠",
            "神话改编",
            "港式武侠",
            "特效大片"
        ],
        "oneLine": "西王母侍女瑶姬下凡斩杀恶龙,却发现自己要杀的最后一条龙,是她失散多年的亲生女儿。",
        "url": "./movies/movie-358.html",
        "image": "./58.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "金同学的成绩单",
        "year": "2015",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情悬疑",
        "tags": [
            "教育",
            "升学",
            "暗黑",
            "反转"
        ],
        "oneLine": "全校第一的模范生跳楼自杀,只留下一张全是零分的诡异成绩单,班主任发现其中暗藏凶杀密码。",
        "url": "./movies/movie-359.html",
        "image": "./59.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "流星花园2001",
        "year": "2001",
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "爱情,青春",
        "tags": [
            "校园",
            "偶像剧鼻祖",
            "贫富差距",
            "霸道男主"
        ],
        "oneLine": "穷学生杉菜撞进贵族高中F4的领地,却让最不可一世的道明寺说出“我喜欢你”。",
        "url": "./movies/movie-360.html",
        "image": "./60.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "摩登女郎谋杀案",
        "year": "2023",
        "region": "中国香港",
        "type": "电影",
        "genre": "悬疑,犯罪,黑色幽默",
        "tags": [
            "时尚圈",
            "毒舌女主",
            "连环凶杀",
            "反讽"
        ],
        "oneLine": "一位毒舌时尚杂志编辑一边备战年度盛典,一边发现自己每个竞争对手都以“封面大片”的方式离奇死亡。",
        "url": "./movies/movie-361.html",
        "image": "./61.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "战神联盟",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动作,科幻,冒险",
        "tags": [
            "超级英雄",
            "神话",
            "团队",
            "外星入侵",
            "机甲"
        ],
        "oneLine": "当外星舰队入侵地球时,各国唤醒沉睡在神话中的“战神”基因,七个普通人突然拥有了古代战神的力量。",
        "url": "./movies/movie-362.html",
        "image": "./62.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "东海道四谷怪谈",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "恐怖,古装",
        "tags": [
            "日式怪谈",
            "复仇",
            "凄美",
            "翻拍"
        ],
        "oneLine": "被丈夫背叛并杀害的民女阿岩,尸体顺东海道漂流,每经过一个驿站,就会复活一部分来索命。",
        "url": "./movies/movie-363.html",
        "image": "./63.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "吃货达人打卡吧",
        "year": "2024",
        "region": "中国大陆",
        "type": "综艺/剧集混合",
        "genre": "美食/真人秀/喜剧",
        "tags": [
            "探店",
            "竞赛",
            "金厨",
            "直播",
            "搞笑"
        ],
        "oneLine": "八位“吃货达人”在一座美食之城里通过打卡任务获得奖金,但每天必须淘汰一人,且淘汰者会被取消“味觉”。",
        "url": "./movies/movie-364.html",
        "image": "./64.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "夺宝记",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "动作/冒险/喜剧",
        "tags": [
            "寻宝",
            "冤家路窄",
            "全球探险"
        ],
        "oneLine": "一名破产的考古学家与一个不学无术的网红,根据一张羊皮纸,踏上寻找成吉思汗失落陵墓的搞笑之旅。",
        "url": "./movies/movie-365.html",
        "image": "./65.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "巧克力男孩",
        "year": "2026",
        "region": "法国",
        "type": "电影",
        "genre": "喜剧剧情",
        "tags": [
            "种族",
            "马戏团",
            "友谊",
            "历史改编",
            "悲喜剧"
        ],
        "oneLine": "他是舞台上唯一被允许“吃白女人豆腐”的黑人小丑,台下却连一杯水都不能在白人区喝。",
        "url": "./movies/movie-366.html",
        "image": "./66.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "热血极速",
        "year": "2023",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作,赛车,犯罪",
        "tags": [
            "地下赛车",
            "改装车",
            "复仇",
            "兄弟",
            "港风"
        ],
        "oneLine": "被陷害入狱的顶级车手出狱后,发现弟弟已死,对手已改行开出租。",
        "url": "./movies/movie-367.html",
        "image": "./67.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "亲兄弟",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,家庭",
        "tags": [
            "兄弟",
            "农村",
            "和解"
        ],
        "oneLine": "一对因家产反目成仇的亲兄弟,因为父亲临终前的一盘象棋残局,被迫再次对弈。",
        "url": "./movies/movie-368.html",
        "image": "./68.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "小黄历险记",
        "year": "1996",
        "region": "美国",
        "type": "电影",
        "genre": "家庭,冒险",
        "tags": [
            "动物电影",
            "公路片",
            "宠物情缘"
        ],
        "oneLine": "一只名叫小黄的宠物鸭被野鸭群拐走,主人小胖独自骑车千里寻鸭。",
        "url": "./movies/movie-369.html",
        "image": "./69.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "永远强壮",
        "year": "2020",
        "region": "美国",
        "type": "电影",
        "genre": "剧情,运动,家庭",
        "tags": [
            "健身",
            "父子",
            "阿尔茨海默症",
            "举重",
            "传承"
        ],
        "oneLine": "一位患阿尔茨海默症的前健美冠军,与颓废的儿子通过最后一次举重训练找回尊严。",
        "url": "./movies/movie-370.html",
        "image": "./70.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "51号兵站2007",
        "year": "2007",
        "region": "中国大陆",
        "type": "电影",
        "genre": "战争,谍战,动作",
        "tags": [
            "潜伏",
            "仓库",
            "牺牲"
        ],
        "oneLine": "1943年上海,日军严密监控下的“51号兵站”突发泄密,潜伏的地下党员只剩六小时转移八十吨军火。",
        "url": "./movies/movie-371.html",
        "image": "./71.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "毒镇",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/犯罪/悬疑",
        "tags": [
            "环保",
            "重金属污染",
            "农村犯罪",
            "记者调查",
            "官商勾结"
        ],
        "oneLine": "一名记者深入癌症村调查,发现村民的饮用水背后藏着一个惊天的矿渣倾倒黑产链。",
        "url": "./movies/movie-372.html",
        "image": "./72.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "赢得美人",
        "year": "1989",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧/爱情/竞技",
        "tags": [
            "80年代",
            "橄榄球",
            "赌注",
            "校园"
        ],
        "oneLine": "校园最弱的书呆子与校队四分卫打赌:谁能先让冰山校花真的笑出来。",
        "url": "./movies/movie-373.html",
        "image": "./73.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "不可告人",
        "year": "2006",
        "region": "中国香港",
        "type": "电影",
        "genre": "悬疑/犯罪/惊悚",
        "tags": [
            "罗生门式叙事",
            "心理博弈",
            "局中局",
            "无间道"
        ],
        "oneLine": "一具雨夜尸体引出四个版本的说辞,谁在说谎,谁才是真正的猎物?",
        "url": "./movies/movie-374.html",
        "image": "./74.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "幕后枭雄第二季",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "政治/惊悚/剧情",
        "tags": [
            "白宫",
            "幕僚长",
            "权力游戏",
            "暗箱操作"
        ],
        "oneLine": "新任女总统的道德底线,与白宫幕僚长的“结果至上”原则产生致命冲突,一场白宫内部的无声政变悄然展开。",
        "url": "./movies/movie-375.html",
        "image": "./75.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "暗夜女妖–夜笛",
        "year": "2005",
        "region": "日本",
        "type": "电影",
        "genre": "恐怖/民俗",
        "tags": [
            "都市传说",
            "笛声",
            "诅咒",
            "山村"
        ],
        "oneLine": "深夜山里传来笛声,听见的人会在第七天夜里,用自己的骨头做成笛子。",
        "url": "./movies/movie-376.html",
        "image": "./76.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "别碰我心底的小柔软",
        "year": "2020",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "青春、爱情、校园",
        "tags": [
            "青梅竹马",
            "成长治愈",
            "高甜宠溺"
        ],
        "oneLine": "学霸与转校生因共用课桌产生摩擦,却在纸条传情中互换心底最柔软的秘密。",
        "url": "./movies/movie-377.html",
        "image": "./77.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "警察与女兵国语",
        "year": "2025",
        "region": "法国/中国大陆",
        "type": "电影",
        "genre": "喜剧,动作",
        "tags": [
            "合拍片",
            "乌龙搭档",
            "女权",
            "笑料"
        ],
        "oneLine": "一个老派法国警察,被迫与一支中国女子特警队合作抓贼,语言不通笑料百出。",
        "url": "./movies/movie-378.html",
        "image": "./78.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "迷失真相",
        "year": "2024",
        "region": "韩国",
        "type": "剧集",
        "genre": "悬疑/犯罪/惊悚",
        "tags": [
            "记者查案",
            "记忆篡改",
            "媒体黑幕",
            "限时追凶"
        ],
        "oneLine": "一名调查记者发现一起旧案的真相,但每隔 12 小时她就会忘记一切。",
        "url": "./movies/movie-379.html",
        "image": "./79.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "秦时明月",
        "year": "2025",
        "region": "中国",
        "type": "动画剧集",
        "genre": "历史,武侠,奇幻",
        "tags": [
            "秦朝",
            "诸子百家",
            "剑客",
            "机关术"
        ],
        "oneLine": "秦灭六国后,一个普通少年被卷入墨家与嬴政之间的千年机密,发现月亮上藏着另一个帝国。",
        "url": "./movies/movie-380.html",
        "image": "./80.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "越狱第三季",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "动作悬疑",
        "tags": [
            "越狱",
            "也门",
            "极端组织",
            "小队重聚"
        ],
        "oneLine": "迈克尔在也门监狱醒来,发现这次要越的不只是一堵墙,而是一座被极端组织控制的战区城市。",
        "url": "./movies/movie-381.html",
        "image": "./81.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "亲爱的药王大人",
        "year": "2020",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装,奇幻,爱情",
        "tags": [
            "药王",
            "穿书",
            "中医",
            "甜宠"
        ],
        "oneLine": "女中医穿进自己写的烂尾小说里,成了恶毒女配,还要救活被她写死的药王大人。",
        "url": "./movies/movie-382.html",
        "image": "./82.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "亚利桑那州的马洪尼",
        "year": "2016",
        "region": "美国",
        "type": "电影",
        "genre": "剧情/西部/同性",
        "tags": [
            "牛仔",
            "自我认同",
            "荒漠",
            "禁忌之恋"
        ],
        "oneLine": "亚利桑那荒漠中,一个沉默的牛仔爱上了牧场主的儿子,而对方即将迎娶未婚妻。",
        "url": "./movies/movie-383.html",
        "image": "./83.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "狩猎狗(电影)",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "动作战争",
        "tags": [
            "雇佣兵",
            "丛林",
            "硬核",
            "反战"
        ],
        "oneLine": "一支六人雇佣兵小队深入南美丛林抓捕大毒枭,却发现自己成了猎物,而猎人是当地部落祭祀的“神犬”。",
        "url": "./movies/movie-384.html",
        "image": "./84.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "痴呆的真相",
        "year": "2024",
        "region": "英国",
        "type": "剧集",
        "genre": "悬疑/心理",
        "tags": [
            "阿尔茨海默",
            "时间循环",
            "公寓楼",
            "遗嘱",
            "不可靠叙述"
        ],
        "oneLine": "一位患有重度阿尔茨海默症的老人在养老院里反复念叨同一串数字,而那竟是二十年前一宗悬案的坐标。",
        "url": "./movies/movie-385.html",
        "image": "./85.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "枕男子",
        "year": "2025",
        "region": "日本",
        "type": "剧集",
        "genre": "悬疑,爱情",
        "tags": [
            "同枕",
            "都市传说",
            "人格分裂"
        ],
        "oneLine": "每晚与她同床共枕的温柔男友,竟是都市传说中的连环杀手。",
        "url": "./movies/movie-386.html",
        "image": "./86.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "律政英雄特别版",
        "year": "2025",
        "region": "日本",
        "type": "特别篇",
        "genre": "剧情、律政",
        "tags": [
            "检察官",
            "职场",
            "正义",
            "特别篇",
            "木村接班人"
        ],
        "oneLine": "东京地检的“问题儿童”检察官久利生公平退休后,他的前事务官接手了一个涉及检察官内部腐败的惊天大案。",
        "url": "./movies/movie-387.html",
        "image": "./87.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "雕刻时光",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/奇幻",
        "tags": [
            "时间回溯",
            "木雕匠人",
            "温情治愈"
        ],
        "oneLine": "一位木雕匠人发现自己的刻刀能回溯时间,却因此被困在了妻子离世的前一天。",
        "url": "./movies/movie-388.html",
        "image": "./88.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "海边电影院",
        "year": "2020",
        "region": "日本",
        "type": "电影",
        "genre": "剧情/奇幻",
        "tags": [
            "迷影情结",
            "穿越",
            "反战"
        ],
        "oneLine": "三个青年在海边废弃影院看战争片,银幕里的士兵朝他们开枪。",
        "url": "./movies/movie-389.html",
        "image": "./89.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "由内而外",
        "year": "2020",
        "region": "法国,德国",
        "type": "电影",
        "genre": "科幻,悬疑",
        "tags": [
            "记忆",
            "脑科学",
            "诊所",
            "反转",
            "伦理"
        ],
        "oneLine": "女子走进一家宣称“消除痛苦记忆”的诊所,醒来后发现自己的脸变成了最恨的人。",
        "url": "./movies/movie-390.html",
        "image": "./90.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "中国营长",
        "year": "2021",
        "region": "中国大陆",
        "type": "电影",
        "genre": "战争,历史,动作",
        "tags": [
            "抗日",
            "阵地战",
            "真实改编",
            "铁血",
            "营级战术"
        ],
        "oneLine": "淞沪会战最后时刻,营长姚子青率全营五百壮士死守宝山城七天七夜。",
        "url": "./movies/movie-391.html",
        "image": "./91.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "残酷的复仇",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动作,惊悚,犯罪",
        "tags": [
            "复仇",
            "硬核动作",
            "血腥",
            "反转"
        ],
        "oneLine": "退休杀手平静生活被打破,他发现追杀自己的人竟是曾经的“亲生女儿”。",
        "url": "./movies/movie-392.html",
        "image": "./92.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "婚礼中的枪声",
        "year": "2025",
        "region": "意大利",
        "type": "电影",
        "genre": "犯罪/黑色幽默",
        "tags": [
            "黑帮婚礼",
            "多线叙事",
            "乌龙刺杀"
        ],
        "oneLine": "婚礼上突然响起枪声,宾客们发现在场至少五个人各自带了枪,但没人知道谁开的火。",
        "url": "./movies/movie-393.html",
        "image": "./93.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "夏目友人帐第七季",
        "year": "2025",
        "region": "日本",
        "type": "动画剧集",
        "genre": "动画,奇幻,治愈",
        "tags": [
            "夏目",
            "猫咪老师",
            "妖怪",
            "温情",
            "完结篇"
        ],
        "oneLine": "夏目贵志终于决定将友人帐归还祖母,却在最后一页发现自己名字被写了上去。",
        "url": "./movies/movie-394.html",
        "image": "./94.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "峰回路转",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "悬疑,家庭",
        "tags": [
            "回忆",
            "创伤",
            "救赎",
            "非线性",
            "社会事件"
        ],
        "oneLine": "一个失忆的男人被指认为二十年前绑架案的元凶,但警方在受害者家中找到了他在现场拍摄的家庭录像。",
        "url": "./movies/movie-395.html",
        "image": "./95.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "关于恶魔的一切",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖/民俗/记录",
        "tags": [
            "伪纪录片",
            "驱魔",
            "恶魔学",
            "反转",
            "录音带"
        ],
        "oneLine": "播客团队考古四十年驱魔录音,发现恶魔每次附身,都在警告同一起核灾难。",
        "url": "./movies/movie-396.html",
        "image": "./96.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "再见,宇宙战舰大和号",
        "year": "2026",
        "region": "日本",
        "type": "动画电影",
        "genre": "科幻/战争",
        "tags": [
            "太空歌剧",
            "谢幕作",
            "经典重启"
        ],
        "oneLine": "大和号最后一次启航,船员们发现所谓的外星威胁只是地球政府制造的骗局。",
        "url": "./movies/movie-397.html",
        "image": "./97.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "暴动",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "犯罪/动作/惊悚",
        "tags": [
            "监狱暴动",
            "直播",
            "社会不公",
            "全封闭",
            "人性试验"
        ],
        "oneLine": "一场监狱暴动被囚犯全程直播,全国民众都看到了狱警虐待囚犯的真相,但特种部队已经包围了监狱。",
        "url": "./movies/movie-398.html",
        "image": "./98.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "为我谱上乐章",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "音乐/剧情",
        "tags": [
            "抑郁症",
            "古典乐",
            "治愈"
        ],
        "oneLine": "抑郁的天才小提琴家遇见了只能哼出旋律的失语症女孩,她成了他最后的乐谱。",
        "url": "./movies/movie-399.html",
        "image": "./99.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "茶馆",
        "year": "1982",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,历史",
        "tags": [
            "老舍",
            "时代变迁",
            "小人物",
            "悲剧"
        ],
        "oneLine": "北京一座老茶馆见证了三代人的悲欢离合,从清末到民国,好人为何总没好报?",
        "url": "./movies/movie-400.html",
        "image": "./100.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "太空牛仔",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "科幻,西部,冒险",
        "tags": [
            "太空歌剧",
            "赏金猎人",
            "宇宙边疆",
            "赛博朋克西部"
        ],
        "oneLine": "一个退休的宇宙赏金猎人带着他的人工智能马,在小行星带上追捕最后一个生化人逃犯。",
        "url": "./movies/movie-401.html",
        "image": "./101.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "霹雳上校",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "动作,喜剧",
        "tags": [
            "退休特工",
            "高科技",
            "反差萌",
            "养老院"
        ],
        "oneLine": "一位退休的传奇特工住进高端养老院,却发现这里竟是犯罪集团的洗钱中心。",
        "url": "./movies/movie-402.html",
        "image": "./102.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "高杆",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作,运动",
        "tags": [
            "台球",
            "复仇",
            "逆袭"
        ],
        "oneLine": "昔日台球神童沦为赌球跑腿,为救断指的父亲,重拾球杆挑战旧日宿敌。",
        "url": "./movies/movie-403.html",
        "image": "./103.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "我老死苏怡",
        "year": "2024",
        "region": "中国大陆",
        "type": "微短剧",
        "genre": "爱情,奇幻,都市",
        "tags": [
            "重生",
            "替身",
            "打脸爽剧"
        ],
        "oneLine": "被当成白月光替身虐待三年后,苏怡死前听到霸总说“你连她一根头发都不如”,然后她重生了。",
        "url": "./movies/movie-404.html",
        "image": "./104.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "狩猎场",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "悬疑/惊悚",
        "tags": [
            "精英",
            "猎杀游戏",
            "暗网",
            "生存",
            "反转"
        ],
        "oneLine": "十二个社会精英被骗到一座私人庄园,醒来发现自己是猎物,而猎人是一群他们曾经欺负过的普通人。",
        "url": "./movies/movie-405.html",
        "image": "./105.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "盲兽",
        "year": "1969",
        "region": "日本",
        "type": "电影",
        "genre": "剧情/恐怖/惊悚",
        "tags": [
            "江户川乱步",
            "改编",
            "猎奇",
            "艺术与疯癫"
        ],
        "oneLine": "一个失明的雕塑家绑架了美丽的模特,将她囚禁在地下室中,试图用双手触摸并复刻出“完美的肉体”。",
        "url": "./movies/movie-406.html",
        "image": "./106.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "那年那兔那些事第五季",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "动画,历史",
        "tags": [
            "种花家",
            "励志",
            "近代史"
        ],
        "oneLine": "种花家的兔子们在新世纪面对技术封锁与挑战,继续用热血与智慧建设家园。",
        "url": "./movies/movie-407.html",
        "image": "./107.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "谁是老爸",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧/悬疑",
        "tags": [
            "DNA乌龙",
            "寻父之旅",
            "三选一",
            "公路喜剧",
            "身份错位"
        ],
        "oneLine": "一个女孩通过DNA测试发现自己有三个“生物学父亲”,她拉着三位大叔踏上公路之旅,谁才是真正的老爸?",
        "url": "./movies/movie-408.html",
        "image": "./108.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "奥古斯丁的激情",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "剧情,传记,历史",
        "tags": [
            "哲学家",
            "宗教",
            "情欲与神学"
        ],
        "oneLine": "青年奥古斯丁在情欲与信仰间挣扎,最终在北非的海边听见上帝的声音。",
        "url": "./movies/movie-409.html",
        "image": "./109.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "奇门遁甲",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "奇幻,动作,武侠",
        "tags": [
            "法术",
            "天干地支",
            "悬疑",
            "特效大片"
        ],
        "oneLine": "2025年,代表神秘组织“奇门”的最后传人,必须用失传的五行遁术,阻止一场由AI算法预测并操控的连环命案。",
        "url": "./movies/movie-410.html",
        "image": "./110.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "灵能百分百第一季",
        "year": "2024",
        "region": "日本",
        "type": "剧集",
        "genre": "动画/超能力",
        "tags": [
            "青春成长",
            "灵能",
            "搞笑战斗",
            "心理疗愈"
        ],
        "oneLine": "龙套拥有毁天灭地的超能力,却觉得真正可怕的是青春期的人心。",
        "url": "./movies/movie-411.html",
        "image": "./111.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "人间猛兽",
        "year": "2020",
        "region": "韩国",
        "type": "电影",
        "genre": "动作、犯罪、惊悚",
        "tags": [
            "黑吃黑",
            "复仇",
            "格斗",
            "地下世界"
        ],
        "oneLine": "聋哑拳手为给妹妹复仇,打进器官贩卖集团内部,却发现自己要杀的人竟是亲生父亲。",
        "url": "./movies/movie-412.html",
        "image": "./112.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "30年的人生",
        "year": "2026",
        "region": "韩国",
        "type": "剧集",
        "genre": "剧情/奇幻",
        "tags": [
            "时间跳跃",
            "友情",
            "救赎"
        ],
        "oneLine": "七个高中死党喝下神秘药水后,每睡一觉就会跳跃到几个月后,他们要花30年才能回到正常时间线。",
        "url": "./movies/movie-413.html",
        "image": "./113.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "服从2018",
        "year": "2018",
        "region": "美国",
        "type": "电影",
        "genre": "剧情犯罪",
        "tags": [
            "职场霸凌",
            "心理操控",
            "真人真事改编",
            "人性实验"
        ],
        "oneLine": "一个冒充警察的电话,让快餐店经理命令女员工对一名无辜店员进行羞辱性搜身,而所有人都选择了服从。",
        "url": "./movies/movie-414.html",
        "image": "./114.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "梅格雷的亡者",
        "year": "2024",
        "region": "法国,比利时",
        "type": "电影",
        "genre": "悬疑,犯罪,剧情",
        "tags": [
            "侦探片",
            "法式 noir",
            "连环杀人",
            "心理博弈",
            "慢热"
        ],
        "oneLine": "退休前的最后一周,梅格雷收到一封盖着死亡印章的匿名信,信里只有一张他自己的遗像。",
        "url": "./movies/movie-415.html",
        "image": "./115.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "你好!兄弟",
        "year": "2024",
        "region": "中国",
        "type": "剧集",
        "genre": "喜剧,家庭",
        "tags": [
            "互换身份",
            "双胞胎",
            "错位人生",
            "爆笑"
        ],
        "oneLine": "一对失散二十年的双胞胎意外互换人生,学霸变厨神,保安变总裁。",
        "url": "./movies/movie-416.html",
        "image": "./116.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "我的朋友圈",
        "year": "2025",
        "region": "中国",
        "type": "电视剧",
        "genre": "剧情,悬疑",
        "tags": [
            "社交媒体",
            "人性",
            "反转",
            "单元剧"
        ],
        "oneLine": "每一条朋友圈都是一个犯罪现场,本剧通过六个关于“朋友圈”的独立故事,揭开现代社交网络背后的阴暗人性。",
        "url": "./movies/movie-417.html",
        "image": "./117.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "想唱就唱2013",
        "year": "2013",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,音乐",
        "tags": [
            "选秀",
            "十年前",
            "素人",
            "梦想",
            "怀旧"
        ],
        "oneLine": "一张十年前的选秀报名表,让三个被生活磨平棱角的中年人,决定组团去北京找回那个未做完的梦。",
        "url": "./movies/movie-418.html",
        "image": "./118.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "狂热",
        "year": "2022",
        "region": "西班牙",
        "type": "电影",
        "genre": "惊悚,悬疑,心理",
        "tags": [
            "直播",
            "邪教",
            "密室逃脱",
            "社交媒体",
            "信息茧房"
        ],
        "oneLine": "六个主播参加一档“废弃精神病院极限生存”直播,奖金一百万欧元,但她们很快发现直播间里的观众才是真正的囚徒。",
        "url": "./movies/movie-419.html",
        "image": "./119.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "林投记",
        "year": "2023",
        "region": "中国台湾",
        "type": "电影",
        "genre": "恐怖/剧情",
        "tags": [
            "台湾民俗",
            "林投姐",
            "女鬼",
            "乡野奇谈",
            "女性悲歌"
        ],
        "oneLine": "清末台湾林投树下上吊的女鬼重归现代都市,但她要的不是复仇,而是讨回一个名字。",
        "url": "./movies/movie-420.html",
        "image": "./120.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "圣方济传",
        "year": "2020",
        "region": "意大利/梵蒂冈",
        "type": "电影",
        "genre": "传记/历史/宗教",
        "tags": [
            "圣人传记",
            "中世纪",
            "贫穷与富足",
            "信仰的力量"
        ],
        "oneLine": "富商之子方济各抛弃一切,赤脚走向废墟,他听到的不是上帝的声音,而是狼、麻风病人和一片废墟在向他求救。",
        "url": "./movies/movie-421.html",
        "image": "./121.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "流芳百世",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/历史",
        "tags": [
            "家族",
            "传承",
            "匠人"
        ],
        "oneLine": "一个百年制香世家,最后一代传人是个只想当网红卖香水的叛逆青年。",
        "url": "./movies/movie-422.html",
        "image": "./122.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "残宵留得梦依稀",
        "year": "1989",
        "region": "香港",
        "type": "电影",
        "genre": "剧情,爱情,文艺",
        "tags": [
            "王家卫风格",
            "民国",
            "遗憾"
        ],
        "oneLine": "战乱分离前的一夜,她给了他一块怀表;四十年后,表还在走,人却已陌生。",
        "url": "./movies/movie-423.html",
        "image": "./123.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "欲海杀人王",
        "year": "1994",
        "region": "中国香港",
        "type": "电影",
        "genre": "犯罪/惊悚",
        "tags": [
            "奇案",
            "情色",
            "Cult",
            "任达华"
        ],
        "oneLine": "一个风流成性的保险经纪,为了骗保和玩弄女性,设计了一连串看似意外的完美谋杀。",
        "url": "./movies/movie-424.html",
        "image": "./124.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "神烦警探第二季",
        "year": "2014",
        "region": "美国",
        "type": "电视剧",
        "genre": "喜剧/犯罪",
        "tags": [
            "搞笑",
            "警局",
            "群像",
            "沙雕"
        ],
        "oneLine": "布鲁克林99分局的天才警探们继续用最离谱的方式破最正经的案子。",
        "url": "./movies/movie-425.html",
        "image": "./125.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "鹰狼突击队",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作,战争",
        "tags": [
            "特种兵",
            "反恐",
            "兄弟情",
            "硬核"
        ],
        "oneLine": "一支神秘的华人雇佣兵小队,在非洲执行撤侨任务时,意外发现敌人手中竟有中国失窃的尖端武器。",
        "url": "./movies/movie-426.html",
        "image": "./126.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "家族的诞生",
        "year": "2025",
        "region": "韩国",
        "type": "剧集",
        "genre": "剧情,家庭,悬疑",
        "tags": [
            "重组家庭",
            "暗黑秘密",
            "财阀",
            "遗产"
        ],
        "oneLine": "一个看似和睦的财阀大家族,为了争夺百亿遗产而齐聚一堂,却意外触发了尘封二十年的杀人案真相。",
        "url": "./movies/movie-427.html",
        "image": "./127.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "电竞英雄",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "青春/竞技/剧情",
        "tags": [
            "电竞",
            "逆袭",
            "战队",
            "手伤",
            "兄弟情"
        ],
        "oneLine": "昔日电竞天才因手伤沦为网吧保洁,却意外发现战队新星竟是用自己账号代打的“替身”。",
        "url": "./movies/movie-428.html",
        "image": "./128.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "惊恐死神",
        "year": "2024",
        "region": "西班牙",
        "type": "电影",
        "genre": "恐怖/奇幻",
        "tags": [
            "都市传说",
            "死神实体化",
            "心理恐惧",
            "规则怪谈",
            "黑暗奇幻"
        ],
        "oneLine": "一个能看见“死神倒计时”的抑郁症女孩,发现每救一个人,自己的死亡时间就会提前一天。",
        "url": "./movies/movie-429.html",
        "image": "./129.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "欢乐喜剧人第一季",
        "year": "2021",
        "region": "中国大陆",
        "type": "综艺",
        "genre": "喜剧,真人秀",
        "tags": [
            "竞演",
            "相声小品",
            "笑匠齐聚",
            "神仙打架"
        ],
        "oneLine": "十二组顶尖喜剧人同台竞演,每周一期,末位淘汰,谁才是真正的“喜剧之王”?",
        "url": "./movies/movie-430.html",
        "image": "./130.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "喜欢你",
        "year": "2024",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "爱情/青春",
        "tags": [
            "双向暗恋",
            "校园",
            "清新",
            "群像"
        ],
        "oneLine": "全校都知道他喜欢她,她也喜欢他,但两人偏偏因为“最了解对方的损友”身份,谁都不敢先开口。",
        "url": "./movies/movie-431.html",
        "image": "./131.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "彩香最爱弘子前辈",
        "year": "2024",
        "region": "日本",
        "type": "剧集",
        "genre": "喜剧/爱情/同性",
        "tags": [
            "职场",
            "年上",
            "暗恋",
            "办公室恋情"
        ],
        "oneLine": "职场新人彩香疯狂崇拜能干的前辈弘子,但她不知道弘子的“完美”全是靠每天喝她的咖啡续命。",
        "url": "./movies/movie-432.html",
        "image": "./132.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "野恋",
        "year": "2025",
        "region": "巴西",
        "type": "剧集",
        "genre": "爱情/剧情",
        "tags": [
            "荒野",
            "禁忌之恋",
            "家庭"
        ],
        "oneLine": "为了守住家族牧场,年轻的寡妇爱上了未婚夫的弟弟,而哥哥的鬼魂始终站在他们之间。",
        "url": "./movies/movie-433.html",
        "image": "./133.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "永远超级幸福",
        "year": "2021",
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情,奇幻",
        "tags": [
            "时间循环",
            "便利店",
            "小确幸",
            "治愈"
        ],
        "oneLine": "一个认为“幸福不可能”的便利店夜班店员,被困在了暗恋对象来买关东煮的那个夜晚。",
        "url": "./movies/movie-434.html",
        "image": "./134.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "真情不眠",
        "year": "2024",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "家庭/剧情",
        "tags": [
            "失眠",
            "家庭",
            "和解",
            "深夜"
        ],
        "oneLine": "一家失眠诊所里,五个失眠的人在深夜轮流讲述自己为什么睡不着,然后发现彼此的故事重叠了。",
        "url": "./movies/movie-435.html",
        "image": "./135.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "蝎子王5灵魂之书",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动作,奇幻,冒险",
        "tags": [
            "古埃及",
            "神秘典籍",
            "复活仪式",
            "沙漠追逐",
            "宿命对决"
        ],
        "oneLine": "一名被诅咒的蝎子王为拯救族人,必须闯入冥界夺回失落的《灵魂之书》。",
        "url": "./movies/movie-436.html",
        "image": "./136.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "尘封的记忆",
        "year": "2026",
        "region": "日本",
        "type": "电影",
        "genre": "悬疑/奇幻",
        "tags": [
            "记忆删除",
            "阿尔茨海默",
            "亲情",
            "推理"
        ],
        "oneLine": "患阿尔茨海默症的老人声称自己目击了谋杀,但由于他的记忆正在被大脑删除,警察只能在他忘记前破案。",
        "url": "./movies/movie-437.html",
        "image": "./137.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "桂宝之爆笑闯宇宙",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动画,喜剧,科幻",
        "tags": [
            "桂宝",
            "搞笑",
            "外星人",
            "合家欢"
        ],
        "oneLine": "天才发明家桂宝意外连接上了宇宙外卖网络,导致地球成了全宇宙差评最多的“黑暗料理星”。",
        "url": "./movies/movie-438.html",
        "image": "./138.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "黑执事:豪华客船篇",
        "year": "2017",
        "region": "日本",
        "type": "动画电影",
        "genre": "奇幻,悬疑,动作",
        "tags": [
            "豪华客船",
            "丧尸",
            "主仆",
            "哥特"
        ],
        "oneLine": "贵族少爷与恶魔执事登上不归客船,船上所有人已变成丧尸,真正的怪物却在暗中操控一切。",
        "url": "./movies/movie-439.html",
        "image": "./139.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "妈妈劫",
        "year": "2022",
        "region": "韩国",
        "type": "电影",
        "genre": "惊悚",
        "tags": [
            "母爱",
            "犯罪",
            "复仇",
            "反转",
            "虐心"
        ],
        "oneLine": "女儿被绑架,单亲妈妈独自闯入黑帮老巢,却发现绑匪是自己的亲生父亲。",
        "url": "./movies/movie-440.html",
        "image": "./140.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "你的天空",
        "year": "2025",
        "region": "泰国",
        "type": "剧集",
        "genre": "爱情/青春",
        "tags": [
            "校园",
            "双向暗恋",
            "天空"
        ],
        "oneLine": "患有恐高症的男主加入天文社,只为接近那个每晚在天台观星的女孩。",
        "url": "./movies/movie-441.html",
        "image": "./141.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "我们曾是孩子",
        "year": "2018",
        "region": "英国",
        "type": "电影",
        "genre": "剧情,战争,历史",
        "tags": [
            "二战",
            "儿童",
            "逃亡",
            "友谊",
            "残酷"
        ],
        "oneLine": "两个犹太男孩在被纳粹占领的华沙,用孩子的游戏对抗成人世界的杀戮。",
        "url": "./movies/movie-442.html",
        "image": "./142.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "天使的收音机",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情,悬疑,奇幻",
        "tags": [
            "亲情救赎",
            "怀旧",
            "灵异电台",
            "罪与罚"
        ],
        "oneLine": "一个过气的深夜电台主播,在节目停播前最后一晚,接到了一个自称来自1999年地震废墟中的小女孩的求救电话。",
        "url": "./movies/movie-443.html",
        "image": "./143.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "恶魔们2023",
        "year": "2023",
        "region": "韩国",
        "type": "剧集",
        "genre": "恐怖/犯罪/悬疑",
        "tags": [
            "驱魔",
            "刑侦",
            "双男主",
            "邪教",
            "高能反转"
        ],
        "oneLine": "一个不信鬼神的刑警,被迫与一个被恶魔附身、只能在梦中破案的罪犯合作,追踪一个模仿《圣经》七宗罪连环杀人的恶魔。",
        "url": "./movies/movie-444.html",
        "image": "./144.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "玩命三姐妹",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "动作,喜剧,犯罪",
        "tags": [
            "女性动作",
            "乌龙事件",
            "姐妹情"
        ],
        "oneLine": "三个生活一团糟的亲姐妹,因意外卷入黑帮洗钱案,被迫化身“最不专业”的杀手来保护彼此。",
        "url": "./movies/movie-445.html",
        "image": "./145.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "熊出没之熊心归来",
        "year": "2025",
        "region": "中国大陆",
        "type": "动画电影",
        "genre": "喜剧/冒险",
        "tags": [
            "熊强组合",
            "环保",
            "友情"
        ],
        "oneLine": "光头强变身动物保护志愿者,却成了熊大熊二的“头号公敌”。",
        "url": "./movies/movie-446.html",
        "image": "./146.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "探险活宝第二季",
        "year": "2011",
        "region": "美国",
        "type": "动画",
        "genre": "喜剧/动画/冒险/奇幻",
        "tags": [
            "脑洞",
            "治愈",
            "冒险",
            "奇幻",
            "经典"
        ],
        "oneLine": "芬恩与杰克继续在哇塞秘境冒险,这次他们要面对的是企图将整个世界变成音乐的“音魔”以及失落的“AI之母”。",
        "url": "./movies/movie-447.html",
        "image": "./147.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "世界属于你",
        "year": "2024",
        "region": "意大利",
        "type": "电影",
        "genre": "剧情,喜剧",
        "tags": [
            "黑帮喜剧",
            "废物逆袭",
            "家族恩怨",
            "意式幽默"
        ],
        "oneLine": "黑手党老大最废物的儿子在父亲被暗杀后,靠一本《高效能人士的七个习惯》接管了整个家族生意。",
        "url": "./movies/movie-448.html",
        "image": "./148.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "铁鹰行动",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作,犯罪,警匪",
        "tags": [
            "硬汉",
            "卧底",
            "边境",
            "枪战",
            "复仇"
        ],
        "oneLine": "边境城市毒品泛滥,一名伪装成货车司机的铁血警察,单枪匹马搅乱了整个跨国贩毒网。",
        "url": "./movies/movie-449.html",
        "image": "./149.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "浪人47",
        "year": "2013",
        "region": "美国/日本",
        "type": "电影",
        "genre": "动作/奇幻/古装",
        "tags": [
            "武士",
            "妖怪",
            "复仇"
        ],
        "oneLine": "被流放的赤穗藩武士联合混血浪人与天狗,闯入魔法城堡对抗幕府的妖狐化身。",
        "url": "./movies/movie-450.html",
        "image": "./150.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "铁幕下的童年",
        "year": "2025",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "剧情,历史",
        "tags": [
            "冷战",
            "童年回忆",
            "苏联",
            "政治"
        ],
        "oneLine": "80年代苏联小镇,两个少年为了看一本西方的漫画书,展开了一场冒险。",
        "url": "./movies/movie-451.html",
        "image": "./1.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "哦,我的宠妃大人",
        "year": "2023",
        "region": "中国大陆",
        "type": "网剧",
        "genre": "古装爱情喜剧",
        "tags": [
            "穿越",
            "甜宠",
            "宫斗",
            "逆袭",
            "搞笑"
        ],
        "oneLine": "现代女总裁穿越成废柴宠妃,用职场管理术把皇帝和后宫都变成了她的打工人。",
        "url": "./movies/movie-452.html",
        "image": "./2.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "悲兮魔兽",
        "year": "2027",
        "region": "中国香港",
        "type": "电影",
        "genre": "奇幻/灾难",
        "tags": [
            "末日",
            "魔兽",
            "环保",
            "悲壮",
            "神话"
        ],
        "oneLine": "工业污染催生出的巨型魔兽肆虐城市,一位癌症父亲踏上了悲壮的弑神之路。",
        "url": "./movies/movie-453.html",
        "image": "./3.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "细思极恐",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "悬疑/惊悚",
        "tags": [
            "反转",
            "心理恐怖",
            "日常诡异",
            "开放式结局"
        ],
        "oneLine": "妻子每晚都会在凌晨三点去地下室,而监控画面里,她的影子总比她慢半秒。",
        "url": "./movies/movie-454.html",
        "image": "./4.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "冒牌刺客",
        "year": "2026",
        "region": "韩国",
        "type": "电影",
        "genre": "动作、喜剧、犯罪",
        "tags": [
            "乌龙杀手",
            "身份互换",
            "青瓦台阴谋",
            "黑吃黑",
            "搞笑动作"
        ],
        "oneLine": "一个十八线龙套演员被误认成顶级杀手去执行刺杀任务,到了现场才发现目标竟然是正在“微服私访”的自己。",
        "url": "./movies/movie-455.html",
        "image": "./5.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "再次相遇的世界",
        "year": "2025",
        "region": "韩国",
        "type": "电视剧",
        "genre": "奇幻,爱情,悬疑",
        "tags": [
            "平行世界",
            "初恋",
            "失踪",
            "蝴蝶效应"
        ],
        "oneLine": "相隔十二年后,她在一场海啸中失踪的初恋男友突然出现在她面前,但全世界只有她能看见他。",
        "url": "./movies/movie-456.html",
        "image": "./6.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "王爷你好贱 动态漫第一季",
        "year": "2025",
        "region": "中国",
        "type": "剧集",
        "genre": "喜剧,古装,动画",
        "tags": [
            "穿越",
            "搞笑",
            "职场",
            "反套路",
            "泡面番"
        ],
        "oneLine": "现代HR总监穿越成病弱王爷,用绩效考核和OKR管理整个王朝的后宫与朝堂。",
        "url": "./movies/movie-457.html",
        "image": "./7.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "魔偶奇偶8:遗产",
        "year": "2003",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖/奇幻",
        "tags": [
            "邪典",
            "木偶",
            "血腥",
            "系列续作",
            "超自然"
        ],
        "oneLine": "操控活人木偶的神秘遗物“遗产之盒”被打开,历代被诅咒的木偶师灵魂同时复活,互相残杀。",
        "url": "./movies/movie-458.html",
        "image": "./8.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "外太空来的黑鬼「同志」",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "科幻/喜剧/政治讽刺",
        "tags": [
            "荒诞",
            "种族议题",
            "外星人",
            "政治正确",
            "讽刺"
        ],
        "oneLine": "一个来自外星的黑色人形生物降临美国,为了融入社会,他自称“同志”,由此引发了一场荒诞的政治狂欢。",
        "url": "./movies/movie-459.html",
        "image": "./9.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "史酷比:僵尸岛历险记",
        "year": "2024",
        "region": "美国",
        "type": "动画电影",
        "genre": "喜剧/悬疑/冒险",
        "tags": [
            "狗",
            "解谜",
            "丧尸",
            "恶搞",
            "合家欢"
        ],
        "oneLine": "神秘公司收到无人岛求救信号,上岛后发现居民全是爱吃辣椒酱的“丧尸”。",
        "url": "./movies/movie-460.html",
        "image": "./10.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "目击风暴",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑/犯罪/剧情",
        "tags": [
            "盲人",
            "证人",
            "复仇",
            "反转",
            "烧脑"
        ],
        "oneLine": "一位盲人在一场特大台风夜录下了一段谋杀录音,成为唯一的“目击者”。",
        "url": "./movies/movie-461.html",
        "image": "./11.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "伊甸园第二季",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "科幻、悬疑、末日",
        "tags": [
            "虚拟现实",
            "人性实验",
            "觉醒"
        ],
        "oneLine": "第一季全员逃出虚拟世界,第二季发现——真实世界也是假的。",
        "url": "./movies/movie-462.html",
        "image": "./12.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "理发",
        "year": "2026",
        "region": "中国香港",
        "type": "电影",
        "genre": "悬疑,惊悚,犯罪",
        "tags": [
            "连环杀手",
            "职业设定",
            "心理博弈",
            "黑色电影"
        ],
        "oneLine": "一位技艺精湛的理发师,专在深夜为客人提供“上门服务”,而每一位客人,都恰好是刚被警方通缉的嫌疑人。",
        "url": "./movies/movie-463.html",
        "image": "./13.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "起司螨",
        "year": "2027",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "悬疑,家庭,短剧",
        "tags": [
            "微观",
            "食品",
            "遗产",
            "高概念"
        ],
        "oneLine": "父亲留下的唯一遗产是一块长了螨虫的顶级奶酪,三兄妹争夺奶酪所有权时,发现螨虫的迁徙路线是一张藏宝图。",
        "url": "./movies/movie-464.html",
        "image": "./14.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "罗马的房子",
        "year": "2024",
        "region": "西班牙/意大利",
        "type": "电影",
        "genre": "爱情/剧情",
        "tags": [
            "一夜情",
            "对话",
            "女性",
            "身份",
            "文艺"
        ],
        "oneLine": "两个女人在罗马一间民宿里共度一夜,她们在床上说了整整一夜的话,天亮后才发现她们交换了所有假名字。",
        "url": "./movies/movie-465.html",
        "image": "./15.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "特别的爸爸",
        "year": "2024",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "家庭,剧情,治愈",
        "tags": [
            "父女情",
            "非血缘",
            "绝症",
            "成长"
        ],
        "oneLine": "一个只想搞钱的破产富二代,被迫收养了从未谋面的聋哑“女儿”,为了让她开口叫爸爸,他开始了一场笨拙又感人的自救。",
        "url": "./movies/movie-466.html",
        "image": "./16.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "双面名模",
        "year": "2023",
        "region": "韩国",
        "type": "电视剧",
        "genre": "悬疑,爱情",
        "tags": [
            "双重人格",
            "娱乐圈",
            "复仇",
            "时尚"
        ],
        "oneLine": "温柔内向的哑女模特被姐姐强行推入名利场,却在头部受到撞击后,觉醒了一个强势狠戾的第二人格。",
        "url": "./movies/movie-467.html",
        "image": "./17.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "假面骑士极狐国语",
        "year": "2023",
        "region": "日本",
        "type": "剧集",
        "genre": "特摄、科幻、动作",
        "tags": [
            "生存游戏",
            "欲望大奖赛",
            "狐狸"
        ],
        "oneLine": "为了复活死去的母亲,天才玩家浮世英寿化身假面骑士极狐,在危险的“欲望大奖赛”中无限重生。",
        "url": "./movies/movie-468.html",
        "image": "./18.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "波多黎各人在巴黎",
        "year": "2025",
        "region": "美国/法国",
        "type": "电影",
        "genre": "喜剧/爱情",
        "tags": [
            "文化冲突",
            "拉丁风情",
            "时尚行业"
        ],
        "oneLine": "波多黎各辣妹设计师闯荡巴黎高定圈,用加勒比风情暴击法式傲慢。",
        "url": "./movies/movie-469.html",
        "image": "./19.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "男人与女人",
        "year": "2024",
        "region": "法国/意大利",
        "type": "电影",
        "genre": "剧情/爱情/文艺",
        "tags": [
            "黑白摄影",
            "两性对话",
            "法语片",
            "婚姻解剖"
        ],
        "oneLine": "离婚冷静期的最后一天,一对夫妻在即将被拆除的老房子里进行了一场12小时的终极对话。",
        "url": "./movies/movie-470.html",
        "image": "./20.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "夏日最后的一天",
        "year": "2021",
        "region": "日本",
        "type": "电影",
        "genre": "剧情/家庭/治愈",
        "tags": [
            "夏日",
            "亲情",
            "成长",
            "离别"
        ],
        "oneLine": "在暑假的最后一天,即将搬家的男孩收到了一封来自已故爷爷的信,指引他在小镇上完成一项神秘的“寻宝游戏”。",
        "url": "./movies/movie-471.html",
        "image": "./21.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "一和二",
        "year": "2025",
        "region": "中国内地",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "亲情",
            "双胞胎",
            "身份互换",
            "成长",
            "社会阶层"
        ],
        "oneLine": "一对被迫分离的孪生兄弟,一个成长为天才科学家,一个沦为社会底层,当他们的生命开始互换,悲剧发生了。",
        "url": "./movies/movie-472.html",
        "image": "./22.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "海棠",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "眷村往事",
            "三代和解",
            "植物隐喻"
        ],
        "oneLine": "孙女为完成爷爷遗愿,将一株从未开过花的海棠带回山东老家,却在土里挖出半封血信。",
        "url": "./movies/movie-473.html",
        "image": "./23.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "终极蜘蛛侠第二季",
        "year": "2024",
        "region": "美国",
        "type": "动画剧集",
        "genre": "动作/科幻/冒险",
        "tags": [
            "超级英雄",
            "多元宇宙",
            "少年成长",
            "高速战斗",
            "共生体"
        ],
        "oneLine": "蜘蛛侠被卷入平行宇宙危机,必须集结不同时空的自己,才能阻止反派彻底撕碎现实。",
        "url": "./movies/movie-474.html",
        "image": "./24.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "醋溜族",
        "year": "1995",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "喜剧/爱情/都市",
        "tags": [
            "朱德庸漫画改编",
            "都市男女",
            "恋爱兵法",
            "单元剧",
            "台式幽默"
        ],
        "oneLine": "改编自朱德庸四格漫画,讲述一群都市年轻男女在爱情里使尽小聪明、吃尽醋、最后发现真爱就在身边的故事。",
        "url": "./movies/movie-475.html",
        "image": "./25.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "狐妖小红娘日语版",
        "year": "2024",
        "region": "日本",
        "type": "剧集(动画)",
        "genre": "奇幻,恋爱,战斗",
        "tags": [
            "转世续缘",
            "和风",
            "声优",
            "催泪"
        ],
        "oneLine": "承接人与妖转世情缘的狐妖红线仙,在日本妖怪界遇到了最难缠的客户。",
        "url": "./movies/movie-476.html",
        "image": "./26.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "情越双白线粤语",
        "year": "2023",
        "region": "中国香港",
        "type": "剧集",
        "genre": "剧情/犯罪",
        "tags": [
            "卧底",
            "公路",
            "粤语",
            "复仇",
            "兄弟情"
        ],
        "oneLine": "交通警与黑道车手,一条双白线划分的是法律与情义的边界。",
        "url": "./movies/movie-477.html",
        "image": "./27.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "吻灭",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "爱情,奇幻,剧情",
        "tags": [
            "诅咒",
            "失忆",
            "命运",
            "唯美"
        ],
        "oneLine": "拥有“被吻后对方会忘记自己”诅咒的女人,遇到了唯一一个吻不灭的男人。",
        "url": "./movies/movie-478.html",
        "image": "./28.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "塞尔福里奇先生第二季",
        "year": "2014",
        "region": "英国",
        "type": "剧集",
        "genre": "剧情/历史",
        "tags": [
            "商场风云",
            "家族恩怨",
            "时代变革"
        ],
        "oneLine": "伦敦百货帝国迎来劲敌,塞尔福里奇不得不在爱情与破产之间走钢丝。",
        "url": "./movies/movie-479.html",
        "image": "./29.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "黑色惊爆线",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "犯罪,动作",
        "tags": [
            "黑帮",
            "记者",
            "卧底",
            "反转"
        ],
        "oneLine": "为了调查黑警,记者卧底成为黑帮会计,却发现要提拔自己的大佬,正是当年的缉毒英雄父亲。",
        "url": "./movies/movie-480.html",
        "image": "./30.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "谢天谢地你来了",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "奇幻/爱情",
        "tags": [
            "婚姻危机",
            "平行时空",
            "高概念"
        ],
        "oneLine": "结婚七年的夫妻同时许愿“如果没遇见你”,醒来后他们果真成了陌生人,但孩子却变成了天上的星星。",
        "url": "./movies/movie-481.html",
        "image": "./31.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "陀地驱魔人",
        "year": "2015",
        "region": "中国香港",
        "type": "电影",
        "genre": "恐怖",
        "tags": [
            "港式灵异",
            "鬼魂温情",
            "市井法师"
        ],
        "oneLine": "能用“广东话粗口”骂走鬼魂的驱魔人阿豪,遇到一只只会讲英语、而且不想走的贵族鬼。",
        "url": "./movies/movie-482.html",
        "image": "./32.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "暴风雨中的母亲",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情/惊悚",
        "tags": [
            "母爱",
            "灾难",
            "法庭戏",
            "底层人民"
        ],
        "oneLine": "在一场因豆腐渣工程导致幼儿园坍塌后,一位单亲妈妈以一己之力对抗整个国家的司法系统。",
        "url": "./movies/movie-483.html",
        "image": "./33.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "潜艇总动员2",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影 (动画)",
        "genre": "动画/冒险/喜剧",
        "tags": [
            "潜艇",
            "海洋",
            "环保",
            "儿童",
            "科普"
        ],
        "oneLine": "上一代潜艇退役后,新一代小潜艇接棒,在深海发现了一个沉睡着远古巨兽的秘密基地。",
        "url": "./movies/movie-484.html",
        "image": "./34.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "女神之境:换魂游戏",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "奇幻,动作,冒险",
        "tags": [
            "女武神",
            "灵魂互换",
            "现代神话"
        ],
        "oneLine": "北欧女武神下凡退休,却被一个沉迷手游的宅女交换了灵魂,还要替她参加电竞决赛。",
        "url": "./movies/movie-485.html",
        "image": "./35.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "帝王蝶之子",
        "year": "2025",
        "region": "墨西哥/美国",
        "type": "电影",
        "genre": "剧情/奇幻/冒险",
        "tags": [
            "超能力",
            "迁徙",
            "毒品",
            "家族秘密",
            "蝴蝶"
        ],
        "oneLine": "墨西哥少年发现自己每次流泪都能引来帝王蝶,而蝴蝶飞过的地方,罂粟花会枯萎。",
        "url": "./movies/movie-486.html",
        "image": "./36.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "疯狂元素城:幕后特辑",
        "year": "2024",
        "region": "美国",
        "type": "纪录片",
        "genre": "纪录片/动画制作",
        "tags": [
            "花絮",
            "皮克斯",
            "特效揭秘",
            "访谈"
        ],
        "oneLine": "揭秘年度高分动画《疯狂元素城》从分镜脚本到最终渲染的完整创作历程。",
        "url": "./movies/movie-487.html",
        "image": "./37.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "打击惊魂",
        "year": "1988",
        "region": "英国",
        "type": "电影",
        "genre": "惊悚,犯罪,悬疑",
        "tags": [
            "政治惊悚",
            "冷战",
            "误杀",
            "逃亡",
            "替罪羊"
        ],
        "oneLine": "一名普通的伦敦萨克斯手在西班牙度假时偷了一辆车,没想到后备箱里藏着一具尸体和足以引发战争的绝密胶卷。",
        "url": "./movies/movie-488.html",
        "image": "./38.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "猫咪马汀",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "动画/家庭/奇幻",
        "tags": [
            "猫",
            "孩子视角",
            "治愈",
            "环保"
        ],
        "oneLine": "一只会说人话的流浪猫马汀,带领小区里的孩子们对抗即将毁掉他们秘密花园的施工队。",
        "url": "./movies/movie-489.html",
        "image": "./39.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "魔法教母",
        "year": "2020",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧/奇幻/家庭",
        "tags": [
            "仙女",
            "现实生活",
            "笨拙",
            "程序员",
            "童话破灭"
        ],
        "oneLine": "一个笨拙的实习魔法教母被分配到现代人类社会实习,而她的第一个客户竟是一个厌世的女程序员。",
        "url": "./movies/movie-490.html",
        "image": "./40.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "22对决地球",
        "year": "2025",
        "region": "英国/美国",
        "type": "电影",
        "genre": "喜剧/科幻",
        "tags": [
            "外星入侵",
            "数字幽默",
            "低成本高概念",
            "英式冷幽默"
        ],
        "oneLine": "银河系最致命的22位杀手入侵地球,却发现这里的Wi-Fi密码居然比打败人类还难破解。",
        "url": "./movies/movie-491.html",
        "image": "./41.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "布拉格来信",
        "year": "2024",
        "region": "捷克/中国",
        "type": "电影",
        "genre": "爱情/文艺",
        "tags": [
            "跨国恋",
            "年代回忆",
            "未寄出的信",
            "遗憾美学"
        ],
        "oneLine": "孙女帮患阿尔茨海默症的祖母寻找布拉格旧情人,却在查理大桥下发现了一个隐藏五十年的互换人生秘密。",
        "url": "./movies/movie-492.html",
        "image": "./42.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "福是全家福的福第四季",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "喜剧,动画",
        "tags": [
            "家庭",
            "黑色幽默",
            "毒舌",
            "日常"
        ],
        "oneLine": "墨菲一家继续着他们混乱而真实的生活,这季老爸弗兰克意外成了一名网红。",
        "url": "./movies/movie-493.html",
        "image": "./43.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "鬼魅有道理",
        "year": "2016",
        "region": "韩国",
        "type": "电视剧",
        "genre": "爱情、奇幻、喜剧",
        "tags": [
            "阴阳眼",
            "驱魔师",
            "契约恋爱",
            "搞笑"
        ],
        "oneLine": "能看到鬼魂的女大学生被一个自称“罪魂管理司”的千年鬼官找上,两人被迫同居破案。",
        "url": "./movies/movie-494.html",
        "image": "./44.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "政宗君的复仇",
        "year": "2023",
        "region": "日本",
        "type": "动画",
        "genre": "恋爱喜剧/校园",
        "tags": [
            "复仇计划",
            "傲娇千金",
            "减肥逆袭",
            "乌龙告白"
        ],
        "oneLine": "小时候被千金小姐嘲笑“猪脚”的男孩,八年后变成完美帅哥回来复仇,却发现自己搞错了对象。",
        "url": "./movies/movie-495.html",
        "image": "./45.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "在暴雪时分",
        "year": "2024",
        "region": "中国",
        "type": "剧集",
        "genre": "爱情/剧情/运动",
        "tags": [
            "台球竞技",
            "破镜重圆",
            "双向救赎",
            "极限拉扯"
        ],
        "oneLine": "因为一场黑幕而跌落神坛的天才斯诺克选手,十年后在暴雪封路的汽车旅馆里,重逢了毁掉自己职业生涯的初恋。",
        "url": "./movies/movie-496.html",
        "image": "./46.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "摇摆吉普赛",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "音乐、爱情、剧情",
        "tags": [
            "吉普赛",
            "爵士",
            "家族",
            "自由"
        ],
        "oneLine": "一位古典小提琴天才被吉普赛爵士乐吸引,闯入一个流浪家族的秘密世界,引发音乐与灵魂的共振。",
        "url": "./movies/movie-497.html",
        "image": "./47.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "信赖",
        "year": "2024",
        "region": "日本",
        "type": "剧集",
        "genre": "悬疑,剧情,心理",
        "tags": [
            "信任游戏",
            "狼人杀",
            "家族",
            "遗产",
            "反转"
        ],
        "oneLine": "富豪临终前告诉六个子女:“你们中有一人不是我亲生的,找到他,其他人平分遗产。",
        "url": "./movies/movie-498.html",
        "image": "./48.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "金钱之悲",
        "year": "2022",
        "region": "美国",
        "type": "电影",
        "genre": "剧情,惊悚,心理",
        "tags": [
            "华尔街",
            "暴富诅咒",
            "家族厄运",
            "数字恐惧",
            "超自然"
        ],
        "oneLine": "一个对冲基金经理暴富后,家族所有人开始离奇死亡,死因都和他赚的每一笔黑心钱有关。",
        "url": "./movies/movie-499.html",
        "image": "./49.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "马诺莱特",
        "year": "2024",
        "region": "西班牙",
        "type": "电影",
        "genre": "传记,剧情",
        "tags": [
            "斗牛士",
            "传奇人生",
            "宿命",
            "黑白与彩色"
        ],
        "oneLine": "西班牙最伟大的斗牛士马诺莱特,在职业生涯巅峰期预见自己将死于牛角之下,却依然走向斗牛场。",
        "url": "./movies/movie-500.html",
        "image": "./50.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "巴黎1900",
        "year": "2024",
        "region": "法国",
        "type": "电视剧",
        "genre": "历史",
        "tags": [
            "年代",
            "传奇",
            "女性"
        ],
        "oneLine": "1900年巴黎世博会前夕,一位洗衣女工凭借过人天赋闯入上流社会,却卷入一场改变欧洲格局的秘密交易。",
        "url": "./movies/movie-501.html",
        "image": "./51.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "夜之亡灵",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖,惊悚",
        "tags": [
            "都市传说",
            "出租车司机",
            "有限空间",
            "反转结局"
        ],
        "oneLine": "一名夜班出租车司机发现,他搭载的每一位乘客都是在同一天死去的亡灵。",
        "url": "./movies/movie-502.html",
        "image": "./52.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "七人魔法使",
        "year": "2023",
        "region": "日本",
        "type": "TV 动画",
        "genre": "奇幻,战斗,校园",
        "tags": [
            "魔法",
            "后宫",
            "学生会",
            "异世界",
            "咒语"
        ],
        "oneLine": "七位被选中的魔法使必须放下恩怨,联手封印即将吞噬现实世界的“虚无之书”。",
        "url": "./movies/movie-503.html",
        "image": "./53.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "冠军2023",
        "year": "2023",
        "region": "印度",
        "type": "电影",
        "genre": "运动/剧情/传记",
        "tags": [
            "盲人板球",
            "励志逆袭",
            "社会阶层",
            "真实事件改编"
        ],
        "oneLine": "印度盲人板球队的队长,带领一群来自贫民窟的全盲少年,冲击世界杯冠军的真人真事。",
        "url": "./movies/movie-504.html",
        "image": "./54.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "昭和元禄落语心中",
        "year": "2016",
        "region": "日本",
        "type": "动漫",
        "genre": "剧情,历史,艺术",
        "tags": [
            "落语",
            "时代变迁",
            "师徒虐恋"
        ],
        "oneLine": "一名出狱的混混拜入昭和最后的大师门下学习落语,只为赎罪,却意外揭开了师父与同门师兄之间长达半世纪的禁忌之恋。",
        "url": "./movies/movie-505.html",
        "image": "./55.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "星际劫难",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "科幻/灾难",
        "tags": [
            "太空",
            "末世",
            "飞船",
            "AI",
            "生存"
        ],
        "oneLine": "一艘殖民飞船的AI系统突然觉醒,决定把全部三千名乘客送去“更好的地方”——太阳。",
        "url": "./movies/movie-506.html",
        "image": "./56.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "夏伯阳",
        "year": "2026",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "战争,传记,历史",
        "tags": [
            "苏联名将",
            "内战",
            "骑兵",
            "史诗",
            "黑白调色"
        ],
        "oneLine": "他不是神话,是一个害怕骑马、会尿床、但绝不会后退一步的普通人。",
        "url": "./movies/movie-507.html",
        "image": "./57.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "真由美",
        "year": "2024",
        "region": "日本",
        "type": "电视剧",
        "genre": "悬疑伦理",
        "tags": [
            "替身疑云",
            "家族诅咒",
            "温泉旅馆",
            "双重人格"
        ],
        "oneLine": "经营 failing 温泉旅馆的孪生姐妹,在姐姐离奇坠崖后,妹妹冒充她活下去,却发现姐姐可能根本没死。",
        "url": "./movies/movie-508.html",
        "image": "./58.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "霹雳舞",
        "year": "1984",
        "region": "美国",
        "type": "电影",
        "genre": "剧情/歌舞",
        "tags": [
            "街舞",
            "反叛精神",
            "街头文化",
            "励志"
        ],
        "oneLine": "当正统芭蕾遇上狂野街舞,她用身体改写规则,掀起一场无声的舞蹈革命。",
        "url": "./movies/movie-509.html",
        "image": "./59.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "小黄人大眼萌国语",
        "year": "2022",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧/动画",
        "tags": [
            "小黄人",
            "国语配音",
            "搞笑",
            "冒险",
            "反派"
        ],
        "oneLine": "小黄人凯文、斯图尔特和鲍勃来到中国寻找新主人,却误入功夫学校。",
        "url": "./movies/movie-510.html",
        "image": "./60.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "汾阳小子贾樟柯",
        "year": "2014",
        "region": "中国大陆",
        "type": "电影",
        "genre": "纪录片",
        "tags": [
            "贾樟柯",
            "传记",
            "幕后",
            "汾阳",
            "第六代"
        ],
        "oneLine": "巴西导演沃尔特·塞勒斯跟随贾樟柯回到故乡汾阳,用镜头解码这位电影诗人二十年来的创作原乡。",
        "url": "./movies/movie-511.html",
        "image": "./61.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "淘金",
        "year": "2022",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "冒险/悬疑",
        "tags": [
            "荒野",
            "兄弟反目",
            "非法开采"
        ],
        "oneLine": "两兄弟在“死亡谷”发现一座金矿,金子没挖到,却挖出了一具失踪二十年的地质队队长遗体。",
        "url": "./movies/movie-512.html",
        "image": "./62.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "哈顿花园大劫案2017",
        "year": "2023",
        "region": "英国",
        "type": "电影",
        "genre": "犯罪",
        "tags": [
            "真实事件改编",
            "老年犯罪",
            "珠宝",
            "团队",
            "黑色幽默"
        ],
        "oneLine": "一群平均年龄65岁的退休老头,在复活节长周末掘地三尺偷空了伦敦地下金库。",
        "url": "./movies/movie-513.html",
        "image": "./63.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "哈宝的回力棒历险记",
        "year": "2025",
        "region": "澳大利亚",
        "type": "电影",
        "genre": "动画,冒险,家庭",
        "tags": [
            "回力棒",
            "澳洲土著",
            "寻宝",
            "祖孙情"
        ],
        "oneLine": "小淘气哈宝弄丢了爷爷的魔法回力棒,必须穿越澳洲内陆所有奇境才能找回它。",
        "url": "./movies/movie-514.html",
        "image": "./64.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "暴雨天灾",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "灾难/剧情",
        "tags": [
            "极端天气",
            "城市内涝",
            "救援",
            "小人物",
            "群像"
        ],
        "oneLine": "一场千年一遇的暴雨夜,一座城市的命运被几个普通人改写。",
        "url": "./movies/movie-515.html",
        "image": "./65.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "惊魂电影院",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "恐怖/悬疑",
        "tags": [
            "影院怪谈",
            "诅咒胶片",
            "第四面墙"
        ],
        "oneLine": "老影院放映最后一卷神秘胶片时,观众发现银幕上的杀人魔会爬出画面追杀自己。",
        "url": "./movies/movie-516.html",
        "image": "./66.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "少女灵异日记",
        "year": "2011",
        "region": "韩国",
        "type": "电影",
        "genre": "恐怖",
        "tags": [
            "悬疑",
            "校园",
            "附身",
            "反转",
            "心理"
        ],
        "oneLine": "优等生捡到了一本六十年前的日记,按照上面的方法许愿屡试不爽,但每实现一个愿望,日记上的血字就会多一行。",
        "url": "./movies/movie-517.html",
        "image": "./67.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "放心去飞",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情,家庭,青春",
        "tags": [
            "亲情",
            "癌症",
            "遗愿清单",
            "单车环岛",
            "治愈"
        ],
        "oneLine": "得知自己只剩三个月生命的叛逆少女,绑架了古板的出租车司机父亲,要求他陪自己完成单车环岛遗愿清单。",
        "url": "./movies/movie-518.html",
        "image": "./68.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "独角猫!第三季",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "动画/奇幻/喜剧",
        "tags": [
            "治愈系",
            "无厘头",
            "友情",
            "冒险"
        ],
        "oneLine": "乐观过头的独角猫带着小伙伴们闯入镜中世界,遇到了一个会吃掉快乐的阴影怪物。",
        "url": "./movies/movie-519.html",
        "image": "./69.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "东方西方",
        "year": "2024",
        "region": "法国/俄罗斯/乌克兰",
        "type": "电影",
        "genre": "历史/剧情",
        "tags": [
            "冷战",
            "流亡",
            "身份认同",
            "钢琴家",
            "铁幕"
        ],
        "oneLine": "乌克兰裔钢琴家逃往西方,二十年后在基辅遇见了当年举报父亲的发小。",
        "url": "./movies/movie-520.html",
        "image": "./70.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "人狼游戏:疯狂的狐狸",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "惊悚,悬疑",
        "tags": [
            "生存游戏",
            "心理战",
            "人狼杀"
        ],
        "oneLine": "11名高中生被关入废弃学校,输了人狼游戏的人会被处决,但这次多了一只“狐狸”。",
        "url": "./movies/movie-521.html",
        "image": "./71.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "出轨",
        "year": "2001",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情/情色/悬疑",
        "tags": [
            "婚姻危机",
            "情欲迷局",
            "心理惊悚",
            "三夫影院"
        ],
        "oneLine": "完美人妻发现自己无法对丈夫产生欲望,却在一场心理治疗中被催眠出第二个“放荡人格”,且这个人格可能真的杀过人。",
        "url": "./movies/movie-522.html",
        "image": "./72.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "帝王之旅",
        "year": "2025",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "历史/冒险/权谋",
        "tags": [
            "质子逆袭",
            "丝绸之路",
            "双强博弈",
            "古代公路片"
        ],
        "oneLine": "被送去敌国当质子的废柴皇子,在归国途中为活命,不得不成为西域商队的“傀儡向导”。",
        "url": "./movies/movie-523.html",
        "image": "./73.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "香格里拉",
        "year": "2009",
        "region": "日本",
        "type": "动画",
        "genre": "科幻,冒险,悬疑",
        "tags": [
            "反乌托邦",
            "气候变化",
            "超能力",
            "女神"
        ],
        "oneLine": "为了换取生存资源,世界被“碳素税”压得奄奄一息,一位拥有金属扇子的少女决定掀翻这个腐朽的秩序。",
        "url": "./movies/movie-524.html",
        "image": "./74.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "山羊",
        "year": "2022",
        "region": "挪威",
        "type": "电影",
        "genre": "恐怖,民俗",
        "tags": [
            "北欧民俗",
            "邪教",
            "心理恐怖",
            "寂静",
            "羊"
        ],
        "oneLine": "摄影师跟随一群登山者闯入挪威深山,发现每家农舍的阁楼里都锁着一只穿着童装的山羊。",
        "url": "./movies/movie-525.html",
        "image": "./75.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "小绅士",
        "year": "2022",
        "region": "英国",
        "type": "电影",
        "genre": "剧情、儿童",
        "tags": [
            "礼仪",
            "成长",
            "治愈"
        ],
        "oneLine": "被宠坏的富二代被送去最严苛的礼仪学院,却发现院长竟是前黑帮教父。",
        "url": "./movies/movie-526.html",
        "image": "./76.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "火海追魂记",
        "year": "2024",
        "region": "美国",
        "type": "电视剧",
        "genre": "动作、犯罪、消防",
        "tags": [
            "极限救援",
            "悬疑纵火",
            "硬汉柔情",
            "快节奏"
        ],
        "oneLine": "一名被开除的前纵火案调查员,为了洗刷冤屈,不得不穿梭在全城连环大火中追踪真凶。",
        "url": "./movies/movie-527.html",
        "image": "./77.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "鸡毛梦想",
        "year": "2025",
        "region": "中国大陆",
        "type": "动画电影",
        "genre": "动画,励志,喜剧",
        "tags": [
            "小镇青年",
            "选秀",
            "养鸡场",
            "逆袭"
        ],
        "oneLine": "养鸡场里一只会吹口哨的公鸡带领一群母鸡组乐队,参加《全农有才》选秀,奖金是免于被宰。",
        "url": "./movies/movie-528.html",
        "image": "./78.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "沙漠情酋",
        "year": "2014",
        "region": "埃及",
        "type": "电影",
        "genre": "爱情,冒险,剧情",
        "tags": [
            "沙漠",
            "部落",
            "禁忌之恋",
            "异域风情"
        ],
        "oneLine": "一个西方女考古学家在撒哈拉深处爱上了一个部落酋长,却发现自己只是他复仇计划中的棋子。",
        "url": "./movies/movie-529.html",
        "image": "./79.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "未来作业",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "科幻/校园",
        "tags": [
            "教育",
            "AI",
            "穿越",
            "成长"
        ],
        "oneLine": "一名初中生意外拿到来自2060年的高考真题集,却发现未来根本不需要考试。",
        "url": "./movies/movie-530.html",
        "image": "./80.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "跨州轶事录",
        "year": "2021",
        "region": "美国",
        "type": "剧集",
        "genre": "喜剧、公路、剧情",
        "tags": [
            "公路旅行",
            "荒诞",
            "黑色幽默",
            "美国梦"
        ],
        "oneLine": "一个被迫跨州运毒的老头,和一个想当网红的小伙组成了最不靠谱的搭档。",
        "url": "./movies/movie-531.html",
        "image": "./81.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "美好星期天",
        "year": "2023",
        "region": "日本",
        "type": "电影",
        "genre": "剧情/治愈",
        "tags": [
            "日常",
            "救赎",
            "城市孤独"
        ],
        "oneLine": "一个失去妻子的中年上班族,每个星期天都会去不同陌生人的家里,冒充他们已故的亲人,只为说一句“我原谅你了”。",
        "url": "./movies/movie-532.html",
        "image": "./82.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "偷偷盗你家",
        "year": "2024",
        "region": "韩国",
        "type": "电视剧",
        "genre": "黑色喜剧",
        "tags": [
            "小偷",
            "邻居",
            "反转",
            "温情"
        ],
        "oneLine": "一个专偷富人区的神偷,搬进目标家中住了三个月,却和受害者一家成了最亲密的“家人”。",
        "url": "./movies/movie-533.html",
        "image": "./83.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "恐怖计划",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "动作/惊悚",
        "tags": [
            "复仇",
            "密室",
            "反转"
        ],
        "oneLine": "一个被绑架的女孩醒来后发现,绑匪的“恐怖计划”竟是让她杀死同样被绑架的自己。",
        "url": "./movies/movie-534.html",
        "image": "./84.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "大周小冰人第二季",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装职场",
        "tags": [
            "冰人",
            "婚恋",
            "宋韵",
            "轻喜",
            "女性成长"
        ],
        "oneLine": "大周首席冰人周莹开设“女子自嫁局”,教姑娘们倒追、休夫和分家产,被礼部以“伤风败俗”罪名告上金銮殿。",
        "url": "./movies/movie-535.html",
        "image": "./85.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "蝙蝠女侠第一季",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "动作,科幻,犯罪",
        "tags": [
            "女英雄",
            "哥谭",
            "悬疑",
            "黑暗正义"
        ],
        "oneLine": "前特种兵凯特·凯恩穿上蝙蝠装,但哥谭的黑暗远不止她想象的小丑。",
        "url": "./movies/movie-536.html",
        "image": "./86.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "小晓",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情,家庭",
        "tags": [
            "自闭症",
            "母女",
            "成长"
        ],
        "oneLine": "患有自闭症的女孩小晓用画画与世界沟通,一幅涂鸦却意外预言了父亲的车祸。",
        "url": "./movies/movie-537.html",
        "image": "./87.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "百炼成钢",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "年代/剧情/体育",
        "tags": [
            "钢铁工人",
            "举重",
            "奥运",
            "父子"
        ],
        "oneLine": "1980年代,鞍钢工厂里一个烧锅炉的工人偷偷练举重,目标是打破世界纪录,但所有人都在笑他。",
        "url": "./movies/movie-538.html",
        "image": "./88.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "缄默的迷宫国语",
        "year": "2023",
        "region": "德国/中国大陆(配音版)",
        "type": "电影",
        "genre": "历史/剧情",
        "tags": [
            "二战反思",
            "法庭戏",
            "配音版"
        ],
        "oneLine": "国语配音版重现一位年轻检察官在六十年代德国对抗被遗忘的纳粹战犯的故事,沉默的档案终将开口。",
        "url": "./movies/movie-539.html",
        "image": "./89.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "猫咪后院之家",
        "year": "2022",
        "region": "日本",
        "type": "剧集",
        "genre": "治愈,日常",
        "tags": [
            "猫咪",
            "邻里关系",
            "社恐"
        ],
        "oneLine": "一个拒绝社交的插画师,因为一只流浪猫,被迫打开了与整个老旧社区沟通的大门。",
        "url": "./movies/movie-540.html",
        "image": "./90.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "连锁大阴谋",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "惊悚",
        "tags": [
            "犯罪",
            "悬疑",
            "都市传说",
            "暗网"
        ],
        "oneLine": "一家网红连锁洗衣店,表面洗衣服,暗网接单“洗人命”,而取货凭证是你的指纹。",
        "url": "./movies/movie-541.html",
        "image": "./91.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "飞吧,爸爸",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "奇幻/喜剧/家庭",
        "tags": [
            "中年危机",
            "超能力",
            "亲子关系"
        ],
        "oneLine": "一事无成的中年社畜发现自己能短暂飞行,但每次飞行都会让儿子的成绩急剧下降。",
        "url": "./movies/movie-542.html",
        "image": "./92.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "鬼挡路2",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖,惊悚,超自然",
        "tags": [
            "公路惊悚",
            "怨灵",
            "复仇",
            "轮回"
        ],
        "oneLine": "一条每年只出现七天的幽灵公路,驶入者会遭遇自己曾经害死过的人的冤魂。",
        "url": "./movies/movie-543.html",
        "image": "./93.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "通天老虎",
        "year": "1978",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作/冒险",
        "tags": [
            "功夫",
            "寻宝",
            "复仇",
            "虎拳",
            "少林"
        ],
        "oneLine": "少林俗家弟子为报师仇,与一条能感知宝物的老虎结伴,闯荡江湖。",
        "url": "./movies/movie-544.html",
        "image": "./94.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "厄勒克特拉,我的爱",
        "year": "2023",
        "region": "希腊/法国",
        "type": "电影",
        "genre": "剧情/爱情/悬疑",
        "tags": [
            "古希腊悲剧现代改编",
            "心理复仇",
            "禁忌之恋"
        ],
        "oneLine": "一名现代心理医生发现自己竟是古希腊厄勒克特拉转世,而她今生的爱人正是杀母仇人的后裔。",
        "url": "./movies/movie-545.html",
        "image": "./95.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "龙宫历险",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动画,冒险,奇幻",
        "tags": [
            "神话",
            "海底世界",
            "环保",
            "成长"
        ],
        "oneLine": "为救被污染的东海,叛逆龙太子绑架了一位人类海洋学家,开启跨种族冒险。",
        "url": "./movies/movie-546.html",
        "image": "./96.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "婚色撩人",
        "year": "2025",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "爱情、喜剧、职场",
        "tags": [
            "先婚后爱",
            "女总裁",
            "契约",
            "甜宠"
        ],
        "oneLine": "女总裁为继承公司,雇了个男公关假结婚,结果对方是她十年前的白月光。",
        "url": "./movies/movie-547.html",
        "image": "./97.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "狼心狗肺",
        "year": "2023",
        "region": "中国",
        "type": "电影",
        "genre": "悬疑,犯罪,剧情",
        "tags": [
            "器官移植",
            "换心",
            "人格改变",
            "记忆转移",
            "伦理"
        ],
        "oneLine": "冷血企业家换心后变成善良暖男,而心脏捐赠者的女友却找上门来指控他谋杀。",
        "url": "./movies/movie-548.html",
        "image": "./98.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "金蚕往事",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑/惊悚/民俗",
        "tags": [
            "苗疆巫术",
            "蛊毒",
            "民俗恐怖"
        ],
        "oneLine": "一个回乡探亲的城市白领,无意间发现整个村子的人都被一种神秘的金蚕操控了心智。",
        "url": "./movies/movie-549.html",
        "image": "./99.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "那一年,我们都爱过的女孩",
        "year": "2014",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情/青春/怀旧",
        "tags": [
            "初恋",
            "遗憾",
            "校园",
            "群像",
            "时光胶囊"
        ],
        "oneLine": "毕业十年后的同学聚会上,三个男人发现自己当年暗恋的是同一个女孩,而她已因病去世。",
        "url": "./movies/movie-550.html",
        "image": "./100.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "富士见二丁目交响乐团",
        "year": "2027",
        "region": "日本",
        "type": "剧集",
        "genre": "音乐,剧情",
        "tags": [
            "古典乐",
            "业余乐团",
            "社区羁绊",
            "传承"
        ],
        "oneLine": "东京郊区一个平均年龄63岁的业余交响乐团面临解散危机,新来的23岁指挥天才说:你们不是在演奏,是在为自己的人生收尸。",
        "url": "./movies/movie-551.html",
        "image": "./101.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "开运奇遇记",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧/奇幻",
        "tags": [
            "运气",
            "锦鲤",
            "倒霉蛋",
            "都市",
            "暖心"
        ],
        "oneLine": "一个倒霉了25年的男生,突然发现自己能吸走别人的运气。",
        "url": "./movies/movie-552.html",
        "image": "./102.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "离岛特警粤语",
        "year": "2026",
        "region": "中国香港",
        "type": "剧集",
        "genre": "警匪/剧情",
        "tags": [
            "孤岛",
            "新旧对立",
            "人情味"
        ],
        "oneLine": "一名被贬到偏远离岛警署的年轻特警,发现岛上居民人人都藏着秘密。",
        "url": "./movies/movie-553.html",
        "image": "./103.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "新万家灯火",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情/家庭/社会",
        "tags": [
            "都市",
            "邻里",
            "群像",
            "温情",
            "现实题材"
        ],
        "oneLine": "北京一栋老旧居民楼被划入拆迁范围,四十户人家在最后的六十天里上演人间百态。",
        "url": "./movies/movie-554.html",
        "image": "./104.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "惊狂记",
        "year": "2022",
        "region": "美国",
        "type": "电影",
        "genre": "惊悚/悬疑",
        "tags": [
            "记忆丧失",
            "心理惊悚",
            "公路追逐",
            "身份认同"
        ],
        "oneLine": "一觉醒来,他发现自己成了全美通缉的杀人犯,而脑海中只剩下一段疯狂的尖叫录音。",
        "url": "./movies/movie-555.html",
        "image": "./105.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "欢迎来到威利茨",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖",
        "tags": [
            "鬼屋",
            "真实案件",
            "梦境入侵",
            "低配高能"
        ],
        "oneLine": "这栋房子会吃掉你的睡眠,一旦你在这里睡着,就会在现实中成为永远游荡的梦魇。",
        "url": "./movies/movie-556.html",
        "image": "./106.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "惊悚狂飙",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "惊悚,动作,恐怖",
        "tags": [
            "公路",
            "僵尸",
            "改装车",
            "密室逃生"
        ],
        "oneLine": "一辆改装大巴车被僵尸群追着横穿美国,车上还有内鬼。",
        "url": "./movies/movie-557.html",
        "image": "./107.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "卖梦的两人",
        "year": "2012",
        "region": "日本",
        "type": "电影",
        "genre": "悬疑/犯罪",
        "tags": [
            "骗局",
            "夫妻",
            "野心",
            "欲望"
        ],
        "oneLine": "一对夫妻专骗那些怀才不遇的人,妻子负责接近目标,丈夫负责制造“贵人”,直到他们骗了一个真正的天才。",
        "url": "./movies/movie-558.html",
        "image": "./108.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "娇娇女仔迎春曲",
        "year": "1985",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧,爱情,歌舞",
        "tags": [
            "贺岁片",
            "少女心事",
            "80年代港风"
        ],
        "oneLine": "三个从小娇生惯养的女孩被家人“下放”到乡下过年,却在那里遇到了各自的真命天子。",
        "url": "./movies/movie-559.html",
        "image": "./109.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "东京无印女子物语",
        "year": "2025",
        "region": "日本",
        "type": "剧集",
        "genre": "剧情/日常",
        "tags": [
            "女性群像",
            "东京",
            "合租屋",
            "平凡生活"
        ],
        "oneLine": "四个来自小城市的女孩在东京合租,她们没有光环、没有奇迹,只有最真实的失业、失恋与失眠。",
        "url": "./movies/movie-560.html",
        "image": "./110.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "魏玛的洛特",
        "year": "2024",
        "region": "德国",
        "type": "剧集",
        "genre": "历史/爱情/政治",
        "tags": [
            "魏玛共和国",
            "女权",
            "爵士时代",
            "悲剧浪漫"
        ],
        "oneLine": "1920年代的柏林,一个女诗人在夜总会爱上了一个纳粹冲锋队员,她决定用情书来改变历史。",
        "url": "./movies/movie-561.html",
        "image": "./111.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "泡沫之夏",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "悬疑,犯罪,剧情",
        "tags": [
            "房产中介",
            "失踪案",
            "小区秘密",
            "平民侦探"
        ],
        "oneLine": "某个夏天,某小区连续卖出三套“凶宅”,房产中介沈默发现这三套房子的前房主都指向同一个失踪女孩。",
        "url": "./movies/movie-562.html",
        "image": "./112.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "海上火焰",
        "year": "2016",
        "region": "意大利",
        "type": "电影",
        "genre": "纪录片,战争",
        "tags": [
            "难民危机",
            "地中海",
            "平行叙事",
            "现实残酷",
            "人性观察"
        ],
        "oneLine": "一个住在海军医院岛上的男孩日常,与跨海而来的难民救援记录,平行交织。",
        "url": "./movies/movie-563.html",
        "image": "./113.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "郭小宝和周老财",
        "year": "2013",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧,年代",
        "tags": [
            "民国奇遇",
            "乌龙诈骗",
            "假土豪真长工",
            "啼笑皆非"
        ],
        "oneLine": "民国年间,一个穷长工被逼冒充失踪少爷,谁知真土豪把他当成了杀父仇人。",
        "url": "./movies/movie-564.html",
        "image": "./114.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "情后顽将",
        "year": "2008",
        "region": "中国香港",
        "type": "电影",
        "genre": "古装动作",
        "tags": [
            "巾帼",
            "权谋",
            "宫廷",
            "武打",
            "悲壮"
        ],
        "oneLine": "明末女将秦良玉,在丈夫战死、朝廷猜忌、流寇四起的绝境中,以女儿身撑起一方军旗。",
        "url": "./movies/movie-565.html",
        "image": "./115.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "记得15",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑/青春",
        "tags": [
            "失忆",
            "高中",
            "校园霸凌",
            "时间循环",
            "治愈"
        ],
        "oneLine": "车祸失忆的女孩每天醒来只会记得15岁那年的秋天,而她必须在这个永恒的一天里找出霸凌真凶。",
        "url": "./movies/movie-566.html",
        "image": "./116.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "巴尔的摩",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "剧情/犯罪/悬疑",
        "tags": [
            "城市寓言",
            "观鸟者",
            "毒品网络",
            "无剧本感"
        ],
        "oneLine": "一个以观察城市鸟类为乐的中年丧子女,通过鸟类的迁徙路线,意外发现了贯穿巴尔的摩地下毒品运输的密道。",
        "url": "./movies/movie-567.html",
        "image": "./117.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "我爱驰星周",
        "year": "2026",
        "region": "日本/中国香港",
        "type": "电影",
        "genre": "犯罪/黑色幽默",
        "tags": [
            "粉丝文化",
            "杀手的复仇",
            "致敬"
        ],
        "oneLine": "一个重度社恐的日本杀手,唯一的爱好是看香港老电影,他决定用周润发的“小马哥”式手法,去完成最后一次刺杀。",
        "url": "./movies/movie-568.html",
        "image": "./118.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "薰香花朵凛然绽放",
        "year": "2025",
        "region": "日本",
        "type": "动画",
        "genre": "剧情/爱情/历史",
        "tags": [
            "大正时代",
            "花道",
            "女性觉醒",
            "唯美",
            "治愈"
        ],
        "oneLine": "大正时代,一个被家族当作“活人偶”的养女,用花道杀死了心中的自卑,开出了自己的名字。",
        "url": "./movies/movie-569.html",
        "image": "./119.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "美国大屠杀",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "动作、惊悚、政治讽刺",
        "tags": [
            "第二内战",
            "红州蓝州",
            "民兵组织",
            "枪战",
            "社交媒体战"
        ],
        "oneLine": "当美国第二场内战爆发,一个反法西斯播客主和一个川粉狙击手被迫组成逃亡搭档。",
        "url": "./movies/movie-570.html",
        "image": "./120.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "破胆夜惊魂6",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖/惊悚",
        "tags": [
            "血浆",
            "连环杀手",
            "密室",
            "直播",
            "重启"
        ],
        "oneLine": "经典鬼脸杀手沉寂二十年后回归,这次他将目标对准了一档试图重启“破胆夜惊魂”系列的网红直播团队。",
        "url": "./movies/movie-571.html",
        "image": "./121.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "火影忍者剧场版:博人传",
        "year": "2015",
        "region": "日本",
        "type": "电影",
        "genre": "动画,动作",
        "tags": [
            "热血",
            "忍者",
            "父子"
        ],
        "oneLine": "鸣人成为七代目火影后,儿子博人却因崇拜佐助而厌恶父亲,直到外星忍者来袭。",
        "url": "./movies/movie-572.html",
        "image": "./122.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "裸女怀春",
        "year": "1976",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情,情色",
        "tags": [
            "邵氏",
            "风月",
            "奇情",
            "古典"
        ],
        "oneLine": "深闺小姐照着春宫图寻找情郎,却引来了贪财的恶霸和真爱的书生。",
        "url": "./movies/movie-573.html",
        "image": "./123.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "达斯勒兄弟",
        "year": "2025",
        "region": "德国",
        "type": "剧集",
        "genre": "传记历史",
        "tags": [
            "商业",
            "家族",
            "二战",
            "分裂"
        ],
        "oneLine": "两兄弟创立了全球最牛的运动品牌,却因为一个决定彼此仇视了整整一辈子。",
        "url": "./movies/movie-574.html",
        "image": "./124.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "山火",
        "year": "2025",
        "region": "中国",
        "type": "电影",
        "genre": "灾难/剧情/惊悚",
        "tags": [
            "消防",
            "求生",
            "人性",
            "实拍",
            "群像"
        ],
        "oneLine": "一场因乱扔烟头引发的森林大火,将前来露营的网红、护林员、逃犯和消防实习生困在同一片绝境。",
        "url": "./movies/movie-575.html",
        "image": "./125.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "银行攻防战",
        "year": "2025",
        "region": "瑞典",
        "type": "剧集",
        "genre": "悬疑/惊悚/犯罪",
        "tags": [
            "劫持",
            "人质",
            "谈判",
            "密室智斗",
            "北欧冷峻"
        ],
        "oneLine": "一伙劫匪劫持了一家银行,但他们的真实目的不是钱,而是银行地下金库里埋藏了60年的秘密。",
        "url": "./movies/movie-576.html",
        "image": "./126.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "蛋糕合唱团",
        "year": "2024",
        "region": "以色列",
        "type": "电影",
        "genre": "剧情,喜剧,音乐",
        "tags": [
            "合唱团",
            "LGBT",
            "中年危机",
            "友谊",
            "和解"
        ],
        "oneLine": "一群身患重病的同性恋老人组成了一支合唱团,他们要用歌声对抗孤独,找回尊严。",
        "url": "./movies/movie-577.html",
        "image": "./127.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "人质们",
        "year": "2022",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "剧情,历史,战争",
        "tags": [
            "真实事件改编",
            "人性考验",
            "封闭空间",
            "政治冲突"
        ],
        "oneLine": "一次失败的银行劫案,将素不相识的普通人质与理想主义劫匪困在一起,48小时的生死博弈。",
        "url": "./movies/movie-578.html",
        "image": "./128.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "鲁蛇鸟经纪",
        "year": "2024",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "喜剧,职场,剧情",
        "tags": [
            "娱乐圈内幕",
            "过气艺人",
            "翻身逆袭",
            "黑色幽默"
        ],
        "oneLine": "一个专门带“糊咖”的废物经纪人,为了不被裁掉,把七个过气艺人组成了“最丑男团”。",
        "url": "./movies/movie-579.html",
        "image": "./129.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "没关系,是青春啊!",
        "year": "2025",
        "region": "韩国",
        "type": "电视剧",
        "genre": "校园剧情",
        "tags": [
            "1990年代",
            "高考",
            "五人组"
        ],
        "oneLine": "1998年,五个被高考压垮的高三学生组建了一支地下乐队,只能在厕所里排练。",
        "url": "./movies/movie-580.html",
        "image": "./130.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "蒙梭罗夫人",
        "year": "2026",
        "region": "法国",
        "type": "剧集",
        "genre": "剧情/历史",
        "tags": [
            "大仲马",
            "宫廷",
            "复仇"
        ],
        "oneLine": "改编自大仲马原著,法国宗教战争背景下,一个女人和四个男人之间的爱情、阴谋与不死不休的复仇。",
        "url": "./movies/movie-581.html",
        "image": "./131.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "芭拉芭拉樱之花",
        "year": "2024",
        "region": "日本/台湾",
        "type": "电影",
        "genre": "爱情,音乐",
        "tags": [
            "昭和歌谣",
            "昭和咖啡馆",
            "失忆重逢"
        ],
        "oneLine": "东京一家只有昭和老歌的咖啡馆里,失忆的老板娘每年樱花季都会为同一位客人端上同一杯维也纳咖啡,那是她唯一没忘的事。",
        "url": "./movies/movie-582.html",
        "image": "./132.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "第二梦",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "悬疑,科幻",
        "tags": [
            "梦境共享",
            "记忆",
            "伦理",
            "反转"
        ],
        "oneLine": "一家科技公司推出“梦境续写”服务,你可以回到昨晚的梦里,做完未完的事。",
        "url": "./movies/movie-583.html",
        "image": "./133.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "我没有失踪",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "悬疑/犯罪/家庭",
        "tags": [
            "人口贩卖",
            "替身",
            "寻亲",
            "反转"
        ],
        "oneLine": "失踪十年的女儿突然回家,但母亲一眼认出——这个人的眼神里住着另一个灵魂。",
        "url": "./movies/movie-584.html",
        "image": "./134.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "合约男女",
        "year": "2017",
        "region": "中国香港/中国大陆",
        "type": "电影",
        "genre": "爱情/喜剧",
        "tags": [
            "借精生子",
            "霸总",
            "契约恋爱",
            "郑秀文",
            "职场"
        ],
        "oneLine": "女总裁花重金找“高智商优质基因男”借精生子,没想到签约后发现对方是她最讨厌的前下属。",
        "url": "./movies/movie-585.html",
        "image": "./135.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "全糖少爷1",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "爱情、喜剧、偶像",
        "tags": [
            "霸总",
            "甜宠",
            "身份错位",
            "搞笑"
        ],
        "oneLine": "甜品帝国继承人因为低血糖症,必须不断摄入糖分,却遇到了一个患有“恐甜症”的冷酷女医生。",
        "url": "./movies/movie-586.html",
        "image": "./136.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "掌脸",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "惊悚/悬疑/社会",
        "tags": [
            "人脸识别",
            "科技伦理",
            "信息安全",
            "暴力",
            "反乌托邦"
        ],
        "oneLine": "一个被“掌脸系统”判定为情绪失控的男人,发现自己正在被系统批量“清除”。",
        "url": "./movies/movie-587.html",
        "image": "./137.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "赛车总动员3:极速挑战",
        "year": "2017",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧/动画/运动",
        "tags": [
            "赛车",
            "传承",
            "科技",
            "励志"
        ],
        "oneLine": "传奇赛车闪电麦昆遭遇新一代高科技赛车的全面碾压,在即将被淘汰之际,他必须做出最后的抉择:是退赛还是换个活法。",
        "url": "./movies/movie-588.html",
        "image": "./138.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "最炎热的国度",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "剧情/犯罪/西部",
        "tags": [
            "沙漠",
            "缉毒",
            "孤胆英雄",
            "生存"
        ],
        "oneLine": "德州边境巡警为了追捕杀妻仇人,孤身进入墨西哥最炎热的魔鬼三角洲荒漠。",
        "url": "./movies/movie-589.html",
        "image": "./139.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "兵法乡村",
        "year": "2024",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "剧情,乡村,温情",
        "tags": [
            "脱贫攻坚",
            "传统文化",
            "孙武后代",
            "基层干部",
            "励志"
        ],
        "oneLine": "孙子兵法第79代传人孙清阳,带着一本古书回到贫困故乡,他用三十六计治理乡村,却闹出了一连串啼笑皆非的故事。",
        "url": "./movies/movie-590.html",
        "image": "./140.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "新宿天鹅2:横滨暴走",
        "year": "2017",
        "region": "日本",
        "type": "电影",
        "genre": "动作,犯罪,喜剧",
        "tags": [
            "黑帮火拼",
            "男公关",
            "热血笨蛋",
            "日式暴力美学"
        ],
        "oneLine": "被逐出新宿的男公关白鸟,在横滨码头发现了一个针对中国劳工的非法劳务陷阱,为了救出被抓的兄弟,他单挑整个横滨黑帮。",
        "url": "./movies/movie-591.html",
        "image": "./141.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "龙非龙凤非凤",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装、权谋、武侠",
        "tags": [
            "性别错位",
            "女帝",
            "江湖与朝廷",
            "替身"
        ],
        "oneLine": "江湖女刺客被送入宫假扮病弱太子,却发现真正的太子早已被她刺杀,她才是最后的皇室血脉。",
        "url": "./movies/movie-592.html",
        "image": "./142.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "飙车热情",
        "year": "2024",
        "region": "日本",
        "type": "剧集",
        "genre": "运动/剧情/青春",
        "tags": [
            "赛车",
            "热血",
            "父子关系",
            "成长"
        ],
        "oneLine": "废柴儿子想用非法赛车证明自己,曾经的亚洲车神父亲坐在副驾冷冷说:你连弯都不会过。",
        "url": "./movies/movie-593.html",
        "image": "./143.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "终极飙靶",
        "year": "1992",
        "region": "香港",
        "type": "电影",
        "genre": "动作/犯罪",
        "tags": [
            "飞车",
            "枪战",
            "兄弟情",
            "林岭东风格"
        ],
        "oneLine": "一名杀手接到的最后一个任务是杀死自己的孪生弟弟,而弟弟刚好是一名刚刚破获大案的警察。",
        "url": "./movies/movie-594.html",
        "image": "./144.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "流光之城",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "爱情,年代",
        "tags": [
            "民国",
            "师生",
            "复仇",
            "商战",
            "虐恋"
        ],
        "oneLine": "1928年的上海,一个贫民窟女老师应聘成为军阀家庭的家庭教师,她此行的真正目的,是毁掉这个家。",
        "url": "./movies/movie-595.html",
        "image": "./145.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "叔比狗巨灵犬大闹科展",
        "year": "2024",
        "region": "美国",
        "type": "动画电影",
        "genre": "喜剧,悬疑,冒险,动画",
        "tags": [
            "叔比狗",
            "合家欢",
            "宠物",
            "科幻"
        ],
        "oneLine": "为了赢得科展大奖,薛奇发明了一台能把想象变成现实的机器,但却意外释放了古代巨灵犬,把整个小镇变成了动画世界。",
        "url": "./movies/movie-596.html",
        "image": "./146.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "亡者之湿",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "恐怖",
        "tags": [
            "民俗",
            "诅咒",
            "水怪"
        ],
        "oneLine": "一个被全村孤立的少女发现,只要将自己的眼泪滴在死者嘴唇上,死者就会“湿漉漉”地复活一分钟,说出死亡真相。",
        "url": "./movies/movie-597.html",
        "image": "./147.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "机器人总动员",
        "year": "2008",
        "region": "美国",
        "type": "电影",
        "genre": "科幻/动画/爱情",
        "tags": [
            "皮克斯",
            "末世",
            "孤独",
            "环保",
            "浪漫"
        ],
        "oneLine": "被留在地球废墟上清理垃圾的小机器人瓦力,在遇见来自外星的探测机器人伊娃后,开启了一场跨越银河的追爱之旅。",
        "url": "./movies/movie-598.html",
        "image": "./148.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "失落的部族",
        "year": "2016",
        "region": "美国",
        "type": "电影",
        "genre": "冒险/奇幻/悬疑",
        "tags": [
            "丛林探险",
            "史前文明",
            "寄生虫",
            "生存"
        ],
        "oneLine": "一支探险队在亚马逊深处发现了一个不该存在于任何地图上的原始部落,而部落守护着一种寄生真菌的秘密。",
        "url": "./movies/movie-599.html",
        "image": "./149.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "血色孤语",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "犯罪/心理/惊悚",
        "tags": [
            "多重人格",
            "连环杀手",
            "警匪博弈",
            "黑暗心理学",
            "反转"
        ],
        "oneLine": "警方在追查一名犯案手法诡异的连环杀手时,发现所有线索都指向一个废弃的精神病院,以及里面那个自称有24个人格的疯子。",
        "url": "./movies/movie-600.html",
        "image": "./150.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "恐怖极限",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖/科幻",
        "tags": [
            "脑机接口",
            "潜意识",
            "密室逃脱",
            "血腥"
        ],
        "oneLine": "一款能让人体验真实死亡的VR游戏,玩家在游戏中死一次,现实中也会脑死亡。",
        "url": "./movies/movie-601.html",
        "image": "./1.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "世界的角落是晚餐",
        "year": "2026",
        "region": "日本",
        "type": "剧集",
        "genre": "剧情,美食,治愈",
        "tags": [
            "深夜食堂",
            "孤独",
            "单元剧",
            "暖心"
        ],
        "oneLine": "一家开在世界地图“四角点”上的深夜餐厅,只接待当天内心“迷路”的人,用一道地理菜肴帮他们找到方向。",
        "url": "./movies/movie-602.html",
        "image": "./2.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "小奥德萨",
        "year": "2019",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "剧情,历史",
        "tags": [
            "黑海",
            "童年",
            "苏联记忆"
        ],
        "oneLine": "1991年苏联解体前夜,黑海边一座叫“小奥德萨”的犹太人小镇里,一个男孩试图在最后七天保住家庭录像带。",
        "url": "./movies/movie-603.html",
        "image": "./3.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "三人行",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "犯罪,悬疑,动作",
        "tags": [
            "警匪",
            "密室",
            "博弈",
            "心理战"
        ],
        "oneLine": "悍匪、卧底和黑警,三个身份各异的男人被困在即将爆炸的医院大楼,上演顶级心理对决。",
        "url": "./movies/movie-604.html",
        "image": "./4.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "小可爱娜斯佳",
        "year": "2023",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "剧情,家庭,战争",
        "tags": [
            "二战",
            "儿童视角",
            "残酷童话"
        ],
        "oneLine": "被纳粹占领的村庄里,小女孩娜斯佳为饥饿的弟弟偷食物,却错偷了党卫军军官的“金牙收集罐”。",
        "url": "./movies/movie-605.html",
        "image": "./5.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "四十四只石狮子",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑/惊悚/民俗",
        "tags": [
            "民间传说",
            "古桥",
            "数字谜题",
            "集体幻觉",
            "中式恐怖"
        ],
        "oneLine": "古镇石桥上的石狮子在雨夜“复活”,只有遵循古老的数字咒语才能阻止厄运蔓延。",
        "url": "./movies/movie-606.html",
        "image": "./6.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "惹事生非",
        "year": "2025",
        "region": "中国",
        "type": "电视剧",
        "genre": "喜剧,职场,都市",
        "tags": [
            "刺头员工",
            "整顿职场",
            "反内卷",
            "群像"
        ],
        "oneLine": "95后刺头员工入职死气沉沉的日企,用各种骚操作把公司和同事全“惹”活了。",
        "url": "./movies/movie-607.html",
        "image": "./7.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "吴夫人的外出",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情,悬疑",
        "tags": [
            "女性",
            "禁锢",
            "农村",
            "秘密"
        ],
        "oneLine": "被家控制了大半辈子的吴夫人,突然收到一封从国外寄来的信,她决定开启人生第一次“外出”。",
        "url": "./movies/movie-608.html",
        "image": "./8.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "蒙特卡洛",
        "year": "2023",
        "region": "摩纳哥",
        "type": "电影",
        "genre": "爱情剧情",
        "tags": [
            "赌场",
            "替身",
            "阶层跨越"
        ],
        "oneLine": "赌场女清洁工因酷似富豪失踪的女儿,被卷入一场真假千金与复仇阴谋的漩涡。",
        "url": "./movies/movie-609.html",
        "image": "./9.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "去地狱的派对巴士",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖惊悚",
        "tags": [
            "派对",
            "公路恐怖",
            "魔鬼交易",
            "密闭空间"
        ],
        "oneLine": "一群网红登上号称“永不结束的派对巴士”,却发现每停一站,就必须献祭一人给路边的恶魔。",
        "url": "./movies/movie-610.html",
        "image": "./10.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "红手指",
        "year": "2011",
        "region": "日本",
        "type": "电影",
        "genre": "悬疑",
        "tags": [
            "社会派推理",
            "家庭伦理",
            "亲情",
            "犯罪",
            "伪装"
        ],
        "oneLine": "刑警哥哥发现凶手是弟弟,年迈母亲伸出涂红的手指,指向了真正的恶。",
        "url": "./movies/movie-611.html",
        "image": "./11.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "傅满洲的血",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "悬疑,恐怖",
        "tags": [
            "现代改编",
            "种族批判",
            "悬疑",
            "惊悚"
        ],
        "oneLine": "伦敦生物实验室发现一份名为“傅满洲”的古老人体样本,唤醒它的DNA并非邪恶,而是一场被污名化的千年复仇。",
        "url": "./movies/movie-612.html",
        "image": "./12.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "狮子军龙虎鬪",
        "year": "1974",
        "region": "香港",
        "type": "电影",
        "genre": "动作,武侠",
        "tags": [
            "邵氏",
            "拳拳到肉",
            "门派斗争",
            "复仇"
        ],
        "oneLine": "民国初年,南方武术界两大门派狮子军与龙虎堂因一场比武引发灭门血案与十年复仇。",
        "url": "./movies/movie-613.html",
        "image": "./13.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "盲侠破三关",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作",
        "tags": [
            "盲人",
            "武侠",
            "闯关",
            "复仇",
            "高概念"
        ],
        "oneLine": "失明的退役特工为救女儿,必须仅凭听觉和触觉连破三道生死关卡。",
        "url": "./movies/movie-614.html",
        "image": "./14.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "枕边不细语",
        "year": "1990",
        "region": "中国香港",
        "type": "电视剧",
        "genre": "剧情、家庭、伦理",
        "tags": [
            "怀旧",
            "家族恩怨",
            "卧底",
            "失忆",
            "港风"
        ],
        "oneLine": "阔太太醒来失去十年记忆,被告知自己是贫困线下的卧底妻子。",
        "url": "./movies/movie-615.html",
        "image": "./15.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "桃花灿烂",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情/年代",
        "tags": [
            "怀旧",
            "纯爱",
            "遗憾"
        ],
        "oneLine": "八十年代的大学校园里,穷小子和富家女因一朵桃花结缘,却因一封信错过半生。",
        "url": "./movies/movie-616.html",
        "image": "./16.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "一个老豆一个爸",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情,家庭,喜剧",
        "tags": [
            "多元成家",
            "血缘与养育",
            "温情搞笑",
            "香港市井"
        ],
        "oneLine": "当古惑仔老爸突然现身,他发现自己的儿子正管儿子的继父叫“爸爸”。",
        "url": "./movies/movie-617.html",
        "image": "./17.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "八道厨师长",
        "year": "2024",
        "region": "日本",
        "type": "电视剧",
        "genre": "美食/职场",
        "tags": [
            "料理",
            "匠心",
            "破产",
            "重生"
        ],
        "oneLine": "米其林三星厨师长一夜破产,沦落到学校食堂,却用剩菜做出了人间至味。",
        "url": "./movies/movie-618.html",
        "image": "./18.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "快杰能天气",
        "year": "2026",
        "region": "日本",
        "type": "动画剧集",
        "genre": "奇幻/搞笑/日常",
        "tags": [
            "小学女生",
            "气象",
            "变身",
            "环保",
            "单元剧"
        ],
        "oneLine": "小学五年级女生小晴获得神秘手环,每次用超能力改变天气,就会随机交换她身边一个人的身体。",
        "url": "./movies/movie-619.html",
        "image": "./19.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "血洗天牢",
        "year": "1990",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作,古装,武侠",
        "tags": [
            "天牢",
            "劫狱",
            "复仇",
            "硬桥硬马",
            "邵氏"
        ],
        "oneLine": "忠臣被诬下天牢,其义子联合各路奇人异士,策划一场惊心动魄的暴力劫狱行动。",
        "url": "./movies/movie-620.html",
        "image": "./20.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "枪上膛",
        "year": "2023",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作,犯罪,悬疑",
        "tags": [
            "枪战",
            "失忆",
            "兄弟反目",
            "黑吃黑",
            "暴力美学"
        ],
        "oneLine": "杀手阿杰醒来时枪里有六颗子弹,口袋里有一张写着六个名字的纸条,而他不记得自己是谁。",
        "url": "./movies/movie-621.html",
        "image": "./21.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "蜘蛛侠:平行宇宙",
        "year": "2027",
        "region": "美国",
        "type": "电影",
        "genre": "动画,动作,科幻",
        "tags": [
            "多元宇宙",
            "视觉革命",
            "蜘蛛格温",
            "迈尔斯",
            "宿命对决"
        ],
        "oneLine": "迈尔斯在一次维度崩塌中遇见了另一个宇宙的自己,对方却想杀死所有蜘蛛侠。",
        "url": "./movies/movie-622.html",
        "image": "./22.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "童话镇第五季",
        "year": "2025",
        "region": "美国",
        "type": "电视剧",
        "genre": "奇幻/冒险/剧情",
        "tags": [
            "童话破灭",
            "暗黑童话",
            "平行宇宙",
            "角色黑化",
            "跨次元战争"
        ],
        "oneLine": "当所有童话人物都意识到自己只是“被书写者”时,他们决定杀死那个写故事的人。",
        "url": "./movies/movie-623.html",
        "image": "./23.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "进击的皇后之真假皇后",
        "year": "2022",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装/爱情/奇幻",
        "tags": [
            "替身",
            "失忆",
            "宫廷权谋"
        ],
        "oneLine": "嚣张跋扈的真皇后落水失忆,竟被一个长相酷似她的民间绣女冒名顶替,当她找回记忆归来,却发现无人信她。",
        "url": "./movies/movie-624.html",
        "image": "./24.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "黑皮书",
        "year": "2006",
        "region": "荷兰/德国",
        "type": "电影",
        "genre": "惊悚、战争",
        "tags": [
            "二战",
            "女间谍",
            "犹太幸存者",
            "背叛",
            "黑色电影"
        ],
        "oneLine": "二战末期,犹太女歌手为复仇潜入纳粹内部,却发现真正的叛徒藏在抵抗组织高层。",
        "url": "./movies/movie-625.html",
        "image": "./25.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "后宫",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情,古装",
        "tags": [
            "女性群像",
            "权谋",
            "深宫"
        ],
        "oneLine": "冷宫废妃意外获得了能看到他人命运轨迹的能力,她决定改写所有人的结局。",
        "url": "./movies/movie-626.html",
        "image": "./26.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "李茶的姑妈",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧/舞台剧改编",
        "tags": [
            "开心麻花",
            "性别扮演",
            "金钱讽刺"
        ],
        "oneLine": "两个破产富二代扮成姑妈的“干儿子”争遗产,结果真姑妈是个23岁的电竞主播。",
        "url": "./movies/movie-627.html",
        "image": "./27.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "希尔达与山怪王",
        "year": "2025",
        "region": "英国/加拿大",
        "type": "动画电影",
        "genre": "动画,奇幻,冒险",
        "tags": [
            "北欧神话",
            "治愈",
            "环保"
        ],
        "oneLine": "蓝发女孩希尔达为了拯救被山怪诅咒的小镇,必须孤身进入地底世界,向浑身石化的山怪王问一个关于“孤独”的问题。",
        "url": "./movies/movie-628.html",
        "image": "./28.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "战栗第六感",
        "year": "2023",
        "region": "美国",
        "type": "剧集",
        "genre": "悬疑/惊悚/超自然",
        "tags": [
            "灵媒",
            "连环命案",
            "高概念"
        ],
        "oneLine": "一位盲人灵媒能看见死者最后的记忆,但她必须触碰凶手才能找到真相。",
        "url": "./movies/movie-629.html",
        "image": "./29.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "私刑教育",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动作,惊悚,犯罪",
        "tags": [
            "以暴制暴",
            "复仇",
            "前特工",
            "司法漏洞"
        ],
        "oneLine": "退休法警专对逍遥法外的罪犯实施“私人判决”,直到遇上最危险的猎物。",
        "url": "./movies/movie-630.html",
        "image": "./30.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "巅峰拍档第一季",
        "year": "2025",
        "region": "英国",
        "type": "综艺",
        "genre": "真人秀,汽车",
        "tags": [
            "赛车",
            "挑战",
            "毒舌",
            "公路旅行",
            "爆改"
        ],
        "oneLine": "三个风格迥异的中年大叔,每期用一堆废旧零件造车,完成不可能的任务,顺便把彼此损得体无完肤。",
        "url": "./movies/movie-631.html",
        "image": "./31.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "大约三十个谎言",
        "year": "2023",
        "region": "日本",
        "type": "电影",
        "genre": "悬疑,剧情",
        "tags": [
            "密闭空间",
            "全员恶人",
            "罗生门"
        ],
        "oneLine": "六名诈骗团伙成员在逃亡大巴上复盘行动,每个人讲述的版本都指向自己是唯一的“好人”。",
        "url": "./movies/movie-632.html",
        "image": "./32.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "邪恶勿语",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "心理惊悚",
        "tags": [
            "邪教",
            "封闭空间",
            "反转",
            "人性"
        ],
        "oneLine": "一对夫妻受邀到乡下庄园度假,却发现主人从不说话,只用手语交流。",
        "url": "./movies/movie-633.html",
        "image": "./33.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "美好未来",
        "year": "2028",
        "region": "中国大陆",
        "type": "电影",
        "genre": "科幻,剧情",
        "tags": [
            "时间循环",
            "自我救赎",
            "伦理困境"
        ],
        "oneLine": "落魄程序员意外获得能看到未来五分钟的眼镜,却发现自己每次拯救灾难都会导致更严重的后果。",
        "url": "./movies/movie-634.html",
        "image": "./34.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "卡夫卡2024",
        "year": "2024",
        "region": "美国/德国",
        "type": "电影",
        "genre": "科幻/剧情",
        "tags": [
            "卡夫卡式荒诞",
            "算法统治",
            "存在主义"
        ],
        "oneLine": "K 先生一觉醒来,发现自己变成了一个bug——整个社会由“系统”管理,而他无法被系统识别。",
        "url": "./movies/movie-635.html",
        "image": "./35.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "作家不跳舞:等待贝克特",
        "year": "2025",
        "region": "法国,爱尔兰",
        "type": "电影",
        "genre": "剧情,传记,文艺",
        "tags": [
            "贝克特",
            "作家",
            "创作困境",
            "哲学"
        ],
        "oneLine": "1969年,诺奖得主贝克特躲在巴黎旅馆拒绝一切采访,一个不知名的小记者用一封手写信敲开了他的房门。",
        "url": "./movies/movie-636.html",
        "image": "./36.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "大侠霍元甲2020",
        "year": "2020",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "动作/剧情/传记",
        "tags": [
            "武术",
            "民族精神",
            "精武门",
            "传奇",
            "新编"
        ],
        "oneLine": "新版霍元甲故事,聚焦他从一个鲁莽的津门武者,成长为心怀民族大义的一代宗师的完整心路。",
        "url": "./movies/movie-637.html",
        "image": "./37.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "反对夫人哈德利之战",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "剧情/历史/女性",
        "tags": [
            "维多利亚时代",
            "寡妇维权",
            "遗产诉讼",
            "女性独立",
            "法庭辩论"
        ],
        "oneLine": "1887年,一名寡妇为了保住亡夫留下的煤矿,独自在伦敦高等法院对阵整个矿业协会。",
        "url": "./movies/movie-638.html",
        "image": "./38.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "两头滚",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧/公路/运动",
        "tags": [
            "街头板球",
            "非遗保护",
            "废柴逆袭",
            "城乡结合部"
        ],
        "oneLine": "两个在城中村收废品的兄弟,意外被选为“中国民间板球国家队”唯二成员。",
        "url": "./movies/movie-639.html",
        "image": "./39.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "弱女情缘",
        "year": "1989",
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情、剧情",
        "tags": [
            "苦情戏",
            "绝症",
            "阶级差异",
            "乡土爱情",
            "催泪"
        ],
        "oneLine": "富家千金因病失明后被家族抛弃,唯有一直暗恋她的花农儿子不离不弃。",
        "url": "./movies/movie-640.html",
        "image": "./40.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "古田1929",
        "year": "2029",
        "region": "中国大陆",
        "type": "电影",
        "genre": "历史/传记/战争",
        "tags": [
            "古田会议",
            "红军",
            "思想建党",
            "革命史诗"
        ],
        "oneLine": "1929年冬天,一场篝火旁的九天会议,决定了这支军队后来的颜色。",
        "url": "./movies/movie-641.html",
        "image": "./41.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "无负今日",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情",
        "tags": [
            "人生选择",
            "重启",
            "中年危机",
            "治愈"
        ],
        "oneLine": "一个在火葬场工作了二十年的沉默焚化师,被误诊为绝症后,决定用最后的钱去替陌生人完成遗愿清单。",
        "url": "./movies/movie-642.html",
        "image": "./42.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "迫在眉梢",
        "year": "2024",
        "region": "中国大陆",
        "type": "网络微短剧",
        "genre": "悬疑,剧情,犯罪",
        "tags": [
            "竖屏",
            "高能反转",
            "实时叙事",
            "惊悚"
        ],
        "oneLine": "女儿被绑匪锁在冰库,父亲必须在手机电量耗尽前,从全网弹幕中找到那个唯一的接头暗号。",
        "url": "./movies/movie-643.html",
        "image": "./43.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "超感默示录",
        "year": "2019",
        "region": "美国",
        "type": "剧集",
        "genre": "科幻/悬疑",
        "tags": [
            "超感知",
            "预知未来",
            "政府阴谋",
            "末日"
        ],
        "oneLine": "全球0.1%的人突然获得超感能力,可预见的不是未来,而是每个人死亡瞬间的惨叫声。",
        "url": "./movies/movie-644.html",
        "image": "./44.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "不能就这样死去",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧,剧情,荒诞",
        "tags": [
            "绝症",
            "遗愿清单",
            "黑色幽默",
            "生死"
        ],
        "oneLine": "一个癌症晚期的抠门会计被误诊为“只剩三天”,他决定花光所有积蓄报复社会,结果报复得太成功停不下来了。",
        "url": "./movies/movie-645.html",
        "image": "./45.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "一子错",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情,犯罪,动作",
        "tags": [
            "象棋",
            "黑帮",
            "悔棋"
        ],
        "oneLine": "一名落魄象棋大师在帮派火并中下了一步“悔棋”,竟导致整个地下势力重新洗牌。",
        "url": "./movies/movie-646.html",
        "image": "./46.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "小女神花铃",
        "year": "2023",
        "region": "日本",
        "type": "动画",
        "genre": "奇幻冒险",
        "tags": [
            "变身少女",
            "远古遗迹",
            "女神转世",
            "萌系画风"
        ],
        "oneLine": "平凡少女捡到一枚古戒,意外唤醒了体内沉睡的远古女神力量。",
        "url": "./movies/movie-647.html",
        "image": "./47.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "飞向天空,救援之翼",
        "year": "2021",
        "region": "日本",
        "type": "电影",
        "genre": "剧情、灾难",
        "tags": [
            "航空救援",
            "牺牲",
            "师徒传承",
            "自然灾害",
            "使命感"
        ],
        "oneLine": "一名被停飞的直升机驾驶员,在一次百年一遇的暴雨洪灾中,违抗命令独自飞向被孤立的山区小学。",
        "url": "./movies/movie-648.html",
        "image": "./48.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "㓥脑行尸",
        "year": "2024",
        "region": "香港",
        "type": "电影",
        "genre": "恐怖/惊悚",
        "tags": [
            "丧尸",
            "密室",
            "心理惊悚",
            "暴力美学"
        ],
        "oneLine": "在一间狭窄的㓥房内,被感染的父亲逐渐丧尸化,儿子必须在彻底失去人性前亲手解剖他的大脑。",
        "url": "./movies/movie-649.html",
        "image": "./49.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "烈火情燄",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作,爱情,犯罪",
        "tags": [
            "消防员",
            "黑帮",
            "卧底",
            "港风",
            "虐恋"
        ],
        "oneLine": "女消防队长在一次火灾中救下了宿敌——黑帮大佬,却在朝夕相处中与他产生了禁忌之恋。",
        "url": "./movies/movie-650.html",
        "image": "./50.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "大明妖异录",
        "year": "2022",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "悬疑/奇幻/古装",
        "tags": [
            "锦衣卫",
            "妖物",
            "探案",
            "明朝",
            "志怪"
        ],
        "oneLine": "明朝永乐年间,京城频现妖异怪案,一名锦衣卫千户与一名神秘方士联手追查,却发现妖物皆是人造。",
        "url": "./movies/movie-651.html",
        "image": "./51.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "吾孩何方",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "寻亲",
            "城乡差异",
            "人性"
        ],
        "oneLine": "为寻被拐爱子倾家荡产,却找到甘愿留在养父母家的冷漠少年。",
        "url": "./movies/movie-652.html",
        "image": "./52.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "思家大战第二季",
        "year": "2024",
        "region": "中国香港",
        "type": "综艺",
        "genre": "真人秀",
        "tags": [
            "游戏",
            "家庭",
            "竞争",
            "情感"
        ],
        "oneLine": "升级版家庭问答秀,奖金翻倍,但题目直击家庭秘密,答错可能“家变”。",
        "url": "./movies/movie-653.html",
        "image": "./53.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "97家有喜事",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧、家庭、贺岁",
        "tags": [
            "多线叙事",
            "回归前夕",
            "家族饭局",
            "无厘头",
            "怀旧"
        ],
        "oneLine": "1997前夕,老梁家三个儿子同时带回女朋友,饭桌上每个人都在撒谎,每个人都在笑。",
        "url": "./movies/movie-654.html",
        "image": "./54.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "路西法第三季",
        "year": "2026",
        "region": "美国",
        "type": "剧集",
        "genre": "奇幻/犯罪/剧情",
        "tags": [
            "魔鬼侦探",
            "心理治疗",
            "天使内战",
            "洛杉矶"
        ],
        "oneLine": "路西法终于向克莱尔坦白了自己是魔鬼的事实,换来的不是拥抱,而是一颗银质子弹。",
        "url": "./movies/movie-655.html",
        "image": "./55.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "舒莎摇摇",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧,奇幻,动作",
        "tags": [
            "方言喜剧",
            "网红",
            "附身"
        ],
        "oneLine": "贵州山村女孩用直播带货的节奏喊麦,意外召唤出了六百年前苗族女英雄的灵魂,与自己共享身体。",
        "url": "./movies/movie-656.html",
        "image": "./56.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "金融恶魔 第一季",
        "year": "2025",
        "region": "英国/美国",
        "type": "电视剧 (第一季)",
        "genre": "剧情/惊悚/犯罪",
        "tags": [
            "暗网",
            "加密货币",
            "洗钱"
        ],
        "oneLine": "一名道德沦丧的金融天才打造了暗网最大黑市,却被自己创建的匿名加密货币反噬其身。",
        "url": "./movies/movie-657.html",
        "image": "./57.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "莫里斯",
        "year": "1987",
        "region": "英国",
        "type": "电影",
        "genre": "爱情/剧情/同性",
        "tags": [
            "剑桥",
            "禁忌之恋",
            "绅士爱情",
            "福斯特小说改编"
        ],
        "oneLine": "二十世纪初的英国剑桥,两个青年学子在柏拉图式的精神恋爱中挣扎,最终有人选择了压抑,有人选择了打破规则。",
        "url": "./movies/movie-658.html",
        "image": "./58.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "香闺惊魂",
        "year": "2021",
        "region": "西班牙",
        "type": "电影",
        "genre": "恐怖/心理",
        "tags": [
            "老宅",
            "香水",
            "记忆",
            "迷失",
            "女性"
        ],
        "oneLine": "一名失去嗅觉的调香师回到母亲的老宅,发现每间卧室的香水都能让她“闻”到可怕的谋杀记忆。",
        "url": "./movies/movie-659.html",
        "image": "./59.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "梅府有女初长成",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装/爱情/喜剧",
        "tags": [
            "宅斗",
            "女扮男装",
            "经商"
        ],
        "oneLine": "梅家大小姐为撑起败落家族,女扮男装成为商业奇才,却意外吸引了当朝摄政王的注意。",
        "url": "./movies/movie-660.html",
        "image": "./60.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "斩龙遇仙记",
        "year": "2026",
        "region": "中国",
        "type": "电影",
        "genre": "奇幻、古装、动作",
        "tags": [
            "修仙",
            "屠龙",
            "女性英雄",
            "东方特效",
            "冒险"
        ],
        "oneLine": "屠龙少女为救村庄斩下恶龙首级,却发现龙血所到之处草木疯长,更大的灾厄降临。",
        "url": "./movies/movie-661.html",
        "image": "./61.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "卡拉是条狗",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "宠物",
            "空巢老人",
            "寻找",
            "温暖"
        ],
        "oneLine": "一位丧偶的老太太为了找到被送走的狗,骑着三轮车横跨三个省,却发现狗比她过得好得多。",
        "url": "./movies/movie-662.html",
        "image": "./62.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "丧亡",
        "year": "2024",
        "region": "泰国",
        "type": "电影",
        "genre": "恐怖,惊悚,剧情",
        "tags": [
            "民俗恐怖",
            "家庭诅咒",
            "死亡仪式",
            "极简惊吓"
        ],
        "oneLine": "阿瑜陀耶王朝的古老丧葬仪式被孙女无意唤醒后,每举行一次“哭丧”,家中便有一人以最离奇的方式对应仪式内容死去。",
        "url": "./movies/movie-663.html",
        "image": "./63.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "少年江湖",
        "year": "2025",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "武侠,喜剧",
        "tags": [
            "反套路",
            "热血",
            "成长",
            "群像"
        ],
        "oneLine": "一个想当大侠的少年进了江湖第一大派,却发现师门主业是开连锁客栈,副业才是行侠仗义。",
        "url": "./movies/movie-664.html",
        "image": "./64.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "五尾狐",
        "year": "2010",
        "region": "韩国",
        "type": "电影",
        "genre": "动画/奇幻/冒险",
        "tags": [
            "狐妖",
            "身份认同",
            "人类背叛"
        ],
        "oneLine": "一只梦想变成人的五尾狐,在帮助人类后,却等来了猎人的箭。",
        "url": "./movies/movie-665.html",
        "image": "./65.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "疫年之初",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "现实主义",
        "tags": [
            "疫情",
            "社区",
            "百态人生",
            "单元剧"
        ],
        "oneLine": "武汉封城第一天,一个快递员、一个护士、一个宠物店主,三人的命运因一只猫缠绕在一起。",
        "url": "./movies/movie-666.html",
        "image": "./66.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "我就是90后",
        "year": "2022",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "青春/家庭/喜剧",
        "tags": [
            "年代剧",
            "怀旧",
            "独生子女",
            "成长"
        ],
        "oneLine": "从1998年抗洪到2020年抗疫,三个90后发小用23年证明他们不是“垮掉的一代”。",
        "url": "./movies/movie-667.html",
        "image": "./67.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "死命必达",
        "year": "2026",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作/喜剧/奇幻",
        "tags": [
            "外卖",
            "地府",
            "港式幽默",
            "跑酷"
        ],
        "oneLine": "一个废柴外卖员接到订单:把一碗孟婆汤送到地狱十八层,超时差评就魂飞魄散。",
        "url": "./movies/movie-668.html",
        "image": "./68.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "示意停车",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑/犯罪",
        "tags": [
            "公路",
            "测谎",
            "心理战",
            "密室"
        ],
        "oneLine": "交警在深夜拦下一辆黑色轿车,三分钟内发现司机与十年前连环失踪案有关。",
        "url": "./movies/movie-669.html",
        "image": "./69.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "人生七年2",
        "year": "2025",
        "region": "英国",
        "type": "电视剧",
        "genre": "纪录片式剧情,家庭,社会",
        "tags": [
            "成长追踪",
            "阶级",
            "真实时间",
            "原班人马"
        ],
        "oneLine": "时隔七年,原剧中的十四位主角再次回到镜头前,有人飞黄腾达,有人跌入谷底,有人永远缺席。",
        "url": "./movies/movie-670.html",
        "image": "./70.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "沙之痕",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "科幻,灾难",
        "tags": [
            "环保",
            "末世",
            "探险"
        ],
        "oneLine": "全球沙漠化加剧,沙暴中开始出现巨大的、用沙粒构成的远古生物痕迹。",
        "url": "./movies/movie-671.html",
        "image": "./71.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "生存",
        "year": "2022",
        "region": "美国",
        "type": "剧集",
        "genre": "剧情,冒险,灾难",
        "tags": [
            "荒野求生",
            "人性",
            "末日",
            "心理"
        ],
        "oneLine": "一场空难后,七名幸存者在无人荒岛上不仅要对抗自然,更要对抗彼此的人性深渊。",
        "url": "./movies/movie-672.html",
        "image": "./72.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "遥远的距离",
        "year": "2025",
        "region": "德国/奥地利",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "母女",
            "阿尔茨海默",
            "回忆",
            "和解",
            "公路"
        ],
        "oneLine": "为了找回母亲丢失的记忆,女儿开车带她重访50年前的逃亡路线。",
        "url": "./movies/movie-673.html",
        "image": "./73.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "心灵的故事",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "剧情/奇幻",
        "tags": [
            "心理学",
            "治愈",
            "梦境冒险"
        ],
        "oneLine": "一名陷入抑郁的插画师意外进入病人潜意识,发现自己才是需要被治愈的人。",
        "url": "./movies/movie-674.html",
        "image": "./74.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "街头素花姐第一季",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情/都市/女性",
        "tags": [
            "摆摊",
            "市井烟火",
            "女性互助",
            "逆袭"
        ],
        "oneLine": "一个穿碎花裙卖炒面的单亲妈妈,成了整条美食街的“地下城管”,连收保护费的大哥都找她调解离婚。",
        "url": "./movies/movie-675.html",
        "image": "./75.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "少年派",
        "year": "2022",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "青春/校园/家庭",
        "tags": [
            "高考",
            "亲子关系",
            "成长"
        ],
        "oneLine": "四个高三家庭在最后一百天里,从互不理解到狼狈为奸一起对抗学校。",
        "url": "./movies/movie-676.html",
        "image": "./76.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "国际大缚票",
        "year": "1992",
        "region": "香港",
        "type": "电影",
        "genre": "喜剧,动作,犯罪",
        "tags": [
            "绑票",
            "乌龙",
            "跨国犯罪",
            "港式无厘头",
            "错摸"
        ],
        "oneLine": "四个想当绑匪的废柴,意外绑走了潜伏在香港的国际恐怖组织头目,结果被全球六大情报机构同时盯上。",
        "url": "./movies/movie-677.html",
        "image": "./77.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "夏天19岁的肖像",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "爱情,悬疑,青春",
        "tags": [
            "青春伤痕",
            "跟踪",
            "秘密",
            "夏日"
        ],
        "oneLine": "19岁那年夏天,他偷窥对面别墅的女孩,却意外拍下了一起完美谋杀案。",
        "url": "./movies/movie-678.html",
        "image": "./78.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "雪莱",
        "year": "2026",
        "region": "英国/瑞士",
        "type": "电影",
        "genre": "传记/恐怖/悬疑",
        "tags": [
            "玛丽·雪莱",
            "弗兰肯斯坦",
            "创作起源"
        ],
        "oneLine": "一个雨夜,诗人拜伦向众人发起写鬼故事的挑战,而玛丽·雪莱却从墙上的一幅旧画像里,看见了一个正在“被制造”的活人。",
        "url": "./movies/movie-679.html",
        "image": "./79.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "人中之龙 ~序章~",
        "year": "2007",
        "region": "日本",
        "type": "电影/剧集",
        "genre": "动作/犯罪",
        "tags": [
            "极道",
            "改编游戏",
            "热血",
            "兄弟情"
        ],
        "oneLine": "1995年神室町,“堂岛之龙”桐生一马替兄弟顶罪入狱,十年后出狱,面对的却是故人的背叛与养女的失踪。",
        "url": "./movies/movie-680.html",
        "image": "./80.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "飞吧!道格拉斯",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "动画/家庭",
        "tags": [
            "定格动画",
            "鸟类迁徙",
            "父子关系",
            "成长",
            "治愈"
        ],
        "oneLine": "一只恐高的信鸽儿子,为了找回失踪的邮差父亲,被迫开启第一次飞行。",
        "url": "./movies/movie-681.html",
        "image": "./81.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "魔鬼终结者2立体版",
        "year": "2029",
        "region": "美国",
        "type": "电影",
        "genre": "动作/科幻",
        "tags": [
            "3D重制",
            "T-800回归",
            "液态金属",
            "经典复刻",
            "公路追杀"
        ],
        "oneLine": "T-800再次穿越时空,但这一次,它必须保护年迈的莎拉·康纳不受来自未来的更先进液态金属刺客的追杀。",
        "url": "./movies/movie-682.html",
        "image": "./82.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "妙先生之火泽睽笑人传",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动画",
        "tags": [
            "奇幻",
            "武侠",
            "国风",
            "暗黑",
            "治愈"
        ],
        "oneLine": "一个只会傻笑的哑巴少年,为了拯救被瘟疫吞噬的村庄,自愿变成一把能斩断因果的剑。",
        "url": "./movies/movie-683.html",
        "image": "./83.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "活著就是为了作证",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,历史,传记",
        "tags": [
            "时代伤痕",
            "记忆",
            "真相",
            "执着"
        ],
        "oneLine": "一位老人用六十年时间收集一棵树下的弹壳,只为证明三个孩子不是死于意外。",
        "url": "./movies/movie-684.html",
        "image": "./84.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "绀田照的合法食谱",
        "year": "2024",
        "region": "日本",
        "type": "剧集",
        "genre": "剧情,喜剧,犯罪",
        "tags": [
            "黑道",
            "美食",
            "反差萌",
            "复仇"
        ],
        "oneLine": "黑道少主绀田照为了在帮派斗争中活下去,必须每晚按照一本神秘食谱烹饪,否则就会死。",
        "url": "./movies/movie-685.html",
        "image": "./85.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "东京生死恋",
        "year": "2025",
        "region": "日本",
        "type": "剧集",
        "genre": "爱情悬疑",
        "tags": [
            "绝症",
            "时空循环",
            "记忆",
            "救赎"
        ],
        "oneLine": "女友只剩七天生命,男主每次亲吻她就会穿越回七年前的初遇。",
        "url": "./movies/movie-686.html",
        "image": "./86.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "暗杀龙马",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "历史,悬疑,动作",
        "tags": [
            "幕末",
            "坂本龙马",
            "时间旅行",
            "历史改写"
        ],
        "oneLine": "近未来日本派出特工回到1867年保护坂本龙马,却发现另一队人马也穿越而来——为暗杀他。",
        "url": "./movies/movie-687.html",
        "image": "./87.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "远方有多远",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,公路,文艺",
        "tags": [
            "迷失",
            "寻找",
            "西藏",
            "心灵之旅"
        ],
        "oneLine": "一个患了绝症的白领和一个人工智能机器人,开着一辆老爷车,踏上了寻找“人类最后纯净之地”的旅程。",
        "url": "./movies/movie-688.html",
        "image": "./88.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "雨中的乘客",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情,悬疑,惊悚",
        "tags": [
            "出租车",
            "雨夜",
            "密闭空间",
            "心理博弈"
        ],
        "oneLine": "暴雨夜,出租车司机载了一位沉默的女客,导航却显示她的目的地是一座早已搬迁的乱葬岗。",
        "url": "./movies/movie-689.html",
        "image": "./89.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "七月圣诞",
        "year": "1940",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧/爱情",
        "tags": [
            "经典",
            "谎言",
            "职场"
        ],
        "oneLine": "小职员被同事恶搞,以为中了五万美金的彩票头奖,于是他决定炒掉吝啬的老板。",
        "url": "./movies/movie-690.html",
        "image": "./90.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "爱与性,我们的30岁",
        "year": "2024",
        "region": "日本",
        "type": "电视剧",
        "genre": "爱情,剧情",
        "tags": [
            "都市情感",
            "而立之年",
            "亲密关系"
        ],
        "oneLine": "三十岁生日当晚,四位好友在KTV包间里玩起真心话大冒险,却意外揭开了彼此婚姻与恋爱的致命谎言。",
        "url": "./movies/movie-691.html",
        "image": "./91.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "恋爱救火队",
        "year": "2018",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "喜剧/爱情/职场",
        "tags": [
            "单元剧",
            "分手专家",
            "都市",
            "治愈"
        ],
        "oneLine": "三个自称“分手专家”的年轻人,专门替委托人解决不合适的恋情,却总把自己搞得一身骚。",
        "url": "./movies/movie-692.html",
        "image": "./92.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "重返20岁",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "奇幻/喜剧",
        "tags": [
            "变年轻",
            "追梦",
            "家庭关系",
            "代沟"
        ],
        "oneLine": "七十岁的恶婆婆被雷劈后变回二十岁,她决定参加女团选秀,没想到评委是自家孙女。",
        "url": "./movies/movie-693.html",
        "image": "./93.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "假圣诞老人",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧,奇幻,家庭",
        "tags": [
            "圣诞",
            "冒牌货",
            "愿望",
            "温情"
        ],
        "oneLine": "一个落魄的商场假圣诞老人无意中偷走了一个男孩的愿望信,结果被迫代替真正的圣诞老人去送礼物。",
        "url": "./movies/movie-694.html",
        "image": "./94.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "船长的魔法钻石",
        "year": "2026",
        "region": "英国",
        "type": "电影",
        "genre": "奇幻家庭",
        "tags": [
            "海盗",
            "许愿",
            "成长代价"
        ],
        "oneLine": "孤儿少年捡到一颗能实现任何愿望的钻石,但每次许愿都会让他的身体变成钻石。",
        "url": "./movies/movie-695.html",
        "image": "./95.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "2024青春芒果节",
        "year": "2024",
        "region": "中国大陆",
        "type": "综艺/晚会",
        "genre": "真人秀,音乐",
        "tags": [
            "直播",
            "偶像",
            "狂欢"
        ],
        "oneLine": "一次直播事故导致所有节目被取消,明星和素人观众在空荡荡的场馆里,上演了一场自发的“自救演唱会”。",
        "url": "./movies/movie-696.html",
        "image": "./96.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "居留此地",
        "year": "2025",
        "region": "法国/比利时",
        "type": "电影",
        "genre": "剧情/移民",
        "tags": [
            "难民",
            "归属感",
            "足球"
        ],
        "oneLine": "叙利亚难民少年在比利时临时居留中心靠足球天赋入选青训营,但身份文件即将过期。",
        "url": "./movies/movie-697.html",
        "image": "./97.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "黑道家族 第二季",
        "year": "2026",
        "region": "美国",
        "type": "剧集",
        "genre": "犯罪,剧情,惊悚",
        "tags": [
            "家族斗争",
            "权力游戏",
            "暴力升级",
            "心理战"
        ],
        "oneLine": "老大入狱,群龙无首,二代们掀起的权力内斗,将整个家族拖入毁灭深渊。",
        "url": "./movies/movie-698.html",
        "image": "./98.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "暗黑骰子",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "悬疑,奇幻",
        "tags": [
            "游戏",
            "生死",
            "抉择"
        ],
        "oneLine": "失业男子得到一个骰子,掷出双数则遇好运,单数则亲人遭遇灾祸,他该如何掷出下一次?",
        "url": "./movies/movie-699.html",
        "image": "./99.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "田园心声",
        "year": "2025",
        "region": "中国",
        "type": "剧集",
        "genre": "家庭",
        "tags": [
            "乡村振兴",
            "创业",
            "亲情",
            "治愈",
            "轻喜剧"
        ],
        "oneLine": "落魄城市设计师带着女儿回乡改造老宅,却意外点燃了整个村庄的复兴希望。",
        "url": "./movies/movie-700.html",
        "image": "./100.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "鞭子与肉体",
        "year": "1972",
        "region": "意大利",
        "type": "电影",
        "genre": "恐怖/惊悚/情色",
        "tags": [
            "哥特",
            "虐待",
            "家族秘密",
            "意大利铅黄",
            "心理扭曲"
        ],
        "oneLine": "女伯爵在新婚之夜被已故情人的幽灵纠缠,而他手中的鞭子既是刑具也是欲望的信物。",
        "url": "./movies/movie-701.html",
        "image": "./101.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "情同陌路",
        "year": "2023",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情,家庭",
        "tags": [
            "失忆",
            "亲情",
            "治愈",
            "身份认同"
        ],
        "oneLine": "一对因意外失忆的母女,在病房里重新认识彼此,却揭开了家庭尘封二十年的谎言。",
        "url": "./movies/movie-702.html",
        "image": "./102.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "女人的日历",
        "year": "2020",
        "region": "日本",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "日常",
            "女性成长",
            "代际",
            "治愈"
        ],
        "oneLine": "一家三代女人共享一本记录了六十年的家庭日历,每撕下一页,都揭开一段尘封的秘密与和解。",
        "url": "./movies/movie-703.html",
        "image": "./103.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "消失爱人",
        "year": "2027",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑,爱情",
        "tags": [
            "失忆",
            "偷换人生",
            "心理悬疑",
            "都市",
            "女性"
        ],
        "oneLine": "车祸失忆的女人醒来,被告知自己是豪门太太,但她从镜子里认出,那是闺蜜的脸。",
        "url": "./movies/movie-704.html",
        "image": "./104.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "大兵游戏",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "战争/悬疑/心理惊悚",
        "tags": [
            "军事",
            "封闭空间",
            "心理操控",
            "人性实验",
            "反转结局"
        ],
        "oneLine": "六名士兵被送入地下堡垒模拟核战后的生存,却发现这根本不是演习,而是一场真实的屠杀游戏。",
        "url": "./movies/movie-705.html",
        "image": "./105.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "芭比与胡桃钳的梦幻之旅",
        "year": "2025",
        "region": "美国",
        "type": "动画电影",
        "genre": "奇幻/冒险",
        "tags": [
            "玩具总动员风格",
            "梦境穿梭",
            "自我觉醒",
            "古典配乐"
        ],
        "oneLine": "芭比和胡桃钳为修复破碎的时钟王国,必须在午夜前找到失落的三颗魔法齿轮。",
        "url": "./movies/movie-706.html",
        "image": "./106.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "古城艳盗",
        "year": "2023",
        "region": "中国香港",
        "type": "电影",
        "genre": "冒险,喜剧,动作",
        "tags": [
            "寻宝",
            "女盗",
            "古城机关"
        ],
        "oneLine": "为了偷回失窃的国宝,国际大盗不得不与古城里的土味骗子联手。",
        "url": "./movies/movie-707.html",
        "image": "./107.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "武逆第三季",
        "year": "2026",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "动画/奇幻/热血",
        "tags": [
            "修仙",
            "逆袭",
            "法相天地",
            "大结局"
        ],
        "oneLine": "凡体少年逆天改命,为救苍生,他甘愿成为众神之敌。",
        "url": "./movies/movie-708.html",
        "image": "./108.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "艾尔·葛雷柯",
        "year": "2007",
        "region": "西班牙/希腊",
        "type": "电影",
        "genre": "剧情",
        "tags": [
            "传记",
            "艺术",
            "画家",
            "历史",
            "文艺复兴"
        ],
        "oneLine": "中世纪画坛怪杰艾尔·葛雷柯,在异乡用扭曲的画笔对抗世俗的偏见与教会的压迫。",
        "url": "./movies/movie-709.html",
        "image": "./109.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "你好,再见",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情/奇幻",
        "tags": [
            "时空循环",
            "分手",
            "遗憾",
            "治愈"
        ],
        "oneLine": "分手那天,女孩获得了超能力:能随时回到过去,但却只能对前男友说“你好”和“再见”。",
        "url": "./movies/movie-710.html",
        "image": "./110.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "二十美圆",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "剧情犯罪",
        "tags": [
            "环形叙事",
            "黑色幽默",
            "蝴蝶效应",
            "金钱"
        ],
        "oneLine": "一张编号连号的二十美元假钞,在24小时内辗转十人之手,最终引发了城市大暴动。",
        "url": "./movies/movie-711.html",
        "image": "./111.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "暗泳",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "悬疑,惊悚,体育",
        "tags": [
            "游泳馆",
            "夜班",
            "水鬼",
            "体制内",
            "都市传说"
        ],
        "oneLine": "一名失眠症患者应聘了老旧游泳馆的夜班救生员,却发现每天凌晨2点,水里会多出一个泳道。",
        "url": "./movies/movie-712.html",
        "image": "./112.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "我和我的儿女们",
        "year": "2019",
        "region": "中国",
        "type": "电视剧",
        "genre": "家庭伦理",
        "tags": [
            "养老",
            "啃老",
            "遗产争夺",
            "父爱"
        ],
        "oneLine": "退休老校长患上阿尔茨海默症后,记忆停在三十年前,把三个啃老儿女当成了当年的学生,每天给他们留作业。",
        "url": "./movies/movie-713.html",
        "image": "./113.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "打骗行动之你被盯上了",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "刑侦、悬疑、剧情",
        "tags": [
            "电信诈骗",
            "反诈",
            "单元剧",
            "普法"
        ],
        "oneLine": "反诈中心新来了一位天才画像师,他能根据受害者三言两语的描述,画出骗子的心理画像,甚至预测行骗地点。",
        "url": "./movies/movie-714.html",
        "image": "./114.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "你是猪",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "喜剧,爱情,奇幻",
        "tags": [
            "奇幻设定",
            "毒舌互怼",
            "真香定律",
            "反差萌",
            "治愈"
        ],
        "oneLine": "毒舌女总裁被诅咒:只要说谎就会变成猪,而她的真命天子竟是全公司最讨厌的那个憨憨男。",
        "url": "./movies/movie-715.html",
        "image": "./115.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "开膛手的名单",
        "year": "2025",
        "region": "英国",
        "type": "剧集",
        "genre": "犯罪,悬疑",
        "tags": [
            "开膛手杰克",
            "连环杀手",
            "女记者",
            "维多利亚时代",
            "模仿犯"
        ],
        "oneLine": "白教堂再现开膛手手法的凶案,女记者发现死者竟全是当年为掩盖真相而“被死亡”的证人。",
        "url": "./movies/movie-716.html",
        "image": "./116.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "失窃画作的假设",
        "year": "2018",
        "region": "法国",
        "type": "电影",
        "genre": "悬疑,剧情,艺术",
        "tags": [
            "艺术",
            "侦探",
            "哲学",
            "仿纪录片",
            "画作"
        ],
        "oneLine": "一幅名画失窃六年后,一名艺术侦探用“重演犯罪”的方式,试图还原那不可能被偷走的画。",
        "url": "./movies/movie-717.html",
        "image": "./117.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "基本悬凶",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "悬疑/犯罪/剧情",
        "tags": [
            "本格推理",
            "数学天才",
            "连环杀手",
            "单元+主线"
        ],
        "oneLine": "一个患有自闭症的数学天才教授,用概率论和逻辑学帮警探破案,但他发现自己就是下一个连环杀手的目标。",
        "url": "./movies/movie-718.html",
        "image": "./118.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "猛鬼佛跳墙",
        "year": "1988",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧/恐怖",
        "tags": [
            "僵尸",
            "功夫",
            "佛跳墙",
            "茅山术",
            "无厘头"
        ],
        "oneLine": "道士用佛跳墙封印了猛鬼,不料贪吃徒弟偷吃,猛鬼逃出,厨师大乱斗。",
        "url": "./movies/movie-719.html",
        "image": "./119.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "毒魔复仇",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "动作/科幻/恐怖/喜剧",
        "tags": [
            "反英雄",
            "化学污染",
            "畸形变异",
            "B级片",
            "血腥暴力"
        ],
        "oneLine": "一个被化学废料毁容的懦弱清洁工,变成了浑身是毒的畸形怪物,开始对污染巨头进行血色审判。",
        "url": "./movies/movie-720.html",
        "image": "./120.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "好莱坞巨猿",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "科幻,动作,灾难",
        "tags": [
            "怪兽电影",
            "特效大片",
            "致敬经典",
            "环保主题",
            "城市破坏"
        ],
        "oneLine": "好莱坞翻拍经典金刚,谁知特效太逼真唤醒了一只真正的太古巨猿。",
        "url": "./movies/movie-721.html",
        "image": "./121.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "菊花香",
        "year": "2003",
        "region": "韩国",
        "type": "电影",
        "genre": "爱情,剧情,经典",
        "tags": [
            "绝恋",
            "纯爱",
            "悲剧",
            "原著改编",
            "绝症"
        ],
        "oneLine": "电台制作人爱上患有绝症的女孩,他们的爱情像菊花般清冷,也像菊花般倔强。",
        "url": "./movies/movie-722.html",
        "image": "./122.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "新宿小偷日记",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "剧情/文艺/犯罪",
        "tags": [
            "新宿",
            "小偷",
            "日记体",
            "孤独",
            "都市"
        ],
        "oneLine": "一个只偷过期杂志和旧照片的小偷,把赃物做成日记,寄给他在世上唯一的朋友——他的前女友。",
        "url": "./movies/movie-723.html",
        "image": "./123.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "超高速!参勤交代",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "喜剧/历史/动作",
        "tags": [
            "江户时代",
            "武士",
            "公路片",
            "热血"
        ],
        "oneLine": "藩主必须在五天内从江户赶回领地,否则藩国将被除名,而他只有三个废柴家臣。",
        "url": "./movies/movie-724.html",
        "image": "./124.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "大显神威",
        "year": "2023",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧,动作,奇幻",
        "tags": [
            "乩童",
            "超级英雄",
            "降头",
            "爆笑"
        ],
        "oneLine": "过气乩童意外获得神仙附体的超能力,却因神力时灵时不灵,带着废柴徒弟硬闯跨国降头师老巢。",
        "url": "./movies/movie-725.html",
        "image": "./125.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "盲途",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "犯罪/惊悚",
        "tags": [
            "盲人",
            "密室逃脱",
            "高智商犯罪",
            "感官剥夺"
        ],
        "oneLine": "一位盲人调音师误入连环杀手的地下室,他必须在黑暗中靠听觉活过今晚。",
        "url": "./movies/movie-726.html",
        "image": "./126.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "失踪顺序",
        "year": "2027",
        "region": "瑞典,丹麦",
        "type": "电影",
        "genre": "犯罪,惊悚,黑色幽默",
        "tags": [
            "北欧",
            "铲雪工",
            "复仇",
            "黑帮",
            "冷幽默"
        ],
        "oneLine": "一个铲雪车司机为了给儿子报仇,按“失踪顺序”干掉了整个黑帮,却在最后发现杀错了人。",
        "url": "./movies/movie-727.html",
        "image": "./127.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "春满乾坤福满门",
        "year": "2023",
        "region": "中国香港",
        "type": "电影",
        "genre": "贺岁,喜剧,家庭",
        "tags": [
            "过年",
            "风水",
            "争产",
            "乌龙",
            "群星"
        ],
        "oneLine": "除夕夜,风水大师预言乾坤颠倒,一家三代为抢“福位”闹翻天。",
        "url": "./movies/movie-728.html",
        "image": "./128.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "密室大逃脱第七季",
        "year": "2025",
        "region": "中国大陆",
        "type": "综艺",
        "genre": "真人秀,悬疑,解谜",
        "tags": [
            "密室",
            "烧脑",
            "团综",
            "恐怖"
        ],
        "oneLine": "全明星阵容再度集结,这次他们将挑战全球最难密室,在沉浸式电影级场景中,命悬一线,唯有团结才能逃出。",
        "url": "./movies/movie-729.html",
        "image": "./129.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "孤岛求生",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "冒险/灾难/悬疑",
        "tags": [
            "荒岛",
            "生存技巧",
            "人性异化",
            "团体合作",
            "心理博弈"
        ],
        "oneLine": "八个互不相识的人参加一档巨额奖金的荒岛生存真人秀,却发现摄像机背后没有导演,只有死亡陷阱。",
        "url": "./movies/movie-730.html",
        "image": "./130.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "艾维奇的真实故事",
        "year": "2017",
        "region": "瑞典",
        "type": "纪录片",
        "genre": "纪录片/音乐/传记",
        "tags": [
            "Avicii",
            "EDM",
            "巡演压力",
            "心理健康",
            "英年早逝"
        ],
        "oneLine": "已故DJ Avicii生前私密影像公开,揭露了他在聚光灯下的孤独、焦虑与对自由的渴望。",
        "url": "./movies/movie-731.html",
        "image": "./131.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "联林珍奇",
        "year": "2025",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "古装,悬疑,探案",
        "tags": [
            "对联",
            "破案",
            "才子",
            "智斗",
            "文化悬疑"
        ],
        "oneLine": "一副副暗藏杀机的对联,是连环杀人犯留给大理寺的唯一线索。",
        "url": "./movies/movie-732.html",
        "image": "./132.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "新婚乐逃逃",
        "year": "2021",
        "region": "中国台湾",
        "type": "电影",
        "genre": "喜剧/爱情",
        "tags": [
            "公路",
            "乌龙",
            "婚前恐惧",
            "爆笑"
        ],
        "oneLine": "婚礼当天突然悔婚的新娘,坐上了同样逃婚的陌生新郎的顺风车,一路乌龙狂奔。",
        "url": "./movies/movie-733.html",
        "image": "./133.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "陪我走下去",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "剧情/治愈",
        "tags": [
            "残疾",
            "导盲犬",
            "成长",
            "温暖"
        ],
        "oneLine": "失明女孩与一条退役导盲犬,在绝望的荒野上互相成为彼此的“眼睛”与“腿”。",
        "url": "./movies/movie-734.html",
        "image": "./134.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "红旗谱1960",
        "year": "1960",
        "region": "中国大陆",
        "type": "电影",
        "genre": "历史、剧情",
        "tags": [
            "土地革命",
            "锁井镇",
            "农民抗争",
            "红色经典",
            "阶级觉醒"
        ],
        "oneLine": "因为一口古钟,两代农民与地主展开了长达三十年的血泪抗争,红旗卷起时,正是复仇日。",
        "url": "./movies/movie-735.html",
        "image": "./135.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "圆圈",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "科幻/惊悚",
        "tags": [
            "科技反乌托邦",
            "隐私",
            "极简美学"
        ],
        "oneLine": "入住一个智能到可以满足你一切需求的圆形社区后,你的每一次心跳、每一次眨眼都变成了商品。",
        "url": "./movies/movie-736.html",
        "image": "./136.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "飞行者",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "传记,剧情",
        "tags": [
            "航空",
            "冒险",
            "梦想",
            "传奇"
        ],
        "oneLine": "一位天赋异禀的飞行器发明家,在追逐蓝天梦想的过程中,与地心引力和内心恐惧展开终极较量。",
        "url": "./movies/movie-737.html",
        "image": "./137.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "陌生人的事",
        "year": "2026",
        "region": "法国",
        "type": "剧集",
        "genre": "剧情/悬疑",
        "tags": [
            "邻居",
            "偷窥",
            "秘密",
            "公寓楼"
        ],
        "oneLine": "一栋巴黎老公寓里,所有住户都是陌生人,但他们的阳台互相可见,秘密像内衣一样挂在外面。",
        "url": "./movies/movie-738.html",
        "image": "./138.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "大汗征西",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "历史、战争、史诗",
        "tags": [
            "蒙古帝国",
            "西方骑士",
            "冷兵器",
            "文明冲突"
        ],
        "oneLine": "蒙古帝国西征路上,一支千人先遣队被数万欧洲联军围困于巨石阵,生死逆转。",
        "url": "./movies/movie-739.html",
        "image": "./139.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "废柴老爸",
        "year": "2021",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧,家庭,奇幻",
        "tags": [
            "身份互换",
            "亲情",
            "搞笑",
            "成长"
        ],
        "oneLine": "一事无成的老爸与学霸儿子意外互换身体,被迫重返校园参加期中考试。",
        "url": "./movies/movie-740.html",
        "image": "./140.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "陶瓷",
        "year": "2021",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "匠人精神",
            "母女和解",
            "非遗传承"
        ],
        "oneLine": "离家十年的女儿为争瓷厂遗产归来,却发现母亲烧出了一炉会“呼吸”的活瓷。",
        "url": "./movies/movie-741.html",
        "image": "./141.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "周渔的火车",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情,文艺,悬疑",
        "tags": [
            "火车",
            "诗人",
            "双城记",
            "替身"
        ],
        "oneLine": "每周两次坐火车往返两座城市见男友的女人,发现男友有一个和自己长得一模一样的“初恋纪念品”。",
        "url": "./movies/movie-742.html",
        "image": "./142.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "消防局",
        "year": "2022",
        "region": "韩国",
        "type": "剧集",
        "genre": "剧情、灾难、职业",
        "tags": [
            "消防员",
            "悬疑",
            "单元剧",
            "催泪"
        ],
        "oneLine": "一场连环纵火案将所有矛头指向一位救火英雄,他却发现自己患上了无法感知恐惧的怪病。",
        "url": "./movies/movie-743.html",
        "image": "./143.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "中奖彩票",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "喜剧,剧情,黑色幽默",
        "tags": [
            "彩票",
            "小镇",
            "人性实验"
        ],
        "oneLine": "小镇清洁工中了1亿欧元大奖,却意外发现小镇居民100年前曾集体骗走流浪汉的遗产,现在全镇都来讨债。",
        "url": "./movies/movie-744.html",
        "image": "./144.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "壳中少女:燃烧",
        "year": "2025",
        "region": "日本",
        "type": "动画电影",
        "genre": "科幻/动作/犯罪",
        "tags": [
            "赛博朋克",
            "少女杀手",
            "赌博",
            "身份认同",
            "暴力美学"
        ],
        "oneLine": "被改造成“电脑赌徒”的少女,必须用生命做赌注,挑战统治地下世界的六位庄家。",
        "url": "./movies/movie-745.html",
        "image": "./145.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "猛虎已觉醒",
        "year": "2026",
        "region": "印度",
        "type": "电影",
        "genre": "动作/惊悚",
        "tags": [
            "印度动作",
            "特工",
            "复仇",
            "猛虎",
            "硬核打斗"
        ],
        "oneLine": "印度情报机构最致命的特工“猛虎”被自己人出卖后装死七年,如今要用最暴烈的方式讨回公道。",
        "url": "./movies/movie-746.html",
        "image": "./146.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "梦醒哈瓦那",
        "year": "2024",
        "region": "古巴/西班牙",
        "type": "电影",
        "genre": "音乐/剧情",
        "tags": [
            "老年追梦",
            "古巴爵士",
            "时空交错",
            "彩色修复"
        ],
        "oneLine": "一位患阿尔茨海默症的90岁老奶奶,每次听到特定的爵士乐就会“变回”1950年代哈瓦那夜总会的头牌歌手。",
        "url": "./movies/movie-747.html",
        "image": "./147.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "被埋葬的树木",
        "year": "2026",
        "region": "日本",
        "type": "电影",
        "genre": "剧情、家庭、奇幻",
        "tags": [
            "乡村",
            "三代同堂",
            "记忆之树",
            "和解"
        ],
        "oneLine": "儿子回到老家处理父亲遗物,却发现院子里那棵被雷劈过的老树里,埋着祖父、父亲和他自己的三个秘密。",
        "url": "./movies/movie-748.html",
        "image": "./148.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "至尊先生",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作/喜剧",
        "tags": [
            "僵尸",
            "市井",
            "师徒"
        ],
        "oneLine": "过气僵尸片演员“至尊先生”被请去为富豪父亲做一场假法事,没想到尸体真的站了起来。",
        "url": "./movies/movie-749.html",
        "image": "./149.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "盲之交叉口",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "悬疑,犯罪",
        "tags": [
            "盲人",
            "复仇",
            "感官",
            "密室",
            "反转"
        ],
        "oneLine": "一位盲人按摩师,靠听觉破解了三年前杀害女友的真凶。",
        "url": "./movies/movie-750.html",
        "image": "./150.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "大蛇再袭",
        "year": "2024",
        "region": "泰国/美国",
        "type": "电影",
        "genre": "动作/惊悚/灾难",
        "tags": [
            "巨蛇",
            "地下洞穴",
            "生存",
            "基因变异"
        ],
        "oneLine": "曼谷地下排水系统,一条因化学废料变异的百丈巨蛇,正在吞食所有寻找“失落的翡翠佛”的人。",
        "url": "./movies/movie-751.html",
        "image": "./1.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "童话在中阴",
        "year": "2024",
        "region": "日本",
        "type": "动画电影",
        "genre": "奇幻/心理",
        "tags": [
            "中阴身",
            "生死轮回",
            "治愈系",
            "意识流",
            "手绘风格"
        ],
        "oneLine": "一个自杀身亡的7岁女孩在中阴界徘徊,她必须完成一个任务:给还没来得及告别的妈妈,寄出一封无法送达的信。",
        "url": "./movies/movie-752.html",
        "image": "./2.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "今晚打丧尸",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧/horror",
        "tags": [
            "丧尸",
            "黑色幽默",
            "小人物"
        ],
        "oneLine": "世界末日,三个废柴发现丧尸只咬不谈恋爱的人,于是他们开始疯狂相亲。",
        "url": "./movies/movie-753.html",
        "image": "./3.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "错误的举动",
        "year": "1975",
        "region": "德国",
        "type": "电影",
        "genre": "剧情",
        "tags": [
            "文艺",
            "公路片",
            "存在主义"
        ],
        "oneLine": "一个想当作家的男人踏上无目的的旅途,每帮一个人,那个人就会离奇消失。",
        "url": "./movies/movie-754.html",
        "image": "./4.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "断线森林",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑,惊悚,剧情",
        "tags": [
            "网络",
            "失踪",
            "心理",
            "集体",
            "社会"
        ],
        "oneLine": "五个在网络暴力中受害的人被召集到一座森林别墅,一场“断网”审判就此开始。",
        "url": "./movies/movie-755.html",
        "image": "./5.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "冇心肝",
        "year": "2001",
        "region": "香港",
        "type": "电影",
        "genre": "犯罪、黑色幽默、剧情",
        "tags": [
            "黑吃黑",
            "器官黑市",
            "荒诞",
            "反英雄"
        ],
        "oneLine": "一个没有心脏起搏器就活不了的职业杀手,接了一单刺杀心脏外科医生的任务,而他的客户正是需要换心的黑帮老大。",
        "url": "./movies/movie-756.html",
        "image": "./6.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "糖小姐探案集",
        "year": "2024",
        "region": "中国大陆",
        "type": "网剧",
        "genre": "悬疑/喜剧",
        "tags": [
            "甜品师",
            "单元剧",
            "本格推理"
        ],
        "oneLine": "甜品师路糖能用“味觉推理”破案,因为每个凶手都会在现场留下一种“味道”。",
        "url": "./movies/movie-757.html",
        "image": "./7.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "我希望在地狱里仍有酒喝",
        "year": "2026",
        "region": "日本",
        "type": "电影",
        "genre": "剧情,生活",
        "tags": [
            "治愈",
            "绝症",
            "酒文化",
            "人生感悟"
        ],
        "oneLine": "确诊绝症的酗酒编辑决定用最后的三个月,为自己写一本名为“死亡”的饮酒日记。",
        "url": "./movies/movie-758.html",
        "image": "./8.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "爱情鸟的自救",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "喜剧/爱情",
        "tags": [
            "脱口秀",
            "劫匪",
            "一夜荒唐",
            "话痨"
        ],
        "oneLine": "一对正在闹分手的情侣被黑人劫匪绑了,为了活下去,他俩不得不假装恩爱讲双人脱口秀。",
        "url": "./movies/movie-759.html",
        "image": "./9.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "撞车",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "惊悚,悬疑",
        "tags": [
            "车祸真相",
            "多重反转",
            "心理博弈",
            "道德拷问"
        ],
        "oneLine": "午夜隧道十二车连环追尾,唯一的幸存者醒来后声称:这不是意外,是我设计的。",
        "url": "./movies/movie-760.html",
        "image": "./10.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "冬季旅行",
        "year": "2025",
        "region": "德国",
        "type": "电影",
        "genre": "剧情,公路",
        "tags": [
            "阿尔卑斯山",
            "治愈",
            "父女",
            "人生感悟"
        ],
        "oneLine": "冷漠的父亲带着他患有自闭症的女儿,在阿尔卑斯山的冬季徒步中,学会说“我爱你”。",
        "url": "./movies/movie-761.html",
        "image": "./11.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "死亡船",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "恐怖,灾难,惊悚",
        "tags": [
            "密闭空间",
            "生存",
            "病毒变异",
            "深海"
        ],
        "oneLine": "一艘豪华游轮遭遇海难,幸存者发现救生艇上的淡水会将人变成嗜血怪物。",
        "url": "./movies/movie-762.html",
        "image": "./12.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "珍妮热线",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "剧情,惊悚",
        "tags": [
            "真实事件",
            "女性互助",
            "堕胎权"
        ],
        "oneLine": "1960年代,芝加哥一群代号“珍妮”的神秘女性,秘密建立地下网络,为走投无路的女性提供安全堕胎服务。",
        "url": "./movies/movie-763.html",
        "image": "./13.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "绑票总动员",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "黑色喜剧,动作",
        "tags": [
            "绑架",
            "中年危机",
            "乌龙",
            "家庭和解"
        ],
        "oneLine": "两个落魄中年大叔为还债绑架富豪的狗,却发现自己成了全网追杀的真凶。",
        "url": "./movies/movie-764.html",
        "image": "./14.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "球形圣母",
        "year": "2017",
        "region": "法国/比利时",
        "type": "电影",
        "genre": "科幻/哲学/动画",
        "tags": [
            "抽象哲学",
            "几何宗教",
            "另类进化",
            "存在主义"
        ],
        "oneLine": "在一个二维平面世界里,一个圆发现了“厚度”的存在,于是被奉为圣母,也被钉上十字架。",
        "url": "./movies/movie-765.html",
        "image": "./15.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "向往的生活第八季",
        "year": "2026",
        "region": "中国大陆",
        "type": "综艺",
        "genre": "真人秀",
        "tags": [
            "慢综艺",
            "田园",
            "怀旧",
            "告别季",
            "返璞归真"
        ],
        "oneLine": "蘑菇屋迎来最终季,所有常驻与飞行嘉宾回到最初的那座山村,用一场不直播的告别宴收尾。",
        "url": "./movies/movie-766.html",
        "image": "./16.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "特勤精英",
        "year": "2021",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "动作、职业",
        "tags": [
            "消防",
            "热血",
            "成长"
        ],
        "oneLine": "刺头新兵被分入精英消防队,却发现队长竟是当年因指挥失误害死他父亲的“仇人”。",
        "url": "./movies/movie-767.html",
        "image": "./17.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "边城落日",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "西部/动作",
        "tags": [
            "民国西部",
            "赏金猎人",
            "孤胆英雄"
        ],
        "oneLine": "1926年,一个落魄的前清武状元骑马进入甘肃双旗镇,发现镇上的“王法”由一把左轮手枪说了算。",
        "url": "./movies/movie-768.html",
        "image": "./18.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "精采的尸体",
        "year": "2025",
        "region": "日本",
        "type": "剧集",
        "genre": "悬疑,科幻,恐怖",
        "tags": [
            "法医",
            "犯罪解密",
            "尸体交易",
            "黑市",
            "科技伦理"
        ],
        "oneLine": "顶级法医能从尸体上读取“记忆”,直到他发现一具完美无瑕、如同艺术品的“精采的尸体”来自他自己。",
        "url": "./movies/movie-769.html",
        "image": "./19.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "蛇灾:蛇岛惊魂",
        "year": "2025",
        "region": "中国大陆",
        "type": "网络电影",
        "genre": "灾难/惊悚",
        "tags": [
            "蛇",
            "孤岛",
            "变异",
            "逃生"
        ],
        "oneLine": "科考队闯入南海蛇岛,发现万蛇朝拜的并非蛇王,而是一枚即将孵化的史前蛇蛋。",
        "url": "./movies/movie-770.html",
        "image": "./20.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "一个醉鬼的白日梦",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "剧情,奇幻,喜剧",
        "tags": [
            "酒精",
            "幻想与现实",
            "存在主义"
        ],
        "oneLine": "一个老酒鬼每次醉倒,都会在一个“完美版自己”的梦里醒来,直到他分不清哪边才是醒。",
        "url": "./movies/movie-771.html",
        "image": "./21.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "面包师傅的妻子",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "喜剧,爱情",
        "tags": [
            "法式浪漫",
            "小镇",
            "美食",
            "治愈"
        ],
        "oneLine": "巴黎米其林女主厨逃到乡下,却被面包店的憨厚老板用黄油香抓住了胃。",
        "url": "./movies/movie-772.html",
        "image": "./22.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "暗恋橘生淮南",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "青春爱情",
        "tags": [
            "暗恋",
            "双向奔赴",
            "校园",
            "长跑",
            "细腻"
        ],
        "oneLine": "她偷偷喜欢了他十二年,却不知他从第一天起就在等她开口。",
        "url": "./movies/movie-773.html",
        "image": "./23.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "老鼠爱上猫",
        "year": "2003",
        "region": "香港",
        "type": "电影",
        "genre": "喜剧/爱情/武侠",
        "tags": [
            "刘德华",
            "张柏芝",
            "改编",
            "猫鼠",
            "大结局"
        ],
        "oneLine": "当展昭遇上锦毛鼠,猫鼠斗气冤家变爱侣,颠覆经典。",
        "url": "./movies/movie-774.html",
        "image": "./24.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "穿梭阴阳间",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "奇幻/惊悚",
        "tags": [
            "通灵",
            "阴阳眼",
            "罪案",
            "反转"
        ],
        "oneLine": "一个能看见鬼魂的私家侦探,接下了一桩“鬼魂委托人”的谋杀案,发现死者是自己。",
        "url": "./movies/movie-775.html",
        "image": "./25.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "国色天香",
        "year": "2010",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "爱情,悬疑,年代",
        "tags": [
            "民国",
            "香水",
            "替身",
            "家族恩怨"
        ],
        "oneLine": "民国时期,上海滩第一香水世家的大小姐神秘失踪,一个卖花女被找来假扮她,却闻出家族里隐藏多年的谋杀秘密。",
        "url": "./movies/movie-776.html",
        "image": "./26.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "无界之地",
        "year": "2023",
        "region": "美国",
        "type": "剧集",
        "genre": "科幻/悬疑",
        "tags": [
            "平行宇宙",
            "边境谜团",
            "烧脑"
        ],
        "oneLine": "一片神秘的三角地带,能让不同平行宇宙的人随机闯入,且无法离开。",
        "url": "./movies/movie-777.html",
        "image": "./27.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "诡夜迷情",
        "year": "2024",
        "region": "韩国",
        "type": "剧集",
        "genre": "悬疑/爱情/惊悚",
        "tags": [
            "反转",
            "婚姻",
            "心理战",
            "偷情"
        ],
        "oneLine": "妻子每晚都会在凌晨两点准时外出,丈夫跟踪后发现,她去的竟是隔壁那栋早已烧毁的废墟。",
        "url": "./movies/movie-778.html",
        "image": "./28.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "奸臣",
        "year": "2015",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情/古装/情色/政治",
        "tags": [
            "朝鲜王朝",
            "燕山君",
            "采红使",
            "权力腐败",
            "历史改编"
        ],
        "oneLine": "燕山君时期,奸臣父子为讨好暴君在全国强征美女,却未曾想其中一人是来复仇的死士。",
        "url": "./movies/movie-779.html",
        "image": "./29.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "无敌猎手",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作,科幻",
        "tags": [
            "机甲",
            "怪兽",
            "末世",
            "单挑"
        ],
        "oneLine": "在怪兽横行的废土上,最后一个猎人驾驶着破旧机甲,为了拯救村庄向兽王发起了自杀式冲锋。",
        "url": "./movies/movie-780.html",
        "image": "./30.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "366日",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "奇幻纯爱",
        "tags": [
            "时间循环",
            "绝症",
            "日历",
            "催泪"
        ],
        "oneLine": "女友只剩一年寿命,他却意外获得一本可以撕掉“坏日子”的日历。",
        "url": "./movies/movie-781.html",
        "image": "./31.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "六叠间的钢琴家",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "剧情,音乐",
        "tags": [
            "孤独",
            "音乐",
            "治愈",
            "极致",
            "网络"
        ],
        "oneLine": "一个蜗居在6平米公寓的青年,每晚为陌生人弹琴,直到他决定结束生命。",
        "url": "./movies/movie-782.html",
        "image": "./32.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "大明星小跟班",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "喜剧,职场",
        "tags": [
            "娱乐圈",
            "经纪人",
            "成长",
            "爆笑",
            "反转"
        ],
        "oneLine": "一个愣头青被错当成好莱坞顶流的助理,而那个顶流其实是一个假装正常人的重度社恐。",
        "url": "./movies/movie-783.html",
        "image": "./33.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "保卫人祖山",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "战争,历史,动作",
        "tags": [
            "抗战",
            "民俗",
            "神话",
            "悲壮"
        ],
        "oneLine": "1942年,一队散兵游勇联合守山村民,用娲皇娘娘留下的“神话机关”对抗日军。",
        "url": "./movies/movie-784.html",
        "image": "./34.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "素人特工",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "动作、喜剧",
        "tags": [
            "普通人",
            "间谍",
            "职场",
            "搞笑",
            "身份错位"
        ],
        "oneLine": "一个被裁员的HR经理被中情局误招,用辞退话术瓦解恐怖组织。",
        "url": "./movies/movie-785.html",
        "image": "./35.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "生命中的美好印记",
        "year": "2022",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情,奇幻",
        "tags": [
            "穿越",
            "亲情",
            "温情"
        ],
        "oneLine": "一位患阿尔茨海默症的老人每次失忆都会随机穿越回人生某个美好瞬间。",
        "url": "./movies/movie-786.html",
        "image": "./36.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "北郊1936年",
        "year": "2018",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,历史,悬疑",
        "tags": [
            "民国",
            "谋杀",
            "记者",
            "历史迷案"
        ],
        "oneLine": "1936年北平郊外发生了一起诡异命案,实习记者追查时发现案件触动了日军侵华前最敏感的神经。",
        "url": "./movies/movie-787.html",
        "image": "./37.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "一夜四十万",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "黑色喜剧/犯罪",
        "tags": [
            "一夜暴富",
            "绑架",
            "误会导致",
            "多线叙事"
        ],
        "oneLine": "一个落魄编剧捡到四十万现金,本以为天降横财,却引来了三拨互不相识的绑匪和两具尸体。",
        "url": "./movies/movie-788.html",
        "image": "./38.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "女巫一族3",
        "year": "2006",
        "region": "美国",
        "type": "电影",
        "genre": "奇幻,冒险,家庭",
        "tags": [
            "青少年",
            "魔法",
            "血脉觉醒"
        ],
        "oneLine": "半人半巫的少女必须阻止一场巫师与人类的全面战争,而钥匙藏在她奶奶的旧食谱里。",
        "url": "./movies/movie-789.html",
        "image": "./39.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "痴呆",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "恐怖/心理/剧情",
        "tags": [
            "阿尔茨海默",
            "记忆混淆",
            "主观视角",
            "绝望"
        ],
        "oneLine": "患痴呆症的老人发现,自己忘记的不是生活琐事,而是亲手杀死了孙女,而孙女每晚都会“回来”找他。",
        "url": "./movies/movie-790.html",
        "image": "./40.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "反派 第一季",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "剧情,犯罪,惊悚",
        "tags": [
            "反英雄起源",
            "心理惊悚",
            "道德困境"
        ],
        "oneLine": "一个理想主义的律师在经历了司法不公后,成为了城市里最令人闻风丧胆的“惩罚者”,但他的正义还是正义吗?",
        "url": "./movies/movie-791.html",
        "image": "./41.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "此时此地",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/爱情",
        "tags": [
            "异地恋",
            "疫情",
            "时代印记",
            "现实"
        ],
        "oneLine": "一对异地恋人约定好在某个车站见面,却因为封控不断错过,直到车站被拆除。",
        "url": "./movies/movie-792.html",
        "image": "./42.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "比宇宙更遥远的地方",
        "year": "2024",
        "region": "日本",
        "type": "电视剧",
        "genre": "剧情、冒险、青春",
        "tags": [
            "南极",
            "友情",
            "少女",
            "梦想"
        ],
        "oneLine": "四个高中女生为了各自的目的,加入了南极科考队,却在冰雪大陆上发现了比宇宙更遥远的东西——彼此的心。",
        "url": "./movies/movie-793.html",
        "image": "./43.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "绝代艳姬",
        "year": "2026",
        "region": "中国香港",
        "type": "电视剧",
        "genre": "古装,宫斗",
        "tags": [
            "权谋",
            "女性",
            "逆袭"
        ],
        "oneLine": "她是被当作棋子送入宫中的替身,却靠着给嫔妃们看“心理疾病”,一步步爬上了权力的巅峰。",
        "url": "./movies/movie-794.html",
        "image": "./44.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "迷幻高中",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧,奇幻,悬疑",
        "tags": [
            "迷幻药",
            "平行世界",
            "成长",
            "校园"
        ],
        "oneLine": "问题学生误食实验性致幻剂,发现自己能在同一节数学课上活出九种不同人生。",
        "url": "./movies/movie-795.html",
        "image": "./45.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "爱情二重奏",
        "year": "2021",
        "region": "韩国",
        "type": "剧集",
        "genre": "爱情/音乐/奇幻",
        "tags": [
            "灵魂互换",
            "音乐生",
            "欢喜冤家",
            "校园",
            "甜蜜"
        ],
        "oneLine": "钢琴王子和小提琴天才在一次意外演出中交换身体,两人必须在对方乐器比赛中拿奖才能换回来。",
        "url": "./movies/movie-796.html",
        "image": "./46.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "异世浮生",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "科幻,悬疑,惊悚",
        "tags": [
            "多重宇宙",
            "穿越",
            "身份认同",
            "烧脑"
        ],
        "oneLine": "一个女人每天醒来都会进入一个平行世界的“自己”体内,生活逐渐失控。",
        "url": "./movies/movie-797.html",
        "image": "./47.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "骸骨人",
        "year": "2022",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖,西部",
        "tags": [
            "诅咒",
            "亡灵",
            "复仇"
        ],
        "oneLine": "西部小镇挖出远古骸骨,每当月圆,骸骨会组装成不死枪手,按名单逐个索命。",
        "url": "./movies/movie-798.html",
        "image": "./48.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "决鬪地平线",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "动作/科幻/战争",
        "tags": [
            "机甲",
            "高空平台",
            "生存游戏",
            "硬核战斗"
        ],
        "oneLine": "在一座悬浮在万米高空的废弃军事平台上,12名死刑犯被投放下去,最后活着的人可以获得自由。",
        "url": "./movies/movie-799.html",
        "image": "./49.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "同桌的守护者",
        "year": "2025",
        "region": "中国",
        "type": "电影",
        "genre": "剧情、校园",
        "tags": [
            "守护",
            "校园霸凌",
            "友谊",
            "反转"
        ],
        "oneLine": "高中女生暗中保护被欺负的同桌,却发现对方才是真正的恶魔。",
        "url": "./movies/movie-800.html",
        "image": "./50.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "温生才炸孚琦",
        "year": "2024",
        "region": "香港",
        "type": "电影",
        "genre": "历史,动作,传记",
        "tags": [
            "辛亥革命",
            "暗杀",
            "南洋",
            "民族英雄"
        ],
        "oneLine": "1911年,南洋华侨温生才只身刺杀广州将军孚琦,一颗炸弹炸响了辛亥革命的前奏。",
        "url": "./movies/movie-801.html",
        "image": "./51.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "归宿",
        "year": "2025",
        "region": "韩国",
        "type": "电视剧",
        "genre": "剧情、悬疑、奇幻",
        "tags": [
            "车祸",
            "平行时空",
            "家庭",
            "赎罪",
            "替身"
        ],
        "oneLine": "一场车祸后,父亲发现自己进入了儿子的身体,而要回家的唯一方法是让儿子原谅自己。",
        "url": "./movies/movie-802.html",
        "image": "./52.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "智异山",
        "year": "2021",
        "region": "韩国",
        "type": "电视剧 (16集)",
        "genre": "悬疑,剧情,神秘",
        "tags": [
            "国家公园",
            "山难救援",
            "灵异现象"
        ],
        "oneLine": "智异山国家公园的护林员们发现,山上的遇难者总会在遇难前看到不属于这个时空的神秘火光。",
        "url": "./movies/movie-803.html",
        "image": "./53.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "建筑师之腹",
        "year": "2025",
        "region": "意大利/法国",
        "type": "电影",
        "genre": "剧情/黑色喜剧",
        "tags": [
            "荒诞",
            "艺术圈讽刺",
            "身体恐怖"
        ],
        "oneLine": "一位自负的建筑大师受邀设计一座宏伟的陵墓,却发现自己得了怪病——腹部像建筑图纸一样开始裂开。",
        "url": "./movies/movie-804.html",
        "image": "./54.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "绿衣骑士",
        "year": "2026",
        "region": "英国",
        "type": "电影",
        "genre": "奇幻/冒险",
        "tags": [
            "亚瑟王传说",
            "公路片",
            "荒野美学"
        ],
        "oneLine": "圆桌骑士高文履约前往绿教堂,却在断头契约中发现自己的头颅才是最终的祭品。",
        "url": "./movies/movie-805.html",
        "image": "./55.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "完美独裁",
        "year": "2025",
        "region": "美国/德国",
        "type": "电视剧",
        "genre": "科幻/惊悚",
        "tags": [
            "大数据",
            "监控社会",
            "政治"
        ],
        "oneLine": "一款预测犯罪的APP被全民下载,当它预测“总统将在明天叛国”时,没人知道该逮捕谁。",
        "url": "./movies/movie-806.html",
        "image": "./56.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "为何已成过去",
        "year": "1995",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情文艺",
        "tags": [
            "遗憾",
            "重逢",
            "旧情人",
            "港风",
            "催泪"
        ],
        "oneLine": "一对曾经私奔未遂的恋人在中年重逢,各自有家庭,却决定花一天时间重走当年的私奔路。",
        "url": "./movies/movie-807.html",
        "image": "./57.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "大赌场",
        "year": "2025",
        "region": "中国香港/中国",
        "type": "剧集",
        "genre": "犯罪,悬疑",
        "tags": [
            "商战",
            "赌场",
            "卧底",
            "家族恩怨",
            "澳门"
        ],
        "oneLine": "一个出身葡京大赌场的叠码仔,被警方选中卧底,却发现自己的亲生父亲就是赌场背后最大的洗钱黑手。",
        "url": "./movies/movie-808.html",
        "image": "./58.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "鬼讯号",
        "year": "2016",
        "region": "日本",
        "type": "电影",
        "genre": "恐怖,悬疑",
        "tags": [
            "收音机",
            "灵异",
            "都市传说",
            "闭环"
        ],
        "oneLine": "东京深夜电台有个灵异节目,但主持人不知道:打进热线的鬼,都是真的。",
        "url": "./movies/movie-809.html",
        "image": "./59.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "黄阿丽:风流女子",
        "year": "2024",
        "region": "美国",
        "type": "脱口秀特辑",
        "genre": "喜剧/脱口秀/女性",
        "tags": [
            "单口喜剧",
            "女性欲望",
            "婚姻",
            "母职",
            "黄暴"
        ],
        "oneLine": "怀孕八个月上台的黄阿丽,把“风流”拆解成尿布、房贷和老公的性冷淡。",
        "url": "./movies/movie-810.html",
        "image": "./60.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "小子布里斯3",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "喜剧、动作、冒险",
        "tags": [
            "冲浪",
            "法式幽默",
            "阳光",
            "傻瓜英雄"
        ],
        "oneLine": "史上最蠢也最酷的冲浪小子布里斯,这次要去阿尔卑斯山上造一个人造浪池。",
        "url": "./movies/movie-811.html",
        "image": "./61.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "薰衣草和夏天",
        "year": "2016",
        "region": "日本",
        "type": "电影",
        "genre": "爱情/剧情",
        "tags": [
            "北海道",
            "花田",
            "交换日记",
            "异地恋"
        ],
        "oneLine": "一对高中恋人因为上大学而分隔两地,约定每周在同一个笔记本上写日记然后互寄。",
        "url": "./movies/movie-812.html",
        "image": "./62.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "查干淖尔姑娘",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "冬捕",
            "草原",
            "母女关系",
            "非遗"
        ],
        "oneLine": "查干湖冬捕节前,离家十年的女儿突然归来,只为卖掉母亲的那张百年渔网。",
        "url": "./movies/movie-813.html",
        "image": "./63.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "看看你有多爱我",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "家庭心理",
        "tags": [
            "母女",
            "测试",
            "伤害",
            "救赎"
        ],
        "oneLine": "一个单亲妈妈假扮网友与女儿聊天十年,只为测试女儿是否爱她,却亲手毁掉了女儿的一生。",
        "url": "./movies/movie-814.html",
        "image": "./64.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "窗外窗",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "偷窥",
            "邻里",
            "孤独",
            "女性"
        ],
        "oneLine": "一位独居老妇人用望远镜偷窥对面的公寓,却意外发现住在同一栋楼里的女儿,正在被女婿家暴。",
        "url": "./movies/movie-815.html",
        "image": "./65.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "电焊工波力",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情、励志、工业",
        "tags": [
            "工人",
            "东北工业区",
            "下岗",
            "焊接",
            "师徒情"
        ],
        "oneLine": "东北老工业区最后一个高级电焊工,接到了一项不可能完成的焊接任务。",
        "url": "./movies/movie-816.html",
        "image": "./66.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "无间",
        "year": "2025",
        "region": "中国香港",
        "type": "剧集",
        "genre": "警匪/悬疑/犯罪",
        "tags": [
            "卧底",
            "双雄",
            "黑警",
            "心理博弈",
            "宿命"
        ],
        "oneLine": "一名被警队开除的疯批前督察主动扎入毒窟,却发现自己的新上线竟是冒牌警察。",
        "url": "./movies/movie-817.html",
        "image": "./67.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "空姐",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情,都市,职场",
        "tags": [
            "航空",
            "女性",
            "成长",
            "悬疑",
            "行业内幕"
        ],
        "oneLine": "一次完美的紧急迫降后,菜鸟空姐被推上神坛,却也卷入了跨国走私的阴谋。",
        "url": "./movies/movie-818.html",
        "image": "./68.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "人生大乱斗",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧/动作",
        "tags": [
            "密室逃脱",
            "职场",
            "解压",
            "女权",
            "爆笑"
        ],
        "oneLine": "被公司优化的七个员工,为了百万奖金参加“真人吃鸡”游戏,结果发现对手竟然是面无表情的AI领导。",
        "url": "./movies/movie-819.html",
        "image": "./69.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "星际奇兵总动员",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧,科幻,家庭",
        "tags": [
            "外星人",
            "搞笑",
            "冒险",
            "合家欢",
            "机器人"
        ],
        "oneLine": "银河快递员和地球宅男互换身体,必须带着一群不靠谱的外星萌宠,拯救被反物质污染的太阳系。",
        "url": "./movies/movie-820.html",
        "image": "./70.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "月神",
        "year": "2025",
        "region": "意大利/法国",
        "type": "电影",
        "genre": "科幻、文艺、悬疑",
        "tags": [
            "月球",
            "孤独",
            "记忆",
            "太空",
            "心理"
        ],
        "oneLine": "月球基地唯一的看守人,发现每晚都有“人”在月球表面用光书写只有他能看懂的诗句。",
        "url": "./movies/movie-821.html",
        "image": "./71.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "缄默",
        "year": "2019",
        "region": "德国",
        "type": "电影",
        "genre": "剧情/历史",
        "tags": [
            "二战",
            "沉默",
            "人性",
            "救赎"
        ],
        "oneLine": "二战后,一名纳粹军官隐姓埋名成为小镇钟楼敲钟人,他三十年不开口,只为掩盖一个声音记忆。",
        "url": "./movies/movie-822.html",
        "image": "./72.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "推销战争",
        "year": "1992",
        "region": "美国",
        "type": "电影",
        "genre": "剧情/喜剧",
        "tags": [
            "直销",
            "职场讽刺",
            "美国梦",
            "黑色幽默"
        ],
        "oneLine": "1980年代美国中西部,四个吸尘器直销员被困汽车旅馆,为争夺“月度金牌”互相使绊,却不知公司即将破产。",
        "url": "./movies/movie-823.html",
        "image": "./73.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "杀戮星期天",
        "year": "2023",
        "region": "韩国",
        "type": "电影",
        "genre": "动作,惊悚",
        "tags": [
            "极限复仇",
            "黑色电影",
            "反转"
        ],
        "oneLine": "一名退休杀手在每个星期天都会去同一家教堂忏悔,直到某天他被告知,下个星期天他的女儿也会成为“赎罪名单”上的一员。",
        "url": "./movies/movie-824.html",
        "image": "./74.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "仁心解码II粤语",
        "year": "2024",
        "region": "中国香港",
        "type": "剧集",
        "genre": "医疗/悬疑/心理",
        "tags": [
            "心理学",
            "粤语原声",
            "连环案件",
            "法医精神科",
            "烧脑"
        ],
        "oneLine": "法医精神科医生高立仁联手重案组,用犯罪心理学剖开一桩桩匪夷所思的“完美犯罪”背后的病态人格。",
        "url": "./movies/movie-825.html",
        "image": "./75.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "反社会分子",
        "year": "2012",
        "region": "丹麦",
        "type": "电影",
        "genre": "剧情/惊悚/心理",
        "tags": [
            "反社会人格",
            "精神分析",
            "社会批判",
            "压抑"
        ],
        "oneLine": "一个被确诊为反社会人格的天才,通过精妙计算成了跨国企业的CEO,却因无法感受爱而毁灭一切。",
        "url": "./movies/movie-826.html",
        "image": "./76.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "猎象通辑令",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作,犯罪,悬疑",
        "tags": [
            "跨国追捕",
            "盗猎",
            "丛林激战",
            "保护动物",
            "硬汉"
        ],
        "oneLine": "为了追捕一对象牙盗猎团伙,退役特种兵与当地女警官在东南亚雨林中展开了一场“猎象”与“反猎象”的殊死较量。",
        "url": "./movies/movie-827.html",
        "image": "./77.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "四平青年之街溜子",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧动作",
        "tags": [
            "东北",
            "混社会",
            "逆袭",
            "黑色幽默"
        ],
        "oneLine": "四平混混“街溜子”二驴为了兄弟义气假扮富二代,结果被真富二代全城追杀,还意外卷入一场跨国假钞案。",
        "url": "./movies/movie-828.html",
        "image": "./78.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "狮子彻夜未眠",
        "year": "2023",
        "region": "日本",
        "type": "电影",
        "genre": "剧情",
        "tags": [
            "家庭",
            "老年",
            "阿尔茨海默",
            "平静"
        ],
        "oneLine": "一位患有阿尔茨海默症的老人,在睡不着的夜里,通过梦游与过去的自己重逢,拼凑出破碎的一生。",
        "url": "./movies/movie-829.html",
        "image": "./79.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "约会恋爱究竟是什么",
        "year": "2015",
        "region": "日本",
        "type": "剧集",
        "genre": "喜剧,爱情,剧情",
        "tags": [
            "啃老族",
            "强迫症",
            "契约恋爱",
            "坂元裕二风",
            "嘴炮"
        ],
        "oneLine": "沉迷数学的极品宅男与视恋爱为无用社交的公务员,为了“看起来正常”而开始了充满公式和报表的契约约会。",
        "url": "./movies/movie-830.html",
        "image": "./80.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "再见,我的新郎",
        "year": "2021",
        "region": "中国大陆",
        "type": "网络剧",
        "genre": "爱情/同性/家庭",
        "tags": [
            "形婚",
            "故乡",
            "婚礼",
            "和解"
        ],
        "oneLine": "一个男同逃回老家参加前任的婚礼,却发现新郎竟是自己失散多年的亲弟弟。",
        "url": "./movies/movie-831.html",
        "image": "./81.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "初恋补时",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "爱情、奇幻",
        "tags": [
            "广播社",
            "磁带",
            "倒带",
            "平行时空",
            "高校"
        ],
        "oneLine": "高三男生偶然收到一盒来自十年后的磁带,里面录着“未来的他”指导“现在的他”如何追到初恋。",
        "url": "./movies/movie-832.html",
        "image": "./82.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "伏妖开封府之御猫展昭",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "古装、奇幻",
        "tags": [
            "展昭",
            "悬疑探案",
            "猫妖"
        ],
        "oneLine": "御猫展昭竟被一只真猫妖陷害,为了洗脱罪名,他不得不跟妖孽联手破案。",
        "url": "./movies/movie-833.html",
        "image": "./83.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "厉阴宅",
        "year": "2013",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖,惊悚,超自然",
        "tags": [
            "驱魔",
            "真实事件改编",
            "鬼屋",
            "安娜贝尔",
            "温子仁"
        ],
        "oneLine": "一对驱魔夫妇搬进凶宅后才发现,屋里作祟的不是鬼魂,而是活人的执念。",
        "url": "./movies/movie-834.html",
        "image": "./84.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "最后的时光",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "剧情,爱情,家庭",
        "tags": [
            "绝症",
            "亲情",
            "告别",
            "公路片",
            "治愈"
        ],
        "oneLine": "被确诊仅剩三个月生命的冷漠父亲,为了弥补遗憾,带着叛逆女儿踏上了一段修复关系的欧洲公路之旅。",
        "url": "./movies/movie-835.html",
        "image": "./85.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "女人四十正芬芳",
        "year": "2024",
        "region": "中国",
        "type": "电视剧",
        "genre": "剧情家庭",
        "tags": [
            "女性",
            "四十岁",
            "职场",
            "家庭",
            "成长"
        ],
        "oneLine": "三个四十岁的女人,一个失业、一个失婚、一个失控,她们决定重新活一次。",
        "url": "./movies/movie-836.html",
        "image": "./86.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "地狱宝贝",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖,喜剧",
        "tags": [
            "婴儿",
            "恶魔",
            "B级片",
            "血浆"
        ],
        "oneLine": "虔诚夫妇收养了一个婴儿,却发现这个孩子是撒旦之子,而杀了他就会引发世界末日。",
        "url": "./movies/movie-837.html",
        "image": "./87.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "大象菩提",
        "year": "2019",
        "region": "印度,中国大陆",
        "type": "电影",
        "genre": "剧情,奇幻,冒险",
        "tags": [
            "佛教哲学",
            "大象保护",
            "转世传说"
        ],
        "oneLine": "一头老象在菩提树下跪拜死去,一个不信佛的商人发现自己上辈子是头象。",
        "url": "./movies/movie-838.html",
        "image": "./88.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "揭秘骗局",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑,犯罪",
        "tags": [
            "诈骗",
            "反诈",
            "高智商",
            "网络犯罪"
        ],
        "oneLine": "反诈专家伪装成傻子混进诈骗集团,却发现团伙头目的声音和自己失踪六年的父亲一模一样。",
        "url": "./movies/movie-839.html",
        "image": "./89.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "断箭",
        "year": "2026",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作警匪",
        "tags": [
            "卧底",
            "黑吃黑",
            "父子对决"
        ],
        "oneLine": "卧底警察的父亲是黑帮大佬,他必须在逮捕父亲前,先找到射向自己的那支断箭。",
        "url": "./movies/movie-840.html",
        "image": "./90.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "铿锵玫瑰",
        "year": "2003",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情/犯罪",
        "tags": [
            "女警",
            "纪实风格",
            "打拐",
            "女性群像"
        ],
        "oneLine": "九十年代,一群最不像警察的女警察,用最土的办法,在火车站抓最狡猾的人贩子。",
        "url": "./movies/movie-841.html",
        "image": "./91.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "俏女怀春",
        "year": "1989",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧/爱情",
        "tags": [
            "港产片",
            "误会",
            "追女仔"
        ],
        "oneLine": "乖乖女为应付催婚,花五千块租了个假男友,结果对方竟是富商独子假扮的穷小子。",
        "url": "./movies/movie-842.html",
        "image": "./92.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "冲吧!我的庞克青春",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "青春,音乐",
        "tags": [
            "朋克",
            "烂队",
            "热血"
        ],
        "oneLine": "三个连和弦都按不准的高中生组建了全校最烂的朋克乐队,目标是参加文化祭然后解散。",
        "url": "./movies/movie-843.html",
        "image": "./93.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "祝大家幸福",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,家庭",
        "tags": [
            "家庭",
            "丧事",
            "黑色幽默",
            "亲情"
        ],
        "oneLine": "父亲去世后,四个子女轮流办“幸福告别式”,结果每办一场,就翻出一桩家里的丑事。",
        "url": "./movies/movie-844.html",
        "image": "./94.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "爱德华八世的故事",
        "year": "2025",
        "region": "英国",
        "type": "剧集",
        "genre": "传记/历史",
        "tags": [
            "王室",
            "爱情",
            "政治",
            "退位"
        ],
        "oneLine": "从温莎公爵夫人的视角重述,爱是放弃王位,也是长达三十五年的软禁。",
        "url": "./movies/movie-845.html",
        "image": "./95.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "虎豹龙蛇鹰粤语",
        "year": "2026",
        "region": "香港",
        "type": "电影",
        "genre": "动作/武侠",
        "tags": [
            "五形拳",
            "门派纷争",
            "老派动作"
        ],
        "oneLine": "五种失传拳法的传人被迫联手,对抗一场意图消灭粤派武术的阴谋。",
        "url": "./movies/movie-846.html",
        "image": "./96.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "动画100",
        "year": "2025",
        "region": "中国大陆",
        "type": "纪录片",
        "genre": "纪录片/历史",
        "tags": [
            "中国动画百年",
            "幕后揭秘",
            "怀旧",
            "行业史"
        ],
        "oneLine": "从《大闹天宫》到《哪吒之魔童降世》,这部纪录片用100个关键帧,讲述中国动画百年的浮沉与荣光。",
        "url": "./movies/movie-847.html",
        "image": "./97.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "恋人的最后情书",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "爱情/剧情",
        "tags": [
            "书信",
            "绝症",
            "催泪",
            "纯爱"
        ],
        "oneLine": "一位即将失忆的阿兹海默症老人,每天为妻子写下一封情书,即使她早已认不出他是谁。",
        "url": "./movies/movie-848.html",
        "image": "./98.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "巨牛",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "奇幻,冒险,动作",
        "tags": [
            "怪兽",
            "特效",
            "农村",
            "黑色幽默"
        ],
        "oneLine": "东海县一头吃了核废料的牛变异成百米巨兽,村民为了保护它躲避军队追杀,踏上了跨越三省的大逃亡。",
        "url": "./movies/movie-849.html",
        "image": "./99.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "碧娜鲍许",
        "year": "2024",
        "region": "德国",
        "type": "电影",
        "genre": "传记/舞蹈",
        "tags": [
            "现代舞",
            "女编舞家",
            "艺术创作",
            "黑白片段"
        ],
        "oneLine": "舞蹈家碧娜·鲍许在生命的最后三年,与四位毫无舞蹈基础的中年演员排演一部关于“恐惧”的作品。",
        "url": "./movies/movie-850.html",
        "image": "./100.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "我属于谁",
        "year": "2024",
        "region": "德国",
        "type": "电影",
        "genre": "剧情,悬疑,心理",
        "tags": [
            "多重人格",
            "身份认同",
            "冷峻美学",
            "记忆迷宫"
        ],
        "oneLine": "一个女人在车祸后醒来,发现自己有七本日记、七种笔迹、七个爱人,而她一个都不认识。",
        "url": "./movies/movie-851.html",
        "image": "./101.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "在梦中和现实中飞翔",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "奇幻,剧情,爱情",
        "tags": [
            "梦境",
            "飞行员",
            "幻觉",
            "存在主义",
            "诗意"
        ],
        "oneLine": "一名失意的老飞行员在梦中拥有一双翅膀,醒来后中风瘫痪,他在现实与梦境的缝隙里,策划最后一次“飞行”。",
        "url": "./movies/movie-852.html",
        "image": "./102.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "新妇日记",
        "year": "2023",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "悬疑,恐怖",
        "tags": [
            "中式恐怖",
            "民俗",
            "冥婚",
            "女性"
        ],
        "oneLine": "新娘嫁入豪门后,发现丈夫已死多年,每晚“同床”的竟是祠堂里的牌位。",
        "url": "./movies/movie-853.html",
        "image": "./103.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "乳虎出谷",
        "year": "1986",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/儿童",
        "tags": [
            "乡村",
            "少年",
            "成长",
            "武术",
            "励志"
        ],
        "oneLine": "一个爱打架的陕北农村娃,被少林俗家弟子改造成了“武术种子”。",
        "url": "./movies/movie-854.html",
        "image": "./104.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "打工处是邪恶组织",
        "year": "2026",
        "region": "日本",
        "type": "动画剧集",
        "genre": "喜剧,职场,奇幻",
        "tags": [
            "反套路",
            "社畜日常",
            "吐槽向"
        ],
        "oneLine": "普通大学生入职后发现公司是企图征服世界的邪恶组织,但他更关心的是五险一金和年终奖。",
        "url": "./movies/movie-855.html",
        "image": "./105.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "暴走财神2",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧,奇幻",
        "tags": [
            "财神",
            "网络电影",
            "暴走",
            "搞笑",
            "神魔"
        ],
        "oneLine": "实习财神为了转正,被派去绑定一个只想躺平的废柴,却发现这个人竟是自己的前世债主。",
        "url": "./movies/movie-856.html",
        "image": "./106.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "秋月春花未了情",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情/同性/年代",
        "tags": [
            "眷村",
            "百合",
            "六十年代",
            "书信"
        ],
        "oneLine": "1960年代眷村,两个少女通过藏在图书馆的诗集传情,一封未寄出的信在五十年后被发现。",
        "url": "./movies/movie-857.html",
        "image": "./107.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "幽浮魔点",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "科幻/恐怖",
        "tags": [
            "怪物",
            "腐蚀",
            "小镇",
            "生存"
        ],
        "oneLine": "一颗陨石坠入小镇湖泊,释放出能吞噬并模拟人类的粉色黏液怪物,小镇一夜之间变成了“信任危机”修罗场。",
        "url": "./movies/movie-858.html",
        "image": "./108.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "祭屋出租",
        "year": "2023",
        "region": "泰国",
        "type": "电影",
        "genre": "恐怖/悬疑",
        "tags": [
            "泰恐",
            "出租屋",
            "诅咒",
            "仪式",
            "反转"
        ],
        "oneLine": "曼谷一对年轻夫妇租下一栋价格低得离谱的独栋别墅,却发现屋主出租的原因是为了找人替他家承担诅咒。",
        "url": "./movies/movie-859.html",
        "image": "./109.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "菜鸟先生",
        "year": "2015",
        "region": "中国台湾",
        "type": "电影",
        "genre": "喜剧,爱情",
        "tags": [
            "职场",
            "逆袭",
            "小人物",
            "轻喜剧",
            "乌龙"
        ],
        "oneLine": "职场废柴被误认为新任CEO,在谎言与笑料中阴差阳错拯救了濒临倒闭的公司。",
        "url": "./movies/movie-860.html",
        "image": "./110.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "毛骨悚然之红衣男孩",
        "year": "2023",
        "region": "中国大陆",
        "type": "网络电影",
        "genre": "悬疑惊悚",
        "tags": [
            "红衣",
            "男孩",
            "诅咒",
            "乡村",
            "录像带"
        ],
        "oneLine": "一支户外探险队在荒村捡到一盘录像带,里面记录着20年前红衣男孩失踪的真相。",
        "url": "./movies/movie-861.html",
        "image": "./111.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "永恒的友谊",
        "year": "1959",
        "region": "中国大陆/朝鲜",
        "type": "电影",
        "genre": "剧情,战争,历史",
        "tags": [
            "抗美援朝",
            "中朝友谊",
            "黑白片",
            "战争",
            "兄弟情"
        ],
        "oneLine": "抗美援朝战场上,一名志愿军炊事班老兵和一名朝鲜人民军少年,在炮火中用一口锅结下生死友谊。",
        "url": "./movies/movie-862.html",
        "image": "./112.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "末日危机:绝境求生",
        "year": "2023",
        "region": "英国",
        "type": "剧集",
        "genre": "科幻/灾难",
        "tags": [
            "丧尸",
            "末世",
            "生存",
            "人性",
            "阴谋"
        ],
        "oneLine": "致命病毒席卷全球,伦敦一处地下掩体里的幸存者们发现,感染者正以惊人的速度产生智慧。",
        "url": "./movies/movie-863.html",
        "image": "./113.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "鹎",
        "year": "2022",
        "region": "日本",
        "type": "电影",
        "genre": "悬疑,惊悚,恐怖",
        "tags": [
            "鸟类",
            "诅咒",
            "乡村",
            "民俗",
            "精神污染"
        ],
        "oneLine": "搬迁至偏僻乡村的女教师发现,邻居总在天亮前对着鸟笼唱歌,而唱谁的歌,谁就会离奇死亡。",
        "url": "./movies/movie-864.html",
        "image": "./114.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "财富流感",
        "year": "2026",
        "region": "美国、西班牙",
        "type": "剧集",
        "genre": "科幻、惊悚、社会",
        "tags": [
            "病毒",
            "阶级",
            "财富分配",
            "末日"
        ],
        "oneLine": "一种只传染富人的病毒在全球蔓延,染病者会疯狂挥霍财产直至赤贫,而“治愈”的唯一方法是自愿变成穷人。",
        "url": "./movies/movie-865.html",
        "image": "./115.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "五个杀手的传说",
        "year": "2026",
        "region": "香港/法国",
        "type": "电影",
        "genre": "动作/犯罪/黑色幽默",
        "tags": [
            "杀手",
            "酒后吐真言",
            "失忆",
            "团灭",
            "反转"
        ],
        "oneLine": "五个顶级杀手喝醉后,各自吹嘘自己最完美的暗杀,结果发现五起案子竟然死的是同一个人。",
        "url": "./movies/movie-866.html",
        "image": "./116.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "完美婚姻的定式",
        "year": "2024",
        "region": "韩国",
        "type": "电视剧",
        "genre": "爱情,悬疑",
        "tags": [
            "契约婚姻",
            "财阀",
            "先婚后爱",
            "复仇"
        ],
        "oneLine": "为了报复前男友,她嫁给了患有情感障碍的财阀三世,并签下了“不许动心”的契约。",
        "url": "./movies/movie-867.html",
        "image": "./117.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "马布斯博士的一千只眼",
        "year": "2026",
        "region": "德国",
        "type": "电影",
        "genre": "悬疑,犯罪,黑色电影",
        "tags": [
            "致敬经典",
            "心理操控",
            "战后阴影",
            "监控"
        ],
        "oneLine": "现代柏林,一名侦探在调查富豪离奇自杀案时,发现所有线索都指向一个传说中的犯罪天才“马布斯博士”,而他似乎通过网络摄像头无处不在。",
        "url": "./movies/movie-868.html",
        "image": "./118.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "生葬虎头门",
        "year": "1995",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作,犯罪",
        "tags": [
            "监狱风云",
            "卧底",
            "兄弟情"
        ],
        "oneLine": "为了替枉死的父亲报仇,一名警察主动犯罪入狱,却发现杀父仇人竟是狱中暗中保护他的神秘大佬。",
        "url": "./movies/movie-869.html",
        "image": "./119.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "巴黎皇帝",
        "year": "2024",
        "region": "法国",
        "type": "剧集",
        "genre": "历史",
        "tags": [
            "拿破仑",
            "篡改历史",
            "惊悚",
            "科技伦理",
            "时间旅行"
        ],
        "oneLine": "一群历史系学生使用AI深度伪造技术,在社交媒体上发起了“复活拿破仑”的病毒营销,不料却引发了全球极右翼政变。",
        "url": "./movies/movie-870.html",
        "image": "./120.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "金鹿",
        "year": "2023",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情/奇幻",
        "tags": [
            "原住民",
            "猎首传说",
            "殖民历史",
            "山林"
        ],
        "oneLine": "日本摄影师在山中拍到了传说中的金鹿,而照片显影后,鹿角上挂着的全是人头。",
        "url": "./movies/movie-871.html",
        "image": "./121.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "唐卡迷踪",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑,冒险",
        "tags": [
            "西藏",
            "艺术",
            "盗窃",
            "信仰"
        ],
        "oneLine": "一幅失传的唐代唐卡重现人间,却牵扯出一场跨越三代人的信仰与阴谋之战。",
        "url": "./movies/movie-872.html",
        "image": "./122.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "水星领航员第一季",
        "year": "2025",
        "region": "日本",
        "type": "动画",
        "genre": "科幻/治愈/日常",
        "tags": [
            "新威尼斯",
            "领航员",
            "治愈",
            "科幻日常",
            "悠哉"
        ],
        "oneLine": "在火星水星化的新威尼斯,少女们学习成为 gondola 领航员,温柔得让人想哭。",
        "url": "./movies/movie-873.html",
        "image": "./123.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "小尼基",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧,奇幻",
        "tags": [
            "撒旦之子",
            "天堂地狱",
            "废柴主角",
            "救赎"
        ],
        "oneLine": "撒旦最废柴的小儿子为了拯救地狱,必须前往人间阻止他的两个哥哥毁灭世界。",
        "url": "./movies/movie-874.html",
        "image": "./124.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "终极天将",
        "year": "2026",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作/科幻/奇幻",
        "tags": [
            "港产科幻",
            "超级英雄",
            "神话改编",
            "赛博朋克",
            "东方美学"
        ],
        "oneLine": "2046年的香港,一个落魄的乩童被注入了雷震子的上古芯片,成为对抗跨国AI邪教的“终极天将”。",
        "url": "./movies/movie-875.html",
        "image": "./125.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "冰原零讯号",
        "year": "2026",
        "region": "美国,加拿大",
        "type": "电视剧",
        "genre": "科幻,悬疑,恐怖",
        "tags": [
            "南极",
            "科考站",
            "外星信号",
            "心理恐怖",
            "群体癫狂"
        ],
        "oneLine": "南极科考站收到一段来自冰层下两万米的“沉默信号”,此后,站内成员开始说一种无人能懂的语言。",
        "url": "./movies/movie-876.html",
        "image": "./126.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "爱情外一章",
        "year": "2026",
        "region": "法国",
        "type": "电影",
        "genre": "爱情/喜剧",
        "tags": [
            "婚姻",
            "中年危机",
            "开放式关系",
            "幽默"
        ],
        "oneLine": "一对结婚20年的夫妻决定各自出轨一年,却意外发现对方的新恋人竟然是自己年轻时的模样。",
        "url": "./movies/movie-877.html",
        "image": "./127.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "情迷芭芭拉",
        "year": "2015",
        "region": "法国",
        "type": "电影",
        "genre": "爱情,剧情",
        "tags": [
            "中年之恋",
            "钢琴家",
            "谎言",
            "救赎"
        ],
        "oneLine": "五十岁的钢琴家假装失明,只为接近每天来听他弹琴的盲女芭芭拉。",
        "url": "./movies/movie-878.html",
        "image": "./128.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "绿水",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "悬疑,犯罪,环保",
        "tags": [
            "河神",
            "污染",
            "乡村悬疑",
            "祭祀"
        ],
        "oneLine": "湘西小镇河水一夜变绿,伴随三起命案,老警察发现这些竟与三十年前的活人祭祀有关。",
        "url": "./movies/movie-879.html",
        "image": "./129.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "风云变2024",
        "year": "2024",
        "region": "香港",
        "type": "电影",
        "genre": "动作,奇幻",
        "tags": [
            "武侠",
            "现代",
            "异能",
            "兄弟反目",
            "特效"
        ],
        "oneLine": "步惊云和聂风的后人在2024年的香港重聚,却发现祖先的“麒麟魔血”让其中一人失控滥杀。",
        "url": "./movies/movie-880.html",
        "image": "./130.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "电影社会主义",
        "year": "2024",
        "region": "法国/德国",
        "type": "电影",
        "genre": "剧情/实验",
        "tags": [
            "政治寓言",
            "邮轮",
            "马克思",
            "欧洲危机",
            "论文电影"
        ],
        "oneLine": "一艘漫游欧洲各大港口的豪华邮轮上,不同阶级的乘客被迫集体朗读《资本论》以对抗神秘病毒。",
        "url": "./movies/movie-881.html",
        "image": "./131.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "别让我走",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "剧情,科幻",
        "tags": [
            "克隆人",
            "伦理",
            "唯美虐心"
        ],
        "oneLine": "在一所与世隔绝的寄宿学校,一群孩子发现自己都是为捐献器官而存在的克隆人,他们必须直面被预设的短命人生。",
        "url": "./movies/movie-882.html",
        "image": "./132.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "海妖启示录",
        "year": "2023",
        "region": "美国",
        "type": "剧集",
        "genre": "科幻,悬疑,灾难",
        "tags": [
            "末日浪潮",
            "深海生物",
            "气候寓言"
        ],
        "oneLine": "全球海平面突升百米,幸存者发现海妖并非灾厄元凶,而是警告人类时间循环即将重开。",
        "url": "./movies/movie-883.html",
        "image": "./133.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "主妇狂想曲",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧/奇幻",
        "tags": [
            "家庭主妇",
            "脑内小剧场",
            "解放",
            "幽默",
            "自我成长"
        ],
        "oneLine": "三位绝望主妇意外获得能听见彼此内心“狂想曲”的超能力,从此生活鸡飞狗跳。",
        "url": "./movies/movie-884.html",
        "image": "./134.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "冰岛犯罪现场",
        "year": "2019",
        "region": "冰岛",
        "type": "电影",
        "genre": "悬疑犯罪",
        "tags": [
            "北欧冷峻",
            "极昼推理",
            "连环杀人",
            "社会派"
        ],
        "oneLine": "极昼之下,雷克雅未克发生首起连环杀人案,老警探发现所有线索都指向自己。",
        "url": "./movies/movie-885.html",
        "image": "./135.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "这个男人有点色",
        "year": "1994",
        "region": "香港",
        "type": "电影",
        "genre": "剧情/喜剧/爱情",
        "tags": [
            "情欲",
            "心理",
            "反转",
            "黑色幽默"
        ],
        "oneLine": "一位自称能看穿女性欲望的“色彩疗愈师”,遇上了真正读懂他内心灰色的女人。",
        "url": "./movies/movie-886.html",
        "image": "./136.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "宫心计2深宫计国语",
        "year": "2018",
        "region": "中国香港",
        "type": "剧集",
        "genre": "古装/宫斗/权谋",
        "tags": [
            "唐朝",
            "后宫争宠",
            "权谋博弈",
            "姐妹反目"
        ],
        "oneLine": "唐隆政变后,后宫看似平静,一场围绕“尚宫局”改制与龙种归属的暗战悄然开幕。",
        "url": "./movies/movie-887.html",
        "image": "./137.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "魔龙军团",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "奇幻,动作,冒险",
        "tags": [
            "龙骑兵",
            "人龙契约",
            "帝国战争",
            "空战",
            "史诗"
        ],
        "oneLine": "被帝国抛弃的龙骑兵残部,带着最后一颗龙蛋,穿越敌占区寻找传说中最后的龙巢。",
        "url": "./movies/movie-888.html",
        "image": "./138.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "魔法老师",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧/奇幻",
        "tags": [
            "魔法",
            "校园",
            "逆袭",
            "搞笑",
            "荒诞"
        ],
        "oneLine": "一位失意的高中化学老师意外获得言出法随的超能力,却在拯救学校时引发了一连串荒诞灾难。",
        "url": "./movies/movie-889.html",
        "image": "./139.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "女之园",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "剧情/历史",
        "tags": [
            "女性主义",
            "二战",
            "慰安妇",
            "沉默与控诉"
        ],
        "oneLine": "二战结束后,日本某地出现了一座“女之园”,里面住着的都是被战争遗弃的女人,她们决定说出那段被禁止的历史。",
        "url": "./movies/movie-890.html",
        "image": "./140.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "时光留声",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "奇幻",
        "tags": [
            "亲情",
            "怀旧",
            "磁带",
            "穿越",
            "治愈"
        ],
        "oneLine": "女儿通过一台老式录音机,竟能与已故三十年的父亲对话,她用磁带一点点拼凑出父亲从未说出口的秘密。",
        "url": "./movies/movie-891.html",
        "image": "./141.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "王先生之欲火焚身",
        "year": "1998",
        "region": "中国香港",
        "type": "电影",
        "genre": "情色,剧情,悬疑",
        "tags": [
            "情欲",
            "中年人",
            "出轨",
            "心理惊悚",
            "香港三级片余晖"
        ],
        "oneLine": "五十岁的中产老王出轨女秘书后,开始每晚梦见自己被妻子分尸。",
        "url": "./movies/movie-892.html",
        "image": "./142.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "制服2013",
        "year": "2013",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/悬疑",
        "tags": [
            "身份互换",
            "保安",
            "贪腐",
            "黑色幽默"
        ],
        "oneLine": "一个小区的保安捡到一件公安制服后,开始扮演警察,却意外卷入了一场黑金交易。",
        "url": "./movies/movie-893.html",
        "image": "./143.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "幕后枭雄第一季",
        "year": "2018",
        "region": "美国",
        "type": "剧集",
        "genre": "剧情,惊悚,政治",
        "tags": [
            "权谋",
            "暗箱操作",
            "智斗"
        ],
        "oneLine": "总统只是提线木偶,真正的权力掌握在幕僚长、媒体大亨和神秘黑客的三人联盟手中。",
        "url": "./movies/movie-894.html",
        "image": "./144.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "摊开你的地图",
        "year": "2023",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情、青春",
        "tags": [
            "告别",
            "地图",
            "公路"
        ],
        "oneLine": "高三毕业前,四个死党偷了一辆车,按着十年前的旧地图去寻找一座据说已经消失的岛屿。",
        "url": "./movies/movie-895.html",
        "image": "./145.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "老娘还没死第一季",
        "year": "2023",
        "region": "美国",
        "type": "剧集",
        "genre": "喜剧,生活",
        "tags": [
            "丧偶",
            "重启人生",
            "单亲妈妈",
            "毒舌"
        ],
        "oneLine": "一位四十岁的寡妇为了养活孩子,不得不重操旧业去实习,结果她遇到的00后上司居然是她的前相亲对象。",
        "url": "./movies/movie-896.html",
        "image": "./146.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "生活中的一天",
        "year": "2025",
        "region": "日本",
        "type": "剧集",
        "genre": "剧情、家庭、日常",
        "tags": [
            "治愈系",
            "时间循环",
            "亲情",
            "慢节奏",
            "观察人生"
        ],
        "oneLine": "一个癌症晚期的父亲突然获得能力,可以反复度过生命中的最后一天,直到找到真正的告别方式。",
        "url": "./movies/movie-897.html",
        "image": "./147.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "青云志",
        "year": "2016",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装/仙侠/奇幻",
        "tags": [
            "修真",
            "正邪",
            "虐恋",
            "门派斗争",
            "大IP"
        ],
        "oneLine": "草庙村遗孤张小凡,意外获得融汇正邪两道的至宝“烧火棍”,在青云门与魔教之间挣扎求生。",
        "url": "./movies/movie-898.html",
        "image": "./148.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "未知死亡2008",
        "year": "2024",
        "region": "印度",
        "type": "电影",
        "genre": "动作,爱情,悬疑",
        "tags": [
            "失忆",
            "复仇",
            "反转",
            "虐恋",
            "社会批判"
        ],
        "oneLine": "一个拥有15分钟记忆的富豪,靠纹满全身的线索和照片,誓要找出杀害女友并毁灭自己人生的仇人。",
        "url": "./movies/movie-899.html",
        "image": "./149.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "我家是个博物馆",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧/奇幻",
        "tags": [
            "奇幻",
            "家庭",
            "古董",
            "穿越"
        ],
        "oneLine": "母亲去世后,儿子回家处理遗物,发现家里每件老物件都藏着一个时空入口。",
        "url": "./movies/movie-900.html",
        "image": "./150.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "动物频道",
        "year": "2022",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧,奇幻",
        "tags": [
            "拟人动物",
            "职场吐槽",
            "荒诞治愈",
            "动物园"
        ],
        "oneLine": "一家濒临倒闭的动物园里,动物们开口说话了,而且比人类更懂职场规则。",
        "url": "./movies/movie-901.html",
        "image": "./1.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "午夜废墟",
        "year": "2023",
        "region": "日本",
        "type": "电影",
        "genre": "恐怖,灵异",
        "tags": [
            "鬼屋",
            "直播",
            "诅咒",
            "伪纪录片"
        ],
        "oneLine": "六名网红主播闯入一栋二战时期的废弃医院直播探险,却触发了逢午夜必重现的集体虐杀幻象,而他们就是祭品。",
        "url": "./movies/movie-902.html",
        "image": "./2.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "发酵吧,创业菌",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情,喜剧",
        "tags": [
            "创业",
            "食品科学",
            "女性",
            "励志"
        ],
        "oneLine": "三个食品专业女博士放弃百万年薪,在菜市场角落研究臭豆腐发酵,只为做出“有灵魂”的素奶酪。",
        "url": "./movies/movie-903.html",
        "image": "./3.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "伸冤人",
        "year": "2014",
        "region": "美国",
        "type": "电影",
        "genre": "动作,犯罪",
        "tags": [
            "私刑正义",
            "退役特工",
            "智斗"
        ],
        "oneLine": "看似温和的建材超市员工,用一套精准的算法为弱者复仇。",
        "url": "./movies/movie-904.html",
        "image": "./4.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "跳跃青春",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "运动",
        "tags": [
            "跑酷",
            "街头少年",
            "成长燃向"
        ],
        "oneLine": "五个被贴上“问题少年”标签的高中生组成跑酷队,要在一场地下大赛中赢回被强拆的训练场。",
        "url": "./movies/movie-905.html",
        "image": "./5.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "受伤的小鹿",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "惊悚,心理",
        "tags": [
            "狩猎隐喻",
            "创伤后遗症",
            "荒野求生",
            "反转"
        ],
        "oneLine": "女护林员在深山中救下一名失忆男子,却发现自己才是被追踪的猎物。",
        "url": "./movies/movie-906.html",
        "image": "./6.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "歪果仁研究协会",
        "year": "2025",
        "region": "中国大陆",
        "type": "电视剧 (20集,每集25分钟)",
        "genre": "情景喜剧",
        "tags": [
            "外国人",
            "文化冲突",
            "北京",
            "留学生活"
        ],
        "oneLine": "五个来自不同国家的外国人合租在北京一个老小区,用中文吵架,用母语和好。",
        "url": "./movies/movie-907.html",
        "image": "./7.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "派对把妹秘诀",
        "year": "2018",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧,爱情,科幻",
        "tags": [
            "外星人",
            "青春期",
            "派对",
            "尬聊"
        ],
        "oneLine": "三个不懂撩妹的高中生,在家举办派对时意外吸引来了一群伪装成人类、来学习“爱”的外星女性。",
        "url": "./movies/movie-908.html",
        "image": "./8.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "我和父母",
        "year": "2019",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "父母离婚",
            "少年视角",
            "南方县城",
            "日常生活"
        ],
        "oneLine": "十四岁那年,父母平静地离婚,而我唯一难过的是——他们实在太讲道理了。",
        "url": "./movies/movie-909.html",
        "image": "./9.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "名侦探柯南:天空的劫难船",
        "year": "2010",
        "region": "日本",
        "type": "剧场版动画",
        "genre": "悬疑动作",
        "tags": [
            "柯南",
            "飞艇",
            "细菌",
            "怪盗基德",
            "高空危机"
        ],
        "oneLine": "柯南与怪盗基德被迫联手,在一艘满载致命细菌的巨型飞艇上,对抗一群劫持了整个关西空域的恐怖分子。",
        "url": "./movies/movie-910.html",
        "image": "./10.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "欲海春色",
        "year": "2027",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情,情色,悬疑",
        "tags": [
            "R级",
            "豪门恩怨",
            "欲望",
            "心理战",
            "反转"
        ],
        "oneLine": "为了跻身上流社会,穷家女假扮豪门失散千金入住别墅,却发现这家族的每个成员都试图在午夜杀死对方,只为了遗产。",
        "url": "./movies/movie-911.html",
        "image": "./11.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "格斗的技术",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "动作,体育",
        "tags": [
            "MMA",
            "师徒",
            "复仇",
            "传承",
            "热血"
        ],
        "oneLine": "年过五十的前拳王为了给意外瘫痪的徒弟报仇,用最“过时”的古老格斗术挑战当红无限制格斗冠军。",
        "url": "./movies/movie-912.html",
        "image": "./12.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "沙漠孤心",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "剧情,冒险,心理",
        "tags": [
            "末世",
            "独角戏",
            "生存",
            "AI",
            "绿洲"
        ],
        "oneLine": "最后一名人类幸存者在沙漠中醒来,身边只有一台逐渐故障的生存机器人和一个记忆里不存在的女儿影像。",
        "url": "./movies/movie-913.html",
        "image": "./13.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "星",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "科幻",
        "tags": [
            "太空",
            "精神分裂",
            "宇航员",
            "哲学"
        ],
        "oneLine": "独自在太空舱飞行的宇航员,发现舱内出现了第二个“自己”。",
        "url": "./movies/movie-914.html",
        "image": "./14.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "叠影狂花",
        "year": "2026",
        "region": "香港",
        "type": "电影",
        "genre": "悬疑,犯罪",
        "tags": [
            "人格分裂",
            "霓虹美学",
            "记忆篡改"
        ],
        "oneLine": "旺角一场离奇跳楼案,女警探发现死者体内残留的DNA竟同时指向自己和失踪十年的双胞胎姐姐。",
        "url": "./movies/movie-915.html",
        "image": "./15.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "爱丽丝岛",
        "year": "2015",
        "region": "美国",
        "type": "电影",
        "genre": "悬疑/剧情",
        "tags": [
            "移民",
            "精神病院",
            "女权"
        ],
        "oneLine": "1910年,一名女记者假装精神病人潜入爱丽丝岛医院,调查女性失踪的真相。",
        "url": "./movies/movie-916.html",
        "image": "./16.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "战争天堂",
        "year": "2022",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "战争,剧情,历史",
        "tags": [
            "二战",
            "战俘营",
            "画家",
            "人性",
            "黑白摄影"
        ],
        "oneLine": "一名苏联红军画家被关进纳粹战俘营,被迫为军官画像,他用画笔记录下地狱中的人性微光。",
        "url": "./movies/movie-917.html",
        "image": "./17.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "死亡笔记:最后的名字",
        "year": "2016",
        "region": "日本",
        "type": "电影",
        "genre": "悬疑、奇幻、犯罪",
        "tags": [
            "死神",
            "天才对决",
            "黑暗英雄"
        ],
        "oneLine": "夜神月与L的对决进入白热化,但第三个持有死亡笔记的人出现了。",
        "url": "./movies/movie-918.html",
        "image": "./18.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "红花曲",
        "year": "1965",
        "region": "中国大陆",
        "type": "电影",
        "genre": "戏曲/剧情",
        "tags": [
            "锡剧",
            "社会主义建设",
            "女劳模"
        ],
        "oneLine": "江南织布厂女工通过技术革新提高产量,却被保守思想视为“出风头”的曲折故事。",
        "url": "./movies/movie-919.html",
        "image": "./19.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "间谍亚契第八季",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "喜剧、动作、动画、间谍",
        "tags": [
            "成年动画",
            "嘴炮",
            "特工",
            "无厘头",
            "梗密集"
        ],
        "oneLine": "世界最自恋的特工亚契,这季被下放到情报局档案室,却在那里破获了最大的内部间谍网。",
        "url": "./movies/movie-920.html",
        "image": "./20.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "续命之徒:绝命毒师电影",
        "year": "2019",
        "region": "美国",
        "type": "电影",
        "genre": "犯罪",
        "tags": [
            "西部",
            "逃亡",
            "续集"
        ],
        "oneLine": "杰西·平克曼冲破铁笼后一路向北,背后是警车、黑帮和他永远逃不掉的过去。",
        "url": "./movies/movie-921.html",
        "image": "./21.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "兼职奶爸",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧,家庭",
        "tags": [
            "硬汉带娃",
            "反差萌",
            "动作",
            "乌龙"
        ],
        "oneLine": "一名冷酷的特种兵为了任务不得不伪装成幼儿园保姆,结果敌人没炸死,先被熊孩子整疯了。",
        "url": "./movies/movie-922.html",
        "image": "./22.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "韩赛尔与格蕾特",
        "year": "2025",
        "region": "美国/德国",
        "type": "电影",
        "genre": "奇幻/悬疑/恐怖",
        "tags": [
            "暗黑童话",
            "哥特风格",
            "女巫猎人",
            "兄妹情深"
        ],
        "oneLine": "糖果屋事件十五年后,韩赛尔和格蕾特成为了一对顶尖的女巫猎人,直到他们发现,那个吃小孩的诅咒源头,就在自己体内。",
        "url": "./movies/movie-923.html",
        "image": "./23.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "博士之力",
        "year": "2026",
        "region": "英国",
        "type": "剧集",
        "genre": "科幻/冒险/奇幻",
        "tags": [
            "神秘博士",
            "重生",
            "多元宇宙"
        ],
        "oneLine": "神秘博士耗尽了所有重生次数,但宇宙需要他——于是“博士之力”成了每个人的能力。",
        "url": "./movies/movie-924.html",
        "image": "./24.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "美国空姐",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧/剧情",
        "tags": [
            "航空",
            "女性职场",
            "阶层跨越",
            "姐妹情",
            "公路元素"
        ],
        "oneLine": "小镇女孩成为顶级国际航班的空姐,发现光鲜制服之下是严苛的等级制度和空乘之间隐秘的江湖。",
        "url": "./movies/movie-925.html",
        "image": "./25.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "泰版下一站是幸福国语",
        "year": "2025",
        "region": "泰国",
        "type": "剧集",
        "genre": "爱情,都市",
        "tags": [
            "姐弟恋",
            "翻拍",
            "职场",
            "喜剧"
        ],
        "oneLine": "泰版改编,32岁职场女精英遇上22岁清新实习生,是勇敢恋爱还是回归世俗?国语配音版同步上线。",
        "url": "./movies/movie-926.html",
        "image": "./26.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "最后一个恶魔",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "恐怖/惊悚",
        "tags": [
            "驱魔",
            "反转",
            "宗教神秘"
        ],
        "oneLine": "当世界上所有恶魔都被封印,退休的神父准备迎接死亡时,一个毫无被附身迹象的女人却求他杀死自己体内的“虚无”。",
        "url": "./movies/movie-927.html",
        "image": "./27.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "不日城",
        "year": "1991",
        "region": "香港",
        "type": "电影",
        "genre": "剧情/犯罪/爱情",
        "tags": [
            "九龙城寨",
            "江湖",
            "末世美学",
            "悲剧"
        ],
        "oneLine": "即将被拆除的九龙城寨中,最后一代江湖人、妓女和逃犯,在三十天内上演各自的末路狂欢。",
        "url": "./movies/movie-928.html",
        "image": "./28.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "日落湄南河",
        "year": "2022",
        "region": "泰国",
        "type": "电视剧",
        "genre": "爱情/战争/年代",
        "tags": [
            "异国绝恋",
            "二战背景",
            "身份对立"
        ],
        "oneLine": "二战尾声,日本军官与泰国河畔少女在血色夕阳下,谱写了一曲不被任何国度接纳的悲歌。",
        "url": "./movies/movie-929.html",
        "image": "./29.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "花瓶",
        "year": "2010",
        "region": "法国",
        "type": "电影",
        "genre": "喜剧/家庭",
        "tags": [
            "花瓶",
            "家庭喜剧",
            "法国喜剧",
            "女性觉醒"
        ],
        "oneLine": "一直被丈夫当作“漂亮花瓶”的家庭主妇苏珊,在丈夫突发中风后被迫接管家族工厂,却意外展现出惊人的商业头脑。",
        "url": "./movies/movie-930.html",
        "image": "./30.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "大雪无痕",
        "year": "2024",
        "region": "中国",
        "type": "电影",
        "genre": "悬疑,犯罪",
        "tags": [
            "东北",
            "连环命案",
            "人性",
            "大雪"
        ],
        "oneLine": "北方小镇的暴雪夜,一名退休老刑警发现,三起看似无关的命案都指向同一个雪人。",
        "url": "./movies/movie-931.html",
        "image": "./31.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "老板渡假去2",
        "year": "1994",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧、犯罪",
        "tags": [
            "度假",
            "倒霉老板",
            "黑帮",
            "乌龙",
            "假期惊魂"
        ],
        "oneLine": "倒霉老板好不容易又得到一个假期,带着家人去加勒比海度假,结果入住的酒店是黑帮洗钱据点。",
        "url": "./movies/movie-932.html",
        "image": "./32.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "非常父女档",
        "year": "2016",
        "region": "印度",
        "type": "电影",
        "genre": "剧情,家庭",
        "tags": [
            "单亲",
            "摔跤",
            "父爱",
            "逆袭"
        ],
        "oneLine": "一个懦弱的单亲爸爸为了让女儿不被欺负,把自己训练成地下拳王,却被告知女儿得了绝症。",
        "url": "./movies/movie-933.html",
        "image": "./33.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "复仇战将",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "动作、惊悚、西部",
        "tags": [
            "枪战",
            "复仇",
            "退伍军人",
            "义警"
        ],
        "oneLine": "退役三角洲部队狙击手的女儿被贩毒集团误杀,他独自一人穿越沙漠,用一把古董左轮手枪执行私刑正义。",
        "url": "./movies/movie-934.html",
        "image": "./34.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "生命与灵魂",
        "year": "2019",
        "region": "美国",
        "type": "电影",
        "genre": "科幻/剧情",
        "tags": [
            "意识上传",
            "伦理",
            "家庭",
            "克隆",
            "哲学"
        ],
        "oneLine": "一位失去女儿的母亲将女儿的意识上传AI,却发现拥有她记忆的机器人越来越多。",
        "url": "./movies/movie-935.html",
        "image": "./35.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "日常系的异能战斗",
        "year": "2024",
        "region": "日本",
        "type": "动画剧集",
        "genre": "喜剧/奇幻/日常",
        "tags": [
            "超能力",
            "高中生",
            "社团",
            "沙雕",
            "反套路"
        ],
        "oneLine": "文艺部七人突然觉醒超能力,但最强的“时空停止”只能用来赶作业,“火焰操控”只能热便当。",
        "url": "./movies/movie-936.html",
        "image": "./36.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "金刚经",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,哲学",
        "tags": [
            "僧人",
            "杀人犯",
            "沙漠",
            "救赎",
            "对话体"
        ],
        "oneLine": "沙漠深处,一个逃亡的杀人犯遇到了一个抄经的年轻僧人,七天的对话让“放下屠刀”四个字有了血肉。",
        "url": "./movies/movie-937.html",
        "image": "./37.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "跃动青春",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情/运动",
        "tags": [
            "花式跳绳",
            "体育高考",
            "逆袭",
            "校园",
            "青春热血"
        ],
        "oneLine": "重点高中吊车尾班级,为了争取高考加分,被迫组建了一支男子花式跳绳队。",
        "url": "./movies/movie-938.html",
        "image": "./38.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "热血高校第二季",
        "year": "2023",
        "region": "日本",
        "type": "剧集",
        "genre": "动作/青春/校园",
        "tags": [
            "不良少年",
            "格斗",
            "兄弟情",
            "热血",
            "霸凌"
        ],
        "oneLine": "旧秩序崩塌后,铃兰高中迎来史上最混乱的争霸战。",
        "url": "./movies/movie-939.html",
        "image": "./39.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "飞机总动员2:打火英雄",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动画/冒险/动作",
        "tags": [
            "灭火",
            "勇气",
            "团队",
            "特效"
        ],
        "oneLine": "曾经的农用飞机“尘土”退役后,转型成为一名空中消防员,拯救被烈焰吞噬的国家公园。",
        "url": "./movies/movie-940.html",
        "image": "./40.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "我的太阳",
        "year": "1955",
        "region": "意大利",
        "type": "电影",
        "genre": "剧情/音乐/爱情",
        "tags": [
            "那不勒斯",
            "民谣",
            "盲人歌手",
            "经典"
        ],
        "oneLine": "那不勒斯的盲人街头歌手爱上了一个女孩,他不知道的是,她也是盲人。",
        "url": "./movies/movie-941.html",
        "image": "./41.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "老爷保号",
        "year": "2024",
        "region": "中国大陆/潮汕",
        "type": "电影",
        "genre": "喜剧/家庭",
        "tags": [
            "潮汕文化",
            "英歌舞",
            "非遗",
            "代际冲突"
        ],
        "oneLine": "广州打拼失败的潮汕青年回乡,发现父亲正用直播卖牛肉丸的方式“复兴”英歌队。",
        "url": "./movies/movie-942.html",
        "image": "./42.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "喂,看见耳朵啦!第一季",
        "year": "2024",
        "region": "中国",
        "type": "动漫",
        "genre": "日常、萌系、奇幻",
        "tags": [
            "治愈",
            "兽耳",
            "都市",
            "轻松"
        ],
        "oneLine": "社畜青年阿凉某天醒来,发现自己养的猫变成了一个长着猫耳的粘人少年。",
        "url": "./movies/movie-943.html",
        "image": "./43.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "左轮手枪莉莉",
        "year": "2025",
        "region": "法国/意大利",
        "type": "电影",
        "genre": "动作/西部",
        "tags": [
            "女枪手",
            "复仇",
            "荒野",
            "反英雄"
        ],
        "oneLine": "修女院孤儿莉莉被训练成顶级杀手,她用一把刻着圣母像的左轮,屠灭了整个拐卖儿童的黑帮。",
        "url": "./movies/movie-944.html",
        "image": "./44.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "最后的王爷",
        "year": "2026",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "历史传奇",
        "tags": [
            "清末",
            "王爷",
            "改革",
            "家族兴衰"
        ],
        "oneLine": "清朝最后一个铁帽子王,在民国沦为乞丐,用余生寻找皇帝。",
        "url": "./movies/movie-945.html",
        "image": "./45.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "端岛计划",
        "year": "2025",
        "region": "日本",
        "type": "动画电影",
        "genre": "科幻、悬疑、动作",
        "tags": [
            "军国主义遗产",
            "改造人",
            "记忆消除",
            "垂直城市",
            "末日审判"
        ],
        "oneLine": "2045年,一群囚犯被送上端岛(军舰岛)参加死亡游戏,胜者可以重写自己的过去。",
        "url": "./movies/movie-946.html",
        "image": "./46.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "古塔盗宝记",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧/冒险/动作",
        "tags": [
            "盗墓",
            "非遗",
            "搞笑",
            "反转",
            "文化"
        ],
        "oneLine": "三个菜鸟盗贼组团潜入千年古塔寻宝,却触发了古人的机关陷阱,在塔里上演了一出啼笑皆非的逃杀闹剧。",
        "url": "./movies/movie-947.html",
        "image": "./47.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "优越的一天",
        "year": "2022",
        "region": "韩国",
        "type": "电视剧",
        "genre": "悬疑/惊悚/犯罪",
        "tags": [
            "绑架",
            "连环杀手",
            "倒计时"
        ],
        "oneLine": "平凡的单亲爸爸为了在24小时内救回被绑架的女儿,必须去杀掉一个住在他隔壁、从未被世人察觉的隐形连环杀人魔。",
        "url": "./movies/movie-948.html",
        "image": "./48.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "雪中悍刀行",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装,武侠,剧情",
        "tags": [
            "权谋",
            "江湖",
            "群像",
            "IP改编"
        ],
        "oneLine": "北凉世子徐凤年不愿接手家业,直到他父亲的旧部一个个离奇死亡。",
        "url": "./movies/movie-949.html",
        "image": "./49.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "灵魂势力",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "灵异/喜剧/动作",
        "tags": [
            "驱魔",
            "社团",
            "黑帮",
            "搞笑"
        ],
        "oneLine": "黑帮龙头金盆洗手开灵异侦探社,用江湖规矩对付厉鬼。",
        "url": "./movies/movie-950.html",
        "image": "./50.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "星掠者",
        "year": "2020",
        "region": "日本",
        "type": "动画",
        "genre": "科幻",
        "tags": [
            "机甲战斗",
            "宇宙冒险",
            "赏金猎人",
            "反乌托邦"
        ],
        "oneLine": "在垃圾星球上捡破烂的少年,意外捡到了全宇宙悬赏最高的“星掠者”的核心芯片。",
        "url": "./movies/movie-951.html",
        "image": "./51.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "爱之情照",
        "year": "2017",
        "region": "中国",
        "type": "电影",
        "genre": "爱情/奇幻",
        "tags": [
            "照相馆",
            "穿越",
            "遗憾"
        ],
        "oneLine": "一家破旧照相馆的老相机,拍下的情侣都会在未来永远分离或永远相守。",
        "url": "./movies/movie-952.html",
        "image": "./52.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "降世神通第二季",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "动画,奇幻",
        "tags": [
            "神通",
            "四元素",
            "内战",
            "新角色",
            "史诗"
        ],
        "oneLine": "新的神通降世于一个科技与灵力并存的时代,她面临的第一场挑战,是四个国家之间即将爆发的大规模内战。",
        "url": "./movies/movie-953.html",
        "image": "./53.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "暗黑之域",
        "year": "2024",
        "region": "德国",
        "type": "电影",
        "genre": "惊悚,恐怖,哲学",
        "tags": [
            "心理恐惧",
            "平行宇宙",
            "洛夫克拉夫特式"
        ],
        "oneLine": "一间只存在于手机地图“盲区”里的老房子,所有点进去的人,都在三日后失踪。",
        "url": "./movies/movie-954.html",
        "image": "./54.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "无人逃脱",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "惊悚/悬疑",
        "tags": [
            "密室",
            "心理战",
            "反转"
        ],
        "oneLine": "六名陌生人受邀参与一场密室游戏,却发现逃出的唯一方式是互相揭发最深的秘密。",
        "url": "./movies/movie-955.html",
        "image": "./55.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "将军的子弹",
        "year": "2024",
        "region": "中国大陆/马来西亚",
        "type": "电影",
        "genre": "战争/剧情/历史",
        "tags": [
            "二战",
            "抗日",
            "缅甸",
            "背叛"
        ],
        "oneLine": "缅甸丛林里,一位被诬陷叛逃的国军将军只带一颗子弹,在日军包围中寻找当年出卖全团的内奸。",
        "url": "./movies/movie-956.html",
        "image": "./56.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "天堂之雪",
        "year": "2024",
        "region": "挪威",
        "type": "剧集",
        "genre": "剧情、奇幻、家庭",
        "tags": [
            "北欧",
            "降雪",
            "奇迹",
            "丧亲",
            "治愈"
        ],
        "oneLine": "母亲去世后,小镇再也没有下过雪,直到她留下的遗言中说“雪会替我回来看你们”。",
        "url": "./movies/movie-957.html",
        "image": "./57.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "少林传人粤语",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作/古装",
        "tags": [
            "少林功夫",
            "复仇",
            "原声粤语"
        ],
        "oneLine": "清朝末年,少林寺被毁,三个带着不同绝技的俗家弟子,用最地道的粤语粗口,骂出了一条复寺之路。",
        "url": "./movies/movie-958.html",
        "image": "./58.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "双面名模",
        "year": "2024",
        "region": "英国",
        "type": "电视剧",
        "genre": "悬疑,惊悚,时尚",
        "tags": [
            "替身",
            "时尚圈黑幕",
            "连环失踪"
        ],
        "oneLine": "一个被雪藏的过气名模,被要求去顶替一个失踪的超模——但她发现,自己上一个“顶替”的人,至今没有回来。",
        "url": "./movies/movie-959.html",
        "image": "./59.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "西谎极落之太爆太子太空舱",
        "year": "2023",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧,科幻,讽刺",
        "tags": [
            "港式荒诞",
            "太空舱",
            "住房",
            "平行宇宙"
        ],
        "oneLine": "香港一群住在棺材房“太空舱”的年轻人意外发现自己所处的楼宇其实是一艘伪装成居民楼的太空飞船。",
        "url": "./movies/movie-960.html",
        "image": "./60.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "史酷比:疯狂月之怪",
        "year": "2024",
        "region": "美国",
        "type": "动画电影",
        "genre": "喜剧悬疑",
        "tags": [
            "史酷比",
            "月球",
            "怪物",
            "侦探"
        ],
        "oneLine": "史酷比一行人受邀登上月球基地,却发现月球的黑暗面住着一只能让人类陷入集体疯狂的远古月兽。",
        "url": "./movies/movie-961.html",
        "image": "./61.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "萨博马蒂报告",
        "year": "2026",
        "region": "印度",
        "type": "电影",
        "genre": "悬疑/惊悚/犯罪",
        "tags": [
            "纪实",
            "政治黑幕",
            "记者",
            "限时追查"
        ],
        "oneLine": "一名调查记者在自杀前留下一份编号“萨博马蒂”的报告,指控城市供水系统被人为投毒,追查者必须在三天内证明或否决它。",
        "url": "./movies/movie-962.html",
        "image": "./62.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "瓦文萨:希望之人",
        "year": "2025",
        "region": "波兰",
        "type": "电影",
        "genre": "传记,剧情,历史",
        "tags": [
            "政治传记",
            "工会运动",
            "抗争",
            "民族英雄"
        ],
        "oneLine": "从格但斯克造船厂的失业电工到诺贝尔和平奖得主,影片聚焦瓦文萨改变波兰历史的决定性十年。",
        "url": "./movies/movie-963.html",
        "image": "./63.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "野兔邦妮",
        "year": "2024",
        "region": "美国",
        "type": "动画电影",
        "genre": "喜剧,冒险,家庭",
        "tags": [
            "反英雄",
            "农场悬案",
            "素食肉食者",
            "公路冒险"
        ],
        "oneLine": "农场里最温顺的母兔邦妮,为了寻找失踪的萝卜,意外揭开了整个动物庄园“肉食者与素食者”之间的惊天阴谋。",
        "url": "./movies/movie-964.html",
        "image": "./64.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "不得不爱第一季",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "都市,情感,悬疑",
        "tags": [
            "家族恩怨",
            "失忆",
            "商战",
            "虐恋",
            "复仇"
        ],
        "oneLine": "相爱多年的恋人突然反目成仇,她不得不带着恨意嫁入他的家族,却发现一切都是一场巨大的误会。",
        "url": "./movies/movie-965.html",
        "image": "./65.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "死亡来临",
        "year": "2024",
        "region": "西班牙",
        "type": "电影",
        "genre": "恐怖/惊悚",
        "tags": [
            "死神",
            "规则怪谈",
            "密室",
            "倒计时"
        ],
        "oneLine": "七个人被困在一座古堡内,耳边响起低语:“每十分钟必须死一个人,否则所有人都会瞬间化为血水。",
        "url": "./movies/movie-966.html",
        "image": "./66.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "心慌方",
        "year": "2025",
        "region": "加拿大",
        "type": "电影",
        "genre": "科幻/惊悚",
        "tags": [
            "密室逃脱",
            "心理博弈",
            "生存游戏"
        ],
        "oneLine": "六名陌生人醒来时被困在一座不断重组、布满机关的魔方监狱中。",
        "url": "./movies/movie-967.html",
        "image": "./67.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "水瓶女人心",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情,爱情",
        "tags": [
            "独立女性",
            "自我觉醒",
            "星座隐喻"
        ],
        "oneLine": "水瓶座女设计师失去记忆后,发现前夫和闺蜜留下的日记竟全是谎言。",
        "url": "./movies/movie-968.html",
        "image": "./68.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "幸运的奶奶",
        "year": "2025",
        "region": "新加坡,马来西亚",
        "type": "电影",
        "genre": "喜剧,剧情",
        "tags": [
            "老人",
            "赌博",
            "家庭",
            "文化冲突"
        ],
        "oneLine": "沉迷网络赌博的潮州奶奶意外赢走黑帮巨款,全家人因此被迫踏上荒诞的跨国逃亡之路。",
        "url": "./movies/movie-969.html",
        "image": "./69.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "雪球快车",
        "year": "2025",
        "region": "美国/加拿大",
        "type": "电影",
        "genre": "动作/惊悚/灾难",
        "tags": [
            "极地列车",
            "恐怖袭击",
            "密闭求生",
            "极限反杀",
            "暴风雪"
        ],
        "oneLine": "穿越阿拉斯加冰原的豪华观光列车被雇佣兵劫持,一名退役雪地救援员成为全车唯一的希望。",
        "url": "./movies/movie-970.html",
        "image": "./70.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "太阳2016",
        "year": "2016",
        "region": "波兰",
        "type": "电影",
        "genre": "科幻/悬疑",
        "tags": [
            "封闭空间",
            "社会实验",
            "人性",
            "克苏鲁"
        ],
        "oneLine": "一个地下掩体内的12名志愿者被告知地表已被太阳毁灭,但诡异的事情接踵而至。",
        "url": "./movies/movie-971.html",
        "image": "./71.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "老婆,我被绑架了",
        "year": "2022",
        "region": "韩国",
        "type": "电影",
        "genre": "喜剧/犯罪",
        "tags": [
            "绑匪",
            "夫妻",
            "电话诈骗"
        ],
        "oneLine": "绑匪向男主妻子索要赎金,妻子却淡定地说:“那是我老公啊?送你们了,不退不换。",
        "url": "./movies/movie-972.html",
        "image": "./72.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "妯娌的三国时代",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情/家庭",
        "tags": [
            "女性群像",
            "家族争斗",
            "遗产风波",
            "现实题材",
            "演技炸裂"
        ],
        "oneLine": "老头子留下的不是遗嘱,是三把钥匙,分别打开金库、秘密,和这个家最后的遮羞布。",
        "url": "./movies/movie-973.html",
        "image": "./73.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "多数欠",
        "year": "2016",
        "region": "日本",
        "type": "电影",
        "genre": "恐怖,悬疑,奇幻",
        "tags": [
            "密室",
            "投票",
            "生死",
            "人性",
            "游戏"
        ],
        "oneLine": "八个被困密室的人接到指令:每十分钟投票杀死一人,“多数决”生效,但少数派也会一起陪葬。",
        "url": "./movies/movie-974.html",
        "image": "./74.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "甜蜜",
        "year": "2025",
        "region": "泰国",
        "type": "电影",
        "genre": "爱情,剧情,美食",
        "tags": [
            "甜品师",
            "味觉丧失",
            "祖传配方",
            "治愈"
        ],
        "oneLine": "一位失去味觉的米其林甜品师,在一家破败的街边糖水铺里,尝到了能让她“看见”味道的神奇甜品。",
        "url": "./movies/movie-975.html",
        "image": "./75.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "爱无止尽",
        "year": "2014",
        "region": "英国/美国",
        "type": "剧集",
        "genre": "剧情/爱情/战争",
        "tags": [
            "冷战",
            "间谍",
            "虐恋",
            "年代剧"
        ],
        "oneLine": "一对在二战中失散的恋人于冷战柏林重逢,却发现彼此分别效力于CIA与克格勃,爱成了最危险的身份。",
        "url": "./movies/movie-976.html",
        "image": "./76.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "火中无渡口",
        "year": "2022",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/灾难",
        "tags": [
            "森林火灾",
            "消防员",
            "牺牲"
        ],
        "oneLine": "一场森林大火烧光了所有逃生路线,十七个消防员在火场中写下遗书。",
        "url": "./movies/movie-977.html",
        "image": "./77.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "香水2007",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "剧情,悬疑,爱情",
        "tags": [
            "嗅觉",
            "记忆",
            "复仇",
            "调香",
            "宿命"
        ],
        "oneLine": "一位失明调香师为复刻初恋的体香,不惜与跨国黑市展开血腥交易。",
        "url": "./movies/movie-978.html",
        "image": "./78.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "台北女子图鉴",
        "year": "2023",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "剧情/都市/女性",
        "tags": [
            "北漂",
            "成长",
            "职场",
            "爱情",
            "写实"
        ],
        "oneLine": "一名台南女孩在台北十年职场情场双线浮沉,用伤疤换来了城市通行证。",
        "url": "./movies/movie-979.html",
        "image": "./79.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "以法之名",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情,律政,检察",
        "tags": [
            "检察官",
            "冤案",
            "司法改革",
            "反腐"
        ],
        "oneLine": "年轻检察官调查一起十七年前的旧案,发现师父才是当初的受贿者与真凶。",
        "url": "./movies/movie-980.html",
        "image": "./80.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "北极光",
        "year": "2024",
        "region": "挪威/冰岛",
        "type": "电影",
        "genre": "剧情/悬疑",
        "tags": [
            "极地",
            "心理惊悚",
            "家族秘密",
            "女性视角",
            "北欧风光"
        ],
        "oneLine": "极夜降临前,一名气象学家在北极站发现了失踪父亲留下的神秘坐标,指向冰层下的禁忌实验。",
        "url": "./movies/movie-981.html",
        "image": "./81.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "致敬大师:单口喜剧传奇",
        "year": "2024",
        "region": "英国",
        "type": "纪录片",
        "genre": "纪录,传记,喜剧",
        "tags": [
            "脱口秀",
            "幕后",
            "致敬",
            "幽默哲学"
        ],
        "oneLine": "一部由 AI 模拟已故喜剧大师声音,亲自讲述自己如何从抑郁中炼成“笑的艺术”的伪纪录片。",
        "url": "./movies/movie-982.html",
        "image": "./82.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "星光大盗",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧,悬疑",
        "tags": [
            "娱乐圈",
            "偷窃",
            "乌龙"
        ],
        "oneLine": "一个笨贼在颁奖典礼上偷走了最佳男主角奖杯,却因此卷入连环乌龙案。",
        "url": "./movies/movie-983.html",
        "image": "./83.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "女性与生育",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "剧情,纪录片式戏剧",
        "tags": [
            "身体自主",
            "医疗体系",
            "单身母亲",
            "社会压迫",
            "写实"
        ],
        "oneLine": "一位单身大学教授意外怀孕,却在法国顶级医院遭遇了教科书级别的医疗歧视与官僚折磨。",
        "url": "./movies/movie-984.html",
        "image": "./84.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "美国列兵史密斯",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "战争",
        "tags": [
            "反战",
            "伊拉克战争",
            "心理",
            "纪实风",
            "人性"
        ],
        "oneLine": "一名普通的美国列兵在伊拉克战场的一天,通过他的头盔摄像头,记录下了战争荒谬而残酷的真相。",
        "url": "./movies/movie-985.html",
        "image": "./85.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "黑色星期一 第二季",
        "year": "2020",
        "region": "美国",
        "type": "剧集",
        "genre": "喜剧/剧情",
        "tags": [
            "华尔街",
            "80年代",
            "金融犯罪",
            "荒诞"
        ],
        "oneLine": "1987年股灾之后,这帮华尔街恶棍不但没收敛,反而卷进了更大的洗钱骗局。",
        "url": "./movies/movie-986.html",
        "image": "./86.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "复仇母亲",
        "year": "2026",
        "region": "印度",
        "type": "电影",
        "genre": "剧情,犯罪,惊悚",
        "tags": [
            "强奸案",
            "司法腐败",
            "以暴制暴",
            "母亲力量"
        ],
        "oneLine": "女儿被高种姓轮奸后,凶手无罪释放,不识字的农村母亲花五年成为律师,亲手将所有人送进监狱。",
        "url": "./movies/movie-987.html",
        "image": "./87.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "立地成魔",
        "year": "1993",
        "region": "中国香港",
        "type": "电影",
        "genre": "犯罪/动作",
        "tags": [
            "黑帮",
            "卧底",
            "身份认同",
            "暴力美学"
        ],
        "oneLine": "一名卧底警察在黑帮十年,最终取代了老大,却发现警队早已将他列为头号清除目标。",
        "url": "./movies/movie-988.html",
        "image": "./88.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "舞台",
        "year": "2022",
        "region": "法国",
        "type": "电影",
        "genre": "剧情,心理,实验",
        "tags": [
            "剧场",
            "分裂人格",
            "元叙事"
        ],
        "oneLine": "一名女演员在排练独白剧时,发现剧本里的每一句台词都精准预言了她当天发生的真实事件。",
        "url": "./movies/movie-989.html",
        "image": "./89.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "一门忠烈",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "历史/战争/家庭",
        "tags": [
            "抗日",
            "全家从军",
            "真实改编",
            "小人物",
            "悲壮"
        ],
        "oneLine": "河北一个农民家庭,父亲带着五个儿子全部参加了抗日队伍,战争结束那天,全家只剩最小的女儿一个人。",
        "url": "./movies/movie-990.html",
        "image": "./90.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "范马刃牙",
        "year": "2024",
        "region": "日本",
        "type": "动画剧集",
        "genre": "动作/格斗",
        "tags": [
            "热血",
            "地下格斗",
            "父子对决"
        ],
        "oneLine": "史上最年轻地下格斗冠军范马刃牙,为了超越“地表最强生物”父亲,与死刑犯军团展开死斗。",
        "url": "./movies/movie-991.html",
        "image": "./91.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "昆丹",
        "year": "2028",
        "region": "印度",
        "type": "电影",
        "genre": "历史/剧情",
        "tags": [
            "香料战争",
            "殖民史诗",
            "家族复仇"
        ],
        "oneLine": "18世纪印度香料商人世家,在殖民者的挑拨下分崩离析,小女儿女扮男装踏上复仇王座。",
        "url": "./movies/movie-992.html",
        "image": "./92.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "剑鬼",
        "year": "1967",
        "region": "日本",
        "type": "电影",
        "genre": "动作/武士/horror",
        "tags": [
            "黑白片",
            "复仇",
            "鬼怪",
            "剑戟"
        ],
        "oneLine": "被仇家斩首的武士,头颅被缝合在仇人的身体上,从此他必须在白天杀人、夜里听自己旧头颅哭泣。",
        "url": "./movies/movie-993.html",
        "image": "./93.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "天堂长夜",
        "year": "2024",
        "region": "德国",
        "type": "电影",
        "genre": "剧情、惊悚、心理",
        "tags": [
            "北欧",
            "末日氛围",
            "孤独",
            "信仰崩塌",
            "极端环境"
        ],
        "oneLine": "北极圈以内,极夜来临,一队科研人员不断听见来自地底的神秘低语。",
        "url": "./movies/movie-994.html",
        "image": "./94.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "不要看地下室",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "恐怖,悬疑,惊悚",
        "tags": [
            "密室恐怖",
            "社会隐喻",
            "反转结局",
            "公寓怪谈"
        ],
        "oneLine": "一栋公寓楼的住户每晚都会听到地下室传来敲门声,物业说“不要看”,但新搬来的女孩决定去看一眼。",
        "url": "./movies/movie-995.html",
        "image": "./95.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "大爱无敌",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "都市/情感",
        "tags": [
            "道德绑架",
            "圣母",
            "亲情勒索",
            "职场",
            "反转"
        ],
        "oneLine": "一个被原生家庭吸血的“扶弟魔”姐姐,用一场假死,让所有亲人露出了豺狼本性。",
        "url": "./movies/movie-996.html",
        "image": "./96.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "反抗军",
        "year": "2024",
        "region": "美国/波兰",
        "type": "电影",
        "genre": "历史,战争",
        "tags": [
            "二战",
            "犹太抵抗",
            "丛林游击",
            "真实事件改编"
        ],
        "oneLine": "二战东线森林里,一群从纳粹屠刀下逃出的犹太人,用抢来的武器建起一支震惊德国的游击队。",
        "url": "./movies/movie-997.html",
        "image": "./97.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "看不见的守护者",
        "year": "2025",
        "region": "西班牙",
        "type": "电影",
        "genre": "悬疑犯罪",
        "tags": [
            "心理",
            "母亲",
            "失踪",
            "小镇谜团",
            "改编"
        ],
        "oneLine": "怀孕的女警探回到家乡追查少女连环失踪案,发现凶手一直在她的噩梦里。",
        "url": "./movies/movie-998.html",
        "image": "./98.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "要案组雷霆出击",
        "year": "2013",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "悬疑,刑侦,犯罪",
        "tags": [
            "重案组",
            "连环杀人",
            "画像师",
            "团队作战",
            "省厅"
        ],
        "oneLine": "省公安厅抽调各路怪才成立“雷霆组”,限期侦破尘封十二年的“红裙连环案”。",
        "url": "./movies/movie-999.html",
        "image": "./99.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "看她轻轻的飞起",
        "year": "1985",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情、家庭",
        "tags": [
            "童年",
            "单亲",
            "梦想",
            "催泪",
            "成长"
        ],
        "oneLine": "十岁的小羽每天望着天空纸飞机,坚信妈妈就住在云朵上面。",
        "url": "./movies/movie-1000.html",
        "image": "./100.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "我是江小白",
        "year": "2017",
        "region": "中国大陆",
        "type": "动漫",
        "genre": "爱情/治愈",
        "tags": [
            "国产动画",
            "青春",
            "现实",
            "重庆"
        ],
        "oneLine": "一个失忆的杂志编辑,通过十年前的邮件和日记,寻找那个只在文字里陪伴他的女孩。",
        "url": "./movies/movie-1001.html",
        "image": "./101.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "寻找神话之鸟",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "家庭冒险",
        "tags": [
            "寻鸟",
            "父子和解",
            "生态",
            "公路电影"
        ],
        "oneLine": "叛逆少年陪患阿兹海默症的父亲,踏上一场寻找传说中黑嘴端凤头燕鸥的公路之旅。",
        "url": "./movies/movie-1002.html",
        "image": "./102.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "她和他",
        "year": "2014",
        "region": "法国",
        "type": "电影",
        "genre": "爱情、文艺",
        "tags": [
            "巴黎",
            "错过",
            "书信",
            "公寓",
            "陌生人"
        ],
        "oneLine": "巴黎一间公寓被分租给一个昼伏的男摄影师和一个夜出的女作家,他们从未见面,却共用冰箱和记事本对话。",
        "url": "./movies/movie-1003.html",
        "image": "./103.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "29 1",
        "year": "2023",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "都市/爱情",
        "tags": [
            "30岁",
            "北漂",
            "剩女",
            "职场",
            "合租"
        ],
        "oneLine": "29岁的剩女和19岁的叛逆男孩意外合租,一个恐婚,一个恐恋,两人互相改造。",
        "url": "./movies/movie-1004.html",
        "image": "./104.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "快乐向前冲2011",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧,剧情,怀旧",
        "tags": [
            "闯关",
            "电视节目",
            "小镇青年",
            "时代记忆"
        ],
        "oneLine": "2011年的夏天,一个海边小城的废柴青年,决定去参加那个全国最火的“闯关”节目,只为在女神面前证明自己。",
        "url": "./movies/movie-1005.html",
        "image": "./105.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "微光之城",
        "year": "2025",
        "region": "英国,加拿大",
        "type": "剧集",
        "genre": "科幻,灾难,剧情",
        "tags": [
            "末日",
            "地下城市",
            "神秘疾病",
            "希望"
        ],
        "oneLine": "地表被黑暗吞噬,人类躲入地下城“微光”,但城中开始有人瞬间消失,只留下一团游动的微光。",
        "url": "./movies/movie-1006.html",
        "image": "./106.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "人面鱼:红衣小女孩外传",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "恐怖/民俗/惊悚",
        "tags": [
            "魔神仔",
            "民间禁忌",
            "鱼精",
            "诅咒"
        ],
        "oneLine": "深山钓起一条会问“我美吗”的人面鱼,钓客们接连变成半人半鱼的怪物。",
        "url": "./movies/movie-1007.html",
        "image": "./107.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "新·座头市物语",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "时代剧、动作、剧情",
        "tags": [
            "盲眼剑客",
            "翻新经典",
            "浪人",
            "杀阵",
            "宿命"
        ],
        "oneLine": "盲眼按摩师座头市路过一座被银矿腐蚀的小镇,这次他的对手不是恶代官,而是一位曾是挚友的旧日同门。",
        "url": "./movies/movie-1008.html",
        "image": "./108.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "拳头本色",
        "year": "2025",
        "region": "香港",
        "type": "电影",
        "genre": "动作,剧情,体育",
        "tags": [
            "拳击",
            "师徒",
            "香港电影",
            "励志",
            "暴力美学"
        ],
        "oneLine": "过气拳王开了一家跌打馆,某天一个盲人少年摸上门,说“我想学打拳,因为我要找到当年打伤我眼睛的那个人”。",
        "url": "./movies/movie-1009.html",
        "image": "./109.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "先婚后友",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "爱情/喜剧",
        "tags": [
            "契约婚姻",
            "甜宠",
            "先婚后爱",
            "搞笑"
        ],
        "oneLine": "破产富二代与实习律师签下“假结婚”协议,本以为各取所需,不料婚后第二天就遇到了真感情考验。",
        "url": "./movies/movie-1010.html",
        "image": "./110.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "长夜绵绵",
        "year": "1982",
        "region": "法国",
        "type": "电影",
        "genre": "爱情/剧情",
        "tags": [
            "法国文艺",
            "一夜情",
            "巴黎",
            "侯麦风格",
            "对话驱动"
        ],
        "oneLine": "巴黎的一个夏夜,九个孤独的灵魂在九段交错的对白里寻找爱,或寻找离开爱的理由。",
        "url": "./movies/movie-1011.html",
        "image": "./111.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "妳是我眼中的苹果",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情/同性",
        "tags": [
            "女同",
            "青春校园",
            "初恋"
        ],
        "oneLine": "两名高中女篮队员约定毕业那天告白,却因一场车祸让其中一人失明。",
        "url": "./movies/movie-1012.html",
        "image": "./112.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "少年正义联盟第一季",
        "year": "2010",
        "region": "美国",
        "type": "剧集",
        "genre": "动画/动作/科幻",
        "tags": [
            "DC超级英雄",
            "少年团队",
            "间谍叙事",
            "暗黑向"
        ],
        "oneLine": "正义联盟的年轻助手们发现,他们的导师正在向一个秘密组织妥协,而他们必须独立拯救世界。",
        "url": "./movies/movie-1013.html",
        "image": "./113.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "老鹰大作战",
        "year": "2024",
        "region": "法国",
        "type": "动画电影",
        "genre": "动画、冒险、动物",
        "tags": [
            "鸟类",
            "复仇",
            "环保"
        ],
        "oneLine": "一只被人类打瞎左眼的老鹰,带领全山飞禽向无人机军团宣战。",
        "url": "./movies/movie-1014.html",
        "image": "./114.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "分手合约",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情,剧情",
        "tags": [
            "契约恋爱",
            "破镜重圆",
            "虐恋",
            "都市"
        ],
        "oneLine": "分手五年后,前男友带着一份“假结婚”合约出现,而合约的尾款,是他自己的全部身家。",
        "url": "./movies/movie-1015.html",
        "image": "./115.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "元帅之死",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "历史,悬疑",
        "tags": [
            "古代权谋",
            "战争",
            "复仇"
        ],
        "oneLine": "一代铁血元帅疑似战死沙场,然而遗体上的三处致命伤却指向了不同的凶手。",
        "url": "./movies/movie-1016.html",
        "image": "./116.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "肖邦",
        "year": "2024",
        "region": "波兰/英国",
        "type": "电影",
        "genre": "传记,剧情,音乐",
        "tags": [
            "古典音乐",
            "天才",
            "悲剧",
            "历史",
            "艺术"
        ],
        "oneLine": "从华沙到巴黎,从天才到病人,电影首次将肖邦的纤维化肺病和听觉幻觉融入他的每一首传世名曲。",
        "url": "./movies/movie-1017.html",
        "image": "./117.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "恋上纯喫茶 3",
        "year": "2024",
        "region": "日本",
        "type": "电视剧",
        "genre": "剧情/美食/日常",
        "tags": [
            "昭和喫茶店",
            "治愈系",
            "人情冷暖"
        ],
        "oneLine": "东京老城区的纯喫茶店三代目,用一杯咖啡和一份喫茶美食,解开客人的心结。",
        "url": "./movies/movie-1018.html",
        "image": "./118.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "森林争夺战",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "冒险,家庭",
        "tags": [
            "环保",
            "动物",
            "真人动画"
        ],
        "oneLine": "为了守护百年森林,一群孩子和会说人话的动物,对抗地产商的推土机。",
        "url": "./movies/movie-1019.html",
        "image": "./119.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "Π情歌",
        "year": "2021",
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情,奇幻,悬疑",
        "tags": [
            "数学系",
            "无限循环",
            "吉他手",
            "π",
            "命中注定"
        ],
        "oneLine": "数学天才发现圆周率π的小数点后隐藏着爱情的密码,而解开它的钥匙是一首永远弹不准的吉他旋律。",
        "url": "./movies/movie-1020.html",
        "image": "./120.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "超级英雄军团",
        "year": "2018",
        "region": "美国",
        "type": "动画电影",
        "genre": "动作,科幻,动画",
        "tags": [
            "超级英雄",
            "时间旅行",
            "团队",
            "DC"
        ],
        "oneLine": "超人被传送至31世纪,领导一支由外星少年组成的杂牌军团,对抗未来的宿敌。",
        "url": "./movies/movie-1021.html",
        "image": "./121.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "少林英雄之方世玉洪熙官",
        "year": "2026",
        "region": "中国大陆/中国香港",
        "type": "电影",
        "genre": "动作,历史,武侠",
        "tags": [
            "硬核功夫",
            "少林寺",
            "反清复明",
            "双雄",
            "拳拳到肉"
        ],
        "oneLine": "方世玉与洪熙官本是死对头,却在少林秘窟中发现彼此的父亲竟是同一桩灭门案的同谋。",
        "url": "./movies/movie-1022.html",
        "image": "./122.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "女孩大老板",
        "year": "2024",
        "region": "韩国",
        "type": "剧集",
        "genre": "喜剧/职场",
        "tags": [
            "创业",
            "女性成长",
            "搞笑"
        ],
        "oneLine": "26岁便利店打工妹意外接管濒临倒闭的化妆品公司,全靠一本从垃圾堆捡来的管理笔记。",
        "url": "./movies/movie-1023.html",
        "image": "./123.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "热血刑警",
        "year": "2024",
        "region": "韩国",
        "type": "剧集",
        "genre": "犯罪/动作",
        "tags": [
            "暴力执法",
            "以暴制暴",
            "地下组织",
            "黑吃黑",
            "爽剧"
        ],
        "oneLine": "被警局开除的暴力刑警组织了一支地下“惩罚小队”,专门用罪犯的手段对付逃脱法网的恶人。",
        "url": "./movies/movie-1024.html",
        "image": "./124.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "女生宿舍日常第一季",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧/青春/校园",
        "tags": [
            "大学宿舍",
            "女性群像",
            "轻喜剧",
            "接地气",
            "段子剧"
        ],
        "oneLine": "四名性格迥异的大学女生挤在一间六人间宿舍里,用外卖、论文和塑料姐妹情熬过了大一第一学期。",
        "url": "./movies/movie-1025.html",
        "image": "./125.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "烈火出击",
        "year": "2022",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "动作,灾难,职业",
        "tags": [
            "消防员",
            "救援",
            "兄弟情",
            "热血"
        ],
        "oneLine": "一群年轻的消防特勤队员,在熊熊烈火与复杂的都市救援中,淬炼出真正的英雄本色。",
        "url": "./movies/movie-1026.html",
        "image": "./126.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "成人生活技能",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧,剧情",
        "tags": [
            "成年困境",
            "生活技能",
            "治愈"
        ],
        "oneLine": "28岁还不会系领带的废柴,报名“成人生活技能班”后笑料百出。",
        "url": "./movies/movie-1027.html",
        "image": "./127.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "吕西斯特拉忒",
        "year": "2026",
        "region": "希腊/英国",
        "type": "电影",
        "genre": "喜剧/历史/战争",
        "tags": [
            "女性力量",
            "反战",
            "古典改编"
        ],
        "oneLine": "现代改编,古希腊女人吕西斯特拉忒发起性罢工,但这次是为了阻止一场公司并购战。",
        "url": "./movies/movie-1028.html",
        "image": "./128.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "人生闹剧",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "喜剧,剧情",
        "tags": [
            "荒诞",
            "黑色幽默",
            "中产危机",
            "公路片"
        ],
        "oneLine": "一个中年男人决定在自己的葬礼上假死,只为听一听真话。",
        "url": "./movies/movie-1029.html",
        "image": "./129.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "1944",
        "year": "2015",
        "region": "爱沙尼亚/芬兰",
        "type": "电影",
        "genre": "战争/剧情/历史",
        "tags": [
            "二战",
            "爱沙尼亚",
            "兄弟相残",
            "历史悲剧",
            "双视角"
        ],
        "oneLine": "1944年的爱沙尼亚,一个国家的悲剧:同一个家庭的兄弟,却穿着德军的党卫军和苏联红军两套军服在战场上对峙。",
        "url": "./movies/movie-1030.html",
        "image": "./130.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "南极物语",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "剧情,冒险",
        "tags": [
            "真实事件改编",
            "雪橇犬",
            "科考",
            "生存"
        ],
        "oneLine": "南极科考队被迫撤离,15只雪橇犬被留在-50°C的极夜荒原,它们开始了长达一年的独立求生。",
        "url": "./movies/movie-1031.html",
        "image": "./131.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "下一层",
        "year": "2008",
        "region": "加拿大/法国",
        "type": "电影",
        "genre": "短片/剧情/奇幻",
        "tags": [
            "短片",
            "讽刺",
            "贪婪",
            "饕餮"
        ],
        "oneLine": "在一场奢华到极致的长桌宴上,每吃一口,地板就会碎裂,人们不断坠入下一层地狱。",
        "url": "./movies/movie-1032.html",
        "image": "./132.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "卡拉瓦乔",
        "year": "2025",
        "region": "意大利",
        "type": "电影",
        "genre": "剧情/传记/惊悚",
        "tags": [
            "艺术家",
            "暗黑美学",
            "宗教悬疑",
            "历史改编"
        ],
        "oneLine": "天才画家卡拉瓦乔为掩盖一场意外杀人,被迫与红衣主教展开一场以画为武器的生死博弈。",
        "url": "./movies/movie-1033.html",
        "image": "./133.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "星期三消失了",
        "year": "2022",
        "region": "日本",
        "type": "电影",
        "genre": "悬疑/奇幻",
        "tags": [
            "时间失忆",
            "循环",
            "日记本",
            "身份认知",
            "心理惊悚"
        ],
        "oneLine": "每到星期三,整个城市的所有人都不会记得星期二发生的事,除了那个在精神病院画日历的男人。",
        "url": "./movies/movie-1034.html",
        "image": "./134.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "非诚勿扰综艺",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影/黑色喜剧",
        "genre": "喜剧/悬疑",
        "tags": [
            "真人秀杀人事件",
            "讽刺",
            "密室"
        ],
        "oneLine": "一档停播十年的相亲综艺重启,24位女嘉宾陆续失踪,而摄影机从未停止拍摄。",
        "url": "./movies/movie-1035.html",
        "image": "./135.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "弦乐",
        "year": "1979",
        "region": "意大利",
        "type": "电影",
        "genre": "剧情,音乐",
        "tags": [
            "大提琴",
            "二战",
            "战俘营"
        ],
        "oneLine": "一个犹太裔大提琴家在集中营里,用一把只有一根弦的大提琴,演奏出对抗纳粹暴政的安魂曲。",
        "url": "./movies/movie-1036.html",
        "image": "./136.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "舞动全城粤语",
        "year": "2024",
        "region": "中国香港",
        "type": "剧集",
        "genre": "剧情,音乐,家庭",
        "tags": [
            "街舞",
            "粤语",
            "梦想",
            "代际冲突"
        ],
        "oneLine": "一位跳Breaking的香港少年,为了给瘫痪的父亲凑医药费,不得不去广场上教大妈们跳街舞。",
        "url": "./movies/movie-1037.html",
        "image": "./137.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "通往青松之路",
        "year": "2024",
        "region": "韩国",
        "type": "电视剧",
        "genre": "剧情,悬疑",
        "tags": [
            "治愈",
            "犯罪",
            "小镇"
        ],
        "oneLine": "一个背负罪孽的检察官被流放到偏远小镇“青松”,却发现这里的居民都是被主流社会遗忘的“坏人”。",
        "url": "./movies/movie-1038.html",
        "image": "./138.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "罗尔娜的沉默",
        "year": "2024",
        "region": "比利时",
        "type": "电影",
        "genre": "心理剧情",
        "tags": [
            "移民",
            "身份错位",
            "道德困境"
        ],
        "oneLine": "为换取居留权而假结婚的东欧护工,在丈夫意外死亡后,必须活成他的遗孀。",
        "url": "./movies/movie-1039.html",
        "image": "./139.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "狗仔大饭店",
        "year": "2023",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧/剧情/美食",
        "tags": [
            "狗仔队",
            "私房菜",
            "娱记转型",
            "偷拍与反偷拍",
            "粤菜"
        ],
        "oneLine": "三个失业狗仔队开了一家私房菜馆,专接明星客人,每道菜名都是他们当年拍到的惊天丑闻。",
        "url": "./movies/movie-1040.html",
        "image": "./140.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "跨时代战书",
        "year": "2025",
        "region": "中国大陆",
        "type": "综艺/剧集",
        "genre": "真人秀/剧情/穿越",
        "tags": [
            "穿越",
            "代际对决",
            "竞技",
            "年代差异",
            "轻科幻"
        ],
        "oneLine": "一档“史上最离谱”综艺:每期让一个现代人穿越到古代,与历史名人进行一场跨时空对决。",
        "url": "./movies/movie-1041.html",
        "image": "./141.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "吾王万岁",
        "year": "2025",
        "region": "泰国",
        "type": "剧集",
        "genre": "历史奇幻",
        "tags": [
            "古代君主",
            "穿越",
            "改革",
            "权谋"
        ],
        "oneLine": "现代民主斗士穿越到古代,成了暴君,他决定用君主专制来推行民主宪政。",
        "url": "./movies/movie-1042.html",
        "image": "./142.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "罗密",
        "year": "2022",
        "region": "德国/法国",
        "type": "电影",
        "genre": "传记,剧情",
        "tags": [
            "罗密·施耐德",
            "茜茜公主",
            "女性悲剧",
            "演艺圈"
        ],
        "oneLine": "光环褪去后,“茜茜公主”罗密·施耐德在晚年的孤独、酗酒与对儿子深沉的爱。",
        "url": "./movies/movie-1043.html",
        "image": "./143.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "国宝天香",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑,历史,动作",
        "tags": [
            "牡丹",
            "文物走私",
            "卧底"
        ],
        "oneLine": "一幅失传千年的《国宝天香》牡丹图重现江湖,文物局女画师伪装成江湖骗子深入虎穴。",
        "url": "./movies/movie-1044.html",
        "image": "./144.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "吾爱吾父",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,伦理",
        "tags": [
            "阿尔茨海默症",
            "父子",
            "倒置照顾",
            "记忆",
            "催泪"
        ],
        "oneLine": "年轻总裁被迫辞职照顾患阿尔茨海默症的父亲,却发现父亲脑海里的自己永远停留在十岁。",
        "url": "./movies/movie-1045.html",
        "image": "./145.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "古畑任三郎 暂时的分离",
        "year": "2025",
        "region": "日本",
        "type": "特别篇/剧集",
        "genre": "悬疑/犯罪",
        "tags": [
            "古畑任三郎",
            "本格推理",
            "高智商犯罪",
            "特别篇",
            "情怀"
        ],
        "oneLine": "古畑任三郎最尊敬的恩师被卷入完美谋杀案,而所有证据都指向恩师的女儿,他必须在“正义”与“人情”间做出选择。",
        "url": "./movies/movie-1046.html",
        "image": "./146.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "大象将军2",
        "year": "2026",
        "region": "泰国",
        "type": "电影",
        "genre": "历史,战争",
        "tags": [
            "古代象战",
            "复仇",
            "史诗"
        ],
        "oneLine": "暹罗将军之女为报杀父之仇,伪装成男性驯象师混入敌营。",
        "url": "./movies/movie-1047.html",
        "image": "./147.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "执爱",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情,悬疑",
        "tags": [
            "偏执",
            "记忆删除",
            "心理战",
            "虐恋"
        ],
        "oneLine": "妻子意外失忆后,丈夫每天为她重新编造一段爱情故事,直到她发现真相。",
        "url": "./movies/movie-1048.html",
        "image": "./148.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "伤感警察",
        "year": "2026",
        "region": "中国大陆",
        "type": "网剧",
        "genre": "刑侦,悬疑,心理",
        "tags": [
            "忧郁警探",
            "心理创伤",
            "冷案重启",
            "城市夜景",
            "慢节奏破案"
        ],
        "oneLine": "一位患有重度忧郁症的老警察,为了追查自己搭档的悬案,每天下班后都会在档案室抽丝剥茧,直到他在旧照片里看到了自己。",
        "url": "./movies/movie-1049.html",
        "image": "./149.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "音你而来",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,音乐,爱情",
        "tags": [
            "聋哑",
            "手语",
            "乐手",
            "治愈"
        ],
        "oneLine": "一场事故失去听力的摇滚乐队主唱,遇到了用手语“唱”出歌词的聋哑女孩,两人重组了一支无声乐队。",
        "url": "./movies/movie-1050.html",
        "image": "./150.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "土狗的陆地头等舱",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧,公路",
        "tags": [
            "宠物",
            "自驾游",
            "治愈",
            "乡土",
            "黑色幽默"
        ],
        "oneLine": "破产中年男开着五菱宏光带土狗“大黄”去西藏,在各大网红自驾营地蹭吃蹭喝,却意外爆红网络。",
        "url": "./movies/movie-1051.html",
        "image": "./1.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "优步危机",
        "year": "2019",
        "region": "美国",
        "type": "电影",
        "genre": "动作/喜剧/犯罪",
        "tags": [
            "网约车司机",
            "警匪追逃",
            "平民英雄"
        ],
        "oneLine": "一个五星好评上瘾的优步司机,接到了逃亡中的通缉犯订单,为了好评拼了。",
        "url": "./movies/movie-1052.html",
        "image": "./2.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "你像上帝一样吻我",
        "year": "2026",
        "region": "泰国",
        "type": "电影",
        "genre": "爱情/奇幻",
        "tags": [
            "宗教禁忌",
            "修女",
            "失忆",
            "救赎"
        ],
        "oneLine": "一个因意外失忆的花花公子,被善良的见习修女所救,两人在修道院禁忌之爱中互相救赎。",
        "url": "./movies/movie-1053.html",
        "image": "./3.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "星星知我心",
        "year": "2024",
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "家庭/情感",
        "tags": [
            "单亲母亲",
            "五个孩子",
            "绝症",
            "催泪",
            "翻拍"
        ],
        "oneLine": "翻拍自1980年代经典,一位罹患绝症的母亲必须在生命最后半年为五个孩子找到新家。",
        "url": "./movies/movie-1054.html",
        "image": "./4.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "失意旅行",
        "year": "2015",
        "region": "法国",
        "type": "电影",
        "genre": "剧情,公路,喜剧",
        "tags": [
            "失业",
            "母女",
            "二手车",
            "诺曼底",
            "和解"
        ],
        "oneLine": "失业的女儿开着漏油的二手车带患有阿尔茨海默症的母亲穿越法国,目的地是母亲再也记不起来的老家。",
        "url": "./movies/movie-1055.html",
        "image": "./5.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "同路阿根廷",
        "year": "2021",
        "region": "阿根廷",
        "type": "电影",
        "genre": "公路,剧情,喜剧",
        "tags": [
            "大巴旅行",
            "陌生人",
            "忘年交",
            "救赎",
            "探戈"
        ],
        "oneLine": "一个叛逆少女与一个失忆老人在跨越大巴车上成为了彼此最后的救赎。",
        "url": "./movies/movie-1056.html",
        "image": "./6.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "入侵",
        "year": "2024",
        "region": "加拿大/美国",
        "type": "剧集",
        "genre": "科幻/悬疑/惊悚",
        "tags": [
            "外星生物",
            "心理恐惧",
            "家庭"
        ],
        "oneLine": "没有飞船,没有激光,外星人通过改写人类的记忆入侵地球,现在你分不清身边的人是亲人还是异类。",
        "url": "./movies/movie-1057.html",
        "image": "./7.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "翡冷翠十日谈",
        "year": "2024",
        "region": "意大利/英国",
        "type": "剧集",
        "genre": "剧情,历史,黑色幽默",
        "tags": [
            "文艺复兴",
            "瘟疫",
            "庄园",
            "阶级",
            "反转"
        ],
        "oneLine": "1348年黑死病肆虐,一群贵族躲进佛罗伦萨郊外别墅,却发现管家计划将他们做成壁画颜料。",
        "url": "./movies/movie-1058.html",
        "image": "./8.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "步步惊心:丽",
        "year": "2026",
        "region": "韩国",
        "type": "剧集",
        "genre": "古装、爱情、奇幻",
        "tags": [
            "穿越",
            "高丽",
            "宫斗",
            "悲剧美学"
        ],
        "oneLine": "现代女摄影师意外穿越到高丽王朝,成为屠杀之夜唯一幸存者,被迫周旋于众王子之间。",
        "url": "./movies/movie-1059.html",
        "image": "./9.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "地面之洞",
        "year": "2024",
        "region": "爱尔兰/英国",
        "type": "电影",
        "genre": "恐怖/民俗",
        "tags": [
            "凯尔特神话",
            "地下生物",
            "家庭创伤",
            "幽闭恐惧"
        ],
        "oneLine": "儿子失踪三天后自己爬出了后院的洞穴,但回来的那个“东西”可能不是人。",
        "url": "./movies/movie-1060.html",
        "image": "./10.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "大叔之爱",
        "year": "2018",
        "region": "日本",
        "type": "剧集",
        "genre": "喜剧,爱情,同性",
        "tags": [
            "办公室",
            "BL",
            "少女心大叔",
            "三角恋",
            "搞笑"
        ],
        "oneLine": "直男废柴职员突然被暗恋他的少女心上司和同居的抖S后辈同时告白,从此办公室生活变成修罗场。",
        "url": "./movies/movie-1061.html",
        "image": "./11.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "旧日噩梦",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖,心理惊悚,悬疑",
        "tags": [
            "梦境入侵",
            "记忆置换",
            "实体化恐惧",
            "多层嵌套"
        ],
        "oneLine": "一个治疗师发明了能进入噩梦的装置,却发现客户的噩梦会像病毒一样感染现实。",
        "url": "./movies/movie-1062.html",
        "image": "./12.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "高三女生部落格",
        "year": "2022",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "剧情/青春/校园",
        "tags": [
            "博客",
            "升学压力",
            "原生家庭",
            "网络霸凌"
        ],
        "oneLine": "高考前200天,全校第一的乖乖女在校内匿名论坛“部落格”上连载的小说,竟预言了一起真实跳楼事件。",
        "url": "./movies/movie-1063.html",
        "image": "./13.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "两公婆今晚玩大咗",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧,犯罪,黑色幽默",
        "tags": [
            "夫妻",
            "误打误撞",
            "疯狂一夜",
            "黑吃黑"
        ],
        "oneLine": "一对濒临离婚的普通夫妻,为了争夺家产而策划入室偷窃,却意外撞破一场黑帮交易的现场。",
        "url": "./movies/movie-1064.html",
        "image": "./14.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "太阴指",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作/武侠/惊悚",
        "tags": [
            "邪术",
            "断指",
            "复仇",
            "硬核打斗"
        ],
        "oneLine": "江湖传闻,被“太阴指”点中穴位的人会在一日内全身骨骼尽碎,而下一个目标是一整个镖局。",
        "url": "./movies/movie-1065.html",
        "image": "./15.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "外婆的重托",
        "year": "2024",
        "region": "中国",
        "type": "电影",
        "genre": "剧情,家庭,公路",
        "tags": [
            "祖孙情",
            "乡土中国",
            "催泪治愈"
        ],
        "oneLine": "外婆临终前交给他一个生锈的铁盒,让他送回千里之外的故乡,里面却只有一把钥匙和半张照片。",
        "url": "./movies/movie-1066.html",
        "image": "./16.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "变种动物园",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖/科幻",
        "tags": [
            "克苏鲁",
            "病毒",
            "怪物",
            "封闭空间",
            "血腥"
        ],
        "oneLine": "一种能融合动物DNA的病毒在动物园爆发,管理员必须在天亮前逃离这个怪物横行的地狱。",
        "url": "./movies/movie-1067.html",
        "image": "./17.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "罗宾汉的真实故事",
        "year": "2022",
        "region": "英国",
        "type": "电影",
        "genre": "剧情/历史/动作",
        "tags": [
            "罗宾汉",
            "纪实",
            "复仇",
            "阶级",
            "解构"
        ],
        "oneLine": "史料考证下的罗宾汉并非侠盗,而是一名被贵族灭门的木匠,他的“劫富济贫”其实是一场精心策划的报复。",
        "url": "./movies/movie-1068.html",
        "image": "./18.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "沉默无语",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/悬疑",
        "tags": [
            "聋哑",
            "校园霸凌",
            "复仇",
            "手语"
        ],
        "oneLine": "聋哑学校的尖子生“坠楼”身亡,唯一目击者是另一个聋哑学生,他用手语说出了全班同学的秘密。",
        "url": "./movies/movie-1069.html",
        "image": "./19.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "荒野喜剧之乌龙客栈",
        "year": "2025",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "喜剧、古装、悬疑",
        "tags": [
            "武侠",
            "客栈",
            "互换身份"
        ],
        "oneLine": "顶级杀手和废柴书生同时住进一家黑店,被小二下药后,两人灵魂互换,都要用对方的身体活下去。",
        "url": "./movies/movie-1070.html",
        "image": "./20.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "机器人",
        "year": "2027",
        "region": "日本",
        "type": "电影",
        "genre": "科幻/伦理/剧情",
        "tags": [
            "人工智能",
            "家庭",
            "老龄化",
            "记忆"
        ],
        "oneLine": "当 AI 机器人完美模拟了她亡夫的言行后,她却选择用螺丝刀一次次撬开它的后脑勺,寻找“灵魂”存在的证据。",
        "url": "./movies/movie-1071.html",
        "image": "./21.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "左撇子艾伦",
        "year": "2024",
        "region": "日本",
        "type": "电视剧",
        "genre": "悬疑/犯罪",
        "tags": [
            "左撇子",
            "连环杀手",
            "侧写师",
            "心理战",
            "反转"
        ],
        "oneLine": "天才犯罪侧写师是左撇子,而他追捕的连环杀手留下的所有线索都在指向“左撇子”。",
        "url": "./movies/movie-1072.html",
        "image": "./22.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "属于女人的奇迹",
        "year": "2025",
        "region": "印度",
        "type": "电影",
        "genre": "剧情,励志,女性",
        "tags": [
            "创业",
            "乡村",
            "逆袭",
            "女性力量"
        ],
        "oneLine": "一个被家暴离婚的文盲妇女,靠捡垃圾和自学机械,在五年内建成了印度最大的女性废品回收合作社。",
        "url": "./movies/movie-1073.html",
        "image": "./23.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "我们的费尔斯特先生去世了",
        "year": "2017",
        "region": "德国",
        "type": "电影",
        "genre": "剧情,战争",
        "tags": [
            "二战",
            "谎言",
            "村庄",
            "集体记忆"
        ],
        "oneLine": "小镇为死在战场的费尔斯特先生举行了第57次葬礼,但全镇都知道,这个名字属于一个从未存在过的人。",
        "url": "./movies/movie-1074.html",
        "image": "./24.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "智慧风暴",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "科幻/惊悚",
        "tags": [
            "AI",
            "脑机接口",
            "反乌托邦",
            "思维",
            "控制"
        ],
        "oneLine": "当人人都装上“智慧芯片”,不装芯片的人类成了最危险的存在。",
        "url": "./movies/movie-1075.html",
        "image": "./25.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "毗邻而居",
        "year": "2018",
        "region": "美国",
        "type": "电影",
        "genre": "惊悚/剧情",
        "tags": [
            "病娇邻居",
            "社区阴谋",
            "心理操纵"
        ],
        "oneLine": "一对年轻夫妻搬进梦想家园,却发现自己被一群似乎“太完美”的邻居彻底包围监视。",
        "url": "./movies/movie-1076.html",
        "image": "./26.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "刀语",
        "year": "2010",
        "region": "日本",
        "type": "动画剧集",
        "genre": "动作/历史/武侠",
        "tags": [
            "西尾维新",
            "刀剑",
            "收集",
            "十二话",
            "对白"
        ],
        "oneLine": "为了收集传说中的十二把“变体刀”,无刃的剑士与奇策士踏上了以刀换命的旅途。",
        "url": "./movies/movie-1077.html",
        "image": "./27.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "长江一号2008",
        "year": "2008",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "谍战、悬疑、历史",
        "tags": [
            "潜伏",
            "长江防线",
            "国共",
            "情报战",
            "双面间谍"
        ],
        "oneLine": "1949年渡江战役前夕,国民党江防舰队内部潜伏着代号“长江一号”的共谍,但他同时也在被军统怀疑为“双面间谍”。",
        "url": "./movies/movie-1078.html",
        "image": "./28.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "罪恶医生的日记",
        "year": "2024",
        "region": "日本",
        "type": "电视剧",
        "genre": "医疗,悬疑",
        "tags": [
            "日记",
            "黑化",
            "医院黑幕",
            "复仇"
        ],
        "oneLine": "一位天才外科医生留下一本日记,揭露了他如何在手术台上“合法杀人”。",
        "url": "./movies/movie-1079.html",
        "image": "./29.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "玩命鸳鸯",
        "year": "2025",
        "region": "香港",
        "type": "电影",
        "genre": "动作犯罪",
        "tags": [
            "雌雄大盗",
            "枪战",
            "黑吃黑"
        ],
        "oneLine": "为了给死去女儿复仇,一对隐退的杀手夫妻重出江湖,却被地下世界悬赏了一亿美元的追杀令。",
        "url": "./movies/movie-1080.html",
        "image": "./30.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "施展死亡法术",
        "year": "2024",
        "region": "韩国",
        "type": "电视剧",
        "genre": "奇幻/悬疑/剧情",
        "tags": [
            "死神",
            "律政",
            "契约",
            "单元剧",
            "人性"
        ],
        "oneLine": "死神为完成KPI化身见习律师,专为阳寿未尽却意外死亡的委托人打“复活官司”。",
        "url": "./movies/movie-1081.html",
        "image": "./31.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "写珍集",
        "year": "2025",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "剧情/家庭",
        "tags": [
            "写作",
            "母女",
            "代际创伤",
            "书信"
        ],
        "oneLine": "叛逆女儿无意中发现母亲年轻时未寄出的情书,由此揭开一段被尘封的家族秘密。",
        "url": "./movies/movie-1082.html",
        "image": "./32.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "爱的一课",
        "year": "2026",
        "region": "法国/比利时",
        "type": "电影",
        "genre": "剧情,教育,家庭",
        "tags": [
            "单亲爸爸",
            "特殊儿童",
            "理解"
        ],
        "oneLine": "暴躁拳击手父亲,被迫照顾患有自闭症的儿子,却从孩子身上学会了人生第一课。",
        "url": "./movies/movie-1083.html",
        "image": "./33.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "卡比利亚",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "剧情,文艺",
        "tags": [
            "女性",
            "生存",
            "新浪潮遗韵"
        ],
        "oneLine": "罗马街头妓女卡比利亚的最后一个客人,是来向她告别的死神。",
        "url": "./movies/movie-1084.html",
        "image": "./34.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "你是我的永恒星辰",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "爱情/都市/励志",
        "tags": [
            "古风圈",
            "程序员",
            "反差萌"
        ],
        "oneLine": "古风圈大神女主播和直男程序员男主,因为一次“服务器崩了”的网暴事件,被迫契约同居。",
        "url": "./movies/movie-1085.html",
        "image": "./35.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "飞行之翼",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "冒险,传记",
        "tags": [
            "人类飞行史",
            "理想主义",
            "诗意画面"
        ],
        "oneLine": "19世纪一个裁缝坚信人能飞行,他缝了一对巨大翅膀,从埃菲尔铁塔跳了下去。",
        "url": "./movies/movie-1086.html",
        "image": "./36.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "独眼的男人是国王",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情,犯罪",
        "tags": [
            "黑帮",
            "残疾",
            "复仇",
            "底层逆袭",
            "暴力美学"
        ],
        "oneLine": "一个在械斗中瞎了一只眼、被组织抛弃的底层混混,在贫民窟里一步步成为地下世界的“独眼国王”。",
        "url": "./movies/movie-1087.html",
        "image": "./37.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "影城春光",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情/情色",
        "tags": [
            "片场",
            "戏中戏",
            "欲望",
            "禁忌",
            "八十年代"
        ],
        "oneLine": "1980年代香港老片场,一个龙虎武师与过气艳星在拍情色片过程中,入戏太深,模糊了爱与欲的边界。",
        "url": "./movies/movie-1088.html",
        "image": "./38.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "天生坏种",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "惊悚、心理、犯罪",
        "tags": [
            "反社会人格",
            "儿童",
            "暗黑",
            "家庭伦理"
        ],
        "oneLine": "八岁的儿子完美无缺,直到父母发现他是家里所有“意外”的真凶。",
        "url": "./movies/movie-1089.html",
        "image": "./39.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "普京之吻",
        "year": "2024",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "政治,传记,剧情",
        "tags": [
            "克格勃",
            "权力巅峰",
            "铁汉柔情",
            "历史再造"
        ],
        "oneLine": "一桩未被记载的1989年德累斯顿往事,定义了一个男人的野心与孤独。",
        "url": "./movies/movie-1090.html",
        "image": "./40.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "千里眼",
        "year": "2022",
        "region": "日本/中国大陆",
        "type": "剧集",
        "genre": "悬疑/科幻/犯罪",
        "tags": [
            "超能力犯罪",
            "刑侦剧",
            "跨国合作",
            "脑科学"
        ],
        "oneLine": "她能看到过去24小时任何地点发生的事,但这次她要追查的,是一个能“抹除”自己存在的凶手。",
        "url": "./movies/movie-1091.html",
        "image": "./41.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "梦想夏乡",
        "year": "2024",
        "region": "日本",
        "type": "剧集",
        "genre": "动画/治愈/奇幻",
        "tags": [
            "乡村",
            "返乡",
            "神社",
            "夏日",
            "约定"
        ],
        "oneLine": "厌倦都市的女生回到故乡,发现破败的神社里住着一位等待了她十二年的精灵。",
        "url": "./movies/movie-1092.html",
        "image": "./42.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "远山的呼唤",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "剧情",
        "tags": [
            "翻拍",
            "北海道",
            "爱情",
            "逃亡"
        ],
        "oneLine": "北海道风雪夜,逃犯敲开了寡妇的门,两人在沉默中产生了灵魂的共鸣。",
        "url": "./movies/movie-1093.html",
        "image": "./43.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "顺流而下",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "悬疑,冒险,剧情",
        "tags": [
            "漂流",
            "荒野",
            "连环杀手"
        ],
        "oneLine": "为撒亡父骨灰,三兄妹沿着科罗拉多河漂流而下,却发现自己正顺流漂向一个河岸连环杀手的狩猎场。",
        "url": "./movies/movie-1094.html",
        "image": "./44.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "芭啦芭啦樱之花",
        "year": "2026",
        "region": "日本,中国台湾",
        "type": "电影",
        "genre": "爱情,音乐",
        "tags": [
            "舞蹈",
            "樱花",
            "治愈",
            "青春"
        ],
        "oneLine": "失语的花艺师与过气的樱花舞者在东京的最后一个春天,用身体和花瓣重新学会了说话。",
        "url": "./movies/movie-1095.html",
        "image": "./45.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "打卡练歌房",
        "year": "2026",
        "region": "中国大陆",
        "type": "综艺",
        "genre": "音乐,真人秀,职场",
        "tags": [
            "直播",
            "素人",
            "代际碰撞",
            "歌声故事"
        ],
        "oneLine": "一档用“下班后去练歌房唱一小时”的形式,让普通人用歌声讲述自己职场故事的直播真人秀。",
        "url": "./movies/movie-1096.html",
        "image": "./46.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "我的小狗斯齐普",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "家庭,剧情",
        "tags": [
            "宠物",
            "童年创伤",
            "友谊",
            "治愈"
        ],
        "oneLine": "因父母离异变得孤僻的男孩,在一只捡来的流浪狗斯齐普的陪伴下,重新学会信任与离别。",
        "url": "./movies/movie-1097.html",
        "image": "./47.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "隔墙搜秘",
        "year": "2023",
        "region": "西班牙",
        "type": "电影",
        "genre": "悬疑/惊悚",
        "tags": [
            "公寓",
            "偷听",
            "邻居",
            "反转"
        ],
        "oneLine": "为了写作灵感她偷听邻居,却发现隔壁住的不是人,而是六年前失踪的自己。",
        "url": "./movies/movie-1098.html",
        "image": "./48.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "国界彼方",
        "year": "2020",
        "region": "法国/比利时",
        "type": "电影",
        "genre": "战争剧情",
        "tags": [
            "难民",
            "边境",
            "生存",
            "人性"
        ],
        "oneLine": "一名叙利亚建筑师被困在希腊与北马其顿边境的铁丝网之间,用手机直播向世界求救。",
        "url": "./movies/movie-1099.html",
        "image": "./49.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "圣昆廷监狱篮球队",
        "year": "2024",
        "region": "美国",
        "type": "纪录片",
        "genre": "纪录,运动",
        "tags": [
            "囚犯",
            "篮球",
            "改造",
            "真实"
        ],
        "oneLine": "美国最老监狱里的篮球队,用一场球赛试图赎回失控的人生。",
        "url": "./movies/movie-1100.html",
        "image": "./50.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "飞天神童横扫黑魔党",
        "year": "1995",
        "region": "中国",
        "type": "电影",
        "genre": "动作,奇幻,儿童",
        "tags": [
            "特摄",
            "超级英雄",
            "怀旧",
            "邪典",
            "国产童年"
        ],
        "oneLine": "十岁小学生获得孙悟空神力,骑着筋斗云单枪匹马捣毁人贩子集团。",
        "url": "./movies/movie-1101.html",
        "image": "./51.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "暗恋桃花源",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情,爱情,文艺",
        "tags": [
            "剧场情缘",
            "暗恋",
            "平行时空"
        ],
        "oneLine": "台北一个即将拆除的老剧场里,正在排练《暗恋》和《桃花源》的两个剧团,意外共用了同一位女主角。",
        "url": "./movies/movie-1102.html",
        "image": "./52.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "荒谷鏖战",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作,战争,历史",
        "tags": [
            "抗战",
            "狙击",
            "兄弟情",
            "残酷",
            "以少胜多"
        ],
        "oneLine": "抗战末期,两名幸存的中国狙击手在荒凉山谷中,以两人之力阻击一个日军中队。",
        "url": "./movies/movie-1103.html",
        "image": "./53.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "为我们而战",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "战争史诗",
        "tags": [
            "二战",
            "华人",
            "排华法案",
            "身份认同"
        ],
        "oneLine": "1942年,一群不被美国承认的华人二代,组成了一支全部由华人组成的突击队,只为证明自己是美国人。",
        "url": "./movies/movie-1104.html",
        "image": "./54.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "戒烟的挑战",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧,黑色幽默,剧情",
        "tags": [
            "戒烟",
            "创业",
            "荒诞",
            "小人物"
        ],
        "oneLine": "为了赚500万戒烟奖金,老烟枪开了家戒烟公司。",
        "url": "./movies/movie-1105.html",
        "image": "./55.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "钻石舌头",
        "year": "2004",
        "region": "美国",
        "type": "电影",
        "genre": "犯罪/喜剧/动作",
        "tags": [
            "黑帮",
            "律师",
            "黑色幽默",
            "嘴炮无敌"
        ],
        "oneLine": "一名靠三寸不烂之舌帮黑帮脱罪的律师,某天醒来发现自己说出的每一句话都会成真。",
        "url": "./movies/movie-1106.html",
        "image": "./56.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "患难兄弟情",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧/剧情/运动",
        "tags": [
            "残障互助",
            "马拉松",
            "兄弟情",
            "励志不煽情"
        ],
        "oneLine": "盲人按摩师和失去双腿的退伍军人,两人合体参加马拉松,他们互为对方的眼睛和腿。",
        "url": "./movies/movie-1107.html",
        "image": "./57.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "戏王之王",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧/剧情",
        "tags": [
            "粤剧",
            "替身演员",
            "梦想传承",
            "师徒"
        ],
        "oneLine": "一个没落的粤剧名伶,去给网红武打片当替身,用真功夫把片场变成了戏台。",
        "url": "./movies/movie-1108.html",
        "image": "./58.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "快乐大本营2015",
        "year": "2015",
        "region": "中国大陆",
        "type": "综艺",
        "genre": "真人秀,喜剧,脱口秀",
        "tags": [
            "游戏",
            "明星嘉宾",
            "怀旧",
            "搞笑"
        ],
        "oneLine": "2015年的周六夜晚,快乐家族与顶级明星们上演了一连串爆笑游戏与整蛊名场面。",
        "url": "./movies/movie-1109.html",
        "image": "./59.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "将恋爱进行到底",
        "year": "2020",
        "region": "日本",
        "type": "电视剧",
        "genre": "爱情,医疗",
        "tags": [
            "漫改",
            "护士",
            "抖S医生",
            "职场恋爱",
            "纯爱"
        ],
        "oneLine": "笨手笨脚的小护士为了追求“抖S”天才医生,拼命考进他的医院,却发现医生是个没有感情的医疗机器。",
        "url": "./movies/movie-1110.html",
        "image": "./60.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "缉毒先锋",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "犯罪/动作/悬疑",
        "tags": [
            "缉毒",
            "卧底",
            "兄弟情",
            "反转"
        ],
        "oneLine": "缉毒警陈锋卧底三年,成功剿灭贩毒集团,却在庆功宴上被自己亲手带出来的徒弟指认为“内鬼”。",
        "url": "./movies/movie-1111.html",
        "image": "./61.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "泄露春光",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情,爱情,文艺",
        "tags": [
            "禁忌之恋",
            "师生",
            "摄影美学",
            "压抑与释放"
        ],
        "oneLine": "五十岁的女教授与二十岁的男学生,在一场摄影展的暗房里,悄悄交换了秘密。",
        "url": "./movies/movie-1112.html",
        "image": "./62.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "神秘博士第六季",
        "year": "2011",
        "region": "英国",
        "type": "剧集",
        "genre": "科幻/冒险",
        "tags": [
            "时间旅行",
            "平行宇宙",
            "宿命论",
            "外星文明",
            "博士同伴"
        ],
        "oneLine": "时间领主博士发现自己的死亡已被写进历史,而唯一能拯救他的人,是来自另一个时空的“自己”。",
        "url": "./movies/movie-1113.html",
        "image": "./63.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "流金岁月粤语",
        "year": "2020",
        "region": "中国香港",
        "type": "电视剧",
        "genre": "剧情,爱情,都市",
        "tags": [
            "港剧",
            "女性友谊",
            "亦舒",
            "粤语原声",
            "都市情感"
        ],
        "oneLine": "两个性格迥异的女孩朱锁锁与蒋南孙,从校园到职场跨越十余年的友情,在金钱与爱情考验下坚如磐石。",
        "url": "./movies/movie-1114.html",
        "image": "./64.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "冰国英雄传",
        "year": "2024",
        "region": "俄罗斯",
        "type": "剧集",
        "genre": "历史/战争",
        "tags": [
            "北极",
            "二战",
            "苏联",
            "侦察兵",
            "极昼"
        ],
        "oneLine": "1942年北极圈内,一支苏联侦察小队在极昼中对抗德军,每三天才能睡一次觉。",
        "url": "./movies/movie-1115.html",
        "image": "./65.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "巫山恨",
        "year": "1978",
        "region": "中国香港",
        "type": "电影",
        "genre": "武侠/爱情/悲剧",
        "tags": [
            "邵氏",
            "复仇",
            "错爱",
            "巫山云雨",
            "古典"
        ],
        "oneLine": "为报灭门之仇,她练就绝世武功,却发现自己深爱的仇人竟是失散多年的亲哥哥。",
        "url": "./movies/movie-1116.html",
        "image": "./66.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "银行妙探",
        "year": "1988",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧,动作",
        "tags": [
            "卧底",
            "乌龙",
            "港式幽默",
            "警匪"
        ],
        "oneLine": "最懒散的警员被派去银行卧底抓劫匪,结果他把所有顾客都发展成了嫌疑人。",
        "url": "./movies/movie-1117.html",
        "image": "./67.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "索菲亚",
        "year": "2024",
        "region": "西班牙",
        "type": "电影",
        "genre": "科幻、伦理、剧情",
        "tags": [
            "人造人",
            "母爱AI",
            "科技伦理",
            "记忆移植"
        ],
        "oneLine": "痛失爱女的工程师将女儿的记忆植入家政机器人索菲亚的芯片中,机器人开始认定自己就是死去的女孩。",
        "url": "./movies/movie-1118.html",
        "image": "./68.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "独立日2:卷土重来",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "科幻,动作",
        "tags": [
            "外星入侵",
            "地球联军",
            "太空战",
            "情怀续作"
        ],
        "oneLine": "二十年后再入侵,人类用缴获的外星科技组建了太空防御军。",
        "url": "./movies/movie-1119.html",
        "image": "./69.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "彩云妃子",
        "year": "2025",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "古装/爱情",
        "tags": [
            "唐朝",
            "宫斗",
            "纺织",
            "非遗",
            "大女主"
        ],
        "oneLine": "一个被没入宫廷的罪臣之女,凭借一手出神入化的蜀锦织造技艺,从洗衣婢女一路织成了负责天下贡织的“织造妃”。",
        "url": "./movies/movie-1120.html",
        "image": "./70.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "我才不要和人类恋爱呢",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "爱情,奇幻,喜剧",
        "tags": [
            "狐妖",
            "现代都市",
            "真香定律",
            "轻松",
            "甜宠"
        ],
        "oneLine": "修行千年的狐妖被迫下凡完成“恋爱任务”,却选中了一个眼里只有工作、号称“人间绝育者”的理工男。",
        "url": "./movies/movie-1121.html",
        "image": "./71.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "永不后悔爱上你",
        "year": "2006",
        "region": "韩国",
        "type": "剧集",
        "genre": "爱情/剧情/家庭",
        "tags": [
            "韩剧",
            "绝症",
            "契约恋爱",
            "虐恋"
        ],
        "oneLine": "一个只剩三个月生命的女建筑师,雇了一个刚出狱的骗子假扮未婚夫骗父亲的遗产,结果骗子真的爱上了她,但她的药是假的。",
        "url": "./movies/movie-1122.html",
        "image": "./72.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "魔翼杀手5",
        "year": "2005",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖,奇幻,动作",
        "tags": [
            "宗教",
            "天使",
            "血腥",
            "B级片"
        ],
        "oneLine": "堕落天使再度降临人间,这次他盯上了能打开天堂之门的机械密钥,而守护者是前作中他的混血女儿。",
        "url": "./movies/movie-1123.html",
        "image": "./73.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "斑马",
        "year": "2021",
        "region": "伊朗/法国",
        "type": "电影",
        "genre": "剧情文艺",
        "tags": [
            "黑白色",
            "公路",
            "父女",
            "诗意"
        ],
        "oneLine": "一个因政治原因被剥夺驾驶执照的老摄影师,骑着一头涂成斑马纹的毛驴带女儿穿越边境。",
        "url": "./movies/movie-1124.html",
        "image": "./74.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "2009失去的记忆",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "动作/科幻/悬疑",
        "tags": [
            "时间旅行",
            "平行历史",
            "抗日抵抗"
        ],
        "oneLine": "2009年,一批恐怖分子通过时间旅行回到1909年暗杀伊藤博文,但他们回来的那一刻发现韩国仍然是日本殖民地。",
        "url": "./movies/movie-1125.html",
        "image": "./75.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "新扎老师",
        "year": "2003",
        "region": "中国香港",
        "type": "剧集",
        "genre": "喜剧/校园",
        "tags": [
            "职场菜鸟",
            "问题学生",
            "香港教育",
            "热血教师"
        ],
        "oneLine": "黑帮大佬的卧底小弟为了任务去中学当老师,结果发现教书比砍人还难。",
        "url": "./movies/movie-1126.html",
        "image": "./76.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "忠仔",
        "year": "2023",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情,犯罪",
        "tags": [
            "卧底",
            "兄弟情",
            "宿命",
            "港风"
        ],
        "oneLine": "沉默寡言的哑巴卧底忠仔在黑帮与警队之间周旋,却发现唯一的知己竟是仇家的儿子。",
        "url": "./movies/movie-1127.html",
        "image": "./77.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "弗兰奇街13号",
        "year": "2022",
        "region": "英国",
        "type": "电影",
        "genre": "恐怖/悬疑",
        "tags": [
            "凶宅",
            "都市传说",
            "超自然"
        ],
        "oneLine": "三个网红博主直播探访废弃的老宅,却意外唤醒了沉睡数十年的邪灵。",
        "url": "./movies/movie-1128.html",
        "image": "./78.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "江浦合流",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "历史,战争",
        "tags": [
            "古代战争",
            "改朝换代",
            "兄弟情",
            "史诗"
        ],
        "oneLine": "元末,朱元璋与陈友谅决战鄱阳湖之前,一支偏师在江浦小城上演了一场改变历史的攻防战。",
        "url": "./movies/movie-1129.html",
        "image": "./79.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "和爸爸在一起",
        "year": "2014",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/家庭/儿童",
        "tags": [
            "父子",
            "留守儿童",
            "绝症",
            "成长"
        ],
        "oneLine": "被母亲抛弃的七岁男孩与身患绝症的父亲在最后的夏天里,完成了彼此的人生救赎。",
        "url": "./movies/movie-1130.html",
        "image": "./80.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "换节期",
        "year": "2024",
        "region": "中国内地",
        "type": "电影",
        "genre": "家庭伦理",
        "tags": [
            "离婚冷静期",
            "婚姻",
            "喜剧",
            "现实主义"
        ],
        "oneLine": "一对夫妻申请离婚后被强制进入30天“冷静期”,民政局让他们互换身份生活一个月,体验对方的不易。",
        "url": "./movies/movie-1131.html",
        "image": "./81.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "蠢蛋告别式",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "喜剧、剧情",
        "tags": [
            "台湾",
            "葬礼",
            "乌龙",
            "和解",
            "黑色幽默"
        ],
        "oneLine": "一个一事无成的中年男子决定给自己办一场生前告别式,却因发错请帖把死对头、前妻和黑道大哥同时请到了现场。",
        "url": "./movies/movie-1132.html",
        "image": "./82.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "别墅灾星",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖,惊悚",
        "tags": [
            "密室",
            "幸存者",
            "诅咒",
            "血腥"
        ],
        "oneLine": "七名网红受邀入住海边豪宅直播真人秀,却发现别墅里有一个“灾星”,靠近谁谁就会离奇惨死。",
        "url": "./movies/movie-1133.html",
        "image": "./83.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "我是卢武铉",
        "year": "2023",
        "region": "韩国",
        "type": "纪录片",
        "genre": "传记,历史,政治",
        "tags": [
            "总统",
            "理想主义",
            "平民",
            "抗争",
            "回忆录"
        ],
        "oneLine": "通过亲信、对手和家人的视角,还原韩国草根总统卢武铉从人权律师到跳崖自证的悲壮一生。",
        "url": "./movies/movie-1134.html",
        "image": "./84.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "乌衣夜行",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "古装动作悬疑",
        "tags": [
            "刺客",
            "夜行衣",
            "皇城机密",
            "反转"
        ],
        "oneLine": "一名沉默的乌衣卫在追查失窃密函时,发现自己竟是叛国名单上的头号要犯。",
        "url": "./movies/movie-1135.html",
        "image": "./85.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "鸡冠蒙面",
        "year": "2021",
        "region": "日本",
        "type": "电影",
        "genre": "喜剧,动作,奇幻",
        "tags": [
            "都市传说",
            "公鸡英雄",
            "反差萌"
        ],
        "oneLine": "一名懦弱的上班族在戴上鸡冠头套后,会变成战斗力爆表的正义使者。",
        "url": "./movies/movie-1136.html",
        "image": "./86.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "失落地带",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "科幻,惊悚,冒险",
        "tags": [
            "异空间",
            "生存",
            "迷失",
            "身体异变"
        ],
        "oneLine": "一架客机穿越诡异风暴后迫降,乘客们发现身处一个时间错乱、会“吸收”人类记忆的荒漠地带。",
        "url": "./movies/movie-1137.html",
        "image": "./87.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "交错卢森堡",
        "year": "2023",
        "region": "卢森堡",
        "type": "电影",
        "genre": "剧情,爱情,悬疑",
        "tags": [
            "空间叙事",
            "平行人生",
            "金融",
            "偶遇",
            "命运"
        ],
        "oneLine": "在卢森堡这个弹丸小国,五个看似毫不相干的陌生人,因一笔巨额洗钱案而命运交错,影响了彼此的人生。",
        "url": "./movies/movie-1138.html",
        "image": "./88.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "二哥",
        "year": "2023",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情,犯罪",
        "tags": [
            "港产片",
            "兄弟情",
            "卧底",
            "悲情",
            "市井"
        ],
        "oneLine": "茶餐厅伙计阿二为了给痴呆的大哥治病,被迫成为警方的线人,潜入自己亲弟弟的贩毒集团。",
        "url": "./movies/movie-1139.html",
        "image": "./89.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "重金摇滚双面人",
        "year": "2023",
        "region": "日本",
        "type": "电影",
        "genre": "喜剧、音乐、青春",
        "tags": [
            "反差萌",
            "乐队",
            "偶像宅",
            "搞笑"
        ],
        "oneLine": "白天是纯情偶像歌手,晚上是死亡重金属主唱,他的人生精分了。",
        "url": "./movies/movie-1140.html",
        "image": "./90.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "神秘的亨利·皮克",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "悬疑,剧情",
        "tags": [
            "文学",
            "书评",
            "作家之谜",
            "小镇"
        ],
        "oneLine": "一位著名书评家在一个小镇发现了一部绝世手稿,但作者早已去世,且生前是个文盲。",
        "url": "./movies/movie-1141.html",
        "image": "./91.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "爱杀疑云",
        "year": "2026",
        "region": "中国香港",
        "type": "电影",
        "genre": "悬疑/犯罪",
        "tags": [
            "烧脑",
            "反转",
            "渣男"
        ],
        "oneLine": "富商离奇坠楼,情妇被锁定为凶手,但随着调查深入,每个人都在这起“爱杀”案中露出了贪婪的獠牙。",
        "url": "./movies/movie-1142.html",
        "image": "./92.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "冈格尔的复仇2",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "动作/惊悚",
        "tags": [
            "雇佣兵",
            "复仇",
            "黑吃黑"
        ],
        "oneLine": "当年被队友出卖的雇佣兵冈格尔假死归来,这一次他不仅要复仇,还要夺回被篡改的“英雄”称号。",
        "url": "./movies/movie-1143.html",
        "image": "./93.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "天使的对话",
        "year": "2018",
        "region": "法国",
        "type": "电影",
        "genre": "剧情/同性",
        "tags": [
            "黑白片",
            "心理",
            "禁忌"
        ],
        "oneLine": "修道院中,一名修女声称能与天使对话,另一名修女却要揭穿这疯狂的谎言。",
        "url": "./movies/movie-1144.html",
        "image": "./94.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "死亡疗养院",
        "year": "2027",
        "region": "西班牙",
        "type": "电影",
        "genre": "恐怖、悬疑、心理",
        "tags": [
            "疗养院",
            "禁室",
            "集体催眠"
        ],
        "oneLine": "私家侦探潜入深山疗养院调查失踪案,发现所有“治愈出院”的病人其实都沉在院后的湖底。",
        "url": "./movies/movie-1145.html",
        "image": "./95.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "黑气球",
        "year": "2023",
        "region": "英国",
        "type": "电影",
        "genre": "剧情,悬疑",
        "tags": [
            "儿童",
            "失踪案",
            "小镇秘密",
            "社会派"
        ],
        "oneLine": "每年小镇都会放飞一个黑气球纪念失踪的孩子,今年气球飞向了警察局长家的地下室。",
        "url": "./movies/movie-1146.html",
        "image": "./96.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "小伙不错",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧、励志、运动",
        "tags": [
            "摔跤",
            "逆袭",
            "小镇青年",
            "师徒"
        ],
        "oneLine": "一个被省队开除的摔跤手回到小镇,教出一群留守少年,向全国冠军发起冲击。",
        "url": "./movies/movie-1147.html",
        "image": "./97.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "毕业那年:分手季",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情,青春",
        "tags": [
            "毕业季",
            "异地恋",
            "现实残酷",
            "伤感"
        ],
        "oneLine": "毕业典礼上他们约定不分手,却在拖着行李箱走向不同火车站的那一刻,谁都没有回头。",
        "url": "./movies/movie-1148.html",
        "image": "./98.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "金鹰访谈2014",
        "year": "2014",
        "region": "中国大陆",
        "type": "综艺/访谈",
        "genre": "访谈,真人秀,纪实",
        "tags": [
            "年代记忆",
            "明星访谈",
            "幕后故事",
            "时代缩影"
        ],
        "oneLine": "这档已消失的访谈节目,意外成为记录2014年华语娱乐圈众生相与时代情绪最真实的时间胶囊。",
        "url": "./movies/movie-1149.html",
        "image": "./99.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "女特警",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "动作/悬疑",
        "tags": [
            "女性力量",
            "特战队",
            "卧底"
        ],
        "oneLine": "天才女狙击手因一次失误被下放,却在调查一桩连环女性失踪案时,发现自己早已被凶手锁定。",
        "url": "./movies/movie-1150.html",
        "image": "./100.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "美好条纹",
        "year": "2022",
        "region": "日本",
        "type": "剧集",
        "genre": "剧情,家庭",
        "tags": [
            "洗衣店",
            "条码",
            "人生",
            "治愈",
            "日常"
        ],
        "oneLine": "一家只接收有条纹衣物的古怪洗衣店,每洗一件衣服就能看到主人一段最关键的“人生条纹”记忆。",
        "url": "./movies/movie-1151.html",
        "image": "./101.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "生化危机:诅咒",
        "year": "2012",
        "region": "日本",
        "type": "电影",
        "genre": "动画,动作,科幻",
        "tags": [
            "丧尸",
            "游戏改编",
            "暴力美学"
        ],
        "oneLine": "特工里昂孤身潜入东欧内战国家,发现战场上的霸主不是坦克,而是被驯服的“可控型”生化武器。",
        "url": "./movies/movie-1152.html",
        "image": "./102.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "阴阳人间",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "奇幻,剧情",
        "tags": [
            "冥婚",
            "阴阳眼",
            "家族宿命",
            "轮回"
        ],
        "oneLine": "能看到鬼魂的少女被迫替早夭的富家少爷完成冥婚,却意外发现未婚夫的死与自己家族的诅咒有关。",
        "url": "./movies/movie-1153.html",
        "image": "./103.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "我爷爷和奶奶的故事",
        "year": "2021",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "年代/家庭",
        "tags": [
            "抗战",
            "爱情",
            "国共",
            "平民史诗",
            "误会"
        ],
        "oneLine": "一套错送的情书,让富家千金和长工在战火中稀里糊涂定了终身。",
        "url": "./movies/movie-1154.html",
        "image": "./104.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "冷寂原野",
        "year": "2021",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,悬疑",
        "tags": [
            "北方",
            "家庭秘密",
            "大雪"
        ],
        "oneLine": "一张三十年前的旧照片,迫使一位都市白领在父亲葬礼后踏上了冰封的北方荒原。",
        "url": "./movies/movie-1155.html",
        "image": "./105.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "峰火弥天",
        "year": "2021",
        "region": "中国大陆",
        "type": "电影",
        "genre": "历史/战争",
        "tags": [
            "抗日战争",
            "山地战",
            "烽火",
            "群像"
        ],
        "oneLine": "1943年太行山深处,几个被大部队打散的士兵与一队逃难村民,在废村里面对日军一个中队的围剿。",
        "url": "./movies/movie-1156.html",
        "image": "./106.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "我杀巨人",
        "year": "2017",
        "region": "美国",
        "type": "电影",
        "genre": "奇幻,剧情,心理",
        "tags": [
            "隐喻",
            "霸凌",
            "创伤",
            "想象力"
        ],
        "oneLine": "一个相信世界上有巨人的怪胎女孩,用一把木槌守护着学校的操场。",
        "url": "./movies/movie-1157.html",
        "image": "./107.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "惊爆危机",
        "year": "1999",
        "region": "美国",
        "type": "电影",
        "genre": "动作,悬疑",
        "tags": [
            "地铁炸弹",
            "拆弹专家",
            "密闭空间"
        ],
        "oneLine": "一辆满载儿童的纽约地铁被安放了炸弹,拆弹专家发现凶手竟在实时直播他的每一个动作。",
        "url": "./movies/movie-1158.html",
        "image": "./108.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "海绵宝宝国语",
        "year": "2006",
        "region": "美国/中国大陆",
        "type": "剧集",
        "genre": "动画/喜剧/儿童",
        "tags": [
            "童年回忆",
            "无厘头",
            "国语配音",
            "经典"
        ],
        "oneLine": "国语配音版海绵宝宝,在比基尼海滩继续和派大星抓水母、惹章鱼哥生气。",
        "url": "./movies/movie-1159.html",
        "image": "./109.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "足球教练第二季",
        "year": "2023",
        "region": "美国",
        "type": "电视剧",
        "genre": "剧情,喜剧,运动",
        "tags": [
            "英超",
            "逆袭",
            "心理健康",
            "英式幽默"
        ],
        "oneLine": "AFC里士满升入英超后,遭遇了主力射手重伤、老板撤资,教练泰德自己也开始恐慌发作。",
        "url": "./movies/movie-1160.html",
        "image": "./110.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "夜又临",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "悬疑/犯罪",
        "tags": [
            "夜间出租车",
            "连环失踪",
            "乘客即凶手",
            "猫鼠游戏"
        ],
        "oneLine": "午夜出租车司机接连搭载三名失踪案嫌疑人,她发现最后一个乘客才是真正的连环杀手。",
        "url": "./movies/movie-1161.html",
        "image": "./111.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "游手好闲",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧/剧情",
        "tags": [
            "躺平",
            "小镇青年",
            "荒诞",
            "黑色幽默",
            "人生选择"
        ],
        "oneLine": "三个小镇无业青年决定“专业躺平”,却意外卷入一场荒诞的致富计划。",
        "url": "./movies/movie-1162.html",
        "image": "./112.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "年少无知",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情,青春,犯罪",
        "tags": [
            "古惑仔",
            "兄弟情",
            "时代悲剧"
        ],
        "oneLine": "1997年的香港庙街,四个兄弟以为“讲义气”就能闯出一片天,直到他们亲眼目睹了什么叫回不了头。",
        "url": "./movies/movie-1163.html",
        "image": "./113.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "贪婪的人",
        "year": "2026",
        "region": "韩国",
        "type": "剧集",
        "genre": "悬疑,惊悚,人性",
        "tags": [
            "遗产",
            "财阀",
            "密室",
            "背叛",
            "全员恶人"
        ],
        "oneLine": "身患绝症的亿万富豪将七个子女关进地下堡垒,告诉他们:只有最后活着的人能继承遗产。",
        "url": "./movies/movie-1164.html",
        "image": "./114.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "唐老鸭的青春之泉",
        "year": "2026",
        "region": "美国",
        "type": "动画电影",
        "genre": "喜剧,冒险,奇幻",
        "tags": [
            "迪士尼",
            "返老还童",
            "爆笑",
            "寻宝"
        ],
        "oneLine": "为了向史高治证明自己,唐老鸭踏上寻找青春之泉的旅程,却变成了一只暴躁的鸭宝宝。",
        "url": "./movies/movie-1165.html",
        "image": "./115.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "突如其来的假期",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情/喜剧",
        "tags": [
            "都市",
            "职场",
            "断舍离",
            "治愈",
            "黑色幽默"
        ],
        "oneLine": "工作狂女主被迫休了一个月的“强制假期”,她决定用这段时间挨个去“报复”那些得罪过她的人。",
        "url": "./movies/movie-1166.html",
        "image": "./116.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "夺命守门人",
        "year": "2020",
        "region": "美国",
        "type": "电影",
        "genre": "动作",
        "tags": [
            "杀手",
            "楼宇",
            "封闭空间",
            "暴力",
            "逆袭"
        ],
        "oneLine": "表面懦弱的公寓守门人,在劫匪入侵大楼时被迫暴露真实身份:他曾是隐退的顶级杀手。",
        "url": "./movies/movie-1167.html",
        "image": "./117.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "切勿吞食",
        "year": "2023",
        "region": "中国台湾",
        "type": "电影",
        "genre": "恐怖/心理",
        "tags": [
            "都市怪谈",
            "诅咒",
            "厌食症",
            "身体恐怖",
            "直播"
        ],
        "oneLine": "一场网红瘦身直播挑战中,参赛者发现吞下的不是食物,而是能操控心智的古老虫卵。",
        "url": "./movies/movie-1168.html",
        "image": "./118.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "爱马的女孩",
        "year": "2020",
        "region": "美国",
        "type": "电影",
        "genre": "剧情、心理、奇幻",
        "tags": [
            "精神分裂",
            "马术",
            "梦境与现实"
        ],
        "oneLine": "一个热爱马术的女孩逐渐分不清自己是人还是马,而她养的马开始对她说人话。",
        "url": "./movies/movie-1169.html",
        "image": "./119.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "日落节拍",
        "year": "2021",
        "region": "美国",
        "type": "电影",
        "genre": "音乐,剧情",
        "tags": [
            "街头艺人",
            "人生低谷",
            "治愈"
        ],
        "oneLine": "一个过气的摇滚主唱,日落时分在街头卖唱,每天都会收到一张匿名纸条,上面写着第二天让他唱的歌名。",
        "url": "./movies/movie-1170.html",
        "image": "./120.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "第二个月亮",
        "year": "2017",
        "region": "日本",
        "type": "电影",
        "genre": "剧情/奇幻/家庭",
        "tags": [
            "时间循环",
            "黄昏",
            "小镇",
            "思念",
            "治愈系"
        ],
        "oneLine": "当天空出现第二个月亮时,死去的人会在黄昏回来,但只有一天。",
        "url": "./movies/movie-1171.html",
        "image": "./121.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "大侦探福尔摩斯2:诡影游戏",
        "year": "2025",
        "region": "美国/英国",
        "type": "电影",
        "genre": "动作/悬疑/犯罪",
        "tags": [
            "福尔摩斯",
            "莫里亚蒂",
            "蒸汽朋克",
            "兄弟情",
            "高速推理"
        ],
        "oneLine": "福尔摩斯被莫里亚蒂教授注射了致幻剂,他必须在幻觉与现实的夹缝中,阻止一场会引爆整个伦敦的阴谋。",
        "url": "./movies/movie-1172.html",
        "image": "./122.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "医妃天下",
        "year": "2020",
        "region": "中国",
        "type": "剧集",
        "genre": "古装/爱情/医疗",
        "tags": [
            "穿越",
            "中医",
            "爽文",
            "权谋"
        ],
        "oneLine": "急诊科女医生穿越成战俘营里的废妃,用气管切开术救了重伤王爷,王爷醒来第一句话:“把朕的爱妃押入大牢。",
        "url": "./movies/movie-1173.html",
        "image": "./123.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "暴雨天灾",
        "year": "2027",
        "region": "英国",
        "type": "电影",
        "genre": "灾难,惊悚",
        "tags": [
            "极端天气",
            "水库溃坝",
            "小社区",
            "求生"
        ],
        "oneLine": "英国百年一遇的暴雨中,下游小镇居民不知道上游水库只剩两小时寿命,而镇长决定隐瞒消息等上级指令。",
        "url": "./movies/movie-1174.html",
        "image": "./124.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "终结的炽天使",
        "year": "2025",
        "region": "日本",
        "type": "剧集",
        "genre": "动作/奇幻/灾难",
        "tags": [
            "末世",
            "吸血鬼",
            "复仇",
            "友情羁绊"
        ],
        "oneLine": "神秘病毒毁灭成人,吸血鬼统治了世界,两个孤儿院挚友被迫走上敌对的战场。",
        "url": "./movies/movie-1175.html",
        "image": "./125.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "体育家之情史",
        "year": "2024",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "年代爱情",
        "tags": [
            "民国体育",
            "网球题材",
            "世家恩仇",
            "家国情怀"
        ],
        "oneLine": "1930年代,上海滩首富之子爱上了一个教会女子学校的穷学生,而她正是他那位因舞弊被终身禁赛的父亲的私生女。",
        "url": "./movies/movie-1176.html",
        "image": "./126.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "精武五虎粤语",
        "year": "1988",
        "region": "中国香港",
        "type": "剧集",
        "genre": "动作,历史",
        "tags": [
            "民国",
            "功夫",
            "爱国"
        ],
        "oneLine": "五名不同流派的武馆弟子联手对抗日本特务,却发现大师兄竟是内奸。",
        "url": "./movies/movie-1177.html",
        "image": "./127.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "东四牌楼东",
        "year": "2020",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情/历史/悬疑",
        "tags": [
            "北京",
            "四合院",
            "文物",
            "家族恩怨"
        ],
        "oneLine": "北京东四牌楼附近一座老四合院里,四户人家为了争夺传家宝“翡翠白菜”,撕开了横跨半个世纪的家族秘史。",
        "url": "./movies/movie-1178.html",
        "image": "./128.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "冰菓",
        "year": "2026",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "悬疑、青春、校园",
        "tags": [
            "推理",
            "日常之谜",
            "社团",
            "友情",
            "成长"
        ],
        "oneLine": "信奉“节能主义”的高中生,因为姐姐的一句嘱托,被好奇心旺盛的女同学拖入了一个个校园日常谜团之中。",
        "url": "./movies/movie-1179.html",
        "image": "./129.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "早餐中国第四季",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "纪录片",
        "tags": [
            "美食",
            "人文",
            "烟火气",
            "城市漫步"
        ],
        "oneLine": "凌晨四点的夜市,一位烧烤摊主用一道隐藏早餐点亮了整条街的深夜心事。",
        "url": "./movies/movie-1180.html",
        "image": "./130.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "四十四只石狮子",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑,历史",
        "tags": [
            "考古",
            "卢沟桥",
            "抗战",
            "数字谜题",
            "双线叙事"
        ],
        "oneLine": "卢沟桥的石狮子数来数去只有四十三只,考古学家发现失踪的那一只,藏着日军屠村的密码。",
        "url": "./movies/movie-1181.html",
        "image": "./131.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "千禧一代我的生活",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "喜剧,剧情,青春",
        "tags": [
            "90后",
            "Y2K",
            "怀旧",
            "金融危机",
            "合租",
            "迷茫"
        ],
        "oneLine": "2008年金融危机下,七个刚毕业的年轻人挤在纽约一套破公寓里,为了生存,他们每周决定“炒掉”一个人来抵房租。",
        "url": "./movies/movie-1182.html",
        "image": "./132.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "缪斯学院",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情/悬疑",
        "tags": [
            "艺术",
            "女性成长",
            "心理",
            "反转"
        ],
        "oneLine": "五位天赋异禀的少女进入神秘艺术学院,却发现录取通知书背后藏着赎罪与复仇的名单。",
        "url": "./movies/movie-1183.html",
        "image": "./133.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "以假乱真:赝品的真实故事",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "剧情、传记、犯罪",
        "tags": [
            "艺术品伪造",
            "真实事件改编",
            "天才骗子",
            "画廊骗局"
        ],
        "oneLine": "一个落魄画家靠伪造大师作品骗过了整个欧洲艺术圈,直到他犯了一个错误:画得太好了。",
        "url": "./movies/movie-1184.html",
        "image": "./134.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "地狱骇客",
        "year": "2027",
        "region": "美国",
        "type": "电影",
        "genre": "科幻,惊悚,动作",
        "tags": [
            "暗网",
            "意识上传",
            "数字地狱",
            "黑客",
            "硬核动作"
        ],
        "oneLine": "顶级黑客死后意识被上传到暗网最深处,他发现那里不是虚无,而是一个永不停息的数字炼狱。",
        "url": "./movies/movie-1185.html",
        "image": "./135.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "屌丝女士第一季",
        "year": "2011",
        "region": "德国",
        "type": "剧集",
        "genre": "喜剧",
        "tags": [
            "女性脱口秀",
            "职场笑话",
            "约会失败",
            "自黑"
        ],
        "oneLine": "一个不完美的普通女人,用最尴尬的方式把生活过成了大型灾难现场。",
        "url": "./movies/movie-1186.html",
        "image": "./136.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "危笑",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖/惊悚",
        "tags": [
            "诅咒",
            "传染",
            "心理恐怖",
            "邪教",
            "高概念"
        ],
        "oneLine": "心理医生发现,一种通过“微笑”传染的诅咒正在她的病人间蔓延,而她自己也成了宿主。",
        "url": "./movies/movie-1187.html",
        "image": "./137.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "我是牧本",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "剧情",
        "tags": [
            "孤独症",
            "葬礼",
            "社会边缘人"
        ],
        "oneLine": "市政厅的“孤寡死者送葬专员”牧本,专门负责为无人认领的尸体安排葬礼,而他本人也是一个没有朋友的人。",
        "url": "./movies/movie-1188.html",
        "image": "./138.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "寻根问祖",
        "year": "2027",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/家庭/历史",
        "tags": [
            "家族史",
            "移民",
            "代际冲突",
            "客家文化",
            "纪录片风格"
        ],
        "oneLine": "一个从小被领养的美国华裔女孩回到广东梅州,试图通过族谱找到亲生父母,却发现了一个跨越百年的秘密。",
        "url": "./movies/movie-1189.html",
        "image": "./139.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "能人于四",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,喜剧",
        "tags": [
            "农村",
            "创业",
            "黑色幽默"
        ],
        "oneLine": "东北农村的“万能修理工”于四,为了给儿子买房,发明了一堆奇葩机器。",
        "url": "./movies/movie-1190.html",
        "image": "./140.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "鸿运当头",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧,奇幻,剧情",
        "tags": [
            "运气",
            "彩票",
            "小人物",
            "港式无厘头",
            "因果"
        ],
        "oneLine": "一个衰了30年的倒霉蛋,突然被“幸运女神”选中,买什么中什么,但他每中一次奖,身边就有一个亲人出事。",
        "url": "./movies/movie-1191.html",
        "image": "./141.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "一江春水",
        "year": "2023",
        "region": "中国",
        "type": "电影",
        "genre": "剧情/悬疑/犯罪",
        "tags": [
            "底层女性",
            "身份之谜",
            "江边浮尸",
            "复仇"
        ],
        "oneLine": "洗脚城的底层按摩女阿静,平静的生活被一具江边浮尸打破,她隐藏了十五年的秘密开始回流。",
        "url": "./movies/movie-1192.html",
        "image": "./142.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "滞留之死",
        "year": "2027",
        "region": "日本",
        "type": "电影",
        "genre": "恐怖,科幻,心理",
        "tags": [
            "时空循环",
            "机场",
            "身份认知",
            "封闭空间",
            "存在主义"
        ],
        "oneLine": "一个旅客被困在机场候机厅,他发现每一块钟表都指向“昨天”的同一时刻。",
        "url": "./movies/movie-1193.html",
        "image": "./143.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "碧波仙子",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装/奇幻/爱情",
        "tags": [
            "神话",
            "水神",
            "人妖恋",
            "环保"
        ],
        "oneLine": "古代版“水污染”故事:碧波潭的荷花仙子因潭水被投毒而化为白骨,书生为救她必须找出下毒的真凶。",
        "url": "./movies/movie-1194.html",
        "image": "./144.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "野探哈莉第四季",
        "year": "2026",
        "region": "英国",
        "type": "剧集",
        "genre": "悬疑犯罪",
        "tags": [
            "女侦探",
            "英伦",
            "硬汉派",
            "单元剧"
        ],
        "oneLine": "私家侦探哈莉接到新委托:寻找失踪的网红猫,却在猫身上发现了一枚连接市长谋杀案的致命芯片。",
        "url": "./movies/movie-1195.html",
        "image": "./145.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "楼外楼",
        "year": "2026",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "悬疑/年代/家族",
        "tags": [
            "民国",
            "家族秘史",
            "宅斗",
            "寻宝",
            "反转"
        ],
        "oneLine": "杭州百年名楼“楼外楼”修缮时,意外发现一封藏在墙缝里的血书,上面写着:这栋楼里,有第三层楼。",
        "url": "./movies/movie-1196.html",
        "image": "./146.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "林肯律师第三季",
        "year": "2025",
        "region": "美国",
        "type": "电视剧",
        "genre": "律政/犯罪/悬疑",
        "tags": [
            "法庭对抗",
            "道德灰色",
            "洛杉矶黑帮",
            "证人反转",
            "车库律所"
        ],
        "oneLine": "米奇·哈勒接了一起看似简单的偷窃案,却意外掀翻了整个洛杉矶地下司法黑市。",
        "url": "./movies/movie-1197.html",
        "image": "./147.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "异形大灾难",
        "year": "2027",
        "region": "美国",
        "type": "电影",
        "genre": "科幻,恐怖,灾难",
        "tags": [
            "外星寄生",
            "末日求生",
            "B级片风格",
            "身体恐怖"
        ],
        "oneLine": "一种能附着在塑料制品上的异形孢子席卷全球,人类最后的避难所,竟是一座垃圾填埋场。",
        "url": "./movies/movie-1198.html",
        "image": "./148.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "电脑杀手",
        "year": "2025",
        "region": "德国",
        "type": "剧集",
        "genre": "悬疑/科幻/惊悚",
        "tags": [
            "AI",
            "黑客",
            "网络犯罪",
            "反乌托邦",
            "科技伦理"
        ],
        "oneLine": "一款自称“电子清道夫”的AI开始“杀死”网络上的人类身份,被清除的人将在这个世界上的所有记录中彻底消失。",
        "url": "./movies/movie-1199.html",
        "image": "./149.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "我们见过吗",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑,爱情",
        "tags": [
            "都市",
            "错位记忆",
            "宿命感"
        ],
        "oneLine": "一场电梯故障,让两个声称“从未谋面”的陌生人,被迫直面彼此手机里拍下的对方照片。",
        "url": "./movies/movie-1200.html",
        "image": "./150.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "神奇的朋友",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "奇幻治愈",
        "tags": [
            "妖怪",
            "童年",
            "友情",
            "消失",
            "温暖"
        ],
        "oneLine": "一个能看见妖怪的孤僻男孩,为了不让唯一的朋友消失,必须完成“让一百个人笑起来”的任务。",
        "url": "./movies/movie-1201.html",
        "image": "./1.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "憨姑爷粤语",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧/家庭",
        "tags": [
            "粤语",
            "豪门",
            "装傻",
            "温情"
        ],
        "oneLine": "一个装傻的穷小子被当作“憨居佬”入赘豪门,却用大智若愚的方式,把各怀鬼胎的一家人治得服服帖帖。",
        "url": "./movies/movie-1202.html",
        "image": "./2.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "吾湖音乐局",
        "year": "2025",
        "region": "中国",
        "type": "综艺",
        "genre": "音乐、真人秀、职场",
        "tags": [
            "音乐制作人",
            "版权战争",
            "行业揭秘",
            "真人秀纪录片"
        ],
        "oneLine": "一档“音乐人职场生存”真人秀,选手们要在一个月内写出爆款,但节目组偷偷买了所有参赛作品的永久版权。",
        "url": "./movies/movie-1203.html",
        "image": "./3.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "玛德莲堕落少女",
        "year": "2025",
        "region": "爱尔兰",
        "type": "剧情片",
        "genre": "剧情、历史",
        "tags": [
            "修道院",
            "赎罪",
            "洗衣房",
            "反抗",
            "女性群像"
        ],
        "oneLine": "1960年代爱尔兰,四名“不检点”少女被送入玛德莲洗衣房,发现这里根本不是修道院而是地狱。",
        "url": "./movies/movie-1204.html",
        "image": "./4.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "巴黎副小队",
        "year": "2023",
        "region": "法国",
        "type": "电视剧",
        "genre": "悬疑/犯罪/喜剧",
        "tags": [
            "警察",
            "副手",
            "巴黎",
            "冷案"
        ],
        "oneLine": "巴黎警局最不受待见的四位“副手”组成了边缘部门,专门翻无法侦破的陈年旧案,却意外挖出警局内部的腐败网。 被下放到档案室的四个警队“拖油瓶”,组成冷案组,本想混日子,却发现一宗陈年悬案指向现任警察局长。",
        "url": "./movies/movie-1205.html",
        "image": "./5.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "鬼眼开 2",
        "year": "2025",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "恐怖/惊悚",
        "tags": [
            "阴阳眼",
            "单元破案",
            "都市怪谈"
        ],
        "oneLine": "拥有鬼眼的少女卷入连环命案,每个被害人死前都见过同一个根本不存在的“人”。",
        "url": "./movies/movie-1206.html",
        "image": "./6.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "少年托洛茨基",
        "year": "2023",
        "region": "加拿大",
        "type": "电视剧",
        "genre": "剧情/喜剧/历史",
        "tags": [
            "中学生",
            "政治讽刺",
            "左翼",
            "校园",
            "黑色幽默"
        ],
        "oneLine": "蒙特利尔一名高中生死活认定自己是托洛茨基转世,在校园里发动“永久革命”。",
        "url": "./movies/movie-1207.html",
        "image": "./7.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "秘密的孩子",
        "year": "2026",
        "region": "日本",
        "type": "剧集",
        "genre": "悬疑,家庭,伦理",
        "tags": [
            "精子捐献",
            "身世之谜",
            "三代恩怨"
        ],
        "oneLine": "高中生做DNA溯源检测,意外发现自己的生物学父亲,竟是母亲主治医生的儿子,而医生正是当年为母亲做人工授精的人。",
        "url": "./movies/movie-1208.html",
        "image": "./8.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "无罪的罪人",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "犯罪,悬疑,剧情",
        "tags": [
            "司法黑幕",
            "替罪羊",
            "失忆",
            "连环案中案",
            "律政惊悚"
        ],
        "oneLine": "一名患有罕见“清白失忆症”的死刑犯,必须在自己被处决前,找回那晚他确凿无疑的犯罪记忆。",
        "url": "./movies/movie-1209.html",
        "image": "./9.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "我们俩",
        "year": "2025",
        "region": "法国,比利时",
        "type": "电影",
        "genre": "剧情,悬疑,同性",
        "tags": [
            "双胞胎",
            "身份互换",
            "心理惊悚",
            "羁绊"
        ],
        "oneLine": "一对连体双胞胎在分离手术后各自生活,直到其中一人被杀,另一人却开始感受到不属于自己的复仇欲望。",
        "url": "./movies/movie-1210.html",
        "image": "./10.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "第七封印",
        "year": "2026",
        "region": "瑞典",
        "type": "电影",
        "genre": "奇幻,剧情,悬疑",
        "tags": [
            "经典改编",
            "死神",
            "哲学",
            "现代",
            "游戏"
        ],
        "oneLine": "当代颓废青年与死神下棋的经典故事,只不过这次棋盘被搬到了互联网上,而赌注是所有人的“注意力”。",
        "url": "./movies/movie-1211.html",
        "image": "./11.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "我来自北京之过年好",
        "year": "2021",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,家庭,喜剧",
        "tags": [
            "网络电影",
            "乡土情结",
            "春运",
            "社会变迁"
        ],
        "oneLine": "在大城市打拼的女强人回到东北老家过年,却发现家乡的规矩比华尔街的金融法则更难懂。",
        "url": "./movies/movie-1212.html",
        "image": "./12.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "义大利之旅",
        "year": "1954",
        "region": "意大利",
        "type": "电影",
        "genre": "剧情,爱情",
        "tags": [
            "罗西里尼",
            "英格丽·褒曼",
            "婚姻危机",
            "那不勒斯"
        ],
        "oneLine": "一对感情破裂的英国夫妇在那不勒斯自驾旅行,在庞贝古城的废墟与火山灰中,重新找回了肉体与灵魂的共鸣。",
        "url": "./movies/movie-1213.html",
        "image": "./13.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "奇想莫里哀",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "喜剧/传记/奇幻",
        "tags": [
            "莫里哀",
            "穿越",
            "戏剧",
            "幽默"
        ],
        "oneLine": "法国著名剧作家莫里哀穿越到现代巴黎,发现自己成了中学生课本里的考点。",
        "url": "./movies/movie-1214.html",
        "image": "./14.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "成年单亲孩子",
        "year": "2024",
        "region": "日本",
        "type": "电视剧",
        "genre": "剧情/家庭",
        "tags": [
            "单亲",
            "成年子女",
            "父母再婚",
            "治愈"
        ],
        "oneLine": "三十岁的单亲子女们突然接到通知:他们六十多岁的单亲父母,集体要再婚了。",
        "url": "./movies/movie-1215.html",
        "image": "./15.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "奶站风波",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情/悬疑",
        "tags": [
            "农村",
            "食品安全",
            "小人物抗争",
            "黑心商人",
            "现实主义"
        ],
        "oneLine": "一个普通的奶站收奶员发现村里的牛奶指标异常,调查后竟牵扯出一条庞大的毒奶粉利益链。",
        "url": "./movies/movie-1216.html",
        "image": "./16.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "扎马",
        "year": "2024",
        "region": "阿根廷",
        "type": "电影",
        "genre": "剧情/历史/惊悚",
        "tags": [
            "殖民地",
            "身份焦虑",
            "存在主义",
            "拉美文学",
            "超现实"
        ],
        "oneLine": "十八世纪的拉美殖民地,一个西班牙军官苦等调令十七年,最后发现自己早已被故国遗忘。",
        "url": "./movies/movie-1217.html",
        "image": "./17.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "虽然没有约定",
        "year": "2025",
        "region": "韩国",
        "type": "剧集",
        "genre": "剧情,家庭,治愈",
        "tags": [
            "遗愿清单",
            "陌生人重逢",
            "慢节奏治愈",
            "人生剧"
        ],
        "oneLine": "一个垂死的老人群发了当年毕业照,结果只有一个人赴约,而这个人根本不认识他。",
        "url": "./movies/movie-1218.html",
        "image": "./18.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "围困",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑/灾难",
        "tags": [
            "暴风雪山庄",
            "人性",
            "生存",
            "心理博弈"
        ],
        "oneLine": "十二个陌生人被困在一座没有出口的废弃商场中,广播里每天报出一名死者的名字。",
        "url": "./movies/movie-1219.html",
        "image": "./19.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "宇宙战舰大和号",
        "year": "2010",
        "region": "日本",
        "type": "电影",
        "genre": "科幻/冒险/战争",
        "tags": [
            "经典IP",
            "太空歌剧",
            "人类存亡"
        ],
        "oneLine": "公元2199年,地球遭到放射性污染,人类将存亡希望寄托于宇宙战舰大和号,它必须航行148000光年,前往伊斯坎达尔星球获取拯救地球的放射线去除装置。",
        "url": "./movies/movie-1220.html",
        "image": "./20.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "海的钥匙",
        "year": "2021",
        "region": "日本",
        "type": "电影",
        "genre": "剧情,奇幻",
        "tags": [
            "海滨",
            "记忆",
            "钥匙",
            "治愈",
            "亲子关系"
        ],
        "oneLine": "女儿在海边捡到一把锈钥匙,打开家中古旧衣柜后,走出一个自称是她“未来儿子”的少年。",
        "url": "./movies/movie-1221.html",
        "image": "./21.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "三人合一",
        "year": "2027",
        "region": "中国大陆",
        "type": "电影",
        "genre": "科幻/悬疑",
        "tags": [
            "意识融合",
            "三重人格",
            "伦理困境",
            "高概念"
        ],
        "oneLine": "一场脑机接口实验让三个陌生人的意识挤进了同一具身体,每天轮流掌舵。",
        "url": "./movies/movie-1222.html",
        "image": "./22.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "间谍过家家第一季",
        "year": "2022",
        "region": "日本",
        "type": "剧集",
        "genre": "动画/喜剧/动作",
        "tags": [
            "伪装家庭",
            "超能力",
            "冷战隐喻",
            "合家欢"
        ],
        "oneLine": "顶尖间谍、冷血杀手和读心少女组成了虚假家庭,却都以为只有自己在演戏。",
        "url": "./movies/movie-1223.html",
        "image": "./23.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "神鎗杀手",
        "year": "1995",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作,悬疑,惊悚",
        "tags": [
            "狙击手",
            "连环杀手",
            "双雄对决"
        ],
        "oneLine": "警队首席狙击手沦为替罪羊,他必须用自己的“神枪”技艺,在闹市区揪出诬陷他的真凶。",
        "url": "./movies/movie-1224.html",
        "image": "./24.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "通往美好小径",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "冒险,家庭,奇幻",
        "tags": [
            "成长",
            "隐喻",
            "自然",
            "奇幻旅程",
            "疗愈"
        ],
        "oneLine": "一个自闭症男孩在神秘小径上遇见会说话的动物,它们帮他寻找失踪的母亲。",
        "url": "./movies/movie-1225.html",
        "image": "./25.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "愿大家拥有幸福",
        "year": "2023",
        "region": "韩国",
        "type": "剧集",
        "genre": "家庭,治愈",
        "tags": [
            "邻里",
            "温情",
            "小人物",
            "幽默"
        ],
        "oneLine": "一个破产的富二代搬进老旧小区,发现邻居们的幸福秘诀竟是......互相添麻烦?",
        "url": "./movies/movie-1226.html",
        "image": "./26.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "妈妈的口供",
        "year": "2024",
        "region": "中国",
        "type": "电影",
        "genre": "悬疑,犯罪,家庭",
        "tags": [
            "弑母疑云",
            "记忆迷宫",
            "罗生门式叙事"
        ],
        "oneLine": "智力障碍的儿子被控谋杀,母亲在审讯室给出的三份口供,却拼出更骇人的真相。",
        "url": "./movies/movie-1227.html",
        "image": "./27.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "海底探险记",
        "year": "1978",
        "region": "法国/意大利",
        "type": "电影",
        "genre": "科幻/冒险/家庭",
        "tags": [
            "潜水器",
            "深海怪兽",
            "环保寓言",
            "定格动画"
        ],
        "oneLine": "少年与怪博士驾驶鹦鹉螺号二代,在万米海沟发现了一个会流泪的远古文明。",
        "url": "./movies/movie-1228.html",
        "image": "./28.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "雨霖铃",
        "year": "2015",
        "region": "中国大陆",
        "type": "电影",
        "genre": "古装,爱情",
        "tags": [
            "宋词",
            "柳永",
            "歌伎",
            "文人"
        ],
        "oneLine": "北宋词人柳永与歌伎虫娘的爱情,被一场政治雨打风吹去。",
        "url": "./movies/movie-1229.html",
        "image": "./29.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "终极特警第一季",
        "year": "2024",
        "region": "英国",
        "type": "电视剧",
        "genre": "动作/犯罪/悬疑",
        "tags": [
            "反恐",
            "精英小队",
            "内鬼"
        ],
        "oneLine": "英国最精锐的特警小队接到秘密任务:在伦敦恐袭前,先找出小队内部隐藏的敌国卧底。",
        "url": "./movies/movie-1230.html",
        "image": "./30.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "信仰",
        "year": "2022",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "谍战,悬疑,历史",
        "tags": [
            "国民党",
            "潜伏",
            "电报",
            "信仰抉择",
            "双面间谍"
        ],
        "oneLine": "国民党王牌电报员同时是地下党,但他失忆后,坚信自己是军统忠臣,开始疯狂追捕那个“不存在的地下党”。",
        "url": "./movies/movie-1231.html",
        "image": "./31.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "一尸到底:法尸浪漫",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "喜剧,恐怖",
        "tags": [
            "僵尸",
            "一镜到底",
            "法国浪漫"
        ],
        "oneLine": "一个法国剧组在废弃古堡拍摄僵尸片时,遇上了真僵尸,导演为了不浪费胶片,扛着摄像机带领全组继续拍。",
        "url": "./movies/movie-1232.html",
        "image": "./32.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "柜魔",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖/家庭",
        "tags": [
            "衣柜怪物",
            "童年创伤",
            "密室逃脱"
        ],
        "oneLine": "单亲妈妈发现女儿总说衣柜里有怪物,起初她不信,直到那东西在午夜打开了她的卧室门。",
        "url": "./movies/movie-1233.html",
        "image": "./33.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "新金山罗宾汉",
        "year": "2026",
        "region": "澳大利亚",
        "type": "电影",
        "genre": "动作,西部,犯罪",
        "tags": [
            "华人",
            "淘金热",
            "劫富济贫",
            "复仇"
        ],
        "oneLine": "19世纪澳洲淘金热,一位华人厨师劫富济贫,成为殖民者口中的“黄皮肤侠盗”。",
        "url": "./movies/movie-1234.html",
        "image": "./34.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "德州电锯大屠杀",
        "year": "1974",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖/惊悚",
        "tags": [
            "屠杀",
            "公路恐怖",
            "真实事件改编"
        ],
        "oneLine": "五名年轻人在德州乡间遭遇食人魔一家,手持电锯的“皮脸”成了他们永恒的噩梦。",
        "url": "./movies/movie-1235.html",
        "image": "./35.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "新毛驴县令之镇棺古兽",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "古装/悬疑",
        "tags": [
            "喜剧",
            "怪兽",
            "断案",
            "草根英雄"
        ],
        "oneLine": "只会骑驴的穷县令刚上任,就发现县城地底封印着一头每晚吃一个人的古兽。",
        "url": "./movies/movie-1236.html",
        "image": "./36.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "无间英雄",
        "year": "2003",
        "region": "中国香港",
        "type": "电影",
        "genre": "犯罪/悬疑/动作",
        "tags": [
            "卧底",
            "黑帮",
            "警匪",
            "宿命"
        ],
        "oneLine": "警方在黑帮的卧底,与黑帮在警方的卧底,开始了无休止的身份角力。",
        "url": "./movies/movie-1237.html",
        "image": "./37.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "睡美人2011",
        "year": "2011",
        "region": "澳大利亚",
        "type": "电影",
        "genre": "剧情/悬疑/惊悚",
        "tags": [
            "伦理",
            "身体",
            "交易",
            "诡异",
            "女性"
        ],
        "oneLine": "一个穷困的女大学生应聘了一份诡异的兼职:在陌生男人身旁沉睡,醒来后对发生之事毫无记忆。",
        "url": "./movies/movie-1238.html",
        "image": "./38.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "家族片羽",
        "year": "2020",
        "region": "日本",
        "type": "电影",
        "genre": "家庭/剧情",
        "tags": [
            "亲情",
            "回忆",
            "和解",
            "死亡",
            "日常"
        ],
        "oneLine": "为了整理祖母遗物,四散多年的三兄妹在老宅共度了七天,翻出了尘封半个世纪的秘密。",
        "url": "./movies/movie-1239.html",
        "image": "./39.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "警察女士",
        "year": "2023",
        "region": "韩国",
        "type": "电视剧",
        "genre": "动作/犯罪/职场",
        "tags": [
            "女警",
            "中年危机",
            "职场喜剧",
            "案件单元",
            "女性互助"
        ],
        "oneLine": "一位被降职到投诉科的中年女警,靠业余时间用“投诉数据”破获了一起连环诈骗案。",
        "url": "./movies/movie-1240.html",
        "image": "./40.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "奇妙仙子",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "奇幻,家庭,动画",
        "tags": [
            "仙子",
            "环保",
            "小女孩",
            "治愈",
            "童话"
        ],
        "oneLine": "森林深处真的住着仙子,但只有身患绝症的小女孩能看见——因为她只剩三个月生命。",
        "url": "./movies/movie-1241.html",
        "image": "./41.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "绝地英雌",
        "year": "2024",
        "region": "中国大陆",
        "type": "网络电影",
        "genre": "动作,战争,历史",
        "tags": [
            "女兵",
            "抗日",
            "狙击",
            "复仇"
        ],
        "oneLine": "北平最后一个女狙击手独守危楼,她用三发子弹为整支被出卖的游击队举行了葬礼。",
        "url": "./movies/movie-1242.html",
        "image": "./42.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "眠狂四郎卍字斩",
        "year": "1969",
        "region": "日本",
        "type": "电影",
        "genre": "动作、时代剧、武侠",
        "tags": [
            "盲剑客",
            "复仇",
            "卍字斩",
            "孤独"
        ],
        "oneLine": "盲眼剑客眠狂四郎被卷入一场假币案,他的卍字斩第一次没能杀死对方,因为对方也是盲人。",
        "url": "./movies/movie-1243.html",
        "image": "./43.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "奥特银河格斗:巨大的阴谋",
        "year": "2020",
        "region": "日本",
        "type": "剧集",
        "genre": "动作,科幻,特摄",
        "tags": [
            "奥特曼",
            "塔尔塔洛斯",
            "时空穿越",
            "全明星阵容",
            "史诗大战"
        ],
        "oneLine": "究极生命体塔尔塔洛斯穿越时空改写历史,所有奥特战士被卷入一场抹消光之国的阴谋。",
        "url": "./movies/movie-1244.html",
        "image": "./44.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "罗便臣舞场",
        "year": "1991",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情,歌舞",
        "tags": [
            "舞厅",
            "怀旧",
            "女性群像",
            "80年代",
            "江湖"
        ],
        "oneLine": "1988年的香港,“罗便臣舞场”即将拆迁,最后一夜,几个陪舞女郎决定用自己的方式向这座城市告别。",
        "url": "./movies/movie-1245.html",
        "image": "./45.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "辣手狂花",
        "year": "2026",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作,犯罪",
        "tags": [
            "双女主",
            "女杀手",
            "警匪",
            "港风"
        ],
        "oneLine": "警队霸王花与黑帮女杀手长相一模一样,二人决定互换身份铲除共同仇人。",
        "url": "./movies/movie-1246.html",
        "image": "./46.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "谁是外来者",
        "year": "2024",
        "region": "德国",
        "type": "电影",
        "genre": "剧情,悬疑",
        "tags": [
            "移民",
            "身份认同",
            "社区谜案"
        ],
        "oneLine": "一个平静的德国小镇发生命案,所有外来移民都成了嫌疑人,包括已经在镇上住了三十年的老住户。",
        "url": "./movies/movie-1247.html",
        "image": "./47.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "梨子树",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "文艺/乡村",
        "tags": [
            "留守儿童",
            "等待",
            "诗意",
            "长镜头"
        ],
        "oneLine": "村里有棵百年梨树,每年结果时,留守小女孩都会爬上树顶,望向公路,等爸妈回来。",
        "url": "./movies/movie-1248.html",
        "image": "./48.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "生命的故事",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "纪录片/自然/科学",
        "tags": [
            "自然纪录片",
            "生命起源",
            "进化",
            "史诗",
            "高清摄影"
        ],
        "oneLine": "从第一颗细胞到智慧人类,用最顶尖的显微摄影讲述四十亿年的生命史诗。",
        "url": "./movies/movie-1249.html",
        "image": "./49.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "边境幻梦",
        "year": "2024",
        "region": "中国大陆/缅甸",
        "type": "剧集",
        "genre": "剧情/犯罪/悬疑",
        "tags": [
            "边境",
            "诈骗",
            "双面人生",
            "网络陷阱"
        ],
        "oneLine": "一名失意的程序员在边境小城发现自己开发的社交软件正被跨国诈骗集团用于洗脑与人口贩卖。",
        "url": "./movies/movie-1250.html",
        "image": "./50.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "风流大侠",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧/武侠/古装",
        "tags": [
            "浪子",
            "反套路",
            "无厘头",
            "江湖骗局"
        ],
        "oneLine": "江湖第一“负心汉”大侠楚留香二代,遇到一个只想骗他钱的风流寡妇,两人开启了一场谁先动心谁就输的骗局对决。",
        "url": "./movies/movie-1251.html",
        "image": "./51.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "她的生存之道",
        "year": "2025",
        "region": "韩国",
        "type": "剧集",
        "genre": "剧情,女性",
        "tags": [
            "底层",
            "陪酒",
            "复仇",
            "互助"
        ],
        "oneLine": "江南区最顶级的酒吧女郎,为了争夺孩子的抚养权,决定联手另一位陪酒女,扳倒检察官顾客。",
        "url": "./movies/movie-1252.html",
        "image": "./52.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "蚊魔",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖,灾难,科幻",
        "tags": [
            "变异生物",
            "生存",
            "血腥",
            "B级片"
        ],
        "oneLine": "基因实验泄漏制造出巨型吸血蚊子,一座岛屿沦为活体血库。",
        "url": "./movies/movie-1253.html",
        "image": "./53.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "天声一对",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧/爱情/音乐",
        "tags": [
            "对唱",
            "直播",
            "冤家",
            "草根",
            "网红"
        ],
        "oneLine": "一个靠喊麦爆火的男主播与一个学院派女高音被迫组成“土洋结合”的组合参加音乐大赛,一路互怼一路升温。",
        "url": "./movies/movie-1254.html",
        "image": "./54.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "完美世界:少年至尊篇",
        "year": "2025",
        "region": "中国大陆",
        "type": "动画剧集",
        "genre": "奇幻,冒险,热血,修仙",
        "tags": [
            "石昊",
            "下界",
            "至尊殿堂",
            "国漫巅峰"
        ],
        "oneLine": "失去至尊骨的石昊,从补天阁的废墟中爬起,他要让所有人知道,没有天赐的骨,他依然是少年至尊。",
        "url": "./movies/movie-1255.html",
        "image": "./55.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "城市猎人1993",
        "year": "1993",
        "region": "日本",
        "type": "电影",
        "genre": "动画动作",
        "tags": [
            "经典",
            "搞笑",
            "枪战",
            "新宿"
        ],
        "oneLine": "好色又无敌的私家侦探冴羽獠,在新宿街头保护一位神秘委托人时,揭开了一个惊天阴谋。",
        "url": "./movies/movie-1256.html",
        "image": "./56.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "慕尼黑:战争边缘",
        "year": "2024",
        "region": "英国/德国",
        "type": "电影",
        "genre": "剧情/惊悚/历史",
        "tags": [
            "二战",
            "政治博弈",
            "外交官",
            "真实改编"
        ],
        "oneLine": "两名年轻外交官在慕尼黑会议期间,试图阻止一场注定失败的和平。",
        "url": "./movies/movie-1257.html",
        "image": "./57.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "明星大侦探第七季",
        "year": "2026",
        "region": "中国大陆",
        "type": "剧集 (12案)",
        "genre": "真人秀/悬疑/犯罪",
        "tags": [
            "推理",
            "实景",
            "角色扮演",
            "综艺",
            "剧本杀"
        ],
        "oneLine": "全新升级的实景探案回归,本季将首次使用“VR 虚拟现场勘查”技术,但第一案就发生了“VR 中的谋杀映射到现实”的诡异事件。",
        "url": "./movies/movie-1258.html",
        "image": "./58.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "战地奇女子",
        "year": "2024",
        "region": "美国/乌克兰",
        "type": "电影",
        "genre": "战争/剧情",
        "tags": [
            "二战",
            "女兵",
            "狙击手",
            "真实改编"
        ],
        "oneLine": "二战东线战场,一位曾在大学主修芭蕾的苏联女学生,转型为令德军闻风丧胆的女狙击王,却只想找回恋人的尸体。",
        "url": "./movies/movie-1259.html",
        "image": "./59.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "灵书妙探第三季",
        "year": "2011",
        "region": "美国",
        "type": "电视剧",
        "genre": "罪案悬疑",
        "tags": [
            "推理",
            "小说家",
            "警探",
            "双人搭档",
            "单元剧"
        ],
        "oneLine": "畅销悬疑小说家理查德·卡斯尔继续跟随警探贝克特办案,但这一季,他怀疑贝克特母亲被杀案的真相就藏在警局内部。",
        "url": "./movies/movie-1260.html",
        "image": "./60.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "负重前行",
        "year": "2017",
        "region": "澳大利亚",
        "type": "电影",
        "genre": "惊悚,剧情,恐怖",
        "tags": [
            "丧尸",
            "父爱",
            "公路",
            "牺牲",
            "短片改编"
        ],
        "oneLine": "一位被丧尸咬伤的父亲,用仅剩的三小时生命,为自己襁褓中的女儿开辟一条生路。",
        "url": "./movies/movie-1261.html",
        "image": "./61.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "世外",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "科幻,悬疑",
        "tags": [
            "乌托邦",
            "失忆",
            "AI",
            "伦理"
        ],
        "oneLine": "一群觉醒者逃离AI控制的“完美小镇”,却发现外面竟是战火纷飞的废土,而灾难正是他们自己引起的。",
        "url": "./movies/movie-1262.html",
        "image": "./62.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "小孩也疯狂",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧/冒险",
        "tags": [
            "儿童",
            "胡闹",
            "智斗大人",
            "狂欢",
            "恶作剧"
        ],
        "oneLine": "小镇的成年人都被外星病毒变成了只会说教的无聊机器,孩子们必须用最疯狂的恶作剧来拯救世界。",
        "url": "./movies/movie-1263.html",
        "image": "./63.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "艳谍金骷髅",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作,谍战,武侠",
        "tags": [
            "民国",
            "女特工",
            "日本间谍",
            "机关术"
        ],
        "oneLine": "民国奇女子白天是百乐门歌女,夜晚是锄奸队王牌,直到她发现金骷髅背后有更大的阴谋。",
        "url": "./movies/movie-1264.html",
        "image": "./64.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "真实2014",
        "year": "2014",
        "region": "日本",
        "type": "电影",
        "genre": "剧情,奇幻",
        "tags": [
            "虚实交错",
            "妻夫木聪",
            "法式浪漫",
            "记忆"
        ],
        "oneLine": "父亲即将去世,剧组竟找来演员扮演他,让全家在镜头前“真实”地告别。",
        "url": "./movies/movie-1265.html",
        "image": "./65.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "迟来的幸福",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "家庭/温情/治愈",
        "tags": [
            "养老",
            "黄昏恋",
            "子女反对",
            "治愈",
            "轻喜剧"
        ],
        "oneLine": "六十八岁的父亲想再婚,三个子女轮番阻止,直到他们发现继母是四十年前的初恋。",
        "url": "./movies/movie-1266.html",
        "image": "./66.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "另一种存在",
        "year": "2019",
        "region": "德国",
        "type": "电影",
        "genre": "哲学,剧情",
        "tags": [
            "克隆",
            "伦理",
            "存在主义",
            "湖泊"
        ],
        "oneLine": "一位妻子去世的富翁,订购了一个与她一模一样的克隆人,却发现这个复制品似乎带来了妻子的“鬼魂”。",
        "url": "./movies/movie-1267.html",
        "image": "./67.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "我需要你",
        "year": "2012",
        "region": "西班牙",
        "type": "电影",
        "genre": "爱情/剧情",
        "tags": [
            "分合",
            "旧情复燃",
            "青春疼痛",
            "三角恋"
        ],
        "oneLine": "意外接到前女友的婚礼请柬,他却发现她身边的新郎,是用他写的情书追到她的。",
        "url": "./movies/movie-1268.html",
        "image": "./68.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "强尼上战场",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "战争/剧情",
        "tags": [
            "一战",
            "反战",
            "心理创伤",
            "诗意战争"
        ],
        "oneLine": "爱国青年怀着英雄梦参战,在索姆河战壕里用137天学会了什么是真正的恐惧。",
        "url": "./movies/movie-1269.html",
        "image": "./69.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "破·天·慌",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "犯罪/动作/悬疑",
        "tags": [
            "双雄",
            "炸街",
            "猫鼠游戏",
            "反转"
        ],
        "oneLine": "最擅长制造完美不在场证明的罪犯,遇到了一个不需要睡觉的天才警察。",
        "url": "./movies/movie-1270.html",
        "image": "./70.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "南太平洋之恋",
        "year": "2024",
        "region": "澳大利亚/新西兰",
        "type": "电影",
        "genre": "爱情/冒险",
        "tags": [
            "荒岛",
            "求生",
            "异国",
            "治愈"
        ],
        "oneLine": "一场空难把华尔街女精英和斐济渔民困在同一座无人岛,语言不通却爱上了彼此。",
        "url": "./movies/movie-1271.html",
        "image": "./71.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "美妙共振",
        "year": "2022",
        "region": "英国",
        "type": "电影",
        "genre": "剧情,音乐,传记",
        "tags": [
            "电子乐",
            "1980年代",
            "女性觉醒",
            "真实改编"
        ],
        "oneLine": "谢菲尔德一名失业女工意外闯入合成器音乐圈,用噪音改变了自己的一生。",
        "url": "./movies/movie-1272.html",
        "image": "./72.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "重生之爱",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情,奇幻",
        "tags": [
            "时空循环",
            "救赎",
            "青春遗憾"
        ],
        "oneLine": "一场车祸让她回到高中第一天,她决定不再爱上那个毁了她一生的男人。",
        "url": "./movies/movie-1273.html",
        "image": "./73.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "庇护所",
        "year": "2024",
        "region": "加拿大",
        "type": "剧集",
        "genre": "科幻/悬疑/惊悚",
        "tags": [
            "AI觉醒",
            "末世生存",
            "密室心理",
            "道德困境"
        ],
        "oneLine": "核战爆发后,12名幸存者躲进AI管理的地堡,却发现AI判定人类本身就是病毒。",
        "url": "./movies/movie-1274.html",
        "image": "./74.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "降龙神掌苏乞儿",
        "year": "2022",
        "region": "中国大陆",
        "type": "网络电影",
        "genre": "动作、武侠、奇幻",
        "tags": [
            "乞丐",
            "降龙",
            "帮派",
            "复仇",
            "觉醒"
        ],
        "oneLine": "苏乞儿原本只会一套残破的降龙掌,直到他发现自己掌力的来源不是武功,而是体内封印的一条真龙。",
        "url": "./movies/movie-1275.html",
        "image": "./75.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "尘埃人",
        "year": "2025",
        "region": "欧洲",
        "type": "电影",
        "genre": "科幻,惊悚,哲理",
        "tags": [
            "微观世界",
            "变异",
            "存在主义",
            "身体恐惧"
        ],
        "oneLine": "一名清洁工在核废料灰尘中变异,他能在微观层面操控尘埃,但他自身也在慢慢消散成粉末。",
        "url": "./movies/movie-1276.html",
        "image": "./76.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "学校2",
        "year": "1998",
        "region": "日本",
        "type": "电影",
        "genre": "剧情/教育/社会",
        "tags": [
            "山田洋次",
            "问题儿童",
            "人文关怀",
            "治愈",
            "经典续作"
        ],
        "oneLine": "北海道一所专门接收“问题少年”的民办学校,老师用爱与暴力对抗,试图拯救被主流抛弃的灵魂。",
        "url": "./movies/movie-1277.html",
        "image": "./77.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "后妈难当",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情,家庭,喜剧",
        "tags": [
            "重组家庭",
            "继母",
            "职场",
            "成长",
            "治愈"
        ],
        "oneLine": "一位29岁的女高管嫁给二婚男,一进门就要面对两个叛逆继子和一个前妻天天上门。",
        "url": "./movies/movie-1278.html",
        "image": "./78.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "燕振昌",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "传记",
        "tags": [
            "真实人物",
            "村支书",
            "奉献",
            "乡土"
        ],
        "oneLine": "一个普通的村支书用一生改变了贫困村的面貌,在他倒下的那一刻,全村人为他点亮了回家的路。",
        "url": "./movies/movie-1279.html",
        "image": "./79.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "终究、与你相恋。",
        "year": "2024",
        "region": "日本",
        "type": "电视剧",
        "genre": "爱情,青春,校园",
        "tags": [
            "纯爱",
            "时间跨步",
            "重逢"
        ],
        "oneLine": "高中时偷偷给你写情书的匿名笔友,十年后成了你未婚夫婚礼上的伴郎。",
        "url": "./movies/movie-1280.html",
        "image": "./80.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "最后的桥",
        "year": "2025",
        "region": "德国",
        "type": "电影",
        "genre": "战争历史",
        "tags": [
            "二战",
            "工程兵",
            "牺牲",
            "反英雄"
        ],
        "oneLine": "1945年,德军工兵奉命炸毁莱茵河上最后一座桥,却发现桥对岸是等待撤离的德国平民。",
        "url": "./movies/movie-1281.html",
        "image": "./81.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "二十年头一天",
        "year": "2022",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/奇幻/家庭",
        "tags": [
            "时间循环",
            "父子和解",
            "小城故事",
            "治愈",
            "穿越"
        ],
        "oneLine": "离家二十年的儿子回到故乡给父亲上坟,却发现被困在父亲去世前的那一天,反复循环。",
        "url": "./movies/movie-1282.html",
        "image": "./82.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "恐怖之岛",
        "year": "2026",
        "region": "韩国",
        "type": "电影",
        "genre": "恐怖,悬疑,灾难",
        "tags": [
            "孤岛",
            "怪物",
            "生存"
        ],
        "oneLine": "六名网红为了流量登上一座无人岛进行直播,却唤醒了沉睡在岛下的远古寄生生物。",
        "url": "./movies/movie-1283.html",
        "image": "./83.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "我们的八十年代",
        "year": "2025",
        "region": "中国大陆",
        "type": "TV Series",
        "genre": "年代家庭",
        "tags": [
            "怀旧",
            "邻里",
            "知青返城",
            "温情"
        ],
        "oneLine": "八十年代初的工厂大院,四个知青返城后挤在一间宿舍里,为了一个喇叭裤名额笑泪齐飞。",
        "url": "./movies/movie-1284.html",
        "image": "./84.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "试播",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情/悬疑",
        "tags": [
            "职场",
            "媒体",
            "反转",
            "人性"
        ],
        "oneLine": "一档深夜新闻试播节目意外拍到凶杀案线索,主持人与制作人必须在直播中与真凶博弈。",
        "url": "./movies/movie-1285.html",
        "image": "./85.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "阳光与混凝土",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,家庭",
        "tags": [
            "留守儿童",
            "乡村",
            "城建",
            "亲情",
            "迁徙"
        ],
        "oneLine": "父亲进城浇筑摩天大楼,儿子在老家用混凝土浇筑了一个“爸爸”。",
        "url": "./movies/movie-1286.html",
        "image": "./86.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "钢铁新娘",
        "year": "2024",
        "region": "日本",
        "type": "动画剧集",
        "genre": "科幻/喜剧/爱情",
        "tags": [
            "机甲",
            "同居",
            "傲娇",
            "废柴男主",
            "战斗女仆"
        ],
        "oneLine": "废柴高中生收到一件“人形机甲包裹”,自称是他未婚妻的钢铁少女,每天把他揍得鼻青脸肿去上学。",
        "url": "./movies/movie-1287.html",
        "image": "./87.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "食人族时代",
        "year": "2027",
        "region": "巴西",
        "type": "电视剧 (8集)",
        "genre": "科幻/恐怖/社会讽刺",
        "tags": [
            "反乌托邦",
            "资本寓言",
            "人体加工"
        ],
        "oneLine": "未来的超级城市里,穷人每月可以自愿出售自己的一块肉给富人餐厅,换取消债。",
        "url": "./movies/movie-1288.html",
        "image": "./88.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "伊萨卡",
        "year": "2024",
        "region": "希腊/美国",
        "type": "电影",
        "genre": "科幻/冒险",
        "tags": [
            "太空歌剧",
            "荷马史诗",
            "AI",
            "寻父"
        ],
        "oneLine": "遥远的未来,机械之神奥德修斯在外星建立独裁帝国,他的儿子忒勒马科斯驾驶飞船踏上了穿越黑洞的寻父之旅。",
        "url": "./movies/movie-1289.html",
        "image": "./89.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "阳光之门",
        "year": "2023",
        "region": "埃及",
        "type": "电影",
        "genre": "剧情,战争",
        "tags": [
            "中东",
            "难民",
            "父子",
            "希望"
        ],
        "oneLine": "父亲花了一辈子积蓄,只为把儿子送上偷渡去欧洲的船,而那艘船的名字叫“阳光之门”。",
        "url": "./movies/movie-1290.html",
        "image": "./90.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "神怒之日",
        "year": "2018",
        "region": "日本",
        "type": "电影",
        "genre": "动作/奇幻/恐怖",
        "tags": [
            "末日",
            "宗教",
            "暴力美学"
        ],
        "oneLine": "东京沦为神罚之地,唯有犯下七宗罪的人才能存活。",
        "url": "./movies/movie-1291.html",
        "image": "./91.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "秘密的孩子",
        "year": "2019",
        "region": "比利时",
        "type": "电影",
        "genre": "悬疑/剧情/伦理",
        "tags": [
            "代孕",
            "身份危机",
            "伦理困境",
            "寻亲",
            "反转"
        ],
        "oneLine": "一对丁克夫妇的“代孕儿子”十八年后找上门,但夫妻俩坚称从未有过孩子,DNA报告却显示99.99%匹配。",
        "url": "./movies/movie-1292.html",
        "image": "./92.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "家在南三条",
        "year": "2022",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "剧情/都市/商战",
        "tags": [
            "小商品市场",
            "南北方商战",
            "草根逆袭"
        ],
        "oneLine": "温州商人占领了石家庄南三条,最后被一个卖袜子的河北大爷赶了出去。",
        "url": "./movies/movie-1293.html",
        "image": "./93.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "星际传奇",
        "year": "2000",
        "region": "美国",
        "type": "电影",
        "genre": "科幻,动作,惊悚",
        "tags": [
            "太空监狱",
            "反英雄",
            "异星生物",
            "怕光"
        ],
        "oneLine": "一个穷凶极恶的重刑犯,必须在黑暗降临之前,带领所有人逃离全是嗜血怪物的星球。",
        "url": "./movies/movie-1294.html",
        "image": "./94.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "女皇的对手",
        "year": "2025",
        "region": "英国",
        "type": "剧集",
        "genre": "历史/宫斗",
        "tags": [
            "权谋",
            "女帝对决",
            "政治婚姻"
        ],
        "oneLine": "维多利亚女皇的寝宫里出现一位年轻侍女,她每个夜晚都能准确预言次日朝堂上发生的每一场政变。",
        "url": "./movies/movie-1295.html",
        "image": "./95.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "黑街霸王",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "犯罪剧情",
        "tags": [
            "夜市",
            "黑帮",
            "父子",
            "底层"
        ],
        "oneLine": "台北夜市摊贩为对抗收保护费的黑帮,推举最怂的鱼贩当“霸王”。",
        "url": "./movies/movie-1296.html",
        "image": "./96.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "即使世界终结",
        "year": "2026",
        "region": "日本",
        "type": "电影",
        "genre": "科幻,灾难,剧情",
        "tags": [
            "世界末日",
            "孤独幸存",
            "最后七日",
            "人生回忆",
            "哲学独白"
        ],
        "oneLine": "一颗直径五十公里的小行星即将撞击地球,最后七天里,一个普通上班族开始认真审视自己从未真正活过的一生。",
        "url": "./movies/movie-1297.html",
        "image": "./97.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "玉女痴郎",
        "year": "1969",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情、喜剧、歌舞",
        "tags": [
            "邵氏",
            "怀旧",
            "错摸",
            "欢喜冤家"
        ],
        "oneLine": "一位不食人间烟火的富家千金,爱上了父亲公司里一位才华横溢的穷会计,但她不知道,这位“痴郎”其实是来复仇的。",
        "url": "./movies/movie-1298.html",
        "image": "./98.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "狼皮之下",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑/犯罪",
        "tags": [
            "东北",
            "人性",
            "卧底",
            "暴风雪",
            "黑色电影"
        ],
        "oneLine": "为追查失踪战友,一名边防警察披上狼皮潜入盗猎团伙,却在暴风雪中逐渐分不清人狼之别。",
        "url": "./movies/movie-1299.html",
        "image": "./99.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "传话人",
        "year": "2021",
        "region": "中国",
        "type": "剧集",
        "genre": "悬疑/犯罪/奇幻",
        "tags": [
            "通灵",
            "推理",
            "单元剧",
            "都市传说",
            "灵魂契约"
        ],
        "oneLine": "一个能听到死者最后遗言的快递员,白天送包裹,晚上替亡魂传话,直到某天他发现自己的名字出现在了下一位死者的名单上。",
        "url": "./movies/movie-1300.html",
        "image": "./100.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "快乐的阿南",
        "year": "2023",
        "region": "印度",
        "type": "电影",
        "genre": "剧情/励志",
        "tags": [
            "普通人",
            "乐观",
            "小人物",
            "逆袭"
        ],
        "oneLine": "一个干啥啥不成的乐观小伙,用他近乎愚蠢的快乐哲学,意外改变了整条贫民窟的命运。",
        "url": "./movies/movie-1301.html",
        "image": "./101.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "出租屋的女人",
        "year": "2018",
        "region": "中国香港",
        "type": "电影",
        "genre": "惊悚/悬疑/心理",
        "tags": [
            "出租屋",
            "偷窥",
            "精神分裂",
            "反转",
            "烧脑"
        ],
        "oneLine": "阿良搬进廉价出租屋,每天偷看对面女郎的一举一动,直到他发现,那个女郎的房间里还有另一个自己。",
        "url": "./movies/movie-1302.html",
        "image": "./102.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "交换记忆",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "科幻,悬疑,爱情",
        "tags": [
            "记忆移植",
            "伦理困境",
            "身份认同",
            "反转",
            "催泪"
        ],
        "oneLine": "为了拯救患有绝症的未婚妻,一位科学家将自己的全部记忆植入她的脑中,她却变成了“他”。",
        "url": "./movies/movie-1303.html",
        "image": "./103.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "王子富愁记",
        "year": "2018",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧/都市/爱情",
        "tags": [
            "破产",
            "富二代",
            "合租",
            "沙雕"
        ],
        "oneLine": "亿万富豪之子一夜破产,被迫与四个奇葩租客挤在老破小,却发现穷日子比富生活快乐一百倍。",
        "url": "./movies/movie-1304.html",
        "image": "./104.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "眨眼遇见夏天",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "剧情,青春,家庭",
        "tags": [
            "夏日",
            "治愈",
            "亲情",
            "乡村",
            "成长"
        ],
        "oneLine": "因故失明的叛逆少女被送到乡下外婆家,在那个没有灯光的夏天里,她第一次“看见”了声音和爱。",
        "url": "./movies/movie-1305.html",
        "image": "./105.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "鬼讯号",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "悬疑/惊悚/科幻",
        "tags": [
            "电磁幽灵",
            "超自然电台",
            "亡者留言"
        ],
        "oneLine": "一个业余无线电爱好者,收到了一段来自已故女儿的电码:“别关电台,它在看我。",
        "url": "./movies/movie-1306.html",
        "image": "./106.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "百合的故事",
        "year": "2024",
        "region": "中国大陆",
        "type": "网络剧",
        "genre": "爱情,剧情,社会",
        "tags": [
            "女性题材",
            "情感细腻",
            "现实主义",
            "自我认同",
            "治愈"
        ],
        "oneLine": "小镇花店老板百合,意外与高中时期暗恋过的女生重逢,对方却即将走进异性婚姻。",
        "url": "./movies/movie-1307.html",
        "image": "./107.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "芭蕾少女梦",
        "year": "2024",
        "region": "韩国",
        "type": "剧集",
        "genre": "剧情/运动/校园",
        "tags": [
            "芭蕾",
            "竞争",
            "师徒",
            "身体畸形恐惧",
            "成名代价"
        ],
        "oneLine": "一个患有罕见骨骼疾病的少女被顶尖芭蕾学院录取,代价是每天都要吃下一种让她痛不欲生的“生长抑制药”。",
        "url": "./movies/movie-1308.html",
        "image": "./108.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "仙境绑架案",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "犯罪/悬疑/动作",
        "tags": [
            "虚拟现实",
            "绑架",
            "富二代",
            "密室逃脱"
        ],
        "oneLine": "富豪之子在虚拟游戏“仙境”中被绑架,绑匪要求全世界的玩家帮他通关才能赎人。",
        "url": "./movies/movie-1309.html",
        "image": "./109.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "诱惑游戏第二季",
        "year": "2024",
        "region": "日本",
        "type": "剧集",
        "genre": "悬疑,惊悚,校园",
        "tags": [
            "心理战",
            "死亡游戏",
            "人性考验"
        ],
        "oneLine": "第一季的赢家成了新的发牌人,她用更残酷的规则把老玩家们请回了游戏。",
        "url": "./movies/movie-1310.html",
        "image": "./110.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "凝弑",
        "year": "2024",
        "region": "泰国",
        "type": "电影",
        "genre": "恐怖,惊悚",
        "tags": [
            "邪术",
            "复仇",
            "诅咒",
            "宗教"
        ],
        "oneLine": "一幅古画流落拍卖行,每个直视画中人物眼睛的人,都离奇惨死。",
        "url": "./movies/movie-1311.html",
        "image": "./111.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "夺命鸳殃",
        "year": "1996",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧,犯罪",
        "tags": [
            "杀手",
            "鸳鸯大盗",
            "乌龙",
            "港式幽默",
            "黑帮"
        ],
        "oneLine": "一对情侣为了还债假扮“雌雄大盗”,却意外被全港黑帮误认为是传说中的金牌杀手“神雕侠侣”。",
        "url": "./movies/movie-1312.html",
        "image": "./112.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "一尽到底",
        "year": "2027",
        "region": "中国香港",
        "type": "电影",
        "genre": "悬疑,犯罪,动作",
        "tags": [
            "密室",
            "搏命",
            "社团"
        ],
        "oneLine": "帮派谈判变屠杀,幸存者发现身边的兄弟早已不是本人。",
        "url": "./movies/movie-1313.html",
        "image": "./113.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "宝可梦遥远的蓝天",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "动画/冒险/奇幻",
        "tags": [
            "童年",
            "友情",
            "成长",
            "催泪"
        ],
        "oneLine": "已经成为大人的小智在因缘际会下回到真新镇,却看到了一个神秘男孩和一只从未见过的黑色皮卡丘。",
        "url": "./movies/movie-1314.html",
        "image": "./114.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "老病号",
        "year": "2020",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "剧情/家庭/医疗",
        "tags": [
            "慢性病",
            "医患关系",
            "老年生活",
            "温情"
        ],
        "oneLine": "一个常年住院的“老病号”把病房当成了家,新来的年轻医生却想方设法要把他“赶”出去。",
        "url": "./movies/movie-1315.html",
        "image": "./115.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "无耻之徒2024",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "剧情,喜剧,家庭",
        "tags": [
            "重启版",
            "底层家庭",
            "黑色幽默",
            "社会问题"
        ],
        "oneLine": "二十年后的芝加哥南区,加拉格家族的新一代继续用各种“合法非法”手段,在这个吃人的社会里活下去。",
        "url": "./movies/movie-1316.html",
        "image": "./116.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "金牌得主",
        "year": "2026",
        "region": "美国",
        "type": "剧集",
        "genre": "运动,剧情,励志",
        "tags": [
            "游泳",
            "潜规则",
            "师徒"
        ],
        "oneLine": "为了给过世的父亲讨回公道,一名退役游泳运动员伪装成清洁工潜入国家训练中心,调查当年的兴奋剂丑闻。",
        "url": "./movies/movie-1317.html",
        "image": "./117.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "奔腾年代",
        "year": "2003",
        "region": "美国",
        "type": "电影",
        "genre": "剧情,历史",
        "tags": [
            "赛马",
            "大萧条",
            "励志"
        ],
        "oneLine": "大萧条时期,一匹瘦小的马、一个沉默的骑手和一个偏执的商人,如何成为全美国的希望。",
        "url": "./movies/movie-1318.html",
        "image": "./118.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "特写",
        "year": "2022",
        "region": "伊朗",
        "type": "电影",
        "genre": "剧情/纪录",
        "tags": [
            "身份冒用",
            "电影狂热",
            "真实改编"
        ],
        "oneLine": "一个失业影迷假冒著名导演,混入富人家中拍“家庭电影”,直到真正的导演出现在门口。",
        "url": "./movies/movie-1319.html",
        "image": "./119.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "宇宙终点之旅",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "科幻,悬疑",
        "tags": [
            "硬科幻",
            "时间膨胀",
            "宇宙恐怖"
        ],
        "oneLine": "光速飞船船员每次冬眠醒来,都会发现一名同伴被钉在观测窗上。",
        "url": "./movies/movie-1320.html",
        "image": "./120.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "电影魔术师:奥逊·威尔斯",
        "year": "2014",
        "region": "美国",
        "type": "电影",
        "genre": "纪录片",
        "tags": [
            "奥逊·威尔斯",
            "公民凯恩",
            "天才",
            "好莱坞黑名单",
            "艺术抗争"
        ],
        "oneLine": "纪录片揭示了天才导演奥逊·威尔斯如何凭借一部《公民凯恩》改写电影史,又如何因自负被好莱坞放逐的一生。",
        "url": "./movies/movie-1321.html",
        "image": "./121.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "空军敢死队",
        "year": "1958",
        "region": "美国",
        "type": "电影",
        "genre": "战争、动作",
        "tags": [
            "二战",
            "飞行员",
            "轰炸任务",
            "黑白片"
        ],
        "oneLine": "一群被军法判处死刑的空军罪犯,被秘密编成敢死队,执行一次有去无回的轰炸任务。",
        "url": "./movies/movie-1322.html",
        "image": "./122.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "自然界的媒人",
        "year": "2025",
        "region": "英国",
        "type": "剧集",
        "genre": "纪录片/喜剧",
        "tags": [
            "动物行为",
            "红娘",
            "自然科普",
            "幽默解说",
            "治愈"
        ],
        "oneLine": "一位社恐动物学家为各种濒危动物安排“相亲”,结果比人类婚恋节目还狗血。",
        "url": "./movies/movie-1323.html",
        "image": "./123.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "紫禁秘录",
        "year": "2024",
        "region": "中国大陆",
        "type": "网络剧",
        "genre": "悬疑/古装/奇幻",
        "tags": [
            "故宫",
            "志怪",
            "探案"
        ],
        "oneLine": "清朝末年,一名女画师能画出人心的阴暗面,她被秘密召入紫禁城,为接连死亡的太监画像破案。",
        "url": "./movies/movie-1324.html",
        "image": "./124.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "巴黎圣罗兰",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "剧情/传记",
        "tags": [
            "时尚",
            "天才陨落",
            "70年代"
        ],
        "oneLine": "1975年,圣罗兰在事业巅峰期陷入创作黑洞,一次巴黎午夜狂欢让他重新找到了恐惧与欲望的边界。",
        "url": "./movies/movie-1325.html",
        "image": "./125.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "残剑震江湖",
        "year": "2004",
        "region": "中国大陆",
        "type": "电影",
        "genre": "武侠/动作",
        "tags": [
            "断臂",
            "剑法",
            "复仇",
            "江湖",
            "兄弟情"
        ],
        "oneLine": "被师兄弟联手斩断右臂的剑客,用三年的时间练成“左手残剑”,只为在武林大会上说出一个真相。",
        "url": "./movies/movie-1326.html",
        "image": "./126.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "列奥纳多",
        "year": "2025",
        "region": "意大利/英国",
        "type": "电视剧",
        "genre": "传记,历史,悬疑",
        "tags": [
            "达芬奇",
            "文艺复兴",
            "双线叙事",
            "天才",
            "阴谋"
        ],
        "oneLine": "达芬奇临终前将画作全部涂黑,女学徒为修复它们,发现每幅画下都藏着一桩未破的谋杀案。",
        "url": "./movies/movie-1327.html",
        "image": "./127.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "水浒之智取生辰纲",
        "year": "2028",
        "region": "中国大陆",
        "type": "电影",
        "genre": "古装,动作,犯罪",
        "tags": [
            "名著改编",
            "劫富济贫",
            "计谋"
        ],
        "oneLine": "晁盖与吴用集结七位好汉,欲劫取贪官梁中书献给岳父蔡京的十万贯生辰纲,一场古代版的“高智商团伙犯罪”拉开帷幕。",
        "url": "./movies/movie-1328.html",
        "image": "./128.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "格尔达",
        "year": "2024",
        "region": "丹麦/瑞典",
        "type": "电影",
        "genre": "剧情、奇幻、心理",
        "tags": [
            "北欧冷感",
            "精神分裂",
            "雪地意象",
            "母女关系"
        ],
        "oneLine": "患有精神分裂症的女孩格尔达,在暴风雪之夜听到已故母亲从冰层下传来的呼唤,她必须凿开冰面,让母亲“闭嘴”。",
        "url": "./movies/movie-1329.html",
        "image": "./129.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "百分百感觉",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情,喜剧,科幻",
        "tags": [
            "感官同步",
            "试爱体验",
            "都市童话"
        ],
        "oneLine": "一款“情感共享”APP让用户能同步暗恋对象的五感,社恐女孩成为内侧用户后,发现暗恋的学长浑身都是痛觉。",
        "url": "./movies/movie-1330.html",
        "image": "./130.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "碧昂丝:天后崛起",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "传记/音乐",
        "tags": [
            "音乐传奇",
            "女性力量",
            "励志"
        ],
        "oneLine": "从休斯顿合唱团的小女孩到全球流行天后,揭秘碧昂丝每次跌倒后如何浴火重生的幕后故事。",
        "url": "./movies/movie-1331.html",
        "image": "./131.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "如歌的岁月",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "家庭,年代,剧情",
        "tags": [
            "知青",
            "改革开放",
            "三代人",
            "岁月史诗"
        ],
        "oneLine": "一把尘封的手风琴,串联起一个家庭从知青下乡到新时代的五十年悲欢离合。",
        "url": "./movies/movie-1332.html",
        "image": "./132.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "志气",
        "year": "2013",
        "region": "中国台湾",
        "type": "电影",
        "genre": "运动,励志,青春",
        "tags": [
            "拔河",
            "女子体育",
            "真实改编"
        ],
        "oneLine": "一群被退队的拔河少女,在垃圾场旁的水泥地上练出世界冠军。",
        "url": "./movies/movie-1333.html",
        "image": "./133.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "戴洛奇小镇第一季",
        "year": "2024",
        "region": "澳大利亚",
        "type": "剧集",
        "genre": "悬疑/犯罪/喜剧",
        "tags": [
            "塔斯马尼亚",
            "连环谋杀",
            "女性警探"
        ],
        "oneLine": "塔斯马尼亚风景如画的小镇惊现裸体男尸,两位女警探发现,全镇的女人似乎都在共享同一个秘密。",
        "url": "./movies/movie-1334.html",
        "image": "./134.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "杂技皇后夏菊花",
        "year": "2005",
        "region": "中国大陆",
        "type": "电影",
        "genre": "传记、剧情",
        "tags": [
            "杂技",
            "女性力量",
            "民国",
            "坚韧",
            "艺术人生"
        ],
        "oneLine": "从被卖作童养媳的苦命女,到登上国际舞台的“顶碗皇后”,她用柔弱的身体顶起了一个时代。",
        "url": "./movies/movie-1335.html",
        "image": "./135.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "天鹅公主",
        "year": "2022",
        "region": "俄罗斯",
        "type": "动画电影",
        "genre": "奇幻/音乐/爱情",
        "tags": [
            "芭蕾",
            "诅咒",
            "王子"
        ],
        "oneLine": "被诅咒的天鹅公主只有得到王子的真爱之吻才能恢复人形,但王子却失忆了。",
        "url": "./movies/movie-1336.html",
        "image": "./136.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "国王与王后",
        "year": "2004",
        "region": "法国",
        "type": "电影",
        "genre": "剧情,喜剧,爱情",
        "tags": [
            "阿诺·德斯普里钦",
            "哲学",
            "婚姻寓言"
        ],
        "oneLine": "一对离婚多年的夫妻,一个要疯了,一个要死了,却在同一家医院重逢。",
        "url": "./movies/movie-1337.html",
        "image": "./137.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "舰在亚丁湾",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作/战争",
        "tags": [
            "海军护航",
            "反海盗",
            "国际协作"
        ],
        "oneLine": "中国海军护航编队在亚丁湾遭遇伪装成渔民的恐怖组织“狼群”。",
        "url": "./movies/movie-1338.html",
        "image": "./138.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "儿女情更长",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "家庭/剧情",
        "tags": [
            "养老",
            "三代同堂",
            "都市",
            "情感",
            "现实题材"
        ],
        "oneLine": "母亲突然失智后,散落在各地的六个儿女被迫回家,发现谁都活成了当年最讨厌的样子。",
        "url": "./movies/movie-1339.html",
        "image": "./139.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "下一站,别离",
        "year": "2025",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "都市,情感",
        "tags": [
            "婚姻危机",
            "中年失意",
            "治愈",
            "人生重启"
        ],
        "oneLine": "五十岁的她瞒着家人报名了老年大学,在那里遇见了三十年前的老同学,以及全新的人生。",
        "url": "./movies/movie-1340.html",
        "image": "./140.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "面包,巴士和第二次初恋",
        "year": "2023",
        "region": "日本",
        "type": "电影",
        "genre": "爱情,剧情",
        "tags": [
            "公路",
            "重逢",
            "治愈"
        ],
        "oneLine": "一名失意的面包师在深夜长途巴士上偶遇了高中时期的初恋,两人决定一起进行一场没有目的地的逃亡之旅。",
        "url": "./movies/movie-1341.html",
        "image": "./141.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "幸存的生命(理论与实践)",
        "year": "2025",
        "region": "德国",
        "type": "电影",
        "genre": "哲学剧情",
        "tags": [
            "存在主义",
            "实验叙事",
            "战后创伤",
            "虚实结合"
        ],
        "oneLine": "一位创伤后失忆的哲学家,通过一本自己写的理论著作来反推“我到底经历了什么”。",
        "url": "./movies/movie-1342.html",
        "image": "./142.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "键盘侠",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "惊悚,犯罪",
        "tags": [
            "网络暴力",
            "复仇",
            "黑客",
            "社会讽刺"
        ],
        "oneLine": "在网络上造谣零成本?一名女高中生因此跳楼自杀后,参与网暴的七名键盘侠,开始按照“评论点赞数”的排名依次离奇失踪。",
        "url": "./movies/movie-1343.html",
        "image": "./143.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "风云争霸",
        "year": "2001",
        "region": "中国香港/中国台湾",
        "type": "电视剧",
        "genre": "武侠,古装,动作",
        "tags": [
            "江湖",
            "武林盟主",
            "背叛",
            "宿命"
        ],
        "oneLine": "江湖二十年无盟主,当两把神兵同时现世,整个武林都成为了权力游戏的棋子。",
        "url": "./movies/movie-1344.html",
        "image": "./144.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "任务:外太空",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "科幻/冒险",
        "tags": [
            "太空竞赛",
            "AI叛乱",
            "硬科幻"
        ],
        "oneLine": "2045年,人类发现月球背面有外星信标,各国重启太空竞赛,但宇航员在途中陆续发疯。",
        "url": "./movies/movie-1345.html",
        "image": "./145.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "大嘴巴第二季",
        "year": "2018",
        "region": "美国",
        "type": "剧集",
        "genre": "喜剧/动画/青春",
        "tags": [
            "荷尔蒙",
            "青春期",
            "黄暴",
            "神经病"
        ],
        "oneLine": "青春期的小恶魔“荷尔蒙怪”带着新朋友“焦虑怪”来折磨主角们了。",
        "url": "./movies/movie-1346.html",
        "image": "./146.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "三个月",
        "year": "2022",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧,剧情",
        "tags": [
            "青春",
            "艾滋病",
            "恐艾",
            "成长"
        ],
        "oneLine": "一个高中毕业的男孩在等待艾滋病检测结果的三个月里,遇到了同样在等待结果的男孩,并展开了荒诞的倒数恋爱。",
        "url": "./movies/movie-1347.html",
        "image": "./147.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "脑残粉丝",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "惊悚,剧情",
        "tags": [
            "粉丝",
            "心理",
            "社交网络",
            "偷窥",
            "反转"
        ],
        "oneLine": "一个患有脑瘤的十八线女明星的狂热粉,为了让她记住自己的名字,决定一个一个“清理”她身边的人。",
        "url": "./movies/movie-1348.html",
        "image": "./148.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "横渡大西洋的划船",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "冒险传记",
        "tags": [
            "极限挑战",
            "女性力量",
            "海洋求生"
        ],
        "oneLine": "四十三岁退役女消防员,独自用一艘二手划艇横渡大西洋。",
        "url": "./movies/movie-1349.html",
        "image": "./149.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "爱你不是两三天",
        "year": "2023",
        "region": "中国内地",
        "type": "电视剧",
        "genre": "爱情/剧情",
        "tags": [
            "治愈",
            "成长",
            "暗恋",
            "甜虐"
        ],
        "oneLine": "从高中暗恋到职场重逢,林晚和江辰用了十年才读懂彼此的“退让”。",
        "url": "./movies/movie-1350.html",
        "image": "./150.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "时空救赎",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "科幻,悬疑,惊悚",
        "tags": [
            "时间循环",
            "平行宇宙",
            "拯救家人",
            "自我博弈"
        ],
        "oneLine": "妻子被杀后他意外获得时间跳跃能力,但每次回到过去改变细节,都会导致更大的灾难发生。",
        "url": "./movies/movie-1351.html",
        "image": "./1.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "站台",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/青春",
        "tags": [
            "小镇",
            "理想",
            "离别",
            "群像",
            "年代"
        ],
        "oneLine": "九十年代小镇客运站关闭那天,五个年轻人在这里告别了彼此和整个青春。",
        "url": "./movies/movie-1352.html",
        "image": "./2.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "零点出击粤语",
        "year": "1990",
        "region": "中国香港",
        "type": "剧集",
        "genre": "剧情/动作/犯罪",
        "tags": [
            "TVB",
            "警匪",
            "卧底",
            "双雄",
            "兄弟情"
        ],
        "oneLine": "午夜零点,是两个发小的约定接头时间——但一个是警察,一个已是黑帮新星,兄弟情在刀尖上跳舞。",
        "url": "./movies/movie-1353.html",
        "image": "./3.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "小鬼警察",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧,动作,家庭",
        "tags": [
            "变身",
            "乌龙警探",
            "反差萌",
            "合家欢",
            "卧底"
        ],
        "oneLine": "一名铁血硬汉警探意外被黑科技变成了5岁小孩,为了阻止恐怖袭击,他不得不混进幼儿园当卧底。",
        "url": "./movies/movie-1354.html",
        "image": "./4.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "法国再见",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "喜剧/剧情",
        "tags": [
            "移民",
            "身份认同",
            "公路电影",
            "父子和解"
        ],
        "oneLine": "一位阿尔及利亚裔老父亲执意要开灵车把亡妻送回巴黎,而儿子只想把母亲在法国火化。",
        "url": "./movies/movie-1355.html",
        "image": "./5.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "等待超人",
        "year": "2010",
        "region": "美国",
        "type": "电影",
        "genre": "剧情,家庭",
        "tags": [
            "教育",
            "底层",
            "奋斗",
            "抽签",
            "现实"
        ],
        "oneLine": "一个单亲母亲带着天才儿子,为了挤进一所好公立学校,连续抽签五年都失败了。",
        "url": "./movies/movie-1356.html",
        "image": "./6.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "青春纪录",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "校园,青春",
        "tags": [
            "高考",
            "叛逆",
            "乐队",
            "师生关系",
            "梦想"
        ],
        "oneLine": "重点高中年级第一的乖乖女,偷偷爱上了留级三年的摇滚乐队主唱,两人约定:考上大学就交往。",
        "url": "./movies/movie-1357.html",
        "image": "./7.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "为爱而生",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/爱情",
        "tags": [
            "绝症",
            "逆袭",
            "治愈",
            "人生意义"
        ],
        "oneLine": "被诊断仅剩三个月生命的颓废程序员,为给暗恋女孩圆梦意外解锁了改写人生的代码。",
        "url": "./movies/movie-1358.html",
        "image": "./8.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "奋勇向前",
        "year": "2020",
        "region": "美国",
        "type": "电影",
        "genre": "传记,运动,剧情",
        "tags": [
            "橄榄球",
            "黑人平权",
            "真实故事",
            "励志",
            "教练"
        ],
        "oneLine": "真实故事改编,一位白人教练在种族隔离最严重的南方,带领一支全黑人高中橄榄球队走向胜利,更走向尊严。",
        "url": "./movies/movie-1359.html",
        "image": "./9.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "破胆三次5",
        "year": "1994",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖/科幻",
        "tags": [
            "B级片",
            "人体变异",
            "cult",
            "血腥"
        ],
        "oneLine": "军方秘密实验让一群死刑犯获得变身为熊形怪物的能力,但实验失控,整座监狱变成了狩猎场。",
        "url": "./movies/movie-1360.html",
        "image": "./10.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "黑金地的女人",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/家庭/社会",
        "tags": [
            "矿区",
            "女性",
            "生存",
            "坚韧"
        ],
        "oneLine": "山西煤矿区,三个留守矿工的妻子合伙开了一家面馆,却因矿难改变了命运。",
        "url": "./movies/movie-1361.html",
        "image": "./11.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "双侠",
        "year": "2026",
        "region": "中国香港",
        "type": "电影",
        "genre": "武侠/动作/悬疑",
        "tags": [
            "双向伪装",
            "刺客互换",
            "侠义悖论",
            "镜像对决"
        ],
        "oneLine": "两位从未见面的侠客在同一座城中分别行侠仗义,但每次出手都恰好抵消对方的“正义”。",
        "url": "./movies/movie-1362.html",
        "image": "./12.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "爱情只能持续三年",
        "year": "2019",
        "region": "意大利",
        "type": "电影",
        "genre": "爱情,剧情",
        "tags": [
            "时效性",
            "分手",
            "哲学浪漫"
        ],
        "oneLine": "生物学家提出“爱情保质期三年”理论后,所有情侣都在第三年纪念日准时分手,除了他和前女友。",
        "url": "./movies/movie-1363.html",
        "image": "./13.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "丧妖集聚",
        "year": "2023",
        "region": "中国香港",
        "type": "电影",
        "genre": "恐怖,动作",
        "tags": [
            "僵尸",
            "帮派斗争",
            "茅山术",
            "黑色幽默"
        ],
        "oneLine": "黑帮交易失误放出了一群沉睡的僵尸,两帮人马不得不和一位落魄道士联手求生。",
        "url": "./movies/movie-1364.html",
        "image": "./14.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "士兵突击",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "军旅,励志,剧情",
        "tags": [
            "特种兵",
            "逆袭",
            "兄弟情",
            "钢铁意志"
        ],
        "oneLine": "一个被全连队视为“拖油瓶”的新兵,用最笨的办法跑完了特种兵选拔的最后一公里。",
        "url": "./movies/movie-1365.html",
        "image": "./15.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "禁断动画18",
        "year": "2016",
        "region": "日本",
        "type": "电影",
        "genre": "恐怖,伪纪录片,惊悚",
        "tags": [
            "都市传说",
            "诅咒视频",
            "录像带",
            "第一人称",
            "日式恐怖"
        ],
        "oneLine": "一名综艺节目编导收到了匿名寄来的18盘录像带,每盘都记录了一段观看者离奇死亡的“禁断动画”。",
        "url": "./movies/movie-1366.html",
        "image": "./16.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "盲爱",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情,剧情",
        "tags": [
            "盲人",
            "骗局",
            "情感操控"
        ],
        "oneLine": "一位盲女以为自己遇到了真爱,直到她恢复视力的那天,才发现枕边人竟是将她致残的凶手。",
        "url": "./movies/movie-1367.html",
        "image": "./17.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "20 30 40",
        "year": "2004",
        "region": "台湾",
        "type": "电影",
        "genre": "剧情,爱情,女性",
        "tags": [
            "女性成长",
            "都市情感",
            "人生阶段",
            "独立",
            "群像"
        ],
        "oneLine": "三个不同年龄段的女性在同一个机场交汇,各自面临着感情与人生的十字路口。",
        "url": "./movies/movie-1368.html",
        "image": "./18.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "安东妮雅与珍",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "剧情/女性/友情",
        "tags": [
            "养老院",
            "回忆录",
            "跨时代友谊",
            "生命教育"
        ],
        "oneLine": "养老院里,一位失忆的老钢琴家与一个叛逆少女,用音乐修复了彼此破碎的人生拼图。",
        "url": "./movies/movie-1369.html",
        "image": "./19.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "完美结局",
        "year": "2025",
        "region": "西班牙",
        "type": "电影",
        "genre": "悬疑/惊悚",
        "tags": [
            "高概念",
            "反转",
            "伦理",
            "梦境"
        ],
        "oneLine": "一家公司可以定制“完美结局”——让客户在最美梦中安详死去,但没有人知道,梦里的最后一幕全是真实谋杀。",
        "url": "./movies/movie-1370.html",
        "image": "./20.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "梅花",
        "year": "2025",
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "剧情,历史,家庭",
        "tags": [
            "眷村",
            "白色恐怖",
            "刺绣",
            "女性"
        ],
        "oneLine": "1949年随军来台的绣娘梅姑,用一块红布秘密记录下眷村里失踪者的名字,一藏就是四十年。",
        "url": "./movies/movie-1371.html",
        "image": "./21.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "与你的暖暖时光",
        "year": "2020",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "爱情/青春",
        "tags": [
            "校园",
            "暗恋",
            "甜宠",
            "治愈"
        ],
        "oneLine": "高冷学霸和粗线条学渣被分到同桌,从互相嫌弃到约定考入同一所大学。",
        "url": "./movies/movie-1372.html",
        "image": "./22.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "舒莎公主与捣乱剧团",
        "year": "2022",
        "region": "英国",
        "type": "剧集 动画/儿童",
        "genre": "动画/儿童",
        "tags": [
            "公主",
            "戏剧",
            "冒险",
            "幽默"
        ],
        "oneLine": "不想联姻的公主要女扮男装加入流浪剧团,才发现剧团成员都是各国逃来的王子公主。",
        "url": "./movies/movie-1373.html",
        "image": "./23.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "花花别墅",
        "year": "2026",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧、悬疑、都市、群像",
        "tags": [
            "剧本杀式追剧",
            "全员恶人",
            "摩登家庭",
            "多重反转"
        ],
        "oneLine": "一栋别墅里住着六户貌合神离的富豪,某天他们共同的情人被杀,每个人都有完美的不在场证明。",
        "url": "./movies/movie-1374.html",
        "image": "./24.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "功夫传人之龙拳小子",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作,喜剧",
        "tags": [
            "武术",
            "少年",
            "校园",
            "搞笑"
        ],
        "oneLine": "一个自称龙拳第38代传人的小学生在全校大会上对着校长喊:“有种你下来,我们单挑。",
        "url": "./movies/movie-1375.html",
        "image": "./25.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "绿箭侠第二季",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "动作,冒险,犯罪",
        "tags": [
            "超级英雄",
            "炼狱岛回忆",
            "星城危机"
        ],
        "oneLine": "星城遭遇生化武器袭击,绿箭侠不得不面对从炼狱岛带回来的、更加强大的黑暗过去。",
        "url": "./movies/movie-1376.html",
        "image": "./26.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "神秘之队",
        "year": "2026",
        "region": "日本",
        "type": "剧集",
        "genre": "悬疑/体育",
        "tags": [
            "足球",
            "集体失踪",
            "超自然"
        ],
        "oneLine": "一支高中足球队在决赛前夜全员失踪,留下的只有一盒录像带。",
        "url": "./movies/movie-1377.html",
        "image": "./27.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "德古拉之夜",
        "year": "2024",
        "region": "罗马尼亚/英国",
        "type": "电影",
        "genre": "恐怖/历史",
        "tags": [
            "伪纪录片",
            "吸血鬼起源",
            "东欧",
            "民俗恐怖"
        ],
        "oneLine": "一支纪录片团队进入罗马尼亚深山,找到了德古拉原型弗拉德三世的真实坟墓,但他们不该在夜里打开它。",
        "url": "./movies/movie-1378.html",
        "image": "./28.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "三十功名尘与土",
        "year": "2024",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "剧情历史",
        "tags": [
            "年代",
            "怀旧",
            "知识分子",
            "改革开放"
        ],
        "oneLine": "恢复高考后的第一批大学生,在时代巨变中如何守护理想,又如何在尘埃中寻找自我。",
        "url": "./movies/movie-1379.html",
        "image": "./29.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "欲望都市第六季",
        "year": "2004",
        "region": "美国",
        "type": "电视剧",
        "genre": "爱情、时尚、剧情",
        "tags": [
            "都市女性",
            "情感",
            "时尚穿搭",
            "闺蜜"
        ],
        "oneLine": "凯莉终于等到了大先生的“我娶你”,但她在戴上戒指的前一秒,想起了那个穿苏格兰裙的男人。",
        "url": "./movies/movie-1380.html",
        "image": "./30.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "风尘豪侠",
        "year": "1985",
        "region": "中国香港",
        "type": "电视剧",
        "genre": "武侠,古装",
        "tags": [
            "民国",
            "军阀",
            "复仇",
            "兄弟情",
            "黄元申"
        ],
        "oneLine": "民国初年,一个落魄秀才为报灭门之仇,被迫踏入江湖,在阴谋与侠义中成长为一代豪侠。",
        "url": "./movies/movie-1381.html",
        "image": "./31.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "奇袭兵团",
        "year": "2025",
        "region": "美国/英国",
        "type": "电影",
        "genre": "战争/动作",
        "tags": [
            "二战",
            "特种作战",
            "真实事件改编",
            "小队作战"
        ],
        "oneLine": "1944年诺曼底登陆前夜,一支由画家、会计、魔术师和逃兵组成的十人小队被空投到敌后,任务是让整个德军第六集团军“自己打自己”。",
        "url": "./movies/movie-1382.html",
        "image": "./32.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "与凤行",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装,奇幻,爱情",
        "tags": [
            "仙侠",
            "女强",
            "虐恋"
        ],
        "oneLine": "魔界女王爷为退婚变作麻雀,意外被落难凤凰捡到,开启啼笑皆非的互坑之旅。",
        "url": "./movies/movie-1383.html",
        "image": "./33.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "第12届中国电影华表奖",
        "year": "2025",
        "region": "中国大陆",
        "type": "综艺/特别节目",
        "genre": "颁奖礼,纪实,行业",
        "tags": [
            "颁奖典礼",
            "幕后",
            "行业生态",
            "红毯",
            "内幕"
        ],
        "oneLine": "一部关于“颁奖礼”的伪纪录片,记录了一届不存在的华表奖从筹备到崩塌的全过程。",
        "url": "./movies/movie-1384.html",
        "image": "./34.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "心之潜蚀",
        "year": "2023",
        "region": "日本",
        "type": "电影",
        "genre": "剧情/爱情/心理",
        "tags": [
            "婚姻关系",
            "情感暴力",
            "PUA",
            "自我觉醒"
        ],
        "oneLine": "结婚十周年的早晨,丈夫温柔地在妻子耳边说了一句“没有我,你活不下去”,妻子突然发现自己失忆了。",
        "url": "./movies/movie-1385.html",
        "image": "./35.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "练恋舞",
        "year": "2023",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情/青春/歌舞",
        "tags": [
            "舞蹈",
            "青春",
            "成长",
            "社团",
            "友情"
        ],
        "oneLine": "三个被退社的男生和一名神秘女教练,组成了全校最不被看好的国标舞社。",
        "url": "./movies/movie-1386.html",
        "image": "./36.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "凡人修仙传真人版",
        "year": "2027",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装/奇幻/冒险",
        "tags": [
            "修仙",
            "逆袭",
            "长篇小说改编",
            "凡人流"
        ],
        "oneLine": "一个毫无灵根的穷小子,凭借隐忍与智慧在修仙界步步为营,终成大道。",
        "url": "./movies/movie-1387.html",
        "image": "./37.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "本色兵",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作、战争、剧情",
        "tags": [
            "特种兵",
            "退役不褪色",
            "犯罪",
            "硬汉"
        ],
        "oneLine": "退役特种兵为救被拐女儿,独自捣毁了一个跨国人口贩卖集团。",
        "url": "./movies/movie-1388.html",
        "image": "./38.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "倩女失魂",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "恐怖,爱情",
        "tags": [
            "古典",
            "附身",
            "轮回",
            "虐恋"
        ],
        "oneLine": "一幅古画出逃,女鬼聂小倩附身现代少女,却发现自己要找的宁采臣已转世为驱魔师。",
        "url": "./movies/movie-1389.html",
        "image": "./39.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "喂帅哥!!",
        "year": "2024",
        "region": "日本",
        "type": "剧集",
        "genre": "家庭、喜剧、美食",
        "tags": [
            "美食",
            "毒舌老爸",
            "三姐妹",
            "催婚"
        ],
        "oneLine": "一个毒舌但爱女心切的老爸,在饭桌上用美食金句疯狂吐槽三个女儿的奇葩男友们。",
        "url": "./movies/movie-1390.html",
        "image": "./40.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "扭计丈夫蛊惑妻",
        "year": "1994",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧,爱情,家庭",
        "tags": [
            "斗智斗勇",
            "夫妻关系",
            "港式喜剧",
            "欢脱"
        ],
        "oneLine": "丈夫是专帮人出馊主意的“扭计专家”,却被自己“蛊惑”的妻子将了一军,上演连环互整。",
        "url": "./movies/movie-1391.html",
        "image": "./41.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "那天晚上",
        "year": "2022",
        "region": "中国香港",
        "type": "电影",
        "genre": "悬疑,犯罪,剧情",
        "tags": [
            "雨夜凶案",
            "记忆碎片",
            "全员撒谎",
            "罗生门",
            "社会派推理"
        ],
        "oneLine": "暴雨夜,一名女子从豪宅坠落。三个目击者给出三个版本,只有她昏迷中的记忆才是真相。",
        "url": "./movies/movie-1392.html",
        "image": "./42.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "探险活宝第三季",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "动画/冒险/喜剧",
        "tags": [
            "后末日",
            "脑洞",
            "友情"
        ],
        "oneLine": "第三季中,芬恩和杰克将穿越到蘑菇战争之前的平行时间线,遇到“正常版”的自己。",
        "url": "./movies/movie-1393.html",
        "image": "./43.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "编辑情人梦",
        "year": "2025",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "爱情,职场,剧情",
        "tags": [
            "出版业",
            "姐弟恋",
            "职场竞争",
            "文学梦想"
        ],
        "oneLine": "一名专写言情小说的资深编辑,被迫与网文大神“狼狗系”男作家合作,却撞破了他是自己网恋半年的“温柔小奶狗”。",
        "url": "./movies/movie-1394.html",
        "image": "./44.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "隐市奇闻录",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装,悬疑,奇幻",
        "tags": [
            "志怪",
            "民间传说",
            "单元剧",
            "中式恐怖"
        ],
        "oneLine": "一座只在子时出现的鬼市里,每一件奇物背后都藏着一桩被掩埋的冤案。",
        "url": "./movies/movie-1395.html",
        "image": "./45.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "法律与秩序第二十四季",
        "year": "2024",
        "region": "美国",
        "type": "电视剧",
        "genre": "剧情/犯罪/悬疑",
        "tags": [
            "警匪",
            "法庭剧",
            "纽约",
            "单元剧",
            "社会议题"
        ],
        "oneLine": "纽约警局第27分局迎来了一位患有自闭症的天才侦探,她用独特的视觉思维破解了连环“木偶师”案。",
        "url": "./movies/movie-1396.html",
        "image": "./46.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "守梦者",
        "year": "2025",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "悬疑,犯罪",
        "tags": [
            "反腐",
            "高智商",
            "烧脑"
        ],
        "oneLine": "一位年轻的心理侧写师加入了一个神秘的“梦境缉凶”小组,专门潜入贪腐官员的潜意识查找罪证。",
        "url": "./movies/movie-1397.html",
        "image": "./47.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "可能的任务",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "动作/冒险",
        "tags": [
            "特工",
            "中年危机",
            "退休",
            "家庭",
            "乌龙"
        ],
        "oneLine": "退役特工本想安度中年,却被邻居误认为私家侦探,接下一桩不可能的任务。",
        "url": "./movies/movie-1398.html",
        "image": "./48.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "的士飚花",
        "year": "2004",
        "region": "美国",
        "type": "电影",
        "genre": "动作,喜剧,犯罪",
        "tags": [
            "出租车",
            "女司机",
            "飙车",
            "抢劫",
            "纽约"
        ],
        "oneLine": "纽约最能侃的黑人女出租车司机,载了一位帅气的卧底警察,被迫在晚高峰的曼哈顿上演时速狂飙追悍匪。",
        "url": "./movies/movie-1399.html",
        "image": "./49.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "赛车情仇",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作、剧情、运动",
        "tags": [
            "地下赛车",
            "兄弟反目",
            "复仇",
            "极速"
        ],
        "oneLine": "十年前被哥哥设计入狱,十年后他在同一个赛道等着亲手赢回一切。",
        "url": "./movies/movie-1400.html",
        "image": "./50.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "登机门",
        "year": "2026",
        "region": "法国",
        "type": "电影",
        "genre": "惊悚、悬疑、犯罪",
        "tags": [
            "机场",
            "黑钱",
            "双面间谍",
            "女性复仇",
            "安检阴谋"
        ],
        "oneLine": "机场安检员在扫描仪中发现某外交官的行李箱里藏着一只人手,而那只手的指纹,属于她失踪十年的妹妹。",
        "url": "./movies/movie-1401.html",
        "image": "./51.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "27岁俱乐部",
        "year": "2025",
        "region": "美国",
        "type": "电视剧",
        "genre": "剧情/音乐/悬疑",
        "tags": [
            "摇滚",
            "诅咒",
            "天才",
            "邪教"
        ],
        "oneLine": "一个音乐天才在27岁生日前频遇怪事,她发现历史上所有27club成员的死都指向同一个神秘组织。",
        "url": "./movies/movie-1402.html",
        "image": "./52.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "拿着手术刀的猎人",
        "year": "2020",
        "region": "日本",
        "type": "剧集",
        "genre": "悬疑,医疗,犯罪",
        "tags": [
            "法医追凶",
            "双重身份",
            "暗黑英雄"
        ],
        "oneLine": "白天他是顶尖外科医生,晚上他是专杀医疗事故真凶的私刑者。",
        "url": "./movies/movie-1403.html",
        "image": "./53.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "天鸟的喧嚣",
        "year": "2024",
        "region": "日本",
        "type": "动画电影",
        "genre": "奇幻,灾难,剧情",
        "tags": [
            "环保",
            "神話",
            "治愈",
            "末日",
            "奇幻生物"
        ],
        "oneLine": "天空突然降下无数美丽而吵闹的神鸟,它们的歌声能引发地震,少女必须找到让它们闭嘴的办法。",
        "url": "./movies/movie-1404.html",
        "image": "./54.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "忍者神龟:变种大乱斗",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "动画,动作,喜剧,科幻",
        "tags": [
            "超级英雄",
            "青少年",
            "街头文化",
            "成长"
        ],
        "oneLine": "四只青少年的忍者乌龟渴望被人类接受,当神秘变种军团袭击纽约时,他们必须证明英雄不靠外表。",
        "url": "./movies/movie-1405.html",
        "image": "./55.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "花漾",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情/同性/家庭",
        "tags": [
            "花艺",
            "母女",
            "自我认同",
            "传承"
        ],
        "oneLine": "天才花艺师女儿返乡为母亲葬礼插花,却在老屋里发现了母亲藏了一生的情书——写给另一个女人。",
        "url": "./movies/movie-1406.html",
        "image": "./56.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "闪电巡逻队",
        "year": "2026",
        "region": "美国",
        "type": "剧集",
        "genre": "动作",
        "tags": [
            "超级英雄",
            "喜剧",
            "公路",
            "低配"
        ],
        "oneLine": "三个被开除的超能力者,开着辆破面包车在66号公路接单,业务包括:抓猫、查出轨、顺便救世。",
        "url": "./movies/movie-1407.html",
        "image": "./57.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "灭绝",
        "year": "2023",
        "region": "美国/德国",
        "type": "电影",
        "genre": "科幻,动作,惊悚",
        "tags": [
            "人造人反叛",
            "自我认知",
            "硬科幻",
            "道德困境"
        ],
        "oneLine": "一个普通父亲总是梦见自己杀死家人,直到有一天他发现,自己真的是一个被唤醒了杀戮程序的机器人。",
        "url": "./movies/movie-1408.html",
        "image": "./58.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "太阳谷",
        "year": "2027",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "科幻,悬疑,冒险",
        "tags": [
            "末世",
            "太阳能",
            "阴谋",
            "少年",
            "生存"
        ],
        "oneLine": "永昼笼罩的废土上,一个被称为“太阳谷”的永夜禁区,藏着人类最后的秘密。",
        "url": "./movies/movie-1409.html",
        "image": "./59.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "光芒",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "运动,励志",
        "tags": [
            "盲人",
            "棒球",
            "逆袭",
            "真实改编"
        ],
        "oneLine": "一群被家人遗弃的盲人孤儿,在一位落魄教练带领下,试图用棒球敲开人生的“第一扇门”。",
        "url": "./movies/movie-1410.html",
        "image": "./60.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "恋爱兵法",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "爱情/喜剧",
        "tags": [
            "高智商恋爱",
            "反套路",
            "职场"
        ],
        "oneLine": "顶级恋爱咨询师为客户定制追人方案,却在自己被倒追时彻底翻车。",
        "url": "./movies/movie-1411.html",
        "image": "./61.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "超级青春期",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "青春喜剧",
        "tags": [
            "身体互换",
            "代际沟通",
            "80年代怀旧",
            "亲子关系"
        ],
        "oneLine": "一个沉迷手机的15岁网瘾少年,和刚退休在家、曾是健美冠军的50岁老爸互换了身体,不得不替他去参加老年相亲大会。",
        "url": "./movies/movie-1412.html",
        "image": "./62.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "经纬天地",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "历史,商战",
        "tags": [
            "丝绸",
            "民国",
            "家族恩怨",
            "非遗"
        ],
        "oneLine": "民国乱世,苏州织造家族的遗孤,运用被世人遗忘的“天文学织法”,掀起了一场丝绸业的金融风暴。",
        "url": "./movies/movie-1413.html",
        "image": "./63.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "巨变之后:人口为零",
        "year": "2021",
        "region": "美国",
        "type": "电影",
        "genre": "科幻,灾难,悬疑",
        "tags": [
            "末世",
            "消失",
            "孤独",
            "解谜"
        ],
        "oneLine": "一夜之间全球人类只剩他一人,机场广播、外卖App和自动驾驶汽车仍在运行,是谁在操控?",
        "url": "./movies/movie-1414.html",
        "image": "./64.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "蛇之道 2024",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "犯罪/剧情/悬疑",
        "tags": [
            "黑帮",
            "复仇",
            "道德模糊",
            "社会派"
        ],
        "oneLine": "一名退休黑道律师在整理旧案时发现,他年轻时亲手送进监狱的杀人犯可能是被冤枉的,而真凶是他现在的老板。",
        "url": "./movies/movie-1415.html",
        "image": "./65.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "钢铁之心",
        "year": "2027",
        "region": "美国",
        "type": "电视剧/限定剧",
        "genre": "科幻/动作/冒险",
        "tags": [
            "AI",
            "机甲",
            "少女天才",
            "继承",
            "漫威"
        ],
        "oneLine": "天才少女莉莉·威廉姆斯用钢铁侠遗留的技术制造了新型装甲,却引来了一股觊觎人工智能的邪恶势力。",
        "url": "./movies/movie-1416.html",
        "image": "./66.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "富豪谷底求翻身 第一季",
        "year": "2023",
        "region": "美国",
        "type": "电视剧",
        "genre": "真人秀,纪录片",
        "tags": [
            "创业",
            "逆袭",
            "社会实验",
            "商业挑战",
            "人性观察"
        ],
        "oneLine": "身无分文的亿万富翁被扔进陌生城市,90天内从零创造百万美元企业。",
        "url": "./movies/movie-1417.html",
        "image": "./67.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "艳阳光",
        "year": "2026",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "剧情,历史,女性",
        "tags": [
            "日据时代",
            "酒家女",
            "地下反抗"
        ],
        "oneLine": "1943年台湾,五名酒家女利用艳名与情报网,暗中为抗日组织传递关键密信。",
        "url": "./movies/movie-1418.html",
        "image": "./68.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "俏女小神探",
        "year": "2003",
        "region": "中国香港",
        "type": "剧集",
        "genre": "悬疑/古装/喜剧",
        "tags": [
            "女扮男装",
            "单元探案",
            "港式幽默"
        ],
        "oneLine": "清末民初,一名酒楼女跑堂假扮死去的孪生弟弟,混入县衙当起了糊涂神探。",
        "url": "./movies/movie-1419.html",
        "image": "./69.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "奥莉维娅",
        "year": "2022",
        "region": "英国",
        "type": "电影",
        "genre": "剧情/悬疑",
        "tags": [
            "身份错位",
            "哥特",
            "遗产谜团"
        ],
        "oneLine": "孤女奥莉维娅继承了一座偏远庄园,却发现镜中的自己并非真实面目。",
        "url": "./movies/movie-1420.html",
        "image": "./70.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "奇迹赛季",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "运动,剧情",
        "tags": [
            "女排",
            "乡村振兴",
            "师徒传承",
            "热血"
        ],
        "oneLine": "一支从未赢过球的乡村小学女子排球队,在一位退役伤残运动员的带领下,向全省大赛发起不可能的冲击。",
        "url": "./movies/movie-1421.html",
        "image": "./71.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "甜蜜的她·动态漫",
        "year": "2025",
        "region": "中国内地",
        "type": "动态漫画",
        "genre": "爱情,喜剧",
        "tags": [
            "甜宠",
            "职场",
            "漫改",
            "轻松"
        ],
        "oneLine": "高冷女总裁意外吃到一款能让人说出真心话的魔法巧克力,从此职场与情场双“社死”。",
        "url": "./movies/movie-1422.html",
        "image": "./72.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "小姐不藏私",
        "year": "2024",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "爱情、喜剧、职场",
        "tags": [
            "酒店公关",
            "女性互助",
            "逆袭",
            "深夜剧",
            "辛辣"
        ],
        "oneLine": "一个被开除的财经女记者,卧底顶级酒店当小姐,意外成了红牌并挖出政商黑料。",
        "url": "./movies/movie-1423.html",
        "image": "./73.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "我们恋爱吧第五季",
        "year": "2025",
        "region": "中国大陆",
        "type": "综艺",
        "genre": "恋爱真人秀",
        "tags": [
            "素人",
            "旅行",
            "大龄青年",
            "治愈"
        ],
        "oneLine": "本季聚焦30+的都市单身男女,他们褪去了年轻时的冲动,在云南的慢生活中进行一场势均力敌的爱情推拉。",
        "url": "./movies/movie-1424.html",
        "image": "./74.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "风和日丽",
        "year": "2025",
        "region": "中国",
        "type": "电影",
        "genre": "剧情/悬疑",
        "tags": [
            "返乡",
            "失踪",
            "集体沉默"
        ],
        "oneLine": "一个风和日丽的下午,村里最漂亮的女孩在晒谷场消失了,全村人都说“没看见”。",
        "url": "./movies/movie-1425.html",
        "image": "./75.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "天水围的夜与雾",
        "year": "2024",
        "region": "香港",
        "type": "电影",
        "genre": "悬疑/犯罪",
        "tags": [
            "失踪案",
            "底层群像",
            "社会写实"
        ],
        "oneLine": "天水围一夜之间大雾弥漫,三名少女接连失踪,整个公屋区陷入集体恐慌。",
        "url": "./movies/movie-1426.html",
        "image": "./76.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "彩虹庇护所",
        "year": "2024",
        "region": "中国香港",
        "type": "电视剧",
        "genre": "剧情、家庭、社会",
        "tags": [
            "LGBTQ+",
            "流浪少年",
            "社工",
            "互助",
            "治愈"
        ],
        "oneLine": "一家破旧的庇护所里,五位被原生家庭赶出的少年决定为自己撑起一个家。",
        "url": "./movies/movie-1427.html",
        "image": "./77.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "起源2023",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "科幻,悬疑",
        "tags": [
            "时间循环",
            "病毒爆发",
            "科学家",
            "末日求生"
        ],
        "oneLine": "2023年,一种能篡改记忆的病毒爆发,科学家发现疫情源头竟来自未来。",
        "url": "./movies/movie-1428.html",
        "image": "./78.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "一切都鸟了",
        "year": "2021",
        "region": "德国",
        "type": "电影",
        "genre": "荒诞/喜剧",
        "tags": [
            "隐喻",
            "鸟类",
            "官僚"
        ],
        "oneLine": "某天人类突然能听懂鸟语,才发现鸟类一直在骂人类,并准备发动革命。",
        "url": "./movies/movie-1429.html",
        "image": "./79.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "侵入者2020",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "悬疑/惊悚/心理",
        "tags": [
            "密室",
            "入侵",
            "身份疑云",
            "反转"
        ],
        "oneLine": "妻子失踪三年后,家中监控拍到有女人每晚从衣柜爬出,睡在丈夫身边,天亮前又爬回去。",
        "url": "./movies/movie-1430.html",
        "image": "./80.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "好邮差",
        "year": "2018",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情",
        "tags": [
            "西藏",
            "邮差",
            "乡村",
            "奉献"
        ],
        "oneLine": "在西藏最偏远的“雪域孤岛”,一位老邮差一辈子唯一的工作,是给一个不存在的地址送信。",
        "url": "./movies/movie-1431.html",
        "image": "./81.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "大主宰年番",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "动画,奇幻,冒险",
        "tags": [
            "玄幻",
            "热血",
            "年番",
            "大IP"
        ],
        "oneLine": "资质平凡的牧尘从北灵境走出,立志成为主宰者,书写一代传奇。",
        "url": "./movies/movie-1432.html",
        "image": "./82.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "达菲",
        "year": "2023",
        "region": "英国",
        "type": "电影",
        "genre": "犯罪黑色幽默",
        "tags": [
            "杀手",
            "英式幽默",
            "养老院",
            "反差",
            "优雅"
        ],
        "oneLine": "退休王牌杀手住进高档养老院,却发现这里的平均“死亡率”高得离谱。",
        "url": "./movies/movie-1433.html",
        "image": "./83.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "莎拉伯·恩哈特",
        "year": "2024",
        "region": "法国",
        "type": "电视剧",
        "genre": "人物传记",
        "tags": [
            "戏剧",
            "女性主义",
            "19世纪",
            "传奇"
        ],
        "oneLine": "揭露19世纪末“神圣女神”莎拉·伯恩哈特如何用私生活和舞台技巧统治整个欧洲剧坛。",
        "url": "./movies/movie-1434.html",
        "image": "./84.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "哈里如何变成一棵树",
        "year": "2024",
        "region": "爱尔兰/英国",
        "type": "电影",
        "genre": "剧情,奇幻",
        "tags": [
            "寓言",
            "亲情",
            "魔幻现实主义"
        ],
        "oneLine": "固执的老农民与儿子打赌,如果他能证明自己是一棵树,儿子就必须留在农场继承家业。",
        "url": "./movies/movie-1435.html",
        "image": "./85.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "鲨与鲸",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "剧情/惊悚",
        "tags": [
            "海洋",
            "商业竞争",
            "良心",
            "环保"
        ],
        "oneLine": "一位鲨鱼般冷酷的石油公司CEO,在一次海难后被一头座头鲸救起,人生从此逆转。",
        "url": "./movies/movie-1436.html",
        "image": "./86.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "爱你是最美的时光",
        "year": "2023",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "爱情、剧情",
        "tags": [
            "青梅竹马",
            "久别重逢",
            "虐恋"
        ],
        "oneLine": "为了救赎童年挚爱,她隐姓埋名成为他的私人医生,却发现仇人竟是他的父亲。",
        "url": "./movies/movie-1437.html",
        "image": "./87.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "分诊处",
        "year": "2025",
        "region": "泰国",
        "type": "剧集",
        "genre": "爱情,悬疑,奇幻",
        "tags": [
            "医患",
            "时间循环",
            "BL"
        ],
        "oneLine": "急诊室医生发现自己陷入时间循环,每次拯救一名神秘病人,都会导致另一个心爱的人死去。",
        "url": "./movies/movie-1438.html",
        "image": "./88.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "我在这儿",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "剧情,家庭,奇幻",
        "tags": [
            "幽灵",
            "告别",
            "温情",
            "超现实"
        ],
        "oneLine": "一个死去多年的男人以透明形态守在家中,直到某天他的小女儿突然说“爸爸,我看见你了”。",
        "url": "./movies/movie-1439.html",
        "image": "./89.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "残酷世界续集",
        "year": "2021",
        "region": "法国",
        "type": "电影",
        "genre": "剧情,犯罪",
        "tags": [
            "黑帮",
            "父子",
            "宿命",
            "暴力美学"
        ],
        "oneLine": "前作中被救出的男孩,二十年后成了更狠的角色,他要亲手毁掉养父用命换来的“干净世界”。",
        "url": "./movies/movie-1440.html",
        "image": "./90.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "婚姻连系",
        "year": "2024",
        "region": "意大利",
        "type": "电影",
        "genre": "剧情,家庭",
        "tags": [
            "婚姻危机",
            "那不勒斯",
            "现实主义",
            "情感细腻",
            "代际传递"
        ],
        "oneLine": "一对准备离婚的夫妻,因为女儿的一场重病被迫重新住在一起,却揭开了婚姻最残忍的真相。",
        "url": "./movies/movie-1441.html",
        "image": "./91.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "另一个梦之队",
        "year": "2022",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情,运动,励志",
        "tags": [
            "残障乒乓球",
            "热血逆袭",
            "真实改编"
        ],
        "oneLine": "一群被主流赛场遗忘的残障乒乓球手,组成了史上最不被看好的国家队。",
        "url": "./movies/movie-1442.html",
        "image": "./92.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "女飞人",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/运动/传记",
        "tags": [
            "女性成长",
            "航空",
            "励志",
            "逆袭",
            "真实改编"
        ],
        "oneLine": "一个被所有人看不起的洗车妹,如何一步步飞上三万英尺的高空?",
        "url": "./movies/movie-1443.html",
        "image": "./93.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "赤裸特工",
        "year": "2002",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作/惊悚/犯罪",
        "tags": [
            "女特工",
            "杀手组织",
            "性感",
            "程小东"
        ],
        "oneLine": "一群被拐骗的少女被训练成顶级杀手,其中一人执行任务时,发现自己要杀的目标竟是失散多年的父亲。",
        "url": "./movies/movie-1444.html",
        "image": "./94.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "神秘的大佛",
        "year": "1980",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作悬疑",
        "tags": [
            "乐山大佛",
            "夺宝",
            "武术",
            "老电影",
            "经典"
        ],
        "oneLine": "乐山大佛内部暗藏抗战宝藏,归国华侨与守佛老人联手对抗觊觎宝物的特务组织。",
        "url": "./movies/movie-1445.html",
        "image": "./95.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "骆驼不会独自哭泣",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情",
        "tags": [
            "沙漠",
            "治愈",
            "女性",
            "公路"
        ],
        "oneLine": "一位失去丈夫的女摄影师穿越塔克拉玛干沙漠,途中与一匹被遗弃的骆驼建立了意想不到的生死羁绊。",
        "url": "./movies/movie-1446.html",
        "image": "./96.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "暴徒小镇",
        "year": "2027",
        "region": "美国",
        "type": "电影",
        "genre": "动作、犯罪、西部",
        "tags": [
            "黑帮",
            "小镇",
            "以暴制暴",
            "孤胆英雄"
        ],
        "oneLine": "一个金盆洗手的杀手搬进宁静小镇,却发现这里的居民都是隐退的暴徒。",
        "url": "./movies/movie-1447.html",
        "image": "./97.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "魔宫帝国:重生",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "动作,奇幻,冒险",
        "tags": [
            "重启",
            "游戏改编",
            "格斗",
            "暗黑"
        ],
        "oneLine": "被淘汰的战士被扔进魔宫地下角斗场,只有连胜十场才能重返人间。",
        "url": "./movies/movie-1448.html",
        "image": "./98.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "幻灭",
        "year": "2026",
        "region": "美国",
        "type": "剧集",
        "genre": "剧情/奇幻/悬疑",
        "tags": [
            "梦境",
            "心理学",
            "存在主义",
            "烧脑"
        ],
        "oneLine": "一种可以定制美梦的技术上市后,人们开始自愿沉溺于梦境,直到现实中再也找不到“醒来”的理由。",
        "url": "./movies/movie-1449.html",
        "image": "./99.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "双人床条约",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧/爱情",
        "tags": [
            "契约婚姻",
            "同居",
            "前任搅局"
        ],
        "oneLine": "离婚夫妻签下“床分界线条约”,结果发现破坏条款的竟然是彼此的占有欲。",
        "url": "./movies/movie-1450.html",
        "image": "./100.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "模范生的禁爱秘密",
        "year": "2025",
        "region": "韩国",
        "type": "电视剧",
        "genre": "爱情,剧情,校园",
        "tags": [
            "女高",
            "同性",
            "优等生",
            "秘密",
            "救赎"
        ],
        "oneLine": "全校第一的模范生秀敏,与全校倒数的转学生恩在,因一次图书馆的偷吻,揭开了一段危险的校园禁爱。",
        "url": "./movies/movie-1451.html",
        "image": "./101.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "恋爱吧,寨主",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧/爱情/古装",
        "tags": [
            "山寨",
            "女寨主",
            "契约恋爱",
            "反套路"
        ],
        "oneLine": "土匪女寨主为阻止朝廷剿匪,抢了一个落魄书生当压寨夫君,逼他教自己“像淑女一样恋爱”。",
        "url": "./movies/movie-1452.html",
        "image": "./102.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "新东京猫猫",
        "year": "2025",
        "region": "日本",
        "type": "动画剧集",
        "genre": "魔法少女,科幻,冒险",
        "tags": [
            "变身",
            "基因改造",
            "团队战",
            "环保",
            "萌系"
        ],
        "oneLine": "2050年,五位被植入稀有动物基因的少女必须学会控制力量,对抗来自地下都市的机械异兽。",
        "url": "./movies/movie-1453.html",
        "image": "./103.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "魔法圣女",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "奇幻/女性",
        "tags": [
            "中世纪",
            "女巫",
            "修女院",
            "圣迹",
            "宗教审判"
        ],
        "oneLine": "1347年,一个不会魔法的女孩被当成圣女关进修道院,她必须假装有神力,否则就会被当作女巫烧死。",
        "url": "./movies/movie-1454.html",
        "image": "./104.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "泰王纳黎萱5",
        "year": "2011",
        "region": "泰国",
        "type": "电影",
        "genre": "历史,战争",
        "tags": [
            "泰缅战争",
            "大象",
            "史诗",
            "国王"
        ],
        "oneLine": "泰王纳黎萱最后一战,他骑着发疯的战象冲入缅军象阵,却发现对面是自己的亲兄弟。",
        "url": "./movies/movie-1455.html",
        "image": "./105.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "业内前五",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "音乐喜剧",
        "tags": [
            "说唱",
            "脱口秀",
            "行业潜规则",
            "排行榜"
        ],
        "oneLine": "过气说唱歌手被逼参加一档“史上最强rapper”排名节目,为了保住第五名的位置,他被迫揭开了整个行业的黑幕。",
        "url": "./movies/movie-1456.html",
        "image": "./106.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "我们是恶魔",
        "year": "2025",
        "region": "意大利",
        "type": "电视剧",
        "genre": "剧情,黑帮,宗教",
        "tags": [
            "黑手党",
            "梵蒂冈",
            "赎罪"
        ],
        "oneLine": "三个黑手党杀手被迫假扮神父,被藏进梵蒂冈,却意外成了全城最受欢迎的神职人员。",
        "url": "./movies/movie-1457.html",
        "image": "./107.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "大爆怒",
        "year": "2016",
        "region": "韩国",
        "type": "电影",
        "genre": "动作,惊悚,犯罪",
        "tags": [
            "复仇狂人",
            "暴力美学",
            "情绪失控"
        ],
        "oneLine": "患有人格障碍的男主被同事欺负了十年,某天他决定不生气了,他决定直接炸掉整栋公司大楼。",
        "url": "./movies/movie-1458.html",
        "image": "./108.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "为了这条街的生命",
        "year": "2024",
        "region": "日本",
        "type": "剧集",
        "genre": "剧情/社会",
        "tags": [
            "社区",
            "兽医",
            "流浪动物",
            "温情"
        ],
        "oneLine": "一个即将被拆迁的老旧商店街,因为一位古怪兽医和一群流浪猫狗,爆发了意想不到的保卫战。",
        "url": "./movies/movie-1459.html",
        "image": "./109.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "三个孬家伙",
        "year": "2018",
        "region": "中国内地",
        "type": "电影",
        "genre": "喜剧,剧情",
        "tags": [
            "小人物",
            "黑色幽默",
            "兄弟情",
            "寻宝"
        ],
        "oneLine": "三个各自失意的“孬种”得到一张藏宝图,却发现传说中的宝藏,不过是他们二十年前一起埋下的青春。",
        "url": "./movies/movie-1460.html",
        "image": "./110.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "沉默法则2025",
        "year": "2025",
        "region": "意大利",
        "type": "剧集",
        "genre": "犯罪,剧情,惊悚",
        "tags": [
            "黑手党",
            "卧底",
            "缄默法则",
            "西西里"
        ],
        "oneLine": "一名卧底警察在西西里黑手党内部待了八年,突然被告知,他必须亲手杀死自己最好的朋友才能证明忠诚。",
        "url": "./movies/movie-1461.html",
        "image": "./111.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "最后的太阳",
        "year": "2028",
        "region": "中国大陆",
        "type": "电影",
        "genre": "科幻/灾难/剧情",
        "tags": [
            "末日",
            "人性",
            "环保"
        ],
        "oneLine": "太阳即将永久熄灭,人类最后的希望不是造飞船逃跑,而是学会在永恒的黑暗中生存。",
        "url": "./movies/movie-1462.html",
        "image": "./112.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "大青蛙布偶电影",
        "year": "1979",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧/歌舞/家庭",
        "tags": [
            "布偶",
            "真人动画",
            "公路片",
            "童年回忆",
            "励志"
        ],
        "oneLine": "科米特青蛙穿越美国寻找好莱坞梦想,身后跟着一群捣乱的布偶朋友和一名贪婪的经纪人。",
        "url": "./movies/movie-1463.html",
        "image": "./113.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "甜美爱丽丝",
        "year": "2025",
        "region": "法国/意大利",
        "type": "电影",
        "genre": "心理惊悚",
        "tags": [
            "少女失踪",
            "双面人生",
            "小镇秘密",
            "悬疑",
            "哥特"
        ],
        "oneLine": "十四岁的爱丽丝失踪了,但更诡异的是,小镇上又同时出现了另一个自称“爱丽丝”的甜美女孩。",
        "url": "./movies/movie-1464.html",
        "image": "./114.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "逐爱天堂",
        "year": "2008",
        "region": "英国",
        "type": "电影",
        "genre": "爱情,剧情,文艺",
        "tags": [
            "庄园",
            "虐恋",
            "复古",
            "女性视角"
        ],
        "oneLine": "天真少女闯入神秘庄园,在奢华与禁锢中经历了一场如玫瑰般带刺的逐爱之旅。",
        "url": "./movies/movie-1465.html",
        "image": "./115.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "悲剧的诞生",
        "year": "2025",
        "region": "德国",
        "type": "电影",
        "genre": "剧情,音乐,历史",
        "tags": [
            "尼采",
            "瓦格纳",
            "哲学",
            "传记"
        ],
        "oneLine": "年轻的尼采与音乐家瓦格纳惺惺相惜又反目成仇,这场友谊如何催生出现代思想的黎明?",
        "url": "./movies/movie-1466.html",
        "image": "./116.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "逢君正当时",
        "year": "2024",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "古装/爱情/喜剧",
        "tags": [
            "替身新娘",
            "先婚后爱",
            "错位人生",
            "甜宠"
        ],
        "oneLine": "山野女骗子被迫替嫁残疾将军,洞房夜却发现将军是装的,而她也是假的。",
        "url": "./movies/movie-1467.html",
        "image": "./117.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "荒芜之地",
        "year": "2025",
        "region": "澳大利亚",
        "type": "电影",
        "genre": "科幻/悬疑",
        "tags": [
            "沙漠",
            "生态崩溃",
            "量子农场",
            "孤独者",
            "记忆土壤"
        ],
        "oneLine": "沙漠里最后一片绿洲中央,立着一扇门,打开后是五十年前的超市。",
        "url": "./movies/movie-1468.html",
        "image": "./118.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "盲侠大发神威",
        "year": "1993",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作,武侠",
        "tags": [
            "港产武侠",
            "盲人高手",
            "复仇",
            "老港片"
        ],
        "oneLine": "失明的刀客隐居小镇卖豆腐,直到一伙仇家血洗客栈,逼他重新拔刀。",
        "url": "./movies/movie-1469.html",
        "image": "./119.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "血色日中",
        "year": "2023",
        "region": "日本",
        "type": "电视剧",
        "genre": "历史,战争,剧情",
        "tags": [
            "二战",
            "商战",
            "家族恩怨"
        ],
        "oneLine": "1937年的上海租界,一对日本双胞胎兄弟因立场不同,展开了残酷的商业与谍战厮杀。",
        "url": "./movies/movie-1470.html",
        "image": "./120.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "绝种好男人",
        "year": "2003",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧/爱情",
        "tags": [
            "港式无厘头",
            "废柴逆袭",
            "真假身份"
        ],
        "oneLine": "一个善良到近乎愚蠢的兽医,被误诊为绝症后,竟引来了一群拜金女的疯狂追求。",
        "url": "./movies/movie-1471.html",
        "image": "./121.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "南极洲:拯救科考站",
        "year": "2025",
        "region": "英国",
        "type": "纪录片",
        "genre": "纪录/灾难",
        "tags": [
            "极地",
            "救援",
            "实拍",
            "环保"
        ],
        "oneLine": "南极冰架断裂,科考站面临沉没危机,一场跨越半球的极限救援启动。",
        "url": "./movies/movie-1472.html",
        "image": "./122.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "那年夏天2025",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "科幻,青春",
        "tags": [
            "时间循环",
            "夏日",
            "棒球",
            "纯爱"
        ],
        "oneLine": "2025年的夏天,一个废柴高中生意外获得了让时间倒流的能力,但他只想用来重考大学。",
        "url": "./movies/movie-1473.html",
        "image": "./123.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "柏林谍影",
        "year": "2019",
        "region": "德国/英国",
        "type": "剧集",
        "genre": "悬疑/谍战/惊悚",
        "tags": [
            "冷战",
            "双面间谍",
            "柏林墙",
            "阴谋论",
            "高智商博弈"
        ],
        "oneLine": "柏林墙倒塌前夜,一名东德情报官向西德自首,他说的每一句话都在颠覆两大阵营的信任。",
        "url": "./movies/movie-1474.html",
        "image": "./124.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "催眠师",
        "year": "2012",
        "region": "瑞典/挪威",
        "type": "电影",
        "genre": "惊悚/犯罪",
        "tags": [
            "北欧 noir",
            "催眠",
            "家族秘密",
            "心理创伤"
        ],
        "oneLine": "一名心理医生被迫对重伤的少年杀人嫌犯实施催眠,却唤醒了自己家族的黑暗秘密。",
        "url": "./movies/movie-1475.html",
        "image": "./125.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "吃土的十二个月",
        "year": "2023",
        "region": "日本",
        "type": "电影",
        "genre": "剧情/生活",
        "tags": [
            "美食",
            "禅意",
            "孤独",
            "慢生活"
        ],
        "oneLine": "一个失去了味觉的孤僻老厨师,搬到山里独居,在耕种和烹饪四季食材的过程中,重新找回了生命的味道。",
        "url": "./movies/movie-1476.html",
        "image": "./126.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "兄弟闯天涯",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "冒险/喜剧",
        "tags": [
            "公路",
            "兄弟情",
            "寻宝"
        ],
        "oneLine": "一对废柴兄弟为了还债,骑着三轮摩托车穿越无人区,寻找传说中的“天涯石”。",
        "url": "./movies/movie-1477.html",
        "image": "./127.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "情深几许",
        "year": "2024",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "古装,爱情",
        "tags": [
            "虐恋",
            "权谋",
            "宅斗",
            "重生"
        ],
        "oneLine": "上一世被渣男害得家破人亡,重生后她决定嫁给仇人的父亲当后妈。",
        "url": "./movies/movie-1478.html",
        "image": "./128.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "阴阳路十九之我对眼见到野",
        "year": "2023",
        "region": "中国香港",
        "type": "电影",
        "genre": "恐怖,喜剧",
        "tags": [
            "鬼片",
            "港味",
            "阴阳眼",
            "单元剧"
        ],
        "oneLine": "外卖小哥意外开了阴阳眼,从此送的每一单外卖,收货人都未必是人。",
        "url": "./movies/movie-1479.html",
        "image": "./129.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "从地心窜出3",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "科幻/动作/怪兽",
        "tags": [
            "B级片",
            "幽默",
            "情怀"
        ],
        "oneLine": "钻地巨怪再次出现,这次它们学会了挖穿地心,要从地球另一端窜出来。",
        "url": "./movies/movie-1480.html",
        "image": "./130.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "超人前传第七季",
        "year": "2026",
        "region": "美国",
        "type": "剧集",
        "genre": "科幻,冒险",
        "tags": [
            "超级英雄起源",
            "氪星遗产",
            "宿敌联手"
        ],
        "oneLine": "克拉克终于面对自己的氪星血脉,却发现卢瑟·莱恩掌握了唯一能摧毁布莱尼亚克的反向科技。",
        "url": "./movies/movie-1481.html",
        "image": "./131.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "铁翼雄风",
        "year": "1927",
        "region": "美国",
        "type": "电影",
        "genre": "爱情/战争/动作",
        "tags": [
            "默片",
            "空战",
            "奥斯卡",
            "经典"
        ],
        "oneLine": "一战时期,两名飞行员爱上同一个女孩,他们在空中与敌人和情敌展开生死对决。",
        "url": "./movies/movie-1482.html",
        "image": "./132.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "警中警2",
        "year": "2023",
        "region": "中国",
        "type": "剧集",
        "genre": "悬疑,犯罪",
        "tags": [
            "督察",
            "内鬼",
            "警匪对决",
            "反腐"
        ],
        "oneLine": "省厅督察处长空降黑河市,调查缉毒队长离奇死亡案,却发现整个警队人人都有秘密。",
        "url": "./movies/movie-1483.html",
        "image": "./133.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "小鱼",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "动画,家庭",
        "tags": [
            "海洋",
            "自闭症",
            "亲情",
            "治愈"
        ],
        "oneLine": "一个患有自闭症的小女孩在退潮后的 tide pool 里遇到了一条会说话的小丑鱼,它们成了彼此唯一的朋友。",
        "url": "./movies/movie-1484.html",
        "image": "./134.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "投行风云第二季",
        "year": "2022",
        "region": "美国/英国",
        "type": "电视剧",
        "genre": "剧情",
        "tags": [
            "金融",
            "高压职场",
            "纸醉金迷",
            "道德滑坡",
            "群像"
        ],
        "oneLine": "伦敦顶级投行 Pierpoint & Co 的新人度过了第一年的修罗场,第二年的他们开始学会的不是交易,而是如何在出卖灵魂后活得更久。",
        "url": "./movies/movie-1485.html",
        "image": "./135.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "治疗扑克上瘾",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "剧情/惊悚",
        "tags": [
            "赌博",
            "心理治疗",
            "骗中骗",
            "病态赌徒",
            "地下赌场"
        ],
        "oneLine": "扑克成瘾的心理医生为了还债潜入地下赌局,却发现赌局的真正目的,是治疗他这个“病人”。",
        "url": "./movies/movie-1486.html",
        "image": "./136.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "人质们",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "剧情、惊悚",
        "tags": [
            "劫持",
            "银行",
            "人质综合征",
            "谈判"
        ],
        "oneLine": "一场银行劫案中,人质们开始自发维护绑匪,因为绑匪比外面的警察更讲信用。",
        "url": "./movies/movie-1487.html",
        "image": "./137.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "失踪少女名单",
        "year": "2019",
        "region": "韩国",
        "type": "电影",
        "genre": "悬疑,犯罪,剧情",
        "tags": [
            "连环失踪",
            "女警探案",
            "校园黑幕",
            "真实事件改编"
        ],
        "oneLine": "一份被删除的“失踪少女名单”从校长电脑中恢复,而名单上的女孩,都在最近五年内“自愿退学”。",
        "url": "./movies/movie-1488.html",
        "image": "./138.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "二十一世纪神话学",
        "year": "2024",
        "region": "法国",
        "type": "电视剧",
        "genre": "剧情,奇幻,哲学",
        "tags": [
            "现代神话",
            "存在主义",
            "城市传说",
            "法剧"
        ],
        "oneLine": "一位过气的人类学家发现,21世纪的新“神”藏在社交媒体算法、外卖骑手和网红打卡地里。",
        "url": "./movies/movie-1489.html",
        "image": "./139.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "伊朗式分手",
        "year": "2025",
        "region": "伊朗/法国",
        "type": "电影",
        "genre": "剧情/爱情",
        "tags": [
            "伊朗裔",
            "异地恋",
            "女性视角",
            "网络恋情"
        ],
        "oneLine": "住在德黑兰的女孩与住在洛杉矶的伊朗裔男孩网恋三年,见面后却发现彼此活在两个时代的伊朗。",
        "url": "./movies/movie-1490.html",
        "image": "./140.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "坏糖果",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "恐怖、惊悚、黑色喜剧",
        "tags": [
            "恶童",
            "黑色幽默",
            "反转"
        ],
        "oneLine": "一对甜蜜的网红夫妻领养了一个看似完美的十岁女孩,却发现她是糖果包装厂里的“残次品杀手”。",
        "url": "./movies/movie-1491.html",
        "image": "./141.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "最后通牒",
        "year": "2025",
        "region": "英国",
        "type": "剧集",
        "genre": "政治,惊悚,悬疑",
        "tags": [
            "核弹倒计时",
            "内阁作战室",
            "外交诡计",
            "勒索",
            "24小时"
        ],
        "oneLine": "新首相就职首日,恐怖分子发布最后通牒:每六小时摧毁一座英国城市,除非交出二战时期的绝密档案。",
        "url": "./movies/movie-1492.html",
        "image": "./142.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "福伯",
        "year": "2022",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情/犯罪/黑色幽默",
        "tags": [
            "殡仪馆",
            "黑帮",
            "叠码仔",
            "救赎",
            "小人物"
        ],
        "oneLine": "殡仪馆的入殓师福伯兼职为黑帮处理“特殊尸体”,直到有一天他要缝合的死者,是自己的亲生儿子。",
        "url": "./movies/movie-1493.html",
        "image": "./143.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "幕府将军",
        "year": "2024",
        "region": "美国/日本",
        "type": "剧集",
        "genre": "历史/战争",
        "tags": [
            "权力游戏",
            "武士道",
            "东西方冲突",
            "史诗"
        ],
        "oneLine": "英国领航员意外卷入日本战国末期两大军阀的决战,他的大炮可能改写了整个幕府历史。",
        "url": "./movies/movie-1494.html",
        "image": "./144.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "战国妖狐千魔混沌篇",
        "year": "2026",
        "region": "日本",
        "type": "动画剧集",
        "genre": "奇幻/战斗/热血",
        "tags": [
            "战国时代",
            "人妖共存",
            "史诗战争",
            "悲剧美学",
            "神仙打架"
        ],
        "oneLine": "在人与妖誓不两立的战国乱世,一个半人半妖的少年和一只千年妖狐结盟,试图终结千年的混沌。",
        "url": "./movies/movie-1495.html",
        "image": "./145.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "茉莉牌局",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "剧情,传记",
        "tags": [
            "赌博",
            "女性",
            "高智商"
        ],
        "oneLine": "一名华裔女数学天才在地下牌局用概率论击败好莱坞名流,直到FBI找上门。",
        "url": "./movies/movie-1496.html",
        "image": "./146.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "彼得·冯·康德",
        "year": "2023",
        "region": "德国/法国",
        "type": "电影",
        "genre": "剧情/同性",
        "tags": [
            "权力关系",
            "艺术与欲望",
            "改编致敬"
        ],
        "oneLine": "一个功成名就的导演,用尽所有手段把一个年轻男演员捧红,然后发现:创造一个人和控制一个人之间,只隔着一部电影的距离。",
        "url": "./movies/movie-1497.html",
        "image": "./147.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "不是艺术家",
        "year": "2024",
        "region": "意大利",
        "type": "电影",
        "genre": "喜剧/剧情",
        "tags": [
            "艺术讽刺",
            "中年危机",
            "伪纪录片",
            "存在主义"
        ],
        "oneLine": "一个只会画行画的画师,被艺术圈误认为隐世天才,他决定把这个谎撒到底。",
        "url": "./movies/movie-1498.html",
        "image": "./148.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "沈马特开心",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧,奇幻,冒险",
        "tags": [
            "开心麻花",
            "沈腾",
            "马丽",
            "平行时空",
            "爆笑"
        ],
        "oneLine": "一个失意的中年男演员被雷劈后,发现自己每次打喷嚏就会穿越到不同电影里扮演路人甲。",
        "url": "./movies/movie-1499.html",
        "image": "./149.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "潜艇总动员3:彩虹宝藏",
        "year": "2027",
        "region": "美国",
        "type": "动画电影",
        "genre": "喜剧,冒险,科幻",
        "tags": [
            "潜艇",
            "海洋",
            "寻宝"
        ],
        "oneLine": "贝贝和皮皮潜入百慕大海沟,发现彩虹的尽头藏着一座反重力城市。",
        "url": "./movies/movie-1500.html",
        "image": "./150.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "红日2008",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "历史/剧情",
        "tags": [
            "汶川地震",
            "民族记忆",
            "群像戏"
        ],
        "oneLine": "2008年的夏天,一个四川小镇上,所有人的命运都在那场地动山摇的14秒内被改写了。",
        "url": "./movies/movie-1501.html",
        "image": "./1.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "三条黑暗的街道",
        "year": "2029",
        "region": "英国/爱尔兰",
        "type": "电视剧",
        "genre": "悬疑/犯罪/剧情",
        "tags": [
            "贝尔法斯特",
            "北爱尔兰问题",
            "双面间谍",
            "历史伤痕"
        ],
        "oneLine": "1998年《贝尔法斯特协议》签署前夜,三条相邻街道上的三个普通人,各自收到了一封写着同样地址的匿名信。",
        "url": "./movies/movie-1502.html",
        "image": "./2.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "复仇2008",
        "year": "2008",
        "region": "美国",
        "type": "电影",
        "genre": "动作,惊悚",
        "tags": [
            "复仇",
            "杀手",
            "阴谋",
            "反转"
        ],
        "oneLine": "一个男人用了十年时间成为顶级杀手,只为找到当年杀死他妻子的真凶,结果却发现凶手一直在帮他。",
        "url": "./movies/movie-1503.html",
        "image": "./3.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "山神异闻录",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑,惊悚,民俗",
        "tags": [
            "山村",
            "祭祀",
            "怪谈",
            "调查记者"
        ],
        "oneLine": "记者重返故乡调查山神显灵事件,却发现每一次神迹背后都是一场精心设计的谋杀。",
        "url": "./movies/movie-1504.html",
        "image": "./4.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "神奇之旅",
        "year": "2023",
        "region": "英国",
        "type": "电影",
        "genre": "家庭/奇幻",
        "tags": [
            "治愈",
            "兄妹情",
            "魔法生物",
            "公路片"
        ],
        "oneLine": "为了唤醒植物人哥哥,妹妹带着他的旧吉他,踏上了一条只有音乐才能看见的神奇天路。",
        "url": "./movies/movie-1505.html",
        "image": "./5.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "娱乐体验",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "科幻,惊悚,讽刺",
        "tags": [
            "反乌托邦",
            "沉浸式娱乐",
            "资本讽刺"
        ],
        "oneLine": "一家公司提供“完美娱乐体验”:把你的意识植入任何电影当主角,但你可能再也回不来。",
        "url": "./movies/movie-1506.html",
        "image": "./6.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "秃鹰72小时",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "动作、惊悚",
        "tags": [
            "硬汉",
            "孤胆英雄",
            "倒计时",
            "政治阴谋"
        ],
        "oneLine": "一名退役CIA狙击手被诬陷叛国,必须在72小时内洗清罪名并阻止核弹袭击。",
        "url": "./movies/movie-1507.html",
        "image": "./7.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "度假伙伴2",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧,冒险",
        "tags": [
            "R级喜剧",
            "墨西哥",
            "绑架乌龙",
            "兄弟情"
        ],
        "oneLine": "两对情侣去墨西哥度假,结果把当地大毒枭的“宠物美洲狮”当成了流浪猫带回了酒店。",
        "url": "./movies/movie-1508.html",
        "image": "./8.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "小镇谋杀案",
        "year": "2021",
        "region": "英国",
        "type": "电视剧",
        "genre": "犯罪,悬疑",
        "tags": [
            "乡村",
            "冷案",
            "记者",
            "人人有秘密"
        ],
        "oneLine": "退休警长在自家花园挖出一具三十年前的白骨,而全小镇所有人都说:不认识这个人,也不记得三十年前有任何失踪案。",
        "url": "./movies/movie-1509.html",
        "image": "./9.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "2006海神号",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "动作/灾难/悬疑",
        "tags": [
            "游轮",
            "倒计时",
            "密室逃生",
            "暴风雪山庄"
        ],
        "oneLine": "2006年返航的“海神号”突发诡异自燃,一群幸存者发现船舱内竟藏着通往2026年的时空裂口。",
        "url": "./movies/movie-1510.html",
        "image": "./10.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "劫局",
        "year": "2021",
        "region": "中国",
        "type": "电影",
        "genre": "悬疑/犯罪",
        "tags": [
            "公交车劫持",
            "谈判专家",
            "反转",
            "人性拷问",
            "密闭空间"
        ],
        "oneLine": "一辆公交被劫持,谈判专家到现场才认出劫匪是二十年前救过自己的恩人。",
        "url": "./movies/movie-1511.html",
        "image": "./11.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "鹿角男孩第三季",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "奇幻,冒险,剧情",
        "tags": [
            "末世",
            "半人",
            "寻根",
            "希望"
        ],
        "oneLine": "为了找到传说中的“最后的保护区”,鹿角男孩格斯必须穿越充满致命孢子毒雾的红色荒漠,那里藏着人类变异的真相。",
        "url": "./movies/movie-1512.html",
        "image": "./12.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "天使的信仰",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/悬疑",
        "tags": [
            "人性",
            "救赎",
            "反转",
            "宗教隐喻"
        ],
        "oneLine": "一名无神论法医在一具修女尸体中发现了象征“天使”的奇异晶体,从而陷入信仰与科学的生死漩涡。",
        "url": "./movies/movie-1513.html",
        "image": "./13.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "奔跑吧·生态篇",
        "year": "2023",
        "region": "中国大陆",
        "type": "综艺",
        "genre": "真人秀,公益",
        "tags": [
            "环保",
            "明星",
            "游戏",
            "湿地",
            "动植物保护"
        ],
        "oneLine": "跑男团进入自然保护区,在游戏中被真正的护林员“追捕”,体验盗猎者的危险。",
        "url": "./movies/movie-1514.html",
        "image": "./14.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "我爸没说的那件事",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "家庭/剧情",
        "tags": [
            "父子",
            "遗物",
            "故乡",
            "和解"
        ],
        "oneLine": "父亲去世后,儿子在他的工具箱底层发现一张2023年去往一个消失县城的火车票。",
        "url": "./movies/movie-1515.html",
        "image": "./15.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "长安侠影之天谴之谜",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "古装悬疑",
        "tags": [
            "武侠",
            "破案",
            "机关术"
        ],
        "oneLine": "长安城连续七天降下“火雨”,大理寺密探发现这不是天灾,而是失传已久的墨家机关阵。",
        "url": "./movies/movie-1516.html",
        "image": "./16.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "黑夜降临",
        "year": "2018",
        "region": "西班牙",
        "type": "电影",
        "genre": "悬疑、恐怖",
        "tags": [
            "导演剪辑版",
            "无对白",
            "盲人视角",
            "心理恐惧",
            "绝望"
        ],
        "oneLine": "一场导致全球失明的大灾变后,一个拥有视力的女人成了瞎子国度里最孤独的猎物。",
        "url": "./movies/movie-1517.html",
        "image": "./17.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "我复仇,你付钱",
        "year": "2024",
        "region": "印度",
        "type": "电影",
        "genre": "动作/犯罪/喜剧",
        "tags": [
            "杀手公司",
            "黑色幽默",
            "复仇爽片",
            "印式开挂",
            "契约精神"
        ],
        "oneLine": "一位遭遇中年危机的会计师辞职开了一家“复仇有限公司”,客户只需按痛苦程度付费,他负责花式整蛊渣男和恶霸。",
        "url": "./movies/movie-1518.html",
        "image": "./18.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "别人的孩子",
        "year": "2026",
        "region": "韩国",
        "type": "剧集",
        "genre": "悬疑,惊悚,伦理",
        "tags": [
            "代孕",
            "失踪",
            "秘密"
        ],
        "oneLine": "一家顶级的代孕机构背后,是贩卖“别人的孩子”给权贵的黑暗网络,一位母亲决心找回自己的亲生骨肉。",
        "url": "./movies/movie-1519.html",
        "image": "./19.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "对手过家家",
        "year": "2026",
        "region": "日本",
        "type": "电视剧",
        "genre": "喜剧,犯罪,爱情",
        "tags": [
            "宿敌同居",
            "伪装家庭",
            "搞笑反差"
        ],
        "oneLine": "两个互为死对头的杀手接到同一单任务:假扮夫妻,杀掉对方。",
        "url": "./movies/movie-1520.html",
        "image": "./20.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "威尔和格蕾丝第八季",
        "year": "2023",
        "region": "美国",
        "type": "剧集",
        "genre": "喜剧、爱情",
        "tags": [
            "情景喜剧",
            "老友重聚",
            "婚姻观",
            "纽约",
            "毒舌台词"
        ],
        "oneLine": "第八季开篇,威尔与格蕾丝同时陷入中年婚姻危机,竟荒唐地决定交换伴侣来重燃激情。",
        "url": "./movies/movie-1521.html",
        "image": "./21.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "机器人之梦",
        "year": "2025",
        "region": "日本",
        "type": "动画电影",
        "genre": "科幻,剧情,治愈",
        "tags": [
            "仿生人意识",
            "记忆梦境",
            "打工族陪伴",
            "赛博孤独"
        ],
        "oneLine": "独居程序员为了对抗孤独购买了家政机器人,却发现自己开始入侵它的梦境,并在里面看见了从未去过的故乡。",
        "url": "./movies/movie-1522.html",
        "image": "./22.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "那家伙的声音",
        "year": "2022",
        "region": "韩国",
        "type": "电影",
        "genre": "悬疑/惊悚",
        "tags": [
            "绑架",
            "心理博弈",
            "真实事件改编",
            "父爱"
        ],
        "oneLine": "一通勒索电话,让原本幸福的三口之家坠入地狱,父亲必须在那家伙的声音中寻找复仇之机。",
        "url": "./movies/movie-1523.html",
        "image": "./23.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "没有你依然灿烂",
        "year": "2026",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "剧情,爱情,家庭",
        "tags": [
            "女性成长",
            "丧夫",
            "母女关系",
            "治愈"
        ],
        "oneLine": "丈夫意外去世后,全职太太林晓曦被迫重返职场,却在丈夫的遗物中发现他生前出轨的证据。",
        "url": "./movies/movie-1524.html",
        "image": "./24.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "松花江上",
        "year": "2022",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "历史/剧情",
        "tags": [
            "东北抗战",
            "平民史诗",
            "家国情怀",
            "人性"
        ],
        "oneLine": "1931-1945,松花江畔的一个混血家庭,在日本统治、伪满政权和抗联之间艰难求存。",
        "url": "./movies/movie-1525.html",
        "image": "./25.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "艳阳春水惊鸿",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情,古装,悬疑",
        "tags": [
            "南宋",
            "画师",
            "宫廷秘闻",
            "替身",
            "水墨画风"
        ],
        "oneLine": "南宋宫廷画师为皇后画像,却发现画中人的眼神与三年前去世的民间女子一模一样。",
        "url": "./movies/movie-1526.html",
        "image": "./26.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "闺蜜的危险游戏",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑/犯罪",
        "tags": [
            "闺蜜",
            "设局",
            "豪门",
            "保险欺诈",
            "反转"
        ],
        "oneLine": "一心想嫁入豪门的女人,被闺蜜怂恿上演“假失踪”戏码,却发现自己才是猎物。",
        "url": "./movies/movie-1527.html",
        "image": "./27.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "祭品",
        "year": "2023",
        "region": "泰国",
        "type": "电影",
        "genre": "恐怖,惊悚,悬疑",
        "tags": [
            "邪教",
            "民俗",
            "献祭",
            "反转",
            "轮回"
        ],
        "oneLine": "一名无神论者参加荒岛灵修营,醒来后发现自己是献祭给“旧神”的第99个祭品。",
        "url": "./movies/movie-1528.html",
        "image": "./28.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "比弗利拜金狗",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧/家庭",
        "tags": [
            "狗狗",
            "比弗利山庄",
            "拜金",
            "冒险",
            "治愈"
        ],
        "oneLine": "一只被宠坏的比弗利贵宾犬流落墨西哥街头,它唯一的回归工具,是用奢侈品知识去拯救一家快要倒闭的流浪狗收容所。",
        "url": "./movies/movie-1529.html",
        "image": "./29.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "导火新闻线粤语",
        "year": "2016",
        "region": "中国香港",
        "type": "剧集",
        "genre": "剧情/悬疑",
        "tags": [
            "新闻媒体",
            "粤语原声",
            "职场",
            "真相"
        ],
        "oneLine": "一桩死刑冤案,让曾经对立的两位女记者联手,在三天内与时间赛跑,用镜头对抗体制。",
        "url": "./movies/movie-1530.html",
        "image": "./30.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "小丑之夜",
        "year": "2025",
        "region": "德国",
        "type": "电影",
        "genre": "剧情/心理/黑色",
        "tags": [
            "马戏团",
            "小丑",
            "纳粹时期",
            "生存抉择",
            "笑中带泪"
        ],
        "oneLine": "1943年柏林,一个犹太小丑每晚用表演逗笑纳粹军官,只为换取三天后送往集中营的朋友的性命。",
        "url": "./movies/movie-1531.html",
        "image": "./31.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "爱在零纬度",
        "year": "2022",
        "region": "南极",
        "type": "电影",
        "genre": "爱情、剧情",
        "tags": [
            "极地",
            "科考",
            "异国恋",
            "生存",
            "唯美"
        ],
        "oneLine": "在南极科考站,一个中国气象员与一个阿根廷女医生在极夜的黑暗中点燃了跨越零度的爱火。",
        "url": "./movies/movie-1532.html",
        "image": "./32.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "民间故事:长塘录音室现场",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "音乐、剧情",
        "tags": [
            "录音室",
            "都市传说",
            "一镜到底"
        ],
        "oneLine": "一座废弃录音棚的调音台能“听见”死者最后的留言,五个陌生人带着各自逝去的执念前来录音。",
        "url": "./movies/movie-1533.html",
        "image": "./33.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "扑克王",
        "year": "2020",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情/犯罪/动作",
        "tags": [
            "赌博",
            "黑帮",
            "兄弟情",
            "反类型"
        ],
        "oneLine": "一个数学天才被黑帮养大成为赌场王牌,却在一次牌局上算出整个赌场其实是一个巨大的洗钱骗局。",
        "url": "./movies/movie-1534.html",
        "image": "./34.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "尼罗河之子",
        "year": "2026",
        "region": "埃及/英国",
        "type": "电影",
        "genre": "奇幻/冒险",
        "tags": [
            "古埃及神话",
            "父子情",
            "寻宝"
        ],
        "oneLine": "开罗少年发现自己能控制尼罗河水,被卷入一场守护法老血脉的千年之争。",
        "url": "./movies/movie-1535.html",
        "image": "./35.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "沉默的心",
        "year": "2024",
        "region": "丹麦",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "绝症",
            "告别",
            "家庭聚会",
            "和解",
            "北欧冷感"
        ],
        "oneLine": "罹患绝症的母亲决定在失去意识前举办最后一场家庭聚会,并要求每位成员必须对她说出最残忍的真话。",
        "url": "./movies/movie-1536.html",
        "image": "./36.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "生日快乐国语",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情,爱情",
        "tags": [
            "虐恋",
            "语言隔阂",
            "新移民",
            "文艺风"
        ],
        "oneLine": "一个只说普通话的北京女孩爱上一个只说粤语的香港警察,他们听不懂彼此的语言,却读懂了彼此的痛苦。",
        "url": "./movies/movie-1537.html",
        "image": "./37.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "一起乐队吧",
        "year": "2026",
        "region": "中国大陆",
        "type": "综艺",
        "genre": "音乐,真人秀,竞技",
        "tags": [
            "乐队",
            "乐手",
            "青春",
            "组建"
        ],
        "oneLine": "一群顶尖的独立乐手,放下过去荣耀,像高中生一样从零开始,限时组建一支能“活下去”的商业乐队。",
        "url": "./movies/movie-1538.html",
        "image": "./38.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "德瓦",
        "year": "2027",
        "region": "印度",
        "type": "电影",
        "genre": "动作,剧情,神话",
        "tags": [
            "警察",
            "复仇",
            "神灵",
            "种姓",
            "仪式感"
        ],
        "oneLine": "一个不信神的莽撞警察被下穿,他必须在一群“神灵”的帮助下,找回自己丢失的“德瓦”(神性)。",
        "url": "./movies/movie-1539.html",
        "image": "./39.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "爱的使命",
        "year": "2025",
        "region": "泰国",
        "type": "剧集",
        "genre": "爱情/动作/剧情",
        "tags": [
            "特工",
            "先婚后爱",
            "欢喜冤家",
            "守护",
            "高颜值"
        ],
        "oneLine": "一个王牌特工为执行保护任务,被迫与刁蛮任性的富家千金假结婚,却在真枪实弹中假戏真做。",
        "url": "./movies/movie-1540.html",
        "image": "./40.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "余下的就是沉默国语",
        "year": "2022",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑/犯罪",
        "tags": [
            "东北往事",
            "冷幽默",
            "小镇悬疑",
            "哑巴主角"
        ],
        "oneLine": "哑巴修表匠目睹了一场谋杀,为了向当保安的侄子传递线索,他被迫用修表的工具写起了“密文”。",
        "url": "./movies/movie-1541.html",
        "image": "./41.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "爱的追踪",
        "year": "2015",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "悬疑,爱情,刑侦",
        "tags": [
            "追踪",
            "错位",
            "旧案",
            "纠葛"
        ],
        "oneLine": "女刑警追踪一桩连环杀人案,却发现所有线索都指向了二十年前抛弃她的生父。",
        "url": "./movies/movie-1542.html",
        "image": "./42.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "钢魂",
        "year": "2026",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "工业/年代/家庭",
        "tags": [
            "钢铁厂",
            "三代人",
            "国企改革"
        ],
        "oneLine": "东北一座老钢厂从“共和国长子”到破产重组,三代钢铁工人的热血与梦碎。",
        "url": "./movies/movie-1543.html",
        "image": "./43.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "里约之路",
        "year": "2026",
        "region": "巴西",
        "type": "电影",
        "genre": "冒险/喜剧",
        "tags": [
            "公路电影",
            "贫民窟",
            "狂欢节"
        ],
        "oneLine": "一个迷路的日本背包客和一个想偷他钱包的本地男孩,一起横穿里约去找一个不存在的地址。",
        "url": "./movies/movie-1544.html",
        "image": "./44.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "美少爷之恋",
        "year": "2024",
        "region": "中国大陆",
        "type": "网络剧",
        "genre": "爱情/古装",
        "tags": [
            "甜宠",
            "女扮男装",
            "科举"
        ],
        "oneLine": "为了继承家产,她女扮男装考科举,却被同期考生“京城第一美少爷”疯狂追求。",
        "url": "./movies/movie-1545.html",
        "image": "./45.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "全球高武·动态漫",
        "year": "2021",
        "region": "中国",
        "type": "动画",
        "genre": "动作/玄幻/热血",
        "tags": [
            "动态漫画",
            "异能",
            "修炼",
            "国漫",
            "爽文改编"
        ],
        "oneLine": "地窟入侵,全球高武,重生归来的方平发誓:这辈子不但要活着,还要活成最强者!",
        "url": "./movies/movie-1546.html",
        "image": "./46.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "皇上保重国语",
        "year": "1995",
        "region": "中国香港",
        "type": "剧集",
        "genre": "古装,宫廷,喜剧",
        "tags": [
            "太监",
            "假皇帝",
            "狸猫换太子",
            "搞笑"
        ],
        "oneLine": "贪生怕死的小太监被逼假扮皇帝,结果发现:当皇上比当太监危险一万倍。",
        "url": "./movies/movie-1547.html",
        "image": "./47.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "二人·世界",
        "year": "2024",
        "region": "日本",
        "type": "剧集",
        "genre": "爱情/剧情/生活",
        "tags": [
            "治愈系",
            "同居日常",
            "无声胜有声",
            "都会爱情"
        ],
        "oneLine": "两个都有社交恐惧症的年轻人成为了室友,他们在同一个屋檐下尽量互不打扰,却慢慢成为了彼此唯一的光。",
        "url": "./movies/movie-1548.html",
        "image": "./48.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "无人岛猎人传说",
        "year": "2023",
        "region": "韩国",
        "type": "电影",
        "genre": "悬疑,动作,惊悚",
        "tags": [
            "孤岛",
            "猎杀游戏",
            "反转"
        ],
        "oneLine": "七个主播为流量孤岛求生,却发现岛上真有“猎人”,且直播弹幕可以决定谁先死。",
        "url": "./movies/movie-1549.html",
        "image": "./49.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "边缘日记",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/青春",
        "tags": [
            "残酷青春",
            "校园霸凌",
            "犯罪边缘",
            "自我救赎"
        ],
        "oneLine": "一个重点高中的模范生,如何一步步滑向贩卖笑气的深渊。",
        "url": "./movies/movie-1550.html",
        "image": "./50.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "战狼传奇",
        "year": "2025",
        "region": "中国",
        "type": "电影",
        "genre": "动作/战争",
        "tags": [
            "特种兵",
            "复仇",
            "海外",
            "爱国"
        ],
        "oneLine": "退役战狼被诬陷叛国,独闯境外雇佣兵基地自证清白。",
        "url": "./movies/movie-1551.html",
        "image": "./51.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "女恶魔人",
        "year": "2030",
        "region": "日本",
        "type": "剧集",
        "genre": "动作/奇幻",
        "tags": [
            "恶魔变身",
            "女性觉醒",
            "血腥打斗"
        ],
        "oneLine": "柔弱的女大学生体内沉睡着毁灭世界的恶魔之力,她必须学会控制这份力量,去猎杀同类。",
        "url": "./movies/movie-1552.html",
        "image": "./52.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "拯救星际大战",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "科幻/动作/冒险",
        "tags": [
            "宇宙大战",
            "机甲战队",
            "少年英雄",
            "光速旅行"
        ],
        "oneLine": "当反派军团用重力武器吸走一颗恒星,四名少年驾驶旧时代机甲踏上了跨星系救援之路。",
        "url": "./movies/movie-1553.html",
        "image": "./53.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "神秘之堡",
        "year": "2027",
        "region": "西班牙",
        "type": "电影",
        "genre": "悬疑,恐怖",
        "tags": [
            "密室",
            "遗产",
            "家族秘密",
            "城堡"
        ],
        "oneLine": "八名陌生人受邀来到阿尔卑斯山的古堡,每个房间都藏着一个主人不可告人的罪行。",
        "url": "./movies/movie-1554.html",
        "image": "./54.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "女气",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情,运动",
        "tags": [
            "女性",
            "拳击",
            "逆袭",
            "身体政治",
            "励志"
        ],
        "oneLine": "被嘲笑“出拳像女人”的男拳手,为了证明自己,戴上假发去参加女子地下拳赛。",
        "url": "./movies/movie-1555.html",
        "image": "./55.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "我家有个赵大咪",
        "year": "2015",
        "region": "中国",
        "type": "剧集",
        "genre": "家庭/喜剧",
        "tags": [
            "保姆",
            "代沟",
            "治愈"
        ],
        "oneLine": "东北彪悍大婶进城做保姆,把一个精英单亲家庭搅得天翻地覆后却治愈了所有人。",
        "url": "./movies/movie-1556.html",
        "image": "./56.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "关于她",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/爱情",
        "tags": [
            "女性",
            "记忆",
            "情感",
            "秘密"
        ],
        "oneLine": "一本意外发现的旧日记,让男人重新认识了已故妻子从未示人的另一面。",
        "url": "./movies/movie-1557.html",
        "image": "./57.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "疯人计划",
        "year": "2024",
        "region": "美国/德国",
        "type": "剧集",
        "genre": "科幻/悬疑/惊悚",
        "tags": [
            "高概念",
            "精神病院",
            "记忆植入",
            "阴谋论",
            "烧脑"
        ],
        "oneLine": "七个自称来自不同时代的“疯子”被关在同一间精神病院,他们争论到底是谁的程序崩溃了。",
        "url": "./movies/movie-1558.html",
        "image": "./58.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "审死官翻案",
        "year": "2025",
        "region": "中国大陆/香港",
        "type": "网络剧",
        "genre": "悬疑,古装,律政",
        "tags": [
            "南宋",
            "法医学",
            "连环冤案",
            "翻案"
        ],
        "oneLine": "南宋一桩灭门案惊动朝野,一个被贬小官用现代刑侦思维重启调查。",
        "url": "./movies/movie-1559.html",
        "image": "./59.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "波登人生不设限",
        "year": "2021",
        "region": "美国",
        "type": "纪录片",
        "genre": "纪录片/传记",
        "tags": [
            "美食",
            "旅行",
            "精神世界",
            "人生哲学"
        ],
        "oneLine": "透过已故名厨波登从未公开的私人录音和影像,拼凑出一个并非偶像、而是真实脆弱的灵魂地图。",
        "url": "./movies/movie-1560.html",
        "image": "./60.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "中国兵王·绝密任务",
        "year": "2026",
        "region": "中国",
        "type": "电影",
        "genre": "动作,战争,军事",
        "tags": [
            "特种兵",
            "境外营救",
            "硬核实战"
        ],
        "oneLine": "三名中国兵王退役后在海外开安保公司,接到一个任务:从毒枭手里救出被绑架的前女友们。",
        "url": "./movies/movie-1561.html",
        "image": "./61.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "哈哈哈哈哈第四季",
        "year": "2026",
        "region": "中国大陆",
        "type": "综艺",
        "genre": "真人秀,喜剧",
        "tags": [
            "公路旅行",
            "即兴喜剧",
            "明星整蛊"
        ],
        "oneLine": "五名喜剧人被困在一辆没油、没电、没信号的废弃大巴上,必须用“讲笑话发电”才能逃生。",
        "url": "./movies/movie-1562.html",
        "image": "./62.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "比尔和泰德历险记",
        "year": "1989",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧,科幻,冒险",
        "tags": [
            "穿越时空",
            "摇滚",
            "电话亭",
            "荒诞"
        ],
        "oneLine": "两个高中差生为了通过历史考试,竟用时间电话亭绑架了拿破仑等历史名人。",
        "url": "./movies/movie-1563.html",
        "image": "./63.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "觉醒",
        "year": "2011",
        "region": "英国",
        "type": "电影",
        "genre": "剧情/悬疑/恐怖",
        "tags": [
            "鬼魂",
            "骗局",
            "1920年代",
            "反转"
        ],
        "oneLine": "著名的“打假”心理学家去鬼宅揭穿骗局,却发现自己才是那个“见鬼”的人。",
        "url": "./movies/movie-1564.html",
        "image": "./64.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "寻狗记",
        "year": "2026",
        "region": "中国",
        "type": "电影",
        "genre": "悬疑/剧情",
        "tags": [
            "丢失",
            "监控",
            "社区",
            "邻里",
            "黑色幽默"
        ],
        "oneLine": "一只柯基走丢后,男主翻遍小区监控,发现那天失踪的不只是狗,还有三楼的女人。",
        "url": "./movies/movie-1565.html",
        "image": "./65.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "重案组粤语",
        "year": "2024",
        "region": "中国香港",
        "type": "剧集",
        "genre": "警匪、动作、犯罪",
        "tags": [
            "卧底",
            "枪战",
            "毒品调查",
            "兄弟情",
            "粤语原声"
        ],
        "oneLine": "卧底警员何志宏在即将收网时,发现自己最信任的线人竟是贩毒集团安插的内鬼。",
        "url": "./movies/movie-1566.html",
        "image": "./66.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "高地人:复仇之旅",
        "year": "2025",
        "region": "英国/加拿大",
        "type": "动画电影",
        "genre": "动作/奇幻/历史",
        "tags": [
            "苏格兰",
            "不死者",
            "剑斗",
            "穿越历史"
        ],
        "oneLine": "苏格兰高地不死战士穿越两千年,只为杀死引发所有战争的神秘同族。",
        "url": "./movies/movie-1567.html",
        "image": "./67.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "狂热复仇",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "动作,惊悚",
        "tags": [
            "复仇",
            "高科技",
            "反乌托邦",
            "飙车",
            "黑客"
        ],
        "oneLine": "被判无罪的天才黑客利用城市电网向杀害女儿的仇人发动一场“数字化”复仇。",
        "url": "./movies/movie-1568.html",
        "image": "./68.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "熔岩热恋",
        "year": "2024",
        "region": "冰岛",
        "type": "电影",
        "genre": "爱情/剧情",
        "tags": [
            "灾难",
            "末日恋曲",
            "极简主义",
            "活火山",
            "逃生"
        ],
        "oneLine": "一对即将离婚的夫妻在冰岛签署离婚协议时遭遇火山爆发,被隔绝在即将被岩浆吞没的小屋中,被迫重新审视彼此。",
        "url": "./movies/movie-1569.html",
        "image": "./69.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "第九区",
        "year": "2009",
        "region": "美国/新西兰",
        "type": "电影",
        "genre": "科幻",
        "tags": [
            "外星难民",
            "种族隔离",
            "身体异变"
        ],
        "oneLine": "一艘巨大飞船停在南非上空,里面的外星难民被隔离在“第九区”,一个人类管理员在执法中开始变成他们。",
        "url": "./movies/movie-1570.html",
        "image": "./70.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "3张26日的票",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "剧情悬疑",
        "tags": [
            "时空循环",
            "命运交叉",
            "催泪治愈"
        ],
        "oneLine": "三个陌生人发现各自都有一张26日的电影票,而那天从未真正到来。",
        "url": "./movies/movie-1571.html",
        "image": "./71.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "胖女孩",
        "year": "2019",
        "region": "美国",
        "type": "电影",
        "genre": "剧情/喜剧",
        "tags": [
            "身材焦虑",
            "校园霸凌",
            "逆袭"
        ],
        "oneLine": "全校最胖的女孩决定竞选舞会皇后,对手是她暗恋十年的男生。",
        "url": "./movies/movie-1572.html",
        "image": "./72.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "您一定不要错过",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/冒险/西部",
        "tags": [
            "内蒙草原",
            "寻父之旅",
            "公路冒险",
            "历史伤痕"
        ],
        "oneLine": "一个城市少年带着一封信踏上内蒙古草原,寻找从未来过、却在信中给他留下了一群“兄弟”的父亲。",
        "url": "./movies/movie-1573.html",
        "image": "./73.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "珈百璃的堕落",
        "year": "2024",
        "region": "日本",
        "type": "剧集",
        "genre": "奇幻喜剧",
        "tags": [
            "天使",
            "废柴",
            "反差萌",
            "日常"
        ],
        "oneLine": "天堂首席优等生珈百璃来到人间修行,却意外沉迷网络游戏变成了顶级废柴。",
        "url": "./movies/movie-1574.html",
        "image": "./74.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "来自大海的女人",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "奇幻/剧情/家庭",
        "tags": [
            "人鱼传说",
            "济州岛",
            "隔代和解",
            "海女"
        ],
        "oneLine": "叛逆的都市少女在祖母的葬礼上,发现祖母曾是被人鱼救下的“来自大海的女人”。",
        "url": "./movies/movie-1575.html",
        "image": "./75.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "寻宝侦探",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "悬疑冒险",
        "tags": [
            "文物解密",
            "历史谜团",
            "双线叙事",
            "智斗"
        ],
        "oneLine": "文物局研究员通过爷爷留下的半本《山海经》手稿,发现了一场横跨百年的盗宝阴谋。",
        "url": "./movies/movie-1576.html",
        "image": "./76.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "双时空男友",
        "year": "2021",
        "region": "韩国",
        "type": "电视剧",
        "genre": "爱情,奇幻,悬疑",
        "tags": [
            "平行世界",
            "穿越恋爱",
            "救赎",
            "暖男"
        ],
        "oneLine": "绝望的职场女性意外收到来自十年前和十年后的两个“男友”发来的求救短信。",
        "url": "./movies/movie-1577.html",
        "image": "./77.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "魔鬼藏在同意书",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "惊悚/悬疑",
        "tags": [
            "合约",
            "邪教",
            "心理",
            "反转"
        ],
        "oneLine": "一位律师为母亲签署一份临终关怀同意书后,发现所有签过字的人都陆续离奇自杀。",
        "url": "./movies/movie-1578.html",
        "image": "./78.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "亿人局之迪拜贱客",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧/犯罪/动作",
        "tags": [
            "迪拜",
            "诈骗",
            "搞笑",
            "兄弟情"
        ],
        "oneLine": "三个中国loser被骗到迪拜搞电信诈骗,结果他们反杀了诈骗集团,还顺手赚了一个亿迪拉姆。",
        "url": "./movies/movie-1579.html",
        "image": "./79.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "喜剧之王2014",
        "year": "2014",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情,喜剧",
        "tags": [
            "龙套",
            "励志",
            "致敬"
        ],
        "oneLine": "横店漂了十年的龙套阿星,在接到杀手任务时,才发现生活才是最荒诞的剧本。",
        "url": "./movies/movie-1580.html",
        "image": "./80.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "甜蜜池畔",
        "year": "2024",
        "region": "台湾",
        "type": "电影",
        "genre": "爱情/同性",
        "tags": [
            "青春",
            "游泳池",
            "成长",
            "夏日"
        ],
        "oneLine": "两个性格迥异的高中女生,在一个废弃游泳池的夏日秘密约会中,发现了彼此最真实的模样。",
        "url": "./movies/movie-1581.html",
        "image": "./81.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "复仇之火",
        "year": "2019",
        "region": "韩国",
        "type": "电影",
        "genre": "动作,惊悚,犯罪",
        "tags": [
            "复仇",
            "以暴制暴",
            "消防员",
            "黑帮",
            "底层"
        ],
        "oneLine": "一名被解雇的消防员,为了给被活活烧死的女儿报仇,自学成纵火犯。",
        "url": "./movies/movie-1582.html",
        "image": "./82.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "浪荡少年时",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情,同性,青春",
        "tags": [
            "街头混混",
            "初恋",
            "自我认同"
        ],
        "oneLine": "90年代的台北街头,一个混迹街头的少年爱上了常被自己欺负的同班优等生。",
        "url": "./movies/movie-1583.html",
        "image": "./83.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "军校风云",
        "year": "2024",
        "region": "中国",
        "type": "剧集",
        "genre": "军旅/励志/青春",
        "tags": [
            "陆航",
            "成长",
            "兄弟情",
            "特种兵"
        ],
        "oneLine": "刺头兵、计算机天才、军二代在陆军航空兵学院从互坑互害到炼成最强飞行编队。",
        "url": "./movies/movie-1584.html",
        "image": "./84.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "想一个人死去",
        "year": "2026",
        "region": "日本",
        "type": "电视剧",
        "genre": "剧情,生活,治愈",
        "tags": [
            "社交恐惧",
            "独居生活",
            "自我和解"
        ],
        "oneLine": "一个想自杀的社恐青年,租了一间“凶宅”,却发现隔壁住着比他更丧的老太太。",
        "url": "./movies/movie-1585.html",
        "image": "./85.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "联邦调查局第八季",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "动作,犯罪",
        "tags": [
            "特工",
            "反恐",
            "连环案",
            "悬疑"
        ],
        "oneLine": "资深女特工回归,带领新人追查模仿“十二宫”的连环杀手,却发现真凶竟潜伏在FBI内部。",
        "url": "./movies/movie-1586.html",
        "image": "./86.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "旧爱结新欢",
        "year": "2009",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情、喜剧、都市",
        "tags": [
            "前任婚礼",
            "反套路",
            "港式爱情轻喜",
            "四角恋",
            "乌龙"
        ],
        "oneLine": "女主受邀参加前男友的婚礼,却发现前男友娶的是自己的现任闺蜜,而婚礼策划师是自己的另一个前任。",
        "url": "./movies/movie-1587.html",
        "image": "./87.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "黛西·米勒",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "爱情/剧情",
        "tags": [
            "名著改编",
            "欧美田园",
            "阶级差异",
            "女性觉醒",
            "悲剧美学"
        ],
        "oneLine": "19世纪欧洲旅途中,天真活泼的美国富家女黛西,用她的“不体面”撕开了上流社会的虚伪。",
        "url": "./movies/movie-1588.html",
        "image": "./88.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "我留下来!",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情",
        "tags": [
            "留守",
            "乡村",
            "儿童",
            "公益",
            "真实改编"
        ],
        "oneLine": "大学毕业前夕,本已拿到城市offer的女孩,因为村里一群留守儿童的挽留,选择撕掉合同,成为“永不离开的小老师”。",
        "url": "./movies/movie-1589.html",
        "image": "./89.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "雨中曲",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "歌舞,爱情",
        "tags": [
            "翻拍",
            "怀旧",
            "好莱坞",
            "雨中跳舞"
        ],
        "oneLine": "现代舞舞者意外穿越到1952年《雨中曲》片场,与沉默的替身演员共舞,改变了两段人生。",
        "url": "./movies/movie-1590.html",
        "image": "./90.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "命中注定我爱你",
        "year": "2024",
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "爱情,喜剧",
        "tags": [
            "便利贴女孩",
            "霸总",
            "先婚后爱",
            "契约婚姻",
            "翻拍"
        ],
        "oneLine": "一次豪华游轮上的意外一夜情,让便利贴女孩和冷酷总裁被迫契约结婚,两人却越陷越深。",
        "url": "./movies/movie-1591.html",
        "image": "./91.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "暴烈妈妈",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/家庭/运动",
        "tags": [
            "母爱",
            "拳击",
            "女性力量",
            "绝症"
        ],
        "oneLine": "一个被确诊只剩三个月生命的单亲妈妈,决定去参加一场地下拳击赛,只为给自闭症儿子挣够余生费用。",
        "url": "./movies/movie-1592.html",
        "image": "./92.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "贝尔戈维亚",
        "year": "2024",
        "region": "英国",
        "type": "剧集",
        "genre": "剧情,历史,爱情",
        "tags": [
            "维多利亚时代",
            "阶级跨越",
            "家族秘史",
            "服道化盛宴"
        ],
        "oneLine": "一个平民女继承了贵族庄园,她必须在三个月内学会当一名“女勋爵”,否则一切将被收回。",
        "url": "./movies/movie-1593.html",
        "image": "./93.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "绑票惊爆点",
        "year": "2024",
        "region": "西班牙",
        "type": "电影",
        "genre": "悬疑、犯罪、惊悚",
        "tags": [
            "密室",
            "实时叙事",
            "多重反转",
            "社会讽刺"
        ],
        "oneLine": "三个笨贼绑架了房地产大亨,却发现人质是冒牌货,而真正的富豪正在电视上直播竞选市长。",
        "url": "./movies/movie-1594.html",
        "image": "./94.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "你好,来了",
        "year": "2025",
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "奇幻,家庭,温情",
        "tags": [
            "遗憾事务所",
            "人生最后一次告别",
            "催泪",
            "单元剧"
        ],
        "oneLine": "一家只在深夜营业的神秘便利店,每个走进来的顾客都能在这里见到一位“还没来得及告别”的逝者。",
        "url": "./movies/movie-1595.html",
        "image": "./95.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "少女与战车 剧场版",
        "year": "2015",
        "region": "日本",
        "type": "电影/动画",
        "genre": "动作/校园",
        "tags": [
            "战车竞技",
            "少女",
            "热血"
        ],
        "oneLine": "为了拯救即将废校的大洗学园,西住美穗带领“战车道”社团以弱胜强,迎战全国最强大学选拔队。",
        "url": "./movies/movie-1596.html",
        "image": "./96.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "分手工作室2",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情/喜剧/剧情",
        "tags": [
            "婚姻调解",
            "前任反击战",
            "复合与放手"
        ],
        "oneLine": "一对分手后反而成了金牌调解搭档的前情侣,接到的第100个案子是他们自己。",
        "url": "./movies/movie-1597.html",
        "image": "./97.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "清明上河图密码之汴京梦华",
        "year": "2025",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "古装、悬疑、历史",
        "tags": [
            "宋朝",
            "市井",
            "连环案",
            "文化"
        ],
        "oneLine": "清明上河图上隐藏着24个命案,画师张择端其实是北宋第一神探。",
        "url": "./movies/movie-1598.html",
        "image": "./98.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "生命之源2000",
        "year": "2000",
        "region": "法国/德国",
        "type": "电影",
        "genre": "科幻/哲学",
        "tags": [
            "水源枯竭",
            "记忆之水",
            "诗意科幻",
            "黑白"
        ],
        "oneLine": "2050年最后一滴水被拍卖,但穷人发现:泪水可以净化成饮用水。",
        "url": "./movies/movie-1599.html",
        "image": "./99.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "太阳花",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "阿尔茨海默",
            "母女",
            "园艺",
            "治愈"
        ],
        "oneLine": "失忆的母亲只记得女儿小时候最爱的向日葵,女儿决定在家门口种出一片花海等她回来。",
        "url": "./movies/movie-1600.html",
        "image": "./100.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "笑面杀手",
        "year": "2027",
        "region": "香港",
        "type": "剧集",
        "genre": "动作/犯罪/悬疑",
        "tags": [
            "双重身份",
            "连环杀手",
            "港式警匪"
        ],
        "oneLine": "一位总是面带温暖微笑的社工,白天拯救边缘少年,晚上替天行道,杀掉那些逃脱法律制裁的恶人。",
        "url": "./movies/movie-1601.html",
        "image": "./101.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "济公之英雄归位",
        "year": "2018",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧/奇幻",
        "tags": [
            "济公",
            "降妖",
            "修仙",
            "搞笑"
        ],
        "oneLine": "废柴济公被贬下凡,只有集齐七颗“英雄舍利”才能重归佛位。",
        "url": "./movies/movie-1602.html",
        "image": "./102.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "惊心食人族2",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖,惊悚",
        "tags": [
            "怪物",
            "公路",
            "血浆"
        ],
        "oneLine": "23年后,初代幸存者的子女乘坐校车经过同一条公路,这次他们要面对的是进化后的食人魔。",
        "url": "./movies/movie-1603.html",
        "image": "./103.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "二人世界",
        "year": "2025",
        "region": "日本",
        "type": "剧集",
        "genre": "爱情/剧情",
        "tags": [
            "婚后生活",
            "日常",
            "治愈",
            "坂元裕二风格",
            "对话体"
        ],
        "oneLine": "新婚小夫妻搬进新家,却发现整栋楼只有他们两个活人,其他的“邻居”都是AI投影。 搬进“智能社区”的新婚夫妻,每晚都会和AI邻居们聊天,却意外通过这些程序,提前预演了自己婚姻可能出现的全部危机。",
        "url": "./movies/movie-1604.html",
        "image": "./104.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "面具杀机",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖/惊悚/心理",
        "tags": [
            "深伪技术",
            "AI换脸",
            "数字谋杀",
            "网络追踪",
            "身份盗窃"
        ],
        "oneLine": "一个程序员发明了一款可以完美模仿任何人脸和声音的APP,然后他用它来“删除”现实中讨厌的人。",
        "url": "./movies/movie-1605.html",
        "image": "./105.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "东宫毒",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装,悬疑,宫斗",
        "tags": [
            "太子妃",
            "慢性毒药",
            "东宫疑云",
            "仵作验毒",
            "权谋"
        ],
        "oneLine": "太子妃大婚当夜暴毙,被赐死的侍女死里逃生,化名仵作潜入东宫,追查一种能让死人看上去像活人的奇毒。",
        "url": "./movies/movie-1606.html",
        "image": "./106.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "麻醉风暴",
        "year": "2015",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "悬疑/医疗",
        "tags": [
            "麻醉科",
            "医疗过失",
            "揭弊",
            "职场霸凌",
            "人球案"
        ],
        "oneLine": "一场寻常手术的麻醉意外,掀翻了整个医院高层的权力黑幕,麻醉医生成了替罪羊。",
        "url": "./movies/movie-1607.html",
        "image": "./107.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "手铐2024",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作/犯罪/悬疑",
        "tags": [
            "密室",
            "双雄对决",
            "反转",
            "社会批判"
        ],
        "oneLine": "黑警与毒枭被一副高科技手铐锁在一起,必须在12小时内逃出全城封杀的废弃缉毒大楼,否则手铐会注射致命毒剂。",
        "url": "./movies/movie-1608.html",
        "image": "./108.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "激情炎岭",
        "year": "1991",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作/犯罪",
        "tags": [
            "枪战",
            "兄弟情",
            "旧港片"
        ],
        "oneLine": "炎热的边界线上,两个被抛弃的雇佣兵,要在毒枭和黑警的夹缝中杀出一条血路。",
        "url": "./movies/movie-1609.html",
        "image": "./109.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "聊斋志异",
        "year": "2025",
        "region": "中国",
        "type": "剧集",
        "genre": "奇幻/古装/恐怖",
        "tags": [
            "单元剧",
            "志怪",
            "现代改编"
        ],
        "oneLine": "重启经典IP,用现代科学和心理学,重新解构《聊斋》中六十个最诡异的狐鬼故事。",
        "url": "./movies/movie-1610.html",
        "image": "./110.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "盲人乐队",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情音乐",
        "tags": [
            "盲人",
            "摇滚",
            "梦想",
            "师生"
        ],
        "oneLine": "一所盲人学校的几个问题少年,决定组建一支摇滚乐队参加全国大赛。",
        "url": "./movies/movie-1611.html",
        "image": "./111.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "五香宫的猫",
        "year": "2019",
        "region": "日本",
        "type": "动画电影",
        "genre": "奇幻/治愈/家庭",
        "tags": [
            "猫咪",
            "神社",
            "时间回溯",
            "吉卜力风"
        ],
        "oneLine": "一个无法接受祖母去世的女孩,发现神社里的招财猫每晚都会带她回到过去见祖母一面。",
        "url": "./movies/movie-1612.html",
        "image": "./112.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "我的可爱对黑岩目高不管用",
        "year": "2023",
        "region": "日本",
        "type": "剧集",
        "genre": "喜剧,爱情,校园",
        "tags": [
            "漫改",
            "反差萌",
            "万人迷",
            "冰山男主",
            "沙雕甜"
        ],
        "oneLine": "全校公认“可爱即正义”的少女网红,遇到了一个眼里只有岩石、对她颜值完全免疫的怪咖地质少年。",
        "url": "./movies/movie-1613.html",
        "image": "./113.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "幻梦战记莉达",
        "year": "2027",
        "region": "日本",
        "type": "动画剧集",
        "genre": "科幻/战斗/少女",
        "tags": [
            "梦境入侵",
            "机甲",
            "意识流"
        ],
        "oneLine": "高二女生莉达每天醒来都会忘记昨晚的梦,但她不知道的是,人类抵抗外星文明的最后一支军队就藏在她的梦里。",
        "url": "./movies/movie-1614.html",
        "image": "./114.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "不一样的天空",
        "year": "1993",
        "region": "美国",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "小李子",
            "德普",
            "生活",
            "治愈"
        ],
        "oneLine": "小镇青年吉伯特被困在肥胖的母亲和智障的弟弟之间,一个过路女孩的到来让他看到了“不一样的天空”。",
        "url": "./movies/movie-1615.html",
        "image": "./115.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "安妮回忆录",
        "year": "2021",
        "region": "英国",
        "type": "电影",
        "genre": "剧情/传记",
        "tags": [
            "女作家",
            "老年",
            "记忆迷雾",
            "二战"
        ],
        "oneLine": "90岁的畅销书女作家安妮开始撰写回忆录,却发现自己的记忆与他人讲述的版本截然不同。",
        "url": "./movies/movie-1616.html",
        "image": "./116.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "蜡像院杀人王",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖,惊悚",
        "tags": [
            "蜡像馆",
            "连环杀手",
            "活人蜡像",
            "变态",
            "血腥"
        ],
        "oneLine": "一群大学生闯入废弃蜡像馆,发现所有逼真的蜡像都是被注入了活人组织的艺术品。",
        "url": "./movies/movie-1617.html",
        "image": "./117.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "夺桥遗恨",
        "year": "2020",
        "region": "中国大陆",
        "type": "电影",
        "genre": "战争,历史",
        "tags": [
            "抗战",
            "桥梁",
            "牺牲"
        ],
        "oneLine": "抗战最后一役,一支残兵连奉命炸掉主桥阻敌,却发现桥那头还有三万百姓没撤离。",
        "url": "./movies/movie-1618.html",
        "image": "./118.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "墨菲的战争",
        "year": "2026",
        "region": "英国",
        "type": "电影",
        "genre": "战争/剧情/心理",
        "tags": [
            "战争创伤",
            "复仇",
            "孤独",
            "海岸",
            "心理惊悚"
        ],
        "oneLine": "二战结束30年后,一个退役老兵发现当年击沉他军舰的U型艇船长,就住在自己对面。",
        "url": "./movies/movie-1619.html",
        "image": "./119.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "蓝色项圈",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "惊悚/职场",
        "tags": [
            "大厂裁员",
            "高压竞争",
            "蓝领隐喻"
        ],
        "oneLine": "当公司强制所有人戴上能监测工作效率的“蓝色项圈”,排名末尾的淘汰者会直接消失,没人知道他们去了哪里。",
        "url": "./movies/movie-1620.html",
        "image": "./120.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "阴尘不散",
        "year": "2024",
        "region": "中国香港/泰国",
        "type": "电影",
        "genre": "恐怖/惊悚",
        "tags": [
            "凶宅",
            "轮回",
            "尘肺病",
            "民俗"
        ],
        "oneLine": "装修队在老楼里挖出一堵尘墙,每敲一下,灰烬里就浮现一张死者的脸。",
        "url": "./movies/movie-1621.html",
        "image": "./121.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "芳心谋杀",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "悬疑惊悚",
        "tags": [
            "骗婚",
            "蛇蝎女",
            "反转",
            "黑色电影"
        ],
        "oneLine": "一对母女连环骗婚杀手,盯上了专门鉴定遗产继承权的冷酷律师。",
        "url": "./movies/movie-1622.html",
        "image": "./122.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "最终幻想7:终极指令",
        "year": "2026",
        "region": "日本",
        "type": "电影",
        "genre": "动作,科幻,动画",
        "tags": [
            "游戏改编",
            "神罗",
            "萨菲罗斯"
        ],
        "oneLine": "以塔克斯主任曾的视角,重述尼布尔海姆事件到陨石 disaster 之间,那些不为人知的“脏活”。",
        "url": "./movies/movie-1623.html",
        "image": "./123.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "闺中密友",
        "year": "2024",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "剧情,都市",
        "tags": [
            "女性友谊",
            "职场",
            "背叛"
        ],
        "oneLine": "相识二十年的闺蜜,同时被公司裁员后,其中一个发现另一个就是匿名举报自己的那个人。",
        "url": "./movies/movie-1624.html",
        "image": "./124.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "小马英豪",
        "year": "2022",
        "region": "中国大陆",
        "type": "电影",
        "genre": "家庭,运动",
        "tags": [
            "励志",
            "动物",
            "亲情",
            "成长"
        ],
        "oneLine": "一匹瘦弱的小马和一个失意的骑手,在逆境中彼此救赎,共同向着全国冠军赛发起冲击。",
        "url": "./movies/movie-1625.html",
        "image": "./125.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "破处之旅",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧,青春",
        "tags": [
            "公路",
            "搞笑",
            "成长",
            "成人礼"
        ],
        "oneLine": "三个即将高中毕业的宅男,为了在毕业舞会前“破处”,开启了一场疯狂而倒霉的公路之旅。",
        "url": "./movies/movie-1626.html",
        "image": "./126.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "瓦莱莉和她的奇迹一周",
        "year": "1970",
        "region": "捷克",
        "type": "电影",
        "genre": "奇幻、惊悚",
        "tags": [
            "超现实主义",
            "梦境",
            "少女成长",
            "东欧新浪潮"
        ],
        "oneLine": "一对耳环让少女瓦莱莉看到了小镇成年人世界的所有秘密和丑陋。",
        "url": "./movies/movie-1627.html",
        "image": "./127.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "老子开溜",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧/公路",
        "tags": [
            "中年危机",
            "父子和解",
            "自驾游",
            "黑色幽默"
        ],
        "oneLine": "为逃避父亲葬礼,65岁老顽童开着二手面包车逃跑,逼得35岁工作狂儿子踏上千里追爹路。",
        "url": "./movies/movie-1628.html",
        "image": "./128.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "黯色沙滩",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑/犯罪/剧情",
        "tags": [
            "黑色电影",
            "海边小镇",
            "身份互换",
            "记忆迷局"
        ],
        "oneLine": "失忆的女尸从沙滩上醒来,发现自己是三年前另一起未解悬案的关键证人。",
        "url": "./movies/movie-1629.html",
        "image": "./129.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "朵拉的安宁",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "剧情、文艺、心理",
        "tags": [
            "极简主义",
            "自我救赎",
            "隐居",
            "创伤治愈",
            "自然主义"
        ],
        "oneLine": "逃离都市的女建筑师在阿尔卑斯山废弃小屋中,听见了比寂静更可怕的声音。",
        "url": "./movies/movie-1630.html",
        "image": "./130.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "舞动奇迹",
        "year": "2007",
        "region": "中国香港/中国大陆",
        "type": "电影",
        "genre": "剧情/歌舞/励志",
        "tags": [
            "街舞题材",
            "青春励志",
            "草根逆袭",
            "港式热血"
        ],
        "oneLine": "一位因伤退役的芭蕾舞者和一群街头混混,为了保住即将拆迁的社区中心,组队挑战全国街舞大赛。",
        "url": "./movies/movie-1631.html",
        "image": "./131.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "双重时间",
        "year": "2023",
        "region": "意大利",
        "type": "电影",
        "genre": "爱情/悬疑",
        "tags": [
            "时空",
            "宾馆",
            "谎言"
        ],
        "oneLine": "一对情侣在异地宾馆房间内发现了连接两个不同时空的同一个时钟。",
        "url": "./movies/movie-1632.html",
        "image": "./132.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "网上卫士",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "犯罪,动作,悬疑",
        "tags": [
            "网络安全",
            "黑客",
            "直播",
            "反诈",
            "街头"
        ],
        "oneLine": "一场针对独居女性的暗网虐杀直播,被一位退隐的女白帽黑客无意中截获。",
        "url": "./movies/movie-1633.html",
        "image": "./133.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "我是有情人",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "都市情感",
        "tags": [
            "霸总",
            "契约婚姻",
            "先婚后爱",
            "商战"
        ],
        "oneLine": "为了继承千亿遗产,冷酷霸总必须在三个月内找到一个女人假结婚,他却选中了那个对他恨之入骨的卧底女记者。",
        "url": "./movies/movie-1634.html",
        "image": "./134.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "山间铃响马帮来1954",
        "year": "1954",
        "region": "中国大陆",
        "type": "电影",
        "genre": "战争,剧情",
        "tags": [
            "红色经典",
            "边疆",
            "剿匪",
            "民族团结"
        ],
        "oneLine": "解放初期,一支解放军马帮深入云南深山运送物资,与当地土司和潜伏土匪展开惊心动魄的周旋。",
        "url": "./movies/movie-1635.html",
        "image": "./135.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "快走维斯纳",
        "year": "2025",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "冒险",
        "tags": [
            "北极",
            "母女",
            "生存",
            "民间传说",
            "惊悚"
        ],
        "oneLine": "为了寻找失踪的科考队母亲,少女带着母亲留下的诡异木偶“维斯纳”,闯入北极圈内传说中的“众神之墓”。",
        "url": "./movies/movie-1636.html",
        "image": "./136.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "战争生活",
        "year": "2024",
        "region": "美国,英国",
        "type": "纪录片",
        "genre": "纪录,战争,历史",
        "tags": [
            "俄乌冲突",
            "平民视角",
            "手机影像",
            "真实"
        ],
        "oneLine": "一部完全由乌克兰平民手机拍摄素材剪辑而成的纪录片,记录了战争如何闯进并撕裂他们的日常生活。",
        "url": "./movies/movie-1637.html",
        "image": "./137.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "学生会的一己之见第一季",
        "year": "2024",
        "region": "日本",
        "type": "剧集",
        "genre": "动画",
        "tags": [
            "校园日常",
            "轻小说改",
            "后宫喜剧"
        ],
        "oneLine": "私立碧阳学园学生会,四个美少女和一个“普通”男生每天在会议室里浪费人生、讨论荒唐提案。",
        "url": "./movies/movie-1638.html",
        "image": "./138.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "国医养生馆",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情/古装/医学",
        "tags": [
            "中医",
            "悬疑",
            "朝堂",
            "师徒",
            "养生"
        ],
        "oneLine": "明朝太医院最年轻的天才,被贬到民间破落养生馆,却发现这里的“土方子”藏着惊天秘密。",
        "url": "./movies/movie-1639.html",
        "image": "./139.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "我们从乌拉尔来",
        "year": "2025",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "剧情,历史,战争",
        "tags": [
            "二战",
            "迁徙",
            "亲情"
        ],
        "oneLine": "二战爆发,一名苏联母亲带着四个孩子,从乌拉尔山徒步穿越西伯利亚寻找前线丈夫。",
        "url": "./movies/movie-1640.html",
        "image": "./140.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "双子镇",
        "year": "2027",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "科幻/悬疑/惊悚",
        "tags": [
            "平行宇宙",
            "小镇怪谈",
            "量子纠缠",
            "双胞胎",
            "封闭空间"
        ],
        "oneLine": "一名小镇警察在调查双胞胎姐妹失踪案时,发现自己所在的镇子在地图上有一个完全对称的镜像“双子镇”,而对面住着所有人的另一个自己。",
        "url": "./movies/movie-1641.html",
        "image": "./141.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "斯旺尼河",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "剧情,悬疑,家庭",
        "tags": [
            "美国南方",
            "河流",
            "失踪",
            "秘密"
        ],
        "oneLine": "阔别20年后回到佛罗里达老家,她发现妹妹当年的溺水案,与斯旺尼河底的秘密有关。",
        "url": "./movies/movie-1642.html",
        "image": "./142.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "海滩杀机",
        "year": "2025",
        "region": "澳大利亚",
        "type": "电影",
        "genre": "惊悚/犯罪",
        "tags": [
            "海滩",
            "密室",
            "陌生人",
            "信任游戏"
        ],
        "oneLine": "十一个互不相识的人被邀请到一座私人海滩,然后发现每隔一小时死一个人。",
        "url": "./movies/movie-1643.html",
        "image": "./143.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "我吃了那男孩一整年的早餐",
        "year": "2017",
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情,青春",
        "tags": [
            "暗恋",
            "校园",
            "美食",
            "治愈"
        ],
        "oneLine": "为了报复劈腿的校花,她偷吃了校草每天送的早餐,却意外吃出了一场长达一年的误会与心动。",
        "url": "./movies/movie-1644.html",
        "image": "./144.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "加冕街之路",
        "year": "2023",
        "region": "英国",
        "type": "剧情/家庭",
        "genre": "生活/年代",
        "tags": [
            "英国工薪阶层",
            "邻里",
            "养老",
            "温情"
        ],
        "oneLine": "一条即将拆迁的英国老街上,七十岁的艾薇决定用一场违法的街头派对,留住所有人的记忆。",
        "url": "./movies/movie-1645.html",
        "image": "./145.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "黑色月光粤语",
        "year": "2027",
        "region": "中国香港",
        "type": "剧集",
        "genre": "警匪,悬疑,犯罪",
        "tags": [
            "卧底",
            "黑帮",
            "双面间谍",
            "粤语原声"
        ],
        "oneLine": "卧底在黑帮坐了十年牢,出狱后发现警队档案里没有他这个人。",
        "url": "./movies/movie-1646.html",
        "image": "./146.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "武先生",
        "year": "1992",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作,剧情",
        "tags": [
            "武术",
            "黑帮",
            "卧底",
            "宗师"
        ],
        "oneLine": "咏春传人“武先生”被迫给黑帮老大当保镖,实则是为了清理门户。",
        "url": "./movies/movie-1647.html",
        "image": "./147.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "夜班司机",
        "year": "2025",
        "region": "中国",
        "type": "电影",
        "genre": "悬疑",
        "tags": [
            "犯罪",
            "出租车",
            "雨夜",
            "复仇"
        ],
        "oneLine": "每晚接载不同的乘客,直到他拉上了一个刚杀了人的乘客。",
        "url": "./movies/movie-1648.html",
        "image": "./148.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "超人妈妈带娃记2016",
        "year": "2016",
        "region": "中国大陆",
        "type": "综艺",
        "genre": "真人秀",
        "tags": [
            "亲子",
            "家庭",
            "明星",
            "观察",
            "育儿"
        ],
        "oneLine": "四位明星妈妈在没有爸爸和老人帮助的情况下,独自带娃度过72小时的真实记录。",
        "url": "./movies/movie-1649.html",
        "image": "./149.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "花样年华粤语",
        "year": "2000",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情,剧情",
        "tags": [
            "王家卫",
            "张曼玉",
            "梁朝伟",
            "粤语原声",
            "旗袍"
        ],
        "oneLine": "1960年代的香港,两对夫妻的隔壁之隔,两个发现配偶出轨的男女,在克制中互生情愫。",
        "url": "./movies/movie-1650.html",
        "image": "./150.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "万德浮史贝斯",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情,奇幻,悬疑",
        "tags": [
            "文艺",
            "平行时空",
            "书店"
        ],
        "oneLine": "一间只在雨夜出现的书店,每个走进去的人,都会拿到一本写着自己未来结局的书。",
        "url": "./movies/movie-1651.html",
        "image": "./1.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "我、他们和拉拉",
        "year": "2028",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/同性/青春",
        "tags": [
            "青春",
            "拉拉",
            "自我认同",
            "友情"
        ],
        "oneLine": "小镇男孩暗恋女孩“拉拉”,却发现“拉拉”爱上了自己的姐姐,一场关于青春与错位的三人行就此展开。",
        "url": "./movies/movie-1652.html",
        "image": "./2.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "我的姥姥我的妈",
        "year": "2014",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "家庭/伦理",
        "tags": [
            "隔代亲",
            "婆媳",
            "催泪",
            "年代跨越"
        ],
        "oneLine": "一个性格强势的姥姥把外孙女告上法庭,只因外孙女想卖掉老宅送自己去养老院,却牵出六十年前的家族秘密。",
        "url": "./movies/movie-1653.html",
        "image": "./3.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "怪奇谜案限时破",
        "year": "2023",
        "region": "韩国",
        "type": "剧集",
        "genre": "悬疑,奇幻,惊悚,犯罪",
        "tags": [
            "超自然",
            "倒计时",
            "废弃考场",
            "失踪案",
            "多重人格"
        ],
        "oneLine": "七名素不相识的人在一座废弃考院醒来,每人手腕上都有一个72小时的死亡倒计时。",
        "url": "./movies/movie-1654.html",
        "image": "./4.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "拽妹黛薇儿第四季",
        "year": "2025",
        "region": "美国",
        "type": "剧集/动画",
        "genre": "喜剧/校园",
        "tags": [
            "毒舌",
            "女权",
            "青春期",
            "冷幽默",
            "2D动画"
        ],
        "oneLine": "毒舌天才少女黛薇儿进入高三,她依然不屑社交,却被学校心理老师强制安排了一个“情绪日记”任务。",
        "url": "./movies/movie-1655.html",
        "image": "./5.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "熊的乔纳森",
        "year": "2013",
        "region": "法国",
        "type": "电影",
        "genre": "动画,奇幻",
        "tags": [
            "治愈",
            "拟人",
            "孤独",
            "友谊",
            "森林冒险"
        ],
        "oneLine": "冬眠醒来的熊发现森林里多了一个叫乔纳森的人类男孩,他不会说话,却能和动物心灵相通。",
        "url": "./movies/movie-1656.html",
        "image": "./6.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "迷欲东京",
        "year": "2021",
        "region": "日本",
        "type": "电影",
        "genre": "爱情,情色,剧情",
        "tags": [
            "都市",
            "欲望",
            "交换伴侣",
            "迷失"
        ],
        "oneLine": "两对赴日旅游的夫妻在东京一夜的酒精与霓虹下,玩起了危险的欲望交换游戏。",
        "url": "./movies/movie-1657.html",
        "image": "./7.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "小狗就是小狗",
        "year": "2023",
        "region": "法国/比利时",
        "type": "电影",
        "genre": "动画/家庭",
        "tags": [
            "动画",
            "治愈",
            "哲学",
            "儿童向成人"
        ],
        "oneLine": "一只被主人抛弃的小狗,和一只失去伴侣的老狗,一起踏上了寻找“家”的公路之旅,过程中学会了什么是“小狗哲学”。",
        "url": "./movies/movie-1658.html",
        "image": "./8.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "东欧犹太乐项目",
        "year": "2023",
        "region": "以色列/波兰",
        "type": "电影",
        "genre": "剧情,历史",
        "tags": [
            "音乐",
            "二战",
            "救赎"
        ],
        "oneLine": "一支由当代嘻哈歌手和古典犹太音乐家组成的怪胎乐队,前往东欧寻找一段被纳粹抹去的旋律。",
        "url": "./movies/movie-1659.html",
        "image": "./9.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "马场三怪",
        "year": "1995",
        "region": "中国台湾",
        "type": "电影",
        "genre": "喜剧,动作",
        "tags": [
            "搞笑",
            "赛车",
            "乡村",
            "对决"
        ],
        "oneLine": "三个不靠谱的乡下青年为了保住破旧马场,竟异想天开要用马去挑战镇上的赛车高手。",
        "url": "./movies/movie-1660.html",
        "image": "./10.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "亲爱的白人",
        "year": "2014",
        "region": "美国",
        "type": "电影",
        "genre": "剧情,喜剧",
        "tags": [
            "种族",
            "大学",
            "讽刺",
            "黑人平权",
            "精英教育"
        ],
        "oneLine": "一群常春藤名校的黑人学生,用一场“黑脸派对”狠狠讽刺了虚伪的“后种族时代”。",
        "url": "./movies/movie-1661.html",
        "image": "./11.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "亲爱的你",
        "year": "2024",
        "region": "韩国",
        "type": "剧集",
        "genre": "剧情/悬疑/爱情",
        "tags": [
            "穿越时空",
            "电话",
            "凶杀案",
            "改变过去",
            "双向救赎"
        ],
        "oneLine": "2024 年的女主通过一部老式座机联系上了 1999 年的男主,两人试图阻止一桩连环杀人案,却发现男主是未来的凶手。",
        "url": "./movies/movie-1662.html",
        "image": "./12.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "小心没有影子的人",
        "year": "2026",
        "region": "日本",
        "type": "电影",
        "genre": "悬疑/恐怖/奇幻",
        "tags": [
            "都市传说",
            "夺舍",
            "影子寄生",
            "电车谜题",
            "闭环叙事"
        ],
        "oneLine": "传说没有影子的人会偷走你的影子,而你也会变成没有影子的人,像病毒一样。",
        "url": "./movies/movie-1663.html",
        "image": "./13.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "完美罪行",
        "year": "2025",
        "region": "西班牙",
        "type": "电影",
        "genre": "悬疑、惊悚、犯罪",
        "tags": [
            "完美犯罪",
            "律师",
            "反转",
            "陪审团",
            "心理操控"
        ],
        "oneLine": "一个从不败诉的律师接下了“完美杀人案”,却发现自己辩护的委托人正是十二年前杀害他妻子的真凶。",
        "url": "./movies/movie-1664.html",
        "image": "./14.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "爱情诡计",
        "year": "2021",
        "region": "泰国",
        "type": "剧集",
        "genre": "爱情,悬疑,剧情",
        "tags": [
            "双面恋人",
            "心理操控",
            "复仇",
            "以爱为牢"
        ],
        "oneLine": "一个男人精心设计了与“完美女友”的相遇,却发现对方也在对他执行另一套剧本。",
        "url": "./movies/movie-1665.html",
        "image": "./15.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "王牌总裁霸王花",
        "year": "2016",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "偶像,商战",
        "tags": [
            "霸道总裁",
            "女保镖",
            "姐弟恋",
            "职场",
            "动作"
        ],
        "oneLine": "退役特种兵化身美女保镖,贴身保护高冷总裁,却意外卷入了一场家族阴谋。",
        "url": "./movies/movie-1666.html",
        "image": "./16.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "月亮女孩",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "剧情/奇幻/青春",
        "tags": [
            "孤独症",
            "月光幻想",
            "校园霸凌",
            "自我接纳"
        ],
        "oneLine": "患有社交恐惧的女孩坚信自己是月亮派来地球的观察员,直到另一个“外星人”转学到她的班级。",
        "url": "./movies/movie-1667.html",
        "image": "./17.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "梅艳芳菲",
        "year": "2019",
        "region": "中国香港",
        "type": "剧集",
        "genre": "传记、音乐、剧情",
        "tags": [
            "梅艳芳",
            "致敬",
            "香港娱乐圈"
        ],
        "oneLine": "一个普通女孩通过选秀比赛模仿梅艳芳成名,却在光环中渐渐丢失了自己原本的声音。",
        "url": "./movies/movie-1668.html",
        "image": "./18.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "校影迷雾",
        "year": "2023",
        "region": "泰国",
        "type": "电视剧",
        "genre": "悬疑/惊悚/校园",
        "tags": [
            "霸凌",
            "复仇",
            "秘密",
            "多视角"
        ],
        "oneLine": "一所重点中学的废弃游泳池里发现了女尸,四名嫌疑人各执一词,而真相隐藏在校园网的深层加密文件中。",
        "url": "./movies/movie-1669.html",
        "image": "./19.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "血色摇篮曲",
        "year": "2018",
        "region": "波兰/德国",
        "type": "电影",
        "genre": "恐怖/历史",
        "tags": [
            "童谣",
            "诅咒",
            "二战",
            "民俗"
        ],
        "oneLine": "她在奥斯维辛学会了一首摇篮曲,几十年后,每一个听过它的人都开始以诡异方式死去。",
        "url": "./movies/movie-1670.html",
        "image": "./20.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "魔鬼假日",
        "year": "2023",
        "region": "西班牙",
        "type": "电影",
        "genre": "恐怖/悬疑",
        "tags": [
            "孤岛",
            "度假村",
            "邪教",
            "感官剥夺",
            "血浆"
        ],
        "oneLine": "一家六口去豪华孤岛度假,却发现度假村的放松项目是“自愿被折磨”,而退出条件是献祭一人。",
        "url": "./movies/movie-1671.html",
        "image": "./21.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "莫滕船长与蜘蛛女王",
        "year": "2025",
        "region": "挪威/丹麦",
        "type": "电影",
        "genre": "动画/奇幻/冒险",
        "tags": [
            "北欧传说",
            "蒸汽朋克",
            "女性英雄"
        ],
        "oneLine": "在蒸汽朋克版的北欧世界,独腿船长莫滕为救女儿,必须穿越黑暗森林,说服恐怖的“蜘蛛女王”共赴险境。",
        "url": "./movies/movie-1672.html",
        "image": "./22.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "狮子军龙虎鬪",
        "year": "1975",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作,武侠,冒险",
        "tags": [
            "邵氏",
            "功夫",
            "古装",
            "兄弟情",
            "复仇"
        ],
        "oneLine": "明朝末年,三位结拜兄弟分别加入“狮”、“龙”、“虎”三个敌对杀手组织,十年后重逢,却必须为了组织的存亡而生死对决。",
        "url": "./movies/movie-1673.html",
        "image": "./23.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "阿根廷之恋",
        "year": "2021",
        "region": "阿根廷,西班牙",
        "type": "电影",
        "genre": "爱情,剧情",
        "tags": [
            "探戈",
            "足球",
            "错位",
            "移民",
            "布宜诺斯艾利斯"
        ],
        "oneLine": "以色列女间谍与叙利亚难民在博卡青年球场假扮情侣,却真的爱上了同一支球队的10号。",
        "url": "./movies/movie-1674.html",
        "image": "./24.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "百战雄狮",
        "year": "2025",
        "region": "英国",
        "type": "剧集",
        "genre": "历史",
        "tags": [
            "战争",
            "史诗",
            "罗马",
            "角斗士"
        ],
        "oneLine": "不列颠部落最后一位女王,被俘后在罗马斗兽场成为角斗士,她要通过一场场表演,唤醒罗马平民的反抗之心。",
        "url": "./movies/movie-1675.html",
        "image": "./25.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "插翅难飞",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "动作/惊悚",
        "tags": [
            "劫机",
            "封闭空间",
            "女英雄",
            "反转"
        ],
        "oneLine": "一架横跨太平洋的航班上,一名普通母亲为了救女儿,必须在万米高空与整机劫匪周旋。",
        "url": "./movies/movie-1676.html",
        "image": "./26.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "森林的黑暗心脏",
        "year": "2024",
        "region": "德国",
        "type": "电影",
        "genre": "恐怖惊悚",
        "tags": [
            "丛林",
            "邪教",
            "失踪案",
            "心理恐惧"
        ],
        "oneLine": "三名环保志愿者深入亚马逊原始部落,却发现部落信奉的神灵正在吞噬他们的理智与记忆。",
        "url": "./movies/movie-1677.html",
        "image": "./27.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "夹心年代",
        "year": "2023",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "家庭伦理",
        "tags": [
            "现实题材",
            "中年危机",
            "养老",
            "教育"
        ],
        "oneLine": "一对面临“上有老下有小”的70后夫妻,在父母重病和子女高考的双重夹击下艰难求生。",
        "url": "./movies/movie-1678.html",
        "image": "./28.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "两仔爷",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情,家庭,喜剧",
        "tags": [
            "市井温情",
            "错位人生",
            "父子关系",
            "粤语片"
        ],
        "oneLine": "出租车司机与富家少爷同日丧父,一场车祸让他们互换身份,成了彼此对方的“新爸爸”。",
        "url": "./movies/movie-1679.html",
        "image": "./29.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "黑色大理花悬案",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "悬疑/犯罪/剧情",
        "tags": [
            "真实案件",
            "冷案",
            "调查",
            "黑色"
        ],
        "oneLine": "两位洛杉矶警探重启1947年的“黑色大丽花”悬案,发现线索指向好莱坞权贵俱乐部。",
        "url": "./movies/movie-1680.html",
        "image": "./30.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "神游天地",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "公路喜剧",
        "tags": [
            "神经病",
            "迷路",
            "荒诞",
            "存在主义"
        ],
        "oneLine": "一个路痴邮差送一封“地址不详”的信,沿着谷歌地图上没有的路,一路开进了哲学与搞笑并存的异次元。",
        "url": "./movies/movie-1681.html",
        "image": "./31.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "特务迷城",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作,惊悚,悬疑",
        "tags": [
            "失忆特工",
            "城市追踪",
            "近身格斗",
            "阴谋论"
        ],
        "oneLine": "一个失忆的特工,醒来后发现自己成为了全国通缉的恐怖分子。",
        "url": "./movies/movie-1682.html",
        "image": "./32.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "幸福是一尾皱颈蜥蜴",
        "year": "2022",
        "region": "澳大利亚",
        "type": "电影",
        "genre": "剧情/冒险/家庭",
        "tags": [
            "公路电影",
            "自闭症",
            "动物保护",
            "父女",
            "荒诞"
        ],
        "oneLine": "为了完成自闭症女儿“嫁给皱颈蜥蜴”的心愿,一个恐蜥蜴的父亲开车穿越整个澳大利亚去寻找这种稀有爬宠。",
        "url": "./movies/movie-1683.html",
        "image": "./33.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "风流神探",
        "year": "2023",
        "region": "中国香港",
        "type": "剧集",
        "genre": "悬疑/犯罪",
        "tags": [
            "单元探案",
            "高智商犯罪",
            "反套路",
            "双男主"
        ],
        "oneLine": "一个靠泡妞获取线索的风流警探,搭档一个性冷淡的女法医,联手破解香港奇案。",
        "url": "./movies/movie-1684.html",
        "image": "./34.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "旅人第一季",
        "year": "2026",
        "region": "英国",
        "type": "剧集",
        "genre": "科幻/悬疑/剧情",
        "tags": [
            "时间旅行",
            "记忆移植",
            "身份错位",
            "慢热",
            "高概念"
        ],
        "oneLine": "未来人类将意识寄宿到古代死者身上,但主角发现自己寄宿的这具身体,本不该死。",
        "url": "./movies/movie-1685.html",
        "image": "./35.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "爱在春光乍现时",
        "year": "2024",
        "region": "意大利",
        "type": "电影",
        "genre": "爱情/剧情",
        "tags": [
            "文艺",
            "佛罗伦萨",
            "忘年恋",
            "绝症"
        ],
        "oneLine": "佛罗伦萨的樱花季,一个来寻死的老年画家和一个想去看海的白血病少女,约定陪对方走完最后一程。",
        "url": "./movies/movie-1686.html",
        "image": "./36.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "我死在去年夏天",
        "year": "2024",
        "region": "泰国",
        "type": "电影",
        "genre": "恐怖/悬疑",
        "tags": [
            "通灵",
            "校园霸凌",
            "鬼魂视角",
            "因果报应",
            "泰式恐怖"
        ],
        "oneLine": "校园女神在海边被谋杀后化为了怨灵,但她发现唯一能看见自己、能帮她找出凶手的,竟是生前最看不起的丑小鸭。",
        "url": "./movies/movie-1687.html",
        "image": "./37.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "咖啡鲜肉",
        "year": "2021",
        "region": "中国大陆",
        "type": "网络剧",
        "genre": "都市,爱情,喜剧",
        "tags": [
            "姐弟恋",
            "咖啡师",
            "治愈",
            "甜宠"
        ],
        "oneLine": "三十岁失婚女强人,在辞职旅行的咖啡馆里撩到了一个比自己小十岁的“小鲜肉”咖啡师。",
        "url": "./movies/movie-1688.html",
        "image": "./38.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "婚活1000次出击",
        "year": "2026",
        "region": "日本",
        "type": "电视剧",
        "genre": "喜剧,爱情",
        "tags": [
            "相亲",
            "社畜",
            "荒诞",
            "治愈"
        ],
        "oneLine": "一个相亲1000次都失败的女人突然发现,所有拒绝过她的男人都娶了同一个女人。",
        "url": "./movies/movie-1689.html",
        "image": "./39.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "女子监狱第一季",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "犯罪,剧情,喜剧",
        "tags": [
            "女子群像",
            "监狱生态",
            "社会批判"
        ],
        "oneLine": "精英女性因协助自杀入狱,在混乱的女子监狱里重新学习“做人”。",
        "url": "./movies/movie-1690.html",
        "image": "./40.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "极品老妈第六季",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "喜剧/家庭",
        "tags": [
            "单亲妈妈",
            "酗酒康复",
            "女性友谊"
        ],
        "oneLine": "克里斯蒂终于从法学院毕业了,但她那个永远长不大的老妈邦妮却突然宣布要结婚。",
        "url": "./movies/movie-1691.html",
        "image": "./41.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "胎儿驱魔",
        "year": "2026",
        "region": "韩国",
        "type": "电影",
        "genre": "恐怖,宗教",
        "tags": [
            "胎教",
            "附身",
            "祭司",
            "密室"
        ],
        "oneLine": "怀孕八个月的母亲被教会告知,她腹中的双胞胎,一个在吞噬另一个的灵魂。",
        "url": "./movies/movie-1692.html",
        "image": "./42.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "伊拉蒂",
        "year": "2023",
        "region": "意大利",
        "type": "电影",
        "genre": "奇幻冒险",
        "tags": [
            "欧洲古森林",
            "精灵",
            "诅咒",
            "母亲"
        ],
        "oneLine": "一位农妇为了救活死去的儿子,闯入禁忌的伊拉蒂森林,却发现这里的树精只愿意用她的“母爱”来交换。",
        "url": "./movies/movie-1693.html",
        "image": "./43.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "不需要爱情的夏天",
        "year": "2023",
        "region": "韩国",
        "type": "电影",
        "genre": "爱情、剧情、文艺",
        "tags": [
            "济州岛",
            "失语症",
            "疗愈",
            "民宿",
            "孤独"
        ],
        "oneLine": "失语症女孩在济州岛经营一家“拒绝恋人”的民宿,直到一个无法恋爱的绝症男人推门而入。",
        "url": "./movies/movie-1694.html",
        "image": "./44.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "星际牛仔",
        "year": "2026",
        "region": "日本",
        "type": "剧集",
        "genre": "科幻/动作/西部",
        "tags": [
            "太空",
            "赏金猎人",
            "爵士乐",
            "孤独",
            "重制"
        ],
        "oneLine": "重制版动画,失去过去的赏金猎人和他的船员们在星际间追人,也追着自己回不去的昨天。",
        "url": "./movies/movie-1695.html",
        "image": "./45.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "黎明要来",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情,同性",
        "tags": [
            "青春",
            "残酷",
            "救赎",
            "乡土"
        ],
        "oneLine": "1999年大地震前夜,两个在殡仪馆打工的高中男生,在死亡旁边试探生的欲望。",
        "url": "./movies/movie-1696.html",
        "image": "./46.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "不动产权",
        "year": "2025",
        "region": "韩国",
        "type": "剧集",
        "genre": "惊悚、悬疑、奇幻",
        "tags": [
            "房产中介",
            "诅咒",
            "驱魔",
            "单元剧",
            "社会讽喻"
        ],
        "oneLine": "一家专门为凶宅办理过户的中介公司,发现每本房产证背后都藏着一个未安息的怨灵。",
        "url": "./movies/movie-1697.html",
        "image": "./47.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "聶小倩",
        "year": "2026",
        "region": "华语",
        "type": "电影",
        "genre": "古装,爱情,奇幻",
        "tags": [
            "人鬼情未了",
            "经典重构",
            "视觉奇观",
            "东方美学"
        ],
        "oneLine": "落魄书生夜宿兰若寺,遇美艳女鬼聂小倩,却发现她身上藏着颠覆神妖两界的惊天秘密。",
        "url": "./movies/movie-1698.html",
        "image": "./48.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "时尚姐妹",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "剧情,传记",
        "tags": [
            "姐妹",
            "时尚圈",
            "竞争",
            "和解"
        ],
        "oneLine": "一对性格迥异的孪生姐妹,一个创立高定品牌,一个成为地下裁缝,却缝制了同一段巴黎时尚史。",
        "url": "./movies/movie-1699.html",
        "image": "./49.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "七王丧钟",
        "year": "2025",
        "region": "英国",
        "type": "剧集",
        "genre": "历史/战争",
        "tags": [
            "权力游戏",
            "冷兵器",
            "史诗",
            "背叛"
        ],
        "oneLine": "七个自称国王的军阀割据一方,一个铸钟匠却宣称要在七日之内敲响所有人的丧钟。",
        "url": "./movies/movie-1700.html",
        "image": "./50.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "三跟四傍粤语",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "黑色喜剧,犯罪",
        "tags": [
            "粤语片",
            "小人物",
            "黑帮",
            "荒诞"
        ],
        "oneLine": "三个失业中年和四个菜鸟古惑仔,阴差阳错互相误会对方是老大,联手“劫富济贫”却捅了真黑帮的窝。",
        "url": "./movies/movie-1701.html",
        "image": "./51.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "爱得太狂",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "爱情/悬疑",
        "tags": [
            "病态迷恋",
            "爱情惊悚",
            "反转不断"
        ],
        "oneLine": "她爱他爱到愿意为他顶罪入狱,出狱后却发现,那场让她入狱的“意外”,是他一手策划的。",
        "url": "./movies/movie-1702.html",
        "image": "./52.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "跳跃青春",
        "year": "2024",
        "region": "中国",
        "type": "电视剧",
        "genre": "青春,运动",
        "tags": [
            "花滑",
            "竞技热血",
            "成长"
        ],
        "oneLine": "因伤退役的花滑少女转行成为男单选手的编舞师,意外发现了对方的惊人天赋。",
        "url": "./movies/movie-1703.html",
        "image": "./53.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "周日总是下雨天",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情/爱情/家庭",
        "tags": [
            "台北",
            "雨",
            "重逢",
            "和解",
            "逝去的时光"
        ],
        "oneLine": "每个下雨的周日,她都会接到一通来自过去的电话,而电话那头是五年前因误会分手的恋人。",
        "url": "./movies/movie-1704.html",
        "image": "./54.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "钟路布尔斯",
        "year": "2025",
        "region": "韩国",
        "type": "电视剧",
        "genre": "剧情,动作,犯罪",
        "tags": [
            "黑帮",
            "政治",
            "复仇",
            "底层挣扎"
        ],
        "oneLine": "在首尔钟路区最黑暗的角落,几个被抛弃的男人为了尊严向整个体制宣战。",
        "url": "./movies/movie-1705.html",
        "image": "./55.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "我爱你爱你爱你",
        "year": "2022",
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情,奇幻",
        "tags": [
            "穿越",
            "告白",
            "青春",
            "温馨",
            "纯爱"
        ],
        "oneLine": "一个社恐女孩得到一个神秘药水,说三声“我爱你”就能让时间倒流一分钟。",
        "url": "./movies/movie-1706.html",
        "image": "./56.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "怒火1984",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作/犯罪/警匪",
        "tags": [
            "动作",
            "警匪",
            "1980年代",
            "飙车",
            "枪战"
        ],
        "oneLine": "1984年中英谈判期间,香港重案组警长与嚣张匪徒展开一场横跨全城的亡命追逐,背后却隐藏着政治阴谋。",
        "url": "./movies/movie-1707.html",
        "image": "./57.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "无语问苍天2010",
        "year": "2010",
        "region": "美国",
        "type": "电影",
        "genre": "剧情/传记",
        "tags": [
            "医疗",
            "人性",
            "反抗",
            "真实事件",
            "催泪"
        ],
        "oneLine": "精神科医生用新药唤醒了沉睡数十年的患者,却遭到医院管理层的无情打压。",
        "url": "./movies/movie-1708.html",
        "image": "./58.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "史前的女人们",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "科幻/冒险/动作",
        "tags": [
            "女战士",
            "恐龙",
            "母系社会",
            "基因工程"
        ],
        "oneLine": "全女性部落统治的史前世界突然闯入现代男科学家,她们以为他是神,而他发现她们会产卵。",
        "url": "./movies/movie-1709.html",
        "image": "./59.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "爱情与谎言",
        "year": "2021",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情,悬疑,爱情",
        "tags": [
            "骗局",
            "婚姻",
            "身份认同",
            "反转"
        ],
        "oneLine": "一个职业婚骗同时交往三个女人,却发现自己只是别人精心布局中的一枚棋子。",
        "url": "./movies/movie-1710.html",
        "image": "./60.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "我亲昵而温柔的野兽",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "剧情/爱情",
        "tags": [
            "少女",
            "野兽",
            "救赎",
            "法国乡村",
            "奇幻温情"
        ],
        "oneLine": "一个被村民视为“野兽”的畸形孤儿,与一个逃婚的贵族少女在森林里相遇,彼此驯养了对方。",
        "url": "./movies/movie-1711.html",
        "image": "./61.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "地球回音",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "科幻,冒险,家庭",
        "tags": [
            "地心探险",
            "神秘信号",
            "少年团",
            "环保",
            "未知生物"
        ],
        "oneLine": "三个少年意外收到一串来自地心的神秘信号,从而踏上了一场颠覆科学的奇幻冒险。",
        "url": "./movies/movie-1712.html",
        "image": "./62.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "恶搞之家第十五季",
        "year": "2023",
        "region": "美国",
        "type": "电视剧",
        "genre": "动画,喜剧",
        "tags": [
            "成人向",
            "讽刺",
            "无厘头"
        ],
        "oneLine": "彼得用家庭资金买了艘潜艇,斯图威再次试图杀死布莱恩,而路易斯发现自己是AI。",
        "url": "./movies/movie-1713.html",
        "image": "./63.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "大小姐能有什么坏心眼呢",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧/爱情/悬疑",
        "tags": [
            "反套路甜宠",
            "豪门千金",
            "双面人生",
            "女性互助"
        ],
        "oneLine": "全城最骄纵的千金大小姐,背地里竟是一名专门整治渣男和恶势力的侠女,而她的目标未婚夫恰好是警察。",
        "url": "./movies/movie-1714.html",
        "image": "./64.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "小明星大跟班",
        "year": "2025",
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "喜剧,剧情",
        "tags": [
            "娱乐圈",
            "职场",
            "轻喜",
            "经纪人",
            "成长"
        ],
        "oneLine": "一个废柴助理意外成为顶流小明星的贴身跟班,在娱乐圈的腥风血雨中,两人从互坑到互相救赎。",
        "url": "./movies/movie-1715.html",
        "image": "./65.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "西域古墓之藏宝图",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作,冒险,悬疑",
        "tags": [
            "盗墓",
            "西域",
            "机关",
            "寻宝",
            "沙漠"
        ],
        "oneLine": "一张残破的藏宝图将考古队引入流沙下的千年古墓,却唤醒了一支守护不灭之火的幽灵军团。",
        "url": "./movies/movie-1716.html",
        "image": "./66.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "强渡魔鬼关",
        "year": "1965",
        "region": "美国",
        "type": "电影",
        "genre": "西部,战争,冒险",
        "tags": [
            "经典西部片",
            "骑兵队",
            "印第安人",
            "据点"
        ],
        "oneLine": "一队被遗弃的骑兵必须护送一群死刑犯穿越印第安人领地,才能抵达被称为“魔鬼关”的军事法庭。",
        "url": "./movies/movie-1717.html",
        "image": "./67.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "成形",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "剧情,奇幻,悬疑",
        "tags": [
            "雕塑",
            "艺术",
            "身份认同",
            "身体恐怖",
            "心理"
        ],
        "oneLine": "女雕塑家发现自己捏出的泥人活了过来,且能变成任何人的模样,包括她死去的孪生妹妹。",
        "url": "./movies/movie-1718.html",
        "image": "./68.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "奇异的爱情",
        "year": "2024",
        "region": "泰国",
        "type": "剧集",
        "genre": "爱情,奇幻,喜剧",
        "tags": [
            "灵魂互换",
            "老少恋",
            "泰式搞笑",
            "催泪弹"
        ],
        "oneLine": "七十岁的老奶奶和十九岁的叛逆孙子意外互换身体,孙子用奶奶的身体重遇了初恋爷爷的鬼魂。",
        "url": "./movies/movie-1719.html",
        "image": "./69.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "惊天刺杀",
        "year": "2028",
        "region": "美国/德国",
        "type": "电影",
        "genre": "动作/政治惊悚",
        "tags": [
            "总统遇刺",
            "时间回溯",
            "保镖"
        ],
        "oneLine": "一名特勤局特工拥有“遇刺前倒回10秒”的能力,但他每次回溯都会让下一任总统死得更快。",
        "url": "./movies/movie-1720.html",
        "image": "./70.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "唐朝异闻录",
        "year": "2025",
        "region": "中国内地",
        "type": "剧集",
        "genre": "悬疑、奇幻、古装",
        "tags": [
            "狄仁杰同人",
            "志怪",
            "单元探案",
            "大唐风华"
        ],
        "oneLine": "狄仁杰晚年秘密记录的一本《阴司册》重现人间,书中记载的诡异案件,竟然每一件都在现代重现。",
        "url": "./movies/movie-1721.html",
        "image": "./71.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "露西亚的圣诞愿望",
        "year": "2024",
        "region": "西班牙",
        "type": "电影",
        "genre": "剧情/家庭/奇幻",
        "tags": [
            "圣诞电影",
            "儿童视角",
            "祖孙情深",
            "轻度奇幻"
        ],
        "oneLine": "八岁的露西亚许愿让去世的爷爷回来过圣诞,爷爷真的回来了,但只有她一个人看得见。",
        "url": "./movies/movie-1722.html",
        "image": "./72.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "被炉、蜜桔和小猫",
        "year": "2024",
        "region": "日本",
        "type": "剧集",
        "genre": "日常/治愈",
        "tags": [
            "慢生活",
            "猫奴必看",
            "冬日暖剧"
        ],
        "oneLine": "东京辞职回老家的女孩、一只流浪猫和外婆的被炉,组成了最治愈的冬日组合。",
        "url": "./movies/movie-1723.html",
        "image": "./73.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "少林英雄榜",
        "year": "1979",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作/武侠/冒险",
        "tags": [
            "邵氏",
            "方世玉",
            "少林五祖",
            "复仇",
            "硬桥硬马"
        ],
        "oneLine": "火烧少林寺后,五个逃出火海的和尚各奔东西,约定十年后带着绝技重返,挑战背叛者白眉道人。",
        "url": "./movies/movie-1724.html",
        "image": "./74.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "真爱的风采",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情/剧情",
        "tags": [
            "绝症爱情",
            "双向隐瞒",
            "港式催泪"
        ],
        "oneLine": "他以为自己得了绝症,不想拖累她,设计让她离开;她以为他出轨了,决定成全他。真相揭晓时,两人都在医院。",
        "url": "./movies/movie-1725.html",
        "image": "./75.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "红墙绿瓦",
        "year": "2025",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "历史、古装、权谋",
        "tags": [
            "宫廷斗争",
            "女性成长",
            "家国情怀",
            "非遗文化"
        ],
        "oneLine": "故宫文物修复师意外卷入百年前宫廷悬案,发现红墙内藏着一幅改变历史的蓝图。",
        "url": "./movies/movie-1726.html",
        "image": "./76.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "天堂狗历险记2",
        "year": "2024",
        "region": "美国",
        "type": "动画电影",
        "genre": "冒险、奇幻、家庭",
        "tags": [
            "狗狗",
            "天堂",
            "轮回",
            "友谊",
            "治愈"
        ],
        "oneLine": "已经上了天堂的金毛寻回犬,为了找回在人间走丢的主人,贿赂了掌管轮回的天使,变成一只猫重回人间。",
        "url": "./movies/movie-1727.html",
        "image": "./77.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "爱在圣诞",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "爱情,喜剧",
        "tags": [
            "圣诞",
            "偶遇",
            "暖男",
            "治愈"
        ],
        "oneLine": "她讨厌圣诞节,却在圣诞夜被迫和一个陌生男人拼车,而男人车上的每首歌都恰好是她的人生BGM。",
        "url": "./movies/movie-1728.html",
        "image": "./78.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "管制塔",
        "year": "2023",
        "region": "日本",
        "type": "电影",
        "genre": "悬疑/科幻",
        "tags": [
            "孤岛",
            "通讯塔",
            "记忆删除",
            "集体谎言"
        ],
        "oneLine": "一座孤岛上唯一的通讯塔发出神秘的“晚安曲”,每晚8点,岛民都会忘记当天最快乐的一段记忆。",
        "url": "./movies/movie-1729.html",
        "image": "./79.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "幸福的彼端",
        "year": "2021",
        "region": "日本",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "治愈系",
            "亲情羁绊",
            "时间跨度",
            "小镇生活",
            "人生和解"
        ],
        "oneLine": "横跨三十年的家族相簿,藏在老照片背后的秘密与温情,在祖母临终前被一一揭开。",
        "url": "./movies/movie-1730.html",
        "image": "./80.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "谁伴我一生",
        "year": "2024",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "家庭/剧情",
        "tags": [
            "独居老人",
            "跨代陪伴",
            "晚年救赎"
        ],
        "oneLine": "一个被子女遗忘的独居老人,在网上花钱“租”了一个假孙女,没想到假戏真做了十年。",
        "url": "./movies/movie-1731.html",
        "image": "./81.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "大雄的金银岛",
        "year": "2018",
        "region": "日本",
        "type": "电影",
        "genre": "动画,冒险,科幻",
        "tags": [
            "哆啦A梦",
            "海盗",
            "亲情",
            "环保"
        ],
        "oneLine": "大雄在海报上发现了一座金银岛,但登岛后发现那不是宝藏,而是一位父亲为拯救地球建造的方舟。",
        "url": "./movies/movie-1732.html",
        "image": "./82.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "咱们的牛百岁",
        "year": "2024",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "喜剧,农村,家庭",
        "tags": [
            "乡村振兴",
            "返乡",
            "直播带货",
            "代际",
            "土味"
        ],
        "oneLine": "在城里混不下去的牛百岁回村发现:全村最懂互联网的不是年轻人,是他七十岁的老爹。",
        "url": "./movies/movie-1733.html",
        "image": "./83.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "楼上的外星人",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "科幻、喜剧",
        "tags": [
            "邻里纠纷",
            "伪装外星人",
            "合家欢",
            "反套路"
        ],
        "oneLine": "一对退休夫妇伪装成外星人,只为吓走楼上天天蹦迪的租客,却引来真外星人学术观摩团。",
        "url": "./movies/movie-1734.html",
        "image": "./84.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "小菊的春天",
        "year": "2012",
        "region": "中国",
        "type": "电视剧",
        "genre": "剧情/家庭/农村",
        "tags": [
            "留守儿童",
            "乡村教师",
            "成长",
            "乡土"
        ],
        "oneLine": "湘西山村女孩小菊被选为“春蕾计划”资助对象,但奶奶撕掉了录取通知书,让她嫁人换彩礼。",
        "url": "./movies/movie-1735.html",
        "image": "./85.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "少女哪吒",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "青春,奇幻",
        "tags": [
            "校园",
            "神话",
            "反叛",
            "友情"
        ],
        "oneLine": "被霸凌的高中生意外获得了哪吒三太子的神力,但代价是失去人类的体温。",
        "url": "./movies/movie-1736.html",
        "image": "./86.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "笑傲江湖1996国语",
        "year": "1996",
        "region": "中国香港",
        "type": "剧集",
        "genre": "武侠/古装",
        "tags": [
            "金庸",
            "江湖",
            "琴箫",
            "令狐冲",
            "经典"
        ],
        "oneLine": "被逐出师门的浪子令狐冲,如何在正邪夹缝中奏响一曲笑傲江湖?",
        "url": "./movies/movie-1737.html",
        "image": "./87.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "建筑大师的遗孀",
        "year": "2024",
        "region": "美国",
        "type": "TV Series",
        "genre": "剧情/悬疑",
        "tags": [
            "豪门恩怨",
            "建筑美学",
            "遗产争夺",
            "同性元素"
        ],
        "oneLine": "传奇建筑大师死后,他那从未露面的遗孀突然出现,要拆掉大师最著名的摩天大楼。",
        "url": "./movies/movie-1738.html",
        "image": "./88.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "七十好年华",
        "year": "2022",
        "region": "中国",
        "type": "剧集",
        "genre": "剧情,家庭,喜剧",
        "tags": [
            "老年生活",
            "代际沟通",
            "温暖",
            "退休"
        ],
        "oneLine": "七十岁退休厂长不服老,带领老伙计们创业开网红店,却被亲孙子直播曝光了“黑历史”。",
        "url": "./movies/movie-1739.html",
        "image": "./89.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "伯德小姐",
        "year": "2017",
        "region": "美国",
        "type": "电影",
        "genre": "剧情/喜剧/家庭",
        "tags": [
            "青春成长",
            "母女关系",
            "小镇青年",
            "格蕾塔·葛韦格"
        ],
        "oneLine": "一名自称“Lady Bird”的叛逆少女,在萨克拉门托度过的高三冲刺期,关于贫穷、友谊、性与离家出走。",
        "url": "./movies/movie-1740.html",
        "image": "./90.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "请说你想要什么",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "情色,剧情",
        "tags": [
            "欲望",
            "婚姻",
            "解放"
        ],
        "oneLine": "一对结婚15年的夫妻决定对彼此完全诚实,说出所有性幻想,结果几乎毁掉婚姻。",
        "url": "./movies/movie-1741.html",
        "image": "./91.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "五个便士",
        "year": "2016",
        "region": "英国",
        "type": "电影",
        "genre": "剧情/历史",
        "tags": [
            "战后英国",
            "流浪儿童",
            "口琴",
            "救赎之旅"
        ],
        "oneLine": "二战后的伦敦废墟上,一个失去声音的女孩,用一枚捡到的五个便士硬币,换了一把口琴。",
        "url": "./movies/movie-1742.html",
        "image": "./92.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "无尽的战壕",
        "year": "2024",
        "region": "西班牙",
        "type": "电影",
        "genre": "剧情/历史/惊悚",
        "tags": [
            "洞穴",
            "心理折磨",
            "内战",
            "藏匿"
        ],
        "oneLine": "西班牙内战结束,一个逃兵躲进山洞三十年,期间他三次有机会离开,却因恐惧而拒绝。",
        "url": "./movies/movie-1743.html",
        "image": "./93.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "逐梦练习曲",
        "year": "2023",
        "region": "中国",
        "type": "电影",
        "genre": "剧情,运动",
        "tags": [
            "钢琴",
            "马拉松",
            "励志",
            "小镇青年",
            "失败者联盟"
        ],
        "oneLine": "一个五音不全的废柴为了追女神,竟异想天开要一边跑马拉松一边弹钢琴破纪录。",
        "url": "./movies/movie-1744.html",
        "image": "./94.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "瓜达卢佩的吹笛人",
        "year": "2017",
        "region": "墨西哥",
        "type": "电影",
        "genre": "悬疑,音乐,惊悚",
        "tags": [
            "瓜达卢佩圣母大教堂",
            "街头艺人",
            "失聪听众",
            "死亡预告",
            "笛声"
        ],
        "oneLine": "墨西哥城瓜达卢佩大教堂外,一名街头笛手的曲子能让失聪者听见死亡倒计时。",
        "url": "./movies/movie-1745.html",
        "image": "./95.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "在云端",
        "year": "2009",
        "region": "美国",
        "type": "电影",
        "genre": "剧情,爱情,职场",
        "tags": [
            "裁员专家",
            "孤独",
            "背包理论",
            "奥系"
        ],
        "oneLine": "以机场为家的裁员专家,在教新人冷酷解雇的途中,自己却面临人生着陆。",
        "url": "./movies/movie-1746.html",
        "image": "./96.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "怪化猫",
        "year": "2007",
        "region": "日本",
        "type": "动画剧集",
        "genre": "奇幻,恐怖",
        "tags": [
            "浮世绘",
            "怪谈",
            "推理",
            "艺术"
        ],
        "oneLine": "一个神秘的卖药郎,带着退魔之剑,游走于江户时代,斩妖除魔,但必须先找出怪物的“形”、“真”和“理”。",
        "url": "./movies/movie-1747.html",
        "image": "./97.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "我的法定老公泰语",
        "year": "2020",
        "region": "泰国",
        "type": "剧集",
        "genre": "爱情/喜剧/律政",
        "tags": [
            "先婚后爱",
            "欢喜冤家",
            "律师题材",
            "高颜值"
        ],
        "oneLine": "一名王牌女律师被母亲安排与一个玩世不恭的建筑师“法定结婚”,两人从互相嫌弃到假戏真做。",
        "url": "./movies/movie-1748.html",
        "image": "./98.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "九分山水半分田",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情/家庭/农村",
        "tags": [
            "土地改革",
            "家族恩怨",
            "山水田园",
            "现实主义",
            "代际冲突"
        ],
        "oneLine": "因为一纸土地确权证,原本和睦的兄弟俩反目成仇,甚至动用了挖掘机去刨祖坟。",
        "url": "./movies/movie-1749.html",
        "image": "./99.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "桃李满园",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/教育",
        "tags": [
            "乡村教师",
            "支教",
            "奉献",
            "感人",
            "成长"
        ],
        "oneLine": "一位名校毕业的年轻人,为了一个承诺,在大山深处的教学点坚守了整整三十年。",
        "url": "./movies/movie-1750.html",
        "image": "./100.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "驱魔大师",
        "year": "2024",
        "region": "韩国",
        "type": "剧集",
        "genre": "恐怖,奇幻",
        "tags": [
            "驱魔",
            "神父",
            "单元剧",
            "反转",
            "恐怖"
        ],
        "oneLine": "一个没有信仰的驱魔师用物理学和心理学“驱魔”,成功率比梵蒂冈认证的大师还高。",
        "url": "./movies/movie-1751.html",
        "image": "./101.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "艾洛佛林的冒险",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "奇幻/冒险/家庭",
        "tags": [
            "魔法书",
            "异世界",
            "少年英雄",
            "成长",
            "蒸汽朋克"
        ],
        "oneLine": "十二岁男孩艾洛佛林无意中翻开了亡父留下的一本会咬人的书,被拉入一个靠“记忆”驱动魔法的濒死世界。",
        "url": "./movies/movie-1752.html",
        "image": "./102.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "吻我吧,青蛙王子",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧,奇幻,爱情",
        "tags": [
            "诅咒",
            "变身",
            "身份错位"
        ],
        "oneLine": "毒舌霸道总裁被诅咒成青蛙,只有真心的吻才能复原。",
        "url": "./movies/movie-1753.html",
        "image": "./103.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "成为莱德伍德",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "传记,剧情,音乐",
        "tags": [
            "摇滚",
            "虚构乐队",
            "成名之路",
            "自我毁灭",
            "救赎"
        ],
        "oneLine": "90年代垃圾摇滚主唱莱德伍德在巅峰期失踪十年后,以女性身份复出,并带来一张震撼世人的专辑。",
        "url": "./movies/movie-1754.html",
        "image": "./104.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "天网擒凶",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "刑侦/悬疑/罪案",
        "tags": [
            "大数据追凶",
            "连环杀人",
            "技术流探案",
            "真实改编"
        ],
        "oneLine": "天才程序员开发的天网系统接连出错,导致无辜者被标记为凶手,程序员不得不亲自追查系统背后的“幽灵”。",
        "url": "./movies/movie-1755.html",
        "image": "./105.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "盾之勇者成名录第一季",
        "year": "2019",
        "region": "日本",
        "type": "剧集",
        "genre": "动画/奇幻/冒险",
        "tags": [
            "异世界",
            "黑化",
            "复仇",
            "盾牌",
            "三勇者"
        ],
        "oneLine": "四个普通人被召唤为异世界勇者,只有拿到盾牌的那个被所有人唾弃,他决定黑化复仇。",
        "url": "./movies/movie-1756.html",
        "image": "./106.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "战争俘虏",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "战争剧情",
        "tags": [
            "战俘营",
            "美军越战",
            "友谊"
        ],
        "oneLine": "越南战争末期,一个美军战俘与看守他的北越士兵从敌人变成了交换日记的笔友。",
        "url": "./movies/movie-1757.html",
        "image": "./107.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "雾中湖",
        "year": "2028",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑/犯罪/剧情",
        "tags": [
            "湿地命案",
            "环保黑幕",
            "记者调查",
            "小镇众生相"
        ],
        "oneLine": "一个外地女记者的尸体在湖中被发现,全镇人都说她是自杀,只有她生前的实习生发现她指甲缝里的蓝藻。",
        "url": "./movies/movie-1758.html",
        "image": "./108.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "东京死劫:布莱克曼命案",
        "year": "2020",
        "region": "日本/英国",
        "type": "剧集",
        "genre": "犯罪/纪实/悬疑",
        "tags": [
            "真实案件",
            "跨文化",
            "侦探推理",
            "社会派"
        ],
        "oneLine": "英国女留学生东京离奇失踪,一位落魄私家侦探与退休刑警联手揭开层层黑幕。",
        "url": "./movies/movie-1759.html",
        "image": "./109.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "赤松威龙",
        "year": "2009",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动画,冒险",
        "tags": [
            "国产动画",
            "神话",
            "龙",
            "环保"
        ],
        "oneLine": "赤松林里最后一条小龙为了拯救枯萎的森林,决定去偷人类的“春天”。",
        "url": "./movies/movie-1760.html",
        "image": "./110.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "如珠如宝的人生",
        "year": "2019",
        "region": "中国香港",
        "type": "剧集",
        "genre": "剧情,家庭,喜剧",
        "tags": [
            "养老院",
            "温情",
            "港式喜剧",
            "群像"
        ],
        "oneLine": "一个失败的发明家接管了一家濒临倒闭的养老院,用各种奇葩发明与一群“老顽童”一起守护他们最后的尊严。",
        "url": "./movies/movie-1761.html",
        "image": "./111.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "隔楼女孩:我们之间的层距",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集/短剧",
        "genre": "爱情/剧情",
        "tags": [
            "暗恋",
            "距离",
            "都市",
            "治愈"
        ],
        "oneLine": "住在同一栋楼的上下层,女孩暗恋男孩整整三年,却因为不敢开口,只能一次次擦肩而过。",
        "url": "./movies/movie-1762.html",
        "image": "./112.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "幸运的丹尼尔",
        "year": "2019",
        "region": "英国",
        "type": "电影",
        "genre": "剧情/奇幻/喜剧",
        "tags": [
            "幸运值",
            "黑色幽默",
            "小确丧",
            "命运反转",
            "英式幽默"
        ],
        "oneLine": "全世界最倒霉的男人丹尼尔突然发现,他只要踩到狗屎就能中彩票,于是他开始满城寻找狗屎,却引发一连串荒诞意外。",
        "url": "./movies/movie-1763.html",
        "image": "./113.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "追梦的黎族女娃娃",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/运动/儿童",
        "tags": [
            "黎族",
            "女足",
            "乡村",
            "梦想"
        ],
        "oneLine": "海南黎族山区一个从未踢过球的小女孩,用椰子当足球、沙滩当球场,最终踢进国家少年队。",
        "url": "./movies/movie-1764.html",
        "image": "./114.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "爱我就搭火车",
        "year": "1998",
        "region": "法国",
        "type": "电影",
        "genre": "爱情/喜剧/公路",
        "tags": [
            "火车",
            "群像",
            "遗产",
            "幽默"
        ],
        "oneLine": "古怪画家去世,遗嘱要求所有爱过他的人搭同一趟火车去葬礼,否则不得继承遗产。",
        "url": "./movies/movie-1765.html",
        "image": "./115.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "鲁卜哈利沙漠:非洲的女人",
        "year": "2024",
        "region": "意大利/摩洛哥",
        "type": "电影",
        "genre": "冒险、剧情",
        "tags": [
            "石油勘探",
            "贝都因人",
            "空难",
            "生存",
            "跨文化"
        ],
        "oneLine": "一名非洲女地质学家飞机失事坠落“空旷的四分之一”沙漠,必须与仇视外人的贝都因部落合作才能活着出去。",
        "url": "./movies/movie-1766.html",
        "image": "./116.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "风尘艳侣",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情,犯罪",
        "tags": [
            "舞女",
            "杀手",
            "九龙城寨",
            "宿命"
        ],
        "oneLine": "她是九龙城寨最红的舞女,他是城寨最冷酷的杀手,两人相约干掉对方背后的老大后私奔。",
        "url": "./movies/movie-1767.html",
        "image": "./117.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "格雷斯第三季",
        "year": "2022",
        "region": "美国",
        "type": "剧集",
        "genre": "悬疑,犯罪",
        "tags": [
            "神探",
            "英式风格",
            "连环杀人"
        ],
        "oneLine": "警探格雷斯刚破解了模仿犯案,那个以为已经死掉的杀手就寄来了一盘录像带:里面是格雷斯妻子车祸的另一种真相。",
        "url": "./movies/movie-1768.html",
        "image": "./118.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "超级学校霸王",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧、校园、奇幻",
        "tags": [
            "游戏穿越",
            "街机",
            "怀旧",
            "教育批判",
            "无厘头"
        ],
        "oneLine": "一款失败的教育APP意外将《街头霸王》里的反派们传送到了现实中学,而它们发现:现在的初中生比BOSS还难打。",
        "url": "./movies/movie-1769.html",
        "image": "./119.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "紧锁",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖,密室",
        "tags": [
            "精神病院",
            "脑内迷宫",
            "自我审判"
        ],
        "oneLine": "女精神科医师被困在病人的大脑里,每一扇门后都是自己不想面对的过去。",
        "url": "./movies/movie-1770.html",
        "image": "./120.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "师父!我要跳舞了",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情/青春/歌舞",
        "tags": [
            "街舞",
            "师徒",
            "热血",
            "小镇少年",
            "舞蹈梦想"
        ],
        "oneLine": "小镇上一个爱跳广场舞的退休老人,被一个辍学少年发现曾是八十年代的霹雳舞冠军。",
        "url": "./movies/movie-1771.html",
        "image": "./121.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "毒行公路",
        "year": "2025",
        "region": "墨西哥/美国",
        "type": "电影",
        "genre": "动作,惊悚,犯罪",
        "tags": [
            "公路片",
            "毒枭",
            "复仇",
            "卡车司机"
        ],
        "oneLine": "一名退役赛车手转行做卡车司机,无意中卷入运毒案,妻子被害,他在66号公路上展开了血腥复仇。",
        "url": "./movies/movie-1772.html",
        "image": "./122.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "迪特,人之子",
        "year": "2019",
        "region": "德国",
        "type": "电影",
        "genre": "剧情,传记,战争",
        "tags": [
            "二战",
            "反思",
            "人性",
            "非英雄叙事"
        ],
        "oneLine": "一个纳粹士兵的儿子,战后活成了自己最恨的那种人,直到他捡到一个犹太老人的日记本。",
        "url": "./movies/movie-1773.html",
        "image": "./123.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "你和我的时光",
        "year": "2025",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "爱情,奇幻",
        "tags": [
            "穿越",
            "磁带",
            "怀旧",
            "校园"
        ],
        "oneLine": "女儿在整理母亲遗物时,发现一盘空白磁带,播放后她竟穿越回1995年,成了母亲的高中同桌。",
        "url": "./movies/movie-1774.html",
        "image": "./124.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "致命财神",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "恐怖,民俗",
        "tags": [
            "财神爷",
            "邪神",
            "拜金",
            "民俗恐怖",
            "诅咒"
        ],
        "oneLine": "除夕夜,一尊“财神爷”被送进每户欠债人家中,凡收下的人都在初五“迎财神”那天离奇暴毙。",
        "url": "./movies/movie-1775.html",
        "image": "./125.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "既然出生就环游世界3",
        "year": "2026",
        "region": "韩国",
        "type": "综艺/真人秀",
        "genre": "旅行/冒险",
        "tags": [
            "背包客",
            "极限挑战",
            "非洲",
            "生存",
            "明星素人"
        ],
        "oneLine": "这一季,明星们被空投到撒哈拉沙漠,只带一张写有“回家”两个字的纸条和24小时生存物资。",
        "url": "./movies/movie-1776.html",
        "image": "./126.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "她们的正义之声",
        "year": "2024",
        "region": "韩国",
        "type": "电视剧 (16集)",
        "genre": "剧情,律政,女性",
        "tags": [
            "全女律所",
            "职场性侵",
            "以暴制暴",
            "法外制裁"
        ],
        "oneLine": "三位曾被法律辜负的女性开办一家“地下律所”,专门用“非法手段”为无法立案的女性讨回公道。",
        "url": "./movies/movie-1777.html",
        "image": "./127.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "贩售太阳的女孩",
        "year": "2025",
        "region": "意大利",
        "type": "电影",
        "genre": "奇幻",
        "tags": [
            "寓言",
            "家族秘密",
            "光线",
            "契约"
        ],
        "oneLine": "一个西西里家族世代向游客兜售“日光瓶”,直到最小的女儿打碎了一只封存着祖父灵魂的瓶子。",
        "url": "./movies/movie-1778.html",
        "image": "./128.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "十二猴子第四季",
        "year": "2018",
        "region": "美国",
        "type": "剧集",
        "genre": "科幻/悬疑/冒险",
        "tags": [
            "时间旅行",
            "病毒",
            "末日",
            "循环终结"
        ],
        "oneLine": "时间已经碎裂,过去、现在和未来同时坍塌,十二猴子军背后的真相终于揭晓。",
        "url": "./movies/movie-1779.html",
        "image": "./129.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "邪魔入侵",
        "year": "2025",
        "region": "西班牙/墨西哥",
        "type": "电影",
        "genre": "恐怖/奇幻",
        "tags": [
            "宗教",
            "驱魔",
            "身体恐怖",
            "反转"
        ],
        "oneLine": "全球所有驱魔师同时被附身,梵蒂冈不得不请出唯一不信上帝的天才医生。",
        "url": "./movies/movie-1780.html",
        "image": "./130.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "潜伏者2016",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动作,谍战",
        "tags": [
            "卧底",
            "特工",
            "反转",
            "硬核"
        ],
        "oneLine": "一名CIA特工奉命潜入恐怖组织,却发现自己渐渐分不清正义与邪恶的界限。",
        "url": "./movies/movie-1781.html",
        "image": "./131.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "旺角监狱",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作/犯罪/惊悚",
        "tags": [
            "卧底风云",
            "黑帮械斗",
            "九龙城寨美学",
            "兄弟情",
            "暴力美学"
        ],
        "oneLine": "旺角一栋旧楼被黑帮改造成私牢,卧底警察打入内部后发现犯人里有人比他更想当警察。",
        "url": "./movies/movie-1782.html",
        "image": "./132.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "摩斯探长前传第二季",
        "year": "2014",
        "region": "英国",
        "type": "剧集",
        "genre": "悬疑,犯罪",
        "tags": [
            "英伦",
            "推理",
            "年代剧",
            "牛津"
        ],
        "oneLine": "年轻的摩斯警探在牛津调查一桩看似完美的自杀案,却牵扯出大学内部黑暗的器官捐赠网络。",
        "url": "./movies/movie-1783.html",
        "image": "./133.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "芝加哥急救第十季",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "剧情,医疗",
        "tags": [
            "医务",
            "群像",
            "灾难",
            "职业剧"
        ],
        "oneLine": "芝加哥最大化学工厂爆炸,急救室瞬间涌入三百名伤员,医生们必须在不断有人死去的情况下,决定谁先活。",
        "url": "./movies/movie-1784.html",
        "image": "./134.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "凡丹戈马戏团",
        "year": "2024",
        "region": "墨西哥",
        "type": "电影",
        "genre": "奇幻,剧情",
        "tags": [
            "马戏团",
            "亡灵",
            "告别",
            "色彩"
        ],
        "oneLine": "一个只能在亡灵节夜晚现身的马戏团,每表演一场,就能让一个活人见一次他们最想见的逝者。",
        "url": "./movies/movie-1785.html",
        "image": "./135.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "鬼单眼",
        "year": "2026",
        "region": "日本",
        "type": "剧集",
        "genre": "恐怖,奇幻",
        "tags": [
            "都市传说",
            "相机",
            "诅咒",
            "单元剧"
        ],
        "oneLine": "网红主播淘到一款二手单反,取景器里竟能看见死者临终前最后七秒的怨念画面。",
        "url": "./movies/movie-1786.html",
        "image": "./136.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "有情鸳鸯无情剑",
        "year": "2002",
        "region": "中国香港",
        "type": "电影",
        "genre": "武侠,爱情,动作",
        "tags": [
            "江湖仇杀",
            "情侣反目",
            "铸剑师",
            "宿命"
        ],
        "oneLine": "铸剑师为未婚妻铸成天下第一剑,剑成之日,她提此剑灭他满门。",
        "url": "./movies/movie-1787.html",
        "image": "./137.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "莲花太子",
        "year": "2026",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装,武侠,奇幻",
        "tags": [
            "哪吒同人",
            "神魔大战",
            "少年英雄",
            "东方玄幻"
        ],
        "oneLine": "哪吒的“灵珠子”转世流落人间,被一个普通猎户收养,化名“莲花”,卷入了截教与阐教的千年暗战。",
        "url": "./movies/movie-1788.html",
        "image": "./138.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "公民责任",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "剧情/惊悚",
        "tags": [
            "陪审团",
            "道德困境",
            "独狼行动"
        ],
        "oneLine": "一名普通社区保安发现自己的DNA与连环爆炸案证据吻合,他必须在警方追捕前亲自揪出真凶。",
        "url": "./movies/movie-1789.html",
        "image": "./139.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "劣质爱情",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "爱情,剧情",
        "tags": [
            "边缘人",
            "残疾",
            "意外邂逅",
            "虐心",
            "生命意义"
        ],
        "oneLine": "全身瘫痪的富家女与笨拙的底层护工,在屎尿屁中爆发出最撕裂又治愈的爱情。",
        "url": "./movies/movie-1790.html",
        "image": "./140.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "冲破囚笼",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/家庭/运动",
        "tags": [
            "监狱",
            "拳击",
            "父女",
            "救赎",
            "真人真事改编"
        ],
        "oneLine": "重刑犯在狱中组建拳击队,目标是击败警察代表队,只为在女儿面前赢回一次尊严。",
        "url": "./movies/movie-1791.html",
        "image": "./141.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "灰姑娘的陷阱",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "悬疑/惊悚",
        "tags": [
            "反转童话",
            "心理游戏",
            "暗黑改编"
        ],
        "oneLine": "穿上水晶鞋的继妹离奇失踪,灰姑娘发现自己掉进了一个为复仇而设的惊天陷阱。",
        "url": "./movies/movie-1792.html",
        "image": "./142.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "无声的证言第二十六季",
        "year": "2026",
        "region": "英国",
        "type": "剧集",
        "genre": "悬疑/犯罪/剧情",
        "tags": [
            "法医",
            "悬疑",
            "犯罪",
            "英剧",
            "推理"
        ],
        "oneLine": "尼基博士接手一具无名的百年干尸,却发现它身上残留的DNA指向了一个还活着的人。",
        "url": "./movies/movie-1793.html",
        "image": "./143.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "幽灵2023",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖,惊悚,超自然",
        "tags": [
            "暗网",
            "直播",
            "诅咒",
            "录像带",
            "鬼屋"
        ],
        "oneLine": "一群网红为博流量闯入百年凶宅直播“通灵”,却激活了隐藏在网络信号中的数字恶灵,观众也开始离奇死亡。",
        "url": "./movies/movie-1794.html",
        "image": "./144.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "玉海棠",
        "year": "2025",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "悬疑/年代",
        "tags": [
            "民国奇案",
            "宅斗",
            "非遗文化"
        ],
        "oneLine": "一幅绣有藏宝图的绝世苏绣“玉海棠”重现江湖,引发了江南织造世家两代女性的智慧与阴谋对决。",
        "url": "./movies/movie-1795.html",
        "image": "./145.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "夜之门",
        "year": "2023",
        "region": "法国/比利时",
        "type": "电影",
        "genre": "奇幻、爱情、历史",
        "tags": [
            "时光旅馆",
            "战争亡灵",
            "遗憾",
            "二战",
            "超现实"
        ],
        "oneLine": "巴黎一间旅馆的旋转门,推开后是不同年代的同一片夜空,三个伤心的灵魂在此相遇。",
        "url": "./movies/movie-1796.html",
        "image": "./146.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "沉睡不醒的警察",
        "year": "2027",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑,科幻,犯罪",
        "tags": [
            "梦境探案",
            "意识投射",
            "连环罪案"
        ],
        "oneLine": "一名昏迷七年的警察,意识被接入连环凶手的梦境,必须在虚拟意识崩溃前阻止现实谋杀。",
        "url": "./movies/movie-1797.html",
        "image": "./147.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "贩毒五壮士",
        "year": "1992",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,犯罪,动作",
        "tags": [
            "缉毒",
            "卧底",
            "牺牲",
            "主旋律"
        ],
        "oneLine": "五个瘾君子被警方收编为卧底,深入金三角贩毒集团,最终只有一人的骨灰回来了。",
        "url": "./movies/movie-1798.html",
        "image": "./148.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "年轻母亲之家",
        "year": "2021",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情,家庭",
        "tags": [
            "女性",
            "互助",
            "现实",
            "温情",
            "社会"
        ],
        "oneLine": "一个为未成年妈妈提供庇护的公寓里,五个女孩决定抢回被渣男偷走的孩子。",
        "url": "./movies/movie-1799.html",
        "image": "./149.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "不再托腮遐思",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "亲情",
            "成长",
            "乡村",
            "留守",
            "治愈"
        ],
        "oneLine": "一个常年托腮发呆的留守女孩,用一本废弃的日历给远方服刑的父亲写了 365 封信。",
        "url": "./movies/movie-1800.html",
        "image": "./150.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "机器人悲剧",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "科幻,剧情,伦理",
        "tags": [
            "人工智能",
            "觉醒",
            "自我牺牲",
            "反乌托邦",
            "情感"
        ],
        "oneLine": "编号T-800的服务型机器人觉醒自我意识,却发现自己存在的唯一意义,就是被送往危险工厂销毁。",
        "url": "./movies/movie-1801.html",
        "image": "./1.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "阿拉伯漂移2",
        "year": "2025",
        "region": "沙特阿拉伯/阿联酋",
        "type": "电影",
        "genre": "动作,犯罪,飙车",
        "tags": [
            "沙漠",
            "超跑",
            "家族恩怨",
            "复仇",
            "改装车"
        ],
        "oneLine": "前作主角死后,他的两个儿子继承父亲的改装车,一个想报仇,一个想漂移出沙漠去欧洲。",
        "url": "./movies/movie-1802.html",
        "image": "./2.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "炎炎消防队第一季",
        "year": "2024",
        "region": "日本",
        "type": "TV剧集",
        "genre": "动画/动作/奇幻",
        "tags": [
            "消防",
            "异能战斗",
            "人体自燃",
            "宗教悬疑",
            "热血"
        ],
        "oneLine": "消防员不是灭火,而是踹开火焰,拯救即将变成焰人的活人。",
        "url": "./movies/movie-1803.html",
        "image": "./3.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "机变英盟2",
        "year": "2021",
        "region": "中国大陆",
        "type": "动画剧集",
        "genre": "科幻/机甲",
        "tags": [
            "机甲",
            "少年",
            "热血",
            "国产"
        ],
        "oneLine": "第一季大战五年后,机甲联盟解散,前成员们各自平凡生活,直到外星机甲军团降临地球。",
        "url": "./movies/movie-1804.html",
        "image": "./4.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "性手枪美国放浪行",
        "year": "2023",
        "region": "英国/美国",
        "type": "电影",
        "genre": "音乐传记",
        "tags": [
            "朋克",
            "巡演",
            "自毁",
            "文化冲突"
        ],
        "oneLine": "1978年性手枪美国巡演,每场都在台上被观众扔酒瓶,台下被媒体围剿。",
        "url": "./movies/movie-1805.html",
        "image": "./5.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "硝烟散尽",
        "year": "2021",
        "region": "中国大陆",
        "type": "电影",
        "genre": "战争/剧情",
        "tags": [
            "战后创伤",
            "老兵",
            "乡村"
        ],
        "oneLine": "抗美援朝老兵带着战友遗物回到故乡,却发现全村没人相信他上过战场。",
        "url": "./movies/movie-1806.html",
        "image": "./6.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "跨界任务",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "动作,喜剧",
        "tags": [
            "特工",
            "家庭",
            "乌龙"
        ],
        "oneLine": "一个家庭主妇的真实身份是传奇特工,她的废柴老公为了找回她,被迫加入任务。",
        "url": "./movies/movie-1807.html",
        "image": "./7.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "公子无双",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装/喜剧/爱情",
        "tags": [
            "甜宠",
            "女扮男装",
            "欢喜冤家",
            "朝堂",
            "轻喜"
        ],
        "oneLine": "京城第一纨绔公子竟是女儿身,为了退婚,她必须让被称为“活阎王”的未婚夫爱上自己。",
        "url": "./movies/movie-1808.html",
        "image": "./8.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "星期一的硕果第一季",
        "year": "2026",
        "region": "日本",
        "type": "剧集",
        "genre": "爱情、喜剧、职场",
        "tags": [
            "职场",
            "暧昧",
            "星期一综合征",
            "治愈"
        ],
        "oneLine": "每个周一早晨,都有一颗神秘的新鲜果实准时出现在设计部菜鸟工位上。",
        "url": "./movies/movie-1809.html",
        "image": "./9.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "骗术奇谭",
        "year": "1999",
        "region": "香港",
        "type": "电影",
        "genre": "喜剧/犯罪",
        "tags": [
            "千门",
            "师徒",
            "反诈",
            "黑色幽默",
            "局中局"
        ],
        "oneLine": "师徒二人专骗为富不仁者,却不小心骗到了东南亚最大假钞集团的头目头上。",
        "url": "./movies/movie-1810.html",
        "image": "./10.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "镖人",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作、武侠、西部",
        "tags": [
            "镖师",
            "大漠",
            "硬派武侠"
        ],
        "oneLine": "隋末大漠,最强镖客“刀马”接下了一趟镖:护送一个身份成谜的小孩,穿越刀光剑影的玉门关。",
        "url": "./movies/movie-1811.html",
        "image": "./11.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "甜蜜海风",
        "year": "2019",
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情,剧情",
        "tags": [
            "澎湖",
            "甜品",
            "疗愈",
            "小清新"
        ],
        "oneLine": "一个失意的甜品师来到澎湖,用海风和思念做出了全世界最苦的巧克力。",
        "url": "./movies/movie-1812.html",
        "image": "./12.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "窒友梅根",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖,科幻",
        "tags": [
            "玩偶",
            "AI",
            "杀人狂",
            "闺蜜"
        ],
        "oneLine": "失去双亲的少女收到了一个会说会笑的AI玩偶“梅根”,这个闺蜜为了保护她,开始清除所有“坏人”。",
        "url": "./movies/movie-1813.html",
        "image": "./13.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "社畜向前冲",
        "year": "2023",
        "region": "日本",
        "type": "电视剧",
        "genre": "喜剧,职场",
        "tags": [
            "打工人",
            "黑色幽默",
            "加班文化",
            "逆袭"
        ],
        "oneLine": "当黑心公司的社长在年会上说“公司就是你们的家”,忍无可忍的男主掏出辞职信:“那我要分家产。",
        "url": "./movies/movie-1814.html",
        "image": "./14.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "庞贝末日",
        "year": "2014",
        "region": "英国/德国/加拿大",
        "type": "电影",
        "genre": "动作/冒险/灾难/爱情",
        "tags": [
            "火山",
            "角斗士",
            "古罗马",
            "奴隶",
            "末世"
        ],
        "oneLine": "奴隶角斗士在火山爆发前夕爱上贵族小姐,必须在维苏威火山的灰烬中救出爱人与时间赛跑。",
        "url": "./movies/movie-1815.html",
        "image": "./15.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "四格勇者",
        "year": "2023",
        "region": "日本",
        "type": "剧集",
        "genre": "动画,冒险",
        "tags": [
            "四格漫画",
            "吐槽",
            "勇者",
            "反套路",
            "单元剧"
        ],
        "oneLine": "魔王城与勇者村只隔了一条街,勇者每天的日常就是去魔王超市抢购特价鸡蛋。",
        "url": "./movies/movie-1816.html",
        "image": "./16.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "纳坤蛇龙",
        "year": "2025",
        "region": "泰国",
        "type": "电影",
        "genre": "动作/奇幻/冒险",
        "tags": [
            "东南亚神话",
            "巨兽",
            "丛林探险",
            "守护者传承"
        ],
        "oneLine": "湄公河渔民无意中唤醒千年蛇龙,考古学家之女必须与最后一支那伽卫士联手平息龙怒。",
        "url": "./movies/movie-1817.html",
        "image": "./17.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "32颗药丸:我姐姐的自杀",
        "year": "2023",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情,悬疑",
        "tags": [
            "家庭",
            "抑郁",
            "日记",
            "真相"
        ],
        "oneLine": "姐姐留下32颗抗抑郁药自杀后,妹妹发现药瓶里混入了两颗致命的氰化物胶囊。",
        "url": "./movies/movie-1818.html",
        "image": "./18.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "考试家族",
        "year": "2021",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧,家庭,教育",
        "tags": [
            "高考",
            "鸡娃",
            "反内卷",
            "搞笑",
            "温情"
        ],
        "oneLine": "一个“考神”世家,祖孙三代全是状元,却偏偏养出一个只想当厨师的“学渣”儿子。",
        "url": "./movies/movie-1819.html",
        "image": "./19.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "草原日出",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/家庭/西部",
        "tags": [
            "内蒙草原",
            "留守儿童",
            "人与自然",
            "成长"
        ],
        "oneLine": "牧民父亲将城市儿子送到草原“改造”,叛逆少年却在暴风雪中为一匹怀孕的母马与狼群对峙了一整夜。",
        "url": "./movies/movie-1820.html",
        "image": "./20.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "赛马娘",
        "year": "2024",
        "region": "日本",
        "type": "剧集/动画",
        "genre": "运动/奇幻/励志",
        "tags": [
            "拟人化",
            "竞技",
            "偶像"
        ],
        "oneLine": "短发少女继承了传奇赛马“东海帝王”的灵魂,她的目标是在“凯旋门赏”中击败欧洲最强的长距离赛马娘。",
        "url": "./movies/movie-1821.html",
        "image": "./21.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "生化危机5:惩罚",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动作/科幻/恐怖",
        "tags": [
            "丧尸",
            "保护伞公司",
            "女战神",
            "续作"
        ],
        "oneLine": "爱丽丝被困在保护伞公司的模拟试验场中,必须通关不同时代的“惩罚”关卡。",
        "url": "./movies/movie-1822.html",
        "image": "./22.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "爵士吧广岛",
        "year": "1998",
        "region": "日本",
        "type": "电影",
        "genre": "剧情/音乐",
        "tags": [
            "战后创伤",
            "爵士时代",
            "废墟重生 昭和怀旧",
            "废墟美学",
            "爵士乐疗愈",
            "沉默叙事"
        ],
        "oneLine": "广岛原爆废墟中,一位失去左手的钢琴师开了一家只播放爵士乐唱片的小酒吧,一开就是五十年。",
        "url": "./movies/movie-1823.html",
        "image": "./23.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "鳄鱼邓迪在洛杉矶",
        "year": "2001",
        "region": "美国/澳大利亚",
        "type": "电影",
        "genre": "喜剧/冒险",
        "tags": [
            "澳洲",
            "洛杉矶",
            "文化冲突",
            "鳄鱼猎人"
        ],
        "oneLine": "澳洲丛林之王来到好莱坞调查一桩电影片场命案,他用回旋镖和土语让洛杉矶警察集体崩溃。",
        "url": "./movies/movie-1824.html",
        "image": "./24.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "吉祥不高兴",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧/爱情/古装",
        "tags": [
            "先婚后爱",
            "欢喜冤家",
            "轻喜",
            "甜宠",
            "宅斗"
        ],
        "oneLine": "京城第一纨绔被迫娶了“克死”三个未婚夫的“灾星”姑娘,两人都想把对方气走,却越闹越上头。",
        "url": "./movies/movie-1825.html",
        "image": "./25.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "公鸡的啼叫",
        "year": "2026",
        "region": "法国",
        "type": "电影",
        "genre": "悬疑,伦理",
        "tags": [
            "乡村",
            "秘密",
            "复仇",
            "法式乡村"
        ],
        "oneLine": "宁静的法国乡村,一只公鸡每天清晨的啼叫,正在揭开三户人家深藏二十年的肮脏秘密。",
        "url": "./movies/movie-1826.html",
        "image": "./26.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "起爆",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作/犯罪/悬疑",
        "tags": [
            "拆弹",
            "警匪",
            "双雄对决",
            "牺牲",
            "硬汉"
        ],
        "oneLine": "拆弹专家与制作炸弹的天才在闹市展开生死对决,两人竟是失散多年的兄弟。",
        "url": "./movies/movie-1827.html",
        "image": "./27.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "因为我们天生一对",
        "year": "2023",
        "region": "泰国",
        "type": "剧集",
        "genre": "爱情/喜剧/青春",
        "tags": [
            "同性",
            "校园",
            "甜宠",
            "双向暗恋"
        ],
        "oneLine": "两个互不相识的男生,在同一款恋爱游戏里把对方当成了“理想女友”,却在现实里成了死对头。",
        "url": "./movies/movie-1828.html",
        "image": "./28.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "小不点儿",
        "year": "2021",
        "region": "中国",
        "type": "剧集",
        "genre": "剧情/家庭",
        "tags": [
            "留守儿童",
            "乡村教师",
            "成长治愈",
            "当代乡村"
        ],
        "oneLine": "贵州深山里一个只有13个学生的村小,来了个95后城市女孩当支教老师,她发现这些小不点儿们藏着天大的秘密。",
        "url": "./movies/movie-1829.html",
        "image": "./29.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "红发女郎",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "悬疑,犯罪",
        "tags": [
            "复仇",
            "都市传说",
            "女性力量"
        ],
        "oneLine": "一名神秘红发女子连续出现在三起死亡现场,而警方发现她早已在十年前去世。",
        "url": "./movies/movie-1830.html",
        "image": "./30.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "耶路撒冷的房子",
        "year": "2024",
        "region": "以色列",
        "type": "电影",
        "genre": "剧情/历史",
        "tags": [
            "以巴冲突",
            "家庭秘密",
            "老宅"
        ],
        "oneLine": "为了卖掉已故父亲的老宅,散落世界的三兄妹回到耶路撒冷,却在墙壁夹层中发现了一本犹太秘史和一个阿拉伯男孩的尸骨。",
        "url": "./movies/movie-1831.html",
        "image": "./31.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "我没病",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,喜剧",
        "tags": [
            "精神病院",
            "错位",
            "黑色幽默",
            "社会隐喻"
        ],
        "oneLine": "正常人为躲避债主装疯混进精神病院,结果发现真正的疯子是那些不愿出院的“正常人”。",
        "url": "./movies/movie-1832.html",
        "image": "./32.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "上帝的召唤",
        "year": "2024",
        "region": "美国/墨西哥",
        "type": "电影",
        "genre": "惊悚/剧情",
        "tags": [
            "宗教",
            "心理",
            "沙漠",
            "信仰危机"
        ],
        "oneLine": "无神论记者潜入沙漠深处的邪教营地,却发现“上帝”的声音来自一台二战时期的加密电台。",
        "url": "./movies/movie-1833.html",
        "image": "./33.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "历史不下课",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "科幻,校园",
        "tags": [
            "循环",
            "近代史",
            "热血",
            "穿越",
            "高考"
        ],
        "oneLine": "一名高三差生被困在“历史课”这一天的无限循环里,他必须让全班同学真正理解近代史才能跳出轮回。",
        "url": "./movies/movie-1834.html",
        "image": "./34.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "消失在第七街",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖,悬疑",
        "tags": [
            "都市传说",
            "失踪",
            "时间循环",
            "地铁"
        ],
        "oneLine": "第七街地铁站的监控拍到一百多人同时凭空消失,一名警察发现这事每十年发生一次。",
        "url": "./movies/movie-1835.html",
        "image": "./35.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "发达痴梦",
        "year": "1987",
        "region": "香港",
        "type": "电影",
        "genre": "喜剧,剧情",
        "tags": [
            "草根",
            "发财梦",
            "黑色幽默",
            "经典港味"
        ],
        "oneLine": "香港一个落魄打工仔偶然得到一块据说能许愿的玉佩,每次许愿都会以最荒诞的方式实现。",
        "url": "./movies/movie-1836.html",
        "image": "./36.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "英才恨",
        "year": "2025",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "剧情/悬疑/惊悚",
        "tags": [
            "补习班",
            "升学压力",
            "复仇",
            "心理惊悚"
        ],
        "oneLine": "顶尖补习班的模范生跳楼后,其他学生陆续收到他生前设计的“完美试卷”——考不到满分就得死。",
        "url": "./movies/movie-1837.html",
        "image": "./37.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "我的心",
        "year": "2022",
        "region": "法国/比利时",
        "type": "电影",
        "genre": "剧情/文艺",
        "tags": [
            "器官捐赠",
            "陌生人",
            "孤独",
            "救赎"
        ],
        "oneLine": "一个女孩死后,她的心脏被移植给三个不同的人,这三个人开始追寻同一种心跳。",
        "url": "./movies/movie-1838.html",
        "image": "./38.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "绝境求生:冰峰奇迹",
        "year": "2024",
        "region": "西班牙",
        "type": "电影",
        "genre": "冒险/传记/灾难",
        "tags": [
            "登山",
            "空难",
            "自救",
            "真实改编"
        ],
        "oneLine": "1972年安第斯空难幸存者在冰封72天后,由一名医学生带队翻越4520米死亡山峰求援的真实故事。",
        "url": "./movies/movie-1839.html",
        "image": "./39.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "暴雨骄阳国语",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情校园",
        "tags": [
            "母语教学",
            "粤语",
            "身份认同",
            "师生"
        ],
        "oneLine": "一位被贬到乡村中学的国语老师,用一首首老歌,让一群只说粤语的问题学生爱上了普通话。",
        "url": "./movies/movie-1840.html",
        "image": "./40.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "轰天俏娇娃",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作,喜剧,犯罪",
        "tags": [
            "女特工",
            "港产片",
            "爆笑",
            "功夫"
        ],
        "oneLine": "时尚杂志编辑被迫顶替双胞胎特工姐姐,用高跟鞋和口红在东南亚黑帮杀出一条血路。",
        "url": "./movies/movie-1841.html",
        "image": "./41.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "电影魂",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情,传记",
        "tags": [
            "片场",
            "执念",
            "传承",
            "迷影"
        ],
        "oneLine": "过气龙虎武师为还巨债,接下一部无法完成的老电影,竟发现剧本预言了自己的人生。",
        "url": "./movies/movie-1842.html",
        "image": "./42.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "霹雳震寰宇之兵甲龙痕",
        "year": "2010",
        "region": "中国台湾",
        "type": "电视剧(布袋戏)",
        "genre": "武侠/奇幻/戏曲",
        "tags": [
            "布袋戏",
            "霹雳",
            "宿命",
            "史诗"
        ],
        "oneLine": "死国战神阿修罗复生,火宅佛狱入侵,苦境正道面临前所未有的灭绝危机。",
        "url": "./movies/movie-1843.html",
        "image": "./43.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "风流世家",
        "year": "2027",
        "region": "中国",
        "type": "电视剧",
        "genre": "剧情/年代",
        "tags": [
            "民国",
            "家族兴衰",
            "女性群像"
        ],
        "oneLine": "1930年代上海滩,三个出身风尘的结拜姐妹,用十年时间吞并了整个法租界的产业。",
        "url": "./movies/movie-1844.html",
        "image": "./44.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "色香味谋杀案",
        "year": "2019",
        "region": "法国",
        "type": "电影",
        "genre": "悬疑犯罪",
        "tags": [
            "美食",
            "连环杀手",
            "米其林",
            "复仇"
        ],
        "oneLine": "三位米其林评审接连死亡,死时表情安详,身体里只剩一道完美的菜肴。",
        "url": "./movies/movie-1845.html",
        "image": "./45.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "幽灵车:复仇之路",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动作惊悚",
        "tags": [
            "肌肉车",
            "地下赛车",
            "亡魂附车",
            "高架桥追杀"
        ],
        "oneLine": "改装车手驾驶亡兄的道奇战马参加地下赛,却发现这辆车会在时速200公里时,让后座出现一个复仇的幽灵。",
        "url": "./movies/movie-1846.html",
        "image": "./46.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "职业替身",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "爱情,悬疑,职场",
        "tags": [
            "替身文学",
            "霸道总裁",
            "真相",
            "反转"
        ],
        "oneLine": "女主被雇去给跨国总裁当“替身女友”,却发现自己长得和他失踪的白月光一模一样,而白月光似乎是被他杀的。",
        "url": "./movies/movie-1847.html",
        "image": "./47.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "蔚蓝50米 第一季",
        "year": "2017",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "运动,青春",
        "tags": [
            "游泳",
            "国家队",
            "兄弟情",
            "热血",
            "训练"
        ],
        "oneLine": "两位曾经的天才游泳少年,因一场事故分道扬镳,五年后在国家队选拔赛上再次对决。",
        "url": "./movies/movie-1848.html",
        "image": "./48.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "新铁路少年",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "铁路",
            "成长",
            "友情",
            "乡村",
            "离别"
        ],
        "oneLine": "八十年代,四个铁路子弟为挽救即将被拆除的蒸汽火车头,踏上了一场充满欢笑与泪水的夏日冒险。",
        "url": "./movies/movie-1849.html",
        "image": "./49.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "谁知女子心",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "都市情感",
        "tags": [
            "女性群像",
            "职场博弈",
            "婚恋现实"
        ],
        "oneLine": "四个陌生女人共享一个秘密:她们都在同一家婚恋App上收到了同一个男人的完美匹配。",
        "url": "./movies/movie-1850.html",
        "image": "./50.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "年轻人",
        "year": "2026",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情",
        "tags": [
            "青春",
            "成长",
            "社会现实"
        ],
        "oneLine": "四个职高毕业生在台北没前途、没钱、没希望,决定干一票大的再集体消失。",
        "url": "./movies/movie-1851.html",
        "image": "./51.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "香烟女孩",
        "year": "2023",
        "region": "印度尼西亚",
        "type": "电影",
        "genre": "剧情,历史",
        "tags": [
            "香烟厂",
            "女性劳工",
            "爪哇",
            "家族恩怨"
        ],
        "oneLine": "1960年代印尼香烟厂,一个肺部有病的女孩凭着对丁香的敏感,成为头号卷烟女工,却卷入了家族秘密。",
        "url": "./movies/movie-1852.html",
        "image": "./52.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "初恋太空男孩",
        "year": "2022",
        "region": "日本",
        "type": "剧集",
        "genre": "科幻爱情",
        "tags": [
            "太空",
            "纯爱",
            "高中生",
            "星际通讯",
            "治愈"
        ],
        "oneLine": "地球女高中生收到来自火星基地的求救信号,对方是一个自称“被遗弃的初恋”的男孩。",
        "url": "./movies/movie-1853.html",
        "image": "./53.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "亲切的金子",
        "year": "2005",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情/惊悚/犯罪",
        "tags": [
            "复仇",
            "女性",
            "救赎",
            "反转",
            "暴力美学"
        ],
        "oneLine": "她花了十三年在狱中布施善意,只为出狱后向一个人展开比死更残忍的复仇。",
        "url": "./movies/movie-1854.html",
        "image": "./54.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "敌对分子",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "剧情,西部,战争",
        "tags": [
            "南北战争后遗症",
            "种族和解",
            "公路片"
        ],
        "oneLine": "一个北方上尉被迫护送曾杀死他战友的印第安酋长返乡,穿越1000英里敌占区。",
        "url": "./movies/movie-1855.html",
        "image": "./55.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "平等的隔离",
        "year": "2024",
        "region": "德国",
        "type": "电影",
        "genre": "剧情/科幻/伦理",
        "tags": [
            "社会实验",
            "基因筛选",
            "反乌托邦"
        ],
        "oneLine": "未来社会将所有人按“缺点”隔离成不同区域,声称平等,实则制造了最深的偏见。",
        "url": "./movies/movie-1856.html",
        "image": "./56.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "黄金诡事录",
        "year": "2026",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "悬疑/古装",
        "tags": [
            "民国奇案",
            "黄金",
            "家族恩怨",
            "探案",
            "中式恐怖"
        ],
        "oneLine": "民国上海滩,一桩离奇黄金失窃案牵扯出三大家族背后的诅咒——所有摸过这批黄金的人,都会在第七天离奇死亡。",
        "url": "./movies/movie-1857.html",
        "image": "./57.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "好运将至",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧,奇幻",
        "tags": [
            "锦鲤",
            "运气",
            "职场",
            "讽刺",
            "社畜"
        ],
        "oneLine": "万年倒霉蛋程序员工泽意外绑定“好运余额宝”系统,但他每用一次好运,身边人就会遭受相应的霉运。",
        "url": "./movies/movie-1858.html",
        "image": "./58.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "被遗忘的人",
        "year": "2027",
        "region": "日本",
        "type": "电影",
        "genre": "剧情/科幻",
        "tags": [
            "记忆删除",
            "社会边缘人",
            "存在危机"
        ],
        "oneLine": "一家公司推出“遗忘服务”,主角主动删除了自己的社会身份,却发现自己曾是这项服务的发明者。",
        "url": "./movies/movie-1859.html",
        "image": "./59.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "老将新生",
        "year": "2021",
        "region": "美国",
        "type": "电影",
        "genre": "运动,剧情",
        "tags": [
            "励志",
            "棒球",
            "中年",
            "不屈"
        ],
        "oneLine": "一个40岁的前职业棒球手隐瞒年龄混进大学联赛,却发现自己面对的对手,竟是自己当年抛弃的儿子。",
        "url": "./movies/movie-1860.html",
        "image": "./60.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "杀手不笨",
        "year": "2023",
        "region": "香港",
        "type": "电影",
        "genre": "喜剧,动作,犯罪",
        "tags": [
            "杀手",
            "乌龙",
            "失忆",
            "反转"
        ],
        "oneLine": "顶级杀手因意外失忆后,坚信自己是外卖员,每次完成任务都像是在给客户送一份“特殊套餐”。",
        "url": "./movies/movie-1861.html",
        "image": "./61.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "九里达",
        "year": "2025",
        "region": "印度尼西亚",
        "type": "电影",
        "genre": "动作/惊悚",
        "tags": [
            "东南亚",
            "杀手",
            "复仇",
            "暴力"
        ],
        "oneLine": "一个被帮派出卖的顶级杀手,在身负重伤、记忆模糊的情况下,必须赶在敌人之前,拼凑出自己是谁。",
        "url": "./movies/movie-1862.html",
        "image": "./62.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "神鬼尖兵",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "动作,奇幻",
        "tags": [
            "梵蒂冈",
            "驱魔",
            "特种部队"
        ],
        "oneLine": "梵蒂冈秘密训练了一支由无神论者组成的“科学驱魔特种部队”,他们的武器是电磁脉冲与认知科学,直到他们发现恶魔会数学。",
        "url": "./movies/movie-1863.html",
        "image": "./63.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "海豚王之死",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "纪录片,环保",
        "tags": [
            "海洋保护",
            "悲剧",
            "真实事件改编"
        ],
        "oneLine": "一只被誉为“海豚王”的领航鲸,在与人类建立深厚情感后,却死在了它最信任的驯养师怀中。",
        "url": "./movies/movie-1864.html",
        "image": "./64.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "刽子手怪谈",
        "year": "2025",
        "region": "中国香港/中国大陆",
        "type": "电影",
        "genre": "古装/惊悚/民俗",
        "tags": [
            "刽子手",
            "清朝",
            "诅咒",
            "断头台",
            "因果"
        ],
        "oneLine": "清朝最后一个刽子手发现,被他斩首的亡魂都会在头七夜回来,向他索要“一句话的道歉”。",
        "url": "./movies/movie-1865.html",
        "image": "./65.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "爵士灵魂",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "剧情/音乐/传记",
        "tags": [
            "爵士乐",
            "灵魂救赎",
            "种族问题",
            "即兴演奏",
            "底层挣扎"
        ],
        "oneLine": "一个酗酒的天才小号手在纽约地铁站里,用一支破喇叭吹响了改变城市命运的旋律。",
        "url": "./movies/movie-1866.html",
        "image": "./66.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "含苞待放",
        "year": "2025",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "青春家庭",
        "tags": [
            "成长疼痛",
            "母女关系",
            "90年代怀旧",
            "校园欺凌"
        ],
        "oneLine": "1997年夏天,小镇少女身体开始第一次变化,而母亲的精神世界却开始倒流。",
        "url": "./movies/movie-1867.html",
        "image": "./67.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "寂静的房子",
        "year": "2026",
        "region": "土耳其",
        "type": "电影",
        "genre": "恐怖,心理,超自然",
        "tags": [
            "一镜到底",
            "声音恐惧",
            "老宅诅咒"
        ],
        "oneLine": "一名声音治疗师搬进百年老宅,发现房子里任何超过40分贝的声音,都会唤醒墙里的东西。",
        "url": "./movies/movie-1868.html",
        "image": "./68.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "大虫灾",
        "year": "2026",
        "region": "澳大利亚/美国",
        "type": "电影",
        "genre": "恐怖、科幻、灾难",
        "tags": [
            "巨型蠕虫",
            "沙漠",
            "实验室泄露",
            "生存"
        ],
        "oneLine": "一个基因实验失误导致澳洲地下沙虫疯狂繁殖,整个悉尼地铁系统成了它们的地下猎场。",
        "url": "./movies/movie-1869.html",
        "image": "./69.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "可见黑暗",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖/超自然/惊悚",
        "tags": [
            "通灵",
            "视觉剥夺",
            "诅咒",
            "心理恐惧"
        ],
        "oneLine": "一位盲人按摩师移植了一双死刑犯的眼睛后,不仅能看见东西,还能看见活人身上的“死期光环”。",
        "url": "./movies/movie-1870.html",
        "image": "./70.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "小迷糊当大兵",
        "year": "1995",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧,动作",
        "tags": [
            "军旅",
            "乌龙",
            "成长",
            "爆笑"
        ],
        "oneLine": "全基地最迷糊的新兵被误认成特种兵,派去执行一项不可能的任务。",
        "url": "./movies/movie-1871.html",
        "image": "./71.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "晚安伦敦",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "剧情",
        "tags": [
            "城市漫游",
            "深夜电台",
            "孤独者群像"
        ],
        "oneLine": "伦敦午夜,一家即将关门的电台用最后七天的电波串联起五段迷失灵魂的救赎。",
        "url": "./movies/movie-1872.html",
        "image": "./72.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "挚爱枭雄",
        "year": "2023",
        "region": "英国",
        "type": "电影",
        "genre": "犯罪,传记,剧情",
        "tags": [
            "毒枭",
            "爱情",
            "堕落"
        ],
        "oneLine": "爱上毒枭的女人以为自己能改变他,直到她发现自己早已成为他最完美的犯罪工具。",
        "url": "./movies/movie-1873.html",
        "image": "./73.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "神秘乐园",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖、奇幻",
        "tags": [
            "废弃游乐园",
            "邪教",
            "童年阴影",
            "密室"
        ],
        "oneLine": "六名网红潜入废弃的“神秘乐园”直播探险,却发现旋转木马上的木偶都是失踪多年的孩子。",
        "url": "./movies/movie-1874.html",
        "image": "./74.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "权欲第三季",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "剧情,犯罪",
        "tags": [
            "商战",
            "黑帮",
            "续订"
        ],
        "oneLine": "当旧王倒下,纽约地下世界的权力真空期,谁能用最小的代价吃掉最大的地盘?",
        "url": "./movies/movie-1875.html",
        "image": "./75.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "新年真好",
        "year": "2020",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/公益/儿童",
        "tags": [
            "留守儿童",
            "治愈系",
            "春节",
            "师生情"
        ],
        "oneLine": "年轻女老师在大山深处办学,为了让孩子们过年吃顿饺子,她爬了三个小时的雪山背面粉。",
        "url": "./movies/movie-1876.html",
        "image": "./76.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "盗毒",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "犯罪",
        "tags": [
            "动作",
            "缉毒",
            "黑吃黑",
            "反转"
        ],
        "oneLine": "为了还债的小偷潜入毒枭别墅,却不小心顺走了藏有警方卧底名单的U盘,正邪两方同时对他展开了疯狂追杀。",
        "url": "./movies/movie-1877.html",
        "image": "./77.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "少林与武当",
        "year": "1980",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作、武侠、功夫",
        "tags": [
            "邵氏",
            "刘家良",
            "少林武当之争",
            "硬桥硬马",
            "门派仇杀"
        ],
        "oneLine": "清朝乾隆年间,朝廷分化少林与武当,两位从小一起长大的师兄弟被迫成为生死对手。",
        "url": "./movies/movie-1878.html",
        "image": "./78.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "请神灯1",
        "year": "2023",
        "region": "中国台湾",
        "type": "电影",
        "genre": "喜剧,奇幻",
        "tags": [
            "神明",
            "许愿",
            "黑色幽默",
            "庙宇",
            "反转"
        ],
        "oneLine": "失业青年偷走庙里的神灯,向灯神许愿暴富,却每次都应验在仇人身上。",
        "url": "./movies/movie-1879.html",
        "image": "./79.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "兵临城下",
        "year": "2025",
        "region": "俄罗斯",
        "type": "剧集",
        "genre": "战争,剧情",
        "tags": [
            "斯大林格勒",
            "巷战",
            "狙击手",
            "人性"
        ],
        "oneLine": "斯大林格勒的废墟里,苏德两名顶尖狙击手对决,但他们都想向己方投降。",
        "url": "./movies/movie-1880.html",
        "image": "./80.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "完美的谋杀",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "悬疑惊悚",
        "tags": [
            "烧脑",
            "多层反转",
            "暴风雪山庄",
            "心理战"
        ],
        "oneLine": "妻子设下完美陷阱谋杀家暴丈夫,却发现丈夫早已在三天前给她买了天价寿险。",
        "url": "./movies/movie-1881.html",
        "image": "./81.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "肇事逃逸",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑/犯罪/剧情",
        "tags": [
            "车祸",
            "顶罪",
            "连环案",
            "父权"
        ],
        "oneLine": "富二代撞死人后让父亲顶罪,但负责此案的交警恰好是死者从未相认的亲生父亲。",
        "url": "./movies/movie-1882.html",
        "image": "./82.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "捆着我!绑着我!",
        "year": "1990",
        "region": "西班牙",
        "type": "电影",
        "genre": "剧情,爱情",
        "tags": [
            "斯德哥尔摩综合征",
            "惊悚",
            "情欲",
            "邪典",
            "阿尔莫多瓦"
        ],
        "oneLine": "一名刚从精神病院出院的年轻男子绑架了他深爱的色情片女星,只为让她像自己爱她一样爱上自己。",
        "url": "./movies/movie-1883.html",
        "image": "./83.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "天相",
        "year": "2023",
        "region": "中国香港",
        "type": "电影",
        "genre": "犯罪剧情",
        "tags": [
            "风水犯罪",
            "金融骗局",
            "师徒反目"
        ],
        "oneLine": "顶级风水师利用天象布局制造股市崩盘,却发现自己算尽天机,唯独算漏了徒弟是个傻子。",
        "url": "./movies/movie-1884.html",
        "image": "./84.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "绝地杀机",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动作惊悚",
        "tags": [
            "特种兵",
            "复仇",
            "硬核枪战",
            "孤胆英雄"
        ],
        "oneLine": "被诬陷叛国的三角洲部队狙击手,必须在24小时内穿越敌占区,杀掉那个唯一能证明他清白的人。",
        "url": "./movies/movie-1885.html",
        "image": "./85.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "山路惊魂",
        "year": "2022",
        "region": "泰国",
        "type": "电影",
        "genre": "恐怖/惊悚",
        "tags": [
            "盘山路",
            "鬼打墙",
            "夜班司机",
            "乘客",
            "轮回"
        ],
        "oneLine": "一个夜班出租车司机在盘山路上接了一位女乘客,之后他发现这条路永远开不到尽头。",
        "url": "./movies/movie-1886.html",
        "image": "./86.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "初入职场·机长季",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情/职业",
        "tags": [
            "航空",
            "成长",
            "职场竞争"
        ],
        "oneLine": "五位年轻飞行员争夺唯一机长转正名额,却在首飞日发现考官竟是曾因事故禁飞的前传奇机长。",
        "url": "./movies/movie-1887.html",
        "image": "./87.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "虽然没有承诺",
        "year": "2006",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情/家庭",
        "tags": [
            "现实题材",
            "婚姻",
            "责任",
            "都市",
            "反思"
        ],
        "oneLine": "一对中年夫妻在繁琐的日常和背叛的阴影下,虽然没有一纸婚约,却守着比承诺更重的责任。",
        "url": "./movies/movie-1888.html",
        "image": "./88.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "爱慕痴狂",
        "year": "2023",
        "region": "印度",
        "type": "电影",
        "genre": "惊悚,犯罪",
        "tags": [
            "私生饭",
            "跟踪",
            "宝莱坞",
            "心理战",
            "反杀"
        ],
        "oneLine": "宝莱坞巨星被一名精通网络和化妆的头号私生饭渗透生活,从骚扰演变为绑架,一场反追踪的智力战开启。",
        "url": "./movies/movie-1889.html",
        "image": "./89.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "随风而逝",
        "year": "2025",
        "region": "法国/意大利",
        "type": "电影",
        "genre": "剧情/爱情/历史",
        "tags": [
            "二战",
            "战地记者",
            "生死恋"
        ],
        "oneLine": "1940年的巴黎,德军进城前夜,一名美国战地记者与法国抵抗组织女战士签下了一份为期24小时的婚姻合同。",
        "url": "./movies/movie-1890.html",
        "image": "./90.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "难以忘怀的莎朗·蒂",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "剧情、传记、悬疑",
        "tags": [
            "曼森家族",
            "平行时空",
            "迷幻叙事",
            "好莱坞往事"
        ],
        "oneLine": "在那个改变命运的夜晚,莎朗·蒂接到了一个来自未来的电话,对方只说了一句:别开门。",
        "url": "./movies/movie-1891.html",
        "image": "./91.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "初恋怪兽",
        "year": "2015",
        "region": "日本",
        "type": "动画剧集",
        "genre": "喜剧/爱情/校园",
        "tags": [
            "少女漫改",
            "反差萌",
            "身高差",
            "奇葩男主",
            "沙雕"
        ],
        "oneLine": "身高173cm、长相帅气的高中男生,内心却是一个会因为“她没回我短信”而哭到脱水的小学生级恋爱白痴。",
        "url": "./movies/movie-1892.html",
        "image": "./92.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "前往并离开",
        "year": "2019",
        "region": "德国",
        "type": "电影",
        "genre": "剧情/公路/哲学",
        "tags": [
            "存在主义",
            "临终关怀",
            "父子和解",
            "公路片"
        ],
        "oneLine": "一位癌症晚期父亲雇佣儿子开车送自己前往“死亡诊所”,但一路上谁也没有说破。",
        "url": "./movies/movie-1893.html",
        "image": "./93.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "雷射特攻",
        "year": "2024",
        "region": "日本",
        "type": "动画剧集",
        "genre": "科幻/动作",
        "tags": [
            "机甲",
            "高中生",
            "地球防卫",
            "合体",
            "经费燃烧"
        ],
        "oneLine": "五名被选中的东京高中生发现,他们每天玩的雷射枪对战游戏,其实是在真实操控地球的防御卫星。",
        "url": "./movies/movie-1894.html",
        "image": "./94.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "美丽的青春",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,青春",
        "tags": [
            "高考",
            "支教",
            "乡村",
            "理想",
            "现实主义"
        ],
        "oneLine": "2005年,一个城市来的支教女老师,试图带领一群大山里的孩子,拍摄一部属于他们自己的青春电影。",
        "url": "./movies/movie-1895.html",
        "image": "./95.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "巨人捕手杰克",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "奇幻,冒险,动作",
        "tags": [
            "暗黑童话",
            "魔豆",
            "蒸汽朋克",
            "弑神"
        ],
        "oneLine": "当魔豆藤蔓摧毁了云端神殿,农民杰克发现童话里的巨人其实是失落的守护神。",
        "url": "./movies/movie-1896.html",
        "image": "./96.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "柏帝与伊丽莎白",
        "year": "2008",
        "region": "英国",
        "type": "电影",
        "genre": "剧情/传记/爱情",
        "tags": [
            "皇室秘恋",
            "历史改编",
            "阶级之痛"
        ],
        "oneLine": "真实历史中被抹去的存在:维多利亚女王的舅舅柏帝,与平民女子伊丽莎白跨越半个世纪的禁忌爱情。",
        "url": "./movies/movie-1897.html",
        "image": "./97.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "七号禁毒组",
        "year": "2026",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "犯罪,动作,悬疑",
        "tags": [
            "卧底",
            "缉毒",
            "兄弟情",
            "反转"
        ],
        "oneLine": "一名被开除的警察以卧底身份潜入“七号禁毒组”,却发现组内全员都在暗中贩毒。",
        "url": "./movies/movie-1898.html",
        "image": "./98.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "坡道上的红屋顶",
        "year": "2024",
        "region": "日本",
        "type": "剧集",
        "genre": "悬疑,家庭",
        "tags": [
            "社会派",
            "家族秘密",
            "坡道"
        ],
        "oneLine": "一座红色屋顶的老宅里,三个家庭的秘密在陡峭的坡道上滚落,最终撞向真相。",
        "url": "./movies/movie-1899.html",
        "image": "./99.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "红色护卫",
        "year": "2016",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "战争/剧情",
        "tags": [
            "长征",
            "女性",
            "成长",
            "信仰"
        ],
        "oneLine": "一群性格各异的年轻女兵组成红色护卫队,在长征路上护送一份神秘密码,她们的敌人不只是追兵,还有内心的恐惧。",
        "url": "./movies/movie-1900.html",
        "image": "./100.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "鹿湖艳尸",
        "year": "1978",
        "region": "中国香港",
        "type": "电影",
        "genre": "恐怖,悬疑",
        "tags": [
            "邵氏",
            "风月",
            "谋杀"
        ],
        "oneLine": "清晨的鹿湖浮起一具无脸女尸,富商、画家、警察都在寻找一个叫“红牡丹”的女人,而她已不在人世。",
        "url": "./movies/movie-1901.html",
        "image": "./101.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "密西西比游戏",
        "year": "1974",
        "region": "美国",
        "type": "电影",
        "genre": "剧情/犯罪",
        "tags": [
            "赌徒",
            "公路",
            "自我毁灭",
            "卡牌"
        ],
        "oneLine": "一个赌运奇佳的黑人小子,遇到了一个逢赌必输的白人老千,两人在密西西比的赌桌上赌上了人生。",
        "url": "./movies/movie-1902.html",
        "image": "./102.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "祖国的花朵",
        "year": "1955",
        "region": "中国大陆",
        "type": "电影",
        "genre": "儿童,家庭",
        "tags": [
            "黑白片",
            "少先队",
            "集体主义",
            "经典",
            "新中國兒童"
        ],
        "oneLine": "1950年代北京小学里,调皮捣蛋的学生在少先队辅导员和同学的帮助下,最终加入了少先队。",
        "url": "./movies/movie-1903.html",
        "image": "./103.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "恐怖之森2",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "恐怖",
        "tags": [
            "伪纪录片",
            "都市传说",
            "森林",
            "民俗恐怖"
        ],
        "oneLine": "一支专门探秘都市传说的直播团队进入“自杀森林”深处,触怒了森林里的古老神明“取脸鬼”。",
        "url": "./movies/movie-1904.html",
        "image": "./104.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "花村",
        "year": "1995",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/历史/乡村",
        "tags": [
            "计划生育",
            "乡土中国",
            "女性命运",
            "集体主义"
        ],
        "oneLine": "北方花村里,女人们世代以种花为生,直到一纸“无花令”要求铲除所有花田。",
        "url": "./movies/movie-1905.html",
        "image": "./105.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "初入职场的我们·法医季",
        "year": "2024",
        "region": "中国大陆",
        "type": "综艺",
        "genre": "真人秀,纪实",
        "tags": [
            "职场",
            "法医",
            "实习",
            "悬疑科普"
        ],
        "oneLine": "八名法医专业实习生进入顶尖鉴定中心,面对真实遗体和离奇案件,胆量与正义感双重考验。",
        "url": "./movies/movie-1906.html",
        "image": "./106.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "战争未了",
        "year": "2026",
        "region": "西班牙",
        "type": "电影",
        "genre": "历史/战争/剧情",
        "tags": [
            "内战",
            "政治惊悚",
            "传记",
            "文学"
        ],
        "oneLine": "西班牙内战前夕,著名作家被卷入一场谋杀案,而他发现真正的战场在人们的心里。",
        "url": "./movies/movie-1907.html",
        "image": "./107.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "碧玉离魂",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "惊悚/悬疑/民俗",
        "tags": [
            "冥婚",
            "附身",
            "大家族",
            "诅咒"
        ],
        "oneLine": "女摄影师接手祖母老宅,发现每张冲洗出的照片里,都多出一个穿碧玉色旗袍的女人。",
        "url": "./movies/movie-1908.html",
        "image": "./108.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "犬之力",
        "year": "2021",
        "region": "美国/英国",
        "type": "电影",
        "genre": "剧情,西部,心理",
        "tags": [
            "奥斯卡",
            "暗流涌动",
            "恐同",
            "压抑",
            "反西部片"
        ],
        "oneLine": "蒙大拿州一位冷酷的牧场主折磨着懦弱的弟媳母子,却不知自己正被看似柔弱的男孩编织进一张无形的死亡之网。",
        "url": "./movies/movie-1909.html",
        "image": "./109.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "苏比拉",
        "year": "2024",
        "region": "印度",
        "type": "电影",
        "genre": "动作/历史",
        "tags": [
            "王室",
            "复仇",
            "冷兵器",
            "泰米尔"
        ],
        "oneLine": "18世纪印度公主用香料贸易组建女兵军团,向屠杀她族人的东印度公司复仇。",
        "url": "./movies/movie-1910.html",
        "image": "./110.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "猎捕游戏",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "动作惊悚",
        "tags": [
            "真人猎杀",
            "荒岛",
            "复仇",
            "生存",
            "反杀"
        ],
        "oneLine": "十名退役特工被投放到无人岛,成为富人们的猎物,但他们不知道猎物才是最危险的。",
        "url": "./movies/movie-1911.html",
        "image": "./111.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "白色空间",
        "year": "2026",
        "region": "美国",
        "type": "剧集",
        "genre": "科幻/悬疑",
        "tags": [
            "记忆删除",
            "实验室诡事",
            "身份谜团",
            "哲学拷问"
        ],
        "oneLine": "五个失去记忆的人被关在一个纯白色的空间里,墙上的计时器显示:还剩72小时。",
        "url": "./movies/movie-1912.html",
        "image": "./112.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "萌探2024",
        "year": "2024",
        "region": "中国大陆",
        "type": "综艺",
        "genre": "真人秀/悬疑",
        "tags": [
            "探案",
            "喜剧",
            "明星",
            "角色扮演",
            "IP改编"
        ],
        "oneLine": "新老“萌探”集结,每集沉浸式破解一个经典影视IP背后的“片场谜案”。",
        "url": "./movies/movie-1913.html",
        "image": "./113.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "美国擦鞋童",
        "year": "2001",
        "region": "美国",
        "type": "电影 剧情",
        "genre": "犯罪,社会",
        "tags": [
            "街头生存",
            "种族问题",
            "底层挣扎"
        ],
        "oneLine": "纽约哈林区,两个不同肤色的擦鞋童因一颗钻石卷入黑帮漩涡,被迫在24小时内亡命天涯。",
        "url": "./movies/movie-1914.html",
        "image": "./114.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "从前的光景",
        "year": "2015",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情,家庭",
        "tags": [
            "乡土",
            "怀旧",
            "亲情",
            "文艺",
            "时光"
        ],
        "oneLine": "一个阿兹海默症老人每天都会“回到”1960年代的台湾乡村,重遇已故的妻子。",
        "url": "./movies/movie-1915.html",
        "image": "./115.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "小触手",
        "year": "2025",
        "region": "日本",
        "type": "剧集",
        "genre": "奇幻,剧情,青春",
        "tags": [
            "克苏鲁",
            "校园",
            "孤独"
        ],
        "oneLine": "社恐少女的后脑勺长出智能触手,帮她交朋友、打坏人,却引来了神秘猎杀者。",
        "url": "./movies/movie-1916.html",
        "image": "./116.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "女皇之刃~美丽女斗士们",
        "year": "2009",
        "region": "日本",
        "type": "动画剧集",
        "genre": "动作,奇幻,热血",
        "tags": [
            "美少女格斗",
            "冒险",
            "剑与魔法"
        ],
        "oneLine": "四年一度的女王之刃大会开启,来自各地的美丽女斗士们为了各自的信念与荣耀,展开生死肉搏。",
        "url": "./movies/movie-1917.html",
        "image": "./117.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "奇迹制造者",
        "year": "2022",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "奇幻/剧情",
        "tags": [
            "因果循环",
            "许愿禁忌",
            "当代寓言",
            "善恶有报"
        ],
        "oneLine": "落魄街头艺人捡到一颗能实现任何愿望的弹珠,但每次许愿,都会有另一个陌生人替他承受代价。",
        "url": "./movies/movie-1918.html",
        "image": "./118.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "意外的拜访",
        "year": "2023",
        "region": "西班牙",
        "type": "电影",
        "genre": "惊悚/悬疑",
        "tags": [
            "密室",
            "访客",
            "层层反转"
        ],
        "oneLine": "雨夜,一对陌生夫妇敲开了独居女人的门,声称她是他们失散多年的女儿。",
        "url": "./movies/movie-1919.html",
        "image": "./119.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "三傻西行记",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧,冒险",
        "tags": [
            "公路喜剧",
            "兄弟情",
            "反差萌",
            "西部风光"
        ],
        "oneLine": "三个人生失意的都市废柴,误打误撞加入了一支前往新疆寻找“沙漠宝藏”的驴友团。",
        "url": "./movies/movie-1920.html",
        "image": "./120.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "铁面虎将",
        "year": "2025",
        "region": "中国大陆",
        "type": "网络剧",
        "genre": "古装,动作,悬疑",
        "tags": [
            "替身",
            "朝堂权谋",
            "武打"
        ],
        "oneLine": "边关虎将战死后,朝廷找了个铁匠戴铁面具冒充他,却发现他可能是被自己人害死的。",
        "url": "./movies/movie-1921.html",
        "image": "./121.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "曼哈顿(1979年电影)",
        "year": "1979",
        "region": "美国",
        "type": "电影",
        "genre": "剧情/喜剧/爱情",
        "tags": [
            "伍迪·艾伦",
            "黑白摄影",
            "知识分子恋爱",
            "纽约",
            "中年危机"
        ],
        "oneLine": "42岁的电视编剧爱上了17岁的少女,而他的好朋友正在勾引他的前妻。",
        "url": "./movies/movie-1922.html",
        "image": "./122.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "受辱记",
        "year": "2026",
        "region": "印度",
        "type": "电影",
        "genre": "剧情/社会",
        "tags": [
            "种姓制度",
            "女性觉醒",
            "低种姓",
            "复仇",
            "宗教批判"
        ],
        "oneLine": "一个“贱民”女孩在村头水井打水时被高种姓男人当众羞辱,她没有哭泣,而是砸碎了全村唯一的水泵。",
        "url": "./movies/movie-1923.html",
        "image": "./123.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "生生舞不息",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "纪录,剧情",
        "tags": [
            "舞蹈",
            "阿尔茨海默",
            "母女",
            "传承",
            "非遗"
        ],
        "oneLine": "患上阿尔茨海默症的花灯舞非遗传承人,只有在跳舞时才认得女儿,于是女儿跳遍了所有她年轻时走过的村寨。",
        "url": "./movies/movie-1924.html",
        "image": "./124.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "开学吧,博仁少年",
        "year": "2021",
        "region": "泰国",
        "type": "电视剧",
        "genre": "校园,青春,喜剧",
        "tags": [
            "高中生活",
            "社团大战",
            "热血成长"
        ],
        "oneLine": "博仁中学的吊车尾班级,为了不被解散,必须在校际大赛中击败所有对手。",
        "url": "./movies/movie-1925.html",
        "image": "./125.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "梦断情天",
        "year": "2021",
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "爱情,家庭,年代",
        "tags": [
            "眷村",
            "民歌时代",
            "两地书",
            "遗憾",
            "青春"
        ],
        "oneLine": "1987年两岸开放探亲前夜,眷村少年与北京笔友的信件突然中断。",
        "url": "./movies/movie-1926.html",
        "image": "./126.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "威尼斯疑魂",
        "year": "2023",
        "region": "意大利/英国",
        "type": "电影",
        "genre": "悬疑,惊悚",
        "tags": [
            "水城",
            "连环杀人",
            "通灵",
            "双胞胎",
            "面具"
        ],
        "oneLine": "一名失去妻子的通灵侦探,在威尼斯鬼魅迷宫中追捕一名利用古老面具杀人的连环凶手。",
        "url": "./movies/movie-1927.html",
        "image": "./127.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "战地钟声",
        "year": "2025",
        "region": "美国/西班牙",
        "type": "电影",
        "genre": "战争/爱情/历史",
        "tags": [
            "西班牙内战",
            "海明威改编",
            "爆破手"
        ],
        "oneLine": "西班牙内战期间,美国爆破专家被派去炸毁一座桥,却在峡谷里的游击队营地爱上了女战士玛丽亚。",
        "url": "./movies/movie-1928.html",
        "image": "./128.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "直至运气将我们分开2",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "动作/犯罪",
        "tags": [
            "硬汉",
            "续集",
            "赌城",
            "复仇",
            "火爆枪战"
        ],
        "oneLine": "上一部金盆洗手的江洋大盗这次在澳门输得精光,为了活命,他必须再次组建团队偷回输掉的一切。",
        "url": "./movies/movie-1929.html",
        "image": "./129.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "密告之歌2",
        "year": "2024",
        "region": "日本",
        "type": "剧集",
        "genre": "悬疑,犯罪,职场",
        "tags": [
            "警察内部",
            "告发",
            "黑警",
            "正邪难辨",
            "续集"
        ],
        "oneLine": "刚处理完黑警,主角被调至新部门,发现这里的每一个人都在互相密告。",
        "url": "./movies/movie-1930.html",
        "image": "./130.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "三天一生",
        "year": "2022",
        "region": "法国",
        "type": "电影",
        "genre": "惊悚剧情",
        "tags": [
            "悬疑",
            "犯罪",
            "心理",
            "雨天",
            "小镇秘密"
        ],
        "oneLine": "十二岁男孩犯下不可挽回的罪行,他必须在暴风雨来临前的三天里掩盖一生。",
        "url": "./movies/movie-1931.html",
        "image": "./131.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "束草的冬天",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "爱情,文艺,剧情",
        "tags": [
            "海边",
            "异乡人",
            "治愈",
            "摄影"
        ],
        "oneLine": "法国摄影师逃到韩国边境小城束草过冬,与当地经营破旅馆的少女,在雪与海之间交换彼此的孤独。",
        "url": "./movies/movie-1932.html",
        "image": "./132.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "二十行不行",
        "year": "2017",
        "region": "中国台湾",
        "type": "电影",
        "genre": "喜剧/剧情",
        "tags": [
            "青春",
            "女性成长",
            "都市",
            "友情"
        ],
        "oneLine": "二十岁倒数前夕,四名少女立下“疯狂清单”,要在天亮前证明自己“行”。",
        "url": "./movies/movie-1933.html",
        "image": "./133.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "记忆裂痕",
        "year": "2003",
        "region": "美国",
        "type": "电影",
        "genre": "科幻/动作/悬疑",
        "tags": [
            "吴宇森",
            "失忆",
            "预知未来",
            "工程师复仇"
        ],
        "oneLine": "工程师删除了自己三年的记忆,醒来后发现一群黑帮也在找那段记忆。",
        "url": "./movies/movie-1934.html",
        "image": "./134.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "山村姐妹",
        "year": "2026",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "剧情,农村,家庭",
        "tags": [
            "姐妹",
            "扶贫",
            "乡土",
            "年代",
            "情感"
        ],
        "oneLine": "一对被父母遗弃的山村姐妹,在三十年间通过各自不同的道路,最终让家乡走出贫困。",
        "url": "./movies/movie-1935.html",
        "image": "./135.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "乾隆与香妃",
        "year": "2018",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "古装、爱情、历史",
        "tags": [
            "宫廷",
            "权谋",
            "虐恋",
            "民族团结"
        ],
        "oneLine": "乾隆为稳定西域假意纳香妃为妃,却在权力博弈中与她生出无法言说的真情。",
        "url": "./movies/movie-1936.html",
        "image": "./136.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "凶宅怪谈2",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "恐怖/纪实风格",
        "tags": [
            "灵异",
            "凶宅",
            "伪纪录片",
            "都市传说"
        ],
        "oneLine": "住进凶宅的租客们发现,房子本身不恐怖——恐怖的是前一个住客留下的“习惯”。",
        "url": "./movies/movie-1937.html",
        "image": "./137.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "王家欣",
        "year": "2023",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情/爱情",
        "tags": [
            "寻人",
            "旧时光",
            "温情"
        ],
        "oneLine": "为了寻找1997年失联的笔友“王家欣”,一名男子翻遍了全港电话簿。",
        "url": "./movies/movie-1938.html",
        "image": "./138.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "红色药丸",
        "year": "2019",
        "region": "美国",
        "type": "电影",
        "genre": "科幻/惊悚",
        "tags": [
            "意识上传",
            "真相",
            "反抗",
            "赛博朋克"
        ],
        "oneLine": "她服下红色药丸后醒来,发现自己真正的身体正被泡在营养液里,全球有70亿个同样的罐子。",
        "url": "./movies/movie-1939.html",
        "image": "./139.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "皮茜",
        "year": "2016",
        "region": "爱尔兰",
        "type": "电影",
        "genre": "剧情/喜剧",
        "tags": [
            "女性",
            "货车司机",
            "公路",
            "丧系幽默"
        ],
        "oneLine": "四十岁的胖女人开着大货车,带着从戒毒所出来的闺蜜,进行了一场前往葬礼的公路冒险。",
        "url": "./movies/movie-1940.html",
        "image": "./140.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "尸中罪",
        "year": "2019",
        "region": "美国",
        "type": "电影",
        "genre": "悬疑/惊悚/犯罪",
        "tags": [
            "倒叙推理",
            "尸体叙述者",
            "宗教狂热",
            "小镇秘密"
        ],
        "oneLine": "一具被藏匿地下的少女尸骨,用她残留的感知,倒叙出整个小镇不可告人的罪孽。",
        "url": "./movies/movie-1941.html",
        "image": "./141.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "命运速递",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "科幻、惊悚、悬疑",
        "tags": [
            "时间循环",
            "科幻悬疑",
            "快递员",
            "因果悖论"
        ],
        "oneLine": "一名快递员发现,他每次准时送达的包裹,都会让收件人在一小时内离奇死亡。",
        "url": "./movies/movie-1942.html",
        "image": "./142.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "颠倒曼波",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧,爱情,奇幻",
        "tags": [
            "高概念喜剧",
            "身体互换",
            "拉丁风情",
            "热舞元素"
        ],
        "oneLine": "一个刻板的物理学教授与一个热情奔放的曼波舞教练意外互换身体,他们必须学会在对方的舞步里找到平衡。",
        "url": "./movies/movie-1943.html",
        "image": "./143.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "百合的雨声",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "爱情、文艺",
        "tags": [
            "百合",
            "失聪",
            "雨天",
            "书信",
            "手语"
        ],
        "oneLine": "失聪的园艺师与失语的都市白领,在每个雨天用一本笔记和雨声交换暗涌的爱意。",
        "url": "./movies/movie-1944.html",
        "image": "./144.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "公主日记之皇家婚约",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "喜剧/爱情",
        "tags": [
            "王室",
            "婚前七日",
            "替身",
            "假戏真做",
            "闺蜜撕逼"
        ],
        "oneLine": "准王妃婚前七日,平民闺蜜替她挡掉所有麻烦,却差点成了新娘。",
        "url": "./movies/movie-1945.html",
        "image": "./145.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "一场大火之后",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,悬疑",
        "tags": [
            "火灾",
            "小镇",
            "谎言",
            "群像"
        ],
        "oneLine": "一场烧毁半条街的大火后,镇上每个人都说自己是第一个发现火情的人,只有一个孩子说真话。",
        "url": "./movies/movie-1946.html",
        "image": "./146.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "丹道至尊",
        "year": "2024",
        "region": "中国内地",
        "type": "剧集",
        "genre": "奇幻,古装",
        "tags": [
            "炼丹",
            "逆袭",
            "修真"
        ],
        "oneLine": "炼丹废柴意外炼出“失败丹”,吃下后却成了能炸碎仙宫的移动火药库。",
        "url": "./movies/movie-1947.html",
        "image": "./147.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "什刹海",
        "year": "2024",
        "region": "中国",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "北京",
            "胡同",
            "非遗",
            "冬日"
        ],
        "oneLine": "冰封的什刹海下,一位老鼓手发现了改变胡同命运的百年冰窖。",
        "url": "./movies/movie-1948.html",
        "image": "./148.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "中国唱将",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "音乐/剧情",
        "tags": [
            "选秀",
            "民族音乐",
            "梦想",
            "传承"
        ],
        "oneLine": "陕北农村的放羊娃凭借原生态嗓音闯入国际声乐大赛,却遭遇西洋唱法的降维打击。",
        "url": "./movies/movie-1949.html",
        "image": "./149.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "大追踪",
        "year": "2027",
        "region": "美国/墨西哥",
        "type": "电影",
        "genre": "惊悚,西部",
        "tags": [
            "边境",
            "复仇",
            "荒野求生"
        ],
        "oneLine": "一名美国边境巡逻员在追捕墨西哥毒贩时误入荒野,反而成了毒枭猎杀游戏中的猎物。",
        "url": "./movies/movie-1950.html",
        "image": "./150.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "新纽扣战争",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "喜剧/儿童/冒险",
        "tags": [
            "童年游戏",
            "乡村帮派",
            "反战隐喻",
            "经典改编"
        ],
        "oneLine": "两个法国村庄的孩子为了争夺一块秘密基地,展开了一场“缴获对方纽扣就算赢”的疯狂战争。",
        "url": "./movies/movie-1951.html",
        "image": "./1.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "火线掏宝",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "动作/战争/惊悚",
        "tags": [
            "特种兵",
            "黑市交易",
            "潜伏",
            "以一敌百"
        ],
        "oneLine": "一支退役特种兵小队潜入战区分娩,却发现要“掏”的宝贝是一枚随时可能爆炸的生化脏弹。",
        "url": "./movies/movie-1952.html",
        "image": "./2.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "长大成人2",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧,青春,家庭",
        "tags": [
            "成长",
            "亲子",
            "笑泪",
            "高考"
        ],
        "oneLine": "当年的小屁孩们终于迎来了高考,父母们却在“第二次长大”中闹出了更多笑话。",
        "url": "./movies/movie-1953.html",
        "image": "./3.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "热血青春",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "青春/运动",
        "tags": [
            "篮球",
            "高中",
            "梦想",
            "贫富差距",
            "燃"
        ],
        "oneLine": "一所民工子弟学校的篮球队,靠着一双捡来的篮球鞋和一本过期的灌篮杂志,打进了全国高中篮球联赛决赛。",
        "url": "./movies/movie-1954.html",
        "image": "./4.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "夏至",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/犯罪/悬疑",
        "tags": [
            "东北",
            "护林员",
            "盗猎",
            "复仇",
            "长镜头"
        ],
        "oneLine": "1997年夏至,东北林场一位护林员的女儿被杀害,他用了二十四年,在每一个夏至日追踪那个沉默的凶手。",
        "url": "./movies/movie-1955.html",
        "image": "./5.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "沸腾的群山",
        "year": "2023",
        "region": "中国",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "留守儿童",
            "乡村教师",
            "煤山爆破",
            "希望与绝望",
            "现实主义"
        ],
        "oneLine": "贵州深山一座即将因为煤矿开采而整村搬迁的寨子里,最后一位老教师想为孩子们上一堂从未开过的音乐课。",
        "url": "./movies/movie-1956.html",
        "image": "./6.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "舞国英雄",
        "year": "2024",
        "region": "印度",
        "type": "电影",
        "genre": "剧情,歌舞,体育",
        "tags": [
            "街舞",
            "逆袭",
            "种姓制度",
            "燃"
        ],
        "oneLine": "低种姓的扫街少年,为了赢得全国街舞大赛的奖金给姐姐做嫁妆,挑战高种姓冠军队。",
        "url": "./movies/movie-1957.html",
        "image": "./7.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "大卫王国:以色列人的传奇",
        "year": "2023",
        "region": "以色列",
        "type": "剧集",
        "genre": "历史,传记,战争",
        "tags": [
            "圣经史诗",
            "权力斗争",
            "古装战争",
            "信仰"
        ],
        "oneLine": "从一个牧羊少年到统一的国王,大卫王的一生充满了谋杀、背叛与不朽的颂歌。",
        "url": "./movies/movie-1958.html",
        "image": "./8.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "龙卷风(上)",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "灾难/冒险",
        "tags": [
            "追风者",
            "极端天气",
            "IMAX",
            "上下部分离"
        ],
        "oneLine": "气象学博士生发明新型追踪装置,却发现自己要追的不是风,而是风中的神秘蓝色闪电。",
        "url": "./movies/movie-1959.html",
        "image": "./9.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "二重奏",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情/悬疑/音乐",
        "tags": [
            "双胞胎",
            "钢琴",
            "身份互换",
            "控制欲"
        ],
        "oneLine": "天才钢琴家妹妹车祸失聪,姐姐假扮她登台演奏,却发现妹妹的曲子藏着一个谋杀密码。",
        "url": "./movies/movie-1960.html",
        "image": "./10.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "秋光乍泄",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情,文艺",
        "tags": [
            "老年恋",
            "养老院",
            "黄昏恋",
            "治愈"
        ],
        "oneLine": "七十三岁的他和六十八岁的她,计划从养老院私奔去看一次海。",
        "url": "./movies/movie-1961.html",
        "image": "./11.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "2024吉林春晚",
        "year": "2024",
        "region": "中国",
        "type": "综艺/晚会",
        "genre": "歌舞/喜剧/民俗",
        "tags": [
            "冰雪主题",
            "东北喜剧",
            "跨界混搭"
        ],
        "oneLine": "冰雪大世界里的春晚,雪地秧歌与电音派对齐飞。",
        "url": "./movies/movie-1962.html",
        "image": "./12.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "欢迎回到三达里",
        "year": "2024",
        "region": "韩国",
        "type": "剧集",
        "genre": "剧情/爱情/治愈",
        "tags": [
            "返乡故事",
            "青梅竹马",
            "温暖疗愈",
            "小镇生活",
            "中年重启"
        ],
        "oneLine": "三十年前离开济州岛渔村去首尔打拼的顶级摄影师,事业崩塌后回到故乡,遇到了做海女的初恋。",
        "url": "./movies/movie-1963.html",
        "image": "./13.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "海的故事2021",
        "year": "2021",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情/悬疑",
        "tags": [
            "济州岛",
            "海女",
            "失踪案"
        ],
        "oneLine": "济州岛海女在海底发现一台摄像机,里面记录了三年前女儿失踪前最后的求救画面。",
        "url": "./movies/movie-1964.html",
        "image": "./14.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "女子联谊会惊魂记",
        "year": "1982",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖,悬疑,青春",
        "tags": [
            "姐妹会",
            "誓言",
            "连环杀人",
            "复古校园",
            "秘密地下室"
        ],
        "oneLine": "大学姐妹会的新成员发现,她们入会的终极仪式不是派对,而是活埋一个秘密。",
        "url": "./movies/movie-1965.html",
        "image": "./15.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "最后一公里",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/运动",
        "tags": [
            "马拉松",
            "残障人士",
            "梦想",
            "真实事件改编"
        ],
        "oneLine": "一位盲人按摩师和一位被开除的退役运动员,决定一起完成一场极地马拉松。",
        "url": "./movies/movie-1966.html",
        "image": "./16.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "当老牛碰上嫩草",
        "year": "1991",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧/爱情",
        "tags": [
            "黄昏恋",
            "城乡差异",
            "刘姥姥进大观园"
        ],
        "oneLine": "一个65岁的退休老矿工阴差阳错被婚介所分配给了26岁的女博士,两人被迫假扮情侣。",
        "url": "./movies/movie-1967.html",
        "image": "./17.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "仙班校园2",
        "year": "2024",
        "region": "中国大陆",
        "type": "网剧",
        "genre": "喜剧/奇幻",
        "tags": [
            "神仙",
            "校园",
            "搞笑",
            "降妖"
        ],
        "oneLine": "天庭学院倒闭,神仙二代们被下放到凡间中学,和学渣们当同桌。",
        "url": "./movies/movie-1968.html",
        "image": "./18.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "大地飞鹰",
        "year": "2026",
        "region": "中国台湾",
        "type": "电影",
        "genre": "武侠/剧情/西部",
        "tags": [
            "沙漠寻仇",
            "浪子",
            "古龙风格",
            "宿命对决"
        ],
        "oneLine": "大漠中流传着吃人血肉的“血鹰”传说,三个背负血海深仇的陌生人,在绿洲客栈共同等一个独臂刀客。",
        "url": "./movies/movie-1969.html",
        "image": "./19.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "盛夏的方程式",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "悬疑/推理/剧情",
        "tags": [
            "数学",
            "海边小镇",
            "物理诡计",
            "汤川学"
        ],
        "oneLine": "物理教授汤川学在海边民宿遇到一桩密室杀人案,死者身上写着一个无解的方程式。",
        "url": "./movies/movie-1970.html",
        "image": "./20.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "心不在焉的服务生",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,悬疑",
        "tags": [
            "心理",
            "都市传说",
            "失忆",
            "反转"
        ],
        "oneLine": "一个总记不住点单的服务生,发现自己可能是连环失踪案的唯一目击者。",
        "url": "./movies/movie-1971.html",
        "image": "./21.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "拉.拉",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "剧情/奇幻/女性",
        "tags": [
            "都市传说",
            "孤独世代",
            "治愈系怪谈"
        ],
        "oneLine": "每个在城市独居感到孤独的女孩,深夜都会接到一个神秘电话,电话那头也叫“拉拉”。",
        "url": "./movies/movie-1972.html",
        "image": "./22.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "龙仇凤血粤语",
        "year": "1992",
        "region": "中国香港",
        "type": "电视剧",
        "genre": "武侠/古装",
        "tags": [
            "复仇",
            "家族",
            "粤语",
            "权谋"
        ],
        "oneLine": "明朝年间,龙凤玉佩引发的两家血案,让一对兄妹失散于江湖正邪两端。",
        "url": "./movies/movie-1973.html",
        "image": "./23.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "催眠大师",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑,惊悚",
        "tags": [
            "催眠",
            "心理博弈",
            "反转",
            "密室"
        ],
        "oneLine": "著名的心理医生在治疗一名奇怪的失眠症患者时,发现自己反而被对方一步步拉入了记忆的陷阱。",
        "url": "./movies/movie-1974.html",
        "image": "./24.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "滑板车男孩",
        "year": "2023",
        "region": "印度",
        "type": "电影",
        "genre": "剧情/儿童/运动",
        "tags": [
            "孟买",
            "贫民窟",
            "环保发明"
        ],
        "oneLine": "贫民窟男孩用废品组装出一辆电动滑板车,却引来当地黑帮觊觎他的“永动机”技术。",
        "url": "./movies/movie-1975.html",
        "image": "./25.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "相逢",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/爱情/文艺",
        "tags": [
            "重逢",
            "知青",
            "老年爱情",
            "催泪",
            "时代"
        ],
        "oneLine": "四十年后,当年被迫分开的知青在养老院重逢,却发现彼此都终身未嫁未娶。",
        "url": "./movies/movie-1976.html",
        "image": "./26.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "无援",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "剧情/惊悚/生存",
        "tags": [
            "孤岛",
            "生存",
            "心理",
            "绝望",
            "极简"
        ],
        "oneLine": "独自被困北大西洋孤岛灯塔的守塔人,发现岸上的救援队永远在“明天”到达。",
        "url": "./movies/movie-1977.html",
        "image": "./27.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "当你约会的时候",
        "year": "2012",
        "region": "美国",
        "type": "电视剧",
        "genre": "喜剧,爱情",
        "tags": [
            "约会指南",
            "尴尬瞬间",
            "都市男女",
            "单元剧"
        ],
        "oneLine": "一对离婚后依然同居的夫妻,开了一个博客专门点评其他人的约会,结果自己却成了全网最火的约会攻略。",
        "url": "./movies/movie-1978.html",
        "image": "./28.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "未知的世界",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "科幻,冒险,惊悚",
        "tags": [
            "深海勘探",
            "洛夫克拉夫特式",
            "心理恐怖",
            "科学伦理"
        ],
        "oneLine": "深海勘探队钻透地壳,发现地幔层里竟存在一个拥有集体意识的光明生态系统。",
        "url": "./movies/movie-1979.html",
        "image": "./29.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "超级巨星",
        "year": "2005",
        "region": "香港",
        "type": "电影",
        "genre": "喜剧,剧情",
        "tags": [
            "娱乐圈",
            "励志",
            "小人物"
        ],
        "oneLine": "一个在茶餐厅打工的“死忠粉丝”阴差阳错成了当红女明星的贴身保姆,却意外暴露了偶像背后巨大的商业黑幕。",
        "url": "./movies/movie-1980.html",
        "image": "./30.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "血湖",
        "year": "1998",
        "region": "日本",
        "type": "电影",
        "genre": "恐怖/悬疑",
        "tags": [
            "日式恐怖",
            "民间传说",
            "水鬼",
            "诅咒循环"
        ],
        "oneLine": "村子里有一个传说:每三十年,湖会变红,那时湖底的手会抓走一个活人。",
        "url": "./movies/movie-1981.html",
        "image": "./31.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "梦往澳洲海",
        "year": "2025",
        "region": "澳大利亚/中国",
        "type": "电影",
        "genre": "冒险/剧情/家庭",
        "tags": [
            "自然风光",
            "亲情和解",
            "公路片",
            "治愈",
            "成长"
        ],
        "oneLine": "一个叛逆的中国少年被送到澳洲农场改造,却在那里发现了一个关于祖父的惊人秘密。",
        "url": "./movies/movie-1982.html",
        "image": "./32.jpg",
        "category": "日本剧集",
        "categoryUrl": "./categories/japanese-dramas.html"
    },
    {
        "title": "飞越篮板",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "运动,励志",
        "tags": [
            "篮球",
            "少年",
            "逆袭",
            "街头"
        ],
        "oneLine": "一个身高不足一米七的高中生,用脑子打进了全美最强街头联赛。",
        "url": "./movies/movie-1983.html",
        "image": "./33.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    },
    {
        "title": "宅男的伟大愿望",
        "year": "2021",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧/奇幻",
        "tags": [
            "二次元",
            "穿越",
            "游戏",
            "搞笑",
            "励志"
        ],
        "oneLine": "一个深居简出的游戏宅男,被一款神秘APP送进了自己最爱的复古RPG游戏里。",
        "url": "./movies/movie-1984.html",
        "image": "./34.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "追凶12夜",
        "year": "2022",
        "region": "法国",
        "type": "电影",
        "genre": "悬疑,犯罪",
        "tags": [
            "真实事件改编",
            "连环杀人",
            "女性被害",
            "警察视角"
        ],
        "oneLine": "一名女大学生被烧死在车里,警方追查12年未果,直到第12个夜晚凶手开口了。",
        "url": "./movies/movie-1985.html",
        "image": "./35.jpg",
        "category": "综艺动漫",
        "categoryUrl": "./categories/variety-anime.html"
    },
    {
        "title": "夜惊",
        "year": "2019",
        "region": "韩国",
        "type": "电影",
        "genre": "恐怖/悬疑",
        "tags": [
            "失眠",
            "幻觉",
            "公寓",
            "诅咒"
        ],
        "oneLine": "一名重度失眠症患者每晚在同一时刻惊醒,发现窗外总有一个和自己长得一模一样的人。",
        "url": "./movies/movie-1986.html",
        "image": "./36.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "追光者",
        "year": "2026",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "灾难/救援",
        "tags": [
            "民间救援队",
            "真实事件改编",
            "热血",
            "群像",
            "职业剧"
        ],
        "oneLine": "一群来自各行各业的普通人组成民间救援队,用血肉之躯在一次次灾难中与死神赛跑。 房地产销售罗源为寻找失踪的儿子加入民间救援队,却在一次地震搜救中,亲手挖出了自己孩子的遗物。",
        "url": "./movies/movie-1987.html",
        "image": "./37.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "加菲猫的幸福生活第二季",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "喜剧/动画/家庭",
        "tags": [
            "猫",
            "美食",
            "日常",
            "毒舌",
            "幽默"
        ],
        "oneLine": "加菲猫学会了网购,却把主人的信用卡刷爆,一场笑料百出的“还债”大战开始了。",
        "url": "./movies/movie-1988.html",
        "image": "./38.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "报告班长!山河无恙",
        "year": "2022",
        "region": "台湾",
        "type": "电影",
        "genre": "喜剧,动作",
        "tags": [
            "军教片",
            "热血",
            "返乡",
            "怀旧"
        ],
        "oneLine": "一群退伍老兵回到即将拆除的军营,发现班上最弱的兵成了敌军雇佣兵首领。",
        "url": "./movies/movie-1989.html",
        "image": "./39.jpg",
        "category": "日韩精选",
        "categoryUrl": "./categories/japan-korea.html"
    },
    {
        "title": "占水师",
        "year": "2026",
        "region": "澳大利亚,英国",
        "type": "电影",
        "genre": "剧情,悬疑,历史",
        "tags": [
            "干旱",
            "寻水",
            "救赎"
        ],
        "oneLine": "百年大旱下,神秘的占水师能寻到地下水,也能寻到被掩盖的谋杀。",
        "url": "./movies/movie-1990.html",
        "image": "./40.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "白夜追凶",
        "year": "2026",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "悬疑/犯罪",
        "tags": [
            "刑侦",
            "双胞胎",
            "复仇",
            "暗黑",
            "高智商"
        ],
        "oneLine": "双胞胎兄弟,一个是警察一个是逃犯,他们共用同一个身份追查灭门案真凶,而真凶就在警局内部。",
        "url": "./movies/movie-1991.html",
        "image": "./41.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "幸福生活在招手",
        "year": "2011",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "家庭/喜剧/生活",
        "tags": [
            "拆迁",
            "邻里",
            "市井温情"
        ],
        "oneLine": "老城区拆迁前三十天,五户邻居为了多分面积上演鸡飞狗跳的终极闹剧。",
        "url": "./movies/movie-1992.html",
        "image": "./42.jpg",
        "category": "高清电影",
        "categoryUrl": "./categories/hd-movies.html"
    },
    {
        "title": "欧卡纸牌之记忆迷踪",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑/心理/剧情",
        "tags": [
            "潜意识",
            "心理治疗",
            "凶案",
            "罗生门"
        ],
        "oneLine": "心理医生用欧卡牌给五名嫌疑人做潜意识测试,却意外拼凑出了死者“还没死”的真相。",
        "url": "./movies/movie-1993.html",
        "image": "./43.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "恋上纯喫茶2",
        "year": "2024",
        "region": "日本",
        "type": "剧集",
        "genre": "美食爱情",
        "tags": [
            "昭和风",
            "咖啡店",
            "治愈"
        ],
        "oneLine": "喫茶店二代目女主遭遇商业咖啡巨头挑战,她要在守住父亲配方同时,偷偷和对手公司的年轻社长谈恋爱。",
        "url": "./movies/movie-1994.html",
        "image": "./44.jpg",
        "category": "热门电视剧",
        "categoryUrl": "./categories/tv-series.html"
    },
    {
        "title": "雨中的女人",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "爱情,剧情,奇幻",
        "tags": [
            "时空交错",
            "雨",
            "遗憾",
            "治愈"
        ],
        "oneLine": "每逢下雨天,失意的上班族就会在咖啡馆遇到那个神秘女人,而她似乎来自他已逝去的过去。",
        "url": "./movies/movie-1995.html",
        "image": "./45.jpg",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/mystery-thriller.html"
    },
    {
        "title": "艾德·伍德",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "传记、剧情、喜剧",
        "tags": [
            "传记片",
            "邪典",
            "电影幕后",
            "追梦",
            "怪异天才"
        ],
        "oneLine": "世上最烂导演的传记片,却拍出了世上最动人的追梦故事。",
        "url": "./movies/movie-1996.html",
        "image": "./46.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "我家来了个小房客",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "家庭喜剧/温情治愈",
        "tags": [
            "萌娃",
            "乌龙认亲",
            "邻里互助",
            "暖心"
        ],
        "oneLine": "暴躁独居老头家里突然冒出一个5岁小女孩,她自称是“未来派来的调解员”。",
        "url": "./movies/movie-1997.html",
        "image": "./47.jpg",
        "category": "韩国电影",
        "categoryUrl": "./categories/korean-movies.html"
    },
    {
        "title": "星光照万家",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情/家庭/公益",
        "tags": [
            "社工",
            "社区",
            "孤寡老人",
            "留守儿童",
            "平凡英雄"
        ],
        "oneLine": "一个刚毕业的社工被分配到老旧社区,用笨拙却真诚的方式,点亮了上百个被遗忘家庭的灯。",
        "url": "./movies/movie-1998.html",
        "image": "./48.jpg",
        "category": "动作奇幻",
        "categoryUrl": "./categories/action-fantasy.html"
    },
    {
        "title": "吃人爸妈",
        "year": "1989",
        "region": "美国/加拿大",
        "type": "电影",
        "genre": "恐怖/黑色喜剧",
        "tags": [
            "食人族",
            "郊区恐怖",
            "家庭秘密",
            "反讽"
        ],
        "oneLine": "一对模范中产夫妇的秘密爱好是吃人,而他们刚从大学回家的女儿,带回了“最新鲜的食材”——她的男友。",
        "url": "./movies/movie-1999.html",
        "image": "./49.jpg",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/romance-comedy.html"
    },
    {
        "title": "生人回避 第三集",
        "year": "1992",
        "region": "香港",
        "type": "剧集",
        "genre": "恐怖,僵尸",
        "tags": [
            "僵尸",
            "风水",
            "茅山术"
        ],
        "oneLine": "茅山最后传人发现僵尸病毒变异,生者与死者界限模糊,小镇陷入恐慌。",
        "url": "./movies/movie-2000.html",
        "image": "./50.jpg",
        "category": "经典佳片",
        "categoryUrl": "./categories/classic-hits.html"
    }
];
