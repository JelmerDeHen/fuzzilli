function main() {
const v3 = [13.37,13.37];
const v5 = [1337,1337,1337,1337];
const v6 = [Int16Array,1337];
const v7 = {d:Int16Array,valueOf:v5,constructor:v3,a:v3,c:"l02JOJVzas",__proto__:Int16Array,length:Int16Array};
let v8 = 1337;
const v11 = [13.37,13.37,13.37,13.37,13.37];
const v12 = {valueOf:WeakSet,__proto__:v11};
const v15 = [13.37];
const v17 = [1337,1337,1337,"xcycrfnQjT",1337];
function v18(v19,v20,v21,v22) {
    'use strict'
    try {
        for (let v26 = 0; v26 < 100; v26++) {
            const v27 = v18();
        }
        const v28 = v22(v7,v22,v8,WeakSet);
        for (let v32 = 0; v32 < 7; v32++) {
            let v34 = 0;
        }
        let v36 = 0;
        const v37 = v36 + 1;
    } catch(v38) {
    }
}
const v39 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
const v41 = new Proxy(v17,v39);
v41.constructor = v15;
}
%NeverOptimizeFunction(main);
main();
