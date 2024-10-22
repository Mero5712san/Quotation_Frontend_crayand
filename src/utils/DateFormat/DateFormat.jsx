export const formatDate = (timestamp) => {
    const options = { day: "2-digit", month: "short", year: "2-digit" };
    return new Date(timestamp).toLocaleDateString("en-GB", options);
};