var isProcessing = false;

export default class Logger {

    static process(message) {
        if (!isProcessing) {
            process.stdout.write(`> 💼 ${message} ... `);
        } else {
            let msg = (typeof message === "boolean") ? (message ? "OK" : "FAILED") : message;
            process.stdout.write(`${msg}\n`);
        }
        isProcessing = !isProcessing;
    }

    static failed(message) {
        console.log(`> ❌ ${message}`);
    }
}