function inspiration() {

     const quotes = ["Life Loves Me!", "As I say Yes to Life, life says yes to me.", 
                     "I prosper whereever I turn","I prosper wherever I turn." ]
     return quotes[Math.floor(Math.random() * 4)]                
}
console.log(inspiration())