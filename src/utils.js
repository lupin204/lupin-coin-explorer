export const makeDateSexy = seconds => {
    const date = new Date(null);
    date.setSeconds(seconds);
    return date.toUTCString();
};

export const stringToJSON = (string) => {
    try {
        return JSON.parse(string);
    } catch(e) {
        console.log(e);
    }
}

export const parseMessage = message => {
    if (typeof message.data === "string") {
        const { data } = message;
        const parsedMessage = stringToJSON(data);

        if (parsedMessage !== null) {
            const { type } = parsedMessage;

            // 블록이 새로 생성될때 서버에서 보내는 메시지
            if (type === "BLOCKCHAIN_RESPONSE") {
                return parsedMessage.data;
            } else {
                return null;
            }
        }
    }
}