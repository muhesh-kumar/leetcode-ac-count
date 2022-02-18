const starIconClassName = "favor-icon__2vM7 fa fa-star";

const isLocked = (node) => {
  if (node.childElementCount != 1)
    return node.childNodes[1].className != starIconClassName;
  return false;
};

const isSolved = (parentTR) => {
  return parentTR.childNodes[0].childElementCount == 1;
};

const getDifficulty = (parentTR) => {
  return difficultyClassNames[
    parentTR.childNodes[4].childNodes[0].className
    // contains the class names for each difficulty type
  ];
};

const difficultyClassNames = {
  "label label-success round": "Easy",
  "label label-warning round": "Medium",
  "label label-danger round": "Hard",
};

const lockedProblems = {
  Easy: 0,
  Medium: 0,
  Hard: 0,
};

const unlockedProblems = { ...numLockedProblems };

const lockedProblemsACCount = { ...numLockedProblems };

const unlockedProblemsACCount = { ...numLockedProblems };

const problems = Array.from(document.querySelectorAll("[label='Title']"));

for (let i = 0; i < problems.length; i++) {
  const parentTR = problems[i].parentElement;
  const problem = parentTR.childNodes[2].childNodes[0];
  const problemDifficulty = getDifficulty(parentTR);
  const hasSolved = isSolved(parentTR);

  if (isLocked(problem)) {
    numLockedProblems[problemDifficulty]++;
    if (hasSolved) lockedProblemsACCount[problemDifficulty]++;
  } else {
    numUnlockedProblems[problemDifficulty]++;
    if (hasSolved) unlockedProblemsACCount[problemDifficulty]++;
  }
}

const totalUnlockedProblems =
  numUnlockedProblems.Easy +
  numUnlockedProblems.Medium +
  numUnlockedProblems.Hard;
const totalUnlockedACs =
  unlockedProblemsACCount.Easy +
  unlockedProblemsACCount.Medium +
  unlockedProblemsACCount.Hard;

console.log(numLockedProblems);
console.log(numUnlockedProblems);
console.log(lockedProblemsACCount);
console.log(unlockedProblemsACCount);
console.log(`Total Unlocked Problems: ${totalUnlockedProblems}`);
console.log(`Total Unlocked ACs: ${totalUnlockedACs}`);
