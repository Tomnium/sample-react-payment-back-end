var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost/payapp', { useNewUrlParser: true, useUnifiedTopology: true });