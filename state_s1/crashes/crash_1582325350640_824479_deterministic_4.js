function main() {
const v2 = [13.37,13.37,13.37,13.37];
const v4 = {e:v2,c:v2,d:-2147483649,constructor:1337,__proto__:v2};
const v7 = [1337,1337,1337,1337,1337];
function v8(v9,v10,v11,v12) {
    'use strict'
    try {
        for (let v17 = 0; v17 < 1; v17++) {
        }
        const v18 = this.get();
        for (const v19 of v4) {
        }
    } catch(v20) {
    }
}
const v21 = {deleteProperty:v8,set:v8,getPrototypeOf:v8,call:v8,preventExtensions:v8,isExtensible:v8,construct:v8,get:v8,ownKeys:v8,setPrototypeOf:v8,has:v8};
const v23 = new Proxy(v7,v21);
v23[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
