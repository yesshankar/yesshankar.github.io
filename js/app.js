let app = new Vue({
  el: "#work",
  data: {
    projects: [
      {
        href: "https://skhatri.xyz/24hr-stats/",
        src: "images/thumb-24hr-stats.JPG",
        title: "Crypto 24hr Stats",
        summary:
          "Realtime 24 hour status of cryptocurrency assets from Coinbase Pro exchange in the form of heatmap.",
        techs: ["Vue JS", "Websocket", "Javascript", "HTML", "CSS"]
      },
      {
        href: "https://skhatri.xyz/my-tube/",
        src: "images/thumb-my-tube.JPG",
        title: "My Tube",
        summary:
          "Youtube clone web app where you can search and watch youtube videos.",
        techs: [
          "React JS",
          "Node JS",
          "Express",
          "Javascript",
          "Bootstrap",
          "HTML",
          "CSS"
        ]
      },
      {
        href: "https://github.com/yesshankar/PrivateBlockchain",
        src: "images/thumb-private-blockchain.JPG",
        title: "Private Blockchain",
        summary: "A private blockchain with Notary Service.",
        techs: [
          "RESTful API",
          "Node JS",
          "Express",
          "Javascript",
          "HTML",
          "CSS"
        ]
      },
      {
        href: "https://github.com/yesshankar/SmartContract1",
        src: "images/thumb-smart-contract1.JPG",
        title: "Smart Contract",
        summary:
          "Ethereum Smart Contract based on ERC721 Non-Fungible Token Standard basic implementation.",
        techs: ["Node JS", "Express", "Javascript", "HTML", "CSS"]
      },
      {
        href: "https://skhatri.xyz/all-charts/",
        src: "images/thumb-all-charts.JPG",
        title: "Multiple Crypto Charts",
        summary:
          "View multiple charts of cryptocurrency from different exchanges in single page using TradingView widgets.",
        techs: ["Javascript", "HTML", "CSS"]
      },
      {
        href: "https://skhatri.xyz/foodar/",
        src: "images/thumb-foodar.JPG",
        title: "Foodar",
        summary:
          "Fully Responsive website without using any CSS libaray. Food request service website.",
        techs: ["Javascript", "HTML", "CSS"]
      },
      {
        href: "http://homepages.neiu.edu/~skhatri/tictactoe4.html",
        src: "images/thumb-tictactoe.JPG",
        title: "Tic Tac Toe",
        summary: "Tic Tac Toe game made during my university time.",
        techs: ["Javascript", "HTML", "CSS"]
      }
    ]
  }
});
