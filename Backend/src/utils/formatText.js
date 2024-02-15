export function trimObj(obj) {
    const trimmedObj = {};
    for (const key in obj) {
        const value = obj[key];
        if (typeof value === 'string') {
            trimmedObj[key] = value.trim();
        } else {
            trimmedObj[key] = value;
        }
    }
    return trimmedObj;
}

export function toLowerObj(obj) {
    const lowerObj = {};
    for (const key in obj) {
        const value = obj[key];
        if (typeof value === 'string') {
            lowerObj[key] = value.toLowerCase();
        } else {
            lowerObj[key] = value;
        }
    }
    return lowerObj
}
