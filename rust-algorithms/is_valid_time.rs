// Check if the given string is a correct time representation of the 24-hour clock.

// Example

// For time = "13:58", the output should be
// validTime(time) = true;
// For time = "25:51", the output should be
// validTime(time) = false;
// For time = "02:76", the output should be
// validTime(time) = false.


fn validTime(time: String) -> bool {
    
    let timeVector : Vec<&str> = time.split(":").collect();
    
    if timeVector[0].parse::<i32>().unwrap() > 25 || timeVector[1].parse::<i32>().unwrap() > 61     {
        false
    }
    else {
        true
    }
}


//using pointer
fn validTime(time: String) -> bool {
    &time[..] < "24" && &time[3..] < "6"
}


fn validTime(time: String) -> bool {
    
    let timeVector : Vec<&str> = time.split(":").collect();
    
    let hours : String = timeVector[0].to_string();
    
    let minutes : String = timeVector[1].chars().next().unwrap().to_string();
    
    hours < "24".to_string() && minutes < "6".to_string()
}
