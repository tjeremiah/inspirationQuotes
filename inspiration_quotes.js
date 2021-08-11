
function inspiration() {

     let randomQuotes = {
       dailyQuotes : ["Life Loves Me!", "As I say Yes to Life, life says yes to me.", 
           "I prosper whereever I turn", "I prosper wherever I turn." ],
       affirmations : ["I trust the process of life.", "Today is a scared gift from life.", "Only good can come to me."],

       get_day() {
        const d = new Date();
        const weekday = new Array(7)
    
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday"
    
        const day = weekday[d.getDay()]
        return day;

       },
       
    };
     
   return `Today is ${randomQuotes.get_day()}, ${randomQuotes.dailyQuotes[Math.floor(Math.random() * randomQuotes.dailyQuotes.length)]}, 
           ${randomQuotes.affirmations[Math.floor(Math.random() * randomQuotes.affirmations.length)]}`                
}
console.log(inspiration())