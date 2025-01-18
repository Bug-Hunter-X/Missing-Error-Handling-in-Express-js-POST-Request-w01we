const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  const user = req.body;
  // Validate user data
  if (!user || !user.name || !user.email) {
    return res.status(400).json({ error: 'Missing required user data' });
  }
  //Further validation can be added here
  console.log('user', user);
  res.status(201).json({ message: 'User created' });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});