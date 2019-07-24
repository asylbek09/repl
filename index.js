const data = {
  name: "Brunello",
  shoes: [
    {name: "black low-top", price: 1000},
    {name: "green low-top", price: 1100},
    {name: "beige low-top", price: 950},
    {name: "olive low-top", price: 1050}
  ]
};

var max = data.reduce(function(prev, current) {
  return(prev.price > current.price) ? prev : current
});

console.log(max);
