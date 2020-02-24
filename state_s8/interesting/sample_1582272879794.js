function main() {
function v0(v1,v2) {
    v0.prototype = 1337;
}
const v4 = v0();
// v4 = .unknown
const v6 = {e:0,c:0,__proto__:v0};
// v6 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "e"], withMethods: ["__proto__"])
}
%NeverOptimizeFunction(main);
main();
