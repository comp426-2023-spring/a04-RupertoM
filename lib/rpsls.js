import minimist from 'minimist'

export function rps(shot = null) {
    const shot_options = ["rock", "paper", "scissors"]
    const sim_shot = shot_options[Math.floor(Math.random() * shot_options.length)]
    if (!shot) {
        return `{"player":"${sim_shot}"}`
    }
    if (shot.toLowerCase() == sim_shot) {
        return `{"player":"${shot}","opponent":"${sim_shot}","result":"tie"}`
    }
