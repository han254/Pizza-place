var price, crust_price, topping_price;
let total = 0;
function Getpizza(name, size, crust, topping, total) {
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}
$(function () {
  $("button.proceed").click(function (event) {
    let pname = $(".name option:selected").val();
    let psize = $("#size option:selected").val();
    let pcrust = $("#crust option:selected").val();
    let ptopping = [];
    $.each($("input[name='toppings']:checked"), function () {
      ptopping.push($(this).val());
    });
    console.log(ptopping.join(", "));

switch (psize) {
      case "0":
        price = 0;
        break;
      case "large":
        price = 1000;
        console.log(price);
        break;
      case "medium":
        price = 800;
        console.log("The price is " + price);
        break;
      case "small":
        price = 500;
        console.log(price);
      default:
        console.log("error");
    }
    switch (pcrust) {
      case "0":
        crust_price = 0;
        break;
      case "Thin Crust":
        crust_price = 300;
        break;
      case "Brooklyn Style ":
        crust_price = 200;
        break;
      case "Pan & Hand Tossed":
        crust_price = 250;
        break;
      default:
        console.log("No price");
    }