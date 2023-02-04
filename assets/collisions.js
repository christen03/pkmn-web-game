const collisions=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104,
    0, 0, 0, 0, 0, 0, 29104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 29104, 29104, 29104, 29104, 0, 29104, 0, 0, 29104, 29104, 29104, 0, 0, 0, 0, 0, 0, 0, 0, 29104, 29104, 29104, 29104, 29104, 29104, 0, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 0, 0, 0,
    0, 29104, 0, 0, 29104, 0, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 0, 29104, 29104, 0, 0, 0, 0, 29104, 0, 29104, 0, 0, 0, 0, 29104, 0, 29104, 29104, 29104, 0, 29104, 0, 29104, 0, 0, 29104, 29104, 0, 29104, 0, 29104, 0, 0, 0,
    29104, 29104, 0, 0, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 0, 0, 0, 29104, 29104, 29104, 29104, 0, 0, 29104, 0, 0, 0, 0, 29104, 0, 29104, 0, 0, 0, 0, 29104, 0, 29104, 29104, 29104, 0, 29104, 0, 29104, 0, 0, 29104, 29104, 0, 29104, 0, 29104, 0, 0, 0,
    0, 0, 0, 29104, 0, 0, 0, 0, 0, 29104, 29104, 0, 0, 0, 29104, 29104, 29104, 29104, 0, 0, 29104, 0, 0, 0, 0, 29104, 0, 29104, 0, 0, 0, 0, 0, 0, 29104, 0, 29104, 0, 0, 0, 29104, 0, 0, 0, 0, 0, 29104, 0, 29104, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 29104, 0, 0, 0, 0, 0, 0, 29104, 29104, 0, 0, 29104, 0, 0, 0, 0, 29104, 0, 29104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 29104, 0, 0, 0,
    29104, 29104, 29104, 29104, 0, 0, 0, 0, 0, 29104, 29104, 0, 0, 0, 29104, 29104, 29104, 29104, 0, 0, 29104, 29104, 29104, 29104, 29104, 29104, 0, 29104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 29104, 0, 0, 0,
    0, 0, 0, 29104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 29104, 0, 0, 0, 0, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 0, 0, 0,
    0, 0, 0, 29104, 29104, 29104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 29104, 29104, 0, 0, 29104, 29104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 29104, 0, 29104, 29104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 29104, 29104, 29104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 29104, 0, 0,
    0, 0, 0, 0, 0, 29104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 29104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 29104, 0, 29104, 0, 0, 0, 0, 0, 29104, 29104, 29104, 29104, 29104, 0, 0, 0, 0, 29104, 0, 0,
    0, 0, 0, 0, 0, 29104, 0, 0, 29104, 29104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 29104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 29104, 29104, 29104, 29104, 29104, 0, 0, 0, 29104, 0, 0, 0, 29104, 0, 0, 0,
    0, 0, 0, 0, 0, 29104, 0, 0, 29104, 29104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 29104, 0, 0, 29104, 29104, 0, 0, 0, 0, 0, 0, 0, 29104, 29104, 29104, 29104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    29104, 0, 0, 0, 0, 29104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 29104, 0, 29104, 29104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 29104, 29104, 29104, 29104, 0, 0, 29104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 29104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 29104, 29104, 0, 0, 0, 0, 0, 0, 0, 29104,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 29104, 29104, 0, 29104, 29104, 0, 0, 0, 0, 29104, 29104, 0, 29104,
    0, 0, 0, 29104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 29104, 29104, 0, 29104, 29104, 0, 0, 0, 29104, 29104, 0, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 0, 29104,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 29104, 0, 0, 0, 29104, 0, 29104, 0, 29104, 29104, 0, 29104, 0, 0, 0, 0, 0, 0, 29104, 0, 29104,
    0, 29104, 29104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 29104, 0, 0, 0, 0, 29104, 29104, 29104, 29104, 0, 29104, 29104, 0, 29104, 0, 29104, 29104, 0, 29104, 0, 29104, 0, 29104, 0, 0, 29104, 0, 29104,
    0, 29104, 29104, 0, 0, 0, 0, 29104, 29104, 29104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 29104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 29104, 0, 0, 0, 0, 0, 0, 0, 29104, 29104, 0, 0, 29104, 29104, 29104, 29104, 0, 29104,
    0, 0, 29104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 29104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104, 29104,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]