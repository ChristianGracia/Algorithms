// Check if the given string is a correct time representation of the 24-hour clock.

// Example

// For time = "13:58", the output should be
// validTime(time) = true;
// For time = "25:51", the output should be
// validTime(time) = false;
// For time = "02:76", the output should be
// validTime(time) = false.


fn validTime(time: String) -> bool {
    
    let mut timeVector : Vec<&str> = time.split(":").collect();
    
    if timeVector[0].parse::<i32>().unwrap() > 24 || timeVector[1].parse::<i32>().unwrap() > 59     {
        false
    }
    else {
        true
    }
}
