function Parent() {
  this.name = "parent";
  this.num = [1, 2, 3];
}
Parent.prototype.getNum = function () {
  console.log(this.num);
};

function Child() {
  Parent.call(this);
}

Child.prototype = new Parent();
Child.prototype.constructor = Child;
let child1 = new Child();
let child2 = new Child();

child1.name = "parent edited";
child1.num.push(4);
console.log(child1.name, "|", child2.name); // parent edited | parent 能够继承父类实例属性
console.log(child1.num, "|", child2.num); // [ 1, 2, 3, 4 ] | [ 1, 2, 3 ] 引用属性不共用
child1.getNum(); //[ 1, 2, 3, 4 ] 能够继承父类原型
