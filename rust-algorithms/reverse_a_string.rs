// given "dog likes to eat" -> return "tae ot sekil god"

fn reverseString(stringParam: String) -> String {
    stringParam.chars().rev().collect::<String>()
}
