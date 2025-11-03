export class WhereService {
    constructor() {
        this.controllerPath = "";
        this.isRelativePath = "";
        this.authToken = "";
    }
    /**
     * 
     * @param {string} Name of the method to be added to the controller 
     * @param {json} params any of the parameters
     * @returns promise
     */
    async get(methodName, params) {

        let url = this.buildUrl(methodName);
        const headers = this.getRequestHeaders();

        if(params)
        {
            url = url +"/"+params;
        }

        try {
            const response = await fetch(url, {
                method: 'GET', // Or 'POST', 'PUT', 'DELETE', etc.
                headers: headers
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
        }


    }

    getRequestHeaders() {
        const reqHeaders = {
            'Content-Type': 'application/json',
        };

        if (this.authToken) {
            reqHeaders.Authorization = 'Bearer ' + this.authToken;
        }

        return reqHeaders;
    }
    async getblob(methodName, params) {
      
    }
    /**
     * 
     * @param {string} Name of the method 
     * @param {object} data to be passed
     * @returns promise
     */
    async post(methodName, data) {
        let url = this.buildUrl(methodName);
        const headers = this.getRequestHeaders();

        try {
                const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data),
            });
            return await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        
    }

    async postDataWithFiles(methodName, files, dataKey, data) {
        const url = this.buildUrl(methodName);

        try {
            const formData = new FormData();

            for (var k = 0; k < files.length; k++) {
                formData.append("file" + k, files[k]);
            }

            formData.append(dataKey, JSON.stringify(data));
            return await this.post(methodName, formData);

        } catch (error) {
            return null;
        }

    }

    setControllerPath(serviceControllerPath, isRelativePath, authToken) {
        this.controllerPath = serviceControllerPath;
        this.isRelativePath = isRelativePath;
        this.authToken = authToken;
    }

    buildUrl(methodName) {
        let url = `${this.controllerPath}/${methodName}`;
        return url;
    }


}