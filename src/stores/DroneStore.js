import { writable } from 'svelte/store';

export const DroneStore = writable([
    {
        id: 150,
        health: 100,
        img: "/drone.png",
        status: "Online"
    },
    {
        id: 172,
        health: 90,
        img: "/drone.png",
        status: "Online"
    },
    {
        id: 151,
        health: 80,
        img: "/drone.png",
        status: "Online"
    },
    {
        id: 176,
        health: 70,
        img: "/drone.png",
        status: "Online"
    },
    {
        id: 163,
        health: 70,
        img: "/drone.png",
        status: "Repair"
    },
    {
        id: 177,
        health: 70,
        img: "/drone.png",
        status: "Offline"
    },
    {
        id: 166,
        health: 70,
        img: "/drone.png",
        status: "MIA"
    },
    {
        id: 180,
        health: 70,
        img: "/drone.png",
        status: "Online"
    }
]);