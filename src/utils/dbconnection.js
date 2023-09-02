const { My_USERNAME, PASSWORD } = process.env;
export const connectionSrt = `mongodb+srv://${My_USERNAME}:${PASSWORD}@cluster0.xsvpu6w.mongodb.net/productDB?retryWrites=true&w=majority`;
