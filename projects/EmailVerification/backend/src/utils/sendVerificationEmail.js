import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendVerificationEmail = async (toEmail, token) => {
  const verifyUrl = `${process.env.CLIENT_URL}/api/v1/users/verify-email?token=${token}`;
  console.log('EMAIL_USER:', process.env.EMAIL_USER);
  console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '✅ loaded' : '❌ missing');
  await transporter.sendMail({
    from: `"MyApp" <${process.env.EMAIL_USER}>`,
    to: toEmail,
    subject: `Verify your email address`,
    html: `
      <h2>Email Verification</h2>
      <p>Click the link below to verify your email. This link expires in 1 hour.</p>
      <a href="${verifyUrl}" target="_blank">Verify Email</a>
      <p>If the button doesn't work, copy this link: ${verifyUrl}</p>
    `,
  });
};

export default sendVerificationEmail;
