function main() {
const v4 = [13.37];
const v6 = [1337,1337,1337,1337,1337];
const v7 = [13.37,v4,"undefined",v6];
const v8 = {d:"undefined",toString:13.37,valueOf:905951317,c:Array,constructor:Array,b:13.37};
const v9 = {};
const v12 = [1337,1337,1337,1337,1337];
function v13(v14,v15,v16,v17) {
    'use strict'
    function v19(v20,v21) {
        if (v16) {
        } else {
        }
    }
    let v24 = 0;
    while (v24 < 1337) {
        const v25 = v24 + 1;
        v24 = v25;
    }
    let v27 = 0;
    try {
        const v32 = [];
        const v33 = {valueOf:v32,length:13.37,d:127,e:127};
        const v34 = {c:v32,valueOf:v33,d:Array,a:1337};
        const v35 = {setPrototypeOf:v14,ownKeys:Array,getOwnPropertyDescriptor:v17,get:v16,isExtensible:v13,apply:v15,getPrototypeOf:Array,construct:Array,deleteProperty:Array,has:Array};
        const v37 = new Proxy(v17,v35);
        v17.length = v13;
        let v38 = v7;
        if (v37) {
            const v39 = "boolean".__proto__;
        } else {
            const v40 = 1337 * v35;
        }
    } catch(v41) {
    }
    const v42 = v27 + 1;
}
const v43 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
const v45 = new Proxy(v12,v43);
v45[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
