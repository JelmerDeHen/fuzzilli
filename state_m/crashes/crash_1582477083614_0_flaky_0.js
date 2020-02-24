function main() {
const v4 = [13.37,13.37];
const v6 = [1337];
const v7 = [13.37];
const v8 = {e:-3273191522,b:"__proto__",__proto__:v6,a:"__proto__",length:1337,d:Map};
const v9 = {c:13.37,toString:v8,a:v6,constructor:Map,d:"__proto__"};
let v10 = 1337;
for (const v12 in "object") {
    const v15 = [1337,1337,1337,1337,1337];
    function v16(v17,v18,v19,v20) {
        'use strict'
        try {
            v20[3] = v20;
        } catch(v21) {
            const v23 = [13.37,13.37,13.37,13.37,13.37];
            function v24(v25,v26,v27,v28) {
                'use strict'
                const v31 = [13.37,13.37,13.37,v20,13.37];
                const v33 = [1337,v31,13.37,6];
                const v37 = Object.freeze(this,"a",v33);
                return v18;
            }
            const v43 = [1337];
            const v44 = {__proto__:v43,a:v43,constructor:Number,e:13.37,length:"number",b:13.37};
            const v45 = 13.37 && v44;
            let v48 = 127;
            const v51 = String.fromCharCode(v48,3085701344);
            let v53 = "p8Xp0R1moN";
            v53 = v51;
            const v54 = JSON.stringify(v53);
            v44[v54] = 13.37;
            let v56 = v45;
            const v57 = JSON.stringify(v56);
            const v59 = JSON.parse(v57,2435262485);
            const v60 = v23.map(v24,v23);
        }
        return v15;
    }
    const v61 = {deleteProperty:v16,set:v16,getPrototypeOf:v16,call:v16,preventExtensions:v16,isExtensible:v16,construct:v16,get:v16,ownKeys:v16,setPrototypeOf:v16,has:v16};
    const v63 = new Proxy(v15,v61);
    v63[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
