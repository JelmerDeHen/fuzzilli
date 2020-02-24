function main() {
const v3 = [13.37,13.37];
const v5 = [1337,1337,1337,1337];
const v6 = ["toString",13.37,v3,v3];
const v7 = {b:v3,__proto__:v6,valueOf:this};
const v8 = {a:v3,__proto__:v6};
let v9 = "toString";
const v12 = [13.37];
function v16(v17,v18) {
    for (let v20 = undefined; v20 === undefined; v20++) {
        const v24 = [13.37,13.37,13.37,13.37,13.37];
        const v26 = [1337,1337,1337,1337];
        const v27 = [v24,1337,13.37];
        const v28 = {b:"toStringTag",c:v27};
        const v29 = {valueOf:v26,length:eval};
        let v30 = eval;
        for (const v33 in "object") {
            const v36 = [1337,1337,1337,1337,1337];
            function v37(v38,v39,v40,v41) {
                'use strict'
                try {
                    v41[3] = v41;
                } catch(v42) {
                    const v48 = Math.hypot(-1970853828,13.37,"boolean",DataView);
                    const v52 = [v37];
                    const v54 = [255,255,255];
                    const v55 = {a:255,toString:arguments,c:v52,__proto__:v54,valueOf:DataView,constructor:"gM8oAednYn"};
                }
                return v36;
            }
            const v56 = {deleteProperty:v37,set:v37,getPrototypeOf:v37,call:v37,preventExtensions:v37,isExtensible:v37,construct:v37,get:v37,ownKeys:v37,setPrototypeOf:v37,has:v37};
            const v58 = new Proxy(v36,v56);
            v58[1] = "MIN_VALUE";
        }
        const v59 = [1337,1337,1337];
        let v62 = "jZZhI/kPfh";
        const v64 = [Infinity,Infinity,Infinity];
        const v65 = [v62,v64];
        const v66 = v65.toLocaleString();
        const v67 = {c:v66,length:2147483649};
        let v68 = Infinity;
        let v69 = v67;
    }
}
for (let v73 = 0; v73 < 100; v73++) {
    const v74 = v16();
}
const v75 = [v12,1337];
const v76 = {valueOf:v75,__proto__:v75};
let v79 = undefined;
const v80 = v79.toString(13.37,-2147483647,v76);
}
%NeverOptimizeFunction(main);
main();
