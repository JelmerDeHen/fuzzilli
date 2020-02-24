function main() {
const v3 = "object".substring();
const v4 = {};
const v5 = [v4,v4];
const v7 = [13.37,13.37];
const v9 = [1337,1337,1337,1337];
const v10 = [13.37,-614821924,v7];
const v11 = {b:v9};
const v14 = [13.37,13.37,-4294967296];
const v17 = [1337,1337,1337,1337,1337];
function v18(v19,v20,v21,v22) {
    'use strict'
    let v24 = 0;
    try {
        let v27 = 0;
        do {
            const v28 = v18(0,v5,Reflect);
            const v29 = v27 + 1;
            v27 = v29;
        } while (v27 < 10);
        v10.d = v18;
        const v30 = v7.__proto__;
        for (const v31 in v22) {
            function v33(v34,v35,v36,v37,...v38) {
            }
            const v39 = {c:v30,...13.37,...v3,...v14};
            const v40 = {e:v7,toString:v33,a:1337,b:v30};
            let v41 = 13.37;
            if (v19) {
                let v42 = v30;
                v41 = v31;
            } else {
                v11[-614821924] = v7;
                v41 = 13.37;
            }
            const v43 = v33(1337);
            const v45 = Uint16Array();
            let v48 = 0;
            while (v48 < 9) {
            }
            for (const v49 of v22) {
            }
        }
    } catch(v50) {
    }
}
const v51 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v14,__proto__:v18,setPrototypeOf:v18,has:v18};
const v53 = new Proxy(v17,v51);
v53[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
