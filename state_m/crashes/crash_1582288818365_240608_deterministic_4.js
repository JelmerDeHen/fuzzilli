function main() {
const v3 = [13.37,13.37,13.37];
const v5 = [1337];
const v6 = [];
const v7 = {b:v6,valueOf:13.37,d:"boolean"};
const v8 = {b:"boolean",e:v3,length:65535,toString:65535};
let v9 = v6;
const v11 = [256];
function v13(v14,v15) {
    for (const v17 in "boolean") {
        let v20 = 0;
        const v24 = [1337,1337,1337,1337,1337];
        function v25(v26,v27,v28,v29) {
            'use strict'
            try {
                v29[3] = v29;
            } catch(v30) {
                const v36 = {length:"N0Xx92zvHQ"};
                const v37 = {constructor:13.37,length:13.37,__proto__:v36,toString:Number,a:"N0Xx92zvHQ"};
                const v40 = gc();
                const v41 = v24.__proto__;
                const v42 = {isExtensible:eval,setPrototypeOf:v26,has:v25,preventExtensions:v25,getPrototypeOf:v25,call:Object,apply:v25,ownKeys:v25,set:v30,deleteProperty:v27,getOwnPropertyDescriptor:Number,construct:eval};
                const v44 = new Proxy(Number,v42);
            }
            return v24;
        }
        const v45 = {deleteProperty:v25,set:v25,getPrototypeOf:v25,call:v25,preventExtensions:v25,isExtensible:v25,construct:v25,get:v25,ownKeys:v25,setPrototypeOf:v25,has:v25};
        const v47 = new Proxy(v24,v45);
        v47[1] = "MIN_VALUE";
        function v48(v49,v50,v51,v52,...v53) {
        }
        for (let v57 = 0; v57 < 6; v57++) {
        }
        const v58 = v20 + 1;
        let v60 = 0;
        const v62 = v48(13.37,"boolean",Int32Array,"boolean",v15,8,v20,v60);
    }
}
const v63 = v13();
}
%NeverOptimizeFunction(main);
main();
