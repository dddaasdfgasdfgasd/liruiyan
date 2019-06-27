// // var obj = [{  n: 55, m: 66 }, {  n: 22, m: 33 }, { n: 88, m: 99}];
// //
// // obj.sort(function (a, b) {
// //
// //     return a.m -b.m;
// //
// // });
// //
// // console.log(obj);
// //
// // let arr=[
// //     {
// //         []
// //     }
// // ]
// let ary=[]
// let arr=[1,3,5]
//
// arr.map((item)=>{
//     let obj={}
//     obj.value=item
//     ary.push(obj)
//
// })
// console.log(ary);

// let a=[{a:1}]
// let b=[{b:1}]
// let c=[...a,...b]
// console.log(c);
// let specsapiDTOList= [
//     {
//         "id": "df6ddd83-2c3e-4863-ac21-f4d93a8aab99",
//         "specificationName": "尺寸",
//         "goodsSpecificationId": "c487489e-5405-4a8c-9748-4a2804df7dd0",
//         "specsDetailapiDTOList": [
//             {
//                 "id": "03698be2-9927-4e14-a883-1eae78bf5932",
//                 "goodsSpecificationId": "c487489e-5405-4a8c-9748-4a2804df7dd0",
//                 "specificationValeName": "16寸·"
//             },
//             {
//                 "id": "d8db0658-515c-48c0-86c8-7e4fc494af51",
//                 "goodsSpecificationId": "c487489e-5405-4a8c-9748-4a2804df7dd0",
//                 "specificationValeName": "8寸"
//             }
//         ]
//     },
//     {
//         "id": "a177c883-492f-4295-8730-8640d982d07e",
//         "specificationName": "007",
//         "goodsSpecificationId": "7dcfb72e-5526-4092-b069-61601f875f67",
//         "specsDetailapiDTOList": [
//             {
//                 "id": "2e9fbc67-41d8-437f-b044-f879dfe10139",
//                 "goodsSpecificationId": "7dcfb72e-5526-4092-b069-61601f875f67",
//                 "specificationValeName": "red"
//             },
//             {
//                 "id": "f4e8a521-c2f7-4140-bf2c-391a1c1fac19",
//                 "goodsSpecificationId": "7dcfb72e-5526-4092-b069-61601f875f67",
//                 "specificationValeName": "yellow"
//             }
//         ]
//     }
// ]
// let obj={}
// let arr=[]
// specsapiDTOList.map((item,index)=>{
// arr[index]=item
//     console.log(arr);
//
// })


// var list = [
//     { id: 1, name: "a" },
//     { id: 2, name: "b" },
//     { id: 3, name: "c" }
// ];
// var replacement = { id: 2, name: "b", sex: "female" };
// for (let i = 0, len = list.length; i < len; i++) {
//     if (list[i].id === replacement.id) {
//         list[i] = replacement;
//     }
// }
// // console.log(list);
//
// var arr=[1, 2, 3, 4]
// arr.splice(0,1)
// console.log(arr);
//
// let ary=[
//     {label: "张三", value: "001"},
//     {label: "李四", value: "002"},
// ]
//
// let ary=[
//     {id: 1,label: "张三"},
//     {id: 2,label: "李四"},
// ]
//
// ary.forEach(function (item) {
//     item.id = Number(item.value)
//     delete item.value
// })
//
// console.log(ary);
// let str="2,4,6"
// console.log(str.split(","));
// let arr=str.split(",")
// let obj={
//     value:"",
//     name:""
// }
// let ary=[]
// arr.map((item)=>{
//    obj.value=item
//    obj.name=item
//     ary.push(obj)
//     console.log(ary);
// })
// let arr=[{value:"2",name:"2"},{value:"4",name:"4"},{value:"6",name:"6"}]
// let arr=[]
// let obj={}
// let goodsTypeParaList= [
//     {
//         "id": "0953b0f9-41fc-4d06-b810-db8f778469fc",
//         "dictionariesId": "384f7235-2c79-46eb-a1ac-a461a4e49810",
//         "dictionariesName": "内存",
//         "presetValue": "1G,2G,4G"
//     },
//     {
//         "id": "b53f905a-204d-445f-a6a3-a94dcc362209",
//         "dictionariesId": "3b7a6fe4-888c-42aa-8560-ce91e2640a91",
//         "dictionariesName": "处理器",
//         "presetValue": "I3,I5,I7"
//     },
//     {
//         "id": "7aba77fd-c00c-477f-bd7e-b5c544a7ebe1",
//         "dictionariesId": "6e8aa574-b18d-49bc-8f3e-4549794f44b6",
//         "dictionariesName": "分辨率",
//         "presetValue": "800,1000,1200"
//     },
//     {
//         "id": "fb8f09ad-a238-4dce-bcc5-df880edf4d4c",
//         "dictionariesId": "e6283a04-cfa6-4d62-ba70-e76cfffef2a2",
//         "dictionariesName": "外观要求",
//         "presetValue": "经典,艺术"
//     },
//     {
//         "id": "b07b5cd2-6ea3-4586-8663-f54b99d23a86",
//         "dictionariesId": "f0840521-1577-49f2-84f7-9273822e1e24",
//         "dictionariesName": "网络模式",
//         "presetValue": ""
//     }
// ]


