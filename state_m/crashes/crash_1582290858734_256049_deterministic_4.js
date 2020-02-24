function main() {
for (const v1 in "object") {
    const v6 = [1337,1337,1337,1337];
    const v7 = [v6];
    const v8 = {constructor:v7,toString:v6,a:v7,c:v7,__proto__:isFinite,length:v7};
    const v9 = [1337,1337,1337,1337,1337];
    function v10(v11,v12,v13,v14) {
        'use strict'
        try {
            const v16 = new Float32Array();
            v14[3] = v14;
        } catch(v17) {
            const v19 = Symbol.toPrimitive;
            const v21 = ["EXkcpBKht7"];
            let v22 = "EXkcpBKht7";
            const v26 = [13.37,13.37,13.37,13.37];
            const v28 = {d:1337,length:"pizpIb2dL8",valueOf:v26,a:13.37,__proto__:Reflect};
            const v31 = [];
            const v35 = [13.37];
            const v37 = [1337,1337,1337];
            const v38 = {toString:v35,b:"PI",valueOf:v37};
            const v39 = {b:v38};
            const v40 = v39.__proto__;
            let v41 = v38;
            const v42 = typeof "symbol";
            const v44 = v42 === "undefined";
            const v45 = v31.concat("e",-1024,v44);
            const v50 = [13.37,13.37,13.37,JSON];
            const v52 = [1337,1337,1337];
            const v53 = [1337,v50,13.37,v50];
            const v54 = {__proto__:v52,length:v53,valueOf:"byteOffset",c:v53,toString:2824363247,a:"byteOffset"};
        }
        return v9;
    }
    const v55 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
    const v57 = new Proxy(v9,v55);
    v57[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
