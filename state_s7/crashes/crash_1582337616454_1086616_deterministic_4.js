function main() {
const v2 = [13.37];
const v4 = [1337,1337,1337];
const v5 = [v4,1337];
const v6 = {__proto__:v2,e:v2,c:v4};
const v7 = {constructor:1337,a:1337,e:v4,c:v4};
let v8 = "number";
const v13 = [13.37,13.37,13.37];
const v15 = [1337,1337,1337];
const v16 = ["byteOffset",Proxy,v13,2695331796];
const v17 = {toString:v16,e:13.37,d:1337};
const v18 = {b:v15};
let v19 = v16;
const v24 = [13.37,13.37];
const v26 = [1337];
const v27 = [];
const v28 = {d:Boolean,toString:13.37,c:v24,e:"size",a:-4294967297,constructor:v24};
const v29 = {d:-4294967297,toString:13.37,__proto__:1337,a:-4294967297,c:v26};
const v31 = [1337,1337];
let v33 = 0;
const v36 = [13.37,13.37,13.37,13.37];
const v38 = [v36,-2,v31];
const v41 = [123036.33437387459,123036.33437387459,123036.33437387459,-4294967297];
const v43 = [871735.3826353757,4294967295,v41];
let v45 = 0;
const v47 = [1337,1337,1337,1337];
const v48 = {valueOf:v47};
const v50 = {e:v48,d:"d"};
const v52 = [1337];
let v53 = v52;
let v55 = undefined;
let v57 = -128;
const v58 = v57 + 1;
const v61 = [1337,1337,1337,1337,1337];
function v62(v63,v64,v65,v66) {
    'use strict'
    try {
        let v69 = 0;
        while (v69 < 10) {
            const v70 = v69 + 1;
            v69 = v70;
        }
        v66.__proto__ = v50;
    } catch(v71) {
        const v73 = Symbol.toPrimitive;
    }
}
const v74 = {deleteProperty:v62,set:v62,getPrototypeOf:v62,call:v62,preventExtensions:v62,isExtensible:v62,construct:v62,get:v62,ownKeys:v62,setPrototypeOf:1337,has:v62};
const v76 = new Proxy(v61,v74);
v76[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
