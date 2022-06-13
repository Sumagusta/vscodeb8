console.log("testing");

  const data = 100;

  //data = 90;
  console.log(data);

  let data2 = 800;

  var data3 = 8002;
  var data3 = 90;

  function clickMe() {
    alert("hallo bro!")
  }

  function argument(toko, product, productPrice) {
    document.write("Nama Toko : " + toko + " <br />" + "Nama Product : " + product + " <br />" + "Harga Produk : " + productPrice)
  }

  function rataRataHargaProduct(product1, product2, product3) {
    var result = (product1 + product2 + product3)/3;
    return result;
  }

  function hargaBaruProduct(currentPrice) {
    var result = currentPrice + rataRataHargaProduct(90000, 65000, 80000) // 100rb
    document.write("Harga product baru = "+result)
  }

  function onSubmit() {
    document.write('<table border=1><tr><td>Kolom 1</td><td>Kolom 2</td><td>Kolom 3</td></tr></table>')
  }

  function onSubmit2() {
    document.write('<table border=1><tr><td>Kolom 4</td><td>Kolom 5</td><td>Kolom 6</td></tr></table>')
  }

function forEachFunc() {
    loop = [2, 3, 4]
    loop.forEach(element => {
        element *= element
        document.write(element)
    });
}

function arrayJs() {
  var data = [
      [1, 2, 3],
      [2, 3, 2]
  ]
}

function indexOfFunc(){
var data = 'Belajar Javascript'
var index = 0;
var searchObj = 'jar'
var result = data.indexOf(searchObj, index); // mencari data pada object, return index
console.log('pencarian '+searchObj+' dimulai dari index ke '+index+' berada pada index ke '+result)
}

function sliceFunc(){
  var arr = ['data1', 'data2', 'data3']
  var resultSlice = arr.slice(0);
  var resultSlice2 = arr.slice(1);

  console.log(arr);
  console.log("result 1, dimulai dari index ke 0 "+resultSlice);
  console.log("result 2, dimulai dari index ke 1 "+resultSlice2);
  
  var resultSliceWithEnd = arr.slice(0, 2) //  endIndex - 1 
  console.log("result 3, dimulai dari index ke 0, sampai inde ke 2 "+resultSliceWithEnd);
}

function spliceFunc(){
  var buah = ['mangga', 'jeruk', 'nanas', 'manggis', 'semangka']
  console.log(buah);
  var result = buah.splice(3, 2)
  console.log("dihapus : "+result);
  console.log("sisa : "+buah);
}

function filterJs(){
  var campuran = [2, 'text', 80, 'test2']
  var result = campuran.filter(Number);
  console.log(campuran);
  console.log("filter by number "+result);
  
  var creatures = [
    {name: "Shark", habitat: "Ocean"},
    {name: "Whale", habitat: "Ocean"},
    {name: "Lion", habitat: "Savanna"},
    {name: "Monkey", habitat: "Jungle"},
    {name: "Snake", habitat: "Jungle"}
  ];

  var aquaticCreatures =  creatures.filter(function(creature) {
    return creature.habitat == "Ocean";
  });
  
  console.log(aquaticCreatures);
}

