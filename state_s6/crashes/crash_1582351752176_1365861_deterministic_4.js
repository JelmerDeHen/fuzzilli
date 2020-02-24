function main() {
const v1 = [13.37,13.37,13.37,13.37];
const v3 = [1337,1337,1337,1337,1337];
const v4 = [];
for (const v6 in "object") {
    const v9 = [1337,v6,1337,1337,1337];
    function v10(v11,v12,v13,v14) {
        'use strict'
        try {
            v14[3] = v14;
        } catch(v15) {
            let v17 = 0;
            const v20 = [-2588121454];
            let v21 = v20;
            const v24 = [13.37,13.37,13.37,13.37];
            const v26 = [v24,-2,-4294967297];
            const v30 = [1.7976931348623157e+308,1337,2.2250738585072014e-308];
            let v34 = 255;
            while (v34 < 1337) {
                const v35 = v30.push(v21);
                const v36 = v34 + 1;
                v34 = v36;
            }
            const v37 = [-1242988596,2.2250738585072014e-308,2.2250738585072014e-308,2.2250738585072014e-308,2.2250738585072014e-308];
            let v38 = v37;
            const v39 = v26[v38];
            const v40 = new Int16Array(v30);
            const v41 = v40.sort();
            const v42 = v17 + 1;
            const v44 = 2.2250738585072014e-308 / v42;
        }
        return v9;
    }
    const v45 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
    const v47 = new Proxy(v9,v45);
    v47[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
