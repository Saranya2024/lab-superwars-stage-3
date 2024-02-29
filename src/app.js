const PLAYERS = [
    'Spiderman',
    'Captain America',
    'Wonderwoman',
    'Popcorn',
    'Gemwoman',
    'Bolt',
    'Antwoman',
    'Mask',
    'Tiger',
    'Captain',
    'Catwoman',
    'Fish',
    'Hulk',
    'Ninja',
    'Black Cat',
    'Volverine',
    'Thor',
    'Slayer',
    'Vader',
    'Slingo',
  ];
  
  // initialize players with image and strength
  const initPlayers = (players) => {
    return players.map((player, index) => ({
      name: player,
      strength: Math.floor(Math.random() * 100) + 1, // random strength between 1 and 100
      image: images/super-${index + 1}.png, // sequential image URL
      type: index % 2 === 0 ? 'hero' : 'villain', // alternating between hero and villain
    }));
  };
  
  
  const view = (playerObj) => {
    let player = document.createElement('div');
    player.classList.add('player');
    let image = document.createElement('img');
    image.setAttribute('src', playerObj.image);
    image.setAttribute('alt', '');
    let name = document.createElement('div');
    name.className = 'name';
    name.textContent = playerObj.name;
    let strength = document.createElement('div');
    strength.textContent = playerObj.strength;
    strength.className = 'strength';
    player.append(image, name, strength);
    return player;
  };

  const buildPlayers = (players, type) => {
    return players.filter((player) => player.type === type).map((player) => `
        <div class="player">
          <img src="${player.image}">
          <div class="name">${player.name}</div>
          <div class="strength">${player.strength}</div>
        </div>
      `)
      .join('');
  };
  
  
  // Display players in HTML
  const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
  };
  
  window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
  };
