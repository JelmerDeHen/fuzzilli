function main() {
const v4 = [1337];
const v5 = [13.37,1337,13.37];
let v7 = 0;
const v8 = {d:1337,e:v5};
const v9 = {valueOf:v5,__proto__:512,a:v4,length:13.37,b:v8,constructor:v8,toString:Float32Array};
let v10 = v9;
for (const v12 in "object") {
    const v15 = [1337,1337,1337,1337,1337];
    function v16(v17,v18,v19,v20) {
        'use strict'
        try {
            v20[3] = v20;
            let v22 = 0;
        } catch(v23) {
            let v25 = 0;
            const v27 = [13.37,13.37,13.37,13.37,13.37];
            function v28(v29,v30,v31,v32) {
                'use strict'
                const v35 = Object.freeze(this);
            }
            const v36 = v27.filter(v28,v27);
            const v37 = v25 + 1;
            const v38 = v10.__proto__;
            let v39 = v5;
        }
        return v15;
    }
    const v40 = {deleteProperty:v16,set:v16,getPrototypeOf:v16,call:v16,preventExtensions:v16,isExtensible:v16,construct:v16,get:v16,ownKeys:v16,setPrototypeOf:v16,has:v16};
    const v42 = new Proxy(v15,v40);
    v42[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
