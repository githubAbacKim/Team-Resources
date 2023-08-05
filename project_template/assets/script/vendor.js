// define main functions, call back functions and fetch function here


// ********************** reusable / main functions **********************
    // refresh table data everytime new data is added on the table
    const dtDestroyVendor = (table, tbody) => {
        $('#' + table).DataTable().destroy();
        $('#' + tbody).empty();
    }
    // mustache function
    const renderTemp = (container,template,data) =>{
        const $container = container;
        const $template = template.html();  
        
        $container.append(Mustache.render($template, data)); 
    }
    // call the basic overlay modal
    const globalmodalVendor = (title,modalname) =>{
        modalname.modal("show");
        modalname.find('.modaltitle').text(title);
    }
    const asyncgetVendor = (url,callback,errcallback) => {
        $.get(url)
        .done(response => callback(response))
        .fail(error => errcallback(error));
    }
    const ajaxgetVendor = url =>{
        var tmp;
        $.ajax({
            url:url,
            type: 'GET',
            dataType: 'json',
            async: false,
            success: function (results) {
                tmp = results;
            },
            error: function (xhr, status, error) {
                console.log(error);
            },
        });

        return tmp;
    }
    const postDataVendor = (data, url) => {
        return new Promise((resolve, reject) => {
          $.ajax({
            url: url,
            method: "POST",
            type: 'POST',
            contentType: 'application/json',
            timeout: 0,
            data: data,
            success: function(response) {
              resolve(response.message);
            },
            error: function(xhr, status, error) {
              console.log('error:', error);
              console.log('status:', status)
              console.log('xhr:', xhr)
              reject(error);
            },
          });
        });
    }
    const putDataVendor = (data, url) => {
        return new Promise((resolve, reject) => {
          $.ajax({
            url: url,
            method: "PUT",
            type: 'PUT',
            contentType: 'application/json',
            timeout: 0,
            // data: JSON.stringify(data),
            data: data,
            success: function(response) {
                resolve(response);
            },
            error: function(xhr, status, error) {
              console.log('error:', error);
              console.log('status:', status)
              console.log('xhr:', xhr)
              reject(error);
            },
          });
        });
    }
    const unresolvePutDataVendor = (data, url,successCallback, errorCallback) => {
        return new Promise((resolve, reject) => {
          $.ajax({
            url: url,
            method: "PUT",
            type: 'PUT',
            contentType: 'application/json',
            timeout: 0,
            // data: JSON.stringify(data),
            data: data,
            success: function(response) {
                successCallback(response);
            },
            error: function(xhr, status, error) {
              console.log('error:', error);
              console.log('status:', status)
              console.log('xhr:', xhr)
              errorCallback(error);
            },
          });
        });
    }
    const deleteDataVendor = (data,url) => {
        return new Promise((resolve, reject) => {
          $.ajax({
            url: url,
            method: "DELETE",
            type: "DELETE",
            contentType: "application/json",
            data: JSON.stringify(data),
            success: function (response) {
              resolve(response.message);
            },
            error: function (xhr, status, error) {
              reject(error);
            },
          });
        });
    }
    const putDataSecondaryVendor = (data, url) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            method: 'POST',
            contentType: 'application/json',
            headers: {
            'X-HTTP-Method-Override': 'PUT'
            },
            data: data,
            success: function(response) {
            resolve(response.message);
            },
            error: function(xhr, status, error) {
            console.log('error:', error);
            console.log('status:', status)
            console.log('xhr:', xhr)
            reject(error);
            },
        });
    });
    }
    const ajaxpostImgVendor = (data,url) => {    
         return new Promise((resolve, reject) => {
            $.ajax({
              url: url,
              method: "POST",
              processData: false,
              mimeType: "multipart/form-data",
              contentType: false,
              data: data,
              success: function(response) {
                resolve(response);
              },
              error: function(xhr, status, error) {
                console.log('error:', error);
                console.log('status:', status)
                console.log('xhr:', xhr)
                reject(error);
              },
            });
          });
    }
    const ajaxPutImgVendor = (data, url) => {
        var result = null;
        $.ajax({
            url: url,
            method: 'PUT',
            timeout: 0,
            processData: false,
            mimeType: "multipart/form-data",
            contentType: false,
            data: data,
            async: true,
            success: function (responses) {
                result = responses;
            },
            error: function (xhr, status, error) {
                console.log(error);
            },
        });
        return result;
    }
    const ajaxdelDataVendor = (url) => {
        let result;
        $.ajax({
            "url": url,
            "method": 'DELETE',
            "timeout": 0,
            success: function (responses) {
                result = responses;
            },
            error: function (xhr, status, error) {
                console.log('error:',error);
                console.log('status:',status)
                console.log('xhr:',xhr)
            },
        });
        return result;
    }
// ***************************** end *********************************

// ******************** processing functions **************************

    const processingVendor = () =>{

    }
// ***************************** end ************************************

// ******************* callback functions for async get **********************

    const cb_massageTable = (response) =>{
        
    }
    