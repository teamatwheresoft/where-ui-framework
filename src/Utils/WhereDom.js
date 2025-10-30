export const WhereDom ={
    downloadImageFile : function(data,fileName){
        this.downloadFile(data,fileName,"text/json");
    },

    downloadJsonFile : function(data,fileName){
        this.downloadFile(data,fileName,"text/json");
    },


    downloadFile : function(data,fileName,fileType){
        var blob = new Blob([data], {type:fileType}),
        e    = document.createEvent('MouseEvents'),
        a    = document.createElement('a')

        a.download = fileName;
        a.href = window.URL.createObjectURL(blob);
        a.dataset.downloadurl =  [fileType, a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
    },

    downloadUrl : function(url)
    {
        let e    = document.createEvent('MouseEvents'),
        a    = document.createElement('a')

        a.download = url;
        a.href = url
        a.dataset.downloadurl =  url
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
    },

    createAndExecuteMailTo(mailTo){

        let e    = document.createEvent('MouseEvents'),
        a    = document.createElement('a')
        a.href = mailTo;
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
    },

    getQueryStringValueFromCurentDocuemnt(qryString)
    {
        let qryVal= window.location.search;
        if(qryVal.length == 0)
        {
            return "";
        }

        if(qryVal[0] == "?")
        {
            qryVal = qryVal.substring(1);
        }
        
        let allQryStr = qryVal.split("&");

        qryString = qryString.toLowerCase();

        for(let i=0;i<allQryStr.length;i++)
        {
            let qryStr = allQryStr[i].split("=");
            if(qryStr[0].toLowerCase() === qryString)
            {
                if(qryStr.length > 1)
                {
                    return qryStr[1];
                }
                
                return "";
            }
        }

        return "";

    }

}