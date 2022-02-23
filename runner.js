const cypress = require('cypress')
const nodemailer = require('nodemailer');

let mailTransporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'ramu36985@gmail.com',
		pass: "ramu1234"
	}
});

cypress
  .run({
    // the path is relative to the current working directory
    spec: './cypress/integration/my-tests/test.js',
  })
  .then((results) => {
	let mailDetails = {
		from: 'ramu36985@gmail.com@gmail.com',
		to: 'naaperuram7@gmail.com',
		subject: 'afWF mail',
		text: "sample test",
		attachments :[{
			filename:"index.html",
			path:"cypress/reports/index.html"
		}]
	};
	mailTransporter.sendMail(mailDetails, function(err, data) {
		if(err) {
			console.log(err);
		} else {
			console.log('Email sent successfully');
		}
	});
  })
  .catch((err) => {
    console.error(err)
  })