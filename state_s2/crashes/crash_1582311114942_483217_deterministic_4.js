function main() {
const v4 = Uint8ClampedArray || 13.37;
const v5 = [13.37];
const v7 = [1337,1337,1337];
const v8 = ["isConcatSpreadable",2,2];
const v9 = {__proto__:Uint8ClampedArray,toString:1337};
const v10 = {d:v8};
const v13 = [1337,1337,1337,1337,1337];
function v14(v15,v16,v17,v18) {
    'use strict'
    let v21 = 0;
    while (v21 < 1337) {
        const v22 = v21 + 1;
        v21 = v22;
    }
    try {
        const v26 = [1.7976931348623157e+308,-461522.98234251246,-461522.98234251246];
        let v29 = 255;
        const v30 = v26.push();
        const v31 = v29 + 1;
        let v32 = Uint8ClampedArray;
        let v34 = 0;
        const v35 = v14(-4294967297,0,13.37);
        const v36 = v34 + 1;
        const v37 = Uint8Array();
    } catch(v38) {
    }
}
const v39 = {deleteProperty:v14,set:v14,getPrototypeOf:v14,call:v14,preventExtensions:v14,isExtensible:v14,construct:v14,get:v14,ownKeys:v14,setPrototypeOf:v14,has:v14};
const v41 = new Proxy(v13,v39);
v41[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
