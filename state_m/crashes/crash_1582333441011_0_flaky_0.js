function main() {
const v2 = [1337,1337,1337,1337,1337];
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        const v11 = [13.37,13.37,13.37,13.37,13.37];
        const v13 = [1337,1337,1337,1337,1337];
        const v14 = [v13,v11,13.37,13.37];
        const v15 = {__proto__:v14,c:v14};
        const v16 = {e:"yjSMDGTCed",c:v15,valueOf:eval,b:1337};
        const v20 = [String,"buffer",String,13.37];
        let v22 = 0;
        const v23 = v22 + 1;
        for (let v27 = 0; v27 < 100; v27++) {
            const v28 = v3(v16);
        }
        for (const v30 in "boolean") {
            for (let v34 = 0; v34 < 9; v34++) {
            }
        }
    } catch(v35) {
    }
}
const v36 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
const v38 = new Proxy(v2,v36);
v38[1] = "MIN_VALUE";
for (const v40 in "boolean") {
}
}
%NeverOptimizeFunction(main);
main();
