function main() {
const v2 = [13.37,13.37,13.37,13.37];
const v4 = [1337,1337];
const v5 = [1337,Float64Array];
const v6 = {valueOf:v5,d:v2,toString:v2,c:1337};
const v10 = [1337,13.37,1337,Uint8Array];
let v11 = v10;
const v13 = [1337,1337,1337,1337,1337];
const v14 = {valueOf:v13,__proto__:v13};
let v16 = 13.37;
const v19 = [1337,1337,1337,1337,1337];
function v20(v21,v22,v23,v24) {
    'use strict'
    try {
        const v28 = [1337,1337];
        const v30 = new ArrayBuffer();
        v16 = v23;
        let v33 = 0;
        do {
            const v34 = v33 + 1;
            v33 = v34;
            const v38 = new Uint32Array(13.37);
            v38.constructor = Int16Array;
            const v41 = v38.slice(-2147483649,1337);
        } while (v33 < 4);
        let v44 = 0;
        const v45 = v30.slice(v16,4);
        const v46 = v44 + 1;
        const v47 = [13.37];
        const v49 = [1337,13.37,v19,-1155643050];
        let v50 = v47;
        const v52 = [1337,1337];
        const v53 = {valueOf:1337,b:v11,e:1337,d:1337,constructor:v50,__proto__:1337,a:v47};
        const v55 = [1337,1337,1337,1337,1337];
        const v56 = [v55];
        const v57 = v52[-4096];
        const v58 = v49[-3357639552];
        const v59 = 13.37 == v49;
        let v61 = 0;
        const v62 = v50.flat();
        v24[3] = v24;
        const v63 = v14();
        const v64 = v63[-2900725722];
        let v66 = 0;
    } catch(v67) {
        const v68 = {construct:v67};
    }
}
const v69 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
const v71 = new Proxy(v19,v69);
v71[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
