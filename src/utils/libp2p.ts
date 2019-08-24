const Libp2p = require('libp2p');
//const TCP = require('libp2p-tcp');
const SPDY = require('libp2p-spdy');
const PeerInfo = require('peer-info');
const PeerId = require('peer-id');
const SECIO = require('libp2p-secio');
const KadDHT = require('libp2p-kad-dht');
const pull = require('pull-stream');
const Bootstrap = require('libp2p-bootstrap');
//const MulticastDNS = require("libp2p-mdns");
const WebSockets = require('libp2p-websockets');
const FloodSub = require('libp2p-floodsub');
//const WSStar = require('libp2p-websocket-star'); // TODO
// libp2p-connection-manager
import { promisify } from 'util';
//const secp256k1 = require('libp2p-crypto-secp256k1');
//import * as crypto from 'libp2p-crypto';

class Bundle extends Libp2p {
  constructor ({ peerInfo }: { peerInfo: any }) {
    super({
      modules: {
        transport: [ /*TCP,*/ WebSockets],
          streamMuxer: [SPDY],
          connEncryption: [SECIO],
          dht: KadDHT,
          peerDiscovery: [ /*MulticastDNS,*/ Bootstrap]
      },
      config: {
        dht: {
          kBucketSize: 20
        },
        EXPERIMENTAL: {
          dht: true,
            pubsub: true
        },
        peerDiscovery: {
          bootstrap: {
            interval: 5000,
              enabled: true,
              list: [
              '/ip4/0.0.0.0/tcp/0'
            ]
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

export const createNode = async () => {
  const peerID = await PeerId.create({ bits: 2048 });

  console.log('y');
  console.log(peerID);

  //const createPeer = promisify(PeerInfo.create);
  const peerInfo = await PeerInfo.create(peerID);
  console.log(peerInfo);
  //peerInfo.multiaddrs.add('/ip4/0.0.0.0/tcp/0');

  const node = new Bundle({ peerInfo });
  console.log(node);

  node.on('peer:discovery', (peer) => {
    console.log(peer);
    console.log('Discovered:', peer.id.toB58String());
    node.dial(peer, () => {
    });
  });

  node.on('peer:connect', (peer) => {
    console.log('Connection established to:', peer.id.toB58String());
  });

  node.handle('/mycrypto/chat/1.0.0', (protocol, conn) => {
    pull(
      conn,
      pull.map((v) => v.toString()),
      pull.log(),
      pull.collect((err, array) => {
        console.log(array);
      })
    );
  });

  const start = promisify(node.start).bind(node);
  await start();

  const floodSub = new FloodSub(node);
  const startFloodSub = promisify(floodSub.start).bind(floodSub);
  await startFloodSub();

  floodSub.on('message', (message) => {
    console.log(message.from, message.data.toString());
  });

  floodSub.on('join/mycryptochat', (message) => {
    //signed by user
    //pow verify
  });

  floodSub.subscribe('message');
  floodSub.subscribe('join/mycryptochat');

  return node;
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
