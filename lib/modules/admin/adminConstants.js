/**
 * @author Ashish Bhalodia
 */

let messages = {
    InvalidCredentials: 'An account with the provided details does not exist. Please try again with valid details',
    internalServerError: 'Internal server error. Please try after some time',
    InvalidDetails: 'Please provide valid details',
    InvalidVerificationCode: 'Please provide a valid OTP',
    VerificationSuccess: 'Account verified successfully',
    Success: 'Success',
    TOKEN_NOT_PROVIDED: 'Your login session seems to be expired. Please login again',
    userUpdatedSuccess: "User updated successfully",
    InvalidPassword: 'Please provide valid password',
    LoginSuccess: 'Logged in successfully',
    LogoutSuccess: 'Logged out successfully',
    ProfileUpdated: 'Profile updated successfully',
    ResetPasswordMailSent: 'Please check your registered email for further',
    PasswordUpdateSuccess: "Password updated successfully",
    ResetPasswordLinkExpired: "Your reset password link seems to be expired",
    EmailAlreadyExists: 'Email id already exists',
    EmailResetSuccessful: 'Email address updated successfully',
    UserNotFound: 'User does not exists'
}

// CmsConstentName = {AboutUs , Features, Roadmap}

let codes = {
    FRBDN: 403,
    INTRNLSRVR: 500,
    Success: 200,
    DataNotFound: 404,
    BadRequest: 400,
    ReqTimeOut: 408
}

module.exports = {
    CODE: codes,
    MESSAGE: messages
}