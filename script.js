( function() {

    let arr = [ "rock","paper","scissor"];
        function botChoise(){

            let index = Math.floor(Math.random()*3);
            let botSelect = arr[index];
            
            return botSelect;
        }

      
    
        
        const playBtn = document.querySelector('#play');
        const resultDiv = document.querySelector('#resultP');
        const output = document.querySelector('.output');

        


        const playGame = ()=>{
            let input = document.querySelector('.input');
           
            let inputValue = input.value;
            let inputV = inputValue.toLowerCase();
            inputV = inputV.trim();
            
            
            let bot = botChoise();
            if(inputV =="")
            {
                resultDiv.innerHTML = `Please enter valid input`;
                return;
            }
            if(bot === inputV){
                resultDiv.innerHTML = `Match Tie Bot select ${bot} you select ${inputV}`;
            }
            else if(bot === 'rock' && inputV === 'scissor'){
                resultDiv.innerHTML = `You lose Bot select ${bot} you select ${inputV}`;
            }
            else if(bot === "scissor" && inputV === "paper"){
                resultDiv.innerHTML = `You lose Bot select ${bot} you select ${inputV}`;
            }
            else if(bot === "rock" && inputV === "paper"){
                resultDiv.innerHTML = `You Won Bot select ${bot} you select ${inputV}`;
            }
            else if(bot === "paper" && inputV === "rock"){
                resultDiv.innerHTML = `You Lose Bot select ${bot} you select ${inputV}`;
            }
            else if(bot === "paper" && inputV === "scissor"){
                resultDiv.innerHTML = `You Won Bot select ${bot} you select ${inputV}`;
            }
            else if(bot === "scissor" && inputV === "rock"){
                resultDiv.innerHTML = `You Won Bot select ${bot} you select ${inputV}`;
            }
            else{
                resultDiv.innerHTML = `Invalid input ${bot} you select ${inputV}`;
            }
        }
      
      document.onkeypress = function(e){
               
        let key = e.which;
        
        if(key === 13){
             
            playGame();
            
        }
      }

        playBtn.addEventListener('click',()=>{
            output.style.display="block";
            playGame();
            
        }) 

        const clearBtn = document.querySelector('#clear');
        clearBtn.onclick = function(){
            output.style.display = "none";
        }
        
})();