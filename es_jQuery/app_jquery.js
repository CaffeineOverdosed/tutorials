const menu = [
      '🍞', '🥯', '🥞', '🥩', '🍗',
      '🍖', '🌭', '🍔', '🍟', '🍕',
      '🥪', '🌮', '🥗', '🥘', '🍜',
      '🍛', '🍣', '🥟', '🍘', '🍤'
  ];

  const 吃这个 = $("#eatthis");

  $("#eatwhat").click(makeChoice);

  function makeChoice() {
      吃这个.text(menu[getRandomInt(menu.length)]);
  }

  function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
  }
  