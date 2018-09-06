const loadAllItems = require('./items');
const loadPromotions = require('./promotions');



const loadAllFormatedItems = () => loadAllItems().reduce((items, item) => {
  items[item.id] = item;
  return items;
}, {});

const ALL_ITEMS = loadAllFormatedItems();
const ALL_PROMOTIONS = loadPromotions();

function  parseAndCount(selectedItems){
  selectedItems.reduce((itemDict, element)=>{
      const [id, count] = element.split("-");
      itemDict[id] = count;
      return itemDict;
    }
    ,{})

}



function bestCharge(selectedItems) {

  let itemDict = parseAndCount(selectedItems);
  let itemClass = generateClass(itemDict);
  // let originTotal = calcuOriginPrice(itemClass);
  // let promotion1Info = getPromotion1Info(originTotal);
  // let promotion2Info = getPromotion2Info(originTotal);
  output(itemClass, None, None);

  // console.log("++++++++++++++++++++++++++++++++++");

}

function output(originTotal, promotion1Info, promotion2Info) {
  renderAll(originTotal, 0, None);
}

function renderAll(originInfo, promotionType, promotionInfo) {
  let headerInfo = "============= 订餐明细 =============\n";
  let middleInfo = "-----------------------------------\n";
  let endInfo = "===================================";

  let finalStr = "";
  if (promotionType == 0) {
    finalStr += headerInfo + renderOrigin(originInfo) + middleInfo + "总计：" + getOriginSum(originInfo) + "元" + endInfo;
  }

}

function getOriginSum(originInfo) {
  return originInfo.reduce((sum, element) => {
    const [itemId, klass] = element;
    sum += klass.subTotal;
    return sum;
  }, 0.0);
}

function renderOrigin(originInfo) {
  return originInfo.reduce((resStr, element) => {
    const [itemId, klass] = element;
    resStr += klass.name + ' x ' + klass.count + ' = ' + klass.subToal + '元\n';
    return resStr;
  }, "");
}

function getPromotion2Info(itemClass) {
  itemClass.reduce((sum, element) => {
    const [itemId, klass] = element;
    sum += klass.subToal;
  }, 0.0)
  return floor(sum / 30) * 6;
}

function getPromotion1Info(originTotal) {
  promotion1TotalList = ALL_PROMOTIONS[1]["items"];
  return originTotal.reduce((promotion1List, element) => {
    if (promotion1List.includes(element.id))
      promotion1List.push({[id] : [element.name, element.price * element.count * 0.5]});
  }, [])
}


function generateClass(itemDict) {
  return itemDict.reduce((itemClass, element) => {
    const [itemId, count] = element;
    itemClass[itemId] = ItemObj(itemId, ALL_ITEMS[itemId].name, ALL_ITEMS[itemId].price, count);
    return itemClass;
  }, {});
}

class ItemObj{

  constructor(id, name, price, count) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.count = count;
    this.subToal = this.price * this.count;
  }

  calculateSubTotal(){
    return this.subToal = price * count;
  }

  setPromotion1(price = 0){
    this.Promotion1 = price * 0.5;
  }

}

module.exports = bestCharge;
