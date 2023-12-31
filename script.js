function createUser (name) {
    const discordName = "@" + name;
  
    let reputation = 0;
    const getReputation = () => reputation;
    const giveReputation = () => reputation++;
  
    return { name, discordName, getReputation, giveReputation };
}


function createPlayer(name, level) {
    const { discordName, getReputation } = createUser(name);

    const increaseLevel = () => level++;
    return { name, discordName, getReputation, increaseLevel };
}
  
