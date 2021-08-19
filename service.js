lass UserService {
    static login(userName, password) {
        const selectedData = {
            selector: {
                username: userName,
                password: password
            },
            fields: ["name", "email"]
        };
        const dbUserName = "apikey-v2-1b9ybx2cx524ah258208o3jmatpq40vhw2s5oby211dw";
        const dbPassword = "cd8a50d86762e2f6d802820e730df6d4";
        const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);
        let url = "https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/collegeadmissionapp_user/_find";
        return (axios.post(url, selectedData, { headers: { 'Authorization': basicAuth } }));
    }

    static register(formData) {

        const dbUserName = "apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4";
        const dbPassword = "163671d490ddeef138fc61e470881715";
        const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);

        let url = "https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/collegeadmissionapp_user";
        return (axios.post(url, formData, { headers: { 'Authorization': basicAuth } }));
    }