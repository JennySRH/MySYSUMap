// 1.北门牌坊
// 2.数据科学与计算机学院院楼
// 3.北望山
// 4.行政楼
// 5.公教楼
// 6.图书馆
// 7.北基础实验楼
// 8.南基础实验楼
// 9.体育馆
// 10.真草（东田径场）
// 11.假草（西田径场）
// 12.明德园
// 13.格致园
// 14.冕山
// 15.第一第二食堂
// 16.第三第四食堂
// 17.慎思园
// 18.至善园
// 19.月影坡
// 20.活动服务中心保健中心
// 21.落雁台

const cityObj = [{ "id": "1", "provincecode": "1", "city": "北门牌坊", "code": "1", "initial": "B" },
  { "id": "2", "provincecode": "2", "city": "数据科学与计算机学院院楼", "code": "2", "initial": "S" },
  { "id": "3", "provincecode": "3", "city": "北望山", "code": "3", "initial": "B" },
  { "id": "4", "provincecode": "4", "city": "行政楼", "code": "4", "initial": "X" },
  { "id": "5", "provincecode": "5", "city": "公教楼", "code": "5", "initial": "G" },
  { "id": "6", "provincecode": "6", "city": "图书馆", "code": "6", "initial": "T" },
  { "id": "7", "provincecode": "7", "city": "北基础实验楼", "code": "7", "initial": "B" },
  { "id": "8", "provincecode": "8", "city": "南基础实验楼", "code": "8", "initial": "N" },
  { "id": "9", "provincecode": "9", "city": "体育馆", "code": "9", "initial": "T" },
  { "id": "10", "provincecode": "10", "city": "真草（东田径场）", "code": "10", "initial": "Z" },
  { "id": "11", "provincecode": "11", "city": "假草（西田径场）", "code": "11", "initial": "J" },
  { "id": "12", "provincecode": "12", "city": "明德园", "code": "12", "initial": "M" },
  { "id": "13", "provincecode": "13", "city": "格致园", "code": "13", "initial": "G" },
  { "id": "14", "provincecode": "14", "city": "冕山", "code": "14", "initial": "M" },
  { "id": "15", "provincecode": "15", "city": "第一第二食堂", "code": "15", "initial": "D" },
  { "id": "16", "provincecode": "16", "city": "第三第四食堂", "code": "16", "initial": "D" },
  { "id": "17", "provincecode": "17", "city": "慎思园", "code": "17", "initial": "S" }, 
  { "id": "18", "provincecode": "18", "city": "至善园", "code": "18", "initial": "Z" },
  { "id": "19", "provincecode": "19", "city": "月影坡", "code": "19", "initial": "Y" },
  { "id": "20", "provincecode": "20", "city": "活动服务中心保健中心", "code": "20", "initial": "H" },
  { "id": "21", "provincecode": "21", "city": "落雁台", "code": "21", "initial": "L" }

]


const cityObjs = [{ "id": "1", "provincecode": "1", "city": "北门牌坊", "code": "1", "initial": "B" ,"shorter":"bmpf"},
  { "id": "2", "provincecode": "2", "city": "数据科学与计算机学院院楼", "code": "2", "initial": "S" ,"shorter":"sdcs"},
  { "id": "3", "provincecode": "3", "city": "北望山", "code": "3", "initial": "B" ,"shorter":"bws"},
  { "id": "4", "provincecode": "4", "city": "行政楼", "code": "4", "initial": "X","shorter":"xzl" },
  { "id": "5", "provincecode": "5", "city": "公教楼", "code": "5", "initial": "G","shorter":"gjl" },
  { "id": "6", "provincecode": "6", "city": "图书馆", "code": "6", "initial": "T","shorter":"tsg" },
  { "id": "7", "provincecode": "7", "city": "北基础实验楼", "code": "7", "initial": "B" ,"shorter":"bjcsyl"},
  { "id": "8", "provincecode": "8", "city": "南基础实验楼", "code": "8", "initial": "N" ,"shorter":"njcsyl"},
  { "id": "9", "provincecode": "9", "city": "体育馆", "code": "9", "initial": "T","shorter":"tyg" },
  { "id": "10", "provincecode": "10", "city": "真草（东田径场）", "code": "10", "initial": "Z","shorter":"zc" },
  { "id": "11", "provincecode": "11", "city": "假草（西田径场）", "code": "11", "initial": "J" ,"shorter":"jc"},
  { "id": "12", "provincecode": "12", "city": "明德园", "code": "12", "initial": "M","shorter":"mdy" },
  { "id": "13", "provincecode": "13", "city": "格致园", "code": "13", "initial": "G","shorter":"gzy" },
  { "id": "14", "provincecode": "14", "city": "冕山", "code": "14", "initial": "M" ,"shorter":"ms"},
  { "id": "15", "provincecode": "15", "city": "第一第二食堂", "code": "15", "initial": "D","shorter":"dydest" },
  { "id": "16", "provincecode": "16", "city": "第三第四食堂", "code": "16", "initial": "D","shorter":"dsdsst" },
  { "id": "17", "provincecode": "17", "city": "慎思园", "code": "17", "initial": "S" ,"shorter":"ssy"},
  { "id": "18", "provincecode": "18", "city": "至善园", "code": "18", "initial": "Z","shorter":"zsy" },
  { "id": "19", "provincecode": "19", "city": "月影坡", "code": "19", "initial": "Y" ,"shorter":"yyp"},
  { "id": "20", "provincecode": "20", "city": "活动服务中心保健中心", "code": "20", "initial": "H","shorter":"hdfwzxbjzx" },
  { "id": "21", "provincecode": "21", "city": "落雁台", "code": "21", "initial": "L","shorter":"lyt" }]

//地点检索的首字母
var searchLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"]

// function searchLetter() {
//     return searchLetter;
// }

//对地点信息进行分组
function cityList() {
  let tempArr = [];

  searchLetter.map(
    initial => {
      let tempObj = {};
      let cityInfo = [];

      tempObj.initial = initial;
      tempObj.cityInfo = cityObj.filter(
        city => city.initial == initial
      );

      tempArr.push(tempObj);
    }
  );

  // console.log(JSON.stringify(tempArr));
  return tempArr;
}

function pushCity() {

}

module.exports = {
  searchLetter: searchLetter,
  cityList: cityList,
  cityObjs: cityObjs
}