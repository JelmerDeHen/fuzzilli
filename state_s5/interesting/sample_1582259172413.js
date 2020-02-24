function main() {
const v1 = {c:Int16Array,__proto__:Int16Array,length:Int16Array};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "length"])
const v3 = Int16Array instanceof v1;
// v3 = .boolean
}
%NeverOptimizeFunction(main);
main();
