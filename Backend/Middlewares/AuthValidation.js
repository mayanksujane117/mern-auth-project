const joi = require('joi');

const registerValidation = (req, res, next) => {  
    const schema = joi.object({
        name: joi.string().min(3).max(30).required(),
        email: joi.string().email().required(),
        password: joi.string().min(6).required()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();

}

const LoginValidation = (req, res, next) => {  
    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(6).required()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
    


}
module.exports = {
    registerValidation,
    LoginValidation
}