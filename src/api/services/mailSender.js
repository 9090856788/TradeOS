import otpGenerator from 'otp-generator';
import nodemailer from 'nodemailer';
import fs from 'fs/promises';
import inlineCss from 'inline-css';

export const generateOTP = () => {
  return otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    lowerCaseAlphabets: false,
    specialChars: false,
  });
};

export const mailSender = async (email, otp, otp_type) => {
  let htmlContent = await fs.readFile('otp_template.html', 'utf-8');

  htmlContent = htmlContent.replace('TradeOS_otp', otp);
  htmlContent = htmlContent.replace('TradeOS_otp2', otp_type);
  const options = {
    url: '',
  };
  htmlContent = await inlineCss(htmlContent, options);

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: Number(process.env.MAIL_PORT),
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const result = await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: email,
      subject: 'Your TradeOS verification OTP Code',
      html: htmlContent,
    });

    return result;
  } catch (error) {
    console.error('Error sending email:', error.message);
    throw error;
  }
};
