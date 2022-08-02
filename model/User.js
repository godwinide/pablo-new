const {model, Schema} = require("mongoose");

const UserSchema = new Schema({
    fullname:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    bitcoin:{
        type: String,
        required: false
    },
    accountName:{
        type: String,
        required: false
    },
    accountNumber:{
        type: String,
        required: false
    },
    bankName:{
        type: String,
        required: false
    },
    balance:{
        type: Number,
        required: false,
        default: 0
    },    
    total_earned:{
        type: Number,
        required: false,
        default: 0
    },
    total_deposit:{
        type: Number,
        required: false,
        default: 0
    },
    active_deposit:{
        type: Number,
        required: false,
        default: 0
    },
    pending:{
        type: Number,
        required: false,
        default: 0
    },
    total_withdraw:{
        type: Number,
        required: false,
        default: 0
    },
    account_plan:{
        type: String,
        required: false,
        default: "STARTER ($1,000 - $10,000)"
    },
    debt:{
        type: Number,
        required: false,
        default: 0
    },
    profit:{
        type: Number,
        required: false,
        default: 0
    },
    last_deposit:{
        type: Number,
        required: false,
        default: 0
    },
    last_withdraw:{
        type: Number,
        required: false,
        default: 0
    },
    isAdmin:{
        type: Boolean,
        required: false,
        default: false
    },
    regDate:{
        type: Date,
        required: false,
        default: Date.now()
    },
    pin:{
        type: Number,
        required: false,
        default: Number(String(Math.random()).slice(2,8))
    }
});

module.exports = User = model("User", UserSchema);