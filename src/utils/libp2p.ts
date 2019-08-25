const Libp2p = require('libp2p');
//const TCP = require('libp2p-tcp');
const SPDY = require('libp2p-spdy');
const PeerInfo = require('peer-info');
const PeerId = require('peer-id');
const SECIO = require('libp2p-secio');
const KadDHT = require('libp2p-kad-dht');
const Bootstrap = require('libp2p-bootstrap');
//const MulticastDNS = require("libp2p-mdns");
const WebSockets = require('libp2p-websockets');
const FloodSub = require('libp2p-floodsub');
const multiaddr = require('multiaddr');
const WSStar = require('libp2p-websocket-star'); // TODO
const WSStarMulti = require('libp2p-websocket-star-multi')
// libp2p-connection-manager
import { promisify } from 'util';
//const secp256k1 = require('libp2p-crypto-secp256k1');
//import * as crypto from 'libp2p-crypto';

class Bundle extends Libp2p {
  constructor({ peerInfo }: { peerInfo: any }) {
    const ws = new WSStar({ id: peerInfo.id });
    /*const ws = new WSStarMulti({
    servers: [ // servers are Multiaddr[]
      '/dnsaddr/ws-star-signal-1.servep2p.com/tcp/443/wss/p2p-websocket-star',
      '/dnsaddr/ws-star-signal-2.servep2p.com/tcp/443/wss/p2p-websocket-star',
      '/dnsaddr/ws-star-signal-3.servep2p.com/tcp/443/wss/p2p-websocket-star',
      '/dnsaddr/ws-star-signal-4.servep2p.com/tcp/443/wss/p2p-websocket-star',
      '/dnsaddr/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star',
      '/dns4/localhost/tcp/9090/ws/p2p-websocket-star/'
    ],
    // ignore_no_online: true, // enable this to prevent wstar-multi from returning a listen error if no servers are online
    id: peerInfo.id // the id is required for the crypto challenge
  })*/
    super({
      modules: {
        transport: [/*TCP,*/ WebSockets, ws ],
        streamMuxer: [SPDY],
        connEncryption: [SECIO],
        dht: KadDHT,
        peerDiscovery: [/*MulticastDNS,*/ Bootstrap, ws.discovery]
      },
      config: {
        dht: {
          kBucketSize: 20
          /*enabled: true,
          randomWalk: {
              enabled: true
          }*/
        },
        EXPERIMENTAL: {
          dht: true,
          pubsub: true,
          /*relay: {
              enabled: true
          }*/
        },
        /*pubsub: {
          enabled: false
        },*/
        peerDiscovery: {
          autoDial: true,
          webRTCStar: {
            enabled: true
          },
          websocketStar: {
            enabled: true
          },
          bootstrap: {
            interval: 2000,
            enabled: true,
            list: bootstrapList
          },
          mdns: {
            interval: 5000,
            enabled: true
          }
        }
      },
      peerInfo
    });
  }
}

const bootstrapList = [
  /*'/dns4/ams-1.bootstrap.libp2p.io/tcp/443/wss/p2p/QmSoLer265NRgSp2LA3dPaeykiS1J6DifTC88f5uVQKNAd',
  '/dns4/sfo-1.bootstrap.libp2p.io/tcp/443/wss/p2p/QmSoLju6m7xTh3DuokvT3886QRYqxAzb1kShaanJgW36yx',
  '/dns4/lon-1.bootstrap.libp2p.io/tcp/443/wss/p2p/QmSoLMeWqB7YGVLJN3pNLQpmmEk35v6wYtsMGLzSr5QBU3',
  '/dns4/sfo-2.bootstrap.libp2p.io/tcp/443/wss/p2p/QmSoLnSGccFuZQJzRadHn95W2CrSFmZuTdDWP8HXaHca9z',
  '/dns4/sfo-3.bootstrap.libp2p.io/tcp/443/wss/p2p/QmSoLPppuBtQSGwKDZT2M73ULpjvfd3aZ6ha4oFGL1KrGM',
  '/dns4/sgp-1.bootstrap.libp2p.io/tcp/443/wss/p2p/QmSoLSafTMBsPKadTEgaXctDQVcqN88CNLHXMkTNwMKPnu',
  '/dns4/nyc-1.bootstrap.libp2p.io/tcp/443/wss/p2p/QmSoLueR4xBeUbY9WZ9xGUUxunbKWcrNFTDAadQJmocnWm',
  '/dns4/nyc-2.bootstrap.libp2p.io/tcp/443/wss/p2p/QmSoLV4Bbm51jM9C4gDYZQ9Cy3U6aXMJDAbzgu2fzaDs64',
  '/dns4/node0.preload.ipfs.io/tcp/443/wss/p2p/QmZMxNdpMkewiVZLMRxaNxUeZpDUb34pWjZ1kZvsd16Zic',
  '/dns4/node0.preload.ipfs.io/tcp/443/wss/p2p/Qmbut9Ywz9YEDrz8ySBSgWyJk41Uvm2QJPhwDJzJyGFsD6',*/
  '/ip4/0.0.0.0/tcp/0',
  '/dns4/127.0.0.1/tcp/0/ws'
];

