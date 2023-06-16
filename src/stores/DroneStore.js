import { writable } from 'svelte/store';

export const DroneStore = writable([
    {
        id: 150,
        health: 100,
        img: "/drone.png",
        status: "ONLINE"
    },
    {
        id: 172,
        health: 90,
        img: "/drone.png",
        status: "ONLINE"
    },
    {
        id: 151,
        health: 80,
        img: "/drone.png",
        status: "ONLINE"
    },
    {
        id: 176,
        health: 70,
        img: "/drone.png",
        status: "REPAIR"
    },
    {
        id: 163,
        health: 70,
        img: "/drone.png",
        status: "ONLINE"
    },
    {
        id: 177,
        health: 70,
        img: "/drone.png",
        status: "OFFLINE"
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
        status: "ONLINE"
    }
]);