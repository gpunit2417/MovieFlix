import mongoose from "mongoose"
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const MONGODB_URI = process.env.MONGODB_URI;
// console.log(MONGODB_URI);


if (!MONGODB_URI) {
    throw new Error(
        "Please define the MONGODB_URI environment variable inside .env.local"
    )
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { con: null, promise: null }
}

const dbConnect = async () => {
    if (cached.conn) {
        return cached.conn;
    }


    // If a connection does not exist, we check if a promise is already in progress. If a promise is already in progress, we wait for it to resolve to get the connection
    if (!cached.promise) {
        const opts = {
            bufferCommands: false
        };

        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            return mongoose
        })
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn;
}

export default dbConnect;