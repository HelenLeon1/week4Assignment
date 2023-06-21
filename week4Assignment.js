

//My Week 4 Coding Assignment Solutions for Promineo Tech


console.log("Week 4 Questions and Solutions");

//Question 1

    console.log("1) Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.");
        //array declaration and initialization
            let ages = [3, 9, 23, 64, 2, 8, 28, 93];
            console.log(`The array named ages has the following values:  ${ages.join(", ")}.`); 
            

    console.log(`a. Programmatically subtract the value of the first element in the
        array from the value in the last element of the array.`);
        //[ages.length - 1] finds the index of the last element in the array.
        // Then that index is used to access the last element in the ages array.
            let lastElementMinusFirst = (ages[ages.length -1] - ages[0]);
            console.log(`The last element of the array subtracted by the first element is ${lastElementMinusFirst}.`);


    console.log(`b. Add a new age to your array and repeat the step above to ensure it 
        is dynamic.(works for arrays of different lengths).`);
            ages.push(12); //adds an element (number 12) to the end of the array
            console.log(`A new age has been added to the ages array. The updated array values are:  ${ages.join(", ")}.`); 
                lastElementMinusFirst = (ages[ages.length -1] - ages[0]); 
            console.log(`The last element subtracted by the first element in the updated array is ${lastElementMinusFirst}.`);


    console.log("c. Use a loop to iterate through the array and calculate the average age.");
        let sum = 0;  
        //loops through all the elements in the array and adds every element
            for(let i = 0; i < ages.length; i++) {
                sum = sum + ages[i]; 
            }

            let averageAge = sum / ages.length; //divides sum by the number of elements in the array to get average
        
            console.log("The average age in the ages array is " + Math.round(averageAge) + ".");



//Question 2

    console.log(`2) Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 
        'Sally', 'Buck', 'Bob'.`);
            //another way to declare and initialize an array
            let names = new Array('Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob');
            console.log("The names array contains the following values: " + names.join(", "));


    console.log("a. Use a loop to iterate through the array and calculate the average number of letters per name.");
       let totalLetters = 0;  
        for(let i = 0; i < names.length; i++) {
            totalLetters += names[i].length; //gets the number of letters in each name and adds them.
        }
            let avgLettersPerName = totalLetters / names.length; //divides sum of letters by number of names in the array to get average

            console.log(`The average number of letters per name is ${Math.round(avgLettersPerName)}.`); //rounds value of variable and prints to console


    console.log("b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.");
       let concatenatedNames; 
        for(let i = 0; i < names.length; i++) {
            concatenatedNames = names.join(", "); //concatenates elements into a new string with join method. They are separated by a comma and a space. 
        }

            console.log("The concatenated names of the array are " + concatenatedNames + ".");



//Question 3
    console.log("3) How do you access the last element of any array?")
        console.log(`To access the last element in an array dynamically, you need to find the index, which means the position of the
        element in the array. To find the last index, you can use the length property to return the number of elements in the array 
        and then subtract by one. Once you have the index you can use it to access the element in the array. This is seen as part 
        of the solution to Question 2a: ages[ages.length -1].`);



//Question 4
    console.log("4) How do you access the first element of any array?");
        console.log(`The first element in the array is accessed by searching for the value with an index of zero in the array.
        There is also an example of this as part of Question 2a: ages[0]. `);       



//Question 5
    console.log(`5) Create a new array called nameLengths. Write a loop to iterate over the previously created names array and 
    add the length of each name to the nameLengths array.`)
        let nameLengths = []; //declares array
            for(let i = 0; i < names.length; i++) {
                nameLengths[i] = names[i].length; //initializes namesLengths array with number of letters of each name in the names array.
            }

            console.log(`The lengths of each name in the names array are ${nameLengths}.`);



//Question 6
    console.log("6) Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.");
        let sumOfNameLengths = 0;
            for(let i = 0; i < nameLengths.length; i++) {
                sumOfNameLengths += nameLengths[i]; //loops through nameLengths array and adds all the elements in the array. 
            }

            console.log(`The sum of all the elements in the nameLengths array is ${sumOfNameLengths}.`);



//Question 7
    console.log(`7) Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number 
    of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').`);
        let newWord = "";
            function concatenatedWord(word, n) {
                for(let i = 0; i < n ; i++) {  //loops through n number of times, in this case 3 times
                    newWord += word;
                }
                return newWord;
            }

                console.log(`The concatenated word is ${concatenatedWord("Hello", 3)}.`); //calls function, passes two arguments



//Question 8
    console.log(`8) Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should 
    be the first and the last name separated by a space.`);
        //this arrow function returns string using template literals
        let fullName = (firstName, lastName) => `Your full name is ${firstName} ${lastName}.`; //string interpolation
        
        console.log(fullName("Ana", "Smith"));


    
//Question 9
    console.log(`9) Write a function that takes an array of numbers and returns true if the sum of all the numbers 
    in the array is greater than 100.`);
        let sumOfNumbers = array => {
                let sumAllNum = 0;
                for(let i = 0; i < array.length; i++) {
                    sumAllNum += array[i];  
                }


                    if(sumAllNum > 100) { //if the sum is greater than 100, it returns true
                        return true;
                    } else {        //if the condition is false, it returns false
                        return false;
                    }
            }

            let numbersArray = [23, 11, 28, 2, 36];
            console.log(`The values of the numbersArray are ${numbersArray.join(", ")}.`)

            //calls the sumOfNumbers function and passes numberArray as an argument
            console.log("Is the sum of all the numbers in the array greater than 100?: " + sumOfNumbers(numbersArray)); 



