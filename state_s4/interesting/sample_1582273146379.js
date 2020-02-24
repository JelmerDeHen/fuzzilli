function main() {
let v6 = 0;
let v9 = 0;
let v12 = 0;
let v15 = 0;
for (let v23 = 0; v23 < 100; v23++) {
    function v24(v25,v26) {
        v24.prototype = 1337;
    }
    const v28 = v24();
    // v28 = .unknown
    const v30 = {e:0,c:0,__proto__:v24};
    // v30 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "e"], withMethods: ["__proto__"])
}
}
%NeverOptimizeFunction(main);
main();
