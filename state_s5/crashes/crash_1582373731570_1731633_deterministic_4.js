function main() {
const v3 = [13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337,1337];
const v6 = ["wv1ajE3Dit","wv1ajE3Dit",String,13.37];
const v8 = [1337,1337,1337,1337,1337];
const v9 = {};
const v10 = [v9,v9,v9,v9];
let v12 = undefined;
const v14 = [-2331916614,-2331916614,-2331916614];
const v17 = [1337,1337,1337,1337,1337];
function v18(v19,v20,v21,v22) {
    'use strict'
    try {
        const v24 = Symbol.replace;
        for (let v28 = 0; v28 < 100; v28++) {
            const v29 = v18(v19);
        }
        for (const v30 in v19) {
            const v31 = [];
            const v32 = {a:v31};
        }
    } catch(v33) {
    }
}
const v34 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
const v36 = new Proxy(v17,v34);
v36[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
