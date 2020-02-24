function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
const v6 = [1337,1337];
const v7 = [v6];
const v8 = {toString:v7,length:"iterator",constructor:Infinity,b:v4,c:1337};
const v9 = {valueOf:v6,constructor:1337,a:-1073741824};
function v10(v11,v12,v13,v14) {
    'use strict'
    try {
        for (let v18 = 0; v18 < 100; v18++) {
        }
        const v19 = v10();
        const v22 = [13.37,13.37];
        for (let v26 = 0; v26 < 100; v26++) {
        }
        const v27 = v22[1024];
        const v28 = {has:gc,construct:v27,defineProperty:v27,deleteProperty:gc,setPrototypeOf:gc,preventExtensions:v27,isExtensible:v27,call:v27,set:gc,getOwnPropertyDescriptor:gc};
        for (const v30 in "object") {
        }
    } catch(v31) {
    }
}
const v34 = v10(Reflect,Reflect,1337);
}
%NeverOptimizeFunction(main);
main();