// let json1=[
//     {id:1,name:"aaa"},
//     {id:2,name:"bbb"},
//     {id:3,name:"ccc"},
// ]
// let json2=[
//     {id:1,name:"aaa"},
//     {id:2,name:"bbb"},
//     {id:4,name:"ddd"},
// ]
// let json = json1.concat(json2); //两个数组对象合并
// let newJson = []; //盛放去重后数据的新数组
// for(item1 of json){  //循环json数组对象的内容
//     let flag = true;  //建立标记，判断数据是否重复，true为不重复
//     for(item2 of newJson){  //循环新数组的内容
//         if(item1.id==item2.id){ //让json数组对象的内容与新数组的内容作比较，相同的话，改变标记为false
//             flag = false;
//         }
//     }
//     if(flag){ //判断是否重复
//         newJson.push(item1); //不重复的放入新数组。  新数组的内容会继续进行上边的循环。
//     }
// }
// console.log("newJson",newJson);


// var data = [
//     {"userId":"dFum4RT6","position":"java开发"},
//     {"userId":"hFXm4RT6","position":"java开发"},
//     {"userId":"kFom4RT6","position":"java开发"},
//     {"userId":"cFXm4RT6","position":"java开发"},
//     {"userId":"hFXm4RT6","position":"java开发"},
// ]
// var hash = {};
// arr = data.reduce(function(item, next) {
//     hash[next.userId] ? '' : hash[next.userId] = true && item.push(next);
//     return item
// }, [])
//  let p=[{a: 0, b: 2}, {a: 1, b: 3}, {a: 0, b: 4}]
// let n=p.filter(item =>
//     item.a !== 0
// )
//
// console.log(n);
//
// let arr=[
//     {a:1,b:4,c:3},
//     {a:1,b:2}
// ]
// arr.map((item)=>{
//     if(item.a=1){
//         item.a=0
//     }
//     return item
// })
// console.log(arr);

let obj={
       arr:[{c:5}],
       a:1,
       b:2,

}


let arr=[{c:3}]
obj.arr=arr
console.log(obj);
(2) [{…}, {…}]0: {goodsTypeParameterGroupId: "4963c81d-4a0b-4ed5-b6b5-1a6574aa98da", goodsTypeParametersId: "83304f50-4093-47dc-9204-c86e5c12322e", paraValue: "1G"}1: {goodsTypeParameterGroupId: "4963c81d-4a0b-4ed5-b6b5-1a6574aa98da", goodsTypeParametersId: "9fa80761-25fc-42e7-ab16-e06ed83da86a", paraValue: "I5"}length: 2__proto__: Array(0)