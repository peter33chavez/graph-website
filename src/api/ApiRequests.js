export const baseUrl = (target, option) => {
  return !option
    ? `http://prac-app.vigilantioe.com:8081/render/?target=${target}&format=json`
    : `http://prac-app.vigilantioe.com:8081/render/?target=${target}&format=json` +
        option;
};

export const apiTargets = [
  {
    title: "Packet Loss",
    value: "virgil.vigilant-pracapp-01.host.hostalive.perfdata.pl.value",
  },
  {
    title: "Round Trip Average",
    value: "virgil.vigilant-pracapp-01.host.hostalive.perfdata.rta.value",
  },
  {
    title: "Linux CPU Idle",
    value:
      "virgil.vigilant-pracapp-01.services.Linux_CPU.check_nrpe.perfdata.idle.value",
  },
  {
    title: "Linux CPU Iowait",
    value:
      "virgil.vigilant-pracapp-01.services.Linux_CPU.check_nrpe.perfdata.iowait.value",
  },
  {
    title: "Linux CPU Steal",
    value:
      "virgil.vigilant-pracapp-01.services.Linux_CPU.check_nrpe.perfdata.steal.value",
  },
  {
    title: "Linux CPU System",
    value:
      "virgil.vigilant-pracapp-01.services.Linux_CPU.check_nrpe.perfdata.system.value",
  },
  {
    title: "Linux CPU User",
    value:
      "virgil.vigilant-pracapp-01.services.Linux_CPU.check_nrpe.perfdata.user.value",
  },
  {
    title: "Linux Disk",
    value:
      "virgil.vigilant-pracapp-01.services.Linux_Disk.check_nrpe.perfdata._.value",
  },
  {
    title: "Linux Memory Active",
    value:
      "virgil.vigilant-pracapp-01.services.Linux_Memory.check_nrpe.perfdata.Active.value",
  },
  {
    title: "Linux Memory MemCached",
    value:
      "virgil.vigilant-pracapp-01.services.Linux_Memory.check_nrpe.perfdata.MemCached.value",
  },
  {
    title: "Linux Memory MemUsed",
    value:
      "virgil.vigilant-pracapp-01.services.Linux_Memory.check_nrpe.perfdata.MemUsed.value",
  },
  {
    title: "Linux Memory SwapCached",
    value:
      "virgil.vigilant-pracapp-01.services.Linux_Memory.check_nrpe.perfdata.SwapCached.value",
  },
  {
    title: "Linux Memory SwapUsed",
    value:
      "virgil.vigilant-pracapp-01.services.Linux_Memory.check_nrpe.perfdata.SwapUsed.value",
  },
  {
    title: "Linux Network Eth0_rxbyt",
    value:
      "virgil.vigilant-pracapp-01.services.Linux_Network.check_nrpe.perfdata.eth0_rxbyt.value",
  },
  {
    title: "Linux Network Eth0_rxerrs",
    value:
      "virgil.vigilant-pracapp-01.services.Linux_Network.check_nrpe.perfdata.eth0_rxerrs.value",
  },
  {
    title: "Linux Network Eth0_txbyt",
    value:
      "virgil.vigilant-pracapp-01.services.Linux_Network.check_nrpe.perfdata.eth0_txbyt.value",
  },
  {
    title: "Linux Network Eth0_txerrs",
    value:
      "virgil.vigilant-pracapp-01.services.Linux_Network.check_nrpe.perfdata.eth0_txerrs.value",
  },
];
