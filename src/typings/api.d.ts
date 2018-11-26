
declare namespace API {

  interface User {
    email: string;
    group_tag: string;
  }

  interface DataSocks {
    user: string;
    pass: string;
  }

  interface DataSs {
    method: 'aes-256-cfb' | 'aes-128-cfb' | 'chacha20' | 'chacha20-ietf' | 'aes-256-gcm' | 'aes-128-gcm' | 'chacha20-poly1305';
    password: string
  }

  interface Group {
    port: number;
    stream_type: 'wireguard' | 'dtls' | 'wechat' | 'utp' | 'srtp' | 'mtproto' | 'socks' | 'ss';
    data?: any;
  }

  interface ConfigGlobal {
    modify_type: 'ban_bittorrent' | 'stats';
    value: boolean;
  }

  interface ConfigUser {
    modify_type: 'email' |'aid' | 'uuid'
    value: string
  }

  interface ConfigTransportProtocol {
    stream_type: 'tcp' | 'tcp_host' | 'socks' | 'ss' | 'mtproto' | 'h2' | 'ws' | 'kcp' | 'utp' | 'srtp' | 'dtls' | 'wechat' | 'wireguard'
    data?: any
  }
}
