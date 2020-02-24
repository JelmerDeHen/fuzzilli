function main() {
const v4 = [13.37,13.37,13.37,13.37];
const v6 = [1337,1337,1337,1337];
const v7 = ["number",13.37,v6];
const v8 = {b:"number"};
const v9 = {__proto__:-2855145785,d:Uint16Array,e:v6,toString:1337,c:-2855145785};
let v10 = v8;
const v13 = [1337,1337,1337,1337,1337];
function v14(v15,v16,v17,v18) {
    'use strict'
    try {
        let v21 = 0;
        while (v21 < 5) {
            const v22 = (0)[5];
            const v23 = v21 + 1;
            v21 = v23;
        }
        const v24 = [v15,v13,0,"MIN_VALUE"];
        for (let v28 = 0; v28 < 100; v28++) {
            const v29 = v14(v10,5);
        }
    } catch(v30) {
        const v32 = [13.37,13.37,13.37];
    }
}
const v33 = {deleteProperty:v14,set:v14,getPrototypeOf:v14,call:v14,preventExtensions:v14,isExtensible:v14,construct:v14,get:v14,ownKeys:v14,setPrototypeOf:v14,has:v14};
const v35 = new Proxy(v13,v33);
v35[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
