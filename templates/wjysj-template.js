window.GAME_SAVE_TEMPLATES = window.GAME_SAVE_TEMPLATES || {};

const wjysjReferenceData = window.WJYSJ_REFERENCE_DATA || {};
const wjysjItemCodeMap = Object.fromEntries(
  (wjysjReferenceData.items || []).map(item => [
    String(item.id),
    { name: item.name, type: item.effect ? `${item.type} ${item.effect}`.trim() : item.type }
  ])
);

window.GAME_SAVE_TEMPLATES.wjysj = {
  id: "wjysj",
  name: "吾今有世家",
  referenceData: wjysjReferenceData,
  detector: {
    requiredKeys: ["VersionID", "FamilyData", "Prop_have", "Time_now"]
  },
  quickFields: [
    { label: "铜钱数量", hint: "CGNum[0]，与家族基础数值中的铜钱一致", path: ["CGNum", "value", 0], type: "string-number" },
    { label: "元宝数量", hint: "CGNum[1]，与家族基础数值中的元宝一致", path: ["CGNum", "value", 1], type: "string-number" },
    { label: "家族名", hint: "FamilyData[1]", path: ["FamilyData", "value", 1], type: "string" },
    { label: "家族等级", hint: "FamilyData[2]", path: ["FamilyData", "value", 2], type: "string-number" },
    { label: "家族经验", hint: "FamilyData[3]", path: ["FamilyData", "value", 3], type: "string-number" },
    { label: "仓库剩余容量", hint: "FamilyData[5]，资料标注为仓库剩余容量", path: ["FamilyData", "value", 5], type: "string-number" },
    { label: "当前年", hint: "Time_now[0]", path: ["Time_now", "value", 0], type: "number" },
    { label: "当前月", hint: "Time_now[1]", path: ["Time_now", "value", 1], type: "number" },
    { label: "当前日", hint: "Time_now[2]", path: ["Time_now", "value", 2], type: "number" },
    { label: "本月收入[0]", hint: "GetMoney_Month[0]", path: ["GetMoney_Month", "value", 0], type: "number" },
    { label: "本月收入[1]", hint: "GetMoney_Month[1]", path: ["GetMoney_Month", "value", 1], type: "number" },
    { label: "账目[0]", hint: "ZhiZeData_ZhangMu[0]", path: ["ZhiZeData_ZhangMu", "value", 0], type: "number" },
    { label: "将死成员数", hint: "MemberNumWillDead", path: ["MemberNumWillDead", "value"], type: "number" },
    { label: "奴隶数量", hint: "NuLiNum", path: ["NuLiNum", "value"], type: "number" },
    { label: "SceneID", hint: "场景 ID", path: ["SceneID", "value"], type: "string" }
  ],
  compactGroups: [
    { key: "FamilyData", labels: ["祖籍/郡城复合ID", "家族姓氏", "家族等级", "经验值", "家族对朝廷影响", "仓库剩余容量", "槽位6", "槽位7", "皇室出家 0否1是", "槽位9"] },
    { key: "CGNum", labels: ["铜钱数量", "元宝数量", "槽位2", "槽位3"] },
    { key: "ShiJia_king", labels: ["皇族姓氏", "关系", "等级", "槽位3", "槽位4", "好感复合字段"] },
    { key: "Cost_King", labels: ["槽位0", "槽位1", "槽位2", "槽位3", "槽位4", "槽位5", "槽位6", "槽位7", "槽位8"] },
    { key: "IdIndex", labels: ["成员ID序号", "其他ID序号", "槽位2"] },
    { key: "PlayTimeRun", labels: ["槽位0", "槽位1"] }
  ],
  citySlots: [
    { index: 7, label: "府邸名" },
    { index: 8, label: "本府邸人数" },
    { index: 9, label: "剩余可招募人数" },
    { index: 10, label: "已安排仆人数" },
    { index: 11, label: "本府邸成员数量" },
    { index: 14, label: "武庙加成" },
    { index: 27, label: "安全" },
    { index: 28, label: "便捷" },
    { index: 29, label: "税率/标记" }
  ],
  horseLabels: ["花色", "年龄", "力量", "速度", "智商", "主人/人物编号", "马匹信息"],
  memberSections: [
    {
      key: "Member_now",
      title: "本家成员 Member_now",
      nameSlot: 4,
      editableSlots: [3, 5, 6, 11, 16, 19, 20, 21, 24, 27, 29],
      slotLabels: {
        3: "居住/建筑引用",
        19: "藏书/学习引用"
      }
    },
    {
      key: "Member_King",
      title: "皇族成员 Member_King",
      nameSlot: 2,
      editableSlots: [3, 4, 5, 6, 7, 8, 14, 16, 18, 19, 20, 27],
      slotLabels: {}
    }
  ],
  presetPaths: [
    ["CGNum", "value", 0],
    ["CGNum", "value", 1],
    ["FamilyData", "value", 5],
    ["GetMoney_Month", "value", 0],
    ["GetMoney_Month", "value", 1],
    ["ZhiZeData_ZhangMu", "value", 0]
  ],
  itemCodeMap: Object.keys(wjysjItemCodeMap).length ? wjysjItemCodeMap : {
    "0": { name: "香燭", type: "祭品" }, "1": { name: "肥料", type: "肥料" }, "2": { name: "糧食", type: "糧肉" },
    "3": { name: "蔬菜", type: "糧肉" }, "4": { name: "肉食", type: "糧肉" }, "8": { name: "青梅", type: "美食 健+1" },
    "24": { name: "花緞", type: "布匹" }, "25": { name: "雲錦", type: "布匹" }, "26": { name: "蜀錦", type: "布匹" },
    "27": { name: "篩絹", type: "布匹" }, "28": { name: "天香布", type: "布匹" }, "47": { name: "胭脂", type: "香粉" },
    "48": { name: "烏膏", type: "香粉" }, "53": { name: "花釵(女)", type: "珠寶 魅+3" }, "54": { name: "鉺鐺(女)", type: "珠寶 魅+4" },
    "55": { name: "步搖(女)", type: "珠寶 魅+5" }, "56": { name: "金簪(女)", type: "珠寶 魅+6" }, "57": { name: "華勝(女)", type: "珠寶 魅+7" },
    "58": { name: "宮絳(女)", type: "珠寶 魅+8" }, "59": { name: "梳篦(女)", type: "珠寶 魅+9" }, "60": { name: "臂釧(女)", type: "珠寶 魅+10" },
    "61": { name: "瓔珞(女)", type: "珠寶 魅+11" }, "63": { name: "扳指(男)", type: "珠寶 魅+4" }, "64": { name: "玉佩(男)", type: "珠寶 魅+8" },
    "65": { name: "帶鉤(男)", type: "珠寶 魅+7" }, "76": { name: "無名字軸", type: "書法" }, "78": { name: "名家字軸", type: "書法" },
    "79": { name: "名家碑帖", type: "書法" }, "80": { name: "傳世字帖", type: "書法" }, "81": { name: "傳世碑帖", type: "書法" },
    "82": { name: "無名山水圖", type: "丹青" }, "83": { name: "無名江山圖", type: "丹青" }, "84": { name: "名家山水圖", type: "丹青" },
    "85": { name: "名家江山圖", type: "丹青" }, "86": { name: "傳世山水圖", type: "丹青" }, "87": { name: "傳世江山圖", type: "丹青" },
    "88": { name: "玉圭", type: "文玩" }, "89": { name: "玉碗", type: "文玩" }, "90": { name: "玉瓶", type: "文玩" },
    "91": { name: "玉琥", type: "文玩" }, "92": { name: "玉璧", type: "文玩" }, "93": { name: "玉璜", type: "文玩" },
    "94": { name: "玉琮", type: "文玩" }, "95": { name: "玉山", type: "文玩" }, "96": { name: "玉屏", type: "文玩" },
    "107": { name: "三尖兩刃刀", type: "武器 武+7" }, "108": { name: "三尺劍", type: "武器 武+8" }, "109": { name: "軟劍", type: "武器 武+9" },
    "116": { name: "紅釉盞", type: "茶具" }, "117": { name: "青瓷壺", type: "茶具" }, "118": { name: "楠木茶盤", type: "茶具" },
    "119": { name: "檀木茶盤", type: "茶具" }, "120": { name: "玉壺", type: "茶具" }, "124": { name: "金薰球", type: "香具" },
    "125": { name: "檀木香盒", type: "香具" }, "126": { name: "金香盒", type: "香具" }, "127": { name: "檀木香筒", type: "香具" },
    "128": { name: "金香爐", type: "香具" }, "131": { name: "扁瓶", type: "瓷器" }, "132": { name: "瓷枕", type: "瓷器" },
    "133": { name: "琮式瓶", type: "瓷器" }, "134": { name: "梅瓶", type: "瓷器" }, "135": { name: "鳳尾瓶", type: "瓷器" },
    "139": { name: "茱萸酒", type: "美酒" }, "141": { name: "荔枝酒", type: "美酒" }, "142": { name: "桂花酒", type: "美酒" },
    "143": { name: "琥珀酒", type: "美酒" }, "148": { name: "琵琶", type: "樂器" }, "149": { name: "月琴", type: "樂器" },
    "150": { name: "中琴", type: "樂器" }, "151": { name: "伏羲琴", type: "樂器" }, "153": { name: "狼皮", type: "毛皮" },
    "154": { name: "鹿皮", type: "毛皮" }, "155": { name: "狐皮", type: "毛皮" }, "156": { name: "虎皮", type: "毛皮" },
    "186": { name: "大學", type: "書籍 文+4" }, "187": { name: "中庸", type: "書籍 文+4" }, "188": { name: "論語", type: "書籍 文+4" },
    "189": { name: "孟子", type: "書籍 文+4" }, "190": { name: "法言", type: "書籍 文+4" }, "191": { name: "潛夫論", type: "書籍 文+5" },
    "198": { name: "陰符槍譜", type: "書籍 武+3" }, "202": { name: "拳經", type: "書籍 武+4" }, "203": { name: "射經", type: "書籍 武+4" },
    "204": { name: "劍經", type: "書籍 武+5" }, "205": { name: "角力記", type: "書籍 武+5" }, "211": { name: "貿易賦", type: "書籍 商+4" },
    "212": { name: "食貨志", type: "書籍 商+4" }, "213": { name: "輕重篇", type: "書籍 商+5" }, "214": { name: "考工記", type: "書籍 商+5" },
    "215": { name: "商君書", type: "書籍 商+6" }, "216": { name: "陶朱公生意經", type: "書籍 商+6" }, "217": { name: "商經", type: "書籍 商+8" },
    "230": { name: "廣陵散", type: "書籍 藝+4" }, "231": { name: "陽春白雪", type: "書籍 藝+4" }, "235": { name: "琴賦", type: "書籍 藝+5" },
    "236": { name: "溪山琴況", type: "書籍 藝+5" }, "237": { name: "太古遺音", type: "書籍 藝+5" }, "239": { name: "史記", type: "書籍 計+1" },
    "240": { name: "間書", type: "書籍 計+2" }, "241": { name: "捭闔", type: "書籍 計+2" }, "242": { name: "飛箝", type: "書籍 計+3" },
    "244": { name: "揣篇", type: "書籍 計+4" }, "246": { name: "太白陰經", type: "書籍 計+5" }, "248": { name: "韓非子", type: "書籍 計+6" },
    "249": { name: "孫子兵法", type: "書籍 計+6" }, "252": { name: "山海經", type: "書籍 巫+1" }, "254": { name: "巫陽古書", type: "書籍 巫+2" },
    "257": { name: "千金方", type: "書籍 醫+1" }, "258": { name: "溫熱經緯", type: "書籍 醫+1" }, "261": { name: "金匱略要", type: "書籍 醫+1" },
    "262": { name: "神農本草", type: "書籍 醫+1" }, "264": { name: "黃帝內經", type: "書籍 醫+2" }, "266": { name: "五官雜論", type: "書籍 相+1" },
    "267": { name: "聽聲 相行", type: "書籍 相+2" }, "268": { name: "永樂百問", type: "書籍 相+2" }, "277": { name: "長物志", type: "書籍 工+1" },
    "281": { name: "墨經", type: "書籍 工+3" }, "284": { name: "雞蛋", type: "美食 健+1心+1" }
  }
};
