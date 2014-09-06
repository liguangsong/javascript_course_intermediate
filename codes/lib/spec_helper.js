/**
 * Created by ching on 14-9-6.
 */

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
