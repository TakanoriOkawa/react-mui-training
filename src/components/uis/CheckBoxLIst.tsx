import { FormControl, InputLabel, FormHelperText ,Input } from "@mui/material";
import { useState } from "react"
import { FieldValue, useForm } from "react-hook-form";

// データ群
const checkLists = [
  "パン",
  "ご飯",
  "うどん",
  "ラーメン",
  "そうめん",
]

type CheckBoxes = {
  gender: string,
  food:string
}

const CheckBoxLIst = () => {
  const [submitData, setSubmitData] = useState<string>("");
  const defaultCheckValues = ["B"];
  // ジェネリクスは、フォームで管理する名前と型を定義する
  const {formState: {errors}, control, watch, handleSubmit,register, getValues } = useForm<CheckBoxes>({})
  // getValuesはwatchと同じことが出来るが、getValuesは再レンダリングのチリガーや入力の変更は
  // watchは値の監視 true/false
  console.log(watch("food")); // boolean

  const onSubmit = (data:CheckBoxes) => {
    console.log(data)
    console.log(getValues("food"))
    // オブジェクトで値を取れる。
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl  color="info">
        <InputLabel htmlFor="my-input">Email</InputLabel>
        {/* <Input id="my-input"></Input> */}
        <Input></Input>
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

    {/* <label>
      <input type="checkbox" {...register("food", {required: true})}/>ラーメン
    </label> */}
    <input type="submit" value="決定" />
    {errors.food && <span>チェックは必須です！</span>}
  </form>

  )
}

export default CheckBoxLIst