//Question 10 
    console.log("10) Write a function that takes an array of numbers and returns the average of all the elements in the array.");
        let avgOfArray = array => {
            let sumAllNum = 0; 
            let avgNumbers = 0;

                for(let i = 0; i < array.length; i++) {
                    sumAllNum += array[i];
                }

                    avgNumbers = sumAllNum / array.length;
                    return avgNumbers; //returns value of average number
            }

        let secondNumbersArray = [5, 6, 7, 8, 9, 10];
        console.log(`The values of the secondNumbersArray are ${secondNumbersArray.join(", ")}.`)
        console.log("The average of the elements in the array are: " + avgOfArray(secondNumbersArray)); // calls function and prints returned value from function



//Question 11
    console.log(`11) Write a function that takes two arrays of numbers and returns true if the average of the elements in the 
    first array is greater than the average of the elements in the second array.`);
        function twoNumArraysComparison(array1, array2) {
            let sumArrayOne = 0; 
            let sumArrayTwo = 0;
            let avgArrayOne = 0;
            let avgArrayTwo = 0;

            //calculates average of elements from first array
                for(let i = 0; i < array1.length; i++) {
                    sumArrayOne += array1[i];
                }

                    avgArrayOne = sumArrayOne / array1.length;

            //calculates average of elements from second array
                for(let i = 0; i < array2.length; i++) {
                    sumArrayTwo += array2[i];
                }

                    avgArrayTwo = sumArrayTwo / array2.length;

                //determines which average is greater and returns a boolean value
                    if(avgArrayOne > avgArrayTwo) {
                        return true;
                    } else {
                        return false;
                    }
        }

            let firstNumsArray = [10, 20, 30, 40 , 50]
            let secondNumsArray = [1, 2, 3, 4, 5];
            console.log(`The values of the firstNumsArray are ${firstNumsArray.join(", ")} and the values of the secondNumsArray is ${secondNumsArray.join(", ")} .`)
            console.log("Is the average of the first array greater than the average of the second array?: " + twoNumArraysComparison(firstNumsArray, secondNumsArray));


//Question 12
    console.log(`12) Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it 
    is hot outside and if moneyInPocket is greater than 10.50.`);
        function willBuyDrink(isHotOutside, moneyInPocket) {
            if(isHotOutside === true && moneyInPocket > 10.50) { //only returns true if both conditions are true
               return true; 
            } else {
                return false;
            }
        }

            let isItHot = true;
            let pocketMoney = 15; 
            console.log("Is it hot outside and do I have more than $10.50? ");

            //calls willBuyDrink Function and passes two arguments
                if(willBuyDrink(isItHot, pocketMoney)) {
                    console.log(`Yes, it is hot outside and I have $${pocketMoney}. I will buy a drink.`) //prints if returned value is true
                } else { 
                    console.log("No, both conditions aren't true. I won't buy a drink.") //prints if returned value is false
                }



//Question 13
    console.log("13) Create a function of your own that solves a problem. In comments, write what the function does and why you created it.");
    /* Affordability of Vacation Calculator
      * This function calculates the cost of different vacation destinations and determines if you can afford it.
      * It calculates the sum of prices for flights, hotels, food, transportation, and souvenirs per person.
      * Then it multiplies the sum by the number of people traveling to get the total cost for the family.
      * If the total cost exceeds the budget, the user can't go on vacation to that destination.
      * If the total cost is less than the budget, the user can go on vacation. 
      * The function is called three times, once per destination.
      * I created it because I like to travel and would love to go on vacation soon! I thought it would be a fun way to apply 
      * many of the tools I've learned so far.
    */



    function isVacationAffordable (budget, pricesArray, people) {
        let pricePerPerson = 0;
        let totalCost = 0;
        for(let i = 0; i < pricesArray.length; i++) {
            pricePerPerson += pricesArray[i]; //loops through prices array and adds all prices passed.
        }
            
            totalCost += (pricePerPerson * people); //mutiplies price per person by number of people traveling to get total cost

            if(totalCost > budget) {
                let moneyNeeded = totalCost - budget; //calculates money needed to afford a vacation
                return `Unfortunately, the costs exceeds your budget. You need to save $${moneyNeeded} for this destination.`
            } else {
                let savings = budget - totalCost; //calculates money saved by going on the vacation
                return `Yes! You have enough money saved to go on your dream vacation! The total cost will be $${totalCost} and you save $${savings}.`
            }
   
    }


        let myBudget = 10000; 
        let numberOfPeople = 4; 
        let italyPrices = [1000, 1500, 800, 150, 75];
        let thailandPrices = [1500, 800, 250, 100, 50];
        let brazilPrices = [700, 1000, 550, 150, 50];
     
        console.log(`I want to go on vacation. I need to know the total cost of flights, hotels, food, transportation, and souvenirs 
        for my whole family and I need to compare it to my budget.`);
        console.log("But I only have a limited amount of money saved. Where can I go?");
        
        //calls function for each destination
            console.log(`Can I afford to go to Italy? 
                    ${isVacationAffordable(myBudget, italyPrices, numberOfPeople)}`);
            console.log(`Can I afford to go to Thailand?
                    ${isVacationAffordable(myBudget, thailandPrices, numberOfPeople)}`);
            console.log(`Can I afford to go to Brazil?
                    ${isVacationAffordable(myBudget, brazilPrices, numberOfPeople)}`);

        
            