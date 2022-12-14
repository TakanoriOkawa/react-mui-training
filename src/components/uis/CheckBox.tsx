import { useForm } from "react-hook-form"


const CheckBox = () => {
  // registerメソッドを使って、個々の入力をフックに登録する
  const { register, handleSubmit, formState: {errors} } = useForm();
  return (
    <>
    <form onSubmit={handleSubmit((data) => {
      console.log(data)
      console.log("errorです", errors.name)
    })}>
      <input defaultValue="初期値です" {...register("name" , {required: true})} type="text" placeholder="名前を入力してください。"/>
      { errors.name && <span>名前を入力してください。</span> }
      <input type="submit" />
    </form>
    </>
  )
}

export default CheckBox