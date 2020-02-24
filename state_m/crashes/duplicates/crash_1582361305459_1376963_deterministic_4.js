function main() {
const v3 = "boolean".__proto__;
for (const v4 of "boolean") {
}
const v6 = [13.37,13.37];
const v8 = [1337,1337];
const v9 = [];
const v10 = {e:13.37,a:1337,valueOf:v9,d:v6,b:v9};
const v11 = {valueOf:NaN,b:NaN,d:1,toString:v10};
let v12 = v10;
const v14 = [13.37,13.37,13.37];
const v16 = [1337,1337,1337,1337];
const v17 = [v16,1337];
for (const v19 in "object") {
    const v22 = [1337,1337,1337,1337,1337];
    function v23(v24,v25,v26,v27) {
        'use strict'
        try {
            v27[3] = v27;
        } catch(v28) {
            function v29(v30,v31) {
                for (const v33 in "ruHq55V2**") {
                    for (const v35 of "pvU0UUjoya") {
                        const v38 = [13.37,13.37];
                        let v39 = v38;
                        const v41 = String(v39);
                        for (const v42 of "7f7Rh5ttYX") {
                        }
                    }
                }
            }
            const v43 = v29();
        }
        return v22;
    }
    const v44 = {deleteProperty:v23,set:v23,getPrototypeOf:v23,call:v23,preventExtensions:v23,isExtensible:v23,construct:v23,get:v23,ownKeys:v23,setPrototypeOf:v23,has:v23};
    const v46 = new Proxy(v22,v44);
    v46[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
