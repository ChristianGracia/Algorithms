function translatePigLatin(str) {

    switch (str[0]) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            str = str + "way";
            console.log(str);
            return str;

    }


    return str;


}

translatePigLatin("consonant");