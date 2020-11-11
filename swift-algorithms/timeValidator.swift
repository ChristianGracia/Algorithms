// Check if the given string is a correct time representation of the 24-hour clock.

// Example

// For time = "13:58", the output should be
// validTime(time) = true;
// For time = "25:51", the output should be
// validTime(time) = false;
// For time = "02:76", the output should be
// validTime(time) = false.

func validTime(time t: String) -> Any {
    let a = t.split(separator: ":")
    return "00"..."23" ~= a[0] && "00"..."59" ~= a[1]
}