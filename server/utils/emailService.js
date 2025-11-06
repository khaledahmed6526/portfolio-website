/**
 * Email Service
 * Handle sending emails
 */

const nodemailer = require('nodemailer');

/**
 * Create email transporter
 */
const createTransporter = () => {
  // Gmail configuration with explicit settings
  return nodemailer.createTransport({  // Fixed: createTransport not createTransporter
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // use TLS
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

/**
 * Send email notification when receiving a new message from Contact Form
 * @param {Object} messageData - Message data
 */
exports.sendContactNotification = async (messageData) => {
  try {
    console.log('🔄 Attempting to send email...');
    console.log('📧 Email config:', {
      user: process.env.EMAIL_USER,
      hasPassword: !!process.env.EMAIL_PASS
    });
    
    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'akhaledahmedmahamed@gmail.com', // Your personal email
      subject: `New Message from Website: ${messageData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #0ea5e9; text-align: center;">New Message from Your Website</h2>
          
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${messageData.name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${messageData.email}</p>
            <p style="margin: 10px 0;"><strong>Subject:</strong> ${messageData.subject}</p>
          </div>

          <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #0ea5e9; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="color: #6b7280; line-height: 1.6;">${messageData.message}</p>
          </div>

          <div style="text-align: center; margin-top: 30px; padding: 15px; background-color: #f9fafb; border-radius: 5px;">
            <p style="color: #6b7280; margin: 5px 0;">Sent at: ${new Date().toLocaleString('en-US')}</p>
            <p style="color: #9ca3af; font-size: 12px; margin: 5px 0;">
              To reply to this message, you can send an email directly to: ${messageData.email}
            </p>
          </div>

          <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #9ca3af; font-size: 12px;">
              This email was sent automatically from your website system
            </p>
          </div>
        </div>
      `,
      // Plain text version
      text: `
        New Message from Website
        
        Name: ${messageData.name}
        Email: ${messageData.email}
        Subject: ${messageData.subject}
        
        Message:
        ${messageData.message}
        
        Reply to: ${messageData.email}
      `
    };

    console.log('📤 Sending email to:', mailOptions.to);
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully!');
    console.log('📨 Message ID:', info.messageId);
    console.log('📬 Response:', info.response);
    return { success: true, messageId: info.messageId };
    
  } catch (error) {
    console.error('❌ Error sending email:');
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    console.error('Error code:', error.code);
    console.error('Full error:', error);
    // Don't stop the message saving process if email fails
    return { success: false, error: error.message };
  }
};

/**
 * Send welcome email to client (optional)
 * @param {Object} clientData - Client data
 */
exports.sendWelcomeEmail = async (clientData) => {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: clientData.email,
      subject: 'Thank You for Contacting Us!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #0ea5e9;">Hello ${clientData.name}!</h2>
          
          <p style="color: #374151; line-height: 1.6;">
            Thank you for contacting us. We have received your message and will get back to you as soon as possible.
          </p>

          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 5px 0;"><strong>For Inquiries:</strong></p>
            <p style="margin: 5px 0;">📧 Email: akhaledahmedmahamed@gmail.com</p>
            <p style="margin: 5px 0;">📞 Phone: +201096963346</p>
          </div>

          <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
            Best regards,<br>
            The Team
          </p>
        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Welcome email sent to client:', info.messageId);
    return { success: true, messageId: info.messageId };
    
  } catch (error) {
    console.error('❌ Error sending welcome email:', error);
    return { success: false, error: error.message };
  }
};
