// Check if the given string is a correct time representation of the 24-hour clock.

// Example

// For time = "13:58", the output should be
// validTime(time) = true;
// For time = "25:51", the output should be
// validTime(time) = false;
// For time = "02:76", the output should be
// validTime(time) = false.

func validTime(time: String) -> Any {
    let timeArr = time.split(separator: ":")
    return "00"..."23" ~= timeArr[0] && "00"..."59" ~= timeArr[1]
}

func validTime(time: String) -> Bool {
    time < "24" && Array(time)[3] < "6"
}