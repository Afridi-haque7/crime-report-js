// import Mailgen from "mailgen";
// import nodemailer from "nodemailer";


// const mailGenerator = new Mailgen({
//   theme: 'default',
//   product: {
//     name: "SafeReport",
//     link: process.env.BASE_URL,
//   },
// });

// const transporter = nodemailer.createTransport({
//   host: process.env.MAILTRAP_HOST,
//   port: process.env.MAILTRAP_PORT,
//   secure: false, // true for 465, false for other ports
//   auth: {
//     user: process.env.MAILTRAP_USER,
//     pass: process.env.MAILTRAP_PASSWORD,
//   },
// });
// // Email templates
// export const emailTemplates = {
//     verification: (name, verificationUrl) => ({
//       body: {
//         name,
//         intro: "Welcome to our app! We're excited to have you on board.",
//         action: {
//           instructions: "To verify your email address, please click below:",
//           button: {
//             color: "#22BC66",
//             text: "Verify Email",
//             link: verificationUrl
//           }
//         },
//         outro: [
//           "If you didn't request this email, you can safely ignore it.",
//           "Need help or have questions? Just reply to this email."
//         ]
//       }
//     }),
//     // Add other templates as needed
//     // passwordReset: (name, resetUrl) => ({ /* ... */ })
// };


// export const sendEmail = async ({to, subject, template}) => {
//     try {
//       // Generate HTML email
//       const emailBody = mailGenerator.generate(template);
//       // Generate plain-text version
//       const emailText = mailGenerator.generatePlaintext(template);

//       const mailOptions = {
//         from: "moderator@safereport.com",
//         to,
//         subject,
//         text: emailText,
//         html: emailBody,
//       };

//       try {
//         await transporter.sendMail(mailOptions);
//       } catch (error) {
//         console.error("EMail send falied! ", error);
//         return false;
//       }
//       return true;
//     } catch (error) {
//       console.error("Email sending error:", error);
//       return false;
//     }
// };
