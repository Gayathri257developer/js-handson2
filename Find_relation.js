// 4. Find Relation

// PrepBuddy wants you to get familiar with various Relational operators. He provides you with two integer values 
// X and Y and asks you to find the relation between them.

const findRelation = (x,y) => {
    if (x < y){
      return (x + " " + "is smaller than"  + " " + y);
    }
    else if (x > y){
      return (x + " " + "is greater than"  + " " + y);
    }
    else if (x == y){
      return (x + " " + "is equal to" + " " + y);
    }
};
