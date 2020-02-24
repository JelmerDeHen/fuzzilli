function main() {
const v4 = [13.37,13.37];
const v6 = [1337,1337,1337,1337,1337];
const v7 = [Number];
const v8 = {a:v7,__proto__:v4,e:-5133536,b:Number};
const v9 = {e:v8,a:"constructor"};
let v10 = "constructor";
for (const v12 in "object") {
    const v13 = !v12;
    let v14 = v13;
    const v17 = Number();
    let v20 = 0;
    while (v20 < 5) {
        const v21 = Number();
        const v22 = v20 + 1;
        v20 = v22;
    }
    const v23 = [1337,1337,1337,1337,1337];
    function v24(v25,v26,v27,v28) {
        'use strict'
        try {
            v28[3] = v28;
        } catch(v29) {
            const v36 = {length:"__proto__"};
            const v37 = {constructor:13.37,length:13.37,__proto__:v36,toString:Number,a:"__proto__"};
            const v43 = "object".constructor;
            const v44 = {apply:v43,deleteProperty:gc,preventExtensions:Number,ownKeys:v43,isExtensible:Object,getOwnPropertyDescriptor:Number,setPrototypeOf:Number,construct:Number,defineProperty:Number,has:Symbol,set:Number};
            const v46 = new Proxy(v37,v44);
            const v47 = Number[4088076774];
            const v49 = [1337];
            let v50 = v49;
            let v51 = v50;
            let v53 = undefined;
        }
        return v28;
    }
    const v54 = {deleteProperty:v24,set:v24,getPrototypeOf:v24,call:v24,preventExtensions:v24,isExtensible:v24,construct:v24,get:v24,ownKeys:v24,setPrototypeOf:v24,has:v24};
    const v56 = new Proxy(v23,v54);
    v56[1] = "MIN_VALUE";
}
for (let v60 = 0; v60 < 100; v60++) {
}
}
%NeverOptimizeFunction(main);
main();
