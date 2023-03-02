let Possible_Solutions = [];
let Spot = 0;
let High_Score= 0;
const USEDALL = 26;
let ALLPOSSIBLE = false;
let HATED_PRIME = "";

// initial function used to add word to the first hated word
function CheckEntry(Hated){
    var Used = "";
    var New_List = [];
    var Solution = [];
    var run = true;
    var counter = 0;
    HATED_PRIME = Hated;
    if(Hated.length != 5){
        return "Wrong size, try again";
    }

    if(!ALL_WORDS.includes(Hated)){
        return "Not a possible word, try again";
    }

    // valid starting word
    else{
        // removes reusable vowels that were in the Hated word
        for(let x in Hated){
            for( let y in VOWELS){
                if (Hated[x] == VOWELS[y]){
                    VOWELS[y] = " ";
                }
            }
        }

        Solution.push(Hated);
        Used = AddUsed(Used,Hated);
        New_List = RemoveUsed(Used,ALL_WORDS);

        FindWords(New_List[counter],Used, Solution, New_List);
        return Possible_Solutions;
        while(run){
            

            if (Spot == 0){
                run == false;
            }

            else{
                for(let x in Possible_Solutions[Spot - 1]){
                    New_List = RemoveUsed(Possible_Solutions[x],New_List);
                }
            }

            if(New_List.length -1 <= counter){
                run = false;
            }

            else counter++;

        }

        console.log("Done");
        return Possible_Solutions; // return the list of correct words
    }
}

// Adds the new used word into the used letters
function AddUsed(Used,Hated){
    for( let y in Hated){
        // checks if the letter has been added yet
        if (!Used.includes(Hated[y])){
            Used += Hated[y];
        }
        
    }
    return Used;
}

// removes the words that have used letters
function RemoveUsed(Used,Word_List){
    var New = [];
    var add = true;
    for(let x in Word_List){
        add = true;
        for(y in Used){
            if(Word_List[x].includes(Used[y]) && !VOWELS.includes(Used[y])){
                add = false;
                break;
            }
        }

        if(add){
            New.push(Word_List[x]);
        }
    }
    return New;
}

function FindWords(Hated,Used, Solution, Word_List){
    Solution.push(Hated);
    Used = AddUsed(Used,Hated);
    Word_List = RemoveUsed(Used,Word_List);

    if (Used.length == USEDALL){
        // function to print out all possible words
        Possible_Solutions.push(Solution);
        Spot++;
        console.log("SOLTUION??: " +Solution);
        for(let x in Solution){
            if(Solution[x] != HATED_PRIME){
                Solution.pop();
            }
        }
    }

    // finds solution set with no repeating words
    else if (Used.length != USEDALL && Word_List.length != 0 && !ALLPOSSIBLE){
        if(Word_List[0] != "FALSE"){
            FindWords(Word_List[0], Used, Solution, Word_List);
        }
        
    }

    // finds every possible solution set
    else if (Used.length != USEDALL && Word_List.length != 0 && ALLPOSSIBLE){
        for (let x in Word_List){
            FindWords(Word_List[x], Used, Solution, Word_List);
        }
    }
    return;
}

// Finds the point total of the possible solution set
function FindPoints(Solution){
    var Total = 0;
    // every word in a solution
    for(let x in Solution){
        // every letter in each word
        for( let y in x){
            Total += POINTS[y];
        }
    }

    if (total > High_Score){
        High_Score = total;
    }
}

function Wordless(Hated){
    
}