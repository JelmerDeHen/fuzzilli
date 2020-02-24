function main() {
const v2 = [13.37];
const v4 = [1337,13.37,undefined];
const v5 = {a:v4,__proto__:13.37,e:1337,constructor:1337};
const v6 = {constructor:v2,valueOf:v5,c:v4,a:v4};
for (const v8 in "object") {
    const v11 = [1337,1337,1337,1337,1337];
    function v12(v13,v14,v15,v16) {
        'use strict'
        try {
            const v18 = new Float32Array();
            v16[3] = v16;
        } catch(v19) {
            const v21 = Symbol.toPrimitive;
            const v24 = ["EXkcpBKht7"];
            let v25 = "EXkcpBKht7";
            const v26 = v24.includes(v25,-2695425644);
            const v27 = [v16,v12];
            const v29 = "unscopable".concat();
            const v31 = [1337,1337];
            const v33 = [13.37,13.37,13.37];
            const v34 = v33.toString();
            const v37 = [13.37,13.37];
            const v39 = [1337];
            const v40 = {b:v37,c:v31,valueOf:-9007199254740993,d:v34,constructor:1337,__proto__:v39};
            let v41 = v40;
            const v43 = "E".padEnd();
            const v44 = v43.replace();
            const v47 = new Proxy(v41,Object);
            const v48 = Object.freeze();
            const v50 = [1337,1337,1337,1337];
            const v52 = [13.37,13.37,13.37,13.37];
            const v55 = [v52,13.37,13.37];
            const v56 = {length:1337,toString:v55,__proto__:v50};
            const v58 = [1337,1337,1337,1337,1337];
            const v59 = [v58];
        }
        return v11;
    }
    const v60 = {deleteProperty:v12,set:v12,getPrototypeOf:v6,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:1337,has:v12};
    const v62 = new Proxy(v11,v60);
    v62[1] = "MIN_VALUE";
}
const v64 = eval();
}
%NeverOptimizeFunction(main);
main();
