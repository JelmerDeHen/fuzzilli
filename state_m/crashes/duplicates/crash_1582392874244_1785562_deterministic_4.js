function main() {
const v4 = [13.37,13.37,13.37];
const v6 = [1337];
const v7 = [v6,"MAX_VALUE",v4,1337];
const v8 = {__proto__:"MAX_VALUE",e:1,d:Uint8ClampedArray,a:v7,toString:"MAX_VALUE"};
const v12 = [1337,13.37,1337,Uint8Array];
let v13 = v12;
const v15 = [1337,1337,1337,1337,1337];
const v16 = {valueOf:v15,__proto__:v15};
let v18 = 13.37;
const v21 = [1337,1337,1337,1337,1337];
function v22(v23,v24,v25,v26) {
    'use strict'
    try {
        const v30 = [1337,1337];
        const v32 = new ArrayBuffer();
        v18 = v25;
        let v35 = 0;
        do {
            const v36 = v35 + 1;
            v35 = v36;
        } while (v35 < 4);
        let v38 = 0;
        const v39 = v32.slice(v18);
        const v40 = v38 + 1;
        const v41 = [13.37];
        const v43 = [1337,13.37,v41,-1155643050];
        let v44 = v41;
        const v46 = [1337,1337];
        const v47 = {valueOf:1337,b:v13,e:1337,d:1337,constructor:v44,__proto__:1337,a:v41};
        const v49 = [1337,1337,1337,1337,1337];
        const v50 = [v49];
        const v51 = v46[-4096];
        const v52 = v43[-3357639552];
        const v53 = 13.37 == v43;
        v30[v26] = Uint8Array;
        const v55 = v51(v26,v23,v43);
        let v56 = v8;
        let v57 = 0;
        const v58 = v44.flat();
        const v59 = v16();
        let v61 = undefined;
        let v63 = 0;
    } catch(v64) {
        const v65 = {construct:v64};
    }
}
const v66 = {deleteProperty:v22,set:v22,getPrototypeOf:v22,call:v22,preventExtensions:v22,isExtensible:v22,construct:v22,get:v22,ownKeys:v22,setPrototypeOf:v22,has:v22};
const v68 = new Proxy(v21,v66);
v68[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
