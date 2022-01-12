db.emailtemplates.insert({status: "ACTIVE", type: "EMAIL", mailName: "New contact-us query", mailTitle: "DZI", mailSubject: "DZI New Contact Query", mailBody: "Hello Admin,<div><br>You received a new query: Name: ${name}, Email: ${userEmailId}, Contact no: ${contactNumber}, Comment: ${comment}</div><div></div><div><br></div><div>Best Regards,</div><div>DZI Team</div>", createdAt: Date.now()})
db.emailtemplates.insert({status: "ACTIVE", type: "EMAIL", mailName: "User: Forgot password", mailTitle: "DZI", mailSubject: "DZI Password Recovery", mailBody: "<p>Hello ${name},</p><div>&nbsp;</div><div><p>We heard you lost your password. Please click this link and set your new password http://localhost:4402/resetPassword/${redisId}</p></div><div>&nbsp;</div><div><p>Best Regards,</p></div><div><p>DZI Team</p></div>", createdAt: Date.now()})
db.thirdpartyservices.insert({status: "ACTIVE", type: "MAIL_GATEWAY", emailId: "ashish.bhalodia44@gmail.com", password: "asb9558162563111", createdAt: Date.now()})