const direction = ['north', 'east', 'south', 'west'];

export const place = (x, y, f) => {
  if (x < 0 || x > 4 || y < 0 || y > 4)
    return {
      x,
      y,
      log: 'I cannot be placed here'
    };
  return { x, y, log: `I am at (${x}, ${y}), facing ${f}` };
};

export const move = (x, y, f) => {
  switch (f.toLowerCase()) {
    case 'north':
      y += 1;
      break;
    case 'south':
      y -= 1;
      break;
    case 'east':
      x += 1;
      break;
    case 'west':
      x -= 1;
      break;
    default:
      break;
  }
  if (x < 0) return 'I have reached west edge !';
  if (x > 4) return 'I have reached east edge !';
  if (y > 4) return 'I have reached north edge !';
  if (y < 0) return 'I have reached south edge !';
  return { x, y, log: `I am at (${x}, ${y}), facing ${f}` };
};

export const turnLeft = (x, y, f) => {
  let index = direction.indexOf(f.toLowerCase());
  if (index === 0) index = 3;
  else index -= 1;
  return {
    f: direction[index].toUpperCase(),
    log: `I am at (${x}, ${y}), facing ${f}`
  };
};

export const turnRight = (x, y, f) => {
  let index = direction.indexOf(f.toLowerCase());
  if (index === 3) index = 0;
  else index += 1;
  return { f: direction[index].toUpperCase(), log: `I am at (${x}, ${y}), facing ${f}` };
};
