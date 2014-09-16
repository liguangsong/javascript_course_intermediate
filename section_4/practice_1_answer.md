    var info = [];
    function show(data){
        info.push(data);
        if ( typeof data === "string")
        {
            console.log(data);
        }
        else if ( typeof data === "object"){
            for(var item in data){
                console.log(item + ": " + data[item]);
            }
        }
    }
    function get_inputs (inputs, callback){
        callback(inputs);
    }
    get_inputs({name:"bower",speciality:"Robot"}, show);
