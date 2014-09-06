    var data = ["9", "9", "3", "6.1", "4", "5", "5", "6", "5",
        "3", "5", "1", "4", "7", "1", "3","2", "4", "7.8", "8",
        "8", "0.4", "7", "8", "7", "1", "5", "3", "4", "5", "2",
        "6", "3"];

    function analyse_array(){
        var odd = 0;
        var even = 0;
        for(var i=0;i<data.length;i++){
            if(data[i]%2 === 1){
                odd++;
            }
            else if(data[i]%2 === 0){
                even++;
            }
        }
        return "数组中含有奇数"+odd+"个,偶数"+even+"个.";
    }

    var result = analyse_array();
    console.log(result);
