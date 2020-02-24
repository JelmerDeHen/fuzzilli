function main() {
const v2 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        let v12 = 0;
        const v13 = {isExtensible:v5,getOwnPropertyDescriptor:v5};
        const v15 = new Proxy(v3,v13);
        let v18 = 0;
        for (const v19 of "a") {
            for (let v23 = 0; v23 < 100; v23++) {
                const v24 = v15();
            }
        }
        const v25 = v18 + 1;
        const v26 = 5 << 3;
        const v27 = v12 + 1;
        const v28 = [1564090189,1564090189,1564090189];
        const v31 = [Infinity,Infinity,Infinity];
        const v32 = [v7,v31];
        const v33 = v32.toLocaleString();
        let v34 = Infinity;
        let v35 = v33;
        const v36 = [v28,"jZZhI/kPfh",v35];
    } catch(v37) {
    }
}
const v38 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
const v40 = new Proxy(v2,v38);
v40[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
