function main() {
const v4 = [13.37,13.37,13.37,13.37];
const v6 = [1337,1337,1337,1337,1337];
const v7 = [v4,v6,-2268785948,v6];
const v8 = {constructor:1337,c:1337,e:13.37};
let v9 = "number";
const v11 = [1337,1337,1337,1337,1337];
const v12 = {valueOf:v11,__proto__:v11};
const v15 = [1337,1337,1337,1337,1337];
function v16(v17,v18,v19,v20) {
    'use strict'
    try {
        for (let v24 = 0; v24 < 100; v24++) {
            const v25 = v16(v7);
        }
        const v26 = v11 & 100;
        v20[1073741824] = v20;
        const v27 = v12();
        let v30 = 0;
        do {
            const v31 = typeof 0;
            const v33 = v31 === "symbol";
            const v34 = v30 + 1;
            v30 = v34;
        } while (v30 < 2);
        const v35 = v26 << 0;
    } catch(v36) {
    }
}
const v37 = {deleteProperty:v16,set:v16,getPrototypeOf:v16,call:v16,preventExtensions:v16,isExtensible:v16,construct:v16,get:v16,ownKeys:v16,setPrototypeOf:v16,has:v16};
const v39 = new Proxy(v15,v37);
function v40(v41,v42,v43,v44,v45) {
}
const v46 = v8.c;
const v47 = v6.__proto__;
const v48 = v16(v7,v40);
let v49 = v16;
const v50 = [];
const v51 = v39.__proto__;
const v52 = [v9,v49,v7,v12];
let v53 = v46;
const v54 = v16(-2268785948,13.37,Map);
}
%NeverOptimizeFunction(main);
main();
