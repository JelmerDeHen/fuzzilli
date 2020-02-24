function main() {
const v4 = [13.37];
const v5 = "MMNqztP/w/".padStart();
for (const v6 of v5) {
    const v7 = v4.__proto__;
}
let v8 = 13.37;
const v9 = {b:-65537,e:"MMNqztP/w/",valueOf:v8,constructor:Function};
const v11 = Symbol.replace;
const v13 = [1337,1337,1337,1337];
const v14 = [v4,Function,-65537,"MMNqztP/w/"];
const v15 = {length:v4,b:Function,constructor:v14,c:v14,__proto__:-65537};
const v16 = {length:v4};
let v17 = v14;
const v19 = RegExp();
const v20 = {};
const v22 = [1337,1337,1337,1337,1337];
function v23(v24,v25) {
    const v28 = [1337,1337,"MIN_VALUE",1337,1337];
    function v29(v30,v31,v32,v33) {
        'use strict'
        try {
            let v36 = 0;
            while (v36 <= 4) {
                const v37 = v36 + 1;
                v36 = v37;
            }
            v33[3] = 0;
        } catch(v38) {
            const v39 = [];
            const v40 = {a:v39};
            const v41 = {__proto__:v33,constructor:v40,length:v39};
        }
        return v33;
    }
    const v42 = {deleteProperty:v29,set:v29,getPrototypeOf:v29,call:v29,preventExtensions:v29,isExtensible:v29,construct:v29,get:v29,ownKeys:v29,setPrototypeOf:1337,has:v29};
    const v44 = new Proxy(v28,v42);
    v44[1] = "MIN_VALUE";
}
const v45 = v22.forEach(v23);
}
%NeverOptimizeFunction(main);
main();
