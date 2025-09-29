// backend/controllers/contact.controller.js
import dotenv from 'dotenv';
import { sendEmail } from '../services/gmail.service.js';

dotenv.config();

/**
 * @desc    Send a contact form email
 * @route   POST /api/contact
 * @access  Public
 * @param   {Object} req - Express request object (expects { name, email, subject, message } in body)
 * @param   {Object} res - Express response object
 */
export const sendContactEmail = async (req, res) => {
  const { name, email, phoneNumber, subject, message } = req.body;

  // 1. Basic input validation
  if (!name || !email || !phoneNumber || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // 2. Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email address.' });
  }

  // 3. Create email content (keeping your original format)
  const textContent = `
Name: ${name}
Email: ${email}
Phone Number: ${phoneNumber}
Subject: ${subject}

Message:
${message}
  `;

  const htmlContent = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone Number:</strong> ${phoneNumber}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br>')}</p>
  `;

  // 4. Send the email using Gmail API
  try {
    const result = await sendEmail({
      to: 'pheezyhomesinteriors@gmail.com',
      subject: `Contact Form: ${subject}`,
      text: textContent,
      html: htmlContent,
      from: `"${name}" <pheezyhomesinteriors@gmail.com>`,
    });

    console.log('✅ Contact email sent successfully:', result.messageId);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('❌ Error sending contact email:', error);
    res.status(500).json({
      message: 'Failed to send message. Please try again later.'
    });
  }
};