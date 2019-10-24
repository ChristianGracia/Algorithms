function spinalCase(str) {
    console.log(str.replace(/(.)([A-Z])/g, `$1 $2`).replace(/\s+|_+/g, "-").replace(/--/g, "-").toLowerCase());
}


spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap");
spinalCase("This Is Spinal Tap");
spinalCase("The_Andy_Griffith_Show");
spinalCase("This Is Spinal Tap");
spinalCase("Teletubbies say Eh-oh");
spinalCase("This Is Spinal Tap");
spinalCase("AllThe-small Things");
