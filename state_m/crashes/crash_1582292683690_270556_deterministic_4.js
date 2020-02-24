function main() {
const v3 = [13.37,13.37,13.37];
const v5 = [1337,1337,1337];
const v6 = [1337,"e"];
const v7 = {a:13.37,d:v3,c:1337,b:2,length:v3};
const v8 = {a:1337,d:13.37,c:v5,b:v3};
let v9 = v5;
const v11 = [13.37,13.37,13.37,13.37];
const v13 = [1337];
const v14 = [];
for (const v16 in "object") {
    const v19 = [1337,1337,1337,1337,1337];
    function v20(v21,v22,v23,v24) {
        'use strict'
        try {
            const v26 = new Float32Array();
            v24[3] = v24;
        } catch(v27) {
            const v29 = Symbol.toPrimitive;
            const v31 = ["EXkcpBKht7"];
            let v32 = "EXkcpBKht7";
            const v36 = [13.37,13.37,13.37,13.37];
            const v38 = {d:1337,length:"pizpIb2dL8",valueOf:v36,a:13.37,__proto__:Reflect};
            const v39 = [];
            const v42 = [13.37];
            const v44 = [1337,1337,1337];
            const v45 = {toString:v42,b:"PI",valueOf:v44};
            const v46 = {b:v45};
            const v47 = v46.__proto__;
            let v48 = v45;
            const v53 = [13.37,13.37,13.37,JSON];
            const v55 = [1337,1337,1337];
            const v56 = [1337,v53,13.37,v53];
            const v57 = {__proto__:v55,length:v56,valueOf:"byteOffset",c:v56,toString:2824363247,a:"byteOffset"};
        }
        return v19;
    }
    const v58 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
    const v60 = new Proxy(v19,v58);
    v60[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
