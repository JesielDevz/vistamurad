import styled from "styled-components";

const DexScreenerEmbed = styled.div`
  width: 100%;
  padding: 5rem 1.5rem; /* margem interna */
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Mantém a proporção do gráfico */
  aspect-ratio: 16 / 20;

  @media (min-width: 600px) {
    aspect-ratio: 16 / 10;
    padding: 1.5rem 15rem;
  }

  @media (min-width: 1400px) {
    aspect-ratio: 16 / 7;
    padding: 1.5rem 20rem ;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 12px; /* opcional */
    background: transparent;
    box-shadow: 0 2px 8px rgba(0,0,0,0.07); /* opcional */
  }
`;

const DEXSCREENER_URL =
  "https://dexscreener.com/ethereum/0xfdd05552F1377aA488AFed744c8024358AF02041?embed=1&loadChartSettings=0&trades=0&info=0&chartLeftToolbar=0&chartDefaultOnMobile=1&chartTheme=dark&theme=dark&chartStyle=1&chartType=usd&interval=15";

const DexScreenerChart = () => (
  <div id="chart">
    <h2 style={{
      textAlign: "center",
      color: "#fff",
      fontWeight: "bold",
      fontSize: "1.5rem",
      marginBottom: "1.5rem"
    }}>
      Want to track your investment in real time?
    </h2>
    <DexScreenerEmbed>
      <iframe
        src={DEXSCREENER_URL}
        title="DexScreener Chart"
        allowFullScreen
        loading="lazy"
      />
    </DexScreenerEmbed>
  </div>
);

export default DexScreenerChart;
