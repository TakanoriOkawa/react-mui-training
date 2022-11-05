// MUIに必要なの、
// Controllerコンポーネントに必要なprops(name, control, render,defaultValue)
import { Control,Controller } from "react-hook-form"
import TextField from "@mui/material/TextField";
import {FormInput} from "../TextField"

type Props = {
  control: Control<FormInput>
}

const FruitNameField = ({control}: Props) => {
  return (
    <>
    <Controller
      // controlはControl型出ないとエラーになる
      control={control}
      name="name"
      defaultValue={""}
      rules={{required: {value: true, message: '入力必須です'}}}
      // renderの中にMUIコンポーンネント
      render={({field, fieldState: {error}}) => (
        // undefinedがないことを示す!とbooleanを逆にする!の二つ。
        // MUIのerror表記とhelperTextをerrorの中身があるときに表示させる
        <TextField {...field} label="品種名" error={!!error?.message} helperText={error?.message} />
      )}
    />
    </>
  )
}

export default FruitNameField