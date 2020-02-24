function main() {
const v1 = {c:13.37};
// v1 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
let v6 = 0;
this.__proto__ = v1;
}
%NeverOptimizeFunction(main);
main();
