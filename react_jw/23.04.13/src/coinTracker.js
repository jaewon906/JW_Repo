import { useEffect, useState } from "react";

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(null); // 새로운 상태 추가

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const CoinSearch = (e) => {
    let coinName = e.target.value,
      coin = coins.find((c) => c.name === coinName);
    if (coin) {
      setSelectedCoin(coin); // 선택한 코인을 상태로 저장
    } else {
      setSelectedCoin(null); // 선택한 코인이 없으면 상태를 null로 초기화
    }
  };

  return (
    <>
      <h1>The coins!</h1>
      <input onChange={CoinSearch} placeholder="coin name" />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <h2>number of coins: {coins.length}</h2>
          {selectedCoin && ( // 선택한 코인이 있을 때만 출력
            <div>
              <h3>Selected coin: {selectedCoin.name}</h3>
              <ul>
                <li>
                  Symbol: {selectedCoin.symbol}, Price:{" "}
                  {selectedCoin.quote}
                </li>
              </ul>
            </div>
          )}
          <ul>
            {/* map메소드로 리스트를 렌더링할 때는 key prop을 지정해주어야 한다. 
        왜냐하면 React에서 컴포넌트를 업데이트할 때 가상DOM을 사용하여 렌더링된 결과를 비교한다.
        이때 각각의 요소에 고유한 식별자인 key prop을 제공함으로써 React는 이전과 현재 요소의 차이점
        을 더욱 효과적으로 식별할 수 있다.
        key prop을 사용하여 변경된 요소를 찾을 때 배열의 인덱스를 사용하지 않고 key로 사용하기 때문에
        붙혀줘야한다. 인덱스를 key로 사용하는경우는 예기치 않은 결과가 발생한다. 예를 들어 배열에서 요소의
        위치가 변경되거나 삭제/ 추가되는 경우, 같은 인덱스에 다른 요소가 들어갈 수 있고 이 때 key prop으로
        고유한 식별자를 제공하지 않으면 React는 변경된 요소를 정확하게 식별하지 못하고 잘못된 요소를 업데이트
        하거나 렌더링할 수 있다.*/}
            {coins.map((coin) => (
              <li key={coin.id}>
                {coin.name} ({coin.symbol}) : {coin.quote}
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}


export default CoinTracker;
