"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
class Menu {
    menu() {
        console.log('---Menu chính---');
        console.log('1. Thêm nhân viên mới');
        console.log('2. Tìm kiếm nhân viên');
        console.log('3. Kiểm tra trạng thái nhân viên');
        console.log('4. Sửa thông tin nhân viên');
        console.log('5. Thay đổi trạng thái nhân viên');
        console.log('6. Xóa nhân viên khỏi hệ thống');
        console.log('7. Hiển thị danh sách nhân viên');
        console.log('8. Tính lương nhân viên');
        console.log('9. Hiển thị thông tin tài khoản');
        console.log('10. Xóa tài khoản nhân viên');
        console.log('0. Đăng xuất tài khoản');
    }
    subMenuAddNewEmployee() {
        console.log(`---Thêm nhân viên mới---`);
        console.log(`1. Thêm nhân viên làm toàn thời gian`);
        console.log(`2. Thêm nhân viên làm theo giờ`);
        console.log(`0. Trở lại menu chính`);
    }
    subMenuShowEmployeeByStatus() {
        console.log(`---Hiển thị danh sách nhân viên theo trạng thái`);
        console.log(`1. Danh sách nhân viên đang làm việc`);
        console.log(`2. Danh sách nhân viên đã nghỉ việc`);
        console.log(`0. Quay trở lại`);
    }
    menuUser() {
        console.log(`---User Menu---`);
        console.log(`1. Hiển thị thông tin tài khoản`);
        console.log(`2. Hiển thị thông tin cá nhân`);
        console.log(`0. Đăng xuất tài khoản`);
    }
}
exports.Menu = Menu;
//# sourceMappingURL=menuEM.js.map