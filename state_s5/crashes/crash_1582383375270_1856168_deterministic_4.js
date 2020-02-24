function main() {
const v4 = [1337];
const v5 = [13.37,1337,13.37];
const v6 = {d:1337,e:v5};
const v10 = [1337,1337,1337,1337,1337];
function v11(v12,v13,v14,v15) {
    'use strict'
    try {
        const v17 = v11(6,13.37,6,v15);
        const v18 = {a:v4,b:v12,...v14,..."number",...512};
        const v19 = "number".replace(v15);
        const v20 = v6.__proto__;
        let v22 = 0;
        let v23 = v19;
        const v24 = new Float32Array();
        let v25 = v18;
        try {
            let v27 = 0;
        } catch(v28) {
            const v29 = v11 > v28;
            let v30 = v4;
            const v31 = v17(...1337,v13,...v23,v25);
        }
        const v32 = v22 + 1;
        this[1337] = "number";
    } catch(v34) {
    }
}
const v35 = {deleteProperty:v11,set:v11,getPrototypeOf:v11,call:v11,preventExtensions:v11,isExtensible:v11,construct:v11,get:v11,ownKeys:v11,setPrototypeOf:v11,has:v11};
const v37 = new Proxy(v10,v35);
v37[1] = "number";
}
%NeverOptimizeFunction(main);
main();
