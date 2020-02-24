function main() {
const v4 = [13.37];
const v6 = [1337,1337,1337,1337,1337];
const v7 = [1337];
const v8 = {constructor:"jKfPwPdE4j",__proto__:1337,b:"jKfPwPdE4j",toString:13.37};
const v9 = {b:128,c:13.37};
let v10 = WeakMap;
const v13 = [1337,1337,1337];
const v14 = [1337,v13,Int8Array];
const v15 = v13.__proto__;
const v16 = new Int8Array();
let v18 = 0;
const v19 = v18 + 1;
function v20(v21,v22) {
    for (const v24 in "boolean") {
        let v27 = 0;
        do {
            let v29 = 0;
            const v30 = v29 + 1;
            const v33 = [1337,1337,"MIN_VALUE",1337,1337];
            function v34(v35,v36,v37,v38) {
                'use strict'
                try {
                    let v41 = 0;
                    while (v41 < 4) {
                        const v42 = v41 + 1;
                        v41 = v42;
                    }
                    v38[3] = v38;
                } catch(v43) {
                    let v45 = eval;
                    const v46 = [];
                    const v47 = {a:v46};
                    const v48 = {__proto__:v38,constructor:v47,length:v46};
                    const v49 = v45 in v48;
                }
                return v38;
            }
            const v50 = {deleteProperty:v34,set:v34,getPrototypeOf:v34,call:v34,preventExtensions:v34,isExtensible:v34,construct:v34,get:v34,ownKeys:v34,setPrototypeOf:1337,has:v34};
            const v52 = new Proxy(v33,v50);
            v52[1] = "MIN_VALUE";
            break;
            let v53 = v24;
            for (let v57 = 0; v57 < 100; v57++) {
            }
            let v58 = v27;
            const v59 = v58 % v29;
            const v60 = v27 + 1;
        } while (v27 < 8);
    }
}
const v61 = v20();
const v62 = Int8Array();
const v63 = v20();
}
%NeverOptimizeFunction(main);
main();
