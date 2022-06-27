"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMenuSelection = exports.MenuSelection = exports.stringChoice = exports.WorkingStatus = void 0;
var WorkingStatus;
(function (WorkingStatus) {
    WorkingStatus["WORK"] = "\u0110ang l\u00E0m vi\u1EC7c";
    WorkingStatus["NOTWORK"] = "Ngh\u1EC9 vi\u1EC7c";
})(WorkingStatus = exports.WorkingStatus || (exports.WorkingStatus = {}));
var stringChoice;
(function (stringChoice) {
    stringChoice["YES"] = "YES";
    stringChoice["NO"] = "NO";
})(stringChoice = exports.stringChoice || (exports.stringChoice = {}));
var MenuSelection;
(function (MenuSelection) {
    MenuSelection[MenuSelection["EXIT"] = 0] = "EXIT";
    MenuSelection[MenuSelection["ADD_NEW_EMPLOYEE"] = 1] = "ADD_NEW_EMPLOYEE";
    MenuSelection[MenuSelection["FIND_EMPLOYEE"] = 2] = "FIND_EMPLOYEE";
    MenuSelection[MenuSelection["CHECK_EMPLOYEE_STATUS"] = 3] = "CHECK_EMPLOYEE_STATUS";
    MenuSelection[MenuSelection["UPDATE_EMPLOYEE_INFO"] = 4] = "UPDATE_EMPLOYEE_INFO";
    MenuSelection[MenuSelection["UPDATE_EMPLOYEE_STATUS"] = 5] = "UPDATE_EMPLOYEE_STATUS";
    MenuSelection[MenuSelection["DELETE"] = 6] = "DELETE";
    MenuSelection[MenuSelection["SHOW_EMPLOYEE_LIST_BY_STATUS"] = 7] = "SHOW_EMPLOYEE_LIST_BY_STATUS";
    MenuSelection[MenuSelection["SHOW_SALARY"] = 8] = "SHOW_SALARY";
    MenuSelection[MenuSelection["SHOW_USER_ACC_INFOR"] = 9] = "SHOW_USER_ACC_INFOR";
    MenuSelection[MenuSelection["LOG_OUT"] = 10] = "LOG_OUT";
})(MenuSelection = exports.MenuSelection || (exports.MenuSelection = {}));
var UserMenuSelection;
(function (UserMenuSelection) {
    UserMenuSelection[UserMenuSelection["LOGOUT"] = 0] = "LOGOUT";
    UserMenuSelection[UserMenuSelection["SHOW_ACCOUNT_INFO"] = 1] = "SHOW_ACCOUNT_INFO";
    UserMenuSelection[UserMenuSelection["SHOW_USER_INFO"] = 2] = "SHOW_USER_INFO";
})(UserMenuSelection = exports.UserMenuSelection || (exports.UserMenuSelection = {}));
//# sourceMappingURL=enum.js.map