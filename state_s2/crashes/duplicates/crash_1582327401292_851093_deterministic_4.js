function main() {
const v3 = new Int8Array();
const v4 = [13.37,13.37];
const v6 = [1337,1337,1337,1337];
const v7 = [v6,13.37,1337];
const v8 = {a:13.37,__proto__:13.37,d:v7,c:13.37,e:"toStringTag",length:"toStringTag"};
const v9 = {length:"toStringTag",b:13.37};
const v11 = [13.37,13.37,13.37,13.37];
const v13 = [1337,1337,1337,1337,1337];
const v16 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
function v17(v18,v19,v20,v21) {
    'use strict'
    try {
        let v25 = 0;
        for (let v29 = 0; v29 < 100; v29++) {
            const v30 = v17(v25,2,v21);
        }
        const v31 = v25 + 1;
        const v32 = {d:Float64Array};
        let v33 = v20;
        const v35 = String();
        const v36 = v35.indexOf();
        let v37 = v21;
        const v38 = v37 + 1;
    } catch(v39) {
    }
}
const v40 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:v17,has:v17};
const v42 = new Proxy(v16,v40);
v42[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
