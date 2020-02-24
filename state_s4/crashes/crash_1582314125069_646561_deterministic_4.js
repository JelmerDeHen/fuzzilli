function main() {
function v0(v1,v2) {
    for (const v4 in "object") {
        const v7 = [1337,1337,1337,1337,1337];
        function v8(v9,v10,v11,v12) {
            'use strict'
            try {
                v12[3] = v12;
                const v14 = eval();
            } catch(v15) {
                const v17 = Symbol.toPrimitive;
                const v19 = ["EXkcpBKht7"];
                let v20 = "EXkcpBKht7";
                const v21 = v19.includes();
                const v23 = [v12,1337];
                const v26 = "unscopable".concat(100);
                const v28 = [1337,1337];
                const v30 = [13.37,13.37,13.37];
                const v31 = v30.toString();
                const v34 = [13.37,13.37];
                const v36 = [1337];
                const v37 = {b:v34,c:v28,valueOf:-9007199254740993,d:v31,constructor:1337,__proto__:v36};
                let v38 = v37;
                const v41 = new Proxy(v38,Object);
            }
            return v7;
        }
        const v42 = {deleteProperty:v8,set:v8,getPrototypeOf:v8,call:v8,preventExtensions:v8,isExtensible:v8,construct:v8,get:v8,ownKeys:v8,setPrototypeOf:1337,has:v8};
        const v44 = new Proxy(v7,v42);
        v44[1] = "MIN_VALUE";
    }
}
const v45 = v0();
}
%NeverOptimizeFunction(main);
main();
