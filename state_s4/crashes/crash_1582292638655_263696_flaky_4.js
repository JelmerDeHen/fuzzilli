function main() {
const v4 = [13.37,13.37];
const v6 = [1337,1337,1337,1337];
const v7 = [1337,13.37,arguments,1337];
const v8 = {valueOf:-65537,__proto__:v4,d:"o+OXzZVhRX",c:-65537};
const v9 = {__proto__:v6,b:v4,d:v7,e:v7,c:13.37};
let v10 = v9;
for (const v12 in "object") {
    const v15 = [1337,1337,1337,1337,1337];
    function v16(v17,v18,v19,v20) {
        'use strict'
        try {
            v20[3] = v20;
        } catch(v21) {
            try {
                const v24 = [13.37,13.37];
                const v25 = v24[1024];
                const v26 = {has:Function,construct:v25,toString:v25,deleteProperty:Function,setPrototypeOf:v21,preventExtensions:v25,isExtensible:v25,call:v25,set:Function,getOwnPropertyDescriptor:Function};
                const v28 = new Proxy(v24,v26);
                for (const v29 in v28) {
                }
            } catch(v30) {
            }
            function v31(v32,v33) {
                for (const v35 in "boolean") {
                    let v38 = 0;
                    do {
                        const v39 = v38 + 1;
                        v38 = v39;
                    } while (v38 < 8);
                }
                return v6;
            }
            const v40 = v31();
            const v42 = [1337,1337];
            const v46 = [13.37,13.37,13.37,13.37];
            const v48 = [v46,-2,v42];
            const v51 = [2.220446049250313e-16,2.220446049250313e-16,2.220446049250313e-16,-4294967297];
            const v53 = [240796.61673879973,4294967295,v51];
            for (const v54 of v42) {
                v53[256] = v54;
            }
            let v57 = 0;
            while (v57 < 1337) {
                const v58 = v53.push(v57);
                const v59 = v57 + 1;
                v57 = v59;
            }
            let v60 = 2.220446049250313e-16;
            const v61 = v48[v60];
            const v62 = new Int16Array(v53);
            const v63 = v62.sort(v61);
        }
        return v15;
    }
    const v64 = {deleteProperty:v16,set:v16,getPrototypeOf:v16,call:v16,preventExtensions:v10,isExtensible:v16,construct:v16,get:v16,ownKeys:v16,setPrototypeOf:v16,has:v16};
    const v66 = new Proxy(v15,v64);
    v66[1] = "MIN_VALUE";
}
let v72 = 0;
const v73 = v72 + 1;
v72 = v73;
}
%NeverOptimizeFunction(main);
main();
