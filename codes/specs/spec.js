var
    test_of = {
        "变量作用域": function () {
            send_result_by(catch_the_spec_error_of(index_1_1))
        },
        '参数变量': function () {
            send_result_by(catch_the_spec_error_of(index_1_2))
        },
        "'类'和对象": function () {
            send_result_by(catch_the_spec_error_of(index_2_1))
        },
        '构造函数': function () {
            send_result_by(catch_the_spec_error_of(index_2_2))
        }
    };



function index_1_1() {
    var v1 = typeof logs[0] === 'string';
    var v2 = logs[0] === "数组中含有奇数19个,偶数11个.";
    data = [1,2];
    var v3 = analyse_array() === "数组中含有奇数1个,偶数1个.";
    return v1 && v2 && v3;

}
function index_1_2() {
    var v1 = typeof logs[0] === 'string';
    var v2 = logs[0] === "数组中含有奇数19个,偶数11个.";
    var data = [1,2];
    var v3 = analyse_array(data) === "数组中含有奇数1个,偶数1个.";
    return v1 && v2 && v3;
}
function index_2_1() {
    Robot.say_hello();
    var the_log_info_is_a_string = typeof logs[0] === 'string';
    var the_log_info_contain_robot_s_birthday = -1 < logs[0].search(Robot.birthday);
    var the_log_info_contain_robot_s_name = -1 < logs[0].search(Robot.name);
    return the_log_info_is_a_string && the_log_info_contain_robot_s_birthday && the_log_info_contain_robot_s_name;
}

function index_2_2() {
    Robot.say_hello();
    var the_log_info_is_a_string = typeof logs[0] === 'string';
    var the_log_info_contain_robot_s_birthday = -1 < logs[0].search(Robot.birthday);
    var the_log_info_contain_robot_s_name = -1 < logs[0].search(Robot.name);
    return the_log_info_is_a_string && the_log_info_contain_robot_s_birthday && the_log_info_contain_robot_s_name;
}


//================logic method=======================
function pass_game() {
    parent.report(true, "Success!");
}
function unpass_game() {
    parent.report(false, "Unfortunate!");
}
function send_result_by(result) {
    result ? pass_game() : unpass_game();
}
function catch_the_spec_error_of(code_block) {
    try {
        var result = code_block();
        return result;
    } catch (err) {
        console.info('SPEC ERROR:' + err.description);
        return false;
    }
}
