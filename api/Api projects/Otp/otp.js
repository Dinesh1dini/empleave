require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const twilio = require('twilio');



const app = express();


const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);





mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));




  const userSchema = new mongoose.Schema({
    name: String,
    mobileNumber: String,
    otp: String,
    otpExpiration: Date,
    password: String,
  });
  
  const User = mongoose.model('User', userSchema);
  


  app.use(bodyParser.json());
  
  app.post('/register', async (req, res) => {
    try {
      const { name, mobileNumber, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({
        name,
        mobileNumber,
        password: hashedPassword,
      });
      await user.save();
      res.status(200).json({ message: 'User registered successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Failed to register user' });
    }
  });




  app.post('/login', async (req, res) => {
    try {
      const { mobileNumber, password } = req.body;
      const user = await User.findOne({ mobileNumber });
      if (!user) {
        res.status(401).json({ error: 'Invalid credentials' });
      } else {
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (isPasswordValid) {
          const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
          res.status(200).json({ token });
        } else {
          res.status(401).json({ error: 'Invalid credentials' });
        }
      }
    } catch (err) {
      res.status(500).json({ error: 'Failed to login' });
    }
  });


  app.post('/send-otp', async (req, res) => {
    try {
      const { mobileNumber } = req.body;
      const otp = Math.floor(1000 + Math.random() * 9000).toString();
      const otpExpiration = new Date(Date.now() + 10 * 60 * 1000); // OTP expires after 10 minutes
      const user = await User.findOneAndUpdate(
        { mobileNumber },
        { otp, otpExpiration },
        { new: true, upsert: true }
      );
      if (!user) {
        res.status(404).json({ error: 'User not found' });
      } else {
        await client.messages.create({
          body: `Your OTP is ${otp}`,
          from: process.env.TWILIO_PHONE_NUMBER,
          to: mobileNumber,
        });
        res.status(200).json({ message: 'OTP sent successfully' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Failed to send OTP' });
    }
  });


  app.post('/verify-otp', async (req, res) => {
    try {
      const { mobileNumber, otp } = req.body;
      const user = await User.findOne({ mobileNumber });
      if (!user) {
        res.status(404).json({ error: 'User not found' });
      } else if (user.otp !== otp || user.otpExpiration < Date.now()) {
        res.status(401).json({ error: 'Invalid OTP' });
      } else {
        res.status(200).json({ message: 'OTP verified successfully' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Failed to verify OTP' });
    }
  });




  
app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});