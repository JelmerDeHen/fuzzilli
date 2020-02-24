function main() {
for (const v2 in "object") {
    const v5 = [];
    const v6 = {length:"constructor",e:1337,c:v5,a:1337,toString:"symbol"};
    function v8(v9,v10,v11,v12) {
        'use strict'
        const v15 = [1337,1337,1337,1337,1337];
        function v16(v17,v18,v19,v20) {
            'use strict'
            try {
                const v22 = new Uint32Array();
                const v23 = v22.slice();
                const v25 = new Float32Array();
                v20[3] = v20;
            } catch(v26) {
                const v28 = Symbol.toPrimitive;
                const v29 = v15.reduceRight(v16);
                let v33 = this;
                let v34 = v33;
                let v35 = "jZZhI/kPfh";
                const v36 = ["EXkcpBKht7"];
                let v37 = "EXkcpBKht7";
                const v38 = v36.includes();
                const v40 = [v20,1337];
                const v42 = "unscopable".concat();
            }
            return v15;
        }
        const v43 = {deleteProperty:v16,set:v16,getPrototypeOf:v16,call:v16,preventExtensions:v16,isExtensible:v16,construct:v16,get:v16,ownKeys:v16,setPrototypeOf:1337,has:v16};
        const v45 = new Proxy(v15,v43);
        v45[1] = "MIN_VALUE";
    }
    const v46 = {deleteProperty:v8,set:v8,getPrototypeOf:v8,call:v8,preventExtensions:v8,isExtensible:v8,construct:v8,get:v8,ownKeys:v8,setPrototypeOf:v8,has:v8};
    const v48 = new Proxy(v6,v46);
    v48[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
