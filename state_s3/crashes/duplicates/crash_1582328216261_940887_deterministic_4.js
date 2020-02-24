function main() {
const v4 = [13.37,13.37,13.37];
const v6 = [1337,1337,1337,1337,1337];
const v7 = [13.37,13.37];
const v8 = {__proto__:1337,a:v6,constructor:v4,valueOf:v7};
const v9 = {a:v6,length:"number",e:v6,constructor:v8,__proto__:"number",toString:WeakSet,valueOf:-2798452566,b:v4};
let v10 = -2798452566;
const v12 = [13.37,13.37,13.37];
for (const v14 in "object") {
    const v17 = [1337,1337,1337,1337,1337];
    function v18(v19,v20,v21,v22) {
        'use strict'
        try {
            v22[3] = v22;
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
