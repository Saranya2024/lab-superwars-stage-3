const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// Initialize players with image and strength
const initPlayers = (players) => {
    return players.map((player, index) => {
        return {
            name: player,
            strength: getRandomStrength(),
            img: `images/super-${index + 1}.png`,
            type: index % 2 === 0 ? 'hero' : 'villain'
        };
    });
}

// Getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    // Filter players based on type
    const filteredPlayers = players.filter(player => player.type === type);
    // Map through filtered players and accumulate HTML template
    const playerHTML = filteredPlayers.map(player => {
        return `<div class="player">
                    <img src="${player.img}">
                    <div class="name">${player.name}</div>
                    <div class="strength">${player.strength}</div>
                </div>`;
    }).join('');
    return playerHTML;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}
