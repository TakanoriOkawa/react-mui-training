import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import FruitNameField from './mui/FruitNameField'
// Material UI と React Hook Formの組み合わせ


export type FormInput = {
  name: string
  color: string
  shop: string
  inStock: boolean
}

const TextField = () => {
  const {control, handleSubmit, getValues} = useForm<FormInput>();
  
  const printWithData = (data: FormInput) => {
    console.log('data による取り出し =========>')
    const {name, color, shop, inStock} = data
    console.log(`name: ${name}`)
    console.log(`color: ${color}`)
    console.log(`shop: ${shop}`)
    console.log(`inStock: ${inStock}`)
  }


  const printByGetValues = () => {
    console.log('getValues() による取り出し =========>')

    const {name, color, shop, inStock} = getValues()
    console.log(`name: ${name}`)
    console.log(`color: ${color}`)
    console.log(`shop: ${shop}`)
    console.log(`inStock: ${inStock}`)
  }


  const onSubmit: SubmitHandler<FormInput> = (data) => {
    printWithData(data);
    printByGetValues();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FruitNameField control={control}/>
    </form>
  )
}

export default TextField