module("Card_cfg",package.seeall)
local index = {[0]=1,[1]=2,[2]=3,[3]=4,[4]=5,[5]=6,[6]=7,[7]=8,[8]=9,[9]=10,[10]=11,}
local data = {}
data["card_id"]={0,1,2,3,4,5,6,7,8,9,10,}
data["card_name"]={"刘备","关羽","张飞","赵云","黄忠","曹操","孙权","周瑜","鲁肃","吕布","董卓",}
data["card_hp"]={1000,1100,1100,1300,1200,2000,1600,3000,1250,1560,1400,}
data["card_attack"]={40,50,60,45,30,45,32,54,26,65,40,}
data["card_color"]={0,1,2,1,0,2,1,3,0,1,2,}

function getData(id,attr)
    return data[attr][index[id]]
end