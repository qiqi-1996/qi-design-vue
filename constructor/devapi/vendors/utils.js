var logs = [];

function writeLog(message) {
    logs.push(message)
    if (logs.length > 100) {
        logs.shift();
    }
}

function readLog() {
    return logs;
}

function success(data, msg = "success") {
    return {
        err: false,
        msg,
        data
    }
}

function failed(data, msg = "failed") {
    return {
        err: true,
        msg,
        data
    }
}

export default {
    success,
    failed,
    writeLog,
    readLog
}