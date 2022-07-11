function exponential(base, expo){
    if (expo === 0){
        return 1;
    } else {
        return base * exponential(expo -1)
    }

}