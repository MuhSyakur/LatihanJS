function joinWord(kata1, kata2) {
    if(kata1 !=null && kata2 !=null){
        return kata1.concat(kata2).split("");}
    else if(kata1 !=null && kata2 == null ){
         return"Kedua Paramater Harus di isi"}
  }
  // TEST CASES
  console.log(joinWord('Udin', `jono`)); // Udin Sedunia
  console.log(joinWord('John','Doe')); // John Doe
  console.log(joinWord('JavaScript', 'EZ')); // JavaScript EZ
  console.log(joinWord('Code for', 'Living')); // Code for Living
  console.log(joinWord('Super')); // Kedua Parameter Harus di isi