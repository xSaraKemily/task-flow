export function uuid(): string {
    let hex = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";

    return hex.replace(/[xy]/g, (c) => {
        let r = Math.random() * 16 | 0;
        let v = c === "x" ? r : (r & 0x3 | 0x8);
        
        return v.toString(16);
    });
}