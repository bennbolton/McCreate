PlayerEvents.loggedIn(event => {
    let pData = event.player.persistentData;
    if (!pData.firstJoin) {
      pData.firstJoin = true
      // Do stuff only on first join, here we give the player some diamonds and a sword
      event.player.give("ftbquests:book")
    }
  })