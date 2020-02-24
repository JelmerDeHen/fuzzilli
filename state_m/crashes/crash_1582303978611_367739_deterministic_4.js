function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v4 = [1337,1337,1337,1337,1337];
const v5 = [JSON,v2,v2];
for (const v8 in "object") {
    const v11 = [1337,1337,1337,1337,1337];
    function v12(v13,v14,v15,v16) {
        'use strict'
        try {
            v16[3] = v16;
        } catch(v17) {
            const v20 = [];
            const v21 = {length:1337,e:1337,c:v20,a:1337,toString:"symbol"};
            const v25 = [13.37];
            const v27 = [0,13.37];
            const v28 = {valueOf:1337,constructor:v25,toString:"MAX_VALUE",__proto__:0};
            let v29 = v28;
            const v34 = [1337];
            const v35 = {__proto__:v34,a:v34,constructor:Number,e:13.37,length:"number",b:13.37};
            const v38 = [-1825918256];
            let v39 = v38;
            const v41 = [1337,Infinity,Infinity];
            v41[7] = v35;
            const v42 = [v39,v41];
            const v43 = v42.toLocaleString();
            const v44 = {c:v43,d:v41};
            let v47 = 0;
            let v48 = v44;
            const v49 = [0,v48,v48];
            v47 = v49;
            const v50 = JSON.stringify(v47);
            const v52 = JSON.parse(v50,2435262485);
            function v53(v54,v55,v56,v57) {
                'use strict'
            }
            const v58 = {deleteProperty:v53,set:v53,getPrototypeOf:v53,call:v53,preventExtensions:v53,isExtensible:v53,construct:v53,get:v53,ownKeys:v53,setPrototypeOf:v53,has:v53};
            const v60 = new Proxy(v21,v58);
        }
        return "MIN_VALUE";
    }
    const v61 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:v12,has:v12};
    let v64 = 0;
    const v65 = v64 + 1;
    const v66 = new Proxy(v11,v61);
    v66[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
