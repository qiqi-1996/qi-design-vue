import shortid from "shortid";
import { EventEmitter } from "events";

var event = new EventEmitter();

function validator(data) {
    this.data = data;

    this.belongsTo = (...val) => {
        if (Array.isArray(val[0])) {
            val = val[0];
        }
        if (val.indexOf(this.data) == -1) {
            return false;
        }
        return true;
    }

    return this;
}

function id() {
    return shortid.generate();
}

export default {
    validator,
    event,
    id,
}