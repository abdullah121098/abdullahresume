export const download = () => {
    const filePath = `${process.env.PUBLIC_URL}/Assets/Download/ABDULLAHM(2024)Latest.pdf`;
    const link = document.createElement("a");
    link.download = 'ABDULLAHM(2024)Latest.pdf';
    link.href = filePath;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};