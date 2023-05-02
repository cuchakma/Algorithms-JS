const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,    
});

readline.question(`Enter The Number \n`, number => {
   output = new Output();
   console.log(output.Evaluate(number) );
});

class Output{
   static value = '';
   Evaluate(data) {
      this.value += data.toString()+' ';
      return this.value;
   }
}
