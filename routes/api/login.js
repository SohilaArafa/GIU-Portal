router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });
  
  newItem.save().then(item => res.json(item));
});

router.post('/', (req, res) => {
  const newItem = new Item({
    password: req.body.password
  });
  
  newItem.save().then(item => res.json(item));
});


