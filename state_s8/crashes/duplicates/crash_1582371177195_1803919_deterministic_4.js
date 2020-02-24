function main() {
const v4 = [13.37,13.37];
const v6 = [1337,1337,1337,1337];
const v7 = [v4,v6,v4,ArrayBuffer];
const v8 = {d:-2457924242,a:"number",toString:v7,__proto__:-2457924242,b:13.37,valueOf:"number",length:13.37,e:v6};
const v9 = {valueOf:-2457924242,__proto__:v7,toString:"number",d:v4};
const v11 = new Uint8ClampedArray();
const v12 = v11.slice();
for (const v14 in "object") {
    const v17 = [1337,1337,1337,1337,1337];
    function v18(v19,v20,v21,v22) {
        'use strict'
        try {
            v22[3] = v22;
        } catch(v23) {
            let v25 = 0;
            const v27 = [13.37,13.37,13.37,13.37,13.37];
            function v28(v29,v30,v31,v32) {
                'use strict'
                const v35 = Object.freeze(this);
            }
            const v36 = v27.filter(v28,v27);
            const v37 = v25 + 1;
            const v40 = [1337,1337,1337,1337,"d"];
            const v42 = new Uint8Array();
        }
        return v17;
    }
    const v43 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
    const v45 = new Proxy(v17,v43);
    v45[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
