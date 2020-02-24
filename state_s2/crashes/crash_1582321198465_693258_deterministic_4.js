function main() {
const v4 = [13.37,13.37,13.37];
const v6 = [1337];
const v7 = [v4,4096];
const v8 = {toString:v7,length:1337,valueOf:Uint8ClampedArray,c:"yDYzMC2g+1",constructor:"yDYzMC2g+1"};
const v9 = {__proto__:Uint8ClampedArray,c:"yDYzMC2g+1",toString:v7};
let v10 = 1337;
const v14 = [13.37];
const v16 = [1337,1337,1337];
const v17 = ["N*d4*m/H0F","N*d4*m/H0F",v16];
const v18 = {constructor:v16,b:-1662380622,c:v14,a:v14,__proto__:1337,constructor:v17};
const v20 = [13.37,13.37,v18,13.37];
for (const v21 of v20) {
    let v23 = undefined;
    let v25 = 1;
    let v26 = v25;
    const v27 = v26 % v25;
    const v28 = ~v27;
    const v31 = [1337,1337,"MIN_VALUE",1337,1337];
    function v32(v33,v34,v35,v36) {
        'use strict'
        try {
            let v38 = 0;
            const v39 = v38 + 1;
            v36[3] = v36;
        } catch(v40) {
            const v41 = [];
            const v42 = {a:v41};
            const v43 = {__proto__:v36,constructor:v42,length:v41};
        }
        return v36;
    }
    const v44 = {deleteProperty:v32,set:v32,getPrototypeOf:v32,call:v32,preventExtensions:v32,isExtensible:v32,construct:v32,get:v32,ownKeys:v32,setPrototypeOf:1337,has:v32};
    const v46 = new Proxy(v31,v44);
    v46[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
