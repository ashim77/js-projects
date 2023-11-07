const express = require('express');

const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');

// Routes
const postsRoutes = require('./routes/api/posts');
const app = express();

// Connect to MongoDB
mongoose.connect(MONGO_URI)
    .then(()=> console.log('MongoDB connected'))
    .catch((error)=> console.log(error))

// user routs
app.use('/api/posts',postsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server run at port ${PORT}`));