/*
TypeScript Map 对象
Map 对象保存键值对，并且能够记住键的原始插入顺序。

任何值(对象或者原始值) 都可以作为一个键或一个值。

Map 是 ES6 中引入的一种新的数据结构，可以参考 ES6 Map 与 Set。

创建 Map
TypeScript 使用 Map 类型和 new 关键字来创建 Map：

let myMap = new Map();
初始化 Map，可以以数组的格式来传入键值对：

let myMap = new Map([
        ["key1", "value1"],
        ["key2", "value2"]
    ]); 
Map 相关的函数与属性：

map.clear() – 移除 Map 对象的所有键/值对 。
map.set() – 设置键值对，返回该 Map 对象。
map.get() – 返回键对应的值，如果不存在，则返回 undefined。
map.has() – 返回一个布尔值，用于判断 Map 中是否包含键对应的值。
map.delete() – 删除 Map 中的元素，删除成功返回 true，失败返回 false。
map.size – 返回 Map 对象键/值对的数量。
map.keys() - 返回一个 Iterator 对象， 包含了 Map 对象中每个元素的键 。
map.values() – 返回一个新的Iterator对象，包含了Map对象中每个元素的值 。
实例 - test.ts 文件
*/
let nameSiteMapping = new Map();
 
// 设置 Map 对象
nameSiteMapping.set("Google", 1);
nameSiteMapping.set("Runoob", 2);
nameSiteMapping.set("Taobao", 3);
 
// 获取键对应的值
console.log(nameSiteMapping.get("Runoob"));     // 2
 
// 判断 Map 中是否包含键对应的值
console.log(nameSiteMapping.has("Taobao"));       // true
console.log(nameSiteMapping.has("Zhihu"));        // false
 
// 返回 Map 对象键/值对的数量
console.log(nameSiteMapping.size);                // 3
 
// 删除 Runoob
console.log(nameSiteMapping.delete("Runoob"));    // true
console.log(nameSiteMapping);
// 移除 Map 对象的所有键/值对
nameSiteMapping.clear();             // 清除 Map
console.log(nameSiteMapping);

/*
使用 es6 编译：

tsc --target es6 test.ts
编译以上代码得到如下 JavaScript 代码：

实例 - test.js 文件
let nameSiteMapping = new Map();
// 设置 Map 对象
nameSiteMapping.set("Google", 1);
nameSiteMapping.set("Runoob", 2);
nameSiteMapping.set("Taobao", 3);
// 获取键对应的值
console.log(nameSiteMapping.get("Runoob")); //40
// 判断 Map 中是否包含键对应的值
console.log(nameSiteMapping.has("Taobao")); //true
console.log(nameSiteMapping.has("Zhihu")); //false
// 返回 Map 对象键/值对的数量
console.log(nameSiteMapping.size); //3
// 删除 Runoob
console.log(nameSiteMapping.delete("Runoob")); // true
console.log(nameSiteMapping);
// 移除 Map 对象的所有键/值对
nameSiteMapping.clear(); //清除 Map
console.log(nameSiteMapping);
执行以上 JavaScript 代码，输出结果为：

2
true
false
3
true
Map { 'Google' => 1, 'Taobao' => 3 }
Map {}

*/

/*
迭代 Map
Map 对象中的元素是按顺序插入的，我们可以迭代 Map 对象，每一次迭代返回 [key, value] 数组。

TypeScript使用 for...of 来实现迭代：

实例 -test.ts 文件
*/
nameSiteMapping = new Map();
 
nameSiteMapping.set("Google", 1);
nameSiteMapping.set("Runoob", 2);
nameSiteMapping.set("Taobao", 3);
 
// 迭代 Map 中的 key
for (let key of nameSiteMapping.keys()) {
    console.log(key);                  
}
 
// 迭代 Map 中的 value
for (let value of nameSiteMapping.values()) {
    console.log(value);                 
}
 
// 迭代 Map 中的 key => value
for (let entry of nameSiteMapping.entries()) {
    console.log(entry[0], entry[1]);   
}
 
// 使用对象解析
for (let [key, value] of nameSiteMapping) {
    console.log(key, value);            
}

/*
使用 es6 编译：

tsc --target es6 test.ts
编译以上代码得到如下 JavaScript 代码：

实例
*/

nameSiteMapping = new Map();
nameSiteMapping.set("Google", 1);
nameSiteMapping.set("Runoob", 2);
nameSiteMapping.set("Taobao", 3);
// 迭代 Map 中的 key
for (let key of nameSiteMapping.keys()) {
    console.log(key);
}
// 迭代 Map 中的 value
for (let value of nameSiteMapping.values()) {
    console.log(value);
}
// 迭代 Map 中的 key => value
for (let entry of nameSiteMapping.entries()) {
    console.log(entry[0], entry[1]);
}
// 使用对象解析
for (let [key, value] of nameSiteMapping) {
    console.log(key, value);
}

/*
执行以上 JavaScript 代码，输出结果为：

Google
Runoob
Taobao
1
2
3
Google 1
Runoob 2
Taobao 3
Google 1
Runoob 2
Taobao 3

*/