const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


var set_password = (password) => {
    return password
}

const UserSchema = new mongoose.Schema({
    name: {type: String},
    age: {type: Number},
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Client', 'Manager', 'Admin'],
        default: 'Client'
    }
});


UserSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) {
                    return next(err);
                }
                 user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

// Comparaison des mots de passes reçus et en base
UserSchema.methods.comparePassword = function (pw, cb) {
    bcrypt.compare(pw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};


const User = mongoose.model('User', UserSchema);

module.exports = User;



