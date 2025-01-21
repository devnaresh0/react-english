import { useEffect, useState } from "react";
function useCurrencyInfo(curruncy) {
 const [amount,setAmount] = useState(0)
 const [from, setFrom] = useState('usd')
 const [to,setTo] = useState('inr')
 const [convertedAmount, setConvertedAmount] = useState(0)
 const curruncyInfo = useCurrencyInfo(from)
 const options = Object.keys(curruncyInfo)
 const covnert = () => {
  setConvertedAmount(amount*curruncyInfo[to]);
  

 }
 const swap = () => {
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)


 }
  useEffect(() => {
    fetch(
      "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{curruncy}.json"
    )
      .then((res) => res.json())
      .then((res) => setData(res[usd]));
  }, [curruncy]);
  console.log(data);

  return data;
}
export default useCurrencyInfo;
