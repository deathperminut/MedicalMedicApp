import { configuraciones } from "../Appconfig";

let server = configuraciones.server;

export const environment = {
  production: false,
  // API
  api: server,

  // SERVICIOS DE GESTIÓN DE USUARIO
  logIn: 'login/standar_login/',
  RegisterUser: 'usuarios/create_user/',
  updateUser: 'usuarios/update_user/',
  getToken: 'login/response_reset_password/',
  resetPassword: 'login/reset_password/',
  changePassword: 'login/change_password/',
  userInfo: 'usuarios/user_info/',

  // BENEFICIARIOS
  getBeneficients:'usuarios/retrieve-beneficiary/',
  createBeneficient:'usuarios/create-beneficiary/',
  editBeneficient:'usuarios/update-user/',
  deleteBeneficient:'usuarios/delete-user/',
  
  
}