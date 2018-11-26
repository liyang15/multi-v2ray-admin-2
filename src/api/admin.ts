import { get, post, del, put } from '../utils/axios';

export default {
  // 获取节点列表
  getServiceList: () => get('/list'),

  // 获取类常量
  getConstType: (type: string) => get(`/collection/${type}`),

  // 新增用户
  addUser: (user: API.User) => post('/user', user),

  // 新增组
  addGroup: (group: API.Group) => post('/group', group),

  // 管理v2ray
  manageV2ray: (action: 'start' | 'stop' | 'restart') => post(`/manage/${action}`),

  // 删除用户
  delUser: (userNumber: number) => del(`/user/${userNumber}`),

  // 删除组
  delGroup: (groupTag: string) => del(`/group/${groupTag}`),

  // 修改全局配置
  updateGlobal: (data: API.ConfigGlobal) => put('/global', data),

  // 修改组传输协议
  updateGroupTransportProtocol: (groupTag: string, data: API.ConfigTransportProtocol) => put(`/stream/${groupTag}`, data),

  // 修改组配置
  updateGroupConfig: (groupTag: string, data: any) => put(`/group/${groupTag}`, data),

  // 修改用户配置
  updateUserConfig: (userNumber: number, data: API.ConfigUser) => put(`/user/${userNumber}`, data),

};
