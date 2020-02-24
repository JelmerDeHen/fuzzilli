function main() {
const v1 = [13.37];
let v3 = 1337;
const v7 = [13.37];
const v9 = [1337,1337,1337];
const v10 = ["N*d4*m/H0F","N*d4*m/H0F",v9];
const v11 = {constructor:v9,b:-1662380622,c:v7,a:v7,__proto__:v1,constructor:v10};
const v13 = [13.37,13.37,v11,13.37];
for (const v14 of v13) {
}
const v17 = [1337,1337,1337,1337,1337];
function v18(v19,v20,v21,v22) {
    'use strict'
    try {
        for (let v27 = 0; v27 < 100; v27++) {
            const v28 = v18();
        }
        const v29 = [v20];
        let v30 = 0;
        let v32 = 10;
        const v33 = 13.37 / 1337;
        let v35 = 0;
        const v36 = v35 + 1;
        const v37 = v30 + 1;
        let v39 = 0;
        let v41 = 0;
        for (let v45 = 0; v45 < 100; v45++) {
        }
    } catch(v46) {
    }
}
const v47 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
const v49 = new Proxy(v17,v47);
v49[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
