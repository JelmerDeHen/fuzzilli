function main() {
const v4 = [1337];
const v5 = {d:13.37,a:"EPSILON",e:-4294967295,__proto__:1337};
const v6 = {c:v4,valueOf:13.37,a:1337,e:1337,d:v5};
const v9 = [1337,1337,v6];
const v12 = [1337,Infinity,1337];
const v13 = [undefined,v12];
const v14 = v13.toLocaleString();
let v15 = v14;
const v16 = [v9,..."jZZhI/kPfh",...v15];
for (const v18 in "object") {
    const v21 = [1337,1337,1337,1337,1337];
    function v22(v23,v24,v25,v26) {
        'use strict'
        try {
            const v28 = new Float32Array();
            v26[3] = v26;
        } catch(v29) {
            const v31 = Symbol.toPrimitive;
            const v34 = ["EXkcpBKht7"];
            let v35 = "EXkcpBKht7";
            const v36 = v34.includes(v35,-2695425644);
            const v38 = [1337,1337];
            const v40 = [13.37,13.37,13.37];
            const v41 = v40.toString();
            const v44 = [13.37,13.37];
            const v46 = [1337];
            const v47 = {b:v44,c:v38,valueOf:-9007199254740993,d:v41,constructor:1337,__proto__:v46};
            let v48 = v47;
            const v51 = new Proxy(v48,Object);
            const v52 = Object.getOwnPropertyDescriptor(v51);
        }
        return v18;
    }
    const v53 = {deleteProperty:v22,set:v22,getPrototypeOf:v22,call:v22,preventExtensions:v22,isExtensible:v22,construct:v22,get:v22,ownKeys:v22,setPrototypeOf:1337,has:v22};
    const v55 = new Proxy(v21,v53);
    v55[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
