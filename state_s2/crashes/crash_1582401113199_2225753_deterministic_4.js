function main() {
const v3 = [13.37,13.37];
const v5 = [1337,1337,1337,1337,1337];
const v6 = [1337];
const v7 = {a:13.37,e:"symbol",c:-2173367666,length:v5};
const v8 = {a:v3,c:1337,e:"symbol"};
let v9 = v6;
let v11 = 0;
const v14 = [1337,1337];
const v18 = new ArrayBuffer(1337);
const v19 = v18.slice();
let v21 = undefined;
const v22 = new DataView(v19,v14,v21);
function v23(v24,v25) {
    let v29 = 0;
    let v32 = -2;
    while (v32 < 1337) {
        const v33 = v32 + 1;
        v32 = v33;
    }
    do {
        const v34 = 3156875969 <= 8;
        let v35 = v34;
        const v36 = v22.setUint8(v35,2454811828);
        let v37 = v29;
        const v38 = v35 + 1;
        const v39 = v29 + 1;
        const v42 = arguments + 1;
        const v44 = [1337,1337,"MIN_VALUE",1337,1337];
        function v45(v46,v47,v48,v49) {
            'use strict'
            try {
                let v52 = 0;
                while (v52 <= 4) {
                    const v53 = v52 + 1;
                    v52 = v53;
                }
                v49[3] = 0;
            } catch(v54) {
                let v55 = v42;
                const v56 = [];
                const v57 = {a:v56};
                const v58 = {__proto__:v49,constructor:v57,length:v56};
            }
            return v49;
        }
        const v59 = {deleteProperty:v45,set:v45,getPrototypeOf:v45,call:v45,preventExtensions:v45,isExtensible:v45,construct:v45,get:v45,ownKeys:v45,setPrototypeOf:1337,has:v45};
        const v61 = new Proxy(v44,v59);
        v61[1] = "MIN_VALUE";
    } while (v29 < 8);
}
const v63 = [1337];
let v64 = v63;
const v65 = v23(v64);
}
%NeverOptimizeFunction(main);
main();
