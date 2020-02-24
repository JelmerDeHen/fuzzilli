function main() {
const v3 = [13.37];
const v5 = [1337,1337,1337,1337];
const v6 = [];
const v7 = {c:-65536,toString:v6,valueOf:"object"};
const v8 = {};
for (const v10 in "object") {
    const v13 = [1337,1337,1337,1337,1337];
    function v14(v15,v16,v17,v18) {
        'use strict'
        try {
            v18[3] = v18;
        } catch(v19) {
            let v20 = v16;
            const v21 = v20 + 1;
            const v24 = 2.2250738585072014e-308 / 3890419937;
            const v28 = [13.37];
            const v30 = ["ZGVqTqNzbz"];
            const v31 = {__proto__:v30,b:v28,a:v30,e:v28,d:Int8Array,c:1337};
            let v34 = -5.0;
            const v37 = [34333.635571992956,34333.635571992956,34333.635571992956,v31];
            const v39 = [v37,-2,-4294967297];
            const v43 = [2.0,8,-4294967296];
            let v46 = -2;
            while (v46 < 1337) {
                const v47 = v43.push();
                const v48 = v46 + 1;
                v46 = v48;
            }
            const v49 = [-4294967296,2.2250738585072014e-308,2.2250738585072014e-308,2.2250738585072014e-308,2.2250738585072014e-308];
            let v50 = v49;
            const v51 = v39[v50];
            const v52 = new Int32Array();
            const v53 = v52.sort();
            const v54 = [v24];
            let v55 = v54;
        }
        return v13;
    }
    const v56 = {deleteProperty:v14,set:v14,getPrototypeOf:v14,call:v14,preventExtensions:v14,isExtensible:v14,construct:v14,get:v14,ownKeys:v14,setPrototypeOf:v14,has:v14};
    const v58 = new Proxy(v13,v56);
    v58[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
