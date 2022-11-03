import { useState } from "react"

// データ群
const checkLists = [
  "パン",
  "ご飯",
  "うどん",
  "ラーメン",
  "そうめん",
]

const CheckBoxLIst = () => {
  const [submitData, setSubmitData] = useState<string>("");
  const defaultCheckValues = ["B"];

  

  return (
    <div>CheckBoxLIst</div>
  )
}

export default CheckBoxLIst