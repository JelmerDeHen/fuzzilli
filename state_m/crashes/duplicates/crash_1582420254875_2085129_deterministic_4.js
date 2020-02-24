function main() {
const v3 = [13.37,13.37];
const v5 = [1337,1337,1337,1337,1337];
const v6 = ["function",v5,"function"];
const v7 = {e:13.37,constructor:13.37,a:v3};
const v8 = {c:2711499288,e:v3,length:"function",b:v5};
let v9 = v8;
const v11 = [1337,1337,1337,1337,1337];
function v12(v13,v14,v15,v16) {
    'use strict'
    try {
        for (let v21 = 0; v21 < 100; v21++) {
            const v22 = v12();
        }
        const v23 = [1337,1337];
        const v26 = ArrayBuffer();
        const v28 = v26.slice(1024);
        const v30 = [1337,1337,1337,1337];
        const v31 = {};
        const v32 = [v31,v31,v31,v31];
        let v33 = v16;
        const v34 = DataView();
    } catch(v35) {
    }
}
const v36 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:v12,has:v12};
const v38 = new Proxy(v11,v36);
const v40 = v12(v38,1,v38);
}
%NeverOptimizeFunction(main);
main();
