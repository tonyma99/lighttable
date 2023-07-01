import { writable } from 'svelte/store';

export const DroneStore = writable([
    {
        id: 150,
        health: 100,
        img: "/drone.png",
        status: "ONLINE",
        location: [-123.1443, 49.24448]
    },
    {
        id: 172,
        health: 90,
        img: "/drone.png",
        status: "ONLINE",
        location: [-123.1, 49.22]
    },
    {
        id: 151,
        health: 80,
        img: "/drone.png",
        status: "ONLINE",
        location: [-123.09, 49.24]
    },
    {
        id: 176,
        health: 70,
        img: "/drone.png",
        status: "REPAIR",
        location: [-123.2, 49.26]
    },
    {
        id: 163,
        health: 70,
        img: "/drone.png",
        status: "ONLINE",
        location: [-123.05, 49.275]
    },
    {
        id: 177,
        health: 70,
        img: "/drone.png",
        status: "OFFLINE",
        location: [-123.02, 49.24448]
    },
    {
        id: 166,
        health: 70,
        img: "/drone.png",
        status: "MIA",
        location: [-122.98, 49.27]
    },
    {
        id: 180,
        health: 70,
        img: "/drone.png",
        status: "ONLINE",
        location: [-122.95, 49.23]
    },
    {
        id: 181,
        health: 70,
        img: "/drone.png",
        status: "ONLINE",
        location: [-123.19, 49.225]
    },
    {
        id: 182,
        health: 70,
        img: "/drone.png",
        status: "OFFLINE",
        location: [-123.125, 49.28]
    },
    {
        id: 183,
        health: 70,
        img: "/drone.png",
        status: "MIA",
        location: [-123.1443, 49.3]
    },
    {
        id: 184,
        health: 70,
        img: "/drone.png",
        status: "ONLINE",
        location: [-123.177, 49.195]
    }
]);