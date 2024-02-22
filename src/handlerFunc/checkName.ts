export const checkName = (search: string, name: string) => {
    const str = name.toLowerCase();
    if (str.indexOf(search.toLowerCase()) === -1) {
        return false;
    } else {
        return true;
    }
};
