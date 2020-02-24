function main() {
const v2 = [1337,1337];
const v3 = {d:Float32Array};
const v6 = [13.37,13.37,13.37,13.37];
for (let v10 = 0; v10 < 3; v10++) {
    for (const v11 in v3) {
        for (const v12 in v2) {
            const v14 = {set:gc,get:gc};
            const v16 = Object.defineProperty(v6,"toString",v14);
            const v19 = [1337,1337,1337,1337,1337];
            function v20(v21,v22,v23,v24) {
                'use strict'
                try {
                    v24[3] = v24;
                } catch(v25) {
                    const v29 = [13.37,13.37,13.37];
                    const v31 = [1337,1337,1337];
                    const v32 = [parseFloat,v29];
                    const v33 = {__proto__:v31,e:-1529057902,d:v31,a:v32,length:parseFloat};
                    const v35 = [13.37,13.37];
                }
                return v19;
            }
            const v36 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
            const v38 = new Proxy(v19,v36);
            v38[1] = "MIN_VALUE";
        }
    }
}
for (let v42 = 0; v42 < 100; v42++) {
}
}
%NeverOptimizeFunction(main);
main();
