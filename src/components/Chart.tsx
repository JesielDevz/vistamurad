import styled from "styled-components";

const DexScreenerEmbed = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 125%;
  @media (min-width: 1400px) {
    padding-bottom: 65%;
  }
  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border: 0;
  }
`;

const DEXSCREENER_URL =
  "https://dexscreener.com/ethereum/0xfdd05552F1377aA488AFed744c8024358AF02041?embed=1&loadChartSettings=0&trades=0&info=0&chartLeftToolbar=0&chartDefaultOnMobile=1&chartTheme=dark&theme=dark&chartStyle=1&chartType=usd&interval=15";

const DexScreenerChart = () => (
  <DexScreenerEmbed id="dexscreener-embed">
    <iframe
      src={DEXSCREENER_URL}
      title="DexScreener Chart"
      allowFullScreen
      loading="lazy"
    />
  </DexScreenerEmbed>
);

export default DexScreenerChart;
