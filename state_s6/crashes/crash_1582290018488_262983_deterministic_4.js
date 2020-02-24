function main() {
const v4 = [13.37,13.37];
const v6 = [1337,1337,1337,1337];
const v7 = [13.37,"boolean"];
const v8 = {toString:v6,a:Boolean,c:"boolean",e:1337,d:Boolean,__proto__:v7};
const v9 = {constructor:v8,d:13.37,b:1337,__proto__:v8,valueOf:-1848710946};
let v10 = v4;
for (const v12 in "object") {
    const v15 = [1337,1337,1337,1337,1337];
    function v16(v17,v18,v19,v20) {
        'use strict'
        try {
            const v22 = new Float32Array();
            v20[3] = v20;
        } catch(v23) {
            const v24 = v15[3];
            let v26 = 0;
            const v27 = [v6,v9,v15];
            const v28 = v26 + 1;
            function v29(v30,v31,v32) {
                'use strict'
                return v18;
            }
            const v34 = Symbol.toPrimitive;
            const v36 = ["EXkcpBKht7"];
            let v37 = "EXkcpBKht7";
            const v38 = v36.includes();
            const v40 = [1337,1337];
            const v43 = "unscopable".concat();
            const v44 = [-372074.99096011615,v40,-372074.99096011615];
            const v49 = [13.37,13.37,13.37,JSON];
            const v51 = [1337,1337,1337];
            const v52 = [1337,v49,13.37,v49];
            const v53 = {__proto__:v51,length:v52,valueOf:"byteOffset",c:v52,toString:2824363247,a:"byteOffset"};
        }
        return v15;
    }
    const v54 = {deleteProperty:v16,set:v16,getPrototypeOf:v16,call:v16,preventExtensions:v16,isExtensible:v16,construct:v16,get:v16,ownKeys:v16,setPrototypeOf:v16,has:v16};
    let v56 = 0;
    let v58 = 0;
    let v60 = 0;
    let v62 = 0;
    const v64 = new Proxy(v15,v54);
    v64[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
