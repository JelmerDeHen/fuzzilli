function main() {
const v3 = [13.37];
const v5 = [1337,1337,1337,1337];
const v6 = [13.37,-2147483648,v3];
const v7 = {__proto__:"boolean",constructor:v6,e:-2147483648,toString:v6,b:v6,a:1337};
const v8 = {__proto__:-2147483648,b:"boolean",c:v6,valueOf:v5,d:13.37};
let v9 = 1337;
const v11 = [13.37,13.37,13.37];
for (const v14 in "object") {
    const v17 = [1337,1337,1337,1337,1337];
    function v18(v19,v20,v21,v22) {
        'use strict'
        try {
            v22[3] = 6;
        } catch(v23) {
            function v24(v25,v26) {
                for (const v28 in "ruHq55V2**") {
                    for (const v30 of "pvU0UUjoya") {
                        const v33 = [13.37,13.37];
                        let v34 = v33;
                        const v36 = String(v34);
                        for (const v37 of "7f7Rh5ttYX") {
                        }
                    }
                }
            }
            const v38 = new v24();
        }
        return v17;
    }
    const v39 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
    const v41 = new Proxy(v17,v39);
    v41[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
