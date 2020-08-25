//additional numbers to grade


//to check - first 

const finalGrade = int a, int b, int c => (average = (a+b+c) /3) {
 if ((a < 0 || a > 100, b < 0 || b > 100, c < 0 || c > 100) {
   return 'You have entered an invalid grade'
 } else if (average < 60) {
    return 'F'
 } else if (average < 70) {
    return 'D'
 } else if (average < 80) {
    return 'C'
 } else if (average < 90) {
    return 'B'
 } else {
    return 'A'
  }
}

//correct

const finalGrade = (int a, int b, int c) => {
 if ((int a < 0 || int a > 100) || (int b < 0 || int b > 100) || (int c < 0 || int c > 100) {
   return 'You have entered an invalid grade.'
   }
   let average = (int a + int b + int c) /3
	if (average < 60) {
		return 'F'
	} 
	else if (average < 70) {
		return 'D'
	} 
	else if (average < 80) {
		return 'C'
	} 
	else if (average < 90) {
		return 'B'
	} 
	else {
    return 'A'
	}
}

//two ways of solution

const finalGrade = (midterm, final, homework) => {
    if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) || (homework < 0 || homework > 100)) {
        return 'You have entered an invalid grade.'
    }
    let average = (midterm + final + homework) / 3
    if (average < 60) {
        return 'F'
    }
    else if (average < 70) {
        return 'D'
    }
    else if (average < 80) {
        return 'C'
    }
    else if (average < 90) {
        return 'B'
    } else {
        return 'A'
    }
}

console.log(finalGrade(95,96,97));

/*
//as a function declaration:
function finalGrade(midterm, final, homework) {
    if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) || (homework < 0 || homework > 100)) {
        return 'You have entered an invalid grade.'
    }
    let average = (midterm + final + homework) / 3
    if (average < 60) {
        return 'F'
    }
    else if (average < 70) {
        return 'D'
    }
    else if (average < 80) {
        return 'C'
    }
    else if (average < 90) {
        return 'B'
    } else {
        return 'A'
    }
}

console.log(finalGrade(95,96,97));
*/