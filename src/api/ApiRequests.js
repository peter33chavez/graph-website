export const baseUrl = (target, option) => {
  return !option
    ? `http://prac-app.vigilantioe.com:8081/render/?target=${target}&format=json`
    : `http://prac-app.vigilantioe.com:8081/render/?target=${target}&format=json` +
        option;
};

export const apiTargets = [
  {
    label: "Packet Loss",
    value: "virgil.vigilant-pracapp-01.host.hostalive.perfdata.pl.value",
  },
  {
    label: "Round Trip Average",
    value: "virgil.vigilant-pracapp-01.host.hostalive.perfdata.rta.value",
  },
  {
    label: "Linux CPU Idle",
    value:
      "virgil.vigilant-pracapp-01.services.Linux_CPU.check_nrpe.perfdata.idle.value",
  },
  {
    label: "Linux CPU Iowait",
    value:
      "virgil.vigilant-pracapp-01.services.Linux_CPU.check_nrpe.perfdata.iowait.value",
  },
  {
    label: "Linux CPU Steal",
    value:
      "virgil.vigilant-pracapp-01.services.Linux_CPU.check_nrpe.perfdata.steal.value",
  },
  {
    label: "Linux CPU System",
    value:
      "virgil.vigilant-pracapp-01.services.Linux_CPU.check_nrpe.perfdata.system.value",
  },
  {
    label: "Linux CPU User",
    value:
      "virgil.vigilant-pracapp-01.services.Linux_CPU.check_nrpe.perfdata.user.value",
  },
  {
    label: "Linux Disk",
    value:
      "virgil.vigilant-pracapp-01.services.Linux_Disk.check_nrpe.perfdata._.value",
  },
  {
    label: "Linux Memory Active",
    value:
      "virgil.vigilant-pracapp-01.services.Linux_Memory.check_nrpe.perfdata.Active.value",
  },
  {
    label: "Linux Memory MemCached",
    value:
      "virgil.vigilant-pracapp-01.services.Linux_Memory.check_nrpe.perfdata.MemCached.value",
  },
  {
    label: "Linux Memory MemUsed",
    value:
      "virgil.vigilant-pracapp-01.services.Linux_Memory.check_nrpe.perfdata.MemUsed.value",
  },
  {
    label: "Linux Memory SwapCached",
    value:
      "virgil.vigilant-pracapp-01.services.Linux_Memory.check_nrpe.perfdata.SwapCached.value",
  },
  {
    label: "Linux Memory SwapUsed",
    value:
      "virgil.vigilant-pracapp-01.services.Linux_Memory.check_nrpe.perfdata.SwapUsed.value",
  },
  {
    label: "Linux Network Eth0_rxbyt",
    value:
      "virgil.vigilant-pracapp-01.services.Linux_Network.check_nrpe.perfdata.eth0_rxbyt.value",
  },
  {
    label: "Linux Network Eth0_rxerrs",
    value:
      "virgil.vigilant-pracapp-01.services.Linux_Network.check_nrpe.perfdata.eth0_rxerrs.value",
  },
  {
    label: "Linux Network Eth0_txbyt",
    value:
      "virgil.vigilant-pracapp-01.services.Linux_Network.check_nrpe.perfdata.eth0_txbyt.value",
  },
  {
    label: "Linux Network Eth0_txerrs",
    value:
      "virgil.vigilant-pracapp-01.services.Linux_Network.check_nrpe.perfdata.eth0_txerrs.value",
  },
];
