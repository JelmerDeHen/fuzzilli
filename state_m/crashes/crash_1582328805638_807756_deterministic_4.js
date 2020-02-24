function main() {
const v4 = [13.37];
const v6 = [1337,1337,1337];
const v7 = [13.37,1337];
const v8 = {__proto__:1337,d:129,constructor:v6,a:v6,toString:13.37};
const v9 = {__proto__:129,c:v4,constructor:v8,toString:1337,e:1337};
let v10 = Boolean;
for (const v12 in "object") {
    let v14 = "MIN_VALUE";
    const v15 = Boolean | "MIN_VALUE";
    const v16 = v14[v12];
    const v17 = v12 << "MIN_VALUE";
    const v18 = {valueOf:"MIN_VALUE",b:"match"};
    let v21 = 0;
    while (v21 < 10) {
        const v22 = {constructor:v4,a:v12,...13.37,...v14};
        const v23 = v21 + 1;
        v21 = v23;
    }
    const v25 = [1337,1337,1337,1337,1337];
    function v26(v27,v28,v29,v30) {
        'use strict'
        try {
            let v33 = 0;
            while (v33 < 6) {
                const v34 = v10();
                const v35 = v33 + 1;
                v33 = v35;
            }
            const v36 = v28[4294967296];
            const v37 = [6,v33,v18,v28];
            v30[3] = v30;
        } catch(v38) {
            let v40 = 0;
            const v42 = [13.37];
            const v45 = 2.2250738585072014e-308 / 3890419937;
            const v46 = [v45];
            let v47 = v46;
            const v49 = Math.acosh(v47);
        }
        return v25;
    }
    const v50 = {deleteProperty:v26,set:v26,getPrototypeOf:v26,call:v26,preventExtensions:v26,isExtensible:v26,construct:v26,get:v26,ownKeys:v26,setPrototypeOf:v26,has:v26};
    const v52 = new Proxy(v25,v50);
    v52[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
