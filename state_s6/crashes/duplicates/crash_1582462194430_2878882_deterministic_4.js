function main() {
const v5 = [1337];
const v6 = {c:1704081300,a:arguments,toString:"object",b:13.37,__proto__:v5,valueOf:1704081300};
for (const v8 in "object") {
    const v11 = [1337,1337,1337,1337,1337];
    function v12(v13,v14,v15,v16) {
        'use strict'
        try {
            v16[3] = v16;
        } catch(v17) {
            const v19 = Symbol.toPrimitive;
            const v20 = v11.reduceRight(v12);
            let v23 = this;
            let v24 = v23;
            let v25 = "jZZhI/kPfh";
        }
        return v6;
    }
    const v26 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:1337,has:v12};
    const v28 = new Proxy(v11,v26);
    v28[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
