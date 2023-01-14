import axios from "axios";

export async function fetchData() {
    try {
        const { data }: any = await axios.get("https://api.iconify.design/search?query=pen");
        return data;
    } catch (error: any) {
        console.log("Error fetching data:", error);
        return error;
    };
};

export const fetchQuery = (query: string) => axios.get(`https://api.iconify.design/search?query=${query}`).then(({ data }) => data);