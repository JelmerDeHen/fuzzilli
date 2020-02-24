function main() {
const v3 = JSON.toStringTag;
// v3 = .unknown
this.valueOf = Object;
const v8 = {get:v3};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
const v10 = Object.defineProperty(this,"valueOf",v8);
// v10 = .undefined
}
%NeverOptimizeFunction(main);
main();
