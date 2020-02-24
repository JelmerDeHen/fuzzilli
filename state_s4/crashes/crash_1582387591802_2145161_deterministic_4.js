function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v4 = [1337];
const v5 = [1337,1073741824,v4,v4];
const v6 = {a:v5,e:1073741824,valueOf:v4,constructor:1073741824};
const v7 = {a:v6,e:v6,d:v2};
for (const v9 in "object") {
    const v12 = [1337,1337,1337,1337,1337];
    function v13(v14,v15,v16,v17) {
        'use strict'
        try {
            const v19 = new Float32Array();
            v17[3] = v17;
        } catch(v20) {
            const v22 = Symbol.toPrimitive;
            const v25 = ["EXkcpBKht7"];
            let v26 = "EXkcpBKht7";
            const v27 = v25.includes(v7,-2695425644);
            const v28 = [v17,v13];
            const v30 = "unscopable".concat();
            const v32 = [1337,Symbol];
            const v34 = [13.37,13.37,13.37];
            const v35 = v34.toString();
            const v38 = [13.37,13.37];
            const v40 = [1337];
            const v41 = {b:v38,c:v32,valueOf:-9007199254740993,d:v35,constructor:1337,__proto__:v40};
            let v42 = v41;
            const v44 = "E".padEnd();
            const v45 = v44.replace();
            const v48 = new Proxy(v42,Object);
            const v49 = Object.freeze();
            const v51 = [1337,1337,1337,1337];
            const v53 = [13.37,13.37,13.37,13.37];
            const v56 = [v53,13.37,13.37];
            const v57 = {length:1337,toString:v56,__proto__:v51};
            const v59 = [1337,1337,1337,1337,1337];
            const v60 = [v59];
        }
        return v12;
    }
    const v61 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:1337,has:v13};
    const v63 = new Proxy(v12,v61);
    v63[1] = "MIN_VALUE";
}
const v65 = eval();
}
%NeverOptimizeFunction(main);
main();
