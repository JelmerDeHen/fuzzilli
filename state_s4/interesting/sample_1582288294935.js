function main() {
function v2(v3,v4) {
    v2.prototype = v4;
    return v2;
}
const v5 = v2();
// v5 = .unknown
v5[1337] = 1337;
const v6 = {...v5};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__"])
}
%NeverOptimizeFunction(main);
main();
