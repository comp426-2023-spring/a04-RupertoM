import minimist from 'minimist'

export function rps(shot = null) {
    const options = ["rock", "paper", "scissors"]
    const sim = options[Math.floor(Math.random() * options.length)]
    if (!shot) {
        return `{"player":"${sim}"}`
    }
    if (shot.toLowerCase() == sim) {
        return `{"player":"${shot}","opponent":"${sim}","result":"tie"}`
    }
    if (shot.toLowerCase() == 'rock') {
        if (sim == 'paper') {
            return `{"player":"${shot}","opponent":"${sim}","result":"lose"}`
        }
        if (sim == 'scissors') {
            return `{"player":"${shot}","opponent":"${sim}","result":"win"}`
        }
    }
        if (shot.toLowerCase() == 'paper') {
        if (sim == 'rock') {
            return `{"player":"${shot}","opponent":"${sim}","result":"win"}`
        }
        if (sim == 'scissors') {
            return `{"player":"${shot}","opponent":"${sim}","result":"lose"}`
        }
    }
    if (shot.toLowerCase() == 'scissors') {
        if (sim == 'rock') {
            return `{"player":"${shot}","opponent":"${sim}","result":"lose"}`
        }
        if (sim == 'paper') {
            return `{"player":"${shot}","opponent":"${sim}","result":"tie"}`
        }
    }
export function rpsls(shot = null) {
    const rpsls_options = ["rock", "paper", "scissors", "lizard", "spock"]
    const sim = rpsls_options[Math.floor(Math.random() * rpsls_options.length)]
    
    if (!shot) {
        return `{"player":"${sim}"}`
    }
    if (shot.toLowerCase() == sim) {
        return `{"player":"${shot}","opponent":"${sim}","result":"tie"}`
    }
    if (shot.toLowerCase() == 'rock') {
        if (sim == 'paper') {
            return `{"player":"${shot}","opponent":"${sim}","result":"lose"}`
        }
        if (sim == 'scissors') {
            return `{"player":"${shot}","opponent":"${sim}","result":"win"}`
        }
        if (sim == 'lizard') {
            return `{"player":"${shot}","opponent":"${sim}","result":"win"}`
        }
        if (sim == 'spock') {
            return `{"player":"${shot}","opponent":"${sim}","result":"lose"}`
        }
    }
    
    if (shot.toLowerCase() == 'paper') {
        if (sim == 'rock') {
            return `{"player":"${shot}","opponent":"${sim}","result":"win"}`
        }
        if (sim == 'scissors') {
            return `{"player":"${shot}","opponent":"${sim}","result":"lose"}`
        }
        if (sim == 'lizard') {
            return `{"player":"${shot}","opponent":"${sim}","result":"lose"}`
        }
        if (sim == 'spock') {
            return `{"player":"${shot}","opponent":"${sim}","result":"win"}`
        }
    }
    
    if (shot.toLowerCase() == 'scissors') {
        if (sim == 'rock') {
            return `{"player":"${shot}","opponent":"${sim}","result":"lose"}`
        }
        if (sim == 'paper') {
            return `{"player":"${shot}","opponent":"${sim}","result":"win"}`
        }
        if (sim == 'lizard') {
            return `{"player":"${shot}","opponent":"${sim}","result":"win"}`
        }
        if (sim == 'spock') {
            return `{"player":"${shot}","opponent":"${sim }","result":"lose"}`
        }
    }
}