export const createNode = async () => {
  const peerID = await PeerId.create({ bits: 2048 });

  const peerInfo = await PeerInfo.create(peerID);
  //peerInfo.multiaddrs.add(`/ip4/127.0.0.1/tcp/15555/ws/p2p-webrtc-star/p2p/${peerInfo.id.toB58String()}`);
  peerInfo.multiaddrs.add('/ip4/0.0.0.0/tcp/0');
  //peerInfo.multiaddrs.add(multiaddr("/dns4/ws-star-signal-1.servep2p.com/tcp/443/wss/p2p-websocket-star/"));
  peerInfo.multiaddrs.add(multiaddr("/dns4/127.0.0.1/tcp/9090/ws/p2p-websocket-star/"));
  //peerInfo.multiaddrs.add(`/dns4/localhost/tcp/9090/ws/p2p-websocket-star/`);
  //peerInfo.multiaddrs.add(multiaddr('/p2p-websocket-star'));
  //peerInfo.multiaddrs.add(multiaddr(`/dns4/localhost/tcp/9090/ws/p2p-websocket-star/`));
  //peerInfo.multiaddrs.add(`/dns4/ws-star.discovery.libp2p.io/wss/p2p-websocket-star/ipfs/${peerInfo.id.toB58String()}`);

   
  const node = new Bundle({ peerInfo });

  node.on('peer:discovery', peer => {
      console.log(peer);
    node.dial(peer, () => {
    });
  });

  node.on('peer:connect', peer => {
    console.log('Connection established to:', peer.id.toB58String());
  });

  node.on('start', () => {
    // console.log('Node started successfully');
  });

  node.handle("mycryptochat/message", (protocol, conn) => {
    pull(
      pull.values(['hello']),
      conn,
      pull.map((s) => s.toString()),
      pull.log()
    )
  })

  console.log('Node is starting...');
  await node.start();
  console.log('Node started!');

  const floodSub = new FloodSub(node);
  const startFloodSub = promisify(floodSub.start).bind(floodSub);
  await startFloodSub();

  floodSub.subscribe('mycryptochat/message');

  /*node.dial(peerInfo, "mycryptochat/message", (err, conn) => {
      if (err) {
        throw err
      }

      pull(
        pull.values(['hello from the other side']),
        conn,
        pull.map((s) => s.toString()),
        pull.log()
      )
    })
*/
  setTimeout(() => {
    floodSub.publish('mycryptochat/message', new Buffer(JSON.stringify({sender: {
          address: '0xE7445017e7202738F7B0094C3A8E90e6797E6BC9'
        },
        content: 'test',
        isSelf: false,
        timestamp: Date.now()
  })))}, 5000);

  return { node, floodSub };
};

/*(async () => {
  const nodes = await Promise.all([createNode(), createNode()]);
  const node1 = nodes[0];
  const node2 = nodes[1];
  const dialProtocol = promisify(node1.dialProtocol).bind(node1);
  const conn1 = await dialProtocol(node2.peerInfo, '/mycrypto/chat/1.0.0');
  pull(pull.values(['protocol (a)']), conn1);
  const conn2 = await dialProtocol(node2.peerInfo, '/mycrypto/chat/1.0.0');
  pull(pull.values(['protocol (b)']), conn2);
  const conn3 = await dialProtocol(node2.peerInfo, '/mycrypto/chat/1.0.0');
  pull(pull.values(['another conn on protocol (b)']), conn3);
})();*/
